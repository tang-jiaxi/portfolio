(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[360],{1360:(e,t,n)=>{Promise.resolve().then(n.bind(n,3153)),Promise.resolve().then(n.bind(n,7539)),Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,7970,23))},3153:(e,t,n)=>{"use strict";n.d(t,{default:()=>s});var r=n(5155),c=n(5565),o=n(2115);let s=e=>{let{mediaItems:t,imageDir:n}=e;return(0,r.jsx)("div",{className:"flex flex-col gap-0 w-full z-10 pt-[12vh] pb-[20vh]",children:(t||["row-1-column-1.png","row-2-column-1.png","row-3-column-1.png","row-4-column-1.png","row-5-column-1.png","row-6-column-1.png","row-7-column-1.png","row-8-column-1.png","row-9-column-1.png","row-10-column-1.png","row-11-column-1.png","row-12-column-1.png","row-13-column-1.png","row-14-column-1.png","row-15-column-1.png","row-16-column-1.png"]).map((e,t)=>(0,r.jsx)(o.Fragment,{children:e.endsWith(".png")||e.endsWith(".jpg")||e.endsWith(".jpeg")?(0,r.jsx)("div",{className:"relative w-[95vw] h-auto mx-auto",children:(0,r.jsx)(c.default,{src:"/images/".concat(n,"/").concat(e),alt:"Media item ".concat(t+1),width:1920,height:1080,loading:"lazy",className:"object-cover",unoptimized:!0})}):(0,r.jsx)("div",{className:"w-[76vw] h-auto mx-auto",children:(0,r.jsxs)("video",{width:"100%",height:"500px",controls:!0,muted:!0,autoPlay:!0,loop:!0,children:[(0,r.jsx)("source",{src:"/videos/".concat(n,"/").concat(e),type:"video/mp4"}),"Your browser does not support the video tag."]})})},t))})}},7539:(e,t,n)=>{"use strict";n.d(t,{default:()=>l});var r=n(5155),c=n(2115),o=n(1630),s=n.n(o);n(4234),n(1765);let l=e=>{let{header:t}=e,n=(0,c.useRef)(null),l=(0,c.useRef)(null),i=(0,c.useRef)(null),a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{var e;let r,c;let h=s().Engine,d=s().Render,u=s().Runner,m=s().MouseConstraint,p=s().Mouse,w=s().Composite,v=s().Bodies;s().use("matter-wrap"),o.Common.setDecomp("poly-decomp"),l.current=h.create();let g=l.current.world,f=()=>({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}),{width:x,height:y}=f();i.current=d.create({element:null!==(e=n.current)&&void 0!==e?e:void 0,engine:l.current,options:{width:x,height:t?y:.4*y,background:"transparent",wireframes:!1}});let z=[],M=x+50,C=(M- -50)/119,L=t?.6*y:.1*y,E=()=>{for(let e=0;e<120;e++){let t=-50+e*C;z.push({x:t,y:L})}return z.push({x:M,y:t?y:.5*y}),z.push({x:-50,y:t?y:.5*y}),v.fromVertices(x/2,t?.9*y:.4*y,[z],{isStatic:!0,render:{fillStyle:"#FBF4F5",strokeStyle:"#DD5868",lineWidth:3}})},b=E(),B=[],k=(e,t)=>{let n=Math.random()*(0-x)+x,r=.075*Math.min(x,y),c=v.rectangle(n,t,r,r,{restitution:0,friction:0,frictionAir:.1,density:.001,render:{sprite:{texture:"data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(e)),xScale:r/100,yScale:r/100}},plugin:{wrap:{min:{x:20,y:-1/0},max:{x:x-20,y:1/0}}}});return B.push(c),c},H=k('\n      <svg xmlns="http://www.w3.org/2000/svg" fill="#330000" stroke="#FF9A00" stroke-width="0" viewBox="0 0 24 24" width="100" height="100">\n        <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z"></path>    \n      </svg>\n      ',500),V=k('\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100" height="100">\n        <path fill="#62D5FB" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>\n      </svg>\n    ',500),j=k('\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="100" height="100">\n        <path d="M50 300c28 0 50-22 50-50v-50H50a50 50 0 0 0 0 100z" style="fill:#0acf83"/>\n        <path d="M0 150c0-28 22-50 50-50h50v100H50c-28 0-50-22-50-50z" style="fill:#a259ff"/>\n        <path d="M0 50C0 22 22 0 50 0h50v100H50C22 100 0 78 0 50z" style="fill:#f24e1e"/>\n        <path d="M100 0h50a50 50 0 0 1 0 100h-50V0z" style="fill:#ff7262"/>\n        <path d="M200 150a50 50 0 1 1-100 0 50 50 0 0 1 100 0z" \n        style="fill:#1abcfe"/>\n      </svg>\n    ',500);if(!t){let e=k('\n        <svg xmlns="http://www.w3.org/2000/svg" fill="#3992E0" stroke="currentColor" stroke-width="0" viewBox="0 0 16 16" width="100" height="100">\n          <path d="M10.8634 13.9195C10.6568 14.0195 10.4233 14.0246 10.2185 13.9444C10.1162 13.9044 10.021 13.843 9.93997 13.7614L4.81616 9.06268L2.58433 10.7656C2.37657 10.9241 2.08597 10.9111 1.89301 10.7347L1.17719 10.0802C0.941168 9.86437 0.940898 9.49112 1.17661 9.27496L3.11213 7.5L1.17661 5.72504C0.940898 5.50888 0.941168 5.13563 1.17719 4.91982L1.89301 4.2653C2.08597 4.08887 2.37657 4.07588 2.58433 4.2344L4.81616 5.93732L9.93997 1.23855C9.97037 1.20797 10.0028 1.18023 10.0368 1.15538C10.2748 0.981429 10.5922 0.949298 10.8634 1.08048L13.5399 2.37507C13.8212 2.5111 14 2.79721 14 3.11109V8H10.752V4.53356L6.86419 7.5L10.752 10.4664V8H14V11.8889C14 12.2028 13.8211 12.4889 13.5399 12.625L10.8634 13.9195Z"></path>        \n        </svg>\n      ',500),t=k('\n        <svg stroke="currentColor" fill="#2B4687" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="100" height="100">\n          <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"></path>        \n        </svg>\n      ',500);w.add(g,[e,t])}let S=p.create(i.current.canvas),F=m.create(l.current,{mouse:S,constraint:{stiffness:.2,render:{visible:!1}}});i.current.canvas.addEventListener("wheel",function(){i.current.canvas.style.pointerEvents="none",clearTimeout(r),r=setTimeout(()=>{i.current.canvas.style.pointerEvents="auto"},100)}),F.mouse.element.addEventListener("touchstart",e=>{F.body||(c=e)}),F.mouse.element.addEventListener("touchend",e=>{if(!F.body){let t=c.changedTouches[0].clientY-e.changedTouches[0].clientY;Math.abs(t)>80&&window.scrollTo(0,3*t)}}),w.add(g,[H,V,j,F,b]),i.current.mouse=S;let R=0;s().Events.on(l.current,"beforeUpdate",()=>{R+=.05;for(let e=0;e<120;e++){let t=L+15*Math.sin(R+.1*e);z[e].y=t}s().Body.setVertices(b,z)});let N=e=>{let t=4e-4*Math.random()-5e-5,n=3e-4*Math.random()-5e-5;s().Body.applyForce(e,{x:e.position.x,y:e.position.y},{x:-.008+t,y:-5e-4+n})};B.forEach(e=>{N(e);let t=e.position.x,n=L+15*Math.sin(R+t/C*.1);o.Body.setAngularVelocity(e,.9*e.angularVelocity),o.Body.setAngle(e,.9*e.angle);let r=Math.min(e.position.y,n-40);o.Body.setPosition(e,{x:e.position.x,y:r})});let P=()=>{let{width:e,height:t}=f();i.current.canvas.width=e,i.current.canvas.height=t,w.remove(g,b),x=e,y=t,b=E(),w.add(g,b),B.forEach(e=>{let t=.075*Math.min(x,y)/100;o.Body.scale(e,t/e.render.sprite.xScale,t/e.render.sprite.yScale),e.render.sprite.xScale=t,e.render.sprite.yScale=t})};return window.addEventListener("resize",P),a.current=u.create(),u.run(a.current,l.current),d.run(i.current),()=>{window.removeEventListener("resize",P),i.current&&d.stop(i.current),a.current&&u.stop(a.current),l.current&&(w.clear(l.current.world,!1),h.clear(l.current))}},[t]),(0,r.jsx)("div",{ref:n})}}}]);