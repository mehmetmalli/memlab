"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[3692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={id:"integrate-with-e2e-frameworks"},r="Integrate with Test Frameworks",s={unversionedId:"guides/integrate-with-e2e-frameworks",id:"guides/integrate-with-e2e-frameworks",title:"Integrate with Test Frameworks",description:"This is a guide on how to integrate MemLab with other existing E2E testing",source:"@site/docs/guides/05-integrate-with-E2E-frameworks.md",sourceDirName:"guides",slug:"/guides/integrate-with-e2e-frameworks",permalink:"/memlab/docs/guides/integrate-with-e2e-frameworks",draft:!1,editUrl:"https://github.com/facebook/memlab/blob/main/website/docs/guides/05-integrate-with-E2E-frameworks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"integrate-with-e2e-frameworks"},sidebar:"sidebar",previous:{title:"Set up Continuous Test",permalink:"/memlab/docs/guides/integration-and-file-structure"},next:{title:"How memlab Works",permalink:"/memlab/docs/how-memlab-works"}},l={},p=[{value:"Get Files Consumable by MemLab",id:"get-files-consumable-by-memlab",level:2},{value:"Pipe Files into MemLab",id:"pipe-files-into-memlab",level:2},{value:"Specification of <code>snap-seq.json</code>",id:"specification-of-snap-seqjson",level:2},{value:"Specification of <code>run-meta.json</code> (Optional)",id:"specification-of-run-metajson-optional",level:2},{value:"Discussions",id:"discussions",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integrate-with-test-frameworks"},"Integrate with Test Frameworks"),(0,i.kt)("p",null,"This is a guide on how to integrate MemLab with other existing E2E testing\nframework (such as\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright"},"Playwright")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cypress-io/cypress"},"Cypress"),")."),(0,i.kt)("p",null,"MemLab uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer"},"Puppeteer"),"\nto interact with web browser and collect\nJavaScript heap snapshots for memory leak detection. If your organization\nis already using other E2E teesting framework such as Playwright or Cypress,\nyou would want to reuse the existing framework for E2E testing and pipe the\nintermediate results to MemLab for memory leak detection."),(0,i.kt)("h2",{id:"get-files-consumable-by-memlab"},"Get Files Consumable by MemLab"),(0,i.kt)("p",null,"For your existing E2E testing framework, you need to implement an API that takes\nJS heap snapshots from the browser. (E.g., playwright supports connecting with\nthe Browser's DevTools via the Chrome DevTools\nProtocol (",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-cdpsession"},"link"),").\nSo you can leverage this to take JS heap snapshots from Chromium. Here is\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/memlab/blob/df78f1123c971ba46275fac5d0acaf4e58b0513c/packages/e2e/src/E2EInteractionManager.ts#L331"},"code pointer")," of how memlab uses puppeteer to collect\nthe heap snapshots from Chromium."),(0,i.kt)("p",null,"The API could look like this (as an example):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await takeJSHeapSnapshot(page, tag);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tag")," is one of the tags: ",(0,i.kt)("inlineCode",{parentName:"p"},"baseline"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),", these three snapshots\nis equivalent to ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/memlab/docs/how-memlab-works"},(0,i.kt)("inlineCode",{parentName:"a"},"SBP"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"STP"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"SBP'")),"\nrespectively."),(0,i.kt)("p",null,"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"takeJSHeapSnapshot")," API should dump files in certain format on disk.\nHere is a complete list of files and directory structure required by MemLab\ncore API for finding memory leaks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/path/to/dump/\n\u2514\u2500\u2500 data\n    \u2514\u2500\u2500 cur\n        \u251c\u2500\u2500 run-meta.json       # (optional) meta data of memlab run and browser configuration\n        \u251c\u2500\u2500 s1.heapsnapshot     # heap snapshot after the url callback (initial page load)\n        \u251c\u2500\u2500 s2.heapsnapshot     # heap snapshot after the action callback (after target interaction)\n        \u251c\u2500\u2500 s3.heapsnapshot     # heap snapshot after the back callback (after reverting target interaction)\n        \u2514\u2500\u2500 snap-seq.json       # meta data about each browser interaction step\n")),(0,i.kt)("p",null,"To get examples of those meta files, run a random MemLab test scenario and\nview those files under this directory: ",(0,i.kt)("inlineCode",{parentName:"p"},"$(memlab get-default-work-dir)/data/cur")),(0,i.kt)("p",null,"In your specific testing framework's test code, you can insert those\n",(0,i.kt)("inlineCode",{parentName:"p"},"takeJSHeapSnapshot")," API calls in your playwright test code to collect the\nthree snapshots and get file dumped onto disk."),(0,i.kt)("h2",{id:"pipe-files-into-memlab"},"Pipe Files into MemLab"),(0,i.kt)("p",null,"Once you have the ",(0,i.kt)("inlineCode",{parentName:"p"},"takeJSHeapSnapshot")," implementation dumped heap snapshots\nand meta files onto disk, you can find memory leaks with this\n",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/memlab/docs/api/modules/api_src/#findleaksrunresult"},"memlab core API"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const {findLeaks, BrowserInteractionResultReader} = require('@memlab/api');\n\n(async function () {\n  const reader = BrowserInteractionResultReader.from('/path/to/dump/');\n  const leaks = await findLeaks(reader);\n})();\n")),(0,i.kt)("h2",{id:"specification-of-snap-seqjson"},"Specification of ",(0,i.kt)("inlineCode",{parentName:"h2"},"snap-seq.json")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"snap-seq.json")," file encodes the browser interaction data and heap\nsnapshot details that the Memlab leak detector needs in order to identify\nmemory leaks."),(0,i.kt)("p",null,"Here's a sample ",(0,i.kt)("inlineCode",{parentName:"p"},"snap-seq.json")," file. It's an array that contains\na series of objects, where each object represents a browser interaction step.\nTo detect memory leaks, we require a minimum of three steps labeled\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"baseline"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),", in that sequence. For a detailed\nunderstanding of why Memlab requires three snapshots,\nplease refer to ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/memlab/docs/how-memlab-works"},"this doc"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "page-load",\n    "snapshot": true,\n    "type": "baseline",\n    "idx": 1,\n    "JSHeapUsedSize": 33872820\n  },\n  {\n    "name": "action-on-page",\n    "snapshot": true,\n    "type": "target",\n    "idx": 2,\n    "JSHeapUsedSize": 44172336\n  },\n  {\n    "name": "revert",\n    "snapshot": true,\n    "type": "final",\n    "idx": 3,\n    "JSHeapUsedSize": 43304156\n  }\n]\n')),(0,i.kt)("p",null,"Now let's take a look at the JSON encoding of a specific step:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "page-load",\n  "snapshot": true,\n  "type": "baseline",\n  "idx": 1,\n  "JSHeapUsedSize": 33872820\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," is a human-readable name for the interaction step, this is mainly for documentation or comment purpose."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"snapshot": true')," indicates that a heap snapshot has been captured after this E2E interaction step. If this field is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", Memlab will ignore this E2E interaction step when loading and diffing heap snapshots."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," should be one of the following values: ",(0,i.kt)("inlineCode",{parentName:"li"},"baseline"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"target"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"final"),". Refer to ",(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/memlab/docs/how-memlab-works"},"this link")," for their meanings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"idx")," denotes the index of the given interaction. Memlab utilizes this index to identify and load the corresponding heap snapshot using the template ",(0,i.kt)("inlineCode",{parentName:"li"},"s${idx}.heapsnapshot")," when ",(0,i.kt)("inlineCode",{parentName:"li"},"snapshot")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),". For instance, in this specific case, Memlab will attempt to locate ",(0,i.kt)("inlineCode",{parentName:"li"},"s1.heapsnapshot")," in the same directory as the ",(0,i.kt)("inlineCode",{parentName:"li"},"snap-seq.json")," file, given that ",(0,i.kt)("inlineCode",{parentName:"li"},"idx")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JSHeapUsedSize")," is an optional field that logs the total heap size in bytes after the completion of this E2E interaction step. If all interaction steps include the ",(0,i.kt)("inlineCode",{parentName:"li"},"JSHeapUsedSize")," field, Memlab will generate a pixel chart displaying memory usage variations across different steps before listing the detected memory leaks on the terminal.")),(0,i.kt)("h2",{id:"specification-of-run-metajson-optional"},"Specification of ",(0,i.kt)("inlineCode",{parentName:"h2"},"run-meta.json")," (Optional)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"run-meta.json")," file is an optional JSON file created by Memlab's E2E\nfront-end. You can optionally make your E2E testing framework generate such\na file. It logs metadata related to Memlab's operation, including Chromium\nstartup arguments, information about the web-app under test, and any CLI\ncommands. While this file isn't directly utilized during MemLab's memory\nleak detection process, it may be valuable later for associating detected\nmemory leaks with the configuration of the tested web-app and browser.\nFor example, sometimes memory leaks only show up in specific configuration\nsuch as mobile view. Those information could be useful to display when you\nbuild a UI system to display all the memory leaks and their underlying app\nand browser information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "app": "default-app-for-scenario",\n  "type": "scenario",\n  "interaction": "test-google-maps.js",\n  "browserInfo": {\n    "_browserVersion": "HeadlessChrome/101.0.4950.0",\n    "_puppeteerConfig": {\n      "headless": true,\n      "devtools": true,\n      "userDataDir": "/tmp/memlab/data/profile",\n      "args": [\n        "--no-sandbox",\n        "--disable-notifications",\n        "--use-fake-ui-for-media-stream",\n        "--use-fake-device-for-media-stream",\n        "--js-flags=\\"--no-move-object-start\\"",\n        "--enable-precise-memory-info",\n        "browser-test",\n        "--display=:100"\n      ],\n      "defaultViewport": {\n        "width": 1680,\n        "height": 1080,\n        "deviceScaleFactor": 1\n      }\n    },\n    "_consoleMessages": [\n      "console output line 1",\n      "console output line 2",\n    ]\n  },\n  "extraInfo": {\n    "command": "run --scenario /home/jacksongl/scripts/test-google-maps.js"\n  }\n}\n')),(0,i.kt)("p",null,"All those fields are optional:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"app"),': Specifies the name of the application, in this case, "default-app-for-scenario".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type"),': Describes the type of test, here it is "scenario".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"interaction"),": The file name of the the E2E test scenario file.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"browserInfo"),": Contains metadata about the browser used for the test:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_browserVersion"),": The version of the browser used, for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadlessChrome/101.0.4950.0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_puppeteerConfig"),": The configuration for Puppeteer (MemLab uses Puppeteer as its browser interaction front-end):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headless"),": A boolean indicating whether the browser runs in headless mode."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"devtools"),": A boolean that specifies if devtools are opened when interacting with the page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userDataDir"),": The path to the browser-generated test user profile data directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args"),": An array of additional arguments to be passed to the browser instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defaultViewport"),": An object specifying the default viewport's width, height, and device scale factor."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_consoleMessages"),": An array of messages outputted in the console during the test run."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"extraInfo"),": Contains additional information regarding the test run:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command"),": The command executed to initiate the test run, in this case, ",(0,i.kt)("inlineCode",{parentName:"li"},"memlab run --scenario /home/jacksongl/scripts/test-google-maps.js"),".")))),(0,i.kt)("h2",{id:"discussions"},"Discussions"),(0,i.kt)("p",null,"For questions and discussions, please check out issue\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/memlab/issues/35"},"#35"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/memlab/issues/15"},"#15"),", and\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/memlab/issues/14"},"#14"),"."))}c.isMDXComponent=!0}}]);