import "./manage_when_section.css";
import { ManageWhenSectionProps } from "../../constants";
import { useEffect, useState } from "react";
import { updateHighSchoolTiming, updateMiddleSchoolTiming, updateYoungAdultsTiming } from "../../Firebase/db";

function ManageWhenSection({middleSchoolTiming, highSchoolTiming, youngAdultsTiming, setHighSchoolTiming, setMiddleSchoolTiming, setYoungAdultsTiming}: ManageWhenSectionProps) {
    const [currentMiddleSchoolTiming, setCurrentMiddleSchoolTiming] = useState(middleSchoolTiming);
    const [currentHighSchoolTiming, setCurrentHighSchoolTiming] = useState(highSchoolTiming);
    const [currentYoungAdultsTiming, setCurrentYoungAdultsTiming] = useState(youngAdultsTiming);

    const [middleSchoolLoading, setMiddleSchoolLoading] = useState(false);
    const [highSchoolLoading, setHighSchoolLoading] = useState(false);
    const [youngAdultsLoading, setYoungAdultsLoading] = useState(false);

    useEffect(() => {
        setCurrentMiddleSchoolTiming(middleSchoolTiming);
        setCurrentHighSchoolTiming(highSchoolTiming);
        setCurrentYoungAdultsTiming(youngAdultsTiming);
    }, [middleSchoolTiming, highSchoolTiming, youngAdultsTiming]);

    
    return (
        <div className="manage-when-section">
            <h2>Manage Youth Group Times</h2>
            <div className="yg-times">
                <div className="yg-time">
                    <h3>High School</h3>
                    <input type="text" value={currentHighSchoolTiming.day} onChange={(e) => setCurrentHighSchoolTiming({...currentHighSchoolTiming, day: e.target.value})}/>
                    <input type="text" value={currentHighSchoolTiming.time} onChange={(e) => setCurrentHighSchoolTiming({...currentHighSchoolTiming, time: e.target.value})}/>
                    {highSchoolLoading ? <div className="loader"></div> : <button onClick={async () => {
                        setHighSchoolLoading(true);
                        setHighSchoolTiming(currentHighSchoolTiming);
                        await updateHighSchoolTiming(currentHighSchoolTiming);
                        setHighSchoolLoading(false);
                    }}>Save</button>}
                </div>
                <div className="yg-time">
                    <h3>Middle School</h3>
                    <input type="text" value={currentMiddleSchoolTiming.day} onChange={(e) => setCurrentMiddleSchoolTiming({...currentMiddleSchoolTiming, day: e.target.value})}/>
                    <input type="text" value={currentMiddleSchoolTiming.time} onChange={(e) => setCurrentMiddleSchoolTiming({...currentMiddleSchoolTiming, time: e.target.value})}/>
                    {middleSchoolLoading ? <div className="loader"></div> : <button onClick={async () => {
                        setMiddleSchoolLoading(true);
                        setMiddleSchoolTiming(currentMiddleSchoolTiming);
                        await updateMiddleSchoolTiming(currentMiddleSchoolTiming);
                        setMiddleSchoolLoading(false);
                    }}>Save</button>}
                </div>
                <div className="yg-time">
                    <h3>Young Adults</h3>
                    <input type="text" value={currentYoungAdultsTiming.day} onChange={(e) => setCurrentYoungAdultsTiming({...currentYoungAdultsTiming, day: e.target.value})}/>
                    <input type="text" value={currentYoungAdultsTiming.time} onChange={(e) => setCurrentYoungAdultsTiming({...currentYoungAdultsTiming, time: e.target.value})}/>
                    {youngAdultsLoading ? <div className="loader"></div> : <button onClick={async () => {
                        setYoungAdultsLoading(true);
                        setYoungAdultsTiming(currentYoungAdultsTiming);
                        await updateYoungAdultsTiming(currentYoungAdultsTiming);
                        setYoungAdultsLoading(false);
                    }}>Save</button>}
                </div>
            </div>
        </div>
    );
}

export default ManageWhenSection;
