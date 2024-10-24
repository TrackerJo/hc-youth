import "./calendar_event_tile.css";

import { CalendarEvent, CalendarEventTileProps } from "../constants";

function CalendarEventTile({event}: CalendarEventTileProps) {
    return (
        <div className="event-tile">
            <h3>{event.title}</h3>
            {event.type != "" && <h4>({event.type})</h4>}
            <p>{event.start.toDateString()}</p>
            <p>{event.description}</p>
        </div>
    )
}

export default CalendarEventTile