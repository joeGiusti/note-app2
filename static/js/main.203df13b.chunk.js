(this["webpackJsonpnote-app4"]=this["webpackJsonpnote-app4"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),i=n(25),s=n.n(i),a=(n(32),n(9)),u=n.p+"static/media/logo.6ce24c58.svg",l=(n(33),n(3));var r=function(e){return Object(l.jsx)("div",{className:"floatingMenu "+e.menuClass,children:e.children})};function d(e){return Object(l.jsxs)("div",{className:"circleButton",onClick:e.onClick,children:[Object(l.jsx)("div",{className:"material-icons",children:e.icon}),!e.noMenu&&Object(l.jsx)(r,{menuClass:e.menuClass,children:e.children})]})}d.defaultProps={noMenu:!1,icon:"m  enu",onClick:function(){}};var j=d;function b(e){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)(j,{menuClass:" sideMenu",icon:"menu",children:[Object(l.jsx)("div",{onClick:e.newNoteProp,className:"menuItem",children:" + New + "}),e.titles.map((function(t){return Object(l.jsxs)("div",{className:"menuItem",onClick:function(){return e.loadNote(t.key)},children:[Object(l.jsx)(j,{onClick:function(){return e.editNote(t.key)},noMenu:!0,icon:"edit"}),t.title]},t.key)}))]}),Object(l.jsx)(j,{icon:"person",menuClass:"rightMenu"})]})}b.defaultProps={titles:[{title:"default title",key:"default key"}],loadNote:function(){},editNote:function(){console.log("edit note not function")},newNoteProp:function(){console.log("abc")}};var p=b;function f(e){return Object(l.jsxs)("div",{className:"noteDisplay",children:[Object(l.jsx)("div",{className:"menuItem"}),e.lines.map((function(t,n){return Object(l.jsx)("div",{className:"menuItem",onDoubleClick:function(){return e.setCounter(n)},children:t},n)})),e.children,1==e.lines.length&&Object(l.jsx)("img",{src:u,className:"App-logo",alt:"logo"})]})}f.defaultProps={lines:[],setCounter:function(){}};var m=f;function O(e){return Object(l.jsx)("div",{className:"flowButtonsContainer",children:Object(l.jsxs)("div",{className:"flowButtons",children:[Object(l.jsx)("button",{onClick:e.startFunction,children:"Start"}),Object(l.jsx)("button",{onClick:e.paused?e.resumeFunction:e.pauseFunction,children:e.paused?"Resume":"Pause"}),Object(l.jsx)("button",{onClick:e.stopFunction,children:"Stop"})]})})}O.defaultProps={startFunction:function(){console.log("no start function")},stopFunction:function(){},pauseFunction:function(){},resumeFunction:function(){},paused:!1};var v=O;function h(e){function t(){document.getElementById("noteArea").value=e.note}return Object(c.useEffect)((function(){document.getElementById("noteArea").value=e.note,document.getElementById("titleInput").value=e.title}),[]),setTimeout(t,500),Object(l.jsx)("div",{className:"noteEditContainer",children:Object(l.jsxs)("div",{className:"noteEdit",children:[Object(l.jsx)("div",{style:{position:"relative"},children:Object(l.jsx)("div",{className:"closeButton",onClick:e.closeEdit,children:"x"})}),Object(l.jsx)("input",{id:"titleInput",placeholder:"title"}),Object(l.jsx)("textarea",{id:"noteArea",placeholder:"note goes here"}),Object(l.jsxs)("div",{className:"bottomButtonContainer",children:[Object(l.jsx)("button",{onClick:e.closeEdit,children:"Cancel"}),Object(l.jsx)("button",{onClick:e.isNewNote?function(){var t=document.getElementById("noteArea").value,n=document.getElementById("titleInput").value;e.saveNewNote(t,n)}:function(){var t=document.getElementById("noteArea").value,n=document.getElementById("titleInput").value;e.saveFunction(e.keyProp,t,n)},children:"Save"})]}),e.note]})})}h.defaultProps={closeEdit:function(){},saveFunction:function(){},note:"loading",title:"loading",isNewNote:!1};var x=h;var g=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jgjHUUiq5EM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})},N=n(26),y=n(10);var k=function(){var e=Object(c.useState)([{title:"init title",key:"init key"},{title:"init title 2",key:"init key 2"}]),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(!1),s=Object(a.a)(i,2),u=s[0],r=s[1],d=Object(c.useState)(["load a note"]),j=Object(a.a)(d,2),b=j[0],f=j[1],O=Object(c.useState)(!1),h=Object(a.a)(O,2),k=h[0],C=h[1],w=Object(c.useState)("note"),I=Object(a.a)(w,2),S=I[0],E=I[1],F=Object(c.useState)("title"),B=Object(a.a)(F,2),P=B[0],M=B[1],A=Object(c.useState)("key"),D=Object(a.a)(A,2),T=D[0],U=D[1],K=Object(c.useState)(!1),L=Object(a.a)(K,2),Y=L[0],q=L[1],J=0,R=null,z=Object(N.a)({apiKey:"AIzaSyBDWCKZwSBi_Qp4U0u3D2tKrcIU290IrDE",authDomain:"defaultproject-c023e.firebaseapp.com",databaseURL:"https://defaultproject-c023e-default-rtdb.firebaseio.com",projectId:"defaultproject-c023e",storageBucket:"defaultproject-c023e.appspot.com",messagingSenderId:"147977670881",appId:"1:147977670881:web:fe1532718095f374bbe7a0",measurementId:"G-VY1DMS0BKY"}),G=Object(y.a)(z),H=!1;function Q(e,t,n){Object(y.e)(Object(y.d)(G,"note-app/titles/"+e),n),Object(y.e)(Object(y.d)(G,"note-app/notes/"+e),t)}Object(c.useEffect)((function(){return function(){var e=[];Object(y.b)(Object(y.d)(G,"note-app/titles/"),(function(t){t.forEach((function(t){e.push({title:t.val(),key:t.key})})),o(e)}))}(),function(){}}),[]);var V=new SpeechSynthesisUtterance;function W(){J>=b.length&&(J=0);var e=b[J].replace("  "," ").replace(" , "," comma, ").replace("(","par, ").replace("["," square, ").replace("-"," dash, ").replace(" ",", ").replace("=>"," arrow, ");console.log("counter in next: "+J),function(e){V.text=e,window.speechSynthesis.speak(V)}(e),++J>=b.length&&(J=0),R=setTimeout(W,5e3)}return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(p,{titles:n,loadNote:function(e){var t=[];Object(y.b)(Object(y.d)(G,"note-app/notes/"+e),(function(e){t=e.val().split("\n"),f(t)}))},editNote:function(e){U(e),Object(y.b)(Object(y.d)(G,"note-app/notes/"+e),(function(e){return E(e.val())})),Object(y.b)(Object(y.d)(G,"note-app/titles/"+e),(function(e){return M(e.val())})),q(!1),r(!0)},newNoteProp:function(){E(""),M(""),U(""),q(!0),r(!0)}}),Object(l.jsx)(v,{startFunction:function(){H||(H=!0,C(!1),!1,W())},stopFunction:function(){C(!0),H=!1,clearTimeout(R)},pauseFunction:function(){H=!1,clearTimeout(R)},resumeFunction:function(){C(!1),!1,W()},paused:k}),Object(l.jsx)(m,{lines:b,setCounter:function(e){J=e,console.log("counter is now: "+J)}}),u&&Object(l.jsx)(x,{closeEdit:function(){r(!1)},note:S,title:P,saveFunction:Q,keyProp:T,saveNewNote:function(e,t){Q(Object(y.c)(Object(y.d)(G,"note-app/titles")).key,e,t),r(!1)},isNewNote:Y},T),Object(l.jsx)(g,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),C()}},[[38,1,2]]]);
//# sourceMappingURL=main.203df13b.chunk.js.map