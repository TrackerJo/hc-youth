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

export type BottomHeaderProps = {
    location: string;
}

export const HighSchoolCalendarId = "e2310d92f373f154fe8d650c2bc7a7edd9b33601de36e05465ac2910d9ea8384@group.calendar.google.com"
export const MiddleSchoolCalendarId = "2f74d93bc21ed82bf709a7a5bd6613ae3ac4f99838a39d5f10ea7c2cc0729a48@group.calendar.google.com"
export const YoungAdultCalendarId = "cdaf8da5a6fd1d90bc07b7d3bfec33f05ebc968381116858e9c8a185d25dd189@group.calendar.google.com"
export const AllCalendarId = "0cffcf500871b81ec929474b8221a806ca4fcb424f51dd1dca6a1810d0e50251@group.calendar.google.com"