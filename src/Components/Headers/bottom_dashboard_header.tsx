import { useEffect, useRef, useState } from "react";
import './bottom_dashboard_header.css'


import { BottomHeaderProps } from "../../constants";
import Home from '../../assets/home_icon.png'

function BottomDashboardHeader({location}: BottomHeaderProps) {
    const [isSticky, setSticky] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const sticky = headerRef.current!.offsetTop;
            if (window.scrollY + window.innerHeight < sticky) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={headerRef} className={"bottom-dashboard-header " + (isSticky ? "sticky" : "")} id="myHeader">
           {location == "MiddleSchool" ? <div className="header-item" onClick={() => {
                window.location.href = "/hc-youth/Dashboard/HighSchool/"
           }}>
                <h3>High School</h3>  
            </div> : <div className="header-item" onClick={() => {
                window.location.href = "/hc-youth/Dashboard/MiddleSchool/"
           }}>
                <h3>Middle School</h3>
           </div>}
           {location != '' ? <div className="header-item" onClick={() => {
                window.location.href = "/hc-youth/Dashboard/"
           }}>
                <img src={Home} alt="" className="HomeIcon" />
            </div> : <div className="header-item" onClick={() => {
                window.location.href = "/hc-youth/Dashboard/HighSchool/"
           }}>
                <h3>High School</h3>  
            </div>}
           
            {location == "YoungAdults" ? <div className="header-item" onClick={() => {
                window.location.href = "/hc-youth/Dashboard/HighSchool/"
           }}>
                <h3>High School</h3>  
            </div> : <div className="header-item" onClick={() => {
                window.location.href = "/hc-youth/Dashboard/YoungAdults/"
           }}>
                <h3>Young Adults</h3>
            </div>}

           
        </div>
    )
}

export default BottomDashboardHeader;