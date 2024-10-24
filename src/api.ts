import { CalendarEvent } from "./constants";

export function getCalendarEvents(calendarId: string): Promise<CalendarEvent[]> {

    return fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=AIzaSyBQShcvcK7MSvfgDIIvde_bRDGaQo6YCdA`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const events: CalendarEvent[] = data.items.map((item: any) => {
            return {
                title: item.summary,
                start: new Date(item.start.dateTime),
                end: new Date(item.end.dateTime),
                description: item.description,
                type: ""
            }
        }
        )
        return events;
    })
}