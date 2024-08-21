"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[2775],{5680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>m});var t=n(6540);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=t.createContext({}),p=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},y=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),g=p(n),u=s,m=g["".concat(o,".").concat(u)]||g[u]||c[u]||i;return n?t.createElement(m,r(r({ref:a},y),{},{components:n})):t.createElement(m,r({ref:a},y))}));function m(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[g]="string"==typeof e?e:s,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3635:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=n(8168),s=(n(6540),n(5680));const i={id:"heap_analysis_src.StringAnalysis",title:"Class: StringAnalysis",sidebar_label:"StringAnalysis",custom_edit_url:null},r=void 0,l={unversionedId:"api/classes/heap_analysis_src.StringAnalysis",id:"api/classes/heap_analysis_src.StringAnalysis",title:"Class: StringAnalysis",description:"This analysis finds duplicated string instance in JavaScript heap",source:"@site/docs/api/classes/heap_analysis_src.StringAnalysis.md",sourceDirName:"api/classes",slug:"/api/classes/heap_analysis_src.StringAnalysis",permalink:"/memlab/docs/api/classes/heap_analysis_src.StringAnalysis",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"heap_analysis_src.StringAnalysis",title:"Class: StringAnalysis",sidebar_label:"StringAnalysis",custom_edit_url:null},sidebar:"sidebar",previous:{title:"ShapeUnboundGrowthAnalysis",permalink:"/memlab/docs/api/classes/heap_analysis_src.ShapeUnboundGrowthAnalysis"},next:{title:"IBrowserInfo",permalink:"/memlab/docs/api/interfaces/core_src.IBrowserInfo"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:'<a id="new stringanalysis"></a><strong>new StringAnalysis</strong>()',id:"new-stringanalysis",level:3},{value:"Methods",id:"methods",level:2},{value:'<a id="analyzesnapshotfromfile"></a><strong>analyzeSnapshotFromFile</strong>(<code>file</code>, <code>options?</code>)',id:"analyzesnapshotfromfilefile-options",level:3},{value:'<a id="getcommandname"></a><strong>getCommandName</strong>()',id:"getcommandname",level:3},{value:'<a id="gettopduplicatedstringsincount"></a><strong>getTopDuplicatedStringsInCount</strong>()',id:"gettopduplicatedstringsincount",level:3}],y={toc:p},g="wrapper";function c(e){let{components:a,...n}=e;return(0,s.yg)(g,(0,t.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This analysis finds duplicated string instance in JavaScript heap\nand rank them based on the duplicated string size and count."),(0,s.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/memlab/docs/api/classes/heap_analysis_src.BaseAnalysis"},(0,s.yg)("inlineCode",{parentName:"a"},"BaseAnalysis"))),(0,s.yg)("p",{parentName:"li"},"\u21b3 ",(0,s.yg)("strong",{parentName:"p"},(0,s.yg)("inlineCode",{parentName:"strong"},"StringAnalysis"))))),(0,s.yg)("h2",{id:"constructors"},"Constructors"),(0,s.yg)("h3",{id:"new-stringanalysis"},(0,s.yg)("a",{id:"new stringanalysis"}),(0,s.yg)("strong",{parentName:"h3"},"new StringAnalysis"),"()"),(0,s.yg)("h2",{id:"methods"},"Methods"),(0,s.yg)("h3",{id:"analyzesnapshotfromfilefile-options"},(0,s.yg)("a",{id:"analyzesnapshotfromfile"}),(0,s.yg)("strong",{parentName:"h3"},"analyzeSnapshotFromFile"),"(",(0,s.yg)("inlineCode",{parentName:"h3"},"file"),", ",(0,s.yg)("inlineCode",{parentName:"h3"},"options?"),")"),(0,s.yg)("p",null,"Run heap analysis for a single heap snapshot file"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Parameters"),":",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"file"),": ",(0,s.yg)("inlineCode",{parentName:"li"},"string")," | the absolute path of a ",(0,s.yg)("inlineCode",{parentName:"li"},".heapsnapshot")," file."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"options"),": ",(0,s.yg)("a",{parentName:"li",href:"/memlab/docs/api/modules/heap_analysis_src#runheapanalysisoptions"},(0,s.yg)("inlineCode",{parentName:"a"},"RunHeapAnalysisOptions"))," | optional configuration for the heap analysis run"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Returns"),": ",(0,s.yg)("inlineCode",{parentName:"li"},"Promise"),"<",(0,s.yg)("a",{parentName:"li",href:"/memlab/docs/api/modules/heap_analysis_src#analyzesnapshotresult"},(0,s.yg)("inlineCode",{parentName:"a"},"AnalyzeSnapshotResult")),">"," | this API returns ",(0,s.yg)("a",{parentName:"li",href:"/memlab/docs/api/modules/heap_analysis_src#analyzesnapshotresult"},"AnalyzeSnapshotResult"),", which contains\nthe logging file of analysis console output. Alternatively, to get more\nstructured analysis results, check out the documentation of the hosting\nheap analysis class and call the analysis-specific API to get results\nafter calling this method."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Example"),":")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-typescript"},"const analysis = new StringAnalysis();\n// analysis console output is saved in result.analysisOutputFile\nconst result = await analysis.analyzeSnapshotFromFile(snapshotFile);\n// query analysis-specific and structured results\nconst stringPatterns = analysis.getTopDuplicatedStringsInCount();\n")),(0,s.yg)("p",null,"Additionally, you can specify a working directory to where\nthe intermediate, logging, and final output files will be dumped:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-typescript"},"const analysis = new StringAnalysis();\n// analysis console output is saved in result.analysisOutputFile\n// which is inside the specified working directory\nconst result = await analysis.analyzeSnapshotFromFile(snapshotFile, {\n  // if the specified directory doesn't exist, memlab will create it\n  workDir: '/tmp/your/work/dir',\n});\n")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Source"),":",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/88bce92/packages/heap-analysis/src/BaseAnalysis.ts#L95"},"heap-analysis/src/BaseAnalysis.ts:95"))))),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"getcommandname"},(0,s.yg)("a",{id:"getcommandname"}),(0,s.yg)("strong",{parentName:"h3"},"getCommandName"),"()"),(0,s.yg)("p",null,"get CLI command name for this memory analysis;\nuse it with ",(0,s.yg)("inlineCode",{parentName:"p"},"memlab analyze <ANALYSIS_NAME>")," in CLI"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Returns"),": ",(0,s.yg)("inlineCode",{parentName:"p"},"string")," | command name")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Source"),":"),(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/88bce92/packages/heap-analysis/src/plugins/StringAnalysis.ts#L118"},"heap-analysis/src/plugins/StringAnalysis.ts:118"))))),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"gettopduplicatedstringsincount"},(0,s.yg)("a",{id:"gettopduplicatedstringsincount"}),(0,s.yg)("strong",{parentName:"h3"},"getTopDuplicatedStringsInCount"),"()"),(0,s.yg)("p",null,"get the top duplicated string in terms of duplicated string count"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Returns"),": ",(0,s.yg)("inlineCode",{parentName:"p"},"StringRecord"),"[] | an array of the top-duplicated strings' information")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Source"),":"),(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/88bce92/packages/heap-analysis/src/plugins/StringAnalysis.ts#L68"},"heap-analysis/src/plugins/StringAnalysis.ts:68"))))))}c.isMDXComponent=!0}}]);