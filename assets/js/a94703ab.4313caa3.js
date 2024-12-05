"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48],{2927:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var a=n(758),o=n(3526),i=n(2784),s=n(7358),l=n(2183),r=n(1554),c=n(6669),d=n(9341),u=n(139);const m={backToTopButton:"backToTopButton_mvXs",backToTopButtonShow:"backToTopButtonShow_xEtT"};var b=n(6070);function p(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.gk)();return(0,d.Mq)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,c.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var h=n(470),x=n(5557),_=n(2032),f=n(8085),j=n(6830);function C(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const v="collapseSidebarButton_gDT2",g="collapseSidebarButtonIcon_NbYw";function A(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",v),onClick:t,children:(0,b.jsx)(C,{className:g})})}var S=n(1658),k=n(3671);const T=Symbol("EmptyContext"),I=a.createContext(T);function y(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.jsx)(I.Provider,{value:i,children:t})}var N=n(6589),B=n(5740),w=n(6908),L=n(3293);function E(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.jsx)("button",{"aria-label":t?(0,c.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function M(e){let{item:t,onItemClick:n,activePath:i,level:r,index:c,...d}=e;const{items:u,label:m,collapsible:p,className:h,href:x}=t,{docs:{sidebar:{autoCollapseCategories:_}}}=(0,f.p)(),j=function(e){const t=(0,L.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),C=(0,l.w8)(t,i),v=(0,B.ys)(x,i),{collapsed:g,setCollapsed:A}=(0,N.u)({initialState:()=>!!p&&(!C&&t.collapsed)}),{expandedItem:S,setExpandedItem:y}=function(){const e=(0,a.useContext)(I);if(e===T)throw new k.dV("DocSidebarItemsExpandedStateProvider");return e}(),M=function(e){void 0===e&&(e=!g),y(e?null:c),A(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,k.ZC)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:C,collapsed:g,updateCollapsed:M}),(0,a.useEffect)((()=>{p&&null!=S&&S!==c&&_&&A(!0)}),[p,S,c,A,_]),(0,b.jsxs)("li",{className:(0,o.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":g},h),children:[(0,b.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v}),children:[(0,b.jsx)(w.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!x&&p,"menu__link--active":C}),onClick:p?e=>{n?.(t),x?M(!1):(e.preventDefault(),M())}:()=>{n?.(t)},"aria-current":v?"page":void 0,role:p&&!x?"button":void 0,"aria-expanded":p&&!x?!g:void 0,href:p?j??"#":j,...d,children:m}),x&&p&&(0,b.jsx)(E,{collapsed:g,categoryLabel:m,onClick:e=>{e.preventDefault(),M()}})]}),(0,b.jsx)(N.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,b.jsx)(X,{items:u,tabIndex:g?-1:0,onItemClick:n,activePath:i,level:r+1})})]})}var H=n(4932),G=n(817);const R="menuExternalLink_qLOf";function D(e){let{item:t,onItemClick:n,activePath:a,level:i,index:r,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:p}=t,h=(0,l.w8)(t,a),x=(0,H.A)(d);return(0,b.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,b.jsxs)(w.A,{className:(0,o.A)("menu__link",!x&&R,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[u,!x&&(0,b.jsx)(G.A,{})]})},u)}const P="menuHtmlItem_RMEU";function W(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:r}=t;return(0,b.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(n),l&&[P,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:i}},a)}function V(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(M,{item:t,...n});case"html":return(0,b.jsx)(W,{item:t,...n});default:return(0,b.jsx)(D,{item:t,...n})}}function Y(e){let{items:t,...n}=e;const a=(0,l.Y)(t,n.activePath);return(0,b.jsx)(y,{children:a.map(((e,t)=>(0,b.jsx)(V,{item:e,index:t,...n},t)))})}const X=(0,a.memo)(Y),q="menu_VXqU",U="menuWithAnnouncementBar_ylrO";function z(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,S.M)(),[t,n]=(0,a.useState)(e);return(0,d.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,c.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",q,l&&U,i),children:(0,b.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(X,{items:n,activePath:t,level:1})})})}const O="sidebar_p8YJ",F="sidebarWithHideableNavbar_rLoy",K="sidebarHidden_m2Cx",J="sidebarLogo_h1Dn";function Z(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,f.p)();return(0,b.jsxs)("div",{className:(0,o.A)(O,s&&F,i&&K),children:[s&&(0,b.jsx)(j.A,{tabIndex:-1,className:J}),(0,b.jsx)(z,{path:t,sidebar:n}),l&&(0,b.jsx)(A,{onClick:a})]})}const $=a.memo(Z);var Q=n(8019),ee=n(6010);const te=e=>{let{sidebar:t,path:n}=e;const a=(0,ee.M)();return(0,b.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(X,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ne(e){return(0,b.jsx)(Q.GX,{component:te,props:e})}const ae=a.memo(ne);function oe(e){const t=(0,_.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)($,{...e}),a&&(0,b.jsx)(ae,{...e})]})}const ie={expandButton:"expandButton_ykX1",expandButtonIcon:"expandButtonIcon_gj8_"};function se(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ie.expandButton,title:(0,c.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(C,{className:ie.expandButtonIcon})})}const le={docSidebarContainer:"docSidebarContainer_EkGx",docSidebarContainerHidden:"docSidebarContainerHidden__EtM",sidebarViewport:"sidebarViewport_Koy7"};function re(e){let{children:t}=e;const n=(0,r.t)();return(0,b.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function ce(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,x.zy)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&c(!1),!r&&(0,h.O)()&&c(!0),i((e=>!e))}),[i,r]);return(0,b.jsx)("aside",{className:(0,o.A)(s.G.docs.docSidebarContainer,le.docSidebarContainer,n&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&n&&c(!0)},children:(0,b.jsx)(re,{children:(0,b.jsxs)("div",{className:(0,o.A)(le.sidebarViewport,r&&le.sidebarViewportHidden),children:[(0,b.jsx)(oe,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,b.jsx)(se,{toggleSidebar:d})]})})})}const de={docMainContainer:"docMainContainer_YXHj",docMainContainerEnhanced:"docMainContainerEnhanced_ilm6",docItemWrapperEnhanced:"docItemWrapperEnhanced_i1Ts"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,r.t)();return(0,b.jsx)("main",{className:(0,o.A)(de.docMainContainer,(t||!a)&&de.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced),children:n})})}const me={docRoot:"docRoot_CXwL",docsWrapper:"docsWrapper_Gyqn"};function be(e){let{children:t}=e;const n=(0,r.t)(),[o,i]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:me.docsWrapper,children:[(0,b.jsx)(p,{}),(0,b.jsxs)("div",{className:me.docRoot,children:[n&&(0,b.jsx)(ce,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,b.jsx)(ue,{hiddenSidebarContainer:o,children:t})]})]})}var pe=n(1836);function he(e){const t=(0,l.B5)(e);if(!t)return(0,b.jsx)(pe.A,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,b.jsx)(i.e3,{className:(0,o.A)(s.G.page.docsDocPage),children:(0,b.jsx)(r.V,{name:a,items:c,children:(0,b.jsx)(be,{children:n})})})}}}]);