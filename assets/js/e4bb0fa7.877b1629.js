(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6967],{77618:function(e,t,n){"use strict";var a=n(67294),i=n(39962);t.Z=function(e){var t=e.url,n=e.text,r=e.isInline,o=void 0===r||r,s=e.children,l=(0,i.Z)().siteConfig,m=t.startsWith("/examples")?l.customFields.githubExamplesBranch:l.customFields.githubBranch;return a.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:l.customFields.githubUrl+"/"+m+t,target:"_blank"},n||s)}},14304:function(e,t,n){"use strict";var a=n(67294),i=n(21140),r=n.n(i);r().initialize({startOnLoad:!0});t.Z=function(e){var t=e.chart;return(0,a.useEffect)((function(){r().contentLoaded()}),[]),a.createElement("div",{className:"mermaid"},t)}},77815:function(e,t,n){"use strict";n(67294);var a=n(39962);t.Z=function(e){var t=e.name,n=(0,a.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},78143:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return k}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=n(14304),s=n(77618),l=n(77815),m=["components"],p={title:"ActiveJ | Promise, Java Promise for async programming model, alternative to Java Futures",description:"Node.js-inspired Promise for asynchronous Java programming. Alternative to Java Futures - has convenient API and 7 times faster",sidebar_label:"Promise",keywords:["promise","nodejs","node js","java","async programming","asynchronous","java framework","java futures","completablefuture","completionstage","java promise"]},c="Promise",u={unversionedId:"async-io/promise",id:"async-io/promise",isDocsHomePage:!1,title:"ActiveJ | Promise, Java Promise for async programming model, alternative to Java Futures",description:"Node.js-inspired Promise for asynchronous Java programming. Alternative to Java Futures - has convenient API and 7 times faster",source:"@site/docs/async-io/promise.mdx",sourceDirName:"async-io",slug:"/async-io/promise",permalink:"/async-io/promise",tags:[],version:"current",frontMatter:{title:"ActiveJ | Promise, Java Promise for async programming model, alternative to Java Futures",description:"Node.js-inspired Promise for asynchronous Java programming. Alternative to Java Futures - has convenient API and 7 times faster",sidebar_label:"Promise",keywords:["promise","nodejs","node js","java","async programming","asynchronous","java framework","java futures","completablefuture","completionstage","java promise"]},sidebar:"docs",previous:{title:"Eventloop",permalink:"/async-io/eventloop"},next:{title:"CSP",permalink:"/async-io/csp"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Features",id:"features",children:[{value:"Creating Promises",id:"creating-promises",children:[],level:3},{value:"Chaining Promises",id:"chaining-promises",children:[],level:3},{value:"Combine Promises",id:"combine-promises",children:[],level:3}],level:2},{value:"Optimization Features",id:"optimization-features",children:[],level:2},{value:"Benchmarks",id:"benchmarks",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"PromiseChainExample",id:"promisechainexample",children:[],level:3},{value:"PromiseAdvancedExample",id:"promiseadvancedexample",children:[],level:3},{value:"PromisesExamples",id:"promisesexamples",children:[],level:3},{value:"AsyncFileServiceExample",id:"asyncfileserviceexample",children:[],level:3}],level:2}],h={toc:d};function k(e){var t=e.components,n=(0,i.Z)(e,m);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"promise"},"Promise"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Promises are the primary building blocks in the ActiveJ asynchronous programming model and can be compared to Java Futures.\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," represents the result of an operation that is not yet complete,"),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unlike Java Futures, ",(0,r.kt)("strong",{parentName:"li"},"Promises")," were originally designed to work within a single reactor context (thread)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Promises")," are lean and ",(0,r.kt)("a",{parentName:"li",href:"#optimization-features"},"lightweight")),(0,r.kt)("li",{parentName:"ul"},"No multi-threading overhead"),(0,r.kt)("li",{parentName:"ul"},"Can handle millions of calls per second"),(0,r.kt)("li",{parentName:"ul"},"Rich API for combining multiple promises")),(0,r.kt)("h3",{id:"creating-promises"},"Creating Promises"),(0,r.kt)("p",null,"We can primarily create ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"s with the basic static methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"of(T value)")," - creates a successfully completed promise, like ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletableFuture.completedFuture()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ofException(Exception e)")," - creates an exceptionally completed promise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"complete()")," - creates a successfully completed ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise<Void>"),", a shortcut to ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise.of(null)"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Promise<Integer> firstNumber = Promise.of(10);\nPromise<String> helloWorld = Promise.of("Hello World");\nPromise<Object> exceptionalPromise = Promise.ofException(new Exception("Something went wrong"));\nPromise<Void> completePromise = Promise.complete();\n')),(0,r.kt)("h3",{id:"chaining-promises"},"Chaining Promises"),(0,r.kt)("p",null,"A promise will succeed or fail at some unspecified time, and you need to chain methods that will be executed in both cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"then(AsyncFunctionEx<T, U>)")," - returns a new Promise which is obtained by mapping the result of the original promise to some other promise.\nIf the original promise is completed exceptionally, the mapping function will not be applied.\nSimilar to ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletionStage.thenCompose()")," in Java.\nIt is used to map the result of a promise to another promise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"then(AsyncSupplierEx<U>)")," - returns a new Promise, which is obtained by calling the provided supplier of the new promise.\nIf the original promise is completed exceptionally, the supplier will not be called.\nUse this method if you can ignore the result of the original promise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"map(FunctionEx<T, U>)")," - returns a new Promise obtained by mapping the result of the original promise to some other value.\nIf the original promise is completed exceptionally, the mapping function will not be applied.\nSimilar to ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletionStage.thenApply()")," in Java.\nIt is used to map the result of a promise to some other value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"whenResult(ConsumerEx<T>)")," - subscribes this consumer to be executed after successful completion of the original Promise.\nSimilar to ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletionStage.thenAccept()")," in Java."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"whenResult(RunnableEx)")," - subscribes this consumer to be executed after successful completion of the original Promise.\nSimilar to ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletionStage.thenAccept()")," in Java.\nUse this method if you can ignore the result of the original promise.")),(0,r.kt)("p",null,"In addition, the following methods are provided for error handling:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"then(AsyncBiFunctionEx<T, Exception, U>)")," - returns a new Promise, which is obtained by mapping the result and exception of the original promise\nto some other promise. If the original promise is completed exceptionally, the exception passed to a mapping bi function is guaranteed not to be null.\nBi function takes 2 arguments: the result of the original promise and the exception representing the failed promise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"then(AsyncFunctionEx<T, U>, AsyncFunctionEx<Exception, U>)")," - returns a new Promise, which is obtained by mapping the result or exception of the original promise\nto some other promise. If the original promise is completed succesfully, the first function will be called. Otherwise, the second function will be called with a\nnon-null exception."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"map(BiFunctionEx<T, Exception, U>)")," - returns a new Promise, obtained by mapping the result and exception of the original promise\nto some other value. If this promise is completed exceptionally, the exception passed to a mapping bi function is guaranteed not to be null.\nIt takes 2 arguments: the result of original promise and the exception representing the failed promise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"map(FunctionEx<T, U>, FunctionEx<Exception, U>)")," - returns a new Promise, obtained by mapping the result or exception of the original promise\nto some other value. If the original promise is completed succesfully, the first function will be called. Otherwise, the second function will be called with a\nnon-null exception."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"whenException(ConsumerEx<Exception>)")," - subscribes this exception consumer to be executed after the exceptional completion of the original Promise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"whenException(Class<Exception>, ConsumerEx<Exception>)")," - subscribes this exception consumer to be executed after the exceptional completion of the original Promise\nif the exception matches a class passed as a first argument or is a subclass of this class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"whenException(RunnableEx)")," - subscribes this runnable to be executed after the exceptional completion of the original Promise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"whenException(Class<Exception>, RunnableEx)")," - subscribes this runnable to be executed after the exceptional completion of the original Promise\nif the exception matches a class passed as a first argument or is a subclass of this class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"whenComplete(BiConsumerEx<T, Exception>)")," - subscribes this bi consumer to be executed after the completion (either successful or exceptional) of the original Promise.\nIt takes 2 arguments: the result of the original promise and the exception representing the failed promise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"whenComplete(ConsumerEx<T>, ConsumerEx<Exception>)")," - subscribes one of this consumers to be executed after the completion (either successful or exceptional) of the original Promise.\nIf the original promise is completed succesfully, the first consumer will be called. Otherwise, the second consumer will be called with a\nnon-null exception."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"whenComplete(RunnableEx)")," - subscribes this runnable to be executed after the completion (either successful or exceptional) of the original Promise.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Each promise chain method takes an 'Ex' function as its argument. These are functional interfaces similar to their counterparts in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.function")," package. The main difference is that each 'Ex' function can throw an ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception"),"."),(0,r.kt)("p",{parentName:"div"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ex")," function throws a checked exception, the resulting promise will also be completed exceptionally. If an unchecked exception is thrown\ninstead, the promise would not be completed and the unchecked exception would be rethrown as-is."),(0,r.kt)("p",{parentName:"div"},"Additionaly, ",(0,r.kt)("inlineCode",{parentName:"p"},"then")," chainging methods take asynchronous versions of such functions. Those methods act as regular functions but return ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<T>"),"\ninstead of ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"."))),(0,r.kt)("p",null,"If there are several asynchronous calls, we need to execute them in order. In this case you can simply chain the methods\nto create a sequence."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromiseChainExample.java tag=REGION_1",url:"/examples/core/promise/src/main/java/PromiseChainExample.java",tag:"REGION_1"},"doSomeProcess()\n  .whenResult(result -> System.out.printf(\"Result of some process is '%s'%n\", result))\n  .whenException(e -> System.out.printf(\"Exception after some process is '%s'%n\", e.getMessage()))\n  .map(s -> s.toLowerCase())\n  .map(result -> String.format(\"The mapped result is '%s'\", result), e -> e.getMessage())\n  .whenResult(s -> System.out.println(s));\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s.Z,{url:"/examples/core/promise/src/main/java/PromiseChainExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,r.kt)("h3",{id:"combine-promises"},"Combine Promises"),(0,r.kt)("p",null,"There are cases when it is necessary to execute several ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"s and combine their results. To do this,\nconsider the following static methods from the ",(0,r.kt)(s.Z,{url:"/core-promise/src/main/java/io/activej/promise/Promises.java",mdxType:"Githublink"},"Promises")," class:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"combine()")," - returns a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," which, when both ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise"),"s are completed, is executed with two results as arguments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all()")," - returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," that completes when all given promises are completed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"any()")," - returns one of the first completed ",(0,r.kt)("inlineCode",{parentName:"li"},"Promises"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromiseAdvancedExample.java tag=REGION_1",url:"/examples/core/promise/src/main/java/PromiseAdvancedExample.java",tag:"REGION_1"},'Promise<Integer> firstNumber = Promise.of(10);\nPromise<Integer> secondNumber = Promises.delay(2000, 100);\n\nPromise<Integer> result = firstNumber.combine(secondNumber, Integer::sum);\nresult.whenResult(res -> System.out.println("The first result is " + res));\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delay()")," - delays completion of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," for a certain period of time.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Promise<String> strPromise = Promises.delay("result", Duration.seconds(10))\n')),(0,r.kt)("h2",{id:"optimization-features"},"Optimization Features"),(0,r.kt)("p",null,"ActiveJ ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," is heavily GC-optimized:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The internal representation of a typical ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," consists of 1-2 objects with\na bare minimum number of fields inside"),(0,r.kt)("li",{parentName:"ul"},"After completion, ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," passes the result to its subscribers and than discards it")),(0,r.kt)("p",null,"To optimize ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"s, there are several implementations of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," interface:"),(0,r.kt)(o.Z,{chart:"\ngraph TD\nPromise --\x3e AbstractPromise\nPromise --\x3e CompleteExceptionallyPromise\nPromise --\x3e CompletePromise\nAbstractPromise --\x3e NextPromise\nAbstractPromise --\x3e SettablePromise\nCompletePromise --\x3e CompleteResultPromise\nCompletePromise --\x3e CompleteNullPromise\n",mdxType:"Mermaid"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," - the root interface that represents the behaviour of ",(0,r.kt)("em",{parentName:"li"},"promises"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SettablePromise")," - can be used as the root for a chain of ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise"),"s. Allows you to wrap operations in ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise"),"s,\ncan be completed manually even before actual completion."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AbstractPromise"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"NextPromise")," - helper classes for creating chains of stateless ",(0,r.kt)("em",{parentName:"li"},"Promises"),". You can treat\nthese chains as pipes that pass values but do not store them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CompletePromise")," - an abstract class that represents a successfully completed ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CompleteExceptionallyPromise"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CompleteResultPromise"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CompleteNullPromise")," - helper classes.")),(0,r.kt)("h2",{id:"benchmarks"},"Benchmarks"),(0,r.kt)("p",null,"We've compared ",(0,r.kt)("strong",{parentName:"p"},"ActiveJ Promise")," with ",(0,r.kt)("strong",{parentName:"p"},"Java CompletableFuture")," in various scenarios:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"ActiveJ Promise"),"/",(0,r.kt)("strong",{parentName:"li"},"Java CompletableFuture")," executes operations with one promise/future."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"ActiveJ Promise"),"/",(0,r.kt)("strong",{parentName:"li"},"Java CompletableFuture")," combines several promises/futures.")),(0,r.kt)("p",null,"We used JMH as the benchmark tool and ran the benchmarks in ",(0,r.kt)("em",{parentName:"p"},"AverageTime")," mode.\nAll measurements are presented in nanoseconds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ActiveJ Promise oneCallMeasure\nCnt: 10; Score: 12.952; Error: \xb1 0.693; Units: ns/op;\n\nActiveJ Promise combineMeasure\nCnt: 10; Score: 34.112; Error: \xb1 1.869; Units: ns/op;\n\nJava CompletableFuture oneCallMeasure\nCnt: 10; Score: 85.151; Error: \xb1 1.781; Units: ns/op;\n\nJava CompletableFuture combineMeasure\nCnt: 10; Score: 153.645; Error: \xb1 4.491; Units: ns/op;\n")),(0,r.kt)("p",null,"You can find benchmark sources on ",(0,r.kt)(s.Z,{url:"/benchmarks/promise/src/main/java/io/activej/promise",mdxType:"Githublink"},(0,r.kt)("strong",{parentName:"p"},"GitHub"))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#promisechainexample"},"Promise Chain Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#promiseadvancedexample"},"Promise Advanced Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#promisesexamples"},"Promises Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#asyncfileserviceexample"},"Async File Example"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,r.kt)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(l.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project.\nThese examples are located at ",(0,r.kt)("inlineCode",{parentName:"p"},"activej/examples/core/promise")))),(0,r.kt)("h3",{id:"promisechainexample"},"PromiseChainExample"),(0,r.kt)("p",null,"You can create chains of ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"s even before they are completed and you do not yet know whether they will succeed or fail.\nIn this example we have a ",(0,r.kt)("em",{parentName:"p"},"doSomeProcess")," that returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," that has an equal\nchance of succeeding or failing. So we create a chain that handles both cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromiseChainExample.java tag=EXAMPLE",url:"/examples/core/promise/src/main/java/PromiseChainExample.java",tag:"EXAMPLE"},'@SuppressWarnings("Convert2MethodRef")\npublic class PromiseChainExample {\n  private static final Eventloop eventloop = Eventloop.builder()\n    .withCurrentThread()\n    .build();\n\n  public static void main(String[] args) {\n    //[START REGION_1]\n    doSomeProcess()\n      .whenResult(result -> System.out.printf("Result of some process is \'%s\'%n", result))\n      .whenException(e -> System.out.printf("Exception after some process is \'%s\'%n", e.getMessage()))\n      .map(s -> s.toLowerCase())\n      .map(result -> String.format("The mapped result is \'%s\'", result), e -> e.getMessage())\n      .whenResult(s -> System.out.println(s));\n    //[END REGION_1]\n    Promise.complete()\n      .then(PromiseChainExample::loadData)\n      .whenResult(result -> System.out.printf("Loaded data is \'%s\'%n", result));\n    eventloop.run();\n  }\n\n  private static Promise<String> loadData() {\n    return Promise.of("Hello World");\n  }\n\n  public static Promise<String> doSomeProcess() {\n    return Promises.delay(1000, Math.random() > 0.5 ?\n      Promise.of("Hello World") :\n      Promise.ofException(new RuntimeException("Something went wrong")));\n  }\n}\n')),(0,r.kt)("p",null,"If you run the example, you will receive either this output (if ",(0,r.kt)("em",{parentName:"p"},"doSomeProcess")," finishes successfully):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Loaded data is 'Hello World'\nResult of some process is 'Hello World'\nThe mapped result is 'hello world'\n")),(0,r.kt)("p",null,"Or this, if it finishes with an exception:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Loaded data is 'Hello World'\nException after some process is 'Something went wrong'\nSomething went wrong\n")),(0,r.kt)("p",null,"Note that the first line is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Loaded data is 'Hello World'\n")),(0,r.kt)("p",null,"This is due to the 1 second delay we set up in ",(0,r.kt)("em",{parentName:"p"},"doSomeProcess"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s.Z,{url:"/examples/core/promise/src/main/java/PromiseChainExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,r.kt)("h3",{id:"promiseadvancedexample"},"PromiseAdvancedExample"),(0,r.kt)("p",null,"You can combine several ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"s, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromiseAdvancedExample.java tag=REGION_1",url:"/examples/core/promise/src/main/java/PromiseAdvancedExample.java",tag:"REGION_1"},'Promise<Integer> firstNumber = Promise.of(10);\nPromise<Integer> secondNumber = Promises.delay(2000, 100);\n\nPromise<Integer> result = firstNumber.combine(secondNumber, Integer::sum);\nresult.whenResult(res -> System.out.println("The first result is " + res));\n')),(0,r.kt)("p",null,"There are also several ways to delay a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromiseAdvancedExample.java tag=REGION_2",url:"/examples/core/promise/src/main/java/PromiseAdvancedExample.java",tag:"REGION_2"},'int someValue = 1000;\nint delay = 1000;     // in milliseconds\nint interval = 2000;  // also in milliseconds\nPromise<Integer> intervalPromise = Promises.interval(interval, Promise.of(someValue));\nPromise<Integer> schedulePromise = Promises.schedule(Instant.now(), someValue * 2);\nPromise<Integer> delayPromise = Promises.delay(delay, someValue);\n\nPromise<Integer> result = intervalPromise\n  .combine(schedulePromise, (first, second) -> first - second)\n  .combine(delayPromise, Integer::sum);\n\nresult.whenResult(res -> System.out.println("The second result is " + res));\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s.Z,{url:"/examples/core/promise/src/main/java/PromiseAdvancedExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,r.kt)("h3",{id:"promisesexamples"},"PromisesExamples"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)(s.Z,{url:"/core-promise/src/main/java/io/activej/promise/Promises.java",mdxType:"Githublink"},(0,r.kt)("inlineCode",{parentName:"a"},"Promises")))," is a helper class which allows you to efficiently manage multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"s. This example will demonstrate three use cases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the following example we use the ",(0,r.kt)("inlineCode",{parentName:"li"},"Promises")," ",(0,r.kt)("inlineCode",{parentName:"li"},"loop"),", which is similar to the Java's ",(0,r.kt)("inlineCode",{parentName:"li"},"for")," loop, but has asynchronous capabilities,\nthat ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," provides:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromisesExample.java tag=REGION_2",url:"/examples/core/promise/src/main/java/PromisesExample.java",tag:"REGION_2"},'Promises.loop(0,\n  i -> i < 5,\n  i -> {\n    System.out.println("This is iteration #" + i);\n    return Promise.of(i + 1);\n  });\n')),(0,r.kt)("p",null,"The output is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Looping with condition:\nThis is iteration #1\nThis is iteration #2\nThis is iteration #3\nThis is iteration #4\nThis is iteration #5\n")),(0,r.kt)("p",null,"2.Another example creates a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"s results using ",(0,r.kt)("inlineCode",{parentName:"p"},"Promises")," ",(0,r.kt)("inlineCode",{parentName:"p"},"toList")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromisesExample.java tag=REGION_3",url:"/examples/core/promise/src/main/java/PromisesExample.java",tag:"REGION_3"},'Promises.toList(Promise.of(1), Promise.of(2), Promise.of(3), Promise.of(4), Promise.of(5), Promise.of(6))\n  .whenResult(list -> System.out.println("Size of collected list: " + list.size() + "\\nList: " + list));\n')),(0,r.kt)("p",null,"The output is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Collecting group of **Promises** to list of **Promises**' results:\nSize of collected list: 6\nList: [1, 2, 3, 4, 5, 6]\n")),(0,r.kt)("p",null,"3.The last example uses the ",(0,r.kt)("strong",{parentName:"p"},"Promises")," ",(0,r.kt)("em",{parentName:"p"},"toArray")," method, which reduces ",(0,r.kt)("em",{parentName:"p"},"promises")," to an array of data of a given type (in this case, ",(0,r.kt)("em",{parentName:"p"},"Integers"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromisesExample.java tag=REGION_4",url:"/examples/core/promise/src/main/java/PromisesExample.java",tag:"REGION_4"},'Promises.toArray(Integer.class, Promise.of(1), Promise.of(2), Promise.of(3), Promise.of(4), Promise.of(5), Promise.of(6))\n  .whenResult(array -> System.out.println("Size of collected array: " + array.length + "\\nArray: " + Arrays.toString(array)));\n')),(0,r.kt)("p",null,"And the final output is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Collecting group of **Promises** to array of **Promises**' results:\nSize of collected array: 6\nArray: [1, 2, 3, 4, 5, 6]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s.Z,{url:"/examples/core/promise/src/main/java/PromisesExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,r.kt)("h3",{id:"asyncfileserviceexample"},"AsyncFileServiceExample"),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"Promises")," to work with the file system. When you run this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/promise/src/main/java/AsyncFileServiceExample.java tag=REGION_1",url:"/examples/core/promise/src/main/java/AsyncFileServiceExample.java",tag:"REGION_1"},'private static Promise<Void> writeToFile() {\n  try {\n    FileChannel channel = FileChannel.open(PATH, Set.of(WRITE, APPEND));\n\n    byte[] message1 = "Hello\\n".getBytes();\n    byte[] message2 = "This is test file\\n".getBytes();\n    byte[] message3 = "This is the 3rd line in file".getBytes();\n\n    return FILE_SERVICE.write(channel, 0, message1, 0, message1.length)\n      .then(() -> FILE_SERVICE.write(channel, 0, message2, 0, message2.length))\n      .then(() -> FILE_SERVICE.write(channel, 0, message3, 0, message3.length))\n      .toVoid();\n  } catch (IOException e) {\n    return Promise.ofException(e);\n  }\n}\n\nprivate static Promise<ByteBuf> readFromFile() {\n  byte[] array = new byte[1024];\n  FileChannel channel;\n  try {\n    channel = FileChannel.open(PATH, Set.of(READ));\n  } catch (IOException e) {\n    return Promise.ofException(e);\n  }\n\n  return FILE_SERVICE.read(channel, 0, array, 0, array.length)\n    .map(bytesRead -> {\n      ByteBuf buf = ByteBuf.wrap(array, 0, bytesRead);\n      System.out.println(buf.getString(UTF_8));\n      return buf;\n    });\n}\n')),(0,r.kt)("p",null,"... you will get the following output, which represents the contents of the created file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Hello\nThis is test file\nThis is the 3rd line in file\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s.Z,{url:"/examples/core/promise/src/main/java/AsyncFileServiceExample.java",mdxType:"Githublink"},"See full example on GitHub"))))}k.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=11748}}]);