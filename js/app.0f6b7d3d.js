(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function i(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-0a93c9aa":"a2ce6353","chunk-26d6d9f4":"47c3b8b0","chunk-2d217db0":"5e096deb","chunk-2d231006":"2eb94de3","chunk-56adaab0":"ec27b449","chunk-da9b6a6a":"300d7524"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1b21":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card text-dark bg-light mb-3"},[n("div",{staticClass:"card-header"},[t._v("点餐文档")]),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v("点餐文档")]),n("p",{staticClass:"card-text"},[t._v("fasdfasdfasdf")])])])}],s={},i=s,o=n("2877"),c=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("appHeader")],1),n("div",{staticClass:"container"},[n("router-view")],1),n("br"),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 col-md-4"},[n("router-view",{attrs:{name:"orderingGuide"}})],1),n("div",{staticClass:"col-sm-12 col-md-4"},[n("router-view",{attrs:{name:"delivery"}})],1),n("div",{staticClass:"col-sm-12 col-md-4"},[n("router-view",{attrs:{name:"history"}})],1)])])])},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Header",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("a",{staticClass:"py-2",attrs:{href:"#","aria-label":"Product"}},[n("svg",{staticClass:"d-block mx-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",role:"img",viewBox:"0 0 24 24",focusable:"false"}},[n("title",[t._v("Product")]),n("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),n("path",{attrs:{d:"M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"}})])]),n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("PIZZA点餐系统")]),n("ul",{staticClass:"navbar-nav"},[n("li",[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("主页")])],1),n("li",[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"Menu"}}},[t._v("菜单")])],1),n("li",[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"Admin"}}},[t._v("管理")])],1),n("li",[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"About"}}},[t._v("关于我们")])],1)]),n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"Login"}}},[t._v("登录")])],1),n("li",[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"Register"}}},[t._v("注册")])],1)])])])},o=[],c={},l=c,u=n("2877"),d=Object(u["a"])(l,i,o,!1,null,null,null),f=d.exports,m={components:{appHeader:f}},v=m,p=Object(u["a"])(v,r,s,!1,null,null,null),h=p.exports,b=(n("d3b7"),n("8c4f")),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 text-center",attrs:{id:"home"}},[n("div",{staticClass:"background"},[n("h1",[t._v("欢迎大家品尝PIZZA")]),n("h2",[t._v("这里有你非常喜欢的PIZZA")]),n("button",{staticClass:"btn btn-success",on:{click:t.gotoMenu}},[t._v("Let's order!")])])])])},g=[],_={name:"Home",components:{},methods:{gotoMenu:function(){this.$router.push({name:"Menu"})}}},y=_,C=(n("cccb"),Object(u["a"])(y,k,g,!1,null,null,null)),w=C.exports,x=n("787a"),O=n("82e7"),j=n("1b21");a["a"].use(b["a"]);var P=[{path:"/",name:"Home",components:{default:w,orderingGuide:j["default"],delivery:x["default"],history:O["default"]}},{path:"/menu",name:"Menu",component:function(){return n.e("chunk-26d6d9f4").then(n.bind(null,"9a0b"))}},{path:"/admin",name:"Admin",component:function(){return n.e("chunk-da9b6a6a").then(n.bind(null,"3530"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-0a93c9aa").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-56adaab0").then(n.bind(null,"73cf"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d231006").then(n.bind(null,"ef4c"))},redirect:"/about/contact",children:[{path:"history",name:"History",component:function(){return Promise.resolve().then(n.bind(null,"82e7"))}},{path:"contact",name:"Contact",component:function(){return n.e("chunk-2d217db0").then(n.bind(null,"c904"))}},{path:"orderingGuide",name:"OrderingGuide",component:function(){return Promise.resolve().then(n.bind(null,"1b21"))}},{path:"delivery",name:"Delivery",component:function(){return Promise.resolve().then(n.bind(null,"787a"))}},{path:"*",redirect:{name:"Contact"}}]},{path:"*",name:"None",redirect:{name:"Home"}}],M=new b["a"]({base:"",routes:P,scrollBehavior:function(t,e,n){return n||{x:0,y:0}}}),z=M,E=(n("a4d3"),n("e01a"),n("4de4"),n("c975"),n("a434"),n("b0c0"),n("2f62"));a["a"].use(E["a"]);var $=new E["a"].Store({state:{baskets:[],menuItems:[{name:"榴莲Pizza",description:"这是喜欢吃榴莲朋友的最佳选择",options:[{size:9,price:38},{size:12,price:48}]}]},getters:{total:function(t){var e=0;for(var n in t.baskets){var a=t.baskets[n];e+=a.price*a.quantity}return e}},mutations:{addToBasket:function(t,e){var n={name:e.item.name,size:e.option.size+"寸",price:e.option.price,quantity:1};if(t.baskets.length>0){var a=t.baskets.filter((function(t){return t.name==n.name&&t.size==n.size}));a.length>0?a[0].quantity++:t.baskets.push(n)}else t.baskets.push(n)},decreaseQuantity:function(t,e){e.quantity--,0===e.quantity&&this.commit("removeFromBasket",e)},increaseQuantity:function(t,e){e.quantity++},removeFromBasket:function(t,e){t.baskets.splice(t.baskets.indexOf(e),1)},addMenuItem:function(t,e){var n={name:e.name,description:e.description,options:[{size:e.size1,price:e.price1},{size:e.size2,price:e.price2}]};t.menuItems.push(n),console.log(e)},removeFromMenu:function(t,e){t.menuItems.splice(t.menuItems.indexOf(e),1)}},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:z,store:$,render:function(t){return t(h)}}).$mount("#app")},"5ced":function(t,e,n){},"787a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card text-dark bg-light mb-3"},[n("div",{staticClass:"card-header"},[t._v("快递信息")]),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v("快递信息")]),n("p",{staticClass:"card-text"},[t._v("fasdfasdfasdf")])])])}],s={},i=s,o=n("2877"),c=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},"82e7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card text-dark bg-light mb-3"},[n("div",{staticClass:"card-header"},[t._v("历史订单")]),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v("历史订单")]),n("p",{staticClass:"card-text"},[t._v("fasdfasdfasdf")])])])}],s={},i=s,o=n("2877"),c=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.0f6b7d3d.js.map