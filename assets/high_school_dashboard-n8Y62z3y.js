import{c as f,j as r,r as m}from"./index-5w7rvlBR.js";import{d as M,l as w,r as h,m as N,n as S,o as H,p as x,q as j}from"./db-Db5_hjbs.js";import{D as T,B as y}from"./trash_icon-CGJcnPRh.js";import{M as E,a as I,b as L}from"./manage_newsletter_section-C--0Sm9-.js";import{i as B}from"./auth-mW2MEUfn.js";import"./home_icon-BIvrAuEt.js";f(document.getElementById("root")).render(r.jsx(m.StrictMode,{children:r.jsx(D,{})}));function D(){const[d,u]=m.useState(!1),[a,n]=m.useState(null),[g,c]=m.useState([]),[z,b]=m.useState(!1);return m.useEffect(()=>{B(b),M().then(e=>{n(e),c((e==null?void 0:e.moreInfo)??[]),console.log(e)});const t=()=>{window.innerWidth<800?u(!0):u(!1)};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),r.jsxs(r.Fragment,{children:[!d&&r.jsx(T,{}),r.jsxs("div",{className:"content",children:[r.jsx("h1",{children:"High School"}),r.jsx(E,{type:"HighSchool",pastNewsletters:(a==null?void 0:a.pastNewsletters)??[],subscribers:(a==null?void 0:a.subscribers)??[],newsletter:(a==null?void 0:a.newsletter)??{title:"",images:[],date:new Date},updateNewsletter:t=>{n(e=>e&&{...e,newsletter:t}),w("HighSchool",t)},removeNewsletter:t=>{n(e=>{if(e){const o=e.pastNewsletters.find(s=>s.title===t);h("HighSchool",o),e={...e,pastNewsletters:e.pastNewsletters.filter(s=>s.title!==t)}}return e})},removeSubscriber:t=>{n(e=>(e&&(N("HighSchool",t),e={...e,subscribers:e.subscribers.filter(o=>o!==t)}),e))}}),r.jsx(I,{moreInfos:g??[],updateMoreInfo:(t,e,o,s)=>{c(i=>(i&&(i=i.map(l=>l.title===t?(console.log("Updating"),console.log(l),console.log("To"),console.log({title:e,body:o,link:s}),S("HighSchool",l.title,l.body,l.link,e,o,s),{title:e,body:o,link:s}):l)),i))},removeMoreInfo:async t=>{c(e=>{if(e){const o=e.find(s=>s.title===t);e=e.filter(s=>s.title!==t),H("HighSchool",o.title,o.body,o.link)}return e})},addMoreInfo:async()=>{c(t=>(t&&(t=[...t,{title:"New Title "+t.length,body:"New Body",link:"New Link"}],console.log(t)),t))}}),r.jsx(L,{type:"HighSchool",teamMembers:(a==null?void 0:a.teamMembers)??[],addTeamMember:()=>{n(t=>(t&&(t={...t,teamMembers:[...t.teamMembers,{name:"",role:"",email:"",phone:"",imageId:"",bio:"",image:""}]}),t))},removeTeamMember:t=>{n(e=>{if(e){const o=e.teamMembers.find(s=>s.name===t);o.name!==""&&x("HighSchool",o),e={...e,teamMembers:e.teamMembers.filter(s=>s.name!==t)}}return e})},updateTeamMember:(t,e,o)=>{console.log("Updating"),console.log(e),n(s=>(s&&(s={...s,teamMembers:s.teamMembers.map(i=>i.name===t?(j("HighSchool",i,e),e):i)}),s))}})]}),d&&r.jsx("div",{className:"mobile-footer"}),d&&r.jsx(y,{location:"HighSchool"})]})}
