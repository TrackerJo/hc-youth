import{c as u,j as e,r as s,f as h}from"./index-rdXWz94v.js";import{g as f,H as g,T as w,W as x,E as j,B as p,Y as S}from"./events_section-36nQ8mcI.js";import{N as E,P as T,M as Y,T as v}from"./more_info_section-10j-mcN0.js";u(document.getElementById("root")).render(e.jsx(s.StrictMode,{children:e.jsx(M,{})}));function M(){const[a,l]=s.useState(!1),[c,d]=s.useState([]),[t,m]=s.useState(null);return s.useEffect(()=>{f(S).then(o=>{console.log(o),d(n=>[...o.map(i=>({...i,type:""}))])}),h().then(o=>{m(o)})},[]),s.useEffect(()=>{const n=new URL(window.location.href).hash;if(console.log(n),n!==""){const i=document.querySelector(n);i&&setTimeout(()=>{i.scrollIntoView(),n!="#team"&&window.scrollBy(0,-100)},500)}const r=()=>{window.innerWidth<800?l(!0):l(!1)};return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]),e.jsxs(e.Fragment,{children:[!a&&e.jsx(g,{}),e.jsxs("div",{className:"content",children:[e.jsx(w,{title:"Young Adults",description:"Our Young Adult Group is a place for young adults to connect with others and grow in their faith."}),e.jsx(x,{type:"YoungAdults",youngAdultsTiming:(t==null?void 0:t.youngAdultTiming)??{time:"",day:""},highSchoolTiming:{time:"",day:""},middleSchoolTiming:{time:"",day:""}}),e.jsx(j,{events:c,calendarType:"YoungAdults"}),e.jsx(E,{type:"YoungAdults"}),e.jsx(T,{newsletters:(t==null?void 0:t.pastNewsletters)??[]}),e.jsx(Y,{moreInfos:(t==null?void 0:t.moreInfo)??[]}),e.jsx(v,{teamMembers:(t==null?void 0:t.teamMembers)??[]})]}),a&&e.jsx("div",{className:"mobile-footer"}),a&&e.jsx(p,{location:"YoungAdults"})]})}
