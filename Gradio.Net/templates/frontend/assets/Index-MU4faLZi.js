import{B as K}from"./Button-C3qvSDkM.js";import{I as L}from"./Info-DA_St-By.js";import{S as M}from"./Index-CLipTJLN.js";import"./index-Cr9C6grF.js";import"./svelte/svelte.js";import"./_commonjsHelpers-BosuxZz1.js";const{SvelteComponent:O,append:C,attr:k,detach:P,element:z,flush:B,init:Q,insert:R,listen:I,noop:D,run_all:V,safe_not_equal:W,set_data:X,space:Y,text:Z,toggle_class:N}=window.__gradio__svelte__internal,{createEventDispatcher:x}=window.__gradio__svelte__internal;function $(i){let e,t,s,n,u,f,h;return{c(){e=z("label"),t=z("input"),s=Y(),n=z("span"),u=Z(i[1]),t.disabled=i[2],k(t,"type","checkbox"),k(t,"name","test"),k(t,"data-testid","checkbox"),k(t,"class","svelte-3pzdsv"),k(n,"class","ml-2 svelte-3pzdsv"),k(e,"class","svelte-3pzdsv"),N(e,"disabled",i[2])},m(o,a){R(o,e,a),C(e,t),t.checked=i[0],C(e,s),C(e,n),C(n,u),f||(h=[I(t,"change",i[6]),I(t,"keydown",i[3]),I(t,"input",i[4])],f=!0)},p(o,[a]){a&4&&(t.disabled=o[2]),a&1&&(t.checked=o[0]),a&2&&X(u,o[1]),a&4&&N(e,"disabled",o[2])},i:D,o:D,d(o){o&&P(e),f=!1,V(h)}}}function p(i,e,t){let s,{value:n=!1}=e,{label:u="Checkbox"}=e,{interactive:f}=e;const h=x();async function o(r){r.key==="Enter"&&(t(0,n=!n),h("select",{index:0,value:r.currentTarget.checked,selected:r.currentTarget.checked}))}async function a(r){t(0,n=r.currentTarget.checked),h("select",{index:0,value:r.currentTarget.checked,selected:r.currentTarget.checked})}function v(){n=this.checked,t(0,n)}return i.$$set=r=>{"value"in r&&t(0,n=r.value),"label"in r&&t(1,u=r.label),"interactive"in r&&t(5,f=r.interactive)},i.$$.update=()=>{i.$$.dirty&1&&h("change",n),i.$$.dirty&32&&t(2,s=!f)},[n,u,s,o,a,f,v]}class y extends O{constructor(e){super(),Q(this,e,p,$,W,{value:0,label:1,interactive:5})}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),B()}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),B()}get interactive(){return this.$$.ctx[5]}set interactive(e){this.$$set({interactive:e}),B()}}const ee=y,{SvelteComponent:te,add_flush_callback:se,assign:ne,bind:ie,binding_callbacks:le,check_outros:ae,create_component:S,destroy_component:T,detach:E,flush:d,get_spread_object:ce,get_spread_update:ue,group_outros:re,init:_e,insert:j,mount_component:q,safe_not_equal:fe,set_data:oe,space:U,text:he,transition_in:b,transition_out:w}=window.__gradio__svelte__internal,{afterUpdate:de}=window.__gradio__svelte__internal;function A(i){let e,t;return e=new L({props:{$$slots:{default:[ge]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},m(s,n){q(e,s,n),t=!0},p(s,n){const u={};n&131104&&(u.$$scope={dirty:n,ctx:s}),e.$set(u)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function ge(i){let e;return{c(){e=he(i[5])},m(t,s){j(t,e,s)},p(t,s){s&32&&oe(e,t[5])},d(t){t&&E(e)}}}function me(i){let e,t,s,n,u,f;const h=[{autoscroll:i[10].autoscroll},{i18n:i[10].i18n},i[9]];let o={};for(let l=0;l<h.length;l+=1)o=ne(o,h[l]);e=new M({props:o}),e.$on("clear_status",i[14]);let a=i[5]&&A(i);function v(l){i[15](l)}let r={label:i[4],interactive:i[11]};return i[0]!==void 0&&(r.value=i[0]),n=new ee({props:r}),le.push(()=>ie(n,"value",v)),n.$on("change",i[12]),n.$on("select",i[16]),{c(){S(e.$$.fragment),t=U(),a&&a.c(),s=U(),S(n.$$.fragment)},m(l,_){q(e,l,_),j(l,t,_),a&&a.m(l,_),j(l,s,_),q(n,l,_),f=!0},p(l,_){const g=_&1536?ue(h,[_&1024&&{autoscroll:l[10].autoscroll},_&1024&&{i18n:l[10].i18n},_&512&&ce(l[9])]):{};e.$set(g),l[5]?a?(a.p(l,_),_&32&&b(a,1)):(a=A(l),a.c(),b(a,1),a.m(s.parentNode,s)):a&&(re(),w(a,1,1,()=>{a=null}),ae());const m={};_&16&&(m.label=l[4]),_&2048&&(m.interactive=l[11]),!u&&_&1&&(u=!0,m.value=l[0],se(()=>u=!1)),n.$set(m)},i(l){f||(b(e.$$.fragment,l),b(a),b(n.$$.fragment,l),f=!0)},o(l){w(e.$$.fragment,l),w(a),w(n.$$.fragment,l),f=!1},d(l){l&&(E(t),E(s)),T(e,l),a&&a.d(l),T(n,l)}}}function be(i){let e,t;return e=new K({props:{visible:i[3],elemId:i[1],elemClasses:i[2],container:i[6],scale:i[7],minWidth:i[8],$$slots:{default:[me]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},m(s,n){q(e,s,n),t=!0},p(s,[n]){const u={};n&8&&(u.visible=s[3]),n&2&&(u.elemId=s[1]),n&4&&(u.elemClasses=s[2]),n&64&&(u.container=s[6]),n&128&&(u.scale=s[7]),n&256&&(u.minWidth=s[8]),n&134705&&(u.$$scope={dirty:n,ctx:s}),e.$set(u)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function ve(i,e,t){let{elemId:s=""}=e,{elemClasses:n=[]}=e,{visible:u=!0}=e,{value:f=!1}=e,{value_is_output:h=!1}=e,{label:o="Checkbox"}=e,{info:a=void 0}=e,{container:v=!0}=e,{scale:r=null}=e,{minWidth:l=void 0}=e,{loading_status:_}=e,{gradio:g}=e,{interactive:m}=e;function F(){g.dispatch("change"),h||g.dispatch("input")}de(()=>{t(13,h=!1)});const G=()=>g.dispatch("clear_status",_);function H(c){f=c,t(0,f)}const J=c=>g.dispatch("select",c.detail);return i.$$set=c=>{"elemId"in c&&t(1,s=c.elemId),"elemClasses"in c&&t(2,n=c.elemClasses),"visible"in c&&t(3,u=c.visible),"value"in c&&t(0,f=c.value),"value_is_output"in c&&t(13,h=c.value_is_output),"label"in c&&t(4,o=c.label),"info"in c&&t(5,a=c.info),"container"in c&&t(6,v=c.container),"scale"in c&&t(7,r=c.scale),"minWidth"in c&&t(8,l=c.minWidth),"loading_status"in c&&t(9,_=c.loading_status),"gradio"in c&&t(10,g=c.gradio),"interactive"in c&&t(11,m=c.interactive)},[f,s,n,u,o,a,v,r,l,_,g,m,F,h,G,H,J]}class ze extends te{constructor(e){super(),_e(this,e,ve,be,fe,{elemId:1,elemClasses:2,visible:3,value:0,value_is_output:13,label:4,info:5,container:6,scale:7,minWidth:8,loading_status:9,gradio:10,interactive:11})}get elemId(){return this.$$.ctx[1]}set elemId(e){this.$$set({elemId:e}),d()}get elemClasses(){return this.$$.ctx[2]}set elemClasses(e){this.$$set({elemClasses:e}),d()}get visible(){return this.$$.ctx[3]}set visible(e){this.$$set({visible:e}),d()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),d()}get value_is_output(){return this.$$.ctx[13]}set value_is_output(e){this.$$set({value_is_output:e}),d()}get label(){return this.$$.ctx[4]}set label(e){this.$$set({label:e}),d()}get info(){return this.$$.ctx[5]}set info(e){this.$$set({info:e}),d()}get container(){return this.$$.ctx[6]}set container(e){this.$$set({container:e}),d()}get scale(){return this.$$.ctx[7]}set scale(e){this.$$set({scale:e}),d()}get minWidth(){return this.$$.ctx[8]}set minWidth(e){this.$$set({minWidth:e}),d()}get loading_status(){return this.$$.ctx[9]}set loading_status(e){this.$$set({loading_status:e}),d()}get gradio(){return this.$$.ctx[10]}set gradio(e){this.$$set({gradio:e}),d()}get interactive(){return this.$$.ctx[11]}set interactive(e){this.$$set({interactive:e}),d()}}export{ee as BaseCheckbox,ze as default};
//# sourceMappingURL=Index-MU4faLZi.js.map
