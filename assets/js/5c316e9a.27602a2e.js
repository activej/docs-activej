"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[8025],{6425:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var t=i(5893),s=i(1151),n=i(7815),o=i(3149);const c={title:"ActiveJ RPC | Lightning-fast binary protocol for high-load architecture",keywords:["java","java library","tutorial","guide","memcached","rpc","web application","high-load","microservices"],sidebar_label:"Overview",description:"ActiveJ RPC is a lightning-fast binary protocol for high-load microservices architecture",slug:"/rpc"},a="Overview",l={id:"rpc/overview",title:"ActiveJ RPC | Lightning-fast binary protocol for high-load architecture",description:"ActiveJ RPC is a lightning-fast binary protocol for high-load microservices architecture",source:"@site/docs/rpc/overview.mdx",sourceDirName:"rpc",slug:"/rpc",permalink:"/rpc",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ActiveJ RPC | Lightning-fast binary protocol for high-load architecture",keywords:["java","java library","tutorial","guide","memcached","rpc","web application","high-load","microservices"],sidebar_label:"Overview",description:"ActiveJ RPC is a lightning-fast binary protocol for high-load microservices architecture",slug:"/rpc"},sidebar:"docs",previous:{title:"Examples",permalink:"/specializer/examples"},next:{title:"Basic Examples",permalink:"/rpc/basic-examples"}},d={},h=[{value:"Why ActiveJ RPC?",id:"why-activej-rpc",level:2},{value:"Asynchronous binary RPC protocol with extensive cloud strategies",id:"asynchronous-binary-rpc-protocol-with-extensive-cloud-strategies",level:2},{value:"Add ActiveJ RPC to your project",id:"add-activej-rpc-to-your-project",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(r.p,{children:["ActiveJ RPC is a lightweight and easy-to-use Java library for developing ",(0,t.jsx)(r.strong,{children:"high-load distributed applications"})," and Memcached-like solutions. It ",(0,t.jsx)(r.strong,{children:"overcomes the overheads"})," of using JSON or XML encoding over HTTP. ActiveJ RPC is powered by one of the fastest JVM serializers (",(0,t.jsx)(r.a,{href:"/serializer",children:"ActiveJ Serializer"}),"), runs on TCP, supports request pipelining and has itw own ",(0,t.jsx)(r.strong,{children:"high-performance binary streaming protocol"}),". Along with that, ActiveJ RPC uses Datastream module for asynchronous data processing and back-pressure control. It also has built-in commonly used RPC ",(0,t.jsx)(r.strong,{children:"strategies and high fault tolerance"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"why-activej-rpc",children:"Why ActiveJ RPC?"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Performance of up to ~15M requests per second on a single CPU core"}),"\n",(0,t.jsx)(r.li,{children:"A simple API for defining client and server message handlers"}),"\n",(0,t.jsx)(r.li,{children:"A wide range of RPC strategies (first available, round-robin, rendezvous hashing, etc.) that can be easily combined"}),"\n",(0,t.jsx)(r.li,{children:"Custom fast data streaming protocol"}),"\n",(0,t.jsxs)(r.li,{children:["Utilizes ActiveJ's ",(0,t.jsxs)(r.strong,{children:[(0,t.jsx)(r.a,{href:"/async-io/datastream",children:"Datastream"}),", ",(0,t.jsx)(r.a,{href:"/async-io/net",children:"Net"})]})," and ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/serializer",children:"Serializer"})})," modules to achieve high performance"]}),"\n",(0,t.jsx)(r.li,{children:"Fault tolerance with reconnections to fallback and replica servers"}),"\n",(0,t.jsx)(r.li,{children:"Built-in support for message pipelining"}),"\n",(0,t.jsx)(r.li,{children:"Ideal for near-real-time servers with application-specific business logic"}),"\n",(0,t.jsx)(r.li,{children:"Tested in a high-load production environment"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"asynchronous-binary-rpc-protocol-with-extensive-cloud-strategies",children:"Asynchronous binary RPC protocol with extensive cloud strategies"}),"\n",(0,t.jsxs)(r.p,{children:["ActiveJ RPC features highly optimized flexible server and client implementations, as well as predefined cloud strategies. Even ",(0,t.jsx)(r.strong,{children:"complex, scalable solutions"})," such as ",(0,t.jsx)(r.strong,{children:"high-performance microservices or Memcached-like"})," servers can be conveniently built with these technologies."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'@Provides\nRpcServer rpcServer(NioReactor reactor) {\n\treturn RpcServer.builder(reactor)\n\t\t.withMessageTypes(String.class)\n\t\t.withHandler(String.class,\n\t\t\trequest -> Promise.of("Hello " + request))\n\t\t.withListenPort(SERVICE_PORT)\n\t\t.build();\n}\n\n@Provides\nIRpcClient rpcClient(NioReactor reactor) {\n\treturn RpcClient.builder(reactor)\n\t\t.withMessageTypes(String.class)\n\t\t.withStrategy(server(new InetSocketAddress(SERVICE_PORT)))\n\t\t.build();\n}\n'})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'rpcClient.sendRequest("World")\n\t.whenResult(response -> System.out.println(response)); // prints "Hello World"\n'})}),"\n",(0,t.jsx)(r.h2,{id:"add-activej-rpc-to-your-project",children:"Add ActiveJ RPC to your project"}),"\n",(0,t.jsxs)(r.p,{children:["You can add ActiveJ RPC to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ RPC ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(n.Z,{name:"currentVersion"})})," (see on ",(0,t.jsx)(o.Z,{href:"https://github.com/activej/activej/tree/{{currentVersion}}/cloud-rpc",children:"Github"})," or ",(0,t.jsx)(r.a,{href:"https://mvnrepository.com/artifact/io.activej/activej-rpc",children:"Maven"}),")."]})]})}function u(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},3149:(e,r,i)=>{i.d(r,{Z:()=>l});i(7294);var t=i(9962),s=i(1106),n=i.n(s),o=i(5835),c=i.n(o),a=i(5893);c().interpolate=/{{([\s\S]+?)}}/g;const l=function(e){let{href:r,children:i,target:s="_blank"}=e;const{siteConfig:o}=(0,t.Z)(),c=n()(r);return(0,a.jsx)("a",{href:c(o.customFields),target:s,children:i})}},7815:(e,r,i)=>{i.d(r,{Z:()=>s});i(7294);var t=i(9962);const s=e=>{let{name:r}=e;const{siteConfig:i}=(0,t.Z)();if(!r)throw new Error("Variable name is required");if(void 0===i.customFields[r])throw new Error(`Variable ${r} not exist`);return i.customFields[r]}}}]);