import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'




import "./login.css"
import { login } from '../../../Firebase/auth'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App(){
    const [isMobile, setIsMobile] = useState(false)
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
            <div className="login">
                <h1>Login</h1>
                <div className='login-items'>
                    <div className='login-item'> 
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    </div>
                    <div className='login-item'> 
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                </div>
                <div className='ActionBtns'>
                   {loading ? <div className='loader'></div> : <button onClick={async () => {
                        setLoading(true)
                        const loggedIn = await login(email, password)
                        if (loggedIn !== "Success") {
                            alert("Error logging in: " + loggedIn)
                            setLoading(false)
                            return
                        }
                        window.location.href = "/hc-youth/Dashboard/"

                        //login
                    }}>Login</button>}
                    <button onClick={() => {
                        //register
                        window.location.href = "/hc-youth/Dashboard/Auth/Signup/"
                    }}>Sign Up</button>
                </div>
               
                    
            </div>
        </>
    )
}

export default App