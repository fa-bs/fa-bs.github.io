import{j as d,k as S,_ as v,o as p,a as _,h as c,l,b as y,t as i,e as o,F as m,p as b,m as x,n as P,w as B,q as k,u}from"./entry.2988a368.js";import{u as E}from"./fetch.26d33822.js";const q=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),g=(e,t)=>(s,n)=>(S(()=>e({...q(s),...n.attrs},n)),()=>{var a,r;return t?(r=(a=n.slots).default)==null?void 0:r.call(a):null}),w={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},A=d({name:"Title",inheritAttrs:!1,setup:g((e,{slots:t})=>{var s,n,a;return{title:((a=(n=(s=t.default)==null?void 0:s.call(t))==null?void 0:n[0])==null?void 0:a.children)||null}})}),C=d({name:"Meta",inheritAttrs:!1,props:{...w,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:g(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),N=d({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var s,n;return(n=(s=t.slots).default)==null?void 0:n.call(s)}});const h=e=>(b("data-v-d5644643"),e=e(),x(),e),D={class:"card"},F={class:"grid grid-cols-2 gap-10"},H={class:"p-7"},M=["src"],$={class:"p-7"},j={class:"text-4xl my-7"},I={class:"text-xl my-7"},O=h(()=>o("h3",{class:"font-bold border-b-2 mb-4 pb-2"},"Product Description:",-1)),T={class:"mb-7"},V=h(()=>o("button",{class:"btn flex"},[o("i",{class:"material-icons mr-2"},"add_shopping_cart"),o("span",null,"Add to Cart")],-1)),U={__name:"ProductDetail",props:["product"],setup(e){return(t,s)=>{const n=A,a=C,r=N;return p(),_(m,null,[c(r,null,{default:l(()=>[c(n,null,{default:l(()=>[y("Nuxt | "+i(e.product.title),1)]),_:1}),c(a,{name:"description",content:e.product.description},null,8,["content"])]),_:1}),o("div",D,[o("div",F,[o("div",H,[o("img",{class:"mx-auto my-7",src:e.product.image,alt:"product image"},null,8,M)]),o("div",$,[o("h2",j,i(e.product.title),1),o("p",I," Price - $ "+i(e.product.price),1),O,o("p",T,i(e.product.description),1),V])])])],64)}}},z=v(U,[["__scopeId","data-v-d5644643"]]),R=o("br",null,null,-1),K={__name:"[id]",async setup(e){let t,s;const{id:n}=P().params,{data:a}=([t,s]=B(()=>E(`https://fakestoreapi.com/products/${n}`,"$H3OxYP9tuC")),t=await t,s(),t);if(!a.value)throw k({statusCode:404,statusMessage:"Product Not Found",fatal:!0});return(r,Y)=>{const f=z;return p(),_(m,null,[o("p",null,"Product details from id: "+i(u(n)),1),R,c(f,{product:u(a)},null,8,["product"])],64)}}};export{K as default};