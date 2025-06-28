const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CPQSPCFa.js","./DKnE3xQg.js","./tYwOYGLs.js","./C_MYWIpT.js","./B1ucb5r9.js","./BTDP4KQe.js","./crud.Dmojtu0k.css","./hg82SYtR.js","./BGD8fiB9.js","./admin.BE8vwo8A.css","./yqh4kOQi.js","./Shg85GCd.js","./CnAV_5I1.js","./login.DAfka54j.css","./kS0pT4jC.js","./Bmvi1Jk2.js","./DRsh-DDs.js","./BgsiD2yf.js","./DLT2w2Us.js","./default.CMqTBQLj.css","./Dy2lEY1K.js","./error-404.4oxyXxx0.css","./BPt8t5ZP.js","./error-500.CZqNkBuR.css"])))=>i.map(i=>d[i]);
var Mm=Object.defineProperty;var Dm=(t,e,n)=>e in t?Mm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var gn=(t,e,n)=>Dm(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const me={},Ps=[],Ht=()=>{},Lm=()=>!1,di=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ec=t=>t.startsWith("onUpdate:"),Ue=Object.assign,tc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fm=Object.prototype.hasOwnProperty,he=(t,e)=>Fm.call(t,e),Y=Array.isArray,Ns=t=>or(t)==="[object Map]",ir=t=>or(t)==="[object Set]",Au=t=>or(t)==="[object Date]",Um=t=>or(t)==="[object RegExp]",Z=t=>typeof t=="function",Ie=t=>typeof t=="string",Wt=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",nc=t=>(ge(t)||Z(t))&&Z(t.then)&&Z(t.catch),dd=Object.prototype.toString,or=t=>dd.call(t),Hm=t=>or(t).slice(8,-1),pd=t=>or(t)==="[object Object]",sc=t=>Ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Os=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$o=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bm=/-(\w)/g,vt=$o(t=>t.replace(Bm,(e,n)=>n?n.toUpperCase():"")),$m=/\B([A-Z])/g,gs=$o(t=>t.replace($m,"-$1").toLowerCase()),Wo=$o(t=>t.charAt(0).toUpperCase()+t.slice(1)),ya=$o(t=>t?`on${Wo(t)}`:""),An=(t,e)=>!Object.is(t,e),xs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},tl=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},to=t=>{const e=parseFloat(t);return isNaN(e)?t:e},gd=t=>{const e=Ie(t)?Number(t):NaN;return isNaN(e)?t:e};let Pu;const jo=()=>Pu||(Pu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vo(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ie(s)?Km(s):Vo(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ie(t)||ge(t))return t}const Wm=/;(?![^(]*\))/g,jm=/:([^]+)/,Vm=/\/\*[^]*?\*\//g;function Km(t){const e={};return t.replace(Vm,"").split(Wm).forEach(n=>{if(n){const s=n.split(jm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ko(t){let e="";if(Ie(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=Ko(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function qm(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ie(e)&&(t.class=Ko(e)),n&&(t.style=Vo(n)),t}const Gm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zm=Zl(Gm);function _d(t){return!!t||t===""}function Ym(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=os(t[s],e[s]);return n}function os(t,e){if(t===e)return!0;let n=Au(t),s=Au(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Wt(t),s=Wt(e),n||s)return t===e;if(n=Y(t),s=Y(e),n||s)return n&&s?Ym(t,e):!1;if(n=ge(t),s=ge(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!os(t[o],e[o]))return!1}}return String(t)===String(e)}function rc(t,e){return t.findIndex(n=>os(n,e))}const md=t=>!!(t&&t.__v_isRef===!0),Qm=t=>Ie(t)?t:t==null?"":Y(t)||ge(t)&&(t.toString===dd||!Z(t.toString))?md(t)?Qm(t.value):JSON.stringify(t,yd,2):String(t),yd=(t,e)=>md(e)?yd(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[va(s,i)+" =>"]=r,n),{})}:ir(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>va(n))}:Wt(e)?va(e):ge(e)&&!Y(e)&&!pd(e)?String(e):e,va=(t,e="")=>{var n;return Wt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class vd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ke;try{return Ke=this,e()}finally{Ke=n}}}on(){++this._on===1&&(this.prevScope=Ke,Ke=this)}off(){this._on>0&&--this._on===0&&(Ke=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Jm(t){return new vd(t)}function ic(){return Ke}function Xm(t,e=!1){Ke&&Ke.cleanups.push(t)}let ve;const wa=new WeakSet;class wd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&Ke.active&&Ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wa.has(this)&&(wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nu(this),Cd(this);const e=ve,n=Rt;ve=this,Rt=!0;try{return this.fn()}finally{Td(this),ve=e,Rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)lc(e);this.deps=this.depsTail=void 0,Nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nl(this)&&this.run()}get dirty(){return nl(this)}}let Ed=0,Pr,Nr;function bd(t,e=!1){if(t.flags|=8,e){t.next=Nr,Nr=t;return}t.next=Pr,Pr=t}function oc(){Ed++}function ac(){if(--Ed>0)return;if(Nr){let e=Nr;for(Nr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Pr;){let e=Pr;for(Pr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Cd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Td(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),lc(s),Zm(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function nl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Id(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Id(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===qr)||(t.globalVersion=qr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!nl(t))))return;t.flags|=2;const e=t.dep,n=ve,s=Rt;ve=t,Rt=!0;try{Cd(t);const r=t.fn(t._value);(e.version===0||An(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ve=n,Rt=s,Td(t),t.flags&=-3}}function lc(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)lc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Rt=!0;const Sd=[];function sn(){Sd.push(Rt),Rt=!1}function rn(){const t=Sd.pop();Rt=t===void 0?!0:t}function Nu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ve;ve=void 0;try{e()}finally{ve=n}}}let qr=0;class ey{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class cc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ve||!Rt||ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ve)n=this.activeLink=new ey(ve,this),ve.deps?(n.prevDep=ve.depsTail,ve.depsTail.nextDep=n,ve.depsTail=n):ve.deps=ve.depsTail=n,Rd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ve.depsTail,n.nextDep=void 0,ve.depsTail.nextDep=n,ve.depsTail=n,ve.deps===n&&(ve.deps=s)}return n}trigger(e){this.version++,qr++,this.notify(e)}notify(e){oc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ac()}}}function Rd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Rd(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const no=new WeakMap,es=Symbol(""),sl=Symbol(""),Gr=Symbol("");function qe(t,e,n){if(Rt&&ve){let s=no.get(t);s||no.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new cc),r.map=s,r.key=n),r.track()}}function Yt(t,e,n,s,r,i){const o=no.get(t);if(!o){qr++;return}const a=l=>{l&&l.trigger()};if(oc(),e==="clear")o.forEach(a);else{const l=Y(t),u=l&&sc(n);if(l&&n==="length"){const c=Number(s);o.forEach((f,h)=>{(h==="length"||h===Gr||!Wt(h)&&h>=c)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Gr)),e){case"add":l?u&&a(o.get("length")):(a(o.get(es)),Ns(t)&&a(o.get(sl)));break;case"delete":l||(a(o.get(es)),Ns(t)&&a(o.get(sl)));break;case"set":Ns(t)&&a(o.get(es));break}}ac()}function ty(t,e){const n=no.get(t);return n&&n.get(e)}function bs(t){const e=ae(t);return e===t?e:(qe(e,"iterate",Gr),_t(t)?e:e.map(Be))}function qo(t){return qe(t=ae(t),"iterate",Gr),t}const ny={__proto__:null,[Symbol.iterator](){return Ea(this,Symbol.iterator,Be)},concat(...t){return bs(this).concat(...t.map(e=>Y(e)?bs(e):e))},entries(){return Ea(this,"entries",t=>(t[1]=Be(t[1]),t))},every(t,e){return Kt(this,"every",t,e,void 0,arguments)},filter(t,e){return Kt(this,"filter",t,e,n=>n.map(Be),arguments)},find(t,e){return Kt(this,"find",t,e,Be,arguments)},findIndex(t,e){return Kt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Kt(this,"findLast",t,e,Be,arguments)},findLastIndex(t,e){return Kt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Kt(this,"forEach",t,e,void 0,arguments)},includes(...t){return ba(this,"includes",t)},indexOf(...t){return ba(this,"indexOf",t)},join(t){return bs(this).join(t)},lastIndexOf(...t){return ba(this,"lastIndexOf",t)},map(t,e){return Kt(this,"map",t,e,void 0,arguments)},pop(){return yr(this,"pop")},push(...t){return yr(this,"push",t)},reduce(t,...e){return Ou(this,"reduce",t,e)},reduceRight(t,...e){return Ou(this,"reduceRight",t,e)},shift(){return yr(this,"shift")},some(t,e){return Kt(this,"some",t,e,void 0,arguments)},splice(...t){return yr(this,"splice",t)},toReversed(){return bs(this).toReversed()},toSorted(t){return bs(this).toSorted(t)},toSpliced(...t){return bs(this).toSpliced(...t)},unshift(...t){return yr(this,"unshift",t)},values(){return Ea(this,"values",Be)}};function Ea(t,e,n){const s=qo(t),r=s[e]();return s!==t&&!_t(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const sy=Array.prototype;function Kt(t,e,n,s,r,i){const o=qo(t),a=o!==t&&!_t(t),l=o[e];if(l!==sy[e]){const f=l.apply(t,i);return a?Be(f):f}let u=n;o!==t&&(a?u=function(f,h){return n.call(this,Be(f),h,t)}:n.length>2&&(u=function(f,h){return n.call(this,f,h,t)}));const c=l.call(o,u,s);return a&&r?r(c):c}function Ou(t,e,n,s){const r=qo(t);let i=n;return r!==t&&(_t(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Be(a),l,t)}),r[e](i,...s)}function ba(t,e,n){const s=ae(t);qe(s,"iterate",Gr);const r=s[e](...n);return(r===-1||r===!1)&&hc(n[0])?(n[0]=ae(n[0]),s[e](...n)):r}function yr(t,e,n=[]){sn(),oc();const s=ae(t)[e].apply(t,n);return ac(),rn(),s}const ry=Zl("__proto__,__v_isRef,__isVue"),kd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wt));function iy(t){Wt(t)||(t=String(t));const e=ae(this);return qe(e,"has",t),e.hasOwnProperty(t)}class Ad{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?gy:xd:i?Od:Nd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=Y(e);if(!r){let l;if(o&&(l=ny[n]))return l;if(n==="hasOwnProperty")return iy}const a=Reflect.get(e,n,De(e)?e:s);return(Wt(n)?kd.has(n):ry(n))||(r||qe(e,"get",n),i)?a:De(a)?o&&sc(n)?a:a.value:ge(a)?r?Md(a):$n(a):a}}class Pd extends Ad{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=on(i);if(!_t(s)&&!on(s)&&(i=ae(i),s=ae(s)),!Y(e)&&De(i)&&!De(s))return l?!1:(i.value=s,!0)}const o=Y(e)&&sc(n)?Number(n)<e.length:he(e,n),a=Reflect.set(e,n,s,De(e)?e:r);return e===ae(r)&&(o?An(s,i)&&Yt(e,"set",n,s):Yt(e,"add",n,s)),a}deleteProperty(e,n){const s=he(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Yt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Wt(n)||!kd.has(n))&&qe(e,"has",n),s}ownKeys(e){return qe(e,"iterate",Y(e)?"length":es),Reflect.ownKeys(e)}}class oy extends Ad{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ay=new Pd,ly=new oy,cy=new Pd(!0);const rl=t=>t,Ni=t=>Reflect.getPrototypeOf(t);function uy(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=Ns(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...s),c=n?rl:e?so:Be;return!e&&qe(i,"iterate",l?sl:es),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}},[Symbol.iterator](){return this}}}}function Oi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fy(t,e){const n={get(r){const i=this.__v_raw,o=ae(i),a=ae(r);t||(An(r,a)&&qe(o,"get",r),qe(o,"get",a));const{has:l}=Ni(o),u=e?rl:t?so:Be;if(l.call(o,r))return u(i.get(r));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&qe(ae(r),"iterate",es),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=ae(i),a=ae(r);return t||(An(r,a)&&qe(o,"has",r),qe(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=ae(a),u=e?rl:t?so:Be;return!t&&qe(l,"iterate",es),a.forEach((c,f)=>r.call(i,u(c),u(f),o))}};return Ue(n,t?{add:Oi("add"),set:Oi("set"),delete:Oi("delete"),clear:Oi("clear")}:{add(r){!e&&!_t(r)&&!on(r)&&(r=ae(r));const i=ae(this);return Ni(i).has.call(i,r)||(i.add(r),Yt(i,"add",r,r)),this},set(r,i){!e&&!_t(i)&&!on(i)&&(i=ae(i));const o=ae(this),{has:a,get:l}=Ni(o);let u=a.call(o,r);u||(r=ae(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,i),u?An(i,c)&&Yt(o,"set",r,i):Yt(o,"add",r,i),this},delete(r){const i=ae(this),{has:o,get:a}=Ni(i);let l=o.call(i,r);l||(r=ae(r),l=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return l&&Yt(i,"delete",r,void 0),u},clear(){const r=ae(this),i=r.size!==0,o=r.clear();return i&&Yt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=uy(r,t,e)}),n}function uc(t,e){const n=fy(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(he(n,r)&&r in s?n:s,r,i)}const hy={get:uc(!1,!1)},dy={get:uc(!1,!0)},py={get:uc(!0,!1)};const Nd=new WeakMap,Od=new WeakMap,xd=new WeakMap,gy=new WeakMap;function _y(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function my(t){return t.__v_skip||!Object.isExtensible(t)?0:_y(Hm(t))}function $n(t){return on(t)?t:fc(t,!1,ay,hy,Nd)}function Ut(t){return fc(t,!1,cy,dy,Od)}function Md(t){return fc(t,!0,ly,py,xd)}function fc(t,e,n,s,r){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=my(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function ts(t){return on(t)?ts(t.__v_raw):!!(t&&t.__v_isReactive)}function on(t){return!!(t&&t.__v_isReadonly)}function _t(t){return!!(t&&t.__v_isShallow)}function hc(t){return t?!!t.__v_raw:!1}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function yy(t){return!he(t,"__v_skip")&&Object.isExtensible(t)&&tl(t,"__v_skip",!0),t}const Be=t=>ge(t)?$n(t):t,so=t=>ge(t)?Md(t):t;function De(t){return t?t.__v_isRef===!0:!1}function tn(t){return Dd(t,!1)}function an(t){return Dd(t,!0)}function Dd(t,e){return De(t)?t:new vy(t,e)}class vy{constructor(e,n){this.dep=new cc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ae(e),this._value=n?e:Be(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||_t(e)||on(e);e=s?e:ae(e),An(e,n)&&(this._rawValue=e,this._value=s?e:Be(e),this.dep.trigger())}}function be(t){return De(t)?t.value:t}function wy(t){return Z(t)?t():be(t)}const Ey={get:(t,e,n)=>e==="__v_raw"?t:be(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return De(r)&&!De(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Ld(t){return ts(t)?t:new Proxy(t,Ey)}class by{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ty(ae(this._object),this._key)}}class Cy{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ty(t,e,n){return De(t)?t:Z(t)?new Cy(t):ge(t)&&arguments.length>1?Iy(t,e,n):tn(t)}function Iy(t,e,n){const s=t[e];return De(s)?s:new by(t,e,n)}class Sy{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new cc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return bd(this,!0),!0}get value(){const e=this.dep.track();return Id(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ry(t,e,n=!1){let s,r;return Z(t)?s=t:(s=t.get,r=t.set),new Sy(s,r,n)}const xi={},ro=new WeakMap;let zn;function ky(t,e=!1,n=zn){if(n){let s=ro.get(n);s||ro.set(n,s=[]),s.push(t)}}function Ay(t,e,n=me){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,u=v=>r?v:_t(v)||r===!1||r===0?Qt(v,1):Qt(v);let c,f,h,d,g=!1,m=!1;if(De(t)?(f=()=>t.value,g=_t(t)):ts(t)?(f=()=>u(t),g=!0):Y(t)?(m=!0,g=t.some(v=>ts(v)||_t(v)),f=()=>t.map(v=>{if(De(v))return v.value;if(ts(v))return u(v);if(Z(v))return l?l(v,2):v()})):Z(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){sn();try{h()}finally{rn()}}const v=zn;zn=c;try{return l?l(t,3,[d]):t(d)}finally{zn=v}}:f=Ht,e&&r){const v=f,b=r===!0?1/0:r;f=()=>Qt(v(),b)}const C=ic(),E=()=>{c.stop(),C&&C.active&&tc(C.effects,c)};if(i&&e){const v=e;e=(...b)=>{v(...b),E()}}let w=m?new Array(t.length).fill(xi):xi;const _=v=>{if(!(!(c.flags&1)||!c.dirty&&!v))if(e){const b=c.run();if(r||g||(m?b.some((S,k)=>An(S,w[k])):An(b,w))){h&&h();const S=zn;zn=c;try{const k=[b,w===xi?void 0:m&&w[0]===xi?[]:w,d];w=b,l?l(e,3,k):e(...k)}finally{zn=S}}}else c.run()};return a&&a(_),c=new wd(f),c.scheduler=o?()=>o(_,!1):_,d=v=>ky(v,!1,c),h=c.onStop=()=>{const v=ro.get(c);if(v){if(l)l(v,4);else for(const b of v)b();ro.delete(c)}},e?s?_(!0):w=c.run():o?o(_.bind(null,!0),!0):c.run(),E.pause=c.pause.bind(c),E.resume=c.resume.bind(c),E.stop=E,E}function Qt(t,e=1/0,n){if(e<=0||!ge(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,De(t))Qt(t.value,e,n);else if(Y(t))for(let s=0;s<t.length;s++)Qt(t[s],e,n);else if(ir(t)||Ns(t))t.forEach(s=>{Qt(s,e,n)});else if(pd(t)){for(const s in t)Qt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Qt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pi(t,e,n,s){try{return s?t(...s):t()}catch(r){ar(r,e,n)}}function At(t,e,n,s){if(Z(t)){const r=pi(t,e,n,s);return r&&nc(r)&&r.catch(i=>{ar(i,e,n)}),r}if(Y(t)){const r=[];for(let i=0;i<t.length;i++)r.push(At(t[i],e,n,s));return r}}function ar(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||me;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,l,u)===!1)return}a=a.parent}if(i){sn(),pi(i,null,10,[t,l,u]),rn();return}}Py(t,n,r,s,o)}function Py(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const ze=[];let Dt=-1;const Ms=[];let yn=null,Is=0;const Fd=Promise.resolve();let io=null;function as(t){const e=io||Fd;return t?e.then(this?t.bind(this):t):e}function Ny(t){let e=Dt+1,n=ze.length;for(;e<n;){const s=e+n>>>1,r=ze[s],i=zr(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function dc(t){if(!(t.flags&1)){const e=zr(t),n=ze[ze.length-1];!n||!(t.flags&2)&&e>=zr(n)?ze.push(t):ze.splice(Ny(e),0,t),t.flags|=1,Ud()}}function Ud(){io||(io=Fd.then(Hd))}function il(t){Y(t)?Ms.push(...t):yn&&t.id===-1?yn.splice(Is+1,0,t):t.flags&1||(Ms.push(t),t.flags|=1),Ud()}function xu(t,e,n=Dt+1){for(;n<ze.length;n++){const s=ze[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;ze.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function oo(t){if(Ms.length){const e=[...new Set(Ms)].sort((n,s)=>zr(n)-zr(s));if(Ms.length=0,yn){yn.push(...e);return}for(yn=e,Is=0;Is<yn.length;Is++){const n=yn[Is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yn=null,Is=0}}const zr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Hd(t){try{for(Dt=0;Dt<ze.length;Dt++){const e=ze[Dt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dt<ze.length;Dt++){const e=ze[Dt];e&&(e.flags&=-2)}Dt=-1,ze.length=0,oo(),io=null,(ze.length||Ms.length)&&Hd()}}let Ye=null,Bd=null;function ao(t){const e=Ye;return Ye=t,Bd=t&&t.type.__scopeId||null,e}function pc(t,e=Ye,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ku(-1);const i=ao(e);let o;try{o=t(...r)}finally{ao(i),s._d&&Ku(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function sN(t,e){if(Ye===null)return t;const n=Jo(Ye),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=me]=e[r];i&&(Z(i)&&(i={mounted:i,updated:i}),i.deep&&Qt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Lt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(sn(),At(l,n,8,[t.el,a,t,e]),rn())}}const Oy=Symbol("_vte"),$d=t=>t.__isTeleport,vn=Symbol("_leaveCb"),Mi=Symbol("_enterCb");function xy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yr(()=>{t.isMounted=!0}),_i(()=>{t.isUnmounting=!0}),t}const ht=[Function,Array],Wd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ht,onEnter:ht,onAfterEnter:ht,onEnterCancelled:ht,onBeforeLeave:ht,onLeave:ht,onAfterLeave:ht,onLeaveCancelled:ht,onBeforeAppear:ht,onAppear:ht,onAfterAppear:ht,onAppearCancelled:ht},jd=t=>{const e=t.subTree;return e.component?jd(e.component):e},My={name:"BaseTransition",props:Wd,setup(t,{slots:e}){const n=mi(),s=xy();return()=>{const r=e.default&&qd(e.default(),!0);if(!r||!r.length)return;const i=Vd(r),o=ae(t),{mode:a}=o;if(s.isLeaving)return Ca(i);const l=Mu(i);if(!l)return Ca(i);let u=ol(l,o,s,n,f=>u=f);l.type!==Oe&&Vs(l,u);let c=n.subTree&&Mu(n.subTree);if(c&&c.type!==Oe&&!bt(l,c)&&jd(n).type!==Oe){let f=ol(c,o,s,n);if(Vs(c,f),a==="out-in"&&l.type!==Oe)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,c=void 0},Ca(i);a==="in-out"&&l.type!==Oe?f.delayLeave=(h,d,g)=>{const m=Kd(s,c);m[String(c.key)]=c,h[vn]=()=>{d(),h[vn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Vd(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Oe){e=n;break}}return e}const Dy=My;function Kd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ol(t,e,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:C,onAppear:E,onAfterAppear:w,onAppearCancelled:_}=e,v=String(t.key),b=Kd(n,t),S=(M,x)=>{M&&At(M,s,9,x)},k=(M,x)=>{const G=x[1];S(M,x),Y(M)?M.every(O=>O.length<=1)&&G():M.length<=1&&G()},W={mode:o,persisted:a,beforeEnter(M){let x=l;if(!n.isMounted)if(i)x=C||l;else return;M[vn]&&M[vn](!0);const G=b[v];G&&bt(t,G)&&G.el[vn]&&G.el[vn](),S(x,[M])},enter(M){let x=u,G=c,O=f;if(!n.isMounted)if(i)x=E||u,G=w||c,O=_||f;else return;let z=!1;const ie=M[Mi]=ce=>{z||(z=!0,ce?S(O,[M]):S(G,[M]),W.delayedLeave&&W.delayedLeave(),M[Mi]=void 0)};x?k(x,[M,ie]):ie()},leave(M,x){const G=String(t.key);if(M[Mi]&&M[Mi](!0),n.isUnmounting)return x();S(h,[M]);let O=!1;const z=M[vn]=ie=>{O||(O=!0,x(),ie?S(m,[M]):S(g,[M]),M[vn]=void 0,b[G]===t&&delete b[G])};b[G]=t,d?k(d,[M,z]):z()},clone(M){const x=ol(M,e,n,s,r);return r&&r(x),x}};return W}function Ca(t){if(gi(t))return t=mt(t),t.children=null,t}function Mu(t){if(!gi(t))return $d(t.type)&&t.children?Vd(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Z(n.default))return n.default()}}function Vs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Vs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qd(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===lt?(o.patchFlag&128&&r++,s=s.concat(qd(o.children,e,a))):(e||o.type!==Oe)&&s.push(a!=null?mt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function fn(t,e){return Z(t)?Ue({name:t.name},e,{setup:t}):t}function gc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ds(t,e,n,s,r=!1){if(Y(t)){t.forEach((g,m)=>Ds(g,e&&(Y(e)?e[m]:e),n,s,r));return}if(ns(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ds(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Jo(s.component):s.el,o=r?null:i,{i:a,r:l}=t,u=e&&e.r,c=a.refs===me?a.refs={}:a.refs,f=a.setupState,h=ae(f),d=f===me?()=>!1:g=>he(h,g);if(u!=null&&u!==l&&(Ie(u)?(c[u]=null,d(u)&&(f[u]=null)):De(u)&&(u.value=null)),Z(l))pi(l,a,12,[o,c]);else{const g=Ie(l),m=De(l);if(g||m){const C=()=>{if(t.f){const E=g?d(l)?f[l]:c[l]:l.value;r?Y(E)&&tc(E,i):Y(E)?E.includes(i)||E.push(i):g?(c[l]=[i],d(l)&&(f[l]=c[l])):(l.value=[i],t.k&&(c[t.k]=l.value))}else g?(c[l]=o,d(l)&&(f[l]=o)):m&&(l.value=o,t.k&&(c[t.k]=o))};o?(C.id=-1,He(C,n)):C()}}}let Du=!1;const Cs=()=>{Du||(console.error("Hydration completed but contains mismatches."),Du=!0)},Ly=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Fy=t=>t.namespaceURI.includes("MathML"),Di=t=>{if(t.nodeType===1){if(Ly(t))return"svg";if(Fy(t))return"mathml"}},Rs=t=>t.nodeType===8;function Uy(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,c=(_,v)=>{if(!v.hasChildNodes()){n(null,_,v),oo(),v._vnode=_;return}f(v.firstChild,_,null,null,null),oo(),v._vnode=_},f=(_,v,b,S,k,W=!1)=>{W=W||!!v.dynamicChildren;const M=Rs(_)&&_.data==="[",x=()=>m(_,v,b,S,k,M),{type:G,ref:O,shapeFlag:z,patchFlag:ie}=v;let ce=_.nodeType;v.el=_,ie===-2&&(W=!1,v.dynamicChildren=null);let j=null;switch(G){case rs:ce!==3?v.children===""?(l(v.el=r(""),o(_),_),j=_):j=x():(_.data!==v.children&&(Cs(),_.data=v.children),j=i(_));break;case Oe:w(_)?(j=i(_),E(v.el=_.content.firstChild,_,b)):ce!==8||M?j=x():j=i(_);break;case xr:if(M&&(_=i(_),ce=_.nodeType),ce===1||ce===3){j=_;const te=!v.children.length;for(let V=0;V<v.staticCount;V++)te&&(v.children+=j.nodeType===1?j.outerHTML:j.data),V===v.staticCount-1&&(v.anchor=j),j=i(j);return M?i(j):j}else x();break;case lt:M?j=g(_,v,b,S,k,W):j=x();break;default:if(z&1)(ce!==1||v.type.toLowerCase()!==_.tagName.toLowerCase())&&!w(_)?j=x():j=h(_,v,b,S,k,W);else if(z&6){v.slotScopeIds=k;const te=o(_);if(M?j=C(_):Rs(_)&&_.data==="teleport start"?j=C(_,_.data,"teleport end"):j=i(_),e(v,te,null,b,S,Di(te),W),ns(v)&&!v.type.__asyncResolved){let V;M?(V=Te(lt),V.anchor=j?j.previousSibling:te.lastChild):V=_.nodeType===3?Rp(""):Te("div"),V.el=_,v.component.subTree=V}}else z&64?ce!==8?j=x():j=v.type.hydrate(_,v,b,S,k,W,t,d):z&128&&(j=v.type.hydrate(_,v,b,S,Di(o(_)),k,W,t,f))}return O!=null&&Ds(O,null,S,v),j},h=(_,v,b,S,k,W)=>{W=W||!!v.dynamicChildren;const{type:M,props:x,patchFlag:G,shapeFlag:O,dirs:z,transition:ie}=v,ce=M==="input"||M==="option";if(ce||G!==-1){z&&Lt(v,null,b,"created");let j=!1;if(w(_)){j=pp(null,ie)&&b&&b.vnode.props&&b.vnode.props.appear;const V=_.content.firstChild;if(j){const Se=V.getAttribute("class");Se&&(V.$cls=Se),ie.beforeEnter(V)}E(V,_,b),v.el=_=V}if(O&16&&!(x&&(x.innerHTML||x.textContent))){let V=d(_.firstChild,v,_,b,S,k,W);for(;V;){Li(_,1)||Cs();const Se=V;V=V.nextSibling,a(Se)}}else if(O&8){let V=v.children;V[0]===`
`&&(_.tagName==="PRE"||_.tagName==="TEXTAREA")&&(V=V.slice(1)),_.textContent!==V&&(Li(_,0)||Cs(),_.textContent=v.children)}if(x){if(ce||!W||G&48){const V=_.tagName.includes("-");for(const Se in x)(ce&&(Se.endsWith("value")||Se==="indeterminate")||di(Se)&&!Os(Se)||Se[0]==="."||V)&&s(_,Se,null,x[Se],void 0,b)}else if(x.onClick)s(_,"onClick",null,x.onClick,void 0,b);else if(G&4&&ts(x.style))for(const V in x.style)x.style[V]}let te;(te=x&&x.onVnodeBeforeMount)&&nt(te,b,v),z&&Lt(v,null,b,"beforeMount"),((te=x&&x.onVnodeMounted)||z||j)&&wp(()=>{te&&nt(te,b,v),j&&ie.enter(_),z&&Lt(v,null,b,"mounted")},S)}return _.nextSibling},d=(_,v,b,S,k,W,M)=>{M=M||!!v.dynamicChildren;const x=v.children,G=x.length;for(let O=0;O<G;O++){const z=M?x[O]:x[O]=ct(x[O]),ie=z.type===rs;_?(ie&&!M&&O+1<G&&ct(x[O+1]).type===rs&&(l(r(_.data.slice(z.children.length)),b,i(_)),_.data=z.children),_=f(_,z,S,k,W,M)):ie&&!z.children?l(z.el=r(""),b):(Li(b,1)||Cs(),n(null,z,b,null,S,k,Di(b),W))}return _},g=(_,v,b,S,k,W)=>{const{slotScopeIds:M}=v;M&&(k=k?k.concat(M):M);const x=o(_),G=d(i(_),v,x,b,S,k,W);return G&&Rs(G)&&G.data==="]"?i(v.anchor=G):(Cs(),l(v.anchor=u("]"),x,G),G)},m=(_,v,b,S,k,W)=>{if(Li(_.parentElement,1)||Cs(),v.el=null,W){const G=C(_);for(;;){const O=i(_);if(O&&O!==G)a(O);else break}}const M=i(_),x=o(_);return a(_),n(null,v,x,M,b,S,Di(x),k),b&&(b.vnode.el=v.el,Qo(b,v.el)),M},C=(_,v="[",b="]")=>{let S=0;for(;_;)if(_=i(_),_&&Rs(_)&&(_.data===v&&S++,_.data===b)){if(S===0)return i(_);S--}return _},E=(_,v,b)=>{const S=v.parentNode;S&&S.replaceChild(_,v);let k=b;for(;k;)k.vnode.el===v&&(k.vnode.el=k.subTree.el=_),k=k.parent},w=_=>_.nodeType===1&&_.tagName==="TEMPLATE";return[c,f]}const Lu="data-allow-mismatch",Hy={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Li(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Lu);)t=t.parentElement;const n=t&&t.getAttribute(Lu);if(n==null)return!1;if(n==="")return!0;{const s=n.split(",");return e===0&&s.includes("children")?!0:s.includes(Hy[e])}}jo().requestIdleCallback;jo().cancelIdleCallback;function By(t,e){if(Rs(t)&&t.data==="["){let n=1,s=t.nextSibling;for(;s;){if(s.nodeType===1){if(e(s)===!1)break}else if(Rs(s))if(s.data==="]"){if(--n===0)break}else s.data==="["&&n++;s=s.nextSibling}}else e(t)}const ns=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function al(t){Z(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,c,f=0;const h=()=>(f++,u=null,d()),d=()=>{let g;return u||(g=u=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),l)return new Promise((C,E)=>{l(m,()=>C(h()),()=>E(m),f+1)});throw m}).then(m=>g!==u&&u?u:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),c=m,m)))};return fn({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(g,m,C){const E=i?()=>{const _=i(()=>{C()},v=>By(g,v));_&&(m.bum||(m.bum=[])).push(_),(m.u||(m.u=[])).push(()=>!0)}:C;c?E():d().then(()=>!m.isUnmounted&&E())},get __asyncResolved(){return c},setup(){const g=xe;if(gc(g),c)return()=>Ta(c,g);const m=_=>{u=null,ar(_,g,13,!s)};if(a&&g.suspense||Gs)return d().then(_=>()=>Ta(_,g)).catch(_=>(m(_),()=>s?Te(s,{error:_}):null));const C=tn(!1),E=tn(),w=tn(!!r);return r&&setTimeout(()=>{w.value=!1},r),o!=null&&setTimeout(()=>{if(!C.value&&!E.value){const _=new Error(`Async component timed out after ${o}ms.`);m(_),E.value=_}},o),d().then(()=>{C.value=!0,g.parent&&gi(g.parent.vnode)&&g.parent.update()}).catch(_=>{m(_),E.value=_}),()=>{if(C.value&&c)return Ta(c,g);if(E.value&&s)return Te(s,{error:E.value});if(n&&!w.value)return Te(n)}}})}function Ta(t,e){const{ref:n,props:s,children:r,ce:i}=e.vnode,o=Te(t,s,r);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const gi=t=>t.type.__isKeepAlive,$y={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=mi(),s=n.ctx;if(!s.renderer)return()=>{const w=e.default&&e.default();return w&&w.length===1?w[0]:w};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:f}}}=s,h=f("div");s.activate=(w,_,v,b,S)=>{const k=w.component;u(w,_,v,0,a),l(k.vnode,w,_,v,k,a,b,w.slotScopeIds,S),He(()=>{k.isDeactivated=!1,k.a&&xs(k.a);const W=w.props&&w.props.onVnodeMounted;W&&nt(W,k.parent,w)},a)},s.deactivate=w=>{const _=w.component;co(_.m),co(_.a),u(w,h,null,1,a),He(()=>{_.da&&xs(_.da);const v=w.props&&w.props.onVnodeUnmounted;v&&nt(v,_.parent,w),_.isDeactivated=!0},a)};function d(w){Ia(w),c(w,n,a,!0)}function g(w){r.forEach((_,v)=>{const b=gl(_.type);b&&!w(b)&&m(v)})}function m(w){const _=r.get(w);_&&(!o||!bt(_,o))?d(_):o&&Ia(o),r.delete(w),i.delete(w)}Ls(()=>[t.include,t.exclude],([w,_])=>{w&&g(v=>Sr(w,v)),_&&g(v=>!Sr(_,v))},{flush:"post",deep:!0});let C=null;const E=()=>{C!=null&&(uo(n.subTree.type)?He(()=>{r.set(C,Fi(n.subTree))},n.subTree.suspense):r.set(C,Fi(n.subTree)))};return Yr(E),Qd(E),_i(()=>{r.forEach(w=>{const{subTree:_,suspense:v}=n,b=Fi(_);if(w.type===b.type&&w.key===b.key){Ia(b);const S=b.component.da;S&&He(S,v);return}d(w)})}),()=>{if(C=null,!e.default)return o=null;const w=e.default(),_=w[0];if(w.length>1)return o=null,w;if(!qs(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let v=Fi(_);if(v.type===Oe)return o=null,v;const b=v.type,S=gl(ns(v)?v.type.__asyncResolved||{}:b),{include:k,exclude:W,max:M}=t;if(k&&(!S||!Sr(k,S))||W&&S&&Sr(W,S))return v.shapeFlag&=-257,o=v,_;const x=v.key==null?b:v.key,G=r.get(x);return v.el&&(v=mt(v),_.shapeFlag&128&&(_.ssContent=v)),C=x,G?(v.el=G.el,v.component=G.component,v.transition&&Vs(v,v.transition),v.shapeFlag|=512,i.delete(x),i.add(x)):(i.add(x),M&&i.size>parseInt(M,10)&&m(i.values().next().value)),v.shapeFlag|=256,o=v,uo(_.type)?_:v}}},Wy=$y;function Sr(t,e){return Y(t)?t.some(n=>Sr(n,e)):Ie(t)?t.split(",").includes(e):Um(t)?(t.lastIndex=0,t.test(e)):!1}function Gd(t,e){Yd(t,"a",e)}function zd(t,e){Yd(t,"da",e)}function Yd(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Go(e,s,n),n){let r=n.parent;for(;r&&r.parent;)gi(r.parent.vnode)&&jy(s,e,n,r),r=r.parent}}function jy(t,e,n,s){const r=Go(e,t,s,!0);Jd(()=>{tc(s[e],r)},n)}function Ia(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Fi(t){return t.shapeFlag&128?t.ssContent:t}function Go(t,e,n=xe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{sn();const a=yi(n),l=At(e,n,t,o);return a(),rn(),l});return s?r.unshift(i):r.push(i),i}}const hn=t=>(e,n=xe)=>{(!Gs||t==="sp")&&Go(t,(...s)=>e(...s),n)},Vy=hn("bm"),Yr=hn("m"),Ky=hn("bu"),Qd=hn("u"),_i=hn("bum"),Jd=hn("um"),qy=hn("sp"),Gy=hn("rtg"),zy=hn("rtc");function Xd(t,e=xe){Go("ec",t,e)}const Zd="components";function rN(t,e){return tp(Zd,t,!0,e)||t}const ep=Symbol.for("v-ndc");function Yy(t){return Ie(t)?tp(Zd,t,!1)||t:t||ep}function tp(t,e,n=!0,s=!1){const r=Ye||xe;if(r){const i=r.type;{const a=gl(i,!1);if(a&&(a===e||a===vt(e)||a===Wo(vt(e))))return i}const o=Fu(r[t]||i[t],e)||Fu(r.appContext[t],e);return!o&&s?i:o}}function Fu(t,e){return t&&(t[e]||t[vt(e)]||t[Wo(vt(e))])}function iN(t,e,n,s){let r;const i=n,o=Y(t);if(o||Ie(t)){const a=o&&ts(t);let l=!1,u=!1;a&&(l=!_t(t),u=on(t),t=qo(t)),r=new Array(t.length);for(let c=0,f=t.length;c<f;c++)r[c]=e(l?u?so(Be(t[c])):Be(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(ge(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,i)}}else r=[];return r}const ll=t=>t?Ap(t)?Jo(t):ll(t.parent):null,Or=Ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ll(t.parent),$root:t=>ll(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>sp(t),$forceUpdate:t=>t.f||(t.f=()=>{dc(t.update)}),$nextTick:t=>t.n||(t.n=as.bind(t.proxy)),$watch:t=>_v.bind(t)}),Sa=(t,e)=>t!==me&&!t.__isScriptSetup&&he(t,e),Qy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Sa(s,e))return o[e]=1,s[e];if(r!==me&&he(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&he(u,e))return o[e]=3,i[e];if(n!==me&&he(n,e))return o[e]=4,n[e];cl&&(o[e]=0)}}const c=Or[e];let f,h;if(c)return e==="$attrs"&&qe(t.attrs,"get",""),c(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==me&&he(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,he(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Sa(r,e)?(r[e]=n,!0):s!==me&&he(s,e)?(s[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==me&&he(t,o)||Sa(e,o)||(a=i[0])&&he(a,o)||he(s,o)||he(Or,o)||he(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uu(t){return Y(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cl=!0;function Jy(t){const e=sp(t),n=t.proxy,s=t.ctx;cl=!1,e.beforeCreate&&Hu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:m,deactivated:C,beforeDestroy:E,beforeUnmount:w,destroyed:_,unmounted:v,render:b,renderTracked:S,renderTriggered:k,errorCaptured:W,serverPrefetch:M,expose:x,inheritAttrs:G,components:O,directives:z,filters:ie}=e;if(u&&Xy(u,s,null),o)for(const te in o){const V=o[te];Z(V)&&(s[te]=V.bind(n))}if(r){const te=r.call(n,n);ge(te)&&(t.data=$n(te))}if(cl=!0,i)for(const te in i){const V=i[te],Se=Z(V)?V.bind(n,n):Z(V.get)?V.get.bind(n,n):Ht,pn=!Z(V)&&Z(V.set)?V.set.bind(n):Ht,Ot=pt({get:Se,set:pn});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:et=>Ot.value=et})}if(a)for(const te in a)np(a[te],s,n,te);if(l){const te=Z(l)?l.call(n):l;Reflect.ownKeys(te).forEach(V=>{Pn(V,te[V])})}c&&Hu(c,t,"c");function j(te,V){Y(V)?V.forEach(Se=>te(Se.bind(n))):V&&te(V.bind(n))}if(j(Vy,f),j(Yr,h),j(Ky,d),j(Qd,g),j(Gd,m),j(zd,C),j(Xd,W),j(zy,S),j(Gy,k),j(_i,w),j(Jd,v),j(qy,M),Y(x))if(x.length){const te=t.exposed||(t.exposed={});x.forEach(V=>{Object.defineProperty(te,V,{get:()=>n[V],set:Se=>n[V]=Se})})}else t.exposed||(t.exposed={});b&&t.render===Ht&&(t.render=b),G!=null&&(t.inheritAttrs=G),O&&(t.components=O),z&&(t.directives=z),M&&gc(t)}function Xy(t,e,n=Ht){Y(t)&&(t=ul(t));for(const s in t){const r=t[s];let i;ge(r)?"default"in r?i=We(r.from||s,r.default,!0):i=We(r.from||s):i=We(r),De(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Hu(t,e,n){At(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function np(t,e,n,s){let r=s.includes(".")?mp(n,s):()=>n[s];if(Ie(t)){const i=e[t];Z(i)&&Ls(r,i)}else if(Z(t))Ls(r,t.bind(n));else if(ge(t))if(Y(t))t.forEach(i=>np(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&Ls(r,i,t)}}function sp(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(u=>lo(l,u,o,!0)),lo(l,e,o)),ge(e)&&i.set(e,l),l}function lo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&lo(t,i,n,!0),r&&r.forEach(o=>lo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Zy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Zy={data:Bu,props:$u,emits:$u,methods:Rr,computed:Rr,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Rr,directives:Rr,watch:tv,provide:Bu,inject:ev};function Bu(t,e){return e?t?function(){return Ue(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function ev(t,e){return Rr(ul(t),ul(e))}function ul(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Rr(t,e){return t?Ue(Object.create(null),t,e):e}function $u(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:Ue(Object.create(null),Uu(t),Uu(e??{})):e}function tv(t,e){if(!t)return e;if(!e)return t;const n=Ue(Object.create(null),t);for(const s in e)n[s]=Ge(t[s],e[s]);return n}function rp(){return{app:null,config:{isNativeTag:Lm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nv=0;function sv(t,e){return function(s,r=null){Z(s)||(s=Ue({},s)),r!=null&&!ge(r)&&(r=null);const i=rp(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:nv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Hv,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(u,...f)):Z(c)&&(o.add(c),c(u,...f))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,f){return f?(i.components[c]=f,u):i.components[c]},directive(c,f){return f?(i.directives[c]=f,u):i.directives[c]},mount(c,f,h){if(!l){const d=u._ceVNode||Te(s,r);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,c):t(d,c,h),l=!0,u._container=c,c.__vue_app__=u,Jo(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(At(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,f){return i.provides[c]=f,u},runWithContext(c){const f=ss;ss=u;try{return c()}finally{ss=f}}};return u}}let ss=null;function Pn(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function We(t,e,n=!1){const s=xe||Ye;if(s||ss){let r=ss?ss._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s&&s.proxy):e}}function zo(){return!!(xe||Ye||ss)}const ip={},op=()=>Object.create(ip),ap=t=>Object.getPrototypeOf(t)===ip;function rv(t,e,n,s=!1){const r={},i=op();t.propsDefaults=Object.create(null),lp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ut(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function iv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(Yo(t.emitsOptions,h))continue;const d=e[h];if(l)if(he(i,h))d!==i[h]&&(i[h]=d,u=!0);else{const g=vt(h);r[g]=fl(l,a,g,d,t,!1)}else d!==i[h]&&(i[h]=d,u=!0)}}}else{lp(t,e,r,i)&&(u=!0);let c;for(const f in a)(!e||!he(e,f)&&((c=gs(f))===f||!he(e,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=fl(l,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!he(e,f))&&(delete i[f],u=!0)}u&&Yt(t.attrs,"set","")}function lp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Os(l))continue;const u=e[l];let c;r&&he(r,c=vt(l))?!i||!i.includes(c)?n[c]=u:(a||(a={}))[c]=u:Yo(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(i){const l=ae(n),u=a||me;for(let c=0;c<i.length;c++){const f=i[c];n[f]=fl(r,l,f,u[f],t,!he(u,f))}}return o}function fl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=he(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Z(l)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const c=yi(r);s=u[n]=l.call(null,e),c()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===gs(n))&&(s=!0))}return s}const ov=new WeakMap;function cp(t,e,n=!1){const s=n?ov:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!Z(t)){const c=f=>{l=!0;const[h,d]=cp(f,e,!0);Ue(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!i&&!l)return ge(t)&&s.set(t,Ps),Ps;if(Y(i))for(let c=0;c<i.length;c++){const f=vt(i[c]);Wu(f)&&(o[f]=me)}else if(i)for(const c in i){const f=vt(c);if(Wu(f)){const h=i[c],d=o[f]=Y(h)||Z(h)?{type:h}:Ue({},h),g=d.type;let m=!1,C=!0;if(Y(g))for(let E=0;E<g.length;++E){const w=g[E],_=Z(w)&&w.name;if(_==="Boolean"){m=!0;break}else _==="String"&&(C=!1)}else m=Z(g)&&g.name==="Boolean";d[0]=m,d[1]=C,(m||he(d,"default"))&&a.push(f)}}const u=[o,a];return ge(t)&&s.set(t,u),u}function Wu(t){return t[0]!=="$"&&!Os(t)}const _c=t=>t[0]==="_"||t==="$stable",mc=t=>Y(t)?t.map(ct):[ct(t)],av=(t,e,n)=>{if(e._n)return e;const s=pc((...r)=>mc(e(...r)),n);return s._c=!1,s},up=(t,e,n)=>{const s=t._ctx;for(const r in t){if(_c(r))continue;const i=t[r];if(Z(i))e[r]=av(r,i,s);else if(i!=null){const o=mc(i);e[r]=()=>o}}},fp=(t,e)=>{const n=mc(e);t.slots.default=()=>n},hp=(t,e,n)=>{for(const s in e)(n||!_c(s))&&(t[s]=e[s])},lv=(t,e,n)=>{const s=t.slots=op();if(t.vnode.shapeFlag&32){const r=e.__;r&&tl(s,"__",r,!0);const i=e._;i?(hp(s,e,n),n&&tl(s,"_",i,!0)):up(e,s)}else e&&fp(t,e)},cv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=me;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:hp(r,e,n):(i=!e.$stable,up(e,r)),o=e}else e&&(fp(t,e),o={default:1});if(i)for(const a in r)!_c(a)&&o[a]==null&&delete r[a]},He=wp;function uv(t){return dp(t)}function fv(t){return dp(t,Uy)}function dp(t,e){const n=jo();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=Ht,insertStaticContent:g}=t,m=(p,y,T,A=null,I=null,P=null,U=void 0,F=null,L=!!y.dynamicChildren)=>{if(p===y)return;p&&!bt(p,y)&&(A=R(p),et(p,I,P,!0),p=null),y.patchFlag===-2&&(L=!1,y.dynamicChildren=null);const{type:N,ref:Q,shapeFlag:B}=y;switch(N){case rs:C(p,y,T,A);break;case Oe:E(p,y,T,A);break;case xr:p==null&&w(y,T,A,U);break;case lt:O(p,y,T,A,I,P,U,F,L);break;default:B&1?b(p,y,T,A,I,P,U,F,L):B&6?z(p,y,T,A,I,P,U,F,L):(B&64||B&128)&&N.process(p,y,T,A,I,P,U,F,L,K)}Q!=null&&I?Ds(Q,p&&p.ref,P,y||p,!y):Q==null&&p&&p.ref!=null&&Ds(p.ref,null,P,p,!0)},C=(p,y,T,A)=>{if(p==null)s(y.el=a(y.children),T,A);else{const I=y.el=p.el;y.children!==p.children&&u(I,y.children)}},E=(p,y,T,A)=>{p==null?s(y.el=l(y.children||""),T,A):y.el=p.el},w=(p,y,T,A)=>{[p.el,p.anchor]=g(p.children,y,T,A,p.el,p.anchor)},_=({el:p,anchor:y},T,A)=>{let I;for(;p&&p!==y;)I=h(p),s(p,T,A),p=I;s(y,T,A)},v=({el:p,anchor:y})=>{let T;for(;p&&p!==y;)T=h(p),r(p),p=T;r(y)},b=(p,y,T,A,I,P,U,F,L)=>{y.type==="svg"?U="svg":y.type==="math"&&(U="mathml"),p==null?S(y,T,A,I,P,U,F,L):M(p,y,I,P,U,F,L)},S=(p,y,T,A,I,P,U,F)=>{let L,N;const{props:Q,shapeFlag:B,transition:q,dirs:ee}=p;if(L=p.el=o(p.type,P,Q&&Q.is,Q),B&8?c(L,p.children):B&16&&W(p.children,L,null,A,I,Ra(p,P),U,F),ee&&Lt(p,null,A,"created"),k(L,p,p.scopeId,U,A),Q){for(const ye in Q)ye!=="value"&&!Os(ye)&&i(L,ye,null,Q[ye],P,A);"value"in Q&&i(L,"value",null,Q.value,P),(N=Q.onVnodeBeforeMount)&&nt(N,A,p)}ee&&Lt(p,null,A,"beforeMount");const oe=pp(I,q);oe&&q.beforeEnter(L),s(L,y,T),((N=Q&&Q.onVnodeMounted)||oe||ee)&&He(()=>{N&&nt(N,A,p),oe&&q.enter(L),ee&&Lt(p,null,A,"mounted")},I)},k=(p,y,T,A,I)=>{if(T&&d(p,T),A)for(let P=0;P<A.length;P++)d(p,A[P]);if(I){let P=I.subTree;if(y===P||uo(P.type)&&(P.ssContent===y||P.ssFallback===y)){const U=I.vnode;k(p,U,U.scopeId,U.slotScopeIds,I.parent)}}},W=(p,y,T,A,I,P,U,F,L=0)=>{for(let N=L;N<p.length;N++){const Q=p[N]=F?wn(p[N]):ct(p[N]);m(null,Q,y,T,A,I,P,U,F)}},M=(p,y,T,A,I,P,U)=>{const F=y.el=p.el;let{patchFlag:L,dynamicChildren:N,dirs:Q}=y;L|=p.patchFlag&16;const B=p.props||me,q=y.props||me;let ee;if(T&&Vn(T,!1),(ee=q.onVnodeBeforeUpdate)&&nt(ee,T,y,p),Q&&Lt(y,p,T,"beforeUpdate"),T&&Vn(T,!0),(B.innerHTML&&q.innerHTML==null||B.textContent&&q.textContent==null)&&c(F,""),N?x(p.dynamicChildren,N,F,T,A,Ra(y,I),P):U||V(p,y,F,null,T,A,Ra(y,I),P,!1),L>0){if(L&16)G(F,B,q,T,I);else if(L&2&&B.class!==q.class&&i(F,"class",null,q.class,I),L&4&&i(F,"style",B.style,q.style,I),L&8){const oe=y.dynamicProps;for(let ye=0;ye<oe.length;ye++){const de=oe[ye],tt=B[de],Ve=q[de];(Ve!==tt||de==="value")&&i(F,de,tt,Ve,I,T)}}L&1&&p.children!==y.children&&c(F,y.children)}else!U&&N==null&&G(F,B,q,T,I);((ee=q.onVnodeUpdated)||Q)&&He(()=>{ee&&nt(ee,T,y,p),Q&&Lt(y,p,T,"updated")},A)},x=(p,y,T,A,I,P,U)=>{for(let F=0;F<y.length;F++){const L=p[F],N=y[F],Q=L.el&&(L.type===lt||!bt(L,N)||L.shapeFlag&198)?f(L.el):T;m(L,N,Q,null,A,I,P,U,!0)}},G=(p,y,T,A,I)=>{if(y!==T){if(y!==me)for(const P in y)!Os(P)&&!(P in T)&&i(p,P,y[P],null,I,A);for(const P in T){if(Os(P))continue;const U=T[P],F=y[P];U!==F&&P!=="value"&&i(p,P,F,U,I,A)}"value"in T&&i(p,"value",y.value,T.value,I)}},O=(p,y,T,A,I,P,U,F,L)=>{const N=y.el=p?p.el:a(""),Q=y.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:q,slotScopeIds:ee}=y;ee&&(F=F?F.concat(ee):ee),p==null?(s(N,T,A),s(Q,T,A),W(y.children||[],T,Q,I,P,U,F,L)):B>0&&B&64&&q&&p.dynamicChildren?(x(p.dynamicChildren,q,T,I,P,U,F),(y.key!=null||I&&y===I.subTree)&&gp(p,y,!0)):V(p,y,T,Q,I,P,U,F,L)},z=(p,y,T,A,I,P,U,F,L)=>{y.slotScopeIds=F,p==null?y.shapeFlag&512?I.ctx.activate(y,T,A,U,L):ie(y,T,A,I,P,U,L):ce(p,y,L)},ie=(p,y,T,A,I,P,U)=>{const F=p.component=xv(p,A,I);if(gi(p)&&(F.ctx.renderer=K),Mv(F,!1,U),F.asyncDep){if(I&&I.registerDep(F,j,U),!p.el){const L=F.subTree=Te(Oe);E(null,L,y,T)}}else j(F,p,y,T,I,P,U)},ce=(p,y,T)=>{const A=y.component=p.component;if(bv(p,y,T))if(A.asyncDep&&!A.asyncResolved){te(A,y,T);return}else A.next=y,A.update();else y.el=p.el,A.vnode=y},j=(p,y,T,A,I,P,U)=>{const F=()=>{if(p.isMounted){let{next:B,bu:q,u:ee,parent:oe,vnode:ye}=p;{const it=_p(p);if(it){B&&(B.el=ye.el,te(p,B,U)),it.asyncDep.then(()=>{p.isUnmounted||F()});return}}let de=B,tt;Vn(p,!1),B?(B.el=ye.el,te(p,B,U)):B=ye,q&&xs(q),(tt=B.props&&B.props.onVnodeBeforeUpdate)&&nt(tt,oe,B,ye),Vn(p,!0);const Ve=ka(p),Et=p.subTree;p.subTree=Ve,m(Et,Ve,f(Et.el),R(Et),p,I,P),B.el=Ve.el,de===null&&Qo(p,Ve.el),ee&&He(ee,I),(tt=B.props&&B.props.onVnodeUpdated)&&He(()=>nt(tt,oe,B,ye),I)}else{let B;const{el:q,props:ee}=y,{bm:oe,m:ye,parent:de,root:tt,type:Ve}=p,Et=ns(y);if(Vn(p,!1),oe&&xs(oe),!Et&&(B=ee&&ee.onVnodeBeforeMount)&&nt(B,de,y),Vn(p,!0),q&&Ce){const it=()=>{p.subTree=ka(p),Ce(q,p.subTree,p,I,null)};Et&&Ve.__asyncHydrate?Ve.__asyncHydrate(q,p,it):it()}else{tt.ce&&tt.ce._def.shadowRoot!==!1&&tt.ce._injectChildStyle(Ve);const it=p.subTree=ka(p);m(null,it,T,A,p,I,P),y.el=it.el}if(ye&&He(ye,I),!Et&&(B=ee&&ee.onVnodeMounted)){const it=y;He(()=>nt(B,de,it),I)}(y.shapeFlag&256||de&&ns(de.vnode)&&de.vnode.shapeFlag&256)&&p.a&&He(p.a,I),p.isMounted=!0,y=T=A=null}};p.scope.on();const L=p.effect=new wd(F);p.scope.off();const N=p.update=L.run.bind(L),Q=p.job=L.runIfDirty.bind(L);Q.i=p,Q.id=p.uid,L.scheduler=()=>dc(Q),Vn(p,!0),N()},te=(p,y,T)=>{y.component=p;const A=p.vnode.props;p.vnode=y,p.next=null,iv(p,y.props,A,T),cv(p,y.children,T),sn(),xu(p),rn()},V=(p,y,T,A,I,P,U,F,L=!1)=>{const N=p&&p.children,Q=p?p.shapeFlag:0,B=y.children,{patchFlag:q,shapeFlag:ee}=y;if(q>0){if(q&128){pn(N,B,T,A,I,P,U,F,L);return}else if(q&256){Se(N,B,T,A,I,P,U,F,L);return}}ee&8?(Q&16&&ft(N,I,P),B!==N&&c(T,B)):Q&16?ee&16?pn(N,B,T,A,I,P,U,F,L):ft(N,I,P,!0):(Q&8&&c(T,""),ee&16&&W(B,T,A,I,P,U,F,L))},Se=(p,y,T,A,I,P,U,F,L)=>{p=p||Ps,y=y||Ps;const N=p.length,Q=y.length,B=Math.min(N,Q);let q;for(q=0;q<B;q++){const ee=y[q]=L?wn(y[q]):ct(y[q]);m(p[q],ee,T,null,I,P,U,F,L)}N>Q?ft(p,I,P,!0,!1,B):W(y,T,A,I,P,U,F,L,B)},pn=(p,y,T,A,I,P,U,F,L)=>{let N=0;const Q=y.length;let B=p.length-1,q=Q-1;for(;N<=B&&N<=q;){const ee=p[N],oe=y[N]=L?wn(y[N]):ct(y[N]);if(bt(ee,oe))m(ee,oe,T,null,I,P,U,F,L);else break;N++}for(;N<=B&&N<=q;){const ee=p[B],oe=y[q]=L?wn(y[q]):ct(y[q]);if(bt(ee,oe))m(ee,oe,T,null,I,P,U,F,L);else break;B--,q--}if(N>B){if(N<=q){const ee=q+1,oe=ee<Q?y[ee].el:A;for(;N<=q;)m(null,y[N]=L?wn(y[N]):ct(y[N]),T,oe,I,P,U,F,L),N++}}else if(N>q)for(;N<=B;)et(p[N],I,P,!0),N++;else{const ee=N,oe=N,ye=new Map;for(N=oe;N<=q;N++){const ot=y[N]=L?wn(y[N]):ct(y[N]);ot.key!=null&&ye.set(ot.key,N)}let de,tt=0;const Ve=q-oe+1;let Et=!1,it=0;const mr=new Array(Ve);for(N=0;N<Ve;N++)mr[N]=0;for(N=ee;N<=B;N++){const ot=p[N];if(tt>=Ve){et(ot,I,P,!0);continue}let xt;if(ot.key!=null)xt=ye.get(ot.key);else for(de=oe;de<=q;de++)if(mr[de-oe]===0&&bt(ot,y[de])){xt=de;break}xt===void 0?et(ot,I,P,!0):(mr[xt-oe]=N+1,xt>=it?it=xt:Et=!0,m(ot,y[xt],T,null,I,P,U,F,L),tt++)}const Ru=Et?hv(mr):Ps;for(de=Ru.length-1,N=Ve-1;N>=0;N--){const ot=oe+N,xt=y[ot],ku=ot+1<Q?y[ot+1].el:A;mr[N]===0?m(null,xt,T,ku,I,P,U,F,L):Et&&(de<0||N!==Ru[de]?Ot(xt,T,ku,2):de--)}}},Ot=(p,y,T,A,I=null)=>{const{el:P,type:U,transition:F,children:L,shapeFlag:N}=p;if(N&6){Ot(p.component.subTree,y,T,A);return}if(N&128){p.suspense.move(y,T,A);return}if(N&64){U.move(p,y,T,K);return}if(U===lt){s(P,y,T);for(let B=0;B<L.length;B++)Ot(L[B],y,T,A);s(p.anchor,y,T);return}if(U===xr){_(p,y,T);return}if(A!==2&&N&1&&F)if(A===0)F.beforeEnter(P),s(P,y,T),He(()=>F.enter(P),I);else{const{leave:B,delayLeave:q,afterLeave:ee}=F,oe=()=>{p.ctx.isUnmounted?r(P):s(P,y,T)},ye=()=>{B(P,()=>{oe(),ee&&ee()})};q?q(P,oe,ye):ye()}else s(P,y,T)},et=(p,y,T,A=!1,I=!1)=>{const{type:P,props:U,ref:F,children:L,dynamicChildren:N,shapeFlag:Q,patchFlag:B,dirs:q,cacheIndex:ee}=p;if(B===-2&&(I=!1),F!=null&&(sn(),Ds(F,null,T,p,!0),rn()),ee!=null&&(y.renderCache[ee]=void 0),Q&256){y.ctx.deactivate(p);return}const oe=Q&1&&q,ye=!ns(p);let de;if(ye&&(de=U&&U.onVnodeBeforeUnmount)&&nt(de,y,p),Q&6)Pi(p.component,T,A);else{if(Q&128){p.suspense.unmount(T,A);return}oe&&Lt(p,null,y,"beforeUnmount"),Q&64?p.type.remove(p,y,T,K,A):N&&!N.hasOnce&&(P!==lt||B>0&&B&64)?ft(N,y,T,!1,!0):(P===lt&&B&384||!I&&Q&16)&&ft(L,y,T),A&&ws(p)}(ye&&(de=U&&U.onVnodeUnmounted)||oe)&&He(()=>{de&&nt(de,y,p),oe&&Lt(p,null,y,"unmounted")},T)},ws=p=>{const{type:y,el:T,anchor:A,transition:I}=p;if(y===lt){Es(T,A);return}if(y===xr){v(p);return}const P=()=>{r(T),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:U,delayLeave:F}=I,L=()=>U(T,P);F?F(p.el,P,L):L()}else P()},Es=(p,y)=>{let T;for(;p!==y;)T=h(p),r(p),p=T;r(y)},Pi=(p,y,T)=>{const{bum:A,scope:I,job:P,subTree:U,um:F,m:L,a:N,parent:Q,slots:{__:B}}=p;co(L),co(N),A&&xs(A),Q&&Y(B)&&B.forEach(q=>{Q.renderCache[q]=void 0}),I.stop(),P&&(P.flags|=8,et(U,p,y,T)),F&&He(F,y),He(()=>{p.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},ft=(p,y,T,A=!1,I=!1,P=0)=>{for(let U=P;U<p.length;U++)et(p[U],y,T,A,I)},R=p=>{if(p.shapeFlag&6)return R(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const y=h(p.anchor||p.el),T=y&&y[Oy];return T?h(T):y};let $=!1;const H=(p,y,T)=>{p==null?y._vnode&&et(y._vnode,null,null,!0):m(y._vnode||null,p,y,null,null,null,T),y._vnode=p,$||($=!0,xu(),oo(),$=!1)},K={p:m,um:et,m:Ot,r:ws,mt:ie,mc:W,pc:V,pbc:x,n:R,o:t};let ue,Ce;return e&&([ue,Ce]=e(K)),{render:H,hydrate:ue,createApp:sv(H,ue)}}function Ra({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function pp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gp(t,e,n=!1){const s=t.children,r=e.children;if(Y(s)&&Y(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=wn(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&gp(o,a)),a.type===rs&&(a.el=o.el),a.type===Oe&&!a.el&&(a.el=o.el)}}function hv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function _p(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_p(e)}function co(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const dv=Symbol.for("v-scx"),pv=()=>We(dv);function gv(t,e){return yc(t,null,e)}function Ls(t,e,n){return yc(t,e,n)}function yc(t,e,n=me){const{immediate:s,deep:r,flush:i,once:o}=n,a=Ue({},n),l=e&&s||!e&&i!=="post";let u;if(Gs){if(i==="sync"){const d=pv();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Ht,d.resume=Ht,d.pause=Ht,d}}const c=xe;a.call=(d,g,m)=>At(d,c,g,m);let f=!1;i==="post"?a.scheduler=d=>{He(d,c&&c.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():dc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=Ay(t,e,a);return Gs&&(u?u.push(h):l&&h()),h}function _v(t,e,n){const s=this.proxy,r=Ie(t)?t.includes(".")?mp(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=yi(this),a=yc(r,i.bind(s),n);return o(),a}function mp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const mv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vt(e)}Modifiers`]||t[`${gs(e)}Modifiers`];function yv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||me;let r=n;const i=e.startsWith("update:"),o=i&&mv(s,e.slice(7));o&&(o.trim&&(r=n.map(c=>Ie(c)?c.trim():c)),o.number&&(r=n.map(to)));let a,l=s[a=ya(e)]||s[a=ya(vt(e))];!l&&i&&(l=s[a=ya(gs(e))]),l&&At(l,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,At(u,t,6,r)}}function yp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const l=u=>{const c=yp(u,e,!0);c&&(a=!0,Ue(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ge(t)&&s.set(t,null),null):(Y(i)?i.forEach(l=>o[l]=null):Ue(o,i),ge(t)&&s.set(t,o),o)}function Yo(t,e){return!t||!di(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,gs(e))||he(t,e))}function ka(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:g,inheritAttrs:m}=t,C=ao(t);let E,w;try{if(n.shapeFlag&4){const v=r||s,b=v;E=ct(u.call(b,v,c,f,d,h,g)),w=a}else{const v=e;E=ct(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),w=e.props?a:wv(a)}}catch(v){Mr.length=0,ar(v,t,1),E=Te(Oe)}let _=E;if(w&&m!==!1){const v=Object.keys(w),{shapeFlag:b}=_;v.length&&b&7&&(i&&v.some(ec)&&(w=Ev(w,i)),_=mt(_,w,!1,!0))}return n.dirs&&(_=mt(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&Vs(_,n.transition),E=_,ao(C),E}function vv(t,e=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(qs(r)){if(r.type!==Oe||r.children==="v-if"){if(n)return;n=r}}else return}return n}const wv=t=>{let e;for(const n in t)(n==="class"||n==="style"||di(n))&&((e||(e={}))[n]=t[n]);return e},Ev=(t,e)=>{const n={};for(const s in t)(!ec(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function bv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ju(s,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(o[h]!==s[h]&&!Yo(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ju(s,o,u):!0:!!o;return!1}function ju(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Yo(n,i))return!0}return!1}function Qo({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const uo=t=>t.__isSuspense;let hl=0;const Cv={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,l,u){if(t==null)Tv(e,n,s,r,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Iv(t,e,n,s,r,o,a,l,u)}},hydrate:Sv,normalize:Rv},vc=Cv;function Qr(t,e){const n=t.props&&t.props[e];Z(n)&&n()}function Tv(t,e,n,s,r,i,o,a,l){const{p:u,o:{createElement:c}}=l,f=c("div"),h=t.suspense=vp(t,r,s,e,f,n,i,o,a,l);u(null,h.pendingBranch=t.ssContent,f,null,s,h,i,o),h.deps>0?(Qr(t,"onPending"),Qr(t,"onFallback"),u(null,t.ssFallback,e,n,s,null,i,o),Fs(h,t.ssFallback)):h.resolve(!1,!0)}function Iv(t,e,n,s,r,i,o,a,{p:l,um:u,o:{createElement:c}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:m,isInFallback:C,isHydrating:E}=f;if(m)f.pendingBranch=h,bt(h,m)?(l(m,h,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():C&&(E||(l(g,d,n,s,r,null,i,o,a),Fs(f,d)))):(f.pendingId=hl++,E?(f.isHydrating=!1,f.activeBranch=m):u(m,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=c("div"),C?(l(null,h,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():(l(g,d,n,s,r,null,i,o,a),Fs(f,d))):g&&bt(h,g)?(l(g,h,n,s,r,f,i,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0&&f.resolve()));else if(g&&bt(h,g))l(g,h,n,s,r,f,i,o,a),Fs(f,h);else if(Qr(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=hl++,l(null,h,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:w,pendingId:_}=f;w>0?setTimeout(()=>{f.pendingId===_&&f.fallback(d)},w):w===0&&f.fallback(d)}}function vp(t,e,n,s,r,i,o,a,l,u,c=!1){const{p:f,m:h,um:d,n:g,o:{parentNode:m,remove:C}}=u;let E;const w=kv(t);w&&e&&e.pendingBranch&&(E=e.pendingId,e.deps++);const _=t.props?gd(t.props.timeout):void 0,v=i,b={vnode:t,parent:e,parentComponent:n,namespace:o,container:s,hiddenContainer:r,deps:0,pendingId:hl++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(S=!1,k=!1){const{vnode:W,activeBranch:M,pendingBranch:x,pendingId:G,effects:O,parentComponent:z,container:ie}=b;let ce=!1;b.isHydrating?b.isHydrating=!1:S||(ce=M&&x.transition&&x.transition.mode==="out-in",ce&&(M.transition.afterLeave=()=>{G===b.pendingId&&(h(x,ie,i===v?g(M):i,0),il(O))}),M&&(m(M.el)===ie&&(i=g(M)),d(M,z,b,!0)),ce||h(x,ie,i,0)),Fs(b,x),b.pendingBranch=null,b.isInFallback=!1;let j=b.parent,te=!1;for(;j;){if(j.pendingBranch){j.effects.push(...O),te=!0;break}j=j.parent}!te&&!ce&&il(O),b.effects=[],w&&e&&e.pendingBranch&&E===e.pendingId&&(e.deps--,e.deps===0&&!k&&e.resolve()),Qr(W,"onResolve")},fallback(S){if(!b.pendingBranch)return;const{vnode:k,activeBranch:W,parentComponent:M,container:x,namespace:G}=b;Qr(k,"onFallback");const O=g(W),z=()=>{b.isInFallback&&(f(null,S,x,O,M,null,G,a,l),Fs(b,S))},ie=S.transition&&S.transition.mode==="out-in";ie&&(W.transition.afterLeave=z),b.isInFallback=!0,d(W,M,null,!0),ie||z()},move(S,k,W){b.activeBranch&&h(b.activeBranch,S,k,W),b.container=S},next(){return b.activeBranch&&g(b.activeBranch)},registerDep(S,k,W){const M=!!b.pendingBranch;M&&b.deps++;const x=S.vnode.el;S.asyncDep.catch(G=>{ar(G,S,0)}).then(G=>{if(S.isUnmounted||b.isUnmounted||b.pendingId!==S.suspenseId)return;S.asyncResolved=!0;const{vnode:O}=S;pl(S,G),x&&(O.el=x);const z=!x&&S.subTree.el;k(S,O,m(x||S.subTree.el),x?null:g(S.subTree),b,o,W),z&&C(z),Qo(S,O.el),M&&--b.deps===0&&b.resolve()})},unmount(S,k){b.isUnmounted=!0,b.activeBranch&&d(b.activeBranch,n,S,k),b.pendingBranch&&d(b.pendingBranch,n,S,k)}};return b}function Sv(t,e,n,s,r,i,o,a,l){const u=e.suspense=vp(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),c=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),c}function Rv(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Vu(s?n.default:n),t.ssFallback=s?Vu(n.fallback):Te(Oe)}function Vu(t){let e;if(Z(t)){const n=Ks&&t._c;n&&(t._d=!1,Ft()),t=t(),n&&(t._d=!0,e=st,Ep())}return Y(t)&&(t=vv(t)),t=ct(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function wp(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):il(t)}function Fs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,Qo(s,r))}function kv(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const lt=Symbol.for("v-fgt"),rs=Symbol.for("v-txt"),Oe=Symbol.for("v-cmt"),xr=Symbol.for("v-stc"),Mr=[];let st=null;function Ft(t=!1){Mr.push(st=t?null:[])}function Ep(){Mr.pop(),st=Mr[Mr.length-1]||null}let Ks=1;function Ku(t,e=!1){Ks+=t,t<0&&st&&e&&(st.hasOnce=!0)}function bp(t){return t.dynamicChildren=Ks>0?st||Ps:null,Ep(),Ks>0&&st&&st.push(t),t}function Cp(t,e,n,s,r,i){return bp(Ip(t,e,n,s,r,i,!0))}function Xn(t,e,n,s,r){return bp(Te(t,e,n,s,r,!0))}function qs(t){return t?t.__v_isVNode===!0:!1}function bt(t,e){return t.type===e.type&&t.key===e.key}const Tp=({key:t})=>t??null,qi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ie(t)||De(t)||Z(t)?{i:Ye,r:t,k:e,f:!!n}:t:null);function Ip(t,e=null,n=null,s=0,r=null,i=t===lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tp(e),ref:e&&qi(e),scopeId:Bd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ye};return a?(wc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ie(n)?8:16),Ks>0&&!o&&st&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&st.push(l),l}const Te=Av;function Av(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===ep)&&(t=Oe),qs(t)){const a=mt(t,e,!0);return n&&wc(a,n),Ks>0&&!i&&st&&(a.shapeFlag&6?st[st.indexOf(t)]=a:st.push(a)),a.patchFlag=-2,a}if(Uv(t)&&(t=t.__vccOpts),e){e=Sp(e);let{class:a,style:l}=e;a&&!Ie(a)&&(e.class=Ko(a)),ge(l)&&(hc(l)&&!Y(l)&&(l=Ue({},l)),e.style=Vo(l))}const o=Ie(t)?1:uo(t)?128:$d(t)?64:ge(t)?4:Z(t)?2:0;return Ip(t,e,n,s,r,o,i,!0)}function Sp(t){return t?hc(t)||ap(t)?Ue({},t):t:null}function mt(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?kp(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Tp(u),ref:e&&e.ref?n&&i?Y(i)?i.concat(qi(e)):[i,qi(e)]:qi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mt(t.ssContent),ssFallback:t.ssFallback&&mt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Vs(c,l.clone(c)),c}function Rp(t=" ",e=0){return Te(rs,null,t,e)}function Pv(t,e){const n=Te(xr,null,t);return n.staticCount=e,n}function oN(t="",e=!1){return e?(Ft(),Xn(Oe,null,t)):Te(Oe,null,t)}function ct(t){return t==null||typeof t=="boolean"?Te(Oe):Y(t)?Te(lt,null,t.slice()):qs(t)?wn(t):Te(rs,null,String(t))}function wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mt(t)}function wc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),wc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ap(e)?e._ctx=Ye:r===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),s&64?(n=16,e=[Rp(e)]):n=8);t.children=e,t.shapeFlag|=n}function kp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ko([e.class,s.class]));else if(r==="style")e.style=Vo([e.style,s.style]);else if(di(r)){const i=e[r],o=s[r];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function nt(t,e,n,s=null){At(t,e,7,[n,s])}const Nv=rp();let Ov=0;function xv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Nv,i={uid:Ov++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cp(s,r),emitsOptions:yp(s,r),emit:null,emitted:null,propsDefaults:me,inheritAttrs:s.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yv.bind(null,i),t.ce&&t.ce(i),i}let xe=null;const mi=()=>xe||Ye;let fo,dl;{const t=jo(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};fo=e("__VUE_INSTANCE_SETTERS__",n=>xe=n),dl=e("__VUE_SSR_SETTERS__",n=>Gs=n)}const yi=t=>{const e=xe;return fo(t),t.scope.on(),()=>{t.scope.off(),fo(e)}},qu=()=>{xe&&xe.scope.off(),fo(null)};function Ap(t){return t.vnode.shapeFlag&4}let Gs=!1;function Mv(t,e=!1,n=!1){e&&dl(e);const{props:s,children:r}=t.vnode,i=Ap(t);rv(t,s,i,e),lv(t,r,n||e);const o=i?Dv(t,e):void 0;return e&&dl(!1),o}function Dv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Qy);const{setup:s}=n;if(s){sn();const r=t.setupContext=s.length>1?Fv(t):null,i=yi(t),o=pi(s,t,0,[t.props,r]),a=nc(o);if(rn(),i(),(a||t.sp)&&!ns(t)&&gc(t),a){if(o.then(qu,qu),e)return o.then(l=>{pl(t,l)}).catch(l=>{ar(l,t,0)});t.asyncDep=o}else pl(t,o)}else Pp(t)}function pl(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=Ld(e)),Pp(t)}function Pp(t,e,n){const s=t.type;t.render||(t.render=s.render||Ht);{const r=yi(t);sn();try{Jy(t)}finally{rn(),r()}}}const Lv={get(t,e){return qe(t,"get",""),t[e]}};function Fv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Lv),slots:t.slots,emit:t.emit,expose:e}}function Jo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ld(yy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Or)return Or[n](t)},has(e,n){return n in e||n in Or}})):t.proxy}function gl(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function Uv(t){return Z(t)&&"__vccOpts"in t}const pt=(t,e)=>Ry(t,e,Gs);function ke(t,e,n){const s=arguments.length;return s===2?ge(e)&&!Y(e)?qs(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&qs(n)&&(n=[n]),Te(t,e,n))}const Hv="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _l;const Gu=typeof window<"u"&&window.trustedTypes;if(Gu)try{_l=Gu.createPolicy("vue",{createHTML:t=>t})}catch{}const Np=_l?t=>_l.createHTML(t):t=>t,Bv="http://www.w3.org/2000/svg",$v="http://www.w3.org/1998/Math/MathML",zt=typeof document<"u"?document:null,zu=zt&&zt.createElement("template"),Wv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?zt.createElementNS(Bv,t):e==="mathml"?zt.createElementNS($v,t):n?zt.createElement(t,{is:n}):zt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>zt.createTextNode(t),createComment:t=>zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{zu.innerHTML=Np(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=zu.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_n="transition",vr="animation",Jr=Symbol("_vtc"),Op={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},jv=Ue({},Wd,Op),Vv=t=>(t.displayName="Transition",t.props=jv,t),Kv=Vv((t,{slots:e})=>ke(Dy,qv(t),e)),Kn=(t,e=[])=>{Y(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yu=t=>t?Y(t)?t.some(e=>e.length>1):t.length>1:!1;function qv(t){const e={};for(const O in t)O in Op||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,g=Gv(r),m=g&&g[0],C=g&&g[1],{onBeforeEnter:E,onEnter:w,onEnterCancelled:_,onLeave:v,onLeaveCancelled:b,onBeforeAppear:S=E,onAppear:k=w,onAppearCancelled:W=_}=e,M=(O,z,ie,ce)=>{O._enterCancelled=ce,qn(O,z?c:a),qn(O,z?u:o),ie&&ie()},x=(O,z)=>{O._isLeaving=!1,qn(O,f),qn(O,d),qn(O,h),z&&z()},G=O=>(z,ie)=>{const ce=O?k:w,j=()=>M(z,O,ie);Kn(ce,[z,j]),Qu(()=>{qn(z,O?l:i),qt(z,O?c:a),Yu(ce)||Ju(z,s,m,j)})};return Ue(e,{onBeforeEnter(O){Kn(E,[O]),qt(O,i),qt(O,o)},onBeforeAppear(O){Kn(S,[O]),qt(O,l),qt(O,u)},onEnter:G(!1),onAppear:G(!0),onLeave(O,z){O._isLeaving=!0;const ie=()=>x(O,z);qt(O,f),O._enterCancelled?(qt(O,h),ef()):(ef(),qt(O,h)),Qu(()=>{O._isLeaving&&(qn(O,f),qt(O,d),Yu(v)||Ju(O,s,C,ie))}),Kn(v,[O,ie])},onEnterCancelled(O){M(O,!1,void 0,!0),Kn(_,[O])},onAppearCancelled(O){M(O,!0,void 0,!0),Kn(W,[O])},onLeaveCancelled(O){x(O),Kn(b,[O])}})}function Gv(t){if(t==null)return null;if(ge(t))return[Aa(t.enter),Aa(t.leave)];{const e=Aa(t);return[e,e]}}function Aa(t){return gd(t)}function qt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Jr]||(t[Jr]=new Set)).add(e)}function qn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Jr];n&&(n.delete(e),n.size||(t[Jr]=void 0))}function Qu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let zv=0;function Ju(t,e,n,s){const r=t._endId=++zv,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Yv(t,e);if(!o)return s();const u=o+"end";let c=0;const f=()=>{t.removeEventListener(u,h),i()},h=d=>{d.target===t&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),t.addEventListener(u,h)}function Yv(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),r=s(`${_n}Delay`),i=s(`${_n}Duration`),o=Xu(r,i),a=s(`${vr}Delay`),l=s(`${vr}Duration`),u=Xu(a,l);let c=null,f=0,h=0;e===_n?o>0&&(c=_n,f=o,h=i.length):e===vr?u>0&&(c=vr,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?_n:vr:null,h=c?c===_n?i.length:l.length:0);const d=c===_n&&/\b(transform|all)(,|$)/.test(s(`${_n}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:d}}function Xu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Zu(n)+Zu(t[s])))}function Zu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ef(){return document.body.offsetHeight}function Qv(t,e,n){const s=t[Jr];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const tf=Symbol("_vod"),Jv=Symbol("_vsh"),Xv=Symbol(""),Zv=/(^|;)\s*display\s*:/;function ew(t,e,n){const s=t.style,r=Ie(n);let i=!1;if(n&&!r){if(e)if(Ie(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Gi(s,a,"")}else for(const o in e)n[o]==null&&Gi(s,o,"");for(const o in n)o==="display"&&(i=!0),Gi(s,o,n[o])}else if(r){if(e!==n){const o=s[Xv];o&&(n+=";"+o),s.cssText=n,i=Zv.test(n)}}else e&&t.removeAttribute("style");tf in t&&(t[tf]=i?s.display:"",t[Jv]&&(s.display="none"))}const nf=/\s*!important$/;function Gi(t,e,n){if(Y(n))n.forEach(s=>Gi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=tw(t,e);nf.test(n)?t.setProperty(gs(s),n.replace(nf,""),"important"):t[s]=n}}const sf=["Webkit","Moz","ms"],Pa={};function tw(t,e){const n=Pa[e];if(n)return n;let s=vt(e);if(s!=="filter"&&s in t)return Pa[e]=s;s=Wo(s);for(let r=0;r<sf.length;r++){const i=sf[r]+s;if(i in t)return Pa[e]=i}return e}const rf="http://www.w3.org/1999/xlink";function of(t,e,n,s,r,i=zm(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rf,e.slice(6,e.length)):t.setAttributeNS(rf,e,n):n==null||i&&!_d(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Wt(n)?String(n):n)}function af(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Np(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=_d(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Jt(t,e,n,s){t.addEventListener(e,n,s)}function nw(t,e,n,s){t.removeEventListener(e,n,s)}const lf=Symbol("_vei");function sw(t,e,n,s,r=null){const i=t[lf]||(t[lf]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=rw(e);if(s){const u=i[e]=aw(s,r);Jt(t,a,u,l)}else o&&(nw(t,a,o,l),i[e]=void 0)}}const cf=/(?:Once|Passive|Capture)$/;function rw(t){let e;if(cf.test(t)){e={};let s;for(;s=t.match(cf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gs(t.slice(2)),e]}let Na=0;const iw=Promise.resolve(),ow=()=>Na||(iw.then(()=>Na=0),Na=Date.now());function aw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;At(lw(s,n.value),e,5,[s])};return n.value=t,n.attached=ow(),n}function lw(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const uf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cw=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Qv(t,s,o):e==="style"?ew(t,n,s):di(e)?ec(e)||sw(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uw(t,e,s,o))?(af(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&of(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ie(s))?af(t,vt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),of(t,e,s,o))};function uw(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&uf(e)&&Z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return uf(e)&&Ie(n)?!1:e in t}const Fn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>xs(e,n):e};function fw(t){t.target.composing=!0}function ff(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yt=Symbol("_assign"),hf={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[yt]=Fn(r);const i=s||r.props&&r.props.type==="number";Jt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=to(a)),t[yt](a)}),n&&Jt(t,"change",()=>{t.value=t.value.trim()}),e||(Jt(t,"compositionstart",fw),Jt(t,"compositionend",ff),Jt(t,"change",ff))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[yt]=Fn(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?to(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l))}},hw={deep:!0,created(t,e,n){t[yt]=Fn(n),Jt(t,"change",()=>{const s=t._modelValue,r=zs(t),i=t.checked,o=t[yt];if(Y(s)){const a=rc(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const u=[...s];u.splice(a,1),o(u)}}else if(ir(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(xp(t,i))})},mounted:df,beforeUpdate(t,e,n){t[yt]=Fn(n),df(t,e,n)}};function df(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(Y(e))r=rc(e,s.props.value)>-1;else if(ir(e))r=e.has(s.props.value);else{if(e===n)return;r=os(e,xp(t,!0))}t.checked!==r&&(t.checked=r)}const dw={created(t,{value:e},n){t.checked=os(e,n.props.value),t[yt]=Fn(n),Jt(t,"change",()=>{t[yt](zs(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[yt]=Fn(s),e!==n&&(t.checked=os(e,s.props.value))}},pw={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=ir(e);Jt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?to(zs(o)):zs(o));t[yt](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,as(()=>{t._assigning=!1})}),t[yt]=Fn(s)},mounted(t,{value:e}){pf(t,e)},beforeUpdate(t,e,n){t[yt]=Fn(n)},updated(t,{value:e}){t._assigning||pf(t,e)}};function pf(t,e){const n=t.multiple,s=Y(e);if(!(n&&!s&&!ir(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=zs(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=rc(e,a)>-1}else o.selected=e.has(a);else if(os(zs(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function zs(t){return"_value"in t?t._value:t.value}function xp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const aN={created(t,e,n){Ui(t,e,n,null,"created")},mounted(t,e,n){Ui(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Ui(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Ui(t,e,n,s,"updated")}};function gw(t,e){switch(t){case"SELECT":return pw;case"TEXTAREA":return hf;default:switch(e){case"checkbox":return hw;case"radio":return dw;default:return hf}}}function Ui(t,e,n,s,r){const o=gw(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const _w=["ctrl","shift","alt","meta"],mw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_w.some(n=>t[`${n}Key`]&&!e.includes(n))},lN=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=mw[e[o]];if(a&&a(r,e))return}return t(r,...i)})},Mp=Ue({patchProp:cw},Wv);let Dr,gf=!1;function yw(){return Dr||(Dr=uv(Mp))}function vw(){return Dr=gf?Dr:fv(Mp),gf=!0,Dr}const ww=(...t)=>{const e=yw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Lp(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Dp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},Ew=(...t)=>{const e=vw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Lp(s);if(r)return n(r,!0,Dp(r))},e};function Dp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lp(t){return Ie(t)?document.querySelector(t):t}const bw=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Cw=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Tw=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Iw(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Sw(t);return}return e}function Sw(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ho(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!Tw.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(bw.test(t)||Cw.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Iw)}return JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}const Rw=/#/g,kw=/&/g,Aw=/\//g,Pw=/=/g,Ec=/\+/g,Nw=/%5e/gi,Ow=/%60/gi,xw=/%7c/gi,Mw=/%20/gi;function Dw(t){return encodeURI(""+t).replace(xw,"|")}function ml(t){return Dw(typeof t=="string"?t:JSON.stringify(t)).replace(Ec,"%2B").replace(Mw,"+").replace(Rw,"%23").replace(kw,"%26").replace(Ow,"`").replace(Nw,"^").replace(Aw,"%2F")}function Oa(t){return ml(t).replace(Pw,"%3D")}function po(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function Lw(t){return po(t.replace(Ec," "))}function Fw(t){return po(t.replace(Ec," "))}function Fp(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const r=Lw(s[1]);if(r==="__proto__"||r==="constructor")continue;const i=Fw(s[2]||"");e[r]===void 0?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]}return e}function Uw(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Oa(t)}=${ml(n)}`).join("&"):`${Oa(t)}=${ml(e)}`:Oa(t)}function Hw(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>Uw(e,t[e])).filter(Boolean).join("&")}const Bw=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,$w=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,Ww=/^([/\\]\s*){2,}[^/\\]/,jw=/^[\s\0]*(blob|data|javascript|vbscript):$/i,Vw=/\/$|\/\?|\/#/,Kw=/^\.?\//;function _s(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?Bw.test(t):$w.test(t)||(e.acceptRelative?Ww.test(t):!1)}function qw(t){return!!t&&jw.test(t)}function yl(t="",e){return e?Vw.test(t):t.endsWith("/")}function Xr(t="",e){if(!e)return(yl(t)?t.slice(0,-1):t)||"/";if(!yl(t,!0))return t||"/";let n=t,s="";const r=t.indexOf("#");r!==-1&&(n=t.slice(0,r),s=t.slice(r));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+s}function Gw(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(yl(t,!0))return t||"/";let n=t,s="";const r=t.indexOf("#");if(r!==-1&&(n=t.slice(0,r),s=t.slice(r),!n))return s;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+s}function zw(t,e){if(Hp(e)||_s(t))return t;const n=Xr(e);return t.startsWith(n)?t:bc(n,t)}function _f(t,e){if(Hp(e))return t;const n=Xr(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function Up(t,e){const n=Wp(t),s={...Fp(n.search),...e};return n.search=Hw(s),Jw(n)}function Hp(t){return!t||t==="/"}function Yw(t){return t&&t!=="/"}function bc(t,...e){let n=t||"";for(const s of e.filter(r=>Yw(r)))if(n){const r=s.replace(Kw,"");n=Gw(n)+r}else n=s;return n}function Bp(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),s=[];let r=0;for(const c of n)if(!(!c||c==="/")){for(const[f,h]of c.split(e).entries())if(!(!h||h===".")){if(h===".."){if(s.length===1&&_s(s[0]))continue;s.pop(),r--;continue}if(f===1&&((o=s[s.length-1])!=null&&o.endsWith(":/"))){s[s.length-1]+="/"+h;continue}s.push(h),r++}}let i=s.join("/");return r>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*r)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function Qw(t,e){return po(Xr(t))===po(Xr(e))}const $p=Symbol.for("ufo:protocolRelative");function Wp(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,h=""]=n;return{protocol:f.toLowerCase(),pathname:h,href:f+h,auth:"",host:"",search:"",hash:""}}if(!_s(t,{acceptRelative:!0}))return mf(t);const[,s="",r,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];s==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:c}=mf(a);return{protocol:s.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:u,hash:c,[$p]:!s}}function mf(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function Jw(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",s=t.hash||"",r=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[$p]?(t.protocol||"")+"//":"")+r+i+e+n+s}class Xw extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function Zw(t){var l,u,c,f,h;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((c=t.request)==null?void 0:c.method)||((f=t.options)==null?void 0:f.method)||"GET",s=((h=t.request)==null?void 0:h.url)||String(t.request)||"/",r=`[${n}] ${JSON.stringify(s)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${i}${e?` ${e}`:""}`,a=new Xw(o,t.error?{cause:t.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(a,d,{get(){return t[d]}});for(const[d,g]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,d,{get(){return t.response&&t.response[g]}});return a}const eE=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function yf(t="GET"){return eE.has(t.toUpperCase())}function tE(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const nE=new Set(["image/svg","application/xml","application/xhtml","application/html"]),sE=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function rE(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return sE.test(e)?"json":nE.has(e)||e.startsWith("text/")?"text":"blob"}function iE(t,e,n,s){const r=oE((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,s);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:r}}function oE(t,e,n){if(!e)return new n(t);const s=new n(e);if(t)for(const[r,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))s.set(r,i);return s}async function Hi(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const aE=new Set([408,409,425,429,500,502,503,504]),lE=new Set([101,204,205,304]);function jp(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:s=globalThis.AbortController}=t;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let c;typeof a.options.retry=="number"?c=a.options.retry:c=yf(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(c>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):aE.has(f))){const h=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return h>0&&await new Promise(d=>setTimeout(d,h)),i(a.request,{...a.options,retry:c-1})}}const u=Zw(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const c={request:l,options:iE(l,u,t.defaults,n),response:void 0,error:void 0};c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&await Hi(c,c.options.onRequest),typeof c.request=="string"&&(c.options.baseURL&&(c.request=zw(c.request,c.options.baseURL)),c.options.query&&(c.request=Up(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&yf(c.options.method)&&(tE(c.options.body)?(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")):("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half")));let f;if(!c.options.signal&&c.options.timeout){const d=new s;f=setTimeout(()=>{const g=new Error("[TimeoutError]: The operation was aborted due to timeout");g.name="TimeoutError",g.code=23,d.abort(g)},c.options.timeout),c.options.signal=d.signal}try{c.response=await e(c.request,c.options)}catch(d){return c.error=d,c.options.onRequestError&&await Hi(c,c.options.onRequestError),await r(c)}finally{f&&clearTimeout(f)}if((c.response.body||c.response._bodyInit)&&!lE.has(c.response.status)&&c.options.method!=="HEAD"){const d=(c.options.parseResponse?"json":c.options.responseType)||rE(c.response.headers.get("content-type")||"");switch(d){case"json":{const g=await c.response.text(),m=c.options.parseResponse||ho;c.response._data=m(g);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[d]()}}return c.options.onResponse&&await Hi(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await Hi(c,c.options.onResponseError),await r(c)):c.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>jp({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const go=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),cE=go.fetch?(...t)=>go.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),uE=go.Headers,fE=go.AbortController,hE=jp({fetch:cE,Headers:uE,AbortController:fE}),dE=hE,pE=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},_o=pE().app,gE=()=>_o.baseURL,_E=()=>_o.buildAssetsDir,Cc=(...t)=>Bp(Vp(),_E(),...t),Vp=(...t)=>{const e=_o.cdnURL||_o.baseURL;return t.length?Bp(e,...t):e};globalThis.__buildAssetsURL=Cc,globalThis.__publicAssetsURL=Vp;globalThis.$fetch||(globalThis.$fetch=dE.create({baseURL:gE()}));"global"in globalThis||(globalThis.global=globalThis);function vl(t,e={},n){for(const s in t){const r=t[s],i=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?vl(r,e,i):typeof r=="function"&&(e[i]=r)}return e}const mE={run:t=>t()},yE=()=>mE,Kp=typeof console.createTask<"u"?console.createTask:yE;function vE(t,e){const n=e.shift(),s=Kp(n);return t.reduce((r,i)=>r.then(()=>s.run(()=>i(...e))),Promise.resolve())}function wE(t,e){const n=e.shift(),s=Kp(n);return Promise.all(t.map(r=>s.run(()=>r(...e))))}function xa(t,e){for(const n of[...t])n(e)}class EE{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const r=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let o=i.message;o||(o=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,r=(...i)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...i));return s=this.hook(e,r),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];delete this._hooks[e];for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=vl(e),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const n=vl(e);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(vE,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(wE,e,...n)}callHookWith(e,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&xa(this._before,r);const i=e(n in this._hooks?[...this._hooks[n]]:[],s);return i instanceof Promise?i.finally(()=>{this._after&&r&&xa(this._after,r)}):(this._after&&r&&xa(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function qp(){return new EE}function bE(t={}){let e,n=!1;const s=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||s(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{s(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;wl.add(u);try{const c=r?r.run(o,a):a();return n||(e=void 0),await c}finally{wl.delete(u)}}}}function CE(t={}){const e={};return{get(n,s={}){return e[n]||(e[n]=bE({...t,...s})),e[n]}}}const mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},vf="__unctx__",TE=mo[vf]||(mo[vf]=CE()),IE=(t,e={})=>TE.get(t,e),wf="__unctx_async_handlers__",wl=mo[wf]||(mo[wf]=new Set);function Us(t){const e=[];for(const r of wl){const i=r();i&&e.push(i)}const n=()=>{for(const r of e)r()};let s=t();return s&&typeof s=="object"&&"catch"in s&&(s=s.catch(r=>{throw n(),r})),[s,n]}const SE=!1,Ef=!1,RE=!1,cN={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},uN={value:null,errorValue:null,deep:!0},kE=null,fN={},AE="#__nuxt",Gp="nuxt-app",bf=36e5,PE="vite:preloadError";function zp(t=Gp){return IE(t,{asyncContext:!1})}const NE="__nuxt_plugin";function OE(t){var r;let e=0;const n={_id:t.id||Gp||"nuxt-app",_scope:Jm(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.17.5"},get vue(){return n.vueApp.version}},payload:Ut({...((r=t.ssrContext)==null?void 0:r.payload)||{},data:Ut({}),state:$n({}),once:new Set,_errors:Ut({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!ic()?n._scope.run(()=>Cf(n,i)):Cf(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Ut({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=qp(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Bi(n,a,o),Bi(n.vueApp.config.globalProperties,a,o)},Bi(n.vueApp,"$nuxt",n),Bi(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(PE,o=>{n.callHook("app:chunkError",{error:o.payload}),o.payload.message.includes("Unable to preload CSS")&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=Pe);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const s=n.payload.config;return n.provide("config",s),n}function xE(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function ME(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}}async function DE(t,e){const n=new Set,s=[],r=[],i=[];let o=0;async function a(l){var c;const u=((c=l.dependsOn)==null?void 0:c.filter(f=>e.some(h=>h._name===f)&&!n.has(f)))??[];if(u.length>0)s.push([new Set(u),l]);else{const f=ME(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(s.map(async([h,d])=>{h.has(l._name)&&(h.delete(l._name),h.size===0&&(o++,await a(d)))})))});l.parallel?r.push(f.catch(h=>i.push(h))):await f}}for(const l of e)xE(t,l);for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(i.length)throw i[0]}function jt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[NE]:!0,_name:e})}function Cf(t,e,n){const s=()=>e();return zp(t._id).set(t),t.vueApp.runWithContext(s)}function Yp(t){var n;let e;return zo()&&(e=(n=mi())==null?void 0:n.appContext.app.$nuxt),e||(e=zp(t).tryUse()),e||null}function Pe(t){const e=Yp(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Xo(t){return Pe().$config}function Bi(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function LE(t,e){return{ctx:{table:t},matchAll:n=>Jp(n,t)}}function Qp(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([s,r])=>[s,Qp(r)])):new Map(Object.entries(t[n]));return e}function FE(t){return LE(Qp(t))}function Jp(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const s=[];for(const[i,o]of Tf(e.wildcard))(t===i||t.startsWith(i+"/"))&&s.push(o);for(const[i,o]of Tf(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");s.push(...Jp(a,o))}const r=e.static.get(t);return r&&s.push(r),s.filter(Boolean)}function Tf(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Ma(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function El(t,e,n=".",s){if(!Ma(e))return El(t,{},n,s);const r=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(s&&s(r,i,o,n)||(Array.isArray(o)&&Array.isArray(r[i])?r[i]=[...o,...r[i]]:Ma(o)&&Ma(r[i])?r[i]=El(o,r[i],(n?`${n}.`:"")+i.toString(),s):r[i]=o))}return r}function UE(t){return(...e)=>e.reduce((n,s)=>El(n,s,"",t),{})}const Xp=UE();function HE(t,e){try{return e in t}catch{return!1}}class bl extends Error{constructor(n,s={}){super(n,s);gn(this,"statusCode",500);gn(this,"fatal",!1);gn(this,"unhandled",!1);gn(this,"statusMessage");gn(this,"data");gn(this,"cause");s.cause&&!this.cause&&(this.cause=s.cause)}toJSON(){const n={message:this.message,statusCode:Cl(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=Zp(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}gn(bl,"__h3_error__",!0);function BE(t){if(typeof t=="string")return new bl(t);if($E(t))return t;const e=new bl(t.message??t.statusMessage??"",{cause:t.cause||t});if(HE(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Cl(t.statusCode,e.statusCode):t.status&&(e.statusCode=Cl(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Zp(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function $E(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const WE=/[^\u0009\u0020-\u007E]/g;function Zp(t=""){return t.replace(WE,"")}function Cl(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const eg=Symbol("layout-meta"),ls=Symbol("route"),ut=()=>{var t;return(t=Pe())==null?void 0:t.$router},Zo=()=>zo()?We(ls,Pe()._route):Pe()._route;function hN(t){return t}const jE=()=>{try{if(Pe()._processingMiddleware)return!0}catch{return!1}return!1},dN=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?VE(t):ut().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,c=Object.entries(u).filter(([f,h])=>h!==void 0).map(([f,h])=>`${f.toLowerCase()}=${h}`).join(", ");return open(n,l,c),Promise.resolve()}const s=_s(n,{acceptRelative:!0}),r=(e==null?void 0:e.external)||s;if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&qw(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=jE();if(!r&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:l,search:u,hash:c}=Wp(t);return{path:l,...u&&{query:Fp(u)},...c&&{hash:c},replace:!0}}return{...t,replace:!0}}return t}const o=ut(),a=Pe();return r?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function VE(t){return Up(t.path||"",t.query||{})+(t.hash||"")}const tg="__nuxt_error",ea=()=>Ty(Pe().payload,"error"),Yn=t=>{const e=is(t);try{const n=Pe(),s=ea();n.hooks.callHook("app:error",e),s.value||(s.value=e)}catch{throw e}return e},KE=async(t={})=>{const e=Pe(),n=ea();e.callHook("app:error:cleared",t),t.redirect&&await ut().replace(t.redirect),n.value=kE},ng=t=>!!t&&typeof t=="object"&&tg in t,is=t=>{const e=BE(t);return Object.defineProperty(e,tg,{value:!0,configurable:!1,writable:!1}),e};function If(t){const e=GE(t),n=new ArrayBuffer(e.length),s=new DataView(n);for(let r=0;r<n.byteLength;r++)s.setUint8(r,e.charCodeAt(r));return n}const qE="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function GE(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,s=0;for(let r=0;r<t.length;r++)n<<=6,n|=qE.indexOf(t[r]),s+=6,s===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=s=0);return s===12?(n>>=4,e+=String.fromCharCode(n)):s===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const zE=-1,YE=-2,QE=-3,JE=-4,XE=-5,ZE=-6;function eb(t,e){return tb(JSON.parse(t),e)}function tb(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,s=Array(n.length);function r(i,o=!1){if(i===zE)return;if(i===QE)return NaN;if(i===JE)return 1/0;if(i===XE)return-1/0;if(i===ZE)return-0;if(o)throw new Error("Invalid input");if(i in s)return s[i];const a=n[i];if(!a||typeof a!="object")s[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return s[i]=u(r(a[1]));switch(l){case"Date":s[i]=new Date(a[1]);break;case"Set":const c=new Set;s[i]=c;for(let d=1;d<a.length;d+=1)c.add(r(a[d]));break;case"Map":const f=new Map;s[i]=f;for(let d=1;d<a.length;d+=2)f.set(r(a[d]),r(a[d+1]));break;case"RegExp":s[i]=new RegExp(a[1],a[2]);break;case"Object":s[i]=Object(a[1]);break;case"BigInt":s[i]=BigInt(a[1]);break;case"null":const h=Object.create(null);s[i]=h;for(let d=1;d<a.length;d+=2)h[a[d]]=r(a[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[l],g=a[1],m=If(g),C=new d(m);s[i]=C;break}case"ArrayBuffer":{const d=a[1],g=If(d);s[i]=g;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);s[i]=l;for(let u=0;u<a.length;u+=1){const c=a[u];c!==YE&&(l[u]=r(c))}}else{const l={};s[i]=l;for(const u in a){const c=a[u];l[u]=r(c)}}return s[i]}return r(0)}const nb=new Set(["link","style","script","noscript"]),sb=new Set(["title","titleTemplate","script","style","noscript"]),Sf=new Set(["base","meta","link","style","script","noscript"]),rb=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),ib=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),ob=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),ab=new Set(["templateParams","htmlAttrs","bodyAttrs"]),lb=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const cb=["name","property","http-equiv"],ub=new Set(["viewport","description","keywords","robots"]);function sg(t){const e=t.split(":");return e.length?lb.has(e[1]):!1}function Tl(t){const{props:e,tag:n}=t;if(ib.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const s of cb)if(e[s]!==void 0){const r=e[s],i=r.includes(":"),o=ub.has(r),l=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${r}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(sb.has(n)){const s=t.textContent||t.innerHTML;if(s)return`${n}:content:${s}`}}function Rf(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([s,r])=>`${s}:${String(r)}`).join(",")}`}function yo(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let r;if(e&&(r=e(n,t)),Array.isArray(r))return r.map(i=>yo(i,e));if((r==null?void 0:r.constructor)===Object){const i={};for(const o of Object.keys(r))i[o]=yo(r[o],e,o);return i}return r}function fb(t,e){const n=t==="style"?new Map:new Set;function s(r){const i=r.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(l=>l.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(s):s(e):Array.isArray(e)?e.forEach(r=>s(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,i])=>{i&&i!=="false"&&(t==="style"?n.set(r.trim(),i):s(r))}),n}function rg(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,s])=>{if(s===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=fb(n,s);return}if(ob.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof s=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(s)}else t[n]=s;return}const r=String(s),i=n.startsWith("data-");r==="true"||r===""?t.props[n]=i?r:!0:!s&&i&&r==="false"?t.props[n]="false":s!==void 0&&(t.props[n]=s)}),t}function hb(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},s=rg({tag:t,props:{}},n);return s.key&&nb.has(s.tag)&&(s.props["data-hid"]=s._h=s.key),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(r=>({...s,props:{...s.props,content:r}})):s}function db(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(r,i)=>{for(let o=0;o<e.length;o++)i=e[o](r,i);return i};t=n(void 0,t);const s=[];return t=yo(t,n),Object.entries(t||{}).forEach(([r,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])s.push(hb(r,o))}),s.flat()}const Il=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,kf={base:-10,title:10},pb={critical:-8,high:-1,low:2},Af={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},gb=/@import/,wr=t=>t===""||t===!0;function _b(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const s=pb[e.tagPriority]||0,r=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Af;if(e.tag in kf)n=kf[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=Af.meta[o])}else e.tag==="link"&&e.props.rel?n=r.link[e.props.rel]:e.tag==="script"?wr(e.props.async)?n=r.script.async:e.props.src&&!wr(e.props.defer)&&!wr(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=r.script.sync:wr(e.props.defer)&&e.props.src&&!wr(e.props.async)&&(n=r.script.defer):e.tag==="style"&&(n=e.innerHTML&&gb.test(e.innerHTML)?r.style.imported:r.style.sync);return(n||100)+s}function Pf(t,e){const n=typeof e=="function"?e(t):e,s=n.key||String(t.plugins.size+1);t.plugins.get(s)||(t.plugins.set(s,n),t.hooks.addHooks(n.hooks||{}))}function mb(t={}){var a;const e=qp();e.addHooks(t.hooks||{});const n=!t.document,s=new Map,r=new Map,i=[],o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:s,headEntries(){return[...s.values()]},use:l=>Pf(o,l),push(l,u){const c={...u||{}};delete c.head;const f=c._index??o._entryCount++,h={_i:f,input:l,options:c},d={_poll(g=!1){o.dirty=!0,!g&&i.push(f),e.callHook("entries:updated",o)},dispose(){s.delete(f)&&d._poll(!0)},patch(g){(!c.mode||c.mode==="server"&&n||c.mode==="client"&&!n)&&(h.input=g,s.set(f,h),d._poll())}};return d.patch(l),d},async resolveTags(){var d;const l={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",l);i.length;){const g=i.shift(),m=s.get(g);if(m){const C={tags:db(m.input,t.propResolvers||[]).map(E=>Object.assign(E,m.options)),entry:m};await e.callHook("entries:normalize",C),m._tags=C.tags.map((E,w)=>(E._w=_b(o,E),E._p=(m._i<<10)+w,E._d=Tl(E),E))}}let u=!1;l.entries.flatMap(g=>(g._tags||[]).map(m=>({...m,props:{...m.props}}))).sort(Il).reduce((g,m)=>{const C=String(m._d||m._p);if(!g.has(C))return g.set(C,m);const E=g.get(C);if(((m==null?void 0:m.tagDuplicateStrategy)||(ab.has(m.tag)?"merge":null)||(m.key&&m.key===E.key?"merge":null))==="merge"){const _={...E.props};Object.entries(m.props).forEach(([v,b])=>_[v]=v==="style"?new Map([...E.props.style||new Map,...b]):v==="class"?new Set([...E.props.class||new Set,...b]):b),g.set(C,{...m,props:_})}else m._p>>10===E._p>>10&&m.tag==="meta"&&sg(C)?(g.set(C,Object.assign([...Array.isArray(E)?E:[E],m],m)),u=!0):(m._w===E._w?m._p>E._p:(m==null?void 0:m._w)<(E==null?void 0:E._w))&&g.set(C,m);return g},l.tagMap);const c=l.tagMap.get("title"),f=l.tagMap.get("titleTemplate");if(o._title=c==null?void 0:c.textContent,f){const g=f==null?void 0:f.textContent;if(o._titleTemplate=g,g){let m=typeof g=="function"?g(c==null?void 0:c.textContent):g;typeof m=="string"&&!o.plugins.has("template-params")&&(m=m.replace("%s",(c==null?void 0:c.textContent)||"")),c?m===null?l.tagMap.delete("title"):l.tagMap.set("title",{...c,textContent:m}):(f.tag="title",f.textContent=m)}}l.tags=Array.from(l.tagMap.values()),u&&(l.tags=l.tags.flat().sort(Il)),await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l);const h=[];for(const g of l.tags){const{innerHTML:m,tag:C,props:E}=g;if(rb.has(C)&&!(Object.keys(E).length===0&&!g.innerHTML&&!g.textContent)&&!(C==="meta"&&!E.content&&!E["http-equiv"]&&!E.charset)){if(C==="script"&&m){if((d=E.type)!=null&&d.endsWith("json")){const w=typeof m=="string"?m:JSON.stringify(m);g.innerHTML=w.replace(/</g,"\\u003C")}else typeof m=="string"&&(g.innerHTML=m.replace(new RegExp(`</${C}`,"g"),`<\\/${C}`));g._d=Tl(g)}h.push(g)}}return h}};return((t==null?void 0:t.plugins)||[]).forEach(l=>Pf(o,l)),o.hooks.callHook("init",o),(a=t.init)==null||a.forEach(l=>l&&o.push(l)),o}const En="%separator",yb=new RegExp(`${En}(?:\\s*${En})*`,"g");function vb(t,e,n=!1){var r;let s;if(e==="s"||e==="pageTitle")s=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");s=(r=t[e.substring(0,i)])==null?void 0:r[e.substring(i+1)]}else s=t[e];if(s!==void 0)return n?(s||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):s||""}function $i(t,e,n,s=!1){if(typeof t!="string"||!t.includes("%"))return t;let r=t;try{r=decodeURI(t)}catch{}const i=r.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(En);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===En||!i.includes(a))return a;const l=vb(e,a.slice(1),s);return l!==void 0?l:a}).trim(),o&&(t.endsWith(En)&&(t=t.slice(0,-En.length)),t.startsWith(En)&&(t=t.slice(En.length)),t=t.replace(yb,n||"").trim()),t}const Nf=t=>t.includes(":key")?t:t.split(":").join(":key:"),wb={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const s=n.tagPriority;if(!s)continue;const r=String(s);if(r.startsWith("before:")){const i=Nf(r.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(r.startsWith("after:")){const i=Nf(r.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(Il))}}},Eb={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function Sl(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>Sl(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const s of Object.keys(t))n[s]=await Sl(t[s]);return n}return t}const bb={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(Sl(t.entries[n].input).then(s=>{t.entries[n].input=s,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},Cb={meta:"content",link:"href",htmlAttrs:"lang"},Tb=["innerHTML","textContent"],Ib=t=>({key:"template-params",hooks:{"entries:normalize":e=>{var s,r,i;const n=((r=(s=e.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:s[0])==null?void 0:r.props)||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...((i=t._ssrPayload)==null?void 0:i.templateParams)||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{var i;const s=((i=e.get("templateParams"))==null?void 0:i.props)||{},r=s.separator||"|";delete s.separator,s.pageTitle=$i(s.pageTitle||t._title||"",s,r);for(const o of n){if(o.processTemplateParams===!1)continue;const a=Cb[o.tag];if(a&&typeof o.props[a]=="string")o.props[a]=$i(o.props[a],s,r);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const l of Tb)typeof o[l]=="string"&&(o[l]=$i(o[l],s,r,o.tag==="script"&&o.props.type.endsWith("json")))}t._templateParams=s,t._separator=r},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=$i(n.textContent,t._templateParams,t._separator))}}}),Sb=(t,e)=>De(e)?wy(e):e,Tc="usehead";function Rb(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Tc,t)}}.install}function kb(){if(zo()){const t=We(Tc);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function Ab(t,e={}){const n=e.head||kb();return n.ssr?n.push(t||{},e):Pb(n,t,e)}function Pb(t,e,n={}){const s=tn(!1);let r;return gv(()=>{const o=s.value?{}:yo(e,Sb);r?r.patch(o):r=t.push(o,n)}),mi()&&(_i(()=>{r.dispose()}),zd(()=>{s.value=!0}),Gd(()=>{s.value=!1})),r}function ig(t){var n;const e=t||Yp();return((n=e==null?void 0:e.ssrContext)==null?void 0:n.head)||(e==null?void 0:e.runWithContext(()=>{if(zo())return We(Tc)}))}function pN(t,e={}){const n=ig(e.nuxt);if(n)return Ab(t,{head:n,...e})}const Nb="modulepreload",Ob=function(t,e){return new URL(t,e).href},Of={},at=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=o(n.map(c=>{if(c=Ob(c,s),c in Of)return;Of[c]=!0;const f=c.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!s)for(let m=a.length-1;m>=0;m--){const C=a[m];if(C.href===c&&(!f||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":Nb,f||(g.as="script"),g.crossOrigin="",g.href=c,u&&g.setAttribute("nonce",u),document.head.appendChild(g),f)return new Promise((m,C)=>{g.addEventListener("load",m),g.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let zi,Yi;function xb(){return zi=$fetch(Cc(`builds/meta/${Xo().app.buildId}.json`),{responseType:"json"}),zi.then(t=>{Yi=FE(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),zi}function ta(){return zi||xb()}async function Ic(t){const e=typeof t=="string"?t:t.path;if(await ta(),!Yi)return console.error("[nuxt] Error creating app manifest matcher.",Yi),{};try{return Xp({},...Yi.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function xf(t,e={}){if(!await ag(t))return null;const s=await Db(t,e);return await og(s)||null}const Mb="_payload.json";async function Db(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||_s(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const s=Xo(),r=e.hash||(e.fresh?Date.now():s.app.buildId),i=s.app.cdnURL,o=i&&await ag(t)?i:s.app.baseURL;return bc(o,n.pathname,Mb+(r?`?${r}`:""))}async function og(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(lg));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function ag(t=Zo().path){const e=Pe();return t=Xr(t),(await ta()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const s=await Ic({path:t});return!!s.prerender&&!s.redirect})}let Gn=null;async function Lb(){var s;if(Gn)return Gn;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await lg(t.textContent||""),n=t.dataset.src?await og(t.dataset.src):void 0;return Gn={...e,...n,...window.__NUXT__},(s=Gn.config)!=null&&s.public&&(Gn.config.public=$n(Gn.config.public)),Gn}async function lg(t){return await eb(t,Pe()._payloadRevivers)}function Fb(t,e){Pe()._payloadRevivers[t]=e}const Ub=[["NuxtError",t=>is(t)],["EmptyShallowRef",t=>an(t==="_"?void 0:t==="0n"?BigInt(0):ho(t))],["EmptyRef",t=>tn(t==="_"?void 0:t==="0n"?BigInt(0):ho(t))],["ShallowRef",t=>an(t)],["ShallowReactive",t=>Ut(t)],["Ref",t=>tn(t)],["Reactive",t=>$n(t)]],Hb=jt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[s,r]of Ub)Fb(s,r);Object.assign(t.payload,([e,n]=Us(()=>t.runWithContext(Lb)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function Sc(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const s={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",s),!!s.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async r=>{var d;const i=new Map,o=new Promise(g=>{t.resolveTags().then(m=>{g(m.map(C=>{const E=i.get(C._d)||0,w={tag:C,id:(E?`${C._d}:${E}`:C._d)||Rf(C),shouldRender:!0};return C._d&&sg(C._d)&&i.set(C._d,E+1),w}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const g of["body","head"]){const m=(d=n[g])==null?void 0:d.children;for(const C of m){const E=C.tagName.toLowerCase();if(!Sf.has(E))continue;const w=rg({tag:E,props:{}},{innerHTML:C.innerHTML,...C.getAttributeNames().reduce((_,v)=>(_[v]=C.getAttribute(v),_),{})||{}});if(w.key=C.getAttribute("data-hid")||void 0,w._d=Tl(w)||Rf(w),a.elMap.has(w._d)){let _=1,v=w._d;for(;a.elMap.has(v);)v=`${w._d}:${_++}`;a.elMap.set(v,C)}else a.elMap.set(w._d,C)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(g,m,C){const E=`${g}:${m}`;a.sideEffects[E]=C,delete a.pendingSideEffects[E]}function u({id:g,$el:m,tag:C}){const E=C.tag.endsWith("Attrs");a.elMap.set(g,m),E||(C.textContent&&C.textContent!==m.textContent&&(m.textContent=C.textContent),C.innerHTML&&C.innerHTML!==m.innerHTML&&(m.innerHTML=C.innerHTML),l(g,"el",()=>{m==null||m.remove(),a.elMap.delete(g)}));for(const w in C.props){if(!Object.prototype.hasOwnProperty.call(C.props,w))continue;const _=C.props[w];if(w.startsWith("on")&&typeof _=="function"){const b=m==null?void 0:m.dataset;if(b&&b[`${w}fired`]){const S=w.slice(0,-5);_.call(m,new Event(S.substring(2)))}m.getAttribute(`data-${w}`)!==""&&((C.tag==="bodyAttrs"?n.defaultView:m).addEventListener(w.substring(2),_.bind(m)),m.setAttribute(`data-${w}`,""));continue}const v=`attr:${w}`;if(w==="class"){if(!_)continue;for(const b of _)E&&l(g,`${v}:${b}`,()=>m.classList.remove(b)),!m.classList.contains(b)&&m.classList.add(b)}else if(w==="style"){if(!_)continue;for(const[b,S]of _)l(g,`${v}:${b}`,()=>{m.style.removeProperty(b)}),m.style.setProperty(b,S)}else _!==!1&&_!==null&&(m.getAttribute(w)!==_&&m.setAttribute(w,_===!0?"":String(_)),E&&l(g,v,()=>m.removeAttribute(w)))}}const c=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},h=await o;for(const g of h){const{tag:m,shouldRender:C,id:E}=g;if(C){if(m.tag==="title"){n.title=m.textContent,l("title","",()=>n.title=a.title);continue}g.$el=g.$el||a.elMap.get(E),g.$el?u(g):Sf.has(m.tag)&&c.push(g)}}for(const g of c){const m=g.tag.tagPosition||"head";g.$el=n.createElement(g.tag.tag),u(g),f[m]=f[m]||n.createDocumentFragment(),f[m].appendChild(g.$el)}for(const g of h)await t.hooks.callHook("dom:renderTag",g,n,l);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const g in a.pendingSideEffects)a.pendingSideEffects[g]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:h}),r()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function Bb(t={}){var s,r,i;const e=((s=t.domOptions)==null?void 0:s.render)||Sc;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(r=t.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return mb({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function $b(t,e){let n=0;return()=>{const s=++n;e(()=>{n===s&&t()})}}function Wb(t={}){const e=Bb({domOptions:{render:$b(()=>Sc(e),n=>setTimeout(n,0))},...t});return e.install=Rb(e),e}const jb={disableDefaults:!0,disableCapoSorting:!1,plugins:[Eb,bb,Ib,wb]},Vb=jt({name:"nuxt:head",enforce:"pre",setup(t){const e=Wb(jb);t.vueApp.use(e);{let n=!0;const s=async()=>{n=!1,await Sc(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||s()}),t.hooks.hook("app:error",s),t.hooks.hook("app:suspense:resolve",s)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Ss=typeof document<"u";function cg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Kb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cg(t.default)}const fe=Object.assign;function Da(t,e){const n={};for(const s in e){const r=e[s];n[s]=Pt(r)?r.map(t):t(r)}return n}const Lr=()=>{},Pt=Array.isArray,ug=/#/g,qb=/&/g,Gb=/\//g,zb=/=/g,Yb=/\?/g,fg=/\+/g,Qb=/%5B/g,Jb=/%5D/g,hg=/%5E/g,Xb=/%60/g,dg=/%7B/g,Zb=/%7C/g,pg=/%7D/g,eC=/%20/g;function Rc(t){return encodeURI(""+t).replace(Zb,"|").replace(Qb,"[").replace(Jb,"]")}function tC(t){return Rc(t).replace(dg,"{").replace(pg,"}").replace(hg,"^")}function Rl(t){return Rc(t).replace(fg,"%2B").replace(eC,"+").replace(ug,"%23").replace(qb,"%26").replace(Xb,"`").replace(dg,"{").replace(pg,"}").replace(hg,"^")}function nC(t){return Rl(t).replace(zb,"%3D")}function sC(t){return Rc(t).replace(ug,"%23").replace(Yb,"%3F")}function rC(t){return t==null?"":sC(t).replace(Gb,"%2F")}function Zr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const iC=/\/$/,oC=t=>t.replace(iC,"");function La(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=uC(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Zr(o)}}function aC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Mf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lC(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ys(e.matched[s],n.matched[r])&&gg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cC(t[n],e[n]))return!1;return!0}function cC(t,e){return Pt(t)?Df(t,e):Pt(e)?Df(e,t):t===e}function Df(t,e){return Pt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function uC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ei;(function(t){t.pop="pop",t.push="push"})(ei||(ei={}));var Fr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fr||(Fr={}));function fC(t){if(!t)if(Ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),oC(t)}const hC=/^[^#]+#/;function dC(t,e){return t.replace(hC,"#")+e}function pC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const na=()=>({left:window.scrollX,top:window.scrollY});function gC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=pC(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Lf(t,e){return(history.state?history.state.position-e:-1)+t}const kl=new Map;function _C(t,e){kl.set(t,e)}function mC(t){const e=kl.get(t);return kl.delete(t),e}let yC=()=>location.protocol+"//"+location.host;function _g(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Mf(l,"")}return Mf(n,t)+s+r}function vC(t,e,n,s){let r=[],i=[],o=null;const a=({state:h})=>{const d=_g(t,location),g=n.value,m=e.value;let C=0;if(h){if(n.value=d,e.value=h,o&&o===g){o=null;return}C=m?h.position-m.position:0}else s(d);r.forEach(E=>{E(n.value,g,{delta:C,type:ei.pop,direction:C?C>0?Fr.forward:Fr.back:Fr.unknown})})};function l(){o=n.value}function u(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return i.push(d),d}function c(){const{history:h}=window;h.state&&h.replaceState(fe({},h.state,{scroll:na()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function Ff(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?na():null}}function wC(t){const{history:e,location:n}=window,s={value:_g(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:yC()+t+l;try{e[c?"replaceState":"pushState"](u,"",h),r.value=u}catch(d){console.error(d),n[c?"replace":"assign"](h)}}function o(l,u){const c=fe({},e.state,Ff(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});i(l,c,!0),s.value=l}function a(l,u){const c=fe({},r.value,e.state,{forward:l,scroll:na()});i(c.current,c,!0);const f=fe({},Ff(s.value,l,null),{position:c.position+1},u);i(l,f,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function EC(t){t=fC(t);const e=wC(t),n=vC(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=fe({location:"",base:t,go:s,createHref:dC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function bC(t){return typeof t=="string"||t&&typeof t=="object"}function mg(t){return typeof t=="string"||typeof t=="symbol"}const yg=Symbol("");var Uf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Uf||(Uf={}));function Qs(t,e){return fe(new Error,{type:t,[yg]:!0},e)}function Gt(t,e){return t instanceof Error&&yg in t&&(e==null||!!(t.type&e))}const Hf="[^/]+?",CC={sensitive:!1,strict:!1,start:!0,end:!0},TC=/[.+*?^${}()[\]/\\]/g;function IC(t,e){const n=fe({},CC,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const h=u[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(TC,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:m,optional:C,regexp:E}=h;i.push({name:g,repeatable:m,optional:C});const w=E||Hf;if(w!==Hf){d+=10;try{new RegExp(`(${w})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+v.message)}}let _=m?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(_=C&&u.length<2?`(?:/${_})`:"/"+_),C&&(_+="?"),r+=_,d+=20,C&&(d+=-8),m&&(d+=-20),w===".*"&&(d+=-50)}c.push(d)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let h=1;h<c.length;h++){const d=c[h]||"",g=i[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(u){let c="",f=!1;for(const h of t){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const d of h)if(d.type===0)c+=d.value;else if(d.type===1){const{value:g,repeatable:m,optional:C}=d,E=g in u?u[g]:"";if(Pt(E)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Pt(E)?E.join("/"):E;if(!w)if(C)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);c+=w}}return c||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function SC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vg(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=SC(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Bf(s))return 1;if(Bf(r))return-1}return r.length-s.length}function Bf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const RC={type:0,value:""},kC=/[a-zA-Z0-9_]/;function AC(t){if(!t)return[[]];if(t==="/")return[[RC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${u}": ${d}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,u="",c="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:kC.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function PC(t,e,n){const s=IC(AC(t.path),n),r=fe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function NC(t,e){const n=[],s=new Map;e=Vf({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,h,d){const g=!d,m=Wf(f);m.aliasOf=d&&d.record;const C=Vf(e,f),E=[m];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const b of v)E.push(Wf(fe({},m,{components:d?d.record.components:m.components,path:b,aliasOf:d?d.record:m})))}let w,_;for(const v of E){const{path:b}=v;if(h&&b[0]!=="/"){const S=h.record.path,k=S[S.length-1]==="/"?"":"/";v.path=h.record.path+(b&&k+b)}if(w=PC(v,h,C),d?d.alias.push(w):(_=_||w,_!==w&&_.alias.push(w),g&&f.name&&!jf(w)&&o(f.name)),wg(w)&&l(w),m.children){const S=m.children;for(let k=0;k<S.length;k++)i(S[k],w,d&&d.children[k])}d=d||w}return _?()=>{o(_)}:Lr}function o(f){if(mg(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=MC(f,n);n.splice(h,0,f),f.record.name&&!jf(f)&&s.set(f.record.name,f)}function u(f,h){let d,g={},m,C;if("name"in f&&f.name){if(d=s.get(f.name),!d)throw Qs(1,{location:f});C=d.record.name,g=fe($f(h.params,d.keys.filter(_=>!_.optional).concat(d.parent?d.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),f.params&&$f(f.params,d.keys.map(_=>_.name))),m=d.stringify(g)}else if(f.path!=null)m=f.path,d=n.find(_=>_.re.test(m)),d&&(g=d.parse(m),C=d.record.name);else{if(d=h.name?s.get(h.name):n.find(_=>_.re.test(h.path)),!d)throw Qs(1,{location:f,currentLocation:h});C=d.record.name,g=fe({},h.params,f.params),m=d.stringify(g)}const E=[];let w=d;for(;w;)E.unshift(w.record),w=w.parent;return{name:C,path:m,params:g,matched:E,meta:xC(E)}}t.forEach(f=>i(f));function c(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function $f(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Wf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:OC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function OC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function jf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xC(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Vf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function MC(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;vg(t,e[i])<0?s=i:n=i+1}const r=DC(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function DC(t){let e=t;for(;e=e.parent;)if(wg(e)&&vg(t,e)===0)return e}function wg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function LC(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(fg," "),o=i.indexOf("="),a=Zr(o<0?i:i.slice(0,o)),l=o<0?null:Zr(i.slice(o+1));if(a in e){let u=e[a];Pt(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Kf(t){let e="";for(let n in t){const s=t[n];if(n=nC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pt(s)?s.map(i=>i&&Rl(i)):[s&&Rl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function FC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Pt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const UC=Symbol(""),qf=Symbol(""),kc=Symbol(""),Ac=Symbol(""),Al=Symbol("");function Er(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bn(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=h=>{h===!1?l(Qs(4,{from:n,to:e})):h instanceof Error?l(h):bC(h)?l(Qs(2,{from:e,to:h})):(o&&s.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},c=i(()=>t.call(s&&s.instances[r],e,n,u));let f=Promise.resolve(c);t.length<3&&(f=f.then(u)),f.catch(h=>l(h))})}function Fa(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(cg(l)){const c=(l.__vccOpts||l)[e];c&&i.push(bn(c,n,s,o,a,r))}else{let u=l();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Kb(c)?c.default:c;o.mods[a]=c,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&bn(d,n,s,o,a,r)()}))}}return i}function Gf(t){const e=We(kc),n=We(Ac),s=pt(()=>{const l=be(t.to);return e.resolve(l)}),r=pt(()=>{const{matched:l}=s.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const h=f.findIndex(Ys.bind(null,c));if(h>-1)return h;const d=zf(l[u-2]);return u>1&&zf(c)===d&&f[f.length-1].path!==d?f.findIndex(Ys.bind(null,l[u-2])):h}),i=pt(()=>r.value>-1&&jC(n.params,s.value.params)),o=pt(()=>r.value>-1&&r.value===n.matched.length-1&&gg(n.params,s.value.params));function a(l={}){if(WC(l)){const u=e[be(t.replace)?"replace":"push"](be(t.to)).catch(Lr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:pt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function HC(t){return t.length===1?t[0]:t}const BC=fn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Gf,setup(t,{slots:e}){const n=$n(Gf(t)),{options:s}=We(kc),r=pt(()=>({[Yf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&HC(e.default(n));return t.custom?i:ke("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),$C=BC;function WC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jC(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Pt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function zf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yf=(t,e,n)=>t??e??n,VC=fn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=We(Al),r=pt(()=>t.route||s.value),i=We(qf,0),o=pt(()=>{let u=be(i);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=pt(()=>r.value.matched[o.value]);Pn(qf,pt(()=>o.value+1)),Pn(UC,a),Pn(Al,r);const l=tn();return Ls(()=>[l.value,a.value,t.name],([u,c,f],[h,d,g])=>{c&&(c.instances[f]=u,d&&d!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!Ys(c,d)||!h)&&(c.enterCallbacks[f]||[]).forEach(m=>m(u))},{flush:"post"}),()=>{const u=r.value,c=t.name,f=a.value,h=f&&f.components[c];if(!h)return Qf(n.default,{Component:h,route:u});const d=f.props[c],g=d?d===!0?u.params:typeof d=="function"?d(u):d:null,C=ke(h,fe({},g,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Qf(n.default,{Component:C,route:u})||C}}});function Qf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Eg=VC;function KC(t){const e=NC(t.routes,t),n=t.parseQuery||LC,s=t.stringifyQuery||Kf,r=t.history,i=Er(),o=Er(),a=Er(),l=an(dt);let u=dt;Ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Da.bind(null,R=>""+R),f=Da.bind(null,rC),h=Da.bind(null,Zr);function d(R,$){let H,K;return mg(R)?(H=e.getRecordMatcher(R),K=$):K=R,e.addRoute(K,H)}function g(R){const $=e.getRecordMatcher(R);$&&e.removeRoute($)}function m(){return e.getRoutes().map(R=>R.record)}function C(R){return!!e.getRecordMatcher(R)}function E(R,$){if($=fe({},$||l.value),typeof R=="string"){const y=La(n,R,$.path),T=e.resolve({path:y.path},$),A=r.createHref(y.fullPath);return fe(y,T,{params:h(T.params),hash:Zr(y.hash),redirectedFrom:void 0,href:A})}let H;if(R.path!=null)H=fe({},R,{path:La(n,R.path,$.path).path});else{const y=fe({},R.params);for(const T in y)y[T]==null&&delete y[T];H=fe({},R,{params:f(y)}),$.params=f($.params)}const K=e.resolve(H,$),ue=R.hash||"";K.params=c(h(K.params));const Ce=aC(s,fe({},R,{hash:tC(ue),path:K.path})),p=r.createHref(Ce);return fe({fullPath:Ce,hash:ue,query:s===Kf?FC(R.query):R.query||{}},K,{redirectedFrom:void 0,href:p})}function w(R){return typeof R=="string"?La(n,R,l.value.path):fe({},R)}function _(R,$){if(u!==R)return Qs(8,{from:$,to:R})}function v(R){return k(R)}function b(R){return v(fe(w(R),{replace:!0}))}function S(R){const $=R.matched[R.matched.length-1];if($&&$.redirect){const{redirect:H}=$;let K=typeof H=="function"?H(R):H;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=w(K):{path:K},K.params={}),fe({query:R.query,hash:R.hash,params:K.path!=null?{}:R.params},K)}}function k(R,$){const H=u=E(R),K=l.value,ue=R.state,Ce=R.force,p=R.replace===!0,y=S(H);if(y)return k(fe(w(y),{state:typeof y=="object"?fe({},ue,y.state):ue,force:Ce,replace:p}),$||H);const T=H;T.redirectedFrom=$;let A;return!Ce&&lC(s,K,H)&&(A=Qs(16,{to:T,from:K}),Ot(K,K,!0,!1)),(A?Promise.resolve(A):x(T,K)).catch(I=>Gt(I)?Gt(I,2)?I:pn(I):V(I,T,K)).then(I=>{if(I){if(Gt(I,2))return k(fe({replace:p},w(I.to),{state:typeof I.to=="object"?fe({},ue,I.to.state):ue,force:Ce}),$||T)}else I=O(T,K,!0,p,ue);return G(T,K,I),I})}function W(R,$){const H=_(R,$);return H?Promise.reject(H):Promise.resolve()}function M(R){const $=Es.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(R):R()}function x(R,$){let H;const[K,ue,Ce]=qC(R,$);H=Fa(K.reverse(),"beforeRouteLeave",R,$);for(const y of K)y.leaveGuards.forEach(T=>{H.push(bn(T,R,$))});const p=W.bind(null,R,$);return H.push(p),ft(H).then(()=>{H=[];for(const y of i.list())H.push(bn(y,R,$));return H.push(p),ft(H)}).then(()=>{H=Fa(ue,"beforeRouteUpdate",R,$);for(const y of ue)y.updateGuards.forEach(T=>{H.push(bn(T,R,$))});return H.push(p),ft(H)}).then(()=>{H=[];for(const y of Ce)if(y.beforeEnter)if(Pt(y.beforeEnter))for(const T of y.beforeEnter)H.push(bn(T,R,$));else H.push(bn(y.beforeEnter,R,$));return H.push(p),ft(H)}).then(()=>(R.matched.forEach(y=>y.enterCallbacks={}),H=Fa(Ce,"beforeRouteEnter",R,$,M),H.push(p),ft(H))).then(()=>{H=[];for(const y of o.list())H.push(bn(y,R,$));return H.push(p),ft(H)}).catch(y=>Gt(y,8)?y:Promise.reject(y))}function G(R,$,H){a.list().forEach(K=>M(()=>K(R,$,H)))}function O(R,$,H,K,ue){const Ce=_(R,$);if(Ce)return Ce;const p=$===dt,y=Ss?history.state:{};H&&(K||p?r.replace(R.fullPath,fe({scroll:p&&y&&y.scroll},ue)):r.push(R.fullPath,ue)),l.value=R,Ot(R,$,H,p),pn()}let z;function ie(){z||(z=r.listen((R,$,H)=>{if(!Pi.listening)return;const K=E(R),ue=S(K);if(ue){k(fe(ue,{replace:!0,force:!0}),K).catch(Lr);return}u=K;const Ce=l.value;Ss&&_C(Lf(Ce.fullPath,H.delta),na()),x(K,Ce).catch(p=>Gt(p,12)?p:Gt(p,2)?(k(fe(w(p.to),{force:!0}),K).then(y=>{Gt(y,20)&&!H.delta&&H.type===ei.pop&&r.go(-1,!1)}).catch(Lr),Promise.reject()):(H.delta&&r.go(-H.delta,!1),V(p,K,Ce))).then(p=>{p=p||O(K,Ce,!1),p&&(H.delta&&!Gt(p,8)?r.go(-H.delta,!1):H.type===ei.pop&&Gt(p,20)&&r.go(-1,!1)),G(K,Ce,p)}).catch(Lr)}))}let ce=Er(),j=Er(),te;function V(R,$,H){pn(R);const K=j.list();return K.length?K.forEach(ue=>ue(R,$,H)):console.error(R),Promise.reject(R)}function Se(){return te&&l.value!==dt?Promise.resolve():new Promise((R,$)=>{ce.add([R,$])})}function pn(R){return te||(te=!R,ie(),ce.list().forEach(([$,H])=>R?H(R):$()),ce.reset()),R}function Ot(R,$,H,K){const{scrollBehavior:ue}=t;if(!Ss||!ue)return Promise.resolve();const Ce=!H&&mC(Lf(R.fullPath,0))||(K||!H)&&history.state&&history.state.scroll||null;return as().then(()=>ue(R,$,Ce)).then(p=>p&&gC(p)).catch(p=>V(p,R,$))}const et=R=>r.go(R);let ws;const Es=new Set,Pi={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:m,resolve:E,options:t,push:v,replace:b,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:Se,install(R){const $=this;R.component("RouterLink",$C),R.component("RouterView",Eg),R.config.globalProperties.$router=$,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>be(l)}),Ss&&!ws&&l.value===dt&&(ws=!0,v(r.location).catch(ue=>{}));const H={};for(const ue in dt)Object.defineProperty(H,ue,{get:()=>l.value[ue],enumerable:!0});R.provide(kc,$),R.provide(Ac,Ut(H)),R.provide(Al,l);const K=R.unmount;Es.add(R),R.unmount=function(){Es.delete(R),Es.size<1&&(u=dt,z&&z(),z=null,l.value=dt,ws=!1,te=!1),K()}}};function ft(R){return R.reduce(($,H)=>$.then(()=>M(H)),Promise.resolve())}return Pi}function qC(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ys(u,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Ys(u,l))||r.push(l))}return[n,s,r]}function bg(t){return We(Ac)}const GC=/(:\w+)\([^)]+\)/g,zC=/(:\w+)[?+*]/g,YC=/:\w+/g,QC=(t,e)=>e.path.replace(GC,"$1").replace(zC,"$1").replace(YC,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),Pl=(t,e)=>{const n=t.route.matched.find(r=>{var i;return((i=r.components)==null?void 0:i.default)===t.Component.type}),s=e??(n==null?void 0:n.meta.key)??(n&&QC(t.route,n));return typeof s=="function"?s(t.route):s},JC=(t,e)=>({default:()=>t?ke(Wy,t===!0?{}:t,e):e});function Pc(t){return Array.isArray(t)?t:[t]}const XC={layout:!1},Ua=[{name:"men",path:"/men",component:()=>at(()=>import("./CPQSPCFa.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)},{name:"crud",path:"/crud",meta:{middleware:"admin"},component:()=>at(()=>import("./BTDP4KQe.js"),__vite__mapDeps([5,3,2,6]),import.meta.url)},{name:"admin",path:"/admin",meta:{middleware:"admin"},component:()=>at(()=>import("./hg82SYtR.js"),__vite__mapDeps([7,8,3,1,2,9]),import.meta.url)},{name:"index",path:"/",component:()=>at(()=>import("./yqh4kOQi.js"),__vite__mapDeps([10,11,1,2,3,4,8]),import.meta.url)},{name:"login",path:"/login",meta:{...XC||{},middleware:"guest"},component:()=>at(()=>import("./CnAV_5I1.js"),__vite__mapDeps([12,11,3,13]),import.meta.url)},{name:"women",path:"/women",component:()=>at(()=>import("./kS0pT4jC.js"),__vite__mapDeps([14,1,2,3,4]),import.meta.url)},{name:"product-id",path:"/product/:id()",component:()=>at(()=>import("./BJBpamkc.js"),[],import.meta.url)}],Cg=(t,e)=>({default:()=>{var n;return t?ke(Kv,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),ZC=/(:\w+)\([^)]+\)/g,eT=/(:\w+)[?+*]/g,tT=/:\w+/g;function Jf(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(ZC,"$1").replace(eT,"$1").replace(tT,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""});return typeof e=="function"?e(t):e}function nT(t,e){return t===e||e===dt?!1:Jf(t)!==Jf(e)?!0:!t.matched.every((s,r)=>{var i,o;return s.components&&s.components.default===((o=(i=e.matched[r])==null?void 0:i.components)==null?void 0:o.default)})}function sT(t,e=!1){if(t){if(t.nodeName==="#comment"&&t.nodeValue==="[")return Tg(t,[],e);if(e){const n=t.cloneNode(!0);return n.querySelectorAll("[data-island-slot]").forEach(s=>{s.innerHTML=""}),[n.outerHTML]}return[t.outerHTML]}}function Tg(t,e=[],n=!1){var s;if(t&&t.nodeName){if(iT(t))return e;if(!rT(t)){const r=t.cloneNode(!0);n&&((s=r.querySelectorAll)==null||s.call(r,"[data-island-slot]").forEach(i=>{i.innerHTML=""})),e.push(r.outerHTML)}Tg(t.nextSibling,e,n)}return e}function Ha(t,e){const n=t?sT(t):[e];return n?Pv(n.join(""),n.length):ke("div")}function rT(t){return t.nodeName==="#comment"&&t.nodeValue==="["}function iT(t){return t.nodeName==="#comment"&&t.nodeValue==="]"}const oT={scrollBehavior(t,e,n){var l;const s=Pe(),r=((l=ut().options)==null?void 0:l.scrollBehaviorType)??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Ig(t.hash),behavior:r}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;let o=n||void 0;!o&&nT(t,e)&&(o={left:0,top:0});const a=s._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(u=>{if(e===dt){u(Xf(t,"instant",o));return}s.hooks.hookOnce(a,()=>{requestAnimationFrame(()=>u(Xf(t,"instant",o)))})})}};function Ig(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function Xf(t,e,n){return n||(t.hash?{el:t.hash,top:Ig(t.hash),behavior:e}:{left:0,top:0,behavior:e})}const aT={hashMode:!1,scrollBehaviorType:"auto"},Mt={...aT,...oT},lT=async(t,e)=>{var o;let n,s;if(!((o=t.meta)!=null&&o.validate))return;const r=([n,s]=Us(()=>Promise.resolve(t.meta.validate(t))),n=await n,s(),n);if(r===!0)return;const i=is({fatal:!0,statusCode:r&&r.statusCode||404,statusMessage:r&&r.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},cT=async t=>{let e,n;const s=([e,n]=Us(()=>Ic({path:t.path})),e=await e,n(),e);if(s.redirect)return _s(s.redirect,{acceptRelative:!0})?(window.location.href=s.redirect,!1):s.redirect},uT=[lT,cT],Ur={admin:()=>at(()=>import("./Bmvi1Jk2.js"),__vite__mapDeps([15,3]),import.meta.url),auth:()=>at(()=>import("./DRsh-DDs.js"),__vite__mapDeps([16,3]),import.meta.url),guest:()=>at(()=>import("./BgsiD2yf.js"),__vite__mapDeps([17,3]),import.meta.url)};function fT(t,e,n){const{pathname:s,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let c=i.slice(u);return c[0]!=="/"&&(c="/"+c),_f(c,"")}const a=_f(s,t),l=!n||Qw(a,n)?a:n;return l+(l.includes("?")?"":r)+i}const hT=jt({name:"nuxt:router",enforce:"pre",async setup(t){var C;let e,n,s=Xo().app.baseURL;const r=((C=Mt.history)==null?void 0:C.call(Mt,s))??EC(s),i=Mt.routes?([e,n]=Us(()=>Mt.routes(Ua)),e=await e,n(),e??Ua):Ua;let o;const a=KC({...Mt,scrollBehavior:(E,w,_)=>{if(w===dt){o=_;return}if(Mt.scrollBehavior){if(a.options.scrollBehavior=Mt.scrollBehavior,"scrollRestoration"in window.history){const v=a.beforeEach(()=>{v(),window.history.scrollRestoration="manual"})}return Mt.scrollBehavior(E,dt,o||_)}},history:r,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=an(a.currentRoute.value);a.afterEach((E,w)=>{l.value=w}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=fT(s,window.location,t.payload.path),c=an(a.currentRoute.value),f=()=>{c.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((E,w)=>{var _,v,b,S;((v=(_=E.matched[0])==null?void 0:_.components)==null?void 0:v.default)===((S=(b=w.matched[0])==null?void 0:b.components)==null?void 0:S.default)&&f()});const h={};for(const E in c.value)Object.defineProperty(h,E,{get:()=>c.value[E],enumerable:!0});t._route=Ut(h),t._middleware||(t._middleware={global:[],named:{}});const d=ea();a.afterEach(async(E,w,_)=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await t.runWithContext(KE),_&&await t.callHook("page:loading:end")});try{[e,n]=Us(()=>a.isReady()),await e,n()}catch(E){[e,n]=Us(()=>t.runWithContext(()=>Yn(E))),await e,n()}const g=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const m=t.payload.state._layout;return a.beforeEach(async(E,w)=>{var _;await t.callHook("page:loading:start"),E.meta=$n(E.meta),t.isHydrating&&m&&!on(E.meta.layout)&&(E.meta.layout=m),t._processingMiddleware=!0;{const v=new Set([...uT,...t._middleware.global]);for(const b of E.matched){const S=b.meta.middleware;if(S)for(const k of Pc(S))v.add(k)}{const b=await t.runWithContext(()=>Ic({path:E.path}));if(b.appMiddleware)for(const S in b.appMiddleware)b.appMiddleware[S]?v.add(S):v.delete(S)}for(const b of v){const S=typeof b=="string"?t._middleware.named[b]||await((_=Ur[b])==null?void 0:_.call(Ur).then(k=>k.default||k)):b;if(!S)throw new Error(`Unknown route middleware: '${b}'.`);try{const k=await t.runWithContext(()=>S(E,w));if(!t.payload.serverRendered&&t.isHydrating&&(k===!1||k instanceof Error)){const W=k||is({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Yn(W)),!1}if(k===!0)continue;if(k===!1)return k;if(k)return ng(k)&&k.fatal&&await t.runWithContext(()=>Yn(k)),k}catch(k){const W=is(k);return W.fatal&&await t.runWithContext(()=>Yn(W)),W}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(E,w)=>{E.matched.length===0&&await t.runWithContext(()=>Yn(is({statusCode:404,fatal:!1,statusMessage:`Page not found: ${E.fullPath}`,data:{path:E.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in g&&(g.name=void 0),await a.replace({...g,force:!0}),a.options.scrollBehavior=Mt.scrollBehavior}catch(E){await t.runWithContext(()=>Yn(E))}}),{provide:{router:a}}}}),Zf=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),gN=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Nc=t=>{const e=Pe();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Zf(()=>t())}):Zf(()=>t())},dT=jt({name:"nuxt:payload",setup(t){const e=new Set;ut().beforeResolve(async(n,s)=>{if(n.path===s.path)return;const r=await xf(n.path);if(r){for(const i of e)delete t.static.data[i];for(const i in r.data)i in t.static.data||e.add(i),t.static.data[i]=r.data[i]}}),Nc(()=>{var n;t.hooks.hook("link:prefetch",async s=>{const{hostname:r}=new URL(s,window.location.href);r===window.location.hostname&&await xf(s).catch(()=>{console.warn("[nuxt] Error preloading payload for",s)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(ta,1e3)})}}),pT=jt(()=>{const t=ut();Nc(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),gT=jt(t=>{let e;async function n(){const s=await ta();e&&clearTimeout(e),e=setTimeout(n,bf);try{const r=await $fetch(Cc("builds/latest.json")+`?${Date.now()}`);r.id!==s.id&&t.hooks.callHook("app:manifest:update",r)}catch{}}Nc(()=>{e=setTimeout(n,bf)})});function _T(t={}){const e=t.path||window.location.pathname;let n={};try{n=ho(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Pe().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const mT=jt({name:"nuxt:chunk-reload",setup(t){const e=ut(),n=Xo(),s=new Set;e.beforeEach(()=>{s.clear()}),t.hook("app:chunkError",({error:i})=>{s.add(i)});function r(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:bc(n.app.baseURL,i.fullPath);_T({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((i,o)=>{s.has(i)&&r(o)})}}),yT=jt({name:"nuxt:global-components"}),Rn={default:al(()=>at(()=>import("./DLT2w2Us.js"),__vite__mapDeps([18,11,3,19]),import.meta.url).then(t=>t.default||t))};function vT(t){if(t!=null&&t.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function wT(t,e=ut()){const{path:n,matched:s}=e.resolve(t);if(!s.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const r=e._preloadPromises||(e._preloadPromises=[]);if(r.length>4)return Promise.all(r).then(()=>wT(t,e));e._routePreloaded.add(n);const i=s.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}const ET=jt({name:"nuxt:prefetch",setup(t){const e=ut();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var r;const s=(r=n==null?void 0:n.meta)==null?void 0:r.layout;s&&typeof Rn[s]=="function"&&await Rn[s]()})}),t.hooks.hook("link:prefetch",n=>{if(_s(n))return;const s=e.resolve(n);if(!s)return;const r=s.meta.layout;let i=Pc(s.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Ur[o]=="function"&&Ur[o]();typeof r=="string"&&r in Rn&&vT(Rn[r])})}}),bT=()=>{};var eh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw lr(e)},lr=function(t){return new Error("Firebase Database ("+Sg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},CT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,u=l?t[r+2]:0,c=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|u>>6,d=u&63;l||(d=64,o||(h=64)),s.push(n[c],n[f],n[h],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw new TT;const h=i<<2|a>>4;if(s.push(h),u!==64){const d=a<<4&240|u>>2;if(s.push(d),f!==64){const g=u<<6&192|f;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kg=function(t){const e=Rg(t);return Oc.encodeByteArray(e,!0)},vo=function(t){return kg(t).replace(/\./g,"")},wo=function(t){try{return Oc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t){return Ag(void 0,t)}function Ag(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ST(n)||(t[n]=Ag(t[n],e[n]));return t}function ST(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=()=>RT().__FIREBASE_DEFAULTS__,AT=()=>{if(typeof process>"u"||typeof eh>"u")return;const t=eh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wo(t[1]);return e&&JSON.parse(e)},xc=()=>{try{return bT()||kT()||AT()||PT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pg=t=>{var e,n;return(n=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NT=t=>{const e=Pg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ng=()=>{var t;return(t=xc())===null||t===void 0?void 0:t.config},Og=t=>{var e;return(e=xc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){return t.endsWith(".cloudworkstations.dev")}async function xg(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vo(JSON.stringify(n)),vo(JSON.stringify(o)),""].join(".")}const Hr={};function xT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Hr))Hr[e]?t.emulator.push(e):t.prod.push(e);return t}function MT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let th=!1;function Mg(t,e){if(typeof window>"u"||typeof document>"u"||!cr(window.location.host)||Hr[t]===e||Hr[t]||th)return;Hr[t]=e;function n(h){return`__firebase__banner__${h}`}const s="__firebase__banner",i=xT().prod.length>0;function o(){const h=document.getElementById(s);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,d){h.setAttribute("width","24"),h.setAttribute("id",d),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function u(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{th=!0,o()},h}function c(h,d){h.setAttribute("id",d),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=MT(s),d=n("text"),g=document.getElementById(d)||document.createElement("span"),m=n("learnmore"),C=document.getElementById(m)||document.createElement("a"),E=n("preprendIcon"),w=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const _=h.element;a(_),c(C,m);const v=u();l(w,E),_.append(w,g,C,v),document.body.appendChild(_)}i?(g.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",d)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function DT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FT(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UT(){return Sg.NODE_ADMIN===!0}function HT(){try{return typeof indexedDB=="object"}catch{return!1}}function BT(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T="FirebaseError";class Wn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=$T,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?WT(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Wn(r,a,s)}}function WT(t,e){return t.replace(jT,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const jT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=ti(wo(i[0])||""),n=ti(wo(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},VT=function(t){const e=Lg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},KT=function(t){const e=Lg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Js(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Eo(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function cs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(nh(i)&&nh(o)){if(!cs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function nh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function kr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ar(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),c=1518500249):(u=i^o^a,c=1859775393):f<60?(u=i&o|a&(i|o),c=2400959708):(u=i^o^a,c=3395469782);const h=(r<<5|r>>>27)+u+l+c+s[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function GT(t,e){const n=new zT(t,e);return n.subscribe.bind(n)}class zT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");YT(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ba),r.error===void 0&&(r.error=Ba),r.complete===void 0&&(r.complete=Ba);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ba(){}function sa(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,D(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ra=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class us{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new vi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZT(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:XT(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XT(t){return t===Qn?void 0:t}function ZT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const tI={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},nI=pe.INFO,sI={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},rI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=sI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=nI,this._logHandler=rI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const iI=(t,e)=>e.some(n=>t instanceof n);let sh,rh;function oI(){return sh||(sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aI(){return rh||(rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fg=new WeakMap,Ol=new WeakMap,Ug=new WeakMap,$a=new WeakMap,Lc=new WeakMap;function lI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Nn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fg.set(n,t)}).catch(()=>{}),Lc.set(e,t),e}function cI(t){if(Ol.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ol.set(t,e)}let xl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ug.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uI(t){xl=t(xl)}function fI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Wa(this),e,...n);return Ug.set(s,e.sort?e.sort():[e]),Nn(s)}:aI().includes(t)?function(...e){return t.apply(Wa(this),e),Nn(Fg.get(this))}:function(...e){return Nn(t.apply(Wa(this),e))}}function hI(t){return typeof t=="function"?fI(t):(t instanceof IDBTransaction&&cI(t),iI(t,oI())?new Proxy(t,xl):t)}function Nn(t){if(t instanceof IDBRequest)return lI(t);if($a.has(t))return $a.get(t);const e=hI(t);return e!==t&&($a.set(t,e),Lc.set(e,t)),e}const Wa=t=>Lc.get(t);function dI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Nn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Nn(o.result),l.oldVersion,l.newVersion,Nn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const pI=["get","getKey","getAll","getAllKeys","count"],gI=["put","add","delete","clear"],ja=new Map;function ih(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ja.get(e))return ja.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=gI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||pI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return ja.set(e,i),i}uI(t=>({...t,get:(e,n,s)=>ih(e,n)||t.get(e,n,s),has:(e,n)=>!!ih(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function mI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ml="@firebase/app",oh="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Dc("@firebase/app"),yI="@firebase/app-compat",vI="@firebase/analytics-compat",wI="@firebase/analytics",EI="@firebase/app-check-compat",bI="@firebase/app-check",CI="@firebase/auth",TI="@firebase/auth-compat",II="@firebase/database",SI="@firebase/data-connect",RI="@firebase/database-compat",kI="@firebase/functions",AI="@firebase/functions-compat",PI="@firebase/installations",NI="@firebase/installations-compat",OI="@firebase/messaging",xI="@firebase/messaging-compat",MI="@firebase/performance",DI="@firebase/performance-compat",LI="@firebase/remote-config",FI="@firebase/remote-config-compat",UI="@firebase/storage",HI="@firebase/storage-compat",BI="@firebase/firestore",$I="@firebase/ai",WI="@firebase/firestore-compat",jI="firebase",VI="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl="[DEFAULT]",KI={[Ml]:"fire-core",[yI]:"fire-core-compat",[wI]:"fire-analytics",[vI]:"fire-analytics-compat",[bI]:"fire-app-check",[EI]:"fire-app-check-compat",[CI]:"fire-auth",[TI]:"fire-auth-compat",[II]:"fire-rtdb",[SI]:"fire-data-connect",[RI]:"fire-rtdb-compat",[kI]:"fire-fn",[AI]:"fire-fn-compat",[PI]:"fire-iid",[NI]:"fire-iid-compat",[OI]:"fire-fcm",[xI]:"fire-fcm-compat",[MI]:"fire-perf",[DI]:"fire-perf-compat",[LI]:"fire-rc",[FI]:"fire-rc-compat",[UI]:"fire-gcs",[HI]:"fire-gcs-compat",[BI]:"fire-fst",[WI]:"fire-fst-compat",[$I]:"fire-vertex","fire-js":"fire-js",[jI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map,qI=new Map,Ll=new Map;function ah(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xs(t){const e=t.name;if(Ll.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;Ll.set(e,t);for(const n of bo.values())ah(n,t);for(const n of qI.values())ah(n,t);return!0}function Fc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},On=new wi("app","Firebase",GI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=VI;function Hg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Dl,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw On.create("bad-app-name",{appName:String(r)});if(n||(n=Ng()),!n)throw On.create("no-options");const i=bo.get(r);if(i){if(cs(n,i.options)&&cs(s,i.config))return i;throw On.create("duplicate-app",{appName:r})}const o=new eI(r);for(const l of Ll.values())o.addComponent(l);const a=new zI(n,s,o);return bo.set(r,a),a}function Bg(t=Dl){const e=bo.get(t);if(!e&&t===Dl&&Ng())return Hg();if(!e)throw On.create("no-app",{appName:t});return e}function xn(t,e,n){var s;let r=(s=KI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}Xs(new us(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="firebase-heartbeat-database",QI=1,ni="firebase-heartbeat-store";let Va=null;function $g(){return Va||(Va=dI(YI,QI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),Va}async function JI(t){try{const n=(await $g()).transaction(ni),s=await n.objectStore(ni).get(Wg(t));return await n.done,s}catch(e){if(e instanceof Wn)ln.warn(e.message);else{const n=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(n.message)}}}async function lh(t,e){try{const s=(await $g()).transaction(ni,"readwrite");await s.objectStore(ni).put(e,Wg(t)),await s.done}catch(n){if(n instanceof Wn)ln.warn(n.message);else{const s=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(s.message)}}}function Wg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=1024,ZI=30;class eS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ch();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>ZI){const o=sS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ln.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ch(),{heartbeatsToSend:s,unsentEntries:r}=tS(this._heartbeatsCache.heartbeats),i=vo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ln.warn(n),""}}}function ch(){return new Date().toISOString().substring(0,10)}function tS(t,e=XI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),uh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),uh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class nS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HT()?BT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function uh(t){return vo(JSON.stringify({version:2,heartbeats:t})).length}function sS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(t){Xs(new us("platform-logger",e=>new _I(e),"PRIVATE")),Xs(new us("heartbeat",e=>new eS(e),"PRIVATE")),xn(Ml,oh,t),xn(Ml,oh,"esm2017"),xn("fire-js","")}rS("");var iS="firebase",oS="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(iS,oS,"app");function Uc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function jg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aS=jg,Vg=new wi("auth","Firebase",jg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Dc("@firebase/auth");function lS(t,...e){Co.logLevel<=pe.WARN&&Co.warn(`Auth (${fr}): ${t}`,...e)}function Qi(t,...e){Co.logLevel<=pe.ERROR&&Co.error(`Auth (${fr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw Hc(t,...e)}function Bt(t,...e){return Hc(t,...e)}function Kg(t,e,n){const s=Object.assign(Object.assign({},aS()),{[e]:n});return new wi("auth","Firebase",s).create(e,{appName:t.name})}function Mn(t){return Kg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Vg.create(t,...e)}function J(t,e,...n){if(!t)throw Hc(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qi(e),new Error(e)}function cn(t,e){t||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cS(){return fh()==="http:"||fh()==="https:"}function fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cS()||LT()||"connection"in navigator)?navigator.onLine:!0}function fS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=Mc()||Dg()}get(){return uS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pS=new Ei(3e4,6e4);function ms(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jn(t,e,n,s,r={}){return Gg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ur(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return DT()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&cr(t.emulatorConfig.host)&&(u.credentials="include"),qg.fetch()(await zg(t,t.config.apiHost,n,a),u)})}async function Gg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},hS),e);try{const r=new _S(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wi(t,"user-disabled",o);const c=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Kg(t,c,u);Nt(t,c)}}catch(r){if(r instanceof Wn)throw r;Nt(t,"network-request-failed",{message:String(r)})}}async function ia(t,e,n,s,r={}){const i=await jn(t,e,n,s,r);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function zg(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Bc(t.config,r):`${t.config.apiScheme}://${r}`;return dS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function gS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _S{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Bt(this.auth,"network-request-failed")),pS.get())})}}function Wi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Bt(t,e,s);return r.customData._tokenResponse=n,r}function hh(t){return t!==void 0&&t.enterprise!==void 0}class mS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yS(t,e){return jn(t,"GET","/v2/recaptchaConfig",ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t,e){return jn(t,"POST","/v1/accounts:delete",e)}async function To(t,e){return jn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wS(t,e=!1){const n=Ze(t),s=await n.getIdToken(e),r=$c(s);J(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Br(Ka(r.auth_time)),issuedAtTime:Br(Ka(r.iat)),expirationTime:Br(Ka(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ka(t){return Number(t)*1e3}function $c(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Qi("JWT malformed, contained fewer than 3 sections"),null;try{const r=wo(n);return r?JSON.parse(r):(Qi("Failed to decode base64 JWT payload"),null)}catch(r){return Qi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function dh(t){const e=$c(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Wn&&ES(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function ES({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Br(this.lastLoginAt),this.creationTime=Br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(t){var e;const n=t.auth,s=await t.getIdToken(),r=await si(t,To(n,{idToken:s}));J(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yg(i.providerUserInfo):[],a=TS(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ul(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function CS(t){const e=Ze(t);await Io(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TS(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Yg(t){return t.map(e=>{var{providerId:n}=e,s=Uc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(t,e){const n=await Gg(t,{},async()=>{const s=ur({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await zg(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return t.emulatorConfig&&cr(t.emulatorConfig.host)&&(l.credentials="include"),qg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SS(t,e){return jn(t,"POST","/v2/accounts:revokeToken",ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=dh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await IS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Hs;return s&&(J(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(J(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class It{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ul(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await si(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wS(this,e)}reload(){return CS(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Io(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await si(this,vS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,u,c;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(u=n.createdAt)!==null&&u!==void 0?u:void 0,w=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:v,isAnonymous:b,providerData:S,stsTokenManager:k}=n;J(_&&k,e,"internal-error");const W=Hs.fromJSON(this.name,k);J(typeof _=="string",e,"internal-error"),mn(f,e.name),mn(h,e.name),J(typeof v=="boolean",e,"internal-error"),J(typeof b=="boolean",e,"internal-error"),mn(d,e.name),mn(g,e.name),mn(m,e.name),mn(C,e.name),mn(E,e.name),mn(w,e.name);const M=new It({uid:_,auth:e,email:h,emailVerified:v,displayName:f,isAnonymous:b,photoURL:g,phoneNumber:d,tenantId:m,stsTokenManager:W,createdAt:E,lastLoginAt:w});return S&&Array.isArray(S)&&(M.providerData=S.map(x=>Object.assign({},x))),C&&(M._redirectEventId=C),M}static async _fromIdTokenResponse(e,n,s=!1){const r=new Hs;r.updateFromServerResponse(n);const i=new It({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Io(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];J(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Yg(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Hs;a.updateFromIdToken(s);const l=new It({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Ul(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new Map;function Zt(t){cn(t instanceof Function,"Expected a class definition");let e=ph.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ph.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qg.type="NONE";const gh=Qg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ji(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ji("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await To(this.auth,{idToken:e}).catch(()=>{});return n?It._fromGetAccountInfoResponse(this.auth,n,e):null}return It._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Bs(Zt(gh),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Zt(gh);const o=Ji(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){let f;if(typeof c=="string"){const h=await To(e,{idToken:c}).catch(()=>{});if(!h)break;f=await It._fromGetAccountInfoResponse(e,h,c)}else f=It._fromJSON(e,c);u!==i&&(a=f),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Bs(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Bs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n_(e))return"Blackberry";if(s_(e))return"Webos";if(Xg(e))return"Safari";if((e.includes("chrome/")||Zg(e))&&!e.includes("edge/"))return"Chrome";if(t_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Jg(t=Xe()){return/firefox\//i.test(t)}function Xg(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zg(t=Xe()){return/crios\//i.test(t)}function e_(t=Xe()){return/iemobile/i.test(t)}function t_(t=Xe()){return/android/i.test(t)}function n_(t=Xe()){return/blackberry/i.test(t)}function s_(t=Xe()){return/webos/i.test(t)}function Wc(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RS(t=Xe()){var e;return Wc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kS(){return FT()&&document.documentMode===10}function r_(t=Xe()){return Wc(t)||t_(t)||s_(t)||n_(t)||/windows phone/i.test(t)||e_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t,e=[]){let n;switch(t){case"Browser":n=_h(Xe());break;case"Worker":n=`${_h(Xe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(t,e={}){return jn(t,"GET","/v2/passwordPolicy",ms(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=6;class OS{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mh(this),this.idTokenSubscription=new mh(this),this.beforeStateQueue=new AS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await To(this,{idToken:e}),s=await It._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Io(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(Mn(this));const n=e?Ze(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PS(this),n=new OS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new wi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await SS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hr(t){return Ze(t)}class mh{constructor(e){this.auth=e,this.observer=null,this.addObserver=GT(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MS(t){oa=t}function o_(t){return oa.loadJS(t)}function DS(){return oa.recaptchaEnterpriseScript}function LS(){return oa.gapiScript}function FS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class US{constructor(){this.enterprise=new HS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class HS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const BS="recaptcha-enterprise",a_="NO_RECAPTCHA";class $S{constructor(e){this.type=BS,this.auth=hr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{yS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new mS(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;hh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(a_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new US().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&hh(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=DS();l.length!==0&&(l+=a),o_(l).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function yh(t,e,n,s=!1,r=!1){const i=new $S(t);let o;if(r)o=a_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function vh(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await yh(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await yh(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t,e){const n=Fc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(cs(i,e??{}))return r;Nt(r,"already-initialized")}return n.initialize({options:e})}function jS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function VS(t,e,n){const s=hr(t);J(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=l_(e),{host:o,port:a}=KS(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},c=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){J(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),J(cs(u,s.config.emulator)&&cs(c,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=c,s.settings.appVerificationDisabledForTesting=!0,cr(o)?(xg(`${i}//${o}${l}`),Mg("Auth",!0)):qS()}function l_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KS(t){const e=l_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:wh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:wh(o)}}}function wh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}async function GS(t,e){return jn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(t,e){return ia(t,"POST","/v1/accounts:signInWithPassword",ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e){return ia(t,"POST","/v1/accounts:signInWithEmailLink",ms(t,e))}async function QS(t,e){return ia(t,"POST","/v1/accounts:signInWithEmailLink",ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends jc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ri(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ri(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vh(e,n,"signInWithPassword",zS);case"emailLink":return YS(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vh(e,s,"signUpPassword",GS);case"emailLink":return QS(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e){return ia(t,"POST","/v1/accounts:signInWithIdp",ms(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="http://localhost";class fs extends jc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Uc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new fs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,$s(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:JS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ur(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZS(t){const e=kr(Ar(t)).link,n=e?kr(Ar(e)).deep_link_id:null,s=kr(Ar(t)).deep_link_id;return(s?kr(Ar(s)).link:null)||s||n||e||t}class Vc{constructor(e){var n,s,r,i,o,a;const l=kr(Ar(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(s=l.oobCode)!==null&&s!==void 0?s:null,f=XS((r=l.mode)!==null&&r!==void 0?r:null);J(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ZS(e);try{return new Vc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.providerId=dr.PROVIDER_ID}static credential(e,n){return ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Vc.parseLink(n);return J(s,"argument-error"),ri._fromEmailAndCode(e,s.code,s.tenantId)}}dr.PROVIDER_ID="password";dr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends c_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends bi{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fs._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Tn.credential(n,s)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends bi{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends bi{constructor(){super("twitter.com")}static credential(e,n){return fs._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await It._fromIdTokenResponse(e,s,r),o=Eh(s);return new Zs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Eh(s);return new Zs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Eh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Wn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,So.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new So(e,n,s,r)}}function u_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?So._fromErrorAndOperation(t,i,e,s):i})}async function e0(t,e,n=!1){const s=await si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e,n=!1){const{auth:s}=t;if(Ct(s.app))return Promise.reject(Mn(s));const r="reauthenticate";try{const i=await si(t,u_(s,r,e,t),n);J(i.idToken,s,"internal-error");const o=$c(i.idToken);J(o,s,"internal-error");const{sub:a}=o;return J(t.uid===a,s,"user-mismatch"),Zs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(t,e,n=!1){if(Ct(t.app))return Promise.reject(Mn(t));const s="signIn",r=await u_(t,s,e),i=await Zs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function n0(t,e){return f_(hr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(t){const e=hr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function _N(t,e,n){return Ct(t.app)?Promise.reject(Mn(t)):n0(Ze(t),dr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&s0(t),s})}function r0(t,e,n,s){return Ze(t).onIdTokenChanged(e,n,s)}function i0(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function mN(t,e,n,s){return Ze(t).onAuthStateChanged(e,n,s)}function yN(t){return Ze(t).signOut()}const Ro="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ro,"1"),this.storage.removeItem(Ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=1e3,a0=10;class d_ extends h_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=r_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);kS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,a0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},o0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}d_.type="LOCAL";const l0=d_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_ extends h_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}p_.type="SESSION";const g_=p_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new aa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await c0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Kc("",20);r.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(c),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function f0(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function h0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function d0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function p0(){return __()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="firebaseLocalStorageDb",g0=1,ko="firebaseLocalStorage",y_="fbase_key";class Ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function la(t,e){return t.transaction([ko],e?"readwrite":"readonly").objectStore(ko)}function _0(){const t=indexedDB.deleteDatabase(m_);return new Ci(t).toPromise()}function Hl(){const t=indexedDB.open(m_,g0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ko,{keyPath:y_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ko)?e(s):(s.close(),await _0(),e(await Hl()))})})}async function bh(t,e,n){const s=la(t,!0).put({[y_]:e,value:n});return new Ci(s).toPromise()}async function m0(t,e){const n=la(t,!1).get(e),s=await new Ci(n).toPromise();return s===void 0?null:s.value}function Ch(t,e){const n=la(t,!0).delete(e);return new Ci(n).toPromise()}const y0=800,v0=3;class v_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>v0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return __()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=aa._getInstance(p0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await h0(),!this.activeServiceWorker)return;this.sender=new u0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||d0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hl();return await bh(e,Ro,"1"),await Ch(e,Ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>bh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>m0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ch(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=la(r,!1).getAll();return new Ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}v_.type="LOCAL";const w0=v_;new Ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t,e){return e?Zt(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends jc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function b0(t){return f_(t.auth,new qc(t),t.bypassAuthState)}function C0(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),t0(n,new qc(t),t.bypassAuthState)}async function T0(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),e0(n,new qc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return b0;case"linkViaPopup":case"linkViaRedirect":return T0;case"reauthViaPopup":case"reauthViaRedirect":return C0;default:Nt(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new Ei(2e3,1e4);class ks extends w_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ks.currentPopupAction&&ks.currentPopupAction.cancel(),ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=Kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I0.get())};e()}}ks.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="pendingRedirect",Xi=new Map;class R0 extends w_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Xi.get(this.auth._key());if(!e){try{const s=await k0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Xi.set(this.auth._key(),e)}return this.bypassAuthState||Xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function k0(t,e){const n=N0(e),s=P0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function A0(t,e){Xi.set(t._key(),e)}function P0(t){return Zt(t._redirectPersistence)}function N0(t){return Ji(S0,t.config.apiKey,t.name)}async function O0(t,e,n=!1){if(Ct(t.app))return Promise.reject(Mn(t));const s=hr(t),r=E0(s,e),o=await new R0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=10*60*1e3;class M0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!E_(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=x0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Th(e))}saveEventToCache(e){this.cachedEventUids.add(Th(e)),this.lastProcessedEventTime=Date.now()}}function Th(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function E_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return E_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(t,e={}){return jn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U0=/^https?/;async function H0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await L0(t);for(const n of e)try{if(B0(n))return}catch{}Nt(t,"unauthorized-domain")}function B0(t){const e=Fl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!U0.test(n))return!1;if(F0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=new Ei(3e4,6e4);function Ih(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function W0(t){return new Promise((e,n)=>{var s,r,i;function o(){Ih(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ih(),n(Bt(t,"network-request-failed"))},timeout:$0.get()})}if(!((r=(s=$t().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=$t().gapi)===null||i===void 0)&&i.load)o();else{const a=FS("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},o_(`${LS()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Zi=null,e})}let Zi=null;function j0(t){return Zi=Zi||W0(t),Zi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=new Ei(5e3,15e3),K0="__/auth/iframe",q0="emulator/auth/iframe",G0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y0(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bc(e,q0):`https://${t.config.authDomain}/${K0}`,s={apiKey:e.apiKey,appName:t.name,v:fr},r=z0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ur(s).slice(1)}`}async function Q0(t){const e=await j0(t),n=$t().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:Y0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=$t().setTimeout(()=>{i(o)},V0.get());function l(){$t().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},X0=500,Z0=600,eR="_blank",tR="http://localhost";class Sh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nR(t,e,n,s=X0,r=Z0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},J0),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Xe().toLowerCase();n&&(a=Zg(u)?eR:n),Jg(u)&&(e=e||tR,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[d,g])=>`${h}${d}=${g},`,"");if(RS(u)&&a!=="_self")return sR(e||"",a),new Sh(null);const f=window.open(e||"",a,c);J(f,t,"popup-blocked");try{f.focus()}catch{}return new Sh(f)}function sR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="__/auth/handler",iR="emulator/auth/handler",oR=encodeURIComponent("fac");async function Rh(t,e,n,s,r,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:fr,eventId:r};if(e instanceof c_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries({}))o[c]=f}if(e instanceof bi){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${oR}=${encodeURIComponent(l)}`:"";return`${aR(t)}?${ur(a).slice(1)}${u}`}function aR({config:t}){return t.emulator?Bc(t,iR):`https://${t.authDomain}/${rR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="webStorageSupport";class lR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g_,this._completeRedirectFn=O0,this._overrideRedirectResult=A0}async _openPopup(e,n,s,r){var i;cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rh(e,n,s,Fl(),r);return nR(e,o,Kc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Rh(e,n,s,Fl(),r);return f0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(cn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Q0(e),s=new M0(e);return n.register("authEvent",r=>(J(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qa,{type:qa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[qa];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=H0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return r_()||Xg()||Wc()}}const cR=lR;var kh="@firebase/auth",Ah="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hR(t){Xs(new us("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i_(t)},u=new xS(s,r,i,l);return jS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Xs(new us("auth-internal",e=>{const n=hr(e.getProvider("auth").getImmediate());return(s=>new uR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(kh,Ah,fR(t)),xn(kh,Ah,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=5*60,pR=Og("authIdTokenMaxAge")||dR;let Ph=null;const gR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>pR)return;const r=n==null?void 0:n.token;Ph!==r&&(Ph=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function _R(t=Bg()){const e=Fc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WS(t,{popupRedirectResolver:cR,persistence:[w0,l0,g_]}),s=Og("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=gR(i.toString());i0(n,o,()=>o(n.currentUser)),r0(n,a=>o(a))}}const r=Pg("auth");return r&&VS(n,`http://${r}`),n}function mR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}MS({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Bt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",mR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hR("Browser");var Nh={};const Oh="@firebase/database",xh="1.0.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b_="";function yR(t){b_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ti(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vR(e)}}catch{}return new wR},Zn=C_("localStorage"),ER=C_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Dc("@firebase/database"),bR=function(){let t=1;return function(){return t++}}(),T_=function(t){const e=QT(t),n=new qT;n.update(e);const s=n.digest();return Oc.encodeByteArray(s)},Ti=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ti.apply(null,s):typeof s=="object"?e+=Me(s):e+=s,e+=" "}return e};let $r=null,Mh=!0;const CR=function(t,e){D(!0,"Can't turn on custom loggers persistently."),Ws.logLevel=pe.VERBOSE,$r=Ws.log.bind(Ws)},$e=function(...t){if(Mh===!0&&(Mh=!1,$r===null&&ER.get("logging_enabled")===!0&&CR()),$r){const e=Ti.apply(null,t);$r(e)}},Ii=function(t){return function(...e){$e(t,...e)}},Bl=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ti(...t);Ws.error(e)},un=function(...t){const e=`FIREBASE FATAL ERROR: ${Ti(...t)}`;throw Ws.error(e),new Error(e)},Je=function(...t){const e="FIREBASE WARNING: "+Ti(...t);Ws.warn(e)},TR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},IR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},er="[MIN_NAME]",hs="[MAX_NAME]",ys=function(t,e){if(t===e)return 0;if(t===er||e===hs)return-1;if(e===er||t===hs)return 1;{const n=Dh(t),s=Dh(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},SR=function(t,e){return t===e?0:t<e?-1:1},br=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},zc=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Me(e[s]),n+=":",n+=zc(t[e[s]]);return n+="}",n},I_=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const S_=function(t){D(!Gc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const c=u.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},RR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function AR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const PR=new RegExp("^-?(0*)\\d{1,10}$"),NR=-2147483648,OR=2147483647,Dh=function(t){if(PR.test(t)){const e=Number(t);if(e>=NR&&e<=OR)return e}return null},pr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Je("Exception was thrown by user callback.",n),e},Math.floor(0))}},xR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ct(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Je(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?($e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Je(e)}}class eo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}eo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="5",R_="v",k_="s",A_="r",P_="f",N_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,O_="ls",x_="p",$l="ac",M_="websocket",D_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1,u=null){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function LR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function F_(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===M_)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===D_)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LR(t)&&(n.ns=t.namespace);const r=[];return je(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.counters_={}}incrementCounter(e,n=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return IT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga={},za={};function Qc(t){const e=t.toString();return Ga[e]||(Ga[e]=new FR),Ga[e]}function UR(t,e){const n=t.toString();return za[n]||(za[n]=e()),za[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&pr(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="start",BR="close",$R="pLPCommand",WR="pRTLPCB",U_="id",H_="pw",B_="ser",jR="cb",VR="seg",KR="ts",qR="d",GR="dframe",$_=1870,W_=30,zR=$_-W_,YR=25e3,QR=3e4;class As{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ii(e),this.stats_=Qc(n),this.urlFn=l=>(this.appCheckToken&&(l[$l]=this.appCheckToken),F_(n,D_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new HR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(QR)),IR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jc((...i)=>{const[o,a,l,u,c]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lh)this.id=a,this.password=l;else if(o===BR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Lh]="t",s[B_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[jR]=this.scriptTagHolder.uniqueCallbackIdentifier),s[R_]=Yc,this.transportSessionId&&(s[k_]=this.transportSessionId),this.lastSessionId&&(s[O_]=this.lastSessionId),this.applicationId&&(s[x_]=this.applicationId),this.appCheckToken&&(s[$l]=this.appCheckToken),typeof location<"u"&&location.hostname&&N_.test(location.hostname)&&(s[A_]=P_);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){As.forceAllow_=!0}static forceDisallow(){As.forceDisallow_=!0}static isAvailable(){return As.forceAllow_?!0:!As.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!RR()&&!kR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=kg(n),r=I_(s,zR);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[GR]="t",s[U_]=e,s[H_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jc{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bR(),window[$R+this.uniqueCallbackIdentifier]=e,window[WR+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$e("frame writing exception"),a.stack&&$e(a.stack),$e(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$e("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[U_]=this.myID,e[H_]=this.myPW,e[B_]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+W_+s.length<=$_;){const o=this.pendingSegs.shift();s=s+"&"+VR+r+"="+o.seg+"&"+KR+r+"="+o.ts+"&"+qR+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(YR)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{$e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=16384,XR=45e3;let Ao=null;typeof MozWebSocket<"u"?Ao=MozWebSocket:typeof WebSocket<"u"&&(Ao=WebSocket);class Tt{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ii(this.connId),this.stats_=Qc(n),this.connURL=Tt.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[R_]=Yc,typeof location<"u"&&location.hostname&&N_.test(location.hostname)&&(o[A_]=P_),n&&(o[k_]=n),s&&(o[O_]=s),r&&(o[$l]=r),i&&(o[x_]=i),F_(e,M_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zn.set("previous_websocket_failure",!0);try{let s;UT(),this.mySock=new Ao(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ao!==null&&!Tt.forceDisallow_}static previouslyFailed(){return Zn.isInMemoryStorage||Zn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ti(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=I_(n,JR);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tt.responsesRequiredToBeHealthy=2;Tt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{static get ALL_TRANSPORTS(){return[As,Tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Tt&&Tt.isAvailable();let s=n&&!Tt.previouslyFailed();if(e.webSocketOnly&&(n||Je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Tt];else{const r=this.transports_=[];for(const i of ii.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);ii.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ii.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=6e4,ek=5e3,tk=10*1024,nk=100*1024,Ya="t",Fh="d",sk="s",Uh="r",rk="e",Hh="o",Bh="a",$h="n",Wh="p",ik="h";class ok{constructor(e,n,s,r,i,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ii("c:"+this.id+":"),this.transportManager_=new ii(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Wr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ya in e){const n=e[Ya];n===Bh?this.upgradeIfSecondaryHealthy_():n===Uh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=br("t",e),s=br("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$h,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=br("t",e),s=br("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=br(Ya,e);if(Fh in e){const s=e[Fh];if(n===ik){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===$h){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sk?this.onConnectionShutdown_(s):n===Uh?this.onReset_(s):n===rk?Bl("Server Error: "+s):n===Hh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yc!==s&&Je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Wr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ek))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends V_{static getInstance(){return new Po}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=32,Vh=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new _e("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Un(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function Xc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ak(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function oi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function K_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function Re(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new _e(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Qe(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return Qe(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function lk(t,e){const n=oi(t,0),s=oi(e,0);for(let r=0;r<n.length&&r<s.length;r++){const i=ys(n[r],s[r]);if(i!==0)return i}return n.length===s.length?0:n.length<s.length?-1:1}function q_(t,e){if(Un(t)!==Un(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function gt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Un(t)>Un(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ck{constructor(e,n){this.errorPrefix_=n,this.parts_=oi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ra(this.parts_[s]);G_(this)}}function uk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ra(e),G_(t)}function fk(t){const e=t.parts_.pop();t.byteLength_-=ra(e),t.parts_.length>0&&(t.byteLength_-=1)}function G_(t){if(t.byteLength_>Vh)throw new Error(t.errorPrefix_+"has a key path longer than "+Vh+" bytes ("+t.byteLength_+").");if(t.parts_.length>jh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jh+") or object contains a cycle "+Jn(t))}function Jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends V_{static getInstance(){return new Zc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=1e3,hk=60*5*1e3,Kh=30*1e3,dk=1.3,pk=3e4,gk="server_kill",qh=3;class nn extends j_{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=nn.nextPersistentConnectionId_++,this.log_=Ii("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cr,this.maxReconnectDelay_=hk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Po.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Me(i)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new vi,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;nn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vt(e,"w")){const s=Js(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||KT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=VT(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Bl("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pk&&(this.reconnectDelay_=Cr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+nn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},u=function(f){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?$e("getToken() completed but was canceled"):($e("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new ok(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{Je(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(gk)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Je(f),l())}}}interrupt(e){$e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nl(this.interruptReasons_)&&(this.reconnectDelay_=Cr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>zc(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){$e("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qh&&(this.reconnectDelay_=Kh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){$e("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+b_.replace(/\./g,"-")]=1,Mc()?e["framework.cordova"]=1:Dg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Po.getInstance().currentlyOnline();return Nl(this.interruptReasons_)&&e}}nn.nextPersistentConnectionId_=0;nn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ne(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(er,e),r=new ne(er,n);return this.compare(s,r)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji;class z_ extends ca{static get __EMPTY_NODE(){return ji}static set __EMPTY_NODE(e){ji=e}compare(e,n){return ys(e.name,n.name)}isDefinedOn(e){throw lr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(hs,ji)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,ji)}toString(){return".key"}}const js=new z_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Fe.RED,this.left=r??rt.EMPTY_NODE,this.right=i??rt.EMPTY_NODE}copy(e,n,s,r,i){return new Fe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class _k{copy(e,n,s,r,i){return this}insert(e,n,s){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(e,n=rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vi(this.root_,null,this.comparator_,!0,e)}}rt.EMPTY_NODE=new _k;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t,e){return ys(t.name,e.name)}function eu(t,e){return ys(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl;function yk(t){Wl=t}const Y_=function(t){return typeof t=="number"?"number:"+S_(t):"string:"+t},Q_=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else D(t===Wl||t.isEmpty(),"priority of unexpected type.");D(t===Wl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh;class Le{static set __childrenNodeConstructor(e){Gh=e}static get __childrenNodeConstructor(){return Gh}constructor(e,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Q_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:re(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||Un(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Y_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=S_(this.value_):e+=this.value_,this.lazyHash_=T_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Le.VALUE_TYPE_ORDER.indexOf(n),i=Le.VALUE_TYPE_ORDER.indexOf(s);return D(r>=0,"Unknown leaf type: "+n),D(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J_,X_;function vk(t){J_=t}function wk(t){X_=t}class Ek extends ca{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?ys(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(hs,new Le("[PRIORITY-POST]",X_))}makePost(e,n){const s=J_(e);return new ne(n,new Le("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ae=new Ek;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=Math.log(2);class Ck{constructor(e){const n=i=>parseInt(Math.log(i)/bk,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const No=function(t,e,n,s){t.sort(e);const r=function(l,u){const c=u-l;let f,h;if(c===0)return null;if(c===1)return f=t[l],h=n?n(f):f,new Fe(h,f.node,Fe.BLACK,null,null);{const d=parseInt(c/2,10)+l,g=r(l,d),m=r(d+1,u);return f=t[d],h=n?n(f):f,new Fe(h,f.node,Fe.BLACK,g,m)}},i=function(l){let u=null,c=null,f=t.length;const h=function(g,m){const C=f-g,E=f;f-=g;const w=r(C+1,E),_=t[C],v=n?n(_):_;d(new Fe(v,_.node,m,null,w))},d=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const m=l.nextBitIsOne(),C=Math.pow(2,l.count-(g+1));m?h(C,Fe.BLACK):(h(C,Fe.BLACK),h(C,Fe.RED))}return c},o=new Ck(t.length),a=i(o);return new rt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa;const Ts={};class en{static get Default(){return D(Ts&&Ae,"ChildrenNode.ts has not been loaded"),Qa=Qa||new en({".priority":Ts},{".priority":Ae}),Qa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Js(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof rt?n:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,n){D(e!==js,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(ne.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=No(s,e.getCompare()):a=Ts;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new en(c,u)}addToIndexes(e,n){const s=Eo(this.indexes_,(r,i)=>{const o=Js(this.indexSet_,i);if(D(o,"Missing index implementation for "+i),r===Ts)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ne.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),No(a,o.getCompare())}else return Ts;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new ne(e.name,a))),l.insert(e,e.node)}});return new en(s,this.indexSet_)}removeFromIndexes(e,n){const s=Eo(this.indexes_,r=>{if(r===Ts)return r;{const i=n.get(e.name);return i?r.remove(new ne(e.name,i)):r}});return new en(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr;class X{static get EMPTY_NODE(){return Tr||(Tr=new X(new rt(eu),null,en.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Q_(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tr}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Tr:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Tr:this.priorityNode_;return new X(r,o,i)}}updateChild(e,n){const s=re(e);if(s===null)return n;{D(re(e)!==".priority"||Un(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Ee(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Ae,(o,a)=>{n[o]=a.val(e),s++,i&&X.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Y_(this.getPriority().val())+":"),this.forEachChild(Ae,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":T_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new ne(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,ne.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Si?-1:0}withIndex(e){if(e===js||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===js||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ae),r=n.getIterator(Ae);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===js?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tk extends X{constructor(){super(new rt(eu),X.EMPTY_NODE,en.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Si=new Tk;Object.defineProperties(ne,{MIN:{value:new ne(er,X.EMPTY_NODE)},MAX:{value:new ne(hs,Si)}});z_.__EMPTY_NODE=X.EMPTY_NODE;Le.__childrenNodeConstructor=X;yk(Si);wk(Si);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=!0;function Ne(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Le(n,Ne(e))}if(!(t instanceof Array)&&Ik){const n=[];let s=!1;if(je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ne(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ne(o,l)))}}),n.length===0)return X.EMPTY_NODE;const i=No(n,mk,o=>o.name,eu);if(s){const o=No(n,Ae.getCompare());return new X(i,Ne(e),new en({".priority":o},{".priority":Ae}))}else return new X(i,Ne(e),en.Default)}else{let n=X.EMPTY_NODE;return je(t,(s,r)=>{if(Vt(t,s)&&s.substring(0,1)!=="."){const i=Ne(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Ne(e))}}vk(Ne);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk extends ca{constructor(e){super(),this.indexPath_=e,D(!se(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?ys(e.name,n.name):i}makePost(e,n){const s=Ne(e),r=X.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,r)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Si);return new ne(hs,e)}toString(){return oi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk extends ca{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ys(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=Ne(e);return new ne(n,s)}toString(){return".value"}}const kk=new Rk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t){return{type:"value",snapshotNode:t}}function tr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ai(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function li(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ak(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ai(n,a)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(tr(n,s)):o.trackChildChange(li(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ae,(r,i)=>{n.hasChild(r)||s.trackChildChange(ai(r,i))}),n.isLeafNode()||n.forEachChild(Ae,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(li(r,i,o))}else s.trackChildChange(tr(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.indexedFilter_=new tu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ci.getStartPost_(e),this.endPost_=ci.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new ne(n,s))||(s=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=X.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(X.EMPTY_NODE);const i=this;return n.forEachChild(Ae,(o,a)=>{i.matches(new ne(o,a))||(r=r.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ci(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new ne(n,s))||(s=X.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=X.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(X.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,d)=>f(d,h)}else o=this.index_.getCompare();const a=e;D(a.numChildren()===this.limit_,"");const l=new ne(n,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let h=r.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const d=h==null?1:o(h,l);if(c&&!s.isEmpty()&&d>=0)return i!=null&&i.trackChildChange(li(n,s,f)),a.updateImmediateChild(n,s);{i!=null&&i.trackChildChange(ai(n,f));const m=a.updateImmediateChild(n,X.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(i!=null&&i.trackChildChange(tr(h.name,h.node)),m.updateImmediateChild(h.name,h.node)):m}}else return s.isEmpty()?e:c&&o(u,l)>=0?(i!=null&&(i.trackChildChange(ai(u.name,u.node)),i.trackChildChange(tr(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(u.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:er}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ae}copy(){const e=new nu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nk(t){return t.loadsAllData()?new tu(t.getIndex()):t.hasLimit()?new Pk(t):new ci(t)}function zh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ae?n="$priority":t.index_===kk?n="$value":t.index_===js?n="$key":(D(t.index_ instanceof Sk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Yh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ae&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends j_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Ii("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Oo.getListenId_(e,s),a={};this.listens_[o]=a;const l=zh(e._queryParams);this.restRequest_(i+".json",l,(u,c)=>{let f=c;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,s),Js(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",r(h,null)}})}unlisten(e,n){const s=Oo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=zh(e._queryParams),s=e._path.toString(),r=new vi;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ur(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ti(a.responseText)}catch{Je("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Je("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(){return{value:null,children:new Map}}function em(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,xo());const r=t.children.get(s);e=Ee(e),em(r,e,n)}}function jl(t,e,n){t.value!==null?n(e,t.value):xk(t,(s,r)=>{const i=new _e(e.toString()+"/"+s);jl(r,i,n)})}function xk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&je(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=10*1e3,Dk=30*1e3,Lk=5*60*1e3;class Fk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Mk(e);const s=Qh+(Dk-Qh)*Math.random();Wr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;je(e,(r,i)=>{i>0&&Vt(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Wr(this.reportStats_.bind(this),Math.floor(Math.random()*2*Lk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function su(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ru(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function iu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=St.ACK_USER_WRITE,this.source=su()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new Mo(le(),n,this.revert)}}else return D(re(this.path)===e,"operationForChild called for unrelated child."),new Mo(Ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new ui(this.source,le()):new ui(this.source,Ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=St.OVERWRITE}operationForChild(e){return se(this.path)?new ds(this.source,le(),this.snap.getImmediateChild(e)):new ds(this.source,Ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=St.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new ds(this.source,le(),n.value):new nr(this.source,le(),n)}else return D(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new nr(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Hk(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Ak(o.childName,o.snapshotNode))}),Ir(t,r,"child_removed",e,s,n),Ir(t,r,"child_added",e,s,n),Ir(t,r,"child_moved",i,s,n),Ir(t,r,"child_changed",e,s,n),Ir(t,r,"value",e,s,n),r}function Ir(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>$k(t,a,l)),o.forEach(a=>{const l=Bk(t,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function Bk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $k(t,e,n){if(e.childName==null||n.childName==null)throw lr("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),r=new ne(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e){return{eventCache:t,serverCache:e}}function jr(t,e,n,s){return ua(new Hn(e,n,s),t.serverCache)}function tm(t,e,n,s){return ua(t.eventCache,new Hn(e,n,s))}function Do(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ps(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja;const Wk=()=>(Ja||(Ja=new rt(SR)),Ja);class we{static fromObject(e){let n=new we(null);return je(e,(s,r)=>{n=n.set(new _e(s),r)}),n}constructor(e,n=Wk()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(se(e))return null;{const s=re(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Ee(e),n);return i!=null?{path:Re(new _e(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(Ee(e)):new we(null)}}set(e,n){if(se(e))return new we(n,this.children);{const s=re(e),i=(this.children.get(s)||new we(null)).set(Ee(e),n),o=this.children.insert(s,i);return new we(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const r=s.remove(Ee(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new we(null):new we(this.value,i)}else return this}}get(e){if(se(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(Ee(e)):null}}setTree(e,n){if(se(e))return n;{const s=re(e),i=(this.children.get(s)||new we(null)).setTree(Ee(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new we(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Re(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(se(e))return null;{const i=re(e),o=this.children.get(i);return o?o.findOnPath_(Ee(e),Re(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const r=re(e),i=this.children.get(r);return i?i.foreachOnPath_(Ee(e),Re(n,r),s):new we(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Re(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new we(null))}}function Vr(t,e,n){if(se(e))return new kt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=Qe(r,e);return i=i.updateChild(o,n),new kt(t.writeTree_.set(r,i))}else{const r=new we(n),i=t.writeTree_.setTree(e,r);return new kt(i)}}}function Vl(t,e,n){let s=t;return je(n,(r,i)=>{s=Vr(s,Re(e,r),i)}),s}function Jh(t,e){if(se(e))return kt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new kt(n)}}function Kl(t,e){return vs(t,e)!=null}function vs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qe(n.path,e)):null}function Xh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ae,(s,r)=>{e.push(new ne(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new ne(s,r.value))}),e}function Dn(t,e){if(se(e))return t;{const n=vs(t,e);return n!=null?new kt(new we(n)):new kt(t.writeTree_.subtree(e))}}function ql(t){return t.writeTree_.isEmpty()}function sr(t,e){return nm(le(),t.writeTree_,e)}function nm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(D(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=nm(Re(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Re(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t,e){return om(e,t)}function jk(t,e,n,s,r){D(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Vr(t.visibleWrites,e,n)),t.lastWriteId=s}function Vk(t,e,n,s){D(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Vl(t.visibleWrites,e,n),t.lastWriteId=s}function Kk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function qk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Gk(a,s.path)?r=!1:gt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return zk(t),!0;if(s.snap)t.visibleWrites=Jh(t.visibleWrites,s.path);else{const a=s.children;je(a,l=>{t.visibleWrites=Jh(t.visibleWrites,Re(s.path,l))})}return!0}else return!1}function Gk(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(Re(t.path,n),e))return!0;return!1}function zk(t){t.visibleWrites=sm(t.allWrites,Yk,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Yk(t){return t.visible}function sm(t,e,n){let s=kt.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)gt(n,o)?(a=Qe(n,o),s=Vr(s,a,i.snap)):gt(o,n)&&(a=Qe(o,n),s=Vr(s,le(),i.snap.getChild(a)));else if(i.children){if(gt(n,o))a=Qe(n,o),s=Vl(s,a,i.children);else if(gt(o,n))if(a=Qe(o,n),se(a))s=Vl(s,le(),i.children);else{const l=Js(i.children,re(a));if(l){const u=l.getChild(Ee(a));s=Vr(s,le(),u)}}}else throw lr("WriteRecord should have .snap or .children")}}return s}function rm(t,e,n,s,r){if(!s&&!r){const i=vs(t.visibleWrites,e);if(i!=null)return i;{const o=Dn(t.visibleWrites,e);if(ql(o))return n;if(n==null&&!Kl(o,le()))return null;{const a=n||X.EMPTY_NODE;return sr(o,a)}}}else{const i=Dn(t.visibleWrites,e);if(!r&&ql(i))return n;if(!r&&n==null&&!Kl(i,le()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(gt(u.path,e)||gt(e,u.path))},a=sm(t.allWrites,o,e),l=n||X.EMPTY_NODE;return sr(a,l)}}}function Qk(t,e,n){let s=X.EMPTY_NODE;const r=vs(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ae,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Dn(t.visibleWrites,e);return n.forEachChild(Ae,(o,a)=>{const l=sr(Dn(i,new _e(o)),a);s=s.updateImmediateChild(o,l)}),Xh(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Dn(t.visibleWrites,e);return Xh(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Jk(t,e,n,s,r){D(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Re(e,n);if(Kl(t.visibleWrites,i))return null;{const o=Dn(t.visibleWrites,i);return ql(o)?r.getChild(n):sr(o,r.getChild(n))}}function Xk(t,e,n,s){const r=Re(e,n),i=vs(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Dn(t.visibleWrites,r);return sr(o,s.getNode().getImmediateChild(n))}else return null}function Zk(t,e){return vs(t.visibleWrites,e)}function eA(t,e,n,s,r,i,o){let a;const l=Dn(t.visibleWrites,e),u=vs(l,le());if(u!=null)a=u;else if(n!=null)a=sr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],f=o.getCompare(),h=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=h.getNext();for(;d&&c.length<r;)f(d,s)!==0&&c.push(d),d=h.getNext();return c}else return[]}function tA(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function Lo(t,e,n,s){return rm(t.writeTree,t.treePath,e,n,s)}function ou(t,e){return Qk(t.writeTree,t.treePath,e)}function Zh(t,e,n,s){return Jk(t.writeTree,t.treePath,e,n,s)}function Fo(t,e){return Zk(t.writeTree,Re(t.treePath,e))}function nA(t,e,n,s,r,i){return eA(t.writeTree,t.treePath,e,n,s,r,i)}function au(t,e,n){return Xk(t.writeTree,t.treePath,e,n)}function im(t,e){return om(Re(t.treePath,e),t.writeTree)}function om(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,li(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,ai(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,tr(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,li(s,e.snapshotNode,r.oldSnap));else throw lr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const am=new rA;class lu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Hn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return au(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ps(this.viewCache_),i=nA(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t){return{filter:t}}function oA(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function aA(t,e,n,s,r){const i=new sA;let o,a;if(n.type===St.OVERWRITE){const u=n;u.source.fromUser?o=Gl(t,e,u.path,u.snap,s,r,i):(D(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!se(u.path),o=Uo(t,e,u.path,u.snap,s,r,a,i))}else if(n.type===St.MERGE){const u=n;u.source.fromUser?o=cA(t,e,u.path,u.children,s,r,i):(D(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=zl(t,e,u.path,u.children,s,r,a,i))}else if(n.type===St.ACK_USER_WRITE){const u=n;u.revert?o=hA(t,e,u.path,s,r,i):o=uA(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===St.LISTEN_COMPLETE)o=fA(t,e,n.path,s,i);else throw lr("Unknown operation type: "+n.type);const l=i.getChanges();return lA(e,o,l),{viewCache:o,changes:l}}function lA(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Do(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(Z_(Do(e)))}}function lm(t,e,n,s,r,i){const o=e.eventCache;if(Fo(s,n)!=null)return e;{let a,l;if(se(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ps(e),c=u instanceof X?u:X.EMPTY_NODE,f=ou(s,c);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=Lo(s,ps(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=re(n);if(u===".priority"){D(Un(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const f=Zh(s,n,c,l);f!=null?a=t.filter.updatePriority(c,f):a=o.getNode()}else{const c=Ee(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=Zh(s,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(u).updateChild(c,h):f=o.getNode().getImmediateChild(u)}else f=au(s,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,c,r,i):a=o.getNode()}}return jr(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Uo(t,e,n,s,r,i,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(se(n))u=c.updateFullNode(l.getNode(),s,null);else if(c.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,s);u=c.updateFullNode(l.getNode(),d,null)}else{const d=re(n);if(!l.isCompleteForPath(n)&&Un(n)>1)return e;const g=Ee(n),C=l.getNode().getImmediateChild(d).updateChild(g,s);d===".priority"?u=c.updatePriority(l.getNode(),C):u=c.updateChild(l.getNode(),d,C,g,am,null)}const f=tm(e,u,l.isFullyInitialized()||se(n),c.filtersNodes()),h=new lu(r,f,i);return lm(t,f,n,r,h,a)}function Gl(t,e,n,s,r,i,o){const a=e.eventCache;let l,u;const c=new lu(r,e,i);if(se(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=jr(e,u,!0,t.filter.filtersNodes());else{const f=re(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),l=jr(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=Ee(n),d=a.getNode().getImmediateChild(f);let g;if(se(h))g=s;else{const m=c.getCompleteChild(f);m!=null?Xc(h)===".priority"&&m.getChild(K_(h)).isEmpty()?g=m:g=m.updateChild(h,s):g=X.EMPTY_NODE}if(d.equals(g))l=e;else{const m=t.filter.updateChild(a.getNode(),f,g,h,c,o);l=jr(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ed(t,e){return t.eventCache.isCompleteForChild(e)}function cA(t,e,n,s,r,i,o){let a=e;return s.foreach((l,u)=>{const c=Re(n,l);ed(e,re(c))&&(a=Gl(t,a,c,u,r,i,o))}),s.foreach((l,u)=>{const c=Re(n,l);ed(e,re(c))||(a=Gl(t,a,c,u,r,i,o))}),a}function td(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function zl(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;se(n)?u=s:u=new we(null).setTree(n,s);const c=e.serverCache.getNode();return u.children.inorderTraversal((f,h)=>{if(c.hasChild(f)){const d=e.serverCache.getNode().getImmediateChild(f),g=td(t,d,h);l=Uo(t,l,new _e(f),g,r,i,o,a)}}),u.children.inorderTraversal((f,h)=>{const d=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!c.hasChild(f)&&!d){const g=e.serverCache.getNode().getImmediateChild(f),m=td(t,g,h);l=Uo(t,l,new _e(f),m,r,i,o,a)}}),l}function uA(t,e,n,s,r,i,o){if(Fo(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Uo(t,e,n,l.getNode().getChild(n),r,i,a,o);if(se(n)){let u=new we(null);return l.getNode().forEachChild(js,(c,f)=>{u=u.set(new _e(c),f)}),zl(t,e,n,u,r,i,a,o)}else return e}else{let u=new we(null);return s.foreach((c,f)=>{const h=Re(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),zl(t,e,n,u,r,i,a,o)}}function fA(t,e,n,s,r){const i=e.serverCache,o=tm(e,i.getNode(),i.isFullyInitialized()||se(n),i.isFiltered());return lm(t,o,n,s,am,r)}function hA(t,e,n,s,r,i){let o;if(Fo(s,n)!=null)return e;{const a=new lu(s,e,r),l=e.eventCache.getNode();let u;if(se(n)||re(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Lo(s,ps(e));else{const f=e.serverCache.getNode();D(f instanceof X,"serverChildren would be complete if leaf node"),c=ou(s,f)}c=c,u=t.filter.updateFullNode(l,c,i)}else{const c=re(n);let f=au(s,c,e.serverCache);f==null&&e.serverCache.isCompleteForChild(c)&&(f=l.getImmediateChild(c)),f!=null?u=t.filter.updateChild(l,c,f,Ee(n),a,i):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,X.EMPTY_NODE,Ee(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Lo(s,ps(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Fo(s,le())!=null,jr(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new tu(s.getIndex()),i=Nk(s);this.processor_=iA(i);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(X.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(X.EMPTY_NODE,a.getNode(),null),c=new Hn(l,o.isFullyInitialized(),r.filtersNodes()),f=new Hn(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=ua(f,c),this.eventGenerator_=new Uk(this.query_)}get query(){return this.query_}}function pA(t){return t.viewCache_.serverCache.getNode()}function gA(t){return Do(t.viewCache_)}function _A(t,e){const n=ps(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function nd(t){return t.eventRegistrations_.length===0}function mA(t,e){t.eventRegistrations_.push(e)}function sd(t,e,n){const s=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function rd(t,e,n,s){e.type===St.MERGE&&e.source.queryId!==null&&(D(ps(t.viewCache_),"We should always have a full cache before handling merges"),D(Do(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=aA(t.processor_,r,e,n,s);return oA(t.processor_,i.viewCache),D(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,cm(t,i.changes,i.viewCache.eventCache.getNode(),null)}function yA(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ae,(i,o)=>{s.push(tr(i,o))}),n.isFullyInitialized()&&s.push(Z_(n.getNode())),cm(t,s,n.getNode(),e)}function cm(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return Hk(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho;class um{constructor(){this.views=new Map}}function vA(t){D(!Ho,"__referenceConstructor has already been defined"),Ho=t}function wA(){return D(Ho,"Reference.ts has not been loaded"),Ho}function EA(t){return t.views.size===0}function cu(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return D(i!=null,"SyncTree gave us an op for an invalid query."),rd(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(rd(o,e,n,s));return i}}function fm(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Lo(n,r?s:null),l=!1;a?l=!0:s instanceof X?(a=ou(n,s),l=!1):(a=X.EMPTY_NODE,l=!1);const u=ua(new Hn(a,l,!1),new Hn(s,r,!1));return new dA(e,u)}return o}function bA(t,e,n,s,r,i){const o=fm(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),mA(o,n),yA(o,n)}function CA(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const a=Bn(t);if(r==="default")for(const[l,u]of t.views.entries())o=o.concat(sd(u,n,s)),nd(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=t.views.get(r);l&&(o=o.concat(sd(l,n,s)),nd(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Bn(t)&&i.push(new(wA())(e._repo,e._path)),{removed:i,events:o}}function hm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ln(t,e){let n=null;for(const s of t.views.values())n=n||_A(s,e);return n}function dm(t,e){if(e._queryParams.loadsAllData())return ha(t);{const s=e._queryIdentifier;return t.views.get(s)}}function pm(t,e){return dm(t,e)!=null}function Bn(t){return ha(t)!=null}function ha(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo;function TA(t){D(!Bo,"__referenceConstructor has already been defined"),Bo=t}function IA(){return D(Bo,"Reference.ts has not been loaded"),Bo}let SA=1;class id{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=tA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gm(t,e,n,s,r){return jk(t.pendingWriteTree_,e,n,s,r),r?gr(t,new ds(su(),e,n)):[]}function RA(t,e,n,s){Vk(t.pendingWriteTree_,e,n,s);const r=we.fromObject(n);return gr(t,new nr(su(),e,r))}function kn(t,e,n=!1){const s=Kk(t.pendingWriteTree_,e);if(qk(t.pendingWriteTree_,e)){let i=new we(null);return s.snap!=null?i=i.set(le(),!0):je(s.children,o=>{i=i.set(new _e(o),!0)}),gr(t,new Mo(s.path,i,n))}else return[]}function Ri(t,e,n){return gr(t,new ds(ru(),e,n))}function kA(t,e,n){const s=we.fromObject(n);return gr(t,new nr(ru(),e,s))}function AA(t,e){return gr(t,new ui(ru(),e))}function PA(t,e,n){const s=fu(t,n);if(s){const r=hu(s),i=r.path,o=r.queryId,a=Qe(i,e),l=new ui(iu(o),a);return du(t,i,l)}else return[]}function _m(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||pm(o,e))){const l=CA(o,e,n,s);EA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!r){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(h,d)=>Bn(d));if(c&&!f){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const d=MA(h);for(let g=0;g<d.length;++g){const m=d[g],C=m.query,E=wm(t,m);t.listenProvider_.startListening(Kr(C),fi(t,C),E.hashFn,E.onComplete)}}}!f&&u.length>0&&!s&&(c?t.listenProvider_.stopListening(Kr(e),null):u.forEach(h=>{const d=t.queryToTagMap.get(da(h));t.listenProvider_.stopListening(Kr(h),d)}))}DA(t,u)}return a}function mm(t,e,n,s){const r=fu(t,s);if(r!=null){const i=hu(r),o=i.path,a=i.queryId,l=Qe(o,e),u=new ds(iu(a),l,n);return du(t,o,u)}else return[]}function NA(t,e,n,s){const r=fu(t,s);if(r){const i=hu(r),o=i.path,a=i.queryId,l=Qe(o,e),u=we.fromObject(n),c=new nr(iu(a),l,u);return du(t,o,c)}else return[]}function OA(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(h,d)=>{const g=Qe(h,r);i=i||Ln(d,g),o=o||Bn(d)});let a=t.syncPointTree_.get(r);a?(o=o||Bn(a),i=i||Ln(a,le())):(a=new um,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=X.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((d,g)=>{const m=Ln(g,le());m&&(i=i.updateImmediateChild(d,m))}));const u=pm(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=da(e);D(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const d=LA();t.queryToTagMap.set(h,d),t.tagToQueryMap.set(d,h)}const c=fa(t.pendingWriteTree_,r);let f=bA(a,e,n,c,i,l);if(!u&&!o&&!s){const h=dm(a,e);f=f.concat(FA(t,e,h))}return f}function uu(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qe(o,e),u=Ln(a,l);if(u)return u});return rm(r,e,i,n,!0)}function xA(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const f=Qe(u,n);s=s||Ln(c,f)});let r=t.syncPointTree_.get(n);r?s=s||Ln(r,le()):(r=new um,t.syncPointTree_=t.syncPointTree_.set(n,r));const i=s!=null,o=i?new Hn(s,!0,!1):null,a=fa(t.pendingWriteTree_,e._path),l=fm(r,e,a,i?o.getNode():X.EMPTY_NODE,i);return gA(l)}function gr(t,e){return ym(e,t.syncPointTree_,null,fa(t.pendingWriteTree_,le()))}function ym(t,e,n,s){if(se(t.path))return vm(t,e,n,s);{const r=e.get(le());n==null&&r!=null&&(n=Ln(r,le()));let i=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=im(s,o);i=i.concat(ym(a,l,u,c))}return r&&(i=i.concat(cu(r,t,s,n))),i}}function vm(t,e,n,s){const r=e.get(le());n==null&&r!=null&&(n=Ln(r,le()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=im(s,o),c=t.operationForChild(o);c&&(i=i.concat(vm(c,a,l,u)))}),r&&(i=i.concat(cu(r,t,s,n))),i}function wm(t,e){const n=e.query,s=fi(t,n);return{hashFn:()=>(pA(e)||X.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?PA(t,n._path,s):AA(t,n._path);{const i=AR(r,n);return _m(t,n,null,i)}}}}function fi(t,e){const n=da(e);return t.queryToTagMap.get(n)}function da(t){return t._path.toString()+"$"+t._queryIdentifier}function fu(t,e){return t.tagToQueryMap.get(e)}function hu(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function du(t,e,n){const s=t.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const r=fa(t.pendingWriteTree_,e);return cu(s,n,r,null)}function MA(t){return t.fold((e,n,s)=>{if(n&&Bn(n))return[ha(n)];{let r=[];return n&&(r=hm(n)),je(s,(i,o)=>{r=r.concat(o)}),r}})}function Kr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(IA())(t._repo,t._path):t}function DA(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=da(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function LA(){return SA++}function FA(t,e,n){const s=e._path,r=fi(t,e),i=wm(t,n),o=t.listenProvider_.startListening(Kr(e),r,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(s);if(r)D(!Bn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,f)=>{if(!se(u)&&c&&Bn(c))return[ha(c).query];{let h=[];return c&&(h=h.concat(hm(c).map(d=>d.query))),je(f,(d,g)=>{h=h.concat(g)}),h}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Kr(c),fi(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pu(n)}node(){return this.node_}}class gu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Re(this.path_,e);return new gu(this.syncTree_,n)}node(){return uu(this.syncTree_,this.path_)}}const UA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},od=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return HA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return BA(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},HA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},BA=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const r=e.node();if(D(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},Em=function(t,e,n,s){return _u(e,new gu(n,t),s)},bm=function(t,e,n){return _u(t,new pu(e),n)};function _u(t,e,n){const s=t.getPriority().val(),r=od(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=od(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Le(a,Ne(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Le(r))),o.forEachChild(Ae,(a,l)=>{const u=_u(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function yu(t,e){let n=e instanceof _e?e:new _e(e),s=t,r=re(n);for(;r!==null;){const i=Js(s.node.children,r)||{children:{},childCount:0};s=new mu(r,s,i),n=Ee(n),r=re(n)}return s}function _r(t){return t.node.value}function Cm(t,e){t.node.value=e,Yl(t)}function Tm(t){return t.node.childCount>0}function $A(t){return _r(t)===void 0&&!Tm(t)}function pa(t,e){je(t.node.children,(n,s)=>{e(new mu(n,t,s))})}function Im(t,e,n,s){n&&e(t),pa(t,r=>{Im(r,e,!0)})}function WA(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ki(t){return new _e(t.parent===null?t.name:ki(t.parent)+"/"+t.name)}function Yl(t){t.parent!==null&&jA(t.parent,t.name,t)}function jA(t,e,n){const s=$A(n),r=Vt(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,Yl(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Yl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=/[\[\].#$\/\u0000-\u001F\u007F]/,KA=/[\[\].#$\u0000-\u001F\u007F]/,Xa=10*1024*1024,vu=function(t){return typeof t=="string"&&t.length!==0&&!VA.test(t)},Sm=function(t){return typeof t=="string"&&t.length!==0&&!KA.test(t)},qA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sm(t)},GA=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Gc(t)||t&&typeof t=="object"&&Vt(t,".sv")},zA=function(t,e,n,s){ga(sa(t,"value"),e,n)},ga=function(t,e,n){const s=n instanceof _e?new ck(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Jn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Jn(s)+" with contents = "+e.toString());if(Gc(e))throw new Error(t+"contains "+e.toString()+" "+Jn(s));if(typeof e=="string"&&e.length>Xa/3&&ra(e)>Xa)throw new Error(t+"contains a string greater than "+Xa+" utf8 bytes "+Jn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(je(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!vu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Jn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uk(s,o),ga(t,a,s),fk(s)}),r&&i)throw new Error(t+' contains ".value" child '+Jn(s)+" in addition to actual children.")}},YA=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const i=oi(s);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!vu(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(lk);let r=null;for(n=0;n<e.length;n++){if(s=e[n],r!==null&&gt(r,s))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+s.toString());r=s}},QA=function(t,e,n,s){const r=sa(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const i=[];je(e,(o,a)=>{const l=new _e(o);if(ga(r,a,Re(n,l)),Xc(l)===".priority"&&!GA(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),YA(r,i)},Rm=function(t,e,n,s){if(!Sm(n))throw new Error(sa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},JA=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Rm(t,e,n)},km=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},XA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qA(n))throw new Error(sa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wu(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!q_(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function wt(t,e,n){wu(t,n),eP(t,s=>gt(s,e)||gt(e,s))}function eP(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(tP(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();$r&&$e("event: "+n.toString()),pr(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="repo_interrupt",sP=25;class rP{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xo(),this.transactionQueueTree_=new mu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iP(t,e,n){if(t.stats_=Qc(t.repoInfo_),t.forceRestClient_||xR())t.server_=new Oo(t.repoInfo_,(s,r,i,o)=>{ad(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ld(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new nn(t.repoInfo_,e,(s,r,i,o)=>{ad(t,s,r,i,o)},s=>{ld(t,s)},s=>{aP(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=UR(t.repoInfo_,()=>new Fk(t.stats_,t.server_)),t.infoData_=new Ok,t.infoSyncTree_=new id({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ri(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Eu(t,"connected",!1),t.serverSyncTree_=new id({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const u=o(a,l);wt(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function oP(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function _a(t){return UA({timestamp:oP(t)})}function ad(t,e,n,s,r){t.dataUpdateCount++;const i=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=Eo(n,u=>Ne(u));o=NA(t.serverSyncTree_,i,l,r)}else{const l=Ne(n);o=mm(t.serverSyncTree_,i,l,r)}else if(s){const l=Eo(n,u=>Ne(u));o=kA(t.serverSyncTree_,i,l)}else{const l=Ne(n);o=Ri(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=rr(t,i)),wt(t.eventQueue_,a,o)}function ld(t,e){Eu(t,"connected",e),e===!1&&fP(t)}function aP(t,e){je(e,(n,s)=>{Eu(t,n,s)})}function Eu(t,e,n){const s=new _e("/.info/"+e),r=Ne(n);t.infoData_.updateSnapshot(s,r);const i=Ri(t.infoSyncTree_,s,r);wt(t.eventQueue_,s,i)}function bu(t){return t.nextWriteId_++}function lP(t,e,n){const s=xA(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(r=>{const i=Ne(r).withIndex(e._queryParams.getIndex());OA(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ri(t.serverSyncTree_,e._path,i);else{const a=fi(t.serverSyncTree_,e);o=mm(t.serverSyncTree_,e._path,i,a)}return wt(t.eventQueue_,e._path,o),_m(t.serverSyncTree_,e,n,null,!0),i},r=>(Ai(t,"get for query "+Me(e)+" failed: "+r),Promise.reject(new Error(r))))}function cP(t,e,n,s,r){Ai(t,"set",{path:e.toString(),value:n,priority:s});const i=_a(t),o=Ne(n,s),a=uu(t.serverSyncTree_,e),l=bm(o,a,i),u=bu(t),c=gm(t.serverSyncTree_,e,l,u,!0);wu(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,d)=>{const g=h==="ok";g||Je("set at "+e+" failed: "+h);const m=kn(t.serverSyncTree_,u,!g);wt(t.eventQueue_,e,m),Ql(t,r,h,d)});const f=Tu(t,e);rr(t,f),wt(t.eventQueue_,f,[])}function uP(t,e,n,s){Ai(t,"update",{path:e.toString(),value:n});let r=!0;const i=_a(t),o={};if(je(n,(a,l)=>{r=!1,o[a]=Em(Re(e,a),Ne(l),t.serverSyncTree_,i)}),r)$e("update() called with empty data.  Don't do anything."),Ql(t,s,"ok",void 0);else{const a=bu(t),l=RA(t.serverSyncTree_,e,o,a);wu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const f=u==="ok";f||Je("update at "+e+" failed: "+u);const h=kn(t.serverSyncTree_,a,!f),d=h.length>0?rr(t,e):e;wt(t.eventQueue_,d,h),Ql(t,s,u,c)}),je(n,u=>{const c=Tu(t,Re(e,u));rr(t,c)}),wt(t.eventQueue_,e,[])}}function fP(t){Ai(t,"onDisconnectEvents");const e=_a(t),n=xo();jl(t.onDisconnect_,le(),(r,i)=>{const o=Em(r,i,t.serverSyncTree_,e);em(n,r,o)});let s=[];jl(n,le(),(r,i)=>{s=s.concat(Ri(t.serverSyncTree_,r,i));const o=Tu(t,r);rr(t,o)}),t.onDisconnect_=xo(),wt(t.eventQueue_,le(),s)}function hP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nP)}function Ai(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),$e(n,...e)}function Ql(t,e,n,s){e&&pr(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function Am(t,e,n){return uu(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function Cu(t,e=t.transactionQueueTree_){if(e||ma(t,e),_r(e)){const n=Nm(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&dP(t,ki(e),n)}else Tm(e)&&pa(e,n=>{Cu(t,n)})}function dP(t,e,n){const s=n.map(u=>u.currentWriteId),r=Am(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const c=n[u];D(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const f=Qe(e,c.path);i=i.updateChild(f,c.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ai(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(kn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ma(t,yu(t.transactionQueueTree_,e)),Cu(t,t.transactionQueueTree_),wt(t.eventQueue_,e,c);for(let h=0;h<f.length;h++)pr(f[h])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Je("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}rr(t,e)}},o)}function rr(t,e){const n=Pm(t,e),s=ki(n),r=Nm(t,n);return pP(t,r,s),s}function pP(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Qe(n,l.path);let c=!1,f;if(D(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,f=l.abortReason,r=r.concat(kn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=sP)c=!0,f="maxretry",r=r.concat(kn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Am(t,l.path,o);l.currentInputSnapshot=h;const d=e[a].update(h.val());if(d!==void 0){ga("transaction failed: Data returned ",d,l.path);let g=Ne(d);typeof d=="object"&&d!=null&&Vt(d,".priority")||(g=g.updatePriority(h.getPriority()));const C=l.currentWriteId,E=_a(t),w=bm(g,h,E);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=w,l.currentWriteId=bu(t),o.splice(o.indexOf(C),1),r=r.concat(gm(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),r=r.concat(kn(t.serverSyncTree_,C,!0))}else c=!0,f="nodata",r=r.concat(kn(t.serverSyncTree_,l.currentWriteId,!0))}wt(t.eventQueue_,n,r),r=[],c&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}ma(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)pr(s[a]);Cu(t,t.transactionQueueTree_)}function Pm(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&_r(s)===void 0;)s=yu(s,n),e=Ee(e),n=re(e);return s}function Nm(t,e){const n=[];return Om(t,e,n),n.sort((s,r)=>s.order-r.order),n}function Om(t,e,n){const s=_r(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);pa(e,r=>{Om(t,r,n)})}function ma(t,e){const n=_r(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,Cm(e,n.length>0?n:void 0)}pa(e,s=>{ma(t,s)})}function Tu(t,e){const n=ki(Pm(t,e)),s=yu(t.transactionQueueTree_,e);return WA(s,r=>{Za(t,r)}),Za(t,s),Im(s,r=>{Za(t,r)}),n}function Za(t,e){const n=_r(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(kn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Cm(e,void 0):n.length=i+1,wt(t.eventQueue_,ki(e),r);for(let o=0;o<s.length;o++)pr(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function _P(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Je(`Invalid query segment '${n}' in query '${t}'`)}return e}const cd=function(t,e){const n=mP(t),s=n.namespace;n.domain==="firebase.com"&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TR();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new L_(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new _e(n.pathString)}},mP=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(c,f)),c<f&&(r=gP(t.substring(c,f)));const h=_P(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const d=e.slice(0,u);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=s}"ns"in h&&(i=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class vP{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return se(this._path)?null:Xc(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=Yh(this._queryParams),n=zc(e);return n==="{}"?"default":n}get _queryObject(){return Yh(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof Iu))return!1;const n=this._repo===e._repo,s=q_(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+ak(this._path)}}class dn extends Iu{constructor(e,n){super(e,n,new nu,!1)}get parent(){const e=K_(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class hi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=Jl(this.ref,e);return new hi(this._node.getChild(n),s,Ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new hi(r,Jl(this.ref,s),Ae)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vN(t,e){return t=Ze(t),t._checkNotDeleted("ref"),e!==void 0?Jl(t._root,e):t._root}function Jl(t,e){return t=Ze(t),re(t._path)===null?JA("child","path",e):Rm("child","path",e),new dn(t._repo,Re(t._path,e))}function wN(t){return km("remove",t._path),EP(t,null)}function EP(t,e){t=Ze(t),km("set",t._path),zA("set",e,t._path);const n=new vi;return cP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function EN(t,e){QA("update",e,t._path);const n=new vi;return uP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function bN(t){t=Ze(t);const e=new wP(()=>{}),n=new Su(e);return lP(t._repo,t,n).then(s=>new hi(s,new dn(t._repo,t._path),t._queryParams.getIndex()))}class Su{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new yP("value",this,new hi(e.snapshotNode,new dn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vP(this,e,n):null}matches(e){return e instanceof Su?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}vA(dn);TA(dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP="FIREBASE_DATABASE_EMULATOR_HOST",Xl={};let CP=!1;function TP(t,e,n,s){const r=e.lastIndexOf(":"),i=e.substring(0,r),o=cr(i);t.repoInfo_=new L_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function IP(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$e("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=cd(i,r),a=o.repoInfo,l;typeof process<"u"&&Nh&&(l=Nh[bP]),l?(i=`http://${l}?ns=${a.namespace}`,o=cd(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new DR(t.name,t.options,e);XA("Invalid Firebase Database URL",o),se(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const c=RP(a,t,u,new MR(t,n));return new kP(c,t)}function SP(t,e){const n=Xl[e];(!n||n[t.key]!==t)&&un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hP(t),delete n[t.key]}function RP(t,e,n,s){let r=Xl[e.name];r||(r={},Xl[e.name]=r);let i=r[t.toURLString()];return i&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new rP(t,CP,n,s),r[t.toURLString()]=i,i}class kP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function AP(t=Bg(),e){const n=Fc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=NT("database");s&&PP(n,...s)}return n}function PP(t,e,n,s={}){t=Ze(t),t._checkNotDeleted("useEmulator");const r=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(r===t._repoInternal.repoInfo_.host&&cs(s,i.repoInfo_.emulatorOptions))return;un("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new eo(eo.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:OT(s.mockUserToken,t.app.options.projectId);o=new eo(a)}cr(e)&&(xg(e),Mg("Database",!0)),TP(i,r,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){yR(fr),Xs(new us("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return IP(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),xn(Oh,xh,t),xn(Oh,xh,"esm2017")}nn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};nn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};NP();const OP=jt(()=>{try{const e=Hg({apiKey:"AIzaSyDZ35D_lzSnyA3XjDmFQK2R3exf9MfOhtE",authDomain:"guzel-1f032.firebaseapp.com",databaseURL:"https://guzel-1f032-default-rtdb.firebaseio.com",projectId:"guzel-1f032",storageBucket:"guzel-1f032.firebasestorage.app",messagingSenderId:"807520094966",appId:"1:807520094966:web:6f793f4461f093d48d3ad7",measurementId:"G-50HV2FT04R"}),n=_R(e),s=AP(e);return{provide:{firebase:{auth:n,database:s,app:e}}}}catch(t){return console.error("Error initializing Firebase:",t),{provide:{firebase:null}}}}),xP=[Hb,Vb,hT,dT,pT,gT,mT,yT,ET,OP],CN=Symbol.for("nuxt:client-only"),Ki="<div></div>",el=new WeakMap;function MP(t){if(el.has(t))return el.get(t);const e={...t};return e.render?e.render=(n,s,r,i,o,a)=>{var l;if(i.mounted$??n.mounted$){const u=(l=t.render)==null?void 0:l.bind(n)(n,s,r,i,o,a);return u.children===null||typeof u.children=="string"?mt(u):ke(u)}return Ha(n._.vnode.el,Ki)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else>${Ki}</template>
    `),e.setup=(n,s)=>{var l;const r=Pe(),i=an(r.isHydrating===!1),o=mi();if(r.isHydrating){const u={...o.attrs},c=DP(o);for(const f in u)delete o.attrs[f];Yr(()=>{Object.assign(o.attrs,u),o.vnode.dirs=c})}Yr(()=>{i.value=!0});const a=((l=t.setup)==null?void 0:l.call(t,n,s))||{};return nc(a)?Promise.resolve(a).then(u=>typeof u!="function"?(u||(u={}),u.mounted$=i,u):(...c)=>{if(i.value||!r.isHydrating){const f=u(...c);return f.children===null||typeof f.children=="string"?mt(f):ke(f)}return Ha(o==null?void 0:o.vnode.el,Ki)}):typeof a=="function"?(...u)=>{if(i.value){const c=a(...u);return c.children===null||typeof c.children=="string"?mt(c,s.attrs):ke(c,s.attrs)}return Ha(o==null?void 0:o.vnode.el,Ki)}:Object.assign(a,{mounted$:i})},el.set(t,e),e}function DP(t){if(!t||!t.vnode.dirs)return null;const e=t.vnode.dirs;return t.vnode.dirs=null,e}function LP(t={}){var u;const e=an(""),n=an(t.politeness||"polite"),s=ig();function r(c="",f="polite"){e.value=c,n.value=f}function i(c){return r(c,"polite")}function o(c){return r(c,"assertive")}function a(){var c;r((c=document==null?void 0:document.title)==null?void 0:c.trim(),n.value)}function l(){var c;(c=s==null?void 0:s.hooks)==null||c.removeHook("dom:rendered",a)}return a(),(u=s==null?void 0:s.hooks)==null||u.hook("dom:rendered",()=>{a()}),{_cleanup:l,message:e,politeness:n,set:r,polite:i,assertive:o}}function FP(t={}){const e=Pe(),n=e._routeAnnouncer||(e._routeAnnouncer=LP(t));return t.politeness!==n.politeness.value&&(n.politeness.value=t.politeness||"polite"),ic()&&(e._routeAnnouncerDeps||(e._routeAnnouncerDeps=0),e._routeAnnouncerDeps++,Xm(()=>{e._routeAnnouncerDeps--,e._routeAnnouncerDeps===0&&(n._cleanup(),delete e._routeAnnouncer)})),n}const UP=fn({name:"NuxtRouteAnnouncer",props:{atomic:{type:Boolean,default:!1},politeness:{type:String,default:"polite"}},setup(t,{slots:e,expose:n}){const{set:s,polite:r,assertive:i,message:o,politeness:a}=FP({politeness:t.politeness});return n({set:s,polite:r,assertive:i,message:o,politeness:a}),()=>ke("span",{class:"nuxt-route-announcer",style:{position:"absolute"}},ke("span",{role:"alert","aria-live":a.value,"aria-atomic":t.atomic,style:{border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",width:"1px",overflow:"hidden",position:"absolute","white-space":"nowrap","word-wrap":"normal",margin:"-1px",padding:"0"}},e.default?e.default({message:o.value}):o.value))}}),xm=(t="RouteProvider")=>fn({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,s=e.route,r={};for(const i in e.route)Object.defineProperty(r,i,{get:()=>n===e.renderKey?e.route[i]:s[i],enumerable:!0});return Pn(ls,Ut(r)),()=>e.vnode?ke(e.vnode,{ref:e.vnodeRef}):e.vnode}}),HP=xm(),ud=new WeakMap,BP=fn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:s}){const r=Pe(),i=tn(),o=We(ls,null);let a;s({pageRef:i});const l=We(eg,null);let u;const c=r.deferHydration();if(r.isHydrating){const h=r.hooks.hookOnce("app:error",c);ut().beforeEach(h)}t.pageKey&&Ls(()=>t.pageKey,(h,d)=>{h!==d&&r.callHook("page:loading:start")});let f=!1;{const h=ut().beforeResolve(()=>{f=!1});_i(()=>{h()})}return()=>ke(Eg,{name:t.name,route:t.route,...e},{default:h=>{const d=WP(o,h.route,h.Component),g=o&&o.matched.length===h.route.matched.length;if(!h.Component){if(u&&!g)return u;c();return}if(u&&l&&!l.isCurrent(h.route))return u;if(d&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const m=Pl(h,t.pageKey),C=jP(o,h.route,h.Component);!r.isHydrating&&a===m&&!C&&as(()=>{f=!0,r.callHook("page:loading:end")}),a=m;const E=!!(t.transition??h.route.meta.pageTransition??Ef),w=E&&$P([t.transition,h.route.meta.pageTransition,Ef,{onBeforeLeave(){r._runningTransition=!0},onAfterLeave(){delete r._runningTransition,r.callHook("page:transition:finish",h.Component)}}]),_=t.keepalive??h.route.meta.keepalive??RE;return u=Cg(E&&w,JC(_,ke(vc,{suspensible:!0,onPending:()=>r.callHook("page:start",h.Component),onResolve:()=>{as(()=>r.callHook("page:finish",h.Component).then(()=>{if(!f&&!C)return f=!0,r.callHook("page:loading:end")}).finally(c))}},{default:()=>{const v={key:m||void 0,vnode:n.default?VP(n.default,h):h.Component,route:h.route,renderKey:m||void 0,trackRootNodes:E,vnodeRef:i};if(!_)return ke(HP,v);const b=h.Component.type,S=b;let k=ud.get(S);return k||(k=xm(b.name||b.__name),ud.set(S,k)),ke(k,v)}}))).default(),u}})}});function $P(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?Pc(n.onAfterLeave):void 0}));return Xp(...e)}function WP(t,e,n){if(!t)return!1;const s=e.matched.findIndex(r=>{var i;return((i=r.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!s||s===-1?!1:e.matched.slice(0,s).some((r,i)=>{var o,a,l;return((o=r.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Pl({route:e,Component:n})!==Pl({route:t,Component:n})}function jP(t,e,n){return t?e.matched.findIndex(r=>{var i;return((i=r.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}function VP(t,e){const n=t(e);return n.length===1?ke(n[0]):ke(lt,void 0,n)}const KP=fn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>ke(Rn[t.name],t.layoutProps,e.slots)}}),qP={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},GP=fn({name:"NuxtLayout",inheritAttrs:!1,props:qP,setup(t,e){const n=Pe(),s=We(ls),i=!s||s===Zo()?bg():s,o=pt(()=>{let c=be(t.name)??(i==null?void 0:i.meta.layout)??"default";return c&&!(c in Rn)&&t.fallback&&(c=be(t.fallback)),c}),a=an();e.expose({layoutRef:a});const l=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",l);ut().beforeEach(c)}let u;return()=>{const c=o.value&&o.value in Rn,f=(i==null?void 0:i.meta.layoutTransition)??SE,h=u;return u=o.value,Cg(c&&f,{default:()=>ke(vc,{suspensible:!0,onResolve:()=>{as(l)}},{default:()=>ke(zP,{layoutProps:kp(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:d=>d!==h&&d===o.value,hasTransition:!!f},e.slots)})}).default()}}}),zP=fn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&Pn(eg,{isCurrent:i=>n===(i.meta.layout??"default")});const s=We(ls);if(s&&s===Zo()){const i=bg(),o={};for(const a in i){const l=a;Object.defineProperty(o,l,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[l]:s[l]})}Pn(ls,Ut(o))}return()=>{var i,o;return!n||typeof n=="string"&&!(n in Rn)?(o=(i=e.slots).default)==null?void 0:o.call(i):ke(KP,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),YP=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},QP=MP(UP),JP={};function XP(t,e){const n=QP,s=BP,r=GP;return Ft(),Cp("div",null,[Te(n),Te(r,null,{default:pc(()=>[Te(s)]),_:1})])}const ZP=YP(JP,[["render",XP]]),eN={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const s=Number(n.statusCode||500),r=s===404,i=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,c=r?al(()=>at(()=>import("./Dy2lEY1K.js"),__vite__mapDeps([20,8,21]),import.meta.url)):al(()=>at(()=>import("./BPt8t5ZP.js"),__vite__mapDeps([22,23]),import.meta.url));return(f,h)=>(Ft(),Xn(be(c),qm(Sp({statusCode:be(s),statusMessage:be(i),description:be(o),stack:be(a)})),null,16))}},tN={key:0},fd={__name:"nuxt-root",setup(t){const e=()=>null,n=Pe(),s=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",s);ut().beforeEach(u)}const r=!1;Pn(ls,Zo()),n.hooks.callHookWith(u=>u.map(c=>c()),"vue:setup");const i=ea(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;Xd((u,c,f)=>{if(n.hooks.callHook("vue:error",u,c,f).catch(h=>console.error("[nuxt] Error in `vue:error` hook",h)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(ng(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>Yn(u)),!1});const l=!1;return(u,c)=>(Ft(),Xn(vc,{onResolve:be(s)},{default:pc(()=>[be(o)?(Ft(),Cp("div",tN)):be(i)?(Ft(),Xn(be(eN),{key:1,error:be(i)},null,8,["error"])):be(l)?(Ft(),Xn(be(e),{key:2,context:be(l)},null,8,["context"])):be(r)?(Ft(),Xn(Yy(be(r)),{key:3})):(Ft(),Xn(be(ZP),{key:4}))]),_:1},8,["onResolve"]))}};let hd;{let t;hd=async function(){var o,a;if(t)return t;const s=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?Ew(fd):ww(fd),r=OE({vueApp:s});async function i(l){var u;await r.callHook("app:error",l),(u=r.payload).error||(u.error=is(l))}s.config.errorHandler=i,r.hook("app:suspense:resolve",()=>{s.config.errorHandler===i&&(s.config.errorHandler=void 0)});try{await DE(r,xP)}catch(l){i(l)}try{await r.hooks.callHook("app:created",s),await r.hooks.callHook("app:beforeMount",s),s.mount(AE),await r.hooks.callHook("app:mounted",s),await as()}catch(l){i(l)}return s},t=hd().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{BP as $,Qm as A,lN as B,Rp as C,Md as D,hN as E,Us as F,Vp as G,mN as H,yN as I,_N as J,pN as K,Te as L,pc as M,be as N,lt as O,oN as P,iN as Q,Xn as R,Jd as S,sN as T,pw as U,hf as V,hw as W,Ko as X,Vo as Y,Pv as Z,YP as _,Pe as a,De as a0,aN as a1,as as a2,wy as a3,uN as a4,mi as a5,Vy as a6,We as a7,CN as a8,Ls as a9,Xm as aa,Ty as ab,is as ac,ic as ad,$n as ae,fN as af,pd as ag,bg as ah,at as ai,hi as aj,kP as ak,Iu as al,nu as am,dn as an,IP as ao,yR as ap,Rm as aq,km as ar,Jl as as,PP as at,bN as au,AP as av,vN as aw,wN as ax,EP as ay,EN as az,Nc as b,Zf as c,fn as d,_i as e,gN as f,rN as g,ke as h,VE as i,wT as j,pt as k,_s as l,bc as m,Xo as n,Yr as o,Fp as p,dN as q,tn as r,an as s,Xr as t,ut as u,cN as v,Gw as w,Cp as x,Ft as y,Ip as z};
