"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9750],{38:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>h,default:()=>x,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var o=n(5893),t=n(1151),i=n(4304),a=n(7618),s=n(4277),l=n(9524),d=n(7815);const c={title:"ActiveJ | Workers, overcome the complexities and overheads of multithreaded programming model",sidebar_label:"Workers",description:"ActiveJ Workers allow to overcome the complexities and overheads of multithreaded programming model yet preserve Java multithreading capabilities",sidebar_position:3},h="Workers",p={id:"boot/workers",title:"ActiveJ | Workers, overcome the complexities and overheads of multithreaded programming model",description:"ActiveJ Workers allow to overcome the complexities and overheads of multithreaded programming model yet preserve Java multithreading capabilities",source:"@site/docs/boot/workers.mdx",sourceDirName:"boot",slug:"/boot/workers",permalink:"/boot/workers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"ActiveJ | Workers, overcome the complexities and overheads of multithreaded programming model",sidebar_label:"Workers",description:"ActiveJ Workers allow to overcome the complexities and overheads of multithreaded programming model yet preserve Java multithreading capabilities",sidebar_position:3},sidebar:"docs",previous:{title:"Service Graph",permalink:"/boot/servicegraph"},next:{title:"Config",permalink:"/boot/config"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"ActiveJ&#39;s threading model",id:"activejs-threading-model",level:2},{value:"Worker Scope",id:"worker-scope",level:2},{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic Worker Pool Example",id:"basic-worker-pool-example",level:3},{value:"Multithreaded Worker Pools Collaboration",id:"multithreaded-worker-pools-collaboration",level:3}];function v(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"workers",children:"Workers"}),"\n",(0,o.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(r.p,{children:["Workers (particularly ",(0,o.jsx)(a.Z,{url:"/boot-workers/src/main/java/io/activej/worker/WorkerPoolModule.java",children:(0,o.jsx)(r.code,{children:"WorkerPoolModule"})}),") is a convenient way to\ninject multiple dependencies of the same type. It is useful when you need, for example, the same set of dependencies for each thread. ActiveJ relies heavily on workers\nto implement multithreading. Workers are the core of ActiveJ's threading model."]}),"\n",(0,o.jsx)(r.h2,{id:"activejs-threading-model",children:"ActiveJ's threading model"}),"\n",(0,o.jsxs)(r.p,{children:["The primary goal of ActiveJ is to create a fast, scalable, easy-to-use, and high-abstraction level I/O async\nprogramming model.\nTo achieve this goal, ActiveJ's design principles overcome the performance overhead and complexities of the traditional\nmultithreaded programming model, but still take full advantage of Java's multithreading capabilities.\nActiveJ offers means of splitting the application into a ",(0,o.jsx)(r.code,{children:"Primary Reactor"})," thread and ",(0,o.jsx)(r.code,{children:"Worker Reactor"})," threads. These threads communicate with each other via message passing and thread-safe application-specific\nsingleton services."]}),"\n",(0,o.jsxs)(r.p,{children:["An implementation of a ",(0,o.jsx)(r.code,{children:"Reactor"})," in ActiveJ is an ",(0,o.jsx)(r.a,{href:"/async-io/eventloop",children:(0,o.jsx)(r.code,{children:"Eventloop"})}),". ",(0,o.jsx)(r.code,{children:"Eventloop"})," thread is essentially a single-threaded mini-application\n(similar to Node.js) that handles its share of I/O tasks and executes Runnables submitted from other threads.\nPrimary Reactor threads distribute and balance I/O tasks between Worker threads."]}),"\n",(0,o.jsx)(i.Z,{style:{margin:"0 auto"},chart:"\ngraph TB\n    id1(Primary Reactor) --\x3e id2(Worker Balancer)\n    id2 --\x3e id4\n    subgraph Worker Scope\n    id3(Reactor) --\x3e id4(HTTP Server)\n    end\n    id2 --\x3e id6\n    subgraph Worker Scope\n    id5(Reactor) --\x3e id6(HTTP Server)\n    end\n"}),"\n",(0,o.jsx)(r.p,{children:"The benefits of ActiveJ threading model:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Each primary/worker reactor thread works as a single-threaded application, which is easy to program and reason about"}),"\n",(0,o.jsx)(r.li,{children:"No multithreaded overhead, races, and thread synchronization overhead"}),"\n",(0,o.jsx)(r.li,{children:"The traditional power of Java in multithreaded programming is fully preserved:"}),"\n",(0,o.jsx)(r.li,{children:"A typical I/O load can easily be split between worker threads"}),"\n",(0,o.jsx)(r.li,{children:"The application can have thread-safe singleton services used by reactor threads, and a huge singleton\ndata state shared between all worker threads"}),"\n",(0,o.jsx)(r.li,{children:"You can still use some thread synchronization / lock-free algorithms, just try to avoid excessive blocking of\nconcurrent threads"}),"\n",(0,o.jsx)(r.li,{children:"Full compatibility with Java Threads, Thread Pools, Java Futures, and even blocking I/O operations"}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"worker-scope",children:"Worker Scope"}),"\n",(0,o.jsx)(r.h3,{id:"problem",children:"Problem"}),"\n",(0,o.jsx)(r.p,{children:"Such a design raises some implementation questions.\nFor example, if we want to implement a multithreaded HTTP web application with worker reactors:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"according to these design principles, we need to create separate instances of a worker reactor, a single-threaded HTTP\nserver, and its servlets for each worker thread"}),"\n",(0,o.jsx)(r.li,{children:"but what if our application has 8 reactor threads with 10 worker-thread components inside, do we have to create 80 of\ncomponents in total and assign them to each worker thread?"}),"\n",(0,o.jsx)(r.li,{children:"how is it even possible to manually instantiate, wire, initialize, and start/stop all these components in the\nright order, and also gracefully shutdown application on start/stop errors?"}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsxs)(r.p,{children:["Fortunately, thanks to ",(0,o.jsx)(r.a,{href:"/inject",children:"ActiveJ Inject"}),", we have a solution: the ",(0,o.jsx)(r.code,{children:"@Worker"})," scope. If you need to implement multiple worker threads:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["include ",(0,o.jsx)(a.Z,{url:"/boot-workers/src/main/java/io/activej/worker/WorkerPoolModule.java",children:(0,o.jsx)(r.code,{children:"WorkerPoolModule"})}),"\nmodule and create a ",(0,o.jsx)(a.Z,{url:"/boot-workers/src/main/java/io/activej/worker/WorkerPool.java",children:(0,o.jsx)(r.code,{children:"WorkerPool"})})," instance"]}),"\n",(0,o.jsxs)(r.li,{children:["annotate the components you want to put in each worker thread with the ",(0,o.jsx)(r.code,{children:"@Worker"})," scope annotation"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.strong,{children:"WorkerPool"})," will automatically instantiate identical dependency graphs for each of these worker threads\nYou are by no means limited to the above scheme with one primary reactor and N worker reactors:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"you can still have completely unrelated / standalone reactors (nor primary, neither worker)"}),"\n",(0,o.jsx)(r.li,{children:"several primary reactors sharing the same pool of worker reactors or several sets of worker pools with different number or threads"}),"\n",(0,o.jsxs)(r.li,{children:["you can even define your own ",(0,o.jsx)(r.code,{children:"@Worker"})," annotations, and create multiple worker pools with completely unrelated and\ndifferent dependency graphs\nAll this is in fully transparent and easy-to-understand modules - just mark different components with the appropriate\nworker annotations and let the ",(0,o.jsx)(r.code,{children:"WorkerPool"})," create all instances"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["To automatically start/stop application components in the correct order, simply include ",(0,o.jsx)(r.code,{children:"ServiceGraph"})," module into your ",(0,o.jsx)(r.strong,{children:"Launcher"})," - it is aware of worker pools and will treat worker instances as special compound singleton-like instances."]}),"\n",(0,o.jsxs)(r.p,{children:["For example, here is an example of utilizing ",(0,o.jsx)(a.Z,{url:"/launchers/http/src/main/java/io/activej/launchers/http/MultithreadedHttpServerLauncher.java",children:(0,o.jsx)(r.code,{children:"MultithreadedHttpServerLauncher"})})," which features ",(0,o.jsx)(r.code,{children:"ServiceGraphModule"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",metastring:"url=/examples/core/http/src/main/java/MultithreadedHttpServerExample.java tag=EXAMPLE",children:'public final class MultithreadedHttpServerExample extends MultithreadedHttpServerLauncher {\n  @Provides\n  @Worker\n  AsyncServlet servlet(@WorkerId int workerId) {\n    return request -> HttpResponse.ok200()\n      .withPlainText("Hello from worker server #" + workerId + "\\n")\n      .toPromise();\n  }\n\n  public static void main(String[] args) throws Exception {\n    MultithreadedHttpServerExample example = new MultithreadedHttpServerExample();\n    example.launch(args);\n  }\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"And its dependency graph looks as follows:"}),"\n",(0,o.jsx)(i.Z,{chart:'\ngraph\n    subgraph "@Worker()"\n    id1(HTTPServer) --\x3e id2(Reactor)\n    id1 --\x3e id3(Async Servlet)\n    id3 --\x3e id4("@WorkerId() int")\n    end\n    id2 -.-> ThrottlingController\n    id2 --\x3e id5(Config)\n    id1 --\x3e id5\n    id9 --\x3e id5\n    id6(Reactor) --\x3e id5\n    id7(Primary Server) --\x3e id5\n    id7 --\x3e id6\n    id7 --\x3e id8(WorkerPool$Instances)\n    id8 --\x3e id9(WorkerPool)\n    id9 --\x3e id10(WorkerPools)\n    id10 --\x3e Injector\n'}),"\n",(0,o.jsxs)(r.p,{children:["To help you understand how worker pools work, here is a simplified ",(0,o.jsx)(r.strong,{children:"WorkerPool"})," implementation in a nutshell (the actual implementation differs, but not much):"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:"public final class WorkerPool {\n\tprivate final Scope scope;\n\tprivate final Injector[] scopeInjectors;\n\n\tWorkerPool(Injector injector, Scope scope, int workers) {\n\t\tthis.scope = scope;\n\t\tthis.scopeInjectors = new Injector[workers];\n\t\tfor (int i = 0; i < workers; i++) {\n\t\t\tscopeInjectors[i] = injector.enterScope(scope, new HashMap<>(), false);\n\t\t}\n\t}\n\n\tpublic <T> Instances<T> getInstances(Key<T> key) {\n\t\tInstances<T> instances = new Instances<>(new Object[scopeInjectors.length]);\n\t\tfor (int i = 0; i < scopeInjectors.length; i++) {\n\t\t\tinstances.instances[i] = scopeInjectors[i].getInstance(key);\n\t\t}\n\t\treturn instances;\n\t}\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["As you can see, the root ",(0,o.jsx)(a.Z,{url:"/core-inject/src/main/java/io/activej/inject/Injector.java",children:(0,o.jsx)(r.code,{children:"Injector"})}),"\nsimply \u2018enters\u2019 the worker scope ",(0,o.jsx)(r.code,{children:"N"})," times, so we have ",(0,o.jsx)(r.code,{children:"N"})," ",(0,o.jsx)(r.code,{children:"Injector"}),"s with identical bindings/dependency graphs, but\ndifferent containers of instances. Each time we need to create some ",(0,o.jsx)(r.em,{children:"worker"})," instances, they are created ",(0,o.jsx)(r.code,{children:"N"})," times by\neach ",(0,o.jsx)(r.em,{children:"injector"})," and returned as a vector of ",(0,o.jsx)(r.code,{children:"N"})," instances."]}),"\n",(0,o.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(r.admonition,{type:"note",children:[(0,o.jsx)(r.p,{children:"To run the examples, you need to clone ActiveJ from GitHub"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"git clone https://github.com/activej/activej\n"})}),(0,o.jsxs)(r.p,{children:["And import it as a Maven project. Check out tag ",(0,o.jsx)(r.strong,{children:(0,o.jsx)(d.Z,{name:"currentVersion"})}),". Before running the examples, build the project.\nThese examples are located at ",(0,o.jsx)(r.code,{children:"activej/examples/core/boot"})]})]}),"\n",(0,o.jsx)(r.h3,{id:"basic-worker-pool-example",children:"Basic Worker Pool Example"}),"\n",(0,o.jsx)(r.p,{children:"An example of creating a worker pool with 4 workers:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",metastring:"url=/examples/core/boot/src/main/java/WorkerPoolModuleExample.java tag=EXAMPLE",children:'public final class WorkerPoolModuleExample extends AbstractModule {\n  @Provides\n  WorkerPool workerPool(WorkerPools workerPools) {\n    return workerPools.createPool(4);\n  }\n\n  @Provides\n  @Worker\n  String string(@WorkerId int workerId) {\n    return "Hello from worker #" + workerId;\n  }\n\n  public static void main(String[] args) {\n    Injector injector = Injector.of(WorkerPoolModule.create(), new WorkerPoolModuleExample());\n    WorkerPool workerPool = injector.getInstance(WorkerPool.class);\n    WorkerPool.Instances<String> strings = workerPool.getInstances(String.class);\n    strings.forEach(System.out::println);\n  }\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"The dependency graph of the example includes the created worker pool and looks as follows:"}),"\n",(0,o.jsx)("div",{style:{width:"100%",display:"flex"},children:(0,o.jsx)(s.Z,{style:{margin:"0 auto"},alt:"Dependency graph",sources:{light:(0,l.Z)("/img/worker-pool-dependencies_dark.svg"),dark:(0,l.Z)("/img/worker-pool-dependencies_light.svg")}})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:(0,o.jsx)(a.Z,{url:"/examples/core/boot/src/main/java/WorkerPoolModuleExample.java",children:"See full example on GitHub"})})}),"\n",(0,o.jsx)(r.h3,{id:"multithreaded-worker-pools-collaboration",children:"Multithreaded Worker Pools Collaboration"}),"\n",(0,o.jsxs)(r.p,{children:["Several Worker Pools can work together on a same task. In this example, we have 25 Workers, and each of them has its\nown Eventloop. These Eventloops are wrapped in Threads and then added to the list of ",(0,o.jsx)(r.em,{children:"threads"}),". The\nlist is then shuffled and threads with Eventloop tasks start. The task is to put the Eventloop ",(0,o.jsx)(r.em,{children:"id"})," in the ",(0,o.jsx)(r.strong,{children:"ConcurrentLinkedQueue"}),"\nin accordance to the delay (",(0,o.jsx)(r.em,{children:"id"})," multiplied by 100). In this way, we get an ordered queue of Eventloop ids, after that\nthe Threads are parked and the queue is emptied."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",metastring:"url=/examples/core/boot/src/main/java/MultithreadedWorkerCollab.java tag=EXAMPLE",children:"public final class MultithreadedWorkerCollab extends AbstractModule {\n\n  @Provides\n  @Worker\n  Eventloop eventloop(@WorkerId int wid, ConcurrentLinkedQueue<Integer> queue) {\n    Eventloop eventloop = Eventloop.create();\n    eventloop.delay(100L * wid, () -> queue.add(wid));\n    return eventloop;\n  }\n\n  @Provides\n  WorkerPool workerPool(WorkerPools workerPools) {\n    return workerPools.createPool(25);\n  }\n\n  @Provides\n  ConcurrentLinkedQueue<Integer> queue() {\n    return new ConcurrentLinkedQueue<>();\n  }\n\n  public static void main(String[] args) throws InterruptedException {\n    Injector injector = Injector.of(WorkerPoolModule.create(), new MultithreadedWorkerCollab());\n    WorkerPool workerPool = injector.getInstance(WorkerPool.class);\n    WorkerPool.Instances<Eventloop> eventloops = workerPool.getInstances(Eventloop.class);\n\n    List<Thread> threads = new ArrayList<>();\n    for (Eventloop eventloop : eventloops.getList()) {\n      Thread thread = new Thread(eventloop);\n      threads.add(thread);\n    }\n\n    Collections.shuffle(threads);\n    threads.forEach(Thread::start);\n\n    for (Thread thread : threads) {\n      thread.join();\n    }\n\n    ConcurrentLinkedQueue<Integer> queue = injector.getInstance(new Key<>() {});\n\n    while (!queue.isEmpty()) {\n      System.out.println(queue.poll());\n    }\n\n  }\n}\n"})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:(0,o.jsx)(a.Z,{url:"/examples/core/boot/src/main/java/MultithreadedWorkerCollab.java",children:"See full example on GitHub"})})})]})}function x(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}},7618:(e,r,n)=>{n.d(r,{Z:()=>i});n(7294);var o=n(9962),t=n(5893);const i=e=>{let{url:r,text:n,isInline:i=!0,children:a}=e;const{siteConfig:s}=(0,o.Z)(),l=r.startsWith("/examples")?s.customFields.githubExamplesBranch:s.customFields.githubBranch;return(0,t.jsx)("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+l+r,target:"_blank",children:n||a})}},4304:(e,r,n)=>{n.d(r,{Z:()=>a});var o=n(7294),t=n(6365),i=n(5893);t.L.initialize({startOnLoad:!0});const a=e=>{let{chart:r}=e;return(0,o.useEffect)((()=>{t.L.contentLoaded()}),[]),(0,i.jsx)("div",{className:"mermaid",children:r})}},7815:(e,r,n)=>{n.d(r,{Z:()=>t});n(7294);var o=n(9962);const t=e=>{let{name:r}=e;const{siteConfig:n}=(0,o.Z)();if(!r)throw new Error("Variable name is required");if(void 0===n.customFields[r])throw new Error(`Variable ${r} not exist`);return n.customFields[r]}}}]);