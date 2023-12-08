"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[998],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77618:function(e,t,n){var r=n(67294),a=n(39962);t.Z=function(e){var t=e.url,n=e.text,o=e.isInline,i=void 0===o||o,l=e.children,s=(0,a.Z)().siteConfig,c=t.startsWith("/examples")?s.customFields.githubExamplesBranch:s.customFields.githubBranch;return r.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+c+t,target:"_blank"},n||l)}},77815:function(e,t,n){n(67294);var r=n(39962);t.Z=function(e){var t=e.name,n=(0,r.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},58165:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(77618),l=n(77815),s=["components"],c={title:"ActiveJ | To-Do list app using React",sidebar_label:"ActiveJ + React (Advanced)",keywords:["java","java for beginners","java framework","guide","tutorial","web application","server","servlet","spring","spring alternative","netty alternative","jetty alternative","async","todo app","todo list","react","reactjs","react js"],description:"Integrate React.js in your Java web application. In the tutorial you will create a To-Do app using ActiveJ Java platform and React.js."},p="To-Do list app using React",u={unversionedId:"tutorials/todo-list-tutorial",id:"tutorials/todo-list-tutorial",isDocsHomePage:!1,title:"ActiveJ | To-Do list app using React",description:"Integrate React.js in your Java web application. In the tutorial you will create a To-Do app using ActiveJ Java platform and React.js.",source:"@site/docs/tutorials/todo-list-tutorial.mdx",sourceDirName:"tutorials",slug:"/tutorials/todo-list-tutorial",permalink:"/tutorials/todo-list-tutorial",tags:[],version:"current",frontMatter:{title:"ActiveJ | To-Do list app using React",sidebar_label:"ActiveJ + React (Advanced)",keywords:["java","java for beginners","java framework","guide","tutorial","web application","server","servlet","spring","spring alternative","netty alternative","jetty alternative","async","todo app","todo list","react","reactjs","react js"],description:"Integrate React.js in your Java web application. In the tutorial you will create a To-Do app using ActiveJ Java platform and React.js."},sidebar:"tutorials",previous:{title:"ActiveJ + React",permalink:"/tutorials/using-react"},next:{title:"ActiveJ + Svelte",permalink:"/tutorials/using-svelte"}},d=[{value:"Creating Launcher",id:"creating-launcher",children:[],level:2},{value:"Running the application",id:"running-the-application",children:[],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"to-do-list-app-using-react"},"To-Do list app using React"),(0,o.kt)("p",null,"In this tutorial we will create a To-Do List app using ActiveJ and React. We will explore how to integrate React in an ActiveJ project and how to simply manage routing using the HTTP module. You can find full example sources on ",(0,o.kt)(i.Z,{text:"GitHub",url:"/examples/tutorials/react-integration-2",mdxType:"Githublink"})),(0,o.kt)("p",null,"Here we will consider only the main app class - ",(0,o.kt)("a",{parentName:"p",href:"#creating-launcher"},(0,o.kt)("inlineCode",{parentName:"a"},"ApplicationLauncher")),". It uses ActiveJ ",(0,o.kt)(i.Z,{url:"/launchers/http/src/main/java/io/activej/launchers/http/HttpServerLauncher.java",mdxType:"Githublink"},(0,o.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher"))," and ",(0,o.kt)(i.Z,{url:"/core-http/src/main/java/io/activej/http/AsyncServlet.java",mdxType:"Githublink"},(0,o.kt)("inlineCode",{parentName:"p"},"AsyncServlet"))," classes for setting up an embedded application server. With this approach, you can create servers with no XML configurations or third-party dependencies. Moreover, ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," will automatically take care of launching, running and stopping the application. You'll only need to provide launcher with servlets."),(0,o.kt)("h2",{id:"creating-launcher"},"Creating Launcher"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ApplicationLauncher")," is the main class of the program. Besides launching the application, it also handles routing and most of the corresponding logic. We will use ActiveJ ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," and extend it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java tag=REGION_1",url:"/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java",tag:"REGION_1"},"public final class ApplicationLauncher extends HttpServerLauncher {\n  @Provides\n  RecordDAO recordRepo() {\n    return new RecordImplDAO();\n  }\n\n  @Provides\n  Executor executor() {\n    return newSingleThreadExecutor();\n  }\n")),(0,o.kt)("p",null,"First, we provided ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordDAO")," with the application business logic and ",(0,o.kt)("inlineCode",{parentName:"p"},"Executor")," which is needed for our ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncServlet"),".\nIn order to transform objects to/from JSON we chose ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ngs-doo/dsl-json"},"DSL-JSON library"),",\nso we provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"DslJson<?>")," object that will handle data marshalling.\n",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncServlet")," loads static content from ",(0,o.kt)("inlineCode",{parentName:"p"},"/build")," directory and takes care of the routing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java tag=REGION_2",url:"/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java",tag:"REGION_2"},'@Provides\nIStaticLoader staticLoader(Reactor reactor, Executor executor) {\n  return IStaticLoader.ofClassPath(reactor, executor, "build/");\n}\n\n@Provides\nJsonCodec<Record> recordJsonCodec() {\n  return JsonCodecs.ofObject(Record::new,\n    "title", Record::getTitle, JsonCodecs.ofString(),\n    "plans", Record::getPlans, JsonCodecs.ofList(\n      JsonCodecs.ofObject(Plan::new,\n        "text", Plan::getText, JsonCodecs.ofString(),\n        "isComplete", Plan::isComplete, JsonCodecs.ofBoolean())\n    ));\n}\n\n@Provides\nAsyncServlet servlet(Reactor reactor, IStaticLoader staticLoader, RecordDAO recordDAO, JsonCodec<Record> recordJsonCodec) {\n  JsonCodec<Map<Integer, Record>> mapJsonCodec = JsonCodecs.ofMap(JsonKeyCodec.ofNumberKey(Integer.class), recordJsonCodec);\n  return RoutingServlet.builder(reactor)\n    .with("/*", StaticServlet.builder(reactor, staticLoader)\n      .withIndexHtml()\n      .build())\n')),(0,o.kt)("p",null,"Routing in ActiveJ HTTP module resembles Express approach. Method ",(0,o.kt)("em",{parentName:"p"},"with(@Nullable HttpMethod method, String path, AsyncServlet servlet)")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"RoutingServlet"),"'s builder\nadds routes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RoutingServlet"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method")," (optional) is one of the HTTP methods (",(0,o.kt)("inlineCode",{parentName:"li"},"GET"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"POST"),", etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," is the path on the server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"servlet")," defines the logic of request processing. If you need to get some data from the ",(0,o.kt)("inlineCode",{parentName:"li"},"request")," while processing you can use:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"request.getPathParameter(String key)"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"request.getQueryParameter(String key)")," (see example of ",(0,o.kt)("a",{parentName:"li",href:"/http/examples#request-parameters-example"},(0,o.kt)("inlineCode",{parentName:"a"},"query parameter usage")),"\nto provide the key of the needed parameter and receive back a corresponding String"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"request.getPostParameters()")," to get a Map of all request parameters")))),(0,o.kt)("p",null,"Pay attention to the ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," in the provided request. It states that whichever path until the next ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," is received, it\nwill be processed by our static servlet, which uploads static content from ",(0,o.kt)("inlineCode",{parentName:"p"},"/build")," directory."),(0,o.kt)("p",null,"Servlet should be able to add a new record, get all available records, delete record by its id and\nalso mark plans of particular record as completed or not, so we provide corresponding routing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java tag=REGION_3",url:"/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java",tag:"REGION_3"},'.with(POST, "/add", request -> request.loadBody()\n  .then($ -> {\n    ByteBuf body = request.getBody();\n    try {\n      byte[] bodyBytes = body.getArray();\n      Record record = JsonUtils.fromJsonBytes(recordJsonCodec, bodyBytes);\n      recordDAO.add(record);\n      return HttpResponse.ok200().toPromise();\n    } catch (MalformedDataException e) {\n      return HttpResponse.ofCode(400).toPromise();\n    }\n  }))\n.with(GET, "/get/all", request -> {\n  Map<Integer, Record> records = recordDAO.findAll();\n  return HttpResponse.ok200()\n    .withJson(JsonUtils.toJson(mapJsonCodec, records))\n    .toPromise();\n})\n//[START REGION_4]\n.with(GET, "/delete/:recordId", request -> {\n  int id = parseInt(request.getPathParameter("recordId"));\n  recordDAO.delete(id);\n  return HttpResponse.ok200().toPromise();\n})\n//[END REGION_4]\n.with(GET, "/toggle/:recordId/:planId", request -> {\n  int id = parseInt(request.getPathParameter("recordId"));\n  int planId = parseInt(request.getPathParameter("planId"));\n\n  Record record = recordDAO.find(id);\n  Plan plan = record.getPlans().get(planId);\n  plan.toggle();\n  return HttpResponse.ok200().toPromise();\n})\n.build();\n')),(0,o.kt)("p",null,"Pay attention to the requests with ",(0,o.kt)("inlineCode",{parentName:"p"},":"),", for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java tag=REGION_4",url:"/examples/tutorials/react-integration-2/src/main/java/ApplicationLauncher.java",tag:"REGION_4"},'.with(GET, "/delete/:recordId", request -> {\n  int id = parseInt(request.getPathParameter("recordId"));\n  recordDAO.delete(id);\n  return HttpResponse.ok200().toPromise();\n})\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},":")," states that the following characters until the next ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," is a variable whose keyword, in this case, is ",(0,o.kt)("inlineCode",{parentName:"p"},"recordId"),"."),(0,o.kt)("h2",{id:"running-the-application"},"Running the application"),(0,o.kt)("p",null,"To run the example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/v6.0-beta2"},"clone ActiveJ")," and import it\nas a Maven project. Check out branch ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(l.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the example, build the project (",(0,o.kt)("strong",{parentName:"p"},"Ctrl + F9")," for IntelliJ IDEA)."),(0,o.kt)("p",null,"Then, run the following command in ",(0,o.kt)("inlineCode",{parentName:"p"},"activej/examples/tutorials/react-integration-2/front")," directory in terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i\nnpm run-script build\n")),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"ApplicationLauncher")," and run its ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," method. Then open your favourite browser and go to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080"),". Try to add and delete some tasks or mark them as completed"))}h.isMDXComponent=!0}}]);