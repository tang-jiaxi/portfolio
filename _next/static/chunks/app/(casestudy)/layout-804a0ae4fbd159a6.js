(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[494],{2194:(e,t,r)=>{Promise.resolve().then(r.bind(r,8761))},8761:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(5155),o=r(4470),i=r(2115),a=r(2317),l=r(1027),s=r(9602);let c=(0,l.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,t)=>{let{className:r,variant:o,size:i,asChild:l=!1,...u}=e,f=l?a.DX:"button";return(0,n.jsx)(f,{className:(0,s.cn)(c({variant:o,size:i,className:r})),ref:t,...u})});u.displayName="Button";var f=r(8173),d=r.n(f),p=r(8422);function m(e){let{index:t}=e,r=o.M.sort((e,t)=>e.index-t.index).map(e=>e.link).flat(),i=t>0?r[t-1]:r[r.length-1],a=t<r.length-1?r[t+1]:r[0];return(0,n.jsxs)("div",{className:"flex justify-between items-center border border-black rounded-full px-2 sm:px-6 py-3 max-[274px]:py-1 mx-auto w-[90vw] md:w-[66vw] lg:w-[50vw]",children:[(0,n.jsx)(d(),{href:i,children:(0,n.jsxs)(u,{variant:"ghost",className:"hover:bg-transparent flex gap-x-2 gap-y-0 max-[274px]:flex-wrap-reverse max-[274px]:min-h-fit",children:[(0,n.jsx)(p.eQE,{className:"mt-0.5"}),"Prev case"]})}),(0,n.jsx)("p",{className:"hidden sm:flex font-semibold text-center text-xl whitespace-nowrap",children:"Thanks for watching!"}),(0,n.jsx)(d(),{href:a,children:(0,n.jsxs)(u,{variant:"ghost",className:"hover:bg-transparent flex gap-x-2 gap-y-0 max-[274px]:flex-wrap max-[274px]:min-h-fit",children:["Next case",(0,n.jsx)(p.r9I,{className:"mt-0.5"})]})})]})}var g=r(7539),h=r(6046),v=r(5565);function b(e){let{children:t}=e,r=(0,h.usePathname)(),a=o.M.find(e=>e.link===r)||{name:"",imageSrc:"",imageAlt:"Oops! No image found.",bgColor:"#FFFFFF",index:-1};return(0,i.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{backgroundColor:a.bgColor},className:"absolute top-0 left-0 w-full h-[200px] z-0"}),(0,n.jsx)(v.default,{src:a.imageSrc,alt:a.imageAlt,className:"object-cover relative w-full h-auto mx-auto"}),(0,n.jsx)("main",{className:"",children:t}),(0,n.jsx)(m,{index:a.index}),(0,n.jsxs)("section",{className:"z-30 w-full overflow-hidden relative",children:[(0,n.jsx)("h4",{className:"absolute pl-4 lg:pl-16 top-1/3 text-sm -z-10",children:"Drag and drop the logos for some fun!"}),(0,n.jsx)(g.default,{isHeader:!1})]})]})}r(9324)},6046:(e,t,r)=>{"use strict";var n=r(6658);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},8068:(e,t,r)=>{"use strict";r.d(t,{s:()=>a,t:()=>i});var n=r(2115);function o(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function i(...e){return t=>{let r=!1,n=e.map(e=>{let n=o(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():o(e[t],null)}}}}function a(...e){return n.useCallback(i(...e),e)}},2317:(e,t,r)=>{"use strict";r.d(t,{DX:()=>a});var n=r(2115),o=r(8068),i=r(5155),a=n.forwardRef((e,t)=>{let{children:r,...o}=e,a=n.Children.toArray(r),s=a.find(c);if(s){let e=s.props.children,r=a.map(t=>t!==s?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,i.jsx)(l,{...o,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,i.jsx)(l,{...o,ref:t,children:r})});a.displayName="Slot";var l=n.forwardRef((e,t)=>{let{children:r,...i}=e;if(n.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...e)=>{i(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...i}:"className"===n&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}(i,r.props),ref:t?(0,o.t)(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});l.displayName="SlotClone";var s=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function c(e){return n.isValidElement(e)&&e.type===s}},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var n=r(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:i,title:s}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),f=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}},e=>{var t=t=>e(e.s=t);e.O(0,[533,26,777,970,433,465,848,706,441,517,358],()=>t(2194)),_N_E=e.O()}]);