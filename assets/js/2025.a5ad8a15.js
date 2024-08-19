"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[2025],{1107:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(8168),l=t(6540),r=t(53),i=t(1312),s=t(6342);const c={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function o(e){let{as:n,id:t,...o}=e;const{navbar:{hideOnScroll:m}}=(0,s.p)();return"h1"!==n&&t?l.createElement(n,(0,a.A)({},o,{className:(0,r.A)("anchor",m?c.anchorWithHideOnScrollNavbar:c.anchorWithStickyNavbar),id:t}),o.children,l.createElement("a",{className:"hash-link",href:`#${t}`,title:(0,i.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(n,(0,a.A)({},o,{id:void 0}))}},1363:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(6540),l=t(5680),r=t(8168),i=t(5260);var s=t(9324);var c=t(5489);var o=t(53),m=t(2303),d=t(1422);const u={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function p(e){let{summary:n,children:t,...l}=e;const i=(0,m.A)(),s=(0,a.useRef)(null),{collapsed:c,setCollapsed:p}=(0,d.u)({initialState:!l.open}),[v,g]=(0,a.useState)(l.open);return a.createElement("details",(0,r.A)({},l,{ref:s,open:v,"data-collapsed":c,className:(0,o.A)(u.details,i&&u.isBrowser,l.className),onMouseDown:e=>{f(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;f(n)&&h(n,s.current)&&(e.preventDefault(),c?(p(!1),g(!0)):p(!0))}}),n??a.createElement("summary",null,"Details"),a.createElement(d.N,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),g(!e)}},a.createElement("div",{className:u.collapsibleContent},t)))}const v={details:"details_b_Ee"},g="alert alert--info";function E(e){let{...n}=e;return a.createElement(p,(0,r.A)({},n,{className:(0,o.A)(g,v.details,n.className)}))}var A=t(1107);function b(e){return a.createElement(A.A,e)}const N={containsTaskList:"containsTaskList_mC6p"};const C={img:"img_ev3q"};const L={head:function(e){const n=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(i.A,e,n)},code:function(e){const n=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(s.A,e)},a:function(e){return a.createElement(c.A,e)},pre:function(e){return a.createElement(s.A,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const n=a.Children.toArray(e.children),t=n.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return a.createElement(E,(0,r.A)({},e,{summary:t}),l)},ul:function(e){return a.createElement("ul",(0,r.A)({},e,{className:(n=e.className,(0,o.A)(n,n?.includes("contains-task-list")&&N.containsTaskList))}));var n},img:function(e){return a.createElement("img",(0,r.A)({loading:"lazy"},e,{className:(n=e.className,(0,o.A)(n,C.img))}));var n},h1:e=>a.createElement(b,(0,r.A)({as:"h1"},e)),h2:e=>a.createElement(b,(0,r.A)({as:"h2"},e)),h3:e=>a.createElement(b,(0,r.A)({as:"h3"},e)),h4:e=>a.createElement(b,(0,r.A)({as:"h4"},e)),h5:e=>a.createElement(b,(0,r.A)({as:"h5"},e)),h6:e=>a.createElement(b,(0,r.A)({as:"h6"},e))};function k(e){let{children:n}=e;return a.createElement(l.xA,{components:L},n)}},7763:(e,n,t)=>{t.d(n,{A:()=>m});var a=t(8168),l=t(6540),r=t(53),i=t(5195);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function m(e){let{className:n,...t}=e;return l.createElement("div",{className:(0,r.A)(s.tableOfContents,"thin-scrollbar",n)},l.createElement(i.A,(0,a.A)({},t,{linkClassName:c,linkActiveClassName:o})))}},5195:(e,n,t)=>{t.d(n,{A:()=>h});var a=t(8168),l=t(6540),r=t(6342);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>c(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.p)();return(0,l.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,l.useRef)(void 0),t=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=o(s,{anchorTopOffset:t.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:a,isChild:r}=e;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const f=l.memo(u);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:u,...h}=e;const p=(0,r.p)(),v=m??p.tableOfContents.minHeadingLevel,g=u??p.tableOfContents.maxHeadingLevel,E=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:g});return d((0,l.useMemo)((()=>{if(c&&o)return{linkClassName:c,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:g}}),[c,o,v,g])),l.createElement(f,(0,a.A)({toc:E,className:t,linkClassName:c},h))}}}]);