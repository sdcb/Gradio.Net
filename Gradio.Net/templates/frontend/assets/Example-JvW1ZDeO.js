import{M as h}from"./Example.svelte_svelte_type_style_lang-qGCzIdUa.js";import"./prism-python-_O7S0ge-.js";import"./_commonjsHelpers-BosuxZz1.js";const{SvelteComponent:c,attr:o,create_component:d,destroy_component:g,detach:b,element:k,flush:_,init:z,insert:v,mount_component:w,safe_not_equal:y,toggle_class:m,transition_in:x,transition_out:q}=window.__gradio__svelte__internal;function C(n){let e,l,a;return l=new h({props:{message:n[0]?n[0]:"",latex_delimiters:n[5],sanitizeHtml:n[3],lineBreaks:n[4],chatbot:!1}}),{c(){e=k("div"),d(l.$$.fragment),o(e,"class","prose svelte-1ayixqk"),m(e,"table",n[1]==="table"),m(e,"gallery",n[1]==="gallery"),m(e,"selected",n[2])},m(t,i){v(t,e,i),w(l,e,null),a=!0},p(t,[i]){const r={};i&1&&(r.message=t[0]?t[0]:""),i&32&&(r.latex_delimiters=t[5]),i&8&&(r.sanitizeHtml=t[3]),i&16&&(r.lineBreaks=t[4]),l.$set(r),(!a||i&2)&&m(e,"table",t[1]==="table"),(!a||i&2)&&m(e,"gallery",t[1]==="gallery"),(!a||i&4)&&m(e,"selected",t[2])},i(t){a||(x(l.$$.fragment,t),a=!0)},o(t){q(l.$$.fragment,t),a=!1},d(t){t&&b(e),g(l)}}}function M(n,e,l){let{value:a}=e,{type:t}=e,{selected:i=!1}=e,{sanitizeHtml:r}=e,{lineBreaks:f}=e,{latex_delimiters:u}=e;return n.$$set=s=>{"value"in s&&l(0,a=s.value),"type"in s&&l(1,t=s.type),"selected"in s&&l(2,i=s.selected),"sanitizeHtml"in s&&l(3,r=s.sanitizeHtml),"lineBreaks"in s&&l(4,f=s.lineBreaks),"latex_delimiters"in s&&l(5,u=s.latex_delimiters)},[a,t,i,r,f,u]}class A extends c{constructor(e){super(),z(this,e,M,C,y,{value:0,type:1,selected:2,sanitizeHtml:3,lineBreaks:4,latex_delimiters:5})}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),_()}get type(){return this.$$.ctx[1]}set type(e){this.$$set({type:e}),_()}get selected(){return this.$$.ctx[2]}set selected(e){this.$$set({selected:e}),_()}get sanitizeHtml(){return this.$$.ctx[3]}set sanitizeHtml(e){this.$$set({sanitizeHtml:e}),_()}get lineBreaks(){return this.$$.ctx[4]}set lineBreaks(e){this.$$set({lineBreaks:e}),_()}get latex_delimiters(){return this.$$.ctx[5]}set latex_delimiters(e){this.$$set({latex_delimiters:e}),_()}}export{A as default};
//# sourceMappingURL=Example-JvW1ZDeO.js.map
