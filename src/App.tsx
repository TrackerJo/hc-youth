import { useEffect, useState } from 'react'


import './App.css'
import Header from './Components/header'
import Slideshow from './Components/slideshow'
import { getCalendarEvents } from './api'
import { CalendarEvent, HighSchoolCalendarId, PrayerRequest, Question } from './constants'
import CalendarEventTile from './Components/calendar_event_tile'
import PrayerRequestTile from './Components/prayer_request_tile'
import QuestionTile from './Components/question_tile'
import BottomHeader from './Components/bottom_header'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [events, setEvents] = useState<CalendarEvent[]>([])

  const [questions, setQuestions] = useState<Question[]>([
    {
      question: "What is the meaning of life?",
      answer: "The meaning of life is to love and serve God"
    },
    {
      question: "What is the purpose of the church?",
      answer: "The purpose of the church is to spread the gospel and make disciples"
    },
    {
      question: "What is the purpose of prayer?",
      answer: "The purpose of prayer is to communicate with God and grow closer to Him"
    },
    {
      question: "What is the meaning of life?",
      answer: "The meaning of life is to love and serve God"
    },
    {
      question: "What is the purpose of the church?",
      answer: "The purpose of the church is to spread the gospel and make disciples"
    },
    {
      question: "What is the purpose of prayer?",
      answer: "The purpose of prayer is to communicate with God and grow closer to Him"
    },
    {
      question: "What is the meaning of life?",
      answer: "The meaning of life is to love and serve God"
    },
    {
      question: "What is the purpose of the church?",
      answer: "The purpose of the church is to spread the gospel and make disciples"
    },
    {
      question: "What is the purpose of prayer?",
      answer: "The purpose of prayer is to communicate with God and grow closer to Him"
    },
    {
      question: "What is the meaning of life?",
      answer: "The meaning of life is to love and serve God"
    },
    {
      question: "What is the purpose of the church?",
      answer: "The purpose of the church is to spread the gospel and make disciples"
    },
    {
      question: "What is the purpose of prayer?",
      answer: "The purpose of prayer is to communicate with God and grow closer to Him"
    },
    {
      question: "What is the meaning of life?",
      answer: "The meaning of life is to love and serve God"
    },
    {
      question: "What is the purpose of the church?",
      answer: "The purpose of the church is to spread the gospel and make disciples"
    },
    {
      question: "What is the purpose of prayer?",
      answer: "The purpose of prayer is to communicate with God and grow closer to Him"
    },
  ])
  const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>([
    {
      request: "Please pray for my family as we go through a difficult time",
      side: "left",
      visible: false,
      top: 0,
      left: 0,
      id: "4"
    },
    {
      request: "Please pray for my friend who is sick",
      side: "right",
      visible: false,
      top: 0,
      left: 0,
      id: "5"
    },
    {
      request: "Please pray for my school as we go through a difficult time",
      side: "middle",
      visible: false,
      top: 0,
      left: 0,
      id: "3"
    },
    {
      request: "Please pray for my friends as they are going through a difficult time",
      side: "middle",
      visible: true,
      top: 100,
      left: 40,
      id: "2"
    },
    {
      request: "Please help me with my schoolwork",
      side: "left",
      visible: true,
      top: 30,
      left: 10,
      id: "1"

    },
    {
      request: "Please help with the world as we go through a difficult time",
      side: "right",
      visible: true,
      top: 150,
      left: 80,
      id: "6"
    }
  ])

  useEffect(() => {
    console.log(import.meta.env.VITE_API_KEY)
    const handleResize = () => {
      if (window.innerWidth < 800) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
  }
  window.addEventListener('resize', handleResize)
  handleResize()
    getCalendarEvents(HighSchoolCalendarId).then(data => {
      console.log(data)
      setEvents((oldData) => {
        const formattedData = data.map((event) => {
          return {
            ...event,
            type: "High School"
          }
        })
        return [...formattedData]
      })
    })

    //Set three random prayer requests to visible and the rest to invisible, and set their random positions based on their side every 5 seconds
    setInterval(() => {
      setPrayerRequests((oldData) => {
        //get three current shown requests and set them to invisible
        const shownRequests = oldData.filter((request) => request.visible === true)
        const possibleRequests = oldData.filter((request) => request.visible === false)
        shownRequests.forEach((request) => {
          request.visible = false
        })
        //get three random requests and set them to visible
        possibleRequests.sort(() => Math.random() - 0.5)
        const newRequests = shownRequests.concat(possibleRequests.slice(0, 3).map((request) => {
          request.visible = true
          if(request.side === "left"){
            //random number between 0 and 10
            //max top is 20
            request.top = Math.random() * 150

            request.left = Math.random() * 10
            if(isMobile) {
              //top from 10 to 20
              request.top = 50 + Math.random() * 80
              //left from 10 to 90
              request.left = 5 + Math.random() * 50

            }
          } else if(request.side === "right"){
            request.top = Math.random() * 150
            request.left = 80 - Math.random() * 10
            if(isMobile) {
              //top from 10 to 20
              request.top = 120 + Math.random() * 130
              //left from 10 to 90
              request.left = 40 + Math.random() * 60
              // request.request = "Mobile Request"

            }

          } else {
            //top from 10 to 90
            request.top = 50 +Math.random() * 190
            request.left = 45 - Math.random() * 10
            if(isMobile) {
              //top from 10 to 20
              request.top = 180 + Math.random() * 190
              //left from 10 to 90
              request.left = 10 + Math.random() * 60

            }
          }
          return request
        })
        )
        
        return [...oldData]
      })


    }, 5000)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {!isMobile && <Header /> }
      <div className="content">
        <div className='title-section'>
          
          <div className='title-div'>
            <h2>Holy Cross Youth Group</h2>
            <p>Our Youth Groups are designed with students in mind, talking about real issues and applying Scripture in their everyday lives.</p>
          </div>

          <Slideshow />
        </div>
        <div className='where-section'>
        <div className='times'>
            <h2>When</h2>
            <div>
                <h3>High School</h3>
                <p>Sundays<br/>7:00-8:15pm</p>
                <button>More Info</button>
            </div>
            <div>
                <h3>Middle School</h3>
                <p>1st & 3rd Sundays<br/>5:00-6:00pm</p>
                <button>More Info</button>
            </div>
            <div>
                <h3>Young Adults</h3>
                <p>Wednesdays<br/>4:00-5:15pm</p>
                <button>More Info</button>
            </div>
          </div>
          <div className='location'>
            
          <h2>Where</h2>


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.533884756573!2d-85.11606616960097!3d41.1078769238141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815e3007a45a663%3A0xb78cdd5a75a5e979!2sHoly%20Cross%20Youth%20Center!5e0!3m2!1sen!2sus!4v1729710413782!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          
              
        </div>
        <div className='event-section'>
          <h2>Upcoming Events</h2>
          <div className='events'>
            {events.map((event) => {
              return (
                <CalendarEventTile event={event} />
              )
            })}
          </div>  
          
        </div>
        <div className='prayers-section'>
            <h2>Prayers</h2>
            {/* <div className='prayers'> */}
              {prayerRequests.map((prayerRequest) => {
                

                return (
                <PrayerRequestTile request={prayerRequest} top={prayerRequest.top} left={prayerRequest.left} />
                )
              })}
            {/* </div> */}
            

        </div>
        <div className='questions-section'>
          <h2>Questions</h2>
          <div className='questions'>
            {questions.map((question) => {
              return (
                <QuestionTile question={question} />
              )
            })}
          </div>
        </div>
      </div>
      {isMobile && <div className="mobile-footer"/>
      }
        {isMobile && <BottomHeader />}
    </>
  )
}

export default App
