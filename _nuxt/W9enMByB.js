import{aW as l,p as a,aX as r,J as b,x as e}from"./Dyo3CP83.js";const n={...l,button:{type:[Boolean],default:!0},color:{type:[String],default:void 0},size:{type:String,default:void 0},disabled:{type:Boolean,default:void 0},type:{type:String,default:"button"},to:{type:String},paddingX:{type:String,default:void 0}};function d(t){const o=a(()=>r("button-color",t.color));return{class:a(()=>({disabled:t.disabled,btn:t.button,[`btn-${t.color}`]:b(t.color)&&o.value,[`btn-${t.size}`]:t.size})),style:a(()=>({...e(t.color&&!o.value,"--bs-btn-bg",`var(--bs-${t.color})`),...e(t.color&&!o.value,"--bs-btn-hover-bg",`var(--bs-active-${t.color})`),...e(t.color&&!o.value,"--bs-btn-active-bg",`var(--bs-active-${t.color})`),...e(t.color&&!o.value,"--bs-btn-border-color",`var(--bs-${t.color})`),...e(t.color&&!o.value,"--bs-btn-hover-border-color",`var(--bs-${t.color})`),...e(t.color&&!o.value,"--bs-btn-active-border-color",`var(--bs-active-${t.color})`),...e(!t.textColor&&t.color&&!o.value,"--bs-btn-color",`var(--bs-contrast-${t.color})`),...e(!t.textColor&&t.color&&!o.value,"--bs-btn-hover-color",`var(--bs-contrast-${t.color})`),...e(!t.textColor&&t.color&&!o.value,"--bs-btn-active-color",`var(--bs-contrast-${t.color})`),...e(t.paddingX,"--bs-btn-padding-x",`${t.paddingX}`)})),attr:a(()=>({type:t.type,...e(t.disabled,"aria-disabled","true"),...e(t.target,"data-bv-target",t.target)}))}}export{n as B,d as u};
