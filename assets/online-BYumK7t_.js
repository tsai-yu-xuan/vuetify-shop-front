import{_ as b,a as v,b as w,c as C,d as V,e as B,N as S}from"./settings-CompgYAN.js";import{S as I,c as i}from"./create-element-if-not-defined-DqIwgQbp.js";import{_ as R,I as N,o as E,a8 as M,w as o,b as e,d as l,V as c,af as X,ag as Y,aa as Z}from"./index-BiWzd_tV.js";import{V as A,a as _}from"./VCol-cc2X4wUg.js";import{V as g}from"./VRow-BVr3b8CR.js";const k=r=>(X("data-v-e390c583"),r=r(),Y(),r),z=k(()=>Z("div",{id:"dropZone",class:"drop-zone"},null,-1)),L={__name:"online",setup(r){const h=[S];return N(()=>{const u=document.getElementsByClassName("img"),d=document.getElementById("dropZone");!u.length||!d||Array.from(u).forEach(n=>{n.onmousedown=function(p){const t=n.cloneNode(!0);document.body.append(t);const x=p.clientX-n.getBoundingClientRect().left,y=p.clientY-n.getBoundingClientRect().top;t.style.position="fixed",t.style.zIndex=1e3,t.style.width=n.style.width,t.style.height=n.style.height,m(p.pageX,p.pageY);function m(s,a){t.style.left=s-x+"px",t.style.top=a-y+"px"}function f(s){requestAnimationFrame(()=>{m(s.pageX,s.pageY)})}document.addEventListener("mousemove",f),t.onmouseup=function(){document.removeEventListener("mousemove",f);const s=t.getBoundingClientRect(),a=d.getBoundingClientRect();s.right<a.left||s.left>a.right||s.bottom<a.top||s.top>a.bottom?t.remove():(t.style.left=`${a.left}px`,t.style.top=`${a.top}px`,t.style.position="absolute",d.appendChild(t)),t.onmouseup=null}},n.ondragstart=function(){return!1}})}),(u,d)=>(E(),M(A,null,{default:o(()=>[e(g,null,{default:o(()=>[e(_,null,{default:o(()=>[z]),_:1})]),_:1}),e(g,{class:"product-div"},{default:o(()=>[e(_,null,{default:o(()=>[e(l(I),{watchSlidesProgress:!0,modules:h,slidesPerView:3,class:"mySwiper",allowTouchMove:!1,navigation:"","navigation-next-el":".swiper-button-next","navigation-prev-el":".swiper-button-prev"},{default:o(()=>[e(l(i),{class:"img-box"},{default:o(()=>[e(c,{class:"img",src:b})]),_:1}),e(l(i),{class:"img-box"},{default:o(()=>[e(c,{class:"img",src:v})]),_:1}),e(l(i),{class:"img-box"},{default:o(()=>[e(c,{class:"img",src:w})]),_:1}),e(l(i),{class:"img-box"},{default:o(()=>[e(c,{class:"img",src:C})]),_:1}),e(l(i),{class:"img-box"},{default:o(()=>[e(c,{class:"img",src:V})]),_:1}),e(l(i),{class:"img-box"},{default:o(()=>[e(c,{class:"img",src:B})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},j=R(L,[["__scopeId","data-v-e390c583"]]);export{j as default};