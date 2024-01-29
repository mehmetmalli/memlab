"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[592],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,u=d["".concat(s,".").concat(m)]||d[m]||k[m]||l;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5099:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={id:"core_src.ILeakFilter",title:"Interface: ILeakFilter",sidebar_label:"ILeakFilter",custom_edit_url:null},i=void 0,o={unversionedId:"api/interfaces/core_src.ILeakFilter",id:"api/interfaces/core_src.ILeakFilter",title:"Interface: ILeakFilter",description:"The ILeakFilter interface allows you to define a leak detector and",source:"@site/docs/api/interfaces/core_src.ILeakFilter.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core_src.ILeakFilter",permalink:"/memlab/docs/api/interfaces/core_src.ILeakFilter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core_src.ILeakFilter",title:"Interface: ILeakFilter",sidebar_label:"ILeakFilter",custom_edit_url:null},sidebar:"sidebar",previous:{title:"IHeapStringNode",permalink:"/memlab/docs/api/interfaces/core_src.IHeapStringNode"},next:{title:"IScenario",permalink:"/memlab/docs/api/interfaces/core_src.IScenario"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:'<a id="beforeleakfilter" name="beforeleakfilter"></a> <code>Optional</code> <strong>beforeLeakFilter</strong>: <code>InitLeakFilterCallback</code>',id:"-optional-beforeleakfilter-initleakfiltercallback",level:3},{value:'<a id="leakfilter" name="leakfilter"></a> <code>Optional</code> <strong>leakFilter</strong>: <code>LeakFilterCallback</code>',id:"-optional-leakfilter-leakfiltercallback",level:3},{value:'<a id="retainerreferencefilter" name="retainerreferencefilter"></a> <code>Optional</code> <strong>retainerReferenceFilter</strong>: <code>ReferenceFilterCallback</code>',id:"-optional-retainerreferencefilter-referencefiltercallback",level:3}],p={toc:c},d="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ILeakFilter")," interface allows you to define a leak detector and\ncustomize the leak filtering logic in memlab (instead of using the\nbuilt-in leak filters)."),(0,r.kt)("p",null,"Use the leak filter definition in command line interface to filter\nleaks detected from browser interactions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"memlab run --scenario <SCENARIO FILE> --leak-filter <PATH TO leak-filter.js>\n")),(0,r.kt)("p",null,"If you have already run ",(0,r.kt)("inlineCode",{parentName:"p"},"memlab run")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"memlab snapshot")," which saved\nheap snapshot and other meta data on disk, use the following command\nto filter leaks based on those saved heap snapshots (query the default\ndata location by ",(0,r.kt)("inlineCode",{parentName:"p"},"memlab get-default-work-dir"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"memlab find-leaks --leak-filter <PATH TO leak-filter.js>\n")),(0,r.kt)("p",null,"Here is an example TypeScript file defining a leak filter.\nThe command line interface only accepts compiled JavaScript file.\nYou can also define the leak filter in JavaScript (without the\ntype annotations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {IHeapNode, IHeapSnapshot, HeapNodeIdSet, utils} from '@memlab/core';\n\nfunction initMap(snapshot: IHeapSnapshot): Record<string, number> {\n  const map = Object.create(null);\n  snapshot.nodes.forEach(node => {\n    if (node.type !== 'string') {\n      return;\n    }\n    const str = utils.getStringNodeValue(node);\n    if (str in map) {\n      ++map[str];\n    } else {\n      map[str] = 1;\n    }\n  });\n  return map;\n}\nconst beforeLeakFilter = (snapshot: IHeapSnapshot, _leakedNodeIds: HeapNodeIdSet): void => {\n  map = initMap(snapshot);\n};\n\n// duplicated string with size > 1KB as memory leak\nconst leakFilter = (node: IHeapNode): boolean => {\n  if (node.type !== 'string' || node.retainedSize < 1000) {\n    return false;\n  }\n  const str = utils.getStringNodeValue(node);\n  return map[str] > 1;\n};\n\nexport default {beforeLeakFilter, leakFilter};\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"-optional-beforeleakfilter-initleakfiltercallback"},(0,r.kt)("a",{id:"beforeleakfilter",name:"beforeleakfilter"})," ",(0,r.kt)("inlineCode",{parentName:"h3"},"Optional")," ",(0,r.kt)("strong",{parentName:"h3"},"beforeLeakFilter"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/modules/core_src#initleakfiltercallback"},(0,r.kt)("inlineCode",{parentName:"a"},"InitLeakFilterCallback"))),(0,r.kt)("p",null,"Lifecycle function callback that is invoked initially once before\nthe subsequent ",(0,r.kt)("inlineCode",{parentName:"p"},"leakFilter")," function calls. This callback could\nbe used to initialize some data stores or any one-off\npreprocessings."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"snapshot: ",(0,r.kt)("inlineCode",{parentName:"li"},"IHeapSnapshot")," | the final heap snapshot taken after\nall browser interactions are done.\nCheck out ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},"IHeapSnapshot")," for more APIs that queries the heap snapshot."),(0,r.kt)("li",{parentName:"ul"},"leakedNodeIds: ",(0,r.kt)("inlineCode",{parentName:"li"},"Set<number>")," | the set of ids of all JS heap objects\nallocated by the ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," call but not released after the ",(0,r.kt)("inlineCode",{parentName:"li"},"back")," call\nin browser."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Examples"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  beforeLeakFilter: (snapshot, leakedNodeIds) {\n    // initialize some data stores\n  },\n  leakFilter(node, snapshot, leakedNodeIds) {\n    // use the data stores\n  },\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/d8b8311/packages/core/src/lib/Types.ts#L404"},"core/src/lib/Types.ts:404"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-optional-leakfilter-leakfiltercallback"},(0,r.kt)("a",{id:"leakfilter",name:"leakfilter"})," ",(0,r.kt)("inlineCode",{parentName:"h3"},"Optional")," ",(0,r.kt)("strong",{parentName:"h3"},"leakFilter"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/modules/core_src#leakfiltercallback"},(0,r.kt)("inlineCode",{parentName:"a"},"LeakFilterCallback"))),(0,r.kt)("p",null,"This callback defines how you want to filter out the\nleaked objects. The callback is called for every node (JS heap\nobject in browser) allocated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," callback, but not\nreleased after the ",(0,r.kt)("inlineCode",{parentName:"p"},"back")," callback. Those objects could be caches\nthat are retained in memory on purpose, or they are memory leaks."),(0,r.kt)("p",null,"This optional callback allows you to define your own algorithm\nto cherry pick memory leaks for specific JS program under test."),(0,r.kt)("p",null,"If this optional callback is not defined, memlab will use its\nbuilt-in leak filter, which considers detached DOM elements\nand unmounted Fiber nodes (detached from React Fiber tree) as\nmemory leaks."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"node: ",(0,r.kt)("inlineCode",{parentName:"li"},"IHeapNode")," | one of the heap object allocated but not released."),(0,r.kt)("li",{parentName:"ul"},"snapshot: ",(0,r.kt)("inlineCode",{parentName:"li"},"IHeapSnapshot")," | the final heap snapshot taken after\nall browser interactions are done.\nCheck out ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},"IHeapSnapshot")," for more APIs that queries the heap snapshot."),(0,r.kt)("li",{parentName:"ul"},"leakedNodeIds: ",(0,r.kt)("inlineCode",{parentName:"li"},"Set<number>")," | the set of ids of all JS heap objects\nallocated by the ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," call but not released after the ",(0,r.kt)("inlineCode",{parentName:"li"},"back")," call\nin browser."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": the boolean value indicating whether the given node in\nthe snapshot should be considered as leaked.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Examples"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// save as leak-filter.js\nmodule.exports = {\n  leakFilter(node, snapshot, leakedNodeIds) {\n    // any unreleased node (JS heap object) with 1MB+\n    // retained size is considered a memory leak\n    return node.retainedSize > 1000000;\n  },\n};\n")),(0,r.kt)("p",null,"Use the leak filter definition in command line interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"memlab find-leaks --leak-filter <PATH TO leak-filter.js>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"memlab run --scenario <SCENARIO FILE> --leak-filter <PATH TO leak-filter.js>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/d8b8311/packages/core/src/lib/Types.ts#L453"},"core/src/lib/Types.ts:453"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-optional-retainerreferencefilter-referencefiltercallback"},(0,r.kt)("a",{id:"retainerreferencefilter",name:"retainerreferencefilter"})," ",(0,r.kt)("inlineCode",{parentName:"h3"},"Optional")," ",(0,r.kt)("strong",{parentName:"h3"},"retainerReferenceFilter"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/modules/core_src#referencefiltercallback"},(0,r.kt)("inlineCode",{parentName:"a"},"ReferenceFilterCallback"))),(0,r.kt)("p",null,"Callback that can be used to define a logic to decide whether\na reference should be considered as part of the retainer trace.\nThe callback is called for every reference (edge) in the heap snapshot."),(0,r.kt)("p",null,"For concrete examples, check out ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.ILeakFilter#leakfilter"},"leakFilter"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"edge - the reference (edge) that is considered\nfor calcualting the retainer trace"),(0,r.kt)("li",{parentName:"ul"},"snapshot - the snapshot of target interaction"),(0,r.kt)("li",{parentName:"ul"},"isReferenceUsedByDefault - MemLab has its own default logic for\nwhether a reference should be considered as part of the retainer trace,\nif this parameter is true, it means MemLab will consider this reference\nwhen calculating the retainer trace."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": the value indicating whether the given reference should be\nconsidered when calculating the retainer trace. Note that when this\ncallback returns true, the reference will only be considered as a candidate\nfor retainer trace, so it may or may not be included in the retainer trace;\nhowever, if this callback returns false, the reference will be excluded."))),(0,r.kt)("p",null,"Note that by excluding a dominator reference of an object (i.e., an edge\nthat must be traveled through to reach the heap object from GC roots),\nthe object will be considered as unreachable in the heap graph; and\ntherefore, the reference and heap object will not be included in the\nretainer trace detection and retainer size calculation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// save as leak-filter.js\nmodule.exports = {\n  retainerReferenceFilter(edge, _snapshot, _leakedNodeIds) {\n    // exclude react fiber references\n    if (edge.name_or_index.toString().startsWith('__reactFiber$')) {\n      return false;\n    }\n    // exclude other references here\n    // ...\n    return true;\n  }\n};\n")),(0,r.kt)("p",null,"Use the leak filter definition in command line interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"memlab find-leaks --leak-filter <PATH TO leak-filter.js>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"memlab run --scenario <SCENARIO FILE> --leak-filter <PATH TO leak-filter.js>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/d8b8311/packages/core/src/lib/Types.ts#L507"},"core/src/lib/Types.ts:507"))))))}k.isMDXComponent=!0}}]);