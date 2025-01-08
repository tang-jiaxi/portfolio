"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{5565:(e,t,n)=>{n.d(t,{default:()=>o.a});var r=n(4146),o=n.n(r)},8173:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let r=n(306),o=n(5155),u=r._(n(2115)),a=n(180),l=n(1394),i=n(4116),f=n(4445),c=n(5353),s=n(2170),d=n(9544);function p(e,t,n){"undefined"!=typeof window&&(async()=>e.prefetch(t,n))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}n(2363);let g=u.default.forwardRef(function(e,t){let n,r;let{href:a,as:g,children:y,prefetch:m=null,passHref:b,replace:P,shallow:v,scroll:E,onClick:_,onMouseEnter:j,onTouchStart:O,legacyBehavior:C=!1,...w}=e;n=y,C&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let k=u.default.useContext(l.AppRouterContext),I=!1!==m,M=null===m?f.PrefetchKind.AUTO:f.PrefetchKind.FULL,{href:S,as:x}=u.default.useMemo(()=>{let e=h(a);return{href:e,as:g?h(g):e}},[a,g]),T=u.default.useRef(S),A=u.default.useRef(x);C&&(r=u.default.Children.only(n));let N=C?r&&"object"==typeof r&&r.ref:t,[R,U,L]=(0,i.useIntersection)({rootMargin:"200px"}),z=u.default.useCallback(e=>{(A.current!==x||T.current!==S)&&(L(),A.current=x,T.current=S),R(e)},[x,S,L,R]),F=(0,c.useMergedRef)(z,N);u.default.useEffect(()=>{k&&U&&I&&p(k,S,{kind:M})},[x,S,U,I,k,M]);let K={ref:F,onClick(e){C||"function"!=typeof _||_(e),C&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),k&&!e.defaultPrevented&&function(e,t,n,r,o,a,l){let{nodeName:i}=e.currentTarget;"A"===i.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),u.default.startTransition(()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})}))}(e,k,S,x,P,v,E)},onMouseEnter(e){C||"function"!=typeof j||j(e),C&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),k&&I&&p(k,S,{kind:M})},onTouchStart:function(e){C||"function"!=typeof O||O(e),C&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),k&&I&&p(k,S,{kind:M})}};return(0,s.isAbsoluteUrl)(x)?K.href=x:C&&!b&&("a"!==r.type||"href"in r.props)||(K.href=(0,d.addBasePath)(x)),C?u.default.cloneElement(r,K):(0,o.jsx)("a",{...w,...K,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(2115),o=n(8571),u="function"==typeof IntersectionObserver,a=new Map,l=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,f=i||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(f||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),a.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[f,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4146:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return i},getImageProps:function(){return l}});let r=n(306),o=n(666),u=n(7970),a=r._(n(5514));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let i=u.Image},180:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return l},urlObjectKeys:function(){return a}});let r=n(9955)._(n(4156)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:n}=e,u=e.protocol||"",a=e.pathname||"",l=e.hash||"",i=e.query||"",f=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?f=t+e.host:n&&(f=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(f+=":"+e.port)),i&&"object"==typeof i&&(i=String(r.urlQueryToSearchParams(i)));let c=e.search||i&&"?"+i||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==f?(f="//"+(f||""),a&&"/"!==a[0]&&(a="/"+a)):f||(f=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+u+f+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return u(e)}},4156:(e,t)=>{function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function u(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return m},NormalizeError:function(){return g},PageNotFoundError:function(){return y},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return i},getLocationOrigin:function(){return a},getURL:function(){return l},isAbsoluteUrl:function(){return u},isResSent:function(){return f},loadGetInitialProps:function(){return s},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return P}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),u=0;u<r;u++)o[u]=arguments[u];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function l(){let{href:e}=window.location,t=a();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function s(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await s(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&f(n))return r;if(!r)throw Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class g extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function P(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);