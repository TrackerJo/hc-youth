export type DropdownLink = {
    onClick: () => void;
    title: string;
}

export type DropdownProps = {
    title: string;
    links: DropdownLink[];
    onClick: () => void;
}

export type CalendarEvent = {
    title: string;
    start: Date;
    end: Date;
    description: string;
    type: string;
}

export type CalendarEventTileProps = {  
    event: CalendarEvent;
}

export type PrayerRequest = {
    request: string;
    side: "left" | "right" | "middle";
    visible: boolean;
    top: number;
    left: number;
    id: string;
}

export type PrayerRequestTileProps = {
    request: PrayerRequest;
    top: number;
    left: number;
}

export type Question = {
    question: string;
    answer: string;
}

export type QuestionTileProps = {
    question: Question;
}

export const HighSchoolCalendarId = "e2310d92f373f154fe8d650c2bc7a7edd9b33601de36e05465ac2910d9ea8384@group.calendar.google.com"
export const MiddleSchoolCalendarId = ""
export const YoungAdultCalendarId = ""
export const AllCalendarId = ""