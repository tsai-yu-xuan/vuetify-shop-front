import{_ as le,I as ge,o as O,a8 as re,w as t,b as e,d as l,V as v,af as ne,ag as ie,aa as L,a6 as fe,E as x,a as Z,R as N,ac as q,F as j,e as pe,aC as me,au as J,aw as ee,ad as K,ay as Ae,aA as te,aD as we,aE as he,az as ve,r as be,ax as se}from"./index-BiWzd_tV.js";import{c as Be,a as R,u as Ce,e as H,V as _e}from"./vee-validate.esm-BifY4yZG.js";import{_ as xe,a as Ve,b as Ie,c as Ye,d as ye,e as Ee,N as Me}from"./settings-CompgYAN.js";import{d as $,e as Ge,f as Se,S as de,c as b}from"./create-element-if-not-defined-DqIwgQbp.js";import{V as k}from"./VRow-BVr3b8CR.js";import{a as F,V as ce}from"./VCol-cc2X4wUg.js";import{P as qe}from"./pagination-CAm_maxx.js";import{b as ae}from"./route-block-B_A1xBdJ.js";import{V as Pe}from"./VTextarea-DofZ5eik.js";import"./_commonjsHelpers-Cpj98o6Y.js";function Te(A){const{effect:d,swiper:s,on:g,setTranslate:f,setTransition:n,overwriteParams:r,perspective:V,recreateShadows:w,getEffectParams:B}=A;g("beforeInit",()=>{if(s.params.effect!==d)return;s.classNames.push(`${s.params.containerModifierClass}${d}`),V&&V()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const a=r?r():{};Object.assign(s.params,a),Object.assign(s.originalParams,a)}),g("setTranslate",()=>{s.params.effect===d&&f()}),g("setTransition",(a,p)=>{s.params.effect===d&&n(p)}),g("transitionEnd",()=>{if(s.params.effect===d&&w){if(!B||!B().slideShadows)return;s.slides.forEach(a=>{a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>p.remove())}),w()}});let c;g("virtualUpdate",()=>{s.params.effect===d&&(s.slides.length||(c=!0),requestAnimationFrame(()=>{c&&s.slides&&s.slides.length&&(f(),c=!1)}))})}function De(A,d){const s=$(d);return s!==d&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function oe(A,d,s){const g=`swiper-slide-shadow${s?`-${s}`:""}${` swiper-slide-shadow-${A}`}`,f=$(d);let n=f.querySelector(`.${g.split(" ").join(".")}`);return n||(n=Ge("div",g.split(" ")),f.append(n)),n}function Qe(A){let{swiper:d,extendParams:s,on:g}=A;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Te({effect:"coverflow",swiper:d,on:g,setTranslate:()=>{const{width:r,height:V,slides:w,slidesSizesGrid:B}=d,c=d.params.coverflowEffect,a=d.isHorizontal(),p=d.translate,E=a?-p+r/2:-p+V/2,I=a?c.rotate:-c.rotate,P=c.depth,Y=Se(d);for(let M=0,W=w.length;M<W;M+=1){const C=w[M],T=B[M],U=C.swiperSlideOffset,G=(E-U-T/2)/T,h=typeof c.modifier=="function"?c.modifier(G):G*c.modifier;let X=a?I*h:0,z=a?0:I*h,D=-P*Math.abs(h),u=c.stretch;typeof u=="string"&&u.indexOf("%")!==-1&&(u=parseFloat(c.stretch)/100*T);let i=a?0:u*h,_=a?u*h:0,o=1-(1-c.scale)*Math.abs(h);Math.abs(_)<.001&&(_=0),Math.abs(i)<.001&&(i=0),Math.abs(D)<.001&&(D=0),Math.abs(X)<.001&&(X=0),Math.abs(z)<.001&&(z=0),Math.abs(o)<.001&&(o=0);const m=`translate3d(${_}px,${i}px,${D}px)  rotateX(${Y(z)}deg) rotateY(${Y(X)}deg) scale(${o})`,y=De(c,C);if(y.style.transform=m,C.style.zIndex=-Math.abs(Math.round(h))+1,c.slideShadows){let Q=a?C.querySelector(".swiper-slide-shadow-left"):C.querySelector(".swiper-slide-shadow-top"),S=a?C.querySelector(".swiper-slide-shadow-right"):C.querySelector(".swiper-slide-shadow-bottom");Q||(Q=oe("coverflow",C,a?"left":"top")),S||(S=oe("coverflow",C,a?"right":"bottom")),Q&&(Q.style.opacity=h>0?h:0),S&&(S.style.opacity=-h>0?-h:0)}}},setTransition:r=>{d.slides.map(w=>$(w)).forEach(w=>{w.style.transitionDuration=`${r}ms`,w.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(B=>{B.style.transitionDuration=`${r}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const Xe=""+new URL("onlineWorshipProduct-7-Cateab2X.png",import.meta.url).href,ze=""+new URL("onlineWorshipProduct-8-CzgYl1ZD.png",import.meta.url).href,Fe=""+new URL("onlineWorshipProduct-9-sdrayjZV.png",import.meta.url).href,Ne=""+new URL("onlineWorshipProduct-10-3cSDxkxL.png",import.meta.url).href,Ke=""+new URL("onlineWorshipProduct-11-CAzsoAxV.png",import.meta.url).href,Oe="data:image/png;base64,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",ke=A=>(ne("data-v-bb117b29"),A=A(),ie(),A),We=ke(()=>L("div",{id:"dropZone",class:"drop-zone"},null,-1)),Ue={__name:"onlineWorshipProduct",setup(A){const d=[Me];return ge(()=>{const s=document.getElementsByClassName("img"),g=document.getElementById("dropZone");!s.length||!g||Array.from(s).forEach(f=>{f.onmousedown=function(n){const r=f.cloneNode(!0);document.body.append(r);const V=n.clientX-f.getBoundingClientRect().left,w=n.clientY-f.getBoundingClientRect().top;r.style.position="fixed",r.style.zIndex=1e3,r.style.width=f.style.width,r.style.height=f.style.height,B(n.pageX,n.pageY);function B(a,p){r.style.left=a-V+"px",r.style.top=p-w+"px"}function c(a){requestAnimationFrame(()=>{B(a.pageX,a.pageY)})}document.addEventListener("mousemove",c),r.onmouseup=function(){document.removeEventListener("mousemove",c);const a=r.getBoundingClientRect(),p=g.getBoundingClientRect();if(a.right<p.left||a.left>p.right||a.bottom<p.top||a.top>p.bottom)r.remove();else{const E=a.left-p.left,I=a.top-p.top;r.style.left=`${E}px`,r.style.top=`${I}px`,r.style.position="absolute",r.style.zIndex=1,g.appendChild(r)}r.onmouseup=null}},f.ondragstart=function(){return!1}})}),(s,g)=>(O(),re(ce,null,{default:t(()=>[e(k,null,{default:t(()=>[e(F,null,{default:t(()=>[We]),_:1})]),_:1}),e(k,{class:"product-div"},{default:t(()=>[e(F,null,{default:t(()=>[e(l(de),{watchSlidesProgress:!0,modules:d,slidesPerView:3,class:"mySwiper",allowTouchMove:!1,navigation:"","navigation-next-el":".swiper-button-next","navigation-prev-el":".swiper-button-prev"},{default:t(()=>[e(l(b),{class:"img-box"},{default:t(()=>[e(v,{class:"img",src:xe})]),_:1}),e(l(b),{class:"img-box"},{default:t(()=>[e(v,{class:"img",src:Ve})]),_:1}),e(l(b),{class:"img-box"},{default:t(()=>[e(v,{class:"img",src:Ie})]),_:1}),e(l(b),{class:"img-box"},{default:t(()=>[e(v,{class:"img",src:Ye})]),_:1}),e(l(b),{class:"img-box"},{default:t(()=>[e(v,{class:"img",src:ye})]),_:1}),e(l(b),{class:"img-box"},{default:t(()=>[e(v,{class:"img",src:Ee})]),_:1}),e(l(b),{class:"img-box"},{default:t(()=>[e(v,{class:"img",src:Xe})]),_:1}),e(l(b),{class:"img-box"},{default:t(()=>[e(v,{class:"img",src:ze})]),_:1}),e(l(b),{class:"img-box"},{default:t(()=>[e(v,{class:"img",src:Fe})]),_:1}),e(l(b),{class:"img-box"},{default:t(()=>[e(v,{class:"img",src:Ne})]),_:1}),e(l(b),{class:"img-box"},{default:t(()=>[e(v,{class:"img",src:Ke})]),_:1}),e(l(b),{class:"img-box"},{default:t(()=>[e(v,{class:"img",src:Oe})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Re=le(Ue,[["__scopeId","data-v-bb117b29"]]),He=A=>(ne("data-v-85eb3b28"),A=A(),ie(),A),Le=He(()=>L("h1",{class:"text-center text-white"},"線上祭祀",-1)),$e={class:"onlineWorships-box"},ue={__name:"onlineWorships",setup(A){const d=[Qe,qe],{apiAuth:s}=ve(),g=fe(),f=x(null),n=x({open:!1,id:""}),r=u=>{u?(n.value.id=u._id,E.value.value=u.name,I.value.value=u.description,P.value.value=V(u.date),console.log("item",u)):n.value.id="",n.value.open=!0},V=u=>new Date(u).toISOString().split("T")[0],w=()=>{n.value.open=!1,p(),f.value.deleteFileRecord()},B=Be({name:R().required("商品名稱必填"),description:R().required("商品說明必填"),date:R().required("日期必填").typeError("無效的日期格式")}),{handleSubmit:c,isSubmitting:a,resetForm:p}=Ce({validationSchema:B,initialValues:{name:"",description:""}}),E=H("name"),I=H("description"),P=H("date"),Y=x([]),M=x([]),W=c(async u=>{var i,_,o;if(!((i=Y.value[0])!=null&&i.error)&&!(n.value.id.length===0&&Y.value.length<1))try{const m=new FormData;m.append("name",u.name),m.append("description",u.description),m.append("date",u.date),Y.value.length>0&&m.append("image",Y.value[0].file),n.value.id===""?await s.post("/onlineWorship",m):await s.patch("/onlineWorship/"+n.value.id,m),g({text:n.value.id===""?"新增成功":"編輯成功",snackbarProps:{color:"green"}}),w(),D()}catch(m){console.log(m),g({text:((o=(_=m==null?void 0:m.response)==null?void 0:_.data)==null?void 0:o.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),C=x(10),T=x([{key:"createdAt",order:"desc"}]),U=x(1),G=x([]),h=x(!0),X=x(0),z=x(""),D=async u=>{var i,_,o,m;h.value=!0;try{const{data:y}=await s.get("/onlineWorship/all",{params:{page:U.value,itemsPerPage:C.value,sortBy:((i=T.value[0])==null?void 0:i.key)||"createdAt",sortOrder:((_=T.value[0])==null?void 0:_.order)||"desc",search:z.value}}),Q=y.result.data.map(S=>({...S,createdAt:S.createdAt.slice(0,10)}));G.value.splice(0,G.value.length,...Q),console.log("cardItems",G.value),X.value=y.result.total}catch(y){console.log(y),g({text:((m=(o=y==null?void 0:y.response)==null?void 0:o.data)==null?void 0:m.message)||"發生錯誤",snackbarProps:{color:"red"}})}h.value=!1};return D(),(u,i)=>{const _=be("vue-file-agent");return O(),Z(j,null,[e(ce,null,{default:t(()=>[e(k,null,{default:t(()=>[e(F,{cols:"12",class:"title"},{default:t(()=>[Le]),_:1}),L("div",$e,[e(N,{class:"addBtn",onClick:i[0]||(i[0]=o=>r(null))},{default:t(()=>[q("新增祭祀寶貝")]),_:1}),e(l(de),{class:"swiper",effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:!0,modules:d},{default:t(()=>[(O(!0),Z(j,null,pe(G.value,o=>(O(),re(l(b),{"swiper-slide":"",key:o._id},{default:t(()=>[e(F,{class:"card no-background text-center"},{default:t(()=>[e(J,{class:"no-background card-box"},{default:t(()=>[e(v,{class:"img",src:o.image,height:"200px"},null,8,["src"]),e(ee,null,{default:t(()=>[q(K(o.name),1)]),_:2},1024),e(se,null,{default:t(()=>[q("忌日 "+K(V(o.date)),1)]),_:2},1024),e(se,null,{default:t(()=>[q(K(o.description),1)]),_:2},1024),e(N,{class:"btn",icon:"mdi-pencil","w-25":"",variant:"text",color:"white",onClick:m=>r(o)},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(k,null,{default:t(()=>[e(F,null,{default:t(()=>[e(Re,{class:"overlay"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(he,{modelValue:n.value.open,"onUpdate:modelValue":i[6]||(i[6]=o=>n.value.open=o),persistent:"",width:"500"},{default:t(()=>[e(_e,{onSubmit:me(l(W),["prevent"]),disabled:l(a)},{default:t(()=>[e(J,null,{default:t(()=>[e(ee,null,{default:t(()=>[q(K(n.value.id?"編輯商品":"新增商品"),1)]),_:1}),e(Ae,null,{default:t(()=>[e(_,{modelValue:Y.value,"onUpdate:modelValue":i[1]||(i[1]=o=>Y.value=o),"raw-model-value":M.value,"onUpdate:rawModelValue":i[2]||(i[2]=o=>M.value=o),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:f},null,8,["modelValue","raw-model-value"]),e(te,{label:"名稱",modelValue:l(E).value.value,"onUpdate:modelValue":i[3]||(i[3]=o=>l(E).value.value=o),"error-messages":l(E).errorMessage.value},null,8,["modelValue","error-messages"]),e(te,{type:"date",modelValue:l(P).value.value,"onUpdate:modelValue":i[4]||(i[4]=o=>l(P).value.value=o),label:"輸入寶貝忌日","error-messages":l(P).errorMessage.value},null,8,["modelValue","error-messages"]),e(Pe,{label:"說明",modelValue:l(I).value.value,"onUpdate:modelValue":i[5]||(i[5]=o=>l(I).value.value=o),"error-messages":l(I).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(we,null,{default:t(()=>[e(N,{color:"red",loading:l(a),onClick:w},{default:t(()=>[q("取消")]),_:1},8,["loading"]),e(N,{color:"green",type:"submit",loading:l(a)},{default:t(()=>[q("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])],64)}}};typeof ae=="function"&&ae(ue);const nt=le(ue,[["__scopeId","data-v-85eb3b28"]]);export{nt as default};
