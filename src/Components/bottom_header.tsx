import { useEffect, useRef, useState } from "react";
import './bottom_header.css'
import Logo from '../assets/logo.png'
import Dropdown from "./dropdown";

function BottomHeader() {
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
        <div ref={headerRef} className={"bottom-header " + (isSticky ? "sticky" : "")} id="myHeader">
           <div className="header-item" onClick={() => {
                window.location.href = "/MiddleSchool/"
           }}>
                <h3>Middle School</h3>
           </div>
            <div className="header-item" onClick={() => {
                window.location.href = "/HighSchool/"
           }}>
            <h3>High School</h3>  
            </div>
           
            <div className="header-item" onClick={() => {
                window.location.href = "/YoungAdults/"
           }}>
            <h3>Young Adults</h3>
            </div>

           
        </div>
    )
}

export default BottomHeader;