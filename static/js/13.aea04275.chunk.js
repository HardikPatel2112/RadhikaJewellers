"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[13],{8357:(e,t,o)=>{o.d(t,{Z:()=>r});o(7313);var n=o(7592),a=o(9666),i=o(6417);const r=(0,n.ZP)((e=>(0,i.jsx)(a.Z,{...e})))((e=>{let{theme:t}=e;return{"& .MuiOutlinedInput-input::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"0.8"},"& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"1"},"& .Mui-disabled .MuiOutlinedInput-notchedOutline":{borderColor:t.palette.grey[200]}}}))},7591:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var n=o(7313),a=o(1806),i=o(5898),r=o(1113),l=o(1095),s=o(8357),d=o(5537),u=o(2861),c=o(5356),v=o(6417);const p=function(e){var t,o,p,m;const[h,f]=(0,n.useState)(!1),[Z]=(0,c.TV)(),[b]=(0,c.ZA)(),x=(0,d.I0)(),g=async e=>{await b(e),x((0,u.uu)(e))};return(0,v.jsxs)(a.Z,{children:[(0,v.jsxs)("h2",{children:[" ",e.customerToEdit?"Edit Customer":"Add New Customer"]}),(0,v.jsxs)("form",{onSubmit:async t=>{f(!0),t.preventDefault();const o=new FormData(t.target),n={id:o.get("id"),name:o.get("name"),phone:o.get("phone"),address:o.get("address")};n.id?g(n):(n.id=0,await Z(n),x((0,u.kB)(n))),f(!1),e.handleClose()},children:[(0,v.jsxs)(i.Z,{mb:5,children:[(0,v.jsx)(s.Z,{style:{display:"none"},name:"id",id:"id",variant:"outlined",fullWidth:!0,inputProps:{name:"id"},defaultValue:null===(t=e.customerToEdit)||void 0===t?void 0:t.id}),(0,v.jsx)(r.Z,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"name",mb:"5px",children:"Name"}),(0,v.jsx)(s.Z,{name:"name",id:"name",variant:"outlined",fullWidth:!0,inputProps:{name:"name"},defaultValue:null===(o=e.customerToEdit)||void 0===o?void 0:o.name}),(0,v.jsx)(r.Z,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"phone",mb:"5px",mt:"25px",children:"Phone"}),(0,v.jsx)(s.Z,{name:"phone",id:"phone",variant:"outlined",fullWidth:!0,inputProps:{name:"phone"},defaultValue:null===(p=e.customerToEdit)||void 0===p?void 0:p.phone}),(0,v.jsx)(r.Z,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"address",mb:"5px",mt:"25px",children:"Address"}),(0,v.jsx)(s.Z,{name:"address",id:"address",variant:"outlined",fullWidth:!0,inputProps:{name:"address"},defaultValue:null===(m=e.customerToEdit)||void 0===m?void 0:m.address})]}),(0,v.jsx)(l.Z,{color:"primary",variant:"contained",size:"large",fullWidth:!0,type:"submit",children:h?"Submiting ...":"Submit"})]})]})}},501:(e,t,o)=>{o.d(t,{Z:()=>b});var n=o(3366),a=o(7462),i=o(7313),r=o(2197),l=o(1921),s=o(7551),d=o(7592);const u=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var c=o(7342),v=o(7430),p=o(2298);function m(e){return(0,p.Z)("MuiPaper",e)}(0,v.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=o(6417);const f=["className","component","elevation","square","variant"],Z=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,"elevation"===o.variant&&t["elevation".concat(o.elevation)]]}})((e=>{let{theme:t,ownerState:o}=e;var n;return(0,a.Z)({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!o.square&&{borderRadius:t.shape.borderRadius},"outlined"===o.variant&&{border:"1px solid ".concat((t.vars||t).palette.divider)},"elevation"===o.variant&&(0,a.Z)({boxShadow:(t.vars||t).shadows[o.elevation]},!t.vars&&"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,s.Fq)("#fff",u(o.elevation)),", ").concat((0,s.Fq)("#fff",u(o.elevation)),")")},t.vars&&{backgroundImage:null==(n=t.vars.overlays)?void 0:n[o.elevation]}))})),b=i.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiPaper"}),{className:i,component:s="div",elevation:d=1,square:u=!1,variant:v="elevation"}=o,p=(0,n.Z)(o,f),b=(0,a.Z)({},o,{component:s,elevation:d,square:u,variant:v}),x=(e=>{const{square:t,elevation:o,variant:n,classes:a}=e,i={root:["root",n,!t&&"rounded","elevation"===n&&"elevation".concat(o)]};return(0,l.Z)(i,m,a)})(b);return(0,h.jsx)(Z,(0,a.Z)({as:s,ownerState:b,className:(0,r.Z)(x.root,i),ref:t},p))}))},5898:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(8002),a=o(7592),i=o(7342);const r=(0,n.Z)({createStyledComponent:(0,a.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,i.Z)({props:e,name:"MuiStack"})})},8002:(e,t,o)=>{o.d(t,{Z:()=>j});var n=o(3366),a=o(7462),i=o(7313),r=o(2964),l=o(3019),s=o(1921),d=o(2298),u=o(6694),c=o(4614),v=o(9028),p=o(9456),m=o(4929),h=o(6886),f=o(6417);const Z=["component","direction","spacing","divider","children","className","useFlexGap"],b=(0,p.Z)(),x=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function g(e){return(0,c.Z)({props:e,name:"MuiStack",defaultTheme:b})}function y(e,t){const o=i.Children.toArray(e).filter(Boolean);return o.reduce(((e,n,a)=>(e.push(n),a<o.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(a)})),e)),[])}const k=e=>{let{ownerState:t,theme:o}=e,n=(0,a.Z)({display:"flex",flexDirection:"column"},(0,m.k9)({theme:o},(0,m.P$)({values:t.direction,breakpoints:o.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,h.hB)(o),a=Object.keys(o.breakpoints.values).reduce(((e,o)=>(("object"===typeof t.spacing&&null!=t.spacing[o]||"object"===typeof t.direction&&null!=t.direction[o])&&(e[o]=!0),e)),{}),i=(0,m.P$)({values:t.direction,base:a}),r=(0,m.P$)({values:t.spacing,base:a});"object"===typeof i&&Object.keys(i).forEach(((e,t,o)=>{if(!i[e]){const n=t>0?i[o[t-1]]:"column";i[e]=n}}));const s=(o,n)=>{return t.useFlexGap?{gap:(0,h.NA)(e,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((a=n?i[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]))]:(0,h.NA)(e,o)}};var a};n=(0,l.Z)(n,(0,m.k9)({theme:o},r,s))}return n=(0,m.dt)(o.breakpoints,n),n};function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=x,useThemeProps:o=g,componentName:l="MuiStack"}=e,u=t(k);return i.forwardRef((function(e,t){const i=o(e),c=(0,v.Z)(i),{component:p="div",direction:m="column",spacing:h=0,divider:b,children:x,className:g,useFlexGap:k=!1}=c,j=(0,n.Z)(c,Z),w={direction:m,spacing:h,useFlexGap:k},P=(0,s.Z)({root:["root"]},(e=>(0,d.Z)(l,e)),{});return(0,f.jsx)(u,(0,a.Z)({as:p,ownerState:w,ref:t,className:(0,r.Z)(P.root,g)},j,{children:b?y(x,b):x}))}))}}}]);