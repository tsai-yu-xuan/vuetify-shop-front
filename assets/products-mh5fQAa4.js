import{_ as Q,a6 as W,E as u,o as L,a as X,b as l,w as r,aa as K,R as C,ac as S,aA as A,aB as Y,V as Z,a8 as ee,a9 as ae,aC as le,d as t,au as te,aw as oe,ad as re,ay as se,aD as ne,aE as ue,F as ie,az as de,r as pe,a3 as me,af as ve,ag as ce}from"./index-0HFqwiJ3.js";import{c as ge,a as M,b as fe,d as Ve,u as be,e as v,V as ye}from"./vee-validate.esm-D-3ZZln0.js";import{b as _}from"./route-block-B_A1xBdJ.js";import{V as ke}from"./VRow-NSydsmfH.js";import{V as D}from"./VCol-Bwfqn9VP.js";import{V as we}from"./VDivider-DUk0U8RG.js";import{V as xe,a as Ce}from"./VDataTableServer-CPa8Rw8m.js";import{V as Se}from"./VContainer-Bi4qcPEL.js";import{a as Ue}from"./VDataTable-CtSgPgu0.js";import{V as Be}from"./VTextarea-ClWK7G-J.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VPagination-DYl6qwmI.js";import"./VList-CaxPDtrc.js";const $e=c=>(ve("data-v-daff5ed5"),c=c(),ce(),c),Fe=$e(()=>K("h1",{class:"text-center text-white"},"商品管理",-1)),Ie={class:"border"},h={__name:"products",setup(c){const{apiAuth:U}=de(),B=W(),T=u(null),n=u({open:!1,id:""}),R=o=>{o?(n.value.id=o._id,g.value.value=o.name,f.value.value=o.price,V.value.value=o.description,b.value.value=o.category,y.value.value=o.sell):n.value.id="",n.value.open=!0},q=()=>{n.value.open=!1,O(),T.value.deleteFileRecord()},E=["鑰匙圈","生態瓶","盆栽"],j=ge({name:M().required("商品名稱必填"),price:fe().typeError("商品價格格式錯誤").required("商品價格必填").min(0,"商品價格不能小於 0"),description:M().required("商品說明必填"),category:M().required("商品分類必填").test("isCategory","商品分類錯誤",o=>E.includes(o)),sell:Ve()}),{handleSubmit:H,isSubmitting:$,resetForm:O}=be({validationSchema:j,initialValues:{name:"",price:0,description:"",category:"",sell:!0}}),g=v("name"),f=v("price"),V=v("description"),b=v("category"),y=v("sell"),m=u([]),N=u([]),G=H(async o=>{var e,d,a;if(!((e=m.value[0])!=null&&e.error)&&!(n.value.id.length===0&&m.value.length<1))try{const s=new FormData;s.append("name",o.name),s.append("price",o.price),s.append("description",o.description),s.append("category",o.category),s.append("sell",o.sell),m.value.length>0&&s.append("image",m.value[0].file),n.value.id===""?await U.post("/product",s):await U.patch("/product/"+n.value.id,s),B({text:n.value.id===""?"新增成功":"編輯成功",snackbarProps:{color:"green"}}),q(),i(!0)}catch(s){console.log(s),B({text:((a=(d=s==null?void 0:s.response)==null?void 0:d.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),F=u(10),k=u([{key:"createdAt",order:"desc"}]),w=u(1),I=u([]),J=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"價格",align:"center",sortable:!0,key:"price"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"操作",align:"center",sortable:!1,key:"action"}],P=u(!0),z=u(0),x=u(""),i=async o=>{var e,d,a,s;o&&(w.value=1),P.value=!0;try{const{data:p}=await U.get("/product/all",{params:{page:w.value,itemsPerPage:F.value,sortBy:((e=k.value[0])==null?void 0:e.key)||"createdAt",sortOrder:((d=k.value[0])==null?void 0:d.order)||"desc",search:x.value}});I.value.splice(0,I.value.length,...p.result.data),z.value=p.result.total}catch(p){console.log(p),B({text:((s=(a=p==null?void 0:p.response)==null?void 0:a.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}P.value=!1};return i(),(o,e)=>{const d=pe("vue-file-agent");return L(),X(ie,null,[l(Se,{class:""},{default:r(()=>[l(ke,null,{default:r(()=>[l(D,{cols:"12"},{default:r(()=>[Fe]),_:1}),l(we),K("div",Ie,[l(D,{cols:"12"},{default:r(()=>[l(C,{class:"btn",onClick:e[0]||(e[0]=a=>R(null))},{default:r(()=>[S("新增商品")]),_:1})]),_:1}),l(D,{cols:"12"},{default:r(()=>[l(xe,{"items-per-page":F.value,"onUpdate:itemsPerPage":[e[4]||(e[4]=a=>F.value=a),e[7]||(e[7]=a=>i(!1))],"sort-by":k.value,"onUpdate:sortBy":[e[5]||(e[5]=a=>k.value=a),e[8]||(e[8]=a=>i(!1))],page:w.value,"onUpdate:page":[e[6]||(e[6]=a=>w.value=a),e[9]||(e[9]=a=>i(!1))],items:I.value,headers:J,loading:P.value,"items-length":z.value,search:x.value,hover:"",class:"no-background"},{top:r(()=>[l(A,{label:"搜尋",modelValue:x.value,"onUpdate:modelValue":e[1]||(e[1]=a=>x.value=a),"append-icon":"mdi-magnify",onClickAppend:e[2]||(e[2]=a=>i(!0)),onKeydown:e[3]||(e[3]=Y(a=>i(!0),["enter"]))},null,8,["modelValue"])]),"item.image":r(({value:a})=>[l(Z,{src:a,height:"50px"},null,8,["src"])]),"item.sell":r(({value:a})=>[a?(L(),ee(me,{key:0,icon:"mdi-check"})):ae("",!0)]),"item.action":r(({item:a})=>[l(C,{icon:"mdi-pencil",variant:"text",color:"white",onClick:s=>R(a)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})])]),_:1})]),_:1}),l(ue,{modelValue:n.value.open,"onUpdate:modelValue":e[17]||(e[17]=a=>n.value.open=a),persistent:"",width:"500"},{default:r(()=>[l(ye,{onSubmit:le(t(G),["prevent"]),disabled:t($)},{default:r(()=>[l(te,null,{default:r(()=>[l(oe,null,{default:r(()=>[S(re(n.value.id?"編輯商品":"新增商品"),1)]),_:1}),l(se,null,{default:r(()=>[l(A,{label:"名稱",modelValue:t(g).value.value,"onUpdate:modelValue":e[10]||(e[10]=a=>t(g).value.value=a),"error-messages":t(g).errorMessage.value},null,8,["modelValue","error-messages"]),l(A,{label:"價格",type:"number",min:"0",modelValue:t(f).value.value,"onUpdate:modelValue":e[11]||(e[11]=a=>t(f).value.value=a),"error-messages":t(f).errorMessage.value},null,8,["modelValue","error-messages"]),l(Ue,{label:"分類",items:E,modelValue:t(b).value.value,"onUpdate:modelValue":e[12]||(e[12]=a=>t(b).value.value=a),"error-messages":t(b).errorMessage.value},null,8,["modelValue","error-messages"]),l(Ce,{label:"上架",modelValue:t(y).value.value,"onUpdate:modelValue":e[13]||(e[13]=a=>t(y).value.value=a),"error-messages":t(y).errorMessage.value},null,8,["modelValue","error-messages"]),l(Be,{label:"說明",modelValue:t(V).value.value,"onUpdate:modelValue":e[14]||(e[14]=a=>t(V).value.value=a),"error-messages":t(V).errorMessage.value},null,8,["modelValue","error-messages"]),l(d,{modelValue:m.value,"onUpdate:modelValue":e[15]||(e[15]=a=>m.value=a),"raw-model-value":N.value,"onUpdate:rawModelValue":e[16]||(e[16]=a=>N.value=a),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:T},null,8,["modelValue","raw-model-value"])]),_:1}),l(ne,null,{default:r(()=>[l(C,{color:"red",loading:t($),onClick:q},{default:r(()=>[S("取消")]),_:1},8,["loading"]),l(C,{color:"green",type:"submit",loading:t($)},{default:r(()=>[S("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])],64)}}};typeof _=="function"&&_(h);const he=Q(h,[["__scopeId","data-v-daff5ed5"]]);export{he as default};
