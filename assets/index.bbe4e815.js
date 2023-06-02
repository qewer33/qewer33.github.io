(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function l(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=l(s);fetch(s.href,a)}})();function I(){}function Me(t,e){for(const l in e)t[l]=e[l];return t}function ze(t){return t()}function we(){return Object.create(null)}function V(t){t.forEach(ze)}function Oe(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let X;function z(t,e){return X||(X=document.createElement("a")),X.href=e,t===X.href}function De(t){return Object.keys(t).length===0}function te(t,e,l,n){if(t){const s=Re(t,e,l,n);return t[0](s)}}function Re(t,e,l,n){return t[1]&&n?Me(l.ctx.slice(),t[1](n(e))):l.ctx}function le(t,e,l,n){if(t[2]&&n){const s=t[2](n(l));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],u=Math.max(e.dirty.length,s.length);for(let c=0;c<u;c+=1)a[c]=e.dirty[c]|s[c];return a}return e.dirty|s}return e.dirty}function ne(t,e,l,n,s,a){if(s){const u=Re(e,l,n,a);t.p(u,s)}}function se(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}function d(t,e){t.appendChild(e)}function S(t,e,l){t.insertBefore(e,l||null)}function L(t){t.parentNode.removeChild(t)}function me(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function m(t){return document.createElement(t)}function U(t){return document.createTextNode(t)}function w(){return U(" ")}function Be(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function r(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Ne(t){return Array.from(t.childNodes)}function Te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}let Q;function J(t){Q=t}function Ue(){if(!Q)throw new Error("Function called outside component initialization");return Q}function He(t){Ue().$$.on_mount.push(t)}const G=[],ue=[],Z=[],fe=[],Fe=Promise.resolve();let de=!1;function Ke(){de||(de=!0,Fe.then(Pe))}function ge(t){Z.push(t)}function We(t){fe.push(t)}const ce=new Set;let Y=0;function Pe(){const t=Q;do{for(;Y<G.length;){const e=G[Y];Y++,J(e),Ge(e.$$)}for(J(null),G.length=0,Y=0;ue.length;)ue.pop()();for(let e=0;e<Z.length;e+=1){const l=Z[e];ce.has(l)||(ce.add(l),l())}Z.length=0}while(G.length);for(;fe.length;)fe.pop()();de=!1,ce.clear(),J(t)}function Ge(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ge)}}const ee=new Set;let N;function ie(){N={r:0,c:[],p:N}}function re(){N.r||V(N.c),N=N.p}function $(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function C(t,e,l,n){if(t&&t.o){if(ee.has(t))return;ee.add(t),N.c.push(()=>{ee.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}function Je(t,e,l){const n=t.$$.props[e];n!==void 0&&(t.$$.bound[n]=l,l(t.$$.ctx[n]))}function O(t){t&&t.c()}function R(t,e,l,n){const{fragment:s,on_mount:a,on_destroy:u,after_update:c}=t.$$;s&&s.m(e,l),n||ge(()=>{const o=a.map(ze).filter(Oe);u?u.push(...o):V(o),t.$$.on_mount=[]}),c.forEach(ge)}function T(t,e){const l=t.$$;l.fragment!==null&&(V(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Qe(t,e){t.$$.dirty[0]===-1&&(G.push(t),Ke(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(t,e,l,n,s,a,u,c=[-1]){const o=Q;J(t);const i=t.$$={fragment:null,ctx:null,props:a,update:I,not_equal:s,bound:we(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:we(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};u&&u(i.root);let p=!1;if(i.ctx=l?l(t,e.props||{},(f,v,...g)=>{const y=g.length?g[0]:v;return i.ctx&&s(i.ctx[f],i.ctx[f]=y)&&(!i.skip_bound&&i.bound[f]&&i.bound[f](y),p&&Qe(t,f)),v}):[],i.update(),p=!0,V(i.before_update),i.fragment=n?n(i.ctx):!1,e.target){if(e.hydrate){const f=Ne(e.target);i.fragment&&i.fragment.l(f),f.forEach(L)}else i.fragment&&i.fragment.c();e.intro&&$(t.$$.fragment),R(t,e.target,e.anchor,e.customElement),Pe()}J(o)}class M{$destroy(){T(this,1),this.$destroy=I}$on(e,l){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!De(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ve="/assets/mouse.46dfd57c.svg",Xe="/assets/github.64869332.svg",Ye="/assets/discord.727f75d7.svg",Ze="/assets/reddit.e05a551f.svg";function et(t){let e,l,n,s,a,u,c,o,i,p,f,v,g,y,h,_,b,H,x,D,q,k,E,F,K,pe,_e,B,he,ve,W,ae,be;return{c(){e=m("main"),l=m("span"),n=w(),s=m("div"),a=m("p"),a.innerHTML='<span style="color: var(--accent-primary);">HI</span> THERE! I&#39;M',u=w(),c=m("p"),c.textContent="qewer",o=w(),i=m("p"),i.textContent="aka. qewer33, qewer3322, qewer3333",p=w(),f=m("ul"),f.innerHTML=`<li class="svelte-wazdp4">developer</li> 
            <li class="svelte-wazdp4">designer</li> 
            <li class="svelte-wazdp4">computer enthusiast</li>`,v=w(),g=m("div"),g.innerHTML=`<a class="button svelte-wazdp4" data-animate="" href="#projects">PROJECTS</a> 
            <a class="button svelte-wazdp4" data-animate="" style="background-color: var(--accent-pink);" href="https://ko-fi.com/qewer" target="_blank" rel="noopener noreferrer">\u2665 DONATE</a>`,y=w(),h=m("div"),_=m("a"),b=m("img"),x=w(),D=m("span"),q=m("img"),E=w(),F=m("a"),K=m("img"),_e=w(),B=m("img"),ve=w(),W=m("p"),W.textContent="SCROLL FOR MORE",r(l,"id","dot"),r(l,"class","svelte-wazdp4"),r(a,"id","title-hi"),r(a,"data-animate",""),r(a,"class","svelte-wazdp4"),r(c,"id","title-name"),r(c,"data-animate",""),r(c,"class","svelte-wazdp4"),r(i,"id","title-aka"),r(i,"data-animate",""),r(i,"class","svelte-wazdp4"),r(f,"id","title-list"),r(f,"data-animate",""),r(f,"class","svelte-wazdp4"),j(g,"display","flex"),j(g,"flex-wrap","wrap"),z(b.src,H=Xe)||r(b,"src",H),r(b,"alt","github"),r(b,"class","svelte-wazdp4"),r(_,"href","https://github.com/qewer33"),r(_,"target","_blank"),r(_,"rel","noopener noreferrer"),z(q.src,k=Ye)||r(q,"src",k),r(q,"alt","discord"),r(q,"class","svelte-wazdp4"),z(K.src,pe=Ze)||r(K,"src",pe),r(K,"alt","reddit"),r(K,"class","svelte-wazdp4"),r(F,"href","https://www.reddit.com/user/qewer3333"),r(F,"target","_blank"),r(F,"rel","noopener noreferrer"),r(h,"id","title-socials"),r(h,"data-animate",""),r(h,"class","svelte-wazdp4"),r(s,"id","title-block"),r(s,"class","svelte-wazdp4"),z(B.src,he=Ve)||r(B,"src",he),r(B,"alt","mouse"),r(B,"id","scroll-img"),r(B,"class","svelte-wazdp4"),r(W,"id","scroll-text"),r(W,"class","svelte-wazdp4"),r(e,"class","section svelte-wazdp4"),r(e,"id","home")},m(oe,Ae){S(oe,e,Ae),d(e,l),d(e,n),d(e,s),d(s,a),d(s,u),d(s,c),d(s,o),d(s,i),d(s,p),d(s,f),d(s,v),d(s,g),d(s,y),d(s,h),d(h,_),d(_,b),d(h,x),d(h,D),d(D,q),d(h,E),d(h,F),d(F,K),d(e,_e),d(e,B),d(e,ve),d(e,W),ae||(be=Be(q,"click",t[0]),ae=!0)},p:I,i:I,o:I,d(oe){oe&&L(e),ae=!1,be()}}}function tt(t){return[l=>{navigator.clipboard.writeText("Qewer#8693");const n=document.createElement("div");n.innerText="COPIED TO CLIPBOARD",n.style.position="absolute";const s=l.target.getBoundingClientRect();n.style.transition="0.3s",n.style.opacity="0",n.style.padding="10px",n.style.color="white",n.style.background="rgba(40, 40, 40, 0.95)",n.style.transform="skew(-12deg)",document.body.appendChild(n),n.style.left=s.left+s.width/2-n.getBoundingClientRect().width/2+"px",n.style.top=s.top-n.getBoundingClientRect().height+"px",setTimeout(()=>{n.style.opacity="1"},100),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{document.body.removeChild(n)},300)},3e3)}]}class lt extends M{constructor(e){super(),A(this,e,tt,et,P,{})}}function nt(t){let e;return{c(){e=m("div"),j(e,"background-color","#999999"),r(e,"class","svelte-1tjozi3")},m(l,n){S(l,e,n)},d(l){l&&L(e)}}}function st(t){let e;return{c(){e=m("div"),j(e,"background-color","#FFC13A"),r(e,"class","svelte-1tjozi3")},m(l,n){S(l,e,n)},d(l){l&&L(e)}}}function it(t){let e;return{c(){e=m("div"),j(e,"background-color","#C53B70"),r(e,"class","svelte-1tjozi3")},m(l,n){S(l,e,n)},d(l){l&&L(e)}}}function rt(t){let e;return{c(){e=m("div"),j(e,"background-color","#ff4500"),r(e,"class","svelte-1tjozi3")},m(l,n){S(l,e,n)},d(l){l&&L(e)}}}function at(t){let e;return{c(){e=m("div"),j(e,"background-color","#4B872F"),r(e,"class","svelte-1tjozi3")},m(l,n){S(l,e,n)},d(l){l&&L(e)}}}function ot(t){let e;return{c(){e=m("div"),j(e,"background-color","#AE2828"),r(e,"class","svelte-1tjozi3")},m(l,n){S(l,e,n)},d(l){l&&L(e)}}}function ct(t){let e;return{c(){e=m("div"),j(e,"background-color","#A58060"),r(e,"class","svelte-1tjozi3")},m(l,n){S(l,e,n)},d(l){l&&L(e)}}}function ut(t){let e,l,n,s,a,u,c,o,i,p=t[0].toUpperCase()+"",f;function v(h,_){return _&1&&(l=null),_&1&&(n=null),_&1&&(s=null),_&1&&(a=null),_&1&&(u=null),_&1&&(c=null),l==null&&(l=h[0].toLowerCase()==="rust"),l?ct:(n==null&&(n=h[0].toLowerCase()==="ruby"),n?ot:(s==null&&(s=h[0].toLowerCase()==="qml"),s?at:(a==null&&(a=h[0].toLowerCase()==="svelte"),a?rt:(u==null&&(u=h[0].toLowerCase()==="p5.js"),u?it:(c==null&&(c=h[0].toLowerCase()==="python"),c?st:nt)))))}let g=v(t,-1),y=g(t);return{c(){e=m("main"),y.c(),o=w(),i=m("p"),f=U(p),r(e,"class","svelte-1tjozi3")},m(h,_){S(h,e,_),y.m(e,null),d(e,o),d(e,i),d(i,f)},p(h,[_]){g!==(g=v(h,_))&&(y.d(1),y=g(h),y&&(y.c(),y.m(e,o))),_&1&&p!==(p=h[0].toUpperCase()+"")&&Te(f,p)},i:I,o:I,d(h){h&&L(e),y.d()}}}function ft(t,e,l){let{language:n=""}=e;return t.$$set=s=>{"language"in s&&l(0,n=s.language)},[n]}class dt extends M{constructor(e){super(),A(this,e,ft,ut,P,{language:0})}}const gt=t=>({}),ke=t=>({}),mt=t=>({}),ye=t=>({});function $e(t){let e,l,n;function s(u){t[6](u)}let a={};return t[0]!==void 0&&(a.language=t[0]),e=new dt({props:a}),ue.push(()=>Je(e,"language",s)),{c(){O(e.$$.fragment)},m(u,c){R(e,u,c),n=!0},p(u,c){const o={};!l&&c&1&&(l=!0,o.language=u[0],We(()=>l=!1)),e.$set(o)},i(u){n||($(e.$$.fragment,u),n=!0)},o(u){C(e.$$.fragment,u),n=!1},d(u){T(e,u)}}}function pt(t){let e,l,n,s,a,u,c,o,i,p,f,v,g,y,h,_,b=t[0]!==""&&$e(t);const H=t[5].description,x=te(H,t,t[4],ye),D=t[5].title,q=te(D,t,t[4],ke);return{c(){e=m("main"),l=m("button"),n=w(),s=m("img"),u=w(),c=m("div"),o=m("div"),i=m("a"),p=U("VISIT"),f=w(),b&&b.c(),v=w(),g=m("p"),x&&x.c(),y=w(),h=m("h1"),q&&q.c(),r(l,"class","svelte-t1d8t0"),z(s.src,a=t[1])||r(s,"src",a),r(s,"alt",""),j(s,"transform","translate(-50%, -50%) scale("+t[2]+")"),r(s,"class","svelte-t1d8t0"),r(i,"class","button"),j(i,"transform","none"),r(i,"href",t[3]),r(i,"target","_blank"),r(i,"rel","noopener noreferrer"),j(o,"display","flex"),r(g,"class","svelte-t1d8t0"),r(h,"class","svelte-t1d8t0"),r(c,"id","content"),r(c,"class","svelte-t1d8t0"),r(e,"data-animate",""),r(e,"class","svelte-t1d8t0")},m(k,E){S(k,e,E),d(e,l),d(e,n),d(e,s),d(e,u),d(e,c),d(c,o),d(o,i),d(i,p),d(o,f),b&&b.m(o,null),d(c,v),d(c,g),x&&x.m(g,null),d(c,y),d(c,h),q&&q.m(h,null),_=!0},p(k,[E]){(!_||E&2&&!z(s.src,a=k[1]))&&r(s,"src",a),(!_||E&4)&&j(s,"transform","translate(-50%, -50%) scale("+k[2]+")"),(!_||E&8)&&r(i,"href",k[3]),k[0]!==""?b?(b.p(k,E),E&1&&$(b,1)):(b=$e(k),b.c(),$(b,1),b.m(o,null)):b&&(ie(),C(b,1,1,()=>{b=null}),re()),x&&x.p&&(!_||E&16)&&ne(x,H,k,k[4],_?le(H,k[4],E,mt):se(k[4]),ye),q&&q.p&&(!_||E&16)&&ne(q,D,k,k[4],_?le(D,k[4],E,gt):se(k[4]),ke)},i(k){_||($(b),$(x,k),$(q,k),_=!0)},o(k){C(b),C(x,k),C(q,k),_=!1},d(k){k&&L(e),b&&b.d(),x&&x.d(k),q&&q.d(k)}}}function _t(t,e,l){let{$$slots:n={},$$scope:s}=e,{thumbnailImage:a=""}=e,{thumbnailScale:u="1"}=e,{visitURL:c=""}=e,{language:o=""}=e;function i(p){o=p,l(0,o)}return t.$$set=p=>{"thumbnailImage"in p&&l(1,a=p.thumbnailImage),"thumbnailScale"in p&&l(2,u=p.thumbnailScale),"visitURL"in p&&l(3,c=p.visitURL),"language"in p&&l(0,o=p.language),"$$scope"in p&&l(4,s=p.$$scope)},[o,a,u,c,s,n,i]}class ht extends M{constructor(e){super(),A(this,e,_t,pt,P,{thumbnailImage:1,thumbnailScale:2,visitURL:3,language:0})}}const vt=[{name:"Exquisite",description:"A new, unique and intuitive window management solution for KDE Plasma!",thumbnailImage:"/static_assets/png/exquisite.png",thumbnailScale:"0.6",url:"https://github.com/qewer33/Exquisite",language:"QML"},{name:"Leaf KDE Plasma Theme",description:"Leaf is a comfy, forest themed, green accent light & dark theme set for your KDE Plasma desktop",thumbnailImage:"/static_assets/png/leaf.png",thumbnailScale:"0.35",url:"https://github.com/qewer33/leaf-kde",language:""},{name:"Clear Clock",description:"ClearClock is a simple, elegant and configurable date/time display for your KDE Plasma desktop",thumbnailImage:"/static_assets/png/clear_clock.png",thumbnailScale:"0.95",url:"https://github.com/qewer33/ClearClock",language:"QML"},{name:"WickedRPS",description:'A battlefield of rocks, papers and scissors. Set up the scene and let them fight! My take on "Living RPS". Click the visit button to play in your browser',thumbnailImage:"https://github.com/qewer33/WickedRPS/blob/main/assets/screenshot.png?raw=true",thumbnailScale:"0.35",url:"https://rps.qewer.dev",language:"p5.js"},{name:"image_collage_filter.py",description:"A python script to create photo mosaics!",thumbnailImage:"/static_assets/png/image_collage_filter.png",thumbnailScale:"0.58",url:"https://github.com/qewer33/image_collage_filter",language:"Python"},{name:"qewer's URL Shortener",description:"A simple URL shortener, built with Rust and Cloudflare Workers",thumbnailImage:"https://raw.githubusercontent.com/qewer33/cloudflare-url-shortener/main/assets/screenshot.png",thumbnailScale:"0.4",url:"https://github.com/qewer33/cloudflare-url-shortener",language:"Rust"},{name:"sus runner",description:"A Chrome dino game clone, except it's kinda sus... Made with Rust and Macroquad to try out gamedev in Rust",thumbnailImage:"/static_assets/png/sus_runner.png",thumbnailScale:"1.4",url:"https://sus.qewer.dev/",language:"Rust"},{name:"This Website",description:"This website is designed by Lynith and developed from scratch by me using Svelte and p5.js",thumbnailImage:"/static_assets/png/website.png",thumbnailScale:"0.35",url:"https://github.com/qewer33/personal-website",language:"Svelte"}],bt={projects:vt};function Le(t,e,l){const n=t.slice();return n[1]=e[l],n}function wt(t){let e,l=t[1].name+"",n;return{c(){e=m("span"),n=U(l),r(e,"slot","title")},m(s,a){S(s,e,a),d(e,n)},p:I,d(s){s&&L(e)}}}function kt(t){let e,l=t[1].description+"",n;return{c(){e=m("span"),n=U(l),r(e,"slot","description")},m(s,a){S(s,e,a),d(e,n)},p:I,d(s){s&&L(e)}}}function Ce(t){let e,l;return e=new ht({props:{thumbnailImage:t[1].thumbnailImage,thumbnailScale:t[1].thumbnailScale,visitURL:t[1].url,language:t[1].language,$$slots:{description:[kt],title:[wt]},$$scope:{ctx:t}}}),{c(){O(e.$$.fragment)},m(n,s){R(e,n,s),l=!0},p(n,s){const a={};s&16&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){l||($(e.$$.fragment,n),l=!0)},o(n){C(e.$$.fragment,n),l=!1},d(n){T(e,n)}}}function yt(t){let e,l,n,s,a,u,c,o=t[0],i=[];for(let f=0;f<o.length;f+=1)i[f]=Ce(Le(t,o,f));const p=f=>C(i[f],1,1,()=>{i[f]=null});return{c(){e=m("main"),l=m("span"),n=w(),s=m("div"),s.innerHTML=`<p data-animate="" id="title-name" class="svelte-1l957pi">projects</p> 
        <p data-animate="" id="title-sub" class="svelte-1l957pi">here are my most notable projects, hover or tap over them to get more info!</p>`,a=w(),u=m("div");for(let f=0;f<i.length;f+=1)i[f].c();r(l,"id","dot"),r(l,"class","svelte-1l957pi"),r(s,"id","title-block"),r(s,"class","svelte-1l957pi"),r(u,"id","cards"),r(u,"class","svelte-1l957pi"),r(e,"class","section svelte-1l957pi"),r(e,"id","projects")},m(f,v){S(f,e,v),d(e,l),d(e,n),d(e,s),d(e,a),d(e,u);for(let g=0;g<i.length;g+=1)i[g].m(u,null);c=!0},p(f,[v]){if(v&1){o=f[0];let g;for(g=0;g<o.length;g+=1){const y=Le(f,o,g);i[g]?(i[g].p(y,v),$(i[g],1)):(i[g]=Ce(y),i[g].c(),$(i[g],1),i[g].m(u,null))}for(ie(),g=o.length;g<i.length;g+=1)p(g);re()}},i(f){if(!c){for(let v=0;v<o.length;v+=1)$(i[v]);c=!0}},o(f){i=i.filter(Boolean);for(let v=0;v<i.length;v+=1)C(i[v]);c=!1},d(f){f&&L(e),me(i,f)}}}function $t(t){return[bt.projects]}class Lt extends M{constructor(e){super(),A(this,e,$t,yt,P,{})}}const Ct=t=>({}),Se=t=>({}),St=t=>({}),qe=t=>({});function qt(t){let e,l,n,s,a,u,c,o,i,p,f;const v=t[2].title,g=te(v,t,t[1],qe),y=t[2].labels,h=te(y,t,t[1],Se);return{c(){e=m("main"),l=m("div"),n=m("h1"),g&&g.c(),s=w(),a=m("div"),u=m("div"),c=w(),o=m("div"),o.innerHTML=`<p style="text-align: left;" class="svelte-1boq14d">BEGINNER</p> 
            <p style="text-align: center;" class="svelte-1boq14d">INTERMEDIATE</p> 
            <p style="text-align: right;" class="svelte-1boq14d">ADVANCED</p>`,i=w(),p=m("div"),h&&h.c(),r(n,"class","svelte-1boq14d"),r(u,"id","progress-bar-fg"),j(u,"width",t[0]+"%"),r(u,"class","svelte-1boq14d"),r(a,"id","progress-bar-bg"),r(a,"class","svelte-1boq14d"),r(o,"id","progress-bar-labels"),r(o,"class","svelte-1boq14d"),r(p,"id","labels"),r(p,"class","svelte-1boq14d"),r(l,"id","content"),r(l,"class","svelte-1boq14d"),r(e,"data-animate",""),r(e,"class","svelte-1boq14d")},m(_,b){S(_,e,b),d(e,l),d(l,n),g&&g.m(n,null),d(l,s),d(l,a),d(a,u),d(l,c),d(l,o),d(l,i),d(l,p),h&&h.m(p,null),f=!0},p(_,[b]){g&&g.p&&(!f||b&2)&&ne(g,v,_,_[1],f?le(v,_[1],b,St):se(_[1]),qe),(!f||b&1)&&j(u,"width",_[0]+"%"),h&&h.p&&(!f||b&2)&&ne(h,y,_,_[1],f?le(y,_[1],b,Ct):se(_[1]),Se)},i(_){f||($(g,_),$(h,_),f=!0)},o(_){C(g,_),C(h,_),f=!1},d(_){_&&L(e),g&&g.d(_),h&&h.d(_)}}}function jt(t,e,l){let{$$slots:n={},$$scope:s}=e,{knowledgeLevel:a=0}=e;return t.$$set=u=>{"knowledgeLevel"in u&&l(0,a=u.knowledgeLevel),"$$scope"in u&&l(1,s=u.$$scope)},[a,s,n]}class It extends M{constructor(e){super(),A(this,e,jt,qt,P,{knowledgeLevel:0})}}function xt(t){let e,l,n,s,a,u=t[1].toUpperCase()+"",c;return{c(){e=m("main"),l=m("img"),s=w(),a=m("p"),c=U(u),z(l.src,n=t[0])||r(l,"src",n),r(l,"alt",""),r(l,"class","svelte-1xk6vlm"),r(e,"class","svelte-1xk6vlm")},m(o,i){S(o,e,i),d(e,l),d(e,s),d(e,a),d(a,c)},p(o,[i]){i&1&&!z(l.src,n=o[0])&&r(l,"src",n),i&2&&u!==(u=o[1].toUpperCase()+"")&&Te(c,u)},i:I,o:I,d(o){o&&L(e)}}}function Et(t,e,l){let{logoImage:n=""}=e,{text:s=""}=e;return t.$$set=a=>{"logoImage"in a&&l(0,n=a.logoImage),"text"in a&&l(1,s=a.text)},[n,s]}class zt extends M{constructor(e){super(),A(this,e,Et,xt,P,{logoImage:0,text:1})}}const Rt=[{name:"Programming & Software Development",knowledgeLevel:85,labels:["rust","python","ruby","bash","qml","neovim","vscode"]},{name:"Linux & Free Software",knowledgeLevel:85,labels:["arch linux","kde","bash"]},{name:"Graphic Design & UI/UX",knowledgeLevel:65,labels:["figma","inkscape","gimp"]},{name:"Web Development",knowledgeLevel:55,labels:["html","css","javascript","svelte"]},{name:"Computer Graphics & Creative Coding",knowledgeLevel:50,labels:["processing","p5.js"]},{name:"Computer Aided Design & 3D Printing",knowledgeLevel:45,labels:["freecad","openscad","kicad","cura"]},{name:"Game Development",knowledgeLevel:35,labels:["godot"]},{name:"PC Building",knowledgeLevel:25,labels:["ryzen 5 5600","radeon rx 6500 xt"]}],Tt={skills:Rt};function je(t,e,l){const n=t.slice();return n[1]=e[l],n}function Ie(t,e,l){const n=t.slice();return n[4]=e[l],n}function Pt(t){let e,l=t[1].name+"",n;return{c(){e=m("span"),n=U(l),r(e,"slot","title")},m(s,a){S(s,e,a),d(e,n)},p:I,d(s){s&&L(e)}}}function xe(t){let e,l;return e=new zt({props:{logoImage:`/static_assets/svg/${t[4]}.svg`,text:t[4]}}),{c(){O(e.$$.fragment)},m(n,s){R(e,n,s),l=!0},p:I,i(n){l||($(e.$$.fragment,n),l=!0)},o(n){C(e.$$.fragment,n),l=!1},d(n){T(e,n)}}}function At(t){let e,l,n,s=t[1].labels,a=[];for(let c=0;c<s.length;c+=1)a[c]=xe(Ie(t,s,c));const u=c=>C(a[c],1,1,()=>{a[c]=null});return{c(){e=m("span");for(let c=0;c<a.length;c+=1)a[c].c();l=w(),r(e,"slot","labels"),j(e,"display","flex"),j(e,"flex-wrap","wrap")},m(c,o){S(c,e,o);for(let i=0;i<a.length;i+=1)a[i].m(e,null);d(e,l),n=!0},p(c,o){if(o&1){s=c[1].labels;let i;for(i=0;i<s.length;i+=1){const p=Ie(c,s,i);a[i]?(a[i].p(p,o),$(a[i],1)):(a[i]=xe(p),a[i].c(),$(a[i],1),a[i].m(e,l))}for(ie(),i=s.length;i<a.length;i+=1)u(i);re()}},i(c){if(!n){for(let o=0;o<s.length;o+=1)$(a[o]);n=!0}},o(c){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)C(a[o]);n=!1},d(c){c&&L(e),me(a,c)}}}function Ee(t){let e,l;return e=new It({props:{knowledgeLevel:t[1].knowledgeLevel,$$slots:{labels:[At],title:[Pt]},$$scope:{ctx:t}}}),{c(){O(e.$$.fragment)},m(n,s){R(e,n,s),l=!0},p(n,s){const a={};s&128&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){l||($(e.$$.fragment,n),l=!0)},o(n){C(e.$$.fragment,n),l=!1},d(n){T(e,n)}}}function Mt(t){let e,l,n,s,a,u,c,o=t[0],i=[];for(let f=0;f<o.length;f+=1)i[f]=Ee(je(t,o,f));const p=f=>C(i[f],1,1,()=>{i[f]=null});return{c(){e=m("main"),l=m("span"),n=w(),s=m("div"),s.innerHTML=`<p id="title-name" data-animate="" class="svelte-1l957pi">skills and interests</p> 
        <p id="title-sub" data-animate="" class="svelte-1l957pi">my skills &amp; knowledge as a computer enthusiast and topics I&#39;m interested in</p>`,a=w(),u=m("div");for(let f=0;f<i.length;f+=1)i[f].c();r(l,"id","dot"),r(l,"class","svelte-1l957pi"),r(s,"id","title-block"),r(s,"class","svelte-1l957pi"),r(u,"id","cards"),r(u,"class","svelte-1l957pi"),r(e,"class","section svelte-1l957pi"),r(e,"id","skills")},m(f,v){S(f,e,v),d(e,l),d(e,n),d(e,s),d(e,a),d(e,u);for(let g=0;g<i.length;g+=1)i[g].m(u,null);c=!0},p(f,[v]){if(v&1){o=f[0];let g;for(g=0;g<o.length;g+=1){const y=je(f,o,g);i[g]?(i[g].p(y,v),$(i[g],1)):(i[g]=Ee(y),i[g].c(),$(i[g],1),i[g].m(u,null))}for(ie(),g=o.length;g<i.length;g+=1)p(g);re()}},i(f){if(!c){for(let v=0;v<o.length;v+=1)$(i[v]);c=!0}},o(f){i=i.filter(Boolean);for(let v=0;v<i.length;v+=1)C(i[v]);c=!1},d(f){f&&L(e),me(i,f)}}}function Ot(t){return[Tt.skills]}class Dt extends M{constructor(e){super(),A(this,e,Ot,Mt,P,{})}}const Bt="/assets/logo_no_bg.1d75a974.png";function Nt(t){let e,l,n,s,a,u,c,o;return{c(){e=m("main"),l=m("span"),n=w(),s=m("div"),a=m("img"),c=w(),o=m("div"),o.innerHTML=`<p class="svelte-rff94b">this website is designed by
                <a href="https://lynithdev.github.io" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">lynith</a>
                and developed by
                <a href="https://github.com/qewer33" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">me (qewer)</a></p> 
            <p class="svelte-rff94b">you can find the source code
                <a href="https://github.com/qewer33/qewer33.github.io" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">here on github</a></p> 
            <p class="svelte-rff94b">licensed under the
                <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">gplv3 free software license</a></p> 
            <p class="svelte-rff94b">if you like my work, please consider
                <a href="https://ko-fi.com/qewer" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">donating</a></p>`,r(l,"id","dot"),r(l,"class","svelte-rff94b"),z(a.src,u=Bt)||r(a,"src",u),r(a,"alt","logo"),r(a,"class","svelte-rff94b"),r(o,"id","text"),r(s,"id","content"),r(s,"class","svelte-rff94b"),r(e,"class","svelte-rff94b")},m(i,p){S(i,e,p),d(e,l),d(e,n),d(e,s),d(s,a),d(s,c),d(s,o)},p:I,i:I,o:I,d(i){i&&L(e)}}}class Ut extends M{constructor(e){super(),A(this,e,null,Nt,P,{})}}function Ht(t){let e,l,n,s,a,u,c,o,i;return l=new lt({}),s=new Lt({}),u=new Dt({}),o=new Ut({}),{c(){e=m("main"),O(l.$$.fragment),n=w(),O(s.$$.fragment),a=w(),O(u.$$.fragment),c=w(),O(o.$$.fragment),r(e,"class","svelte-8ioyzp")},m(p,f){S(p,e,f),R(l,e,null),d(e,n),R(s,e,null),d(e,a),R(u,e,null),d(e,c),R(o,e,null),i=!0},p:I,i(p){i||($(l.$$.fragment,p),$(s.$$.fragment,p),$(u.$$.fragment,p),$(o.$$.fragment,p),i=!0)},o(p){C(l.$$.fragment,p),C(s.$$.fragment,p),C(u.$$.fragment,p),C(o.$$.fragment,p),i=!1},d(p){p&&L(e),T(l),T(s),T(u),T(o)}}}function Ft(t){return He(()=>{const e=new IntersectionObserver(l=>{for(let n=0;n<l.length;n++)l[n].isIntersecting&&setTimeout(()=>{l[n].target.classList.add("animated"),e.unobserve(l[n].target)},n*350)});document.querySelectorAll("[data-animate]").forEach(l=>e.observe(l)),scrollTo(0,0)}),[]}class Kt extends M{constructor(e){super(),A(this,e,Ft,Ht,P,{})}}new Kt({target:document.getElementById("app")});
