"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[220],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=o(a),c=i,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(k,s(s({ref:t},d),{},{components:a})):n.createElement(k,s({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var o=2;o<r;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9610:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=a(7462),i=(a(7294),a(3905));const r={id:"ObjectFanoutAnalysis",title:"Class: ObjectFanoutAnalysis",sidebar_label:"ObjectFanoutAnalysis",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"api/classes/ObjectFanoutAnalysis",id:"api/classes/ObjectFanoutAnalysis",title:"Class: ObjectFanoutAnalysis",description:"Hierarchy",source:"@site/docs/api/classes/ObjectFanoutAnalysis.md",sourceDirName:"api/classes",slug:"/api/classes/ObjectFanoutAnalysis",permalink:"/docs/api/classes/ObjectFanoutAnalysis",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ObjectFanoutAnalysis",title:"Class: ObjectFanoutAnalysis",sidebar_label:"ObjectFanoutAnalysis",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"GlobalVariableAnalysis",permalink:"/docs/api/classes/GlobalVariableAnalysis"},next:{title:"ObjectShallowAnalysis",permalink:"/docs/api/classes/ObjectShallowAnalysis"}},p={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Properties",id:"properties",level:2},{value:"getObjectsWithHighFanout",id:"getobjectswithhighfanout",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"analyzeSnapshotFromFile",id:"analyzesnapshotfromfile",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"analyzeSnapshotsInDirectory",id:"analyzesnapshotsindirectory",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getCommandName",id:"getcommandname",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getDescription",id:"getdescription",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getOptions",id:"getoptions",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"process",id:"process",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"run",id:"run",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-7",level:4}],d={toc:o};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseAnalysis"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ObjectFanoutAnalysis"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new ObjectFanoutAnalysis"),"()"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis"},"BaseAnalysis"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis#constructor"},"constructor")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"getobjectswithhighfanout"},"getObjectsWithHighFanout"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"getObjectsWithHighFanout"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"heap-analysis/dist/plugins/ObjectFanoutAnalysis.d.ts:18"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"analyzesnapshotfromfile"},"analyzeSnapshotFromFile"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"analyzeSnapshotFromFile"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"file"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"file")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis"},"BaseAnalysis"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis#analyzesnapshotfromfile"},"analyzeSnapshotFromFile")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"heap-analysis/dist/BaseAnalysis.d.ts:16"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"analyzesnapshotsindirectory"},"analyzeSnapshotsInDirectory"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"analyzeSnapshotsInDirectory"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"directory"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"directory")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis"},"BaseAnalysis"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis#analyzesnapshotsindirectory"},"analyzeSnapshotsInDirectory")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"heap-analysis/dist/BaseAnalysis.d.ts:17"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getcommandname"},"getCommandName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getCommandName"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis"},"BaseAnalysis"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis#getcommandname"},"getCommandName")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"heap-analysis/dist/plugins/ObjectFanoutAnalysis.d.ts:14"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getdescription"},"getDescription"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getDescription"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis"},"BaseAnalysis"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis#getdescription"},"getDescription")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"heap-analysis/dist/plugins/ObjectFanoutAnalysis.d.ts:15"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getoptions"},"getOptions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getOptions"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),"[]"),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"default"),"[]"),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis"},"BaseAnalysis"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis#getoptions"},"getOptions")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"heap-analysis/dist/plugins/ObjectFanoutAnalysis.d.ts:16"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"process"},"process"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"process"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"HeapAnalysisOptions"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis"},"BaseAnalysis"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis#process"},"process")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,"heap-analysis/dist/plugins/ObjectFanoutAnalysis.d.ts:17"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"run"},"run"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"run"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"HeapAnalysisOptions"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis"},"BaseAnalysis"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseAnalysis#run"},"run")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,"heap-analysis/dist/BaseAnalysis.d.ts:15"))}u.isMDXComponent=!0}}]);