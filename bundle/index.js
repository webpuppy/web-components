/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class i{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=(t,...s)=>{const r=1===t.length?t[0]:s.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new i(r,e)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const e of t.cssRules)s+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const l=window.trustedTypes,a=l?l.emptyScript:"",h=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},d=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=u){var i,r;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const o=(null!==(r=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:c.toAttribute)(e,s.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,e){var s,i,r;const n=this.constructor,o=n._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=n.getPropertyOptions(o),l=t.converter,a=null!==(r=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==r?r:c.fromAttribute;this._$Ei=o,this[o]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:p}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.3.2");const v=globalThis.trustedTypes,y=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,_="?"+$,g=`<${_}>`,m=document,b=(t="")=>m.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,C=t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,S=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,O=/"/g,N=/^(?:script|style|textarea|title)$/i,T=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),k=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),R=new WeakMap,H=(t,e,s)=>{var i,r;const n=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new D(e.insertBefore(b(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o},z=m.createTreeWalker(m,129,null,!1),j=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=E;for(let e=0;e<s;e++){const s=t[e];let l,a,h=-1,c=0;for(;c<s.length&&(o.lastIndex=c,a=o.exec(s),null!==a);)c=o.lastIndex,o===E?"!--"===a[1]?o=x:void 0!==a[1]?o=S:void 0!==a[2]?(N.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=P):void 0!==a[3]&&(o=P):o===P?">"===a[0]?(o=null!=r?r:E,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?P:'"'===a[3]?O:U):o===O||o===U?o=P:o===x||o===S?o=E:(o=P,r=void 0);const d=o===P&&t[e+1].startsWith("/>")?" ":"";n+=o===E?s+g:h>=0?(i.push(l),s.slice(0,h)+"$lit$"+s.slice(h)+$+d):s+$+(-2===h?(i.push(void 0),e):d)}const l=n+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(l):l,i]};class I{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[a,h]=j(t,e);if(this.el=I.createElement(a,s),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=z.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const s=h[n++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?X:"@"===e[1]?G:F})}else l.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(N.test(i.tagName)){const t=i.textContent.split($),e=t.length-1;if(e>0){i.textContent=v?v.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],b()),z.nextNode(),l.push({type:2,index:++r});i.append(t[e],b())}}}else if(8===i.nodeType)if(i.data===_)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf($,t+1));)l.push({type:7,index:r}),t+=$.length-1}r++}}static createElement(t,e){const s=m.createElement("template");return s.innerHTML=t,s}}function B(t,e,s=t,i){var r,n,o,l;if(e===k)return e;let a=void 0!==i?null===(r=s._$Cl)||void 0===r?void 0:r[i]:s._$Cu;const h=A(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,i)),void 0!==i?(null!==(o=(l=s)._$Cl)&&void 0!==o?o:l._$Cl=[])[i]=a:s._$Cu=a),void 0!==a&&(e=B(t,a._$AS(t,e.values),a,i)),e}class L{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:m).importNode(s,!0);z.currentNode=r;let n=z.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new D(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new W(n,this,t)),this.v.push(e),a=i[++l]}o!==(null==a?void 0:a.index)&&(n=z.nextNode(),o++)}return r}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class D{constructor(t,e,s,i){var r;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),A(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==k&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):C(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==M&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(m.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=I.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(s);else{const t=new L(r,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new I(t)),e}S(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new D(this.M(b()),this.M(b()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,s,i,r){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=B(this,t,e,0),n=!A(t)||t!==this._$AH&&t!==k,n&&(this._$AH=t);else{const i=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=B(this,i[s+o],e,o),l===k&&(l=this._$AH[o]),n||(n=!A(l)||l!==this._$AH[o]),l===M?t=M:t!==M&&(t+=(null!=l?l:"")+r[o+1]),this._$AH[o]=l}n&&!i&&this.C(t)}C(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends F{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===M?void 0:t}}const K=v?v.emptyScript:"";class X extends F{constructor(){super(...arguments),this.type=4}C(t){t&&t!==M?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class G extends F{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=B(this,t,e,0))&&void 0!==s?s:M)===k)return;const i=this._$AH,r=t===M&&i!==M||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==M&&(i===M||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const q={L:"$lit$",P:$,V:_,I:1,N:j,R:L,j:C,D:B,H:D,F,O:X,W:G,B:V,Z:W},Y=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,Q;null==Y||Y(I,D),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.6");class J extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=H(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return k}}J.finalized=!0,J._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:J});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:J}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function it(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):st(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=(t,e,s)=>{for(const s of e)if(s[0]===t)return(0,s[1])();return null==s?void 0:s()};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(t,e,s){return t?e():null==s?void 0:s()}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=1,at=2,ht=3,ct=4,dt=t=>(...e)=>({_$litDirective$:t,values:e});class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=dt(class extends ut{constructor(t){var e;if(super(t),t.type!==lt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var s,i;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(s=this.st)||void 0===s?void 0:s.has(t))&&this.et.add(t);return this.render(e)}const r=t.element.classList;this.et.forEach((t=>{t in e||(r.remove(t),this.et.delete(t))}));for(const t in e){const s=!!e[t];s===this.et.has(t)||(null===(i=this.st)||void 0===i?void 0:i.has(t))||(s?(r.add(t),this.et.add(t)):(r.remove(t),this.et.delete(t)))}return k}}),ft=dt(class extends ut{constructor(t){var e;if(super(t),t.type!==lt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach((t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in e){const i=e[t];null!=i&&(this.ct.add(t),t.includes("-")?s.setProperty(t,i):s[t]=i)}return k}}),{H:vt}=q,yt=(t,e)=>{var s,i;return void 0===e?void 0!==(null===(s=t)||void 0===s?void 0:s._$litType$):(null===(i=t)||void 0===i?void 0:i._$litType$)===e},$t=t=>void 0===t.strings,_t=()=>document.createComment(""),gt=(t,e,s)=>{var i;const r=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=r.insertBefore(_t(),n),i=r.insertBefore(_t(),n);s=new vt(e,i,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,l=o!==t;if(l){let e;null===(i=s._$AQ)||void 0===i||i.call(s,t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==n||l){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,n),t=e}}}return s},mt=(t,e,s=t)=>(t._$AI(e,s),t),bt={},At=(t,e=bt)=>t._$AH=e,wt=t=>t._$AH,Ct=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let s=t._$AA;const i=t._$AB.nextSibling;for(;s!==i;){const t=s.nextSibling;s.remove(),s=t}},Et=(t,e,s)=>{const i=new Map;for(let r=e;r<=s;r++)i.set(t[r],r);return i},xt=dt(class extends ut{constructor(t){if(super(t),t.type!==at)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const r=[],n=[];let o=0;for(const e of t)r[o]=i?i(e,o):o,n[o]=s(e,o),o++;return{values:n,keys:r}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){var r;const n=wt(t),{values:o,keys:l}=this.dt(e,s,i);if(!Array.isArray(n))return this.ut=l,o;const a=null!==(r=this.ut)&&void 0!==r?r:this.ut=[],h=[];let c,d,u=0,p=n.length-1,f=0,v=o.length-1;for(;u<=p&&f<=v;)if(null===n[u])u++;else if(null===n[p])p--;else if(a[u]===l[f])h[f]=mt(n[u],o[f]),u++,f++;else if(a[p]===l[v])h[v]=mt(n[p],o[v]),p--,v--;else if(a[u]===l[v])h[v]=mt(n[u],o[v]),gt(t,h[v+1],n[u]),u++,v--;else if(a[p]===l[f])h[f]=mt(n[p],o[f]),gt(t,n[u],n[p]),p--,f++;else if(void 0===c&&(c=Et(l,f,v),d=Et(a,u,p)),c.has(a[u]))if(c.has(a[p])){const e=d.get(l[f]),s=void 0!==e?n[e]:null;if(null===s){const e=gt(t,n[u]);mt(e,o[f]),h[f]=e}else h[f]=mt(s,o[f]),gt(t,n[u],s),n[e]=null;f++}else Ct(n[p]),p--;else Ct(n[u]),u++;for(;f<=v;){const e=gt(t,h[v+1]);mt(e,o[f]),h[f++]=e}for(;u<=p;){const t=n[u++];null!==t&&Ct(t)}return this.ut=l,At(t,h),k}});
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
function*St(t,e){if(void 0!==t){let s=0;for(const i of t)yield e(i,s++)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=t=>null!=t?t:M
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Ut=dt(class extends ut{constructor(t){if(super(t),t.type!==ht&&t.type!==lt&&t.type!==ct)throw Error("The `live` directive is not allowed on child or event bindings");if(!$t(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===k||e===M)return e;const s=t.element,i=t.name;if(t.type===ht){if(e===s[i])return k}else if(t.type===ct){if(!!e===s.hasAttribute(i))return k}else if(t.type===lt&&s.getAttribute(i)===e+"")return k;return At(t),e}}),Ot=dt(class extends ut{constructor(){super(...arguments),this.key=M}render(t,e){return this.key=t,e}update(t,[e,s]){return e!==this.key&&(At(t),this.key=e),s}}),Nt={},Tt=dt(class extends ut{constructor(){super(...arguments),this.nt=Nt}render(t,e){return e()}update(t,[e,s]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return k}else if(this.nt===e)return k;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,s)}}),kt=dt(class extends ut{constructor(t){super(t),this.tt=new WeakMap}render(t){return[t]}update(t,[e]){if(yt(this.it)&&(!yt(e)||this.it.strings!==e.strings)){const e=wt(t).pop();let s=this.tt.get(this.it.strings);if(void 0===s){const t=document.createDocumentFragment();s=H(M,t),s.setConnected(!1),this.tt.set(this.it.strings,s)}At(s,[e]),gt(s,void 0,e)}if(yt(e)){if(!yt(this.it)||this.it.strings!==e.strings){const s=this.tt.get(e.strings);if(void 0!==s){const e=wt(s).pop();(t=>{t._$AR()})(t),gt(t,void 0,e),At(t,[e])}}this.it=e}else this.it=void 0;return this.render(e)}}),Mt=(t,e)=>{var s,i;const r=t._$AN;if(void 0===r)return!1;for(const t of r)null===(i=(s=t)._$AO)||void 0===i||i.call(s,e,!1),Mt(t,e);return!0},Rt=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},Ht=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),It(e)}};function zt(t){void 0!==this._$AN?(Rt(this),this._$AM=t,Ht(this)):this._$AM=t}function jt(t,e=!1,s=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)Mt(i[t],!1),Rt(i[t]);else null!=i&&(Mt(i,!1),Rt(i));else Mt(this,t)}const It=t=>{var e,s,i,r;t.type==at&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=jt),null!==(s=(r=t)._$AQ)&&void 0!==s||(r._$AQ=zt))};class Bt extends ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Ht(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(Mt(this,t),Rt(this))}setValue(t){if($t(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const Lt=new WeakMap,Dt=dt(class extends Bt{render(t){return M}update(t,[e]){var s;const i=e!==this.U;return i&&void 0!==this.U&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.U=e,this.ht=null===(s=t.options)||void 0===s?void 0:s.host,this.ot(this.lt=t.element)),M}ot(t){var e;if("function"==typeof this.U){const s=null!==(e=this.ht)&&void 0!==e?e:globalThis;let i=Lt.get(s);void 0===i&&(i=new WeakMap,Lt.set(s,i)),void 0!==i.get(this.U)&&this.U.call(this.ht,void 0),i.set(this.U,t),void 0!==t&&this.U.call(this.ht,t)}else this.U.value=t}get rt(){var t,e,s;return"function"==typeof this.U?null===(e=Lt.get(null!==(t=this.ht)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.U):null===(s=this.U)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ft extends ut{constructor(t){if(super(t),this.it=M,t.type!==at)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===M||null==t)return this.ft=void 0,this.it=t;if(t===k)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ft.directiveName="unsafeHTML",Ft.resultType=1;const Vt=dt(Ft);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Kt extends Ft{}Kt.directiveName="unsafeSVG",Kt.resultType=2;const Xt=dt(Kt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gt{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}}class Wt{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then;const Yt=dt(class extends Bt{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new Gt(this),this._$CK=new Wt}render(...t){var e;return null!==(e=t.find((t=>!qt(t))))&&void 0!==e?e:k}update(t,e){const s=this._$Cyt;let i=s.length;this._$Cyt=e;const r=this._$CG,n=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const o=e[t];if(!qt(o))return this._$Cwt=t,o;t<i&&o===s[t]||(this._$Cwt=1073741823,i=0,Promise.resolve(o).then((async t=>{for(;n.get();)await n.get();const e=r.deref();if(void 0!==e){const s=e._$Cyt.indexOf(o);s>-1&&s<e._$Cwt&&(e._$Cwt=s,e.setValue(t))}})))}return k}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=dt(class extends Bt{constructor(){super(...arguments),this._$CG=new Gt(this),this._$CK=new Wt}render(t,e){return k}update(t,[e,s]){if(this.isConnected||this.disconnected(),e===this._$CX)return;this._$CX=e;let i=0;const{_$CG:r,_$CK:n}=this;return(async(t,e)=>{for await(const s of t)if(!1===await e(s))return})(e,(async t=>{for(;n.get();)await n.get();const o=r.deref();if(void 0!==o){if(o._$CX!==e)return!1;void 0!==s&&(t=s(t,i)),o.commitValue(t,i),i++}return!0})),k}commitValue(t,e){this.setValue(t)}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}});var Qt={COMPONENT_PREFIX:"wp-"},Jt=Object.freeze({__proto__:null,default:Qt}),te=r`
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
		font-size: 15px;
		letter-spacing: 1px;
		min-height: 50px;
		min-width: 100px;
		padding: 1em 3.25em;
        position: relative;
        transition: all 150ms ease-in-out;
        z-index: 2;
    }

    button.wp:hover {
        box-shadow: inset 0 0 4px var(--shadow-color);
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
	.danger {
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
		background-color: #fff;
		border-color: var(--wp-btn-primary);
		color: var(--wp-base-black);
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
`;r`#b913b9`,r`#4a4ad5`,r`#ffffff`,r`#f2f1f1`,r`#42c062`,r`#da2a2a`;const ee=r`
    :host {
        --wp-base-black: #3d3a3a;
        --wp-btn-primary: #EF4565;
        --wp-btn-base: #4a4ad5;
		--wp-navy: #094067;
        --wp-btn-txt-00: #F3F3F3;
        --wp-btn-txt-01: #f2f1f1;
        --wp-btn-confirm: #42c062;
        --wp-btn-danger: #da2a2a;
        --shadow-color: rgba(0, 0, 0, 0.1);
    }
    * {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
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
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
        line-height: 1.8em;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-block-start: 1.25em;
        margin-block-end: 1.25em;
    }
`;var se=function(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o};let ie=class extends J{constructor(){super(...arguments),this.use_icon=!1,this.type="base",this.text=""}get_icon(){switch(this.type){case"confirm":return"✓";case"danger":return"x";default:return""}}render(){const t={"wp primary":"primary"===this.type,"wp base":"base"===this.type,"wp danger":"danger"===this.type,"wp confirm":"confirm"===this.type,"wp secondary":"secondary"===this.type};return T`
            <button class=${pt(t)} part="button">
                ${this.text}
                ${ot(!this.use_icon,(()=>null),(()=>this.get_icon()))}
            </button>
        `}};ie.styles=[ee,te],se([it({attribute:!0,type:Boolean})],ie.prototype,"use_icon",void 0),se([it({attribute:!0})],ie.prototype,"type",void 0),se([it({attribute:!0})],ie.prototype,"text",void 0),ie=se([et(Qt.COMPONENT_PREFIX+"btn")],ie);const re=r`
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
`;var ne=r`
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
`,oe=function(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o};let le=class extends J{constructor(){super(...arguments),this.size="md"}render(){return T`
            <p class="wp-txt-${this.size}">
                <slot></slot>
            </p>
        `}};le.styles=[ee,ne],oe([it()],le.prototype,"size",void 0),le=oe([et(Qt.COMPONENT_PREFIX+"txt")],le);let ae=class extends J{render(){return T`
            <header class="wp-hdr">
                <slot></slot>
            </header>
        `}};ae.styles=[ee,ne],ae=oe([et(Qt.COMPONENT_PREFIX+"hdr")],ae);let he=class extends J{constructor(){super(...arguments),this.size="md"}render(){return this.href?T`
                <a href="wp-tag-${this.size}">
                    <slot></slot>
                </a>
            `:T`
            <span class="wp-tag-${this.size}">
                <slot></slot>
            </span>
        `}};he.styles=[ee,re,ne],oe([it()],he.prototype,"size",void 0),oe([it()],he.prototype,"href",void 0),he=oe([et(Qt.COMPONENT_PREFIX+"tag")],he);const ce=r`
    :host {
        display: grid;
    }

    .wp-layout-tbr-0 {
        display: grid;
        grid-template-rows: 10% 90%;
    }
    .wp-layout-tbr-0 {
        display: grid;
        grid-template-rows: 10% 90%;
    }
    .wp-layout-sbr-0 {
        display: grid;
        grid-template-columns: 10% 90%;
    }

    .wp-layout-sbr-1 {
        display: grid;
        grid-template-columns: 15% 85%;
    }
`;var de=function(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o};let ue=class extends J{constructor(){super(...arguments),this.type="topbar-0"}_convertTypeToClass(){switch(this.type){case"topbar-0":return"wp-layout-tbr-0";case"topbar-1":return"wp-layout-tbr-1";case"sidebar-1":return"wp-layout-sbr-1";default:return"wp-layout-sbr-0"}}render(){return T`
            <div class="${this._convertTypeToClass()}">
                <header class="wp-layout__hdr">
                    <slot></slot>
                </header>
                <main class="wp-layout__main">
                    <slot></slot>
                </main>
            </div>
        `}};ue.styles=ce,de([it()],ue.prototype,"type",void 0),ue=de([et(Qt.COMPONENT_PREFIX+"layout")],ue);const pe=r`
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
`;var fe=function(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o};let ve=class extends J{constructor(){super(...arguments),this.href="#",this.text=""}render(){return T` <a href="${this.href}">${this.text}</a> `}};ve.styles=[ee,pe],fe([it({attribute:!0,type:String})],ve.prototype,"href",void 0),fe([it({attribute:!0,type:String})],ve.prototype,"text",void 0),ve=fe([et(Qt.COMPONENT_PREFIX+"link")],ve);const ye=r`
:host {
	cursor: pointer;
	display: block;
	position: relative;
}

.wp-nav {
	display: grid;
	grid-template-columns: 25% 75%;
}

.wp-nav-logo a {
	display: flex;
	place-content: center;
}

.wp-nav-list {
	align-items: center;
	display: flex;
	justify-content: space-evenly;
}
`;var $e=function(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o};let _e=class extends J{constructor(){super(...arguments),this.type="flexed-burger",this.prefix_href=null}render(){var t;return T`
		<header class="wp-nav">
			<div class="wp-nav-logo">
				<a href=${null!==(t=this.prefix_href)&&void 0!==t?t:"/"}>
					<img
					src=${this.icon_url}
					alt="hdr icon"
					height="64"
					width="64">
				</a>
			</div>
			<div class="wp-nav-list">
				<slot></slot>
			</div>
		</header>
		`}};_e.styles=[ee,ye],$e([it()],_e.prototype,"type",void 0),$e([it()],_e.prototype,"prefix_href",void 0),$e([it()],_e.prototype,"icon_url",void 0),_e=$e([et(Qt.COMPONENT_PREFIX+"nav")],_e);export{i as CSSResult,Jt as Enums,J as LitElement,ie as WPBtn,ae as WPHdr,ue as WPLayout,ve as WPLink,_e as WPNav,he as WPTag,le as WPTxt,Zt as asyncReplace,kt as cache,nt as choose,pt as classMap,r as css,et as customElement,Tt as guard,T as html,Pt as ifDefined,Ot as keyed,Ut as live,St as map,it as property,Dt as ref,xt as repeat,ft as styleMap,Vt as unsafeHTML,Xt as unsafeSVG,Yt as until,ot as when};
