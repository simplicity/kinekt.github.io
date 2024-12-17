"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[583],{1559:(e,n,s)=>{s.r(n),s.d(n,{default:()=>_});var r=s(5958),t=s(5855),i=s(3526);const a={outer:"outer_uam_",line:"line_Kh9u"};var o=s(6070);function l(e){return(0,o.jsxs)("div",{className:(0,i.A)(a.outer,e.className),children:[(0,o.jsx)("div",{className:a.line}),e.children]})}function c(e){return e.replace(/\n/,"")}const u={outer:"outer_RzHz",texts:"texts_CSMe",purpleBlob:"purpleBlob_H_CW"};function d(){return(0,o.jsxs)("div",{className:u.outer,children:[(0,o.jsx)("img",{className:u.purpleBlob,src:"img/purple-blob-1.png"}),(0,o.jsxs)("div",{className:u.texts,children:[(0,o.jsx)("h1",{children:"Write Backend Code And Get The Client For Free."}),(0,o.jsx)("p",{children:"Kinekt automatically derives the client with which you call your endpoint."})]}),(0,o.jsx)(l,{children:(0,o.jsx)(t.A,{language:"TypeScript",showLineNumbers:!0,children:p})})]})}const p=c('\nexport const getUser = app.createEndpoint(\n  "GET /users/:id",\n\n  {\n    params: z.object({ id: z.string() }),\n    response: { 200: z.custom<User>() },\n  },\n\n  async ({ params }) => {\n    const user = await db.users.findOne(params.id);\n    return { statusCode: 200, body: user };\n  }\n);\n\nconst user = await getUser({ params: { id: "some-id" } }).ok(200);\n'),m={outer:"outer_Y5Fl",row:"row_Mtr7",paragraphs:"paragraphs_Yj8W",blueBlob:"blueBlob_QCQw",pipelineIllustration:"pipelineIllustration_dZok",routerIllustration:"routerIllustration_PP7Z"};function h(){return(0,o.jsxs)("div",{className:m.outer,children:[(0,o.jsx)("img",{className:m.pipelineIllustration,src:"img/pipeline-illustration.svg"}),(0,o.jsx)("img",{className:m.routerIllustration,src:"img/router-illustration.svg"}),(0,o.jsx)("img",{className:m.blueBlob,src:"img/blue-blob-1.png"}),(0,o.jsx)("h1",{children:"Fast"}),(0,o.jsx)("div",{className:m.row,children:(0,o.jsx)("div",{className:m.paragraphs,children:(0,o.jsx)("p",{children:"Kinekt is built from the ground up with performance in mind. It features a carefully crafted middleware engine which easily competes with other node-based web-frameworks, and uses a radix-tree for routing."})})})]})}var b=s(6908);const g={header:"header_DR8y",button:"button_cXLY"};function x(){return(0,o.jsxs)("header",{className:g.header,children:[(0,o.jsx)("h1",{children:"Build REST APIs With High Precision."}),(0,o.jsx)("h2",{children:"A TypeScript-first web framework for building the next generation of web apps."}),(0,o.jsx)(b.A,{className:(0,i.A)("button","button--primary",g.button),to:"/docs/getting-started",children:"Get Started"}),(0,o.jsx)("img",{src:"img/herobg.png"})]})}const j={outer:"outer_VK1Q",blueBlob1:"blueBlob1_IlIH",blueBlob2:"blueBlob2_rC4s",purpleBlob1:"purpleBlob1_rJ4P"};function y(){return(0,o.jsxs)("div",{className:j.outer,children:[(0,o.jsx)("img",{className:j.blueBlob1,src:"img/blue-blob-1.png"}),(0,o.jsx)("img",{className:j.blueBlob2,src:"img/blue-blob-1.png"}),(0,o.jsx)("img",{className:j.purpleBlob1,src:"img/purple-blob-1.png"}),(0,o.jsx)("h1",{children:"100% Type Safe"}),(0,o.jsx)("p",{children:"Kinekt takes full advantage of the TypeScript Compiler to write 100% type safe code."}),(0,o.jsx)(l,{children:(0,o.jsx)(t.A,{language:"TypeScript",showLineNumbers:!0,children:f})}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(l,{children:(0,o.jsx)(t.A,{language:"TypeScript",showLineNumbers:!0,children:w})})]})}const f=c("\n// Type safety in pipelines\n\nconst pipeline = createPipeline(\n  ...,\n  authenticate(handler), //               <-- adding authenticate middleware\n                         //                   with a handler callback\n  ...\n);\n\nexport const getUser = app.createEndpoint(\n  // ...\n\n  async ({ context }) => {\n    const session = context.session; //   <-- the context now has a session \n                                     //       property available which is\n                                     //       determined by the handler that was\n                                     //       defined.\n    const user = session.user;\n\n    // ...\n  }\n);\n"),w=c('\n// Type safety in endpoints\n\nexport const createUser = testPipeline.createEndpoint(\n  "POST /organization/:organizationId/users",\n  //                        ^---- by using a param segment, you are forced to\n  //                              use a \'params\' schema containing\n  //                              \'organizationId\' (see below).\n\n  // ^---- by using POST method here, you are forced to declare a body schema\n  //       (see below).\n\n  {\n    params: z.object({ organizationId: z.string() }), //    <- params schema\n    query: z.object({ private: zodBooleanFromString() }),\n    body: z.object({ email: z.string() }), //               <- body schema\n\n    response: {\n      // You must explicitly declare which bodies are returned for which status\n      // codes.\n      200: z.custom<User>(),\n      409: z.custom<{ message: string }>(),\n    },\n  },\n\n  async ({ params, query, body, context }) => {\n    // You must return bodies and status codes as declared in the response\n    // schemas.\n    if (body.email === "existing@email.com") {\n      return {\n        statusCode: 409,\n        body: { message: "User with this email already exists" },\n      };\n    }\n\n    return {\n      statusCode: 200,\n      body: {\n        id: "some-id",\n        email: body.email,\n        organizationId: params.organizationId,\n        private: query.private,\n      },\n    };\n  }\n);\n');function N(){return(0,o.jsxs)(r.A,{description:"A TypeScript-first web framework for building the next generation of web apps.",children:[(0,o.jsx)(x,{}),(0,o.jsxs)("main",{className:"home-main",children:[(0,o.jsx)(d,{}),(0,o.jsx)(h,{}),(0,o.jsx)(y,{})]})]})}function _(){return(0,o.jsx)(N,{})}}}]);