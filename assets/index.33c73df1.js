(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=l(s);fetch(s.href,a)}})();function x(){}function De(t,e){for(const l in e)t[l]=e[l];return t}function ze(t){return t()}function ye(){return Object.create(null)}function V(t){t.forEach(ze)}function Oe(t){return typeof t=="function"}function A(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let X;function O(t,e){return X||(X=document.createElement("a")),X.href=e,t===X.href}function Me(t){return Object.keys(t).length===0}function te(t,e,l,n){if(t){const s=Te(t,e,l,n);return t[0](s)}}function Te(t,e,l,n){return t[1]&&n?De(l.ctx.slice(),t[1](n(e))):l.ctx}function le(t,e,l,n){if(t[2]&&n){const s=t[2](n(l));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],o=Math.max(e.dirty.length,s.length);for(let c=0;c<o;c+=1)a[c]=e.dirty[c]|s[c];return a}return e.dirty|s}return e.dirty}function ne(t,e,l,n,s,a){if(s){const o=Te(e,l,n,a);t.p(o,s)}}function se(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}function f(t,e){t.appendChild(e)}function C(t,e,l){t.insertBefore(e,l||null)}function S(t){t.parentNode.removeChild(t)}function me(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function m(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function b(){return M(" ")}function Be(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function r(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Ue(t){return Array.from(t.childNodes)}function Ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}let Q;function J(t){Q=t}function Ne(){if(!Q)throw new Error("Function called outside component initialization");return Q}function He(t){Ne().$$.on_mount.push(t)}const W=[],ue=[],Z=[],fe=[],Fe=Promise.resolve();let de=!1;function Ge(){de||(de=!0,Fe.then(Re))}function ge(t){Z.push(t)}function Ke(t){fe.push(t)}const ce=new Set;let Y=0;function Re(){const t=Q;do{for(;Y<W.length;){const e=W[Y];Y++,J(e),We(e.$$)}for(J(null),W.length=0,Y=0;ue.length;)ue.pop()();for(let e=0;e<Z.length;e+=1){const l=Z[e];ce.has(l)||(ce.add(l),l())}Z.length=0}while(W.length);for(;fe.length;)fe.pop()();de=!1,ce.clear(),J(t)}function We(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ge)}}const ee=new Set;let N;function ae(){N={r:0,c:[],p:N}}function ie(){N.r||V(N.c),N=N.p}function k(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function $(t,e,l,n){if(t&&t.o){if(ee.has(t))return;ee.add(t),N.c.push(()=>{ee.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}function Je(t,e,l){const n=t.$$.props[e];n!==void 0&&(t.$$.bound[n]=l,l(t.$$.ctx[n]))}function D(t){t&&t.c()}function z(t,e,l,n){const{fragment:s,on_mount:a,on_destroy:o,after_update:c}=t.$$;s&&s.m(e,l),n||ge(()=>{const u=a.map(ze).filter(Oe);o?o.push(...u):V(u),t.$$.on_mount=[]}),c.forEach(ge)}function T(t,e){const l=t.$$;l.fragment!==null&&(V(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Qe(t,e){t.$$.dirty[0]===-1&&(W.push(t),Ge(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,l,n,s,a,o,c=[-1]){const u=Q;J(t);const i=t.$$={fragment:null,ctx:null,props:a,update:x,not_equal:s,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:ye(),dirty:c,skip_bound:!1,root:e.target||u.$$.root};o&&o(i.root);let h=!1;if(i.ctx=l?l(t,e.props||{},(d,p,...g)=>{const q=g.length?g[0]:p;return i.ctx&&s(i.ctx[d],i.ctx[d]=q)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](q),h&&Qe(t,d)),p}):[],i.update(),h=!0,V(i.before_update),i.fragment=n?n(i.ctx):!1,e.target){if(e.hydrate){const d=Ue(e.target);i.fragment&&i.fragment.l(d),d.forEach(S)}else i.fragment&&i.fragment.c();e.intro&&k(t.$$.fragment),z(t,e.target,e.anchor,e.customElement),Re()}J(u)}class P{$destroy(){T(this,1),this.$destroy=x}$on(e,l){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Me(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ve="/assets/mouse.46dfd57c.svg",Xe="/assets/github.64869332.svg",Ye="/assets/discord.727f75d7.svg",Ze="/assets/reddit.e05a551f.svg";function et(t){let e,l,n,s,a,o,c,u,i,h,d,p,g,q,w,_,v,H,I,B,L,y,j,F,G,pe,he,U,_e,ve,K,re,be;return{c(){e=m("main"),l=m("span"),n=b(),s=m("div"),a=m("p"),a.innerHTML='<span style="color: var(--accent-primary);">HI</span> THERE! I&#39;M',o=b(),c=m("p"),c.textContent="qewer",u=b(),i=m("p"),i.textContent="aka. qewer33, qewer3322, qewer3333",h=b(),d=m("ul"),d.innerHTML=`<li class="svelte-1di1myz">developer</li> 
            <li class="svelte-1di1myz">designer</li> 
            <li class="svelte-1di1myz">computer enthusiast</li>`,p=b(),g=m("div"),g.innerHTML=`<a class="button svelte-1di1myz" data-animate="" href="#projects">PROJECTS</a> 
            <a class="button svelte-1di1myz" data-animate="" style="background-color: var(--accent-pink);" id="donate-button" href="https://ko-fi.com/qewer" target="_blank" rel="noopener noreferrer">\u2665 DONATE</a>`,q=b(),w=m("div"),_=m("a"),v=m("img"),I=b(),B=m("span"),L=m("img"),j=b(),F=m("a"),G=m("img"),he=b(),U=m("img"),ve=b(),K=m("p"),K.textContent="SCROLL FOR MORE",r(l,"id","dot"),r(l,"class","svelte-1di1myz"),r(a,"id","title-hi"),r(a,"data-animate",""),r(a,"class","svelte-1di1myz"),r(c,"id","title-name"),r(c,"data-animate",""),r(c,"class","svelte-1di1myz"),r(i,"id","title-aka"),r(i,"data-animate",""),r(i,"class","svelte-1di1myz"),r(d,"id","title-list"),r(d,"data-animate",""),r(d,"class","svelte-1di1myz"),E(g,"display","flex"),E(g,"flex-wrap","wrap"),O(v.src,H=Xe)||r(v,"src",H),r(v,"alt","github"),r(v,"class","svelte-1di1myz"),r(_,"href","https://github.com/qewer33"),r(_,"target","_blank"),r(_,"rel","noopener noreferrer"),O(L.src,y=Ye)||r(L,"src",y),r(L,"alt","discord"),r(L,"class","svelte-1di1myz"),O(G.src,pe=Ze)||r(G,"src",pe),r(G,"alt","reddit"),r(G,"class","svelte-1di1myz"),r(F,"href","https://www.reddit.com/user/qewer3333"),r(F,"target","_blank"),r(F,"rel","noopener noreferrer"),r(w,"id","title-socials"),r(w,"data-animate",""),r(w,"class","svelte-1di1myz"),r(s,"id","title-block"),r(s,"class","svelte-1di1myz"),O(U.src,_e=Ve)||r(U,"src",_e),r(U,"alt","mouse"),r(U,"id","scroll-img"),r(U,"class","svelte-1di1myz"),r(K,"id","scroll-text"),r(K,"class","svelte-1di1myz"),r(e,"class","section svelte-1di1myz"),r(e,"id","home")},m(oe,Pe){C(oe,e,Pe),f(e,l),f(e,n),f(e,s),f(s,a),f(s,o),f(s,c),f(s,u),f(s,i),f(s,h),f(s,d),f(s,p),f(s,g),f(s,q),f(s,w),f(w,_),f(_,v),f(w,I),f(w,B),f(B,L),f(w,j),f(w,F),f(F,G),f(e,he),f(e,U),f(e,ve),f(e,K),re||(be=Be(L,"click",t[0]),re=!0)},p:x,i:x,o:x,d(oe){oe&&S(e),re=!1,be()}}}function tt(t){return[l=>{navigator.clipboard.writeText("Qewer#8693");const n=document.createElement("div");n.innerText="COPIED TO CLIPBOARD",n.style.position="absolute";const s=l.target.getBoundingClientRect();n.style.transition="0.3s",n.style.opacity="0",n.style.padding="10px",n.style.color="white",n.style.background="rgba(40, 40, 40, 0.95)",n.style.transform="skew(-12deg)",document.body.appendChild(n),n.style.left=s.left+s.width/2-n.getBoundingClientRect().width/2+"px",n.style.top=s.top-n.getBoundingClientRect().height+"px",setTimeout(()=>{n.style.opacity="1"},100),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{document.body.removeChild(n)},300)},3e3)}]}class lt extends P{constructor(e){super(),R(this,e,tt,et,A,{})}}function nt(t){let e;return{c(){e=m("main"),e.innerHTML=`<span id="dot" class="svelte-qbvgps"></span> 

    <div id="title-block" class="svelte-qbvgps"><p data-animate="" id="title-name" class="svelte-qbvgps">about me</p> 
        <p data-animate="" id="title-sub" class="svelte-qbvgps">who I am and what I do</p></div> 

    <ul id="about-list" class="svelte-qbvgps"><li data-animate="" class="svelte-qbvgps">I am a \u{1F393} university student, studying Computer Engineering.</li> 
        <li data-animate="" class="svelte-qbvgps">I am bilingual, speaking fluent \u{1F1EC}\u{1F1E7} English and my native language \u{1F1F9}\u{1F1F7} Turkish. I am also currently learning
            \u{1F1E9}\u{1F1EA} German.</li> 
        <li data-animate="" class="svelte-qbvgps">I thoroughly enjoy \u{1F5A5}\uFE0F computers, \u{1F527} engineering and \u{1F4DD} scientific research.</li> 
        <li data-animate="" class="svelte-qbvgps">I enjoy contributing to free and open source software (FOSS) projects and getting involved in their
            communities.</li> 
        <li data-animate="" class="svelte-qbvgps">As a developer, I maintain a few small-scale open source projects and I also open source my experimental
            software and hardware projects.</li> 
        <li data-animate="" class="svelte-qbvgps">I have a keen eye on \u{1F3A8} graphic design. I enjoy software UI/UX research.</li> 
        <li data-animate="" class="svelte-qbvgps">I am also interested and have knowledge in subjects related to other engineering areas such as \u26A1
            electronics and PCB design, \u2699\uFE0F mechanical CAD and 3D printing, \u{1FAB5} woodworking and whittling etc.</li> 
        <li data-animate="" class="svelte-qbvgps">For more info, check out my <a href="#projects">projects</a> and
            <a href="#skills">skills and interests</a>.</li> 
        <li data-animate="" class="svelte-qbvgps">If you wish to contact me, you can send an \u{1F4E7} email to <a href="mailto:qewer@qewer.dev">qewer@qewer.dev</a>.
            You can also contact me via Discord (@qewer33) or Reddit (u/qewer3333).</li></ul>`,r(e,"class","section svelte-qbvgps"),r(e,"id","about")},m(l,n){C(l,e,n)},p:x,i:x,o:x,d(l){l&&S(e)}}}class st extends P{constructor(e){super(),R(this,e,null,nt,A,{})}}function at(t){let e,l,n,s,a=t[0].toUpperCase()+"",o;return{c(){e=m("main"),l=m("div"),n=b(),s=m("p"),o=M(a),E(l,"background-color",t[1]()),r(l,"class","svelte-1tjozi3"),r(e,"class","svelte-1tjozi3")},m(c,u){C(c,e,u),f(e,l),f(e,n),f(e,s),f(s,o)},p(c,[u]){u&1&&a!==(a=c[0].toUpperCase()+"")&&Ae(o,a)},i:x,o:x,d(c){c&&S(e)}}}function it(t,e,l){let{language:n=""}=e;const s={default:"#999999",rust:"#A58060",ruby:"#AE2828",qml:"#4B872F",svelte:"#ff4500","p5.js":"#C53B70",python:"#FFC13A",html:"#D84923","C++":"#C53B70"};function a(){return n.toLowerCase()in s?s[n.toLowerCase()]:s.default}return t.$$set=o=>{"language"in o&&l(0,n=o.language)},[n,a]}class rt extends P{constructor(e){super(),R(this,e,it,at,A,{language:0})}}const ot=t=>({}),we=t=>({}),ct=t=>({}),ke=t=>({});function $e(t){let e,l,n;function s(o){t[6](o)}let a={};return t[0]!==void 0&&(a.language=t[0]),e=new rt({props:a}),ue.push(()=>Je(e,"language",s)),{c(){D(e.$$.fragment)},m(o,c){z(e,o,c),n=!0},p(o,c){const u={};!l&&c&1&&(l=!0,u.language=o[0],Ke(()=>l=!1)),e.$set(u)},i(o){n||(k(e.$$.fragment,o),n=!0)},o(o){$(e.$$.fragment,o),n=!1},d(o){T(e,o)}}}function ut(t){let e,l,n,s,a,o,c,u,i,h,d,p,g,q,w,_,v=t[0]!==""&&$e(t);const H=t[5].description,I=te(H,t,t[4],ke),B=t[5].title,L=te(B,t,t[4],we);return{c(){e=m("main"),l=m("button"),n=b(),s=m("img"),o=b(),c=m("div"),u=m("div"),i=m("a"),h=M("VISIT"),d=b(),v&&v.c(),p=b(),g=m("p"),I&&I.c(),q=b(),w=m("h1"),L&&L.c(),r(l,"class","svelte-6b7la2"),O(s.src,a=t[1])||r(s,"src",a),r(s,"alt",""),E(s,"transform","translate(-50%, -50%) scale("+t[2]+")"),r(s,"class","svelte-6b7la2"),r(i,"class","button"),E(i,"transform","none"),r(i,"href",t[3]),r(i,"target","_blank"),r(i,"rel","noopener noreferrer"),E(u,"display","flex"),r(g,"class","svelte-6b7la2"),r(w,"class","svelte-6b7la2"),r(c,"id","content"),r(c,"class","svelte-6b7la2"),r(e,"data-animate",""),r(e,"class","svelte-6b7la2")},m(y,j){C(y,e,j),f(e,l),f(e,n),f(e,s),f(e,o),f(e,c),f(c,u),f(u,i),f(i,h),f(u,d),v&&v.m(u,null),f(c,p),f(c,g),I&&I.m(g,null),f(c,q),f(c,w),L&&L.m(w,null),_=!0},p(y,[j]){(!_||j&2&&!O(s.src,a=y[1]))&&r(s,"src",a),(!_||j&4)&&E(s,"transform","translate(-50%, -50%) scale("+y[2]+")"),(!_||j&8)&&r(i,"href",y[3]),y[0]!==""?v?(v.p(y,j),j&1&&k(v,1)):(v=$e(y),v.c(),k(v,1),v.m(u,null)):v&&(ae(),$(v,1,1,()=>{v=null}),ie()),I&&I.p&&(!_||j&16)&&ne(I,H,y,y[4],_?le(H,y[4],j,ct):se(y[4]),ke),L&&L.p&&(!_||j&16)&&ne(L,B,y,y[4],_?le(B,y[4],j,ot):se(y[4]),we)},i(y){_||(k(v),k(I,y),k(L,y),_=!0)},o(y){$(v),$(I,y),$(L,y),_=!1},d(y){y&&S(e),v&&v.d(),I&&I.d(y),L&&L.d(y)}}}function ft(t,e,l){let{$$slots:n={},$$scope:s}=e,{thumbnailImage:a=""}=e,{thumbnailScale:o="1"}=e,{visitURL:c=""}=e,{language:u=""}=e;function i(h){u=h,l(0,u)}return t.$$set=h=>{"thumbnailImage"in h&&l(1,a=h.thumbnailImage),"thumbnailScale"in h&&l(2,o=h.thumbnailScale),"visitURL"in h&&l(3,c=h.visitURL),"language"in h&&l(0,u=h.language),"$$scope"in h&&l(4,s=h.$$scope)},[u,a,o,c,s,n,i]}class dt extends P{constructor(e){super(),R(this,e,ft,ut,A,{thumbnailImage:1,thumbnailScale:2,visitURL:3,language:0})}}const gt=[{name:"qpaperOS",description:"Smartwatch firmware for LILYGO T-Wrist E-Paper along with 3D models for a sleek watch case",thumbnailImage:"/static_assets/png/qpaperos.png",thumbnailScale:"1",url:"https://github.com/qewer33/qpaperos",language:"C++"},{name:"Exquisite",description:"A new, unique and intuitive window management solution for KDE Plasma!",thumbnailImage:"/static_assets/png/exquisite.png",thumbnailScale:"1",url:"https://github.com/qewer33/Exquisite",language:"QML"},{name:"Leaf KDE Plasma Theme",description:"Leaf is a comfy, forest themed, green accent light & dark theme set for your KDE Plasma desktop",thumbnailImage:"/static_assets/png/leaf.png",thumbnailScale:"1",url:"https://github.com/qewer33/leaf-kde",language:""},{name:"Clear Clock",description:"ClearClock is a simple, elegant and configurable date/time display for your KDE Plasma desktop",thumbnailImage:"/static_assets/png/clear_clock.png",thumbnailScale:"1",url:"https://github.com/qewer33/ClearClock",language:"QML"},{name:"WickedRPS",description:'A battlefield of rocks, papers and scissors. Set up the scene and let them fight! My take on "Living RPS". Click the visit button to play in your browser',thumbnailImage:"/static_assets/png/wickedrps.png",thumbnailScale:"1",url:"https://rps.qewer.dev",language:"p5.js"},{name:"image_collage_filter.py",description:"A python script to create photo mosaics!",thumbnailImage:"/static_assets/png/image_collage_filter.png",thumbnailScale:"1",url:"https://github.com/qewer33/image-collage-filter",language:"Python"},{name:"qewer's URL Shortener",description:"A simple URL shortener, built with Rust and Cloudflare Workers",thumbnailImage:"/static_assets/png/url_shortener.png",thumbnailScale:"01",url:"https://github.com/qewer33/cloudflare-url-shortener",language:"Rust"},{name:"sus runner",description:"A Chrome dino game clone, except it's kinda sus... Made with Rust and Macroquad to try out gamedev in Rust",thumbnailImage:"/static_assets/png/sus_runner.png",thumbnailScale:"1.3",url:"https://sus.qewer.dev/",language:"Rust"},{name:"This Website",description:"This website is designed by Lynith and developed from scratch by me using Svelte and p5.js",thumbnailImage:"/static_assets/png/website.png",thumbnailScale:"1",url:"https://github.com/qewer33/personal-website",language:"Svelte"}],mt={projects:gt};function xe(t,e,l){const n=t.slice();return n[1]=e[l],n}function pt(t){let e;return{c(){e=M(`Cannot find package 'svelte-preprocess
                

                
            `)},m(l,n){C(l,e,n)},d(l){l&&S(e)}}}function ht(t){let e,l=t[1].name+"",n;return{c(){e=m("span"),n=M(l),r(e,"slot","title")},m(s,a){C(s,e,a),f(e,n)},p:x,d(s){s&&S(e)}}}function _t(t){let e,l=t[1].description+"",n;return{c(){e=m("span"),n=M(l),r(e,"slot","description")},m(s,a){C(s,e,a),f(e,n)},p:x,d(s){s&&S(e)}}}function Le(t){let e,l;return e=new dt({props:{thumbnailImage:t[1].thumbnailImage,thumbnailScale:t[1].thumbnailScale,visitURL:t[1].url,language:t[1].language,$$slots:{description:[_t],title:[ht],default:[pt]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(n,s){z(e,n,s),l=!0},p(n,s){const a={};s&16&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){T(e,n)}}}function vt(t){let e,l,n,s,a,o,c,u=t[0],i=[];for(let d=0;d<u.length;d+=1)i[d]=Le(xe(t,u,d));const h=d=>$(i[d],1,1,()=>{i[d]=null});return{c(){e=m("main"),l=m("span"),n=b(),s=m("div"),s.innerHTML=`<p data-animate="" id="title-name" class="svelte-1sy27ol">projects</p> 
        <p data-animate="" id="title-sub" class="svelte-1sy27ol">here are my most notable projects, hover or tap over them to get more info!</p>`,a=b(),o=m("div");for(let d=0;d<i.length;d+=1)i[d].c();r(l,"id","dot"),r(l,"class","svelte-1sy27ol"),r(s,"id","title-block"),r(s,"class","svelte-1sy27ol"),r(o,"id","cards"),r(o,"class","svelte-1sy27ol"),r(e,"class","section svelte-1sy27ol"),r(e,"id","projects")},m(d,p){C(d,e,p),f(e,l),f(e,n),f(e,s),f(e,a),f(e,o);for(let g=0;g<i.length;g+=1)i[g].m(o,null);c=!0},p(d,[p]){if(p&1){u=d[0];let g;for(g=0;g<u.length;g+=1){const q=xe(d,u,g);i[g]?(i[g].p(q,p),k(i[g],1)):(i[g]=Le(q),i[g].c(),k(i[g],1),i[g].m(o,null))}for(ae(),g=u.length;g<i.length;g+=1)h(g);ie()}},i(d){if(!c){for(let p=0;p<u.length;p+=1)k(i[p]);c=!0}},o(d){i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)$(i[p]);c=!1},d(d){d&&S(e),me(i,d)}}}function bt(t){return[mt.projects]}class yt extends P{constructor(e){super(),R(this,e,bt,vt,A,{})}}const wt=t=>({}),qe=t=>({}),kt=t=>({}),Se=t=>({});function $t(t){let e,l,n,s,a,o,c,u,i,h,d;const p=t[2].title,g=te(p,t,t[1],Se),q=t[2].labels,w=te(q,t,t[1],qe);return{c(){e=m("main"),l=m("div"),n=m("h1"),g&&g.c(),s=b(),a=m("div"),o=m("div"),c=b(),u=m("div"),u.innerHTML=`<p style="text-align: left;" class="svelte-x1ypt1">BEGINNER</p> 
                <p style="text-align: center;" class="svelte-x1ypt1">INTERMEDIATE</p> 
                <p style="text-align: right;" class="svelte-x1ypt1">ADVANCED</p>`,i=b(),h=m("div"),w&&w.c(),r(n,"class","svelte-x1ypt1"),r(o,"id","progress-bar-fg"),E(o,"width",t[0]+"%"),r(o,"class","svelte-x1ypt1"),r(u,"id","progress-bar-labels"),r(u,"class","svelte-x1ypt1"),r(a,"id","progress-bar-bg"),r(a,"class","svelte-x1ypt1"),r(h,"id","labels"),r(h,"class","svelte-x1ypt1"),r(l,"id","content"),r(l,"class","svelte-x1ypt1"),r(e,"data-animate",""),r(e,"class","svelte-x1ypt1")},m(_,v){C(_,e,v),f(e,l),f(l,n),g&&g.m(n,null),f(l,s),f(l,a),f(a,o),f(a,c),f(a,u),f(l,i),f(l,h),w&&w.m(h,null),d=!0},p(_,[v]){g&&g.p&&(!d||v&2)&&ne(g,p,_,_[1],d?le(p,_[1],v,kt):se(_[1]),Se),(!d||v&1)&&E(o,"width",_[0]+"%"),w&&w.p&&(!d||v&2)&&ne(w,q,_,_[1],d?le(q,_[1],v,wt):se(_[1]),qe)},i(_){d||(k(g,_),k(w,_),d=!0)},o(_){$(g,_),$(w,_),d=!1},d(_){_&&S(e),g&&g.d(_),w&&w.d(_)}}}function xt(t,e,l){let{$$slots:n={},$$scope:s}=e,{knowledgeLevel:a=0}=e;return t.$$set=o=>{"knowledgeLevel"in o&&l(0,a=o.knowledgeLevel),"$$scope"in o&&l(1,s=o.$$scope)},[a,s,n]}class Lt extends P{constructor(e){super(),R(this,e,xt,$t,A,{knowledgeLevel:0})}}function qt(t){let e,l,n,s,a,o=t[1].toUpperCase()+"",c;return{c(){e=m("main"),l=m("img"),s=b(),a=m("p"),c=M(o),O(l.src,n=t[0])||r(l,"src",n),r(l,"alt",""),r(l,"class","svelte-1xk6vlm"),r(e,"class","svelte-1xk6vlm")},m(u,i){C(u,e,i),f(e,l),f(e,s),f(e,a),f(a,c)},p(u,[i]){i&1&&!O(l.src,n=u[0])&&r(l,"src",n),i&2&&o!==(o=u[1].toUpperCase()+"")&&Ae(c,o)},i:x,o:x,d(u){u&&S(e)}}}function St(t,e,l){let{logoImage:n=""}=e,{text:s=""}=e;return t.$$set=a=>{"logoImage"in a&&l(0,n=a.logoImage),"text"in a&&l(1,s=a.text)},[n,s]}class Ct extends P{constructor(e){super(),R(this,e,St,qt,A,{logoImage:0,text:1})}}const It=[{name:"Programming & Software Development",knowledgeLevel:85,labels:["rust","python","ruby","bash","qml","neovim","vscode"]},{name:"Linux & Free Software",knowledgeLevel:85,labels:["fedora","arch linux","kde","bash"]},{name:"Graphic Design & UI/UX",knowledgeLevel:65,labels:["figma","inkscape","gimp"]},{name:"Web Development",knowledgeLevel:55,labels:["html","css","javascript","svelte"]},{name:"Computer Graphics & Creative Coding",knowledgeLevel:50,labels:["processing","p5.js"]},{name:"Computer Aided Design & 3D Printing",knowledgeLevel:45,labels:["creality k1c","orca","cura","freecad","openscad","kicad"]},{name:"Game Development",knowledgeLevel:35,labels:["godot"]},{name:"PC Building",knowledgeLevel:25,labels:["ryzen 5 5600","radeon rx 6500 xt"]}],jt={skills:It};function Ce(t,e,l){const n=t.slice();return n[1]=e[l],n}function Ie(t,e,l){const n=t.slice();return n[4]=e[l],n}function Et(t){let e,l=t[1].name+"",n;return{c(){e=m("span"),n=M(l),r(e,"slot","title")},m(s,a){C(s,e,a),f(e,n)},p:x,d(s){s&&S(e)}}}function je(t){let e,l;return e=new Ct({props:{logoImage:`/static_assets/svg/${t[4]}.svg`,text:t[4]}}),{c(){D(e.$$.fragment)},m(n,s){z(e,n,s),l=!0},p:x,i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){T(e,n)}}}function zt(t){let e,l,n,s=t[1].labels,a=[];for(let c=0;c<s.length;c+=1)a[c]=je(Ie(t,s,c));const o=c=>$(a[c],1,1,()=>{a[c]=null});return{c(){e=m("span");for(let c=0;c<a.length;c+=1)a[c].c();l=b(),r(e,"slot","labels"),E(e,"display","flex"),E(e,"flex-wrap","wrap")},m(c,u){C(c,e,u);for(let i=0;i<a.length;i+=1)a[i].m(e,null);f(e,l),n=!0},p(c,u){if(u&1){s=c[1].labels;let i;for(i=0;i<s.length;i+=1){const h=Ie(c,s,i);a[i]?(a[i].p(h,u),k(a[i],1)):(a[i]=je(h),a[i].c(),k(a[i],1),a[i].m(e,l))}for(ae(),i=s.length;i<a.length;i+=1)o(i);ie()}},i(c){if(!n){for(let u=0;u<s.length;u+=1)k(a[u]);n=!0}},o(c){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)$(a[u]);n=!1},d(c){c&&S(e),me(a,c)}}}function Ee(t){let e,l;return e=new Lt({props:{knowledgeLevel:t[1].knowledgeLevel,$$slots:{labels:[zt],title:[Et]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(n,s){z(e,n,s),l=!0},p(n,s){const a={};s&128&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){T(e,n)}}}function Tt(t){let e,l,n,s,a,o,c,u=t[0],i=[];for(let d=0;d<u.length;d+=1)i[d]=Ee(Ce(t,u,d));const h=d=>$(i[d],1,1,()=>{i[d]=null});return{c(){e=m("main"),l=m("span"),n=b(),s=m("div"),s.innerHTML=`<p id="title-name" data-animate="" class="svelte-1mzxxfn">skills and interests</p> 
        <p id="title-sub" data-animate="" class="svelte-1mzxxfn">my skills &amp; knowledge as a computer enthusiast and topics I&#39;m interested in</p>`,a=b(),o=m("div");for(let d=0;d<i.length;d+=1)i[d].c();r(l,"id","dot"),r(l,"class","svelte-1mzxxfn"),r(s,"id","title-block"),r(s,"class","svelte-1mzxxfn"),r(o,"id","cards"),r(o,"class","svelte-1mzxxfn"),r(e,"class","section svelte-1mzxxfn"),r(e,"id","skills")},m(d,p){C(d,e,p),f(e,l),f(e,n),f(e,s),f(e,a),f(e,o);for(let g=0;g<i.length;g+=1)i[g].m(o,null);c=!0},p(d,[p]){if(p&1){u=d[0];let g;for(g=0;g<u.length;g+=1){const q=Ce(d,u,g);i[g]?(i[g].p(q,p),k(i[g],1)):(i[g]=Ee(q),i[g].c(),k(i[g],1),i[g].m(o,null))}for(ae(),g=u.length;g<i.length;g+=1)h(g);ie()}},i(d){if(!c){for(let p=0;p<u.length;p+=1)k(i[p]);c=!0}},o(d){i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)$(i[p]);c=!1},d(d){d&&S(e),me(i,d)}}}function At(t){return[jt.skills]}class Rt extends P{constructor(e){super(),R(this,e,At,Tt,A,{})}}const Pt="/assets/logo_no_bg.1d75a974.png";function Dt(t){let e,l,n,s,a,o,c,u;return{c(){e=m("main"),l=m("span"),n=b(),s=m("div"),a=m("img"),c=b(),u=m("div"),u.innerHTML=`<p class="svelte-rff94b">this website is designed by
                <a href="https://lynithdev.github.io" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">lynith</a>
                and developed by
                <a href="https://github.com/qewer33" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">me (qewer)</a></p> 
            <p class="svelte-rff94b">you can find the source code
                <a href="https://github.com/qewer33/qewer33.github.io" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">here on github</a></p> 
            <p class="svelte-rff94b">licensed under the
                <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">gplv3 free software license</a></p> 
            <p class="svelte-rff94b">if you like my work, please consider
                <a href="https://ko-fi.com/qewer" target="_blank" rel="noopener noreferrer" class="svelte-rff94b">donating</a></p>`,r(l,"id","dot"),r(l,"class","svelte-rff94b"),O(a.src,o=Pt)||r(a,"src",o),r(a,"alt","logo"),r(a,"class","svelte-rff94b"),r(u,"id","text"),r(s,"id","content"),r(s,"class","svelte-rff94b"),r(e,"class","svelte-rff94b")},m(i,h){C(i,e,h),f(e,l),f(e,n),f(e,s),f(s,a),f(s,c),f(s,u)},p:x,i:x,o:x,d(i){i&&S(e)}}}class Ot extends P{constructor(e){super(),R(this,e,null,Dt,A,{})}}function Mt(t){let e,l,n,s,a,o,c,u,i,h,d;return l=new lt({}),s=new st({}),o=new yt({}),u=new Rt({}),h=new Ot({}),{c(){e=m("main"),D(l.$$.fragment),n=b(),D(s.$$.fragment),a=b(),D(o.$$.fragment),c=b(),D(u.$$.fragment),i=b(),D(h.$$.fragment),r(e,"class","svelte-8ioyzp")},m(p,g){C(p,e,g),z(l,e,null),f(e,n),z(s,e,null),f(e,a),z(o,e,null),f(e,c),z(u,e,null),f(e,i),z(h,e,null),d=!0},p:x,i(p){d||(k(l.$$.fragment,p),k(s.$$.fragment,p),k(o.$$.fragment,p),k(u.$$.fragment,p),k(h.$$.fragment,p),d=!0)},o(p){$(l.$$.fragment,p),$(s.$$.fragment,p),$(o.$$.fragment,p),$(u.$$.fragment,p),$(h.$$.fragment,p),d=!1},d(p){p&&S(e),T(l),T(s),T(o),T(u),T(h)}}}function Bt(t){return He(()=>{const e=new IntersectionObserver(l=>{for(let n=0;n<l.length;n++)l[n].isIntersecting&&setTimeout(()=>{l[n].target.classList.add("animated"),e.unobserve(l[n].target)},n*350)});document.querySelectorAll("[data-animate]").forEach(l=>e.observe(l)),scrollTo(0,0)}),[]}class Ut extends P{constructor(e){super(),R(this,e,Bt,Mt,A,{})}}new Ut({target:document.getElementById("app")});