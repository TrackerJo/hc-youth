import{c as f,j as r,r as m}from"./index-5w7rvlBR.js";import{c as g,l as w,r as h,m as N,n as S,o as x,p as j,q as T}from"./db-Db5_hjbs.js";import{D as y,B as E}from"./trash_icon-CGJcnPRh.js";import{M as I,a as L,b as B}from"./manage_newsletter_section-C--0Sm9-.js";import{i as D}from"./auth-mW2MEUfn.js";import"./home_icon-BIvrAuEt.js";f(document.getElementById("root")).render(r.jsx(m.StrictMode,{children:r.jsx(z,{})}));function z(){const[c,M]=m.useState(!1),[a,n]=m.useState(null),[u,d]=m.useState([]),[R,b]=m.useState(!1);return m.useEffect(()=>{D(b),g().then(e=>{n(e),d((e==null?void 0:e.moreInfo)??[]),console.log(e)});const t=()=>{window.innerWidth<800?M(!0):M(!1)};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),r.jsxs(r.Fragment,{children:[!c&&r.jsx(y,{}),r.jsxs("div",{className:"content",children:[r.jsx("h1",{children:"Middle School"}),r.jsx(I,{type:"MiddleSchool",pastNewsletters:(a==null?void 0:a.pastNewsletters)??[],subscribers:(a==null?void 0:a.subscribers)??[],newsletter:(a==null?void 0:a.newsletter)??{title:"",images:[],date:new Date},updateNewsletter:t=>{n(e=>e&&{...e,newsletter:t}),w("MiddleSchool",t)},removeNewsletter:t=>{n(e=>{if(e){const o=e.pastNewsletters.find(s=>s.title===t);h("MiddleSchool",o),e={...e,pastNewsletters:e.pastNewsletters.filter(s=>s.title!==t)}}return e})},removeSubscriber:t=>{n(e=>(e&&(N("MiddleSchool",t),e={...e,subscribers:e.subscribers.filter(o=>o!==t)}),e))}}),r.jsx(L,{moreInfos:u??[],updateMoreInfo:(t,e,o,s)=>{d(i=>(i&&(i=i.map(l=>l.title===t?(console.log("Updating"),console.log(l),console.log("To"),console.log({title:e,body:o,link:s}),S("MiddleSchool",l.title,l.body,l.link,e,o,s),{title:e,body:o,link:s}):l)),i))},removeMoreInfo:async t=>{d(e=>{if(e){const o=e.find(s=>s.title===t);e=e.filter(s=>s.title!==t),x("MiddleSchool",o.title,o.body,o.link)}return e})},addMoreInfo:async()=>{d(t=>(t&&(t=[...t,{title:"New Title "+t.length,body:"New Body",link:"New Link"}],console.log(t)),t))}}),r.jsx(B,{type:"MiddleSchool",teamMembers:(a==null?void 0:a.teamMembers)??[],addTeamMember:()=>{n(t=>(t&&(t={...t,teamMembers:[...t.teamMembers,{name:"",role:"",email:"",phone:"",imageId:"",bio:"",image:""}]}),t))},removeTeamMember:t=>{n(e=>{if(e){const o=e.teamMembers.find(s=>s.name===t);o.name!==""&&j("MiddleSchool",o),e={...e,teamMembers:e.teamMembers.filter(s=>s.name!==t)}}return e})},updateTeamMember:(t,e,o)=>{n(s=>(s&&(s={...s,teamMembers:s.teamMembers.map(i=>i.name===t?(T("MiddleSchool",i,e),e):i)}),s))}})]}),c&&r.jsx("div",{className:"mobile-footer"}),c&&r.jsx(E,{location:"MiddleSchool"})]})}
