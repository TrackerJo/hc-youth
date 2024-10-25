import { getFirestore, collection,doc, getDoc, updateDoc, FieldValue, arrayUnion, getDocs, query, where } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { app } from "./app";
import { HighSchoolInfo, MiddleSchoolInfo, Newsletter, PrayerRequest, TeamMember, YoungAdultInfo, YouthInfo } from "../constants";
import { link } from "fs";

const functions = getFunctions(app);
const db = getFirestore(app);

export async function subscribeToNewsletter(email: string, type: "HighSchool" | "MiddleSchool" | "YoungAdults") {
    const newsletterCollection = collection(db,"newsletter");

    await updateDoc(doc(newsletterCollection,"subscribers"), {
        [type]: arrayUnion(email)
        
    })

}

export async function getPastNewsletters(type: "HighSchool" | "MiddleSchool" | "YoungAdults"): Promise<Newsletter[]>{
   const pastNewslettersCol = collection(db,"pastNewsletters");
    const queryResults = await getDocs(query(pastNewslettersCol, where("type", "==", type)));
    const newsletters: Newsletter[] = [];
    queryResults.forEach((doc) => {
        newsletters.push({
            title: doc.data().title,
            body: doc.data().body,
            image: doc.data().image,
            type: doc.data().type,
            date: doc.data().date.toDate()
        })
    })
    return newsletters;
}

export async function getHighSchoolInfo(): Promise<HighSchoolInfo>{
    const highSchoolInfoDoc = await getDoc(doc(db,"youthInfo","HighSchool"));
    const teamMembers = highSchoolInfoDoc.data()!.teamMembers;
    const formattedTeamMembers: TeamMember[] = teamMembers.map((member: any) => {
        return {
            name: member.name,
            image: member.image,
            role: member.role,
            bio: member.bio,
            email: member.email == "" ? undefined : member.email,
            phone: member.phoneNumber == "" ? undefined : member.phoneNumber
        } as TeamMember
    })
    const moreInfo = highSchoolInfoDoc.data()!.moreInfo
    const formattedMoreInfo = moreInfo.map((info: any) => {
        return {
            title: info.title,
            body: info.body,
            link: info.link
        }
    })
    return {
        teamMembers: formattedTeamMembers,
        moreInfo: formattedMoreInfo
    }


}

export async function getMiddleSchoolInfo(): Promise<MiddleSchoolInfo>{
    const middleSchoolInfoDoc = await getDoc(doc(db,"youthInfo","MiddleSchool"));
    const teamMembers = middleSchoolInfoDoc.data()!.teamMembers;
    const formattedTeamMembers: TeamMember[] = teamMembers.map((member: any) => {
        return {
            name: member.name,
            image: member.image,
            role: member.role,
            bio: member.bio,
            email: member.email == "" ? undefined : member.email,
            phone: member.phoneNumber == "" ? undefined : member.phoneNumber
        } as TeamMember
    })
    const moreInfo = middleSchoolInfoDoc.data()!.moreInfo
    const formattedMoreInfo = moreInfo.map((info: any) => {
        return {
            title: info.title,
            body: info.body,
            link: info.link
        }
    })
    return {
        teamMembers: formattedTeamMembers,
        moreInfo: formattedMoreInfo
    }
}

export async function getYoungAdultInfo(): Promise<YoungAdultInfo>{
    const youngAdultInfoDoc = await getDoc(doc(db,"youthInfo","YoungAdults"));
    const teamMembers = youngAdultInfoDoc.data()!.teamMembers;
    const formattedTeamMembers: TeamMember[] = teamMembers.map((member: any) => {
        return {
            name: member.name,
            image: member.image,
            role: member.role,
            bio: member.bio,
            email: member.email == "" ? undefined : member.email,
            phone: member.phoneNumber == "" ? undefined : member.phoneNumber
        } as TeamMember
    })
    const moreInfo = youngAdultInfoDoc.data()!.moreInfo
    const formattedMoreInfo = moreInfo.map((info: any) => {
        return {
            title: info.title,
            body: info.body,
            link: info.link
        }
    })
    return {
        teamMembers: formattedTeamMembers,
        moreInfo: formattedMoreInfo
    }
}

export async function getYouthInfo(): Promise<YouthInfo>{
    const youthInfoDoc = await getDoc(doc(db,"youthInfo","info"));
    const questions = youthInfoDoc.data()!.questions;
    const prayerRequests = youthInfoDoc.data()!.prayerRequests;
    const formattedQuestions = questions.map((question: any) => {
        return {
            question: question.question,
            answer: question.answer
        }
    })
    const formattedPrayerRequests: PrayerRequest[] = prayerRequests.map((prayer: any, index: number) => {
        return {
            request: prayer,
            side: "left",
            visible: false,
            top: 0,
            left: 0,
            id: index.toString()
        }
    })
    return {
        questions: formattedQuestions,
        prayerRequests: formattedPrayerRequests
    }
}

export async function askQuestion(question: string){
   const infoDoc = doc(db,"youthInfo","info");
    await updateDoc(infoDoc, {
         questions: arrayUnion({question: question, answer: ""})
    })
}

export async function addPrayerRequest(request: string){
    const infoDoc = doc(db,"youthInfo","info");
    await updateDoc(infoDoc, {
        prayerRequests: arrayUnion(request)
    })
}