import G from"./Index-DDCF2BFd.js";import{T as P}from"./Textbox-D14Uj6Cb.js";import{a as J,B as q}from"./Button-C3qvSDkM.js";import{$ as K}from"./Index-CLipTJLN.js";/* empty css                                              */import"./index-Cr9C6grF.js";import Q from"./Index-INgKs-Lw.js";import"./BlockTitle-CxWqDqpB.js";import"./Info-DA_St-By.js";import"./Check-Ck0iADAu.js";import"./Copy-ZPOKSMtK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./svelte/svelte.js";const{SvelteComponent:R,add_flush_callback:j,append:I,attr:B,bind:A,binding_callbacks:E,component_subscribe:U,create_component:v,destroy_component:h,detach:c,element:L,flush:N,init:V,insert:$,mount_component:w,safe_not_equal:W,set_data:D,space:T,text:H,toggle_class:z,transition_in:k,transition_out:x}=window.__gradio__svelte__internal;function C(r){let e;return{c(){e=L("p"),B(e,"class","auth svelte-1ogxbi0")},m(t,n){$(t,e,n),e.innerHTML=r[0]},p(t,n){n&1&&(e.innerHTML=t[0])},d(t){t&&c(e)}}}function F(r){let e,t=r[6]("login.enable_cookies")+"",n;return{c(){e=L("p"),n=H(t),B(e,"class","auth svelte-1ogxbi0")},m(l,s){$(l,e,s),I(e,n)},p(l,s){s&64&&t!==(t=l[6]("login.enable_cookies")+"")&&D(n,t)},d(l){l&&c(e)}}}function O(r){let e,t=r[6]("login.incorrect_credentials")+"",n;return{c(){e=L("p"),n=H(t),B(e,"class","creds svelte-1ogxbi0")},m(l,s){$(l,e,s),I(e,n)},p(l,s){s&64&&t!==(t=l[6]("login.incorrect_credentials")+"")&&D(n,t)},d(l){l&&c(e)}}}function X(r){let e,t,n;function l(o){r[9](o)}let s={label:"username",lines:1,showLabel:!0,maxLines:1};return r[3]!==void 0&&(s.value=r[3]),e=new P({props:s}),E.push(()=>A(e,"value",l)),e.$on("submit",r[7]),{c(){v(e.$$.fragment)},m(o,_){w(e,o,_),n=!0},p(o,_){const f={};!t&&_&8&&(t=!0,f.value=o[3],j(()=>t=!1)),e.$set(f)},i(o){n||(k(e.$$.fragment,o),n=!0)},o(o){x(e.$$.fragment,o),n=!1},d(o){h(e,o)}}}function Y(r){let e,t,n;function l(o){r[10](o)}let s={label:"password",lines:1,showLabel:!0,maxLines:1,type:"password"};return r[4]!==void 0&&(s.value=r[4]),e=new P({props:s}),E.push(()=>A(e,"value",l)),e.$on("submit",r[7]),{c(){v(e.$$.fragment)},m(o,_){w(e,o,_),n=!0},p(o,_){const f={};!t&&_&16&&(t=!0,f.value=o[4],j(()=>t=!1)),e.$set(f)},i(o){n||(k(e.$$.fragment,o),n=!0)},o(o){x(e.$$.fragment,o),n=!1},d(o){h(e,o)}}}function Z(r){let e,t,n,l;return e=new q({props:{$$slots:{default:[X]},$$scope:{ctx:r}}}),n=new q({props:{$$slots:{default:[Y]},$$scope:{ctx:r}}}),{c(){v(e.$$.fragment),t=T(),v(n.$$.fragment)},m(s,o){w(e,s,o),$(s,t,o),w(n,s,o),l=!0},p(s,o){const _={};o&2056&&(_.$$scope={dirty:o,ctx:s}),e.$set(_);const f={};o&2064&&(f.$$scope={dirty:o,ctx:s}),n.$set(f)},i(s){l||(k(e.$$.fragment,s),k(n.$$.fragment,s),l=!0)},o(s){x(e.$$.fragment,s),x(n.$$.fragment,s),l=!1},d(s){s&&c(t),h(e,s),h(n,s)}}}function y(r){let e=r[6]("login.login")+"",t;return{c(){t=H(e)},m(n,l){$(n,t,l)},p(n,l){l&64&&e!==(e=n[6]("login.login")+"")&&D(t,e)},d(n){n&&c(t)}}}function ee(r){let e,t=r[6]("login.login")+"",n,l,s,o,_,f,d,b,g,m=r[0]&&C(r),p=r[2]&&F(r),a=r[5]&&O(r);return f=new G({props:{$$slots:{default:[Z]},$$scope:{ctx:r}}}),b=new J({props:{size:"lg",variant:"primary",$$slots:{default:[y]},$$scope:{ctx:r}}}),b.$on("click",r[7]),{c(){e=L("h2"),n=H(t),l=T(),m&&m.c(),s=T(),p&&p.c(),o=T(),a&&a.c(),_=T(),v(f.$$.fragment),d=T(),v(b.$$.fragment),B(e,"class","svelte-1ogxbi0")},m(i,u){$(i,e,u),I(e,n),$(i,l,u),m&&m.m(i,u),$(i,s,u),p&&p.m(i,u),$(i,o,u),a&&a.m(i,u),$(i,_,u),w(f,i,u),$(i,d,u),w(b,i,u),g=!0},p(i,u){(!g||u&64)&&t!==(t=i[6]("login.login")+"")&&D(n,t),i[0]?m?m.p(i,u):(m=C(i),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null),i[2]?p?p.p(i,u):(p=F(i),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null),i[5]?a?a.p(i,u):(a=O(i),a.c(),a.m(_.parentNode,_)):a&&(a.d(1),a=null);const M={};u&2072&&(M.$$scope={dirty:u,ctx:i}),f.$set(M);const S={};u&2112&&(S.$$scope={dirty:u,ctx:i}),b.$set(S)},i(i){g||(k(f.$$.fragment,i),k(b.$$.fragment,i),g=!0)},o(i){x(f.$$.fragment,i),x(b.$$.fragment,i),g=!1},d(i){i&&(c(e),c(l),c(s),c(o),c(_),c(d)),m&&m.d(i),p&&p.d(i),a&&a.d(i),h(f,i),h(b,i)}}}function te(r){let e,t,n;return t=new Q({props:{variant:"panel",minWidth:480,$$slots:{default:[ee]},$$scope:{ctx:r}}}),{c(){e=L("div"),v(t.$$.fragment),B(e,"class","wrap svelte-1ogxbi0"),z(e,"min-h-screen",r[1])},m(l,s){$(l,e,s),w(t,e,null),n=!0},p(l,[s]){const o={};s&2173&&(o.$$scope={dirty:s,ctx:l}),t.$set(o),(!n||s&2)&&z(e,"min-h-screen",l[1])},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){x(t.$$.fragment,l),n=!1},d(l){l&&c(e),h(t)}}}function ne(r,e,t){let n;U(r,K,a=>t(6,n=a));let{root:l}=e,{auth_message:s}=e,{app_mode:o}=e,{space_id:_}=e,f="",d="",b=!1;const g=async()=>{const a=new FormData;a.append("username",f),a.append("password",d);let i=await fetch(l+"/login",{method:"POST",body:a});i.status===400?(t(5,b=!0),t(3,f=""),t(4,d="")):i.status==200&&location.reload()};function m(a){f=a,t(3,f)}function p(a){d=a,t(4,d)}return r.$$set=a=>{"root"in a&&t(8,l=a.root),"auth_message"in a&&t(0,s=a.auth_message),"app_mode"in a&&t(1,o=a.app_mode),"space_id"in a&&t(2,_=a.space_id)},[s,o,_,f,d,b,n,g,l,m,p]}class be extends R{constructor(e){super(),V(this,e,ne,te,W,{root:8,auth_message:0,app_mode:1,space_id:2})}get root(){return this.$$.ctx[8]}set root(e){this.$$set({root:e}),N()}get auth_message(){return this.$$.ctx[0]}set auth_message(e){this.$$set({auth_message:e}),N()}get app_mode(){return this.$$.ctx[1]}set app_mode(e){this.$$set({app_mode:e}),N()}get space_id(){return this.$$.ctx[2]}set space_id(e){this.$$set({space_id:e}),N()}}export{be as default};
//# sourceMappingURL=Login-BZEQkTu9.js.map
