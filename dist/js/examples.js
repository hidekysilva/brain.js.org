(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples"],{"02f4":function(t,e,n){var i=n("4588"),r=n("be13");t.exports=function(t){return function(e,n){var o,a,s=String(r(e)),c=i(n),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var i=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var i=n("2aba"),r=n("32e9"),o=n("79e5"),a=n("be13"),s=n("2b4c"),c=n("520a"),u=s("species"),l=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=s(t),p=!o(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),h=p?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[f](""),!e}):void 0;if(!p||!h||"replace"===t&&!l||"split"===t&&!d){var v=/./[f],m=n(a,f,""[t],function(t,e,n,i,r){return e.exec===c?p&&!r?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),g=m[0],b=m[1];i(String.prototype,t,g),r(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"230e":function(t,e,n){var i=n("d3f4"),r=n("7726").document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},"23c6":function(t,e,n){var i=n("2d95"),r=n("2b4c")("toStringTag"),o="Arguments"==i(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),r))?n:o?i(e):"Object"==(s=i(e))&&"function"==typeof e.callee?"Arguments":s}},"2aba":function(t,e,n){var i=n("7726"),r=n("32e9"),o=n("69a8"),a=n("ca5a")("src"),s=n("fa5b"),c="toString",u=(""+s).split(c);n("8378").inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(o(n,"name")||r(n,"name",e)),t[e]!==n&&(c&&(o(n,a)||r(n,a,t[e]?""+t[e]:u.join(String(e)))),t===i?t[e]=n:s?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,c,function(){return"function"==typeof this&&this[a]||s.call(this)})},"2b4c":function(t,e,n){var i=n("5537")("wks"),r=n("ca5a"),o=n("7726").Symbol,a="function"==typeof o,s=t.exports=function(t){return i[t]||(i[t]=a&&o[t]||(a?o:r)("Symbol."+t))};s.store=i},"2d00":function(t,e){t.exports=!1},"2d95":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"32e9":function(t,e,n){var i=n("86cc"),r=n("4630");t.exports=n("9e1e")?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},"386b":function(t,e,n){var i=n("5ca1"),r=n("79e5"),o=n("be13"),a=/"/g,s=function(t,e,n,i){var r=String(o(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),s+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},"386d":function(t,e,n){"use strict";var i=n("cb7c"),r=n("83a1"),o=n("5f1b");n("214f")("search",1,function(t,e,n,a){return[function(n){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=a(n,t,this);if(e.done)return e.value;var s=i(t),c=String(this),u=s.lastIndex;r(u,0)||(s.lastIndex=0);var l=o(s,c);return r(s.lastIndex,u)||(s.lastIndex=u),null===l?-1:l.index}]})},4588:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},4630:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"4bf8":function(t,e,n){var i=n("be13");t.exports=function(t){return Object(i(t))}},"520a":function(t,e,n){"use strict";var i=n("0bfb"),r=RegExp.prototype.exec,o=String.prototype.replace,a=r,s="lastIndex",c=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[s]||0!==e[s]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(a=function(t){var e,n,a,l,d=this;return u&&(n=new RegExp("^"+d.source+"$(?!\\s)",i.call(d))),c&&(e=d[s]),a=r.call(d,t),c&&a&&(d[s]=d.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),t.exports=a},5537:function(t,e,n){var i=n("8378"),r=n("7726"),o="__core-js_shared__",a=r[o]||(r[o]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n("2d00")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"580a":function(t,e,n){(function(t){(function(t,n){n(e)})(0,function(e){"use strict";var n={name:"bulma-accordion",props:{initialOpenItem:{required:!1,type:[Number,String],default:null},initialOpenItems:{required:!1,type:Array,default:null,validator:function(t){return Array.isArray(t)&&!t.some(function(t){return"number"!==typeof t})}},caretAnimation:{required:!1,type:Object,default:function(){return{duration:"450ms",timerFunc:"ease"}},validator:function(t){var e="string"===typeof t.duration&&"string"===typeof t.timerFunc||!0===t.none;return e}},dropdown:{required:!1,type:Boolean,default:!1},icon:{required:!1,type:String,default:"caret",validator:function(t){var e="caret"===t||"plus-minus"===t||"custom"===t;return e}},slide:{required:!1,type:Object,default:function(){return{duration:"700ms",timerFunc:"ease"}},validator:function(t){var e="string"===typeof t.duration&&"string"===typeof t.timerFunc;return e}}},mounted:function(){var t=this;this.$on("child-registered",function(e){var n=t.getNextId();e.setUniqueId(n),t.children_toggle_status[n]=!1}),this.$on("child-clicked",this.handleChildClicked),this.$on("child-removed",function(e){delete t.children_toggle_status[e]}),this.$nextTick(function(){t.openInitialItems(t.$children.length)})},data:function(){return{next_id:1,children_toggle_status:{}}},methods:{getNextId:function(){var t=this.next_id.toString(10);return this.next_id+=1,t},handleChildClicked:function(t){if(!this.dropdown)for(var e in this.children_toggle_status)this.children_toggle_status[e]&&e!==t&&(this.$emit("toggle-child",e),this.children_toggle_status[e]=!1);this.children_toggle_status[t]=!this.children_toggle_status[t],this.$emit("toggle-child",t)},openInitialItems:function(t){var e=this,n=this.initialOpenItem,i=this.initialOpenItems;null!==n?this.openInitialItem(n,t):null!==i&&i.forEach(function(n,i){e.openInitialItem(n,t)})},openInitialItem:function(t,e){var n="number"===typeof t?t:parseInt(t,10);if(!(n>0&&n<=e))throw new Error("There are only "+e+" AccordionItems, "+n+" is out of bounds. [indexing from 1]");this.handleChildClicked(String(n))}}},i=n,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"accordion"},[t._t("default")],2)},o=[],a=void 0,s=void 0,c=void 0,u=!1;function l(t,e,n,i,r,o,a,s){var c=("function"===typeof n?n.options:n)||{};return c.__file="BulmaAccordion.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,r&&(c.functional=!0)),c._scopeId=i,c}var d=l({render:r,staticRenderFns:o},a,i,s,u,c,void 0,void 0),f={props:{minus:{required:!0,type:Boolean}},computed:{verticalClasses:function(){return{vertical:!0,"vertical-rotated":this.minus}}}},p=f,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plus-minus"},[n("div",{staticClass:"horizontal"}),t._v(" "),n("div",{class:t.verticalClasses})])},v=[],m=function(t){t&&t("data-v-6b0c21ae_0",{source:".horizontal[data-v-6b0c21ae],.vertical[data-v-6b0c21ae]{position:absolute;border-radius:3px;background:#646464;transform:rotate(0);transition:.4s all ease-out}.horizontal[data-v-6b0c21ae]{top:45%;left:10%;right:10%;height:10%}.vertical[data-v-6b0c21ae]{top:10%;bottom:10%;left:45%;width:10%}.vertical-rotated[data-v-6b0c21ae]{transform:rotate(90deg)}.plus-minus[data-v-6b0c21ae]{position:relative;display:block;width:100%;height:100%}",map:void 0,media:void 0})},g="data-v-6b0c21ae",b=void 0,y=!1;function x(t,e,n,i,r,o,a,s){var c,u=("function"===typeof n?n.options:n)||{};if(u.__file="PlusMinus.vue",u.render||(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),u._scopeId=i,e&&(c=function(t){e.call(this,a(t))}),void 0!==c)if(u.functional){var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return u}function _(){var t=document.head||document.getElementsByTagName("head")[0],e=_.styles||(_.styles={}),n="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(i,r){if(!document.querySelector('style[data-vue-ssr-id~="'+i+'"]')){var o=n?r.media||"default":i,a=e[o]||(e[o]={ids:[],parts:[],element:void 0});if(!a.ids.includes(i)){var s=r.source,c=a.ids.length;if(a.ids.push(i),r.map&&(s+="\n/*# sourceURL="+r.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r.map))))+" */"),n&&(a.element=a.element||document.querySelector("style[data-group="+o+"]")),!a.element){var u=a.element=document.createElement("style");u.type="text/css",r.media&&u.setAttribute("media",r.media),n&&(u.setAttribute("data-group",o),u.setAttribute("data-next-index","0")),t.appendChild(u)}if(n&&(c=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",c+1)),a.element.styleSheet)a.parts.push(s),a.element.styleSheet.cssText=a.parts.filter(Boolean).join("\n");else{var l=document.createTextNode(s),d=a.element.childNodes;d[c]&&a.element.removeChild(d[c]),d.length?a.element.insertBefore(l,d[c]):a.element.appendChild(l)}}}}}var w=x({render:h,staticRenderFns:v},m,p,g,y,b,_,void 0);function C(t){var e={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(e.hasOwnProperty(n)&&void 0!==t.style[n])return e[n];throw new Error("TransitionEnd event is not supported in this browser")}var I={name:"bulma-accordion-item",components:{PlusMinus:w},data:function(){return{isOpen:!1,autoHeightInterval:null,showCardContent:!1,uniqueId:null}},mounted:function(){var t=this;this.$nextTick(function(){t.$parent.$emit("child-registered",t),t.$parent.$on("toggle-child",t.handleToggleRequest);var e=t.$refs.body,n=C(e);e.addEventListener(n,function(n){"0px"!==e.style.height?t.autoHeightStart(e):(t.autoHeightStop(),t.showCardContent=!1)})})},beforeDestroy:function(){this.$parent.$emit("child-removed",this.uniqueId)},watch:{isOpen:function(t){t?this.$emit("open"):this.$emit("close"),this.doTheSlide()}},computed:{config:function(){var t=this.$parent,e=t.caretAnimation;void 0===e&&(e={duration:"450ms",timerFunc:"ease"});var n=t.dropdown;void 0===n&&(n=!1);var i=t.icon;void 0===i&&(i="caret");var r=t.slide;return void 0===r&&(r={duration:"700ms",timerFunc:"ease"}),{animation:e,dropdown:n,icon:i,slide:r}},dropdownIconClasses:function(){return{"header-icon":!0,"caret-down":!this.isOpen}},card_classes:function(){return{card:!0,"card-active":this.isOpen}},card_content_classes:function(){return{"card-content":!0,"is-hidden":!this.showCardContent}},footerClasses:function(){return{"card-footer":!0,"is-hidden":!this.$slots.footer}},usingCustomIcon:function(){return"custom"===this.config.icon},showCaret:function(){return"caret"===this.config.icon},showPlus:function(){return"plus-minus"===this.config.icon&&!this.isOpen},showMinus:function(){return"plus-minus"===this.config.icon&&this.isOpen},slideStyle:function(){var t=this.config.slide;return{transition:"all "+t.duration+" "+t.timerFunc}},iconStyle:function(){var t=this.config.animation;return!0===t.none?{}:{transition:"all "+t.duration+" "+t.timerFunc}}},methods:{handleToggleRequest:function(t){t===this.uniqueId&&this.toggleCollapsed()},setUniqueId:function(t){this.uniqueId=t},notifyOfClick:function(){this.uniqueId&&this.$parent.$emit("child-clicked",this.uniqueId)},collapse:function(){this.isOpen=!1},toggleCollapsed:function(){this.isOpen=!this.isOpen},doTheSlide:function(){var t=this,e=this.$refs.body;!0===this.isOpen?(this.showCardContent=!0,this.$nextTick().then(function(){t.adjustHeight(e,e.scrollHeight)})):this.slideUp(e)},adjustHeight:function(t,e){t.style.height=e+"px"},slideUp:function(t){"auto"===t.style.height&&(t.style.height=t.scrollHeight+"px"),t.style.height="0px"},autoHeightStart:function(t){var e=this;this.autoHeightInterval&&this.autoHeightStop(),this.autoHeightInterval=setInterval(function(){try{var n=e.$refs.bodyContent.scrollHeight+e.$refs.bodyFooter.scrollHeight+1;"0px"!==t.style.height&&n!==t.style.height&&e.isOpen&&e.adjustHeight(t,n)}catch(i){e.autoHeightStop()}},100)},autoHeightStop:function(){clearInterval(this.autoHeightInterval),this.autoHeightInterval=null}}},S=I,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.card_classes},[n("div",{staticClass:"card-header",on:{click:t.notifyOfClick}},[n("p",{staticClass:"card-header-title"},[t._t("title")],2),t._v(" "),n("p",{staticClass:"card-header-icon"},[t.usingCustomIcon?n("span",{staticClass:"icon"},[t._t("icon"),t._v(" "),t.isOpen?t._t("icon-open"):t._t("icon-closed")],2):n("span",{staticClass:"icon"},[t.showCaret?n("svg",{class:t.dropdownIconClasses,style:t.iconStyle,attrs:{version:"1.1",viewBox:"0 0 129 129","enable-background":"new 0 0 129 129"}},[n("g",[n("path",{attrs:{d:"m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"}})])]):t._e(),t._v(" "),t.showPlus||t.showMinus?n("PlusMinus",{attrs:{minus:t.showMinus}}):t._e()],1)])]),t._v(" "),n("div",{ref:"body",staticClass:"accordion-body",style:t.slideStyle},[n("div",{ref:"bodyContent",class:t.card_content_classes},[t._t("content")],2),t._v(" "),n("div",{ref:"bodyFooter",class:t.footerClasses},[t._t("footer")],2)])])},$=[],k=function(t){t&&t("data-v-bc7d9a68_0",{source:".accordion-body[data-v-bc7d9a68]{height:0;overflow:hidden}.caret-down[data-v-bc7d9a68]{transform:rotate(180deg)}.header-icon[data-v-bc7d9a68]{width:100%}",map:void 0,media:void 0})},A="data-v-bc7d9a68",O=void 0,j=!1;function T(t,e,n,i,r,o,a,s){var c,u=("function"===typeof n?n.options:n)||{};if(u.__file="BulmaAccordionItem.vue",u.render||(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),u._scopeId=i,e&&(c=function(t){e.call(this,a(t))}),void 0!==c)if(u.functional){var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return u}function B(){var t=document.head||document.getElementsByTagName("head")[0],e=B.styles||(B.styles={}),n="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(i,r){if(!document.querySelector('style[data-vue-ssr-id~="'+i+'"]')){var o=n?r.media||"default":i,a=e[o]||(e[o]={ids:[],parts:[],element:void 0});if(!a.ids.includes(i)){var s=r.source,c=a.ids.length;if(a.ids.push(i),r.map&&(s+="\n/*# sourceURL="+r.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r.map))))+" */"),n&&(a.element=a.element||document.querySelector("style[data-group="+o+"]")),!a.element){var u=a.element=document.createElement("style");u.type="text/css",r.media&&u.setAttribute("media",r.media),n&&(u.setAttribute("data-group",o),u.setAttribute("data-next-index","0")),t.appendChild(u)}if(n&&(c=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",c+1)),a.element.styleSheet)a.parts.push(s),a.element.styleSheet.cssText=a.parts.filter(Boolean).join("\n");else{var l=document.createTextNode(s),d=a.element.childNodes;d[c]&&a.element.removeChild(d[c]),d.length?a.element.insertBefore(l,d[c]):a.element.appendChild(l)}}}}}var R=T({render:E,staticRenderFns:$},k,S,A,j,O,B,void 0),F=Object.freeze({BulmaAccordion:d,BulmaAccordionItem:R});function q(t){q.installed||(q.installed=!0,Object.keys(F).forEach(function(e){t.component(e,F[e])}))}var M={install:q},H=null;"undefined"!==typeof window?H=window.Vue:"undefined"!==typeof t&&(H=t.Vue),H&&H.use(M);var N=d,P=R;e.install=q,e.BulmaAccordion=N,e.BulmaAccordionItem=P,Object.defineProperty(e,"__esModule",{value:!0})})}).call(this,n("c8ba"))},"5ca1":function(t,e,n){var i=n("7726"),r=n("8378"),o=n("32e9"),a=n("2aba"),s=n("9b43"),c="prototype",u=function(t,e,n){var l,d,f,p,h=t&u.F,v=t&u.G,m=t&u.S,g=t&u.P,b=t&u.B,y=v?i:m?i[e]||(i[e]={}):(i[e]||{})[c],x=v?r:r[e]||(r[e]={}),_=x[c]||(x[c]={});for(l in v&&(n=e),n)d=!h&&y&&void 0!==y[l],f=(d?y:n)[l],p=b&&d?s(f,i):g&&"function"==typeof f?s(Function.call,f):f,y&&a(y,l,f,t&u.U),x[l]!=f&&o(x,l,p),g&&_[l]!=f&&(_[l]=f)};i.core=r,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"5f1b":function(t,e,n){"use strict";var i=n("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"65e2":function(t,e,n){},"69a8":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"6a99":function(t,e,n){var i=n("d3f4");t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},7726:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"79e5":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},8378:function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"86cc":function(t,e,n){var i=n("cb7c"),r=n("c69a"),o=n("6a99"),a=Object.defineProperty;e.f=n("9e1e")?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return a(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"9b43":function(t,e,n){var i=n("d8e8");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},"9def":function(t,e,n){var i=n("4588"),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},"9e1e":function(t,e,n){t.exports=!n("79e5")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},a451:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title is-3"},[t._v("Examples")]),n("h2",{staticClass:"subtitle is-4"},[t._v("Some quick samples to quickly learn Brain.js")]),n("br"),n("nav",{staticClass:"navbar is-dark",staticStyle:{"z-index":"1"}},[n("div",{staticClass:"navbar-brand"},[t._m(0),n("div",{staticClass:"navbar-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input is-dark",attrs:{type:"text",placeholder:""},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])])]),n("br"),n("br"),n("transition-group",{attrs:{name:"slide-up",mode:"out-in"}},t._l(t.filteredExamples,function(e,i){return n("div",{key:i,ref:e.title,refInFor:!0,staticClass:"example-container"},[n("bulmaAccordion",{attrs:{icon:"caret",slide:{duration:"100ms",timerFunc:"ease-out"}},on:{toggle:function(n){return t.exampleClickHandler(e.title)}}},[n("BulmaAccordionItem",[n("div",{attrs:{slot:"title"},slot:"title"},[n("h4",{staticClass:"title is-5 has-text-weight-normal"},[t._v("\n              "+t._s(e.title)+"\n            ")]),n("p",{staticClass:"subtitle is-6"},[t._v(t._s(e.description))])]),n("div",{attrs:{slot:"content"},slot:"content"},[n("iframe",{attrs:{src:e.link,width:"100%",height:"480px",allowfullscreen:"allowfullscreen",frameborder:"0"}})])])],1),n("br")],1)}),0),n("br"),t._m(1),n("br"),n("h2",{staticClass:"title is-4"},[t._v("Want to add an example?")]),t._m(2),n("br"),n("br"),n("h2",{staticClass:"title is-3"},[t._v("\n    Ready to start?\n  ")]),n("div",{staticClass:"content"},[n("p",[t._v("\n      Read\n      "),n("a",{attrs:{href:"http://github.com/BrainJS/brain.js#brainjs"}},[t._v("Documentation")]),t._v("\n      or view\n      "),n("router-link",{attrs:{to:"/examples",title:"Examples"}},[t._v("\n        Live Examples\n      ")])],1),n("router-link",{staticClass:"button is-primary is-large",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[t._v("\n      Get Started Now\n    ")])],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"navbar-item"},[n("span",[t._v("Search:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message is-primary"},[n("div",{staticClass:"message-header"},[t._v("\n      Looking for more examples?\n    ")]),n("div",{staticClass:"message-body"},[t._v("\n      Brain.js github repository also contains some\n      "),n("a",{attrs:{href:"https://github.com/BrainJS/brain.js/tree/master/examples"}},[t._v("JavaScript Examples")]),t._v("\n      and\n      "),n("a",{attrs:{href:"https://github.com/BrainJS/brain.js/tree/master/examples-typescript"}},[t._v("Typescript Examples")]),t._v(".\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    This page is open source, go ahead and include example using Brain.js to\n    this list or\n    "),n("a",{attrs:{href:"//github.com/BrainJS/brain.js/issues/new",target:"_blank"}},[t._v("create an issue")]),t._v("\n    and we will add it.\n  ")])}],o=(n("a481"),n("b54a"),n("386d"),n("580a")),a={components:{BulmaAccordion:o["BulmaAccordion"],BulmaAccordionItem:o["BulmaAccordionItem"]},data(){return{search:"",activeExampleIndex:null}},computed:{filteredExamples(){return this.$store.state.examples.filter(t=>{return t.title.includes(this.search)||t.description.includes(this.search)||t.link.includes(this.search)})}},created(){this.activeExampleIndex=this.$route.query.example||null},mounted(){window.setTimeout(()=>{this.$nextTick(()=>{this.scrollActiveExampleIntoView()})},250)},methods:{exampleClickHandler(t){this.activeExampleIndex=t,this.$router.replace({path:"examples",query:{example:t}})},scrollActiveExampleIntoView(){const t=this.$refs[this.activeExampleIndex];t&&(t[0].scrollIntoView({behavior:"smooth"}),t[0].getElementsByClassName("card-header")[0].click())}}},s=a,c=(n("be6f"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},a481:function(t,e,n){"use strict";var i=n("cb7c"),r=n("4bf8"),o=n("9def"),a=n("4588"),s=n("0390"),c=n("5f1b"),u=Math.max,l=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,v){return[function(i,r){var o=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,o,r):n.call(String(o),i,r)},function(t,e){var r=v(n,t,this,e);if(r.done)return r.value;var d=i(t),f=String(this),p="function"===typeof e;p||(e=String(e));var g=d.global;if(g){var b=d.unicode;d.lastIndex=0}var y=[];while(1){var x=c(d,f);if(null===x)break;if(y.push(x),!g)break;var _=String(x[0]);""===_&&(d.lastIndex=s(f,o(d.lastIndex),b))}for(var w="",C=0,I=0;I<y.length;I++){x=y[I];for(var S=String(x[0]),E=u(l(a(x.index),f.length),0),$=[],k=1;k<x.length;k++)$.push(h(x[k]));var A=x.groups;if(p){var O=[S].concat($,E,f);void 0!==A&&O.push(A);var j=String(e.apply(void 0,O))}else j=m(S,f,E,$,A,e);E>=C&&(w+=f.slice(C,E)+j,C=E+S.length)}return w+f.slice(C)}];function m(t,e,i,o,a,s){var c=i+t.length,u=o.length,l=p;return void 0!==a&&(a=r(a),l=f),n.call(s,l,function(n,r){var s;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(c);case"<":s=a[r.slice(1,-1)];break;default:var l=+r;if(0===l)return n;if(l>u){var f=d(l/10);return 0===f?n:f<=u?void 0===o[f-1]?r.charAt(1):o[f-1]+r.charAt(1):n}s=o[l-1]}return void 0===s?"":s})}})},b0c5:function(t,e,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},b54a:function(t,e,n){"use strict";n("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},be13:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},be6f:function(t,e,n){"use strict";var i=n("65e2"),r=n.n(i);r.a},c69a:function(t,e,n){t.exports=!n("9e1e")&&!n("79e5")(function(){return 7!=Object.defineProperty(n("230e")("div"),"a",{get:function(){return 7}}).a})},ca5a:function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},cb7c:function(t,e,n){var i=n("d3f4");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},d3f4:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},d8e8:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},fa5b:function(t,e,n){t.exports=n("5537")("native-function-to-string",Function.toString)}}]);