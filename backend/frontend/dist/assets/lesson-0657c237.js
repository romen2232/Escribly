import{r as y,n as re,j as a,T as de,B as R,b as ue,u as he,p as te,A as X,Q as we,w as ye,c as ke,H as Ce}from"./index-c83994d1.js";import{N as Me}from"./Note-ff49446a.js";import{u as Te,c as Se,m as Ne,a as Ee,b as je,d as Ie}from"./notes-b87dc548.js";import{c as Oe}from"./index-1d4fe5dc.js";import{m as Le}from"./Tree-0cb51d97.js";const Fe=(n,t,i)=>{const l=t-n;return((i-n)%l+l)%l+n};function Pe(...n){const t=y.useRef(0),[i,l]=y.useState(n[t.current]),o=y.useCallback(x=>{t.current=typeof x!="number"?Fe(0,n.length,t.current+1):x,l(n[t.current])},[n.length,...n]);return[i,o]}const Re=({theory:n,onEnd:t})=>{const i=n.split(`

`),[l,o]=y.useState(0),[x,M]=y.useState(0),m=re(),[p,T]=Pe("mainBackground","blue"),[j,L]=y.useState(!1);return console.log(p,j),y.useEffect(()=>{const s=S=>{const k=window.innerWidth;S.clientX>k/2?(L(!0),T(),l<i.length-1?o(N=>N+1):t()):(l>0?o(N=>N-1):m(-1),T(),L(!0))},c=S=>{M(N=>N+S.deltaY),x>250?l<i.length-1?(o(N=>N+1),M(0)):t():x<-250&&(l>0?(o(N=>N-1),M(0)):m(-1))};return window.addEventListener("click",s),window.addEventListener("wheel",c),()=>{window.removeEventListener("click",s),window.removeEventListener("wheel",c)}},[l,i.length,t,x,m]),a.jsxs("div",{className:"flex h-screen items-center justify-center p-48 text-center text-5xl font-extrabold leading-loose",children:[a.jsx(a.Fragment,{}),i[l]]})},_e=({task:n,onSubmit:t,onSkip:i})=>{const[l]=y.useState(de(n.text.split(`

`))),[o,x]=y.useState(-1);y.useEffect(()=>{x(-1)},[n]);const M=p=>{if(p===-1)return;const T=[...l],j=T[p];T.splice(p,1),T.unshift(j);const L={answerText:T.join(`

`)};t(L,n)},m=()=>{i(n)};return a.jsxs("div",{className:"relative flex h-full flex-col items-center justify-around gap-4",children:[a.jsx("h2",{className:" mb-12 mt-16 w-8/12 text-center text-4xl font-bold",children:n.taskDescription}),a.jsx("div",{className:"flex w-7/12 justify-between text-left text-xl",children:l.map((p,T)=>a.jsx("button",{className:`w-5/12 rounded-xl ${o===T?"border-4 border-primaryBlue-500 p-7":"border-2 p-8"}`,onClick:()=>x(o===T?-1:T),children:p},T))}),a.jsx(R,{className:`h-24 w-1/2 rounded-xl border-2 p-4 text-2xl font-bold text-white ${o===-1?"bg-gray-500":"bg-primaryPink-100"}`,bgColor:o===-1?"gray-500":"primaryPink-500",...o===-1&&{disabled:!0},onClick:()=>M(o),children:"Submit"}),a.jsx(R,{className:"absolute bottom-2 left-2 rounded-xl border-2 bg-zinc-800 p-4 font-bold text-secondaryYellow-500",bgColor:"zinc-800",onClick:m,children:"Skip"})]})},Be=({task:n,onSubmit:t,onSkip:i})=>{const[l,o]=y.useState([]),[x,M]=y.useState([]),[m,p]=y.useState(null);y.useEffect(()=>{const s=/\[(.*?)\]/g,c=n.text.match(s)||[],S=de(c.map(_=>_.replace(/\[|\]/g,"")));M(S);const N=n.text.split(`

`)[0].split(s).map((_,F)=>F%2!==0?null:_);o(N)},[n.text]);const T=(s,c)=>{p(s);const S=c.map(k=>typeof k!="string"?s:k);o(S)},j=()=>{const S={answerText:`${l.map(k=>k===m?`[${k}]`:k).join("")}

${x.map(k=>`[${k}]`).join("")}`};t(S,n)},L=()=>{i(n)};return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"relative flex h-full flex-col items-center justify-around gap-4",children:[" ",a.jsx("h2",{className:"mb-12 mt-16 w-8/12 text-center text-4xl font-bold",children:n.taskDescription}),a.jsx("div",{className:"flex w-8/12 items-baseline justify-between border p-2 text-left text-xl",children:l.map((s,c)=>s||a.jsx("span",{className:"underline-space mx-2 inline-block w-40 border-b-2 border-dotted border-gray-800"},c))}),a.jsx("div",{className:"flex space-x-2",children:x.map((s,c)=>a.jsx("button",{className:`rounded border p-2 hover:bg-blue-200 ${m===s?"opacity-50":""}`,onClick:()=>{if(m===s)p(null),o(S=>S.map(k=>k===s?null:k));else{const S=l.map(k=>k===m?null:k);T(s,S)}},children:s},c))}),a.jsx(R,{className:`h-24 w-1/2 rounded-xl border-2 p-4 text-2xl font-bold text-white ${m===null?"bg-gray-500":"bg-primaryPink-100"}`,bgColor:m===null?"gray-500":"primaryPink-500",...m===null&&{disabled:!0},onClick:j,children:"Submit"}),a.jsx(R,{className:"absolute bottom-2 left-2 rounded-xl border-2 p-4 font-bold text-secondaryYellow-500",bgColor:"zinc-800",onClick:L,children:"Skip"})]})})},Ae=({task:n,onSubmit:t,initialNote:i})=>{const[l,o]=y.useState(i),x=m=>{o(m)},M=async()=>{const m=l.noteContent??"";m.length>100?(alert(m.slice(0,100)),alert(m.slice(100))):alert(m);const p={answerText:m,answerNote:l.id};t(p,n)};return a.jsxs("div",{className:"relative flex h-full flex-col items-center justify-around gap-4",children:[a.jsx("div",{children:a.jsx(Me,{note:i,onNoteChange:x})}),a.jsx(R,{className:"h-24 w-1/2 rounded-xl border-2 bg-primaryBlue-500 p-4 text-2xl font-bold text-white",bgColor:"primaryBlue-500",onClick:()=>M(),children:"Submit"})]})},We=async(n,t)=>{try{return(await ue.post(`/api/v1/lesson/start/${n}/`,{},{headers:{Authorization:`Bearer ${t}`}})).data}catch(i){throw new Error(`Error retrieving lessonUser: ${i}`)}},De=n=>{const[t,i]=y.useState(null),[l,o]=y.useState(!1),x=re(),{t:M}=he(),m=te();return isNaN(Number(n))&&x(M("/")),y.useEffect(()=>{o(!0),We(Number(n),m[X]).then(p=>{i(p)}).catch(p=>{we.error(M(p.message)),x(M("/"))}).finally(()=>{o(!1)})},[n,x,M]),{lessonUser:t,loading:l}},le=async(n,t,i)=>{try{return(await ue.patch(`/api/v1/task/answer/${n}/user/`,t,{headers:{Authorization:`Bearer ${i}`}})).data}catch(l){throw new Error(`Error partially updating task user: ${l}`)}};var ne={};(function n(t,i,l,o){var x=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function M(){}function m(r){var e=i.exports.Promise,d=e!==void 0?e:t.Promise;return typeof d=="function"?new d(r):(r(M,M),null)}var p=function(){var r=Math.floor(16.666666666666668),e,d,u={},b=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(g){var h=Math.random();return u[h]=requestAnimationFrame(function f(C){b===C||b+r-1<C?(b=C,delete u[h],g()):u[h]=requestAnimationFrame(f)}),h},d=function(g){u[g]&&cancelAnimationFrame(u[g])}):(e=function(g){return setTimeout(g,r)},d=function(g){return clearTimeout(g)}),{frame:e,cancel:d}}(),T=function(){var r,e,d={};function u(b){function g(h,f){b.postMessage({options:h||{},callback:f})}b.init=function(f){var C=f.transferControlToOffscreen();b.postMessage({canvas:C},[C])},b.fire=function(f,C,P){if(e)return g(f,null),e;var v=Math.random().toString(36).slice(2);return e=m(function(O){function I(w){w.data.callback===v&&(delete d[v],b.removeEventListener("message",I),e=null,P(),O())}b.addEventListener("message",I),g(f,v),d[v]=I.bind(null,{data:{callback:v}})}),e},b.reset=function(){b.postMessage({reset:!0});for(var f in d)d[f](),delete d[f]}}return function(){if(r)return r;if(!l&&x){var b=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([b])))}catch(g){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",g),null}u(r)}return r}}(),j={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function L(r,e){return e?e(r):r}function s(r){return r!=null}function c(r,e,d){return L(r&&s(r[e])?r[e]:j[e],d)}function S(r){return r<0?0:Math.floor(r)}function k(r,e){return Math.floor(Math.random()*(e-r))+r}function N(r){return parseInt(r,16)}function _(r){return r.map(F)}function F(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:N(e.substring(0,2)),g:N(e.substring(2,4)),b:N(e.substring(4,6))}}function Z(r){var e=c(r,"origin",Object);return e.x=c(e,"x",Number),e.y=c(e,"y",Number),e}function E(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function W(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function z(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function q(r,e,d,u,b,g,h,f,C){r.save(),r.translate(e,d),r.rotate(g),r.scale(u,b),r.arc(0,0,1,h,f,C),r.restore()}function G(r){var e=r.angle*(Math.PI/180),d=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*d-Math.random()*d),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar}}function K(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var d=e.tick++/e.totalTicks,u=e.x+e.random*e.tiltCos,b=e.y+e.random*e.tiltSin,g=e.wobbleX+e.random*e.tiltCos,h=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-d)+")",r.beginPath(),e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(g-u)*e.ovalScalar,Math.abs(h-b)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):q(r,e.x,e.y,Math.abs(g-u)*e.ovalScalar,Math.abs(h-b)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var f=Math.PI/2*3,C=4*e.scalar,P=8*e.scalar,v=e.x,O=e.y,I=5,w=Math.PI/I;I--;)v=e.x+Math.cos(f)*P,O=e.y+Math.sin(f)*P,r.lineTo(v,O),f+=w,v=e.x+Math.cos(f)*C,O=e.y+Math.sin(f)*C,r.lineTo(v,O),f+=w;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(b)),r.lineTo(Math.floor(g),Math.floor(h)),r.lineTo(Math.floor(u),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function D(r,e,d,u,b){var g=e.slice(),h=r.getContext("2d"),f,C,P=m(function(v){function O(){f=C=null,h.clearRect(0,0,u.width,u.height),b(),v()}function I(){l&&!(u.width===o.width&&u.height===o.height)&&(u.width=r.width=o.width,u.height=r.height=o.height),!u.width&&!u.height&&(d(r),u.width=r.width,u.height=r.height),h.clearRect(0,0,u.width,u.height),g=g.filter(function(w){return K(h,w)}),g.length?f=p.frame(I):O()}f=p.frame(I),C=O});return{addFettis:function(v){return g=g.concat(v),P},canvas:r,promise:P,reset:function(){f&&p.cancel(f),C&&C()}}}function H(r,e){var d=!r,u=!!c(e||{},"resize"),b=c(e,"disableForReducedMotion",Boolean),g=x&&!!c(e||{},"useWorker"),h=g?T():null,f=d?E:W,C=r&&h?!!r.__confetti_initialized:!1,P=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,v;function O(w,Q,J){for(var A=c(w,"particleCount",S),U=c(w,"angle",Number),V=c(w,"spread",Number),B=c(w,"startVelocity",Number),fe=c(w,"decay",Number),me=c(w,"gravity",Number),pe=c(w,"drift",Number),ae=c(w,"colors",_),ge=c(w,"ticks",Number),se=c(w,"shapes"),xe=c(w,"scalar"),oe=Z(w),ie=A,ee=[],be=r.width*oe.x,ve=r.height*oe.y;ie--;)ee.push(G({x:be,y:ve,angle:U,spread:V,startVelocity:B,color:ae[ie%ae.length],shape:se[k(0,se.length)],ticks:ge,decay:fe,gravity:me,drift:pe,scalar:xe}));return v?v.addFettis(ee):(v=D(r,ee,f,Q,J),v.promise)}function I(w){var Q=b||c(w,"disableForReducedMotion",Boolean),J=c(w,"zIndex",Number);if(Q&&P)return m(function(B){B()});d&&v?r=v.canvas:d&&!r&&(r=z(J),document.body.appendChild(r)),u&&!C&&f(r);var A={width:r.width,height:r.height};h&&!C&&h.init(r),C=!0,h&&(r.__confetti_initialized=!0);function U(){if(h){var B={getBoundingClientRect:function(){if(!d)return r.getBoundingClientRect()}};f(B),h.postMessage({resize:{width:B.width,height:B.height}});return}A.width=A.height=null}function V(){v=null,u&&t.removeEventListener("resize",U),d&&r&&(document.body.removeChild(r),r=null,C=!1)}return u&&t.addEventListener("resize",U,!1),h?h.fire(w,A,V):O(w,A,V)}return I.reset=function(){h&&h.reset(),v&&v.reset()},I}var $;function Y(){return $||($=H(null,{useWorker:!0,resize:!0})),$}i.exports=function(){return Y().apply(this,arguments)},i.exports.reset=function(){Y().reset()},i.exports.create=H})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),ne,!1);const $e=ne.exports;ne.exports.create;const ce=te(),ze=Oe(n=>({isTheoryEnd:!1,currentIndex:0,currentTask:null,writingNote:null,skippedTask:!1,currentTaskUser:null,tasks:null,isModalOpen:!1,setIsTheoryEnd:t=>n({isTheoryEnd:t}),setCurrentIndex:t=>n({currentIndex:t}),setCurrentTask:t=>n({currentTask:t}),setWritingNote:t=>n({writingNote:t}),setSkippedTask:t=>n({skippedTask:t}),setCurrentTaskUser:t=>n({currentTaskUser:t}),setTasks:t=>n({tasks:t}),setIsModalOpen:t=>n({isModalOpen:t}),handleSkipTask:async t=>{try{const i=await le(t.id,{answerText:"skipped"},ce[X]);n({currentTaskUser:i}),n({skippedTask:!0}),n({isModalOpen:!0})}catch(i){console.error("Error skipping the task:",i)}},handleSubmitTask:async(t,i)=>{n({skippedTask:!1});try{const l=await le(i.id,t,ce[X]);n({currentTaskUser:l}),n({isModalOpen:!0}),l.answerBoolean&&$e()}catch(l){console.error("Error submitting the task:",l)}}})),Ze=()=>{const{isTheoryEnd:n,setIsTheoryEnd:t,currentIndex:i,setCurrentIndex:l,currentTask:o,setCurrentTask:x,writingNote:M,setWritingNote:m,skippedTask:p,setSkippedTask:T,tasks:j,setTasks:L,currentTaskUser:s,isModalOpen:c,setIsModalOpen:S,handleSkipTask:k,handleSubmitTask:N}=ze(),{lessonId:_}=ye(),{lessonUser:F,loading:Z}=De(_||""),{t:E}=he(),{isOpen:W,onOpen:z,onOpenChange:q}=Te(),G=te(),K=re(),[D,H]=y.useState(!1);y.useEffect(()=>{c&&z()},[c]),y.useEffect(()=>{W||S(!1)},[W]),y.useEffect(()=>{F&&L(F.taskUser.map(e=>e.task))},[F]),y.useEffect(()=>{j&&x(j[i])},[j,i]),y.useEffect(()=>{let e=!0;return(o==null?void 0:o.type)==="WRITE"&&Se({noteName:o.taskName,noteContent:""},G[X]).then(d=>{e&&m(d)}),()=>{e=!1}},[o]);const $=()=>t(!n),Y=async()=>{if(!j)return;const e=i+1;e<j.length?(l(e),T(!1)):(H(!0),z())};if(!F||Z)return a.jsx(ke,{});const r=()=>{if(!o)return null;const e={task:o,onSubmit:N,onSkip:k};switch(o.type){case"CHOOSE":return a.jsx(_e,{...e});case"COMPLETE":return a.jsx(Be,{...e});case"WRITE":return M&&a.jsx(Ae,{...e,initialNote:M});default:return null}};return a.jsxs("div",{className:"flex h-full flex-col",children:[a.jsx(Ce,{}),n?a.jsx("div",{className:"tasks h-full",children:r()},o==null?void 0:o.id):a.jsx(Re,{theory:F.lesson.lessonTheory,onEnd:$}),a.jsx(Ne,{isOpen:W,onOpenChange:q,backdrop:p?"opaque":"transparent",placement:"bottom",classNames:{header:s!=null&&s.answerBoolean&&!p?"bg-green-400":"bg-red-400",closeButton:"text-black"},children:a.jsx(Ee,{className:"bg-mainBackground-200",children:e=>a.jsxs(a.Fragment,{children:[a.jsx(je,{children:D?E("task.Finished"):p?E("task.Skip"):s!=null&&s.answerBoolean?E("task.Correct"):E("task.Incorrect")}),a.jsx(Ie,{children:D?E("task.FinishedText"):p?a.jsxs(a.Fragment,{children:["/api/v1/lessons/import/        ",E("task.SkipText"),a.jsx("br",{}),E("task.NoPoints")]}):s==null?void 0:s.responseText}),a.jsx(Le,{children:D?a.jsx(R,{className:`rounded-xl  p-4 font-bold hover:shadow-[0px_0px_5px_rgba(0,0,0,0.35)] text-white
                                        `,bgColor:"bg-primaryBlue-500",onClick:()=>{e(),K("/")},children:E("task.GoHome")}):a.jsxs(a.Fragment,{children:[a.jsx(R,{className:`rounded-xl
                                        p-4 font-semibold hover:shadow-[0px_0px_5px_rgba(0,0,0,0.35)]
                                        `,bgColor:p||!(s!=null&&s.answerBoolean)?"primaryPink-500":"primaryBlue-50",onClick:()=>{e()},children:s!=null&&s.answerBoolean?E("task.Review"):E("task.Retry")}),a.jsx(R,{className:`rounded-xl  p-4 font-bold hover:shadow-[0px_0px_5px_rgba(0,0,0,0.35)] ${p||!(s!=null&&s.answerBoolean)?"":"text-white"}
                                        `,bgColor:p||!(s!=null&&s.answerBoolean)?"bg-gray-300":"bg-primaryBlue-500",onClick:()=>{e(),Y()},children:E(p?"task.SkipNext":"task.Next")})]})})]})})})]})};export{Ze as default};
