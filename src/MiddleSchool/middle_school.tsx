import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from '../Components/header'
import BottomHeader from '../Components/bottom_header'
import Slideshow from '../Components/slideshow'

import "./middle_school.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App(){
    const [isMobile, setIsMobile] = useState(false)

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
                        <h2>Middle School Youth Group</h2>
                        <p>Our Youth Groups are designed with students in mind, talking about real issues and applying Scripture in their everyday lives.</p>
                    </div>

                    <Slideshow />
                </div>

            </div>
            {isMobile && <div className="mobile-footer"/>}
            {isMobile && <BottomHeader />}
        </>
    )
}

export default App