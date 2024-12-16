"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[806],{7127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"benchmarks","title":"Benchmarks","description":"Some basic benchmarks have been created. They compare kinekt to express, fastify and oak. Note that these are very basic benchmarks and do not give a full picture of the performance of these frameworks.","source":"@site/docs/benchmarks.md","sourceDirName":".","slug":"/benchmarks","permalink":"/docs/benchmarks","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"File organization","permalink":"/docs/file-organization"}}');var s=n(6070),a=n(5658);const o={sidebar_position:5},i="Benchmarks",c={},h=[];function d(e){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"benchmarks",children:"Benchmarks"})}),"\n",(0,s.jsx)(t.p,{children:"Some basic benchmarks have been created. They compare kinekt to express, fastify and oak. Note that these are very basic benchmarks and do not give a full picture of the performance of these frameworks."}),"\n",(0,s.jsx)(t.p,{children:"Two factors contribute to kinekt's great performance:"}),"\n",(0,s.jsx)(t.p,{children:"The biggest performance gain comes from kinekt's router implementation. It is based on a radix-tree-like data structure which is created at start-up and allows for very fast routing of deeply nested routes."}),"\n",(0,s.jsx)(t.p,{children:"The middleware engine is another factor. An endpoint is just a relatively short chain of functions which do a bit of work, such as deserializing the request body and serializing the response body. The work performed by the pipeline processor is minimal and hence results in great performance."}),"\n",(0,s.jsxs)(t.p,{children:["Results can be seen ",(0,s.jsx)(t.a,{href:"https://github.com/simplicity/kinekt-benchmarks",children:"here"}),' (printed in the "Run benchmark" job).']})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5658:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(758);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);