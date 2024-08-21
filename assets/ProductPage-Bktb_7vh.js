import{_ as w,u as E,aM as B,a6 as k,E as d,r as L,o as m,a8 as S,w as e,b as a,V as y,aw as M,ac as p,ad as V,ax as R,ay as T,aD as A,R as N,au as U,I as z,a7 as D,a as x,aa as f,ae as F,F as b,e as $,O as G,af as H,ag as O,az as Y}from"./index-BiWzd_tV.js";import{V as P}from"./VRow-BVr3b8CR.js";import{a as _,V as j}from"./VCol-cc2X4wUg.js";import{V as q}from"./VPagination-LR69Yiqp.js";const J={__name:"ProductCard",props:["_id","category","description","image","name","price","sell"],setup(s){const r=E(),i=B(),g=k(),v=s,o=d(!1),u=async()=>{if(!r.isLogin){i.push("/login");return}o.value=!0;const l=await r.addCart(v._id,1);g({text:l.text,snackbarProps:{color:l.color}}),o.value=!1};return(l,h)=>{const n=L("router-link");return m(),S(U,{class:"card"},{default:e(()=>[a(y,{class:"",src:s.image,cover:"",height:"200"},null,8,["src"]),a(M,{class:"text-center"},{default:e(()=>[a(n,{class:"card-title",to:"/products/"+s._id},{default:e(()=>[p(V(s.name),1)]),_:1},8,["to"])]),_:1}),a(R,null,{default:e(()=>[p("$"+V(s.price),1)]),_:1}),a(T,null,{default:e(()=>[p(V(s.description),1)]),_:1}),a(A,{class:"btn"},{default:e(()=>[a(N,{"prepend-icon":"mdi-cart",onClick:u,loading:o.value},{default:e(()=>[p("加入購物車")]),_:1},8,["loading"])]),_:1})]),_:1})}}},K=w(J,[["__scopeId","data-v-f5beb50b"]]),I=s=>(H("data-v-bac43b70"),s=s(),O(),s),Q=I(()=>f("h1",{class:"text-center title1 text-black text-Chinese"},"線上購物",-1)),W={class:"image-container"},X=I(()=>f("h1",{class:"text-overlay"},"寵物紀鑰匙圈",-1)),C=20,Z={__name:"ProductPage",setup(s){const r=d(!1),i=()=>{const n=window.scrollY,c=80;r.value=n>c};z(()=>{window.addEventListener("scroll",i)}),D(()=>{window.removeEventListener("scroll",i)});const{api:g}=Y(),v=k(),o=d(1),u=d(1),l=d([]),h=async()=>{var n,c;try{const{data:t}=await g.get("/product",{params:{itemsPerPage:C,page:o.value}});u.value=Math.ceil(t.result.total/C),l.value.splice(0,l.value.length,...t.result.data)}catch(t){console.log(t),v({text:((c=(n=t==null?void 0:t.response)==null?void 0:n.data)==null?void 0:c.message)||"發生錯誤",snackbarProps:{color:"red"}})}};return h(),(n,c)=>(m(),x(b,null,[f("div",{id:"navbar",class:F({"hidden-navbar":r.value})},null,2),a(j,{fluid:"",class:"container"},{default:e(()=>[a(P,null,{default:e(()=>[a(_,{cols:"12"},{default:e(()=>[Q]),_:1})]),_:1}),a(P,null,{default:e(()=>[a(_,{cols:"12",md:"5",class:"no-padding image-container"},{default:e(()=>[f("div",W,[a(y,{class:"text",src:"https://picsum.photos/300/200/?random=10"}),X])]),_:1}),(m(!0),x(b,null,$(l.value,t=>(m(),S(_,{cols:"12",md:"2",lg:"2",class:"pl-5 pr-3",key:t._id},{default:e(()=>[a(K,G({ref_for:!0},t),null,16)]),_:2},1024))),128)),a(_,{cols:"12",class:"text-grey"},{default:e(()=>[a(q,{modelValue:o.value,"onUpdate:modelValue":[c[0]||(c[0]=t=>o.value=t),h],length:u.value,rounded:"circle"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})],64))}},oa=w(Z,[["__scopeId","data-v-bac43b70"]]);export{oa as default};
