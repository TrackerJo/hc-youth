import "./calendar_event_tile.css";

import { CalendarEvent, CalendarEventTileProps } from "../constants";

function CalendarEventTile({event}: CalendarEventTileProps) {
    const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit' };

    return (
        <div className="event-tile">
            <h3>{event.title}</h3>
            {event.type != "" && <h4>({event.type})</h4>}
            <p>{event.start.toDateString()}</p>
            <p>{event.start.toLocaleTimeString([], timeOptions)} - {event.end.toLocaleTimeString([], timeOptions)}</p>
            <p>{event.description}</p>
            <button onClick={() => {
                //open event.link in new tab
                window.open(event.eventLink, "_blank")
            }}>View Event</button>
        </div>
    )
}

export default CalendarEventTile