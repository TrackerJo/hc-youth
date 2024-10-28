import { useEffect, useRef, useState } from "react";
import './dashboard_header.css'
import Logo from '../../assets/logo.png'
import Dropdown from "../dropdown";
import { logout } from "../../Firebase/auth";


function DashboardHeader() {
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
        <div ref={headerRef} className={"dashboard-header " + (isSticky ? "sticky" : "")} id="myHeader">
            <div className="header-left" onClick={() => {
                window.location.href = "/hc-youth/Dashboard/"
            }}>
                <img src={Logo} alt="" />
                <h2>Holy Cross Youth Dashboard</h2>
            </div>
            <div className="header-right">
                <Dropdown title="Middle School" onClick={() => {

                    window.location.href = "/hc-youth/Dashboard/MiddleSchool/"
                }} links={[]}/>
                <Dropdown title="High School" onClick={() => {
                    window.location.href = "/hc-youth/Dashboard/HighSchool/"
                }} links={[]}/>
                <Dropdown title="Young Adults" onClick={() => {
                    window.location.href = "/hc-youth/Dashboard/YoungAdults/"
                }}  links={[]}/>
                <Dropdown title="More" onClick={() => {

                }}  links={[
                    {
                        title: "Home",
                        onClick: () => {
                            window.location.href = "/hc-youth/"
                        }
                    },
                    {
                        title: "Logout",
                        onClick: () => {
                            logout()
                            window.location.href = "/hc-youth/"
                        }
                    }
                ]}/>
                <br />
                <br />
                
            </div>
            
        </div>
    )
}

export default DashboardHeader