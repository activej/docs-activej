(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[7243],{77618:function(e,n,t){"use strict";var a=t(67294),r=t(39962);n.Z=function(e){var n=e.url,t=e.text,i=e.isInline,o=void 0===i||i,l=e.children,c=(0,r.Z)().siteConfig,p=n.startsWith("/examples")?c.customFields.githubExamplesBranch:c.customFields.githubBranch;return a.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:c.customFields.githubUrl+"/"+p+n,target:"_blank"},t||l)}},14304:function(e,n,t){"use strict";var a=t(67294),r=t(21140),i=t.n(r);i().initialize({startOnLoad:!0});n.Z=function(e){var n=e.chart;return(0,a.useEffect)((function(){i().contentLoaded()}),[]),a.createElement("div",{className:"mermaid"},n)}},68092:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return u},default:function(){return j}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(77618),l=t(14304),c=["components"],p={title:"ActiveJ Inject Advanced | \u95ea\u7535\u822c\u7684\u901f\u5ea6\u548c\u6700\u7ec8\u5f3a\u5927\u7684\u4f9d\u8d56\u6027\u6ce8\u5165Java\u5e93",description:"\u5177\u6709\u5f3a\u5927\u5de5\u5177\u7684\u6781\u8f7b\u91cf\u7ea7DI - \u652f\u6301\u5d4c\u5957\u4f5c\u7528\u57df\u3001\u5355\u5b50\u548c\u77ac\u65f6\u7ed1\u5b9a\u3001\u6a21\u5757\u3001\u591a\u7ebf\u7a0b\u548c\u5355\u7ebf\u7a0b\u6ce8\u5165\u5668",sidebar_label:"\u9ad8\u7ea7",keywords:["di","\u4f9d\u8d56\u6027\u6ce8\u5165","\u5409\u65af\u66ff\u4ee3\u7269","spring di","spring \u9009\u62e9","\u4e8c\u57fa\u51c6","java","java di","java\u4f9d\u8d56\u6027\u6ce8\u5165","JAVA\u6846\u67b6"]},s="\u9ad8\u7ea7",m={unversionedId:"inject/advanced",id:"inject/advanced",isDocsHomePage:!1,title:"ActiveJ Inject Advanced | \u95ea\u7535\u822c\u7684\u901f\u5ea6\u548c\u6700\u7ec8\u5f3a\u5927\u7684\u4f9d\u8d56\u6027\u6ce8\u5165Java\u5e93",description:"\u5177\u6709\u5f3a\u5927\u5de5\u5177\u7684\u6781\u8f7b\u91cf\u7ea7DI - \u652f\u6301\u5d4c\u5957\u4f5c\u7528\u57df\u3001\u5355\u5b50\u548c\u77ac\u65f6\u7ed1\u5b9a\u3001\u6a21\u5757\u3001\u591a\u7ebf\u7a0b\u548c\u5355\u7ebf\u7a0b\u6ce8\u5165\u5668",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/inject/advanced.mdx",sourceDirName:"inject",slug:"/inject/advanced",permalink:"/zh/inject/advanced",tags:[],version:"current",frontMatter:{title:"ActiveJ Inject Advanced | \u95ea\u7535\u822c\u7684\u901f\u5ea6\u548c\u6700\u7ec8\u5f3a\u5927\u7684\u4f9d\u8d56\u6027\u6ce8\u5165Java\u5e93",description:"\u5177\u6709\u5f3a\u5927\u5de5\u5177\u7684\u6781\u8f7b\u91cf\u7ea7DI - \u652f\u6301\u5d4c\u5957\u4f5c\u7528\u57df\u3001\u5355\u5b50\u548c\u77ac\u65f6\u7ed1\u5b9a\u3001\u6a21\u5757\u3001\u591a\u7ebf\u7a0b\u548c\u5355\u7ebf\u7a0b\u6ce8\u5165\u5668",sidebar_label:"\u9ad8\u7ea7",keywords:["di","\u4f9d\u8d56\u6027\u6ce8\u5165","\u5409\u65af\u66ff\u4ee3\u7269","spring di","spring \u9009\u62e9","\u4e8c\u57fa\u51c6","java","java di","java\u4f9d\u8d56\u6027\u6ce8\u5165","JAVA\u6846\u67b6"]},sidebar:"docs",previous:{title:"\u57fa\u672c",permalink:"/zh/inject/basic"},next:{title:"\u57fa\u51c6",permalink:"/zh/inject/benchmarks"}},u=[{value:"DI \u591a\u7528\u9014\u5939\u5b50",id:"di-\u591a\u7528\u9014\u5939\u5b50",children:[]},{value:"\u5b9e\u4f8b\u6ce8\u5165\u5668",id:"\u5b9e\u4f8b\u6ce8\u5165\u5668",children:[]},{value:"\u7ed1\u5b9a\u751f\u6210\u5668",id:"\u7ed1\u5b9a\u751f\u6210\u5668",children:[]},{value:"\u6682\u65f6\u6027\u7684\u6346\u7ed1",id:"\u6682\u65f6\u6027\u7684\u6346\u7ed1",children:[]},{value:"ActiveJ\u4e13\u7528\u7a0b\u5e8f\u4f18\u5316",id:"activej\u4e13\u7528\u7a0b\u5e8f\u4f18\u5316",children:[]},{value:"\u5b9e\u4f8b\u63d0\u4f9b\u8005",id:"\u5b9e\u4f8b\u63d0\u4f9b\u8005",children:[]},{value:"\u68c0\u67e5\u521b\u5efa\u7684\u4f9d\u8d56\u5173\u7cfb\u56fe",id:"\u68c0\u67e5\u521b\u5efa\u7684\u4f9d\u8d56\u5173\u7cfb\u56fe",children:[]},{value:"\u53ef\u9009\u7684\u53d1\u7535\u673a\u6a21\u5757",id:"\u53ef\u9009\u7684\u53d1\u7535\u673a\u6a21\u5757",children:[]}],d={toc:u};function j(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9ad8\u7ea7"},"\u9ad8\u7ea7"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("a",{parentName:"p",href:"/zh/inject/basic"},"\u4e0a\u4e00\u90e8\u5206")," \uff0c\u6211\u4eec\u63a2\u8ba8\u4e86\u4f9d\u8d56\u6ce8\u5165\u6982\u5ff5\u7684\u4e00\u4e9b\u5e38\u89c1\u539f\u5219\u548c ActiveJ Inject\u529f\u80fd\u3002 \u5728\u8fd9\u4e00\u90e8\u5206\uff0c\u6211\u4eec\u5c06\u8fdb\u884c\u66f4\u9ad8\u7ea7\u3001\u66f4\u590d\u6742\u7684ActiveJ Inject\u4f7f\u7528\u6848\u4f8b\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u627e\u5230\u5b8c\u6574\u7684\u4f8b\u5b50\u6765\u6e90 ",(0,i.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2",mdxType:"Githublink"})),(0,i.kt)("h2",{id:"di-\u591a\u7528\u9014\u5939\u5b50"},"DI \u591a\u7528\u9014\u5939\u5b50"),(0,i.kt)(o.Z,{text:"Multibinder",url:"/core-inject/src/main/java/io/activej/inject/binding/Multibinder.java",mdxType:"Githublink"})," \u5982\u679c\u4e00\u4e2a\u952e\u6709\u4e24\u4e2a\u6216\u4e24\u4e2a\u4ee5\u4e0a\u7684\u7ed1\u5b9a\uff0c\u5219\u89e3\u51b3\u7ed1\u5b9a\u51b2\u7a81\u3002 \u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2aHTTP\u670d\u52a1\u5668\uff0c\u5b83\u7531\u4e24\u4e2a ",(0,i.kt)(o.Z,{text:"AbstractModule",url:"/core-inject/src/main/java/io/activej/inject/module/AbstractModule.java",mdxType:"Githublink"}),"\u3002 \u8fd9\u4e24\u4e2a\u6a21\u5757\u90fd\u5305\u62ec2\u4e2a\u76f8\u4e92\u51b2\u7a81\u7684\u952e\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u4e0d\u540c\u7684\u65b9\u5f0f\u6765\u63d0\u4f9b\u591a\u91cd\u7ed1\u5b9a\u3002",(0,i.kt)("p",null,"\u5728\u7b2c\u4e00\u4e2aservlet ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractModule"),"\uff0c\u6211\u4eec\u901a\u8fc7\u8986\u76d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"configure()")," \u65b9\u6cd5\uff0c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," \u548c ",(0,i.kt)(o.Z,{text:"AsyncServlet",url:"/core-http/src/main/java/io/activej/http/AsyncServlet.java",mdxType:"Githublink"})," \u7684\u6620\u5c04\u63d0\u4f9b\u591a\u91cd\u7ed1\u5b9a\u3002 \u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"multibindToMap")," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u4e3a\u6240\u63d0\u4f9b\u7684 \u51b2\u7a81\u7684\u7ed1\u5b9a\u5730\u56fe\u8fd4\u56de\u4e00\u4e2a\u7ed1\u5b9a\u5730\u56fe\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/MultibinderExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/MultibinderExample.java",tag:"REGION_1"},'static class ServletMapsModule extends AbstractModule {\n  @Override\n  protected void configure() {\n    multibindToMap(String.class, AsyncServlet.class);\n  }\n\n  @Provides\n  public Map<String, AsyncServlet> firstPage() {\n    return singletonMap("/first",\n        request -> HttpResponse.ok200().withPlainText("Hello from first page!"));\n  }\n\n  @Provides\n  public Map<String, AsyncServlet> lastPage() {\n    return singletonMap("/last",\n        request -> HttpResponse.ok200().withPlainText("Hello from last page!"));\n  }\n\n  @ProvidesIntoSet\n  AsyncServlet primary(Map<String, AsyncServlet> initializers) {\n    RoutingServlet routingServlet = RoutingServlet.create();\n    initializers.forEach(routingServlet::map);\n    return routingServlet;\n  }\n}\n')),(0,i.kt)("p",null,"\u6ce8\u610f\uff0c ",(0,i.kt)("em",{parentName:"p"},"\uff0c\u4e3b\u8981\u7684")," servlet\u88ab\u6807\u8bb0\u4e3a ",(0,i.kt)(o.Z,{text:"@ProvidesIntoSet",url:"/core-inject/src/main/java/io/activej/inject/annotation/ProvidesIntoSet.java",mdxType:"Githublink"})," \u6ce8\u91ca\u3002 \u6211\u4eec\u4ee5\u540e\u5c06\u4f7f\u7528\u8fd9\u4e2a\u3002\n\u5728\u7b2c\u4e8c\u4e2aservlet\u6a21\u5757\u4e2d\uff0c\u6211\u4eec\u5c06\u7528\u5185\u7f6e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"@ProvidesIntoSet")," \u6ce8\u91ca\u6765\u81ea\u52a8\u8bbe\u7f6e\u591a\u91cd\u7ed1\u5b9a\u3002 \u8be5\u6ce8\u89e3\u4ee5\u5355\u5b50\u96c6\u7684\u5f62\u5f0f\u63d0\u4f9b\u7ed3\u679c\uff0c\u7136\u540e\u5c06\u5176\u63d0\u4f9b\u7ed9\u6211\u4eec\u7684 ",(0,i.kt)("em",{parentName:"p"},"\u4e3b\u8981\u7684")," ",(0,i.kt)("strong",{parentName:"p"},"AsyncServlet"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/MultibinderExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/MultibinderExample.java",tag:"REGION_2"},'static class ServletInitializersModule extends AbstractModule {\n  @ProvidesIntoSet\n  public Consumer<RoutingServlet> firstPage() {\n    return routingServlet ->\n        routingServlet.map("/first",\n            request -> HttpResponse.ok200().withPlainText("Hello from first page!"));\n  }\n\n  @ProvidesIntoSet\n  public Consumer<RoutingServlet> lastPage() {\n    return routingServlet ->\n        routingServlet.map("/last",\n            request -> HttpResponse.ok200().withPlainText("Hello from last page!"));\n  }\n\n  @ProvidesIntoSet\n  AsyncServlet primary(Set<Consumer<RoutingServlet>> initializers) {\n    RoutingServlet routingServlet = RoutingServlet.create();\n    initializers.forEach(initializer -> initializer.accept(routingServlet));\n    return routingServlet;\n  }\n}\n')),(0,i.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u6240\u6709\u7684\u6a21\u5757\u62c9\u5230\u4e00\u8d77\u3002 \u8fd8\u8bb0\u5f97\u6211\u4eec\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@ProvidesIntoSet")," \u6ce8\u89e3\u6807\u8bb0\u4e86 ",(0,i.kt)("em",{parentName:"p"},"\u521d\u7ea7")," servlets\u5417\uff1f \u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u7b80\u5355\u5730\u5408\u5e76\uff0c\u7136\u540e\u4f7f\u7528 ",(0,i.kt)(o.Z,{text:"Injector",url:"/core-inject/src/main/java/io/activej/inject/Injector.java",mdxType:"Githublink"}),".of()\u7f16\u8bd1\u5b83\u4eec\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/MultibinderExample.java tag=REGION_4",url:"/examples/core/inject-2/src/main/java/MultibinderExample.java",tag:"REGION_4"},"public static void main(String[] args) {\n  Injector injector = Injector.of(new ServletMapsModule(), new ServletInitializersModule());\n\n  String s = injector.getInstance(new Key<Set<AsyncServlet>>() {}).toString();\n  System.out.println(s);\n}\n")),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,i.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/MultibinderExample.java",mdxType:"Githublink"})),(0,i.kt)("h2",{id:"\u5b9e\u4f8b\u6ce8\u5165\u5668"},"\u5b9e\u4f8b\u6ce8\u5165\u5668"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{text:"InstanceInjector",url:"/core-inject/src/main/java/io/activej/inject/InstanceInjector.java",mdxType:"Githublink"}))," \u53ef\u4ee5\u5c06\u5b9e\u4f8b\u6ce8\u5165\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inject")," \u4e00\u4e9b\u5df2\u7ecf\u5b58\u5728\u7684\u5bf9\u8c61\u7684\u5b57\u6bb5\u548c\u65b9\u6cd5\u3002 \u8003\u8651\u4e00\u4e0b\u8fd9\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/InstanceInjectorExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/InstanceInjectorExample.java",tag:"REGION_1"},'@Inject\nString message;\n\n@Provides\nString message() {\n  return "Hello, world!";\n}\n\n@Override\nprotected void run() {\n  System.out.println(message);\n}\n\npublic static void main(String[] args) throws Exception {\n  Launcher launcher = new InstanceInjectorExample();\n  launcher.launch(args);\n}\n')),(0,i.kt)("p",null,"\u53ef\u80fd\u4f1a\u56f0\u6270\u4f60\u7684\u95ee\u9898\u662f-- ",(0,i.kt)(o.Z,{text:"Launcher",url:"/launcher/src/main/java/io/activej/launcher/Launcher.java",mdxType:"Githublink"})," \uff0c\u5b9e\u9645\u4e0a\u5982\u4f55\u77e5\u9053\u6d88\u606f\u53d8\u91cf\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello, world!"')," \u5b57\u7b26\u4e32\uff0c\u4ee5\u4fbf\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"run()")," \u65b9\u6cd5\u4e2d\u663e\u793a\u5b83\uff1f\n\u5728\u8fd9\u91cc\uff0c\u5728DI\u7684\u5185\u90e8\u5de5\u4f5c\u4e2d\uff0c ",(0,i.kt)("strong",{parentName:"p"},"InstanceInjector")," \uff0c\u5b9e\u9645\u4e0a\u662f\u7ed9\u53d1\u5c04\u5668\u63d0\u4f9b\u4e86\u5e2e\u52a9\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/InstanceInjectorExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/InstanceInjectorExample.java",tag:"REGION_2"},"private void postInjectInstances(String[] args) {\n  Injector injector = this.createInjector(args);\n  InstanceInjector<Launcher> instanceInjector = injector.getInstanceInjector(Launcher.class);\n  instanceInjector.injectInto(this);\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createInjector")," \u7528\u7ed9\u5b9a\u7684\u53c2\u6570\u4ea7\u751f ",(0,i.kt)("em",{parentName:"li"},"injector"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"instanceInjector")," \u4ece ",(0,i.kt)("em",{parentName:"li"},"injector"),"\u83b7\u5f97\u6240\u6709\u9700\u8981\u7684\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"injectInto")," \u5c06\u6570\u636e\u6ce8\u5165\u6211\u4eec\u7684\u7a7a\u5b9e\u4f8b\u4e2d\u3002\n\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,i.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/InstanceInjectorExample.java",mdxType:"Githublink"}))),(0,i.kt)("h2",{id:"\u7ed1\u5b9a\u751f\u6210\u5668"},"\u7ed1\u5b9a\u751f\u6210\u5668"),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u8003\u8651\u4e00\u4e0bCookies\u7684\u4f8b\u5b50\u5427\uff01 ",(0,i.kt)("a",{parentName:"p",href:"/zh/inject/examples"},"\u524d\u4e00\u90e8\u5206"),"\u3002 \u8fd9\u6b21\u6211\u4eec\u6709\u76f8\u540c\u7684POJO\u6210\u5206\uff0c\u4f46\u73b0\u5728\u6211\u4eec\u7684cookie\u662f\u4e00\u4e2a\u901a\u7528\u7684 ",(0,i.kt)("strong",{parentName:"p"},"Cookie","<","T>")," \uff0c\u5e76\u4e14\u6709\u4e00\u4e2a\u5b57\u6bb5 ",(0,i.kt)("strong",{parentName:"p"},"Optional","<","T> pastry"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingGeneratorExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/BindingGeneratorExample.java",tag:"REGION_1"},"static class Cookie<T> {\n  private final Optional<T> pastry;\n\n  @Inject\n  Cookie(Optional<T> pastry) {\n    this.pastry = pastry;\n  }\n\n  public Optional<T> getPastry() {\n    return pastry;\n  }\n}\n")),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"p"},"AbstractModule")," ",(0,i.kt)("em",{parentName:"p"},"cookbook")," \u5e76\u91cd\u5199\u5176 ",(0,i.kt)("inlineCode",{parentName:"p"},"configure()")," \u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingGeneratorExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/BindingGeneratorExample.java",tag:"REGION_2"},"AbstractModule cookbook = new AbstractModule() {\n  @Override\n  protected void configure() {\n    // note (1)\n    generate(Optional.class, (bindings, scope, key) -> {\n      Binding<Object> binding = bindings.get(key.getTypeParameter(0));\n      return binding != null ?\n          binding.mapInstance(Optional::of) :\n          Binding.toInstance(Optional.empty());\n    });\n\n    bind(new Key<Cookie<Pastry>>() {});\n  }\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"generate()")," \u4e3a\u672c\u6a21\u5757\u6dfb\u52a0\u4e00\u4e2a\u7ed9\u5b9a\u7c7b\u7684 ",(0,i.kt)(o.Z,{text:"BindingGenerator",url:"/core-inject/src/main/java/io/activej/inject/binding/BindingGenerator.java",mdxType:"Githublink"})," \uff0c\u672c\u4f8b\u4e2d\u662f\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"p"},"\u53ef\u9009\u7684"),"\u3002 ",(0,i.kt)("strong",{parentName:"p"},"BindingGenerator")," \u5728 ",(0,i.kt)("strong",{parentName:"p"},"Injector")," \u7f16\u8bd1\u6700\u7ec8\u7684\u7ed1\u5b9a\u56fe trie\u65f6\uff0c\u8bd5\u56fe\u751f\u6210\u4e00\u4e2a\u7f3a\u5931\u7684\u4f9d\u8d56\u6027\u7ed1\u5b9a\u3002 \u4f60\u53ef\u4ee5\u7528\u4ee5\u4e0b\u4ee3\u7801\u4ee3\u66ff ",(0,i.kt)("inlineCode",{parentName:"p"},"generate()"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Provides\n<T> Optional<T> pastry(@io.activej.di.annotation.Optional T instance) {\n    return Optional.ofNullable(instance) \u3002\n")),(0,i.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u521b\u5efa ",(0,i.kt)("em",{parentName:"p"},"cookbook")," ",(0,i.kt)("em",{parentName:"p"},"injector")," \uff0c\u5e76\u83b7\u5f97\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"p"},"Cookie","<","Pastry>"),"\u7684\u5b9e\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingGeneratorExample.java tag=REGION_3",url:"/examples/core/inject-2/src/main/java/BindingGeneratorExample.java",tag:"REGION_3"},"Injector injector = Injector.of(cookbook);\nSystem.out.println(injector.getInstance(new Key<Cookie<Pastry>>() {}).getPastry().orElseThrow(AssertionError::new).getButter().getName());\n")),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,i.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/BindingGeneratorExample.java",mdxType:"Githublink"})),(0,i.kt)("h2",{id:"\u6682\u65f6\u6027\u7684\u6346\u7ed1"},"\u6682\u65f6\u6027\u7684\u6346\u7ed1"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4e00\u4e2a\u975e\u5355\u4f53\u5bf9\u8c61\uff0c\u4ee5\u4fbf\u6bcf\u4e2a\u7ed1\u5b9a\u90fd\u6536\u5230\u81ea\u5df1\u7684\u5b9e\u4f8b\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"Transient Bindings"),"\u3002 \u53ea\u9700\u6dfb\u52a0\u4e00\u4e2a ",(0,i.kt)(o.Z,{text:"@Transient",url:"/core-inject/src/main/java/io/activej/inject/annotation/Transient.java",mdxType:"Githublink"})," \u6ce8\u91ca\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingGeneratorExample.java tag=REGION_3",url:"/examples/core/inject-2/src/main/java/BindingGeneratorExample.java",tag:"REGION_3"},"Injector injector = Injector.of(cookbook);\nSystem.out.println(injector.getInstance(new Key<Cookie<Pastry>>() {}).getPastry().orElseThrow(AssertionError::new).getButter().getName());\n")),(0,i.kt)("p",null,"\u5728\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"p"},"Injector")," \u7684 ",(0,i.kt)("em",{parentName:"p"},"cookbook"),"\uff0c\u6bcf\u6b21\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"injector.getInstance"),"\uff0c\u90fd\u4f1a\u5f97\u5230\u4e00\u4e2a\u65b0\u7684 non-singleton ",(0,i.kt)("strong",{parentName:"p"},"Integer")," instance\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/TransientBindingExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/TransientBindingExample.java",tag:"REGION_2"},'Injector injector = Injector.of(cookbook);\nInteger someInt = injector.getInstance(Integer.class);\nInteger otherInt = injector.getInstance(Integer.class);\nSystem.out.println("First : " + someInt + ", second  : " + otherInt);\n')),(0,i.kt)("p",null,"\u8f93\u51fa\u5c06\u8bf4\u660e\u6240\u521b\u5efa\u7684\u5b9e\u4f8b\u662f\u4e0d\u540c\u7684\uff0c\u770b\u8d77\u6765\u4f1a\u662f\u8fd9\u6837\u7684\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\u7b2c\u4e00\u4e2a\uff1a699\uff0c\u7b2c\u4e8c\u4e2a\uff1a130\n")),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,i.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/TransientBindingExample.java",mdxType:"Githublink"})),(0,i.kt)("h2",{id:"activej\u4e13\u7528\u7a0b\u5e8f\u4f18\u5316"},"ActiveJ\u4e13\u7528\u7a0b\u5e8f\u4f18\u5316"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/specializer"},(0,i.kt)("strong",{parentName:"a"},"ActiveJ Specializer"))," \u662f\u4e00\u4e2a\u4e3aJVM\u4f18\u5316\u4ee3\u7801\u7684\u5e93\u3002 \u4f60\u53ef\u4ee5\u7b80\u5355\u5730\u5c06 \u5b83\u4e0eActiveJ Inject\u7ed3\u5408\u8d77\u6765\uff0c\u5e76\u901a\u8fc7 ",(0,i.kt)(o.Z,{text:"up to 30%",url:"/benchmarks/inject/src/main/java/io/activej/inject/ActiveJDirectScopebindBenchmark.java",mdxType:"Githublink"})," \u4e3a\u4e86\u8bbe\u7f6eActiveJ Specializer\uff0c\u53ea\u9700\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Injector.useSpecializer()")," \u5728 ",(0,i.kt)("strong",{parentName:"p"},"Injector")," \u5b9e\u4f8b\u5316\u4e4b\u524d\u4f7f\u7528 \u3002 ActiveJ Inject\u5728\u8fd0\u884c\u65f6\u5c06\u6346\u7ed1\u7269\u7f16\u8bd1\u6210\u4e00\u4e2a\u9ad8\u6548\u7684\u8868\u793a\u3002 \u7ed3\u5408ActiveJ Specializer \uff0c\u7ed1\u5b9a\u53ef\u4ee5\u53d8\u6210\u5b57\u8282\u7801\uff0c\u5176\u6548\u7387\u4e0d\u4e9a\u4e8e\u624b\u5de5\u7f16\u5199\u7684\u4ee3\u7801\u3002 \u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u5728\u73b0\u5b9e\u751f\u6d3b\u4e2d\u7684\u9879\u76ee\u4e2d\u83b7\u5f97 \uff0c\u800c\u4e0d\u9700\u8981\u7ef4\u62a4\u96be\u4ee5\u652f\u6301\u7684\u624b\u52a8\u4ee3\u7801\u7684\u6700\u4f73\u6027\u80fd\u3002"),(0,i.kt)("h2",{id:"\u5b9e\u4f8b\u63d0\u4f9b\u8005"},"\u5b9e\u4f8b\u63d0\u4f9b\u8005"),(0,i.kt)(o.Z,{text:"InstanceProvider",url:"/core-inject/src/main/java/io/activej/inject/InstanceProvider.java",mdxType:"Githublink"})," \u662f `Injector.getInstance()` \u7684\u4e00\u4e2a\u7248\u672c\uff0c\u6709\u4e00\u4e2a\u51fa\u7089\u7684\u5bc6\u94a5\u3002 \u5b83\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u8005\u7684\u65b9\u6cd5\u6d41\u7545\u5730\u8bf7\u6c42\u3002",(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("strong",{parentName:"p"},"AbstractModule")," \uff0c\u6211\u4eec\u660e\u786e\u5730\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"InstanceProvider")," \uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"bindInstanceProvider")," helper\u65b9\u6cd5\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"Integer")," \u7ed1\u5b9a\uff0c\u5e76\u63d0\u4f9b ",(0,i.kt)("strong",{parentName:"p"},"Integer")," \u5de5\u5382\u51fd\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/InstanceProviderExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/InstanceProviderExample.java",tag:"REGION_1"},"AbstractModule cookbook = new AbstractModule() {\n  @Override\n  protected void configure() {\n    bindInstanceProvider(Integer.class);\n  }\n\n  @Provides\n  Integer giveMe() {\n    return random.nextInt(1000);\n  }\n};\n")),(0,i.kt)("p",null,"\u5728\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"p"},"Injector")," \u7684 ",(0,i.kt)("em",{parentName:"p"},"cookbook"),"\u4e4b\u540e\uff0c\u6211\u4eec\u5f97\u5230\u4e86 ",(0,i.kt)("strong",{parentName:"p"},"Key","<","InstanceProvider","<","Integer",">",">"),"\u7684\u5b9e\u4f8b\u3002 \u73b0\u5728\u53ea\u9700\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"provider.get()")," \u6765\u83b7\u5f97\u4e00\u4e2a\u61d2\u60f0\u7684 ",(0,i.kt)("strong",{parentName:"p"},"Integer")," \u5b9e\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/InstanceProviderExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/InstanceProviderExample.java",tag:"REGION_2"},"Injector injector = Injector.of(cookbook);\nInstanceProvider<Integer> provider = injector.getInstance(new Key<InstanceProvider<Integer>>() {});\n// lazy value get.\nInteger someInt = provider.get();\nSystem.out.println(someInt);\n")),(0,i.kt)("p",null,"\u4e0e\u524d\u9762\u7684\u4f8b\u5b50\u4e0d\u540c\uff0c\u5982\u679c\u4f60\u591a\u6b21\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"provide.get()")," \uff0c\u4f60\u4f1a\u6536\u5230\u76f8\u540c\u7684\u503c\u3002\n\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,i.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/InstanceProviderExample.java",mdxType:"Githublink"})),(0,i.kt)("h2",{id:"\u68c0\u67e5\u521b\u5efa\u7684\u4f9d\u8d56\u5173\u7cfb\u56fe"},"\u68c0\u67e5\u521b\u5efa\u7684\u4f9d\u8d56\u5173\u7cfb\u56fe"),(0,i.kt)("p",null,"ActiveJ Inject\u4e3a\u68c0\u67e5\u521b\u5efa\u7684\u5b9e\u4f8b\u3001\u4f5c\u7528\u57df\u548c\u4f9d\u8d56\u56fe\u7684\u53ef\u89c6\u5316\u63d0\u4f9b\u6709\u6548\u7684DSL\u3002 \u5728\u8fd9\u4e2aCookie\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u50cf\u5f80\u5e38\u4e00\u6837\uff0c\u521b\u5efa\u4e86 ",(0,i.kt)("strong",{parentName:"p"},"Sugar"),", ",(0,i.kt)("strong",{parentName:"p"},"Butter"),", ",(0,i.kt)("strong",{parentName:"p"},"Flour"),", ",(0,i.kt)("strong",{parentName:"p"},"Pastry")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"Cookie")," POJOs, *cookbook",(0,i.kt)("strong",{parentName:"p"},"*AbstractModule")," \uff0c\u6709\u4e24\u4e2a\u4f5c\u7528\u57df\uff08 ",(0,i.kt)("strong",{parentName:"p"},"Cookie")," \u7684\u7236\u4f5c\u7528\u57df\u548c ",(0,i.kt)(o.Z,{text:"@OrderScope",url:"/examples/core/inject-2/src/main/java/OrderScope.java",mdxType:"Githublink"})," \u7684\u6210\u5206\uff09\u548c cookbook ",(0,i.kt)("em",{parentName:"p"},"injector"),"\u3002\n\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u6982\u8ff0\u4e00\u4e0b\u4e09\u4e2a ",(0,i.kt)("strong",{parentName:"p"},"Injector")," \u65b9\u6cd5\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"peekInstance"),"\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"hasInstance")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"getInstance"),"\u3002 \u5b83\u4eec\u5141\u8bb8\u68c0\u67e5 \u521b\u5efa\u7684\u5b9e\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java",tag:"REGION_1"},'Cookie cookie1 = injector.peekInstance(Cookie.class);\nSystem.out.println("Instance is present in injector before \'get\' : " + injector.hasInstance(Cookie.class));\nSystem.out.println("Instance before get : " + cookie1);\n\nCookie cookie = injector.getInstance(Cookie.class);\n\nCookie cookie2 = injector.peekInstance(Cookie.class);\nSystem.out.println("Instance is present in injector after \'get\' : " + injector.hasInstance(Cookie.class));\nSystem.out.println("Instance after get : " + cookie2);\nSystem.out.println();    /// created instance check.\nSystem.out.println("Instances are same : " + cookie.equals(cookie2));\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"peekInstance")," - \u8fd4\u56de\u4e00\u4e2a\u5b9e\u4f8b ",(0,i.kt)("strong",{parentName:"li"},"\uff0c\u53ea\u6709\u5728\u5b83\u5df2\u7ecf\u88ab ",(0,i.kt)("inlineCode",{parentName:"strong"},"getInstance")," \u8c03\u7528\u4e4b\u524d\u521b\u5efa\u7684\u60c5\u51b5\u4e0b"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hasInstance")," - \u68c0\u67e5\u5728\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"getInstance")," \u4e4b\u524d\uff0c\u662f\u5426\u5df2\u7ecf\u521b\u5efa\u4e86\u6240\u63d0\u4f9b\u7684 ",(0,i.kt)("em",{parentName:"li"},"key")," \u7684\u5b9e\u4f8b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getInstance")," - \u8fd4\u56de\u4e00\u4e2a\u6240\u63d0\u4f9b\u7684 ",(0,i.kt)("em",{parentName:"li"},"\u952e\u7684\u5b9e\u4f8b\u3002"),"\n\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8\u4f5c\u7528\u57df\u68c0\u67e5\u7684\u5de5\u5177\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java",tag:"REGION_2"},'final Scope ORDER_SCOPE = Scope.of(OrderScope.class);\n\nSystem.out.println("Parent injector, before entering scope : " + injector);\n\nInjector subInjector = injector.enterScope(ORDER_SCOPE);\nSystem.out.println("Parent injector, after entering scope : " + subInjector.getParent());\nSystem.out.println("Parent injector is \'injector\' : " + injector.equals(subInjector.getParent()));\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java tag=REGION_3",url:"/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java",tag:"REGION_3"},'System.out.println("Pastry binding check : " + subInjector.getBinding(Pastry.class));\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getParent")," - \u8fd4\u56de\u5f53\u524d\u4f5c\u7528\u57df\u7684\u7236\u4f5c\u7528\u57df"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getBinding")," - \u8fd4\u56de\u6240\u63d0\u4f9b\u7684\u7ed1\u5b9a\u7684\u4f9d\u8d56\u6027"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getBindings")," - \u8fd4\u56de\u6240\u63d0\u4f9b\u8303\u56f4\u7684\u4f9d\u8d56\u6027\uff08\u5305\u62ec ",(0,i.kt)("strong",{parentName:"li"},"Injector"),"\uff09\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java tag=REGION_4",url:"/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java",tag:"REGION_4"},"Utils.printGraphVizGraph(subInjector.getBindingsTrie());\n")),(0,i.kt)("p",null,"\u4f60\u4f1a\u6536\u5230\u4ee5\u4e0b\u8f93\u51fa\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'digraph {\n    rankdir=BT;\n    "()->DiDependencyGraphExplore$Flour" [\u6807\u7b7e="DiDependencyGraphExplore$Flour"];\n    "()->DiDependencyGraphExplore$Sugar" [\u6807\u7b7e="DiDependencyGraphExplore$Sugar"]\u3002\n    "()->DiDependencyGraphExplore$Butter" [label="DiDependencyGraphExplore$Butter"];\n    "()->DiDependencyGraphExplore$Cookie" [label="DiDependencyGraphExplore$Cookie"];\n    "()->Io.activej.di.core.Injector" [label="Injector"];\n    "()->DiDependencyGraphExplore$Pastry" [label="DiDependencyGraphExplore$Pastry"];\n\n    { rank=same; "()->DiDependencyGraphExplore$Flour" "()->DiDependencyGraphExplore$Sugar" "()->DiDependencyGraphExplore$Butter" "()->Io.activej.di.core.Injector" }\n\n    "()->DiDependencyGraphExplore$Cookie" -> "()->DiDependencyGraphExplore$Pastry" \uff1b\n    "()->DiDependencyGraphExplore$Pastry" -> "()->DiDependencyGraphExplore$Butter" \u3002\n    "()->DiDependencyGraphExplore$Pastry" -> "()->DiDependencyGraphExplore$Flour";\n    "()->DiDependencyGraphExplore$Pastry" -> "()->DiDependencyGraphExplore$Sugar";\n}\n')),(0,i.kt)("p",null,"\u8fd9\u53ef\u4ee5\u8f6c\u5316\u4e3a\u4ee5\u4e0b\u56fe\u8868\u3002"),(0,i.kt)(l.Z,{chart:"\ngraph BT\n    DiDependencyGraphExplore$Cookie --\x3e id1(DiDependencyGraphExplore$Pastry)\n    id1 --\x3e DiDependencyGraphExplore$Flour\n    id1 --\x3e DiDependencyGraphExplore$Sugar\n    id1 --\x3e DiDependencyGraphExplore$Butter\n    Injector\n",mdxType:"Mermaid"}),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,i.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/DiDependencyGraphExplore.java",mdxType:"Githublink"})),(0,i.kt)("h2",{id:"\u53ef\u9009\u7684\u53d1\u7535\u673a\u6a21\u5757"},"\u53ef\u9009\u7684\u53d1\u7535\u673a\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{text:"OptionalGeneratorModule",url:"/core-inject/src/main/java/io/activej/inject/module/OptionalGeneratorModule.java",mdxType:"Githublink"}))," \u5de5\u4f5c\u65b9\u5f0f\u4e0e\u4e4b\u524d\u7684\u751f\u6210\u5668\u6a21\u5757\u7c7b\u4f3c\uff0c\u4e0d\u540c\u7684\u662f ",(0,i.kt)("strong",{parentName:"p"},"OptionalGeneratorModule")," \uff0c\u8d1f\u8d23\u521b\u5efa ",(0,i.kt)("strong",{parentName:"p"},"Optional")," \u5bf9\u8c61\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u4e0b\u4e00\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u9700\u8981\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"\u53ef\u9009<String>"),"\u7684\u5b9e\u4f8b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u521b\u4f5c\u7684\u914d\u65b9\u653e\u5728 ",(0,i.kt)("em",{parentName:"li"},"\u6a21\u5757\u5185"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"install()")," \u5efa\u7acb ",(0,i.kt)("strong",{parentName:"li"},"OptionalGeneratorModule")," \u4ee5\u4fbf\u8fdb\u4e00\u6b65\u81ea\u52a8\u521b\u5efa ",(0,i.kt)("strong",{parentName:"li"},"Optional")," \u5bf9\u8c61\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7136\u540e\u6211\u4eec\u53ea\u9700 ",(0,i.kt)("em",{parentName:"li"},"\u7ed1\u5b9a")," ",(0,i.kt)("em",{parentName:"li"},"\u5b57\u7b26\u4e32")," \u914d\u65b9\uff0c\u5e76\u5728\u4e0b\u4e00\u884c\u6307\u5b9a\u7ed1\u5b9a\uff0c\u4e3a\u952e ",(0,i.kt)("inlineCode",{parentName:"li"},"\u53ef\u9009<String>"),"\u6784\u5efa\u4e00\u4e2a\u5b9e\u4f8b \u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6700\u7ec8\uff0c\u6211\u4eec\u53ea\u662f\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"\u6a21\u5757"),"\u7684\u6ce8\u5165\u5668\uff0c\u8981\u6c42\u5b83\u83b7\u5f97 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u7684\u5b9e\u4f8b\uff0c\u53ef\u9009<String>")," \u5e76\u63a5\u6536 ",(0,i.kt)("inlineCode",{parentName:"li"},'"Hello, World"'),"\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/OptionalGeneratorModuleExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/OptionalGeneratorModuleExample.java",tag:"REGION_1"},'public class OptionalGeneratorModuleExample {\n  public static void main(String[] args) {\n    Injector injector = Injector.of(ModuleBuilder.create()\n        .install(OptionalGeneratorModule.create())\n        .bind(String.class).toInstance("Hello, World")\n        .bind(new Key<Optional<String>>() {})\n        .build());\n    Optional<String> instance = injector.getInstance(new Key<Optional<String>>() {});\n    System.out.println(instance);\n  }\n}\n')),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,i.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/OptionalGeneratorModuleExample.java",mdxType:"Githublink"})))}j.isMDXComponent=!0},11748:function(e,n,t){var a={"./locale":89234,"./locale.js":89234};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=11748}}]);