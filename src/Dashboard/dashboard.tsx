import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from '../Components/Headers/header'
import BottomHeader from '../Components/Headers/bottom_header'


import "./dashboard.css"
import DashboardHeader from '../Components/Headers/dashboard_header'
import BottomDashboardHeader from '../Components/Headers/bottom_dashboard_header'
import { YouthInfo } from '../constants'
import { getYouthInfo } from '../Firebase/db'
import TrashIcon from '../assets/trash_icon.png'
import ManagePrayerRequestsSection from '../Components/Sections/manage_prayer_requests_section'
import ManageQuestionsSection from '../Components/Sections/manage_questions_section'
import ManageWhenSection from '../Components/Sections/manage_when_section'
import { isUserLoggedIn, logout } from '../Firebase/auth'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App(){
    const [isMobile, setIsMobile] = useState(false)
    const [youthInfo, setYouthInfo] = useState<null | YouthInfo>(null)
    const [isLogged, setIsLogged] = useState(false)
    
   

    useEffect(() => {

        isUserLoggedIn(setIsLogged)
        getYouthInfo().then((info) => {
            setYouthInfo(info)
        })

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
            {!isMobile && <DashboardHeader />}
            <div className='content'>
                <ManageWhenSection youngAdultsTiming={youthInfo?.youngAdultTiming ?? {time: "", day: ""}} highSchoolTiming={youthInfo?.highSchoolTiming ?? {time: "", day: ""}} middleSchoolTiming={youthInfo?.middleSchoolTiming ?? {time: "", day: ""}} setHighSchoolTiming={({time, day}) => {
                    setYouthInfo((prev) => {
                        if (prev) {
                            return {
                                ...prev,
                                highSchoolTiming: {
                                    time: time,
                                    day: day
                                }
                            }
                        }
                        return null
                    })
                }} setMiddleSchoolTiming={({time, day}) => {
                    setYouthInfo((prev) => {
                        if (prev) {
                            return {
                                ...prev,
                                middleSchoolTiming: {
                                    time: time,
                                    day: day
                                }
                            }
                        }
                        return null
                    })
                }} setYoungAdultsTiming={({time, day}) => {
                    setYouthInfo((prev) => {
                        if (prev) {
                            return {
                                ...prev,
                                youngAdultTiming: {
                                    time: time,
                                    day: day
                                }
                            }
                        }
                        return null
                    })
                }}/>
               <ManagePrayerRequestsSection requests={youthInfo?.prayerRequests || []} removeRequest={(request) => {
                    setYouthInfo((prev) => {
                        if (prev) {
                            return {
                                ...prev,
                                prayerRequests: prev.prayerRequests.filter((prayer) => prayer.request !== request)
                            }
                        }
                        return null
                    })
               }}/>

               <ManageQuestionsSection questions={youthInfo?.questions || []} removeQuestion={(question) => {
                    setYouthInfo((prev) => {
                        if (prev) {
                            return {
                                ...prev,
                                questions: prev.questions.filter((q) => q.question !== question)
                            }
                        }
                        return null
                    })
               }} answerQuestion={(question, answer) => {
                    setYouthInfo((prev) => {
                        if (prev) {
                            return {
                                ...prev,
                                questions: prev.questions.map((q) => {
                                    if (q.question === question) {
                                        return {
                                            question: question,
                                            answer: answer
                                        }
                                    }
                                    return q
                                })
                            }
                        }
                        return null
                    })
               }}/>
                
                
            </div>
            {isMobile && <div className="mobile-footer"/>}
            {isMobile && <BottomDashboardHeader location='' />}
        </>
    )
}

export default App