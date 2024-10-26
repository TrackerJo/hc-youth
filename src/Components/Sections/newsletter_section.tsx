import { useRef, useState } from "react";
import { NewsletterSectionProps } from "../../constants";
import "./newsletter_section.css";
import { subscribeToNewsletter } from "../../Firebase/db";

function NewsletterSection({type}: NewsletterSectionProps) {
    const emailRef = useRef<HTMLInputElement>(null)
    const [loading, setLoading] = useState(false)
    return (
        <div className='newsletter-section' id="newsletter">
        <h2>Newsletter</h2>
        <div className='newsletter'>
            <p>Sign up for our newsletter to stay up to date on all of our events and activities!</p>
            <form>
                <input type='text' placeholder='Email Address'  ref={emailRef}/>
                {loading ? <div className="loader"></div> : <button onClick={async (e) => {
                    e.preventDefault()
                    if(emailRef.current!.value === ""){
                        alert("Please enter an email address")
                        return
                    }
                    //Check if email is valid
                    const email = emailRef.current!.value
                    //use regex to check if email is valid
                    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
                    if(!emailRegex.test(email)){
                        alert("Please enter a valid email address")
                        return
                    }

                    setLoading(true)
                    await subscribeToNewsletter(email, type)
                    setLoading(false)
                    alert("You have successfully signed up for the newsletter!")
                    
                    emailRef.current!.value = ""
                }}>Sign Up</button>}
            </form>
        </div>
    </div>
    )
}

export default NewsletterSection