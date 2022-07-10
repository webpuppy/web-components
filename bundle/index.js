/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=(t,...i)=>{const n=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(n,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new s("string"==typeof t?t:t+"",e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const l=window.trustedTypes,a=l?l.emptyScript:"",h=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=u){var s,n;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:c.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var i,s,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),l=t.converter,a=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:c.fromAttribute;this._$Ei=o,this[o]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:p}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.3.2");const f=globalThis.trustedTypes,$=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,_="?"+y,g=`<${_}>`,m=document,A=(t="")=>m.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,x=t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,S=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,k=/"/g,O=/^(?:script|style|textarea|title)$/i,N=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),T=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),R=new WeakMap,H=(t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new D(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o},z=m.createTreeWalker(m,129,null,!1),j=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=C;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,a=o.exec(i),null!==a);)c=o.lastIndex,o===C?"!--"===a[1]?o=E:void 0!==a[1]?o=S:void 0!==a[2]?(O.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=P):void 0!==a[3]&&(o=P):o===P?">"===a[0]?(o=null!=n?n:C,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?P:'"'===a[3]?k:U):o===k||o===U?o=P:o===E||o===S?o=C:(o=P,n=void 0);const d=o===P&&t[e+1].startsWith("/>")?" ":"";r+=o===C?i+g:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+y+d):i+y+(-2===h?(s.push(void 0),e):d)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(l):l,s]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,h]=j(t,e);if(this.el=I.createElement(a,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=z.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?G:"@"===e[1]?W:F})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(O.test(s.tagName)){const t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],A()),z.nextNode(),l.push({type:2,index:++n});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===_)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)l.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,e){const i=m.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,s){var n,r,o,l;if(e===T)return e;let a=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const h=b(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(o=(l=i)._$Cl)&&void 0!==o?o:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=L(t,a._$AS(t,e.values),a,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:m).importNode(i,!0);z.currentNode=n;let r=z.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new D(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new X(r,this,t)),this.v.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(r=z.nextNode(),o++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,s){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),b(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):x(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==M&&b(this._$AH)?this._$AA.nextSibling.data=t:this.k(m.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=I.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new B(n,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new I(t)),e}S(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new D(this.M(A()),this.M(A()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=L(this,t,e,0),r=!b(t)||t!==this._$AH&&t!==T,r&&(this._$AH=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=L(this,s[i+o],e,o),l===T&&(l=this._$AH[o]),r||(r=!b(l)||l!==this._$AH[o]),l===M?t=M:t!==M&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!s&&this.C(t)}C(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends F{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===M?void 0:t}}const K=f?f.emptyScript:"";class G extends F{constructor(){super(...arguments),this.type=4}C(t){t&&t!==M?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class W extends F{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:M)===T)return;const s=this._$AH,n=t===M&&s!==M||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==M&&(s===M||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const q={L:"$lit$",P:y,V:_,I:1,N:j,R:B,j:x,D:L,H:D,F,O:G,W,B:V,Z:X},Y=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,Q;null==Y||Y(I,D),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.6");class J extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=H(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}J.finalized=!0,J._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:J});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:J}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=(t,e,i)=>{for(const i of e)if(i[0]===t)return(0,i[1])();return null==i?void 0:i()};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(t,e,i){return t?e():null==i?void 0:i()}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=1,at=2,ht=3,ct=4,dt=t=>(...e)=>({_$litDirective$:t,values:e});class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=dt(class extends ut{constructor(t){var e;if(super(t),t.type!==lt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.et.add(t);return this.render(e)}const n=t.element.classList;this.et.forEach((t=>{t in e||(n.remove(t),this.et.delete(t))}));for(const t in e){const i=!!e[t];i===this.et.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(n.add(t),this.et.add(t)):(n.remove(t),this.et.delete(t)))}return T}}),vt=dt(class extends ut{constructor(t){var e;if(super(t),t.type!==lt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach((t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.ct.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return T}}),{H:ft}=q,$t=(t,e)=>{var i,s;return void 0===e?void 0!==(null===(i=t)||void 0===i?void 0:i._$litType$):(null===(s=t)||void 0===s?void 0:s._$litType$)===e},yt=t=>void 0===t.strings,_t=()=>document.createComment(""),gt=(t,e,i)=>{var s;const n=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=n.insertBefore(_t(),r),s=n.insertBefore(_t(),r);i=new ft(e,s,t,t.options)}else{const e=i._$AB.nextSibling,o=i._$AM,l=o!==t;if(l){let e;null===(s=i._$AQ)||void 0===s||s.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==o._$AU&&i._$AP(e)}if(e!==r||l){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return i},mt=(t,e,i=t)=>(t._$AI(e,i),t),At={},bt=(t,e=At)=>t._$AH=e,wt=t=>t._$AH,xt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const s=t._$AB.nextSibling;for(;i!==s;){const t=i.nextSibling;i.remove(),i=t}},Ct=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},Et=dt(class extends ut{constructor(t){if(super(t),t.type!==at)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const n=[],r=[];let o=0;for(const e of t)n[o]=s?s(e,o):o,r[o]=i(e,o),o++;return{values:r,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){var n;const r=wt(t),{values:o,keys:l}=this.dt(e,i,s);if(!Array.isArray(r))return this.ut=l,o;const a=null!==(n=this.ut)&&void 0!==n?n:this.ut=[],h=[];let c,d,u=0,p=r.length-1,v=0,f=o.length-1;for(;u<=p&&v<=f;)if(null===r[u])u++;else if(null===r[p])p--;else if(a[u]===l[v])h[v]=mt(r[u],o[v]),u++,v++;else if(a[p]===l[f])h[f]=mt(r[p],o[f]),p--,f--;else if(a[u]===l[f])h[f]=mt(r[u],o[f]),gt(t,h[f+1],r[u]),u++,f--;else if(a[p]===l[v])h[v]=mt(r[p],o[v]),gt(t,r[u],r[p]),p--,v++;else if(void 0===c&&(c=Ct(l,v,f),d=Ct(a,u,p)),c.has(a[u]))if(c.has(a[p])){const e=d.get(l[v]),i=void 0!==e?r[e]:null;if(null===i){const e=gt(t,r[u]);mt(e,o[v]),h[v]=e}else h[v]=mt(i,o[v]),gt(t,r[u],i),r[e]=null;v++}else xt(r[p]),p--;else xt(r[u]),u++;for(;v<=f;){const e=gt(t,h[f+1]);mt(e,o[v]),h[v++]=e}for(;u<=p;){const t=r[u++];null!==t&&xt(t)}return this.ut=l,bt(t,h),T}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*St(t,e){if(void 0!==t){let i=0;for(const s of t)yield e(s,i++)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=t=>null!=t?t:M
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Ut=dt(class extends ut{constructor(t){if(super(t),t.type!==ht&&t.type!==lt&&t.type!==ct)throw Error("The `live` directive is not allowed on child or event bindings");if(!yt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===T||e===M)return e;const i=t.element,s=t.name;if(t.type===ht){if(e===i[s])return T}else if(t.type===ct){if(!!e===i.hasAttribute(s))return T}else if(t.type===lt&&i.getAttribute(s)===e+"")return T;return bt(t),e}}),kt=dt(class extends ut{constructor(){super(...arguments),this.key=M}render(t,e){return this.key=t,e}update(t,[e,i]){return e!==this.key&&(bt(t),this.key=e),i}}),Ot={},Nt=dt(class extends ut{constructor(){super(...arguments),this.nt=Ot}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return T}else if(this.nt===e)return T;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,i)}}),Tt=dt(class extends ut{constructor(t){super(t),this.tt=new WeakMap}render(t){return[t]}update(t,[e]){if($t(this.it)&&(!$t(e)||this.it.strings!==e.strings)){const e=wt(t).pop();let i=this.tt.get(this.it.strings);if(void 0===i){const t=document.createDocumentFragment();i=H(M,t),i.setConnected(!1),this.tt.set(this.it.strings,i)}bt(i,[e]),gt(i,void 0,e)}if($t(e)){if(!$t(this.it)||this.it.strings!==e.strings){const i=this.tt.get(e.strings);if(void 0!==i){const e=wt(i).pop();(t=>{t._$AR()})(t),gt(t,void 0,e),bt(t,[e])}}this.it=e}else this.it=void 0;return this.render(e)}}),Mt=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),Mt(t,e);return!0},Rt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},Ht=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),It(e)}};function zt(t){void 0!==this._$AN?(Rt(this),this._$AM=t,Ht(this)):this._$AM=t}function jt(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)Mt(s[t],!1),Rt(s[t]);else null!=s&&(Mt(s,!1),Rt(s));else Mt(this,t)}const It=t=>{var e,i,s,n;t.type==at&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=jt),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=zt))};class Lt extends ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Ht(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(Mt(this,t),Rt(this))}setValue(t){if(yt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const Bt=new WeakMap,Dt=dt(class extends Lt{render(t){return M}update(t,[e]){var i;const s=e!==this.U;return s&&void 0!==this.U&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.U=e,this.ht=null===(i=t.options)||void 0===i?void 0:i.host,this.ot(this.lt=t.element)),M}ot(t){var e;if("function"==typeof this.U){const i=null!==(e=this.ht)&&void 0!==e?e:globalThis;let s=Bt.get(i);void 0===s&&(s=new WeakMap,Bt.set(i,s)),void 0!==s.get(this.U)&&this.U.call(this.ht,void 0),s.set(this.U,t),void 0!==t&&this.U.call(this.ht,t)}else this.U.value=t}get rt(){var t,e,i;return"function"==typeof this.U?null===(e=Bt.get(null!==(t=this.ht)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.U):null===(i=this.U)||void 0===i?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ft extends ut{constructor(t){if(super(t),this.it=M,t.type!==at)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===M||null==t)return this.ft=void 0,this.it=t;if(t===T)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ft.directiveName="unsafeHTML",Ft.resultType=1;const Vt=dt(Ft);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Kt extends Ft{}Kt.directiveName="unsafeSVG",Kt.resultType=2;const Gt=dt(Kt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wt{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}}class Xt{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then;const Yt=dt(class extends Lt{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new Wt(this),this._$CK=new Xt}render(...t){var e;return null!==(e=t.find((t=>!qt(t))))&&void 0!==e?e:T}update(t,e){const i=this._$Cyt;let s=i.length;this._$Cyt=e;const n=this._$CG,r=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const o=e[t];if(!qt(o))return this._$Cwt=t,o;t<s&&o===i[t]||(this._$Cwt=1073741823,s=0,Promise.resolve(o).then((async t=>{for(;r.get();)await r.get();const e=n.deref();if(void 0!==e){const i=e._$Cyt.indexOf(o);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}})))}return T}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=dt(class extends Lt{constructor(){super(...arguments),this._$CG=new Wt(this),this._$CK=new Xt}render(t,e){return T}update(t,[e,i]){if(this.isConnected||this.disconnected(),e===this._$CX)return;this._$CX=e;let s=0;const{_$CG:n,_$CK:r}=this;return(async(t,e)=>{for await(const i of t)if(!1===await e(i))return})(e,(async t=>{for(;r.get();)await r.get();const o=n.deref();if(void 0!==o){if(o._$CX!==e)return!1;void 0!==i&&(t=i(t,s)),o.commitValue(t,s),s++}return!0})),T}commitValue(t,e){this.setValue(t)}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}});var Qt={COMPONENT_PREFIX:"wp-"},Jt=Object.freeze({__proto__:null,default:Qt}),te=n`
    :host {
        cursor: pointer;
        display: inline-block;
        min-width: fit-content;
        pointer-events: all;
    }

    button.wp {
        border-width: 2px;
        border-style: solid;
        border-radius: 86.5169px;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-kerning: normal;
		font-size: 15px;
		letter-spacing: 1px;
		min-height: 50px;
		min-width: 100px;
		padding: 1em 3.25em;
        position: relative;
		text-align: justify;
		text-rendering: optimizeLegibility;
        z-index: 2;
    }

    .primary {
        background-color: var(--wp-btn-primary);
		color: #fff;
		font-weight: 300;
		text-transform: uppercase;
	}

	.primary,
	.confirm,
	.base,
	.danger,
	.secondary {
		border-color: transparent;
		color: var(--wp-btn-txt-01);
	}

	.primary:hover,
	.confirm:hover,
	.base:hover,
	.danger:hover {
		border-color: var(--shadow-color);
		color: var(--wp-btn-txt-00);
	}

	.secondary {
		background-color: var(--wp-ocean);
	}

    .confirm {
        background-color: var(--wp-btn-confirm);
    }

    .base {
        background-color: var(--wp-navy);
    }

    .danger {
        background-color: var(--wp-btn-danger);
    }

	.focusring {
		border-color: var(--wp-navy);
	}

	@media(prefers-reduced-motion: no-preference) {
		button.wp {
			backface-visibility: hidden;
			transition: border, color, box-shadow 150ms ease-in-out;
		}

		button.wp:hover {
			box-shadow: inset 0 0 4px var(--shadow-color);
		}
	}
`;n`#b913b9`,n`#4a4ad5`,n`#ffffff`,n`#f2f1f1`,n`#42c062`,n`#da2a2a`;const ee=n`
    :host {
		--wp-ocean: #3DA9FC;
        --wp-base-black: #3d3a3a;
        --wp-btn-primary: #EF4565;
        --wp-btn-base: #4a4ad5;
		--wp-navy: #094067;
        --wp-btn-txt-00: #F3F3F3;
        --wp-btn-txt-01: #f2f1f1;
        --wp-btn-confirm: #42c062;
        --wp-btn-danger: #da2a2a;
        --shadow-color: rgba(0, 0, 0, 0.1);
		--wp-fontstack: 'Inter', 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
    }
    * {
        font-family: var(--wp-fontstack);
    }
    h1 {
        font-size: 2.25rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.8rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.25rem;
    }

    p,
    header {
        /* color: #3d3a3a; */
        display: block;
        line-height: 1.8em;
        margin-block-start: 0;
        margin-block-end: 0;
    }

	p {
		margin-block-start: 1.25em;
        margin-block-end: 1.25em;
	}
`;var ie=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let se=class extends J{constructor(){super(...arguments),this.focusring=!1,this.use_icon=!1,this.type="base",this.text=""}get_icon(){switch(this.type){case"confirm":return"✓";case"danger":return"x";default:return""}}render(){const t=this.focusring?" focusring":"",e={};return e[`wp primary${t}`]="primary"===this.type,e[`wp base${t}`]="base"===this.type,e[`wp danger${t}`]="danger"===this.type,e[`wp confirm${t}`]="confirm"===this.type,e[`wp secondary${t}`]="secondary"===this.type,N`
            <button class=${pt(e)} part="button">
                ${this.text}
                ${ot(!this.use_icon,(()=>null),(()=>this.get_icon()))}
            </button>
        `}};se.styles=[ee,te],ie([st({attribute:!0,type:Boolean})],se.prototype,"focusring",void 0),ie([st({attribute:!0,type:Boolean})],se.prototype,"use_icon",void 0),ie([st({attribute:!0})],se.prototype,"type",void 0),ie([st({attribute:!0})],se.prototype,"text",void 0),se=ie([et(Qt.COMPONENT_PREFIX+"btn")],se);const ne=n`
    :host {
        display: inline-block;
        min-width: fit-content;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: all 380ms ease-in-out;
    }

    a:hover {
        text-decoration: underline;
    }
`;var re=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let oe=class extends J{constructor(){super(...arguments),this.href="#",this.text=""}render(){return N` <a href="${this.href}">${this.text}</a> `}};oe.styles=[ee,ne],re([st({attribute:!0,type:String})],oe.prototype,"href",void 0),re([st({attribute:!0,type:String})],oe.prototype,"text",void 0),oe=re([et(Qt.COMPONENT_PREFIX+"link")],oe);const le=n`
:host {
	cursor: pointer;
	display: block;
	position: relative;
	top: 0;
}

.wp-nav {
	align-items: center;
	background-color: var(--wp-navy);
	color: #fff;
	display: grid;
	grid-template-columns: 25% 75%;
	justify-content: space-between;
	position: relative;
	top: 0;
}

.wp-nav-logo {
	display: flex;
	place-content: center;
	padding: .35em;
}

.wp-nav-logo a {
	display: flex;
}

.wp-nav-logo a,
.wp-nav-logo span {
	align-items: center;
	place-content: center;
}

.wp-nav-logo span {
	display: none;
	font-size: 22px;
	font-weight: 500;
	line-height: 1.25em;
}

.wp-nav-logo a {
	color: inherit;
	padding-left: 2rem;
	text-decoration: none;
}

.wp-nav-list {
	display: none;
}

.wp-nav-burger {
	display: grid;
	justify-content: end;
	padding-right: 2rem;
}

.wp-nav-burger::after {
	content: "☰";
	font-size: 28px;
}

@media(min-width: 720px) {
	.wp-nav-list {
		align-items: center;
		display: flex;
		justify-content: space-evenly;
	}

	.wp-nav-burger {
		display: none;
	}

	@supports not(display: flex) {

		.wp-nav-logo span {
			display: grid;
		}

		.wp-nav-list {
			display: grid;
		}
	}


}
`;var ae=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let he=class extends J{constructor(){super(...arguments),this.type="flexed-burger",this.title="WebPuppy",this.prefix_href=null}connectedCallback(){super.connectedCallback(),window.addEventListener("DOMContentLoaded",(()=>{window.addEventListener("resize",(()=>{window.matchMedia("(max-width: 720px);").addEventListener("change",(t=>{console.log(t)}))}))}))}render(){var t;return N`
		<header class="wp-nav">
			<div class="wp-nav-logo">
				<a href=${null!==(t=this.prefix_href)&&void 0!==t?t:"/"}>
					<img
					src=${this.icon_url}
					alt="hdr icon"
					height="64"
					width="64">
					<span>
						${this.title}
					</span>
				</a>
			</div>
			<div class="wp-nav-list">
				<slot></slot>
			</div>
			<div class="wp-nav-burger"></div>
		</header>
		`}};he.styles=[ee,le],ae([st()],he.prototype,"type",void 0),ae([st()],he.prototype,"title",void 0),ae([st()],he.prototype,"prefix_href",void 0),ae([st()],he.prototype,"icon_url",void 0),he=ae([et(Qt.COMPONENT_PREFIX+"nav")],he);const ce=n`
    :host {
        background-color: #3d3a3a;
        color: #fff;
        border-radius: 1rem;
        display: inline-block;
        padding: 0.35em;
        width: fit-content;
    }

    a {
        color: inherit;
        display: inline-block;
        text-decoration: none;
        position: relative;
        z-index: 2;
    }
`;var de=n`
    .wp-txt-xs,
    .wp-tag-xs {
        font-size: 12px;
    }

    .wp-tag-sm,
    .wp-txt-sm {
        font-size: 14px;
    }

    .wp-tag-lg,
    .wp-txt-lg {
        font-size: 1.5em;
    }

    .wp-tag-xl,
    .wp-txt-xl {
        font-size: 2em;
    }
`,ue=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let pe=class extends J{constructor(){super(...arguments),this.size="md"}render(){return N`
            <p class="wp-txt-${this.size}">
                <slot></slot>
            </p>
        `}};pe.styles=[ee,de],ue([st()],pe.prototype,"size",void 0),pe=ue([et(Qt.COMPONENT_PREFIX+"txt")],pe);let ve=class extends J{render(){return N`
            <header class="wp-hdr">
                <slot></slot>
            </header>
        `}};ve.styles=[ee,de],ve=ue([et(Qt.COMPONENT_PREFIX+"hdr")],ve);let fe=class extends J{constructor(){super(...arguments),this.size="md"}render(){return this.href?N`
                <a href="wp-tag-${this.size}">
                    <slot></slot>
                </a>
            `:N`
            <span class="wp-tag-${this.size}">
                <slot></slot>
            </span>
        `}};fe.styles=[ee,ce,de],ue([st()],fe.prototype,"size",void 0),ue([st()],fe.prototype,"href",void 0),fe=ue([et(Qt.COMPONENT_PREFIX+"tag")],fe);export{s as CSSResult,Jt as Enums,J as LitElement,se as WPBtn,ve as WPHdr,oe as WPLink,he as WPNav,fe as WPTag,pe as WPTxt,Zt as asyncReplace,Tt as cache,rt as choose,pt as classMap,n as css,et as customElement,Nt as guard,N as html,Pt as ifDefined,kt as keyed,Ut as live,St as map,st as property,Dt as ref,Et as repeat,vt as styleMap,Vt as unsafeHTML,Gt as unsafeSVG,Yt as until,ot as when};
