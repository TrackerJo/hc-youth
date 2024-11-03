import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'




import "./newsletter.css"
import { Newsletter } from '../constants'





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App(){
    const [isMobile, setIsMobile] = useState(false)
    const [pastPath, setPastPath] = useState("")
    const [newsletter, setNewsletter] = useState<null | Newsletter>(null)
    


    useEffect(() => {
        const url = new URL(window.location.href)
        //get parameter from url
        const path = url.searchParams.get("path")
        if(path){
            //replace all 1s with /
            setPastPath(path.replace(/1/g, "/"))
        }
        //get newsletter from local storage
        const newsletter = localStorage.getItem("newsletter")
        if(newsletter){
            let parsedNewsletter = JSON.parse(newsletter)
            parsedNewsletter.date = new Date(parsedNewsletter.date)
            setNewsletter(parsedNewsletter)

        }
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
            <div className="newsletter-wrapper">
                <div className='newsletter'>

                    <table className='newsletter-table'>

                        <tr className='newsletter-title'>
                            <td >
                                <p>{newsletter?.title}</p>
                                <p>{newsletter?.date.toLocaleDateString()}</p>
                            </td>
                        </tr>


                        <tr  className='newsletter-images'>
                            <td >
                                {newsletter?.images.map((image, index) => {
                                    return <img key={index} src={image.url} className='newsletter-image' alt="newsletter" />
                                })}
                            </td>
                        </tr>


                        <tr className='newsletter-bottom'>
                            <td>

                            </td>
                        </tr>
                    </table>
                </div>
                <div className='newsletter-back'>
                    <button onClick={() => {

                    // go back to previous page
                    window.location.href = "/hc-youth" + pastPath


                    }}>Back</button>
                </div>
                
                
            </div>
        </>
    )
}

export default App