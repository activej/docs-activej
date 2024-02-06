"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[4773],{5471:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var i=r(5893),t=r(1151),a=r(7815),s=r(7618),l=r(4277),o=r(9524);const c={description:"ActiveJ FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding",sidebar_label:"Examples",keywords:["storage","distributed storage","redundancy","rebelancing","kernel-space","java framework","ftp protocol","append-only"]},d="Examples",h={id:"fs/examples",title:"Examples",description:"ActiveJ FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding",source:"@site/docs/fs/examples.mdx",sourceDirName:"fs",slug:"/fs/examples",permalink:"/fs/examples",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"ActiveJ FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding",sidebar_label:"Examples",keywords:["storage","distributed storage","redundancy","rebelancing","kernel-space","java framework","ftp protocol","append-only"]},sidebar:"docs",previous:{title:"Overview",permalink:"/fs"},next:{title:"Bytebuf",permalink:"/misc/bytebuf"}},u={},p=[{value:"Server Setup",id:"server-setup",level:2},{value:"File Upload",id:"file-upload",level:2},{value:"File Download",id:"file-download",level:2},{value:"FileSystem Decorator",id:"filesystem-decorator",level:2},{value:"Cluster File Storage",id:"cluster-file-storage",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"To run the examples in an IDE, you need to clone ActiveJ project:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/activej/activej\n"})}),(0,i.jsxs)(n.p,{children:["And import it as a Maven project. Check out branch ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(a.Z,{name:"currentVersion"})}),". Before running the example, build the project (",(0,i.jsx)(n.strong,{children:"Ctrl + F9"})," for IntelliJ IDEA)."]})]}),"\n",(0,i.jsx)(n.h2,{id:"server-setup",children:"Server Setup"}),"\n",(0,i.jsxs)(n.p,{children:["Let's take a closer look at the ",(0,i.jsx)(n.strong,{children:"Server Setup Example"}),". To make setup and launching as easy as possible, there is a special ",(0,i.jsx)(s.Z,{url:"/launchers/fs/src/main/java/io/activej/launchers/fs/SimpleTcpServerLauncher.java",children:(0,i.jsx)(n.code,{children:"SimpleTcpServerLauncher"})}),", an implementation of ",(0,i.jsxs)(n.a,{href:"/boot/launcher",children:["ActiveJ ",(0,i.jsx)(n.code,{children:"Launcher"})]})," (abstracted implementation of ",(0,i.jsx)(n.em,{children:"main"})," methods). It allows you to simply set up applications, so all you need to configure an FS server is to override a few Launcher methods:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onInit"})," - runs prior to application start"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"createConfig"})," - overrides ",(0,i.jsx)(n.code,{children:"SimpleTcpServerLauncher"}),"'s method and adds custom configuration"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"run"})," - Launcher's main method, represents business logic"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Then ",(0,i.jsx)(n.em,{children:"launch"})," the ",(0,i.jsx)(s.Z,{url:"/launcher/src/main/java/io/activej/launcher/Launcher.java",children:(0,i.jsx)(n.code,{children:"Launcher"})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/ServerSetupExample.java tag=EXAMPLE",children:'public class ServerSetupExample extends SimpleTcpServerLauncher {\n  private Path storage;\n\n  @Override\n  protected void onInit(Injector injector) throws Exception {\n    storage = Files.createTempDirectory("server_storage");\n  }\n\n  @Override\n  protected Config createConfig() {\n    return super.createConfig()\n      .overrideWith(\n        Config.create()\n          .with("fs.path", storage.toString())\n          .with("fs.listenAddresses", "6732")\n      );\n  }\n\n  @Override\n  protected void run() throws Exception {\n    awaitShutdown();\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new ServerSetupExample();\n    launcher.launch(args);\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(s.Z,{url:"/examples/cloud/fs/src/main/java/ServerSetupExample.java",children:"See full example on GitHub"})})}),"\n",(0,i.jsx)(n.h2,{id:"file-upload",children:"File Upload"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsx)(s.Z,{url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",children:(0,i.jsx)(n.code,{children:"FileUploadExample"})})}),"  also extends ",(0,i.jsx)(n.code,{children:"Launcher"})," and thus implements the above ",(0,i.jsx)(n.code,{children:"Launcher"})," methods."]}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we will use an ",(0,i.jsx)(s.Z,{text:"IFileSystem",url:"/cloud-fs/src/main/java/io/activej/fs/IFileSystem.java"})," instance that depends on the asynchronous ",(0,i.jsxs)(n.a,{href:"/async-io/eventloop",children:["ActiveJ ",(0,i.jsx)(n.strong,{children:"Eventloop"})]}),"\nTo simplify working with dependencies, we will use the ",(0,i.jsx)(n.a,{href:"/inject",children:"ActiveJ Inject"})," DI library. It is lightning fast, efficient, and perfectly compatible with Launcher. So we simply ",(0,i.jsx)(s.Z,{url:"/core-inject/src/main/java/io/activej/inject/annotation/Inject.java",children:(0,i.jsx)(n.code,{children:"@Inject"})})," two instances and add ",(0,i.jsx)(s.Z,{url:"/core-inject/src/main/java/io/activej/inject/annotation/Provides.java",children:(0,i.jsx)(n.code,{children:"@Provides"})})," factory methods.\nAs in the previous example, we will also overwrite ",(0,i.jsx)(n.code,{children:"Launcher"}),"'s methods ",(0,i.jsx)(n.code,{children:"onInit"}),", ",(0,i.jsx)(n.code,{children:"getModule"}),", and ",(0,i.jsx)(n.code,{children:"run"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Also, this example uses the ActiveJ ",(0,i.jsx)(n.a,{href:"/async-io/csp",children:"CSP"})," component, specifically the ",(0,i.jsx)(s.Z,{url:"/core-csp/src/main/java/io/activej/csp/file/ChannelFileReader.java",children:(0,i.jsx)(n.code,{children:"ChannelFileReader"})})," class. It allows asynchronously reading binary data from files."]}),"\n",(0,i.jsxs)(n.p,{children:["You can see full example sources on ",(0,i.jsx)(s.Z,{url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",children:(0,i.jsx)(n.strong,{children:"GitHub"})}),", here we will consider only the upload process that is defined in the overwritten method ",(0,i.jsx)(n.code,{children:"run"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/FileUploadExample.java tag=EXAMPLE",children:"@Override\nprotected void run() throws Exception {\n  ExecutorService executor = newSingleThreadExecutor();\n  CompletableFuture<Void> future = reactor.submit(() ->\n    // consumer result here is a marker of it being successfully uploaded\n    ChannelFileReader.open(executor, clientFile)\n      .then(cfr -> cfr.streamTo(client.upload(FILE_NAME, EXAMPLE_TEXT.length())))\n      .whenResult(() -> System.out.printf(\"%nFile '%s' successfully uploaded%n%n\", FILE_NAME))\n  );\n  try {\n    future.get();\n  } finally {\n    executor.shutdown();\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(s.Z,{url:"/examples/cloud/fs/src/main/java/FileUploadExample.java",children:"See full example on GitHub"})})}),"\n",(0,i.jsx)(n.h2,{id:"file-download",children:"File Download"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsx)(s.Z,{text:"FileDownloadExample",url:"/examples/cloud/fs/src/main/java/FileDownloadExample.java"})})," has an implementation similar to the ",(0,i.jsx)(n.strong,{children:"File Upload"})," example. Here we will only look at the download process, which is defined in the overwritten ",(0,i.jsx)(n.code,{children:"run()"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/FileDownloadExample.java tag=EXAMPLE",children:"@Override\nprotected void run() throws Exception {\n  ExecutorService executor = newSingleThreadExecutor();\n  CompletableFuture<Void> future = reactor.submit(() ->\n    ChannelSuppliers.ofPromise(client.download(REQUIRED_FILE))\n      .streamTo(ChannelFileWriter.open(executor, clientStorage.resolve(DOWNLOADED_FILE)))\n      .whenResult(() -> System.out.printf(\"%nFile '%s' successfully downloaded to '%s'%n%n\",\n        REQUIRED_FILE, clientStorage))\n  );\n  try {\n    future.get();\n  } finally {\n    executor.shutdown();\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(s.Z,{url:"/examples/cloud/fs/src/main/java/FileDownloadExample.java",children:"See full example on GitHub"})})}),"\n",(0,i.jsx)(n.h2,{id:"filesystem-decorator",children:"FileSystem Decorator"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes you may need to override/extend the default behavior of ",(0,i.jsx)(n.code,{children:"IFileSystem"})," implementation. You can use a ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Decorator_pattern",children:"Decorator"})," pattern to do this.\nThe ",(0,i.jsx)(s.Z,{text:"DecoratedFileSystemExample",url:"/examples/cloud/fs/src/main/java/DecoratedFileSystemExample.java"})," demonstrates how to do just that. It decorates the ",(0,i.jsx)(n.code,{children:"IFileSystem"})," implementation by adding additional logs for uploading and downloading files."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DecoratedFileSystemExample"})," extends ",(0,i.jsx)(n.code,{children:"ServerSetupExample"}),", so it inherits its DI bindings. First, we need to override\nthe binding for ",(0,i.jsx)(n.code,{children:"FileSystemServer"})," to pass decorated ",(0,i.jsx)(n.code,{children:"IFileSystem"})," instead of the original one. To do this, we will override\nthe ",(0,i.jsx)(n.code,{children:"Launcher#getOverrideModule"})," method and provide a new binding for ",(0,i.jsx)(n.code,{children:"FileSystemServer"})," that uses the decorated ",(0,i.jsx)(n.code,{children:"IFileSystem"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/DecoratedFileSystemExample.java tag=OVERRIDE",children:'@Override\nprotected Module getOverrideModule() {\n  return new AbstractModule() {\n    @Eager\n    @Provides\n    FileSystemServer fileSystemServer(NioReactor reactor, @Named("decorated") IFileSystem decoratedFS, Config config) {\n      return FileSystemServer.builder(reactor, decoratedFS)\n        .initialize(ofFileSystemServer(config.getChild("fs")))\n        .build();\n    }\n\n    @Provides\n    @Named("decorated")\n    IFileSystem decoratedFileSystem(IFileSystem fs) {\n      return new LoggingFileSystem(fs);\n    }\n  };\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["As you can see, in the ",(0,i.jsx)(n.code,{children:"decoratedFileSystem(IFileSystem fs)"})," method we request the original ",(0,i.jsx)(n.code,{children:"IFileSystem"})," and return the decorated one\n(wrapped in ",(0,i.jsx)(n.code,{children:"LoggingFileSystem"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:"url=/examples/cloud/fs/src/main/java/DecoratedFileSystemExample.java tag=WRAPPER",children:'private static final class LoggingFileSystem extends ForwardingFileSystem {\n  private static final Logger logger = LoggerFactory.getLogger(LoggingFileSystem.class);\n\n  public LoggingFileSystem(IFileSystem peer) {\n    super(peer);\n  }\n\n  @Override\n  public Promise<ChannelConsumer<ByteBuf>> upload(String name, long size) {\n    return super.upload(name)\n      .map(consumer -> {\n        logger.info("Starting upload of file: {}. File size is {} bytes", name, size);\n        return consumer\n          .withAcknowledgement(ack -> ack\n            .whenResult(() -> logger.info("Upload of file {} finished", name)));\n      });\n  }\n\n  @Override\n  public Promise<ChannelSupplier<ByteBuf>> download(String name, long offset, long limit) {\n    return super.download(name, offset, limit)\n      .map(supplier -> {\n        logger.info("Starting downloading file: {}", name);\n        return supplier\n          .withEndOfStream(eos -> eos\n            .whenResult(() -> logger.info("Download of file {} finished", name)));\n      });\n\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"LoggingFileSystem"})," extends ",(0,i.jsx)(n.code,{children:"ForwardingFileSystem"}),", which simply delegates all ",(0,i.jsx)(n.code,{children:"IFileSystem"})," method calls to some underlying\n",(0,i.jsx)(n.code,{children:"IFileSystem"})," instance. We override the methods we want to decorate (",(0,i.jsx)(n.code,{children:"download"}),", ",(0,i.jsx)(n.code,{children:"upload"}),") and add custom logging messages when\nupload/download starts and finishes."]}),"\n",(0,i.jsxs)(n.p,{children:["You can run ",(0,i.jsx)(s.Z,{text:"FileUploadExample",url:"/examples/cloud/fs/src/main/java/FileUploadExample.java"})," followed by ",(0,i.jsx)(s.Z,{text:"FileDownloadExample",url:"/examples/cloud/fs/src/main/java/FileDownloadExample.java"}),"\nAfter this you should see logging output:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"INFO Starting upload of file: example.txt. File size is 12 bytes\nINFO Upload of file example.txt finished\nINFO Starting downloading file: example.txt\nINFO Download of file example.txt finished\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(s.Z,{url:"/examples/cloud/fs/src/main/java/DecoratedFileSystemExample.java",children:"See full example on GitHub"})})}),"\n",(0,i.jsx)(n.h2,{id:"cluster-file-storage",children:"Cluster File Storage"}),"\n",(0,i.jsx)(n.p,{children:"With ActiveJ FS you can easily create a distributed cluster file storage with high fault tolerance. We will use Docker to launch three virtual servers and one client. The storage will support file uploads with automatic repartitioning according to a given rule and number of replicas."}),"\n",(0,i.jsxs)(n.p,{children:["The first thing we need to do is to create a ",(0,i.jsx)(n.code,{children:"ClusterTcpServerLauncher"})," class for our server. Extend ",(0,i.jsx)(s.Z,{url:"/launchers/fs/src/main/java/io/activej/launchers/fs/SimpleTcpServerLauncher.java",children:(0,i.jsx)(n.code,{children:"SimpleTcpServerLauncher"})})," to get all the necessary instances: ",(0,i.jsx)(s.Z,{url:"/cloud-fs/src/main/java/io/activej/fs/tcp/FileSystemServer.java",children:(0,i.jsx)(n.code,{children:"FileSystemServer"})}),", local ",(0,i.jsx)(s.Z,{url:"/cloud-fs/src/main/java/io/activej/fs/IFileSystem.java",children:(0,i.jsx)(n.code,{children:"IFileSystem"})}),", ",(0,i.jsx)(s.Z,{url:"/core-http/src/main/java/io/activej/http/HttpServer.java",children:(0,i.jsx)(n.code,{children:"HttpServer"})})," for the GUI, which will simplify working with your storage, and other helper instances. In ",(0,i.jsx)(n.code,{children:"ClusterTcpServerLauncher"}),", we will only need to configure utils for repartitioning management, such as task schedulers, ",(0,i.jsx)(s.Z,{url:"/cloud-fs/src/main/java/io/activej/fs/cluster/ClusterRepartitionController.java",children:(0,i.jsx)(n.code,{children:"ClusterRepartitionController"})}),", and ",(0,i.jsx)(s.Z,{url:"/cloud-fs/src/main/java/io/activej/fs/cluster/FileSystemPartitions.java",children:(0,i.jsx)(n.code,{children:"FileSystemPartitions"})})," to track alive partitions and their statuses. The partitions will communicate over TCP, while the GUI server will use HTTP."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:"url=/launchers/fs/src/main/java/io/activej/launchers/fs/ClusterTcpServerLauncher.java tag=EXAMPLE",children:'@Provides\n@Eager\n@Named("repartition")\nTaskScheduler repartitionScheduler(ClusterRepartitionController controller, Config config) {\n  return TaskScheduler.builder(controller.getReactor(), controller::repartition)\n    .initialize(ofTaskScheduler(config.getChild("fs.repartition")))\n    .build();\n}\n\n@Provides\n@Eager\n@Named("clusterDeadCheck")\nTaskScheduler deadCheckScheduler(Config config, FileSystemPartitions partitions) {\n  return TaskScheduler.builder(partitions.getReactor(), partitions::checkDeadPartitions)\n    .initialize(ofTaskScheduler(config.getChild("fs.repartition.deadCheck")))\n    .build();\n}\n\n@Provides\nClusterRepartitionController repartitionController(\n  Reactor reactor, FileSystemServer localServer, FileSystemPartitions partitions, Config config\n) {\n  String localPartitionId = first(partitions.getAllPartitions());\n  assert localPartitionId != null;\n\n  return ClusterRepartitionController.builder(reactor, localPartitionId, partitions)\n    .initialize(ofClusterRepartitionController(config.getChild("fs.repartition")))\n    .build();\n}\n\n@Provides\nIDiscoveryService discoveryService(NioReactor reactor,\n  IFileSystem fileSystem,\n  Config config) throws MalformedDataException {\n\n  return Initializers.constantDiscoveryService(reactor, fileSystem, config);\n}\n\n@Provides\nFileSystemPartitions fileSystemPartitions(Reactor reactor, IDiscoveryService discoveryService, OptionalDependency<ServerSelector> serverSelector) {\n  return FileSystemPartitions.builder(reactor, discoveryService)\n    .withServerSelector(serverSelector.orElse(RENDEZVOUS_HASH_SHARDER))\n    .build();\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now we can move on to creating the ",(0,i.jsx)(n.code,{children:"ClusterTcpClientLauncher"})," class. We need to provide the ",(0,i.jsx)(n.code,{children:"ClusterRepartitionController"})," and a task scheduler to detect dead partitions. Similar to the server launcher, we need to provide an ",(0,i.jsx)(n.code,{children:"HttpServer"})," for the GUI and ",(0,i.jsx)(n.code,{children:"FileSystemPartitions"})," for partition management. We also need an instance of the ",(0,i.jsx)(s.Z,{text:"ClusterFileSystem",url:"/cloud-fs/src/main/java/io/activej/fs/cluster/ClusterFileSystem.java"})," class, an implementation of ",(0,i.jsx)(n.code,{children:"IFileSystem"})," that works with other partitions as a cluster and contains some redundancy and fail tolerance features."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:"url=/launchers/fs/src/main/java/io/activej/launchers/fs/ClusterTcpClientLauncher.java tag=EXAMPLE",children:'@Provides\n@Eager\n@Named("clusterDeadCheck")\nTaskScheduler deadCheckScheduler(Config config, FileSystemPartitions partitions) {\n  return TaskScheduler.builder(partitions.getReactor(), partitions::checkDeadPartitions)\n    .initialize(ofTaskScheduler(config.getChild("fs.repartition.deadCheck")))\n    .build();\n}\n\n@Provides\n@Eager\nHttpServer guiServer(NioReactor reactor, AsyncServlet servlet, Config config) {\n  return HttpServer.builder(reactor, servlet)\n    .initialize(ofHttpServer(config.getChild("fs.http.gui")))\n    .build();\n}\n\n@Provides\nAsyncServlet guiServlet(Reactor reactor, IFileSystem fileSystem) {\n  return FileSystemGuiServlet.create(reactor, fileSystem, "Cluster FS Client");\n}\n\n@Provides\nIFileSystem fileSystem(Reactor reactor, FileSystemPartitions partitions, Config config) {\n  return ClusterFileSystem.builder(reactor, partitions)\n    .initialize(ofClusterFileSystem(config.getChild("fs.cluster")))\n    .build();\n}\n\n@Provides\nIDiscoveryService discoveryService(NioReactor reactor, Config config) throws MalformedDataException {\n  return Initializers.constantDiscoveryService(reactor, config);\n}\n\n@Provides\nFileSystemPartitions fileSystemPartitions(Reactor reactor, IDiscoveryService discoveryService) {\n  return FileSystemPartitions.create(reactor, discoveryService);\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Here's the architecture of our distributed P2P storage:"}),"\n",(0,i.jsx)(l.Z,{style:{width:"100%"},alt:"Distributed P2P storage",sources:{light:(0,o.Z)("/img/activefs_light.svg"),dark:(0,o.Z)("/img/activefs_dark.svg")}}),"\n",(0,i.jsx)(n.p,{children:"You can create as many partitions as you wish."}),"\n",(0,i.jsxs)(n.p,{children:["To launch the example, run the following scripts to create Docker images and build containers (run all the scripts under\n",(0,i.jsx)(n.code,{children:"activej/launchers/fs"})," directory):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# building two images for server and client\ndocker build -t cluster-server -f ClusterServerDockerfile .\ndocker build -t cluster-client -f ClusterClientDockerfile .\n# launching all the servers and client instances in background\ndocker-compose up -d\n"})}),"\n",(0,i.jsx)(n.p,{children:"The containers will be built with the following configurations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Server1"}),": TCP-connection port ",(0,i.jsx)(n.code,{children:"9001"}),", HTTP GUI port ",(0,i.jsx)(n.code,{children:"8081"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Server2"}),": TCP-connection port ",(0,i.jsx)(n.code,{children:"9002"}),", HTTP GUI port ",(0,i.jsx)(n.code,{children:"8082"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Server3"}),": TCP-connection port ",(0,i.jsx)(n.code,{children:"9003"}),", HTTP GUI port ",(0,i.jsx)(n.code,{children:"8083"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Client"}),": HTTP GUI port ",(0,i.jsx)(n.code,{children:"8080"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Use this script to manage containers:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# to stop a single container:\ndocker-compose stop server1\n# to stop all the containers:\ndocker-compose down\n# check containers status:\ndocker-compose ps\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(s.Z,{url:"/launchers/fs",children:"See full example on GitHub"})})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},7618:(e,n,r)=>{r.d(n,{Z:()=>a});r(7294);var i=r(9962),t=r(5893);const a=e=>{let{url:n,text:r,isInline:a=!0,children:s}=e;const{siteConfig:l}=(0,i.Z)(),o=n.startsWith("/examples")?l.customFields.githubExamplesBranch:l.customFields.githubBranch;return(0,t.jsx)("a",{style:a?{}:{display:"block",marginBottom:"16px"},href:l.customFields.githubUrl+"/"+o+n,target:"_blank",children:r||s})}},7815:(e,n,r)=>{r.d(n,{Z:()=>t});r(7294);var i=r(9962);const t=e=>{let{name:n}=e;const{siteConfig:r}=(0,i.Z)();if(!n)throw new Error("Variable name is required");if(void 0===r.customFields[n])throw new Error(`Variable ${n} not exist`);return r.customFields[n]}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var i=r(7294);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);