import{_ as Q,a6 as W,E as u,r as X,o as L,a as Y,b as l,w as s,aF as Z,F as ee,aE as ae,aa as H,R as C,ac as S,aG as M,aH as le,V as te,a8 as oe,a9 as se,aI as re,d as t,ay as ne,az as ue,ae as ie,aB as de,aC as pe,a3 as me,af as ve,ag as ce}from"./index-i6M1RC1a.js";import{c as ge,a as A,b as fe,d as Ve,u as be,e as v,V as ye}from"./vee-validate.esm-CMd4rxMU.js";import{b as _}from"./route-block-B_A1xBdJ.js";import{V as ke,a as D}from"./VCol-CR4bclpd.js";import{V as xe}from"./VRow-ChUQapms.js";import{V as we}from"./VDivider-DqaGhA1t.js";import{V as Ce,a as Se,b as Ue}from"./VTextarea-C6jMrbDG.js";import{a as Be}from"./VDataTable-BEwfeWWG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VPagination--XfQNbFQ.js";import"./VList-a8nHdtGd.js";const Fe=c=>(ve("data-v-b0380167"),c=c(),ce(),c),Ie=Fe(()=>H("h1",{class:"text-center text-white"},"商品管理",-1)),$e={class:"border"},K={__name:"products",setup(c){const{apiAuth:U}=ae(),B=W(),T=u(null),n=u({open:!1,id:""}),R=o=>{o?(n.value.id=o._id,g.value.value=o.name,f.value.value=o.price,V.value.value=o.description,b.value.value=o.category,y.value.value=o.sell):n.value.id="",n.value.open=!0},q=()=>{n.value.open=!1,G(),T.value.deleteFileRecord()},E=["鑰匙圈","生態瓶","盆栽"],h=ge({name:A().required("商品名稱必填"),price:fe().typeError("商品價格格式錯誤").required("商品價格必填").min(0,"商品價格不能小於 0"),description:A().required("商品說明必填"),category:A().required("商品分類必填").test("isCategory","商品分類錯誤",o=>E.includes(o)),sell:Ve()}),{handleSubmit:j,isSubmitting:F,resetForm:G}=be({validationSchema:h,initialValues:{name:"",price:0,description:"",category:"",sell:!0}}),g=v("name"),f=v("price"),V=v("description"),b=v("category"),y=v("sell"),m=u([]),N=u([]),O=j(async o=>{var e,d,a;if(!((e=m.value[0])!=null&&e.error)&&!(n.value.id.length===0&&m.value.length<1))try{const r=new FormData;r.append("name",o.name),r.append("price",o.price),r.append("description",o.description),r.append("category",o.category),r.append("sell",o.sell),m.value.length>0&&r.append("image",m.value[0].file),n.value.id===""?await U.post("/product",r):await U.patch("/product/"+n.value.id,r),B({text:n.value.id===""?"新增成功":"編輯成功",snackbarProps:{color:"green"}}),q(),i(!0)}catch(r){console.log(r),B({text:((a=(d=r==null?void 0:r.response)==null?void 0:d.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),I=u(10),k=u([{key:"createdAt",order:"desc"}]),x=u(1),$=u([]),J=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"價格",align:"center",sortable:!0,key:"price"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"操作",align:"center",sortable:!1,key:"action"}],P=u(!0),z=u(0),w=u(""),i=async o=>{var e,d,a,r;o&&(x.value=1),P.value=!0;try{const{data:p}=await U.get("/product/all",{params:{page:x.value,itemsPerPage:I.value,sortBy:((e=k.value[0])==null?void 0:e.key)||"createdAt",sortOrder:((d=k.value[0])==null?void 0:d.order)||"desc",search:w.value}});$.value.splice(0,$.value.length,...p.result.data),z.value=p.result.total}catch(p){console.log(p),B({text:((r=(a=p==null?void 0:p.response)==null?void 0:a.data)==null?void 0:r.message)||"發生錯誤",snackbarProps:{color:"red"}})}P.value=!1};return i(),(o,e)=>{const d=X("vue-file-agent");return L(),Y(ee,null,[l(ke,{class:""},{default:s(()=>[l(xe,null,{default:s(()=>[l(D,{cols:"12"},{default:s(()=>[Ie]),_:1}),l(we),H("div",$e,[l(D,{cols:"12"},{default:s(()=>[l(C,{class:"btn",onClick:e[0]||(e[0]=a=>R(null))},{default:s(()=>[S("新增商品")]),_:1})]),_:1}),l(D,{cols:"12"},{default:s(()=>[l(Ce,{"items-per-page":I.value,"onUpdate:itemsPerPage":[e[4]||(e[4]=a=>I.value=a),e[7]||(e[7]=a=>i(!1))],"sort-by":k.value,"onUpdate:sortBy":[e[5]||(e[5]=a=>k.value=a),e[8]||(e[8]=a=>i(!1))],page:x.value,"onUpdate:page":[e[6]||(e[6]=a=>x.value=a),e[9]||(e[9]=a=>i(!1))],items:$.value,headers:J,loading:P.value,"items-length":z.value,search:w.value,hover:"",class:"no-background"},{top:s(()=>[l(M,{label:"搜尋",modelValue:w.value,"onUpdate:modelValue":e[1]||(e[1]=a=>w.value=a),"append-icon":"mdi-magnify",onClickAppend:e[2]||(e[2]=a=>i(!0)),onKeydown:e[3]||(e[3]=le(a=>i(!0),["enter"]))},null,8,["modelValue"])]),"item.image":s(({value:a})=>[l(te,{src:a,height:"50px"},null,8,["src"])]),"item.sell":s(({value:a})=>[a?(L(),oe(me,{key:0,icon:"mdi-check"})):se("",!0)]),"item.action":s(({item:a})=>[l(C,{icon:"mdi-pencil",variant:"text",color:"white",onClick:r=>R(a)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})])]),_:1})]),_:1}),l(Z,{modelValue:n.value.open,"onUpdate:modelValue":e[17]||(e[17]=a=>n.value.open=a),persistent:"",width:"500"},{default:s(()=>[l(ye,{onSubmit:re(t(O),["prevent"]),disabled:t(F)},{default:s(()=>[l(ne,null,{default:s(()=>[l(ue,null,{default:s(()=>[S(ie(n.value.id?"編輯商品":"新增商品"),1)]),_:1}),l(de,null,{default:s(()=>[l(M,{label:"名稱",modelValue:t(g).value.value,"onUpdate:modelValue":e[10]||(e[10]=a=>t(g).value.value=a),"error-messages":t(g).errorMessage.value},null,8,["modelValue","error-messages"]),l(M,{label:"價格",type:"number",min:"0",modelValue:t(f).value.value,"onUpdate:modelValue":e[11]||(e[11]=a=>t(f).value.value=a),"error-messages":t(f).errorMessage.value},null,8,["modelValue","error-messages"]),l(Be,{label:"分類",items:E,modelValue:t(b).value.value,"onUpdate:modelValue":e[12]||(e[12]=a=>t(b).value.value=a),"error-messages":t(b).errorMessage.value},null,8,["modelValue","error-messages"]),l(Se,{label:"上架",modelValue:t(y).value.value,"onUpdate:modelValue":e[13]||(e[13]=a=>t(y).value.value=a),"error-messages":t(y).errorMessage.value},null,8,["modelValue","error-messages"]),l(Ue,{label:"說明",modelValue:t(V).value.value,"onUpdate:modelValue":e[14]||(e[14]=a=>t(V).value.value=a),"error-messages":t(V).errorMessage.value},null,8,["modelValue","error-messages"]),l(d,{modelValue:m.value,"onUpdate:modelValue":e[15]||(e[15]=a=>m.value=a),"raw-model-value":N.value,"onUpdate:rawModelValue":e[16]||(e[16]=a=>N.value=a),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:T},null,8,["modelValue","raw-model-value"])]),_:1}),l(pe,null,{default:s(()=>[l(C,{color:"red",loading:t(F),onClick:q},{default:s(()=>[S("取消")]),_:1},8,["loading"]),l(C,{color:"green",type:"submit",loading:t(F)},{default:s(()=>[S("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])],64)}}};typeof _=="function"&&_(K);const _e=Q(K,[["__scopeId","data-v-b0380167"]]);export{_e as default};
