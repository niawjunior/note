(function(t){function e(e){for(var a,r,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)r=i[d],o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/note/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"039a":function(t,e,n){"use strict";var a=n("3760"),o=n.n(a);o.a},"080e":function(t,e,n){"use strict";var a=n("9b59"),o=n.n(a);o.a},3760:function(t,e,n){},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=s(t);return n(e)}function s(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=s,t.exports=o,o.id="4678"},"523c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("8c4f"),s=(n("cabf"),n("96d3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("router-view")],1)}),r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-toolbar",{staticClass:"md-primary",attrs:{"md-elevation":"1"}},[n("div",{staticClass:"md-toolbar-section-start"},[n("md-button",{attrs:{to:"/"}},[t._v("โน๊ต")])],1),t.navLoad?n("div",{staticClass:"md-toolbar-section-end"},[t.isAuth?t._e():n("md-button",{attrs:{to:"/login"}},[t._v("เข้าสู่ระบบ")]),t.isAuth?n("md-button",{attrs:{to:"/add"}},[t._v("เพิ่มโน๊ต")]):t._e(),t.isAuth?n("md-button",{attrs:{to:""},on:{click:t.logout}},[t._v("ออกจากระบบ")]):t._e()],1):t._e()])],1)},c=[],u={methods:{logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push({path:"login"})})}},computed:{isAuth:function(){return this.$store.getters.login},navLoad:function(){return this.$store.state.load}}},l=u,d=(n("5b49"),n("2877")),f=Object(d["a"])(l,i,c,!1,null,null,null),m=f.exports,h={name:"app",components:{Nav:m}},p=h,b=Object(d["a"])(p,s,r,!1,null,null,null),v=b.exports,g=n("43f9"),j=n.n(g),y=(n("6762"),n("2fdb"),n("386d"),n("96cf"),n("3b8d")),_=(n("5df3"),n("4f7f"),n("75fc")),k=(n("ac6a"),n("2f62")),w=n("ffe7"),x=n.n(w),$=n("8aa5"),O=(n("e71f"),{apiKey:"AIzaSyAuddW0ZvYCoK-Zn4v3-I4uBYcRMEUIBGg",authDomain:"note-6f627.firebaseapp.com",databaseURL:"https://note-6f627.firebaseio.com",projectId:"note-6f627",storageBucket:"",messagingSenderId:"709206152306",appId:"1:709206152306:web:f36f25cf7322e765"}),C=$["initializeApp"](O).firestore(),T={login:function(t){return new Promise(function(e,n){$["auth"]().signInWithEmailAndPassword(t.email,t.password).then(function(t){t&&e(t)}).catch(function(t){n(t)})})},isAuth:function(){return new Promise(function(t,e){$["auth"]().onAuthStateChanged(function(e){t(!!e)},function(t){e(t)})})},logout:function(){return new Promise(function(t,e){return $["auth"]().signOut().then(function(){t(null)}).catch(function(t){e(t)})})},addNote:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,n){return C.collection("Notes").add(e).then(function(e){t(e)}).catch(function(t){n(t)})}));case 1:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),getNote:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=C.collection("Notes"),t.next=3,e.get();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()};a["default"].use(k["a"]);var S=new k["a"].Store({state:{notes:null,notesInit:null,user:!1,load:!1,addState:!1,tag:null},getters:{login:function(t){return t.user},tag:function(t){return t.tag}},mutations:{LOGIN:function(t,e){t.user=e},AUTH:function(t,e){t.user=e,t.load=!0},LOGOUT:function(t,e){t.user=e},ADD_NOTE:function(t,e){t.addState=e},GET_NOTE:function(t,e){var n=[];t.notes=e,t.notesInit=e,t.notesInit.forEach(function(t){n.push.apply(n,Object(_["a"])(t.tag))});var a=Object(_["a"])(new Set(n)),o=[];a.forEach(function(t){var e=[];n.forEach(function(n){t===n&&e.push(n)}),o.push({tag:t,count:e.length})}),t.tag=o},SEARCH:function(t,e){t.notes=e.keyword?e.result:t.notesInit},SEARCH_BY_TAG:function(t,e){console.log(e.tag),t.notes=0==e.tag.length?t.notesInit:e.result}},actions:{login:function(t,e){var n=this,a=t.commit;return new Promise(function(t,o){return T.login(e).then(function(){a("LOGIN",!0),t(n.getters.login)}).catch(function(t){o(t.code)})})},auth:function(t){var e=this,n=t.commit;return new Promise(function(t,a){return T.isAuth().then(function(a){n("AUTH",a),t(e.getters.login)}).catch(function(t){a(t)})})},logout:function(t){var e=t.commit;return new Promise(function(t,n){return T.logout().then(function(){e("LOGOUT",!1),t()}).catch(function(t){n(t)})})},addNote:function(t,e){var n=this,a=t.commit;return new Promise(function(t,o){return T.addNote(e).then(function(){a("ADD_NOTE",!0),t(n.state.addState)}).catch(function(t){o(t)})})},getNote:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){var n,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,T.getNote();case 3:a=t.sent,o=a.docs.map(function(t){return t.data()}),n("GET_NOTE",o);case 6:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),search:function(t,e){var n=t.commit,a={shouldSort:!0,tokenize:!0,threshold:.6,location:0,distance:100,maxPatternLength:15,minMatchCharLength:1,keys:["category","description","name","tag"]},o=new x.a(this.state.notesInit,a),s=o.search(e);n("SEARCH",{result:s,keyword:e})},searchByTag:function(t,e){var n=this,a=t.commit,o=[];e.filter(function(t){var e=n.state.notesInit.filter(function(e){return e.tag.includes(t)});o.push.apply(o,Object(_["a"])(e))}),a("SEARCH_BY_TAG",{result:o,tag:e})}}}),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-layout md-alignment-top-center"},[n("div",{staticClass:"md-layout-item md-size-70",staticStyle:{"margin-top":"1rem"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("md-field",[n("label",[t._v("อีเมล")]),n("md-icon",[t._v("email")]),n("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"focus",rawName:"v-focus"}],attrs:{name:"email",placeholder:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("p",[t._v(t._s(t.errors.first("email")))]),n("md-field",[n("label",[t._v("รหัสผ่าน")]),n("md-icon",[t._v("lock")]),n("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"password",name:"password",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("p",[t._v(t._s(t.errors.first("password")))]),n("div",{staticStyle:{float:"right"}},[n("md-button",{staticClass:"md-raised md-primary",attrs:{type:"submit",disabled:t.isDisabled||t.isEmpty||t.isClick}},[t._v("\n          เข้าสู่ระบบ\n        ")])],1)],1)])]),n("notifications",{attrs:{group:"foo",position:"bottom right","animation-type":"velocity"}})],1)},N=[],z={data:function(){return{email:"",password:"",isEmpty:!0,show:!1,textDialog:"error",isClick:!1}},methods:{login:function(){var t=this;this.isClick=!0,this.$store.dispatch("login",{email:this.email,password:this.password}).then(function(){t.isClick=!1,t.$notify({group:"foo",type:"success",title:"แจ้งเตือน!",text:"ยินดีต้อนรับ!",duration:4e3,speed:1e3}),t.$router.push({path:"/"})}).catch(function(e){t.isClick=!1,"auth/user-not-found"===e||"auth/wrong-password"===e?t.$notify({group:"foo",type:"warn",title:"แจ้งเตือน!",text:"ชื่อ หรือ รหัสผ่าน ไม่ถูกต้อง!",duration:4e3,speed:1e3}):t.$notify({group:"foo",type:"warn",title:"แจ้งเตือน!",text:"มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง",duration:4e3,speed:1e3})})}},computed:{isDisabled:function(){var t=!0;return t=!(!this.errors.has("email")&&!this.errors.has("password")),t},loginStatus:function(){var t=!1;return this.$store.getters.login&&(t=!this.$store.getters.login.status),t}},watch:{email:function(){this.email&&this.password&&(this.isEmpty=!1)},password:function(){this.email&&this.password&&(this.isEmpty=!1)}}},A=z,P=(n("039a"),Object(d["a"])(A,E,N,!1,null,null,null)),I=P.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-layout md-alignment-top-center"},[n("div",{staticClass:"md-layout-item md-size-60",staticStyle:{"text-align":"center"}},[n("Search"),n("Tags")],1)]),n("div",{staticClass:"md-layout md-alignment-top-center"},[n("div",{staticClass:"md-layout-item md-size-90",staticStyle:{"margin-top":"1rem"}},[n("Note")],1)])])},q=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-table",[t.note&&0!==t.note.length?n("md-table-row",[n("md-table-head",[t._v("วันที่/เวลา")]),n("md-table-head",[t._v("ชื่อโน๊ต")]),n("md-table-head",[t._v("คำอธิบาย")]),n("md-table-head",[t._v("หมวดหมู่")]),n("md-table-head",[t._v("ประเภท")]),n("md-table-head",[t._v("ลิ้งค์")])],1):t._e(),t._l(t.note,function(e,a){return n("md-table-row",{key:a},[n("md-table-cell",[t._v(t._s(t.moment(e.createdAt)))]),n("md-table-cell",[t._v(t._s(e.name.substr(0,50)))]),n("md-table-cell",[t._v(t._s(e.description||"-"))]),n("md-table-cell",[t._v(t._s(e.tag.toString()))]),n("md-table-cell",[t._v(t._s(e.category.toString()))]),n("md-table-cell",[n("a",{attrs:{target:"_blank",href:e.url}},[t._v(t._s(e.url.substr(0,30))+"..")])])],1)})],2),t.note?t._e():n("div",{staticStyle:{"text-align":"center"}},[n("md-progress-spinner",{attrs:{"md-diameter":100,"md-stroke":10,"md-mode":"indeterminate"}})],1)],1)},R=[],G=(n("c5f6"),n("c1df")),H=n.n(G),M={computed:{note:function(){return this.$store.state.notes}},created:function(){this.$store.dispatch("getNote")},methods:{moment:function(t){return H()(Number(t)).format("DD/MM/YYYY HH:mm")}}},U=M,Y=(n("080e"),Object(d["a"])(U,L,R,!1,null,null,null)),B=Y.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-field",[n("label",[t._v("ค้นหา")]),n("md-input",{attrs:{placeholder:"พิมพ์คำที่คุณต้องการค้นหา.."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("md-icon",{staticStyle:{cursor:"pointer"}},[t._v("search")])],1)],1)},J=[],W={data:function(){return{search:""}},watch:{search:function(){this.$store.dispatch("search",this.search)}}},V=W,K=Object(d["a"])(V,F,J,!1,null,"cafa1516",null),Z=K.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.tags&&0!==t.tags.length?n("div",t._l(t.tags,function(e,a){return n("div",{key:a,staticClass:"tag"},[n("md-checkbox",{attrs:{value:e.tag},model:{value:t.checkTag,callback:function(e){t.checkTag=e},expression:"checkTag"}},[t._v(t._s(e.tag)+" ("+t._s(e.count)+")")])],1)}),0):t._e()])},X=[],tt={data:function(){return{checkTag:[]}},computed:{tags:function(){return this.$store.getters.tag}},methods:{},watch:{checkTag:function(){this.$store.dispatch("searchByTag",this.checkTag)}}},et=tt,nt=(n("d05b"),Object(d["a"])(et,Q,X,!1,null,"7feaf3f6",null)),at=nt.exports,ot={components:{Note:B,Search:Z,Tags:at}},st=ot,rt=Object(d["a"])(st,D,q,!1,null,"adec0d52",null),it=rt.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-layout md-alignment-top-center"},[n("div",{staticClass:"md-layout-item md-size-70",staticStyle:{"margin-top":"1rem"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.addNote(e)}}},[n("md-field",[n("label",[t._v("ชื่อโน๊ต")]),n("md-icon",[t._v("font_download")]),n("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"focus",rawName:"v-focus"}],attrs:{type:"text",name:"note",placeholder:"note"},model:{value:t.note.note,callback:function(e){t.$set(t.note,"note",e)},expression:"note.note"}})],1),n("p",[t._v(t._s(t.errors.first("note")))]),n("md-field",[n("label",[t._v("คำอธิบาย")]),n("md-icon",[t._v("description")]),n("md-input",{attrs:{type:"text",name:"description",placeholder:"description"},model:{value:t.note.description,callback:function(e){t.$set(t.note,"description",e)},expression:"note.description"}})],1),n("label",[t._v("หมวดหมู่")]),n("div",[n("md-checkbox",{attrs:{value:"Web"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Web")]),n("md-checkbox",{attrs:{value:"JavaScript"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("JavaScript")]),n("md-checkbox",{attrs:{value:"Angular"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Angular")]),n("md-checkbox",{attrs:{value:"Vue.js"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Vue.js")]),n("md-checkbox",{attrs:{value:"Framework"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Framework")]),n("md-checkbox",{attrs:{value:"Library"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Library")]),n("md-checkbox",{attrs:{value:"Tip"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Tip")]),n("md-checkbox",{attrs:{value:"Technology"},model:{value:t.note.tag,callback:function(e){t.$set(t.note,"tag",e)},expression:"note.tag"}},[t._v("Technology")]),0===t.note.tag.length&&t.tagClick?n("p",[t._v("The tag field is required.")]):t._e()],1),n("label",[t._v("ประเภท")]),n("div",[n("md-checkbox",{attrs:{value:"Course"},model:{value:t.note.category,callback:function(e){t.$set(t.note,"category",e)},expression:"note.category"}},[t._v("Course (Video)")]),n("md-checkbox",{attrs:{value:"Article"},model:{value:t.note.category,callback:function(e){t.$set(t.note,"category",e)},expression:"note.category"}},[t._v("Article")]),n("md-checkbox",{attrs:{value:"Thai"},model:{value:t.note.category,callback:function(e){t.$set(t.note,"category",e)},expression:"note.category"}},[t._v("Thai")]),n("md-checkbox",{attrs:{value:"Free"},model:{value:t.note.category,callback:function(e){t.$set(t.note,"category",e)},expression:"note.category"}},[t._v("Free")]),0===t.note.category.length&&t.categoryClick?n("p",[t._v("The category field is required.")]):t._e()],1),n("md-field",[n("label",[t._v("ลิงค์ (url)")]),n("md-icon",[t._v("link")]),n("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text",name:"url",placeholder:"url"},model:{value:t.note.url,callback:function(e){t.$set(t.note,"url",e)},expression:"note.url"}})],1),n("p",[t._v(t._s(t.errors.first("url")))]),n("md-button",{staticClass:"md-raised md-primary",attrs:{type:"submit"}},[t._v("\n          เพิ่มโน๊ต\n        ")])],1)])]),n("notifications",{attrs:{group:"foo",position:"bottom right","animation-type":"velocity"}})],1)},ut=[],lt={data:function(){return{note:{note:"",description:"",tag:[],category:[],url:""},tagClick:null,categoryClick:null}},watch:{tag:function(){this.tagClick=!0},category:function(){this.categoryClick=!0}},methods:{addNote:function(){var t=this;this.$store.dispatch("addNote",{name:this.note.note,description:this.note.description||"",tag:this.note.tag,category:this.note.category,url:this.note.url,createdAt:Date.now()}).then(function(){t.$notify({group:"foo",type:"success",title:"แจ้งเตือน!",text:"เพิ่มโน๊ตสำเร็จ!",duration:4e3,speed:1e3}),t.note.note="",t.note.description="",t.note.tag=[],t.note.category=[],t.note.url=""})}}},dt=lt,ft=Object(d["a"])(dt,ct,ut,!1,null,"1a7f85bc",null),mt=ft.exports,ht={auth:function(t,e,n){S.dispatch("auth").then(function(t){t?n():n("/login")})},secure:function(t,e,n){S.dispatch("auth").then(function(t){t?n("/"):n()})}};a["default"].use(o["a"]);var pt=[{path:"*",component:it},{path:"",component:it},{path:"/add",component:mt,beforeEnter:ht.auth},{path:"/login",component:I,beforeEnter:ht.secure}],bt=new o["a"]({routes:pt,mode:"history"}),vt=(n("51de"),n("e094"),n("7bb1")),gt=n("3003"),jt=n("589d"),yt=n.n(jt),_t=n("ee98"),kt=n.n(_t);a["default"].use(gt["a"]),a["default"].config.productionTip=!1,a["default"].use(vt["a"]),a["default"].use(j.a),a["default"].use(o["a"]),a["default"].use(H.a),a["default"].use(kt.a,{velocity:yt.a}),a["default"].directive("focus",{inserted:function(t){t.focus()}}),new a["default"]({store:S,router:bt,created:function(){T.isAuth().then(function(t){S.commit("AUTH",t)})},render:function(t){return t(v)}}).$mount("#app")},"5b49":function(t,e,n){"use strict";var a=n("5d26"),o=n.n(a);o.a},"5d26":function(t,e,n){},"9b59":function(t,e,n){},d05b:function(t,e,n){"use strict";var a=n("523c"),o=n.n(a);o.a}});
//# sourceMappingURL=app.e1159a5c.js.map