(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function h(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(r){if(r.ep)return;r.ep=!0;const l=h(r);fetch(r.href,l)}})();function W(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var S={exports:{}};(function(g,m){(function(c,r){g.exports=r()})(window,function(){return function(h){var c={};function r(l){if(c[l])return c[l].exports;var s=c[l]={i:l,l:!1,exports:{}};return h[l].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=h,r.c=c,r.d=function(l,s,a){r.o(l,s)||Object.defineProperty(l,s,{enumerable:!0,get:a})},r.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},r.t=function(l,s){if(s&1&&(l=r(l)),s&8||s&4&&typeof l=="object"&&l&&l.__esModule)return l;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:l}),s&2&&typeof l!="string")for(var d in l)r.d(a,d,(function(p){return l[p]}).bind(null,d));return a},r.n=function(l){var s=l&&l.__esModule?function(){return l.default}:function(){return l};return r.d(s,"a",s),s},r.o=function(l,s){return Object.prototype.hasOwnProperty.call(l,s)},r.p="",r(r.s=2)}([function(h,c){/*!
 * object-extend
 * A well-tested function to deep extend (or merge) JavaScript objects without further dependencies.
 *
 * http://github.com/bernhardw
 *
 * Copyright 2013, Bernhard Wanger <mail@bernhardwanger.com>
 * Released under the MIT license.
 *
 * Date: 2013-04-10
 */h.exports=function r(l,s){return l==null||s==null||Object.keys(s).forEach(function(a){Object.prototype.toString.call(s[a])=="[object Object]"?Object.prototype.toString.call(l[a])!="[object Object]"?l[a]=s[a]:l[a]=r(l[a],s[a]):l[a]=s[a]}),l}},function(h,c){Array.prototype.each=function(r){for(var l=this.length,s=0;s<l;s++){var a=this[s];a&&r(a,s)}},NodeList.prototype.each=Array.prototype.each,NodeList.prototype.filter=Array.prototype.filter},function(h,c,r){r.r(c);var l=function(){this.trigger={once:!1,offset:{viewport:{x:0,y:0},element:{x:0,y:0}},toggle:{class:{in:"visible",out:"invisible"},callback:{in:null,visible:null,out:null}}},this.scroll={sustain:300,element:window,callback:function(){},start:function(){},stop:function(){},directionChange:function(){}}},s=r(0),a=r.n(s);r(1);function d(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function p(n,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function E(n,i,e){return i&&p(n.prototype,i),e&&p(n,e),n}function k(n){return Number(n)===n&&n%1===0}function T(n){return Number(n)===n&&n%1!==0}var b=function(){function n(i,e){d(this,n),this.element=i,e=a()(new l().trigger,e),this.offset=e.offset,this.toggle=e.toggle,this.once=e.once,this.visible=null,this.active=!0}return E(n,[{key:"checkVisibility",value:function(e,t){if(!this.active)return this.visible;var o=e.offsetWidth||e.innerWidth||0,f=e.offsetHeight||e.innerHeight||0,u={w:o,h:f},v=this.getBounds(),w=this._checkVisibility(v,u,t);if(w!==this.visible){this.visible=w;var L=this._toggleCallback();L instanceof Promise?L.then(this._toggleClass.bind(this)).catch(function(D){console.error("Trigger promise failed"),console.error(D)}):this._toggleClass(),this.visible&&this.once&&(this.active=!1)}else if(w&&typeof this.toggle.callback.visible=="function")return this.toggle.callback.visible.call(this.element,this);return w}},{key:"getBounds",value:function(){return this.element.getBoundingClientRect()}},{key:"_getElementOffset",value:function(e,t){var o={x:0,y:0};return typeof this.offset.element.x=="function"?o.x=e.width*this.offset.element.x(this,e,t):T(this.offset.element.x)?o.x=e.width*this.offset.element.x:k(this.offset.element.x)&&(o.x=this.offset.element.x),typeof this.offset.element.y=="function"?o.y=e.height*this.offset.element.y(this,e,t):T(this.offset.element.y)?o.y=e.height*this.offset.element.y:k(this.offset.element.y)&&(o.y=this.offset.element.y),o}},{key:"_getViewportOffset",value:function(e,t){var o={x:0,y:0};return typeof this.offset.viewport.x=="function"?o.x=e.w*this.offset.viewport.x(this,e,t):T(this.offset.viewport.x)?o.x=e.w*this.offset.viewport.x:k(this.offset.viewport.x)&&(o.x=this.offset.viewport.x),typeof this.offset.viewport.y=="function"?o.y=e.h*this.offset.viewport.y(this,e,t):T(this.offset.viewport.y)?o.y=e.h*this.offset.viewport.y:k(this.offset.viewport.y)&&(o.y=this.offset.viewport.y),o}},{key:"_checkVisibility",value:function(e,t,o){var f=this._getElementOffset(e,o),u=this._getViewportOffset(t,o),v=!0;return e.left-u.x<-(e.width-f.x)&&(v=!1),e.left+u.x>t.w-f.x&&(v=!1),e.top-u.y<-(e.height-f.y)&&(v=!1),e.top+u.y>t.h-f.y&&(v=!1),v}},{key:"_toggleClass",value:function(){var e=this;if(this.visible){Array.isArray(this.toggle.class.in)?this.toggle.class.in.each(function(t){e.element.classList.add(t)}):this.element.classList.add(this.toggle.class.in),Array.isArray(this.toggle.class.out)?this.toggle.class.out.each(function(t){e.element.classList.remove(t)}):this.element.classList.remove(this.toggle.class.out);return}Array.isArray(this.toggle.class.in)?this.toggle.class.in.each(function(t){e.element.classList.remove(t)}):this.element.classList.remove(this.toggle.class.in),Array.isArray(this.toggle.class.out)?this.toggle.class.out.each(function(t){e.element.classList.add(t)}):this.element.classList.add(this.toggle.class.out)}},{key:"_toggleCallback",value:function(){if(this.visible){if(typeof this.toggle.callback.in=="function")return this.toggle.callback.in.call(this.element,this)}else if(typeof this.toggle.callback.out=="function")return this.toggle.callback.out.call(this.element,this)}}]),n}();function P(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function O(n,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function M(n,i,e){return i&&O(n.prototype,i),e&&O(n,e),n}var N=function(){function n(i){P(this,n),this.triggers=i instanceof Array?i:[]}return M(n,[{key:"add",value:function(e){var t=this;if(e instanceof b)return this.triggers.push(e);e.each(function(o){o instanceof b?t.triggers.push(o):console.error("Object added to TriggerCollection is not a Trigger. Object: ",o)})}},{key:"remove",value:function(e){e instanceof b&&(e=[e]),this.triggers=this.triggers.filter(function(t){var o=!1;return e.each(function(f){f==t&&(o=!0)}),!o})}},{key:"query",value:function(e){return this.triggers.filter(function(t){var o=t.element,f=o.parentNode,u=[].slice.call(f.querySelectorAll(e));return u.indexOf(o)>-1})}},{key:"search",value:function(e){var t=this.triggers.filter(function(o){if(e instanceof NodeList||Array.isArray(e)){var f=!1;return e.each(function(u){o.element==u&&(f=!0)}),f}return o.element==e});return t.length==0?null:t.length>1?t:t[0]}},{key:"call",value:function(e){this.triggers.each(e)}}]),n}();function R(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function C(n,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function q(n,i,e){return i&&C(n.prototype,i),e&&C(n,e),n}var F=function(){function n(i,e){R(this,n),this._parseOptions(i),typeof e=="function"&&(this.callback=e),this.direction="none",this.position=this.getPosition(),this.lastAction=this._getTimestamp(),this._startRun(),this._boundListener=this._didScroll.bind(this),this.element.addEventListener("scroll",this._boundListener)}return q(n,[{key:"_parseOptions",value:function(e){var t=new l().scroll;typeof e!="function"?(t.callback=function(){},t=a()(t,e)):t.callback=e,this.element=t.element,this.sustain=t.sustain,this.callback=t.callback,this.startCallback=t.start,this.stopCallback=t.stop,this.directionChange=t.directionChange}},{key:"_didScroll",value:function(){var e=this.getPosition();if(this.position!==e){var t=this.direction;e.x!==this.position.x?t=e.x>this.position.x?"right":"left":e.y!==this.position.y?t=e.y>this.position.y?"bottom":"top":t="none",t!==this.direction&&(this.direction=t,typeof this.directionChange=="function"&&this.directionChange(this.direction)),this.position=e,this.lastAction=this._getTimestamp()}else this.direction="none";this.running||this._startRun()}},{key:"_startRun",value:function(){this.running=!0,typeof this.startCallback=="function"&&this.startCallback(),this._loop()}},{key:"_stopRun",value:function(){this.running=!1,typeof this.stopCallback=="function"&&this.stopCallback()}},{key:"getPosition",value:function(){var e=this.element.pageXOffset||this.element.scrollLeft||document.documentElement.scrollLeft||0,t=this.element.pageYOffset||this.element.scrollTop||document.documentElement.scrollTop||0;return{x:e,y:t}}},{key:"_getTimestamp",value:function(){return Number(Date.now())}},{key:"_tick",value:function(){this.callback(this.position,this.direction);var e=this._getTimestamp();e-this.lastAction>this.sustain&&this._stopRun(),this.running&&this._loop()}},{key:"_loop",value:function(){var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,16.666666666666668)};e(this._tick.bind(this))}},{key:"kill",value:function(){this.running=!1,this.element.removeEventListener("scroll",this._boundListener)}}]),n}();r.d(c,"Trigger",function(){return y}),r.d(c,"TriggerCollection",function(){return A}),r.d(c,"ScrollAnimationLoop",function(){return x}),r.d(c,"default",function(){return B});function V(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function _(n,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function H(n,i,e){return i&&_(n.prototype,i),e&&_(n,e),n}/*!
 * ScrollTrigger
 *
 *
 * http://github.com/terwanerik
 *
 * Copyright 2017, Erik Terwan <erik@erikterwan.com>
 * Released under the MIT license.
 *
 * Date: 2017-07-09
 */var y=b,A=N,x=F,B=function(){function n(i){V(this,n),this._parseOptions(i),this._initCollection(),this._initLoop()}return H(n,[{key:"_parseOptions",value:function(e){e=a()(new l,e),this.defaultTrigger=e.trigger,this.scrollOptions=e.scroll}},{key:"_initCollection",value:function(){var e=document.querySelectorAll("[data-scroll]"),t=[];e.length>0&&(t=this.createTriggers(e)),this.collection=new A(t)}},{key:"_initLoop",value:function(){var e=this;this.loop=new x({sustain:this.scrollOptions.sustain,element:this.scrollOptions.element,callback:function(o,f){e._scrollCallback(o,f)},start:function(){e._scrollStart()},stop:function(){e._scrollStop()},directionChange:function(o){e._scrollDirectionChange(o)}})}},{key:"_scrollCallback",value:function(e,t){var o=this;this.collection.call(function(f){f.checkVisibility(o.scrollOptions.element,t)}),this.scrollOptions.callback(e,t)}},{key:"_scrollStart",value:function(){this.scrollOptions.start()}},{key:"_scrollStop",value:function(){this.scrollOptions.stop()}},{key:"_scrollDirectionChange",value:function(e){this.scrollOptions.directionChange(e)}},{key:"createTrigger",value:function(e,t){return new y(e,a()(this.defaultTrigger,t))}},{key:"createTriggers",value:function(e,t){var o=this,f=[];return e.each(function(u){f.push(o.createTrigger(u,t))}),f}},{key:"add",value:function(e,t){return e instanceof HTMLElement?(this.collection.add(this.createTrigger(e,t)),this):e instanceof y?(this.collection.add(e),this):e instanceof NodeList?(this.collection.add(this.createTriggers(e,t)),this):Array.isArray(e)&&e.length&&e[0]instanceof y?(this.collection.add(e),this):Array.isArray(e)&&e.length&&e[0]instanceof HTMLElement?(this.collection.add(this.createTriggers(e,t)),this):(this.collection.add(this.createTriggers(document.querySelectorAll(e),t)),this)}},{key:"remove",value:function(e){return e instanceof y?(this.collection.remove(e),this):Array.isArray(e)&&e.length&&e[0]instanceof y?(this.collection.remove(e),this):e instanceof HTMLElement?(this.collection.remove(this.search(e)),this):Array.isArray(e)&&e.length&&e[0]instanceof HTMLElement?(this.collection.remove(this.search(e)),this):e instanceof NodeList?(this.collection.remove(this.search(e)),this):Array.isArray(e)&&e.length&&e[0]instanceof y?(this.collection.remove(e),this):(this.collection.remove(this.query(e.toString())),this)}},{key:"query",value:function(e){return this.collection.query(e)}},{key:"search",value:function(e){return this.collection.search(e)}},{key:"listen",value:function(){this.loop||this._initLoop()}},{key:"kill",value:function(){this.loop.kill(),this.loop=null}}]),n}()}])})})(S);var z=S.exports;const K=W(z);window.addEventListener("load",()=>{new K().add("[data-trigger]",{offset:{element:{x:0,y:0},viewport:{x:0,y:(m,h,c)=>m.visible?0:.5}}})});