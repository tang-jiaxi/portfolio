(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{7034:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(2265);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:l,className:s="",children:c,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...a,width:o,height:o,stroke:n,strokeWidth:l?24*Number(u)/Number(o):u,className:i("lucide",s),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),l=((e,t)=>{let n=(0,r.forwardRef)((n,a)=>{let{className:l,...s}=n;return(0,r.createElement)(u,{ref:a,iconNode:t,className:i("lucide-".concat(o(e)),l),...s})});return n.displayName="".concat(e),n})("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},9376:function(e,t,n){"use strict";var r=n(5475);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},1934:function(e){e.exports={style:{fontFamily:"'__DM_Sans_8a1573', '__DM_Sans_Fallback_8a1573'",fontStyle:"normal"},className:"__className_8a1573"}},1366:function(e){e.exports={style:{fontFamily:"'__Zen_Kaku_Gothic_New_2d575f', '__Zen_Kaku_Gothic_New_Fallback_2d575f'",fontStyle:"normal"},className:"__className_2d575f"}},5668:function(e,t,n){"use strict";n.d(t,{VY:function(){return ex},z$:function(){return eN},ck:function(){return eg},rU:function(){return eE},aV:function(){return ey},fC:function(){return eh},xz:function(){return eb},l_:function(){return eC}});var r,o=n(2265),i=n(4887),a=n(7437),u=n(6741),l=n(6840),s=n(886),c=n(8575),d=n(9114),f=n(1188),v=e=>{var t,n;let r,i;let{present:a,children:u}=e,l=function(e){var t,n;let[r,i]=o.useState(),a=o.useRef({}),u=o.useRef(e),l=o.useRef("none"),[s,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return o.useEffect(()=>{let e=m(a.current);l.current="mounted"===s?e:"none"},[s]),(0,f.b)(()=>{let t=a.current,n=u.current;if(n!==e){let r=l.current,o=m(t);e?c("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),u.current=e}},[e,c]),(0,f.b)(()=>{if(r){var e;let t;let n=null!==(e=r.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=m(a.current).includes(e.animationName);if(e.target===r&&o&&(c("ANIMATION_END"),!u.current)){let e=r.style.animationFillMode;r.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=e)})}},i=e=>{e.target===r&&(l.current=m(a.current))};return r.addEventListener("animationstart",i),r.addEventListener("animationcancel",o),r.addEventListener("animationend",o),()=>{n.clearTimeout(t),r.removeEventListener("animationstart",i),r.removeEventListener("animationcancel",o),r.removeEventListener("animationend",o)}}c("ANIMATION_END")},[r,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:o.useCallback(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(a),s="function"==typeof u?u({present:l.isPresent}):o.Children.only(u),d=(0,c.e)(l.ref,(r=null===(t=Object.getOwnPropertyDescriptor(s.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in r&&r.isReactWarning?s.ref:(r=null===(n=Object.getOwnPropertyDescriptor(s,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning?s.props.ref:s.props.ref||s.ref);return"function"==typeof u||l.isPresent?o.cloneElement(s,{ref:d}):null};function m(e){return(null==e?void 0:e.animationName)||"none"}v.displayName="Presence";var p=n(9255),w=n(7822),h=n(6606),y="dismissableLayer.update",g=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),b=o.forwardRef((e,t)=>{var n,i;let{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:d,onPointerDownOutside:f,onFocusOutside:v,onInteractOutside:m,onDismiss:p,...w}=e,b=o.useContext(g),[x,C]=o.useState(null),R=null!==(i=null==x?void 0:x.ownerDocument)&&void 0!==i?i:null===(n=globalThis)||void 0===n?void 0:n.document,[,M]=o.useState({}),O=(0,c.e)(t,e=>C(e)),j=Array.from(b.layers),[P]=[...b.layersWithOutsidePointerEventsDisabled].slice(-1),T=j.indexOf(P),_=x?j.indexOf(x):-1,L=b.layersWithOutsidePointerEventsDisabled.size>0,D=_>=T,k=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,h.W)(e),i=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){N("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...b.branches].some(e=>e.contains(t));!D||n||(null==f||f(e),null==m||m(e),e.defaultPrevented||null==p||p())},R),S=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,h.W)(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&N("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...b.branches].some(e=>e.contains(t))||(null==v||v(e),null==m||m(e),e.defaultPrevented||null==p||p())},R);return!function(e,t=globalThis?.document){let n=(0,h.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{_!==b.layers.size-1||(null==d||d(e),!e.defaultPrevented&&p&&(e.preventDefault(),p()))},R),o.useEffect(()=>{if(x)return s&&(0===b.layersWithOutsidePointerEventsDisabled.size&&(r=R.body.style.pointerEvents,R.body.style.pointerEvents="none"),b.layersWithOutsidePointerEventsDisabled.add(x)),b.layers.add(x),E(),()=>{s&&1===b.layersWithOutsidePointerEventsDisabled.size&&(R.body.style.pointerEvents=r)}},[x,R,s,b]),o.useEffect(()=>()=>{x&&(b.layers.delete(x),b.layersWithOutsidePointerEventsDisabled.delete(x),E())},[x,b]),o.useEffect(()=>{let e=()=>M({});return document.addEventListener(y,e),()=>document.removeEventListener(y,e)},[]),(0,a.jsx)(l.WV.div,{...w,ref:O,style:{pointerEvents:L?D?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.M)(e.onFocusCapture,S.onFocusCapture),onBlurCapture:(0,u.M)(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:(0,u.M)(e.onPointerDownCapture,k.onPointerDownCapture)})});function E(){let e=new CustomEvent(y);document.dispatchEvent(e)}function N(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?(0,l.jH)(i,a):i.dispatchEvent(a)}b.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(g),r=o.useRef(null),i=(0,c.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,a.jsx)(l.WV.div,{...e,ref:i})}).displayName="DismissableLayerBranch";var x=o.forwardRef((e,t)=>(0,a.jsx)(l.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));x.displayName="VisuallyHidden";var C="NavigationMenu",[R,M,O]=(0,w.B)(C),[j,P,T]=(0,w.B)(C),[_,L]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>o.createContext(e));return function(n){let r=n?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let i=o.createContext(r),u=n.length;n=[...n,r];let l=t=>{let{scope:n,children:r,...l}=t,s=n?.[e]?.[u]||i,c=o.useMemo(()=>l,Object.values(l));return(0,a.jsx)(s.Provider,{value:c,children:r})};return l.displayName=t+"Provider",[l,function(n,a){let l=a?.[e]?.[u]||i,s=o.useContext(l);if(s)return s;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(C,[O,T]),[D,k]=_(C),[S,W]=_(C),I=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:i,defaultValue:u,delayDuration:f=200,skipDelayDuration:v=300,orientation:m="horizontal",dir:p,...w}=e,[h,y]=o.useState(null),g=(0,c.e)(t,e=>y(e)),b=(0,d.gm)(p),E=o.useRef(0),N=o.useRef(0),x=o.useRef(0),[C,R]=o.useState(!0),[M="",O]=(0,s.T)({prop:r,onChange:e=>{let t=v>0;""!==e?(window.clearTimeout(x.current),t&&R(!1)):(window.clearTimeout(x.current),x.current=window.setTimeout(()=>R(!0),v)),null==i||i(e)},defaultProp:u}),j=o.useCallback(()=>{window.clearTimeout(N.current),N.current=window.setTimeout(()=>O(""),150)},[O]),P=o.useCallback(e=>{window.clearTimeout(N.current),O(e)},[O]),T=o.useCallback(e=>{M===e?window.clearTimeout(N.current):E.current=window.setTimeout(()=>{window.clearTimeout(N.current),O(e)},f)},[M,O,f]);return o.useEffect(()=>()=>{window.clearTimeout(E.current),window.clearTimeout(N.current),window.clearTimeout(x.current)},[]),(0,a.jsx)(F,{scope:n,isRootMenu:!0,value:M,dir:b,orientation:m,rootNavigationMenu:h,onTriggerEnter:e=>{window.clearTimeout(E.current),C?T(e):P(e)},onTriggerLeave:()=>{window.clearTimeout(E.current),j()},onContentEnter:()=>window.clearTimeout(N.current),onContentLeave:j,onItemSelect:e=>{O(t=>t===e?"":e)},onItemDismiss:()=>O(""),children:(0,a.jsx)(l.WV.nav,{"aria-label":"Main","data-orientation":m,dir:b,...w,ref:g})})});I.displayName=C;var A="NavigationMenuSub";o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:i,orientation:u="horizontal",...c}=e,d=k(A,n),[f="",v]=(0,s.T)({prop:r,onChange:o,defaultProp:i});return(0,a.jsx)(F,{scope:n,isRootMenu:!1,value:f,dir:d.dir,orientation:u,rootNavigationMenu:d.rootNavigationMenu,onTriggerEnter:e=>v(e),onItemSelect:e=>v(e),onItemDismiss:()=>v(""),children:(0,a.jsx)(l.WV.div,{"data-orientation":u,...c,ref:t})})}).displayName=A;var F=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:i,orientation:u,children:l,value:s,onItemSelect:c,onItemDismiss:d,onTriggerEnter:f,onTriggerLeave:v,onContentEnter:m,onContentLeave:w}=e,[y,g]=o.useState(null),[b,E]=o.useState(new Map),[N,x]=o.useState(null);return(0,a.jsx)(D,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:s,previousValue:function(e){let t=o.useRef({value:e,previous:e});return o.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(s),baseId:(0,p.M)(),dir:i,orientation:u,viewport:y,onViewportChange:g,indicatorTrack:N,onIndicatorTrackChange:x,onTriggerEnter:(0,h.W)(f),onTriggerLeave:(0,h.W)(v),onContentEnter:(0,h.W)(m),onContentLeave:(0,h.W)(w),onItemSelect:(0,h.W)(c),onItemDismiss:(0,h.W)(d),onViewportContentChange:o.useCallback((e,t)=>{E(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:o.useCallback(e=>{E(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,a.jsx)(R.Provider,{scope:t,children:(0,a.jsx)(S,{scope:t,items:b,children:l})})})},V="NavigationMenuList",K=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=k(V,n),i=(0,a.jsx)(l.WV.ul,{"data-orientation":o.orientation,...r,ref:t});return(0,a.jsx)(l.WV.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,a.jsx)(R.Slot,{scope:n,children:o.isRootMenu?(0,a.jsx)(eu,{asChild:!0,children:i}):i})})});K.displayName=V;var z="NavigationMenuItem",[U,B]=_(z),H=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,...i}=e,u=(0,p.M)(),s=o.useRef(null),c=o.useRef(null),d=o.useRef(null),f=o.useRef(()=>{}),v=o.useRef(!1),m=o.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(s.current){f.current();let t=ec(s.current);t.length&&ed("start"===e?t:t.reverse())}},[]),w=o.useCallback(()=>{if(s.current){let e=ec(s.current);e.length&&(f.current=(e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}))}},[]);return(0,a.jsx)(U,{scope:n,value:r||u||"LEGACY_REACT_AUTO_VALUE",triggerRef:c,contentRef:s,focusProxyRef:d,wasEscapeCloseRef:v,onEntryKeyDown:m,onFocusProxyEnter:m,onRootContentClose:w,onContentFocusOutside:w,children:(0,a.jsx)(l.WV.li,{...i,ref:t})})});H.displayName=z;var $="NavigationMenuTrigger",G=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:r,...i}=e,s=k($,e.__scopeNavigationMenu),d=B($,e.__scopeNavigationMenu),f=o.useRef(null),v=(0,c.e)(f,d.triggerRef,t),m=em(s.baseId,d.value),p=ep(s.baseId,d.value),w=o.useRef(!1),h=o.useRef(!1),y=d.value===s.value;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(R.ItemSlot,{scope:n,value:d.value,children:(0,a.jsx)(es,{asChild:!0,children:(0,a.jsx)(l.WV.button,{id:m,disabled:r,"data-disabled":r?"":void 0,"data-state":ev(y),"aria-expanded":y,"aria-controls":p,...i,ref:v,onPointerEnter:(0,u.M)(e.onPointerEnter,()=>{h.current=!1,d.wasEscapeCloseRef.current=!1}),onPointerMove:(0,u.M)(e.onPointerMove,ew(()=>{r||h.current||d.wasEscapeCloseRef.current||w.current||(s.onTriggerEnter(d.value),w.current=!0)})),onPointerLeave:(0,u.M)(e.onPointerLeave,ew(()=>{r||(s.onTriggerLeave(),w.current=!1)})),onClick:(0,u.M)(e.onClick,()=>{s.onItemSelect(d.value),h.current=y}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===s.dir?"ArrowLeft":"ArrowRight"}[s.orientation];y&&e.key===t&&(d.onEntryKeyDown(),e.preventDefault())})})})}),y&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x,{"aria-hidden":!0,tabIndex:0,ref:d.focusProxyRef,onFocus:e=>{let t=d.contentRef.current,n=e.relatedTarget,r=n===f.current,o=null==t?void 0:t.contains(n);(r||!o)&&d.onFocusProxyEnter(r?"start":"end")}}),s.viewport&&(0,a.jsx)("span",{"aria-owns":p})]})]})});G.displayName=$;var Z="navigationMenu.linkSelect",Y=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:r,onSelect:o,...i}=e;return(0,a.jsx)(es,{asChild:!0,children:(0,a.jsx)(l.WV.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...i,ref:t,onClick:(0,u.M)(e.onClick,e=>{let t=e.target,n=new CustomEvent(Z,{bubbles:!0,cancelable:!0});if(t.addEventListener(Z,e=>null==o?void 0:o(e),{once:!0}),(0,l.jH)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(en,{bubbles:!0,cancelable:!0});(0,l.jH)(t,e)}},{checkForDefaultPrevented:!1})})})});Y.displayName="NavigationMenuLink";var q="NavigationMenuIndicator",X=o.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=k(q,e.__scopeNavigationMenu),u=!!o.value;return o.indicatorTrack?i.createPortal((0,a.jsx)(v,{present:n||u,children:(0,a.jsx)(J,{...r,ref:t})}),o.indicatorTrack):null});X.displayName=q;var J=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,i=k(q,n),u=M(n),[s,c]=o.useState(null),[d,f]=o.useState(null),v="horizontal"===i.orientation,m=!!i.value;o.useEffect(()=>{var e;let t=null===(e=u().find(e=>e.value===i.value))||void 0===e?void 0:e.ref.current;t&&c(t)},[u,i.value]);let p=()=>{s&&f({size:v?s.offsetWidth:s.offsetHeight,offset:v?s.offsetLeft:s.offsetTop})};return ef(s,p),ef(i.indicatorTrack,p),d?(0,a.jsx)(l.WV.div,{"aria-hidden":!0,"data-state":m?"visible":"hidden","data-orientation":i.orientation,...r,ref:t,style:{position:"absolute",...v?{left:0,width:d.size+"px",transform:"translateX(".concat(d.offset,"px)")}:{top:0,height:d.size+"px",transform:"translateY(".concat(d.offset,"px)")},...r.style}}):null}),Q="NavigationMenuContent",ee=o.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=k(Q,e.__scopeNavigationMenu),i=B(Q,e.__scopeNavigationMenu),l=(0,c.e)(i.contentRef,t),s=i.value===o.value,d={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return o.viewport?(0,a.jsx)(et,{forceMount:n,...d,ref:l}):(0,a.jsx)(v,{present:n||s,children:(0,a.jsx)(er,{"data-state":ev(s),...d,ref:l,onPointerEnter:(0,u.M)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,u.M)(e.onPointerLeave,ew(o.onContentLeave)),style:{pointerEvents:!s&&o.isRootMenu?"none":void 0,...d.style}})})});ee.displayName=Q;var et=o.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=k(Q,e.__scopeNavigationMenu);return(0,f.b)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,f.b)(()=>()=>r(e.value),[e.value,r]),null}),en="navigationMenu.rootContentDismiss",er=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,triggerRef:i,focusProxyRef:l,wasEscapeCloseRef:s,onRootContentClose:d,onContentFocusOutside:f,...v}=e,m=k(Q,n),p=o.useRef(null),w=(0,c.e)(p,t),h=em(m.baseId,r),y=ep(m.baseId,r),g=M(n),E=o.useRef(null),{onItemDismiss:N}=m;o.useEffect(()=>{let e=p.current;if(m.isRootMenu&&e){let t=()=>{var t;N(),d(),e.contains(document.activeElement)&&(null===(t=i.current)||void 0===t||t.focus())};return e.addEventListener(en,t),()=>e.removeEventListener(en,t)}},[m.isRootMenu,e.value,i,N,d]);let x=o.useMemo(()=>{let e=g().map(e=>e.value);"rtl"===m.dir&&e.reverse();let t=e.indexOf(m.value),n=e.indexOf(m.previousValue),o=r===m.value,i=n===e.indexOf(r);if(!o&&!i)return E.current;let a=(()=>{if(t!==n){if(o&&-1!==n)return t>n?"from-end":"from-start";if(i&&-1!==t)return t>n?"to-start":"to-end"}return null})();return E.current=a,a},[m.previousValue,m.value,m.dir,g,r]);return(0,a.jsx)(eu,{asChild:!0,children:(0,a.jsx)(b,{id:y,"aria-labelledby":h,"data-motion":x,"data-orientation":m.orientation,...v,ref:w,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event(en,{bubbles:!0,cancelable:!0});null===(e=p.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,u.M)(e.onFocusOutside,e=>{var t;f();let n=e.target;(null===(t=m.rootNavigationMenu)||void 0===t?void 0:t.contains(n))&&e.preventDefault()}),onPointerDownOutside:(0,u.M)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=g().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),o=m.isRootMenu&&(null===(t=m.viewport)||void 0===t?void 0:t.contains(n));(r||o||!m.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ec(e.currentTarget),r=document.activeElement,o=t.findIndex(e=>e===r);if(ed(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length)))e.preventDefault();else{var n;null===(n=l.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,u.M)(e.onEscapeKeyDown,e=>{s.current=!0})})})}),eo="NavigationMenuViewport",ei=o.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=!!k(eo,e.__scopeNavigationMenu).value;return(0,a.jsx)(v,{present:n||o,children:(0,a.jsx)(ea,{...r,ref:t})})});ei.displayName=eo;var ea=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:r,...i}=e,s=k(eo,n),d=(0,c.e)(t,s.onViewportChange),f=W(Q,e.__scopeNavigationMenu),[m,p]=o.useState(null),[w,h]=o.useState(null),y=m?(null==m?void 0:m.width)+"px":void 0,g=m?(null==m?void 0:m.height)+"px":void 0,b=!!s.value,E=b?s.value:s.previousValue;return ef(w,()=>{w&&p({width:w.offsetWidth,height:w.offsetHeight})}),(0,a.jsx)(l.WV.div,{"data-state":ev(b),"data-orientation":s.orientation,...i,ref:d,style:{pointerEvents:!b&&s.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":y,"--radix-navigation-menu-viewport-height":g,...i.style},onPointerEnter:(0,u.M)(e.onPointerEnter,s.onContentEnter),onPointerLeave:(0,u.M)(e.onPointerLeave,ew(s.onContentLeave)),children:Array.from(f.items).map(e=>{let[t,{ref:n,forceMount:r,...o}]=e,i=E===t;return(0,a.jsx)(v,{present:r||i,children:(0,a.jsx)(er,{...o,ref:(0,c.F)(n,e=>{i&&e&&h(e)})})},t)})})}),eu=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=k("FocusGroup",n);return(0,a.jsx)(j.Provider,{scope:n,children:(0,a.jsx)(j.Slot,{scope:n,children:(0,a.jsx)(l.WV.div,{dir:o.dir,...r,ref:t})})})}),el=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],es=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=P(n),i=k("FocusGroupItem",n);return(0,a.jsx)(j.ItemSlot,{scope:n,children:(0,a.jsx)(l.WV.button,{...r,ref:t,onKeyDown:(0,u.M)(e.onKeyDown,e=>{if(["Home","End",...el].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===i.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),el.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>ed(t)),e.preventDefault()}})})})});function ec(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ed(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function ef(e,t){let n=(0,h.W)(t);(0,f.b)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function ev(e){return e?"open":"closed"}function em(e,t){return"".concat(e,"-trigger-").concat(t)}function ep(e,t){return"".concat(e,"-content-").concat(t)}function ew(e){return t=>"mouse"===t.pointerType?e(t):void 0}var eh=I,ey=K,eg=H,eb=G,eE=Y,eN=X,ex=ee,eC=ei},6231:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=["attr","size","title"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e){return t=>r.createElement(d,u({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,s({key:n},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var n,{attr:o,size:i,title:l}=e,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,a),d=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);