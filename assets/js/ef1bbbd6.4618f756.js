"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[8257],{7641:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var a=n(5893),t=n(1151),c=n(7618),i=n(3149);const r={sidebar_label:"Class scanning"},d="Class scanning",o={id:"inject/class-scanning",title:"Class scanning",description:"In this tutorial we will define @Provides methods in arbitrary classes that do not implement the Module interface.",source:"@site/docs/inject/class-scanning.mdx",sourceDirName:"inject",slug:"/inject/class-scanning",permalink:"/inject/class-scanning",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Class scanning"},sidebar:"docs",previous:{title:"Injecting instances",permalink:"/inject/injecting-instances"},next:{title:"Duplicate bindings",permalink:"/inject/duplicate-bindings"}},l={},h=[{value:"Classes with <code>@Provides</code> methods",id:"classes-with-provides-methods",level:2},{value:"Creating <code>Injector</code>",id:"creating-injector",level:2}];function j(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"class-scanning",children:"Class scanning"}),"\n",(0,a.jsxs)(s.p,{children:["In this tutorial we will define ",(0,a.jsx)(s.code,{children:"@Provides"})," methods in arbitrary classes that do not implement the ",(0,a.jsx)(c.Z,{url:"/core-inject/src/main/java/io/activej/inject/module/Module.java",children:(0,a.jsx)(s.code,{children:"Module"})})," interface.\nThen we will scan these classes to collect providers to the ",(0,a.jsx)(s.code,{children:"Injector"}),"."]}),"\n",(0,a.jsxs)(s.h2,{id:"classes-with-provides-methods",children:["Classes with ",(0,a.jsx)(s.code,{children:"@Provides"})," methods"]}),"\n",(0,a.jsxs)(s.p,{children:["We will define two classes that contain methods annotated with ",(0,a.jsx)(s.code,{children:"@Provides"})," annotation. The first class ",(0,a.jsx)(s.code,{children:"StaticProviders"})," will contain only static ",(0,a.jsx)(s.code,{children:"@Provides"}),"-methods.\nThe other class ",(0,a.jsx)(s.code,{children:"MixedProviders"})," contains both static and instance ",(0,a.jsx)(s.code,{children:"@Provides"}),"-methods."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/ClassScanExample.java tag=REGION_1",children:'public static class StaticProviders {\n  @Provides\n  static int port() {\n    return 1234;\n  }\n\n  @Provides\n  static String databaseName() {\n    return "exampleDB";\n  }\n}\n'})}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"StaticProviders"})," class provides the database name as well as the database port number."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/ClassScanExample.java tag=REGION_2",children:"public static class MixedProviders {\n  private final String hostname;\n\n  public MixedProviders(String hostname) {\n    this.hostname = hostname;\n  }\n\n  @Provides\n  InetSocketAddress address(int port) {\n    return new InetSocketAddress(hostname, port);\n  }\n\n  @Provides\n  static DataSource dataSource(InetSocketAddress address, String dbName) {\n    return new DataSource(address, dbName);\n  }\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"MixedProviders"})," class provides the database address and the ",(0,a.jsx)(s.code,{children:"DataSource"})," class. The ",(0,a.jsx)(s.code,{children:"DataSource"})," class requires a database name as well as a database address.\nThe class looks as follows:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/ClassScanExample.java tag=REGION_4",children:'public static final class DataSource {\n  private final InetSocketAddress address;\n  private final String dbName;\n\n  @Inject\n  public DataSource(InetSocketAddress address, String dbName) {\n    this.address = address;\n    this.dbName = dbName;\n  }\n\n  public String queryData() {\n    System.out.printf("Querying %s:%s for data%n", address, dbName);\n    return "data";\n  }\n}\n'})}),"\n",(0,a.jsxs)(s.h2,{id:"creating-injector",children:["Creating ",(0,a.jsx)(s.code,{children:"Injector"})]}),"\n",(0,a.jsxs)(s.p,{children:["To create an ",(0,a.jsx)(s.code,{children:"Injector"}),", we need to provide some DI modules. But we only have arbitrary classes with ",(0,a.jsx)(s.code,{children:"@Provides"}),"-methods."]}),"\n",(0,a.jsxs)(s.p,{children:["We can use the ",(0,a.jsx)(c.Z,{url:"/core-inject/src/main/java/io/activej/inject/module/ModuleBuilder.java",children:(0,a.jsx)(s.code,{children:"ModuleBuilder"})})," class to create a module based on these arbitrary classes.\n",(0,a.jsx)(s.code,{children:"ModuleBuilder"})," has several ",(0,a.jsx)(s.code,{children:"scan()"})," methods that can be used to scan a class or instance and collect providers. The entire class hierarchy is scanned, so the providers defined in the superclasses\nwould also be collected by ",(0,a.jsx)(s.code,{children:"scan()"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["This is how we create an ",(0,a.jsx)(s.code,{children:"Injector"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/ClassScanExample.java tag=REGION_3",children:'public static void main(String[] args) {\n  Injector injector = Injector.of(\n    ModuleBuilder.create()\n      .scan(StaticProviders.class)\n      .scan(new MixedProviders("example.com"))\n      .build()\n  );\n\n  DataSource dataSource = injector.getInstance(DataSource.class);\n  System.out.println(dataSource.queryData());\n}\n'})}),"\n",(0,a.jsxs)(s.p,{children:["For the ",(0,a.jsx)(s.code,{children:"StaticProviders"})," class, which contains only static providers, we do not need an instance of the class. So we only pass the class to the ",(0,a.jsx)(s.code,{children:"scan()"})," method.\nAlternatively, the ",(0,a.jsx)(s.code,{children:"MixedProviders"})," class also contains a non-static provider method, so we need to pass an instance of ",(0,a.jsx)(s.code,{children:"MixedProviders"})," to the ",(0,a.jsx)(s.code,{children:"scan()"})," method."]}),"\n",(0,a.jsxs)(s.p,{children:["All collected providers form a new ",(0,a.jsx)(s.code,{children:"Module"})," which is then passed to the ",(0,a.jsx)(s.code,{children:"Injcetor"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["You can find example sources on ",(0,a.jsx)(i.Z,{href:"https://github.com/activej/activej/{{githubExamplesBranch}}/examples/core/inject-2/src/main/java/ClassScanExample.java",children:"Github"})]})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},3149:(e,s,n)=>{n.d(s,{Z:()=>o});n(7294);var a=n(9962),t=n(1106),c=n.n(t),i=n(5835),r=n.n(i),d=n(5893);r().interpolate=/{{([\s\S]+?)}}/g;const o=function(e){let{href:s,children:n,target:t="_blank"}=e;const{siteConfig:i}=(0,a.Z)(),r=c()(s);return(0,d.jsx)("a",{href:r(i.customFields),target:t,children:n})}},7618:(e,s,n)=>{n.d(s,{Z:()=>c});n(7294);var a=n(9962),t=n(5893);const c=e=>{let{url:s,text:n,isInline:c=!0,children:i}=e;const{siteConfig:r}=(0,a.Z)(),d=s.startsWith("/examples")?r.customFields.githubExamplesBranch:r.customFields.githubBranch;return(0,t.jsx)("a",{style:c?{}:{display:"block",marginBottom:"16px"},href:r.customFields.githubUrl+"/"+d+s,target:"_blank",children:n||i})}}}]);