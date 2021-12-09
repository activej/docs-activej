"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[2996],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77618:function(e,t,n){var a=n(67294),r=n(39962);t.Z=function(e){var t=e.url,n=e.text,i=e.isInline,o=void 0===i||i,l=e.children,s=(0,r.Z)().siteConfig,p=t.startsWith("/examples")?s.customFields.githubExamplesBranch:s.customFields.githubBranch;return a.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+p+t,target:"_blank"},n||l)}},77815:function(e,t,n){n(67294);var a=n(39962);t.Z=function(e){var t=e.name,n=(0,a.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},39169:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=(n(77618),n(77815),["components"]),l={title:"ActiveJ | Getting Started",sidebar_label:"Getting Started",keywords:["java","java for beginners","java framework","guide","tutorial","web application","async","spring","spring alternative","netty alternative","jetty alternative","authorization","server","client","servlet"],description:"A high-performance asynchronous HTTP server in 10 lines of code using ActiveJ Java platform.",sidebar_position:1},s="Getting Started",p={unversionedId:"tutorials/getting-started",id:"tutorials/getting-started",isDocsHomePage:!1,title:"ActiveJ | Getting Started",description:"A high-performance asynchronous HTTP server in 10 lines of code using ActiveJ Java platform.",source:"@site/docs/tutorials/getting-started.mdx",sourceDirName:"tutorials",slug:"/tutorials/getting-started",permalink:"/tutorials/getting-started",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"ActiveJ | Getting Started",sidebar_label:"Getting Started",keywords:["java","java for beginners","java framework","guide","tutorial","web application","async","spring","spring alternative","netty alternative","jetty alternative","authorization","server","client","servlet"],description:"A high-performance asynchronous HTTP server in 10 lines of code using ActiveJ Java platform.",sidebar_position:1},sidebar:"tutorials",next:{title:"Template Engine Integration",permalink:"/tutorials/template-engine-integration"}},c=[{value:"What you will need:",id:"what-you-will-need",children:[],level:2},{value:"Which ActiveJ technologies will be used:",id:"which-activej-technologies-will-be-used",children:[],level:2},{value:"To proceed with this guide you have two options:",id:"to-proceed-with-this-guide-you-have-two-options",children:[],level:2},{value:"Create from Maven Archetype",id:"create-from-maven-archetype",children:[],level:2},{value:"Working Example",id:"working-example",children:[],level:2},{value:"Source code",id:"source-code",children:[{value:"3. Run the app",id:"3-run-the-app",children:[],level:3}],level:2},{value:"What&#39;s next?",id:"whats-next",children:[],level:2}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"ActiveJ is a minimalistic and boilerplate-free Java platform that is intended to replace Spring, Spark, Micronaut, and\nother similar solutions.\nIt features a rich stack of technologies with an efficient async programming model and powerful DI library ",(0,i.kt)("a",{parentName:"p",href:"/inject"},"ActiveJ Inject"),"."),(0,i.kt)("p",null,"ActiveJ consists of several loosely coupled components that complement and empower each other: async core, efficient I/O processing,\nhigh-performance Jetty and Netty alternatives, along with handy boot utilities."),(0,i.kt)("p",null,"In this tutorial we will look at a simple HTTP server that sends a \u201cHello World!\u201d greeting. With ActiveJ\n",(0,i.kt)("a",{parentName:"p",href:"/boot/launcher"},"Launchers"),", particularly ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," subclass, and ActiveJ Inject DI you can\nwrite a fully-functional server in around 10 lines of code."),(0,i.kt)("h2",{id:"what-you-will-need"},"What you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"5-10 minutes"),(0,i.kt)("li",{parentName:"ul"},"Your favorite IDE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/javase-downloads.html"},"JDK 1.8+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven 3.0+"))),(0,i.kt)("h2",{id:"which-activej-technologies-will-be-used"},"Which ActiveJ technologies will be used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ActiveJ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/inject"},"ActiveJ Inject"))),(0,i.kt)("h2",{id:"to-proceed-with-this-guide-you-have-two-options"},"To proceed with this guide you have two options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the app from Maven ",(0,i.kt)("a",{parentName:"li",href:"#create-from-maven-archetype"},"archetype")),(0,i.kt)("li",{parentName:"ul"},"Download and run ",(0,i.kt)("a",{parentName:"li",href:"#working-example"},"working example"))),(0,i.kt)("h2",{id:"create-from-maven-archetype"},"Create from Maven Archetype"),(0,i.kt)("p",null,"Simply enter the following command in the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate -DarchetypeGroupId=io.activej -DarchetypeArtifactId=archetype-http -DarchetypeVersion=5.0\n")),(0,i.kt)("p",null,"The project will be automatically generated on your machine. Open ",(0,i.kt)("strong",{parentName:"p"},"WebApp")," and run its ",(0,i.kt)("em",{parentName:"p"},"main")," method. Then\nopen your favourite browser and go to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080")),(0,i.kt)("h2",{id:"working-example"},"Working Example"),(0,i.kt)("p",null,"First, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/examples-5.0"},"clone ActiveJ")," locally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone -b examples-5.0 https://github.com/activej/activej.git\n")),(0,i.kt)("p",null,"Then open the project in your IDE of choice. Before running the example, build the project (",(0,i.kt)("strong",{parentName:"p"},"Ctrl + F9")," for IntelliJ IDEA)."),(0,i.kt)("p",null,"Then open ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpHelloWorldExample")," class, which is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"activej/examples/tutorials/getting-started"),"\nand run its ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," method. Open your favourite browser and go to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080")),(0,i.kt)("h2",{id:"source-code"},"Source code"),(0,i.kt)("p",null,"A source code for a simple web server is quite minimal. It only consists of a single Java class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java tag=EXAMPLE",url:"/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java",tag:"EXAMPLE"},'public final class HttpHelloWorldExample extends HttpServerLauncher {\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200().withPlainText("Hello World");\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new HttpHelloWorldExample();\n    launcher.launch(args);\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HttpHelloWorldExample")," extends ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," class to manage application lifecycle.\nIn this example, the only important thing to know about the superclass is that it implements the ",(0,i.kt)("em",{parentName:"p"},"launch")," method that starts our server."),(0,i.kt)("p",null,"We provide an ",(0,i.kt)("strong",{parentName:"p"},"AsyncServlet")," which receives ",(0,i.kt)("strong",{parentName:"p"},"HttpRequest"),"s from clients, creates ",(0,i.kt)("strong",{parentName:"p"},"HttpResponse"),"s and sends them back to the client.\n",(0,i.kt)("inlineCode",{parentName:"p"},"@Provides")," annotation means that this method is available for binding as the root HTTP endpoint listener."),(0,i.kt)("p",null,"To define processing of the received requests, we override ",(0,i.kt)("em",{parentName:"p"},"AsyncServlet.serve")," method with a lambda. We create a promise\nof ",(0,i.kt)("strong",{parentName:"p"},"HttpResponse")," with code ",(0,i.kt)("inlineCode",{parentName:"p"},"200"),' and "Hello World!" body. ActiveJ is fully asynchronous, so our HTTP Servlets are asynchronous too.\nA simple ',(0,i.kt)("strong",{parentName:"p"},"HttpResponse")," can be replaced with a ",(0,i.kt)("a",{parentName:"p",href:"/async-io/promise"},"Promise")," of ",(0,i.kt)("strong",{parentName:"p"},"HttpResponse")," to make it asynchronous."),(0,i.kt)("p",null,"We also define the ",(0,i.kt)("em",{parentName:"p"},"main")," method and launch our server using the ",(0,i.kt)("em",{parentName:"p"},"launch")," method. This method injects dependencies, starts\nthe application, runs it and stops it when needed."),(0,i.kt)("h3",{id:"3-run-the-app"},"3. Run the app"),(0,i.kt)("p",null,"Now, let's test the application. First, run ",(0,i.kt)("em",{parentName:"p"},"HttpHelloWorldExample.main"),", then open your favourite browser and go to\n",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080"),"\nYou will receive a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World!")," message from the server. Congratulations, you've just launched your first\nActiveJ application!"),(0,i.kt)("h2",{id:"whats-next"},"What's next?"),(0,i.kt)("p",null,"To make ActiveJ more developer-friendly, we've created dozens of tutorials and examples of different scales,\nrepresenting most of the platform's capabilities. Click \"Next\" to get to the next tutorial. You can also explore ActiveJ\n",(0,i.kt)("a",{parentName:"p",href:"/boot/launcher"},"docs")," first."))}h.isMDXComponent=!0}}]);