import{_ as K,a6 as Q,E as u,o as q,a as W,b as l,w as o,aa as z,R as k,ac as x,V as X,a8 as Y,a9 as Z,aC as ee,d as r,au as ae,aw as le,ad as te,ay as se,aA as E,aD as re,aE as oe,F as ne,az as ue,r as ie,a3 as de,af as me,ag as pe}from"./index-0HFqwiJ3.js";import{c as ce,a as F,b as ve,d as ge,u as fe,e as p,V as Ve}from"./vee-validate.esm-D-3ZZln0.js";import{b as N}from"./route-block-B_A1xBdJ.js";import{V as be}from"./VRow-NSydsmfH.js";import{V as I}from"./VCol-Bwfqn9VP.js";import{V as ye}from"./VDivider-DUk0U8RG.js";import{V as ke,a as xe}from"./VDataTableServer-CPa8Rw8m.js";import{V as we}from"./VContainer-Bi4qcPEL.js";import{a as Ce}from"./VDataTable-CtSgPgu0.js";import{V as Se}from"./VTextarea-ClWK7G-J.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VPagination-DYl6qwmI.js";import"./VList-CaxPDtrc.js";const Ue=c=>(me("data-v-08fe1e50"),c=c(),pe(),c),Be=Ue(()=>z("h1",{class:"text-center text-white"},"服務項目管理",-1)),Fe={class:"border"},L={__name:"services",setup(c){const{apiAuth:w}=ue(),C=Q(),M=u(null),n=u({open:!1,id:""}),_=s=>{s?(n.value.id=s._id,v.value.value=s.name,g.value.value=s.price,f.value.value=s.description,V.value.value=s.category,b.value.value=s.sell):n.value.id="",n.value.open=!0},$=()=>{n.value.open=!1,O(),M.value.deleteFileRecord()},A=["優惠專案","個別火化","團體火化"],j=ce({name:F().required("服務項目名稱必填"),price:ve().typeError("服務項目價格格式錯誤").required("服務項目價格必填").min(0,"服務項目價格不能小於 0"),description:F().required("服務項目說明必填"),category:F().required("服務項目分類必填").test("isCategory","商品分類錯誤",s=>A.includes(s)),sell:ge()}),{handleSubmit:H,isSubmitting:S,resetForm:O}=fe({validationSchema:j,initialValues:{name:"",price:0,description:"",category:"",sell:!0}}),v=p("name"),g=p("price"),f=p("description"),V=p("category"),b=p("sell"),d=u([]),D=u([]),G=H(async s=>{var a,i,e;if(!((a=d.value[0])!=null&&a.error)&&!(n.value.id.length===0&&d.value.length<1))try{const t=new FormData;t.append("name",s.name),t.append("price",s.price),t.append("description",s.description),t.append("category",s.category),t.append("sell",s.sell),d.value.length>0&&t.append("image",d.value[0].file),n.value.id===""?await w.post("/service",t):await w.patch("/service/"+n.value.id,t),C({text:n.value.id===""?"新增成功":"編輯成功",snackbarProps:{color:"green"}}),$(),m(!0)}catch(t){console.log(t),C({text:((e=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:e.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),P=u(10),y=u([{key:"createdAt",order:"desc"}]),h=u(1),U=u([]),J=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"價格",align:"center",sortable:!0,key:"price"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"操作",align:"center",sortable:!1,key:"action"}],B=u(!0),T=u(0),R=u(""),m=async()=>{var s,a,i,e;B.value=!0;try{const{data:t}=await w.get("/service/all",{params:{sortBy:((s=y.value[0])==null?void 0:s.key)||"createdAt",sortOrder:((a=y.value[0])==null?void 0:a.order)||"desc",search:R.value}});U.value.splice(0,U.value.length,...t.result.data),T.value=t.result.total}catch(t){console.log(t),C({text:((e=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:e.message)||"發生錯誤",snackbarProps:{color:"red"}})}B.value=!1};return m(),(s,a)=>{const i=ie("vue-file-agent");return q(),W(ne,null,[l(we,{class:"w-100"},{default:o(()=>[l(be,null,{default:o(()=>[l(I,{cols:"12"},{default:o(()=>[Be]),_:1}),l(ye),z("div",Fe,[l(I,{cols:"12"},{default:o(()=>[l(k,{class:"btn",onClick:a[0]||(a[0]=e=>_(null))},{default:o(()=>[x("新增服務項目")]),_:1})]),_:1}),l(I,{cols:"12"},{default:o(()=>[l(ke,{"items-per-page":P.value,"onUpdate:itemsPerPage":[a[1]||(a[1]=e=>P.value=e),a[4]||(a[4]=e=>m(!1))],"sort-by":y.value,"onUpdate:sortBy":[a[2]||(a[2]=e=>y.value=e),a[5]||(a[5]=e=>m(!1))],page:h.value,"onUpdate:page":[a[3]||(a[3]=e=>h.value=e),a[6]||(a[6]=e=>m(!1))],items:U.value,headers:J,loading:B.value,"items-length":T.value,search:R.value,hover:"",class:"no-background"},{"item.image":o(({value:e})=>[l(X,{src:e,height:"50px"},null,8,["src"])]),"item.sell":o(({value:e})=>[e?(q(),Y(de,{key:0,icon:"mdi-check"})):Z("",!0)]),"item.action":o(({item:e})=>[l(k,{icon:"mdi-pencil",variant:"text",color:"white",onClick:t=>_(e)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})])]),_:1})]),_:1}),l(oe,{modelValue:n.value.open,"onUpdate:modelValue":a[14]||(a[14]=e=>n.value.open=e),persistent:"",width:"500"},{default:o(()=>[l(Ve,{onSubmit:ee(r(G),["prevent"]),disabled:r(S)},{default:o(()=>[l(ae,null,{default:o(()=>[l(le,null,{default:o(()=>[x(te(n.value.id?"編輯商品":"新增商品"),1)]),_:1}),l(se,null,{default:o(()=>[l(E,{label:"名稱",modelValue:r(v).value.value,"onUpdate:modelValue":a[7]||(a[7]=e=>r(v).value.value=e),"error-messages":r(v).errorMessage.value},null,8,["modelValue","error-messages"]),l(E,{label:"價格",type:"number",min:"0",modelValue:r(g).value.value,"onUpdate:modelValue":a[8]||(a[8]=e=>r(g).value.value=e),"error-messages":r(g).errorMessage.value},null,8,["modelValue","error-messages"]),l(Ce,{label:"分類",items:A,modelValue:r(V).value.value,"onUpdate:modelValue":a[9]||(a[9]=e=>r(V).value.value=e),"error-messages":r(V).errorMessage.value},null,8,["modelValue","error-messages"]),l(xe,{label:"上架",modelValue:r(b).value.value,"onUpdate:modelValue":a[10]||(a[10]=e=>r(b).value.value=e),"error-messages":r(b).errorMessage.value},null,8,["modelValue","error-messages"]),l(Se,{label:"說明",modelValue:r(f).value.value,"onUpdate:modelValue":a[11]||(a[11]=e=>r(f).value.value=e),"error-messages":r(f).errorMessage.value},null,8,["modelValue","error-messages"]),l(i,{modelValue:d.value,"onUpdate:modelValue":a[12]||(a[12]=e=>d.value=e),"raw-model-value":D.value,"onUpdate:rawModelValue":a[13]||(a[13]=e=>D.value=e),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:M},null,8,["modelValue","raw-model-value"])]),_:1}),l(re,null,{default:o(()=>[l(k,{color:"red",loading:r(S),onClick:$},{default:o(()=>[x("取消")]),_:1},8,["loading"]),l(k,{color:"green",type:"submit",loading:r(S)},{default:o(()=>[x("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])],64)}}};typeof N=="function"&&N(L);const ze=K(L,[["__scopeId","data-v-08fe1e50"]]);export{ze as default};
