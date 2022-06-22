"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),k=a,m=c["".concat(o,".").concat(k)]||c[k]||u[k]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={id:"BrowserInteractionResultReader",title:"Class: BrowserInteractionResultReader",sidebar_label:"BrowserInteractionResultReader",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"api/classes/BrowserInteractionResultReader",id:"api/classes/BrowserInteractionResultReader",title:"Class: BrowserInteractionResultReader",description:"A utility entity to read all generated files from",source:"@site/docs/api/classes/BrowserInteractionResultReader.md",sourceDirName:"api/classes",slug:"/api/classes/BrowserInteractionResultReader",permalink:"/docs/api/classes/BrowserInteractionResultReader",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BrowserInteractionResultReader",title:"Class: BrowserInteractionResultReader",sidebar_label:"BrowserInteractionResultReader",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"BaseAnalysis",permalink:"/docs/api/classes/BaseAnalysis"},next:{title:"CollectionsHoldingStaleAnalysis",permalink:"/docs/api/classes/CollectionsHoldingStaleAnalysis"}},o={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"cleanup",id:"cleanup",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getInteractionSteps",id:"getinteractionsteps",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getRootDirectory",id:"getrootdirectory",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getRunMetaInfo",id:"getrunmetainfo",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getSnapshotFileDir",id:"getsnapshotfiledir",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getSnapshotFiles",id:"getsnapshotfiles",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"from",id:"from",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-7",level:4}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A utility entity to read all generated files from\nthe directory holding the data and results from the\nlast browser interaction run"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"default")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"BrowserInteractionResultReader"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"new BrowserInteractionResultReader"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"workDir?"),")"),(0,a.kt)("p",null,"build a result reader"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"workDir")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"''")),(0,a.kt)("td",{parentName:"tr",align:"left"},"absolute path of the directory where the data and generated files of the memlab run were stored")))),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"BaseResultReader.constructor"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/memlab/blob/5787fe0/packages/api/src/result-reader/BaseResultReader.ts#L32"},"api/src/result-reader/BaseResultReader.ts:32")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"cleanup"},"cleanup"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"cleanup"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"clean up data/files generated from the memlab run"),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,"BaseResultReader.cleanup"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/memlab/blob/5787fe0/packages/api/src/result-reader/BaseResultReader.ts#L72"},"api/src/result-reader/BaseResultReader.ts:72")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getinteractionsteps"},"getInteractionSteps"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getInteractionSteps"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"E2EStepInfo"),"[]"),(0,a.kt)("p",null,"browser interaction step sequence"),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"E2EStepInfo"),"[]"),(0,a.kt)("p",null,"an array of browser interaction step info"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/memlab/blob/5787fe0/packages/api/src/result-reader/BrowserInteractionResultReader.ts#L60"},"api/src/result-reader/BrowserInteractionResultReader.ts:60")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getrootdirectory"},"getRootDirectory"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getRootDirectory"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"get the directory where the data and generated files of\nthe memlab run were stored"),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"absolute path of the directory"),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,"BaseResultReader.getRootDirectory"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/memlab/blob/5787fe0/packages/api/src/result-reader/BaseResultReader.ts#L64"},"api/src/result-reader/BaseResultReader.ts:64")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getrunmetainfo"},"getRunMetaInfo"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getRunMetaInfo"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"RunMetaInfo")),(0,a.kt)("p",null,"general meta data of the browser interaction run"),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RunMetaInfo")),(0,a.kt)("p",null,"meta data about the entire browser interaction"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/memlab/blob/5787fe0/packages/api/src/result-reader/BrowserInteractionResultReader.ts#L72"},"api/src/result-reader/BrowserInteractionResultReader.ts:72")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getsnapshotfiledir"},"getSnapshotFileDir"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getSnapshotFileDir"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"get the directory holding all snapshot files"),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"the absolute path of the directory"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/memlab/blob/5787fe0/packages/api/src/result-reader/BrowserInteractionResultReader.ts#L51"},"api/src/result-reader/BrowserInteractionResultReader.ts:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getsnapshotfiles"},"getSnapshotFiles"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getSnapshotFiles"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"get all snapshot files"),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"an array of snapshot file's absolute path"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/memlab/blob/5787fe0/packages/api/src/result-reader/BrowserInteractionResultReader.ts#L38"},"api/src/result-reader/BrowserInteractionResultReader.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"from"},"from"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"from"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"workDir?"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/classes/BrowserInteractionResultReader"},(0,a.kt)("inlineCode",{parentName:"a"},"BrowserInteractionResultReader"))),(0,a.kt)("p",null,"build a result reader"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"workDir")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"''")),(0,a.kt)("td",{parentName:"tr",align:"left"},"absolute path of the directory where the data and generated files of the browser interaction run were stored")))),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/classes/BrowserInteractionResultReader"},(0,a.kt)("inlineCode",{parentName:"a"},"BrowserInteractionResultReader"))),(0,a.kt)("p",null,"the ResultReader instance"),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"BaseResultReader.from"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/memlab/blob/5787fe0/packages/api/src/result-reader/BrowserInteractionResultReader.ts#L30"},"api/src/result-reader/BrowserInteractionResultReader.ts:30")))}u.isMDXComponent=!0}}]);