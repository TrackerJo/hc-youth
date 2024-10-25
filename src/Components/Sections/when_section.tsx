import { WhenSectionProps } from "../../constants";
import "./when_section.css";

function WhenSection({type} : WhenSectionProps) {
    return (
        <div className='when-section'>
            <h2>When</h2>
            <div className='times'>
                
               {type == "All" ? <> <div>
                    <h3>High School</h3>
                    <p>Sundays<br/>7:00-8:15pm</p>
                    <button onClick={() => {
                        window.location.href = "/hc-youth/HighSchool/"
                    }}>More Info</button>
                </div>
                <div>
                    <h3>Middle School</h3>
                    <p>1st & 3rd Sundays<br/>5:00-6:00pm</p>
                    <button onClick={() => {
                        window.location.href = "/hc-youth/MiddleSchool/"
                    }}>More Info</button>
                </div>
                <div>
                    <h3>Young Adults</h3>
                    <p>Wednesdays<br/>4:00-5:15pm</p>
                    <button onClick={() => {
                        window.location.href = "/hc-youth/YoungAdults/"
                    }}>More Info</button>
                </div>
                </>: type == "HighSchool" ? <div>
                <p>Sundays<br/>7:00-8:15pm</p>
                </div> : type == "MiddleSchool" ? <div>
                <p>1st & 3rd Sundays<br/>5:00-6:00pm</p>
                </div> : <div>
                <p>Wednesdays<br/>4:00-5:15pm</p>
                </div>}
                </div>
        </div>
    )
}

export default WhenSection