import{j as e,c as l,r as o,g as d,H as m,T as u,W as x,E as j,B as g,a as p}from"./index-BEdMiHXX.js";import{g as S,N as f,P as w}from"./past_newsletters_section-BspXbZKO.js";function v({teamMember:t}){return e.jsxs("div",{className:"team-member-tile",children:[e.jsx("img",{src:t.image,alt:t.name}),e.jsx("h3",{children:t.name}),e.jsx("h4",{children:t.role}),e.jsx("p",{children:t.bio})]})}function y({teamMembers:t}){return e.jsxs("div",{className:"team-section",children:[e.jsx("h2",{children:"Meet the Team"}),e.jsx("div",{className:"team",children:t.map(a=>e.jsx(v,{teamMember:a}))})]})}l(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(H,{})}));function H(){const[t,a]=o.useState(!1),[n,r]=o.useState([]),[i,h]=o.useState([{title:"January 2021 Newsletter",link:"https://example.com",date:new Date(2021,0,1)}]);return o.useEffect(()=>{d(p).then(s=>{console.log(s),r(E=>[...s.map(c=>({...c,type:""}))])}),S("HighSchool").then(s=>{h(s)})},[]),o.useEffect(()=>{const s=()=>{window.innerWidth<800?a(!0):a(!1)};return window.addEventListener("resize",s),s(),()=>window.removeEventListener("resize",s)},[]),e.jsxs(e.Fragment,{children:[!t&&e.jsx(m,{}),e.jsxs("div",{className:"content",children:[e.jsx(u,{title:"High School",description:"Our High School Youth Group is a place for high school students to connect with others and grow in their faith."}),e.jsx(x,{type:"HighSchool"}),e.jsx(j,{events:n,calendarType:"HighSchool"}),e.jsx(f,{type:"HighSchool"}),e.jsx(w,{newsletters:i}),e.jsx(y,{teamMembers:[{name:"John Doe",image:"../assets/slide_1.jpg",role:"Youth Pastor",bio:"John is the youth pastor at our church. He has been working with youth for 10 years."},{name:"Jane Smith",image:"https://example.com",role:"Youth Leader",bio:"Jane is a youth leader at our church. She has been working with youth for 5 years."}]})]}),t&&e.jsx("div",{className:"mobile-footer"}),t&&e.jsx(g,{location:"HighSchool"})]})}