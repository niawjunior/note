(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)i=s[d],o[i]&&f.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"039a":function(t,e,n){"use strict";var a=n("3760"),o=n.n(a);o.a},"080e":function(t,e,n){"use strict";var a=n("9b59"),o=n.n(a);o.a},3760:function(t,e,n){},"523c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("8c4f"),r=(n("cabf"),n("96d3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("router-view")],1)}),i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-toolbar",{staticClass:"md-primary",attrs:{"md-elevation":"1"}},[n("div",{staticClass:"md-toolbar-section-start"},[n("h3",{staticStyle:{cursor:"pointer"},on:{click:t.home}},[t._v("โน๊ต")])]),t.navLoad?n("div",{staticClass:"md-toolbar-section-end"},[t.isAuth?t._e():n("md-button",{attrs:{to:{name:"login"}}},[t._v("เข้าสู่ระบบ")]),t.isAuth?n("md-button",{attrs:{to:{name:"add"}}},[t._v("เพิ่มโน๊ต")]):t._e(),t.isAuth?n("md-button",{attrs:{to:""},on:{click:t.logout}},[t._v("ออกจากระบบ")]):t._e()],1):t._e()])],1)},c=[],u={methods:{logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push({path:"login"})})},home:function(){this.$router.push({name:"/"})}},computed:{isAuth:function(){return this.$store.getters.login},navLoad:function(){return this.$store.state.load}}},l=u,d=(n("5b49"),n("2877")),f=Object(d["a"])(l,s,c,!1,null,null,null),m=f.exports,h={name:"app",components:{Nav:m}},p=h,v=Object(d["a"])(p,r,i,!1,null,null,null),g=v.exports,b=n("43f9"),_=n.n(b),y=(n("6762"),n("2fdb"),n("386d"),n("5df3"),n("4f7f"),n("75fc")),k=(n("ac6a"),n("2f62")),w=n("ffe7"),x=n.n(w),$=(n("96cf"),n("3b8d")),T=n("59ca"),C=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyAuddW0ZvYCoK-Zn4v3-I4uBYcRMEUIBGg",authDomain:"note-6f627.firebaseapp.com",databaseURL:"https://note-6f627.firebaseio.com",projectId:"note-6f627",storageBucket:"",messagingSenderId:"709206152306",appId:"1:709206152306:web:f36f25cf7322e765"}),S=T["initializeApp"](C).firestore(),E={login:function(t){return new Promise(function(e,n){T["auth"]().signInWithEmailAndPassword(t.email,t.password).then(function(t){t&&e(t)}).catch(function(t){n(t)})})},isAuth:function(){return new Promise(function(t,e){T["auth"]().onAuthStateChanged(function(e){t(!!e)},function(t){e(t)})})},logout:function(){return new Promise(function(t,e){return T["auth"]().signOut().then(function(){t(null)}).catch(function(t){e(t)})})},addNote:function(){var t=Object($["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,n){return S.collection("Notes").add(e).then(function(e){t(e)}).catch(function(t){n(t)})}));case 1:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),getNote:function(){return new Promise(function(t,e){S.collection("Notes").orderBy("createdAt","desc").onSnapshot(function(e){var n=[];e.docs.forEach(function(t){n.push(t.data())}),t(n)},function(t){e(t)})})}};a["default"].use(k["a"]);var O=new k["a"].Store({state:{notes:null,notesInit:null,user:!1,load:!1,addState:!1,tag:null,currentTag:null,currentData:null,keyword:null},getters:{login:function(t){return t.user},tag:function(t){return t.tag}},mutations:{LOGIN:function(t,e){t.user=e},AUTH:function(t,e){t.user=e,t.load=!0},LOGOUT:function(t,e){t.user=e},ADD_NOTE:function(t,e){t.addState=e},GET_NOTE:function(t,e){var n=[];t.notes=e,t.notesInit=e,t.notesInit.forEach(function(t){n.push.apply(n,Object(y["a"])(t.tag))});var a=Object(y["a"])(new Set(n)),o=[];a.forEach(function(t){var e=[];n.forEach(function(n){t===n&&e.push(n)}),o.push({tag:t,count:e.length})}),t.tag=o},SEARCH:function(t,e){t.notes=e},SEARCH_BY_TAG:function(t,e){t.currentTag=e.tag,t.currentData=e.result,t.notes=0==e.tag.length?t.notesInit:e.result}},actions:{login:function(t,e){var n=this,a=t.commit;return new Promise(function(t,o){return E.login(e).then(function(){a("LOGIN",!0),t(n.getters.login)}).catch(function(t){o(t.code)})})},auth:function(t){var e=this,n=t.commit;return new Promise(function(t,a){return E.isAuth().then(function(a){n("AUTH",a),t(e.getters.login)}).catch(function(t){a(t)})})},logout:function(t){var e=t.commit;return new Promise(function(t,n){return E.logout().then(function(){e("LOGOUT",!1),t()}).catch(function(t){n(t)})})},addNote:function(t,e){var n=this,a=t.commit;return new Promise(function(t,o){return E.addNote(e).then(function(){a("ADD_NOTE",!0),t(n.state.addState)}).catch(function(t){o(t)})})},getNote:function(t){var e=t.commit;E.getNote().then(function(t){e("GET_NOTE",t)})},search:function(t,e){var n=t.commit,a=t.state;if(e||0!==this.state.currentTag.length){a.keyword=e;var o={shouldSort:!0,threshold:.5,location:0,distance:100,maxPatternLength:15,minMatchCharLength:1,keys:["category","description","name","tag"]},r=this.state.currentTag&&0!=this.state.currentTag.length?this.state.currentData:this.state.notesInit,i=new x.a(r,o),s=i.search(e),c=e?s:this.state.currentData||this.state.notesInit;n("SEARCH",c)}else n("SEARCH",this.state.notesInit)},searchByTag:function(t,e){var n=this,a=t.commit,o=[];if(0===e.length&&this.state.keyword){var r={shouldSort:!0,threshold:.5,location:0,distance:100,maxPatternLength:15,minMatchCharLength:1,keys:["category","description","name","tag"]},i=new x.a(this.state.notesInit,r),s=i.search(this.state.keyword);this.state.notes=s}else e.filter(function(t){var e=n.state.notesInit.filter(function(e){return e.tag.includes(t)});o.push.apply(o,Object(y["a"])(e))}),a("SEARCH_BY_TAG",{result:o,tag:e})}}}),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-layout md-alignment-top-center"},[n("div",{staticClass:"md-layout-item md-size-70",staticStyle:{"margin-top":"1rem"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("md-field",[n("label",[t._v("อีเมล")]),n("md-icon",[t._v("email")]),n("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"focus",rawName:"v-focus"}],attrs:{name:"email",placeholder:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("p",[t._v(t._s(t.errors.first("email")))]),n("md-field",[n("label",[t._v("รหัสผ่าน")]),n("md-icon",[t._v("lock")]),n("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"password",name:"password",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("p",[t._v(t._s(t.errors.first("password")))]),n("div",{staticStyle:{float:"right"}},[n("md-button",{staticClass:"md-raised md-primary",attrs:{type:"submit",disabled:t.isDisabled||t.isEmpty||t.isClick}},[t._v("\n          เข้าสู่ระบบ\n        ")])],1)],1)])]),n("notifications",{attrs:{group:"foo",position:"bottom right","animation-type":"velocity"}})],1)},N=[],j={data:function(){return{email:"",password:"",isEmpty:!0,show:!1,textDialog:"error",isClick:!1}},methods:{login:function(){var t=this;this.isClick=!0,this.$store.dispatch("login",{email:this.email,password:this.password}).then(function(){t.isClick=!1,t.$notify({group:"foo",type:"success",title:"แจ้งเตือน!",text:"ยินดีต้อนรับ!",duration:4e3,speed:1e3}),t.$router.push({path:"/"})}).catch(function(e){t.isClick=!1,"auth/user-not-found"===e||"auth/wrong-password"===e?t.$notify({group:"foo",type:"warn",title:"แจ้งเตือน!",text:"ชื่อ หรือ รหัสผ่าน ไม่ถูกต้อง!",duration:4e3,speed:1e3}):t.$notify({group:"foo",type:"warn",title:"แจ้งเตือน!",text:"มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง",duration:4e3,speed:1e3})})}},computed:{isDisabled:function(){var t=!0;return t=!(!this.errors.has("email")&&!this.errors.has("password")),t},loginStatus:function(){var t=!1;return this.$store.getters.login&&(t=!this.$store.getters.login.status),t}},watch:{email:function(){this.email&&this.password&&(this.isEmpty=!1)},password:function(){this.email&&this.password&&(this.isEmpty=!1)}}},P=j,I=(n("039a"),Object(d["a"])(P,A,N,!1,null,null,null)),D=I.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-layout md-alignment-top-center"},[n("div",{staticClass:"md-layout-item md-size-60",staticStyle:{"text-align":"center"}},[n("Search"),n("Tags")],1)]),n("div",{staticClass:"md-layout md-alignment-top-center"},[n("div",{staticClass:"md-layout-item md-size-90",staticStyle:{"margin-top":"1rem"}},[n("Note")],1)])])},q=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-table",[t.note&&0!==t.note.length?n("md-table-row",[n("md-table-head",[t._v("วันที่/เวลา")]),n("md-table-head",[t._v("ชื่อโน๊ต")]),n("md-table-head",[t._v("คำอธิบาย")]),n("md-table-head",[t._v("หมวดหมู่")]),n("md-table-head",[t._v("ประเภท")]),n("md-table-head",[t._v("ลิ้งค์")])],1):t._e(),t._l(t.note,function(e,a){return n("md-table-row",{key:a},[n("md-table-cell",[t._v(t._s(t._f("date")(e.createdAt,"DD/MM/YYYY HH:mm")))]),n("md-table-cell",[t._v(t._s(t.subName(e.name)))]),n("md-table-cell",[t._v(t._s(e.description||"-"))]),n("md-table-cell",[t._v(t._s(e.tag.toString()))]),n("md-table-cell",[t._v(t._s(e.category.toString()))]),n("md-table-cell",[n("a",{attrs:{target:"_blank",href:e.url}},[t._v(t._s(e.url.substr(0,30))+"..")])])],1)})],2),t.note?t._e():n("div",{staticStyle:{"text-align":"center"}},[n("md-progress-spinner",{attrs:{"md-diameter":100,"md-stroke":10,"md-mode":"indeterminate"}})],1)],1)},G=[],M={computed:{note:function(){return this.$store.state.notes}},created:function(){this.$store.dispatch("getNote")},methods:{subName:function(t){return t.length>50?t.substr(0,50)+"..":t}}},R=M,B=(n("080e"),Object(d["a"])(R,H,G,!1,null,null,null)),Y=B.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-field",[n("label",[t._v("ค้นหา")]),n("md-input",{attrs:{placeholder:"พิมพ์คำที่คุณต้องการค้นหา.."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("md-icon",{staticStyle:{cursor:"pointer"}},[t._v("search")])],1)],1)},z=[],F={data:function(){return{search:""}},watch:{search:function(){this.$store.dispatch("search",this.search)}}},J=F,W=Object(d["a"])(J,U,z,!1,null,"cafa1516",null),V=W.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.tags&&0!==t.tags.length?n("div",t._l(t.tags,function(e,a){return n("div",{key:a,staticClass:"tag"},[n("md-checkbox",{attrs:{value:e.tag},model:{value:t.checkTag,callback:function(e){t.checkTag=e},expression:"checkTag"}},[t._v(t._s(e.tag)+" ("+t._s(e.count)+")")])],1)}),0):t._e()])},Z=[],Q={data:function(){return{checkTag:[]}},computed:{tags:function(){return this.$store.getters.tag}},methods:{},watch:{checkTag:function(){this.$store.dispatch("searchByTag",this.checkTag)}}},X=Q,tt=(n("d05b"),Object(d["a"])(X,K,Z,!1,null,"7feaf3f6",null)),et=tt.exports,nt={components:{Note:Y,Search:V,Tags:et}},at=nt,ot=Object(d["a"])(at,L,q,!1,null,"adec0d52",null),rt=ot.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-layout md-alignment-top-center"},[n("div",{staticClass:"md-layout-item md-size-70",staticStyle:{"margin-top":"1rem"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.addNote(e)}}},[n("md-field",[n("label",[t._v("ชื่อโน๊ต")]),n("md-icon",[t._v("font_download")]),n("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"focus",rawName:"v-focus"}],attrs:{type:"text",name:"note",placeholder:"note"},model:{value:t.note.note,callback:function(e){t.$set(t.note,"note",e)},expression:"note.note"}})],1),n("p",[t._v(t._s(t.errors.first("note")))]),n("md-field",[n("label",[t._v("คำอธิบาย")]),n("md-icon",[t._v("description")]),n("md-input",{attrs:{type:"text",name:"description",placeholder:"description"},model:{value:t.note.description,callback:function(e){t.$set(t.note,"description",e)},expression:"note.description"}})],1),n("label",[t._v("หมวดหมู่")]),n("div",[n("md-checkbox",{attrs:{value:"Web"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Web")]),n("md-checkbox",{attrs:{value:"JavaScript"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("JavaScript")]),n("md-checkbox",{attrs:{value:"Angular"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Angular")]),n("md-checkbox",{attrs:{value:"Vue.js"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Vue.js")]),n("md-checkbox",{attrs:{value:"Framework"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Framework")]),n("md-checkbox",{attrs:{value:"Library"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Library")]),n("md-checkbox",{attrs:{value:"Tip"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Tip")]),n("md-checkbox",{attrs:{value:"Technology"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Technology")]),0===t.note.tag.length&&t.tagClick?n("p",[t._v("The tag field is required.")]):t._e()],1),n("label",[t._v("ประเภท")]),n("div",[n("md-checkbox",{attrs:{value:"Course"},model:{value:t.note.category,callback:function(e){t.$set(t.note,"category",e)},expression:"note.category"}},[t._v("Course (Video)")]),n("md-checkbox",{attrs:{value:"Article"},model:{value:t.note.category,callback:function(e){t.$set(t.note,"category",e)},expression:"note.category"}},[t._v("Article")]),n("md-checkbox",{attrs:{value:"Thai"},model:{value:t.note.category,callback:function(e){t.$set(t.note,"category",e)},expression:"note.category"}},[t._v("Thai")]),n("md-checkbox",{attrs:{value:"Free"},model:{value:t.note.category,callback:function(e){t.$set(t.note,"category",e)},expression:"note.category"}},[t._v("Free")]),0===t.note.category.length&&t.categoryClick?n("p",[t._v("The category field is required.")]):t._e()],1),n("md-field",[n("label",[t._v("ลิงค์ (url)")]),n("md-icon",[t._v("link")]),n("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text",name:"url",placeholder:"url"},model:{value:t.note.url,callback:function(e){t.$set(t.note,"url",e)},expression:"note.url"}})],1),n("p",[t._v(t._s(t.errors.first("url")))]),n("md-button",{staticClass:"md-raised md-primary",attrs:{type:"submit"}},[t._v("\n          เพิ่มโน๊ต\n        ")])],1)])]),n("notifications",{attrs:{group:"foo",position:"bottom right","animation-type":"velocity"}})],1)},st=[],ct={data:function(){return{note:{note:"",description:"",tag:[],category:[],url:""},tagClick:null,categoryClick:null}},watch:{tag:function(){this.tagClick=!0},category:function(){this.categoryClick=!0}},methods:{addNote:function(){var t=this;this.$store.dispatch("addNote",{name:this.note.note,description:this.note.description||"",tag:this.note.tag,category:this.note.category,url:this.note.url,createdAt:Date.now()}).then(function(){t.$notify({group:"foo",type:"success",title:"แจ้งเตือน!",text:"เพิ่มโน๊ตสำเร็จ!",duration:4e3,speed:1e3}),t.note.note="",t.note.description="",t.note.tag=[],t.note.category=[],t.note.url="",t.tagClick=null,t.categoryClick=null})}}},ut=ct,lt=Object(d["a"])(ut,it,st,!1,null,"76358fbe",null),dt=lt.exports,ft={auth:function(t,e,n){O.dispatch("auth").then(function(t){t?n():n("/login")})},secure:function(t,e,n){O.dispatch("auth").then(function(t){t?n("/"):n()})}};a["default"].use(o["a"]);var mt=[{path:"*",component:rt},{path:"",name:"/",component:rt},{path:"/add",name:"add",component:dt,beforeEnter:ft.auth},{path:"/login",name:"login",component:D,beforeEnter:ft.secure}],ht=new o["a"]({routes:mt}),pt=(n("51de"),n("e094"),n("7bb1")),vt=n("3003"),gt=n("589d"),bt=n.n(gt),_t=n("ee98"),yt=n.n(_t),kt=n("4c9f");a["default"].filter("date",kt["dateFilter"]),a["default"].use(vt["a"]),a["default"].config.productionTip=!1,a["default"].use(pt["a"]),a["default"].use(_.a),a["default"].use(o["a"]),a["default"].use(yt.a,{velocity:bt.a}),a["default"].directive("focus",{inserted:function(t){t.focus()}}),new a["default"]({store:O,router:ht,created:function(){E.isAuth().then(function(t){O.commit("AUTH",t)})},render:function(t){return t(g)}}).$mount("#app")},"5b49":function(t,e,n){"use strict";var a=n("5d26"),o=n.n(a);o.a},"5d26":function(t,e,n){},"9b59":function(t,e,n){},d05b:function(t,e,n){"use strict";var a=n("523c"),o=n.n(a);o.a}});
//# sourceMappingURL=app.c1812ffd.js.map