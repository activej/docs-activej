(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6775],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return p},mdx:function(){return v},useMDXComponents:function(){return d},withMDXComponents:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),m=function(e){return function(n){var t=d(n.components);return a.createElement(e,i({},n,{components:t}))}},d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(t),p=r,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},77618:function(e,n,t){"use strict";var a=t(95318).default;n.Z=void 0;var r=a(t(67294)),i=a(t(39962)),l=function(e){var n=e.url,t=e.text,a=e.isInline,l=void 0===a||a,o=e.children,s=(0,i.default)().siteConfig;return r.default.createElement("a",{style:l?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+n,target:"_blank"},t||o)};n.Z=l},77815:function(e,n,t){"use strict";var a=t(95318).default;n.Z=void 0;a(t(67294));var r=a(t(39962)),i=function(e){var n=e.name,t=(0,r.default)().siteConfig;if(!n)throw new Error("Variable name is required");if(void 0===t.customFields[n])throw new Error("Variable "+n+" not exist");return t.customFields[n]};n.Z=i},92836:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),l=t(77618),o=t(77815),s=["components"],c={title:"ActiveJ | Launcher, efficiently manage application lifecycle",description:"ActiveJ Launcher manages application lifecycle, starts and stops services and also has handy diagnostic tools.",keywords:["launcher","java launcher","application lifecycle","java framework","spring alternative","netty alternative","jetty alternative"]},m={unversionedId:"boot/launcher",id:"boot/launcher",isDocsHomePage:!1,title:"Launcher",description:"ActiveJ Launcher manages application lifecycle, starts and stops services and also has handy diagnostic tools.",source:"@site/docs/boot/launcher.mdx",sourceDirName:"boot",slug:"/boot/launcher",permalink:"/boot/launcher",version:"current",frontMatter:{title:"ActiveJ | Launcher, efficiently manage application lifecycle",description:"ActiveJ Launcher manages application lifecycle, starts and stops services and also has handy diagnostic tools.",keywords:["launcher","java launcher","application lifecycle","java framework","spring alternative","netty alternative","jetty alternative"]},sidebar:"docs",previous:{title:"Dataflow",permalink:"/async-io/dataflow"},next:{title:"Service Graph",permalink:"/boot/servicegraph"}},d=[{value:"More examples",id:"more-examples",children:[{value:"Hello World Example",id:"hello-world-example",children:[]},{value:"HTTP Server from scratch using Launcher",id:"http-server-from-scratch-using-launcher",children:[]},{value:"Working with program arguments",id:"working-with-program-arguments",children:[]}]}],p={toc:d};function u(e){var n=e.components,t=(0,r.default)(e,s);return(0,i.mdx)("wrapper",(0,a.default)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Launcher is essentially a highly abstracted and generalized implementation of ",(0,i.mdx)("inlineCode",{parentName:"li"},"main()")," methods, combined with\n",(0,i.mdx)("a",{parentName:"li",href:"servicegraph"},"Service Graph"),", and support of start/stop semantics"),(0,i.mdx)("li",{parentName:"ul"},"Takes care of full application lifecycle and logging"),(0,i.mdx)("li",{parentName:"ul"},"Perfectly compatible with ",(0,i.mdx)("a",{parentName:"li",href:"/inject"},"ActiveJ Inject"))),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#"},(0,i.mdx)(l.Z,{url:"/launcher/src/main/java/io/activej/launcher/Launcher.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"a"},"Launcher")))," is a very explicit tool. You can understand how it works by simply looking at the implementation of its main method ",(0,i.mdx)("inlineCode",{parentName:"p"},"launch")," in a nutshell:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'public void launch(String[] args) throws Exception {\n    logger.info("=== INJECTING DEPENDENCIES");\n    Injector injector = createInjector(args);\n    logger.info("Eager instances: " + injector.createEagerInstances());\n    Set<LauncherService> services = injector.getInstance(new Key<Set<LauncherService>>() {});\n    Set<LauncherService> startedServices = new HashSet<>();\n    logger.info("Post-inject instances: " + injector.postInjectInstances());\n\n    logger.info("=== STARTING APPLICATION");\n    logger.info("Starting LauncherServices: " + services);\n    startServices(services, startedServices);\n    onStart();\n    onStartFuture.complete(null);\n\n    logger.info("=== RUNNING APPLICATION");\n    run();\n    onRunFuture.complete(null);\n\n    logger.info("=== STOPPING APPLICATION");\n    onStop();\n    stopServices(startedServices);\n    onCompleteFuture.complete(null);\n')),(0,i.mdx)("p",null,"Step-by-step examination:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Create the ",(0,i.mdx)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/Injector.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"li"},"Injector"))," with the ",(0,i.mdx)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/module/Module.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"li"},"Modules"))," provided in ",(0,i.mdx)("inlineCode",{parentName:"li"},"Launcher")),(0,i.mdx)("li",{parentName:"ul"},"Inject top-level dependencies into the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Launcher")," instance itself"),(0,i.mdx)("li",{parentName:"ul"},"Instantiate all keys marked as ",(0,i.mdx)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/annotation/Eager.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"li"},"@Eager"))," multibinder keygroup, exported by ",(0,i.mdx)("inlineCode",{parentName:"li"},"Launcher\u2019s Modules")),(0,i.mdx)("li",{parentName:"ul"},"Start all services from ",(0,i.mdx)("inlineCode",{parentName:"li"},"Set<LauncherService>")," multibinder set, exported by ",(0,i.mdx)("strong",{parentName:"li"},"Launcher\u2019s Modules"),", and execute ",(0,i.mdx)("inlineCode",{parentName:"li"},"onStart()")," method"),(0,i.mdx)("li",{parentName:"ul"},"Execute ",(0,i.mdx)("inlineCode",{parentName:"li"},"run()")," method"),(0,i.mdx)("li",{parentName:"ul"},"After ",(0,i.mdx)("inlineCode",{parentName:"li"},"run()")," is finished (either due to finishing all app-specific computations or by responding to a shutdown request such as SIGKILL), execute ",(0,i.mdx)("inlineCode",{parentName:"li"},"onStop()")," method and stop all services")),(0,i.mdx)("p",null,"Here is an example of ",(0,i.mdx)("inlineCode",{parentName:"p"},"Launcher")," lifecycle represented as logs (particularly, ",(0,i.mdx)(l.Z,{url:"/launchers/http/src/main/java/io/activej/launchers/http/HttpServerLauncher.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"HttpServerLauncher"))," subclass that provides an ",(0,i.mdx)(l.Z,{url:"/core-http/src/main/java/io/activej/http/AsyncHttpServer.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"AsyncHttpServer")),", an ",(0,i.mdx)("a",{parentName:"p",href:"/async-io/eventloop"},(0,i.mdx)("inlineCode",{parentName:"a"},"Eventloop"))," and ",(0,i.mdx)("a",{parentName:"p",href:"config"},(0,i.mdx)("inlineCode",{parentName:"a"},"Config")),"). Launch ",(0,i.mdx)("a",{parentName:"p",href:"/tutorials/getting-started"},"this")," example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java tag=EXAMPLE",url:"/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java",tag:"EXAMPLE"},'public final class HttpHelloWorldExample extends HttpServerLauncher {\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200().withPlainText("Hello World");\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new HttpHelloWorldExample();\n    launcher.launch(args);\n  }\n}\n')),(0,i.mdx)("p",null,"to see alike logs:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"}," === INJECTING DEPENDENCIES\nCreated eager singletons\nPost-injected instances: [HttpHelloWorldExample]\n\n=== STARTING APPLICATION\nStarting LauncherServices: [io.active.net.jmx.JmxModule, io.active.net.service.ServiceGraphModule]\nStarting LauncherService: io.active.net.jmx.JmxModule\nStarting LauncherService: io.active.net.service.ServiceGraphModule\nCreating ServiceGraph...\nStarting services\nListening on [/0.0.0.0:8080]: AsyncHttpServer{listenAddresses=[/0.0.0.0:8080]}\nStarted io.active.net.http.AsyncHttpServer\n\n=== RUNNING APPLICATION\nHTTP Server is listening on http://localhost:8080/\n\n=== STOPPING APPLICATION\nStopping LauncherService: io.active.net.jmx.JmxModule\nStopping LauncherService: io.active.net.service.ServiceGraphModule\nStopping ServiceGraph...\nStopping services\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Launcher")," optionally requires the following dependencies from its ",(0,i.mdx)("strong",{parentName:"li"},"Modules"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"@Eager")," multibinder keygroup"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Set<LauncherService>")," multibinder set")))),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Launcher")," exports the following dependencies to its ",(0,i.mdx)("strong",{parentName:"p"},"Modules"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"class Launcher{\n    @NotNull\n    public final Injector createInjector() {\n       return Injector.of(getInternalModule()\n                      .combineWith(getModule())\n                      .overrideWith(getOverrideModule()));\n    }\n\n  private Module getInternalModule() {\n     Class<Launcher> launcherClass = (Class<Launcher>) getClass();\n     Key<CompletionStage<Void>> completionStageKey = new Key<CompletionStage<Void>>() {};\n\n     return Module.create()\n         .bind(String[].class).annotatedWith(Args.class).toInstance(args)\n         .bind(Launcher.class).to(launcherClass)\n         .bind(launcherClass).toInstance(this)\n\n         .postInjectInto(launcherClass)\n         .bind(completionStageKey.named(OnStart.class)).toInstance(onStartFuture)\n         .bind(completionStageKey.named(OnRun.class)).toInstance(onRunFuture)\n         .bind(completionStageKey.named(OnComplete.class)).toInstance(onCompleteFuture)\n\n         .scan(Launcher.this);\n    }\n\n  // this method can be overridden by subclasses which extend Launcher,\n  // provides business logic modules (for example, ConfigModule)\n  protected Module getModule() {\n      return Module.empty();\n  }\n\n  // this method can be overridden by subclasses which extend Launcher,\n  // overrides definitions in internal module\n  protected Module getOverrideModule() {\n      return Module.empty();\n  }\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"@Args String[]")," arguments of its ",(0,i.mdx)("inlineCode",{parentName:"li"},"Launcher.launch(String[] args)")," method, corresponding to ",(0,i.mdx)("inlineCode",{parentName:"li"},"main(String[] args)")," method"),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"Launcher")," instance itself"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"@OnStart")," ",(0,i.mdx)("inlineCode",{parentName:"li"},"CompletionStage<Void>")," future which is completed when application is wired and started"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"@OnRun")," ",(0,i.mdx)("inlineCode",{parentName:"li"},"CompletionStage<Void>")," future which is completed when ",(0,i.mdx)("inlineCode",{parentName:"li"},"Launcher.run()")," is complete."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"@OnComplete")," ",(0,i.mdx)("inlineCode",{parentName:"li"},"CompletionStage<Void>")," future which is completed when application is stopped")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Launcher")," also has handy diagnostic and JMX properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Instant of launch, start, run, stop, and complete"),(0,i.mdx)("li",{parentName:"ul"},"Duration of start, run, stop, and total duration"),(0,i.mdx)("li",{parentName:"ul"},"Throwable ",(0,i.mdx)("em",{parentName:"li"},"applicationError")," property")),(0,i.mdx)("h2",{id:"more-examples"},"More examples"),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub"),(0,i.mdx)("pre",{parentName:"div"},(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,i.mdx)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(o.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project.\nThese examples are located at ",(0,i.mdx)("inlineCode",{parentName:"p"},"activej/examples/core/datastream")))),(0,i.mdx)("h3",{id:"hello-world-example"},"Hello World Example"),(0,i.mdx)("p",null,'Here is a simple "Hello World" Launcher application using ActiveJ Inject:'),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/HelloWorldExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/HelloWorldExample.java",tag:"EXAMPLE"},'public final class HelloWorldExample extends Launcher {\n  @Inject\n  String message;\n\n  @Provides\n  String message() {\n    return "Hello, world!";\n  }\n\n  @Override\n  protected void run() {\n    System.out.println(message);\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new HelloWorldExample();\n    launcher.launch(args);\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(l.Z,{url:"/examples/core/boot/src/main/java/HelloWorldExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.mdx)("h3",{id:"http-server-from-scratch-using-launcher"},"HTTP Server from scratch using Launcher"),(0,i.mdx)("p",null,"When creating HTTP servers or any other applications, you can either use some predefined solutions\n(",(0,i.mdx)("a",{parentName:"p",href:"/async-io/http#hello-world-server-with-pre-defined-launcher"},"see examples"),") or simple Launcher instead. In this\ncase, you'll need to take care of all of the needed dependencies and override some basic methods:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/http/src/main/java/CustomHttpServerExample.java tag=EXAMPLE",url:"/examples/core/http/src/main/java/CustomHttpServerExample.java",tag:"EXAMPLE"},'public final class CustomHttpServerExample extends Launcher {\n  private static final int PORT = 8080;\n\n  @Provides\n  Eventloop eventloop() {\n    return Eventloop.create();\n  }\n\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200()\n        .withPlainText("Hello from HTTP server");\n  }\n\n  @Provides\n  @Eager\n  AsyncHttpServer server(Eventloop eventloop, AsyncServlet servlet) {\n    return AsyncHttpServer.create(eventloop, servlet).withListenPort(PORT);\n  }\n\n  @Override\n  protected Module getModule() {\n    return ServiceGraphModule.create();\n  }\n\n  @Override\n  protected void run() throws Exception {\n    logger.info("HTTP Server is now available at http://localhost:" + PORT);\n    awaitShutdown();\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new CustomHttpServerExample();\n    launcher.launch(args);\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(l.Z,{url:"/examples/core/http/src/main/java/CustomHttpServerExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.mdx)("h3",{id:"working-with-program-arguments"},"Working with program arguments"),(0,i.mdx)("p",null,"To access program arguments from within ",(0,i.mdx)("inlineCode",{parentName:"p"},"Launcher")," you need to pass those arguments to ",(0,i.mdx)("inlineCode",{parentName:"p"},"Launcher#launch")," method.\nThen there are two ways for accessing arguments:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Using ",(0,i.mdx)("inlineCode",{parentName:"li"},"Launcher"),"'s ",(0,i.mdx)("inlineCode",{parentName:"li"},"String[] args")," field"),(0,i.mdx)("li",{parentName:"ul"},"Requesting arguments using Dependency Injection. A key is ",(0,i.mdx)("inlineCode",{parentName:"li"},"String[].class")," annotated with ",(0,i.mdx)("inlineCode",{parentName:"li"},"@Args")," annotation.\nThe following example illustrates both cases:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/LauncherArgsExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/LauncherArgsExample.java",tag:"EXAMPLE"},'public final class LauncherArgsExample extends Launcher {\n\n  @Inject\n  Injector injector;\n\n  @Override\n  protected void run() {\n    System.out.println("Received args: " + Arrays.toString(args));\n\n    String[] injectedArgs = injector.getInstance(Key.of(String[].class, Args.class));\n    System.out.println("Args retrieved from DI: " + Arrays.toString(injectedArgs));\n  }\n\n  public static void main(String[] args) throws Exception {\n    new LauncherArgsExample().launch(args);\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(l.Z,{url:"/examples/core/boot/src/main/java/LauncherArgsExample.java",mdxType:"Githublink"},"See full example on GitHub"))))}u.isMDXComponent=!0}}]);