import{_ as W,a6 as X,E as u,r as Y,o as N,a as Z,b as l,w as o,aF as ee,F as ae,aE as le,aa as j,R as x,ac as w,V as te,a8 as se,a9 as re,aI as oe,d as s,ay as ne,az as ue,ae as ie,aB as de,aG as F,aC as pe,a3 as me,af as ce,ag as ve}from"./index-i6M1RC1a.js";import{c as ge,a as I,b as z,d as fe,u as Ve,e as p,V as be}from"./vee-validate.esm-CMd4rxMU.js";import{b as L}from"./route-block-B_A1xBdJ.js";import{V as ye,a as M}from"./VCol-CR4bclpd.js";import{V as ke}from"./VRow-ChUQapms.js";import{V as xe}from"./VDivider-DqaGhA1t.js";import{V as we,a as Ce,b as Se}from"./VTextarea-C6jMrbDG.js";import{a as he}from"./VDataTable-BEwfeWWG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VPagination--XfQNbFQ.js";import"./VList-a8nHdtGd.js";const Ue=c=>(ce("data-v-0475a8eb"),c=c(),ve(),c),Be=Ue(()=>j("h1",{class:"text-center text-white"},"服務項目管理",-1)),Fe={class:"border"},G={__name:"services",setup(c){const{apiAuth:C}=le(),S=X(),$=u(null),n=u({open:!1,id:""}),P=r=>{r?(n.value.id=r._id,v.value.value=r.name,g.value.value=r.price,f.value.value=r.description,V.value.value=r.category,b.value.value=r.telephone,y.value.value=r.sell):n.value.id="",n.value.open=!0},A=()=>{n.value.open=!1,J(),$.value.deleteFileRecord()},D=["優惠專案","個別火化","團體火化","紀念飾品區"],H=ge({name:I().required("服務項目名稱必填"),price:z().typeError("服務項目價格格式錯誤").required("服務項目價格必填").min(0,"服務項目價格不能小於 0"),description:I().required("服務項目說明必填"),category:I().required("服務項目分類必填").test("isCategory","商品分類錯誤",r=>D.includes(r)),telephone:z().typeError("服務項目電話格式錯誤").required("服務項目電話必填"),sell:fe()}),{handleSubmit:O,isSubmitting:h,resetForm:J}=Ve({validationSchema:H,initialValues:{name:"",price:0,description:"",category:"",telephone:"",sell:!0}}),v=p("name"),g=p("price"),f=p("description"),V=p("category"),b=p("telephone"),y=p("sell"),d=u([]),_=u([]),K=O(async r=>{var a,i,e;if(!((a=d.value[0])!=null&&a.error)&&!(n.value.id.length===0&&d.value.length<1))try{const t=new FormData;t.append("name",r.name),t.append("price",r.price),t.append("description",r.description),t.append("category",r.category),t.append("telephone",r.telephone),t.append("sell",r.sell),d.value.length>0&&t.append("image",d.value[0].file),n.value.id===""?await C.post("/service",t):await C.patch("/service/"+n.value.id,t),S({text:n.value.id===""?"新增成功":"編輯成功",snackbarProps:{color:"green"}}),A(),m(!0)}catch(t){console.log(t),S({text:((e=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:e.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),T=u(10),k=u([{key:"createdAt",order:"desc"}]),q=u(1),U=u([]),Q=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"價格",align:"center",sortable:!0,key:"price"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"電話",align:"center",sortable:!0,key:"telephone"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"操作",align:"center",sortable:!1,key:"action"}],B=u(!0),E=u(0),R=u(""),m=async()=>{var r,a,i,e;B.value=!0;try{const{data:t}=await C.get("/service/all",{params:{sortBy:((r=k.value[0])==null?void 0:r.key)||"createdAt",sortOrder:((a=k.value[0])==null?void 0:a.order)||"desc",search:R.value}});U.value.splice(0,U.value.length,...t.result.data),E.value=t.result.total}catch(t){console.log(t),S({text:((e=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:e.message)||"發生錯誤",snackbarProps:{color:"red"}})}B.value=!1};return m(),(r,a)=>{const i=Y("vue-file-agent");return N(),Z(ae,null,[l(ye,{class:""},{default:o(()=>[l(ke,null,{default:o(()=>[l(M,{cols:"12"},{default:o(()=>[Be]),_:1}),l(xe),j("div",Fe,[l(M,{cols:"12"},{default:o(()=>[l(x,{class:"btn",onClick:a[0]||(a[0]=e=>P(null))},{default:o(()=>[w("新增服務項目")]),_:1})]),_:1}),l(M,{cols:"12"},{default:o(()=>[l(we,{"items-per-page":T.value,"onUpdate:itemsPerPage":[a[1]||(a[1]=e=>T.value=e),a[4]||(a[4]=e=>m(!1))],"sort-by":k.value,"onUpdate:sortBy":[a[2]||(a[2]=e=>k.value=e),a[5]||(a[5]=e=>m(!1))],page:q.value,"onUpdate:page":[a[3]||(a[3]=e=>q.value=e),a[6]||(a[6]=e=>m(!1))],items:U.value,headers:Q,loading:B.value,"items-length":E.value,search:R.value,hover:"",class:"no-background"},{"item.image":o(({value:e})=>[l(te,{src:e,height:"50px"},null,8,["src"])]),"item.sell":o(({value:e})=>[e?(N(),se(me,{key:0,icon:"mdi-check"})):re("",!0)]),"item.action":o(({item:e})=>[l(x,{icon:"mdi-pencil",variant:"text",color:"white",onClick:t=>P(e)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})])]),_:1})]),_:1}),l(ee,{modelValue:n.value.open,"onUpdate:modelValue":a[15]||(a[15]=e=>n.value.open=e),persistent:"",width:"500"},{default:o(()=>[l(be,{onSubmit:oe(s(K),["prevent"]),disabled:s(h)},{default:o(()=>[l(ne,null,{default:o(()=>[l(ue,null,{default:o(()=>[w(ie(n.value.id?"編輯商品":"新增商品"),1)]),_:1}),l(de,null,{default:o(()=>[l(F,{label:"名稱",modelValue:s(v).value.value,"onUpdate:modelValue":a[7]||(a[7]=e=>s(v).value.value=e),"error-messages":s(v).errorMessage.value},null,8,["modelValue","error-messages"]),l(F,{label:"價格",type:"number",min:"0",modelValue:s(g).value.value,"onUpdate:modelValue":a[8]||(a[8]=e=>s(g).value.value=e),"error-messages":s(g).errorMessage.value},null,8,["modelValue","error-messages"]),l(he,{label:"分類",items:D,modelValue:s(V).value.value,"onUpdate:modelValue":a[9]||(a[9]=e=>s(V).value.value=e),"error-messages":s(V).errorMessage.value},null,8,["modelValue","error-messages"]),l(F,{label:"電話",type:"number",min:"0",modelValue:s(b).value.value,"onUpdate:modelValue":a[10]||(a[10]=e=>s(b).value.value=e),"error-messages":s(b).errorMessage.value},null,8,["modelValue","error-messages"]),l(Ce,{label:"上架",modelValue:s(y).value.value,"onUpdate:modelValue":a[11]||(a[11]=e=>s(y).value.value=e),"error-messages":s(y).errorMessage.value},null,8,["modelValue","error-messages"]),l(Se,{label:"說明",modelValue:s(f).value.value,"onUpdate:modelValue":a[12]||(a[12]=e=>s(f).value.value=e),"error-messages":s(f).errorMessage.value},null,8,["modelValue","error-messages"]),l(i,{modelValue:d.value,"onUpdate:modelValue":a[13]||(a[13]=e=>d.value=e),"raw-model-value":_.value,"onUpdate:rawModelValue":a[14]||(a[14]=e=>_.value=e),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:$},null,8,["modelValue","raw-model-value"])]),_:1}),l(pe,null,{default:o(()=>[l(x,{color:"red",loading:s(h),onClick:A},{default:o(()=>[w("取消")]),_:1},8,["loading"]),l(x,{color:"green",type:"submit",loading:s(h)},{default:o(()=>[w("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])],64)}}};typeof L=="function"&&L(G);const Ne=W(G,[["__scopeId","data-v-0475a8eb"]]);export{Ne as default};
