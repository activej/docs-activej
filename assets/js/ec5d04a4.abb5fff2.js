(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6792],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(t),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return t?a.createElement(h,l(l({ref:n},m),{},{components:t})):a.createElement(h,l({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},77618:function(e,n,t){"use strict";var a=t(67294),r=t(39962);n.Z=function(e){var n=e.url,t=e.text,i=e.isInline,l=void 0===i||i,p=e.children,s=(0,r.Z)().siteConfig;return a.createElement("a",{style:l?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+n,target:"_blank"},t||p)}},77815:function(e,n,t){"use strict";t(67294);var a=t(39962);n.Z=function(e){var n=e.name,t=(0,a.Z)().siteConfig;if(!n)throw new Error("Variable name is required");if(void 0===t.customFields[n])throw new Error("Variable "+n+" not exist");return t.customFields[n]}},23985:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),l=t(77618),p=t(77815),s=["components"],o={title:"ActiveJ | CSP, efficient I/O communication between channels",description:"Efficient Java CSP (Communicating Sequential Process) implementation for I/O communication",keywords:["java","csp","communication sequential process","java csp","go language","go"]},m="CSP",u={unversionedId:"async-io/csp",id:"async-io/csp",isDocsHomePage:!1,title:"ActiveJ | CSP, efficient I/O communication between channels",description:"Efficient Java CSP (Communicating Sequential Process) implementation for I/O communication",source:"@site/docs/async-io/csp.mdx",sourceDirName:"async-io",slug:"/async-io/csp",permalink:"/async-io/csp",version:"current",frontMatter:{title:"ActiveJ | CSP, efficient I/O communication between channels",description:"Efficient Java CSP (Communicating Sequential Process) implementation for I/O communication",keywords:["java","csp","communication sequential process","java csp","go language","go"]},sidebar:"docs",previous:{title:"ActiveJ | Promise, Java Promise for async programming model, alternative to Java Futures",permalink:"/async-io/promise"},next:{title:"ActiveJ | Datastream, asynchronous reactive Java streams with minimal overhead",permalink:"/async-io/datastream"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Features:",id:"features",children:[]},{value:"Channel Supplier and Channel Consumer",id:"channel-supplier-and-channel-consumer",children:[]},{value:"Channel Queue",id:"channel-queue",children:[]},{value:"Comparison to Datastream",id:"comparison-to-datastream",children:[]},{value:"Benchmark",id:"benchmark",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic Channel Example",id:"basic-channel-example",children:[]},{value:"CSP Example",id:"csp-example",children:[]},{value:"Channel Buffer Example",id:"channel-buffer-example",children:[]},{value:"ChannelSplitter Example",id:"channelsplitter-example",children:[]},{value:"ByteBufs Decoder Example",id:"bytebufs-decoder-example",children:[]},{value:"Channel File Example",id:"channel-file-example",children:[]}]}],d={toc:c};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"csp"},"CSP"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"CSP (stands for Communicating Sequential Process) provides sequential I/O communication between asynchronous data suppliers and consumers.\nIt is used for asynchronous streaming of data. CSP was inspired by the Go language channels."),(0,i.kt)("h2",{id:"features"},"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"High performance and throughput speed"),(0,i.kt)("li",{parentName:"ul"},"Optimized for working with medium-sized objects (like ",(0,i.kt)("a",{parentName:"li",href:"/misc/bytebuf"},(0,i.kt)("inlineCode",{parentName:"a"},"ByteBufs")),")"),(0,i.kt)("li",{parentName:"ul"},"CSP has reach DSL, which provides a simple programming model"),(0,i.kt)("li",{parentName:"ul"},"Has an asynchronous back pressure management")),(0,i.kt)("h2",{id:"channel-supplier-and-channel-consumer"},"Channel Supplier and Channel Consumer"),(0,i.kt)("p",null,"CSP communication is conducted via ",(0,i.kt)(l.Z,{url:"/core-csp/src/main/java/io/activej/csp/ChannelSupplier.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ChannelSupplier"))," and ",(0,i.kt)(l.Z,{url:"/core-csp/src/main/java/io/activej/csp/ChannelConsumer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ChannelConsumer")),", which provide and accept some data respectively. Each consecutive request to these channels should be called only after the previous request finishes. CSP uses ",(0,i.kt)("a",{parentName:"p",href:"/async-io/promise"},(0,i.kt)("inlineCode",{parentName:"a"},"promises"))," to manage it."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ChannelSupplier")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"get()")," method that returns a ",(0,i.kt)("a",{parentName:"p",href:"/async-io/promise"},(0,i.kt)("inlineCode",{parentName:"a"},"Promise"))," of the provided value. Until this ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," is completed either with a result or with an exception, the ",(0,i.kt)("inlineCode",{parentName:"p"},"get()")," method shouldn't be called again. Also note, that if ",(0,i.kt)("inlineCode",{parentName:"p"},"get()")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", this represents the end of the stream and no additional data should be requested from this supplier."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ChannelConsumer")," has an ",(0,i.kt)("inlineCode",{parentName:"p"},"accept(@Nullable T value)")," method which returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," as a marker of completion of the accepting. Until this ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," completes, ",(0,i.kt)("inlineCode",{parentName:"p"},"accept()")," method should not be called again. By analogy with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelSupplier"),", if a ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," value is accepted, it represents the end of the stream."),(0,i.kt)("p",null,"Here is an example of communication between ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelSupplier")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelConsumer"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/csp/src/main/java/CspExample.java tag=REGION_1",url:"/examples/core/csp/src/main/java/CspExample.java",tag:"REGION_1"},"protected void doProcess() {\n  input.get()\n      .whenComplete((data, e) -> {\n        if (data == null) {\n          output.acceptEndOfStream()\n              .whenResult(this::completeProcess);\n        } else {\n          data = data.toUpperCase() + '(' + data.length() + ')';\n\n          output.accept(data)\n              .whenResult(this::doProcess);\n        }\n      });\n}\n")),(0,i.kt)("h2",{id:"channel-queue"},"Channel Queue"),(0,i.kt)("p",null,"Another important concept of CSP is ",(0,i.kt)(l.Z,{url:"/core-csp/src/main/java/io/activej/csp/queue/ChannelQueue.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ChannelQueue"))," interface and its implementations: ",(0,i.kt)(l.Z,{url:"/core-csp/src/main/java/io/activej/csp/queue/ChannelBuffer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ChannelBuffer"))," and ",(0,i.kt)(l.Z,{url:"/core-csp/src/main/java/io/activej/csp/queue/ChannelZeroBuffer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ChannelZeroBuffer")),". They provide communication between ",(0,i.kt)("em",{parentName:"p"},"Consumers")," and ",(0,i.kt)("em",{parentName:"p"},"Suppliers")," and allow them to create chains of these pipes if needed."),(0,i.kt)("p",null,"Basically, these buffers pass objects from ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelConsumer")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelSupplier")," as soon as the queue gets a free space. This process is controlled by ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"s. You can manually set the size of ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelBuffer"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelZeroBuffer")," doesn\u2019t store any values but simply passes them one by one from ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelConsumer")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelSupplier"),"."),(0,i.kt)("p",null,"Here is a simple example of working with buffers of items:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public void accept(T item) {\n    buffer.add(item);\n    if (buffer.isSaturated()) {\n        getSupplier().suspend();\n    }\n}\n\nvoid produce() {\n    while (!buffer.isEmpty()) {\n        T item = buffer.poll();\n        if (item != null) {\n            send(item);\n        } else {\n            sendEndOfStream();\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"comparison-to-datastream"},"Comparison to Datastream"),(0,i.kt)("p",null,"CSP has a lot in common with the ",(0,i.kt)("a",{parentName:"p",href:"/async-io/datastream"},"Datastream")," module.\nAlthough they were both designed for I/O processing, there are several important distinctions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Datastream"),(0,i.kt)("th",{parentName:"tr",align:null},"CSP"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Overhead:")),(0,i.kt)("td",{parentName:"tr",align:null},"Extremely low: stream can be started with 1 virtual call, short-circuit evaluation optimizes performance"),(0,i.kt)("td",{parentName:"tr",align:null},"No short-circuit evaluation, overhead is higher")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Throughput speed:")),(0,i.kt)("td",{parentName:"tr",align:null},"Extremely fast (",(0,i.kt)("em",{parentName:"td"},"360 880 548 ops/sec"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Fast (",(0,i.kt)("em",{parentName:"td"},"105 932 203 ops/sec"),"), but slower than Datastream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Programming model:")),(0,i.kt)("td",{parentName:"tr",align:null},"More complicated"),(0,i.kt)("td",{parentName:"tr",align:null},"Simple and convenient")))),(0,i.kt)("p",null,"To provide maximum efficiency, ActiveJ widely utilizes combinations of CSP and Datastream. For this purpose,\n",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelSupplier"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelConsumer"),", ",(0,i.kt)(l.Z,{url:"/core-datastream/src/main/java/io/activej/datastream/StreamSupplier.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"StreamSupplier")),"\nand ",(0,i.kt)(l.Z,{url:"/core-datastream/src/main/java/io/activej/datastream/StreamConsumer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"StreamConsumer"))," have ",(0,i.kt)("inlineCode",{parentName:"p"},"transformWith()")," methods and special\nTransformer interfaces. Using these methods and interfaces, you can seamlessly transform channels into other channels or datastreams and vice versa, creating chains of such transformations."),(0,i.kt)("h2",{id:"benchmark"},"Benchmark"),(0,i.kt)("p",null,"We've measured CSP performance (",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelSupplier")," streams 50M ",(0,i.kt)("inlineCode",{parentName:"p"},"Integer")," objects to ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelConsumer")," scenario) and received the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Time: 4720ms; Average time: 472.0ms; Best time: 469ms; Worst time: 475ms; Operations per second: 105 932 203\n")),(0,i.kt)("p",null,"We've also measured TCP server performance that uses both CSP and Datastream and got the average result of ",(0,i.kt)("strong",{parentName:"p"},"47 495 905 requests per second"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#basic-channel-example"},"Basic Channel Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#csp-example"},"CSP Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#channel-buffer-example"},"Channel Buffer Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#channelsplitter-example"},"ChannelSplitter Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#bytebufs-decoder-example"},"ByteBufsDecoderExample")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#channel-file-example"},"Channel File Example"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,i.kt)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(p.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project. These examples are located at ",(0,i.kt)("inlineCode",{parentName:"p"},"activej/examples/core/csp"),"."))),(0,i.kt)("h3",{id:"basic-channel-example"},"Basic Channel Example"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Channel Example")," shows the interaction between suppliers and consumers using ",(0,i.kt)("em",{parentName:"p"},"streamTo")," and some helper methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/csp/src/main/java/ChannelExample.java tag=REGION_1",url:"/examples/core/csp/src/main/java/ChannelExample.java",tag:"REGION_1"},'private static void supplierOfValues() {\n  ChannelSupplier.of("1", "2", "3", "4", "5")\n      .streamTo(ChannelConsumer.ofConsumer(System.out::println));\n}\n\nprivate static void supplierOfList(List<String> list) {\n  ChannelSupplier.ofList(list)\n      .streamTo(ChannelConsumer.ofConsumer(System.out::println));\n}\n\nprivate static void map() {\n  ChannelSupplier.of(1, 2, 3, 4, 5)\n      .map(integer -> integer + " times 10 = " + integer * 10)\n      .streamTo(ChannelConsumer.ofConsumer(System.out::println));\n}\n\nprivate static void toCollector() {\n  ChannelSupplier.of(1, 2, 3, 4, 5)\n      .toCollector(Collectors.toList())\n      .whenResult(x -> System.out.println(x));\n}\n\nprivate static void filter() {\n  ChannelSupplier.of(1, 2, 3, 4, 5, 6)\n      .filter(integer -> integer % 2 == 0)\n      .streamTo(ChannelConsumer.ofConsumer(System.out::println));\n}\n')),(0,i.kt)("p",null,"Thus, if you run this example, you'll receive the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"1\n2\n3\n4\n5\nOne\nTwo\nThree\n1 times 10 = 10\n2 times 10 = 20\n3 times 10 = 30\n4 times 10 = 40\n5 times 10 = 50\n[1, 2, 3, 4, 5]\n2\n4\n6\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/core/csp/src/main/java/ChannelExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.kt)("h3",{id:"csp-example"},"CSP Example"),(0,i.kt)("p",null,"This example represents an ",(0,i.kt)(l.Z,{url:"/core-promise/src/main/java/io/activej/async/process/AsyncProcess.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"AsyncProcess")),"\nbetween ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelSupplier")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelConsumer"),". In this example ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelSupplier")," represents an input and ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelConsumer")," - output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/csp/src/main/java/CspExample.java tag=EXAMPLE",url:"/examples/core/csp/src/main/java/CspExample.java",tag:"EXAMPLE"},'public final class CspExample extends AbstractCommunicatingProcess implements WithChannelTransformer<CspExample, String, String> {\n  private ChannelSupplier<String> input;\n  private ChannelConsumer<String> output;\n\n  @Override\n  public ChannelOutput<String> getOutput() {\n    return output -> {\n      this.output = output;\n      if (this.input != null && this.output != null) startProcess();\n    };\n  }\n\n  @Override\n  public ChannelInput<String> getInput() {\n    return input -> {\n      this.input = input;\n      if (this.input != null && this.output != null) startProcess();\n      return getProcessCompletion();\n    };\n  }\n\n  @Override\n  //[START REGION_1]\n  protected void doProcess() {\n    input.get()\n        .whenComplete((data, e) -> {\n          if (data == null) {\n            output.acceptEndOfStream()\n                .whenResult(this::completeProcess);\n          } else {\n            data = data.toUpperCase() + \'(\' + data.length() + \')\';\n\n            output.accept(data)\n                .whenResult(this::doProcess);\n          }\n        });\n  }\n  //[END REGION_1]\n\n  @Override\n  protected void doClose(Throwable e) {\n    System.out.println("Process has been closed with exception: " + e);\n    input.closeEx(e);\n    output.closeEx(e);\n  }\n\n  public static void main(String[] args) {\n    Eventloop eventloop = Eventloop.create().withCurrentThread();\n\n    CspExample process = new CspExample();\n    ChannelSupplier.of("hello", "world", "nice", "to", "see", "you")\n        .transformWith(process)\n        .streamTo(ChannelConsumer.ofConsumer(System.out::println));\n\n    eventloop.run();\n  }\n}\n')),(0,i.kt)("p",null,"This process takes a string, sets it to upper-case and adds string's length in parentheses:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"HELLO(5)\nWORLD(5)\nNICE(4)\nTO(2)\nSEE(3)\nYOU(3)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/core/csp/src/main/java/CspExample.java",mdxType:"Githublink"},"See this example on GitHub"))),(0,i.kt)("h3",{id:"channel-buffer-example"},"Channel Buffer Example"),(0,i.kt)("p",null,"As it was mentioned ",(0,i.kt)("a",{parentName:"p",href:"#channel-queue"},"before"),", there are two ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelQueue")," implementations: ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelBuffer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelZeroBuffer"),",\nboth of them manage communication between Providers and Suppliers.\nYou can manually set the size of ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelBuffer"),", whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelZeroBuffer")," size is always 0."),(0,i.kt)("p",null,"To understand how all these Buffers work, let's have a simple example. Assume there is a ",(0,i.kt)("strong",{parentName:"p"},"Granny")," who wants to give her ",(0,i.kt)("strong",{parentName:"p"},"Grandson")," 25 ",(0,i.kt)("strong",{parentName:"p"},"Apple"),"s. That's quite a lot, so she first puts the ",(0,i.kt)("strong",{parentName:"p"},"Apple"),"s on a big ",(0,i.kt)("strong",{parentName:"p"},"Plate"),", which can place up to 10 apples simultaneously. When the ",(0,i.kt)("strong",{parentName:"p"},"Plate")," is full, ",(0,i.kt)("strong",{parentName:"p"},"Grandson")," should first take at least one apple, and only after that ",(0,i.kt)("strong",{parentName:"p"},"Granny")," can put a new ",(0,i.kt)("strong",{parentName:"p"},"Apple")," to the ",(0,i.kt)("strong",{parentName:"p"},"Plate"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/csp/src/main/java/ChannelBufferExample.java tag=REGION_1",url:"/examples/core/csp/src/main/java/ChannelBufferExample.java",tag:"REGION_1"},'static final class ChannelBufferStream {\n  public static void main(String[] args) {\n    Eventloop eventloop = Eventloop.create().withCurrentThread();\n\n    ChannelBuffer<Integer> plate = new ChannelBuffer<>(5, 10);\n    ChannelSupplier<Integer> granny = plate.getSupplier();\n    Promises.loop(0,\n        apple -> apple < 25,\n        apple -> plate.put(apple).map($ -> {\n          System.out.println("Granny gives apple   #" + apple);\n          return apple + 1;\n        }));\n    granny.streamTo(ChannelConsumer.ofConsumer(apple -> System.out.println("Grandson takes apple #" + apple)));\n    eventloop.run();\n  }\n}\n')),(0,i.kt)("p",null,"On the next day ",(0,i.kt)("strong",{parentName:"p"},"Granny")," wants to give ",(0,i.kt)("strong",{parentName:"p"},"Apple"),"s to her ",(0,i.kt)("strong",{parentName:"p"},"Grandson")," again, but this time there are only 10 ",(0,i.kt)("strong",{parentName:"p"},"Apples"),". So there is no real need of the plate: ",(0,i.kt)("strong",{parentName:"p"},"Granny")," can simply pass the ",(0,i.kt)("strong",{parentName:"p"},"Apples")," to her ",(0,i.kt)("strong",{parentName:"p"},"Grandson")," one by one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/csp/src/main/java/ChannelBufferExample.java tag=REGION_2",url:"/examples/core/csp/src/main/java/ChannelBufferExample.java",tag:"REGION_2"},'static final class ChannelBufferZeroExample {\n  public static void main(String[] args) {\n    Eventloop eventloop = Eventloop.create().withCurrentThread();\n\n    ChannelQueue<Integer> buffer = new ChannelZeroBuffer<>();\n    ChannelSupplier<Integer> granny = buffer.getSupplier();\n\n    Promises.loop(0,\n        apple -> apple < 10,\n        apple -> buffer.put(apple).map($ -> {\n          System.out.println("Granny gives apple   #" + apple);\n          return apple + 1;\n        }));\n\n    granny.streamTo(ChannelConsumer.<Integer>ofConsumer((apple) ->\n        System.out.println("Grandson takes apple #" + apple)).async());\n\n    eventloop.run();\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/core/csp/src/main/java/ChannelBufferExample.java",mdxType:"Githublink"},"See this example on GitHub"))),(0,i.kt)("h3",{id:"channelsplitter-example"},"ChannelSplitter Example"),(0,i.kt)("p",null,"In this example we use predefined ",(0,i.kt)(l.Z,{url:"/core-csp/src/main/java/io/activej/csp/process/ChannelSplitter.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ChannelSplitter")),".\nSplitter allows to split data from one input to several outputs. In our case output will be split into three ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelConsumers"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/csp/src/main/java/SplitterExample.java tag=EXAMPLE",url:"/examples/core/csp/src/main/java/SplitterExample.java",tag:"EXAMPLE"},'public class SplitterExample {\n  public static void main(String[] args) {\n    Eventloop eventloop = Eventloop.create().withCurrentThread();\n    List<Integer> integers = Stream.iterate(1, i -> i + 1)\n        .limit(5)\n        .collect(Collectors.toList());\n\n    ChannelSplitter<Integer> splitter = ChannelSplitter.create(ChannelSupplier.ofList(integers));\n\n    List<Integer> list1 = new ArrayList<>();\n    List<Integer> list2 = new ArrayList<>();\n    List<Integer> list3 = new ArrayList<>();\n\n    splitter.addOutput().set(ChannelConsumer.of(AsyncConsumer.of(list1::add)));\n    splitter.addOutput().set(ChannelConsumer.of(AsyncConsumer.of(list2::add)));\n    splitter.addOutput().set(ChannelConsumer.of(AsyncConsumer.of(list3::add)));\n\n    eventloop.run();\n\n    System.out.println("First list: " + list1);\n    System.out.println("Second list: " + list2);\n    System.out.println("Third list: " + list3);\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/core/csp/src/main/java/SplitterExample.java",mdxType:"Githublink"},"See this example on GitHub"))),(0,i.kt)("h3",{id:"bytebufs-decoder-example"},"ByteBufs Decoder Example"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)(l.Z,{url:"/core-csp/src/main/java/io/activej/csp/binary/ByteBufsDecoder.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"a"},"ByteBufsDecoder")))," allows to efficiently work with ",(0,i.kt)("a",{parentName:"p",href:"/misc/bytebuf"},(0,i.kt)("inlineCode",{parentName:"a"},"ByteBufs"))," and decode data stored in them for further processing. In this example ",(0,i.kt)(l.Z,{url:"/core-csp/src/main/java/io/activej/csp/binary/BinaryChannelSupplier.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"BinaryChannelSupplier"))," will supply a String decoded and parsed from a ByteBuf."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/csp/src/main/java/ByteBufsDecoderExample.java tag=EXAMPLE",url:"/examples/core/csp/src/main/java/ByteBufsDecoderExample.java",tag:"EXAMPLE"},'@SuppressWarnings("Convert2MethodRef")\npublic final class ByteBufsDecoderExample {\n  public static void main(String[] args) {\n    Eventloop eventloop = Eventloop.create().withCurrentThread();\n\n    List<ByteBuf> letters = asList(wrapAscii("H"), wrapAscii("e"), wrapAscii("l"), wrapAscii("l"), wrapAscii("o"));\n    ByteBufsDecoder<String> decoder = bufs -> {\n      if (!bufs.hasRemainingBytes(5)) {\n        System.out.println("Not enough bytes to decode message");\n        return null;\n      }\n      return bufs.takeExactSize(5).asString(UTF_8);\n    };\n\n    BinaryChannelSupplier.of(ChannelSupplier.ofList(letters)).decode(decoder)\n        .whenResult(x -> System.out.println(x));\n\n    eventloop.run();\n  }\n}\n')),(0,i.kt)("h3",{id:"channel-file-example"},"Channel File Example"),(0,i.kt)("p",null,"This example demonstrates how to work with files asynchronously using Promises and CSP built-in consumers and suppliers. This example writes two lines to the file with ",(0,i.kt)(l.Z,{url:"/core-csp/src/main/java/io/activej/csp/file/ChannelFileWriter.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ChannelFileWriter")),", then reads and prints them out utilizing ",(0,i.kt)(l.Z,{url:"/core-csp/src/main/java/io/activej/csp/file/ChannelFileReader.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ChannelFileReader"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/csp/src/main/java/ChannelFileExample.java tag=REGION_1",url:"/examples/core/csp/src/main/java/ChannelFileExample.java",tag:"REGION_1"},'@NotNull\nprivate static Promise<Void> writeToFile() {\n  return ChannelSupplier.of(\n      ByteBufStrings.wrapAscii("Hello, this is example file\\n"),\n      ByteBufStrings.wrapAscii("This is the second line of file\\n"))\n      .streamTo(ChannelFileWriter.open(executor, PATH, WRITE));\n}\n\n@NotNull\nprivate static Promise<Void> readFile() {\n  return ChannelFileReader.open(executor, PATH)\n      .then(cfr -> cfr.streamTo(ChannelConsumer.ofConsumer(buf -> System.out.print(buf.asString(UTF_8)))));\n\n}\n')),(0,i.kt)("p",null,"If you run the example, you'll see the content of the created file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Hello, this is example file\nThis is the second line of file\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/core/csp/src/main/java/ChannelFileExample.java",mdxType:"Githublink"},"See full example on GitHub"))))}h.isMDXComponent=!0}}]);