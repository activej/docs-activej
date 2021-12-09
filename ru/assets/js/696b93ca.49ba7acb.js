"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[8857],{27806:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"ActiveJ 5.0 - New major release","metadata":{"permalink":"/ru/blog/2021/10/29/v5.0","source":"@site/blog/2021-10-29-v5.0.md","title":"ActiveJ 5.0 - New major release","description":"ActiveJ v5.0 was released Oct 29,","date":"2021-10-29T00:00:00.000Z","formattedDate":"29 \u043e\u043a\u0442\u044f\u0431\u0440\u044f 2021 \u0433.","tags":[],"readingTime":1.835,"truncated":false,"authors":[],"nextItem":{"title":"ActiveJ 4.3 - \u041d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439","permalink":"/ru/blog/2021/05/28/v4.3"}},"content":"ActiveJ v5.0 was released Oct 29,\\n2021 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.0)). This release includes\\nmajor changes in [ActiveJ Inject](/inject), [ActiveJ Codegen](/codegen), [ActiveJ Serializer](/serializer)\\n[promises API](/async-io/promise). The release also introduced improved type scanning facility and \\noverall minor improvements in other components.\\n\\n* [ActiveJ Inject](/inject)\\n  * Refactored and simplified inner components to speed up dependency injection and provide better support for binding \\n[specialization](/specializer)\\n  * Simplified type resolution in dependency injection\\n  * Added the ability to transform imported and exported bindings using patterns (see [example](/inject/binding-transformation))\\n  * Replaced `@Optional` annotation with an explicit [OptionalDependency](https://github.com/activej/activej/blob/v5.0/core-inject/src/main/java/io/activej/inject/binding/OptionalDependency.java)\\n  class\\n* [ActiveJ Codegen](/codegen)\\n  * Improved [ClassBuilder](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java) and [DefiningClassLoader](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/DefiningClassLoader.java) classes\\n  * Class generation may now be 100% lazy\\n  * Added in-memory [ClassBuilder](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java) caches\\n  * Added the ability to use [BytecodeStorage](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/BytecodeStorage.java) as a persistent cache for generated bytecode\\n  * Added the ability to call super methods as well as protected methods\\n  * Improved built-in expressions for array/collection/map iteration\\n* [ActiveJ Serializer](/serializer)\\n  * Added the ability to specify serializer annotations directly on type use (see [example](/serializer/examples#path-based-serialization))\\n  * Automatic class member ordering is now supported within the same JVM\\n  * Added support for serializer annotation aliases\\n  * Improved array serialization as well as serialization of booleans\\n  * Refactored class hierarchy of collection serializers. \\n  * Abstract collection serializers now support builder pattern\\n* [Promise](/async-io/promise)\\n  * Greatly improved exception handling\\n  * Renamed promise chaining methods `thenEx` and `mapEx` to `then` and `map`\\n  * Added new conditional chaining methods as well as dedicated null-handling chaining methods \\n  * All the changing methods now take \\"throwing\\" functions. If a checked exception is thrown in a chaining function, \\nthe whole promise is completed exceptionally\\n* Miscellaneous improvements\\n  * Removed `codec` module. Components that require JSON marshalling now internally use the \\n[DSL-JSON](https://github.com/ngs-doo/dsl-json) library  \\n  * Added new [types](https://github.com/activej/activej/tree/v5.0/util-types) module which contains various reflection and type utilities, including advanced type scanner\\n  * [Common](https://github.com/activej/activej/tree/v5.0/util-common) module has been massively refactored to make common functions and components more consistent\\n  * Restructured asynchronous exceptions\\n  * Unchecked exception handling can now be precisely configured using a thread-scoped or global \\n[FatalErrorHandler facility](https://github.com/activej/activej/blob/v5.0/util-common/src/main/java/io/activej/common/exception/FatalErrorHandler.java) \\n  * Made ActiveJ compatible with Java 17\\n  * Added various `DiscoveryService` interfaces for node discovery within server cluster ([RPC](/rpc), [FS](/fs))\\n  * Removed `AsyncServletDecorator` facility\\n  * Removed `StreamCodecRegistry` facility\\n  * Multiple small improvements and fixes"},{"id":"ActiveJ 4.3 - \u041d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439","metadata":{"permalink":"/ru/blog/2021/05/28/v4.3","source":"@site/i18n/ru/docusaurus-plugin-content-blog/2021-05-28-v4.3.md","title":"ActiveJ 4.3 - \u041d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439","description":"ActiveJ v4.3 \u0431\u044b\u043b \u0432\u044b\u043f\u0443\u0449\u0435\u043d 28 \u043c\u0430\u044f 2021 (\u0441\u043c. \u043d\u0430 Maven). \u0412 \u044d\u0442\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0431\u044b\u043b\u0438 \u0432\u043d\u0435\u0441\u0435\u043d\u044b \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439.","date":"2021-05-28T00:00:00.000Z","formattedDate":"28 \u043c\u0430\u044f 2021 \u0433.","tags":[],"readingTime":0.475,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.0 - New major release","permalink":"/ru/blog/2021/10/29/v5.0"},"nextItem":{"title":"ActiveJ 4.2 - \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c","permalink":"/ru/blog/2021/04/13/v4.2"}},"content":"ActiveJ v4.3 \u0431\u044b\u043b \u0432\u044b\u043f\u0443\u0449\u0435\u043d 28 \u043c\u0430\u044f 2021 ([\u0441\u043c. \u043d\u0430 Maven](https://mvnrepository.com/artifact/io.activej/activej/4.3)). \u0412 \u044d\u0442\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0431\u044b\u043b\u0438 \u0432\u043d\u0435\u0441\u0435\u043d\u044b \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439.\\n\\n* \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043d\u043e\u0432\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 `onConnecting` \u0432 [AsyncHttpClient](https://github.com/activej/activej/blob/v4.3/core-http/src/main/java/io/activej/http/AsyncHttpClient.java) \'s `Inspector`. \u0422\u0435\u043f\u0435\u0440\u044c, \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0435\u043d\u044b \u0447\u0435\u0440\u0435\u0437 `JmxInspector#getConnecting` \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\\n* \u041a\u043e\u0433\u0434\u0430 HTTP-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u043e\u0432 HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438 \u0442\u0435\u043b\u0430 \u043e\u0442\u0432\u0435\u0442\u0430\\n* [ThrottlingController](https://github.com/activej/activej/blob/v4.3/core-eventloop/src/main/java/io/activej/eventloop/inspector/ThrottlingController.java) \u0442\u0435\u043f\u0435\u0440\u044c \u0442\u0440\u043e\u0442\u043b\u0438\u0442 \u0432\u0441\u044e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443, \u0435\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043e\u043b\u0433\u043e\\n* [ForwardingStreamSupplier](https://github.com/activej/activej/blob/v4.3/core-datastream/src/main/java/io/activej/datastream/ForwardingStreamSupplier.java) \u0442\u0435\u043f\u0435\u0440\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442 \u0443\u0437\u0435\u043b `StreamSupplier` \u0434\u043e `StreamConsumer`\\n* \u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0430\u044f \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u044f \u0432 [ChannelSerializer](https://github.com/activej/activej/blob/v4.3/core-datastream/src/main/java/io/activej/datastream/csp/ChannelSerializer.java)\\n* \u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438 \u0432 [\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438](https://github.com/activej/activej/blob/v4.3/extra/cloud-lsmt-aggregation/src/main/java/io/activej/aggregation/Aggregation.java) \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0441 \u043d\u0443\u043b\u0435\u0432\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438\\n* [HyperLogLog](https://github.com/activej/activej/blob/v4.3/extra/cloud-lsmt-aggregation/src/main/java/io/activej/aggregation/measure/HyperLogLog.java) \u0442\u0435\u043f\u0435\u0440\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 `int`"},{"id":"ActiveJ 4.2 - \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c","metadata":{"permalink":"/ru/blog/2021/04/13/v4.2","source":"@site/i18n/ru/docusaurus-plugin-content-blog/2021-04-13-v4.2.md","title":"ActiveJ 4.2 - \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c","description":"* ActiveJ Redis client","date":"2021-04-13T00:00:00.000Z","formattedDate":"13 \u0430\u043f\u0440\u0435\u043b\u044f 2021 \u0433.","tags":[],"readingTime":0.645,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 4.3 - \u041d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439","permalink":"/ru/blog/2021/05/28/v4.3"},"nextItem":{"title":"ActiveJ 4.1 - \u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435","permalink":"/ru/blog/2021/03/19/v4.1"}},"content":"* **[ActiveJ Redis client](https://github.com/activej/activej/tree/v4.2/extra/cloud-redis)**\\n    * \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043c\u0435\u0442\u043e\u0434 `connect()` \u0432 [RedisClient](https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisClient.java) , \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442 \u0443\u0447\u0435\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043f\u043e\u0434\u043b\u0438\u043d\u043d\u043e\u0441\u0442\u0438\\n    * \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u043e\u0432\u044b\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0443\u043b\u044f ActiveJ:\\n        - [\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0439 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438](https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisAuthenticationException.java)\\n        - [\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430](https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisPermissionException.java)\\n* **[RecordScheme](https://github.com/activej/activej/blob/v4.2/core-codegen/src/main/java/io/activej/record/RecordScheme.java)**\\n    * \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u044f \u0432 `RecordScheme`, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 `equals()` \u0438 `hashCode()`\\n    * \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0438 `Comparator`\\n* **[FileLocker](https://github.com/activej/activej/blob/v4.2/util-common/src/main/java/io/activej/common/FileLocker.java)**\\n    * `FileLocker` - \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\\n    * `FileLocker` \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 `java.io.Closeable` \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\\n* **[StateManager](https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/StateManager.java)**\\n    * \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u043c\u0435\u0442\u043e\u0434\u044b `tryLoadSnapshot()` \u0438 `tryLoadDiff()` , \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u0435 `null` \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0431\u0440\u043e\u0441\u0430\u0442\u044c \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\\n    * \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043c\u0435\u0442\u043e\u0434 `tryLoad()` \u0432 [FileStateManager](https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/file/FileStateManager.java) , \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 `null` \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\\n    * \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043c\u0435\u0442\u043e\u0434 `save()` \u0432 [FileStateManager](https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/file/FileStateManager.java) , \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0435\u0440\u0435\u0442 \u043d\u0430 \u0441\u0435\u0431\u044f \u0440\u0435\u0432\u0438\u0437\u0438\u044e \u0434\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0441\\n* \u0423\u043b\u0443\u0447\u0448\u0435\u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438 URL-\u0430\u0434\u0440\u0435\u0441\u0430\u043c\u0438"},{"id":"ActiveJ 4.1 - \u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435","metadata":{"permalink":"/ru/blog/2021/03/19/v4.1","source":"@site/i18n/ru/docusaurus-plugin-content-blog/2021-03-19-v4.1.md","title":"ActiveJ 4.1 - \u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435","description":"ActiveJ v4.1 \u0431\u044b\u043b \u0432\u044b\u043f\u0443\u0449\u0435\u043d Mar 19, 2021 (\u0441\u043c. \u043d\u0430 Maven). \u042d\u0442\u043e\u0442 \u0432\u044b\u043f\u0443\u0441\u043a \u0432\u043a\u043b\u044e\u0447\u0430\u043b \u0432 \u0441\u0435\u0431\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044e \u0438 \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435 HTTP-\u043a\u043e\u0434\u0430, \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432.","date":"2021-03-19T00:00:00.000Z","formattedDate":"19 \u043c\u0430\u0440\u0442\u0430 2021 \u0433.","tags":[],"readingTime":0.785,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 4.2 - \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c","permalink":"/ru/blog/2021/04/13/v4.2"},"nextItem":{"title":"ActiveJ 4.0 - \u0420\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439","permalink":"/ru/blog/2021/02/16/v4.0"}},"content":"ActiveJ v4.1 \u0431\u044b\u043b \u0432\u044b\u043f\u0443\u0449\u0435\u043d Mar 19, 2021 ([\u0441\u043c. \u043d\u0430 Maven](https://mvnrepository.com/artifact/io.activej/activej/4.1)). \u042d\u0442\u043e\u0442 \u0432\u044b\u043f\u0443\u0441\u043a \u0432\u043a\u043b\u044e\u0447\u0430\u043b \u0432 \u0441\u0435\u0431\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044e \u0438 \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435 HTTP-\u043a\u043e\u0434\u0430, \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432.\\n\\n* **HTTP \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u0438 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f**\\n    * \u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0438 \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 HTTP, \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432 \u0438 URL-\u0430\u0434\u0440\u0435\u0441\u043e\u0432\\n    * \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0434\u043b\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 HTTP, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u0449\u0438\u0449\u0430\u044e\u0442 \u043e\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439\\n    * \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f HTTP ([HttpRequest](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/HttpRequest.java) \u0434\u043b\u044f [AsyncHttpClient](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/AsyncHttpClient.java) / [HttpResponse](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/HttpResponse.java) \u0432 [AsyncServlet](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/AsyncServlet.java)) \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0443\u0442\u0438\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f (\u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u043b\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438), \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0434\u0430\u0432\u0430\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0445\\n* \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043c\u0435\u0442\u043e\u0434 `Promise<Void> fetch()` \u0432 [OTStateManager](https://github.com/activej/activej/blob/v4.1/extra/cloud-ot/src/main/java/io/activej/ot/OTStateManager.java). \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0431\u0435\u0437 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043a \u0442\u0435\u043a\u0443\u0449\u0435\u043c\u0443 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044e.\\n* \u0423\u043b\u0443\u0447\u0448\u0435\u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u0435\u0439 \u0432 [Serializer ActiveJ](https://serializer.activej.io/)\\n* \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e [Initializer](https://github.com/activej/activej/blob/v4.1/util-common/src/main/java/io/activej/common/api/Initializer.java)\u0441 \u0434\u043b\u044f \u043e\u0431\u0449\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432\\n* \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u0440\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043a [LogOTState](https://github.com/activej/activej/blob/v4.1/extra/cloud-etl/src/main/java/io/activej/etl/LogOTState.java)\\n* \u0423\u0434\u0430\u043b\u0435\u043d [JmxModule](https://github.com/activej/activej/blob/v4.1/boot-jmx/src/main/java/io/activej/jmx/JmxModule.java) \u0438\u0437 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 HTTP-\u043b\u0430\u0443\u043d\u0447\u0435\u0440\u043e\u0432\\n* \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u043e\u0432\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 JMX \u0432 [RpcClient](https://github.com/activej/activej/blob/v4.1/cloud-rpc/src/main/java/io/activej/rpc/client/RpcClient.java) \u0434\u043b\u044f \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0445 RPC-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432\\n* \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d [ApplicationSettings](https://github.com/activej/activej/blob/v4.1/util-common/src/main/java/io/activej/common/ApplicationSettings.java) \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e `Locale`\\n* \u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u043a\u0430\u043b\u044c `en-US` \u043f\u0440\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 [EventStats](https://github.com/activej/activej/blob/v4.1/boot-jmx-stats/src/main/java/io/activej/jmx/stats/EventStats.java) \u0438 [ValueStats](https://github.com/activej/activej/blob/v4.1/boot-jmx-stats/src/main/java/io/activej/jmx/stats/ValueStats.java)"},{"id":"ActiveJ 4.0 - \u0420\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439","metadata":{"permalink":"/ru/blog/2021/02/16/v4.0","source":"@site/i18n/ru/docusaurus-plugin-content-blog/2021-02-16-v4.0.md","title":"ActiveJ 4.0 - \u0420\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439","description":"ActiveJ v4.0 \u0431\u044b\u043b \u0432\u044b\u043f\u0443\u0449\u0435\u043d \u0432 \u0441\u0432\u0435\u0442 16 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2021 (\u0441\u043c. \u043d\u0430 Maven). \u042d\u0442\u043e\u0442 \u0432\u044b\u043f\u0443\u0441\u043a \u0432\u043a\u043b\u044e\u0447\u0430\u043b \u0432 \u0441\u0435\u0431\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439. \u042d\u0442\u043e\u0442 \u0440\u0435\u043b\u0438\u0437 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0443\u044e \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c ActiveJ Redis. \u0414\u0440\u0443\u0433\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0434\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438.","date":"2021-02-16T00:00:00.000Z","formattedDate":"16 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2021 \u0433.","tags":[],"readingTime":1.285,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 4.1 - \u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435","permalink":"/ru/blog/2021/03/19/v4.1"}},"content":"ActiveJ v4.0 \u0431\u044b\u043b \u0432\u044b\u043f\u0443\u0449\u0435\u043d \u0432 \u0441\u0432\u0435\u0442 16 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2021 ([\u0441\u043c. \u043d\u0430 Maven](https://mvnrepository.com/artifact/io.activej/activej/4.0)). \u042d\u0442\u043e\u0442 \u0432\u044b\u043f\u0443\u0441\u043a \u0432\u043a\u043b\u044e\u0447\u0430\u043b \u0432 \u0441\u0435\u0431\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439. \u042d\u0442\u043e\u0442 \u0440\u0435\u043b\u0438\u0437 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0443\u044e \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c ActiveJ Redis. \u0414\u0440\u0443\u0433\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0434\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438.\\n\\n* **\u0420\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439**\\n    * \u0412\u0441\u0435 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0431\u044b\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u044b/\u0441\u043a\u0440\u044b\u0442\u044b.\\n    * **StacklessException** \u0431\u044b\u043b \u0443\u0434\u0430\u043b\u0435\u043d. \u041a\u043b\u0430\u0441\u0441\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u043b\u0438 **StacklessException** \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u044e\u0442 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 **Exception**, \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043d\u0438\u0445 \u0432\u0441\u0435 \u0435\u0449\u0435 *stackless*. *Stackless* \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0443 \u0441\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0446\u0435\u043b\u0435\u0439 \u043e\u0442\u043b\u0430\u0434\u043a\u0438. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0434\u043e\u0441\u0442\u0438\u0433\u043d\u0443\u0442\u043e \u043f\u0443\u0442\u0435\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 [ApplicationSetting](https://github.com/activej/activej/blob/v4.0/util-common/src/main/java/io/activej/common/ApplicationSettings.java) `withStackTrace` \u043d\u0430 **true**.\\n    * \u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f:\\n        * **ParseException** -> [MalformedDataException](https://github.com/activej/activej/blob/v4.0/util-common/src/main/java/io/activej/common/exception/MalformedDataException.java)\\n        * **HttpException** -> [HttpError](https://github.com/activej/activej/blob/v4.0/core-http/src/main/java/io/activej/http/HttpError.java) ([HttpException](https://github.com/activej/activej/blob/v4.0/core-http/src/main/java/io/activej/http/HttpException.java) \u0442\u0435\u043f\u0435\u0440\u044c \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u043b\u0430\u0441\u0441 \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445 HTTP \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439)\\n        * **OTTransformException** -> [\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435](https://github.com/activej/activej/blob/v4.0/extra/cloud-ot/src/main/java/io/activej/ot/exception/TransformException.java)\\n        * **OTNoCommitException** -> [NoCommitException](https://github.com/activej/activej/blob/v4.0/extra/cloud-ot/src/main/java/io/activej/ot/exception/NoCommitException.java)\\n    * \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u043e\u0432\u044b\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u0438 \u0442.\u0434.\\n* \u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u043b\u0435\u0433\u043a\u0438\u0439 \u0432\u044b\u0441\u043e\u043a\u043e\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 [ActiveJ Redis \u043a\u043b\u0438\u0435\u043d\u0442](https://github.com/activej/activej/tree/v4.0/extra/cloud-redis) \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u044b\u043c API. [\u041f\u0440\u0438\u043c\u0435\u0440\u044b](https://github.com/activej/activej/tree/v4.0/examples/cloud/redis) \u0438 [\u0431\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0438](https://github.com/activej/activej/tree/v4.0/benchmarks/redis) \u0434\u043b\u044f Redis \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0442\u0430\u043a\u0436\u0435 \u0431\u044b\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b.\\n* \u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0432 \u0441\u0435\u0442\u0435\u0432\u043e\u043c \u043a\u043e\u0434\u0435, HTTP-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 (\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 pipelining) \u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445.\\n* \u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d **ByteBufQueue** -> [ByteBufs](https://github.com/activej/activej/blob/v4.0/core-bytebuf/src/main/java/io/activej/bytebuf/ByteBufs.java). \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d byte index **ByteScanner**, \u0443\u043b\u0443\u0447\u0448\u0435\u043d `ByteBufs::scanBytes`. \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043c\u0435\u0442\u043e\u0434 `ByteBufs::consumeBytes`, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a `ByteBufs::scanBytes`, \u043d\u043e \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u0442 \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 bytes/bufs.\\n* \u0423\u0434\u0430\u043b\u0435\u043d\u043e **StreamMapper**, \u0442\u0435\u043f\u0435\u0440\u044c \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u043e\u043a\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0434\u043e\u0441\u0442\u0438\u0433\u043d\u0443\u0442\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e `StreamFilter.mapper(Function<I, O>)`\\n* \u0423\u0434\u0430\u043b\u0435\u043d\u044b **\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c**, **\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0421\u0442\u0440\u0438\u043c\u0430**, **AbstractStreamReducer**, **\u043a\u043b\u0430\u0441\u0441\u044b StreamMerger**. \u0421\u043b\u0438\u044f\u043d\u0438\u0435 \u043f\u043e\u0442\u043e\u043a\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u043e \u0447\u0435\u0440\u0435\u0437 [StreamReducer](https://github.com/activej/activej/blob/v4.0/core-datastream/src/main/java/io/activej/datastream/processor/StreamReducer.java)\\n* \u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043e **MergeSortReducer** -> **MergeReducer**, **MergeDistinctReducer** -> **DeduplicateReducer**\\n* \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0447\u0443\u0436\u0438\u0445 \u0447\u0430\u043d\u043a\u043e\u0432 \u0438\u0437 [Cube](https://github.com/activej/activej/blob/v4.0/extra/cloud-lsmt-cube/src/main/java/io/activej/cube/Cube.java) \u0447\u0435\u0440\u0435\u0437 \u0432\u044b\u0437\u043e\u0432 `Cube::getIrrelevantChunks`. \u041d\u0435\u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u044b\u0435 \u0447\u0430\u043d\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c, \u0432\u044b\u0437\u0432\u0430\u0432 `CubeConsolidationController:::cleanupIrrelevantChunks`.\\n* \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u043e JUnit \u0442\u0435\u0441\u0442 \u043f\u0440\u0430\u0432\u0438\u043b\u043e [ClassBuilderConstantsRule](https://github.com/activej/activej/blob/v4.0/test/src/main/java/io/activej/test/rules/ClassBuilderConstantsRule.java) \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0447\u0442\u043e \u0432\u0441\u0435 [ClassBuilder](https://github.com/activej/activej/blob/v4.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java) \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b \u043e\u0447\u0438\u0449\u0435\u043d\u044b \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u0430.\\n* \u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043a\u043b\u0430\u0441\u0441\u043e\u0432/\u043c\u0435\u0442\u043e\u0434\u043e\u0432, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 *parse*, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c *decode*."}]}')}}]);