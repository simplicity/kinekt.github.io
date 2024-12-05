"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[976],{2014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>T,contentTitle:()=>E,default:()=>U,frontMatter:()=>V,metadata:()=>r,toc:()=>N});const r=JSON.parse('{"id":"intro","title":"Getting Started","description":"Kinekt is under active development. APIs will change, and you probably shouldn\'t use it in production just yet.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/docs/intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar"}');var a=t(6070),i=t(5658),s=t(758),l=t(3526),o=t(9341),c=t(5557),d=t(95),u=t(278),p=t(4375),h=t(5343);function m(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,p.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,c.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=g(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[o,c]=b({queryString:t,groupId:r}),[u,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,h.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),m=(()=>{const e=o??u;return f({value:e,tabValues:a})?e:null})();(0,d.A)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),p(e)}),[c,p,a]),tabValues:a}}var x=t(3293);const y={tabList:"tabList_PUew",tabItem:"tabItem_UDqD"};function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==r&&(d(n),i(a))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:p,onClick:u,...i,className:(0,l.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=v(e);return(0,a.jsxs)("div",{className:(0,l.A)("tabs-container",y.tabList),children:[(0,a.jsx)(j,{...n,...e}),(0,a.jsx)(w,{...n,...e})]})}function S(e){const n=(0,x.A)();return(0,a.jsx)(k,{...e,children:m(e.children)},String(n))}const I={tabItem:"tabItem_AXI0"};function A(e){let{children:n,hidden:t,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.A)(I.tabItem,r),hidden:t,children:n})}const V={sidebar_position:1},E="Getting Started",T={},N=[{value:"Installation",id:"installation",level:2},{value:"Define a pipeline",id:"define-a-pipeline",level:2},{value:"Define an endpoint",id:"define-an-endpoint",level:2},{value:"Create an entry point",id:"create-an-entry-point",level:2},{value:"Start server",id:"start-server",level:2},{value:"Call endpoint with curl",id:"call-endpoint-with-curl",level:2},{value:"Use the client",id:"use-the-client",level:2},{value:"Add CORS handling",id:"add-cors-handling",level:2},{value:"Add authentication",id:"add-authentication",level:2}];function C(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Kinekt is under active development. APIs will change, and you probably shouldn't use it in production just yet."})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["The code that follows is available under ",(0,a.jsx)(n.a,{href:"https://github.com/simplicity/try-kinekt-with-node",children:"this"})," repo."]})}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(S,{groupId:"npm2yarn",children:[(0,a.jsx)(A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install kinekt\n"})})}),(0,a.jsx)(A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add kinekt\n"})})}),(0,a.jsx)(A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add kinekt\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"define-a-pipeline",children:"Define a pipeline"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-TypeScript",metastring:'title="./pipeline.ts"',children:'import { AuthenticateCallbackResult, BasePipelineContext, checkAcceptHeader, createPipeline, createValidatedEndpointFactory, deserialize, finalize, handleValidationErrors, logger, serialize, ValidationErrors, withValidation, } from "kinekt";\n\nconst defaultValidationErrorHandler = (validationErrors: ValidationErrors) => ({\n  statusCode: 400 as const,\n  body: validationErrors,\n});\n\nexport const pipeline = createValidatedEndpointFactory(\n  createPipeline(\n    checkAcceptHeader(),\n    deserialize(),\n    withValidation()\n  ).split( // <-- This is where the request handler callback will be placed\n    handleValidationErrors(defaultValidationErrorHandler),\n    serialize(),\n    finalize(),\n    logger()\n  )\n);\n'})}),"\n",(0,a.jsx)(n.h2,{id:"define-an-endpoint",children:"Define an endpoint"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-TypeScript",metastring:'title="./getUser.ts"',children:'import { z } from "zod";\nimport { pipeline } from "../../pipeline";\n\ntype User = { email: string };\n\nexport const getUser = pipeline.createEndpoint(\n  "GET /users/:id",\n\n  {\n    params: z.object({ id: z.coerce.number() }),\n    response: {\n      200: z.custom<User>(),\n      404: z.custom<{ message: string }>(),\n    },\n  },\n\n  async ({ params }) => {\n    const user: User = { email: "some@email.com" } // Insert custom db fetching logic here\n\n    if (user === undefined) {\n      return {\n        statusCode: 404,\n        body: { message: "User not found" },\n      };\n    }\n\n    return {\n      statusCode: 200,\n      body: user,\n    };\n  }\n);\n'})}),"\n",(0,a.jsx)(n.h2,{id:"create-an-entry-point",children:"Create an entry point"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-TypeScript",metastring:'title="./api.ts"',children:'import {\n  consoleLogger,\n  createPipeline,\n  createServer,\n  logger,\n  notFound,\n} from "kinekt";\nimport { getUser } from "./endpoints/users/getUser";\n\n// If you don\'t host a notFound endpoint, the server will return a 500 error\n// instead of a 404 if an unknown path is requested\nconst notFoundEndpoint = { pipeline: createPipeline(notFound(), logger()) };\n\nconst serve = createServer({\n  logger: consoleLogger,\n  port: parseInt(process.env.PORT ?? "3000"),\n  hostname: "0.0.0.0",\n});\n\n// Add additional endpoints here\nserve(notFoundEndpoint, getUser);\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"start-server",children:"Start server"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ts-node api.ts\n"})}),"\n",(0,a.jsx)(n.h2,{id:"call-endpoint-with-curl",children:"Call endpoint with curl"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:3000/users/123\n"})}),"\n",(0,a.jsx)(n.h2,{id:"use-the-client",children:"Use the client"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-TypeScript",metastring:'title="./client.ts"',children:'import {pipeline} from "./pipeline"\n\npipeline.setGlobalClientParams({\n  baseUrl: process.env.BASE_URL ?? "http://localhost:3000",\n});\n\ngetUser({ params: { id: 123 } })\n  .ok(200) // With this, you tell the client that you assume to receive a 200\n           // status code. Since the `getUser` endpoint might also return 404,\n           // you could use `.ok(400)` as well. An error will be thrown if the\n           // returned status code doesn\'t meet the expectation.\n           //\n           // Alternatively, you can use `.all()` to handle all potential\n           // results, including unexpected errors such as network errors.\n  .then(console.log);\n'})}),"\n",(0,a.jsx)(n.h2,{id:"add-cors-handling",children:"Add CORS handling"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-TypeScript",metastring:'title="./pipeline.ts"',children:'createPipeline(\n  cors({origins: "*"}), // Add cors middleware. You should add this to the top\n                        // of the pipeline.\n  ...\n)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"add-authentication",children:"Add authentication"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-TypeScript",metastring:'title="./pipeline.ts"',children:'export type TestSession = { user: { email: string } };\n\nasync function getSession<In extends BasePipelineContext>(\n  context: In\n): Promise<AuthenticateCallbackResult<TestSession>> {\n  // Implement custom authentication logic here.\n  const authorization = context.request.getHeader("authorization");\n\n  return authorization === null\n    ? { type: "unset" }\n    : { type: "set", session: { user: { email: atob(authorization) } } };\n}\n\ncreatePipeline(\n  cors({origins: "*"}),\n  authenticate(getSession), // Add authenticate middleware. You should add this\n                            // after the cors middleware.\n                            //\n                            // After adding this middleware, you will have\n                            // access to `context.session` inside your request\n                            // handlers.\n  ...\n)\n'})})]})}function U(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(C,{...e})}):C(e)}}}]);