import { useEffect, useRef, useState } from "react";
import './header.css'
import Logo from '../assets/logo.png'
import Dropdown from "./dropdown";


function Header() {
    const [isSticky, setSticky] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        window.onscroll = function() {myFunction()};
    
        const sticky = headerRef.current!.offsetTop;
        
        function myFunction() {
        if (window.scrollY > sticky) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }}, [])    

    return (
        <div ref={headerRef} className={"header " + (isSticky ? "sticky" : "")} id="myHeader">
            <div className="header-left" onClick={() => {
                window.location.href = "/hc-youth/"
            }}>
                <img src={Logo} alt="" />
                <h2>Holy Cross Youth</h2>
            </div>
            <div className="header-right">
                <Dropdown title="Middle School" onClick={() => {

                    window.location.href = "/hc-youth/MiddleSchool/"
                }} links={[
                    {title: "Events", onClick: () => {}},
                ]}/>
                <Dropdown title="High School" onClick={() => {
                    window.location.href = "/hc-youth/HighSchool/"
                }} links={[]}/>
                <Dropdown title="Young Adults" onClick={() => {
                    window.location.href = "/hc-youth/YoungAdults/"
                }}  links={[]}/>
            </div>
            
        </div>
    )
}

export default Header