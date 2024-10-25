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
    eventId: string;
    calendarId: string;
    eventLink: string;
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

export type QuestionSectionProps = {
    questions: Question[];
}

export type BottomHeaderProps = {
    location: string;
}

export type EventSectionProps = {
    events: CalendarEvent[];
    calendarType: "All" | "HighSchool" | "MiddleSchool" | "YoungAdults";
}

export type TitleSectionProps = {
    title: string;
    description: string;
}

export type PrayerRequestSectionProps = {
    requests: PrayerRequest[];
}

export type WhenSectionProps = {
    type: "All" | "HighSchool" | "MiddleSchool" | "YoungAdults";
}

export type WhereWhenSectionProps = {
    type: "All" | "HighSchool" | "MiddleSchool" | "YoungAdults";
}

export type Newsletter = {
    title: string;
    body: string;
    image: string;
    type: "HighSchool" | "MiddleSchool" | "YoungAdults";
    date: Date;
}

export type NewsletterSectionProps = {
    type: "HighSchool" | "MiddleSchool" | "YoungAdults";
}

export type NewsletterTileProps = {
    newsletter: Newsletter;
}

export type PastNewslettersSectionProps = {
    newsletters: Newsletter[];
}

export type TeamMember = {
    name:string;
    image:string;
    role:string;
    bio:string;
    email?: string;
    phone?: string;
}

export type TeamMemberTileProps = {
    teamMember: TeamMember;
}

export type TeamSectionProps = {
    teamMembers: TeamMember[];
}

export type HighSchoolInfo = {
    teamMembers: TeamMember[];
    moreInfo: MoreInfo[];
}

export type MiddleSchoolInfo = {
    teamMembers: TeamMember[];
    moreInfo: MoreInfo[];
}

export type YoungAdultInfo = {
    teamMembers: TeamMember[];
    moreInfo: MoreInfo[];
}

export type YouthInfo = {
    questions: Question[];
    prayerRequests: PrayerRequest[];
}

export type MoreInfo = {
    title: string;
    body: string;
    link: string;
}

export type MoreInfoSectionProps = {
    moreInfos: MoreInfo[];
}

export type MoreInfoTileProps = {
    moreInfo: MoreInfo;
}

export const HighSchoolCalendarId = "e2310d92f373f154fe8d650c2bc7a7edd9b33601de36e05465ac2910d9ea8384@group.calendar.google.com"
export const MiddleSchoolCalendarId = "2f74d93bc21ed82bf709a7a5bd6613ae3ac4f99838a39d5f10ea7c2cc0729a48@group.calendar.google.com"
export const YoungAdultCalendarId = "cdaf8da5a6fd1d90bc07b7d3bfec33f05ebc968381116858e9c8a185d25dd189@group.calendar.google.com"
export const AllCalendarId = "0cffcf500871b81ec929474b8221a806ca4fcb424f51dd1dca6a1810d0e50251@group.calendar.google.com"
export const AllCalendarLink = "https://calendar.google.com/calendar/u/0?cid=MGNmZmNmNTAwODcxYjgxZWM5Mjk0NzRiODIyMWE4MDZjYTRmY2I0MjRmNTFkZDFkY2E2YTE4MTBkMGU1MDI1MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
export const MiddleSchoolCalendarLink = "https://calendar.google.com/calendar/u/0?cid=MmY3NGQ5M2JjMjFlZDgyYmY3MDlhN2E1YmQ2NjEzYWUzYWM0Zjk5ODM4YTM5ZDVmMTBlYTdjMmNjMDcyOWE0OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
export const HighSchoolCalendarLink = "https://calendar.google.com/calendar/u/0?cid=ZTIzMTBkOTJmMzczZjE1NGZlOGQ2NTBjMmJjN2E3ZWRkOWIzMzYwMWRlMzZlMDU0NjVhYzI5MTBkOWVhODM4NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
export const YoungAdultCalendarLink = "https://calendar.google.com/calendar/u/0?cid=Y2RhZjhkYTVhNmZkMWQ5MGJjMDdiN2QzYmZlYzMzZjA1ZWJjOTY4MzgxMTE2ODU4ZTljOGExODVkMjVkZDE4OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"