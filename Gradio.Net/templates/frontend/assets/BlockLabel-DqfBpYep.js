import"./Index-CLipTJLN.js";const{SvelteComponent:_,append:h,attr:c,create_component:d,destroy_component:g,detach:m,element:u,flush:r,init:w,insert:I,mount_component:k,safe_not_equal:B,set_data:q,space:C,text:L,toggle_class:o,transition_in:S,transition_out:j}=window.__gradio__svelte__internal;function v(a){let e,s,i,b,f,n;return i=new a[1]({}),{c(){e=u("label"),s=u("span"),d(i.$$.fragment),b=C(),f=L(a[0]),c(s,"class","svelte-1b6s6s"),c(e,"for",""),c(e,"data-testid","block-label"),c(e,"class","svelte-1b6s6s"),o(e,"hide",!a[2]),o(e,"sr-only",!a[2]),o(e,"float",a[4]),o(e,"hide-label",a[3])},m(l,t){I(l,e,t),h(e,s),k(i,s,null),h(e,b),h(e,f),n=!0},p(l,[t]){(!n||t&1)&&q(f,l[0]),(!n||t&4)&&o(e,"hide",!l[2]),(!n||t&4)&&o(e,"sr-only",!l[2]),(!n||t&16)&&o(e,"float",l[4]),(!n||t&8)&&o(e,"hide-label",l[3])},i(l){n||(S(i.$$.fragment,l),n=!0)},o(l){j(i.$$.fragment,l),n=!1},d(l){l&&m(e),g(i)}}}function z(a,e,s){let{label:i=null}=e,{Icon:b}=e,{showLabel:f=!0}=e,{disable:n=!1}=e,{float:l=!0}=e;return a.$$set=t=>{"label"in t&&s(0,i=t.label),"Icon"in t&&s(1,b=t.Icon),"showLabel"in t&&s(2,f=t.showLabel),"disable"in t&&s(3,n=t.disable),"float"in t&&s(4,l=t.float)},[i,b,f,n,l]}class D extends _{constructor(e){super(),w(this,e,z,v,B,{label:0,Icon:1,showLabel:2,disable:3,float:4})}get label(){return this.$$.ctx[0]}set label(e){this.$$set({label:e}),r()}get Icon(){return this.$$.ctx[1]}set Icon(e){this.$$set({Icon:e}),r()}get showLabel(){return this.$$.ctx[2]}set showLabel(e){this.$$set({showLabel:e}),r()}get disable(){return this.$$.ctx[3]}set disable(e){this.$$set({disable:e}),r()}get float(){return this.$$.ctx[4]}set float(e){this.$$set({float:e}),r()}}export{D as B};
//# sourceMappingURL=BlockLabel-DqfBpYep.js.map
