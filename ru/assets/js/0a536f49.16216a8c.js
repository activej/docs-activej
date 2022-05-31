(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[8873],{77618:function(e,t,n){"use strict";var a=n(67294),o=n(39962);t.Z=function(e){var t=e.url,n=e.text,r=e.isInline,i=void 0===r||r,s=e.children,c=(0,o.Z)().siteConfig,l=t.startsWith("/examples")?c.customFields.githubExamplesBranch:c.customFields.githubBranch;return a.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:c.customFields.githubUrl+"/"+l+t,target:"_blank"},n||s)}},14304:function(e,t,n){"use strict";var a=n(67294),o=n(21140),r=n.n(o);r().initialize({startOnLoad:!0});t.Z=function(e){var t=e.chart;return(0,a.useEffect)((function(){r().contentLoaded()}),[]),a.createElement("div",{className:"mermaid"},t)}},77815:function(e,t,n){"use strict";n(67294);var a=n(39962);t.Z=function(e){var t=e.name,n=(0,a.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},30758:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return g},default:function(){return k}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=n(77815),s=n(14304),c=n(77618),l=["components"],u={sidebar_label:"Cookbook example"},d="Cookbook example",p={unversionedId:"inject/cookbook-example",id:"inject/cookbook-example",isDocsHomePage:!1,title:"Cookbook example",description:"To introduce the basic concepts and features of ActiveJ Inject, we have created an example that starts",source:"@site/docs/inject/cookbook-example.mdx",sourceDirName:"inject",slug:"/inject/cookbook-example",permalink:"/ru/inject/cookbook-example",tags:[],version:"current",frontMatter:{sidebar_label:"Cookbook example"},sidebar:"docs",previous:{title:"Under the hood",permalink:"/ru/inject/under-the-hood"},next:{title:"\u0411\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0438",permalink:"/ru/inject/benchmarks"}},g=[{value:"Manual Bind",id:"manual-bind",children:[],level:3},{value:"Bind Using ModuleBuilder",id:"bind-using-modulebuilder",children:[],level:3},{value:"Bind Using <code>@Provides</code>",id:"bind-using-provides",children:[],level:3},{value:"Bind Using Instance or Class Scan",id:"bind-using-instance-or-class-scan",children:[],level:3},{value:"Automatic Bind Using <code>@Inject</code>",id:"automatic-bind-using-inject",children:[],level:3},{value:"Using <code>@Named</code> annotation",id:"using-named-annotation",children:[],level:3},{value:"Non-singleton Instances Using Scopes",id:"non-singleton-instances-using-scopes",children:[],level:3},{value:"Transforming Binds",id:"transforming-binds",children:[],level:3}],m={toc:g};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cookbook-example"},"Cookbook example"),(0,r.kt)("p",null,"To introduce the basic concepts and features of ActiveJ Inject, we have created an example that starts\nwith the low-level DI concepts and gradually covers more specific advanced features."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,r.kt)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project.\nThese examples are located at ",(0,r.kt)("inlineCode",{parentName:"p"},"activej/core-inject/test")," and named ",(0,r.kt)("strong",{parentName:"p"},"DiFollowUpTest")))),(0,r.kt)(c.Z,{text:"This example on GitHub",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",mdxType:"Githublink"}),(0,r.kt)("p",null,"In this example, we have a kitchen where you can automatically create delicious cookies using the ActiveJ Inject.\nBefore we start cooking, note that there are several POJOs with default constructors marked with ",(0,r.kt)("em",{parentName:"p"},"@Inject")," annotation: ",(0,r.kt)("strong",{parentName:"p"},"Kitchen"),",\n",(0,r.kt)("strong",{parentName:"p"},"Sugar"),", ",(0,r.kt)("strong",{parentName:"p"},"Butter"),", ",(0,r.kt)("strong",{parentName:"p"},"Flour"),", ",(0,r.kt)("strong",{parentName:"p"},"Pastry")," and ",(0,r.kt)("strong",{parentName:"p"},"Cookie"),"."),(0,r.kt)("h3",{id:"manual-bind"},"Manual Bind"),(0,r.kt)("p",null,"Let's bake a ",(0,r.kt)("strong",{parentName:"p"},"Cookie")," using ActiveJ Inject in a hardcore way.\nFirst of all, we need to provide all the ingredients for the cookies: ",(0,r.kt)("strong",{parentName:"p"},"Sugar"),", ",(0,r.kt)("strong",{parentName:"p"},"Butter")," and\n",(0,r.kt)("strong",{parentName:"p"},"Flour"),". Next, there is th ",(0,r.kt)("strong",{parentName:"p"},"Pastry")," recipe, which includes the\ningredients (",(0,r.kt)("strong",{parentName:"p"},"Sugar"),", ",(0,r.kt)("strong",{parentName:"p"},"Butter")," and ",(0,r.kt)("strong",{parentName:"p"},"Flour"),") that we already know how to get. Finally, we can add a recipe for\nhow to bake a ",(0,r.kt)("strong",{parentName:"p"},"Cookie"),"."),(0,r.kt)(s.Z,{chart:"\ngraph BT\n    id1(Cookie) --\x3e id2(Pastry)\n    id2 --\x3e Butter\n    id2 --\x3e Flour\n    id2 --\x3e Sugar\n",mdxType:"Mermaid"}),(0,r.kt)("p",null,"It's baking time! Just create the ",(0,r.kt)("strong",{parentName:"p"},"Injector")," with all these recipes and ask for an instance of a ",(0,r.kt)("strong",{parentName:"p"},"Cookie"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_1",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_1"},'public void transformBindingSnippet() {\n  Module cookbook = ModuleBuilder.create()\n      .bind(Sugar.class).to(Sugar::new)\n      .bind(Butter.class).to(Butter::new)\n      .bind(Flour.class).to(() -> new Flour("GoodFlour", 100.0f))\n      .bind(Pastry.class).to(Pastry::new, Sugar.class, Butter.class, Flour.class)\n      .bind(Cookie.class).to(Cookie::new, Pastry.class)\n      .transform(Object.class, (bindings, scope, key, binding) ->\n          binding.onInstance(x -> System.out.println(Instant.now() + " -> " + key)))\n      .build();\n\n  Injector injector = Injector.of(cookbook);\n  assertEquals("GoodFlour", injector.getInstance(Cookie.class).getPastry().getFlour().getName());\n}\n')),(0,r.kt)("h3",{id:"bind-using-modulebuilder"},"Bind Using ModuleBuilder"),(0,r.kt)("p",null,"This time we are going to bake a ",(0,r.kt)("strong",{parentName:"p"},"Cookie")," with a simple DSL.\nWe will ",(0,r.kt)("em",{parentName:"p"},"bundle")," our recipes for ",(0,r.kt)("strong",{parentName:"p"},"Sugar"),", ",(0,r.kt)("strong",{parentName:"p"},"Butter"),", and ",(0,r.kt)("strong",{parentName:"p"},"Flour")," in the 'cookbook' ",(0,r.kt)("em",{parentName:"p"},"module"),"."),(0,r.kt)("p",null,"Instead of explicitly creating bindings and storing them directly in a map, we will just ",(0,r.kt)("em",{parentName:"p"},"bind")," the recipes in our module and\nthen pass it to the ",(0,r.kt)("em",{parentName:"p"},"injector"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_2",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_2"},'public void moduleBindSnippet() {\n  Module module = ModuleBuilder.create()\n      .bind(Sugar.class).to(() -> new Sugar("WhiteSugar", 10.0f))\n      .bind(Butter.class).to(() -> new Butter("PerfectButter", 20.0f))\n      .bind(Flour.class).to(() -> new Flour("GoodFlour", 100.0f))\n      .bind(Pastry.class).to(Pastry::new, Sugar.class, Butter.class, Flour.class)\n      .bind(Cookie.class).to(Cookie::new, Pastry.class)\n      .build();\n\n  Injector injector = Injector.of(module);\n  assertEquals("PerfectButter", injector.getInstance(Cookie.class).getPastry().getButter().getName());\n}\n')),(0,r.kt)("h3",{id:"bind-using-provides"},"Bind Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"@Provides")),(0,r.kt)("p",null,"It's time for the real ",(0,r.kt)("strong",{parentName:"p"},"Cookie")," business. Instead of explicitly creating bindings, we will use a declarative DSL."),(0,r.kt)("p",null,"As in the previous example, we will create a cookbook module, but this time all bindings for the ingredients will be created\nautomatically from the ",(0,r.kt)("em",{parentName:"p"},"provider methods"),". These methods are annotated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Provides")," annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_3",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_3"},'public void provideAnnotationSnippet() {\n  Module cookbook = new AbstractModule() {\n    @Provides\n    Sugar sugar() { return new Sugar("WhiteSugar", 10.f); }\n\n    @Provides\n    Butter butter() { return new Butter("PerfectButter", 20.0f); }\n\n    @Provides\n    Flour flour() { return new Flour("GoodFlour", 100.0f); }\n\n    @Provides\n    Pastry pastry(Sugar sugar, Butter butter, Flour flour) {\n      return new Pastry(sugar, butter, flour);\n    }\n\n    @Provides\n    Cookie cookie(Pastry pastry) {\n      return new Cookie(pastry);\n    }\n  };\n\n  Injector injector = Injector.of(cookbook);\n  assertEquals("PerfectButter", injector.getInstance(Cookie.class).getPastry().getButter().getName());\n}\n')),(0,r.kt)("h3",{id:"bind-using-instance-or-class-scan"},"Bind Using Instance or Class Scan"),(0,r.kt)("p",null,"Sometimes it happens that you have prepared an injection scheme, but that scheme is not a module. Fortunately, there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"scan()"),"\nmethod that can help you make a connection between DI entities and your scheme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_4",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_4"},'public void scanObjectSnippet() {\n  Module cookbook = ModuleBuilder.create()\n      .scan(new Object() {\n        @Provides\n        Sugar sugar() { return new Sugar("WhiteSugar", 10.f); }\n\n        @Provides\n        Butter butter() { return new Butter("PerfectButter", 20.0f); }\n\n        @Provides\n        Flour flour() { return new Flour("GoodFlour", 100.0f); }\n\n        @Provides\n        Pastry pastry(Sugar sugar, Butter butter, Flour flour) {\n          return new Pastry(sugar, butter, flour);\n        }\n\n        @Provides\n        Cookie cookie(Pastry pastry) {\n          return new Cookie(pastry);\n        }\n      })\n      .build();\n\n  Injector injector = Injector.of(cookbook);\n  assertEquals("PerfectButter", injector.getInstance(Cookie.class).getPastry().getButter().getName());\n}\n')),(0,r.kt)("p",null,"If your class provides a scheme, you can easily use it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_5",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_5"},'public void scanClassSnippet() {\n  Module cookbook = ModuleBuilder.create().scan(InjectsDefinition.class).build();\n\n  Injector injector = Injector.of(cookbook);\n  assertEquals("PerfectButter", injector.getInstance(Cookie.class).getPastry().getButter().getName());\n}\n')),(0,r.kt)("h3",{id:"automatic-bind-using-inject"},"Automatic Bind Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"@Inject")),(0,r.kt)("p",null,"When we created our POJOs, we marked their constructors with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Inject")," annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_8",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_8"},'static class Sugar {\n  private final String name;\n  private final float weight;\n\n  @Inject\n  public Sugar() {\n    this.name = "WhiteSugar";\n    this.weight = 10.f;\n  }\n')),(0,r.kt)("p",null,"If a binding depends on a class that has no known binding, the ",(0,r.kt)("em",{parentName:"p"},"injector")," will try to automatically generate a binding for it.\nIt will look for the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Inject")," annotation on its constructors, static factory methods, or on the class itself (in this case\nthe default constructor is used) and use them as the factory in the generated binding."),(0,r.kt)("p",null,"Since nothing depends on a ",(0,r.kt)("strong",{parentName:"p"},"Cookie")," binding, by default no bindings are generated at all.\nHere we use a plain ",(0,r.kt)("em",{parentName:"p"},"bind")," to tell the injector that we want the binding to be present.\nThis will generate the entire bindings tree that it depends on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_6",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_6"},'public void injectAnnotationSnippet() {\n  Module cookbook = ModuleBuilder.create().bind(Cookie.class).build();\n\n  Injector injector = Injector.of(cookbook);\n  assertEquals("WhiteSugar", injector.getInstance(Cookie.class).getPastry().getSugar().getName());\n}\n')),(0,r.kt)("h3",{id:"using-named-annotation"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"@Named")," annotation"),(0,r.kt)("p",null,"Let's be trendy and bake a sugar-free cookie. To do this, along with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Provides")," annotation, we will also use the ",(0,r.kt)(c.Z,{text:"@Named",url:"/core-inject/src/main/java/io/activej/inject/annotation/Named.java",mdxType:"Githublink"})," annotation\nand provide two different ",(0,r.kt)("strong",{parentName:"p"},"Sugar"),", ",(0,r.kt)("strong",{parentName:"p"},"Pastry")," and ",(0,r.kt)("strong",{parentName:"p"},"Cookie")," factory functions. This approach allows us to use different instances of the same class.\nNow we can tell our ",(0,r.kt)("em",{parentName:"p"},"injector"),", which of cookie we want, a regular one or sugar-free."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_7",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_7"},'public void namedAnnotationSnippet() {\n  Module cookbook = new AbstractModule() {\n    @Provides\n    @Named("zerosugar")\n    Sugar sugar1() { return new Sugar("SugarFree", 0.f); }\n\n    @Provides\n    @Named("normal")\n    Sugar sugar2() { return new Sugar("WhiteSugar", 10.f); }\n\n    @Provides\n    Butter butter() { return new Butter("PerfectButter", 20.f); }\n\n    @Provides\n    Flour flour() { return new Flour("GoodFlour", 100.f); }\n\n    @Provides\n    @Named("normal")\n    Pastry pastry1(@Named("normal") Sugar sugar, Butter butter, Flour flour) {\n      return new Pastry(sugar, butter, flour);\n    }\n\n    @Provides\n    @Named("zerosugar")\n    Pastry pastry2(@Named("zerosugar") Sugar sugar, Butter butter, Flour flour) {\n      return new Pastry(sugar, butter, flour);\n    }\n\n    @Provides\n    @Named("normal")\n    Cookie cookie1(@Named("normal") Pastry pastry) {\n      return new Cookie(pastry);\n    }\n\n    @Provides\n    @Named("zerosugar")\n    Cookie cookie2(@Named("zerosugar") Pastry pastry) { return new Cookie(pastry); }\n  };\n\n  Injector injector = Injector.of(cookbook);\n\n  float normalWeight = injector.getInstance(Key.of(Cookie.class, "normal"))\n      .getPastry().getSugar().getWeight();\n  float zerosugarWeight = injector.getInstance(Key.of(Cookie.class, "zerosugar"))\n      .getPastry().getSugar().getWeight();\n\n  assertEquals(10.f, normalWeight, 0.0f);\n  assertEquals(0.f, zerosugarWeight, 0.0f);\n}\n')),(0,r.kt)("p",null,"You can also use ",(0,r.kt)(c.Z,{text:"ModuleBuilder",url:"/core-inject/src/main/java/io/activej/inject/module/ModuleBuilder.java",mdxType:"Githublink"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_10",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_10"},'public void moduleBuilderWithQualifiedBindsSnippet() {\n  Module cookbook = ModuleBuilder.create()\n      .bind(Key.of(Sugar.class, "zerosugar")).to(() -> new Sugar("SugarFree", 0.f))\n      .bind(Key.of(Sugar.class, "normal")).to(() -> new Sugar("WhiteSugar", 10.f))\n      .bind(Key.of(Pastry.class, "zerosugar")).to(Pastry::new, Key.of(Sugar.class).qualified("zerosugar"), Key.of(Butter.class), Key.of(Flour.class))\n      .bind(Key.of(Pastry.class, "normal")).to(Pastry::new, Key.of(Sugar.class).qualified("normal"), Key.of(Butter.class), Key.of(Flour.class))\n      .bind(Key.of(Cookie.class, "zerosugar")).to(Cookie::new, Key.of(Pastry.class).qualified("zerosugar"))\n      .bind(Key.of(Cookie.class, "normal")).to(Cookie::new, Key.of(Pastry.class).qualified("normal"))\n      .build();\n\n  Injector injector = Injector.of(cookbook);\n\n  float normalWeight = injector.getInstance(Key.of(Cookie.class, "normal"))\n      .getPastry().getSugar().getWeight();\n  float zerosugarWeight = injector.getInstance(Key.of(Cookie.class, "zerosugar"))\n      .getPastry().getSugar().getWeight();\n\n  assertEquals(10.f, normalWeight, 0.0f);\n  assertEquals(0.f, zerosugarWeight, 0.0f);\n}\n')),(0,r.kt)("h3",{id:"non-singleton-instances-using-scopes"},"Non-singleton Instances Using Scopes"),(0,r.kt)("p",null,"Our cookies turned out to be so tasty that many people want to try them. However, there is a\nproblem: ActiveJ Inject makes instances singleton by default. Yet, we cannot sell the same one cookie to all our\ncustomers."),(0,r.kt)("p",null,"Fortunately, there is a solution: we can use the custom ",(0,r.kt)(c.Z,{text:"@ScopeAnnotation",url:"/core-inject/src/main/java/io/activej/inject/annotation/ScopeAnnotation.java",mdxType:"Githublink"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"@OrderScope")," to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER_SCOPE")," scope:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/OrderScope.java tag=EXAMPLE",url:"/core-inject/src/test/java/io/activej/inject/OrderScope.java",tag:"EXAMPLE"},"@ScopeAnnotation(threadsafe = false)\n@Target({ElementType.METHOD})\n@Retention(RUNTIME)\npublic @interface OrderScope {\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_9",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_9"},"public static final Scope ORDER_SCOPE = Scope.of(OrderScope.class);\n")),(0,r.kt)("p",null,"So our cookbook will look as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_11",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_11"},"Module cookbook = ModuleBuilder.create()\n    .bind(Kitchen.class).to(Kitchen::new)\n    .bind(Sugar.class).to(Sugar::new).in(OrderScope.class)\n    .bind(Butter.class).to(Butter::new).in(OrderScope.class)\n    .bind(Flour.class).to(Flour::new).in(OrderScope.class)\n    .bind(Pastry.class).to(Pastry::new, Sugar.class, Butter.class, Flour.class).in(OrderScope.class)\n    .bind(Cookie.class).to(Cookie::new, Pastry.class).in(OrderScope.class)\n    .build();\n")),(0,r.kt)("p",null,"In this way, only kitchen will remain singleton:"),(0,r.kt)(s.Z,{style:{margin:"0 auto"},chart:"\ngraph BT\n    subgraph Root Scope\n    Kitchen\n    subgraph N\n    subgraph Order Scope\n    Sugar--\x3eid1(Pastry)\n    Flour--\x3eid1\n    Butter--\x3eid1\n    id1--\x3eCookie\n    end\n    end\n    end\n",mdxType:"Mermaid"}),(0,r.kt)("p",null,"We received 10 orders from our customers, so now we need 10 instances of cookies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, we inject an instance of ",(0,r.kt)("strong",{parentName:"li"},"Kitchen"),". This instance is now stored in the root scope injector."),(0,r.kt)("li",{parentName:"ul"},"Then we create 10 subinjectors which enter ",(0,r.kt)("inlineCode",{parentName:"li"},"ORDER_SCOPE"),"."),(0,r.kt)("li",{parentName:"ul"},"Each subinjector creates only one ",(0,r.kt)("strong",{parentName:"li"},"Cookie")," instance and refers to the single ",(0,r.kt)("strong",{parentName:"li"},"Kitchen")," instance of its parent root scope.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_12",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_12"},"Injector injector = Injector.of(cookbook);\nKitchen kitchen = injector.getInstance(Kitchen.class);\nSet<Cookie> cookies = new HashSet<>();\nfor (int i = 0; i < 10; ++i) {\n  Injector subinjector = injector.enterScope(ORDER_SCOPE);\n\n  assertSame(subinjector.getInstance(Kitchen.class), kitchen);\n  if (i > 0) assertFalse(cookies.contains(subinjector.getInstance(Cookie.class)));\n\n  cookies.add(subinjector.getInstance(Cookie.class));\n}\nassertEquals(10, cookies.size());\n")),(0,r.kt)("h3",{id:"transforming-binds"},"Transforming Binds"),(0,r.kt)("p",null,"You can customize the process of how your injector gets instances and transform that process. For example, you can\nsimply add logging by overriding the ",(0,r.kt)("em",{parentName:"p"},"configure()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_13",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_13"},'public void transformBindingSnippet() {\n  Module cookbook = ModuleBuilder.create()\n      .bind(Sugar.class).to(Sugar::new)\n      .bind(Butter.class).to(Butter::new)\n      .bind(Flour.class).to(() -> new Flour("GoodFlour", 100.0f))\n      .bind(Pastry.class).to(Pastry::new, Sugar.class, Butter.class, Flour.class)\n      .bind(Cookie.class).to(Cookie::new, Pastry.class)\n      .transform(Object.class, (bindings, scope, key, binding) ->\n          binding.onInstance(x -> System.out.println(Instant.now() + " -> " + key)))\n      .build();\n\n  Injector injector = Injector.of(cookbook);\n  assertEquals("GoodFlour", injector.getInstance(Cookie.class).getPastry().getFlour().getName());\n}\n')),(0,r.kt)("p",null,"Now you will receive an output, which is the time when an instance was created and the instance itself."))}k.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=11748}}]);