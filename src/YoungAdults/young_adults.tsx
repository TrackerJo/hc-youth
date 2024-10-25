import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from '../Components/header'
import BottomHeader from '../Components/bottom_header'
import Slideshow from '../Components/slideshow'

import "./young_adults.css"
import CalendarEventTile from '../Components/Tiles/calendar_event_tile'
import { CalendarEvent, Newsletter, YoungAdultCalendarId, YoungAdultInfo } from '../constants'
import { getCalendarEvents } from '../api'
import NewsletterSection from '../Components/Sections/newsletter_section'
import EventSection from '../Components/Sections/event_section'
import TitleSection from '../Components/Sections/title_section'
import WhenWhereSection from '../Components/Sections/when_where_section'
import PastNewslettersSection from '../Components/Sections/past_newsletters_section'
import { getPastNewsletters, getYoungAdultInfo } from '../Firebase/db'
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
    const [newsletters, setNewsletters] = useState<Newsletter[]>([
        {
            title: "January 2021 Newsletter",
            link: "https://example.com",
            date: new Date(2021, 0, 1)
        }
    ])
    const [youngAdultInfo, setYoungAdultInfo] = useState<null | YoungAdultInfo>(null)

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
          getPastNewsletters('YoungAdults').then(data => {
            setNewsletters(data)
        })
        getYoungAdultInfo().then(data => {
            setYoungAdultInfo(data)
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
                <TitleSection title='Young Adults' description='Our Young Adult Group is a place for young adults to connect with others and grow in their faith.'/>
                <WhenWhereSection type='YoungAdults'/>
                <EventSection events={events} calendarType='YoungAdults'/>
                <NewsletterSection type="YoungAdults"/>
                <PastNewslettersSection newsletters={newsletters}/>
                <MoreInfoSection moreInfos={youngAdultInfo?.moreInfo ?? []}/>
                <TeamSection teamMembers={youngAdultInfo?.teamMembers ?? []}/>

            </div>
            {isMobile && <div className="mobile-footer"/>}
            {isMobile && <BottomHeader  location='YoungAdults'/>}
        </>
    )
}

export default App