"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9081],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85231:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"ActiveJ | Platform Overview",sidebar_label:"Overview",keywords:["java","java framework","spring alternative","netty alternative","jetty alternative","nodejs alternative","guice alternative","asynchronous","eventloop","java nio","embedded http","java http server","java http client","high load","streams","serializers","http","code generation","crdt"],description:"With ActiveJ you can create web applications extremely fast and simply, which may resemble Node.js approach."},c="Introduction",s={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"ActiveJ | Platform Overview",description:"With ActiveJ you can create web applications extremely fast and simply, which may resemble Node.js approach.",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/overview",tags:[],version:"current",frontMatter:{title:"ActiveJ | Platform Overview",sidebar_label:"Overview",keywords:["java","java framework","spring alternative","netty alternative","jetty alternative","nodejs alternative","guice alternative","asynchronous","eventloop","java nio","embedded http","java http server","java http client","high load","streams","serializers","http","code generation","crdt"],description:"With ActiveJ you can create web applications extremely fast and simply, which may resemble Node.js approach."},sidebar:"docs",next:{title:"Eventloop",permalink:"/async-io/eventloop"}},p=[{value:"Core Features",id:"core-features",children:[]},{value:"Platform Structure",id:"platform-structure",children:[{value:"Core components:",id:"core-components",children:[]},{value:"Bytecode manipulation tools:",id:"bytecode-manipulation-tools",children:[]},{value:"Cluster technologies:",id:"cluster-technologies",children:[]}]},{value:"ActiveJ Background",id:"activej-background",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"ActiveJ is an ambitious platform that was built from the ground up and aims to redefine modern Java programming. ActiveJ\nis the result of developing a genuinely high-load ecosystem for AdKernel, a Real Time Bidding ad-serving platform\nprocessing hundreds of billions requests daily.\nActiveJ features a rich stack of technologies without zoo of diverse solutions tailored together with excessive abstractions.\nIt's a full-featured high-performance alternative to Spring, Micronaut, Apache Spark, Quarkus, and other solutions."),(0,i.kt)("h2",{id:"core-features"},"Core Features"),(0,i.kt)("p",null,"ActiveJ distinctive features are simplicity, raw performance and consistency.\nAs a result, it is fast, lightweight and doesn\u2019t feature tons of abstractions and third-party dependencies. Moreover, ActiveJ offers a unique\nprogramming approach, giving priority to business logic instead of framework specifications."),(0,i.kt)("h2",{id:"platform-structure"},"Platform Structure"),(0,i.kt)("p",null,"ActiveJ consists of loosely coupled components that complement and empower each other. Some of them can be used as\nstand-alone libraries."),(0,i.kt)("h3",{id:"core-components"},"Core components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/inject"},"ActiveJ Inject"),". Lightweight Dependency Injection library with powerful tools. Can be used\nas a stand-alone library."),(0,i.kt)("li",{parentName:"ul"},"Async I/O core: ",(0,i.kt)("a",{parentName:"li",href:"/async-io/promise"},(0,i.kt)("inlineCode",{parentName:"a"},"Promise")),", ",(0,i.kt)("a",{parentName:"li",href:"/async-io/eventloop"},(0,i.kt)("inlineCode",{parentName:"a"},"Eventloop")),", ",(0,i.kt)("a",{parentName:"li",href:"/async-io/net"},(0,i.kt)("inlineCode",{parentName:"a"},"Net")),"."),(0,i.kt)("li",{parentName:"ul"},"Lightning-fast and asynchronous data stream processing: ",(0,i.kt)("a",{parentName:"li",href:"/async-io/datastream"},(0,i.kt)("inlineCode",{parentName:"a"},"Datastream")),", ",(0,i.kt)("a",{parentName:"li",href:"/async-io/csp"},(0,i.kt)("inlineCode",{parentName:"a"},"CSP")),"."),(0,i.kt)("li",{parentName:"ul"},"High-performance ",(0,i.kt)("a",{parentName:"li",href:"/http"},"HTTP")," component, features asynchronous HTTP clients and servers. Can be used independently of ActiveJ."),(0,i.kt)("li",{parentName:"ul"},"Bootstrapping and lifecycle management utils: ",(0,i.kt)("a",{parentName:"li",href:"/boot/launcher"},(0,i.kt)("inlineCode",{parentName:"a"},"Launcher")),", ",(0,i.kt)("a",{parentName:"li",href:"/boot/servicegraph"},(0,i.kt)("inlineCode",{parentName:"a"},"Service Graph")),", JMX, Triggers.")),(0,i.kt)("h3",{id:"bytecode-manipulation-tools"},"Bytecode manipulation tools:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/serializer"},(0,i.kt)("strong",{parentName:"a"},"ActiveJ Serializer"))," - world\u2019s fastest JVM-based serializers implemented with runtime\nbytecode generation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/codegen"},(0,i.kt)("strong",{parentName:"a"},"ActiveJ Codegen"))," - dynamic bytecode generator without the complexity of direct bytecode\nmanipulation. Features a streamlined and concise API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/specializer"},(0,i.kt)("strong",{parentName:"a"},"ActiveJ Specializer"))," - a unique technology that automagically significantly speeds up\nyour code by optimizing it for JVM.")),(0,i.kt)("h3",{id:"cluster-technologies"},"Cluster technologies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rpc"},(0,i.kt)("strong",{parentName:"a"},"ActiveJ RPC"))," - a lightning-fast binary protocol for developing distributed applications and\nmicroservices solutions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/fs"},(0,i.kt)("strong",{parentName:"a"},"ActiveJ FS"))," - provides efficient tools for developing scalable remote file storage with support\nof data redundancy, rebalancing, and resharding.")),(0,i.kt)("h2",{id:"activej-background"},"ActiveJ Background"),(0,i.kt)("p",null,"ActiveJ project is an enhanced version of the DataKernel framework. After v3.0 release it was significantly improved and\nrestructured."))}d.isMDXComponent=!0}}]);