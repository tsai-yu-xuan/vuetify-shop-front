import{aY as C,a6 as S,a8 as k,w as l,aD as M,o as U,b as r,aW as B,d as e,aU as n,aa as b,R as F,ac as q}from"./index-ISHx9GPs.js";import{c as A,a as u,f as N,u as R,e as m,V as $}from"./vee-validate.esm-8dLwkGSH.js";import{v}from"./index-DcBOdE6S.js";import{V as D,a as f}from"./VCol-Bq47OfdI.js";import{V as E}from"./VDivider-DznYLrz-.js";import{V as P}from"./VRow-DUxUzbyq.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T=b("h1",{class:"text-center"},"註冊",-1),O={class:"text-center"},K={__name:"register",setup(W){const{api:w}=M(),x=C(),g=S(),h=A({account:u().required("使用者帳號必填").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符").test("isAlphanumeric","使用者帳號格式錯誤",o=>v.isAlphanumeric(o)),email:u().required("使用者信箱必填").test("isEmail","使用者信箱格式錯誤",o=>v.isEmail(o)),password:u().required("使用者密碼必填").min(4,"使用者密碼長度不符").max(20,"使用者密碼長度不符"),passwordConfirm:u().oneOf([N("password")],"密碼不一致")}),{handleSubmit:_,isSubmitting:V}=R({validationSchema:h}),i=m("account"),d=m("email"),c=m("password"),p=m("passwordConfirm"),y=_(async o=>{var a,s;try{await w.post("/user",{account:o.account,email:o.email,password:o.password}),g({text:"註冊成功",snackbarProps:{color:"green"}}),x.push("/login")}catch(t){console.log(t),g({text:((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}});return(o,a)=>(U(),k(D,null,{default:l(()=>[r(P,null,{default:l(()=>[r(f,{cols:"12"},{default:l(()=>[T]),_:1}),r(E),r(f,{cols:"12"},{default:l(()=>[r($,{onSubmit:B(e(y),["prevent"]),disabled:e(V)},{default:l(()=>[r(n,{label:"帳號",minlength:"4",maxlength:"20",counter:"",modelValue:e(i).value.value,"onUpdate:modelValue":a[0]||(a[0]=s=>e(i).value.value=s),"error-messages":e(i).errorMessage.value},null,8,["modelValue","error-messages"]),r(n,{label:"信箱",type:"email",modelValue:e(d).value.value,"onUpdate:modelValue":a[1]||(a[1]=s=>e(d).value.value=s),"error-messages":e(d).errorMessage.value},null,8,["modelValue","error-messages"]),r(n,{label:"密碼",type:"password",minlength:"4",maxlength:"20",counter:"",modelValue:e(c).value.value,"onUpdate:modelValue":a[2]||(a[2]=s=>e(c).value.value=s),"error-messages":e(c).errorMessage.value},null,8,["modelValue","error-messages"]),r(n,{label:"確認密碼",type:"password",minlength:"4",maxlength:"20",counter:"",modelValue:e(p).value.value,"onUpdate:modelValue":a[3]||(a[3]=s=>e(p).value.value=s),"error-messages":e(p).errorMessage.value},null,8,["modelValue","error-messages"]),b("div",O,[r(F,{type:"submit",color:"green",loading:e(V)},{default:l(()=>[q("註冊")]),_:1},8,["loading"])])]),_:1},8,["onSubmit","disabled"])]),_:1})]),_:1})]),_:1}))}};export{K as default};
