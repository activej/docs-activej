"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1361],{9166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var r=n(5893),s=n(1151),i=n(7618),a=n(3149),l=n(7815);const c={title:"ActiveJ HTTP | Asynchronous HTTP server and client",description:"Create legacy-free asynchronous HTTP server and client applications with ActiveJ",sidebar_label:"Overview",keywords:["java http","java","http server","http client","java http server","java http client","java framework","spring alternative","netty alternative","jetty alternative"],slug:"/http"},o="Overview",h={id:"http/overview",title:"ActiveJ HTTP | Asynchronous HTTP server and client",description:"Create legacy-free asynchronous HTTP server and client applications with ActiveJ",source:"@site/docs/http/overview.mdx",sourceDirName:"http",slug:"/http",permalink:"/http",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ActiveJ HTTP | Asynchronous HTTP server and client",description:"Create legacy-free asynchronous HTTP server and client applications with ActiveJ",sidebar_label:"Overview",keywords:["java http","java","http server","http client","java http server","java http client","java framework","spring alternative","netty alternative","jetty alternative"],slug:"/http"},sidebar:"docs",previous:{title:"Config",permalink:"/boot/config"},next:{title:"Benchmarks",permalink:"/http/benchmarks"}},d={},p=[{value:"Features",id:"features",level:2},{value:"AsyncServlet",id:"asyncservlet",level:2},{value:"Add ActiveJ HTTP to your project",id:"add-activej-http-to-your-project",level:2}];function v(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"High-performance asynchronous HTTP server and client with WebSocket support."}),"\n",(0,r.jsxs)(t.p,{children:["A concise and more efficient alternative to Spring, Jetty, Vert.x, and other similar solutions.\nActiveJ HTTP significantly outperforms them, which is proven by numerous ",(0,r.jsx)(t.a,{href:"/http/benchmarks",children:"benchmarks"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Provides tools to create HTTP servers and clients with asynchronous I/O in a simple and convenient way:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",metastring:"url=/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java tag=EXAMPLE",children:'public final class HttpHelloWorldExample extends HttpServerLauncher {\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200()\n      .withPlainText("Hello World")\n      .toPromise();\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new HttpHelloWorldExample();\n    launcher.launch(args);\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fully asynchronous"}),"\n",(0,r.jsxs)(t.li,{children:["No third-party dependencies, built on top of the ",(0,r.jsx)(t.a,{href:"/async-io/net",children:"ActiveJ Net"})," module"]}),"\n",(0,r.jsx)(t.li,{children:"No legacy layers of adapters"}),"\n",(0,r.jsx)(t.li,{children:"WebSocket support"}),"\n",(0,r.jsx)(t.li,{children:"TLS support"}),"\n",(0,r.jsxs)(t.li,{children:["Can be used as an application web server: supports externally provided ",(0,r.jsx)(t.a,{href:"/inject",children:"ActiveJ Inject (DI)"})," modules with business logic and ",(0,r.jsx)(t.code,{children:"AsyncServlets"})]}),"\n",(0,r.jsxs)(t.li,{children:["Competitively fast as proven by ",(0,r.jsx)(t.a,{href:"/http/benchmarks",children:"benchmarks"})]}),"\n",(0,r.jsxs)(t.li,{children:["Highly optimized and GC-friendly:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Automatic recycling of ",(0,r.jsx)(t.a,{href:"/misc/bytebuf",children:(0,r.jsx)(t.strong,{children:"ByteBufs"})})," associated with ",(0,r.jsx)(t.strong,{children:"HttpRequest"}),"/",(0,r.jsx)(t.strong,{children:"HttpResponse"}),"\nand also ",(0,r.jsx)(t.strong,{children:"ByteBufs"})," received from ",(0,r.jsx)(t.a,{href:"/async-io/net",children:"Net async sockets"})]}),"\n",(0,r.jsx)(t.li,{children:"Optimized headers multimap and internal URL representation with low yield of garbage objects"}),"\n",(0,r.jsxs)(t.li,{children:["Specialized headers subclasses render their content directly into ",(0,r.jsx)(t.code,{children:"ByteBuf"}),", without intermediate garbage objects"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"asyncservlet",children:"AsyncServlet"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Basically, it's just an asynchronous function that maps ",(0,r.jsx)(i.Z,{text:"HttpRequest",url:"/core-http/src/main/java/io/activej/http/HttpRequest.java"})," to ",(0,r.jsx)(i.Z,{text:"HttpResponse",url:"/core-http/src/main/java/io/activej/http/HttpResponse.java"})]}),"\n",(0,r.jsxs)(t.li,{children:["Collection of pre-defined ",(0,r.jsx)(t.code,{children:"AsyncServlets"})," out of the box (",(0,r.jsx)(t.a,{href:"/http/examples#static-servlet-example",children:(0,r.jsx)(t.code,{children:"StaticServlet"})}),",\n",(0,r.jsx)(t.a,{href:"/http/examples#blocking-servlet-example",children:(0,r.jsx)(t.code,{children:"BlockingServlet"})}),", ",(0,r.jsx)(t.a,{href:"/http/examples#routing-servlet-example",children:(0,r.jsx)(t.code,{children:"RoutingServlet"})}),", etc.)"]}),"\n",(0,r.jsxs)(t.li,{children:["Extensive support of functional composition of ",(0,r.jsx)(t.code,{children:"AsyncServlets"}),". ",(0,r.jsx)(t.a,{href:"/http/examples#routing-servlet-example",children:(0,r.jsx)(t.code,{children:"RoutingServlet"})})," for building servlet routing","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Flexible mapping of HTTP paths and methods to ",(0,r.jsx)(t.code,{children:"AsyncServlets"})," (including other RoutingServlets)"]}),"\n",(0,r.jsxs)(t.li,{children:["Support of path parameters (like ",(0,r.jsxs)(t.em,{children:["/users/",":id"]}),") and relative paths"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"add-activej-http-to-your-project",children:"Add ActiveJ HTTP to your project"}),"\n",(0,r.jsxs)(t.p,{children:["You can add ActiveJ HTTP to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ HTTP ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(l.Z,{name:"currentVersion"})})," (see on ",(0,r.jsx)(a.Z,{href:"https://github.com/activej/activej/tree/{{currentVersion}}/core-http",children:"Github"})," or ",(0,r.jsx)(t.a,{href:"https://mvnrepository.com/artifact/io.activej/activej-http",children:"Maven"}),")."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},3149:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var r=n(9962),s=n(1106),i=n.n(s),a=n(5835),l=n.n(a),c=n(5893);l().interpolate=/{{([\s\S]+?)}}/g;const o=function(e){let{href:t,children:n,target:s="_blank"}=e;const{siteConfig:a}=(0,r.Z)(),l=i()(t);return(0,c.jsx)("a",{href:l(a.customFields),target:s,children:n})}},7618:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var r=n(9962),s=n(5893);const i=e=>{let{url:t,text:n,isInline:i=!0,children:a}=e;const{siteConfig:l}=(0,r.Z)(),c=t.startsWith("/examples")?l.customFields.githubExamplesBranch:l.customFields.githubBranch;return(0,s.jsx)("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:l.customFields.githubUrl+"/"+c+t,target:"_blank",children:n||a})}},7815:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var r=n(9962);const s=e=>{let{name:t}=e;const{siteConfig:n}=(0,r.Z)();if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error(`Variable ${t} not exist`);return n.customFields[t]}}}]);