(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function l(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=l(s);fetch(s.href,a)}})();function I(){}function Me(t,e){for(const l in e)t[l]=e[l];return t}function Te(t){return t()}function we(){return Object.create(null)}function V(t){t.forEach(Te)}function Oe(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let X;function T(t,e){return X||(X=document.createElement("a")),X.href=e,t===X.href}function De(t){return Object.keys(t).length===0}function te(t,e,l,n){if(t){const s=Re(t,e,l,n);return t[0](s)}}function Re(t,e,l,n){return t[1]&&n?Me(l.ctx.slice(),t[1](n(e))):l.ctx}function le(t,e,l,n){if(t[2]&&n){const s=t[2](n(l));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],u=Math.max(e.dirty.length,s.length);for(let c=0;c<u;c+=1)a[c]=e.dirty[c]|s[c];return a}return e.dirty|s}return e.dirty}function ne(t,e,l,n,s,a){if(s){const u=Re(e,l,n,a);t.p(u,s)}}function se(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}function d(t,e){t.appendChild(e)}function S(t,e,l){t.insertBefore(e,l||null)}function C(t){t.parentNode.removeChild(t)}function me(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function m(t){return document.createElement(t)}function U(t){return document.createTextNode(t)}function b(){return U(" ")}function Be(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function r(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Ne(t){return Array.from(t.childNodes)}function Ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}let W;function Q(t){W=t}function Ue(){if(!W)throw new Error("Function called outside component initialization");return W}function He(t){Ue().$$.on_mount.push(t)}const J=[],ue=[],Z=[],fe=[],Fe=Promise.resolve();let de=!1;function Ke(){de||(de=!0,Fe.then(ze))}function ge(t){Z.push(t)}function Ge(t){fe.push(t)}const ce=new Set;let Y=0;function ze(){const t=W;do{for(;Y<J.length;){const e=J[Y];Y++,Q(e),Je(e.$$)}for(Q(null),J.length=0,Y=0;ue.length;)ue.pop()();for(let e=0;e<Z.length;e+=1){const l=Z[e];ce.has(l)||(ce.add(l),l())}Z.length=0}while(J.length);for(;fe.length;)fe.pop()();de=!1,ce.clear(),Q(t)}function Je(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ge)}}const ee=new Set;let N;function ie(){N={r:0,c:[],p:N}}function re(){N.r||V(N.c),N=N.p}function $(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function L(t,e,l,n){if(t&&t.o){if(ee.has(t))return;ee.add(t),N.c.push(()=>{ee.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}function Qe(t,e,l){const n=t.$$.props[e];n!==void 0&&(t.$$.bound[n]=l,l(t.$$.ctx[n]))}function O(t){t&&t.c()}function R(t,e,l,n){const{fragment:s,on_mount:a,on_destroy:u,after_update:c}=t.$$;s&&s.m(e,l),n||ge(()=>{const o=a.map(Te).filter(Oe);u?u.push(...o):V(o),t.$$.on_mount=[]}),c.forEach(ge)}function A(t,e){const l=t.$$;l.fragment!==null&&(V(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function We(t,e){t.$$.dirty[0]===-1&&(J.push(t),Ke(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(t,e,l,n,s,a,u,c=[-1]){const o=W;Q(t);const i=t.$$={fragment:null,ctx:null,props:a,update:I,not_equal:s,bound:we(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:we(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};u&&u(i.root);let p=!1;if(i.ctx=l?l(t,e.props||{},(f,_,...g)=>{const y=g.length?g[0]:_;return i.ctx&&s(i.ctx[f],i.ctx[f]=y)&&(!i.skip_bound&&i.bound[f]&&i.bound[f](y),p&&We(t,f)),_}):[],i.update(),p=!0,V(i.before_update),i.fragment=n?n(i.ctx):!1,e.target){if(e.hydrate){const f=Ne(e.target);i.fragment&&i.fragment.l(f),f.forEach(C)}else i.fragment&&i.fragment.c();e.intro&&$(t.$$.fragment),R(t,e.target,e.anchor,e.customElement),ze()}Q(o)}class M{$destroy(){A(this,1),this.$destroy=I}$on(e,l){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!De(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ve="/assets/mouse.46dfd57c.svg",Xe="/assets/github.64869332.svg",Ye="/assets/discord.727f75d7.svg",Ze="/assets/reddit.e05a551f.svg";function et(t){let e,l,n,s,a,u,c,o,i,p,f,_,g,y,k,h,v,H,E,D,x,w,q,F,K,pe,_e,B,he,ve,G,ae,be;return{c(){e=m("main"),l=m("span"),n=b(),s=m("div"),a=m("p"),a.innerHTML='<span style="color: var(--accent-primary);">HI</span> THERE! I&#39;M',u=b(),c=m("p"),c.textContent="qewer",o=b(),i=m("p"),i.textContent="aka. qewer33, qewer3322, qewer3333",p=b(),f=m("ul"),f.innerHTML=`<li class="svelte-1ilxrw">developer</li> 
            <li class="svelte-1ilxrw">designer</li> 
            <li class="svelte-1ilxrw">linux enthusiast</li>`,_=b(),g=m("div"),g.innerHTML=`<a class="button svelte-1ilxrw" data-animate="" href="#projects">PROJECTS</a> 
            <a class="button svelte-1ilxrw" data-animate="" style="background-color: var(--accent-pink);" href="https://ko-fi.com/qewer" target="_blank" rel="noopener noreferrer">\u2665 DONATE</a>`,y=b(),k=m("div"),h=m("a"),v=m("img"),E=b(),D=m("span"),x=m("img"),q=b(),F=m("a"),K=m("img"),_e=b(),B=m("img"),ve=b(),G=m("p"),G.textContent="SCROLL FOR MORE",r(l,"id","dot"),r(l,"class","svelte-1ilxrw"),r(a,"id","title-hi"),r(a,"data-animate",""),r(a,"class","svelte-1ilxrw"),r(c,"id","title-name"),r(c,"data-animate",""),r(c,"class","svelte-1ilxrw"),r(i,"id","title-aka"),r(i,"data-animate",""),r(i,"class","svelte-1ilxrw"),r(f,"id","title-list"),r(f,"data-animate",""),r(f,"class","svelte-1ilxrw"),j(g,"display","flex"),T(v.src,H=Xe)||r(v,"src",H),r(v,"alt","github"),r(v,"class","svelte-1ilxrw"),r(h,"href","https://github.com/qewer33"),r(h,"target","_blank"),r(h,"rel","noopener noreferrer"),T(x.src,w=Ye)||r(x,"src",w),r(x,"alt","discord"),r(x,"class","svelte-1ilxrw"),T(K.src,pe=Ze)||r(K,"src",pe),r(K,"alt","reddit"),r(K,"class","svelte-1ilxrw"),r(F,"href","https://www.reddit.com/user/qewer3333"),r(F,"target","_blank"),r(F,"rel","noopener noreferrer"),r(k,"id","title-socials"),r(k,"data-animate",""),r(k,"class","svelte-1ilxrw"),r(s,"id","title-block"),r(s,"class","svelte-1ilxrw"),T(B.src,he=Ve)||r(B,"src",he),r(B,"alt","mouse"),r(B,"id","scroll-img"),r(B,"class","svelte-1ilxrw"),r(G,"id","scroll-text"),r(G,"class","svelte-1ilxrw"),r(e,"class","section svelte-1ilxrw"),r(e,"id","home")},m(oe,Pe){S(oe,e,Pe),d(e,l),d(e,n),d(e,s),d(s,a),d(s,u),d(s,c),d(s,o),d(s,i),d(s,p),d(s,f),d(s,_),d(s,g),d(s,y),d(s,k),d(k,h),d(h,v),d(k,E),d(k,D),d(D,x),d(k,q),d(k,F),d(F,K),d(e,_e),d(e,B),d(e,ve),d(e,G),ae||(be=Be(x,"click",t[0]),ae=!0)},p:I,i:I,o:I,d(oe){oe&&C(e),ae=!1,be()}}}function tt(t){return[l=>{navigator.clipboard.writeText("Qewer#8693");const n=document.createElement("div");n.innerText="COPIED TO CLIPBOARD",n.style.position="absolute";const s=l.target.getBoundingClientRect();n.style.transition="0.3s",n.style.opacity="0",n.style.padding="10px",n.style.color="white",n.style.background="rgba(40, 40, 40, 0.95)",n.style.transform="skew(-12deg)",document.body.appendChild(n),n.style.left=s.left+s.width/2-n.getBoundingClientRect().width/2+"px",n.style.top=s.top-n.getBoundingClientRect().height+"px",setTimeout(()=>{n.style.opacity="1"},100),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{document.body.removeChild(n)},300)},3e3)}]}class lt extends M{constructor(e){super(),P(this,e,tt,et,z,{})}}function nt(t){let e;return{c(){e=m("div"),j(e,"background-color","#999999"),r(e,"class","svelte-1tjozi3")},m(l,n){S(l,e,n)},d(l){l&&C(e)}}}function st(t){let e;return{c(){e=m("div"),j(e,"background-color","#ff4500"),r(e,"class","svelte-1tjozi3")},m(l,n){S(l,e,n)},d(l){l&&C(e)}}}function it(t){let e;return{c(){e=m("div"),j(e,"background-color","#4B872F"),r(e,"class","svelte-1tjozi3")},m(l,n){S(l,e,n)},d(l){l&&C(e)}}}function rt(t){let e;return{c(){e=m("div"),j(e,"background-color","#AE2828"),r(e,"class","svelte-1tjozi3")},m(l,n){S(l,e,n)},d(l){l&&C(e)}}}function at(t){let e;return{c(){e=m("div"),j(e,"background-color","#A58060"),r(e,"class","svelte-1tjozi3")},m(l,n){S(l,e,n)},d(l){l&&C(e)}}}function ot(t){let e,l,n,s,a,u,c,o=t[0].toUpperCase()+"",i;function p(g,y){return y&1&&(l=null),y&1&&(n=null),y&1&&(s=null),y&1&&(a=null),l==null&&(l=g[0].toLowerCase()==="rust"),l?at:(n==null&&(n=g[0].toLowerCase()==="ruby"),n?rt:(s==null&&(s=g[0].toLowerCase()==="qml"),s?it:(a==null&&(a=g[0].toLowerCase()==="svelte"),a?st:nt)))}let f=p(t,-1),_=f(t);return{c(){e=m("main"),_.c(),u=b(),c=m("p"),i=U(o),r(e,"class","svelte-1tjozi3")},m(g,y){S(g,e,y),_.m(e,null),d(e,u),d(e,c),d(c,i)},p(g,[y]){f!==(f=p(g,y))&&(_.d(1),_=f(g),_&&(_.c(),_.m(e,u))),y&1&&o!==(o=g[0].toUpperCase()+"")&&Ae(i,o)},i:I,o:I,d(g){g&&C(e),_.d()}}}function ct(t,e,l){let{language:n=""}=e;return t.$$set=s=>{"language"in s&&l(0,n=s.language)},[n]}class ut extends M{constructor(e){super(),P(this,e,ct,ot,z,{language:0})}}const ft=t=>({}),ye=t=>({}),dt=t=>({}),ke=t=>({});function $e(t){let e,l,n;function s(u){t[6](u)}let a={};return t[0]!==void 0&&(a.language=t[0]),e=new ut({props:a}),ue.push(()=>Qe(e,"language",s)),{c(){O(e.$$.fragment)},m(u,c){R(e,u,c),n=!0},p(u,c){const o={};!l&&c&1&&(l=!0,o.language=u[0],Ge(()=>l=!1)),e.$set(o)},i(u){n||($(e.$$.fragment,u),n=!0)},o(u){L(e.$$.fragment,u),n=!1},d(u){A(e,u)}}}function gt(t){let e,l,n,s,a,u,c,o,i,p,f,_,g,y,k,h,v=t[0]!==""&&$e(t);const H=t[5].description,E=te(H,t,t[4],ke),D=t[5].title,x=te(D,t,t[4],ye);return{c(){e=m("main"),l=m("button"),n=b(),s=m("img"),u=b(),c=m("div"),o=m("div"),i=m("a"),p=U("VISIT"),f=b(),v&&v.c(),_=b(),g=m("p"),E&&E.c(),y=b(),k=m("h1"),x&&x.c(),r(l,"class","svelte-t1d8t0"),T(s.src,a=t[1])||r(s,"src",a),r(s,"alt",""),j(s,"transform","translate(-50%, -50%) scale("+t[2]+")"),r(s,"class","svelte-t1d8t0"),r(i,"class","button"),j(i,"transform","none"),r(i,"href",t[3]),r(i,"target","_blank"),r(i,"rel","noopener noreferrer"),j(o,"display","flex"),r(g,"class","svelte-t1d8t0"),r(k,"class","svelte-t1d8t0"),r(c,"id","content"),r(c,"class","svelte-t1d8t0"),r(e,"data-animate",""),r(e,"class","svelte-t1d8t0")},m(w,q){S(w,e,q),d(e,l),d(e,n),d(e,s),d(e,u),d(e,c),d(c,o),d(o,i),d(i,p),d(o,f),v&&v.m(o,null),d(c,_),d(c,g),E&&E.m(g,null),d(c,y),d(c,k),x&&x.m(k,null),h=!0},p(w,[q]){(!h||q&2&&!T(s.src,a=w[1]))&&r(s,"src",a),(!h||q&4)&&j(s,"transform","translate(-50%, -50%) scale("+w[2]+")"),(!h||q&8)&&r(i,"href",w[3]),w[0]!==""?v?(v.p(w,q),q&1&&$(v,1)):(v=$e(w),v.c(),$(v,1),v.m(o,null)):v&&(ie(),L(v,1,1,()=>{v=null}),re()),E&&E.p&&(!h||q&16)&&ne(E,H,w,w[4],h?le(H,w[4],q,dt):se(w[4]),ke),x&&x.p&&(!h||q&16)&&ne(x,D,w,w[4],h?le(D,w[4],q,ft):se(w[4]),ye)},i(w){h||($(v),$(E,w),$(x,w),h=!0)},o(w){L(v),L(E,w),L(x,w),h=!1},d(w){w&&C(e),v&&v.d(),E&&E.d(w),x&&x.d(w)}}}function mt(t,e,l){let{$$slots:n={},$$scope:s}=e,{thumbnailImage:a=""}=e,{thumbnailScale:u="1"}=e,{visitURL:c=""}=e,{language:o=""}=e;function i(p){o=p,l(0,o)}return t.$$set=p=>{"thumbnailImage"in p&&l(1,a=p.thumbnailImage),"thumbnailScale"in p&&l(2,u=p.thumbnailScale),"visitURL"in p&&l(3,c=p.visitURL),"language"in p&&l(0,o=p.language),"$$scope"in p&&l(4,s=p.$$scope)},[o,a,u,c,s,n,i]}class pt extends M{constructor(e){super(),P(this,e,mt,gt,z,{thumbnailImage:1,thumbnailScale:2,visitURL:3,language:0})}}const _t=[{name:"Exquisite",description:"A new, unique and intuitive window management solution for KDE Plasma!",thumbnailImage:"/static_assets/png/exquisite.png",thumbnailScale:"0.6",url:"https://github.com/qewer33/Exquisite",language:"QML"},{name:"Leaf KDE Plasma Theme",description:"Leaf is a comfy, forest themed, green accent light & dark theme set for your KDE Plasma desktop",thumbnailImage:"/static_assets/png/leaf.png",thumbnailScale:"0.35",url:"https://github.com/qewer33/leaf-kde",language:""},{name:"Clear Clock",description:"ClearClock is a simple, elegant and configurable date/time display for your KDE Plasma desktop",thumbnailImage:"/static_assets/png/clear_clock.png",thumbnailScale:"0.95",url:"https://github.com/qewer33/ClearClock",language:"QML"},{name:"qewer's URL Shortener",description:"A simple URL shortener, built with Rust and Cloudflare Workers",thumbnailImage:"https://raw.githubusercontent.com/qewer33/cloudflare-url-shortener/main/assets/screenshot.png",thumbnailScale:"0.4",url:"https://github.com/qewer33/cloudflare-url-shortener",language:"Rust"},{name:"ascii_table_creator_3000",description:"An interactive Ruby program that allows you to create text tables right in your terminal!",thumbnailImage:"/static_assets/png/ascii_table_creator_3000.png",thumbnailScale:"1.1",url:"https://github.com/qewer33/ascii_table_creator_3000",language:"Ruby"},{name:"sus runner",description:"A Chrome dino game clone, except it's kinda sus... Made with Rust and Macroquad to try out gamedev in Rust",thumbnailImage:"/static_assets/png/sus_runner.png",thumbnailScale:"1.4",url:"https://sus.qewer.dev/",language:"Rust"},{name:"This Website",description:"This website is designed by Lynith and developed from scratch by me using Svelte and p5.js",thumbnailImage:"/static_assets/png/website.png",thumbnailScale:"0.35",url:"https://github.com/qewer33/personal-website",language:"Svelte"}],ht={projects:_t};function Le(t,e,l){const n=t.slice();return n[1]=e[l],n}function vt(t){let e,l=t[1].name+"",n;return{c(){e=m("span"),n=U(l),r(e,"slot","title")},m(s,a){S(s,e,a),d(e,n)},p:I,d(s){s&&C(e)}}}function bt(t){let e,l=t[1].description+"",n;return{c(){e=m("span"),n=U(l),r(e,"slot","description")},m(s,a){S(s,e,a),d(e,n)},p:I,d(s){s&&C(e)}}}function xe(t){let e,l;return e=new pt({props:{thumbnailImage:t[1].thumbnailImage,thumbnailScale:t[1].thumbnailScale,visitURL:t[1].url,language:t[1].language,$$slots:{description:[bt],title:[vt]},$$scope:{ctx:t}}}),{c(){O(e.$$.fragment)},m(n,s){R(e,n,s),l=!0},p(n,s){const a={};s&16&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){l||($(e.$$.fragment,n),l=!0)},o(n){L(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function wt(t){let e,l,n,s,a,u,c,o=t[0],i=[];for(let f=0;f<o.length;f+=1)i[f]=xe(Le(t,o,f));const p=f=>L(i[f],1,1,()=>{i[f]=null});return{c(){e=m("main"),l=m("span"),n=b(),s=m("div"),s.innerHTML=`<p data-animate="" id="title-name" class="svelte-1l957pi">projects</p> 
        <p data-animate="" id="title-sub" class="svelte-1l957pi">here are my most notable projects, hover or tap over them to get more info!</p>`,a=b(),u=m("div");for(let f=0;f<i.length;f+=1)i[f].c();r(l,"id","dot"),r(l,"class","svelte-1l957pi"),r(s,"id","title-block"),r(s,"class","svelte-1l957pi"),r(u,"id","cards"),r(u,"class","svelte-1l957pi"),r(e,"class","section svelte-1l957pi"),r(e,"id","projects")},m(f,_){S(f,e,_),d(e,l),d(e,n),d(e,s),d(e,a),d(e,u);for(let g=0;g<i.length;g+=1)i[g].m(u,null);c=!0},p(f,[_]){if(_&1){o=f[0];let g;for(g=0;g<o.length;g+=1){const y=Le(f,o,g);i[g]?(i[g].p(y,_),$(i[g],1)):(i[g]=xe(y),i[g].c(),$(i[g],1),i[g].m(u,null))}for(ie(),g=o.length;g<i.length;g+=1)p(g);re()}},i(f){if(!c){for(let _=0;_<o.length;_+=1)$(i[_]);c=!0}},o(f){i=i.filter(Boolean);for(let _=0;_<i.length;_+=1)L(i[_]);c=!1},d(f){f&&C(e),me(i,f)}}}function yt(t){return[ht.projects]}class kt extends M{constructor(e){super(),P(this,e,yt,wt,z,{})}}const $t=t=>({}),Ce=t=>({}),Lt=t=>({}),Se=t=>({});function xt(t){let e,l,n,s,a,u,c,o,i,p,f;const _=t[2].title,g=te(_,t,t[1],Se),y=t[2].labels,k=te(y,t,t[1],Ce);return{c(){e=m("main"),l=m("div"),n=m("h1"),g&&g.c(),s=b(),a=m("div"),u=m("div"),c=b(),o=m("div"),o.innerHTML=`<p style="text-align: left;" class="svelte-1aczphv">BEGINNER</p> 
            <p style="text-align: center;" class="svelte-1aczphv">INTERMEDIATE</p> 
            <p style="text-align: right;" class="svelte-1aczphv">ADVANCED</p>`,i=b(),p=m("div"),k&&k.c(),r(n,"class","svelte-1aczphv"),r(u,"id","progress-bar-fg"),j(u,"width",t[0]+"%"),r(u,"class","svelte-1aczphv"),r(a,"id","progress-bar-bg"),r(a,"class","svelte-1aczphv"),r(o,"id","progress-bar-labels"),r(o,"class","svelte-1aczphv"),r(p,"id","labels"),r(p,"class","svelte-1aczphv"),r(l,"id","content"),r(l,"class","svelte-1aczphv"),r(e,"data-animate",""),r(e,"class","svelte-1aczphv")},m(h,v){S(h,e,v),d(e,l),d(l,n),g&&g.m(n,null),d(l,s),d(l,a),d(a,u),d(l,c),d(l,o),d(l,i),d(l,p),k&&k.m(p,null),f=!0},p(h,[v]){g&&g.p&&(!f||v&2)&&ne(g,_,h,h[1],f?le(_,h[1],v,Lt):se(h[1]),Se),(!f||v&1)&&j(u,"width",h[0]+"%"),k&&k.p&&(!f||v&2)&&ne(k,y,h,h[1],f?le(y,h[1],v,$t):se(h[1]),Ce)},i(h){f||($(g,h),$(k,h),f=!0)},o(h){L(g,h),L(k,h),f=!1},d(h){h&&C(e),g&&g.d(h),k&&k.d(h)}}}function Ct(t,e,l){let{$$slots:n={},$$scope:s}=e,{knowledgeLevel:a=0}=e;return t.$$set=u=>{"knowledgeLevel"in u&&l(0,a=u.knowledgeLevel),"$$scope"in u&&l(1,s=u.$$scope)},[a,s,n]}class St extends M{constructor(e){super(),P(this,e,Ct,xt,z,{knowledgeLevel:0})}}function It(t){let e,l,n,s,a,u=t[1].toUpperCase()+"",c;return{c(){e=m("main"),l=m("img"),s=b(),a=m("p"),c=U(u),T(l.src,n=t[0])||r(l,"src",n),r(l,"alt",""),r(l,"class","svelte-16cuvyh"),r(e,"class","svelte-16cuvyh")},m(o,i){S(o,e,i),d(e,l),d(e,s),d(e,a),d(a,c)},p(o,[i]){i&1&&!T(l.src,n=o[0])&&r(l,"src",n),i&2&&u!==(u=o[1].toUpperCase()+"")&&Ae(c,u)},i:I,o:I,d(o){o&&C(e)}}}function Et(t,e,l){let{logoImage:n=""}=e,{text:s=""}=e;return t.$$set=a=>{"logoImage"in a&&l(0,n=a.logoImage),"text"in a&&l(1,s=a.text)},[n,s]}class qt extends M{constructor(e){super(),P(this,e,Et,It,z,{logoImage:0,text:1})}}const jt=[{name:"Programming & Software Development",knowledgeLevel:85,labels:["rust","ruby","bash","qml","neovim","vscode"]},{name:"Linux & Free Software",knowledgeLevel:85,labels:["arch linux","kde","bash"]},{name:"Graphic Design & UI/UX",knowledgeLevel:65,labels:["figma","inkscape","gimp"]},{name:"Web Development",knowledgeLevel:55,labels:["html","css","javascript","svelte"]},{name:"Computer Graphics & Creative Coding",knowledgeLevel:50,labels:["processing","p5.js"]},{name:"Computer Aided Design & 3D Printing",knowledgeLevel:45,labels:["freecad","openscad","kicad","cura"]},{name:"Game Development",knowledgeLevel:35,labels:["godot"]},{name:"PC Building",knowledgeLevel:25,labels:["ryzen 5 5600","radeon rx 6500 xt"]}],Tt={skills:jt};function Ie(t,e,l){const n=t.slice();return n[1]=e[l],n}function Ee(t,e,l){const n=t.slice();return n[4]=e[l],n}function Rt(t){let e,l=t[1].name+"",n;return{c(){e=m("span"),n=U(l),r(e,"slot","title")},m(s,a){S(s,e,a),d(e,n)},p:I,d(s){s&&C(e)}}}function qe(t){let e,l;return e=new qt({props:{logoImage:`/static_assets/svg/${t[4]}.svg`,text:t[4]}}),{c(){O(e.$$.fragment)},m(n,s){R(e,n,s),l=!0},p:I,i(n){l||($(e.$$.fragment,n),l=!0)},o(n){L(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function At(t){let e,l,n,s=t[1].labels,a=[];for(let c=0;c<s.length;c+=1)a[c]=qe(Ee(t,s,c));const u=c=>L(a[c],1,1,()=>{a[c]=null});return{c(){e=m("span");for(let c=0;c<a.length;c+=1)a[c].c();l=b(),r(e,"slot","labels"),j(e,"display","flex"),j(e,"flex-wrap","wrap")},m(c,o){S(c,e,o);for(let i=0;i<a.length;i+=1)a[i].m(e,null);d(e,l),n=!0},p(c,o){if(o&1){s=c[1].labels;let i;for(i=0;i<s.length;i+=1){const p=Ee(c,s,i);a[i]?(a[i].p(p,o),$(a[i],1)):(a[i]=qe(p),a[i].c(),$(a[i],1),a[i].m(e,l))}for(ie(),i=s.length;i<a.length;i+=1)u(i);re()}},i(c){if(!n){for(let o=0;o<s.length;o+=1)$(a[o]);n=!0}},o(c){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)L(a[o]);n=!1},d(c){c&&C(e),me(a,c)}}}function je(t){let e,l;return e=new St({props:{knowledgeLevel:t[1].knowledgeLevel,$$slots:{labels:[At],title:[Rt]},$$scope:{ctx:t}}}),{c(){O(e.$$.fragment)},m(n,s){R(e,n,s),l=!0},p(n,s){const a={};s&128&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){l||($(e.$$.fragment,n),l=!0)},o(n){L(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function zt(t){let e,l,n,s,a,u,c,o=t[0],i=[];for(let f=0;f<o.length;f+=1)i[f]=je(Ie(t,o,f));const p=f=>L(i[f],1,1,()=>{i[f]=null});return{c(){e=m("main"),l=m("span"),n=b(),s=m("div"),s.innerHTML=`<p id="title-name" data-animate="" class="svelte-1l957pi">skills and interests</p> 
        <p id="title-sub" data-animate="" class="svelte-1l957pi">my skills &amp; knowledge as a computer enthusiast and topics I&#39;m interested in</p>`,a=b(),u=m("div");for(let f=0;f<i.length;f+=1)i[f].c();r(l,"id","dot"),r(l,"class","svelte-1l957pi"),r(s,"id","title-block"),r(s,"class","svelte-1l957pi"),r(u,"id","cards"),r(u,"class","svelte-1l957pi"),r(e,"class","section svelte-1l957pi"),r(e,"id","skills")},m(f,_){S(f,e,_),d(e,l),d(e,n),d(e,s),d(e,a),d(e,u);for(let g=0;g<i.length;g+=1)i[g].m(u,null);c=!0},p(f,[_]){if(_&1){o=f[0];let g;for(g=0;g<o.length;g+=1){const y=Ie(f,o,g);i[g]?(i[g].p(y,_),$(i[g],1)):(i[g]=je(y),i[g].c(),$(i[g],1),i[g].m(u,null))}for(ie(),g=o.length;g<i.length;g+=1)p(g);re()}},i(f){if(!c){for(let _=0;_<o.length;_+=1)$(i[_]);c=!0}},o(f){i=i.filter(Boolean);for(let _=0;_<i.length;_+=1)L(i[_]);c=!1},d(f){f&&C(e),me(i,f)}}}function Pt(t){return[Tt.skills]}class Mt extends M{constructor(e){super(),P(this,e,Pt,zt,z,{})}}const Ot="/assets/logo_no_bg.1d75a974.png";function Dt(t){let e,l,n,s,a,u,c,o;return{c(){e=m("main"),l=m("span"),n=b(),s=m("div"),a=m("img"),c=b(),o=m("div"),o.innerHTML=`<p class="svelte-rff94b">this website is designed by
                <a href="https://lynithdev.github.io" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">lynith</a>
                and developed by
                <a href="https://github.com/qewer33" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">me (qewer)</a></p> 
            <p class="svelte-rff94b">you can find the source code
                <a href="https://github.com/qewer33/qewer33.github.io" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">here on github</a></p> 
            <p class="svelte-rff94b">licensed under the
                <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">gplv3 free software license</a></p> 
            <p class="svelte-rff94b">if you like my work, please consider
                <a href="https://ko-fi.com/qewer" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">donating</a></p>`,r(l,"id","dot"),r(l,"class","svelte-rff94b"),T(a.src,u=Ot)||r(a,"src",u),r(a,"alt","logo"),r(a,"class","svelte-rff94b"),r(o,"id","text"),r(s,"id","content"),r(s,"class","svelte-rff94b"),r(e,"class","svelte-rff94b")},m(i,p){S(i,e,p),d(e,l),d(e,n),d(e,s),d(s,a),d(s,c),d(s,o)},p:I,i:I,o:I,d(i){i&&C(e)}}}class Bt extends M{constructor(e){super(),P(this,e,null,Dt,z,{})}}function Nt(t){let e,l,n,s,a,u,c,o,i;return l=new lt({}),s=new kt({}),u=new Mt({}),o=new Bt({}),{c(){e=m("main"),O(l.$$.fragment),n=b(),O(s.$$.fragment),a=b(),O(u.$$.fragment),c=b(),O(o.$$.fragment),r(e,"class","svelte-8ioyzp")},m(p,f){S(p,e,f),R(l,e,null),d(e,n),R(s,e,null),d(e,a),R(u,e,null),d(e,c),R(o,e,null),i=!0},p:I,i(p){i||($(l.$$.fragment,p),$(s.$$.fragment,p),$(u.$$.fragment,p),$(o.$$.fragment,p),i=!0)},o(p){L(l.$$.fragment,p),L(s.$$.fragment,p),L(u.$$.fragment,p),L(o.$$.fragment,p),i=!1},d(p){p&&C(e),A(l),A(s),A(u),A(o)}}}function Ut(t){return He(()=>{const e=new IntersectionObserver(l=>{for(let n=0;n<l.length;n++)l[n].isIntersecting&&setTimeout(()=>{l[n].target.classList.add("animated"),e.unobserve(l[n].target)},n*350)});document.querySelectorAll("[data-animate]").forEach(l=>e.observe(l)),scrollTo(0,0)}),[]}class Ht extends M{constructor(e){super(),P(this,e,Ut,Nt,z,{})}}new Ht({target:document.getElementById("app")});