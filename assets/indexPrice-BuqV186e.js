import{_ as S,a6 as I,E as N,I as B,r as P,o as i,a8 as m,w as a,b as e,a as g,aa as c,R as u,ac as n,a9 as T,F as h,e as $,au as A,av as L,aw as v,ad as b,ax as x,ay as M,V as E,af as F,ag as H,az as R}from"./index-0HFqwiJ3.js";import{A as z}from"./aos-Cuzn-GnL.js";import{V as p}from"./VRow-NSydsmfH.js";import{V}from"./VCol-Bwfqn9VP.js";import{V as D}from"./VContainer-Bi4qcPEL.js";const O=r=>(F("data-v-d1909a8b"),r=r(),H(),r),U=O(()=>c("h1",null,"服務項目",-1)),j={key:0,class:"menu indexPrice"},q=["innerHTML"],G={__name:"indexPrice",props:{pageName:String},setup(r){const k=r,{api:C}=R(),w=I(),l=N([]),_=async o=>{var t,d;try{const{data:s}=await C.get("/service",{params:{itemsPerPage:0}});l.value.splice(0,l.value.length,...s.result.data),o!=="btn"&&(l.value=l.value.filter(y=>y.category==="優惠專案")),console.log(l.value)}catch(s){console.log(s),w({text:((d=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:d.message)||"發生錯誤",snackbarProps:{color:"red"}})}},f=async o=>{await _("btn"),o==="優惠專案"?l.value=l.value.filter(t=>t.category==="優惠專案"):o==="個別火化"?l.value=l.value.filter(t=>t.category==="個別火化"):o==="團體火化"&&(l.value=l.value.filter(t=>t.category==="團體火化"))};return z.init(),B(()=>{_()}),(o,t)=>{const d=P("router-link");return i(),m(D,{class:"text-center"},{default:a(()=>[e(p,null,{default:a(()=>[e(V,{class:"text-brown card-title"},{default:a(()=>[U]),_:1})]),_:1}),e(p,{class:"d-flex m-auto"},{default:a(()=>[k.pageName!=="services"?(i(),g("div",j,[c("div",null,[e(u,{class:"btn",onClick:t[0]||(t[0]=s=>f("優惠專案"))},{default:a(()=>[n("優惠專案")]),_:1})]),c("div",null,[e(u,{class:"btn",onClick:t[1]||(t[1]=s=>f("個別火化"))},{default:a(()=>[n("個別火化")]),_:1})]),c("div",null,[e(u,{class:"btn",onClick:t[2]||(t[2]=s=>f("團體火化"))},{default:a(()=>[n("團體火化")]),_:1})])])):T("",!0)]),_:1}),e(p,{class:"card no-background"},{default:a(()=>[(i(!0),g(h,null,$(l.value,s=>(i(),m(V,{cols:"12",md:"4",key:s._id},{default:a(()=>[e(A,{class:"no-background text-brown card-box"},{default:a(()=>[e(L,{class:"card-item"},{default:a(()=>[e(v,{class:"padding"},{default:a(()=>[n("$"+b(s.price),1)]),_:2},1024),e(v,{class:"padding"},{default:a(()=>[n(b(s.name),1)]),_:2},1024),e(x,{class:"padding text-black"},{default:a(()=>[n("專案項目包含")]),_:1}),e(x,{class:"padding"},{default:a(()=>[c("p",{innerHTML:s.description},null,8,q)]),_:2},1024)]),_:2},1024),e(M,null,{default:a(()=>[e(u,{class:"btn"},{default:a(()=>[e(d,{to:"/ContactUs",class:"btn-text"},{default:a(()=>[n("聯絡我們")]),_:1})]),_:1})]),_:1}),e(E,{src:s.image,cover:"",class:"card-img"},null,8,["src"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}}},Y=S(G,[["__scopeId","data-v-d1909a8b"]]);export{Y as i};
