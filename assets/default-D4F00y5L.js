import{p as z,m as K,f as Q,g as D,h as Y,b as t,i as de,j as fe,k as ae,l as le,n as oe,t as E,q as ve,s as me,v as ne,x as ge,y as xe,z as L,c as v,A as we,V as ee,B as q,C as F,D as ke,E as W,G as Se,H as G,I as he,J as Ve,K as be,L as Be,M as Ce,N as _e,O as X,P as Te,Q as Ie,R as I,S as Pe,T as pe,U as Ne,W as Le,X as He,Y as Ae,Z as Ee,$ as Re,a0 as ze,a1 as Ue,a2 as De,a3 as V,a4 as Ye,_ as Me,a5 as Fe,u as $e,a6 as je,a7 as Ge,r as ie,o as u,a as C,d as y,a8 as B,w as a,F as A,e as J,a9 as S,aa as Oe,ab as s,ac as ue,ad as R,ae as We,af as Xe,ag as Ke}from"./index-C_LMqzJF.js";import{u as Qe,V as M,a as T}from"./VList-DrQQjPWI.js";import{V as qe,a as Je}from"./VNavigationDrawer-CtmYb6Yu.js";import{V as Z}from"./VContainer-_p39GVAa.js";import{V as U}from"./VRow-BQMWAdBF.js";import{V as p}from"./VCol-DsI_e8pu.js";import"./VDivider-DDY5eaq1.js";const Ze=z({text:String,...K(),...Q()},"VToolbarTitle"),et=D()({name:"VToolbarTitle",props:Ze(),setup(e,m){let{slots:l}=m;return Y(()=>{const x=!!(l.default||l.text||e.text);return t(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var c;return[x&&t("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,(c=l.default)==null?void 0:c.call(l)])]}})}),{}}}),tt=[null,"prominent","default","comfortable","compact"],ye=z({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>tt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...de(),...K(),...fe(),...ae(),...Q({tag:"header"}),...le()},"VToolbar"),ce=D()({name:"VToolbar",props:ye(),setup(e,m){var d;let{slots:l}=m;const{backgroundColorClasses:x,backgroundColorStyles:c}=oe(E(e,"color")),{borderClasses:n}=ve(e),{elevationClasses:_}=me(e),{roundedClasses:h}=ne(e),{themeClasses:w}=ge(e),{rtlClasses:k}=xe(),r=L(!!(e.extended||(d=l.extension)!=null&&d.call(l))),g=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=v(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return we({VBtn:{variant:"text"}}),Y(()=>{var H;const i=!!(e.title||l.title),o=!!(l.image||e.image),P=(H=l.extension)==null?void 0:H.call(l);return r.value=!!(e.extended||P),t(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},x.value,n.value,_.value,h.value,w.value,k.value,e.class],style:[c.value,e.style]},{default:()=>[o&&t("div",{key:"image",class:"v-toolbar__image"},[l.image?t(q,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):t(ee,{key:"image-img",cover:!0,src:e.image},null)]),t(q,{defaults:{VTabs:{height:F(g.value)}}},{default:()=>{var j,f,N;return[t("div",{class:"v-toolbar__content",style:{height:F(g.value)}},[l.prepend&&t("div",{class:"v-toolbar__prepend"},[(j=l.prepend)==null?void 0:j.call(l)]),i&&t(et,{key:"title",text:e.title},{text:l.title}),(f=l.default)==null?void 0:f.call(l),l.append&&t("div",{class:"v-toolbar__append"},[(N=l.append)==null?void 0:N.call(l)])])]}}),t(q,{defaults:{VTabs:{height:F(b.value)}}},{default:()=>[t(ke,null,{default:()=>[r.value&&t("div",{class:"v-toolbar__extension",style:{height:F(b.value)}},[P])]})]})]})}),{contentHeight:g,extensionHeight:b}}}),at=z({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function lt(e){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:l}=m;let x=0,c=0;const n=W(null),_=L(0),h=L(0),w=L(0),k=L(!1),r=L(!1),g=v(()=>Number(e.scrollThreshold)),b=v(()=>Se((g.value-_.value)/g.value||0)),d=()=>{const i=n.value;if(!i||l&&!l.value)return;x=_.value,_.value="window"in i?i.pageYOffset:i.scrollTop;const o=i instanceof Window?document.documentElement.scrollHeight:i.scrollHeight;if(c!==o){c=o;return}r.value=_.value<x,w.value=Math.abs(_.value-g.value)};return G(r,()=>{h.value=h.value||_.value}),G(k,()=>{h.value=0}),he(()=>{G(()=>e.scrollTarget,i=>{var P;const o=i?document.querySelector(i):window;o&&o!==n.value&&((P=n.value)==null||P.removeEventListener("scroll",d),n.value=o,n.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),Ve(()=>{var i;(i=n.value)==null||i.removeEventListener("scroll",d)}),l&&G(l,d,{immediate:!0}),{scrollThreshold:g,currentScroll:_,currentThreshold:w,isScrollActive:k,scrollRatio:b,isScrollingUp:r,savedScroll:h}}const ot=z({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ye(),...be(),...at(),height:{type:[Number,String],default:64}},"VAppBar"),nt=D()({name:"VAppBar",props:ot(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:l}=m;const x=W(),c=Be(e,"modelValue"),n=v(()=>{var N;const f=new Set(((N=e.scrollBehavior)==null?void 0:N.split(" "))??[]);return{hide:f.has("hide"),fullyHide:f.has("fully-hide"),inverted:f.has("inverted"),collapse:f.has("collapse"),elevate:f.has("elevate"),fadeImage:f.has("fade-image")}}),_=v(()=>{const f=n.value;return f.hide||f.fullyHide||f.inverted||f.collapse||f.elevate||f.fadeImage||!c.value}),{currentScroll:h,scrollThreshold:w,isScrollingUp:k,scrollRatio:r}=lt(e,{canScroll:_}),g=v(()=>n.value.hide||n.value.fullyHide),b=v(()=>e.collapse||n.value.collapse&&(n.value.inverted?r.value>0:r.value===0)),d=v(()=>e.flat||n.value.fullyHide&&!c.value||n.value.elevate&&(n.value.inverted?h.value>0:h.value===0)),i=v(()=>n.value.fadeImage?n.value.inverted?1-r.value:r.value:void 0),o=v(()=>{var se,re;const f=Number(((se=x.value)==null?void 0:se.contentHeight)??e.height),N=Number(((re=x.value)==null?void 0:re.extensionHeight)??0);return g.value?h.value<w.value||n.value.fullyHide?f+N:f:f+N});Ce(v(()=>!!e.scrollBehavior),()=>{Te(()=>{g.value?n.value.inverted?c.value=h.value>w.value:c.value=k.value||h.value<w.value:c.value=!0})});const{ssrBootStyles:P}=Qe(),{layoutItemStyles:H,layoutIsReady:j}=_e({id:e.name,order:v(()=>parseInt(e.order,10)),position:E(e,"location"),layoutSize:o,elementSize:L(void 0),active:c,absolute:E(e,"absolute")});return Y(()=>{const f=ce.filterProps(e);return t(ce,X({ref:x,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...H.value,"--v-toolbar-image-opacity":i.value,height:void 0,...P.value},e.style]},f,{collapse:b.value,flat:d.value}),l)}),j}}),st=z({...Ie({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),rt=D()({name:"VAppBarNavIcon",props:st(),setup(e,m){let{slots:l}=m;return Y(()=>t(I,X(e,{class:["v-app-bar-nav-icon"]}),l)),{}}}),it=z({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Pe,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...K(),...pe({location:"top end"}),...ae(),...Q(),...le(),...Ne({transition:"scale-rotate-transition"})},"VBadge"),O=D()({name:"VBadge",inheritAttrs:!1,props:it(),setup(e,m){const{backgroundColorClasses:l,backgroundColorStyles:x}=oe(E(e,"color")),{roundedClasses:c}=ne(e),{t:n}=Le(),{textColorClasses:_,textColorStyles:h}=He(E(e,"textColor")),{themeClasses:w}=Ae(),{locationStyles:k}=Ee(e,!0,r=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(r)?+(e.offsetY??0):["left","right"].includes(r)?+(e.offsetX??0):0));return Y(()=>{const r=Number(e.content),g=!e.max||isNaN(r)?e.content:r<=+e.max?r:`${e.max}+`,[b,d]=Re(m.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,X({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},d,{style:e.style}),{default:()=>{var i,o;return[t("div",{class:"v-badge__wrapper"},[(o=(i=m.slots).default)==null?void 0:o.call(i),t(ze,{transition:e.transition},{default:()=>{var P,H;return[Ue(t("span",X({class:["v-badge__badge",w.value,l.value,c.value,_.value],style:[x.value,h.value,e.inline?{}:k.value],"aria-atomic":"true","aria-label":n(e.label,r),"aria-live":"polite",role:"status"},b),[e.dot?void 0:m.slots.badge?(H=(P=m.slots).badge)==null?void 0:H.call(P):e.icon?t(V,{icon:e.icon},null):g]),[[De,e.modelValue]])]}})])]}})}),{}}}),ut=z({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...de(),...K(),...fe(),...be(),...ae(),...Q({tag:"footer"}),...le()},"VFooter"),ct=D()({name:"VFooter",props:ut(),setup(e,m){let{slots:l}=m;const{themeClasses:x}=ge(e),{backgroundColorClasses:c,backgroundColorStyles:n}=oe(E(e,"color")),{borderClasses:_}=ve(e),{elevationClasses:h}=me(e),{roundedClasses:w}=ne(e),k=L(32),{resizeRef:r}=Ye(i=>{i.length&&(k.value=i[0].target.clientHeight)}),g=v(()=>e.height==="auto"?k.value:parseInt(e.height,10)),{layoutItemStyles:b,layoutIsReady:d}=_e({id:e.name,order:v(()=>parseInt(e.order,10)),position:v(()=>"bottom"),layoutSize:g,elementSize:v(()=>e.height==="auto"?void 0:g.value),active:v(()=>e.app),absolute:E(e,"absolute")});return Y(()=>t(e.tag,{ref:r,class:["v-footer",x.value,c.value,_.value,h.value,w.value,e.class],style:[n.value,e.app?b.value:{height:F(e.height)},e.style]},l)),e.app?d:{}}}),te=""+new URL("logo2-BH8ZSjbP.png",import.meta.url).href,$=e=>(Xe("data-v-335de202"),e=e(),Ke(),e),dt={key:0,"ma-3":""},ft={key:0},vt={key:1},mt={key:2},gt=$(()=>R("a",{href:"/"},[R("img",{src:te,alt:"",style:{width:"200px"}})],-1)),ht=$(()=>R("p",{class:"text-black"},"頁面連結",-1)),bt=$(()=>R("p",{class:"text-black"},"服務項目",-1)),_t=$(()=>R("br",null,null,-1)),yt=$(()=>R("iframe",{style:{width:"100%",border:"2px solid #EEEDEB"},src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7023777147806!2d121.416871876079!3d25.0441724378805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bed3dc9b59%3A0x57e6439a2db0fa2a!2zMjQz5paw5YyX5biC5rOw5bGx5Y2A6LK05a2Q6YeM6Ie06YGg5paw5p2RNTXkuYsx6Jmf5rOw5bGx6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1717729138642!5m2!1szh-TW!2stw",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)),xt={__name:"default",setup(e){const{mobile:m}=Fe(),l=$e(),x=je(),c=W(!1),n=v(()=>[{to:"/AboutUs",text:"關於我們",icon:void 0,show:!0},{to:"/ParkInfo",text:"園區介紹",icon:void 0,show:!0},{to:"/Services",text:"服務項目",icon:void 0,show:!0}]),_=v(()=>[{to:"/ProductPage",text:"線上購物",icon:void 0,show:!0},{to:"/ContactUs",text:"聯絡我們",icon:void 0,show:!0}]),h=v(()=>[{to:"/AboutUs",text:"關於我們",icon:void 0,show:!0},{to:"/ParkInfo",text:"園區介紹",icon:void 0,show:!0},{to:"/Services",text:"服務項目",icon:void 0,show:!0},{to:"/ProductPage",text:"線上購物",icon:void 0,show:!0},{to:"/ContactUs",text:"聯絡我們",icon:void 0,show:!0},{to:"/register",text:"註冊",icon:"mdi-account-plus",show:!l.isLogin},{to:"/login",text:"登入",icon:"mdi-account-arrow-left",show:!l.isLogin},{to:"/cart",text:"購物車",icon:"mdi-cart",show:l.isLogin},{to:"/user",text:"個人首頁",icon:"mdi-account",show:l.isLogin},{to:"/admin",text:"管理",icon:"mdi-cog",show:l.isLogin&&l.isAdmin}]),w=async()=>{await l.logout(),x({text:"登出成功",snackbarProps:{color:"green"}})},k=W(!0),r=()=>{const g=window.scrollY,b=800;k.value=g<b};return he(()=>{window.addEventListener("scroll",r)}),Ge(()=>{window.removeEventListener("scroll",r)}),(g,b)=>{const d=ie("router-link"),i=ie("router-view");return u(),C(A,null,[y(m)?(u(),B(qe,{key:0,modelValue:c.value,"onUpdate:modelValue":b[0]||(b[0]=o=>c.value=o),class:"mobile"},{default:a(()=>[t(M,{nav:""},{default:a(()=>[(u(!0),C(A,null,J(h.value,o=>(u(),C(A,{key:o.to},[o.show?(u(),B(T,{key:0,"prepend-icon":o.icon,to:o.to,title:o.text},{append:a(()=>[o.to==="/cart"&&y(l).cart>0?(u(),B(O,{key:0,color:"error",content:y(l).cart,inline:""},null,8,["content"])):S("",!0)]),_:2},1032,["prepend-icon","to","title"])):S("",!0)],64))),128)),y(l).isLogin?(u(),B(T,{key:0,"prepend-icon":"mdi-account-arrow-right",title:"登出",onClick:w})):S("",!0)]),_:1})]),_:1},8,["modelValue"])):S("",!0),t(nt,{class:We({"transparent-navbar":k.value,"white-navbar":!k.value})},{default:a(()=>[t(Z,{class:"d-flex align-center"},{default:a(()=>[y(m)?(u(),C("div",dt,[t(d,{to:"/",class:"logo"},{default:a(()=>[t(ee,{width:"250",height:"64",src:te})]),_:1})])):S("",!0),t(Oe),y(m)?(u(),B(rt,{key:1,onClick:b[1]||(b[1]=o=>c.value=!0)})):(u(),B(Z,{key:2,fluid:""},{default:a(()=>[t(U,{align:"center",justify:"space-between"},{default:a(()=>[t(p,{cols:"auto"},{default:a(()=>[t(U,{align:"center","no-gutters":""},{default:a(()=>[(u(!0),C(A,null,J(n.value,o=>(u(),C(A,{key:o.to},[o.show?(u(),B(I,{key:0,"prepend-icon":o.icon,to:o.to},{default:a(()=>[s(ue(o.text)+" ",1),o.to==="/cart"&&y(l).cart>0?(u(),B(O,{key:0,color:"red",content:y(l).cart,floating:""},null,8,["content"])):S("",!0)]),_:2},1032,["prepend-icon","to"])):S("",!0)],64))),128))]),_:1})]),_:1}),t(d,{to:"/",class:"logo"},{default:a(()=>[t(ee,{width:"250",height:"64",src:te})]),_:1}),t(p,{cols:"auto"},{default:a(()=>[t(U,{align:"center","no-gutters":""},{default:a(()=>[(u(!0),C(A,null,J(_.value,o=>(u(),C(A,{key:o.to},[o.show?(u(),B(I,{key:0,"prepend-icon":o.icon,to:o.to},{default:a(()=>[s(ue(o.text),1)]),_:2},1032,["prepend-icon","to"])):S("",!0)],64))),128)),y(l).isLogin?S("",!0):(u(),C("div",ft,[t(I,{to:"/register",icon:""},{default:a(()=>[t(V,null,{default:a(()=>[s("mdi-account-plus")]),_:1})]),_:1}),t(I,{to:"/login",icon:""},{default:a(()=>[t(V,null,{default:a(()=>[s("mdi-account")]),_:1})]),_:1})])),y(l).isLogin&&!y(l).isAdmin?(u(),C("div",vt,[t(I,{to:"/cart",icon:""},{default:a(()=>[t(V,null,{default:a(()=>[s("mdi-cart")]),_:1}),y(l).cart>0?(u(),B(O,{key:0,color:"red",content:y(l).cart,floating:""},null,8,["content"])):S("",!0)]),_:1}),t(I,{to:"/user",icon:""},{default:a(()=>[t(V,null,{default:a(()=>[s("mdi-account")]),_:1})]),_:1})])):S("",!0),y(l).isAdmin?(u(),C("div",mt,[t(I,{to:"/cart",icon:""},{default:a(()=>[t(V,null,{default:a(()=>[s("mdi-cart")]),_:1}),y(l).cart>0?(u(),B(O,{key:0,color:"red",content:y(l).cart,floating:""},null,8,["content"])):S("",!0)]),_:1}),t(I,{to:"/admin/orders",icon:""},{default:a(()=>[t(V,null,{default:a(()=>[s("mdi-list-box")]),_:1})]),_:1}),t(I,{to:"/admin",icon:""},{default:a(()=>[t(V,null,{default:a(()=>[s("mdi-cog")]),_:1})]),_:1})])):S("",!0),R("div",null,[y(l).isLogin?(u(),B(I,{key:0,onClick:w,icon:""},{default:a(()=>[t(V,null,{default:a(()=>[s("mdi-account-arrow-right")]),_:1})]),_:1})):S("",!0)])]),_:1})]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1},8,["class"]),t(Je,{class:"main-content"},{default:a(()=>[t(i)]),_:1}),t(ct,{class:"footer",padless:""},{default:a(()=>[t(Z,null,{default:a(()=>[t(U,null,{default:a(()=>[t(p,{cols:"12",md:"3",class:"text-center no-padding"},{default:a(()=>[gt,t(U,{justify:"center",class:"mt-3 mb-3"},{default:a(()=>[t(p,{md:"5",class:"text-right text-Chinese"},{default:a(()=>[s("鼠兔永恆居所")]),_:1}),t(p,{md:"7",class:"text-left text-English"},{default:a(()=>[s("Eternal Haven of Pikas")]),_:1})]),_:1}),t(V,null,{default:a(()=>[s("mdi-facebook")]),_:1}),t(V,null,{default:a(()=>[s("mdi-twitter")]),_:1}),t(V,null,{default:a(()=>[s("mdi-linkedin")]),_:1}),t(V,null,{default:a(()=>[s("mdi-instagram")]),_:1})]),_:1}),t(p,{cols:"12",md:"9",class:"text-center"},{default:a(()=>[t(U,null,{default:a(()=>[t(p,{cols:"6",md:"2",class:"no-padding"},{default:a(()=>[t(M,{class:"no-background brown item"},{default:a(()=>[ht,t(T,null,{default:a(()=>[t(d,{to:"/AboutUs",class:"no-text-decoration"},{default:a(()=>[s("關於我們")]),_:1})]),_:1}),t(T,null,{default:a(()=>[t(d,{to:"/ParkInfo",class:"no-text-decoration"},{default:a(()=>[s("園區介紹")]),_:1})]),_:1}),t(T,null,{default:a(()=>[t(d,{to:"/Services",class:"no-text-decoration"},{default:a(()=>[s("服務項目")]),_:1})]),_:1})]),_:1})]),_:1}),t(p,{cols:"6",md:"2",class:"no-padding"},{default:a(()=>[t(M,{class:"no-background text-brown item"},{default:a(()=>[bt,t(T,null,{default:a(()=>[t(d,{to:"/Services",class:"no-text-decoration"},{default:a(()=>[s("優惠專案")]),_:1})]),_:1}),t(T,null,{default:a(()=>[t(d,{to:"/Services",class:"no-text-decoration"},{default:a(()=>[s("團體火化")]),_:1})]),_:1}),t(T,null,{default:a(()=>[t(d,{to:"/Services",class:"no-text-decoration"},{default:a(()=>[s("個人火化")]),_:1})]),_:1})]),_:1})]),_:1}),t(p,{cols:"6",md:"4",class:"no-padding"},{default:a(()=>[t(M,{class:"no-background text-brown text-left"},{default:a(()=>[t(T,{class:"footer-textSize no-padding"},{default:a(()=>[s("聯絡電話:02-0000-0000")]),_:1}),t(T,{class:"footer-textSize no-padding"},{default:a(()=>[s("服務時間:9:00-21:00")]),_:1}),t(T,{class:"footer-textSize no-padding"},{default:a(()=>[s("聯絡地址: "),_t,s("243新北市泰山區貴子里致遠新村55之1號")]),_:1})]),_:1})]),_:1}),t(p,{cols:"6",md:"4",class:"no-padding"},{default:a(()=>[t(M,{class:"no-background text-brown"},{default:a(()=>[yt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}},It=Me(xt,[["__scopeId","data-v-335de202"]]);export{It as default};
