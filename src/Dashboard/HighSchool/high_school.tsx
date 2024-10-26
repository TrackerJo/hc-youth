import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'



import "./high_school.css"
import { HighSchoolInfo, MoreInfo } from '../../constants'
import { addMoreInfo, addTeamMember, deleteMoreInfo, getHighSchoolInfo, removePastNewsletter, removeSubscriber, removeTeamMember, updateMoreInfo, updateNewsletter, updateTeamMember } from '../../Firebase/db'
import BottomDashboardHeader from '../../Components/Headers/bottom_dashboard_header'
import DashboardHeader from '../../Components/Headers/dashboard_header'
import ManageMoreInfoSection from '../../Components/Sections/manage_more_info_section'
import ManageTeamSection from '../../Components/Sections/manage_team_section'
import ManageNewsletterSection from '../../Components/Sections/manage_newsletter_section'
import { isUserLoggedIn } from '../../Firebase/auth'





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App(){
    const [isMobile, setIsMobile] = useState(false)
    const [highSchoolInfo, setHighSchoolInfo] = useState<null | HighSchoolInfo>(null)
    const [moreInfo, setMoreInfo] = useState<null | MoreInfo[]>([])
    const [isLogged, setIsLogged] = useState(false)
    
   

    useEffect(() => {
        isUserLoggedIn(setIsLogged)
        getHighSchoolInfo().then((info) => {
            setHighSchoolInfo(info)
            setMoreInfo(info?.moreInfo ?? [])
            console.log(info)

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
                <h1>High School</h1>
                <ManageNewsletterSection type='HighSchool' pastNewsletters={highSchoolInfo?.pastNewsletters ?? []} subscribers={highSchoolInfo?.subscribers ?? []} newsletter={highSchoolInfo?.newsletter ?? {title: '', image: '', body:'', date: new Date()}} updateNewsletter={(newsletter) => {
                    setHighSchoolInfo((prev) => {
                        if (prev) {
                            //Update prev.newsletter with newsletter

                            return {
                                ...prev,
                                newsletter: newsletter
                            }
                        }
                        return prev
                    })
                    updateNewsletter('HighSchool', newsletter)
                }} removeNewsletter={(title) => {
                    setHighSchoolInfo((prev) => {
                        if (prev) {
                            //Remove prev.pastNewsletters with title
                            const oldNewsletter = prev.pastNewsletters.find((newsletter) => newsletter.title === title)!
                            removePastNewsletter('HighSchool', oldNewsletter)
                            prev = {
                                ...prev,
                                pastNewsletters: prev.pastNewsletters.filter((newsletter) => newsletter.title !== title)
                            }
                           
                        }
                        return prev
                    })

                }} removeSubscriber={(email) => {
                    setHighSchoolInfo((prev) => {
                        if (prev) {
                            //Remove prev.subscribers with email
                            removeSubscriber('HighSchool', email)
                            prev = {
                                ...prev,
                                subscribers: prev.subscribers.filter((subscriber) => subscriber !== email)
                            }
                        }
                        return prev
                    })
                }}/>
                
                <ManageMoreInfoSection moreInfos={moreInfo ?? []} updateMoreInfo={(oldTitle,title, body, link) => {
                    setMoreInfo( (prev) => {
                        if (prev) {
                           //Update prev.moreInfos with info
                           prev = prev.map((prevInfo) => {
                                 if (prevInfo.title === oldTitle) {
                                    console.log('Updating')
                                    console.log(prevInfo)
                                    console.log("To")
                                    console.log({
                                        title: title,
                                        body: body,
                                        link: link
                                    })
                                    updateMoreInfo('HighSchool', prevInfo.title, prevInfo.body, prevInfo.link, title, body, link)
                                      return {
                                            title: title,
                                            body: body,
                                            link: link
                                      }
                                 }
                                 return prevInfo
                            })
                        }
                        return prev
                    })
                }} removeMoreInfo={async (title) => {
                    setMoreInfo( (prev) => {
                        if (prev) {
                            //Remove prev.moreInfos with title
                            const oldInfo = prev.find((prevInfo) => prevInfo.title === title)!

                            prev = prev.filter((prevInfo) => prevInfo.title !== title)
                             deleteMoreInfo('HighSchool', oldInfo.title, oldInfo.body, oldInfo.link)
                        }
                        return prev
                    })
                    

                }} addMoreInfo={async () => {
                    setMoreInfo((prev) => {
                        if (prev) {
                            //Add new info to prev.moreInfos
                           prev = [...prev, {
                                 title: 'New Title ' + prev.length,
                                 body: 'New Body',
                                 link: 'New Link'
                            }] 
                            console.log(prev)
                        }
                        return prev
                    })

                }}/>
                
                <ManageTeamSection type='HighSchool' teamMembers={highSchoolInfo?.teamMembers ?? []} addTeamMember={() => {
                    setHighSchoolInfo((prev) => {
                        if (prev) {
                            //Add new team member to prev.teamMembers
                            prev = {
                                ...prev,
                                teamMembers: [...prev.teamMembers, {
                                    name: '',
                                    role: '',
                                    email: '',
                                    phone: '',
                                    bio: '',
                                    image: ''
                                }]
                            }
                            
                        }
                        return prev
                    })
                }}

                removeTeamMember={(name) => {
                    setHighSchoolInfo((prev) => {
                        if (prev) {
                            //Remove team member from prev.teamMembers
                            const oldMember = prev.teamMembers.find((member) => member.name === name)!
                            if(oldMember.name !== '' ){
                                removeTeamMember('HighSchool', oldMember)
                            }
                            
                            prev = {
                                ...prev,
                                teamMembers: prev.teamMembers.filter((member) => member.name !== name)
                            }
                        }
                        return prev
                    })
                }}

                updateTeamMember={(name, updatedMember) => {
                    setHighSchoolInfo((prev) => {
                        if (prev) {
                            //Update team member in prev.teamMembers
                            prev = {
                                ...prev,
                                teamMembers: prev.teamMembers.map((member) => {
                                    if (member.name === name) {
                                        updateTeamMember('HighSchool', member, updatedMember)
                                        return updatedMember
                                    }
                                    return member
                                })
                            }
                        }
                        return prev
                    })
                }}/>
                

            </div>
            {isMobile && <div className="mobile-footer"/>}
            {isMobile && <BottomDashboardHeader location='HighSchool' />}
        </>
    )
}

export default App