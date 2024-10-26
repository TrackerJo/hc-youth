import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'




import "./signup.css"
import { register } from '../../../Firebase/auth'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App(){
    const [isMobile, setIsMobile] = useState(false)
    const [accessCode, setAccessCode] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)


    
   

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
            <div className="signup">
                <h1>Sign Up</h1>
                <div className='signup-items'>
                    <div className='signup-item'>
                        <label htmlFor="access-code">Access Code</label>
                        <input type="text" id="access-code" value={accessCode} onChange={(e) => setAccessCode(e.target.value)}/>
                    </div>
                    <div className='signup-item'> 
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    </div>
                    <div className='signup-item'> 
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                </div>
                <div className='ActionBtns'>
                    {loading ? <div className='loader'></div> : <button onClick={async () => {
                        setLoading(true)
                        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
                        if(!emailRegex.test(email)){
                            alert("Invalid email")
                            setLoading(false)
                            return
                        }
                        if(password.length < 6){
                            alert("Password must be at least 6 characters long")
                            setLoading(false)
                            return
                        }
                        //Check if email is valid using regex
                      

                        const loggedIn = await register(email, password, accessCode)
                        if (loggedIn == "Success") {
                            window.location.href = "/hc-youth/Dashboard/"
                        } else {
                            setLoading(false)
                            alert("Error signing up: " + loggedIn)
                        }


                    }}>Sign Up</button>}
                    <button onClick={() => {
                        //register
                        window.location.href = "/hc-youth/Dashboard/Auth/Login/"
                    }}>Login</button>
                </div>
               
                    
            </div>
        </>
    )
}

export default App