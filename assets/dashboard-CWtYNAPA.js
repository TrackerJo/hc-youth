import{j as e,r as o,c as p}from"./index-5w7rvlBR.js";import{T as q,D as w,B as T}from"./trash_icon-DGAoS_-c.js";import{f as M,h as N,i as C,u as A,j as L,k as R,g as b}from"./db-DKRRNKKr.js";import{i as Q}from"./auth-CKyPCpmT.js";import"./home_icon-JyOdF9My.js";function Y({request:t,removeRequest:l}){return e.jsxs("div",{className:"prayer-request-tile",children:[e.jsx("h3",{htmlFor:"",children:t.request}),e.jsx("img",{src:q,alt:"",onClick:async()=>{l(t.request),await M(t.request)}})]})}function H({requests:t,removeRequest:l}){return e.jsxs("div",{className:"manage-prayer-requests-section",children:[e.jsx("h2",{children:"Manage Prayer Requests"}),e.jsx("div",{className:"prayer-requests",children:t.map((s,r)=>e.jsx(Y,{request:s,removeRequest:l},r))})]})}function k({question:t,removeQuestion:l,updateQuestion:s}){const[r,c]=o.useState("");return e.jsxs("div",{className:"question-tile",children:[e.jsxs("h3",{htmlFor:"",children:["Q: ",t.question]}),t.answer!=""?e.jsxs("h4",{children:["A: ",t.answer]}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:r,onChange:h=>c(h.target.value)}),e.jsx("button",{onClick:async()=>{s(t.question,r),await N(t.question,r)},children:"Answer"})]}),e.jsx("div",{className:"question-actions",children:e.jsx("button",{onClick:async()=>{l(t.question),await C(t.question,t.answer)},children:"Delete"})})]})}function E({questions:t,removeQuestion:l,answerQuestion:s}){return e.jsxs("div",{className:"manage-questions-section",children:[e.jsx("h2",{children:"Manage Questions"}),e.jsx("div",{className:"questions",children:t.map((r,c)=>e.jsx(k,{question:r,removeQuestion:l,updateQuestion:s},c))})]})}function D({middleSchoolTiming:t,highSchoolTiming:l,youngAdultsTiming:s,setHighSchoolTiming:r,setMiddleSchoolTiming:c,setYoungAdultsTiming:h}){const[n,a]=o.useState(t),[i,d]=o.useState(l),[g,m]=o.useState(s),[v,x]=o.useState(!1),[y,j]=o.useState(!1),[f,S]=o.useState(!1);return o.useEffect(()=>{a(t),d(l),m(s)},[t,l,s]),e.jsxs("div",{className:"manage-when-section",children:[e.jsx("h2",{children:"Manage Youth Group Times"}),e.jsxs("div",{className:"yg-times",children:[e.jsxs("div",{className:"yg-time",children:[e.jsx("h3",{children:"High School"}),e.jsx("input",{type:"text",value:i.day,onChange:u=>d({...i,day:u.target.value})}),e.jsx("input",{type:"text",value:i.time,onChange:u=>d({...i,time:u.target.value})}),y?e.jsx("div",{className:"loader"}):e.jsx("button",{onClick:async()=>{j(!0),r(i),await A(i),j(!1)},children:"Save"})]}),e.jsxs("div",{className:"yg-time",children:[e.jsx("h3",{children:"Middle School"}),e.jsx("input",{type:"text",value:n.day,onChange:u=>a({...n,day:u.target.value})}),e.jsx("input",{type:"text",value:n.time,onChange:u=>a({...n,time:u.target.value})}),v?e.jsx("div",{className:"loader"}):e.jsx("button",{onClick:async()=>{x(!0),c(n),await L(n),x(!1)},children:"Save"})]}),e.jsxs("div",{className:"yg-time",children:[e.jsx("h3",{children:"Young Adults"}),e.jsx("input",{type:"text",value:g.day,onChange:u=>m({...g,day:u.target.value})}),e.jsx("input",{type:"text",value:g.time,onChange:u=>m({...g,time:u.target.value})}),f?e.jsx("div",{className:"loader"}):e.jsx("button",{onClick:async()=>{S(!0),h(g),await R(g),S(!1)},children:"Save"})]})]})]})}p(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(F,{})}));function F(){const[t,l]=o.useState(!1),[s,r]=o.useState(null),[c,h]=o.useState(!1);return o.useEffect(()=>{Q(h),b().then(a=>{r(a)});const n=()=>{window.innerWidth<800?l(!0):l(!1)};return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),e.jsxs(e.Fragment,{children:[!t&&e.jsx(w,{}),e.jsxs("div",{className:"content",children:[e.jsx(D,{youngAdultsTiming:(s==null?void 0:s.youngAdultTiming)??{time:"",day:""},highSchoolTiming:(s==null?void 0:s.highSchoolTiming)??{time:"",day:""},middleSchoolTiming:(s==null?void 0:s.middleSchoolTiming)??{time:"",day:""},setHighSchoolTiming:({time:n,day:a})=>{r(i=>i?{...i,highSchoolTiming:{time:n,day:a}}:null)},setMiddleSchoolTiming:({time:n,day:a})=>{r(i=>i?{...i,middleSchoolTiming:{time:n,day:a}}:null)},setYoungAdultsTiming:({time:n,day:a})=>{r(i=>i?{...i,youngAdultTiming:{time:n,day:a}}:null)}}),e.jsx(H,{requests:(s==null?void 0:s.prayerRequests)||[],removeRequest:n=>{r(a=>a?{...a,prayerRequests:a.prayerRequests.filter(i=>i.request!==n)}:null)}}),e.jsx(E,{questions:(s==null?void 0:s.questions)||[],removeQuestion:n=>{r(a=>a?{...a,questions:a.questions.filter(i=>i.question!==n)}:null)},answerQuestion:(n,a)=>{r(i=>i?{...i,questions:i.questions.map(d=>d.question===n?{question:n,answer:a}:d)}:null)}})]}),t&&e.jsx("div",{className:"mobile-footer"}),t&&e.jsx(T,{location:""})]})}
