import { AllCalendarLink, EventsSectionProps, HighSchoolCalendarLink, MiddleSchoolCalendarLink, YoungAdultCalendarLink } from "../../constants";
import CalendarEventTile from "../Tiles/calendar_event_tile";
import "./events_section.css";

function EventsSection({events, calendarType} : EventsSectionProps) {
    return (
        <div className='event-section' id="events">
            <h2>Upcoming Events</h2>
            <div className='events'>
                {events.map((event) => {
                return (
                    <CalendarEventTile event={event} />
                )
                })}
            </div>  
            <button className="SubscribeBtn" onClick={() => {
                if(calendarType == "All"){
                    window.open(AllCalendarLink, "_blank")
                } else if(calendarType == "HighSchool"){
                    window.open(HighSchoolCalendarLink, "_blank")
                } else if(calendarType == "MiddleSchool"){
                    window.open(MiddleSchoolCalendarLink, "_blank")
                } else {
                    window.open(YoungAdultCalendarLink, "_blank")
                }
            }}>Subscribe to Calendar</button>
            
        </div>
    )
}

export default EventsSection