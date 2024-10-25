import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from '../Components/header'
import BottomHeader from '../Components/bottom_header'
import Slideshow from '../Components/slideshow'

import "./high_school.css"
import CalendarEventTile from '../Components/calendar_event_tile'
import { CalendarEvent, HighSchoolCalendarId, HighSchoolInfo, Newsletter } from '../constants'
import { getCalendarEvents } from '../api'
import EventSection from '../Components/Sections/event_section'
import NewsletterSection from '../Components/Sections/newsletter_section'
import TitleSection from '../Components/Sections/title_section'
import WhenWhereSection from '../Components/Sections/when_where_section'
import PastNewslettersSection from '../Components/Sections/past_newsletters_section'
import { getHighSchoolInfo, getPastNewsletters } from '../Firebase/db'
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

    const [highSchoolInfo, setHighSchoolInfo] = useState<HighSchoolInfo | null>(null)

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
        getPastNewsletters('HighSchool').then(data => {
            setNewsletters(data)
        })
        getHighSchoolInfo().then(data => {
            setHighSchoolInfo(data)
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
                <TitleSection title='High School' description='Our High School Youth Group is a place for high school students to connect with others and grow in their faith.'/>
                <WhenWhereSection type='HighSchool'/>
                <EventSection events={events} calendarType='HighSchool'/>
                <NewsletterSection type="HighSchool"/>
                <PastNewslettersSection newsletters={newsletters}/>
                <MoreInfoSection moreInfos={highSchoolInfo?.moreInfo ?? []}/>
                <TeamSection teamMembers={highSchoolInfo?.teamMembers ?? []}/>
            </div>
            {isMobile && <div className="mobile-footer"/>}
            {isMobile && <BottomHeader location='HighSchool' />}
        </>
    )
}

export default App