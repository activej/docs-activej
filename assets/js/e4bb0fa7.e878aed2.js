"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6967],{4569:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>m,toc:()=>d});var i=n(5893),r=n(1151),o=n(4304),t=n(7618),l=n(7815);const a={title:"ActiveJ | Promise, Java Promise for async programming model, alternative to Java Futures",description:"Node.js-inspired Promise for asynchronous Java programming. Alternative to Java Futures - has convenient API and 7 times faster",sidebar_label:"Promise",keywords:["promise","nodejs","node js","java","async programming","asynchronous","java framework","java futures","completablefuture","completionstage","java promise"]},c="Promise",m={id:"async-io/promise",title:"ActiveJ | Promise, Java Promise for async programming model, alternative to Java Futures",description:"Node.js-inspired Promise for asynchronous Java programming. Alternative to Java Futures - has convenient API and 7 times faster",source:"@site/docs/async-io/promise.mdx",sourceDirName:"async-io",slug:"/async-io/promise",permalink:"/async-io/promise",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ActiveJ | Promise, Java Promise for async programming model, alternative to Java Futures",description:"Node.js-inspired Promise for asynchronous Java programming. Alternative to Java Futures - has convenient API and 7 times faster",sidebar_label:"Promise",keywords:["promise","nodejs","node js","java","async programming","asynchronous","java framework","java futures","completablefuture","completionstage","java promise"]},sidebar:"docs",previous:{title:"Eventloop",permalink:"/async-io/eventloop"},next:{title:"CSP",permalink:"/async-io/csp"}},h={},d=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Creating Promises",id:"creating-promises",level:3},{value:"Chaining Promises",id:"chaining-promises",level:3},{value:"Combine Promises",id:"combine-promises",level:3},{value:"Optimization Features",id:"optimization-features",level:2},{value:"Benchmarks",id:"benchmarks",level:2},{value:"Examples",id:"examples",level:2},{value:"PromiseChainExample",id:"promisechainexample",level:3},{value:"PromiseAdvancedExample",id:"promiseadvancedexample",level:3},{value:"PromisesExamples",id:"promisesexamples",level:3},{value:"AsyncFileServiceExample",id:"asyncfileserviceexample",level:3}];function p(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"promise",children:"Promise"}),"\n",(0,i.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(s.p,{children:["Promises are the primary building blocks in the ActiveJ asynchronous programming model and can be compared to Java Futures.\nA ",(0,i.jsx)(s.code,{children:"Promise"})," represents the result of an operation that is not yet complete,"]}),"\n",(0,i.jsx)(s.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Unlike Java Futures, ",(0,i.jsx)(s.strong,{children:"Promises"})," were originally designed to work within a single reactor context (thread)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Promises"})," are lean and ",(0,i.jsx)(s.a,{href:"#optimization-features",children:"lightweight"})]}),"\n",(0,i.jsx)(s.li,{children:"No multi-threading overhead"}),"\n",(0,i.jsx)(s.li,{children:"Can handle millions of calls per second"}),"\n",(0,i.jsx)(s.li,{children:"Rich API for combining multiple promises"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"creating-promises",children:"Creating Promises"}),"\n",(0,i.jsxs)(s.p,{children:["We can primarily create ",(0,i.jsx)(s.code,{children:"Promise"}),"s with the basic static methods:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"of(T value)"})," - creates a successfully completed promise, like ",(0,i.jsx)(s.code,{children:"CompletableFuture.completedFuture()"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ofException(Exception e)"})," - creates an exceptionally completed promise."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"complete()"})," - creates a successfully completed ",(0,i.jsx)(s.code,{children:"Promise<Void>"}),", a shortcut to ",(0,i.jsx)(s.code,{children:"Promise.of(null)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:'Promise<Integer> firstNumber = Promise.of(10);\nPromise<String> helloWorld = Promise.of("Hello World");\nPromise<Object> exceptionalPromise = Promise.ofException(new Exception("Something went wrong"));\nPromise<Void> completePromise = Promise.complete();\n'})}),"\n",(0,i.jsx)(s.h3,{id:"chaining-promises",children:"Chaining Promises"}),"\n",(0,i.jsx)(s.p,{children:"A promise will succeed or fail at some unspecified time, and you need to chain methods that will be executed in both cases:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"then(AsyncFunctionEx<T, U>)"})," - returns a new Promise which is obtained by mapping the result of the original promise to some other promise.\nIf the original promise is completed exceptionally, the mapping function will not be applied.\nSimilar to ",(0,i.jsx)(s.code,{children:"CompletionStage.thenCompose()"})," in Java.\nIt is used to map the result of a promise to another promise."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"then(AsyncSupplierEx<U>)"})," - returns a new Promise, which is obtained by calling the provided supplier of the new promise.\nIf the original promise is completed exceptionally, the supplier will not be called.\nUse this method if you can ignore the result of the original promise."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"map(FunctionEx<T, U>)"})," - returns a new Promise obtained by mapping the result of the original promise to some other value.\nIf the original promise is completed exceptionally, the mapping function will not be applied.\nSimilar to ",(0,i.jsx)(s.code,{children:"CompletionStage.thenApply()"})," in Java.\nIt is used to map the result of a promise to some other value."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"whenResult(ConsumerEx<T>)"})," - subscribes this consumer to be executed after successful completion of the original Promise.\nSimilar to ",(0,i.jsx)(s.code,{children:"CompletionStage.thenAccept()"})," in Java."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"whenResult(RunnableEx)"})," - subscribes this consumer to be executed after successful completion of the original Promise.\nSimilar to ",(0,i.jsx)(s.code,{children:"CompletionStage.thenAccept()"})," in Java.\nUse this method if you can ignore the result of the original promise."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"In addition, the following methods are provided for error handling:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"then(AsyncBiFunctionEx<T, Exception, U>)"})," - returns a new Promise, which is obtained by mapping the result and exception of the original promise\nto some other promise. If the original promise is completed exceptionally, the exception passed to a mapping bi function is guaranteed not to be null.\nBi function takes 2 arguments: the result of the original promise and the exception representing the failed promise."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"then(AsyncFunctionEx<T, U>, AsyncFunctionEx<Exception, U>)"})," - returns a new Promise, which is obtained by mapping the result or exception of the original promise\nto some other promise. If the original promise is completed succesfully, the first function will be called. Otherwise, the second function will be called with a\nnon-null exception."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"map(BiFunctionEx<T, Exception, U>)"})," - returns a new Promise, obtained by mapping the result and exception of the original promise\nto some other value. If this promise is completed exceptionally, the exception passed to a mapping bi function is guaranteed not to be null.\nIt takes 2 arguments: the result of original promise and the exception representing the failed promise."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"map(FunctionEx<T, U>, FunctionEx<Exception, U>)"})," - returns a new Promise, obtained by mapping the result or exception of the original promise\nto some other value. If the original promise is completed succesfully, the first function will be called. Otherwise, the second function will be called with a\nnon-null exception."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"whenException(ConsumerEx<Exception>)"})," - subscribes this exception consumer to be executed after the exceptional completion of the original Promise."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"whenException(Class<Exception>, ConsumerEx<Exception>)"})," - subscribes this exception consumer to be executed after the exceptional completion of the original Promise\nif the exception matches a class passed as a first argument or is a subclass of this class."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"whenException(RunnableEx)"})," - subscribes this runnable to be executed after the exceptional completion of the original Promise."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"whenException(Class<Exception>, RunnableEx)"})," - subscribes this runnable to be executed after the exceptional completion of the original Promise\nif the exception matches a class passed as a first argument or is a subclass of this class."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"whenComplete(BiConsumerEx<T, Exception>)"})," - subscribes this bi consumer to be executed after the completion (either successful or exceptional) of the original Promise.\nIt takes 2 arguments: the result of the original promise and the exception representing the failed promise."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"whenComplete(ConsumerEx<T>, ConsumerEx<Exception>)"})," - subscribes one of this consumers to be executed after the completion (either successful or exceptional) of the original Promise.\nIf the original promise is completed succesfully, the first consumer will be called. Otherwise, the second consumer will be called with a\nnon-null exception."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"whenComplete(RunnableEx)"})," - subscribes this runnable to be executed after the completion (either successful or exceptional) of the original Promise."]}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsxs)(s.p,{children:["Each promise chain method takes an 'Ex' function as its argument. These are functional interfaces similar to their counterparts in the\n",(0,i.jsx)(s.code,{children:"java.util.function"})," package. The main difference is that each 'Ex' function can throw an ",(0,i.jsx)(s.code,{children:"Exception"}),"."]}),(0,i.jsxs)(s.p,{children:["If the ",(0,i.jsx)(s.code,{children:"Ex"})," function throws a checked exception, the resulting promise will also be completed exceptionally. If an unchecked exception is thrown\ninstead, the promise would not be completed and the unchecked exception would be rethrown as-is."]}),(0,i.jsxs)(s.p,{children:["Additionaly, ",(0,i.jsx)(s.code,{children:"then"})," chainging methods take asynchronous versions of such functions. Those methods act as regular functions but return ",(0,i.jsx)(s.code,{children:"Promise<T>"}),"\ninstead of ",(0,i.jsx)(s.code,{children:"T"}),"."]})]}),"\n",(0,i.jsx)(s.p,{children:"If there are several asynchronous calls, we need to execute them in order. In this case you can simply chain the methods\nto create a sequence."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromiseChainExample.java tag=REGION_1",children:"doSomeProcess()\n  .whenResult(result -> System.out.printf(\"Result of some process is '%s'%n\", result))\n  .whenException(e -> System.out.printf(\"Exception after some process is '%s'%n\", e.getMessage()))\n  .map(s -> s.toLowerCase())\n  .map(result -> String.format(\"The mapped result is '%s'\", result), e -> e.getMessage())\n  .whenResult(s -> System.out.println(s));\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(t.Z,{url:"/examples/core/promise/src/main/java/PromiseChainExample.java",children:"See full example on GitHub"})})}),"\n",(0,i.jsx)(s.h3,{id:"combine-promises",children:"Combine Promises"}),"\n",(0,i.jsxs)(s.p,{children:["There are cases when it is necessary to execute several ",(0,i.jsx)(s.code,{children:"Promise"}),"s and combine their results. To do this,\nconsider the following static methods from the ",(0,i.jsx)(t.Z,{url:"/core-promise/src/main/java/io/activej/promise/Promises.java",children:"Promises"})," class:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"combine()"})," - returns a new ",(0,i.jsx)(s.code,{children:"Promise"})," which, when both ",(0,i.jsx)(s.code,{children:"Promise"}),"s are completed, is executed with two results as arguments."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"all()"})," - returns a ",(0,i.jsx)(s.code,{children:"Promise"})," that completes when all given promises are completed."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"any()"})," - returns one of the first completed ",(0,i.jsx)(s.code,{children:"Promises"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromiseAdvancedExample.java tag=REGION_1",children:'Promise<Integer> firstNumber = Promise.of(10);\nPromise<Integer> secondNumber = Promises.delay(2000, 100);\n\nPromise<Integer> result = firstNumber.combine(secondNumber, Integer::sum);\nresult.whenResult(res -> System.out.println("The first result is " + res));\n'})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"delay()"})," - delays completion of the ",(0,i.jsx)(s.code,{children:"Promise"})," for a certain period of time."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:'Promise<String> strPromise = Promises.delay("result", Duration.seconds(10))\n'})}),"\n",(0,i.jsx)(s.h2,{id:"optimization-features",children:"Optimization Features"}),"\n",(0,i.jsxs)(s.p,{children:["ActiveJ ",(0,i.jsx)(s.code,{children:"Promise"})," is heavily GC-optimized:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The internal representation of a typical ",(0,i.jsx)(s.code,{children:"Promise"})," consists of 1-2 objects with\na bare minimum number of fields inside"]}),"\n",(0,i.jsxs)(s.li,{children:["After completion, ",(0,i.jsx)(s.code,{children:"Promise"})," passes the result to its subscribers and than discards it"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["To optimize ",(0,i.jsx)(s.code,{children:"Promise"}),"s, there are several implementations of the ",(0,i.jsx)(s.code,{children:"Promise"})," interface:"]}),"\n",(0,i.jsx)(o.Z,{chart:"\ngraph TD\nPromise --\x3e AbstractPromise\nPromise --\x3e CompleteExceptionallyPromise\nPromise --\x3e CompletePromise\nAbstractPromise --\x3e NextPromise\nAbstractPromise --\x3e SettablePromise\nCompletePromise --\x3e CompleteResultPromise\nCompletePromise --\x3e CompleteNullPromise\n"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Promise"})," - the root interface that represents the behaviour of ",(0,i.jsx)(s.em,{children:"promises"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"SettablePromise"})," - can be used as the root for a chain of ",(0,i.jsx)(s.code,{children:"Promise"}),"s. Allows you to wrap operations in ",(0,i.jsx)(s.code,{children:"Promise"}),"s,\ncan be completed manually even before actual completion."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"AbstractPromise"}),", ",(0,i.jsx)(s.code,{children:"NextPromise"})," - helper classes for creating chains of stateless ",(0,i.jsx)(s.em,{children:"Promises"}),". You can treat\nthese chains as pipes that pass values but do not store them."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"CompletePromise"})," - an abstract class that represents a successfully completed ",(0,i.jsx)(s.code,{children:"Promise"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"CompleteExceptionallyPromise"}),", ",(0,i.jsx)(s.code,{children:"CompleteResultPromise"}),", ",(0,i.jsx)(s.code,{children:"CompleteNullPromise"})," - helper classes."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,i.jsxs)(s.p,{children:["We've compared ",(0,i.jsx)(s.strong,{children:"ActiveJ Promise"})," with ",(0,i.jsx)(s.strong,{children:"Java CompletableFuture"})," in various scenarios:"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"ActiveJ Promise"}),"/",(0,i.jsx)(s.strong,{children:"Java CompletableFuture"})," executes operations with one promise/future."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"ActiveJ Promise"}),"/",(0,i.jsx)(s.strong,{children:"Java CompletableFuture"})," combines several promises/futures."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["We used JMH as the benchmark tool and ran the benchmarks in ",(0,i.jsx)(s.em,{children:"AverageTime"})," mode.\nAll measurements are presented in nanoseconds."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"ActiveJ Promise oneCallMeasure\nCnt: 10; Score: 12.952; Error: \xb1 0.693; Units: ns/op;\n\nActiveJ Promise combineMeasure\nCnt: 10; Score: 34.112; Error: \xb1 1.869; Units: ns/op;\n\nJava CompletableFuture oneCallMeasure\nCnt: 10; Score: 85.151; Error: \xb1 1.781; Units: ns/op;\n\nJava CompletableFuture combineMeasure\nCnt: 10; Score: 153.645; Error: \xb1 4.491; Units: ns/op;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["You can find benchmark sources on ",(0,i.jsx)(t.Z,{url:"/benchmarks/promise/src/main/java/io/activej/promise",children:(0,i.jsx)(s.strong,{children:"GitHub"})})]}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#promisechainexample",children:"Promise Chain Example"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#promiseadvancedexample",children:"Promise Advanced Example"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#promisesexamples",children:"Promises Example"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#asyncfileserviceexample",children:"Async File Example"})}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"To run the examples, you need to clone ActiveJ from GitHub"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"git clone https://github.com/activej/activej\n"})}),(0,i.jsxs)(s.p,{children:["And import it as a Maven project. Check out tag ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(l.Z,{name:"currentVersion"})}),". Before running the examples, build the project.\nThese examples are located at ",(0,i.jsx)(s.code,{children:"activej/examples/core/promise"})]})]}),"\n",(0,i.jsx)(s.h3,{id:"promisechainexample",children:"PromiseChainExample"}),"\n",(0,i.jsxs)(s.p,{children:["You can create chains of ",(0,i.jsx)(s.code,{children:"Promise"}),"s even before they are completed and you do not yet know whether they will succeed or fail.\nIn this example we have a ",(0,i.jsx)(s.em,{children:"doSomeProcess"})," that returns a ",(0,i.jsx)(s.code,{children:"Promise"})," that has an equal\nchance of succeeding or failing. So we create a chain that handles both cases:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromiseChainExample.java tag=EXAMPLE",children:'@SuppressWarnings("Convert2MethodRef")\npublic class PromiseChainExample {\n  private static final Eventloop eventloop = Eventloop.builder()\n    .withCurrentThread()\n    .build();\n\n  public static void main(String[] args) {\n    //[START REGION_1]\n    doSomeProcess()\n      .whenResult(result -> System.out.printf("Result of some process is \'%s\'%n", result))\n      .whenException(e -> System.out.printf("Exception after some process is \'%s\'%n", e.getMessage()))\n      .map(s -> s.toLowerCase())\n      .map(result -> String.format("The mapped result is \'%s\'", result), e -> e.getMessage())\n      .whenResult(s -> System.out.println(s));\n    //[END REGION_1]\n    Promise.complete()\n      .then(PromiseChainExample::loadData)\n      .whenResult(result -> System.out.printf("Loaded data is \'%s\'%n", result));\n    eventloop.run();\n  }\n\n  private static Promise<String> loadData() {\n    return Promise.of("Hello World");\n  }\n\n  public static Promise<String> doSomeProcess() {\n    return Promises.delay(1000, Math.random() > 0.5 ?\n      Promise.of("Hello World") :\n      Promise.ofException(new RuntimeException("Something went wrong")));\n  }\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["If you run the example, you will receive either this output (if ",(0,i.jsx)(s.em,{children:"doSomeProcess"})," finishes successfully):"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"Loaded data is 'Hello World'\nResult of some process is 'Hello World'\nThe mapped result is 'hello world'\n"})}),"\n",(0,i.jsx)(s.p,{children:"Or this, if it finishes with an exception:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"Loaded data is 'Hello World'\nException after some process is 'Something went wrong'\nSomething went wrong\n"})}),"\n",(0,i.jsx)(s.p,{children:"Note that the first line is"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"Loaded data is 'Hello World'\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This is due to the 1 second delay we set up in ",(0,i.jsx)(s.em,{children:"doSomeProcess"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(t.Z,{url:"/examples/core/promise/src/main/java/PromiseChainExample.java",children:"See full example on GitHub"})})}),"\n",(0,i.jsx)(s.h3,{id:"promiseadvancedexample",children:"PromiseAdvancedExample"}),"\n",(0,i.jsxs)(s.p,{children:["You can combine several ",(0,i.jsx)(s.code,{children:"Promise"}),"s, for example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromiseAdvancedExample.java tag=REGION_1",children:'Promise<Integer> firstNumber = Promise.of(10);\nPromise<Integer> secondNumber = Promises.delay(2000, 100);\n\nPromise<Integer> result = firstNumber.combine(secondNumber, Integer::sum);\nresult.whenResult(res -> System.out.println("The first result is " + res));\n'})}),"\n",(0,i.jsxs)(s.p,{children:["There are also several ways to delay a ",(0,i.jsx)(s.code,{children:"Promise"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromiseAdvancedExample.java tag=REGION_2",children:'int someValue = 1000;\nint delay = 1000;     // in milliseconds\nint interval = 2000;  // also in milliseconds\nPromise<Integer> intervalPromise = Promises.interval(interval, Promise.of(someValue));\nPromise<Integer> schedulePromise = Promises.schedule(Instant.now(), someValue * 2);\nPromise<Integer> delayPromise = Promises.delay(delay, someValue);\n\nPromise<Integer> result = intervalPromise\n  .combine(schedulePromise, (first, second) -> first - second)\n  .combine(delayPromise, Integer::sum);\n\nresult.whenResult(res -> System.out.println("The second result is " + res));\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(t.Z,{url:"/examples/core/promise/src/main/java/PromiseAdvancedExample.java",children:"See full example on GitHub"})})}),"\n",(0,i.jsx)(s.h3,{id:"promisesexamples",children:"PromisesExamples"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsx)(t.Z,{url:"/core-promise/src/main/java/io/activej/promise/Promises.java",children:(0,i.jsx)(s.code,{children:"Promises"})})})," is a helper class which allows you to efficiently manage multiple ",(0,i.jsx)(s.code,{children:"Promise"}),"s. This example will demonstrate three use cases."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["In the following example we use the ",(0,i.jsx)(s.code,{children:"Promises"})," ",(0,i.jsx)(s.code,{children:"loop"}),", which is similar to the Java's ",(0,i.jsx)(s.code,{children:"for"})," loop, but has asynchronous capabilities,\nthat ",(0,i.jsx)(s.code,{children:"Promise"})," provides:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromisesExample.java tag=REGION_2",children:'Promises.loop(0,\n  i -> i < 5,\n  i -> {\n    System.out.println("This is iteration #" + i);\n    return Promise.of(i + 1);\n  });\n'})}),"\n",(0,i.jsx)(s.p,{children:"The output is:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"Looping with condition:\nThis is iteration #1\nThis is iteration #2\nThis is iteration #3\nThis is iteration #4\nThis is iteration #5\n"})}),"\n",(0,i.jsxs)(s.p,{children:["2.Another example creates a list of ",(0,i.jsx)(s.code,{children:"Promise"}),"s results using ",(0,i.jsx)(s.code,{children:"Promises"})," ",(0,i.jsx)(s.code,{children:"toList"})," method:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromisesExample.java tag=REGION_3",children:'Promises.toList(Promise.of(1), Promise.of(2), Promise.of(3), Promise.of(4), Promise.of(5), Promise.of(6))\n  .whenResult(list -> System.out.println("Size of collected list: " + list.size() + "\\nList: " + list));\n'})}),"\n",(0,i.jsx)(s.p,{children:"The output is:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"Collecting group of **Promises** to list of **Promises**' results:\nSize of collected list: 6\nList: [1, 2, 3, 4, 5, 6]\n"})}),"\n",(0,i.jsxs)(s.p,{children:["3.The last example uses the ",(0,i.jsx)(s.strong,{children:"Promises"})," ",(0,i.jsx)(s.em,{children:"toArray"})," method, which reduces ",(0,i.jsx)(s.em,{children:"promises"})," to an array of data of a given type (in this case, ",(0,i.jsx)(s.em,{children:"Integers"}),"):"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/promise/src/main/java/PromisesExample.java tag=REGION_4",children:'Promises.toArray(Integer.class, Promise.of(1), Promise.of(2), Promise.of(3), Promise.of(4), Promise.of(5), Promise.of(6))\n  .whenResult(array -> System.out.println("Size of collected array: " + array.length + "\\nArray: " + Arrays.toString(array)));\n'})}),"\n",(0,i.jsx)(s.p,{children:"And the final output is:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"Collecting group of **Promises** to array of **Promises**' results:\nSize of collected array: 6\nArray: [1, 2, 3, 4, 5, 6]\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(t.Z,{url:"/examples/core/promise/src/main/java/PromisesExample.java",children:"See full example on GitHub"})})}),"\n",(0,i.jsx)(s.h3,{id:"asyncfileserviceexample",children:"AsyncFileServiceExample"}),"\n",(0,i.jsxs)(s.p,{children:["You can also use ",(0,i.jsx)(s.code,{children:"Promises"})," to work with the file system. When you run this example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/promise/src/main/java/AsyncFileServiceExample.java tag=REGION_1",children:'private static Promise<Void> writeToFile() {\n  try {\n    FileChannel channel = FileChannel.open(PATH, Set.of(WRITE, APPEND));\n\n    byte[] message1 = "Hello\\n".getBytes();\n    byte[] message2 = "This is test file\\n".getBytes();\n    byte[] message3 = "This is the 3rd line in file".getBytes();\n\n    return FILE_SERVICE.write(channel, 0, message1, 0, message1.length)\n      .then(() -> FILE_SERVICE.write(channel, 0, message2, 0, message2.length))\n      .then(() -> FILE_SERVICE.write(channel, 0, message3, 0, message3.length))\n      .toVoid();\n  } catch (IOException e) {\n    return Promise.ofException(e);\n  }\n}\n\nprivate static Promise<ByteBuf> readFromFile() {\n  byte[] array = new byte[1024];\n  FileChannel channel;\n  try {\n    channel = FileChannel.open(PATH, Set.of(READ));\n  } catch (IOException e) {\n    return Promise.ofException(e);\n  }\n\n  return FILE_SERVICE.read(channel, 0, array, 0, array.length)\n    .map(bytesRead -> {\n      ByteBuf buf = ByteBuf.wrap(array, 0, bytesRead);\n      System.out.println(buf.getString(UTF_8));\n      return buf;\n    });\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"... you will get the following output, which represents the contents of the created file:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"Hello\nThis is test file\nThis is the 3rd line in file\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(t.Z,{url:"/examples/core/promise/src/main/java/AsyncFileServiceExample.java",children:"See full example on GitHub"})})})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},7618:(e,s,n)=>{n.d(s,{Z:()=>o});n(7294);var i=n(9962),r=n(5893);const o=e=>{let{url:s,text:n,isInline:o=!0,children:t}=e;const{siteConfig:l}=(0,i.Z)(),a=s.startsWith("/examples")?l.customFields.githubExamplesBranch:l.customFields.githubBranch;return(0,r.jsx)("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:l.customFields.githubUrl+"/"+a+s,target:"_blank",children:n||t})}},4304:(e,s,n)=>{n.d(s,{Z:()=>t});var i=n(7294),r=n(6365),o=n(5893);r.L.initialize({startOnLoad:!0});const t=e=>{let{chart:s}=e;return(0,i.useEffect)((()=>{r.L.contentLoaded()}),[]),(0,o.jsx)("div",{className:"mermaid",children:s})}},7815:(e,s,n)=>{n.d(s,{Z:()=>r});n(7294);var i=n(9962);const r=e=>{let{name:s}=e;const{siteConfig:n}=(0,i.Z)();if(!s)throw new Error("Variable name is required");if(void 0===n.customFields[s])throw new Error(`Variable ${s} not exist`);return n.customFields[s]}}}]);