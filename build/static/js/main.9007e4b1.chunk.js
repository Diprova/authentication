(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{130:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var r,n=a(0),s=a(95),c=a(47),o=a(36),i=a(44),l=a(100),j=a(16),d={user:[]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_USER":return Object(j.a)(Object(j.a)({},e),{},{user:t.payload});case"LOGIN":return localStorage.setItem("access-token",t.payload),Object(j.a)(Object(j.a)({},e),{},{userAccess:t.payload});default:return e}},u=Object(i.b)({auth:b}),h=a(97),m=Object(i.d)(u,Object(h.a)(Object(i.a)(l.a))),p=(a(130),a(17)),O=["title","titleId"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},x.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function w(e,t){var a=e.title,s=e.titleId,c=f(e,O);return n.createElement("div",{className:"custom-shape-divider-bottom-1664514455"},n.createElement("svg",x({"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",ref:t,"aria-labelledby":s},c),a?n.createElement("title",{id:s},a):null,r||(r=n.createElement("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",className:"shape-fill"}))))}var g=n.forwardRef(w),v=(a.p,a(13)),y=a(218),I=a(105),S=a(215),P=a(71),k=a.n(P),C="https://auth-check.herokuapp.com",N=a(1),E=function(){var e=Object(n.useState)(null),t=Object(v.a)(e,2),a=t[0],r=t[1],s=Object(p.g)(),c=(Object(o.b)(),Boolean(a));return Object(N.jsxs)("div",{className:"signUp",children:[Object(N.jsx)(y.a,{src:"/broken-image.jpg",className:"avatar","aria-controls":c?"simple-menu":void 0,"aria-haspopup":"true","aria-expanded":c?"true":void 0,style:{cursor:"pointer"},sx:{width:70,height:70},onClick:function(e){r(e.currentTarget)}}),Object(N.jsxs)(I.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:c,onClose:function(){r(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},style:{marginTop:"0.5rem"},transformOrigin:{horizontal:"center"},children:[Object(N.jsx)(S.a,{onClick:function(){return s.push("/signUp")},children:"Sign Up"}),Object(N.jsx)(S.a,{onClick:function(){return s.push("/signIn")},children:"Sign In"}),Object(N.jsx)(S.a,{onClick:function(){localStorage.clear(),window.location.href="/"},children:"Sign Out"})]})]})},R=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(E,{}),Object(N.jsx)(g,{}),Object(N.jsx)("div",{className:"entance roll-in-left",children:Object(N.jsx)("h1",{className:"hightlight tracking-in-expand",children:"Build Your Profile"})})]})},U=a(3),_=a(214),z=a(223),A=a(224),T=a(219),L=a(212),M=a(216),B=a(222),D=a(220),$=a(210),V=a(211),G=(a(94),function(){var e=Object(o.c)((function(e){return e.auth})).user,t=Object(n.useState)({name:"",email:"",password:"",confirmPassword:"",showPassword:!1}),a=Object(v.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)({state:!1,errorInfo:""}),i=Object(v.a)(c,2),l=i[0],d=i[1],b=Object(o.b)(),u=function(e){var t=e.target,a=t.name,n=t.value;s(Object(j.a)(Object(j.a)({},r),{},Object(U.a)({},a,n)))},h=function(e){var t=!0,a={};(void 0!==e.name&&""===e.name&&(t=!1,a.name="Required"),void 0===e.email||""!==e.email&&""===e.email)||(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(t=!1,a.email="Enter a valid Email"));if(void 0!==e.password){/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_\u20b9]).{8,}$/.test(e.password)||(t=!1,a.password="Enter a Valid Password")}return void 0!==e.confirmPassword&&e.confirmPassword!==e.password&&(t=!1,a.confirmPassword="Your password does not match"),{isValid:t,errors:a}};return Object(N.jsxs)("div",{children:[e.success&&Object(N.jsx)(_.a,{severity:"success",children:"Successfully Signed Up!"})&&Object(N.jsx)(p.a,{to:"/signIn"}),Object(N.jsx)(z.a,{className:"signup_structure",children:Object(N.jsx)(A.a,{children:Object(N.jsx)("form",{onSubmit:function(e){e.preventDefault(),d(l.state=!1);var t,a=h(r).errors;!Object.keys(a).length>0?(delete r.showPassword,b((t=r,function(e){k.a.post("".concat(C,"/createUser"),t).then((function(t){e({type:"CREATE_USER",payload:t.data})})).catch((function(e){return console.log(e)}))}))):d(Object(j.a)(Object(j.a)({},l),{},{state:!0,errorInfo:a}))},className:"signup_form ",children:Object(N.jsxs)(T.a,{container:!0,alignItems:"center",justify:"center",direction:"column",rowSpacing:1,children:[Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)("h4",{children:"Sign Up"})}),Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(L.a,{id:l.length&&l.errorInfo.name?"outlined-error":"outlined-name",name:"name",label:"Name",type:"text",value:r.name,onChange:u,error:!!(l.state&&l.errorInfo&&l.errorInfo.name),helperText:l.state?l.errorInfo.name:""})}),Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(L.a,{id:l.state&&l.errorInfo.email?"outlined-error":"outlined-name",name:"email",label:"Email",type:"email",value:r.email,onChange:u,error:!!(l.state&&l.errorInfo&&l.errorInfo.email),helperText:l.state?l.errorInfo.email:""})}),Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(L.a,{id:l.state&&l.errorInfo.password?"outlined-error":"outlined-name",name:"password",label:"Create Password",type:r.showPassword?"text":"password",value:r.password,onChange:u,error:!!(l.state&&l.errorInfo&&l.errorInfo.password),helperText:l.state?l.errorInfo.password:"",InputProps:{endAdornment:Object(N.jsx)(M.a,{position:"end",children:Object(N.jsx)(B.a,{"aria-label":"toggle password visibility",onMouseDown:function(){s(Object(j.a)(Object(j.a)({},r),{},{showPassword:!r.showPassword}))},onMouseUp:function(e){s(Object(j.a)(Object(j.a)({},r),{},{showPassword:!r.showPassword}))},edge:"end",children:r.showPassword?Object(N.jsx)($.a,{fontSize:"small"}):Object(N.jsx)(V.a,{fontSize:"small"})})})}})}),Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(L.a,{id:l.state&&l.errorInfo.confirmPassword?"outlined-error":"outlined-name",name:"confirmPassword",label:"Confirm Password",type:"password",value:r.confirmPassword,onChange:u,error:!!(l.state&&l.errorInfo&&l.errorInfo.confirmPassword),helperText:l.state?l.errorInfo.confirmPassword:""})}),l&&l.errorInfo&&l.errorInfo.password?Object(N.jsx)(z.a,{className:"error_info",children:Object(N.jsxs)(A.a,{children:[Object(N.jsx)("p",{children:"It contains at least 8 characters and at most 20 characters."}),Object(N.jsx)("p",{children:"It contains at least one digit."}),Object(N.jsx)("p",{children:"It contains at least one upper case alphabet."}),Object(N.jsx)("p",{children:"It contains at least one lower case alphabet."}),Object(N.jsx)("p",{children:"It contains at least one special character which includes !@#$%&*()-+=^."}),Object(N.jsx)("p",{children:"It doesn\u2019t contain any white space."})]})}):null,Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(D.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})})]})})})})]})}),J=function(){var e=Object(o.c)((function(e){return e.auth})).userAccess,t=Object(n.useState)({email:"",password:"",showPassword:!1}),a=Object(v.a)(t,2),r=a[0],s=a[1],c=Object(o.b)(),i=function(e){var t=e.target,a=t.name,n=t.value;s(Object(j.a)(Object(j.a)({},r),{},Object(U.a)({},a,n)))};return Object(N.jsx)(z.a,{className:"signup_structure",children:Object(N.jsxs)(A.a,{children:[e&&Object(N.jsx)(p.a,{to:"/profile"}),Object(N.jsx)("form",{onSubmit:function(e){var t;e.preventDefault(),delete r.showPassword,console.log(r),c((t=r,function(e){k.a.post("".concat(C,"/login"),t).then((function(t){e({type:"LOGIN",payload:t.data})})).catch((function(e){console.log(e),alert("Wrong Credentials")}))}))},className:"signup_form ",children:Object(N.jsxs)(T.a,{container:!0,alignItems:"center",justify:"center",direction:"column",rowSpacing:1,children:[Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)("h4",{children:"Sign In"})}),Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(L.a,{id:"outlined-name",name:"email",label:"Email",type:"text",value:r.name,onChange:i})}),Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(L.a,{id:"outlined-name",name:"password",label:"Password",type:r.showPassword?"text":"password",value:r.password,onChange:i,InputProps:{endAdornment:Object(N.jsx)(M.a,{position:"end",children:Object(N.jsx)(B.a,{"aria-label":"toggle password visibility",onMouseDown:function(){s(Object(j.a)(Object(j.a)({},r),{},{showPassword:!r.showPassword}))},onMouseUp:function(){s(Object(j.a)(Object(j.a)({},r),{},{showPassword:!r.showPassword}))},edge:"end",children:r.showPassword?Object(N.jsx)($.a,{fontSize:"small"}):Object(N.jsx)(V.a,{fontSize:"small"})})})}})}),Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(D.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})})]})})]})})},Y=(a(162),function(){var e=Object(n.useState)({name:"",occupation:"",skills:"",projects:""}),t=Object(v.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(),c=Object(v.a)(s,2),o=c[0],i=c[1],l=function(e){var t=e.target,n=t.name,s=t.value;r(Object(j.a)(Object(j.a)({},a),{},Object(U.a)({},n,s)))};return console.log(a,"---profile data"),Object(N.jsx)("div",{className:"submission",children:Object(N.jsxs)("div",{children:[Object(N.jsxs)(D.a,{component:"label",children:[Object(N.jsx)(y.a,{src:o||"/broken-image.jpg",className:"avatar","aria-controls":open?"simple-menu":void 0,"aria-haspopup":"true","aria-expanded":open?"true":void 0,style:{cursor:"pointer"},sx:{width:70,height:70}}),Object(N.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:function(e){console.log(URL.createObjectURL(e.target.files[0])),i(URL.createObjectURL(e.target.files[0])),a.image="".concat(o)}})]}),Object(N.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(a)},children:Object(N.jsxs)(T.a,{container:!0,alignItems:"center",justify:"center",direction:"column",rowSpacing:1,children:[Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(L.a,{id:"standard-multiline-static",name:"name",label:"Name",type:"text",multiline:!0,rows:1,variant:"standard",value:a.name,onChange:l})}),Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(L.a,{id:"outlined-multiline-flexible",name:"ocupation",label:"Ocupation",type:"text",multiline:!0,rows:3,variant:"standard",value:a.ocupation,onChange:l})}),Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(L.a,{id:"standard-multiline-static",name:"skills",label:"Skill Set",type:"text",multiline:!0,rows:2,variant:"standard",value:a.skills,onChange:l})}),Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(L.a,{id:"standard-multiline-static",name:"projects",label:"Benchmark Poject",type:"text",multiline:!0,rows:5,variant:"standard",value:a.projects,onChange:l})}),Object(N.jsx)(T.a,{item:!0,children:Object(N.jsx)(D.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})})]})})]})})}),Z=a(225),q=function(){return Object(N.jsxs)("div",{className:"report",children:[Object(N.jsx)(y.a,{sx:{bgcolor:"deepOrange[500]"},src:"/broken-image.jpg","aria-controls":"simple-menu","aria-haspopup":"true",className:"profile_img"}),Object(N.jsx)("div",{className:"report_data",children:Object(N.jsxs)(T.a,{container:!0,alignItems:"center",justify:"center",direction:"column",rowSpacing:1,children:[Object(N.jsxs)(T.a,{item:!0,children:[Object(N.jsx)("h3",{children:"Name : "}),Object(N.jsx)(Z.a,{sx:{width:300,height:50,border:"1px solid",borderRadius:"10px","&:hover":{backgroundColor:"primary.main",opacity:[.9,.8,.7]}}})]}),Object(N.jsxs)(T.a,{item:!0,children:[Object(N.jsx)("h3",{children:"Occupation :"}),Object(N.jsx)(Z.a,{sx:{width:300,height:50,border:"1px solid",borderRadius:"10px","&:hover":{backgroundColor:"primary.main",opacity:[.9,.8,.7]}}})]}),Object(N.jsxs)(T.a,{item:!0,children:[Object(N.jsx)("h3",{children:"Skill Sets :"}),Object(N.jsx)(Z.a,{sx:{width:300,height:80,border:"1px solid",borderRadius:"10px","&:hover":{backgroundColor:"primary.main",opacity:[.9,.8,.7]}}})]}),Object(N.jsxs)(T.a,{item:!0,children:[Object(N.jsx)("h3",{children:"Benchmark Project :"}),Object(N.jsx)(Z.a,{sx:{width:300,height:100,border:"1px solid",borderRadius:"10px","&:hover":{backgroundColor:"primary.main",opacity:[.9,.8,.7]}}})]})]})})]})},F=function(){return Object(N.jsxs)("div",{className:"profile",children:[Object(N.jsx)(E,{}),Object(N.jsx)(Y,{}),Object(N.jsx)(q,{})]})};function H(){return Object(N.jsx)(c.a,{children:Object(N.jsxs)(p.d,{children:[Object(N.jsx)(p.b,{exact:!0,path:"/",component:R}),Object(N.jsx)(p.b,{path:"/signUp",component:G}),Object(N.jsx)(p.b,{path:"/signIn",component:J}),Object(N.jsx)(p.b,{path:"/profile",component:F})]})})}var W=document.getElementById("root");Object(s.createRoot)(W).render(Object(N.jsx)(o.a,{store:m,children:Object(N.jsx)(n.StrictMode,{children:Object(N.jsx)(c.a,{children:Object(N.jsx)(H,{})})})}))},94:function(e,t,a){}},[[163,1,2]]]);
//# sourceMappingURL=main.9007e4b1.chunk.js.map