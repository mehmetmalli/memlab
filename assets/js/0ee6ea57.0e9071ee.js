"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[112],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),k=n,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return a?r.createElement(u,i(i({ref:t},d),{},{components:a})):r.createElement(u,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={id:"core_src.IHeapNode",title:"Interface: IHeapNode",sidebar_label:"IHeapNode",custom_edit_url:null},i=void 0,o={unversionedId:"api/interfaces/core_src.IHeapNode",id:"api/interfaces/core_src.IHeapNode",title:"Interface: IHeapNode",description:"Hierarchy",source:"@site/docs/api/interfaces/core_src.IHeapNode.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core_src.IHeapNode",permalink:"/docs/api/interfaces/core_src.IHeapNode",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core_src.IHeapNode",title:"Interface: IHeapNode",sidebar_label:"IHeapNode",custom_edit_url:null},sidebar:"sidebar",previous:{title:"IHeapLocation",permalink:"/docs/api/interfaces/core_src.IHeapLocation"},next:{title:"IHeapNodeBasic",permalink:"/docs/api/interfaces/core_src.IHeapNodeBasic"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:'<a id="attributes" name="attributes"></a> <strong>attributes</strong>: <code>number</code>',id:"-attributes-number",level:3},{value:'<a id="detachstate" name="detachstate"></a> <strong>detachState</strong>: <code>number</code>',id:"-detachstate-number",level:3},{value:'<a id="dominatornode" name="dominatornode"></a> <strong>dominatorNode</strong>: <code>null</code> | <code>IHeapNode</code>',id:"-dominatornode-null--iheapnode",level:3},{value:'<a id="edge_count" name="edge_count"></a> <strong>edge_count</strong>: <code>number</code>',id:"-edge_count-number",level:3},{value:'<a id="highlight" name="highlight"></a> <code>Optional</code> <strong>highlight</strong>: <code>boolean</code>',id:"-optional-highlight-boolean",level:3},{value:'<a id="id" name="id"></a> <strong>id</strong>: <code>number</code>',id:"-id-number",level:3},{value:'<a id="isstring" name="isstring"></a> <strong>isString</strong>: <code>boolean</code>',id:"-isstring-boolean",level:3},{value:'<a id="is_detached" name="is_detached"></a> <strong>is_detached</strong>: <code>boolean</code>',id:"-is_detached-boolean",level:3},{value:'<a id="location" name="location"></a> <strong>location</strong>: <code>null</code> | <code>IHeapLocation</code>',id:"-location-null--iheaplocation",level:3},{value:'<a id="name" name="name"></a> <strong>name</strong>: <code>string</code>',id:"-name-string",level:3},{value:'<a id="nodeindex" name="nodeindex"></a> <strong>nodeIndex</strong>: <code>number</code>',id:"-nodeindex-number",level:3},{value:'<a id="pathedge" name="pathedge"></a> <strong>pathEdge</strong>: <code>null</code> | <code>IHeapEdge</code>',id:"-pathedge-null--iheapedge",level:3},{value:'<a id="references" name="references"></a> <strong>references</strong>: <code>IHeapEdge</code>[]',id:"-references-iheapedge",level:3},{value:'<a id="referrers" name="referrers"></a> <strong>referrers</strong>: <code>IHeapEdge</code>[]',id:"-referrers-iheapedge",level:3},{value:'<a id="retainedsize" name="retainedsize"></a> <strong>retainedSize</strong>: <code>number</code>',id:"-retainedsize-number",level:3},{value:'<a id="self_size" name="self_size"></a> <strong>self_size</strong>: <code>number</code>',id:"-self_size-number",level:3},{value:'<a id="snapshot" name="snapshot"></a> <strong>snapshot</strong>: <code>IHeapSnapshot</code>',id:"-snapshot-iheapsnapshot",level:3},{value:'<a id="trace_node_id" name="trace_node_id"></a> <strong>trace_node_id</strong>: <code>number</code>',id:"-trace_node_id-number",level:3},{value:'<a id="type" name="type"></a> <strong>type</strong>: <code>string</code>',id:"-type-string",level:3},{value:"Methods",id:"methods",level:2},{value:'<a id="findanyreferrer"></a><strong>findAnyReferrer</strong>(<code>predicate</code>)',id:"findanyreferrerpredicate",level:3},{value:'<a id="findreference"></a><strong>findReference</strong>(<code>predicate</code>)',id:"findreferencepredicate",level:3},{value:'<a id="findreferrers"></a><strong>findReferrers</strong>(<code>predicate</code>)',id:"findreferrerspredicate",level:3},{value:'<a id="foreachreference"></a><strong>forEachReference</strong>(<code>callback</code>)',id:"foreachreferencecallback",level:3},{value:'<a id="foreachreferrer"></a><strong>forEachReferrer</strong>(<code>callback</code>)',id:"foreachreferrercallback",level:3},{value:'<a id="getanyreferrer"></a><strong>getAnyReferrer</strong>(<code>edgeName</code>, <code>edgeType?</code>)',id:"getanyreferreredgename-edgetype",level:3},{value:'<a id="getanyreferrernode"></a><strong>getAnyReferrerNode</strong>(<code>edgeName</code>, <code>edgeType?</code>)',id:"getanyreferrernodeedgename-edgetype",level:3},{value:'<a id="getreference"></a><strong>getReference</strong>(<code>edgeName</code>, <code>edgeType?</code>)',id:"getreferenceedgename-edgetype",level:3},{value:'<a id="getreferencenode"></a><strong>getReferenceNode</strong>(<code>edgeName</code>, <code>edgeType?</code>)',id:"getreferencenodeedgename-edgetype",level:3},{value:'<a id="getreferrernodes"></a><strong>getReferrerNodes</strong>(<code>edgeName</code>, <code>edgeType?</code>)',id:"getreferrernodesedgename-edgetype",level:3},{value:'<a id="getreferrers"></a><strong>getReferrers</strong>(<code>edgeName</code>, <code>edgeType?</code>)',id:"getreferrersedgename-edgetype",level:3},{value:'<a id="markasdetached"></a><strong>markAsDetached</strong>()',id:"markasdetached",level:3},{value:'<a id="tostringnode"></a><strong>toStringNode</strong>()',id:"tostringnode",level:3}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core_src.IHeapNodeBasic"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapNodeBasic"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"IHeapNode"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core_src.IHeapStringNode"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapStringNode"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"-attributes-number"},(0,n.kt)("a",{id:"attributes",name:"attributes"})," ",(0,n.kt)("strong",{parentName:"h3"},"attributes"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"number")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L426"},"core/src/lib/Types.ts:426"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-detachstate-number"},(0,n.kt)("a",{id:"detachstate",name:"detachstate"})," ",(0,n.kt)("strong",{parentName:"h3"},"detachState"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"number")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L424"},"core/src/lib/Types.ts:424"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-dominatornode-null--iheapnode"},(0,n.kt)("a",{id:"dominatornode",name:"dominatornode"})," ",(0,n.kt)("strong",{parentName:"h3"},"dominatorNode"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"null")," ","|"," ",(0,n.kt)("a",{parentName:"h3",href:"/docs/api/interfaces/core_src.IHeapNode"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapNode"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L435"},"core/src/lib/Types.ts:435"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-edge_count-number"},(0,n.kt)("a",{id:"edge\\_count",name:"edge\\_count"})," ",(0,n.kt)("strong",{parentName:"h3"},"edge","_","count"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"number")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L428"},"core/src/lib/Types.ts:428"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-optional-highlight-boolean"},(0,n.kt)("a",{id:"highlight",name:"highlight"})," ",(0,n.kt)("inlineCode",{parentName:"h3"},"Optional")," ",(0,n.kt)("strong",{parentName:"h3"},"highlight"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L437"},"core/src/lib/Types.ts:437"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-id-number"},(0,n.kt)("a",{id:"id",name:"id"})," ",(0,n.kt)("strong",{parentName:"h3"},"id"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"number")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L414"},"core/src/lib/Types.ts:414"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-isstring-boolean"},(0,n.kt)("a",{id:"isstring",name:"isstring"})," ",(0,n.kt)("strong",{parentName:"h3"},"isString"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L438"},"core/src/lib/Types.ts:438"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-is_detached-boolean"},(0,n.kt)("a",{id:"is\\_detached",name:"is\\_detached"})," ",(0,n.kt)("strong",{parentName:"h3"},"is","_","detached"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L423"},"core/src/lib/Types.ts:423"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-location-null--iheaplocation"},(0,n.kt)("a",{id:"location",name:"location"})," ",(0,n.kt)("strong",{parentName:"h3"},"location"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"null")," ","|"," ",(0,n.kt)("a",{parentName:"h3",href:"/docs/api/interfaces/core_src.IHeapLocation"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapLocation"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L436"},"core/src/lib/Types.ts:436"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-name-string"},(0,n.kt)("a",{id:"name",name:"name"})," ",(0,n.kt)("strong",{parentName:"h3"},"name"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"string")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L413"},"core/src/lib/Types.ts:413"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-nodeindex-number"},(0,n.kt)("a",{id:"nodeindex",name:"nodeindex"})," ",(0,n.kt)("strong",{parentName:"h3"},"nodeIndex"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"number")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L433"},"core/src/lib/Types.ts:433"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-pathedge-null--iheapedge"},(0,n.kt)("a",{id:"pathedge",name:"pathedge"})," ",(0,n.kt)("strong",{parentName:"h3"},"pathEdge"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"null")," ","|"," ",(0,n.kt)("a",{parentName:"h3",href:"/docs/api/interfaces/core_src.IHeapEdge"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapEdge"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L432"},"core/src/lib/Types.ts:432"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-references-iheapedge"},(0,n.kt)("a",{id:"references",name:"references"})," ",(0,n.kt)("strong",{parentName:"h3"},"references"),": ",(0,n.kt)("a",{parentName:"h3",href:"/docs/api/interfaces/core_src.IHeapEdge"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),"[]"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L430"},"core/src/lib/Types.ts:430"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-referrers-iheapedge"},(0,n.kt)("a",{id:"referrers",name:"referrers"})," ",(0,n.kt)("strong",{parentName:"h3"},"referrers"),": ",(0,n.kt)("a",{parentName:"h3",href:"/docs/api/interfaces/core_src.IHeapEdge"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),"[]"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L431"},"core/src/lib/Types.ts:431"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-retainedsize-number"},(0,n.kt)("a",{id:"retainedsize",name:"retainedsize"})," ",(0,n.kt)("strong",{parentName:"h3"},"retainedSize"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"number")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L434"},"core/src/lib/Types.ts:434"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-self_size-number"},(0,n.kt)("a",{id:"self\\_size",name:"self\\_size"})," ",(0,n.kt)("strong",{parentName:"h3"},"self","_","size"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"number")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L427"},"core/src/lib/Types.ts:427"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-snapshot-iheapsnapshot"},(0,n.kt)("a",{id:"snapshot",name:"snapshot"})," ",(0,n.kt)("strong",{parentName:"h3"},"snapshot"),": ",(0,n.kt)("a",{parentName:"h3",href:"/docs/api/interfaces/core_src.IHeapSnapshot"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L422"},"core/src/lib/Types.ts:422"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-trace_node_id-number"},(0,n.kt)("a",{id:"trace\\_node\\_id",name:"trace\\_node\\_id"})," ",(0,n.kt)("strong",{parentName:"h3"},"trace","_","node","_","id"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"number")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L429"},"core/src/lib/Types.ts:429"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-type-string"},(0,n.kt)("a",{id:"type",name:"type"})," ",(0,n.kt)("strong",{parentName:"h3"},"type"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"string")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L412"},"core/src/lib/Types.ts:412"))))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"findanyreferrerpredicate"},(0,n.kt)("a",{id:"findanyreferrer"}),(0,n.kt)("strong",{parentName:"h3"},"findAnyReferrer"),"(",(0,n.kt)("inlineCode",{parentName:"h3"},"predicate"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"predicate"),": ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/modules/core_src#predicator"},(0,n.kt)("inlineCode",{parentName:"a"},"Predicator")),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapEdge"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),">"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"Nullable"),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapEdge"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L443"},"core/src/lib/Types.ts:443"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"findreferencepredicate"},(0,n.kt)("a",{id:"findreference"}),(0,n.kt)("strong",{parentName:"h3"},"findReference"),"(",(0,n.kt)("inlineCode",{parentName:"h3"},"predicate"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"predicate"),": ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/modules/core_src#predicator"},(0,n.kt)("inlineCode",{parentName:"a"},"Predicator")),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapEdge"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),">"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"Nullable"),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapEdge"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L442"},"core/src/lib/Types.ts:442"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"findreferrerspredicate"},(0,n.kt)("a",{id:"findreferrers"}),(0,n.kt)("strong",{parentName:"h3"},"findReferrers"),"(",(0,n.kt)("inlineCode",{parentName:"h3"},"predicate"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"predicate"),": ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/modules/core_src#predicator"},(0,n.kt)("inlineCode",{parentName:"a"},"Predicator")),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapEdge"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),">"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapEdge"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),"[]"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L444"},"core/src/lib/Types.ts:444"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"foreachreferencecallback"},(0,n.kt)("a",{id:"foreachreference"}),(0,n.kt)("strong",{parentName:"h3"},"forEachReference"),"(",(0,n.kt)("inlineCode",{parentName:"h3"},"callback"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"callback"),": ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/modules/core_src#edgeiterationcallback"},(0,n.kt)("inlineCode",{parentName:"a"},"EdgeIterationCallback"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"void")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L440"},"core/src/lib/Types.ts:440"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"foreachreferrercallback"},(0,n.kt)("a",{id:"foreachreferrer"}),(0,n.kt)("strong",{parentName:"h3"},"forEachReferrer"),"(",(0,n.kt)("inlineCode",{parentName:"h3"},"callback"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"callback"),": ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/modules/core_src#edgeiterationcallback"},(0,n.kt)("inlineCode",{parentName:"a"},"EdgeIterationCallback"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"void")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L441"},"core/src/lib/Types.ts:441"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getanyreferreredgename-edgetype"},(0,n.kt)("a",{id:"getanyreferrer"}),(0,n.kt)("strong",{parentName:"h3"},"getAnyReferrer"),"(",(0,n.kt)("inlineCode",{parentName:"h3"},"edgeName"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"edgeType?"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edgeName"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"li"},"number")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edgeType?"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"Nullable"),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapEdge"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L453"},"core/src/lib/Types.ts:453"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getanyreferrernodeedgename-edgetype"},(0,n.kt)("a",{id:"getanyreferrernode"}),(0,n.kt)("strong",{parentName:"h3"},"getAnyReferrerNode"),"(",(0,n.kt)("inlineCode",{parentName:"h3"},"edgeName"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"edgeType?"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edgeName"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"li"},"number")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edgeType?"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"Nullable"),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapNode"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapNode")),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L457"},"core/src/lib/Types.ts:457"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getreferenceedgename-edgetype"},(0,n.kt)("a",{id:"getreference"}),(0,n.kt)("strong",{parentName:"h3"},"getReference"),"(",(0,n.kt)("inlineCode",{parentName:"h3"},"edgeName"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"edgeType?"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edgeName"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"li"},"number")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edgeType?"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"Nullable"),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapEdge"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L445"},"core/src/lib/Types.ts:445"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getreferencenodeedgename-edgetype"},(0,n.kt)("a",{id:"getreferencenode"}),(0,n.kt)("strong",{parentName:"h3"},"getReferenceNode"),"(",(0,n.kt)("inlineCode",{parentName:"h3"},"edgeName"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"edgeType?"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edgeName"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"li"},"number")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edgeType?"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"Nullable"),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapNode"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapNode")),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L449"},"core/src/lib/Types.ts:449"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getreferrernodesedgename-edgetype"},(0,n.kt)("a",{id:"getreferrernodes"}),(0,n.kt)("strong",{parentName:"h3"},"getReferrerNodes"),"(",(0,n.kt)("inlineCode",{parentName:"h3"},"edgeName"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"edgeType?"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edgeName"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"li"},"number")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edgeType?"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapNode"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapNode")),"[]"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L462"},"core/src/lib/Types.ts:462"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getreferrersedgename-edgetype"},(0,n.kt)("a",{id:"getreferrers"}),(0,n.kt)("strong",{parentName:"h3"},"getReferrers"),"(",(0,n.kt)("inlineCode",{parentName:"h3"},"edgeName"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"edgeType?"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edgeName"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"li"},"number")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edgeType?"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapEdge"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),"[]"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L461"},"core/src/lib/Types.ts:461"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"markasdetached"},(0,n.kt)("a",{id:"markasdetached"}),(0,n.kt)("strong",{parentName:"h3"},"markAsDetached"),"()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"void")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L425"},"core/src/lib/Types.ts:425"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tostringnode"},(0,n.kt)("a",{id:"tostringnode"}),(0,n.kt)("strong",{parentName:"h3"},"toStringNode"),"()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"Nullable"),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core_src.IHeapStringNode"},(0,n.kt)("inlineCode",{parentName:"a"},"IHeapStringNode")),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/0eede29/packages/core/src/lib/Types.ts#L439"},"core/src/lib/Types.ts:439"))))))}c.isMDXComponent=!0}}]);