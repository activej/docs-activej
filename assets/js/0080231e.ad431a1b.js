(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[4773],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){return function(n){var t=u(n.components);return a.createElement(e,i({},n,{components:t}))}},u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),p=r,v=c["".concat(o,".").concat(p)]||c[p]||m[p]||i;return t?a.createElement(v,l(l({ref:n},d),{},{components:t})):a.createElement(v,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=v;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},2735:function(e,n){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.hasProtocol=t,n.default=function(e){return void 0!==e&&!t(e)}},79524:function(e,n,t){"use strict";var a=t(95318).default;Object.defineProperty(n,"__esModule",{value:!0}),n.useBaseUrlUtils=o,n.default=function(e,n){void 0===n&&(n={});return(0,o().withBaseUrl)(e,n)};var r=a(t(39962)),i=t(2735);function o(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,l=void 0!==o&&o,s=r.absolute,d=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.hasProtocol)(t))return t;if(l)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return d?e+c:c}(a,t,e,n)}}}},25406:function(e,n,t){"use strict";var a=t(95318).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(67294)).default.createContext(void 0);n.default=r},82432:function(e,n,t){"use strict";var a=t(95318).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(22122)),i=a(t(19756)),o=a(t(67294)),l=a(t(86010)),s=a(t(39962)),d=a(t(48002)),c=a(t(8705)),u=["sources","className","alt"],p=function(e){var n=(0,s.default)().isClient,t=(0,d.default)().isDarkTheme,a=e.sources,p=e.className,m=e.alt,v=void 0===m?"":m,f=(0,i.default)(e,u),h=n?t?["dark"]:["light"]:["light","dark"];return o.default.createElement(o.default.Fragment,null,h.map((function(e){return o.default.createElement("img",(0,r.default)({key:e,src:a[e],alt:v,className:(0,l.default)(c.default.themedImage,c.default["themedImage--"+e],p)},f))})))};n.default=p},48002:function(e,n,t){"use strict";var a=t(95318).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(67294),i=a(t(25406));var o=function(){var e=(0,r.useContext)(i.default);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e};n.default=o},77618:function(e,n,t){"use strict";var a=t(95318).default;n.Z=void 0;var r=a(t(67294)),i=a(t(39962)),o=function(e){var n=e.url,t=e.text,a=e.isInline,o=void 0===a||a,l=e.children,s=(0,i.default)().siteConfig;return r.default.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+n,target:"_blank"},t||l)};n.Z=o},77815:function(e,n,t){"use strict";var a=t(95318).default;n.Z=void 0;a(t(67294));var r=a(t(39962)),i=function(e){var n=e.name,t=(0,r.default)().siteConfig;if(!n)throw new Error("Variable name is required");if(void 0===t.customFields[n])throw new Error("Variable "+n+" not exist");return t.customFields[n]};n.Z=i},20403:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),o=t(77815),l=t(77618),s=t(82432),d=t(79524),c=["components"],u={description:"ActiveJ FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding",keywords:"storage,distributed storage,redundancy,rebelancing,kernel-space,java framework,ftp protocol,append-only"},p={unversionedId:"fs/examples",id:"fs/examples",isDocsHomePage:!1,title:"Examples",description:"ActiveJ FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding",source:"@site/docs/fs/examples.mdx",sourceDirName:"fs",slug:"/fs/examples",permalink:"/docs/fs/examples",version:"current",frontMatter:{description:"ActiveJ FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding",keywords:"storage,distributed storage,redundancy,rebelancing,kernel-space,java framework,ftp protocol,append-only"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/fs/overview"}},m=[{value:"Server Setup",id:"server-setup",children:[]},{value:"File Upload",id:"file-upload",children:[]},{value:"File Download",id:"file-download",children:[]},{value:"ActiveFs Decorator",id:"activefs-decorator",children:[]},{value:"Cluster File Storage",id:"cluster-file-storage",children:[]}],v={toc:m};function f(e){var n=e.components,t=(0,r.default)(e,c);return(0,i.mdx)("wrapper",(0,a.default)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"To run the examples in an IDE, you need to clone ActiveJ project:"),(0,i.mdx)("pre",{parentName:"div"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/activej/activej\n")),(0,i.mdx)("p",{parentName:"div"},"And import it as a Maven project. Check out branch ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(o.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the example, build the project (",(0,i.mdx)("strong",{parentName:"p"},"Ctrl + F9")," for IntelliJ IDEA)."))),(0,i.mdx)("h2",{id:"server-setup"},"Server Setup"),(0,i.mdx)("p",null,"Let's have a closer look at ",(0,i.mdx)("strong",{parentName:"p"},"Server Setup Example"),". To make setup and launching as simple as possible, there is a special ",(0,i.mdx)(l.Z,{url:"/launchers/fs/src/main/java/io/activej/launchers/fs/SimpleTcpServerLauncher.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleTcpServerLauncher")),", an ",(0,i.mdx)("a",{parentName:"p",href:"/docs/boot/launcher"},"ActiveJ ",(0,i.mdx)("inlineCode",{parentName:"a"},"Launcher"))," implementation (abstracted implementation of ",(0,i.mdx)("em",{parentName:"p"},"main")," methods). It allows to simply set up applications, so all you need to set up an FS server is to override several Launcher methods:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onInit")," - runs prior to application start"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"getOverrideModule")," - overrides Launcher's default internal module definitions"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"run")," - Launcher's main method, represents business logic")),(0,i.mdx)("p",null,"Then ",(0,i.mdx)("em",{parentName:"p"},"launch")," the ",(0,i.mdx)(l.Z,{url:"/launcher/src/main/java/io/activej/launcher/Launcher.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"Launcher"))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/ServerSetupExample.java tag=EXAMPLE",url:"/examples/cloud/fs/src/main/java/ServerSetupExample.java",tag:"EXAMPLE"},'public class ServerSetupExample extends SimpleTcpServerLauncher {\n  private Path storage;\n\n  @Override\n  protected void onInit(Injector injector) throws Exception {\n    storage = Files.createTempDirectory("server_storage");\n  }\n\n  @Override\n  protected Config createConfig() {\n    return super.createConfig()\n        .with("activefs.path", storage.toString())\n        .with("activefs.listenAddresses", "6732");\n  }\n\n  @Override\n  protected void run() throws Exception {\n    awaitShutdown();\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new ServerSetupExample();\n    launcher.launch(args);\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(l.Z,{url:"/examples/cloud/fs/src/main/java/ServerSetupExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.mdx)("h2",{id:"file-upload"},"File Upload"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#"},(0,i.mdx)(l.Z,{url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"a"},"FileUploadExample"))),"  also extends ",(0,i.mdx)("inlineCode",{parentName:"p"},"Launcher")," and thus implements the aforementioned ",(0,i.mdx)("inlineCode",{parentName:"p"},"Launcher")," methods."),(0,i.mdx)("p",null,"In this example we will use a ",(0,i.mdx)(l.Z,{text:"ActiveFs",url:"/cloud-fs/src/main/java/io/activej/fs/ActiveFs.java",mdxType:"Githublink"})," instance which depends on asynchronous ",(0,i.mdx)("a",{parentName:"p",href:"/docs/async-io/eventloop"},"ActiveJ ",(0,i.mdx)("strong",{parentName:"a"},"Eventloop")),"\nTo simplify working with dependencies we will use ",(0,i.mdx)("a",{parentName:"p",href:"/docs/inject/overview"},"ActiveJ Inject")," DI library. It is lightning-fast, efficient and perfectly compatible with Launcher. So we simply ",(0,i.mdx)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/annotation/Inject.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"@Inject"))," two instances and ",(0,i.mdx)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/annotation/Provides.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"@Provides"))," factory methods.\nJust like in the previous example, we will also overwrite ",(0,i.mdx)("inlineCode",{parentName:"p"},"Launcher")," methods ",(0,i.mdx)("inlineCode",{parentName:"p"},"onInit"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"getOverrideModule"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"run"),"."),(0,i.mdx)("p",null,"Also, this example utilizes ActiveJ ",(0,i.mdx)("a",{parentName:"p",href:"/docs/async-io/csp"},"CSP")," component, particularly ",(0,i.mdx)(l.Z,{url:"/core-csp/src/main/java/io/activej/csp/file/ChannelFileReader.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"ChannelFileReader"))," class. It allows to asynchronously read binary data from files."),(0,i.mdx)("p",null,"You can see full example sources on ",(0,i.mdx)(l.Z,{url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",mdxType:"Githublink"},(0,i.mdx)("strong",{parentName:"p"},"GitHub")),", here we will consider only the upload process that is defined in the overwritten method ",(0,i.mdx)("inlineCode",{parentName:"p"},"run"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/FileUploadExample.java tag=EXAMPLE",url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",tag:"EXAMPLE"},"@Override\nprotected void run() throws Exception {\n  ExecutorService executor = newSingleThreadExecutor();\n  CompletableFuture<Void> future = eventloop.submit(() ->\n      // consumer result here is a marker of it being successfully uploaded\n      ChannelFileReader.open(executor, clientFile)\n          .then(cfr -> cfr.streamTo(client.upload(FILE_NAME, EXAMPLE_TEXT.length())))\n          .whenResult(() -> System.out.printf(\"%nFile '%s' successfully uploaded%n%n\", FILE_NAME))\n  );\n  try {\n    future.get();\n  } finally {\n    executor.shutdown();\n  }\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(l.Z,{url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.mdx)("h2",{id:"file-download"},"File Download"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#"},(0,i.mdx)(l.Z,{text:"FileDownloadExample",url:"/examples/cloud/fs/src/main/java/FileDownloadExample.java",mdxType:"Githublink"}))," has an implementation that is similar to the ",(0,i.mdx)("strong",{parentName:"p"},"File Upload")," example. Here we will consider only the download process that is defined in the overwritten method ",(0,i.mdx)("inlineCode",{parentName:"p"},"run"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/FileDownloadExample.java tag=EXAMPLE",url:"/examples/cloud/fs/src/main/java/FileDownloadExample.java",tag:"EXAMPLE"},"@Override\nprotected void run() throws Exception {\n  ExecutorService executor = newSingleThreadExecutor();\n  CompletableFuture<Void> future = eventloop.submit(() ->\n      ChannelSupplier.ofPromise(client.download(REQUIRED_FILE))\n          .streamTo(ChannelFileWriter.open(executor, clientStorage.resolve(DOWNLOADED_FILE)))\n          .whenResult(() -> System.out.printf(\"%nFile '%s' successfully downloaded to '%s'%n%n\",\n              REQUIRED_FILE, clientStorage))\n  );\n  try {\n    future.get();\n  } finally {\n    executor.shutdown();\n  }\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(l.Z,{url:"/examples/cloud/fs/src/main/java/FileDownloadExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.mdx)("h2",{id:"activefs-decorator"},"ActiveFs Decorator"),(0,i.mdx)("p",null,"Sometimes you may need to override/expand the default behavior of ",(0,i.mdx)("inlineCode",{parentName:"p"},"ActiveFs")," implementation. To do so, you may utilize a ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Decorator_pattern"},"Decorator")," pattern."),(0,i.mdx)(l.Z,{text:"DecoratedActiveFsExample",url:"/examples/cloud/fs/src/main/java/DecoratedActiveFsExample.java",mdxType:"Githublink"})," demonstrates how to do just that. It decorates `ActiveFs` implementation by adding additional logging for file uploads and downloads.",(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"DecoratedActiveFsExample")," extends ",(0,i.mdx)("inlineCode",{parentName:"p"},"ServerSetupExample")," so it inherits its DI bindings. First, we need to override\nthe binding for ",(0,i.mdx)("inlineCode",{parentName:"p"},"ActiveFsServer")," to pass decorated ",(0,i.mdx)("inlineCode",{parentName:"p"},"ActiveFs")," instead of the original one. To do so, we will override\n",(0,i.mdx)("inlineCode",{parentName:"p"},"Launcher#getOverrideModule")," method and provide a new binding for ",(0,i.mdx)("inlineCode",{parentName:"p"},"AsyncFsServer")," that uses decorated ",(0,i.mdx)("inlineCode",{parentName:"p"},"ActiveFs"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/DecoratedActiveFsExample.java tag=OVERRIDE",url:"/examples/cloud/fs/src/main/java/DecoratedActiveFsExample.java",tag:"OVERRIDE"},'@Override\nprotected Module getOverrideModule() {\n  return new AbstractModule() {\n    @Eager\n    @Provides\n    ActiveFsServer activeFsServer(Eventloop eventloop, @Named("decorated") ActiveFs decoratedFs, Config config) {\n      return ActiveFsServer.create(eventloop, decoratedFs)\n          .withInitializer(ofActiveFsServer(config.getChild("activefs")));\n    }\n\n    @Provides\n    @Named("decorated")\n    ActiveFs decoratedActiveFs(ActiveFs fs) {\n      return new LoggingActiveFs(fs);\n    }\n  };\n}\n')),(0,i.mdx)("p",null,"As you can see in ",(0,i.mdx)("inlineCode",{parentName:"p"},"decoratedActiveFs(ActiveFs fs)")," method, we request original ",(0,i.mdx)("inlineCode",{parentName:"p"},"ActiveFs")," and return the decorated one\n(wrapped in ",(0,i.mdx)("inlineCode",{parentName:"p"},"LoggingActiveFs"),")."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/DecoratedActiveFsExample.java tag=WRAPPER",url:"/examples/cloud/fs/src/main/java/DecoratedActiveFsExample.java",tag:"WRAPPER"},'private static final class LoggingActiveFs extends ForwardingActiveFs {\n  private static final Logger logger = LoggerFactory.getLogger(LoggingActiveFs.class);\n\n  public LoggingActiveFs(ActiveFs peer) {\n    super(peer);\n  }\n\n  @Override\n  public Promise<ChannelConsumer<ByteBuf>> upload(@NotNull String name, long size) {\n    return super.upload(name)\n        .map(consumer -> {\n          logger.info("Starting upload of file: {}. File size is {} bytes", name, size);\n          return consumer\n              .withAcknowledgement(ack -> ack\n                  .whenResult(() -> logger.info("Upload of file {} finished", name)));\n        });\n  }\n\n  @Override\n  public Promise<ChannelSupplier<ByteBuf>> download(@NotNull String name, long offset, long limit) {\n    return super.download(name, offset, limit)\n        .map(supplier -> {\n          logger.info("Starting downloading file: {}", name);\n          return supplier\n              .withEndOfStream(eos -> eos\n                  .whenResult(() -> logger.info("Download of file {} finished", name)));\n        });\n\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"LoggingActiveFs")," extends ",(0,i.mdx)("inlineCode",{parentName:"p"},"ForwardingActiveFs")," which simply delegates all of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ActiveFs")," method calls to some underlying\n",(0,i.mdx)("inlineCode",{parentName:"p"},"ActiveFs")," instance. We override methods we want to decorate (",(0,i.mdx)("inlineCode",{parentName:"p"},"download"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"upload"),") and add custom logging messages when\nupload/download starts and finishes."),(0,i.mdx)("p",null,"You can run ",(0,i.mdx)(l.Z,{text:"FileUploadExample",url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",mdxType:"Githublink"})," followed by ",(0,i.mdx)(l.Z,{text:"FileDownloadExample",url:"/examples/cloud/fs/src/main/java/FileDownloadExample.java",mdxType:"Githublink"}),"\nAfter this you should see logging output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"INFO Starting upload of file: example.txt. File size is 12 bytes\nINFO Upload of file example.txt finished\nINFO Starting downloading file: example.txt\nINFO Download of file example.txt finished\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(l.Z,{url:"/examples/cloud/fs/src/main/java/DecoratedActiveFsExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.mdx)("h2",{id:"cluster-file-storage"},"Cluster File Storage"),(0,i.mdx)("p",null,"With ActiveJ FS you can simply create distributed cluster file storage with high fault tolerance. We will use Docker to launch three virtual servers and one client. The storage will support file uploads with automatic repartitioning according to the provided rule and replication count."),(0,i.mdx)("p",null,"The first thing we need to do is to create a launcher class ",(0,i.mdx)("inlineCode",{parentName:"p"},"ClusterTcpServerLauncher")," for our server. Extend ",(0,i.mdx)(l.Z,{url:"/launchers/fs/src/main/java/io/activej/launchers/fs/SimpleTcpServerLauncher.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleTcpServerLauncher"))," to get all the required instances: ",(0,i.mdx)(l.Z,{url:"/cloud-fs/src/main/java/io/activej/fs/tcp/ActiveFsServer.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"ActiveFsServer")),", local ",(0,i.mdx)(l.Z,{url:"/cloud-fs/src/main/java/io/activej/fs/ActiveFs.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"ActiveFS")),", ",(0,i.mdx)(l.Z,{url:"/core-http/src/main/java/io/activej/http/AsyncHttpServer.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"AsyncHttpServer"))," for GUI that will simplify working with your storage, and other helper instances. In the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ClusterTcpServerLauncher")," we'll only need to set up utils for repartitioning management like task schedulers, ",(0,i.mdx)(l.Z,{url:"/cloud-fs/src/main/java/io/activej/fs/cluster/ClusterRepartitionController.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"ClusterRepartitionController")),", and ",(0,i.mdx)(l.Z,{url:"/cloud-fs/src/main/java/io/activej/fs/cluster/FsPartitions.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"FsPartitions"))," for tracking alive partitions and their statuses. The partitions will communicate via TCP protocol, while GUI server will use HTTP."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/launchers/fs/src/main/java/io/activej/launchers/fs/ClusterTcpServerLauncher.java tag=EXAMPLE",url:"/launchers/fs/src/main/java/io/activej/launchers/fs/ClusterTcpServerLauncher.java",tag:"EXAMPLE"},'@Provides\n@Eager\n@Named("repartition")\nEventloopTaskScheduler repartitionScheduler(Config config, ClusterRepartitionController controller) {\n  return EventloopTaskScheduler.create(controller.getEventloop(), controller::repartition)\n      .withInitializer(ofEventloopTaskScheduler(config.getChild("activefs.repartition")));\n}\n\n@Provides\n@Eager\n@Named("clusterDeadCheck")\nEventloopTaskScheduler deadCheckScheduler(Config config, FsPartitions partitions) {\n  return EventloopTaskScheduler.create(partitions.getEventloop(), partitions::checkDeadPartitions)\n      .withInitializer(ofEventloopTaskScheduler(config.getChild("activefs.repartition.deadCheck")));\n}\n\n@Provides\nClusterRepartitionController repartitionController(Config config, ActiveFsServer localServer, FsPartitions partitions) {\n  String localPartitionId = first(partitions.getAllPartitions());\n  assert localPartitionId != null;\n\n  return ClusterRepartitionController.create(localPartitionId, partitions)\n      .withInitializer(ofClusterRepartitionController(config.getChild("activefs.repartition")));\n}\n\n@Provides\nFsPartitions fsPartitions(Config config, Eventloop eventloop, @Optional ServerSelector serverSelector, ActiveFs fs) {\n  Map<Object, ActiveFs> partitions = new LinkedHashMap<>();\n  partitions.put(config.get("activefs.repartition.localPartitionId"), fs);\n\n  return FsPartitions.create(eventloop, partitions)\n      .withServerSelector(nullToDefault(serverSelector, RENDEZVOUS_HASH_SHARDER))\n      .withInitializer(ofFsPartitions(config.getChild("activefs.cluster")));\n}\n')),(0,i.mdx)("p",null,"Now we can move on to creating a client launcher ",(0,i.mdx)("inlineCode",{parentName:"p"},"ClusterTcpClientLauncher"),". We need to provide ",(0,i.mdx)("inlineCode",{parentName:"p"},"ClusterRepartitionController")," and a task scheduler to detect dead partitions. Similarly to the server launcher, we need to provide an ",(0,i.mdx)("inlineCode",{parentName:"p"},"AsyncHttpServer")," for GUI and ",(0,i.mdx)("inlineCode",{parentName:"p"},"FsPartitions")," for managing partitions. We also need an instance of ",(0,i.mdx)(l.Z,{text:"ClusterActiveFs",url:"/cloud-fs/src/main/java/io/activej/fs/cluster/ClusterActiveFs.java",mdxType:"Githublink"})," class, an ",(0,i.mdx)("inlineCode",{parentName:"p"},"ActiveFs")," implementation that operates on other partitions as a cluster and contains some redundancy and fail-safety capabilities."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/launchers/fs/src/main/java/io/activej/launchers/fs/ClusterTcpClientLauncher.java tag=EXAMPLE",url:"/launchers/fs/src/main/java/io/activej/launchers/fs/ClusterTcpClientLauncher.java",tag:"EXAMPLE"},'@Provides\n@Eager\n@Named("clusterDeadCheck")\nEventloopTaskScheduler deadCheckScheduler(Config config, FsPartitions partitions) {\n  return EventloopTaskScheduler.create(partitions.getEventloop(), partitions::checkDeadPartitions)\n      .withInitializer(ofEventloopTaskScheduler(config.getChild("activefs.repartition.deadCheck")));\n}\n\n@Provides\n@Eager\nAsyncHttpServer guiServer(Eventloop eventloop, AsyncServlet servlet, Config config) {\n  return AsyncHttpServer.create(eventloop, servlet)\n      .withInitializer(ofHttpServer(config.getChild("activefs.http.gui")));\n}\n\n@Provides\nAsyncServlet guiServlet(ActiveFs activeFs) {\n  return ActiveFsGuiServlet.create(activeFs, "Cluster FS Client");\n}\n\n@Provides\nActiveFs remoteActiveFs(Eventloop eventloop, FsPartitions partitions, Config config) {\n  return ClusterActiveFs.create(partitions)\n      .withInitializer(ofClusterActiveFs(config.getChild("activefs.cluster")));\n}\n\n@Provides\nFsPartitions fsPartitions(Eventloop eventloop, Config config) {\n  return FsPartitions.create(eventloop)\n      .withInitializer(ofFsPartitions(config.getChild("activefs.cluster")));\n}\n')),(0,i.mdx)("p",null,"Here's the architecture of our distributed P2P storage:"),(0,i.mdx)(s.default,{style:{width:"100%"},alt:"Distributed P2P storage",sources:{light:(0,d.default)("/img/activefs_light.svg"),dark:(0,d.default)("/img/activefs_dark.svg")},mdxType:"ThemedImage"}),(0,i.mdx)("p",null,"You can create as many partitions as you wish."),(0,i.mdx)("p",null,"To launch the example, run the following scripts to create Docker images and build containers (run all the scripts under\n",(0,i.mdx)("inlineCode",{parentName:"p"},"activej/launchers/fs")," directory):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"# building two images for server and client\ndocker build -t cluster-server -f ClusterServerDockerfile .\ndocker build -t cluster-client -f ClusterClientDockerfile .\n# launching all the servers and client instances in background\ndocker-compose up -d\n")),(0,i.mdx)("p",null,"The containers will be built with the following configurations:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Server1"),": TCP-connection port ",(0,i.mdx)("inlineCode",{parentName:"li"},"9001"),", HTTP GUI port ",(0,i.mdx)("inlineCode",{parentName:"li"},"8081")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Server2"),": TCP-connection port ",(0,i.mdx)("inlineCode",{parentName:"li"},"9002"),", HTTP GUI port ",(0,i.mdx)("inlineCode",{parentName:"li"},"8082")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Server3"),": TCP-connection port ",(0,i.mdx)("inlineCode",{parentName:"li"},"9003"),", HTTP GUI port ",(0,i.mdx)("inlineCode",{parentName:"li"},"8083")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Client"),": HTTP GUI port ",(0,i.mdx)("inlineCode",{parentName:"li"},"8080"))),(0,i.mdx)("p",null,"Use this script to manage containers:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"# to stop a single container:\ndocker-compose stop server1\n# to stop all the containers:\ndocker-compose down\n# check containers status:\ndocker-compose ps\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(l.Z,{url:"/launchers/fs",mdxType:"Githublink"},"See full example on GitHub"))))}f.isMDXComponent=!0},86010:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.r(n),t.d(n,{default:function(){return r}})},8705:function(e,n,t){"use strict";t.r(n),n.default={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"}}}]);