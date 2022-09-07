(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function l(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=l(s);fetch(s.href,a)}})();function S(){}function Oe(t,e){for(const l in e)t[l]=e[l];return t}function Te(t){return t()}function ye(){return Object.create(null)}function W(t){t.forEach(Te)}function De(t){return typeof t=="function"}function O(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let X;function P(t,e){return X||(X=document.createElement("a")),X.href=e,t===X.href}function Be(t){return Object.keys(t).length===0}function te(t,e,l,n){if(t){const s=Re(t,e,l,n);return t[0](s)}}function Re(t,e,l,n){return t[1]&&n?Oe(l.ctx.slice(),t[1](n(e))):l.ctx}function le(t,e,l,n){if(t[2]&&n){const s=t[2](n(l));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],u=Math.max(e.dirty.length,s.length);for(let c=0;c<u;c+=1)a[c]=e.dirty[c]|s[c];return a}return e.dirty|s}return e.dirty}function ne(t,e,l,n,s,a){if(s){const u=Re(e,l,n,a);t.p(u,s)}}function se(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}function d(t,e){t.appendChild(e)}function C(t,e,l){t.insertBefore(e,l||null)}function j(t){t.parentNode.removeChild(t)}function me(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function m(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function b(){return z(" ")}function Ne(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function r(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function He(t){return Array.from(t.childNodes)}function Pe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}let V;function Q(t){V=t}function Ue(){if(!V)throw new Error("Function called outside component initialization");return V}function ze(t){Ue().$$.on_mount.push(t)}const J=[],ue=[],Z=[],fe=[],Fe=Promise.resolve();let de=!1;function Ke(){de||(de=!0,Fe.then(Ae))}function ge(t){Z.push(t)}function Ge(t){fe.push(t)}const ce=new Set;let Y=0;function Ae(){const t=V;do{for(;Y<J.length;){const e=J[Y];Y++,Q(e),Je(e.$$)}for(Q(null),J.length=0,Y=0;ue.length;)ue.pop()();for(let e=0;e<Z.length;e+=1){const l=Z[e];ce.has(l)||(ce.add(l),l())}Z.length=0}while(J.length);for(;fe.length;)fe.pop()();de=!1,ce.clear(),Q(t)}function Je(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ge)}}const ee=new Set;let U;function ie(){U={r:0,c:[],p:U}}function ae(){U.r||W(U.c),U=U.p}function k(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function L(t,e,l,n){if(t&&t.o){if(ee.has(t))return;ee.add(t),U.c.push(()=>{ee.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}function Qe(t,e,l){const n=t.$$.props[e];n!==void 0&&(t.$$.bound[n]=l,l(t.$$.ctx[n]))}function N(t){t&&t.c()}function A(t,e,l,n){const{fragment:s,on_mount:a,on_destroy:u,after_update:c}=t.$$;s&&s.m(e,l),n||ge(()=>{const o=a.map(Te).filter(De);u?u.push(...o):W(o),t.$$.on_mount=[]}),c.forEach(ge)}function M(t,e){const l=t.$$;l.fragment!==null&&(W(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Ve(t,e){t.$$.dirty[0]===-1&&(J.push(t),Ke(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,l,n,s,a,u,c=[-1]){const o=V;Q(t);const i=t.$$={fragment:null,ctx:null,props:a,update:S,not_equal:s,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ye(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};u&&u(i.root);let _=!1;if(i.ctx=l?l(t,e.props||{},(f,p,...g)=>{const v=g.length?g[0]:p;return i.ctx&&s(i.ctx[f],i.ctx[f]=v)&&(!i.skip_bound&&i.bound[f]&&i.bound[f](v),_&&Ve(t,f)),p}):[],i.update(),_=!0,W(i.before_update),i.fragment=n?n(i.ctx):!1,e.target){if(e.hydrate){const f=He(e.target);i.fragment&&i.fragment.l(f),f.forEach(j)}else i.fragment&&i.fragment.c();e.intro&&k(t.$$.fragment),A(t,e.target,e.anchor,e.customElement),Ae()}Q(o)}class B{$destroy(){M(this,1),this.$destroy=S}$on(e,l){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Be(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const We="/assets/mouse.46dfd57c.svg",Xe="/assets/github.64869332.svg",Ye="/assets/discord.727f75d7.svg",Ze="/assets/reddit.e05a551f.svg";function et(t){let e,l,n,s,a,u,c,o,i,_,f,p,g,v,$,h,w,q,F,E,R,x,y,I,K,_e,pe,H,he,ve,G,re,be;return{c(){e=m("main"),l=m("span"),n=b(),s=m("div"),a=m("p"),a.innerHTML='<span style="color: var(--accent-primary);">HI</span> THERE! I&#39;M',u=b(),c=m("p"),c.textContent="qewer",o=b(),i=m("p"),i.textContent="aka. qewer33, qewer3322, qewer3333",_=b(),f=m("ul"),f.innerHTML=`<li class="svelte-qsbit7">developer</li> 
            <li class="svelte-qsbit7">designer</li> 
            <li class="svelte-qsbit7">linux enthusiast</li>`,p=b(),g=m("div"),g.innerHTML='<a href="#projects">PROJECTS</a>',v=b(),$=m("div"),h=m("a"),w=m("img"),F=b(),E=m("span"),R=m("img"),y=b(),I=m("a"),K=m("img"),pe=b(),H=m("img"),ve=b(),G=m("p"),G.textContent="SCROLL FOR MORE",r(l,"id","dot"),r(l,"class","svelte-qsbit7"),r(a,"id","title-hi"),r(a,"data-animate",""),r(a,"class","svelte-qsbit7"),r(c,"id","title-name"),r(c,"data-animate",""),r(c,"class","svelte-qsbit7"),r(i,"id","title-aka"),r(i,"data-animate",""),r(i,"class","svelte-qsbit7"),r(f,"id","title-list"),r(f,"data-animate",""),r(f,"class","svelte-qsbit7"),r(g,"class","button svelte-qsbit7"),r(g,"data-animate",""),P(w.src,q=Xe)||r(w,"src",q),r(w,"alt","github"),r(w,"class","svelte-qsbit7"),r(h,"href","https://github.com/qewer33"),P(R.src,x=Ye)||r(R,"src",x),r(R,"alt","discord"),r(R,"class","svelte-qsbit7"),P(K.src,_e=Ze)||r(K,"src",_e),r(K,"alt","reddit"),r(K,"class","svelte-qsbit7"),r(I,"href","https://www.reddit.com/user/qewer3333"),r($,"id","title-socials"),r($,"data-animate",""),r($,"class","svelte-qsbit7"),r(s,"id","title-block"),r(s,"class","svelte-qsbit7"),P(H.src,he=We)||r(H,"src",he),r(H,"alt","mouse"),r(H,"id","scroll-img"),r(H,"class","svelte-qsbit7"),r(G,"id","scroll-text"),r(G,"class","svelte-qsbit7"),r(e,"class","svelte-qsbit7")},m(oe,Me){C(oe,e,Me),d(e,l),d(e,n),d(e,s),d(s,a),d(s,u),d(s,c),d(s,o),d(s,i),d(s,_),d(s,f),d(s,p),d(s,g),d(s,v),d(s,$),d($,h),d(h,w),d($,F),d($,E),d(E,R),d($,y),d($,I),d(I,K),d(e,pe),d(e,H),d(e,ve),d(e,G),re||(be=Ne(R,"click",t[0]),re=!0)},p:S,i:S,o:S,d(oe){oe&&j(e),re=!1,be()}}}function tt(t){return[l=>{navigator.clipboard.writeText("Qewer#8693");const n=document.createElement("div");n.innerText="COPIED TO CLIPBOARD",n.style.position="absolute";const s=l.target.getBoundingClientRect();n.style.transition="0.3s",n.style.opacity="0",n.style.padding="10px",n.style.color="white",n.style.background="rgba(40, 40, 40, 0.95)",n.style.transform="skew(-12deg)",document.body.appendChild(n),n.style.left=s.left+s.width/2-n.getBoundingClientRect().width/2+"px",n.style.top=s.top-n.getBoundingClientRect().height+"px",setTimeout(()=>{n.style.opacity="1"},100),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{document.body.removeChild(n)},300)},3e3)}]}class lt extends B{constructor(e){super(),D(this,e,tt,et,O,{})}}function nt(t){let e;return{c(){e=m("div"),T(e,"background-color","#999999"),r(e,"class","svelte-1tjozi3")},m(l,n){C(l,e,n)},d(l){l&&j(e)}}}function st(t){let e;return{c(){e=m("div"),T(e,"background-color","#ff4500"),r(e,"class","svelte-1tjozi3")},m(l,n){C(l,e,n)},d(l){l&&j(e)}}}function it(t){let e;return{c(){e=m("div"),T(e,"background-color","#4B872F"),r(e,"class","svelte-1tjozi3")},m(l,n){C(l,e,n)},d(l){l&&j(e)}}}function at(t){let e;return{c(){e=m("div"),T(e,"background-color","#AE2828"),r(e,"class","svelte-1tjozi3")},m(l,n){C(l,e,n)},d(l){l&&j(e)}}}function rt(t){let e;return{c(){e=m("div"),T(e,"background-color","#A58060"),r(e,"class","svelte-1tjozi3")},m(l,n){C(l,e,n)},d(l){l&&j(e)}}}function ot(t){let e,l,n,s,a,u,c,o=t[0].toUpperCase()+"",i;function _(g,v){return v&1&&(l=null),v&1&&(n=null),v&1&&(s=null),v&1&&(a=null),l==null&&(l=g[0].toLowerCase()==="rust"),l?rt:(n==null&&(n=g[0].toLowerCase()==="ruby"),n?at:(s==null&&(s=g[0].toLowerCase()==="qml"),s?it:(a==null&&(a=g[0].toLowerCase()==="svelte"),a?st:nt)))}let f=_(t,-1),p=f(t);return{c(){e=m("main"),p.c(),u=b(),c=m("p"),i=z(o),r(e,"class","svelte-1tjozi3")},m(g,v){C(g,e,v),p.m(e,null),d(e,u),d(e,c),d(c,i)},p(g,[v]){f!==(f=_(g,v))&&(p.d(1),p=f(g),p&&(p.c(),p.m(e,u))),v&1&&o!==(o=g[0].toUpperCase()+"")&&Pe(i,o)},i:S,o:S,d(g){g&&j(e),p.d()}}}function ct(t,e,l){let{language:n=""}=e;return t.$$set=s=>{"language"in s&&l(0,n=s.language)},[n]}class ut extends B{constructor(e){super(),D(this,e,ct,ot,O,{language:0})}}const ft=t=>({}),we=t=>({}),dt=t=>({}),$e=t=>({});function ke(t){let e,l,n;function s(u){t[6](u)}let a={};return t[0]!==void 0&&(a.language=t[0]),e=new ut({props:a}),ue.push(()=>Qe(e,"language",s)),{c(){N(e.$$.fragment)},m(u,c){A(e,u,c),n=!0},p(u,c){const o={};!l&&c&1&&(l=!0,o.language=u[0],Ge(()=>l=!1)),e.$set(o)},i(u){n||(k(e.$$.fragment,u),n=!0)},o(u){L(e.$$.fragment,u),n=!1},d(u){M(e,u)}}}function gt(t){let e,l,n,s,a,u,c,o,i,_,f,p,g,v,$,h,w,q=t[0]!==""&&ke(t);const F=t[5].description,E=te(F,t,t[4],$e),R=t[5].title,x=te(R,t,t[4],we);return{c(){e=m("main"),l=m("button"),n=b(),s=m("img"),u=b(),c=m("div"),o=m("div"),i=m("div"),_=m("a"),f=z("VISIT"),p=b(),q&&q.c(),g=b(),v=m("p"),E&&E.c(),$=b(),h=m("h1"),x&&x.c(),r(l,"class","svelte-10qa4qo"),P(s.src,a=t[1])||r(s,"src",a),r(s,"alt",""),T(s,"transform","translate(-50%, -50%) scale("+t[2]+")"),r(s,"class","svelte-10qa4qo"),r(_,"href",t[3]),r(_,"target","_blank"),r(_,"rel","noopener noreferrer"),r(i,"class","button"),T(i,"transform","none"),T(o,"display","flex"),r(v,"class","svelte-10qa4qo"),r(h,"class","svelte-10qa4qo"),r(c,"id","content"),r(c,"class","svelte-10qa4qo"),r(e,"data-animate",""),r(e,"class","svelte-10qa4qo")},m(y,I){C(y,e,I),d(e,l),d(e,n),d(e,s),d(e,u),d(e,c),d(c,o),d(o,i),d(i,_),d(_,f),d(o,p),q&&q.m(o,null),d(c,g),d(c,v),E&&E.m(v,null),d(c,$),d(c,h),x&&x.m(h,null),w=!0},p(y,[I]){(!w||I&2&&!P(s.src,a=y[1]))&&r(s,"src",a),(!w||I&4)&&T(s,"transform","translate(-50%, -50%) scale("+y[2]+")"),(!w||I&8)&&r(_,"href",y[3]),y[0]!==""?q?(q.p(y,I),I&1&&k(q,1)):(q=ke(y),q.c(),k(q,1),q.m(o,null)):q&&(ie(),L(q,1,1,()=>{q=null}),ae()),E&&E.p&&(!w||I&16)&&ne(E,F,y,y[4],w?le(F,y[4],I,dt):se(y[4]),$e),x&&x.p&&(!w||I&16)&&ne(x,R,y,y[4],w?le(R,y[4],I,ft):se(y[4]),we)},i(y){w||(k(q),k(E,y),k(x,y),w=!0)},o(y){L(q),L(E,y),L(x,y),w=!1},d(y){y&&j(e),q&&q.d(),E&&E.d(y),x&&x.d(y)}}}function mt(t,e,l){let{$$slots:n={},$$scope:s}=e,{thumbnailImage:a=""}=e,{thumbnailScale:u="1"}=e,{visitURL:c=""}=e,{language:o=""}=e;function i(_){o=_,l(0,o)}return t.$$set=_=>{"thumbnailImage"in _&&l(1,a=_.thumbnailImage),"thumbnailScale"in _&&l(2,u=_.thumbnailScale),"visitURL"in _&&l(3,c=_.visitURL),"language"in _&&l(0,o=_.language),"$$scope"in _&&l(4,s=_.$$scope)},[o,a,u,c,s,n,i]}class _t extends B{constructor(e){super(),D(this,e,mt,gt,O,{thumbnailImage:1,thumbnailScale:2,visitURL:3,language:0})}}const pt=[{name:"Exquisite",description:"A new, unique and intuitive window management solution for KDE Plasma!",thumbnailImage:"/static_assets/png/exquisite.png",thumbnailScale:"0.6",url:"https://github.com/qewer33/Exquisite",language:"QML"},{name:"Leaf KDE Plasma Theme",description:"Leaf is a comfy, forest themed, green accent light & dark theme set for your KDE Plasma desktop",thumbnailImage:"/static_assets/png/leaf.png",thumbnailScale:"0.35",url:"https://github.com/qewer33/leaf-kde",language:""},{name:"Clear Clock",description:"ClearClock is a simple, elegant and configurable date/time display for your KDE Plasma desktop",thumbnailImage:"/static_assets/png/clear_clock.png",thumbnailScale:"0.95",url:"https://github.com/qewer33/ClearClock",language:"QML"},{name:"ascii_table_creator_3000",description:"An interactive Ruby program that allows you to create text tables right in your terminal!",thumbnailImage:"/static_assets/png/ascii_table_creator_3000.png",thumbnailScale:"1.2",url:"https://github.com/qewer33/ascii_table_creator_3000",language:"Ruby"},{name:"sus runner",description:"A Chrome dino game clone, except it's kinda sus... Made with Rust and Macroquad to try out gamedev in Rust",thumbnailImage:"/static_assets/png/sus_runner.png",thumbnailScale:"1.4",url:"https://sus.qewer.dev/",language:"Rust"},{name:"This Website",description:"This website is designed by Lynith and developed from scratch by me using Svelte and p5.js",thumbnailImage:"/static_assets/png/website.png",thumbnailScale:"0.35",url:"https://github.com/qewer33/personal-website",language:"Svelte"}],ht={projects:pt};function qe(t,e,l){const n=t.slice();return n[1]=e[l],n[3]=l,n}function vt(t){let e,l=t[1].name+"",n;return{c(){e=m("span"),n=z(l),r(e,"slot","title")},m(s,a){C(s,e,a),d(e,n)},p:S,d(s){s&&j(e)}}}function bt(t){let e,l=t[1].description+"",n;return{c(){e=m("span"),n=z(l),r(e,"slot","description")},m(s,a){C(s,e,a),d(e,n)},p:S,d(s){s&&j(e)}}}function Le(t){let e,l;return e=new _t({props:{thumbnailImage:t[1].thumbnailImage,thumbnailScale:t[1].thumbnailScale,visitURL:t[1].url,language:t[1].language,$$slots:{description:[bt],title:[vt]},$$scope:{ctx:t}}}),{c(){N(e.$$.fragment)},m(n,s){A(e,n,s),l=!0},p(n,s){const a={};s&16&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){L(e.$$.fragment,n),l=!1},d(n){M(e,n)}}}function yt(t){let e,l,n,s,a,u,c,o=t[0],i=[];for(let f=0;f<o.length;f+=1)i[f]=Le(qe(t,o,f));const _=f=>L(i[f],1,1,()=>{i[f]=null});return{c(){e=m("main"),l=m("span"),n=b(),s=m("div"),s.innerHTML=`<p data-animate="" id="title-name" class="svelte-1l957pi">projects</p> 
        <p data-animate="" id="title-sub" class="svelte-1l957pi">here are my most notable projects, hover or tap over them to get more info!</p>`,a=b(),u=m("div");for(let f=0;f<i.length;f+=1)i[f].c();r(l,"id","dot"),r(l,"class","svelte-1l957pi"),r(s,"id","title-block"),r(s,"class","svelte-1l957pi"),r(u,"id","cards"),r(u,"class","svelte-1l957pi"),r(e,"id","projects"),r(e,"class","svelte-1l957pi")},m(f,p){C(f,e,p),d(e,l),d(e,n),d(e,s),d(e,a),d(e,u);for(let g=0;g<i.length;g+=1)i[g].m(u,null);c=!0},p(f,[p]){if(p&1){o=f[0];let g;for(g=0;g<o.length;g+=1){const v=qe(f,o,g);i[g]?(i[g].p(v,p),k(i[g],1)):(i[g]=Le(v),i[g].c(),k(i[g],1),i[g].m(u,null))}for(ie(),g=o.length;g<i.length;g+=1)_(g);ae()}},i(f){if(!c){for(let p=0;p<o.length;p+=1)k(i[p]);c=!0}},o(f){i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)L(i[p]);c=!1},d(f){f&&j(e),me(i,f)}}}function wt(t){return[ht.projects]}class $t extends B{constructor(e){super(),D(this,e,wt,yt,O,{})}}const kt=t=>({}),je=t=>({}),qt=t=>({}),Ce=t=>({});function Lt(t){let e,l,n,s,a,u,c,o,i,_,f;const p=t[2].title,g=te(p,t,t[1],Ce),v=t[2].labels,$=te(v,t,t[1],je);return{c(){e=m("main"),l=m("div"),n=m("h1"),g&&g.c(),s=b(),a=m("div"),u=m("div"),c=b(),o=m("div"),o.innerHTML=`<p style="text-align: left;" class="svelte-enjm37">BEGINNER</p> 
            <p style="text-align: center;" class="svelte-enjm37">INTERMEDIATE</p> 
            <p style="text-align: right;" class="svelte-enjm37">ADVANCED</p>`,i=b(),_=m("div"),$&&$.c(),r(n,"class","svelte-enjm37"),r(u,"id","progress-bar-fg"),T(u,"width",t[0]+"%"),r(u,"class","svelte-enjm37"),r(a,"id","progress-bar-bg"),r(a,"class","svelte-enjm37"),r(o,"id","progress-bar-labels"),r(o,"class","svelte-enjm37"),r(_,"id","labels"),r(_,"class","svelte-enjm37"),r(l,"id","content"),r(l,"class","svelte-enjm37"),r(e,"data-animate",""),r(e,"class","svelte-enjm37")},m(h,w){C(h,e,w),d(e,l),d(l,n),g&&g.m(n,null),d(l,s),d(l,a),d(a,u),d(l,c),d(l,o),d(l,i),d(l,_),$&&$.m(_,null),f=!0},p(h,[w]){g&&g.p&&(!f||w&2)&&ne(g,p,h,h[1],f?le(p,h[1],w,qt):se(h[1]),Ce),(!f||w&1)&&T(u,"width",h[0]+"%"),$&&$.p&&(!f||w&2)&&ne($,v,h,h[1],f?le(v,h[1],w,kt):se(h[1]),je)},i(h){f||(k(g,h),k($,h),f=!0)},o(h){L(g,h),L($,h),f=!1},d(h){h&&j(e),g&&g.d(h),$&&$.d(h)}}}function jt(t,e,l){let{$$slots:n={},$$scope:s}=e,{knowledgeLevel:a=0}=e;return t.$$set=u=>{"knowledgeLevel"in u&&l(0,a=u.knowledgeLevel),"$$scope"in u&&l(1,s=u.$$scope)},[a,s,n]}class Ct extends B{constructor(e){super(),D(this,e,jt,Lt,O,{knowledgeLevel:0})}}function St(t){let e,l,n,s,a,u=t[1].toUpperCase()+"",c;return{c(){e=m("main"),l=m("img"),s=b(),a=m("p"),c=z(u),P(l.src,n=t[0])||r(l,"src",n),r(l,"alt",""),r(l,"class","svelte-16cuvyh"),r(e,"class","svelte-16cuvyh")},m(o,i){C(o,e,i),d(e,l),d(e,s),d(e,a),d(a,c)},p(o,[i]){i&1&&!P(l.src,n=o[0])&&r(l,"src",n),i&2&&u!==(u=o[1].toUpperCase()+"")&&Pe(c,u)},i:S,o:S,d(o){o&&j(e)}}}function It(t,e,l){let{logoImage:n=""}=e,{text:s=""}=e;return t.$$set=a=>{"logoImage"in a&&l(0,n=a.logoImage),"text"in a&&l(1,s=a.text)},[n,s]}class Et extends B{constructor(e){super(),D(this,e,It,St,O,{logoImage:0,text:1})}}const xt=[{name:"Programming & Software Development",knowledgeLevel:85,labels:["rust","ruby","bash","qml","neovim","vscode"]},{name:"Linux & Free Software",knowledgeLevel:85,labels:["arch linux","kde","bash"]},{name:"Graphic Design & UI/UX",knowledgeLevel:65,labels:["figma","inkscape","gimp"]},{name:"Web Development",knowledgeLevel:55,labels:["html","css","javascript","svelte"]},{name:"Computer Graphics & Creative Coding",knowledgeLevel:50,labels:["processing","p5.js"]},{name:"Computer Aided Design & 3D Printing",knowledgeLevel:45,labels:["freecad","openscad","kicad","cura"]},{name:"Game Development",knowledgeLevel:35,labels:["godot"]},{name:"PC Building",knowledgeLevel:25,labels:["ryzen 5 5600","radeon rx 6500 xt"]}],Tt={skills:xt};function Se(t,e,l){const n=t.slice();return n[1]=e[l],n}function Ie(t,e,l){const n=t.slice();return n[4]=e[l],n}function Rt(t){let e,l=t[1].name+"",n;return{c(){e=m("span"),n=z(l),r(e,"slot","title")},m(s,a){C(s,e,a),d(e,n)},p:S,d(s){s&&j(e)}}}function Ee(t){let e,l;return e=new Et({props:{logoImage:`/static_assets/svg/${t[4]}.svg`,text:t[4]}}),{c(){N(e.$$.fragment)},m(n,s){A(e,n,s),l=!0},p:S,i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){L(e.$$.fragment,n),l=!1},d(n){M(e,n)}}}function Pt(t){let e,l,n,s=t[1].labels,a=[];for(let c=0;c<s.length;c+=1)a[c]=Ee(Ie(t,s,c));const u=c=>L(a[c],1,1,()=>{a[c]=null});return{c(){e=m("span");for(let c=0;c<a.length;c+=1)a[c].c();l=b(),r(e,"slot","labels"),T(e,"display","flex"),T(e,"flex-wrap","wrap")},m(c,o){C(c,e,o);for(let i=0;i<a.length;i+=1)a[i].m(e,null);d(e,l),n=!0},p(c,o){if(o&1){s=c[1].labels;let i;for(i=0;i<s.length;i+=1){const _=Ie(c,s,i);a[i]?(a[i].p(_,o),k(a[i],1)):(a[i]=Ee(_),a[i].c(),k(a[i],1),a[i].m(e,l))}for(ie(),i=s.length;i<a.length;i+=1)u(i);ae()}},i(c){if(!n){for(let o=0;o<s.length;o+=1)k(a[o]);n=!0}},o(c){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)L(a[o]);n=!1},d(c){c&&j(e),me(a,c)}}}function xe(t){let e,l;return e=new Ct({props:{knowledgeLevel:t[1].knowledgeLevel,$$slots:{labels:[Pt],title:[Rt]},$$scope:{ctx:t}}}),{c(){N(e.$$.fragment)},m(n,s){A(e,n,s),l=!0},p(n,s){const a={};s&128&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){L(e.$$.fragment,n),l=!1},d(n){M(e,n)}}}function At(t){let e,l,n,s,a,u,c,o=t[0],i=[];for(let f=0;f<o.length;f+=1)i[f]=xe(Se(t,o,f));const _=f=>L(i[f],1,1,()=>{i[f]=null});return{c(){e=m("main"),l=m("span"),n=b(),s=m("div"),s.innerHTML=`<p id="title-name" data-animate="" class="svelte-1l957pi">skills and interests</p> 
        <p id="title-sub" data-animate="" class="svelte-1l957pi">my skills &amp; knowledge as a computer enthusiast and topics I&#39;m interested in</p>`,a=b(),u=m("div");for(let f=0;f<i.length;f+=1)i[f].c();r(l,"id","dot"),r(l,"class","svelte-1l957pi"),r(s,"id","title-block"),r(s,"class","svelte-1l957pi"),r(u,"id","cards"),r(u,"class","svelte-1l957pi"),r(e,"id","projects"),r(e,"class","svelte-1l957pi")},m(f,p){C(f,e,p),d(e,l),d(e,n),d(e,s),d(e,a),d(e,u);for(let g=0;g<i.length;g+=1)i[g].m(u,null);c=!0},p(f,[p]){if(p&1){o=f[0];let g;for(g=0;g<o.length;g+=1){const v=Se(f,o,g);i[g]?(i[g].p(v,p),k(i[g],1)):(i[g]=xe(v),i[g].c(),k(i[g],1),i[g].m(u,null))}for(ie(),g=o.length;g<i.length;g+=1)_(g);ae()}},i(f){if(!c){for(let p=0;p<o.length;p+=1)k(i[p]);c=!0}},o(f){i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)L(i[p]);c=!1},d(f){f&&j(e),me(i,f)}}}function Mt(t){return[Tt.skills]}class Ot extends B{constructor(e){super(),D(this,e,Mt,At,O,{})}}const Dt="/assets/logo_no_bg.1d75a974.png";function Bt(t){let e,l,n,s,a,u,c,o;return{c(){e=m("main"),l=m("span"),n=b(),s=m("div"),a=m("img"),c=b(),o=m("div"),o.innerHTML=`<p class="svelte-1v00ej9">this website is designed by
                <a href="https://lynithdev.github.io" class="svelte-1v00ej9">lynith</a>
                and developed by
                <a href="https://github.com/qewer33" class="svelte-1v00ej9">me (qewer)</a></p> 
            <p class="svelte-1v00ej9">you can find the source code
                <a href="https://github.com/qewer33/qewer33.github.io" class="svelte-1v00ej9">here on github</a></p> 
            <p class="svelte-1v00ej9">licensed under the
                <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" class="svelte-1v00ej9">gplv3 free software license</a></p>`,r(l,"id","dot"),r(l,"class","svelte-1v00ej9"),P(a.src,u=Dt)||r(a,"src",u),r(a,"alt","logo"),r(a,"class","svelte-1v00ej9"),r(o,"id","text"),r(s,"id","content"),r(s,"class","svelte-1v00ej9"),r(e,"class","svelte-1v00ej9")},m(i,_){C(i,e,_),d(e,l),d(e,n),d(e,s),d(s,a),d(s,c),d(s,o)},p:S,i:S,o:S,d(i){i&&j(e)}}}class Nt extends B{constructor(e){super(),D(this,e,null,Bt,O,{})}}function Ht(t){let e,l,n,s,a,u,c,o,i;return l=new lt({}),s=new $t({}),u=new Ot({}),o=new Nt({}),{c(){e=m("main"),N(l.$$.fragment),n=b(),N(s.$$.fragment),a=b(),N(u.$$.fragment),c=b(),N(o.$$.fragment),r(e,"class","svelte-8ioyzp")},m(_,f){C(_,e,f),A(l,e,null),d(e,n),A(s,e,null),d(e,a),A(u,e,null),d(e,c),A(o,e,null),i=!0},p:S,i(_){i||(k(l.$$.fragment,_),k(s.$$.fragment,_),k(u.$$.fragment,_),k(o.$$.fragment,_),i=!0)},o(_){L(l.$$.fragment,_),L(s.$$.fragment,_),L(u.$$.fragment,_),L(o.$$.fragment,_),i=!1},d(_){_&&j(e),M(l),M(s),M(u),M(o)}}}function Ut(t){return ze(()=>{const e=new IntersectionObserver(l=>{for(let n=0;n<l.length;n++)l[n].isIntersecting&&setTimeout(()=>{l[n].target.classList.add("animated"),e.unobserve(l[n].target)},n*350)});document.querySelectorAll("[data-animate]").forEach(l=>e.observe(l)),scrollTo(0,0)}),[]}class zt extends B{constructor(e){super(),D(this,e,Ut,Ht,O,{})}}new zt({target:document.getElementById("app")});