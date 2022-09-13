"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[1604],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,b=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return t?n.createElement(b,s(s({ref:r},p),{},{components:t})):n.createElement(b,s({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7002:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={id:"core_src.IBrowserInfo",title:"Interface: IBrowserInfo",sidebar_label:"IBrowserInfo",custom_edit_url:null},s=void 0,i={unversionedId:"api/interfaces/core_src.IBrowserInfo",id:"api/interfaces/core_src.IBrowserInfo",title:"Interface: IBrowserInfo",description:"This data structure contains the input configuration for the browser and",source:"@site/docs/api/interfaces/core_src.IBrowserInfo.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core_src.IBrowserInfo",permalink:"/memlab/docs/api/interfaces/core_src.IBrowserInfo",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core_src.IBrowserInfo",title:"Interface: IBrowserInfo",sidebar_label:"IBrowserInfo",custom_edit_url:null},sidebar:"sidebar",previous:{title:"StringAnalysis",permalink:"/memlab/docs/api/classes/heap_analysis_src.StringAnalysis"},next:{title:"IHeapEdge",permalink:"/memlab/docs/api/interfaces/core_src.IHeapEdge"}},c={},l=[{value:"Properties",id:"properties",level:2},{value:'<a id="_browserversion" name="_browserversion"></a> <strong>_browserVersion</strong>: <code>string</code>',id:"-_browserversion-string",level:3},{value:'<a id="_consolemessages" name="_consolemessages"></a> <strong>_consoleMessages</strong>: <code>string</code>[]',id:"-_consolemessages-string",level:3},{value:'<a id="_puppeteerconfig" name="_puppeteerconfig"></a> <strong>_puppeteerConfig</strong>: <code>LaunchOptions</code>',id:"-_puppeteerconfig-launchoptions",level:3}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This data structure contains the input configuration for the browser and\noutput data from the browser. You can retrieve the instance of this type\nthrough ",(0,o.kt)("a",{parentName:"p",href:"/memlab/docs/api/modules/core_src#runmetainfo"},"RunMetaInfo"),"."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"-_browserversion-string"},(0,o.kt)("a",{id:"\\_browserversion",name:"\\_browserversion"})," ",(0,o.kt)("strong",{parentName:"h3"},"_","browserVersion"),": ",(0,o.kt)("inlineCode",{parentName:"h3"},"string")),(0,o.kt)("p",null,"browser version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Source"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/8054c1a/packages/core/src/lib/Types.ts#L835"},"core/src/lib/Types.ts:835"))))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-_consolemessages-string"},(0,o.kt)("a",{id:"\\_consolemessages",name:"\\_consolemessages"})," ",(0,o.kt)("strong",{parentName:"h3"},"_","consoleMessages"),": ",(0,o.kt)("inlineCode",{parentName:"h3"},"string"),"[]"),(0,o.kt)("p",null,"all web console output"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Source"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/8054c1a/packages/core/src/lib/Types.ts#L843"},"core/src/lib/Types.ts:843"))))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-_puppeteerconfig-launchoptions"},(0,o.kt)("a",{id:"\\_puppeteerconfig",name:"\\_puppeteerconfig"})," ",(0,o.kt)("strong",{parentName:"h3"},"_","puppeteerConfig"),": ",(0,o.kt)("inlineCode",{parentName:"h3"},"LaunchOptions")),(0,o.kt)("p",null,"configuration for puppeteer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Source"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/8054c1a/packages/core/src/lib/Types.ts#L839"},"core/src/lib/Types.ts:839"))))))}u.isMDXComponent=!0}}]);