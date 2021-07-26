(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[141],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11926:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),o=["components"],c={title:"Active J 4.0 - Refactoring of exceptions",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/2021/02/16/v4.0",source:"@site/blog/2021-02-16-v4.0.md",title:"Active J 4.0 - Refactoring of exceptions",description:"ActiveJ v4.0 was released Feb 16, 2021 (see on Maven).",date:"2021-02-16T00:00:00.000Z",formattedDate:"February 16, 2021",tags:[],readingTime:1.335,truncated:!1,prevItem:{title:"Active J 4.1 - Optimization and simplification",permalink:"/blog/2021/03/19/v4.1"}},p=[],m={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ActiveJ v4.0 was released Feb 16, 2021 ",(0,i.kt)("small",null,"(",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej/4.0"},"see on Maven"),")"),".\nThis release included major refactoring of exceptions. This release also introduces asynchronous high-performance\nActiveJ Redis client. Other components were optimized for the performance."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exceptions refactoring"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"All public constant exceptions were removed/hidden."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"StacklessException")," was removed. Classes that extended ",(0,i.kt)("strong",{parentName:"li"},"StacklessException")," now extend regular ",(0,i.kt)("strong",{parentName:"li"},"Exception"),",\nsome of them are still ",(0,i.kt)("em",{parentName:"li"},"stackless"),". ",(0,i.kt)("em",{parentName:"li"},"Stackless")," exceptions provide the ability to include stack trace for debugging purposes.\nThis can be achieved by setting exception's ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.0/util-common/src/main/java/io/activej/common/ApplicationSettings.java"},"ApplicationSetting"),(0,i.kt)("inlineCode",{parentName:"li"},"withStackTrace")," to ",(0,i.kt)("strong",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},"Renamed exceptions:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ParseException")," -> ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.0/util-common/src/main/java/io/activej/common/exception/MalformedDataException.java"},"MalformedDataException")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HttpException")," -> ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.0/core-http/src/main/java/io/activej/http/HttpError.java"},"HttpError"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.0/core-http/src/main/java/io/activej/http/HttpException.java"},"HttpException"),"\nis now a parent class for other HTTP exceptions)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OTTransformException")," -> ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.0/extra/cloud-ot/src/main/java/io/activej/ot/exception/TransformException.java"},"TransformException")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OTNoCommitException")," -> ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.0/extra/cloud-ot/src/main/java/io/activej/ot/exception/NoCommitException.java"},"NoCommitException")))),(0,i.kt)("li",{parentName:"ul"},"Added new exceptions for top-level components, etc."))),(0,i.kt)("li",{parentName:"ul"},"Introduced asynchronous lightweight high-performance ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/tree/v4.0/extra/cloud-redis"},"ActiveJ Redis Client"),"\nwith extendable API. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/tree/v4.0/examples/cloud/redis"},"Examples")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/tree/v4.0/benchmarks/redis"},"benchmarks"),"\nfor Redis client were added as well."),(0,i.kt)("li",{parentName:"ul"},"Optimizations in network code, HTTP processing (especially in pipelining mode), and data serialization."),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("strong",{parentName:"li"},"ByteBufQueue")," -> ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.0/core-bytebuf/src/main/java/io/activej/bytebuf/ByteBufs.java"},"ByteBufs"),".\nAdded byte index to ",(0,i.kt)("strong",{parentName:"li"},"ByteScanner"),", refactored ",(0,i.kt)("inlineCode",{parentName:"li"},"ByteBufs::scanBytes"),".\nAdded ",(0,i.kt)("inlineCode",{parentName:"li"},"ByteBufs::consumeBytes")," method that works like ",(0,i.kt)("inlineCode",{parentName:"li"},"ByteBufs::scanBytes"),", but actually consumes scanned bytes/bufs."),(0,i.kt)("li",{parentName:"ul"},"Removed ",(0,i.kt)("strong",{parentName:"li"},"StreamMapper"),", now stream mapping can be achieved via ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamFilter.mapper(Function<I, O>)")),(0,i.kt)("li",{parentName:"ul"},"Removed ",(0,i.kt)("strong",{parentName:"li"},"Transducer"),", ",(0,i.kt)("strong",{parentName:"li"},"StreamTransducer"),", ",(0,i.kt)("strong",{parentName:"li"},"AbstractStreamReducer"),", ",(0,i.kt)("strong",{parentName:"li"},"StreamMerger")," classes. Merging of streams can be\ndone via ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.0/core-datastream/src/main/java/io/activej/datastream/processor/StreamReducer.java"},"StreamReducer")),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("strong",{parentName:"li"},"MergeSortReducer")," -> ",(0,i.kt)("strong",{parentName:"li"},"MergeReducer"),", ",(0,i.kt)("strong",{parentName:"li"},"MergeDistinctReducer")," -> ",(0,i.kt)("strong",{parentName:"li"},"DeduplicateReducer")),(0,i.kt)("li",{parentName:"ul"},"Added ability to obtain irrelevant chunks from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.0/extra/cloud-lsmt-cube/src/main/java/io/activej/cube/Cube.java"},"Cube"),"\nby calling ",(0,i.kt)("inlineCode",{parentName:"li"},"Cube::getIrrelevantChunks"),". Irrelevant chunks can be cleaned up by calling ",(0,i.kt)("inlineCode",{parentName:"li"},"CubeConsolidationController::cleanupIrrelevantChunks"),"."),(0,i.kt)("li",{parentName:"ul"},"Added JUnit test rule ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.0/test/src/main/java/io/activej/test/rules/ClassBuilderConstantsRule.java"},"ClassBuilderConstantsRule"),"\nwhich validates that all of the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java"},"ClassBuilder"),"'s\nstatic constants are cleared after test passes."),(0,i.kt)("li",{parentName:"ul"},"Renamed most classes/methods that contained ",(0,i.kt)("em",{parentName:"li"},"parse")," to contain ",(0,i.kt)("em",{parentName:"li"},"decode")," instead.")))}u.isMDXComponent=!0}}]);