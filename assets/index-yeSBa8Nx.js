import{j as e,r as o,H as j,T,W as S,E as W,B as M,g as d,A as b,a as E,M as q,Y as G,c as R}from"./index-BEdMiHXX.js";function H({question:s}){return e.jsxs("div",{className:"question-tile",children:[e.jsxs("h3",{children:["Q: ",s.question]}),e.jsxs("h4",{children:["A: ",s.answer]})]})}function A({questions:s}){return e.jsxs("div",{className:"questions-section",children:[e.jsx("h2",{children:"Questions"}),e.jsx("div",{className:"questions",children:s.map(i=>e.jsx(H,{question:i}))})]})}function C({request:s,top:i,left:c}){const[g,u]=o.useState(0),[v,p]=o.useState(0),n=o.useRef(null);return o.useEffect(()=>{n.current&&(n.current.getBoundingClientRect().right>window.innerWidth&&p(80-n.current.getBoundingClientRect().width/window.innerWidth*100),n.current.getBoundingClientRect().bottom>window.innerHeight&&u(80-n.current.getBoundingClientRect().height/window.innerHeight*100))},[]),e.jsx("div",{id:"prayer-request-tile-"+s.id,className:"prayer-request-tile "+(s.visible?"active":"inactive"),style:{top:i+"px",left:c+"%"},ref:n,children:e.jsx("h3",{children:s.request})})}function I({requests:s}){return e.jsxs("div",{className:"prayers-section",children:[e.jsx("h2",{children:"Prayers"}),s.map(i=>e.jsx(C,{request:i,top:i.top,left:i.left}))]})}function P(){const[s,i]=o.useState(!1),[c,g]=o.useState([]),[u,v]=o.useState([{question:"What is the meaning of life?",answer:"The meaning of life is to love and serve God"},{question:"What is the purpose of the church?",answer:"The purpose of the church is to spread the gospel and make disciples"},{question:"What is the purpose of prayer?",answer:"The purpose of prayer is to communicate with God and grow closer to Him"},{question:"What is the meaning of life?",answer:"The meaning of life is to love and serve God"},{question:"What is the purpose of the church?",answer:"The purpose of the church is to spread the gospel and make disciples"},{question:"What is the purpose of prayer?",answer:"The purpose of prayer is to communicate with God and grow closer to Him"},{question:"What is the meaning of life?",answer:"The meaning of life is to love and serve God"},{question:"What is the purpose of the church?",answer:"The purpose of the church is to spread the gospel and make disciples"},{question:"What is the purpose of prayer?",answer:"The purpose of prayer is to communicate with God and grow closer to Him"},{question:"What is the meaning of life?",answer:"The meaning of life is to love and serve God"},{question:"What is the purpose of the church?",answer:"The purpose of the church is to spread the gospel and make disciples"},{question:"What is the purpose of prayer?",answer:"The purpose of prayer is to communicate with God and grow closer to Him"},{question:"What is the meaning of life?",answer:"The meaning of life is to love and serve God"},{question:"What is the purpose of the church?",answer:"The purpose of the church is to spread the gospel and make disciples"},{question:"What is the purpose of prayer?",answer:"The purpose of prayer is to communicate with God and grow closer to Him"}]),[p,n]=o.useState([{request:"Please pray for my family as we go through a difficult time",side:"left",visible:!1,top:0,left:0,id:"4"},{request:"Please pray for my friend who is sick",side:"right",visible:!1,top:0,left:0,id:"5"},{request:"Please pray for my school as we go through a difficult time",side:"middle",visible:!1,top:0,left:0,id:"3"},{request:"Please pray for my friends as they are going through a difficult time",side:"middle",visible:!0,top:100,left:40,id:"2"},{request:"Please help me with my schoolwork",side:"left",visible:!0,top:30,left:10,id:"1"},{request:"Please help with the world as we go through a difficult time",side:"right",visible:!0,top:150,left:80,id:"6"}]);return o.useEffect(()=>{console.log("AIzaSyBQShcvcK7MSvfgDIIvde_bRDGaQo6YCdA");const f=()=>{window.innerWidth<800?i(!0):i(!1)};window.addEventListener("resize",f);let m=window.innerWidth<800;f();async function y(){const a=await d(b),l=(await d(E)).map(r=>({...r,type:"High School"})),h=(await d(q)).map(r=>({...r,type:"Middle School"})),t=(await d(G)).map(r=>({...r,type:"Young Adults"})),w=[...a,...l,...h,...t];w.sort((r,x)=>r.start.getTime()-x.start.getTime()),g(w)}return y(),setInterval(()=>{n(a=>{const l=a.filter(t=>t.visible===!0),h=a.filter(t=>t.visible===!1);return l.forEach(t=>{t.visible=!1}),h.sort(()=>Math.random()-.5),l.concat(h.slice(0,3).map(t=>(t.visible=!0,t.side==="left"?(t.top=Math.random()*150,t.left=Math.random()*10,m&&(t.top=50+Math.random()*80,t.left=5+Math.random()*50)):t.side==="right"?(t.top=Math.random()*150,t.left=80-Math.random()*10,m&&(t.top=120+Math.random()*130,t.left=40+Math.random()*60)):(t.top=50+Math.random()*190,t.left=45-Math.random()*10,m&&(t.top=180+Math.random()*190,t.left=10+Math.random()*60)),t))),[...a]})},5e3),()=>{window.removeEventListener("resize",f)}},[]),e.jsxs(e.Fragment,{children:[!s&&e.jsx(j,{}),e.jsxs("div",{className:"content",children:[e.jsx(T,{title:"Youth Group",description:"Our Youth Groups are designed with students in mind, talking about real issues and applying Scripture in their everyday lives."}),e.jsx(S,{type:"All"}),e.jsx(W,{events:c,calendarType:"All"}),e.jsx(I,{requests:p}),e.jsx(A,{questions:u})]}),s&&e.jsx("div",{className:"mobile-footer"}),s&&e.jsx(M,{location:""})]})}R(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(P,{})}));