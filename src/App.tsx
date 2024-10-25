import { useEffect, useState } from 'react'


import './App.css'
import Header from './Components/header'

import { getCalendarEvents } from './api'
import { AllCalendarId, CalendarEvent, HighSchoolCalendarId, MiddleSchoolCalendarId, PrayerRequest, Question, YoungAdultCalendarId, YouthInfo } from './constants'

import PrayerRequestTile from './Components/Tiles/prayer_request_tile'
import QuestionTile from './Components/Tiles/question_tile'
import BottomHeader from './Components/bottom_header'

import TitleSection from './Components/Sections/title_section'


import WhenWhereSection from './Components/Sections/when_where_section'
import EventSection from './Components/Sections/event_section'
import QuestionsSection from './Components/Sections/questions_section'
import PrayersSection from './Components/Sections/prayers_section'
import { getYouthInfo } from './Firebase/db'

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

  const [youthInfo, setYouthInfo] = useState<YouthInfo | null>(null)

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  useEffect(() => {
    getYouthInfo().then((info) => {
      setYouthInfo(info)
      setQuestions(info.questions)
      console.log(info)
      const formattedPrayerRequests: PrayerRequest[] = [];
      let sideI = 0;
      let sides = ["left", "right", "middle"]
      let visible = 0;
      for(let i = 0; i < info.prayerRequests.length; i++){
        let top = 0;
        let left = 0;
        if(visible < 3){
          if(sides[sideI] === "left"){
            top = 30
            left = 10
            if(isMobile){
              top = 80
              left = 10
            }
          } else if(sides[sideI] === "right"){
            top = 150
            left = 80
            if(isMobile){
              top = 300
              left = 10
            }
          } else {
            top = 100
            left = 40
            if(isMobile){
              top = 200
              left = 10
            }
          }
        }
        formattedPrayerRequests.push({
          request: info.prayerRequests[i].request,
          side: sides[sideI] as "left" | "right" | "middle",
          visible: visible < 3,
          top: top,
          left: left,
          id: i.toString()
        })
        sideI = (sideI + 1) % 3
        visible++;
      }
      console.log(formattedPrayerRequests)
      setPrayerRequests(formattedPrayerRequests)
    })

    const handleResize = () => {
      if (window.innerWidth < 800) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
  }
  window.addEventListener('resize', handleResize)
  let isMobile = window.innerWidth < 800
  handleResize()
  async function getCalendarsEvents() {
    const allEvents = await getCalendarEvents(AllCalendarId)
    const highSchoolEvents = (await getCalendarEvents(HighSchoolCalendarId)).map((event) => {
      return {
        ...event,
        type: "High School"
      }
    })
    const middleSchoolEvents = (await getCalendarEvents(MiddleSchoolCalendarId)).map((event) => {
      return {
        ...event,
        type: "Middle School"
      }
    })

    const youngAdultEvents = (await getCalendarEvents(YoungAdultCalendarId)).map((event) => {
      return {
        ...event,
        type: "Young Adults"
      }
    })

    const combinedEvents = [...allEvents, ...highSchoolEvents, ...middleSchoolEvents, ...youngAdultEvents]
    combinedEvents.sort((a, b) => {
      return a.start.getTime() - b.start.getTime()
    })

    setEvents(combinedEvents)
  }
  getCalendarsEvents()
    

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
             //Set top from 80 to 120
              request.top = randomIntFromInterval(80, 120)
              //Set left from 0 to 80
              request.left = randomIntFromInterval(0, 50)

            }
          } else if(request.side === "right"){
            request.top = Math.random() * 150
            request.left = 80 - Math.random() * 10
            if(isMobile) {
              //top from 200 to 280
              request.top = randomIntFromInterval(300, 360)
              //left from 10 to 90
              request.left = randomIntFromInterval(0, 50)
              // request.request = "Mobile Request"

            }

          } else {
            //top from 10 to 90
            request.top = 50 +Math.random() * 190
            request.left = 45 - Math.random() * 10
            if(isMobile) {
              //top from 320 to 400
              request.top = randomIntFromInterval(190, 240)
              //left from 10 to 90
              request.left = randomIntFromInterval(0, 50)

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
        <TitleSection title="Youth Group" description="Our Youth Groups are designed with students in mind, talking about real issues and applying Scripture in their everyday lives."/>
        <WhenWhereSection type='All'/>
        <EventSection events={events} calendarType='All'/>
        <PrayersSection requests={prayerRequests}/>
        <QuestionsSection questions={questions} />
      </div>
      {isMobile && <div className="mobile-footer"/>
      }
        {isMobile && <BottomHeader location=''/>}
    </>
  )
}

export default App
