(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5117:(e,t,a)=>{Promise.resolve().then(a.bind(a,6758))},6758:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>T});var l=a(5155);a(9324);var r=a(2115),s=a(6751),n=a(9602),i=a(9501);let o=(0,a(652).F)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}});r.forwardRef((e,t)=>{let{className:a,variant:r,size:s,...d}=e;return(0,l.jsx)(i.b,{ref:t,className:(0,n.cn)(o({variant:r,size:s,className:a})),...d})}).displayName=i.b.displayName;let d=r.createContext({size:"default",variant:"default"}),c=r.forwardRef((e,t)=>{let{className:a,variant:r,size:i,children:o,...c}=e;return(0,l.jsx)(s.bL,{ref:t,className:(0,n.cn)("flex items-center justify-center gap-1",a),...c,children:(0,l.jsx)(d.Provider,{value:{variant:r,size:i},children:o})})});c.displayName=s.bL.displayName;let u=r.forwardRef((e,t)=>{let{className:a,children:i,variant:c,size:u,...x}=e,m=r.useContext(d);return(0,l.jsx)(s.q7,{ref:t,className:(0,n.cn)(o({variant:m.variant||c,size:m.size||u}),a),...x,children:i})});u.displayName=s.q7.displayName;var x=a(9228),m=a(719),h=a.n(m),f=a(5603);let g=()=>{let e=(0,r.useRef)(null),{filter:t,setFilter:a}=(0,r.useContext)(f.g),s=(0,r.useRef)(!1),n=t.split("#")[0];(0,r.useEffect)(()=>{if(!s.current){s.current=!0;return}if(e.current){let t=e.current.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:t,behavior:"smooth"})}},[t]);let i=h()(e=>{e?a(e):a("ShowAll")},100);return(0,l.jsx)("div",{id:"filter",ref:e,className:"flex flex-col gap-16 px-4",children:(0,l.jsx)("div",{className:"border border-black p-2 sm:p-4 inline-block rounded-3xl mx-auto bg-white",children:(0,l.jsxs)(c,{type:"single",onValueChange:i,value:n,className:"flex flex-wrap justify-center gap-0 md:gap-2",children:[(0,l.jsx)(u,{value:"ShowAll","aria-label":"Toggle Show All",className:"hover:bg-transparent data-[state=on]:bg-transparent px-1",children:(0,l.jsx)(x.A,{isSelected:"ShowAll"===n,tag:"ShowAll"})}),(0,l.jsx)(u,{value:"UX","aria-label":"Toggle UX",className:"hover:bg-transparent data-[state=on]:bg-transparent px-1",children:(0,l.jsx)(x.A,{isSelected:"UX"===n,tag:"UX"})}),(0,l.jsx)(u,{value:"CS","aria-label":"Toggle CS",className:"hover:bg-transparent data-[state=on]:bg-transparent px-1",children:(0,l.jsx)(x.A,{isSelected:"CS"===n,tag:"CS"})}),(0,l.jsx)(u,{value:"GDES","aria-label":"Toggle GDES",className:"hover:bg-transparent data-[state=on]:bg-transparent px-1",children:(0,l.jsx)(x.A,{isSelected:"GDES"===n,tag:"GDES"})})]})})})};var b=a(5565),v=a(8173),p=a.n(v);function w(e){let{className:t,...a}=e;return(0,l.jsx)("div",{className:(0,n.cn)("animate-pulse rounded-md bg-moremuted",t),...a})}function j(){return(0,l.jsxs)("div",{className:"mx-auto w-[92vw] lg:w-[70vw] p-0 rounded-[30px] md:rounded-[50px] overflow-hidden border border-black bg-white",children:[(0,l.jsx)("div",{className:"relative w-full overflow-hidden",children:(0,l.jsx)(w,{className:"w-full aspect-video"})}),(0,l.jsx)("div",{className:"flex flex-col px-4 pt-4 pb-6 md:px-8 lg:pb-10 max-w-full border-t border-black",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row flex-nowrap justify-between",children:[(0,l.jsx)(w,{className:"h-8 mb-3 md:mb-0 md:w-3/5"}),(0,l.jsxs)("div",{className:"flex flex-col gap-3 md:gap-4 md:w-3/5 md:items-end",children:[(0,l.jsx)(w,{className:"h-4 w-2/5"}),(0,l.jsx)(w,{className:"h-4 w-3/5"})]})]})})]})}let N=e=>{let{imageSrc:t,imageAlt:a,blurData:s,title:n,tags:i,hashtags:o,link:d}=e;return(0,l.jsx)(r.Suspense,{fallback:(0,l.jsx)(j,{}),children:(0,l.jsx)(p(),{href:d,passHref:!0,className:"border-b border-black",children:(0,l.jsx)("div",{className:"block focus:outline-none transition duration-150 ease-in-out",children:(0,l.jsxs)("div",{className:"mx-auto w-[92vw] lg:w-[70vw] p-0 rounded-[30px] overflow-hidden border border-black hover:bg-gray-100 bg-white",children:[(0,l.jsx)("div",{className:"relative w-full overflow-hidden",children:(0,l.jsx)(b.default,{src:t,alt:a,className:"object-cover object-center",placeholder:"blur",blurDataURL:s})}),(0,l.jsx)("div",{className:"flex flex-col px-4 pt-4 pb-6 md:px-8 lg:pb-10 max-w-full border-t border-black",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row flex-nowrap justify-between",children:[(0,l.jsx)("h2",{className:"mb-3 md:mb-0 md:w-2/5 text-black",children:n}),(0,l.jsxs)("div",{className:"flex flex-col gap-3 md:gap-4",children:[(0,l.jsx)("div",{className:"flex flex-wrap lg:flex-nowrap gap-2 justify-start md:justify-end",children:i}),(0,l.jsx)("div",{className:"flex flex-wrap gap-x-2 md:gap-x-4 justify-start md:justify-end text-gray-500",children:o.map((e,t)=>(0,l.jsx)("h3",{children:e},t))})]})]})})]})})})})};var y=a(8779),S=a(5683),k=a(972),D=a(4470);let C=()=>{let{filter:e}=(0,r.useContext)(f.g),t=e.split("#")[0],a="ShowAll"===t?D.M:D.M.filter(e=>e.tags.includes(t));return(0,l.jsx)(y.P.div,{layout:!0,className:"grid grid-cols-1 gap-16",children:(0,l.jsx)(S.N,{mode:"sync",children:a.map((e,a)=>(0,l.jsx)(y.P.div,{layout:!0,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,height:0},transition:{type:"tween",duration:.3,ease:k.am,delay:.04*a},className:"block w-full focus:outline-none rounded-lg",children:(0,l.jsx)("div",{className:"block w-full focus:outline-non rounded-lg transition duration-150 ease-in-out",children:(0,l.jsx)(N,{imageSrc:e.imageSrc,imageAlt:e.imageAlt,blurData:e.blurData,title:e.title,tags:e.tags.map((e,a)=>(0,l.jsx)(x.A,{tag:e,isSelected:t===e},a)),hashtags:e.hashtags,link:e.link})},e.title||a)},"".concat(a,"-").concat(t)))})})};var A=a(7539);let z={src:"/_next/static/media/heroImage.b9ccdae2.svg",height:730,width:1440,blurWidth:0,blurHeight:0},E={src:"/_next/static/media/bottomWave.38015447.svg",height:309,width:1440,blurWidth:0,blurHeight:0};a(7202);let U=()=>{let e=(()=>{let e=[];for(let t=0;t<15;t++){let t=Math.floor(100*Math.random()),a=20*Math.random(),l=10*Math.random()+5;e.push({top:"".concat(t,"vh"),delay:"".concat(a,"s"),width:"".concat(l,"vw")})}return e})();return(0,l.jsx)("div",{className:"lines-container",children:e.map((e,t)=>(0,l.jsx)("div",{className:"line",style:{top:e.top,animationDelay:e.delay,width:e.width}},t))})},T=()=>{let[e,t]=(0,r.useState)(0),[a,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=h()(()=>{t(e=>e+1),s(window.innerWidth<=600)},100);return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),e.cancel()}},[]),(0,l.jsxs)("div",{className:"flex flex-col gap-0 w-full h-auto mx-auto",children:[(0,l.jsxs)("div",{className:"relative z-10 w-full h-[60vh] inter:h-auto overflow-hidden",children:[(0,l.jsx)(b.default,{src:z,alt:"Hero Image",className:"z-10 invisible inter:visible object-cover"}),(0,l.jsxs)("div",{className:"absolute inset-0 z-30 mx-auto inter:ml-[8vw] md:ml-[10vw] lg:ml-[11vw] mt-[3vh] inter:mt-[3vh] md:mt-[6vh] lg:mt-[12vh] max-w-[90vw] h-fit pointer-events-none",children:[(0,l.jsxs)("h1",{className:"font-bold lg:text-[2.75vw] lg:leading-[3.9vw]",children:["Hi, I’m Jiaxi Tang!",(0,l.jsx)("br",{}),"UX Designer. UI Engineer."]}),(0,l.jsxs)("h2",{className:"pt-4 text-black font-normal md:pt-6 lg:text-[1.6vw] lg:leading-[2.5vw] inter:max-w-[55vw] md:max-w-[45vw] lg:max-w-[40vw]",children:["I’m pursuing a ",(0,l.jsx)("span",{style:{textDecoration:"underline",textDecorationThickness:"clamp(0.155rem, 0.25vw, 0.25vw)",textDecorationColor:"#DD5868",textUnderlineOffset:"clamp(0.3rem, 0.55vw, 0.55vw)"},children:" dual degree in Computer Science and Graphic Design with a minor in UX Design."})," Currently the President of design consultancy club, Design U!"]}),(0,l.jsx)("h4",{className:"pt-[15vh] z-0",children:"Drag and drop the logos for some fun!"})]}),(0,l.jsx)("div",{className:"absolute z-20 bottom-0",children:(0,l.jsx)(A.default,{isHeader:!0,isMobile:a})},e),(0,l.jsx)("div",{className:"absolute inset-0 -z-10 w-full",children:(0,l.jsx)(U,{})})]}),(0,l.jsxs)("div",{className:"w-full bg-red-light flex flex-col gap-16 pb-16",children:[(0,l.jsx)(g,{}),(0,l.jsx)(C,{})]}),(0,l.jsx)("h2",{className:"text-center w-full bg-red-light text-black",children:" That's all! "}),(0,l.jsx)("h2",{className:"text-center w-full bg-red-light text-black font-normal pb-4",children:" You've reached the end :) "}),(0,l.jsx)("div",{children:(0,l.jsx)(b.default,{src:E,alt:"Drippy decoration",className:"w-[100vw] mx-auto overflow-hidden"})})]})}},5603:(e,t,a)=>{"use strict";a.d(t,{g:()=>l});let l=(0,a(2115).createContext)({filter:"ShowAll",setFilter:()=>{}})},9228:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var l=a(5155);a(2115);var r=a(652),s=a(9602);let n=(0,r.F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:t,variant:a,...r}=e;return(0,l.jsx)("div",{className:(0,s.cn)(n({variant:a}),t),...r})}function o(e){let{isSelected:t,tag:a}=e,{color:r,text:s}=(e=>{switch(e){case"UX":return{color:"bg-red-500",text:"UI/UX Design"};case"CS":return{color:"bg-blue-500",text:"Programming"};case"GDES":return{color:"bg-yellow-500",text:"Graphic Design"};case"ShowAll":return{color:"",text:"Show All"};case"Client":return{color:"",text:"Client"};case"Work":return{color:"",text:"Work"};case"School":return{color:"",text:"School"};default:return{color:"",text:""}}})(a);return(0,l.jsxs)(i,{className:"inline-flex items-center border border-black rounded-full px-3 lg:px-4 py-1 md:py-2 ".concat(t?"bg-black hover:bg-gray-700":"bg-white hover:bg-gray-200"),children:[r&&(0,l.jsx)("span",{className:"w-3 h-3 ".concat(r," rounded-full mr-2")}),(0,l.jsxs)("p",{className:"whitespace-nowrap my-0 md:text-[1.1rem] ".concat(t?"text-white":"text-black"),children:[" ",s," "]})]})}},7202:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[533,315,26,970,232,465,848,649,706,441,517,358],()=>t(5117)),_N_E=e.O()}]);