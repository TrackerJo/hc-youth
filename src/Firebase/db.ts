import { getFirestore, collection,doc, getDoc, updateDoc, arrayUnion, arrayRemove, getDocs, query, where } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { app } from "./app";
import { HighSchoolInfo, MiddleSchoolInfo, Newsletter, PrayerRequest, TeamMember, Timing, YoungAdultsInfo, YouthInfo } from "../constants";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { get } from "http";


const functions = getFunctions(app);
const db = getFirestore(app);
const storage = getStorage(app);

export async function subscribeToNewsletter(email: string, type: "HighSchool" | "MiddleSchool" | "YoungAdults") {
   const typeDoc = doc(db,"youthInfo",type);
    await updateDoc(typeDoc, {
        subscribers: arrayUnion(email)
    })

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
    const highSchoolTiming = highSchoolInfoDoc.data()!.highSchoolTiming as Timing;
    const docNewsletter = highSchoolInfoDoc.data()!.newsletter
    const newsletter: Newsletter = {
        title: docNewsletter.title,
        image: docNewsletter.image,
        date: docNewsletter.date.toDate(),
        body: docNewsletter.body
    }
    const subscribers = highSchoolInfoDoc.data()!.subscribers.map((email: string) => email);
    const pastNewsletters = highSchoolInfoDoc.data()!.pastNewsletters.map((newsletter: any) => {
        return {
            title: newsletter.title,
            image: newsletter.image,
            date: newsletter.date.toDate(),
            body: newsletter.body,
        } as Newsletter
    })
    return {
        teamMembers: formattedTeamMembers,
        moreInfo: formattedMoreInfo,
        highSchoolTiming: highSchoolTiming,
        newsletter: newsletter,
        pastNewsletters: pastNewsletters,
        subscribers: subscribers
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
    const middleSchoolTiming = middleSchoolInfoDoc.data()!.middleSchoolTiming as Timing;
    const docNewsletter = middleSchoolInfoDoc.data()!.newsletter
    const newsletter: Newsletter = {
        title: docNewsletter.title,
        image: docNewsletter.image,
        date: docNewsletter.date.toDate(),
        body: docNewsletter.body
    }
    const subscribers = middleSchoolInfoDoc.data()!.subscribers;
    const pastNewsletters = middleSchoolInfoDoc.data()!.pastNewsletters.map((newsletter: any) => {
        return {
            title: newsletter.title,
            image: newsletter.image,
            date: newsletter.date.toDate(),
            body: newsletter.body,
        } as Newsletter
    })
    return {
        teamMembers: formattedTeamMembers,
        moreInfo: formattedMoreInfo,
        middleSchoolTiming: middleSchoolTiming,
        newsletter: newsletter,
        pastNewsletters: pastNewsletters,
        subscribers: subscribers
    }
}

export async function getYoungAdultsInfo(): Promise<YoungAdultsInfo>{
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
    const youngAdultTiming = youngAdultInfoDoc.data()!.youngAdultsTiming as Timing;
    const docNewsletter = youngAdultInfoDoc.data()!.newsletter
    const newsletter: Newsletter = {
        title: docNewsletter.title,
        image: docNewsletter.image,
        date: docNewsletter.date.toDate(),
        body: docNewsletter.body
    }
    const subscribers = youngAdultInfoDoc.data()!.subscribers;
    const pastNewsletters = youngAdultInfoDoc.data()!.pastNewsletters.map((newsletter: any) => {
        return {
            title: newsletter.title,
            image: newsletter.image,
            date: newsletter.date.toDate(),
            body: newsletter.body,
        } as Newsletter
    })
    return {
        teamMembers: formattedTeamMembers,
        moreInfo: formattedMoreInfo,
        youngAdultTiming: youngAdultTiming,
        newsletter: newsletter,
        pastNewsletters: pastNewsletters,
        subscribers: subscribers
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
    const middleSchoolTiming = youthInfoDoc.data()!.middleSchoolTiming as Timing;
    const highSchoolTiming = youthInfoDoc.data()!.highSchoolTiming as Timing;
    const youngAdultTiming = youthInfoDoc.data()!.youngAdultsTiming as Timing;

    return {
        questions: formattedQuestions,
        prayerRequests: formattedPrayerRequests,
        middleSchoolTiming: middleSchoolTiming,
        highSchoolTiming: highSchoolTiming,
        youngAdultTiming: youngAdultTiming
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

export async function deletePrayerRequest(request: string){
    const infoDoc = doc(db,"youthInfo","info");
    await updateDoc(infoDoc, {
        prayerRequests: arrayRemove(request)
    })
}

export async function answerQuestion(question: string, answer: string){
    const infoDoc = doc(db,"youthInfo","info");
    await updateDoc(infoDoc, {
        questions: arrayRemove({question: question, answer: ""})
    });
    await updateDoc(infoDoc, {
        questions: arrayUnion({question: question, answer: answer})
    });
}

export async function deleteQuestion(question: string, answer: string){
    const infoDoc = doc(db,"youthInfo","info");
    await updateDoc(infoDoc, {
        questions: arrayRemove({question: question, answer: answer})
    })
}

export async function updateHighSchoolTiming(timing: Timing){
    const highSchoolDoc = doc(db,"youthInfo","HighSchool");
    await updateDoc(highSchoolDoc, {
        highSchoolTiming: {
            time: timing.time,
            day: timing.day
        }
    })
    const infoDoc = doc(db,"youthInfo","info");
    await updateDoc(infoDoc, {
        highSchoolTiming: {
            time: timing.time,
            day: timing.day
        }
    })
}

export async function updateMiddleSchoolTiming(timing: Timing){
    const middleSchoolDoc = doc(db,"youthInfo","MiddleSchool");
    await updateDoc(middleSchoolDoc, {
        middleSchoolTiming: {
            time: timing.time,
            day: timing.day
        }
    })
    const infoDoc = doc(db,"youthInfo","info");
    await updateDoc(infoDoc, {
        middleSchoolTiming: {
            time: timing.time,
            day: timing.day
        }
    })
}

export async function updateYoungAdultsTiming(timing: Timing){
    const youngAdultDoc = doc(db,"youthInfo","YoungAdults");
    await updateDoc(youngAdultDoc, {
        youngAdultsTiming: {
            time: timing.time,
            day: timing.day
        }
    })
    const infoDoc = doc(db,"youthInfo","info");
    await updateDoc(infoDoc, {
        youngAdultsTiming: {
            time: timing.time,
            day: timing.day
        }
    })
}

export async function addMoreInfo(type: "HighSchool" | "MiddleSchool" | "YoungAdults", title: string, body: string, link: string){
    const infoDoc = doc(db,"youthInfo",type);
    await updateDoc(infoDoc, {
        moreInfo: arrayUnion({title: title, body: body, link: link})
    })
}

export async function deleteMoreInfo(type: "HighSchool" | "MiddleSchool" | "YoungAdults", title: string, body: string, link: string){
    const infoDoc = doc(db,"youthInfo",type);
    await updateDoc(infoDoc, {
        moreInfo: arrayRemove({title: title, body: body, link: link})
    })
}

export async function updateMoreInfo(type: "HighSchool" | "MiddleSchool" | "YoungAdults", oldTitle: string, oldBody: string, oldLink: string, newTitle: string, newBody: string, newLink: string){
    const infoDoc = doc(db,"youthInfo",type);
    await updateDoc(infoDoc, {
        moreInfo: arrayRemove({title: oldTitle, body: oldBody, link: oldLink})
    });
    await updateDoc(infoDoc, {
        moreInfo: arrayUnion({title: newTitle, body: newBody, link: newLink})
    })
}

export async function uploadTeamMemberImage(type: "HighSchool" | "MiddleSchool" | "YoungAdults", image: File, name: string): Promise<string>{
    const storageRef = ref(storage, `${type}/TeamMembers/${name.replace(" ", "_")}.${image.name.split(".")[1]}`);
    const snapshot = await uploadBytes(storageRef, image);
    return await getDownloadURL(snapshot.ref);

}

export async function addTeamMember(type: "HighSchool" | "MiddleSchool" | "YoungAdults", teamMember: TeamMember){
    const infoDoc = doc(db,"youthInfo",type);
    await updateDoc(infoDoc, {
        teamMembers: arrayUnion({
            name: teamMember.name,
            role: teamMember.role,
            bio: teamMember.bio,
            image: teamMember.image,
            email: teamMember.email ?? "",
            phoneNumber: teamMember.phone ?? ""
        })
    })
}

export async function updateTeamMember(type: "HighSchool" | "MiddleSchool" | "YoungAdults", oldTeamMember: TeamMember, teamMember: TeamMember){
    const infoDoc = doc(db,"youthInfo",type);
    await updateDoc(infoDoc, {
        teamMembers: arrayRemove({
            name: oldTeamMember.name,
            role: oldTeamMember.role,
            bio: oldTeamMember.bio,
            image: oldTeamMember.image,
            email: oldTeamMember.email ?? "",
            phoneNumber: oldTeamMember.phone ?? ""
        })
    });
    await updateDoc(infoDoc, {
        teamMembers: arrayUnion({
            name: teamMember.name,
            role: teamMember.role,
            bio: teamMember.bio,
            image: teamMember.image,
            email: teamMember.email ?? "",
            phoneNumber: teamMember.phone ?? ""
        })
    })
}

function getExtension(link: string, type: "HighSchool" | "MiddleSchool" | "YoungAdults"){
//From a url like this: https://firebasestorage.googleapis.com/v0/b/hcyouth.appspot.com/o/HighSchool%2FTeamMembers%2FBrian_Loesel.png?alt=media&token=d0b47d05-ce74-4468-bcc8-5761aa24797d
//Return the extension: png
    const split = link.split(`${type}%2FTeamMembers%2F`)[1];
    return split.split(".")[1].split("?")[0];

}

export async function removeTeamMember(type: "HighSchool" | "MiddleSchool" | "YoungAdults", teamMember: TeamMember){
    const infoDoc = doc(db,"youthInfo",type);
    await updateDoc(infoDoc, {
        teamMembers: arrayRemove({
            name: teamMember.name,
            role: teamMember.role,
            bio: teamMember.bio,
            image: teamMember.image,
            email: teamMember.email ?? "",
            phoneNumber: teamMember.phone ?? ""
        })
    })
    //Delete image from storage
    const storageRef = ref(storage, `${type}/TeamMembers/${teamMember.name.replace(" ", "_")}.${getExtension(teamMember.image, type)}`);
    await deleteObject(storageRef);

}

export async function uploadNewsletterImage(type: "HighSchool" | "MiddleSchool" | "YoungAdults", image: File, title: string): Promise<string>{
    const storageRef = ref(storage, `${type}/Newsletters/${title.replace(" ", "_")}.${image.name.split(".")[1]}`);
    const snapshot = await uploadBytes(storageRef, image);
    return await getDownloadURL(snapshot.ref);

}

export async function updateNewsletter(type: "HighSchool" | "MiddleSchool" | "YoungAdults", newsletter: Newsletter){
    const infoDoc = doc(db,"youthInfo",type);
    await updateDoc(infoDoc, {
        newsletter: {
            title: newsletter.title,
            body: newsletter.body,
            image: newsletter.image,
            date: newsletter.date
        }
    })
}

export async function removePastNewsletter(type: "HighSchool" | "MiddleSchool" | "YoungAdults", newsletter: Newsletter){
    const infoDoc = doc(db,"youthInfo",type);
    await updateDoc(infoDoc, {
        pastNewsletters: arrayRemove({
            title: newsletter.title,
            body: newsletter.body,
            image: newsletter.image,
            date: newsletter.date
        })
    })
    const storageRef = ref(storage, `${type}/PastNewsletters/${newsletter.title.replace(" ", "_")}.${getExtension(newsletter.image, type)}`);
    await deleteObject(storageRef);
}

export async function removeSubscriber(type: "HighSchool" | "MiddleSchool" | "YoungAdults", email: string){
    const infoDoc = doc(db,"youthInfo",type);
    await updateDoc(infoDoc, {
        subscribers: arrayRemove(email)
    })
}

export async function checkAccessCode(accessCode: string): Promise<boolean>{
    const accessCodeDoc = await getDoc(doc(db,"accessCodes",accessCode));
    return accessCodeDoc.exists();
}