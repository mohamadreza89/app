!function(e){function t(e){var t=e.length,a=r.type(e);return"function"!==a&&!r.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e))}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?o[n.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!i.call(e,"constructor")&&!i.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||i.call(e,t)},r.each=function(e,r,a){var o=0,i=e.length,n=t(e);if(a){if(n)for(;i>o&&!1!==r.apply(e[o],a);o++);else for(o in e)if(!1===r.apply(e[o],a))break}else if(n)for(;i>o&&!1!==r.call(e[o],o,e[o]);o++);else for(o in e)if(!1===r.call(e[o],o,e[o]))break;return e},r.data=function(e,t,o){if(void 0===o){var i=(n=e[r.expando])&&a[n];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var n=e[r.expando]||(e[r.expando]=++r.uuid);return a[n]=a[n]||{},a[n][t]=o,o}},r.removeData=function(e,t){var o=e[r.expando],i=o&&a[o];i&&r.each(t,function(e,t){delete i[t]})},r.extend=function(){var e,t,a,o,i,n,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(i=arguments[l]))for(o in i)e=s[o],a=i[o],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,n=e&&r.isArray(e)?e:[]):n=e&&r.isPlainObject(e)?e:{},s[o]=r.extend(c,n,a)):void 0!==a&&(s[o]=a));return s},r.queue=function(e,a,o){if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return o?(!i||r.isArray(o)?i=r.data(e,a,function(e,r){var a=r||[];return null!=e&&(t(Object(e))?function(e,t){for(var r=+t.length,a=0,o=e.length;r>a;)e[o++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[o++]=t[a++];e.length=o}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}(o)):i.push(o),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var o=r.queue(a,t),i=o.shift();"inprogress"===i&&(i=o.shift()),i&&("fx"===t&&o.unshift("inprogress"),i.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),o=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(o.top+=parseFloat(e.style.borderTopWidth)||0,o.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-o.top,left:a.left-o.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var o={},i=o.hasOwnProperty,n=o.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)o["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function o(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var o=e[t];o&&a.push(o)}return a}function i(e){return y.isWrapped(e)?e=[].slice.call(e):y.isNode(e)&&(e=[e]),e}function n(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,o){function i(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((i(t,r)*e+n(t,r))*e+s(t))*e}function u(e,t,r){return 3*i(t,r)*e*e+2*n(t,r)*e+s(t)}function c(t,r){for(var o=0;y>o;++o){var i=u(r,e,a);if(0===i)return r;r-=(l(r,e,a)-t)/i}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,o){var i,n,s=0;do{n=r+(o-r)/2,(i=l(n,e,a)-t)>0?o=n:r=n}while(Math.abs(i)>h&&++s<v);return n}function d(t){for(var r=0,o=1,i=b-1;o!=i&&w[o]<=t;++o)r+=x;var n=r+(t-w[--o])/(w[o+1]-w[o])*x,s=u(n,e,a);return s>=m?c(t,n):0==s?n:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=o)&&p()}var y=4,m=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===o?t:0===t?0:1===t?1:l(d(t),r,o)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:o}]};var T="generateBezier("+[e,r,a,o]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return y.isString(e)?b.Easings[e]||(r=!1):r=y.isArray(e)&&1===e.length?s.apply(null,e):y.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):!(!y.isArray(e)||4!==e.length)&&l.apply(null,e),!1===r&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=o(b.State.calls));for(var i=0;r>i;i++)if(b.State.calls[i]){var s=b.State.calls[i],l=s[0],u=s[2],d=s[3],g=!!d,m=null;d||(d=b.State.calls[i][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(n(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],E=y.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var j=F.endValue-F.startValue;if(A=F.startValue+j*E(h,u,j),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)m=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=n(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(n(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&n(V).transformCache.translate3d===a&&(n(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[i][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[i][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,m),1===h&&p(i)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],o=b.State.calls[e][1],i=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||i.loop||("none"===i.display&&S.setPropertyValue(p,"display",i.display),"hidden"===i.visibility&&S.setPropertyValue(p,"visibility",i.visibility)),!0!==i.loop&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&n(p)){n(p).isAnimating=!1,n(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,o=n(p).transformCache[t];n(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(o)&&(d=!0,delete n(p).transformCache[t])}),i.mobileHA&&(d=!0,delete n(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&i.complete&&!i.loop&&u===c-1)try{i.complete.call(o,o)}catch(e){setTimeout(function(){throw e},1)}s&&!0!==i.loop&&s(o),n(p)&&!0===i.loop&&!t&&(f.each(n(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:i.delay})),!1!==i.queue&&f.dequeue(p,i.queue)}b.State.calls[e]=!1;for(var g=0,y=b.State.calls.length;y>g;g++)if(!1!==b.State.calls[g]){l=!0;break}!1===l&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),y={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},m=!1;if(e.fn&&e.fn.jquery?(f=e,m=!0):f=t.Velocity.Utilities,8>=d&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");{if(!(7>=d)){var h=400,v="swing",b={State:{isMobile:../Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:y.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var o={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:o.v,dv:e(o)}}function r(r,a){var o={dx:r.v,dv:e(r)},i=t(r,.5*a,o),n=t(r,.5*a,i),s=t(r,a,n),l=1/6*(o.dx+2*(i.dx+n.dx)+s.dx),u=1/6*(o.dv+2*(i.dv+n.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function e(t,a,o){var i,n,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||500,a=parseFloat(a)||20,o=o||null,l.tension=t,l.friction=a,(i=null!==o)?(c=e(t,a),n=c/o*.016):n=.016;s=r(s||l,n),u.push(1+s.x),c+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return i?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(i=0;i<S.Lists.colors.length;i++){var e="color"===S.Lists.colors[i]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[i]]=["Red Green Blue Alpha",e]}var t,r,a;if(d)for(t in S.Hooks.templates){a=(r=S.Hooks.templates[t])[0].split(" ");var o=r[1].match(S.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),o.push(o.shift()),S.Hooks.templates[t]=[a.join(" "),o.join(" ")])}for(t in S.Hooks.templates){a=(r=S.Hooks.templates[t])[0].split(" ");for(var i in a){var n=t+a[i],s=i;S.Hooks.registered[n]=[t,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],o=r[1];return(t=S.Hooks.cleanRootPropertyValue(a,t)).toString().match(S.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var o,i=a[0],n=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),o=r.toString().match(S.RegEx.valueSplit),o[n]=t,o.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var o=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=o?o[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,o){switch(e){case"name":return"transform";case"extract":return n(r)===a||n(r).transformCache[t]===a?/^scale/i.test(t)?1:0:n(r).transformCache[t].replace(/[()]/g,"");case"inject":var i=!1;switch(t.substr(0,t.length-1)){case"translate":i=!/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case"scal":case"scale":b.State.isAndroid&&n(r).transformCache[t]===a&&1>o&&(o=1),i=!/(\d)$/i.test(o);break;case"skew":i=!/(deg|\d)$/i.test(o);break;case"rotate":i=!/(deg|\d)$/i.test(o)}return i||(n(r).transformCache[t]="("+o+")"),n(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,o){switch(e){case"name":return t;case"extract":var i;if(S.RegEx.wrappedValueAlreadyExtracted.test(o))i=o;else{var n,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(o)?n=s[o]!==a?s[o]:s.black:S.RegEx.isHex.test(o)?n="rgb("+S.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(n=s.black),i=(n||o).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==i.split(" ").length||(i+=" 1"),i;case"inject":return 8>=d?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(8>=d?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var o;if(o=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),y.isString(b.State.prefixElement.style[o]))return b.State.prefixMatches[e]=o,[o,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),(t=a.exec(e))?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,o,i){function s(e,r){function o(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!i){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return o(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return o(),p}}var g;g=n(e)===a?t.getComputedStyle(e,null):n(e).computedStyle?n(e).computedStyle:n(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),(""===(l=9===d&&"filter"===r?g.getPropertyValue(r):g[r])||null===l)&&(l=e.style[r]),o()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var y=s(e,"position");("fixed"===y||"absolute"===y&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);o===a&&(o=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(o=S.Normalizations.registered[c]("extract",e,o)),l=S.Hooks.extractValue(u,o)}else if(S.Normalizations.registered[r]){var p,g;"transform"!==(p=S.Normalizations.registered[r]("name",e))&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(n(e)&&n(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(e){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,o,i){var s=r;if("scroll"===r)i.container?i.container["scroll"+i.direction]=a:"Left"===i.direction?t.scrollTo(a,i.alternateValue):t.scrollTo(i.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=n(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);o=o||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,o),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(e){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else n(e)&&n(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&n(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(n(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var o,i;f.each(n(e).transformCache,function(t){return o=n(e).transformCache[t],"transformPerspective"===t?(i=o,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+o+" "))}),i&&(r="perspective"+i+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var o=a;return e=i(e),f.each(e,function(e,i){if(n(i)===a&&b.init(i),r===a)o===a&&(o=b.CSS.getPropertyValue(i,t));else{var s=b.CSS.setPropertyValue(i,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(i),o=s}}),o};var P=function(){function e(){return s?T.promise||null:l}function o(){function e(){function e(e,t){var r=a,o=a,n=a;return y.isArray(e)?(r=e[0],!y.isArray(e[1])&&/^[\d-]/.test(e[1])||y.isFunction(e[1])||S.RegEx.isHex.test(e[1])?n=e[1]:(y.isString(e[1])&&!S.RegEx.isHex.test(e[1])||y.isArray(e[1]))&&(o=t?e[1]:u(e[1],s.duration),e[2]!==a&&(n=e[2]))):r=e,t||(o=o||s.easing),y.isFunction(r)&&(r=r.call(i,V,w)),y.isFunction(n)&&(n=n.call(i,V,w)),[r||0,o,n]}function p(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===k){var d,h,x,P=/^x$/i.test(s.axis)?"Left":"Top",C=parseFloat(s.offset)||0;s.container?y.isWrapped(s.container)||y.isNode(s.container)?(s.container=s.container[0]||s.container,d=s.container["scroll"+P],x=d+f(i).position()[P.toLowerCase()]+C):s.container=null:(d=b.State.scrollAnchor[b.State["scrollProperty"+P]],h=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===P?"Top":"Left")]],x=f(i).offset()[P.toLowerCase()]+C),l={scroll:{rootPropertyValue:!1,startValue:d,currentValue:d,endValue:x,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:P,alternateValue:h}},element:i},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,i)}else if("reverse"===k){if(!n(i).tweensContainer)return void f.dequeue(i,s.queue);"none"===n(i).opts.display&&(n(i).opts.display="auto"),"hidden"===n(i).opts.visibility&&(n(i).opts.visibility="visible"),n(i).opts.loop=!1,n(i).opts.begin=null,n(i).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},n(i).opts,s);E=f.extend(!0,{},n(i).tweensContainer);for(var A in E)if("element"!==A){var F=E[A].startValue;E[A].startValue=E[A].currentValue=E[A].endValue,E[A].endValue=F,y.isEmptyObject(v)||(E[A].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+A+"): "+JSON.stringify(E[A]),i)}l=E}else if("start"===k){var E;n(i).tweensContainer&&!0===n(i).isAnimating&&(E=n(i).tweensContainer),f.each(m,function(t,r){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(t)){var o=e(r,!0),i=o[0],n=o[1],s=o[2];if(S.RegEx.isHex.test(i)){for(var l=["Red","Green","Blue"],u=S.Values.hexToRgb(i),c=s?S.Values.hexToRgb(s):a,p=0;p<l.length;p++){var f=[u[p]];n&&f.push(n),c!==a&&f.push(c[p]),m[t+l[p]]=f}delete m[t]}}});for(var j in m){var L=e(m[j]),R=L[0],O=L[1],z=L[2];j=S.Names.camelCase(j);var q=S.Hooks.getRoot(j),$=!1;if(n(i).isSVG||"tween"===q||!1!==S.Names.prefixCheck(q)[1]||S.Normalizations.registered[q]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(j)&&!z&&0!==R&&(z=0),s._cacheValues&&E&&E[j]?(z===a&&(z=E[j].endValue+E[j].unitType),$=n(i).rootPropertyValueCache[q]):S.Hooks.registered[j]?z===a?($=S.getPropertyValue(i,q),z=S.getPropertyValue(i,j,$)):$=S.Hooks.templates[q][1]:z===a&&(z=S.getPropertyValue(i,j));var M,I,B,W=!1;if(M=p(j,z),z=M[0],B=M[1],M=p(j,R),R=M[0].replace(/^([+-\/*])=/,function(e,t){return W=t,""}),I=M[1],z=parseFloat(z)||0,R=parseFloat(R)||0,"%"===I&&(/^(fontSize|lineHeight)$/.test(j)?(R/=100,I="em"):/^scale/.test(j)?(R/=100,I=""):/(Red|Green|Blue)$/i.test(j)&&(R=R/100*255,I="")),/[\/*]/.test(W))I=B;else if(B!==I&&0!==z)if(0===R)I=B;else{o=o||function(){var e={myParent:i.parentNode||r.body,position:S.getPropertyValue(i,"position"),fontSize:S.getPropertyValue(i,"fontSize")},a=e.position===H.lastPosition&&e.myParent===H.lastParent,o=e.fontSize===H.lastFontSize;H.lastParent=e.myParent,H.lastPosition=e.position,H.lastFontSize=e.fontSize;var s=100,l={};if(o&&a)l.emToPx=H.lastEmToPx,l.percentToPxWidth=H.lastPercentToPxWidth,l.percentToPxHeight=H.lastPercentToPxHeight;else{var u=n(i).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=H.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=H.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=H.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===H.remToPx&&(H.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===H.vwToPx&&(H.vwToPx=parseFloat(t.innerWidth)/100,H.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=H.remToPx,l.vwToPx=H.vwToPx,l.vhToPx=H.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),i),l}();var G=/margin|padding|left|right|width|text|word|letter/i.test(j)||/X$/.test(j)||"x"===j?"x":"y";switch(B){case"%":z*="x"===G?o.percentToPxWidth:o.percentToPxHeight;break;case"px":break;default:z*=o[B+"ToPx"]}switch(I){case"%":z*=1/("x"===G?o.percentToPxWidth:o.percentToPxHeight);break;case"px":break;default:z*=1/o[I+"ToPx"]}}switch(W){case"+":R=z+R;break;case"-":R=z-R;break;case"*":R*=z;break;case"/":R=z/R}l[j]={rootPropertyValue:$,startValue:z,currentValue:z,endValue:R,unitType:I,easing:O},b.debug&&console.log("tweensContainer ("+j+"): "+JSON.stringify(l[j]),i)}else b.debug&&console.log("Skipping ["+q+"] due to a lack of browser support.")}l.element=i}l.element&&(S.Values.addClass(i,"velocity-animating"),N.push(l),""===s.queue&&(n(i).tweensContainer=l,n(i).opts=s),n(i).isAnimating=!0,V===w-1?(b.State.calls.push([N,g,s,null,T.resolver]),!1===b.State.isTicking&&(b.State.isTicking=!0,c())):V++)}var o,i=this,s=f.extend({},b.defaults,v),l={};switch(n(i)===a&&b.init(i),parseFloat(s.delay)&&!1!==s.queue&&f.queue(i,s.queue,function(e){b.velocityQueueEntryFlag=!0,n(i).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}!1!==b.mock&&(!0===b.mock?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!y.isFunction(s.begin)&&(s.begin=null),s.progress&&!y.isFunction(s.progress)&&(s.progress=null),s.complete&&!y.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(i))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,!1===s.queue?s.delay?setTimeout(e,s.delay):e():f.queue(i,s.queue,function(t,r){return!0===r?(T.promise&&T.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e())}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(i)[0]||f.dequeue(i)}var s,l,d,g,m,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||y.isString(arguments[0].properties));if(y.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=i(g)){x?(m=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(m=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish|finishAll)$/i.test(m)&&!f.isPlainObject(v)){v={};for(var C=d+1;C<arguments.length;C++)y.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?y.isString(arguments[C])||y.isArray(arguments[C])?v.easing=arguments[C]:y.isFunction(arguments[C])&&(v.complete=arguments[C]):v.duration=arguments[C]}var T={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(T.promise=new b.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(m){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"finish":case"finishAll":case"stop":f.each(g,function(e,t){n(t)&&n(t).delayTimer&&(clearTimeout(n(t).delayTimer.setTimeout),n(t).delayTimer.next&&n(t).delayTimer.next(),delete n(t).delayTimer),"finishAll"!==m||!0!==v&&!y.isString(v)||(f.each(f.queue(t,y.isString(v)?v:""),function(e,t){y.isFunction(t)&&t()}),f.queue(t,y.isString(v)?v:"",[]))});var A=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,o){var i=v===a?"":v;return!0!==i&&t[2].queue!==i&&(v!==a||!1!==t[2].queue)||void f.each(g,function(r,a){a===o&&((!0===v||y.isString(v))&&(f.each(f.queue(a,y.isString(v)?v:""),function(e,t){y.isFunction(t)&&t(null,!0)}),f.queue(a,y.isString(v)?v:"",[])),"stop"===m?(n(a)&&n(a).tweensContainer&&!1!==i&&f.each(n(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),A.push(e)):("finish"===m||"finishAll"===m)&&(t[2].duration=1))})})}),"stop"===m&&(f.each(A,function(e,t){p(t,!0)}),T.promise&&T.resolver(g)),e();default:if(!f.isPlainObject(m)||y.isEmptyObject(m)){if(y.isString(m)&&b.Redirects[m]){var F=(R=f.extend({},v)).duration,E=R.delay||0;return!0===R.backwards&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(R.stagger)?R.delay=E+parseFloat(R.stagger)*e:y.isFunction(R.stagger)&&(R.delay=E+R.stagger.call(t,e,w)),R.drag&&(R.duration=parseFloat(F)||(/^(callout|transition)/.test(m)?1e3:h),R.duration=Math.max(R.duration*(R.backwards?1-e/w:(e+1)/w),.75*R.duration,200)),b.Redirects[m].call(t,t,R||{},e,w,g,T.promise?T:a)}),e()}var j="Velocity: First argument ("+m+") was not a property map, a known action, or a registered redirect. Aborting.";return T.promise?T.rejecter(new Error(j)):console.log(j),e()}k="start"}var H={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},N=[];f.each(g,function(e,t){y.isNode(t)&&o.call(t)});var L,R=f.extend({},b.defaults,v);if(R.loop=parseInt(R.loop),L=2*R.loop-1,R.loop)for(var O=0;L>O;O++){var z={delay:R.delay,progress:R.progress};O===L-1&&(z.display=R.display,z.visibility=R.visibility,z.complete=R.complete),P(g,"reverse",z)}return e()}};(b=f.extend(P,b)).animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,o,i,n,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(n,n);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(n,n),s&&s.resolver(n)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,o,i,n,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=o!==i-1?l.begin=null:function(){c&&c.call(n,n),s&&s.resolver(n)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}jQuery.fn.velocity=jQuery.fn.animate}}(window.jQuery||window.Zepto||window,window,document)});