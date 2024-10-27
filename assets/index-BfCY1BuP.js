import{j as e,r as a,c as R}from"./index-5w7rvlBR.js";import{H as W,T as M,W as A,E,B as C,g as j,A as N,a as P,M as G,Y as H}from"./events_section-DWiCEr2C.js";import{a as I,b as Q,g as Y}from"./db-DKRRNKKr.js";import"./home_icon-JyOdF9My.js";function L({question:i}){return e.jsxs("div",{className:"question-tile",children:[e.jsxs("h3",{children:["Q: ",i.question]}),e.jsxs("h4",{children:["A: ",i.answer]})]})}function B({onClose:i,dialogRef:o}){const[s,v]=a.useState(""),[w,y]=a.useState(!1);return e.jsx("dialog",{ref:o,className:"ask-question-dialog",children:e.jsxs("div",{className:"ask-question-div",children:[e.jsx("h2",{children:"Ask a question"}),e.jsx("input",{type:"text",id:"question",name:"question",value:s,onChange:x=>{v(x.target.value)}}),w?e.jsx("div",{className:"loader"}):e.jsx("button",{onClick:async()=>{y(!0),await I(s),i()},children:"Submit"}),e.jsx("button",{onClick:i,children:"Cancel"})]})})}function F({questions:i}){const o=a.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"questions-section",id:"questions",children:[e.jsx("h2",{children:"Questions"}),e.jsx("div",{className:"questions",children:i.map(s=>s.answer===""?null:e.jsx(L,{question:s}))}),e.jsx("button",{onClick:()=>{var s;(s=o.current)==null||s.showModal()},children:"Ask a question"})]}),e.jsx(B,{dialogRef:o,onClose:()=>{var s;(s=o.current)==null||s.close()}})]})}function z({onClose:i,dialogRef:o}){const[s,v]=a.useState(""),[w,y]=a.useState(!1);return e.jsx("dialog",{ref:o,className:"add-prayer-request-dialog",children:e.jsxs("div",{className:"add-prayer-request-div",children:[e.jsx("h2",{children:"Add prayer request"}),e.jsx("input",{type:"text",id:"question",name:"question",value:s,onChange:x=>{v(x.target.value)}}),w?e.jsx("div",{className:"loader"}):e.jsx("button",{onClick:async()=>{y(!0),await Q(s),i()},children:"Submit"}),e.jsx("button",{onClick:i,children:"Cancel"})]})})}function O({request:i,top:o,left:s}){return e.jsx("div",{id:"prayer-request-tile-"+i.id,className:"prayer-request-tile "+(i.visible?"active":"inactive"),style:{top:o+"px",left:s+"%"},children:e.jsx("h3",{children:i.request})})}function U({requests:i}){const o=a.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"prayers-section",id:"prayers",children:[e.jsx("h2",{children:"Prayers"}),e.jsx("div",{className:"left"}),e.jsx("div",{className:"middle"}),e.jsx("div",{className:"right"}),i.map(s=>e.jsx(O,{request:s,top:s.top,left:s.left})),e.jsx("button",{onClick:()=>{var s;(s=o.current)==null||s.showModal()},children:"Add a prayer request"})]}),e.jsx(z,{dialogRef:o,onClose:()=>{var s;(s=o.current)==null||s.close()}})]})}function V(){const[i,o]=a.useState(!1),[s,v]=a.useState([]),[w,y]=a.useState([{question:"What is the meaning of life?",answer:"The meaning of life is to love and serve God"},{question:"What is the purpose of the church?",answer:"The purpose of the church is to spread the gospel and make disciples"},{question:"What is the purpose of prayer?",answer:"The purpose of prayer is to communicate with God and grow closer to Him"},{question:"What is the meaning of life?",answer:"The meaning of life is to love and serve God"},{question:"What is the purpose of the church?",answer:"The purpose of the church is to spread the gospel and make disciples"},{question:"What is the purpose of prayer?",answer:"The purpose of prayer is to communicate with God and grow closer to Him"},{question:"What is the meaning of life?",answer:"The meaning of life is to love and serve God"},{question:"What is the purpose of the church?",answer:"The purpose of the church is to spread the gospel and make disciples"},{question:"What is the purpose of prayer?",answer:"The purpose of prayer is to communicate with God and grow closer to Him"},{question:"What is the meaning of life?",answer:"The meaning of life is to love and serve God"},{question:"What is the purpose of the church?",answer:"The purpose of the church is to spread the gospel and make disciples"},{question:"What is the purpose of prayer?",answer:"The purpose of prayer is to communicate with God and grow closer to Him"},{question:"What is the meaning of life?",answer:"The meaning of life is to love and serve God"},{question:"What is the purpose of the church?",answer:"The purpose of the church is to spread the gospel and make disciples"},{question:"What is the purpose of prayer?",answer:"The purpose of prayer is to communicate with God and grow closer to Him"}]),[x,b]=a.useState([{request:"Please pray for my family as we go through a difficult time",side:"left",visible:!1,top:0,left:0,id:"4"},{request:"Please pray for my friend who is sick",side:"right",visible:!1,top:0,left:0,id:"5"},{request:"Please pray for my school as we go through a difficult time",side:"middle",visible:!1,top:0,left:0,id:"3"},{request:"Please pray for my friends as they are going through a difficult time",side:"middle",visible:!0,top:100,left:40,id:"2"},{request:"Please help me with my schoolwork",side:"left",visible:!0,top:30,left:10,id:"1"},{request:"Please help with the world as we go through a difficult time",side:"right",visible:!0,top:150,left:80,id:"6"}]),[d,T]=a.useState(null);function p(q,f){return Math.floor(Math.random()*(f-q+1)+q)}return a.useEffect(()=>{const f=new URL(window.location.href).hash;if(console.log(f),f!==""){const r=document.querySelector(f);r&&setTimeout(()=>{r.scrollIntoView(),f!="#team"&&window.scrollBy(0,-100)},500)}Y().then(r=>{T(r),y(r.questions),console.log(r);const c=[];let l=0,t=["left","right","middle"],g=0;for(let n=0;n<r.prayerRequests.length;n++){let h=0,u=0;g<3&&(t[l]==="left"?(h=30,u=10,m&&(h=80,u=10)):t[l]==="right"?(h=150,u=80,m&&(h=300,u=10)):(h=100,u=40,m&&(h=200,u=10))),c.push({request:r.prayerRequests[n].request,side:t[l],visible:g<3,top:h,left:u,id:n.toString()}),l=(l+1)%3,g++}console.log(c),b(c)});const S=()=>{window.innerWidth<800?o(!0):o(!1)};window.addEventListener("resize",S);let m=window.innerWidth<800;S();async function k(){const r=await j(N),c=(await j(P)).map(n=>({...n,type:"High School"})),l=(await j(G)).map(n=>({...n,type:"Middle School"})),t=(await j(H)).map(n=>({...n,type:"Young Adults"})),g=[...r,...c,...l,...t];g.sort((n,h)=>n.start.getTime()-h.start.getTime()),v(g)}return k(),setInterval(()=>{b(r=>{const c=r.filter(t=>t.visible===!0),l=r.filter(t=>t.visible===!1);return c.forEach(t=>{t.visible=!1}),l.sort(()=>Math.random()-.5),c.concat(l.slice(0,3).map(t=>(t.visible=!0,t.side==="left"?(t.top=Math.random()*150,t.left=Math.random()*10,m&&(t.top=p(80,120),t.left=p(0,50))):t.side==="right"?(t.top=Math.random()*150,t.left=80-Math.random()*10,m&&(t.top=p(300,360),t.left=p(0,50))):(t.top=50+Math.random()*190,t.left=45-Math.random()*10,m&&(t.top=p(190,240),t.left=p(0,50))),t))),[...r]})},5e3),()=>{window.removeEventListener("resize",S)}},[]),e.jsxs(e.Fragment,{children:[!i&&e.jsx(W,{}),e.jsxs("div",{className:"content",children:[e.jsx(M,{title:"Youth Group",description:"Our Youth Groups are designed with students in mind, talking about real issues and applying Scripture in their everyday lives."}),e.jsx(A,{type:"All",youngAdultsTiming:(d==null?void 0:d.youngAdultTiming)??{time:"",day:""},highSchoolTiming:(d==null?void 0:d.highSchoolTiming)??{time:"",day:""},middleSchoolTiming:(d==null?void 0:d.middleSchoolTiming)??{time:"",day:""}}),e.jsx(E,{events:s,calendarType:"All"}),e.jsx(U,{requests:x}),e.jsx(F,{questions:w})]}),i&&e.jsx("div",{className:"mobile-footer"}),i&&e.jsx(C,{location:""})]})}R(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(V,{})}));
