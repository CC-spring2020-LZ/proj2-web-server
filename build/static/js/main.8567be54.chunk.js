(this.webpackJsonptodomvc=this.webpackJsonptodomvc||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){e.exports=n(32)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=31},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=(n(19),n(20),n(3)),i=n(2),l=n(1);n(11);var u=function(e){return r.a.createElement("div",{className:e.classList+"card myCard",style:{width:"18rem"}},r.a.createElement("img",{src:e.img,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.name),r.a.createElement("a",{href:e.url,className:"btn btn-primary",target:"_blank"},"Details")))};n(27),n(28);var m=function(e){var t={display:e.show?"inherit":"none"},n=r.a.createElement("div",{className:"Dialog",style:t},r.a.createElement("div",{className:"DialogCover",onClick:function(t){console.log("clicked!"),t.target===t.currentTarget&&e.toggleShow(!1)}}),e.children);return c.a.createPortal(n,document.body)};var d=function(e){return r.a.createElement("div",{className:e.classList+"card myCard"},r.a.createElement("img",{src:e.img,style:{maxHeight:"400px"},className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.name),r.a.createElement("button",{onClick:function(){e.addScore(5),e.nextRestaurant(e.index+1)},style:{background:"rgb(136,167,179)",color:"white"},className:"btn"},"Like it!"),r.a.createElement("button",{onClick:function(){e.addScore(1),e.nextRestaurant(e.index+1)},style:{background:"rgb(196,150,168)",color:"white",marginLeft:"10px"},className:"btn"},"No No No")))};var f=function(e){var t=Object(a.useState)(0),n=Object(l.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(!1),i=Object(l.a)(s,2),u=i[0],f=i[1],p=Object(a.useState)([]),h=Object(l.a)(p,2),b=h[0],g=h[1];if(o===e.restaurants.length)return r.a.createElement("div",null);var E,v=r.a.createElement(d,{classList:"DialogContent Diaglog-card",img:e.restaurants[o].image_url,name:e.restaurants[o].name,categories:e.restaurants[o].categories,nextRestaurant:(E=e.restaurants,function(t){t===E.length&&(e.closeRatingPanel(!1,b),f(!1)),c(t)}),addScore:function(e){var t=b.slice();t.push(e),g(t)},index:o}),w=e.login?"You have to finish your initial review, ".concat(e.restaurants.length-o," businesses remained"):"You should log in before you check your recommendation";return r.a.createElement("div",{className:"mask",style:e.style},r.a.createElement("div",{className:"mask-layer"}),r.a.createElement("div",{className:"mask-banner"},r.a.createElement("h1",{style:{flex:"0 0 100%"}},w),r.a.createElement("button",{onClick:function(){f(!0)},style:{background:"rgb(136,167,179)",color:"white"},className:"btn mask-button"},"show it!")),r.a.createElement(m,{show:u,toggleShow:f},v))};var p=Object(s.b)((function(e){return{user:e.user}}),null)((function(e){var t=Object(a.useState)({isNewUser:!1,login:!1,list:[],rating:[]}),n=Object(l.a)(t,2),o=n[0],c=n[1];Object(a.useEffect)((function(){if(e.user.userID){var t="http://ec2-18-208-177-247.compute-1.amazonaws.com:5000?user_id=".concat(e.user.userID,"&latitude=").concat(e.user.position.latitude,"&longtitude=").concat(e.user.position.longitude);fetch(t,{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){var t=[],n=1===e[10];if(n)for(var a=0;a<10;a++)t.push(e[a]);else for(var r=0;r<Object.keys(e).length-1;r++)t.push(e[r]["business id"]);var o=t.map((function(e){return fetch("http://ec2-3-83-164-100.compute-1.amazonaws.com:8088/yelp-fusion/requestRecommendByID.do",{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"restaurantID=".concat(e)}).then((function(e){return e.json()}))}));Promise.all(o).then((function(e){var a=[],r=0,o=!0,s=!1,l=void 0;try{for(var u,m=e[Symbol.iterator]();!(o=(u=m.next()).done);o=!0){var d=u.value;if(0===d.status){var f=JSON.parse(d.data);f=Object(i.a)({},f,{business_id:t[r]}),r+=1,a.push(f)}}}catch(p){s=!0,l=p}finally{try{o||null==m.return||m.return()}finally{if(s)throw l}}c({list:a,isNewUser:n,login:!0})}))}))}}),[e.user.userID]);var s=o.list.map((function(e,t){return r.a.createElement(u,{key:e.business_id,img:e.image_url,name:e.name,categories:e.categories,url:e.url})}));return console.log(o),r.a.createElement("div",null,r.a.createElement(f,{style:o.isNewUser?{}:{display:"none"},login:o.login,restaurants:o.list,closeRatingPanel:function(t,n){var a=o.list.map((function(e){return e.business_id}));o.isNewUser&&fetch("http://ec2-18-208-177-247.compute-1.amazonaws.com:5000/newuser",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e.user.userID,business_id:a,rating:n})}).then((function(t){var n="http://ec2-18-208-177-247.compute-1.amazonaws.com:5000?user_id=".concat(e.user.userID,"&latitude=").concat(e.user.position.latitude,"&longtitude=").concat(e.user.position.longitude);fetch(n,{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){var t=[];if(1===e[10])for(var n=0;n<10;n++)t.push(e[n]);else for(var a=0;a<Object.keys(e).length-1;a++)t.push(e[a]["business id"]);var r=t.map((function(e){return fetch("http://ec2-3-83-164-100.compute-1.amazonaws.com:8088/yelp-fusion/requestRecommendByID.do",{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"restaurantID=".concat(e)}).then((function(e){return e.json()}))}));Promise.all(r).then((function(e){var t=[],n=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var i=o.value;if(0===i.status){var l=JSON.parse(i.data);t.push(l)}}}catch(u){a=!0,r=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}c({list:t,isNewUser:!1,login:!0})}))}))}))}}),r.a.createElement("div",{className:"App"},s))})),h=n(5);function b(e){return{type:"INIT_USER",userID:e.id,userName:e.username}}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USER":return{userID:t.userID,userName:t.userName,position:{latitude:"40",longitude:"-77"}};case"GET_POSITION":return Object(i.a)({},e,{position:t.position});default:return e}};function E(e){return console.log(e),{type:"ADD_ERROR",message:e}}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ERROR":return{message:t.message};case"REMOVE_ERROR":return{};default:return e}},w=Object(h.b)({user:g,error:v}),O=Object(h.c)(w);n(29),n(12),n(30);var y=function(e){return r.a.createElement("div",{className:"formContent error roundedborder"},e.error)};var N=function(e){var t=e.error?r.a.createElement(y,{error:e.error}):null,n=Object(a.useState)({}),o=Object(l.a)(n,2),c=o[0],s=o[1];return r.a.createElement("form",{className:e.class},t,r.a.createElement("label",{className:"formContent",htmlFor:"account"},"Account:"),r.a.createElement("input",{className:"formContent roundedborder",type:"text",id:"account",name:"account",value:c.username,onChange:function(e){return s(Object(i.a)({},c,{username:e.target.value}))}}),r.a.createElement("label",{className:"formContent",htmlFor:"password"},"Password:"),r.a.createElement("input",{className:"formContent roundedborder",type:"password",id:"password",name:"password",value:c.password,onChange:function(e){return s(Object(i.a)({},c,{password:e.target.value}))}}),r.a.createElement("button",{className:"formContent formBtn btn btn-info",onClick:function(t){t.preventDefault(),e.login(c)}},"Log in"))};var j=function(e){var t=e.error?r.a.createElement(y,{error:e.error}):null,n=Object(a.useState)({}),o=Object(l.a)(n,2),c=o[0],s=o[1];return r.a.createElement("form",{className:e.class},t,r.a.createElement("label",{className:"formContent",htmlFor:"account"},"Account:"),r.a.createElement("input",{className:"formContent roundedborder",type:"text",id:"signupaccount",name:"account",value:c.username,onChange:function(e){return s(Object(i.a)({},c,{username:e.target.value}))}}),r.a.createElement("label",{className:"formContent",htmlFor:"password"},"Password:"),r.a.createElement("input",{className:"formContent roundedborder",type:"password",id:"signuppassword",name:"password",value:c.password,onChange:function(e){return s(Object(i.a)({},c,{password:e.target.value}))}}),r.a.createElement("label",{className:"formContent",htmlFor:"repeatPassword"},"Input the password again:"),r.a.createElement("input",{className:"formContent roundedborder",type:"password",id:"repeatPassword",name:"repeatpassword",value:c.repeatpassword,onChange:function(e){return s(Object(i.a)({},c,{repeatpassword:e.target.value}))}}),r.a.createElement("button",{className:"formContent formBtn btn btn-info",onClick:function(t){t.preventDefault(),function(){if(c.password!==c.repeatpassword)return e.setError("Error: The second password is different."),void s({username:c.username});e.signup({username:c.username,password:c.password})}()}},"Sign up"))},C=n(6),S=n.n(C);var k=Object(s.b)((function(e){return{user:e.user.position}}),null)((function(e){var t,n=Object(a.useState)("Waiting for establishing connection..."),o=Object(l.a)(n,2),c=o[0],s=o[1],i=Object(a.useState)("Pick up one of the users"),u=Object(l.a)(i,2),m=u[0],d=u[1],f=Object(a.useState)(new S.a),p=Object(l.a)(f,2),h=p[0],b=(p[1],Object(a.useState)({id:""})),g=Object(l.a)(b,2),E=g[0],v=g[1],w=Object(a.useState)([]),O=Object(l.a)(w,2),y=O[0],N=O[1],j=Object(a.useState)({pickUser:!1}),C=Object(l.a)(j,2),k=C[0],D=C[1],R=Object(a.useState)(null),T=Object(l.a)(R,2),x=T[0],I=T[1],_=Object(a.useState)(null),P=Object(l.a)(_,2),U=P[0],z=P[1];Object(a.useEffect)((function(){h.on("open",(function(e){s("Connected."),v({id:e})})),x&&x.on("open",(function(){x.on("data",(function(e){z(e),d("She/He recommends this to you")})),s("Connected to user"),d("Your position is sent to other user"),x.send(e.user)}))})),U&&(t=r.a.createElement("a",{href:U.url},U.name));var A=y.map((function(e){return r.a.createElement("li",{className:"list-group-item",onClick:function(){D({id:e,pickUser:!0}),s("Connecting to ".concat(e));var t=h.connect(e);I(t)}},e)}));return k.pickUser?r.a.createElement("div",{className:"DialogContent Card",style:{background:"white"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title"},c),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Your id is ",E.id),r.a.createElement("p",{className:"card-text"},m)),r.a.createElement("div",{className:"card-body"},t)):r.a.createElement("div",{className:"DialogContent Card",style:{background:"white"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title"},c),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Your id is ",E.id),r.a.createElement("p",{className:"card-text"},m)),r.a.createElement("ul",{className:"list-group list-group-flush",style:{overflow:"scroll",maxHeight:"500px"}},A),r.a.createElement("div",{className:"card-body"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){fetch("http://ec2-3-83-164-100.compute-1.amazonaws.com:8088/p2p/getID.do",{method:"GET",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(e){if(0===e.status){var t=e.data.split(" ");N(t)}}))}},"refresh")))}));var D=function(e){var t=Object(a.useState)("Waiting for establishing connection..."),n=Object(l.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(new S.a),i=Object(l.a)(s,2),u=i[0],m=(i[1],Object(a.useState)({id:""})),d=Object(l.a)(m,2),f=d[0],p=d[1],h=Object(a.useState)("People who ask for help will see your id, please stay at this card."),b=Object(l.a)(h,2),g=(b[0],b[1],Object(a.useState)([])),E=Object(l.a)(g,2),v=(E[0],E[1],Object(a.useState)()),w=Object(l.a)(v,2),O=w[0],y=w[1],N=Object(a.useState)([]),j=Object(l.a)(N,2),C=j[0],k=j[1];Object(a.useEffect)((function(){u.on("open",(function(e){p({id:e}),fetch("http://ec2-3-83-164-100.compute-1.amazonaws.com:8088/p2p/saveID.do",{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"inputID=".concat(e)}).then((function(e){return e.json()})).then((function(e){0===e.status&&c("Registered.")}))})),u.on("connection",(function(e){c("Please recommand a restaurant"),e.on("open",(function(){e.on("data",(function(e){console.log(e),fetch("http://ec2-3-83-164-100.compute-1.amazonaws.com:8088/yelp-fusion/requestRecommend.do",{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"latitude=".concat(e.latitude,"&longitude=").concat(e.longitude,"&price=1&term=Chinese")}).then((function(e){return e.json()})).then((function(e){console.log(e),k(JSON.parse(e.data))}))}))})),y(e)}))}),[]);var D=C.map((function(e){return r.a.createElement("li",{className:"list-group-item",onClick:function(){O.send({name:e.name,url:e.url})}},e.name)}));return r.a.createElement("div",{className:"DialogContent Card",style:{background:"white"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title"},o),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Your id is ",f.id),r.a.createElement("p",{className:"card-text"}),r.a.createElement("ul",{className:"list-group list-group-flush",style:{overflow:"scroll",maxHeight:"500px"}},D)))},R="http://wywe.azurewebsites.net";var T=Object(s.b)((function(e){return{userName:e.user.userName,userID:e.user.userID,error:e.error.message}}),(function(e){return{login:function(t){fetch(R+"/api/auth/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){if(t.error)throw new Error(t.error.message);e(b(t)),e({type:"REMOVE_ERROR"})})).catch((function(t){e(E(String(t)))}))},init:function(){fetch(R+"/api/auth",{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(t){if(t.error)throw new Error(t.error.message);e(b(t)),e({type:"REMOVE_ERROR"}),e({type:"GET_POSITION",position:{latitude:40,longitude:-77}})})).catch((function(e){}))},signup:function(t){fetch(R+"/api/auth/signup",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){if(t.error)throw new Error(t.error.message);e(b(t)),e({type:"REMOVE_ERROR"})})).catch((function(t){e(E(String(t)))}))},setError:function(t){e(E(t))}}}))((function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(!1),i=Object(l.a)(s,2),u=i[0],d=i[1];Object(a.useEffect)((function(){e.init()}));var f=r.a.createElement("div",null,"WHAT DO YOU WANT TO EAT?");return e.userName?r.a.createElement("nav",null,f,r.a.createElement("div",null,"Welcom back, ",e.userName),r.a.createElement("div",null,r.a.createElement("button",{className:"nav-btn btn btn-light",onClick:function(){c(!0)}},"Ask for help"),r.a.createElement("button",{className:"nav-btn btn btn-light",onClick:function(){return d(!0)}},"I'm willing to help")),r.a.createElement(m,{show:o,toggleShow:c},r.a.createElement(k,null)),r.a.createElement(m,{show:u,toggleShow:d},r.a.createElement(D,null))):r.a.createElement("nav",null,f,r.a.createElement("div",null,r.a.createElement("button",{className:"nav-btn btn btn-light",onClick:function(){console.log("clicked!"),c(!0)}},"login"),r.a.createElement("button",{className:"nav-btn btn btn-light",onClick:function(){return d(!0)}},"signup")),r.a.createElement(m,{show:o,toggleShow:c},r.a.createElement(N,{error:e.error,login:e.login,class:"DialogContent"})),r.a.createElement(m,{show:u,toggleShow:d},r.a.createElement(j,{setError:e.setError,error:e.error,signup:e.signup,class:"DialogContent"})))}));var x=function(){return r.a.createElement(s.a,{store:O},r.a.createElement(T,null),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.8567be54.chunk.js.map