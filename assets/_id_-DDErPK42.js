import{bR as x,aY as S,a6 as q,u as F,E as k,a as w,b as t,w as r,bs as B,F as C,o as R,aa as u,ae as i,V as E,d as l,aW as M,aU as N,R as v,ac as g,aD as U}from"./index-ISHx9GPs.js";import{c as $,b as D,u as P,e as T,V as j}from"./vee-validate.esm-8dLwkGSH.js";import{V as A,a as c}from"./VCol-Bq47OfdI.js";import"./_commonjsHelpers-Cpj98o6Y.js";const I={class:"text-center"},L=u("h1",{class:"text-center text-red"},"已下架",-1),J={__name:"[id]",setup(O){const{api:_}=U(),f=x(),b=S(),d=q(),m=F(),e=k({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""});(async()=>{var o,s;try{const{data:a}=await _.get("/product/"+f.params.id);e.value._id=a.result._id,e.value.name=a.result.name,e.value.price=a.result.price,e.value.description=a.result.description,e.value.image=a.result.image,e.value.sell=a.result.sell,e.value.category=a.result.category,document.title="購物網 | "+e.value.name}catch(a){console.log(a),d({text:((s=(o=a==null?void 0:a.response)==null?void 0:o.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const y=$({quantity:D().typeError("數量必填").required("數量必填").min(1,"最少為 1")}),{isSubmitting:p,handleSubmit:V}=P({validationSchema:y,initialValues:{quantity:1}}),n=T("quantity"),h=V(async o=>{if(!m.isLogin){b.push("/login");return}const s=await m.addCart(e.value._id,o.quantity);d({text:s.text,snackbarProps:{color:s.color}})});return(o,s)=>(R(),w(C,null,[t(A,null,{default:r(()=>[t(c,{cols:"12"},{default:r(()=>[u("h1",I,i(e.value.name),1)]),_:1}),t(c,{cols:"12"},{default:r(()=>[t(E,{src:e.value.image,height:"200"},null,8,["src"])]),_:1}),t(c,{cols:"12"},{default:r(()=>[u("p",null,"$"+i(e.value.price),1),u("p",null,i(e.value.description),1),t(j,{disabled:l(p),onSubmit:M(l(h),["prevent"])},{default:r(()=>[t(N,{type:"number",modelValue:l(n).value.value,"onUpdate:modelValue":s[0]||(s[0]=a=>l(n).value.value=a),modelModifiers:{number:!0},"error-messages":l(n).errorMessage.value},null,8,["modelValue","error-messages"]),t(v,{type:"submit","prepend-icon":"mdi-cart",loading:l(p)},{default:r(()=>[g("加入購物車")]),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1}),t(B,{class:"align-center justify-center text-center","model-value":!e.value.sell,persistent:""},{default:r(()=>[L,t(v,{to:"/"},{default:r(()=>[g("回首頁")]),_:1})]),_:1},8,["model-value"])],64))}};export{J as default};
