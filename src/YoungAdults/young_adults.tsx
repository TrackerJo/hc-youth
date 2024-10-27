import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from '../Components/Headers/header'
import BottomHeader from '../Components/Headers/bottom_header'
import Slideshow from '../Components/slideshow'

import "./young_adults.css"
import CalendarEventTile from '../Components/Tiles/calendar_event_tile'
import { CalendarEvent, Newsletter, YoungAdultCalendarId, YoungAdultsInfo } from '../constants'
import { getCalendarEvents } from '../api'
import NewsletterSection from '../Components/Sections/newsletter_section'
import EventsSection from '../Components/Sections/events_section'
import TitleSection from '../Components/Sections/title_section'
import WhenWhereSection from '../Components/Sections/when_where_section'
import PastNewslettersSection from '../Components/Sections/past_newsletters_section'
import {  getYoungAdultsInfo } from '../Firebase/db'
import TeamSection from '../Components/Sections/team_section'
import MoreInfoSection from '../Components/Sections/more_info_section'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App(){
    const [isMobile, setIsMobile] = useState(false)
    const [events, setEvents] = useState<CalendarEvent[]>([])
   
    const [youngAdultInfo, setYoungAdultInfo] = useState<null | YoungAdultsInfo>(null)

    useEffect(() => {
        getCalendarEvents(YoungAdultCalendarId).then(data => {
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
        
        getYoungAdultsInfo().then(data => {
            setYoungAdultInfo(data)
        })
    }, [])

    useEffect(() => {
        const url = new URL(window.location.href)
        const section = url.hash
        console.log(section)
        if(section !== ""){
            const element = document.querySelector(section)
            if(element){
                setTimeout(() => {
                    element.scrollIntoView()
                    if(section != "#team" ){
                        // Scroll a little bit less to account for sticky header
                        window.scrollBy(0, -100)
                    }
                }, 500)
            }
        }
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
                <TitleSection title='Young Adults' description='Our Young Adult Group is a place for young adults to connect with others and grow in their faith.'/>
                <WhenWhereSection type='YoungAdults' youngAdultsTiming={youngAdultInfo?.youngAdultTiming ?? {time: "", day: ""}} highSchoolTiming={{time: "", day: ""}} middleSchoolTiming={{time: "", day: ""}}/>
                <EventsSection events={events} calendarType='YoungAdults'/>
                <NewsletterSection type="YoungAdults"/>
                <PastNewslettersSection newsletters={youngAdultInfo?.pastNewsletters ?? []} type='YoungAdults'/>
                <MoreInfoSection moreInfos={youngAdultInfo?.moreInfo ?? []}/>
                <TeamSection teamMembers={youngAdultInfo?.teamMembers ?? []}/>

            </div>
            {isMobile && <div className="mobile-footer"/>}
            {isMobile && <BottomHeader  location='YoungAdults'/>}
        </>
    )
}

export default App