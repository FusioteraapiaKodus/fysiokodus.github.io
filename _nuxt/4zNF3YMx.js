import{p as e,k as o,B as s,u,q as m,s as i}from"./Cf6qgKAq.js";const l={fluid:{type:Boolean},thumbnail:{type:Boolean}};function r(t){return{class:e(()=>({"img-fluid":t.fluid,"img-thumbnail":t.thumbnail})),attr:{loading:"lazy"}}}const g=o({name:"Image",props:{...s,...l,tag:{type:String,default:"img"}},setup(t){const a=u(t),n=r(t);return()=>m(t.tag,i(n,a))}});export{g as _};