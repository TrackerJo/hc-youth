import { CalendarEvent } from "./constants";
import ICAL from "ical.js";

export function getCalendarEvents(calendarId: string): Promise<CalendarEvent[]> {
    return fetch(`https://holycrossfw.ccbchurch.com/group_calendar.ics?id=20&tk=HJ6MXRTXK8JNVY6DMGC3UJPC4XFVT6U3`, {

        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const jcalData = ICAL.parse(data);
        console.log(jcalData);

        const events: CalendarEvent[] =[]

        return events;
    })
}