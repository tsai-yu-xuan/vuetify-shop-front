import{_ as B,a6 as S,E as P,I as T,r as $,o as u,a as f,b as a,w as t,ac as n,aa as r,R as c,a9 as I,F as p,e as A,a8 as L,au as M,av as E,aw as v,ad as g,ax as b,ay as F,V as H,az as R}from"./index-BPAFU9jf.js";import{A as z}from"./aos-Cuzn-GnL.js";import{V}from"./VContainer-DSa_mKGH.js";import{V as m}from"./VRow-BDu6ADDB.js";import{V as x}from"./VCol-D_7MztIi.js";const D={key:0,class:"menu"},O=["innerHTML"],U={__name:"indexPrice",props:{pageName:String},setup(k){const C=k,{api:y}=R(),w=S(),l=P([]),_=async o=>{var e,i;try{const{data:s}=await y.get("/service",{params:{itemsPerPage:0}});l.value.splice(0,l.value.length,...s.result.data),o!=="btn"&&(l.value=l.value.filter(N=>N.category==="優惠專案")),console.log(l.value)}catch(s){console.log(s),w({text:((i=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:i.message)||"發生錯誤",snackbarProps:{color:"red"}})}},d=async o=>{await _("btn"),o==="優惠專案"?l.value=l.value.filter(e=>e.category==="優惠專案"):o==="個別火化"?l.value=l.value.filter(e=>e.category==="個別火化"):o==="團體火化"?l.value=l.value.filter(e=>e.category==="團體火化"):o==="紀念飾品區"&&(l.value=l.value.filter(e=>e.category==="紀念飾品區"))};return z.init(),T(()=>{_()}),(o,e)=>{const i=$("router-link");return u(),f(p,null,[a(V),a(V,{class:"text-center"},{default:t(()=>[a(m,{class:"text-brown card-title"},{default:t(()=>[a(x,null,{default:t(()=>[n("服務項目")]),_:1})]),_:1}),a(m,{class:"d-flex m-auto"},{default:t(()=>[C.pageName!=="services"?(u(),f("div",D,[r("div",null,[a(c,{class:"mt-5 btn",onClick:e[0]||(e[0]=s=>d("優惠專案"))},{default:t(()=>[n("優惠專案")]),_:1})]),r("div",null,[a(c,{class:"mt-5 btn",onClick:e[1]||(e[1]=s=>d("個別火化"))},{default:t(()=>[n("個別火化")]),_:1})]),r("div",null,[a(c,{class:"mt-5 btn",onClick:e[2]||(e[2]=s=>d("團體火化"))},{default:t(()=>[n("團體火化")]),_:1})]),r("div",null,[a(c,{class:"mt-5 btn",onClick:e[3]||(e[3]=s=>d("紀念飾品區"))},{default:t(()=>[n("紀念飾品區")]),_:1})])])):I("",!0)]),_:1}),a(m,{class:"card no-background"},{default:t(()=>[(u(!0),f(p,null,A(l.value,s=>(u(),L(x,{cols:"12",md:"4",key:s._id},{default:t(()=>[a(M,{class:"no-background text-brown card-box"},{default:t(()=>[a(E,null,{default:t(()=>[a(v,{class:"padding"},{default:t(()=>[n("$"+g(s.price),1)]),_:2},1024),a(v,{class:"padding"},{default:t(()=>[n(g(s.name),1)]),_:2},1024),a(b,{class:"padding text-black"},{default:t(()=>[n("專案項目包含")]),_:1}),a(b,{class:"padding"},{default:t(()=>[r("p",{innerHTML:s.description},null,8,O)]),_:2},1024)]),_:2},1024),a(F,null,{default:t(()=>[a(c,{class:"mt-5 btn"},{default:t(()=>[a(i,{to:"/ContactUs",class:"btn-text"},{default:t(()=>[n("聯絡我們")]),_:1})]),_:1})]),_:1}),a(H,{src:s.image,cover:"",height:"200"},null,8,["src"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})],64)}}},K=B(U,[["__scopeId","data-v-860d2fa8"]]);export{K as i};
