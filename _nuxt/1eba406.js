(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{251:function(t,e,n){"use strict";n.r(e);n(170);var r={name:"LayoutMenuList",props:{image:{type:Object,required:!0},imageUrl:{type:String,required:!0},name:{type:String,required:!0},body:{type:String,required:!0},price:{type:Number,required:!0},itemClass:{type:String,default:"w-full mb-10 shadow-lg"},blockClass:{type:String,default:"md:w-full bg-gray-200 flex flex-wrap justify-between md:px-4 md:py-4"},imageClass:{type:String,default:"md:w-2/5"},dataClass:{type:String,default:"w-7/12 px-6 py-4 mb:px-0 mb:px-0"},flagBody:{type:Boolean,default:!0}}},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.itemClass},[r("div",{class:t.blockClass},[t.image?r("img",{class:t.imageClass,attrs:{src:t.imageUrl,alt:t.name}}):r("img",{class:t.imageClass,attrs:{src:n(252),alt:t.name}}),t._v(" "),r("div",{class:t.dataClass},[r("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(t.name))]),t._v(" "),t.flagBody?r("p",{staticClass:"text-base mb-2"},[t._v("\n        "+t._s(t.body)+"\n      ")]):t._e(),t._v(" "),r("p",{staticClass:"text-gray-700 text-base mb-4"},[t._v(t._s(t.price)+"円（税込）")])])])])}),[],!1,null,null,null);e.default=component.exports},252:function(t,e,n){t.exports=n.p+"img/dummy.84ae73e.jpg"},266:function(t,e,n){"use strict";n.r(e);n(39);var r=n(6),l=n(52),o=n.n(l),c={components:{LayoutMenuList:n(251).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$config,r=t.error,e.prev=1,e.next=4,o.a.get("".concat(n.apiUrl,"menu"),{headers:{"X-API-KEY":n.apiKey}});case 4:return l=e.sent,data=l.data,e.abrupt("return",{items:data.contents});case 9:e.prev=9,e.t0=e.catch(1),r({statusCode:e.t0.response.status,message:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},data:function(){return{test:[1,2,3,4,5]}},head:function(){return{title:"メニュー",meta:[{hid:"description",name:"description",content:"メニューページの説明"}]}}},m=n(8),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-wrraper",[n("layout-visual",{attrs:{title:"Menu",height:40,visual:"visual-menu"}}),t._v(" "),n("div",{staticClass:"w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0"},[n("div",{staticClass:"mb-20"},t._l(t.items,(function(t,e){return n("layout-menu-list",{key:e,attrs:{image:t.image,"image-url":t.image.url,name:t.name,body:t.body,price:t.price}})})),1),t._v(" "),t._l(t.test,(function(i,e){return n("p",{key:e},[t._v(t._s(i))])})),t._v(" "),n("base-button",{attrs:{name:"トップへ戻る",link:"/"}})],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutVisual:n(168).default,LayoutMenuList:n(251).default,BaseButton:n(169).default,LayoutWrraper:n(167).default})}}]);