import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'



import "./young_adults.css"
import { YoungAdultsInfo, MoreInfo } from '../../constants'
import {  deleteMoreInfo, getYoungAdultsInfo, removePastNewsletter, removeSubscriber, removeTeamMember, updateMoreInfo, updateNewsletter, updateTeamMember } from '../../Firebase/db'
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
    const [youngAdultsInfo, setYoungAdultsInfo] = useState<null | YoungAdultsInfo>(null)
    const [moreInfo, setMoreInfo] = useState<null | MoreInfo[]>([])
    const [isLogged, setIsLogged] = useState(false)
    
   

    useEffect(() => {
        isUserLoggedIn(setIsLogged)
        getYoungAdultsInfo().then((info) => {
            setYoungAdultsInfo(info)
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
                <h1>Young Adults</h1>
                <ManageNewsletterSection type='YoungAdults' pastNewsletters={youngAdultsInfo?.pastNewsletters ?? []} subscribers={youngAdultsInfo?.subscribers ?? []} newsletter={youngAdultsInfo?.newsletter ?? {title: '', images: [],date: new Date()}} updateNewsletter={(newsletter) => {
                    setYoungAdultsInfo((prev) => {
                        if (prev) {
                            //Update prev.newsletter with newsletter

                            return {
                                ...prev,
                                newsletter: newsletter
                            }
                        }
                        return prev
                    })
                    updateNewsletter('YoungAdults', newsletter)
                }} removeNewsletter={(title) => {
                    setYoungAdultsInfo((prev) => {
                        if (prev) {
                            //Remove prev.pastNewsletters with title
                            const oldNewsletter = prev.pastNewsletters.find((newsletter) => newsletter.title === title)!
                            removePastNewsletter('YoungAdults', oldNewsletter)
                            prev = {
                                ...prev,
                                pastNewsletters: prev.pastNewsletters.filter((newsletter) => newsletter.title !== title)
                            }
                           
                        }
                        return prev
                    })

                }} removeSubscriber={(email) => {
                    setYoungAdultsInfo((prev) => {
                        if (prev) {
                            //Remove prev.subscribers with email
                            removeSubscriber('YoungAdults', email)
                            prev = {
                                ...prev,
                                subscribers: prev.subscribers.filter((subscriber) => subscriber !== email)
                            }
                        }
                        return prev
                    })
                }} />
                
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
                                    updateMoreInfo('YoungAdults', prevInfo.title, prevInfo.body, prevInfo.link, title, body, link)
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
                             deleteMoreInfo('YoungAdults', oldInfo.title, oldInfo.body, oldInfo.link)
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
                
                <ManageTeamSection type='YoungAdults' teamMembers={youngAdultsInfo?.teamMembers ?? []} addTeamMember={() => {
                    setYoungAdultsInfo((prev) => {
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
                                    image: '',
                                    imageId: ''
                                }]
                            }
                            
                        }
                        return prev
                    })
                }}

                removeTeamMember={(name) => {
                    setYoungAdultsInfo((prev) => {
                        if (prev) {
                            //Remove team member from prev.teamMembers
                            const oldMember = prev.teamMembers.find((member) => member.name === name)!
                            if(oldMember.name !== '' ){
                                removeTeamMember('YoungAdults', oldMember)
                            }
                            
                            prev = {
                                ...prev,
                                teamMembers: prev.teamMembers.filter((member) => member.name !== name)
                            }
                        }
                        return prev
                    })
                }}

                updateTeamMember={(name, updatedMember, isFirst) => {
                    setYoungAdultsInfo((prev) => {
                        if (prev) {
                            //Update team member in prev.teamMembers
                            prev = {
                                ...prev,
                                teamMembers: prev.teamMembers.map((member) => {
                                    if (member.name === name) {
                                        updateTeamMember('YoungAdults', member, updatedMember)
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
            {isMobile && <BottomDashboardHeader location='YoungAdults' />}
        </>
    )
}

export default App