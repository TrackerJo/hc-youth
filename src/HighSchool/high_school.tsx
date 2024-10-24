import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from '../Components/header'
import BottomHeader from '../Components/bottom_header'
import Slideshow from '../Components/slideshow'

import "./high_school.css"
import CalendarEventTile from '../Components/calendar_event_tile'
import { CalendarEvent, HighSchoolCalendarId } from '../constants'
import { getCalendarEvents } from '../api'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App(){
    const [isMobile, setIsMobile] = useState(false)
    const [events, setEvents] = useState<CalendarEvent[]>([])

    useEffect(() => {
        getCalendarEvents(HighSchoolCalendarId).then(data => {
            console.log(data)
            setEvents((oldData) => {
              const formattedData = data.map((event) => {
                return {
                  ...event,
                  type: ""
                }
              })
              return [...formattedData]
            })
          })
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <>
            {!isMobile && <Header />}
            <div className='content'>
                <div className='title-section'>
            
                    <div className='title-div'>
                        <h2>High School Youth Group</h2>
                        <p>Our Youth Groups are designed with students in mind, talking about real issues and applying Scripture in their everyday lives.</p>
                    </div>

                    <Slideshow />
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

            </div>
            {isMobile && <div className="mobile-footer"/>}
            {isMobile && <BottomHeader />}
        </>
    )
}

export default App