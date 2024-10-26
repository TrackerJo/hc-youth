import "./calendar_event_tile.css";

import { CalendarEventTileProps } from "../../constants";

function CalendarEventTile({event}: CalendarEventTileProps) {
    const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit' };

    return (
        <div className="event-tile">
            <h3>{event.title}</h3>
            {event.type != "" && <h4>({event.type})</h4>}
            {event.location != undefined ? <><p>{event.location}</p>
           </> : null}
            <p>{event.start.toDateString()}</p>
            <p>{event.start.toLocaleTimeString([], timeOptions)} - {event.end.toLocaleTimeString([], timeOptions)}</p>
            <p>{event.description}</p>
            {
                event.location != undefined ?  <button onClick={() => {
                    //open event.location in google maps
                    window.open(`https://www.google.com/maps/search/?api=1&query=${event.location}`, "_blank")
                }}>Open in Maps</button> : null
            }
            <button onClick={() => {
                //open event.link in new tab
                window.open(event.eventLink, "_blank")
            }}>View Event</button>
        </div>
    )
}

export default CalendarEventTile