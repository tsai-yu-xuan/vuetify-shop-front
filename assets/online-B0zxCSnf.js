import{p as V,am as h,g as y,L as b,as as g,_ as i,o as f,a8 as p,w as a,b as t,au as r,O as u,ay as c,ac as d}from"./index-CavX4ErP.js";import{a as m,V as C}from"./VCol-DyHGsAJo.js";import{V as w}from"./VRow-B5rLeikx.js";const D=V({disabled:Boolean,modelValue:{type:Boolean,default:null},...h()},"VHover"),_=y()({name:"VHover",props:D(),emits:{"update:modelValue":o=>!0},setup(o,n){let{slots:e}=n;const s=b(o,"modelValue"),{runOpenDelay:v,runCloseDelay:x}=g(o,l=>!o.disabled&&(s.value=l));return()=>{var l;return(l=e.default)==null?void 0:l.call(e,{isHovering:s.value,props:{onMouseenter:v,onMouseleave:x}})}}}),M={};function k(o,n){return f(),p(w,{class:"bg"},{default:a(()=>[t(m,{cols:"12",sm:"6"},{default:a(()=>[t(_,{"open-delay":"200"},{default:a(({isHovering:e,props:s})=>[t(r,u({class:[{"on-hover":e},"mx-auto"],elevation:e?16:2,height:"350","max-width":"350"},s),{default:a(()=>[t(c,{class:"font-weight-medium mt-12 text-center text-subtitle-1"},{default:a(()=>[d(" Open Delay (Mouse enter) ")]),_:1})]),_:2},1040,["class","elevation"])]),_:1})]),_:1}),t(m,{cols:"12",sm:"6"},{default:a(()=>[t(_,{"close-delay":"200"},{default:a(({isHovering:e,props:s})=>[t(r,u({class:[{"on-hover":e},"mx-auto"],elevation:e?16:2,height:"350","max-width":"350"},s),{default:a(()=>[t(c,{class:"font-weight-medium mt-12 text-center text-subtitle-1"},{default:a(()=>[d(" Close Delay (Mouse leave) ")]),_:1})]),_:2},1040,["class","elevation"])]),_:1})]),_:1})]),_:1})}const B=i(M,[["render",k],["__scopeId","data-v-bbfc11f6"]]),H={__name:"online",setup(o){return(n,e)=>(f(),p(C,null,{default:a(()=>[t(B)]),_:1}))}},I=i(H,[["__scopeId","data-v-aa71d525"]]);export{I as default};
