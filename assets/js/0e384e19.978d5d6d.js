"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,b=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Why did we build memlab?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebookincubator/memlab/blob/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",next:{title:"Installation",permalink:"/docs/installation"}},s={},m=[{value:"Why did we build memlab?",id:"why-did-we-build-memlab",level:2},{value:"What is memlab?",id:"what-is-memlab",level:2},{value:"What else can memlab do?",id:"what-else-can-memlab-do",level:2}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("h2",{id:"why-did-we-build-memlab"},"Why did we build memlab?"),(0,a.kt)("p",null,"One of the challenges in building a single-page application (SPA) like Facebook.com is to monitor & detect memory leaks at scale. Especially considering the number of changes that go live continuously, we built memlab that automates memory leak detection."),(0,a.kt)("h2",{id:"what-is-memlab"},"What is memlab?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"memlab")," is a tool that lets you define your test ",(0,a.kt)("inlineCode",{parentName:"p"},"scenario")," and helps you detect a memory leak in your SPA.\nThe way ",(0,a.kt)("inlineCode",{parentName:"p"},"memlab")," works is that it uses a headless browser using the ",(0,a.kt)("a",{parentName:"p",href:"/under-construction"},"scenario file")," to take a heap snapshot ",(0,a.kt)("inlineCode",{parentName:"p"},"baseline"),",\ndo some interactions like navigating away or clicking buttons, and take another snapshot ",(0,a.kt)("inlineCode",{parentName:"p"},"target"),".\nThen, it compares the baseline against the target. This process repeats a few more times.\nIf there is any memory leak in your SPA, then ",(0,a.kt)("inlineCode",{parentName:"p"},"memlab")," will output and store them to your console and your local machine."),(0,a.kt)("h2",{id:"what-else-can-memlab-do"},"What else can memlab do?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Detecting memory leaks of heap snapshots taken from Node.js, Electron.js, and Hermes"),(0,a.kt)("li",{parentName:"ul"},"Built-in toolbox and APIs for finding memory optimization opportunities  - not necessarily memory leaks"),(0,a.kt)("li",{parentName:"ul"},"Advanced memory assertions")),(0,a.kt)("p",null,"If you feel curious to test it out on your own,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Head over to ",(0,a.kt)("a",{parentName:"li",href:"/docs/getting-started"},"Getting Started")," section for getting started."),(0,a.kt)("li",{parentName:"ul"},"Want to learn more about ",(0,a.kt)("a",{parentName:"li",href:"/docs/api"},"API"),"?")))}u.isMDXComponent=!0}}]);