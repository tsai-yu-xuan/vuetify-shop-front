import{a6 as k,E as y,o as c,a8 as V,w as s,b as r,aa as l,ac as h,a as n,e as b,F as g,aD as x,ae as d}from"./index-DeG0fqyX.js";import{b as u}from"./route-block-B_A1xBdJ.js";import{V as v,a as m}from"./VCol-BdXlyCkl.js";import{V as w}from"./VDivider-gdJcDjpS.js";import{V as D}from"./VDataTable-bnfZsFUo.js";import{V as A}from"./VRow-u1lpl75C.js";import"./VPagination-hhI_IJ_o.js";import"./VList-TzxMveJu.js";const B=l("h1",{class:"text-center text-white"},"訂單管理",-1),C={class:"border"},N={__name:"orders",setup(S){const{apiAuth:p}=x(),_=k(),i=y([]),f=[{title:"編號",key:"_id"},{title:"帳號",key:"user.account"},{title:"日期",key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:t=>t.cart.reduce((a,e)=>a+e.quantity*e.p_id.price,0)}];return(async()=>{var t,a;try{const{data:e}=await p.get("/order/all");i.value.push(...e.result)}catch(e){console.log(e),_({text:((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}})(),(t,a)=>(c(),V(v,null,{default:s(()=>[r(A,null,{default:s(()=>[r(m,{cols:"12"},{default:s(()=>[B]),_:1}),r(w),l("div",C,[h(" . "),r(m,{cols:"12"},{default:s(()=>[r(D,{items:i.value,headers:f,class:"no-background"},{"item.cart":s(e=>[l("ul",null,[(c(!0),n(g,null,b(e.item.cart,o=>(c(),n("li",{key:o._id},d(o.p_id.name)+" * "+d(o.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})])]),_:1})]),_:1}))}};typeof u=="function"&&u(N);export{N as default};
