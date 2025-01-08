(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[494],{2194:(e,r,t)=>{Promise.resolve().then(t.bind(t,8761))},8761:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>b});var n=t(5155),o=t(4470),a=t(2115),i=t(2317),l=t(652),s=t(9602);let c=(0,l.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=a.forwardRef((e,r)=>{let{className:t,variant:o,size:a,asChild:l=!1,...u}=e,f=l?i.DX:"button";return(0,n.jsx)(f,{className:(0,s.cn)(c({variant:o,size:a,className:t})),ref:r,...u})});u.displayName="Button";var f=t(8173),d=t.n(f),p=t(8422);function m(e){let{index:r}=e,t=o.M.sort((e,r)=>e.index-r.index).map(e=>e.link).flat(),a=r>0?t[r-1]:t[t.length-1],i=r<t.length-1?t[r+1]:t[0];return(0,n.jsxs)("div",{className:"flex justify-between items-center border border-black rounded-full px-2 sm:px-6 py-3 max-[274px]:py-1 mx-auto w-[90vw] md:w-[66vw] lg:w-[50vw]",children:[(0,n.jsx)(d(),{href:a,children:(0,n.jsxs)(u,{variant:"ghost",className:"hover:bg-transparent flex gap-x-2 gap-y-0 max-[274px]:flex-wrap-reverse max-[274px]:min-h-fit",children:[(0,n.jsx)(p.eQE,{className:"mt-0.5"}),"Prev case"]})}),(0,n.jsx)("p",{className:"hidden sm:flex font-semibold text-center text-xl whitespace-nowrap",children:"Thanks for watching!"}),(0,n.jsx)(d(),{href:i,children:(0,n.jsxs)(u,{variant:"ghost",className:"hover:bg-transparent flex gap-x-2 gap-y-0 max-[274px]:flex-wrap max-[274px]:min-h-fit",children:["Next case",(0,n.jsx)(p.r9I,{className:"mt-0.5"})]})})]})}var g=t(7539),h=t(6046),v=t(5565);function b(e){let{children:r}=e,t=(0,h.usePathname)(),i=o.M.find(e=>e.link===t)||{name:"",imageSrc:"",imageAlt:"Oops! No image found.",bgColor:"#FFFFFF",index:-1};return(0,a.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{backgroundColor:i.bgColor},className:"absolute top-0 left-0 w-full h-[200px] z-0"}),(0,n.jsx)(v.default,{src:i.imageSrc,alt:i.imageAlt,className:"object-cover relative w-full h-auto mx-auto"}),(0,n.jsx)("main",{className:"",children:r}),(0,n.jsx)(m,{index:i.index}),(0,n.jsxs)("section",{className:"z-30 w-full overflow-hidden relative",children:[(0,n.jsx)("h4",{className:"absolute pl-4 lg:pl-16 top-1/3 text-sm -z-10",children:"Drag and drop the logos for some fun!"}),(0,n.jsx)(g.default,{isHeader:!1})]})]})}t(9324)},6046:(e,r,t)=>{"use strict";var n=t(6658);t.o(n,"usePathname")&&t.d(r,{usePathname:function(){return n.usePathname}}),t.o(n,"useRouter")&&t.d(r,{useRouter:function(){return n.useRouter}})},8068:(e,r,t)=>{"use strict";t.d(r,{s:()=>a,t:()=>o});var n=t(2115);function o(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function a(...e){return n.useCallback(o(...e),e)}},2317:(e,r,t)=>{"use strict";t.d(r,{DX:()=>i});var n=t(2115),o=t(8068),a=t(5155),i=n.forwardRef((e,r)=>{let{children:t,...o}=e,i=n.Children.toArray(t),s=i.find(c);if(s){let e=s.props.children,t=i.map(r=>r!==s?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,a.jsx)(l,{...o,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,a.jsx)(l,{...o,ref:r,children:t})});i.displayName="Slot";var l=n.forwardRef((e,r)=>{let{children:t,...a}=e;if(n.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t);return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let o=e[n],a=r[n];/^on[A-Z]/.test(n)?o&&a?t[n]=(...e)=>{a(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...a}:"className"===n&&(t[n]=[o,a].filter(Boolean).join(" "))}return{...e,...t}}(a,t.props),ref:r?(0,o.t)(r,e):e})}return n.Children.count(t)>1?n.Children.only(null):null});l.displayName="SlotClone";var s=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function c(e){return n.isValidElement(e)&&e.type===s}},3435:(e,r,t)=>{"use strict";t.d(r,{k5:()=>u});var n=t(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach(function(r){var n,o;n=r,o=t[r],(n=function(e){var r=function(e,r){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:r+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function u(e){return r=>n.createElement(f,l({attr:c({},e.attr)},r),function e(r){return r&&r.map((r,t)=>n.createElement(r.tag,c({key:t},r.attr),e(r.child)))}(e.child))}function f(e){var r=r=>{var t,{attr:o,size:a,title:s}=e,u=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,i),f=a||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,u,{className:t,style:c(c({color:e.color||r.color},r.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>r(e)):r(o)}}},e=>{var r=r=>e(e.s=r);e.O(0,[533,26,777,970,232,465,848,706,441,517,358],()=>r(2194)),_N_E=e.O()}]);