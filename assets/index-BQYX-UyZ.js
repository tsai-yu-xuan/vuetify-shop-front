import{A as z}from"./aos-Cuzn-GnL.js";import{_ as J,o as X,a8 as se,w as a,b as t,af as Z,ag as K,aa as s,ac as M,E as oe,I as ne,r as de,a as j,V as U,d as W,F as ae,e as ge,R as _e}from"./index-CavX4ErP.js";import{V as L}from"./VRow-B5rLeikx.js";import{a as m,V as q}from"./VCol-DyHGsAJo.js";import{_ as he}from"./indexSection03-1-DyoMhYQP.js";import{g as ye,n as ue,a as G,b as te,S as ce,c as pe,P as we}from"./pagination-fF0uKIbJ.js";import{g as B,S as fe}from"./ScrollTrigger-aLfjG8Xb.js";import{i as ve}from"./indexPrice-CGYWo8rW.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Te=""+new URL("banner-1-4-D_uwFbCB.png",import.meta.url).href,xe=""+new URL("banner-1-3-XQJPMsHJ.png",import.meta.url).href,be=""+new URL("banner-1-2-D4i13cMA.png",import.meta.url).href,Ee=""+new URL("index-img-CBIVlLs6.png",import.meta.url).href,re=i=>(Z("data-v-86cc1310"),i=i(),K(),i),Se=re(()=>s("h2",{class:"text-English-Roboto about"},"ABOUT",-1)),Le=re(()=>s("div",{id:"text2"},[s("h1",null,"打造理想的永恆居所"),s("br"),s("p",null,[M("生活型態與觀念轉變「視寵物如子女」相當盛行，"),s("br"),M(" 當心愛的寵物往生，對寵物後事也會慎重處理"),s("br"),s("br"),M(" 寵物生命禮儀大多是所有寵物放一起"),s("br"),M(" 是不是鼠兔跟狗貓放一起牠會害怕?"),s("br"),M(" 如果他們有自己的永恆住所..."),s("br"),s("br"),M(" 於是萌生了想要專門為小動物而服務的永恆住所..."),s("br")])],-1)),Ie=re(()=>s("img",{src:Ee,class:"left-bottom-img"},null,-1)),Me={__name:"indexSection02",setup(i){return z.init(),(e,_)=>(X(),se(q,{class:"container"},{default:a(()=>[t(L,null,{default:a(()=>[t(m,{cols:"12",class:"h2-bg"},{default:a(()=>[Se]),_:1})]),_:1}),t(L,null,{default:a(()=>[t(m,{cols:"12",md:"6",class:"d-flex"},{default:a(()=>[Le]),_:1}),t(m,{id:"img2",cols:"12",md:"6","data-aos":"fade-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"3000","data-aos-offset":"200","data-aos-delay":"000"},{default:a(()=>[Ie]),_:1})]),_:1})]),_:1}))}},De=J(Me,[["__scopeId","data-v-86cc1310"]]),Pe=""+new URL("indexSection03-7-BrbER9qm.jpg",import.meta.url).href,Oe=""+new URL("indexSection03-2-CG7qT1FL.jpg",import.meta.url).href,Ce=""+new URL("indexSection03-3-BIHRoMNe.jpg",import.meta.url).href,Re=""+new URL("indexSection03-5-hb0DE4c1.jpg",import.meta.url).href,Be=""+new URL("indexSection03-6-DGgmOLNU.jpg",import.meta.url).href;function Ae(i){let{swiper:e,extendParams:_,on:g,emit:h}=i;const I=ye();_({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let y,D=G(),S;const d=[];function w(n){let v=0,p=0,l=0,c=0;return"detail"in n&&(p=n.detail),"wheelDelta"in n&&(p=-n.wheelDelta/120),"wheelDeltaY"in n&&(p=-n.wheelDeltaY/120),"wheelDeltaX"in n&&(v=-n.wheelDeltaX/120),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(v=p,p=0),l=v*10,c=p*10,"deltaY"in n&&(c=n.deltaY),"deltaX"in n&&(l=n.deltaX),n.shiftKey&&!l&&(l=c,c=0),(l||c)&&n.deltaMode&&(n.deltaMode===1?(l*=40,c*=40):(l*=800,c*=800)),l&&!v&&(v=l<1?-1:1),c&&!p&&(p=c<1?-1:1),{spinX:v,spinY:p,pixelX:l,pixelY:c}}function A(){e.enabled&&(e.mouseEntered=!0)}function k(){e.enabled&&(e.mouseEntered=!1)}function $(n){return e.params.mousewheel.thresholdDelta&&n.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&G()-D<e.params.mousewheel.thresholdTime?!1:n.delta>=6&&G()-D<60?!0:(n.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),h("scroll",n.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),h("scroll",n.raw)),D=new I.Date().getTime(),!1)}function R(n){const o=e.params.mousewheel;if(n.direction<0){if(e.isEnd&&!e.params.loop&&o.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&o.releaseOnEdges)return!0;return!1}function N(n){let o=n,Y=!0;if(!e.enabled||n.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const b=e.params.mousewheel;e.params.cssMode&&o.preventDefault();let v=e.el;e.params.mousewheel.eventsTarget!=="container"&&(v=document.querySelector(e.params.mousewheel.eventsTarget));const p=v&&v.contains(o.target);if(!e.mouseEntered&&!p&&!b.releaseOnEdges)return!0;o.originalEvent&&(o=o.originalEvent);let l=0;const c=e.rtlTranslate?-1:1,T=w(o);if(b.forceToAxis)if(e.isHorizontal())if(Math.abs(T.pixelX)>Math.abs(T.pixelY))l=-T.pixelX*c;else return!0;else if(Math.abs(T.pixelY)>Math.abs(T.pixelX))l=-T.pixelY;else return!0;else l=Math.abs(T.pixelX)>Math.abs(T.pixelY)?-T.pixelX*c:-T.pixelY;if(l===0)return!0;b.invert&&(l=-l);let P=e.getTranslate()+l*b.sensitivity;if(P>=e.minTranslate()&&(P=e.minTranslate()),P<=e.maxTranslate()&&(P=e.maxTranslate()),Y=e.params.loop?!0:!(P===e.minTranslate()||P===e.maxTranslate()),Y&&e.params.nested&&o.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const u={time:G(),delta:Math.abs(l),direction:Math.sign(l),raw:n};d.length>=2&&d.shift();const O=d.length?d[d.length-1]:void 0;if(d.push(u),O?(u.direction!==O.direction||u.delta>O.delta||u.time>O.time+150)&&$(u):$(u),R(u))return!0}else{const u={time:G(),delta:Math.abs(l),direction:Math.sign(l)},O=S&&u.time<S.time+500&&u.delta<=S.delta&&u.direction===S.direction;if(!O){S=void 0;let C=e.getTranslate()+l*b.sensitivity;const Q=e.isBeginning,ee=e.isEnd;if(C>=e.minTranslate()&&(C=e.minTranslate()),C<=e.maxTranslate()&&(C=e.maxTranslate()),e.setTransition(0),e.setTranslate(C),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!Q&&e.isBeginning||!ee&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:u.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(y),y=void 0,d.length>=15&&d.shift();const r=d.length?d[d.length-1]:void 0,E=d[0];if(d.push(u),r&&(u.delta>r.delta||u.direction!==r.direction))d.splice(0);else if(d.length>=15&&u.time-E.time<500&&E.delta-u.delta>=1&&u.delta<=6){const f=l>0?.8:.2;S=u,d.splice(0),y=ue(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,f)},0)}y||(y=ue(()=>{if(e.destroyed||!e.params)return;const f=.5;S=u,d.splice(0),e.slideToClosest(e.params.speed,!0,void 0,f)},500))}if(O||h("scroll",o),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),b.releaseOnEdges&&(C===e.minTranslate()||C===e.maxTranslate()))return!0}}return o.preventDefault?o.preventDefault():o.returnValue=!1,!1}function V(n){let o=e.el;e.params.mousewheel.eventsTarget!=="container"&&(o=document.querySelector(e.params.mousewheel.eventsTarget)),o[n]("mouseenter",A),o[n]("mouseleave",k),o[n]("wheel",N)}function x(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",N),!0):e.mousewheel.enabled?!1:(V("addEventListener"),e.mousewheel.enabled=!0,!0)}function H(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,N),!0):e.mousewheel.enabled?(V("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}g("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&H(),e.params.mousewheel.enabled&&x()}),g("destroy",()=>{e.params.cssMode&&x(),e.mousewheel.enabled&&H()}),Object.assign(e.mousewheel,{enable:x,disable:H})}function me(i){let{swiper:e,extendParams:_,on:g,emit:h,params:I}=i;e.autoplay={running:!1,paused:!1,timeLeft:0},_({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let y,D,S=I&&I.autoplay?I.autoplay.delay:3e3,d=I&&I.autoplay?I.autoplay.delay:3e3,w,A=new Date().getTime(),k,$,R,N,V,x,H;function n(r){!e||e.destroyed||!e.wrapperEl||r.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",n),!(H||r.detail&&r.detail.bySwiperTouchMove)&&c())}const o=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?k=!0:k&&(d=w,k=!1);const r=e.autoplay.paused?w:A+d-new Date().getTime();e.autoplay.timeLeft=r,h("autoplayTimeLeft",r,r/S),D=requestAnimationFrame(()=>{o()})},Y=()=>{let r;return e.virtual&&e.params.virtual.enabled?r=e.slides.filter(f=>f.classList.contains("swiper-slide-active"))[0]:r=e.slides[e.activeIndex],r?parseInt(r.getAttribute("data-swiper-autoplay"),10):void 0},b=r=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(D),o();let E=typeof r>"u"?e.params.autoplay.delay:r;S=e.params.autoplay.delay,d=e.params.autoplay.delay;const f=Y();!Number.isNaN(f)&&f>0&&typeof r>"u"&&(E=f,S=f,d=f),w=E;const F=e.params.speed,ie=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(F,!0,!0),h("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,F,!0,!0),h("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(F,!0,!0),h("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,F,!0,!0),h("autoplay")),e.params.cssMode&&(A=new Date().getTime(),requestAnimationFrame(()=>{b()})))};return E>0?(clearTimeout(y),y=setTimeout(()=>{ie()},E)):requestAnimationFrame(()=>{ie()}),E},v=()=>{A=new Date().getTime(),e.autoplay.running=!0,b(),h("autoplayStart")},p=()=>{e.autoplay.running=!1,clearTimeout(y),cancelAnimationFrame(D),h("autoplayStop")},l=(r,E)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(y),r||(x=!0);const f=()=>{h("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",n):c()};if(e.autoplay.paused=!0,E){V&&(w=e.params.autoplay.delay),V=!1,f();return}w=(w||e.params.autoplay.delay)-(new Date().getTime()-A),!(e.isEnd&&w<0&&!e.params.loop)&&(w<0&&(w=0),f())},c=()=>{e.isEnd&&w<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(A=new Date().getTime(),x?(x=!1,b(w)):b(),e.autoplay.paused=!1,h("autoplayResume"))},T=()=>{if(e.destroyed||!e.autoplay.running)return;const r=te();r.visibilityState==="hidden"&&(x=!0,l(!0)),r.visibilityState==="visible"&&c()},P=r=>{r.pointerType==="mouse"&&(x=!0,H=!0,!(e.animating||e.autoplay.paused)&&l(!0))},u=r=>{r.pointerType==="mouse"&&(H=!1,e.autoplay.paused&&c())},O=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",P),e.el.addEventListener("pointerleave",u))},C=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",P),e.el.removeEventListener("pointerleave",u))},Q=()=>{te().addEventListener("visibilitychange",T)},ee=()=>{te().removeEventListener("visibilitychange",T)};g("init",()=>{e.params.autoplay.enabled&&(O(),Q(),v())}),g("destroy",()=>{C(),ee(),e.autoplay.running&&p()}),g("_freeModeStaticRelease",()=>{(R||x)&&c()}),g("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?p():l(!0,!0)}),g("beforeTransitionStart",(r,E,f)=>{e.destroyed||!e.autoplay.running||(f||!e.params.autoplay.disableOnInteraction?l(!0,!0):p())}),g("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){p();return}$=!0,R=!1,x=!1,N=setTimeout(()=>{x=!0,R=!0,l(!0)},200)}}),g("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!$)){if(clearTimeout(N),clearTimeout(y),e.params.autoplay.disableOnInteraction){R=!1,$=!1;return}R&&e.params.cssMode&&c(),R=!1,$=!1}}),g("slideChange",()=>{e.destroyed||!e.autoplay.running||(V=!0)}),Object.assign(e.autoplay,{start:v,stop:p,pause:l,resume:c})}const $e=i=>(Z("data-v-88c8c2ff"),i=i(),K(),i),He=$e(()=>s("h1",null,"環保概念園區",-1)),Xe={__name:"indexSection03",setup(i){const e=oe([Ae,we,me]),_=oe([Pe,he,Oe,Ce,Re,Be]);return ne(()=>{z.init()}),(g,h)=>{const I=de("router-link");return X(),j(ae,null,[t(q,{class:"text-left text-h1","data-aos":"fade-right","data-aos-easing":"ease-out-cubic","data-aos-duration":"3000","data-aos-offset":"150","data-aos-once":"true","data-aos-delay":"0500"},{default:a(()=>[He]),_:1}),t(q,{class:"bg-img"}),t(q,{class:"text-center"},{default:a(()=>[t(L,{class:"GroupImghight d-lg-flex"},{default:a(()=>[t(m,{cols:"12",md:"4",class:"p-img"},{default:a(()=>[t(U,{src:_.value[0]},null,8,["src"])]),_:1}),t(m,{cols:"12",md:"4",class:"flex-column"},{default:a(()=>[t(L,{cols:"12",xl:"6"},{default:a(()=>[t(m,{class:"p-img-2"},{default:a(()=>[t(U,{src:_.value[1]},null,8,["src"])]),_:1})]),_:1}),t(L,{cols:"12",xl:"6"},{default:a(()=>[t(m,{cols:"12",xl:"4"},{default:a(()=>[t(L,null,{default:a(()=>[t(m,{xl:"6",class:"s-img"},{default:a(()=>[t(U,{src:_.value[2]},null,8,["src"])]),_:1}),t(m,{xl:"6",class:"s-img"},{default:a(()=>[t(U,{src:_.value[3]},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{cols:"12",md:"4",class:"p-img"},{default:a(()=>[t(U,{src:_.value[4]},null,8,["src"])]),_:1})]),_:1}),t(L,{class:"d-lg-none"},{default:a(()=>[t(m,{class:"d-flex justify-content-center",style:{margin:"auto"}},{default:a(()=>[t(W(ce),{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",autoplay:{delay:2500,disableOnInteraction:!1},coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:!0,modules:e.value,class:"mySwiper"},{default:a(()=>[(X(!0),j(ae,null,ge(_.value,(y,D)=>(X(),se(W(pe),{key:D},{default:a(()=>[t(U,{src:y},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["modules"])]),_:1})]),_:1})]),_:1}),t(L,null,{default:a(()=>[t(m,{cols:"12",class:"btn-auto"},{default:a(()=>[t(_e,{class:"btn"},{default:a(()=>[t(I,{to:"/ParkInfo",class:"btn-text"},{default:a(()=>[M("更多園區介紹")]),_:1})]),_:1})]),_:1})]),_:1})],64)}}},Ne=J(Xe,[["__scopeId","data-v-88c8c2ff"]]),Ve=""+new URL("flower-img-DDy9P7VA.png",import.meta.url).href,Ue=""+new URL("grass-BZ8RdNIR.png",import.meta.url).href,le=i=>(Z("data-v-eb85aaef"),i=i(),K(),i),ke={class:"container"},Ye=le(()=>s("h2",null,"鼠兔的永恆居所，讓幸福常駐心間",-1)),Fe=le(()=>s("div",null,[s("img",{class:"flower",src:Ve,alt:""})],-1)),Ge=le(()=>s("div",null,[s("img",{class:"grass",src:Ue,alt:""})],-1)),qe={__name:"SloganText",setup(i){return z.init(),B.registerPlugin(fe),ne(()=>{B.to(".flower",{scrollTrigger:{trigger:".flower",start:"-80% 40%",end:"0 60%",scrub:5},yPercent:-50,xPercent:-20,scale:1,rotation:50}),B.to(".grass",{scrollTrigger:{trigger:".grass",start:"-80% 40%x",end:"0 60%",scrub:5},yPercent:-50,xPercent:10,scale:1,rotation:-50,duration:1.5})}),(e,_)=>{const g=de("Marquee");return X(),j("div",ke,[Ye,t(L,{class:"img-two"},{default:a(()=>[t(m,null,{default:a(()=>[Fe]),_:1}),t(m,null,{default:a(()=>[Ge]),_:1})]),_:1}),t(g,{class:"text-English-small",loop:"-1"},{default:a(()=>[M(" Eternal Haven of Pikas")]),_:1})])}}},je=J(qe,[["__scopeId","data-v-eb85aaef"]]),We=""+new URL("mouse02-BSUpvlAp.png",import.meta.url).href,ze=i=>(Z("data-v-2efae9bd"),i=i(),K(),i),Je=ze(()=>s("div",{class:"container"},[s("div",null,[s("h1",null,"鼠兔永恆居所的使命"),s("p",null,[M("我們的使命是推動環保的生命禮儀理念，尊重每一個生命的價值，並幫助家屬在悲傷中找到心靈的平靜。"),s("br"),M(" 我們希望通過我們的服務，讓更多人了解並接受自然葬禮的美好，並以此尊重和愛護我們的環境。")])]),s("div",{class:"mouse"},[s("img",{class:"flower-yellow",src:We,alt:""})])],-1)),Ze={__name:"SloganText2",setup(i){return z.init(),(e,_)=>(X(),se(q,null,{default:a(()=>[Je]),_:1}))}},Ke=J(Ze,[["__scopeId","data-v-2efae9bd"]]),Qe=s("div",{class:"image-container"},[s("div",{class:"img1-1"}),s("img",{class:"img1-4",src:Te,alt:""}),s("img",{class:"img1-3",src:xe,alt:""}),s("img",{class:"img1-2",src:be,alt:""})],-1),et={class:"floating-content"},tt=s("div",{class:"text-Chinese text-black"},"鼠兔永恆居所",-1),at=s("div",{class:"text-English-position text-English"},"Eternal Haven of Pikas",-1),st=s("div",{class:"text-Chinese text-black text-Chinese-position-p text-p"},[s("p",null,"   鼠兔永恆居所是一個專為鼠兔而設的長眠居所，我們提供最舒適的環境  ，讓您的鼠兔能夠享受這美好世界。")],-1),nt=s("div",{class:"watercolour-Circle"},null,-1),mt={__name:"index",setup(i){B.registerPlugin(fe),ne(()=>{B.to(".img1-4",{y:30,duration:3,repeat:-1,yoyo:!0}),B.to(".img1-3",{scale:1.7,x:2,y:0,duration:2,transformOrigin:"0% 0%"}),B.to(".img1-2",{scale:1.7,x:0,y:0,duration:2,transformOrigin:"100% 0%"}),B.from(".image-container",{scrollTrigger:{trigger:".image-container",start:"40% 30%",end:"0 60%",scrub:10,markers:!0},scale:1.2,duration:2})});const e=[me];return(_,g)=>(X(),j(ae,null,[t(W(ce),{class:"mySwiper",autoplay:{delay:2500,disableOnInteraction:!1},modules:e},{default:a(()=>[t(W(pe),null,{default:a(()=>[Qe]),_:1})]),_:1}),s("div",et,[t(L,null,{default:a(()=>[t(m,{cols:"12",class:"text-center title-Chinese-position"},{default:a(()=>[tt]),_:1})]),_:1}),t(L,null,{default:a(()=>[t(m,{cols:"12",class:"text-position"},{default:a(()=>[at,st]),_:1})]),_:1})]),t(De),t(je),t(Ne),nt,t(Ke),t(ve)],64))}};export{mt as default};
