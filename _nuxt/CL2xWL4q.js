import{n as H,F as x,r as o,ay as C,aG as p,aH as v,M as d,p as g,x as m}from"./CzAkI0As.js";const P={horizontal:{type:Boolean}};function S(c,h,e){const u=H("active.collapse",void 0);u&&x(u,a=>{a?w():f()});const i=o((u==null?void 0:u.value)||!1),s=o(0),t=o(0),n=o(!i.value),l=o(!1),r=o(i.value),{expose:y}=C(c,e,"collapse"),w=async()=>{if(!e.value)return;const a=p(e);a&&(h.emit("show.collapse"),i.value=!0,n.value=!1,l.value=!0,r.value=!1,await v(),s.value=a.scrollHeight,t.value=a.scrollWidth,await d(e,!0),n.value=!0,l.value=!1,r.value=!0,h.emit("shown.collapse"))},f=async()=>{if(!e.value)return;const a=p(e);a&&(h.emit("hide.collapse"),i.value=!1,s.value=a.offsetHeight,t.value=a.offsetWidth,l.value=!0,await v(),n.value=!1,r.value=!0,await v(),s.value=a.scrollHeight,t.value=a.scrollWidth,await v(),s.value=0,t.value=0,await v(),await d(e,!0),n.value=!0,l.value=!1,r.value=!1,h.emit("hidden.collapse"))},z=y({show:w,hide:f,toggle:async()=>{i.value?await f():await w()},dismiss:f});return{class:g(()=>({show:r.value,collapse:n.value,collapsing:l.value,"collapse-horizontal":c.horizontal})),style:g(()=>({...m(!c.horizontal&&l.value,"height",s.value==0?"0":`${s.value}px`),...m(c.horizontal&&l.value,"width",t.value==0?"0":`${t.value}px`)})),method:z}}export{P as C,S as u};
