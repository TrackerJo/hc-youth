import { WhenSectionProps } from "../../constants";
import "./when_section.css";

function WhenSection({type, middleSchoolTiming, highSchoolTiming, youngAdultsTiming} : WhenSectionProps) {
    return (
        <div className='when-section' id="when">
            <h2>When</h2>
            <div className='times'>
                
               {type == "All" ? <> <div>
                    <h3>High School</h3>
                    <p>{highSchoolTiming.day}<br/>{highSchoolTiming.time}</p>
                    <button onClick={() => {
                        window.location.href = "/hc-youth/HighSchool/"
                    }}>More Info</button>
                </div>
                <div>
                    <h3>Middle School</h3>
                    <p>{middleSchoolTiming.day}<br/>{middleSchoolTiming.time}</p>
                    <button onClick={() => {
                        window.location.href = "/hc-youth/MiddleSchool/"
                    }}>More Info</button>
                </div>
                <div>
                    <h3>Young Adults</h3>
                    <p>{youngAdultsTiming.day}<br/>{youngAdultsTiming.time}</p>
                    <button onClick={() => {
                        window.location.href = "/hc-youth/YoungAdults/"
                    }}>More Info</button>
                </div>
                </>: type == "HighSchool" ? 
                <div>
                    <p>{highSchoolTiming.day}<br/>{highSchoolTiming.time}</p>
                </div> : type == "MiddleSchool" ? 
                <div>
                    <p>{middleSchoolTiming.day}<br/>{middleSchoolTiming.time}</p>
                </div> : 
                <div>
                    <p>{youngAdultsTiming.day}<br/>{youngAdultsTiming.time}</p>
                </div>}
                </div>
        </div>
    )
}

export default WhenSection