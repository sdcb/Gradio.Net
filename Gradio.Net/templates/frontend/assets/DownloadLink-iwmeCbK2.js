import{g as P}from"./Index-CLipTJLN.js";import{s as Q,g as X}from"./file-url-cVETAVBK.js";const{SvelteComponent:Y,append:Z,attr:b,detach:$,init:x,insert:ee,noop:H,safe_not_equal:te,svg_element:B}=window.__gradio__svelte__internal;function le(a){let e,t;return{c(){e=B("svg"),t=B("path"),b(t,"fill","currentColor"),b(t,"d","M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"width","100%"),b(e,"height","100%"),b(e,"viewBox","0 0 32 32")},m(n,r){ee(n,e,r),Z(e,t)},p:H,i:H,o:H,d(n){n&&$(e)}}}class we extends Y{constructor(e){super(),x(this,e,null,le,te,{})}}const{SvelteComponent:ne,assign:L,check_outros:V,compute_rest_props:N,create_slot:S,detach:R,element:F,empty:G,exclude_internal_props:oe,flush:O,get_all_dirty_from_scope:W,get_slot_changes:j,get_spread_update:M,group_outros:T,init:re,insert:U,listen:A,prevent_default:ie,safe_not_equal:se,set_attributes:E,transition_in:m,transition_out:w,update_slot_base:z}=window.__gradio__svelte__internal,{createEventDispatcher:ae}=window.__gradio__svelte__internal;function fe(a){let e,t,n,r,u;const s=a[8].default,f=S(s,a,a[7],null);let i=[{href:a[0]},{target:t=typeof window<"u"&&window.__is_colab__?"_blank":null},{rel:"noopener noreferrer"},{download:a[1]},a[6]],l={};for(let o=0;o<i.length;o+=1)l=L(l,i[o]);return{c(){e=F("a"),f&&f.c(),E(e,l)},m(o,_){U(o,e,_),f&&f.m(e,null),n=!0,r||(u=A(e,"click",a[3].bind(null,"click")),r=!0)},p(o,_){f&&f.p&&(!n||_&128)&&z(f,s,o,o[7],n?j(s,o[7],_,null):W(o[7]),null),E(e,l=M(i,[(!n||_&1)&&{href:o[0]},{target:t},{rel:"noopener noreferrer"},(!n||_&2)&&{download:o[1]},_&64&&o[6]]))},i(o){n||(m(f,o),n=!0)},o(o){w(f,o),n=!1},d(o){o&&R(e),f&&f.d(o),r=!1,u()}}}function ue(a){let e,t,n,r;const u=[ce,_e],s=[];function f(i,l){return i[2]?0:1}return e=f(a),t=s[e]=u[e](a),{c(){t.c(),n=G()},m(i,l){s[e].m(i,l),U(i,n,l),r=!0},p(i,l){let o=e;e=f(i),e===o?s[e].p(i,l):(T(),w(s[o],1,1,()=>{s[o]=null}),V(),t=s[e],t?t.p(i,l):(t=s[e]=u[e](i),t.c()),m(t,1),t.m(n.parentNode,n))},i(i){r||(m(t),r=!0)},o(i){w(t),r=!1},d(i){i&&R(n),s[e].d(i)}}}function _e(a){let e,t,n,r;const u=a[8].default,s=S(u,a,a[7],null);let f=[a[6],{href:a[0]}],i={};for(let l=0;l<f.length;l+=1)i=L(i,f[l]);return{c(){e=F("a"),s&&s.c(),E(e,i)},m(l,o){U(l,e,o),s&&s.m(e,null),t=!0,n||(r=A(e,"click",ie(a[5])),n=!0)},p(l,o){s&&s.p&&(!t||o&128)&&z(s,u,l,l[7],t?j(u,l[7],o,null):W(l[7]),null),E(e,i=M(f,[o&64&&l[6],(!t||o&1)&&{href:l[0]}]))},i(l){t||(m(s,l),t=!0)},o(l){w(s,l),t=!1},d(l){l&&R(e),s&&s.d(l),n=!1,r()}}}function ce(a){let e;const t=a[8].default,n=S(t,a,a[7],null);return{c(){n&&n.c()},m(r,u){n&&n.m(r,u),e=!0},p(r,u){n&&n.p&&(!e||u&128)&&z(n,t,r,r[7],e?j(t,r[7],u,null):W(r[7]),null)},i(r){e||(m(n,r),e=!0)},o(r){w(n,r),e=!1},d(r){n&&n.d(r)}}}function de(a){let e,t,n,r,u;const s=[ue,fe],f=[];function i(l,o){return o&1&&(e=null),e==null&&(e=!!(l[4]&&Q(l[0]))),e?0:1}return t=i(a,-1),n=f[t]=s[t](a),{c(){n.c(),r=G()},m(l,o){f[t].m(l,o),U(l,r,o),u=!0},p(l,[o]){let _=t;t=i(l,o),t===_?f[t].p(l,o):(T(),w(f[_],1,1,()=>{f[_]=null}),V(),n=f[t],n?n.p(l,o):(n=f[t]=s[t](l),n.c()),m(n,1),n.m(r.parentNode,r))},i(l){u||(m(n),u=!0)},o(l){w(n),u=!1},d(l){l&&R(r),f[t].d(l)}}}function he(a,e,t){const n=["href","download"];let r=N(e,n),{$$slots:u={},$$scope:s}=e;var f=this&&this.__awaiter||function(c,v,h,k){function g(d){return d instanceof h?d:new h(function(y){y(d)})}return new(h||(h=Promise))(function(d,y){function J(p){try{C(k.next(p))}catch(D){y(D)}}function K(p){try{C(k.throw(p))}catch(D){y(D)}}function C(p){p.done?d(p.value):g(p.value).then(J,K)}C((k=k.apply(c,v||[])).next())})};let{href:i=void 0}=e,{download:l}=e;const o=ae();let _=!1;const q=P();function I(){return f(this,void 0,void 0,function*(){if(_)return;if(o("click"),i==null)throw new Error("href is not defined.");if(q==null)throw new Error("Wasm worker proxy is not available.");const v=new URL(i,window.location.href).pathname;t(2,_=!0),q.httpRequest({method:"GET",path:v,headers:{},query_string:""}).then(h=>{if(h.status!==200)throw new Error(`Failed to get file ${v} from the Wasm worker.`);const k=new Blob([h.body],{type:X(h.headers,"content-type")}),g=URL.createObjectURL(k),d=document.createElement("a");d.href=g,d.download=l,d.click(),URL.revokeObjectURL(g)}).finally(()=>{t(2,_=!1)})})}return a.$$set=c=>{e=L(L({},e),oe(c)),t(6,r=N(e,n)),"href"in c&&t(0,i=c.href),"download"in c&&t(1,l=c.download),"$$scope"in c&&t(7,s=c.$$scope)},[i,l,_,o,q,I,r,s,u]}class ke extends ne{constructor(e){super(),re(this,e,he,de,se,{href:0,download:1})}get href(){return this.$$.ctx[0]}set href(e){this.$$set({href:e}),O()}get download(){return this.$$.ctx[1]}set download(e){this.$$set({download:e}),O()}}export{ke as D,we as a};
//# sourceMappingURL=DownloadLink-iwmeCbK2.js.map
