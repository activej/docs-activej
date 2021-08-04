"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[2996],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77618:function(e,t,n){var a=n(67294),r=n(39962);t.Z=function(e){var t=e.url,n=e.text,o=e.isInline,i=void 0===o||o,l=e.children,p=(0,r.Z)().siteConfig;return a.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:p.customFields.githubUrl+"/"+p.customFields.githubBranch+t,target:"_blank"},n||l)}},77815:function(e,t,n){n(67294);var a=n(39962);t.Z=function(e){var t=e.name,n=(0,a.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},66724:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(77618),l=n(77815),p=["components"],s={title:"ActiveJ | Getting Started",sidebar_label:"Getting Started",keywords:["java","java for beginners","java framework","guide","tutorial","web application","async","spring","spring alternative","netty alternative","jetty alternative","authorization","server","client","servlet"],description:"Create a high-performance asynchronous HTTP server in 10 lines of code using ActiveJ Java platform.",sidebar_position:1},c="Getting Started",u={unversionedId:"tutorials/getting-started",id:"tutorials/getting-started",isDocsHomePage:!1,title:"ActiveJ | Getting Started",description:"Create a high-performance asynchronous HTTP server in 10 lines of code using ActiveJ Java platform.",source:"@site/docs/tutorials/getting-started.mdx",sourceDirName:"tutorials",slug:"/tutorials/getting-started",permalink:"/tutorials/getting-started",version:"current",sidebarPosition:1,frontMatter:{title:"ActiveJ | Getting Started",sidebar_label:"Getting Started",keywords:["java","java for beginners","java framework","guide","tutorial","web application","async","spring","spring alternative","netty alternative","jetty alternative","authorization","server","client","servlet"],description:"Create a high-performance asynchronous HTTP server in 10 lines of code using ActiveJ Java platform.",sidebar_position:1},sidebar:"tutorials",next:{title:"Template Engine Integration",permalink:"/tutorials/template-engine-integration"}},d=[{value:"What you will need:",id:"what-you-will-need",children:[]},{value:"Which ActiveJ technologies will be used:",id:"which-activej-technologies-will-be-used",children:[]},{value:"To proceed with this guide you have three options:",id:"to-proceed-with-this-guide-you-have-three-options",children:[]},{value:"Create from Maven Archetype",id:"create-from-maven-archetype",children:[]},{value:"Working Example",id:"working-example",children:[]},{value:"Step-by-step guide",id:"step-by-step-guide",children:[{value:"1. Configure the project",id:"1-configure-the-project",children:[]},{value:"2. Write <code>HttpHelloWorldExample</code> class",id:"2-write-httphelloworldexample-class",children:[]},{value:"3. Run the app",id:"3-run-the-app",children:[]}]},{value:"What&#39;s next?",id:"whats-next",children:[]}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"ActiveJ is a minimalistic and boilerplate-free Java platform that is intended to replace Spring, Spark, Micronaut, and\nother similar solutions.\nIt features a rich stack of technologies with an efficient async programming model and powerful DI library ",(0,o.kt)("a",{parentName:"p",href:"/inject"},"ActiveJ Inject"),"."),(0,o.kt)("p",null,"ActiveJ consists of several loosely coupled components that complement and empower each other: async core, efficient I/O processing,\nhigh-performance Jetty and Netty alternatives, along with handy boot utilities."),(0,o.kt)("p",null,"In this tutorial we will create a simple HTTP server that sends a \u201cHello World!\u201d greeting. With ActiveJ\n",(0,o.kt)("a",{parentName:"p",href:"/boot/launcher"},"Launchers"),", particularly ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," subclass, and ActiveJ Inject DI you can\nwrite a fully-functional server in around 10 lines of code."),(0,o.kt)("h2",{id:"what-you-will-need"},"What you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"5-10 minutes"),(0,o.kt)("li",{parentName:"ul"},"Your favorite IDE"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/javase-downloads.html"},"JDK 1.8+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven 3.0+"))),(0,o.kt)("h2",{id:"which-activej-technologies-will-be-used"},"Which ActiveJ technologies will be used:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ActiveJ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/inject"},"ActiveJ Inject"))),(0,o.kt)("h2",{id:"to-proceed-with-this-guide-you-have-three-options"},"To proceed with this guide you have three options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create the app from Maven ",(0,o.kt)("a",{parentName:"li",href:"#create-from-maven-archetype"},"archetype")),(0,o.kt)("li",{parentName:"ul"},"Download and run ",(0,o.kt)("a",{parentName:"li",href:"#working-example"},"working example")),(0,o.kt)("li",{parentName:"ul"},"Follow ",(0,o.kt)("a",{parentName:"li",href:"#step-by-step-guide"},"step-by-step guide"))),(0,o.kt)("h2",{id:"create-from-maven-archetype"},"Create from Maven Archetype"),(0,o.kt)("p",null,"Simply enter the following command in the terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate -DarchetypeGroupId=io.activej -DarchetypeArtifactId=archetype-http -DarchetypeVersion={{site.activej_version}}\n")),(0,o.kt)("p",null,"The project will be automatically generated on your machine. Open ",(0,o.kt)("strong",{parentName:"p"},"WebApp")," and run its ",(0,o.kt)("em",{parentName:"p"},"main")," method. Then\nopen your favourite browser and go to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080")),(0,o.kt)("h2",{id:"working-example"},"Working Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(i.Z,{text:"Clone ActiveJ",url:"/",mdxType:"Githublink"}))," locally and import it as a Maven project. Check out branch. Before running the example, build the project (",(0,o.kt)("strong",{parentName:"p"},"Ctrl + F9")," for IntelliJ IDEA)."),(0,o.kt)("p",null,"Then open ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpHelloWorldExample")," class, which is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"activej/examples/tutorials/getting-started"),"\nand run its ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," method. Open your favourite browser and go to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080")),(0,o.kt)("h2",{id:"step-by-step-guide"},"Step-by-step guide"),(0,o.kt)("h3",{id:"1-configure-the-project"},"1. Configure the project"),(0,o.kt)("p",null,"First, create a folder for application and build an appropriate project structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"getting-started\n\u2514\u2500\u2500 pom.xml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main\n        \u2514\u2500\u2500 java\n            \u2514\u2500\u2500 HttpHelloWorldExample.java\n")),(0,o.kt)("p",null,"Next, you need to integrate ActiveJ in your project. There are ",(0,o.kt)("strong",{parentName:"p"},"two")," ways to do it. The ",(0,o.kt)("strong",{parentName:"p"},"first")," option is to add\nMaven dependency to your project. Simply configure your ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"url=/examples/tutorials/getting-started/pom.xml",url:"/examples/tutorials/getting-started/pom.xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>io.activej</groupId>\n  <artifactId>tutorial-getting-started</artifactId>\n  <version>4.3-SNAPSHOT</version>\n\n  <name>Tutorials : Getting-Started</name>\n\n  <properties>\n    <maven.compiler.source>1.8</maven.compiler.source>\n    <maven.compiler.target>1.8</maven.compiler.target>\n  </properties>\n\n  <dependencies>\n    <dependency>\n      <groupId>io.activej</groupId>\n      <artifactId>activej-launchers-http</artifactId>\n      <version>${project.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>ch.qos.logback</groupId>\n      <artifactId>logback-classic</artifactId>\n      <version>1.2.3</version>\n    </dependency>\n  </dependencies>\n\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.codehaus.mojo</groupId>\n        <artifactId>exec-maven-plugin</artifactId>\n        <executions>\n          <execution>\n            <id>HttpHelloWorldExample</id>\n            <goals>\n              <goal>java</goal>\n            </goals>\n            <configuration>\n              <mainClass>HttpHelloWorldExample</mainClass>\n            </configuration>\n          </execution>\n        </executions>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"second")," option is to clone ActiveJ ",(0,o.kt)(i.Z,{text:"from GitHub",url:"/",mdxType:"Githublink"}),", import it as a Maven\nproject, check out branch ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(l.Z,{name:"currentVersion",mdxType:"Variable"}))," and run the following script in project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./install.sh\n")),(0,o.kt)("p",null,"Next, configure your ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file like in the example above.\nMake sure that your project SDK is set to 1.8+."),(0,o.kt)("h3",{id:"2-write-httphelloworldexample-class"},"2. Write ",(0,o.kt)("inlineCode",{parentName:"h3"},"HttpHelloWorldExample")," class"),(0,o.kt)("p",null,"After you integrate ActiveJ in your project in one of the suggested ways, write down the following code to ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpHelloWorldExample.java"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java tag=EXAMPLE",url:"/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java",tag:"EXAMPLE"},'public final class HttpHelloWorldExample extends HttpServerLauncher {\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200().withPlainText("Hello World");\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new HttpHelloWorldExample();\n    launcher.launch(args);\n  }\n}\n')),(0,o.kt)("p",null,"First, we extend ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpHelloWorldExample")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," to manage application lifecycle.\nIn this example, the only important thing to know about the superclass is that it implements the ",(0,o.kt)("em",{parentName:"p"},"launch")," method that starts our server."),(0,o.kt)("p",null,"Next, we provide an ",(0,o.kt)("strong",{parentName:"p"},"AsyncServlet")," which receives ",(0,o.kt)("strong",{parentName:"p"},"HttpRequest"),"s from clients, creates ",(0,o.kt)("strong",{parentName:"p"},"HttpResponse"),"s and sends them.\n",(0,o.kt)("inlineCode",{parentName:"p"},"@Provides")," annotation means that this method is available for binding as the root HTTP endpoint listener."),(0,o.kt)("p",null,"To define processing of the received requests, we override ",(0,o.kt)("em",{parentName:"p"},"AsyncServlet.serve")," method with a lambda. We create a promise\nof ",(0,o.kt)("strong",{parentName:"p"},"HttpResponse")," with code ",(0,o.kt)("inlineCode",{parentName:"p"},"200"),' and "Hello World!" body. ActiveJ is fully asynchronous, so our HTTP Servlets are asynchronous too.\nA simple ',(0,o.kt)("strong",{parentName:"p"},"HttpResponse")," can be replaced with a ",(0,o.kt)("a",{parentName:"p",href:"/async-io/promise"},"Promise")," of ",(0,o.kt)("strong",{parentName:"p"},"HttpResponse")," to make it asynchronous."),(0,o.kt)("p",null,"Finally, we define ",(0,o.kt)("em",{parentName:"p"},"main")," method and launch our server with ",(0,o.kt)("em",{parentName:"p"},"launch")," method. This method injects dependencies, starts\nthe application, runs it and stops it when needed."),(0,o.kt)("h3",{id:"3-run-the-app"},"3. Run the app"),(0,o.kt)("p",null,"Now, let's test the application. First, run ",(0,o.kt)("em",{parentName:"p"},"HttpHelloWorldExample.main"),", then open your favourite browser and go to\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080"),"\nYou will receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World!")," message processed by the server. Congratulations, you've just created your first\nActiveJ application!"),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"To make ActiveJ more developer-friendly, we've created dozens of tutorials and examples of different scales,\nrepresenting most of the platform's capabilities. Click \"Next\" to get to the next tutorial. You can also explore ActiveJ\n",(0,o.kt)("a",{parentName:"p",href:"/boot/launcher"},"docs")," first."))}h.isMDXComponent=!0}}]);