(this.webpackJsonpusereducer=this.webpackJsonpusereducer||[]).push([[0],{58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(19),s=c.n(r),i=c(10),j=c(8),b=c(2),u=c(4),o={count:0,countInterval:1,increment:!0},l=function(e,t){switch(t.type){case"INCREMENT":return Object(u.a)(Object(u.a)({},e),{},{increment:t.increment});case"SET INTERVAL":return Object(u.a)(Object(u.a)({},e),{},{countInterval:parseInt(t.countInterval)});case"INCREASE_COUNT":return Object(u.a)(Object(u.a)({},e),{},{count:e.count+e.countInterval});case"DECREASE_COUNT":return Object(u.a)(Object(u.a)({},e),{},{count:e.count-e.countInterval});case"RESTART":return o;default:return e}},d=c(0),O=function(){var e=Object(n.useReducer)(l,o),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(d.jsxs)("div",{className:"padre",children:[Object(d.jsx)("h1",{id:"title",children:"HOOK USEREDUCER BY DAVID"}),Object(d.jsx)("p",{id:"cuenta",children:"Cuenta: "+c.count}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",id:"check",defaultChecked:c.increment,onChange:function(e){var t=e.target.checked;a({type:"INCREMENT",increment:t})}}),Object(d.jsx)("label",{htmlFor:"check",children:"Incrementar"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{id:"cuenta",htmlFor:"interval",children:"Intervalo"}),Object(d.jsx)("input",{type:"text",id:"interval",value:c.countInterval,onChange:function(e){var t=e.target.value;a({type:"SET INTERVAL",countInterval:t})}})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{id:"btn1",onClick:function(e){c.increment?a({type:"INCREASE_COUNT"}):a({type:"DECREASE_COUNT"})},children:c.increment?"INCREMENTAR":"DECREMENTAR"}),Object(d.jsx)("button",{id:"btn2",onClick:function(e){a({type:"RESTART"})},children:"REINICIAR"})]})},h=Object(n.createContext)(null),x="[Auth] Login",p="[Auth] Logout",v={auth:{}},m=function(e,t){switch(t.type){case x:return{uid:t.payload.uid,name:t.payload.displayName};case p:return{};default:return e}},E=function(){var e=Object(n.useContext)(h),t=e.isAuth,c=e.setIsAuth,a=Object(n.useReducer)(m,v),r=Object(i.a)(a,2),s=r[0],j=r[1];return console.log(s),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Login"}),Object(d.jsx)("hr",{}),Object(d.jsx)("label",{children:"EMAIL: "}),Object(d.jsx)("input",{id:"email",tipe:"email",placeholder:"Email",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"PASSWORD:"}),Object(d.jsx)("input",{id:"password",type:"password",placeholder:"Password",required:!0}),Object(d.jsxs)("p",{children:[s.name,s.uid]}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:t}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(e){j({type:x,payload:{uid:"123",displayName:"David Cardona"}}),c(!0)},children:"Login"}),Object(d.jsx)("button",{className:"btn btn-danger",children:"Logout"})]})},A=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{exact:!0,path:"/auth/login",component:E}),Object(d.jsx)(b.a,{to:"/auth/login"})]})})})},C=c(12),I=function(){var e=Object(n.useContext)(h).setIsAuth;return Object(d.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)(j.b,{class:"navbar-brand",to:"/",children:"useReducer"}),Object(d.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(d.jsxs)("div",{class:"navbar-nav",children:[Object(d.jsx)(j.b,{class:"nav-link active","aria-current":"page",to:"/",children:"Home"}),Object(d.jsx)(j.b,{class:"nav-link",to:"/auth/login",children:"Login"})]})}),Object(d.jsx)("div",{class:"d-flex",children:Object(d.jsx)("button",{class:"btn btn-outline-success",type:"submit",onClick:function(){return e(!1)},children:"Logout"})})]})})},f=function(e){var t=e.isAuthenticated,c=e.component,n=Object(C.a)(e,["isAuthenticated","component"]);return Object(d.jsxs)("div",{children:[Object(d.jsx)(I,{}),Object(d.jsx)(b.b,Object(u.a)(Object(u.a)({},n),{},{component:function(e){return t?Object(d.jsx)(c,Object(u.a)({},e)):Object(d.jsx)(b.a,{to:"/auth/login"})}}))]})},R=function(e){var t=e.isAuthenticated,c=e.component,n=Object(C.a)(e,["isAuthenticated","component"]);return Object(d.jsx)(b.b,Object(u.a)(Object(u.a)({},n),{},{component:function(e){return t?Object(d.jsx)(b.a,{to:"/"}):Object(d.jsx)(c,Object(u.a)({},e))}}))},N=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(d.jsx)(h.Provider,{value:{isAuth:c,setIsAuth:a},children:Object(d.jsx)(j.a,{children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(R,{path:"/auth",component:A,isAuthenticated:c}),Object(d.jsx)(f,{path:"/",component:O,isAuthenticated:c})]})})})};c(35),c(36),c(58);s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.eba47c7d.chunk.js.map