(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a02bd10"],{"5dae":function(e,t,c){"use strict";var o=c("7a23");const a={style:{height:"5rem"}};function n(e,t,c,n,i,d){const b=Object(o["resolveComponent"])("van-tabbar-item"),r=Object(o["resolveComponent"])("van-tabbar");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(r,{modelValue:i.active,"onUpdate:modelValue":t[4]||(t[4]=e=>i.active=e),"active-color":"#ee0a24"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{icon:"home-o",onClick:t[0]||(t[0]=e=>d.onClick("/"))},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("首页")]),_:1}),Object(o["createVNode"])(b,{icon:" el-icon-ali-changge",onClick:t[1]||(t[1]=e=>d.onClick("/choose"))},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("演艺经历")]),_:1}),Object(o["createVNode"])(b,{icon:"medal-o",onClick:t[2]||(t[2]=e=>d.onClick("/honor"))},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("获奖记录")]),_:1}),Object(o["createVNode"])(b,{icon:"photo-o",onClick:t[3]||(t[3]=e=>d.onClick("/zhaopian"))},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("照片墙")]),_:1})]),_:1},8,["modelValue"])])}c("14d9");var i={data(){return{active:0}},mounted(){this.handleActive()},watch:{$route(){this.handleActive()}},methods:{handleActive(){let e=this.$route.path;-1!==e.indexOf("/choose")?this.active=1:-1!==e.indexOf("/honor")?this.active=2:-1!==e.indexOf("/hotspot")?this.active=3:-1!==e.indexOf("/mine")?this.active=4:/\/(\?.)*$/.test(e)?this.active=0:this.active=-1},onClick(e){this.$route.path!==e&&this.$router.push({path:e})}}},d=c("6b0d"),b=c.n(d);const r=b()(i,[["render",n]]);t["a"]=r},"9bfb":function(e,t,c){"use strict";c("c15d")},c15d:function(e,t,c){},e200:function(e,t,c){"use strict";c.r(t);var o=c("7a23");const a={class:"choose"},n=Object(o["createElementVNode"])("span",null,"综艺",-1);function i(e,t,c,i,d,b){const r=Object(o["resolveComponent"])("van-col"),s=Object(o["resolveComponent"])("van-button"),l=Object(o["resolveComponent"])("van-row"),O=Object(o["resolveComponent"])("tar");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(l,{style:{"padding-top":"120px"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{span:"6"}),Object(o["createVNode"])(r,{span:"12"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{size:"large",class:"custom-btn btn-14",to:"/TV"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("影视")]),_:1})]),_:1}),Object(o["createVNode"])(r,{span:"6"})]),_:1}),Object(o["createVNode"])(l,{style:{"padding-top":"50px"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{span:"6"}),Object(o["createVNode"])(r,{span:"12"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{size:"large",class:"custom-btn btn-8",to:"/SHOW"},{default:Object(o["withCtx"])(()=>[n]),_:1})]),_:1}),Object(o["createVNode"])(r,{span:"6"})]),_:1}),Object(o["createVNode"])(l,{style:{"padding-top":"50px","padding-bottom":"100px"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{span:"6"}),Object(o["createVNode"])(r,{span:"12"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{size:"large",class:"custom-btn btn-14",to:"/WUTAI"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("舞台 ")]),_:1})]),_:1}),Object(o["createVNode"])(r,{span:"6"})]),_:1}),Object(o["createVNode"])(O)])}var d=c("5dae"),b={components:{tar:d["a"]}},r=(c("9bfb"),c("6b0d")),s=c.n(r);const l=s()(b,[["render",i]]);t["default"]=l}}]);