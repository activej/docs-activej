(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9049],{77618:function(e,t,n){"use strict";var a=n(67294),r=n(39962);t.Z=function(e){var t=e.url,n=e.text,o=e.isInline,i=void 0===o||o,s=e.children,c=(0,r.Z)().siteConfig,l=t.startsWith("/examples")?c.customFields.githubExamplesBranch:c.customFields.githubBranch;return a.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:c.customFields.githubUrl+"/"+l+t,target:"_blank"},n||s)}},14304:function(e,t,n){"use strict";var a=n(67294),r=n(21140),o=n.n(r);o().initialize({startOnLoad:!0});t.Z=function(e){var t=e.chart;return(0,a.useEffect)((function(){o().contentLoaded()}),[]),a.createElement("div",{className:"mermaid"},t)}},77815:function(e,t,n){"use strict";n(67294);var a=n(39962);t.Z=function(e){var t=e.name,n=(0,a.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},88576:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return g},default:function(){return k}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(77815),s=n(14304),c=n(77618),l=["components"],u={sidebar_label:"\u5b9e\u4f8b"},p="\u5b9e\u4f8b",d={unversionedId:"inject/examples",id:"inject/examples",isDocsHomePage:!1,title:"\u5b9e\u4f8b",description:"\u4e3a\u4e86\u8868\u73b0ActiveJ Inject\u7684\u4e3b\u8981\u6982\u5ff5\u548c\u529f\u80fd\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u4f8b\u5b50\uff0c\u4ece\u4f4e\u7ea7\u7684DI\u6982\u5ff5\u5f00\u59cb \uff0c\u5e76\u9010\u6e10\u6db5\u76d6\u66f4\u5177\u4f53\u7684\u9ad8\u7ea7\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/inject/examples.mdx",sourceDirName:"inject",slug:"/inject/examples",permalink:"/zh/inject/examples",tags:[],version:"current",frontMatter:{sidebar_label:"\u5b9e\u4f8b"},sidebar:"docs",previous:{title:"\u57fa\u51c6",permalink:"/zh/inject/benchmarks"},next:{title:"\u6982\u8ff0",permalink:"/zh/codegen"}},g=[{value:"\u624b\u52a8\u88c5\u8ba2",id:"\u624b\u52a8\u88c5\u8ba2",children:[]},{value:"\u4f7f\u7528ModuleBuilder\u8fdb\u884c\u7ed1\u5b9a",id:"\u4f7f\u7528modulebuilder\u8fdb\u884c\u7ed1\u5b9a",children:[]},{value:"\u4f7f\u7528 <code>@Provides\u8fdb\u884c\u7ed1\u5b9a</code>",id:"\u4f7f\u7528-provides\u8fdb\u884c\u7ed1\u5b9a",children:[]},{value:"\u4f7f\u7528\u5b9e\u4f8b\u6216\u7c7b\u626b\u63cf\u8fdb\u884c\u7ed1\u5b9a",id:"\u4f7f\u7528\u5b9e\u4f8b\u6216\u7c7b\u626b\u63cf\u8fdb\u884c\u7ed1\u5b9a",children:[]},{value:"\u4f7f\u7528 <code>@Inject\u8fdb\u884c\u81ea\u52a8\u7ed1\u5b9a</code>",id:"\u4f7f\u7528-inject\u8fdb\u884c\u81ea\u52a8\u7ed1\u5b9a",children:[]},{value:"\u4f7f\u7528 <code>@Named</code> \u6ce8\u91ca\u3002",id:"\u4f7f\u7528-named-\u6ce8\u91ca",children:[]},{value:"\u4f7f\u7528\u4f5c\u7528\u57df\u7684\u975e\u5355\u4f53\u5b9e\u4f8b",id:"\u4f7f\u7528\u4f5c\u7528\u57df\u7684\u975e\u5355\u4f53\u5b9e\u4f8b",children:[]},{value:"\u53d8\u9769\u7684\u675f\u7f1a",id:"\u53d8\u9769\u7684\u675f\u7f1a",children:[]}],j={toc:g};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u4e3a\u4e86\u8868\u73b0ActiveJ Inject\u7684\u4e3b\u8981\u6982\u5ff5\u548c\u529f\u80fd\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u4f8b\u5b50\uff0c\u4ece\u4f4e\u7ea7\u7684DI\u6982\u5ff5\u5f00\u59cb \uff0c\u5e76\u9010\u6e10\u6db5\u76d6\u66f4\u5177\u4f53\u7684\u9ad8\u7ea7\u529f\u80fd\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8981\u8fd0\u884c\u4f8b\u5b50\uff0c\u4f60\u9700\u8981\u4eceGitHub\u514b\u9686ActiveJ"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,o.kt)("p",{parentName:"div"},"\u5e76\u5c06\u5176\u4f5c\u4e3a\u4e00\u4e2aMaven\u9879\u76ee\u5bfc\u5165\u3002 \u67e5\u770b\u6807\u7b7e ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(i.Z,{name:"currentVersion",mdxType:"Variable"})),"\u3002 \u5728\u8fd0\u884c\u8fd9\u4e9b\u4f8b\u5b50\u4e4b\u524d\uff0c\u5148\u5efa\u7acb\u9879\u76ee\u3002 \u8fd9\u4e9b\u4f8b\u5b50\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"activej/core-inject/test")," \uff0c\u547d\u540d\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"DiFollowUpTest")))),(0,o.kt)(c.Z,{text:"This example on GitHub",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",mdxType:"Githublink"}),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6709\u4e00\u4e2a\u53a8\u623f\uff0c\u5728\u90a3\u91cc\u4f60\u53ef\u4ee5\u7528\u5947\u5999\u7684ActiveJ Inject\u81ea\u52a8\u521b\u5efa\u7f8e\u5473\u7684\u997c\u5e72\u3002 \u5728\u6211\u4eec\u5f00\u59cb\u505a\u996d\u4e4b\u524d\uff0c\u8bf7\u6ce8\u610f\uff0c\u6709\u51e0\u4e2aPOJO\u7684\u9ed8\u8ba4\u6784\u9020\u51fd\u6570\u6807\u6709 ",(0,o.kt)("em",{parentName:"p"},"@Inject")," \u6ce8\u89e3\uff1a ",(0,o.kt)("strong",{parentName:"p"},"Kitchen"),", ",(0,o.kt)("strong",{parentName:"p"},"Sugar"),", ",(0,o.kt)("strong",{parentName:"p"},"Butter"),", ",(0,o.kt)("strong",{parentName:"p"},"Flour"),", ",(0,o.kt)("strong",{parentName:"p"},"Pastry")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"Cookie"),"\u3002"),(0,o.kt)("h3",{id:"\u624b\u52a8\u88c5\u8ba2"},"\u624b\u52a8\u88c5\u8ba2"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u7528ActiveJ Inject\u7684\u65b9\u5f0f\u786c\u751f\u751f\u5730\u70e4\u51fa\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"Cookie"),"\u3002 \u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u63d0\u4f9b\u997c\u5e72\u7684\u6240\u6709\u6750\u6599\uff1a ",(0,o.kt)("strong",{parentName:"p"},"\u7cd6"),"\uff0c ",(0,o.kt)("strong",{parentName:"p"},"\u9ec4\u6cb9")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"\u9762\u7c89"),"\u3002 \u63a5\u4e0b\u6765\uff0c\u6709\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"\u7cd5\u70b9\u7684\u914d\u65b9"),"\uff0c\u5176\u4e2d\u5305\u62ec \u6750\u6599\uff08",(0,o.kt)("strong",{parentName:"p"},"\u7cd6"),"\uff0c ",(0,o.kt)("strong",{parentName:"p"},"\u9ec4\u6cb9")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"\u9762\u7c89"),"\uff09\u6211\u4eec\u5df2\u7ecf\u77e5\u9053\u5982\u4f55\u83b7\u5f97\u3002 \u6700\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u914d\u65b9\uff0c \uff0c\u5982\u4f55\u70e4\u51fa\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"\u997c\u5e72"),"\u3002"),(0,o.kt)(s.Z,{chart:"\ngraph BT\n    id1(Cookie) --\x3e id2(Pastry)\n    id2 --\x3e \u9ec4\u6cb9\n    id2 --\x3e \u9762\u7c89\n    id2 --\x3e \u7cd6\n",mdxType:"Mermaid"}),(0,o.kt)("p",null,"\u73b0\u5728\u662f\u70d8\u70e4\u65f6\u95f4! \u53ea\u8981\u7528\u6240\u6709\u8fd9\u4e9b\u914d\u65b9\u521b\u5efa ",(0,o.kt)("strong",{parentName:"p"},"Injector")," \uff0c\u5e76\u8981\u6c42\u5b83\u63d0\u4f9b\u4f60\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Cookie")," \u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_1",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_1"},'public void transformBindingSnippet() {\n  Module cookbook = ModuleBuilder.create()\n      .bind(Sugar.class).to(Sugar::new)\n      .bind(Butter.class).to(Butter::new)\n      .bind(Flour.class).to(() -> new Flour("GoodFlour", 100.0f))\n      .bind(Pastry.class).to(Pastry::new, Sugar.class, Butter.class, Flour.class)\n      .bind(Cookie.class).to(Cookie::new, Pastry.class)\n      .transform(Object.class, (bindings, scope, key, binding) ->\n          binding.onInstance(x -> System.out.println(Instant.now() + " -> " + key)))\n      .build();\n\n  Injector injector = Injector.of(cookbook);\n  assertEquals("GoodFlour", injector.getInstance(Cookie.class).getPastry().getFlour().getName());\n}\n')),(0,o.kt)("h3",{id:"\u4f7f\u7528modulebuilder\u8fdb\u884c\u7ed1\u5b9a"},"\u4f7f\u7528ModuleBuilder\u8fdb\u884c\u7ed1\u5b9a"),(0,o.kt)("p",null,"\u8fd9\u4e00\u6b21\uff0c\u6211\u4eec\u5c06\u7528\u7b80\u5355\u7684DSL\u70e4\u5236\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"\u997c\u5e72"),"\u3002 \u6211\u4eec\u5c06 ",(0,o.kt)("em",{parentName:"p"},"\u6346\u7ed1")," \u6211\u4eec\u7684\u914d\u65b9 ",(0,o.kt)("strong",{parentName:"p"},"\u7cd6"),", ",(0,o.kt)("strong",{parentName:"p"},"\u9ec4\u6cb9")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"\u9762\u7c89")," \u5728\u201ccookbook\u201d ",(0,o.kt)("em",{parentName:"p"},"\u6a21\u5757"),"\n\u4e0d\u8981\u76f4\u63a5\u521b\u5efa\u7ed1\u5b9a\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u5730\u56fe\u4e0a\u3002 \u6211\u4eec\u53ea\u5728 ",(0,o.kt)("em",{parentName:"p"},"\u7ed1\u5b9a\u5728\u6211\u4eec\u7684\u6a21\u5757\u4e2d\u7684")," \u914d\u65b9\u548c \u7136\u540e\u5c06\u5176\u4ea4\u7ed9 ",(0,o.kt)("em",{parentName:"p"},"\u6ce8\u5165\u5668"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_2",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_2"},'public void moduleBindSnippet() {\n  Module module = ModuleBuilder.create()\n      .bind(Sugar.class).to(() -> new Sugar("WhiteSugar", 10.0f))\n      .bind(Butter.class).to(() -> new Butter("PerfectButter", 20.0f))\n      .bind(Flour.class).to(() -> new Flour("GoodFlour", 100.0f))\n      .bind(Pastry.class).to(Pastry::new, Sugar.class, Butter.class, Flour.class)\n      .bind(Cookie.class).to(Cookie::new, Pastry.class)\n      .build();\n\n  Injector injector = Injector.of(module);\n  assertEquals("PerfectButter", injector.getInstance(Cookie.class).getPastry().getButter().getName());\n}\n')),(0,o.kt)("h3",{id:"\u4f7f\u7528-provides\u8fdb\u884c\u7ed1\u5b9a"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"@Provides\u8fdb\u884c\u7ed1\u5b9a")),(0,o.kt)("p",null,"\u662f\u65f6\u5019\u8fdb\u884c\u771f\u6b63\u7684 ",(0,o.kt)("strong",{parentName:"p"},"\u997c\u5e72")," \u4e1a\u52a1\u4e86\u3002 \u6211\u4eec\u5c06\u4f7f\u7528\u58f0\u660e\u5f0fDSL\uff0c\u800c\u4e0d\u662f\u663e\u5f0f\u5730\u8fdb\u884c\u7ed1\u5b9a\u3002\n\u50cf\u524d\u9762\u7684\u4f8b\u5b50\u4e00\u6837\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u70f9\u996a\u6a21\u5757\uff0c\u4f46\u8fd9\u4e00\u6b21\uff0c\u6240\u6709\u6210\u5206\u7684\u7ed1\u5b9a\u5c06\u4ece ",(0,o.kt)("em",{parentName:"p"},"\u63d0\u4f9b\u8005\u65b9\u6cd5"),"\uff0c\u81ea\u52a8\u521b\u5efa \u3002 \u8fd9\u4e9b\u65b9\u6cd5\u88ab\u6807\u8bb0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"@Provides")," \u6ce8\u89e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_3",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_3"},'public void provideAnnotationSnippet() {\n  Module cookbook = new AbstractModule() {\n    @Provides\n    Sugar sugar() { return new Sugar("WhiteSugar", 10.f); }\n\n    @Provides\n    Butter butter() { return new Butter("PerfectButter", 20.0f); }\n\n    @Provides\n    Flour flour() { return new Flour("GoodFlour", 100.0f); }\n\n    @Provides\n    Pastry pastry(Sugar sugar, Butter butter, Flour flour) {\n      return new Pastry(sugar, butter, flour);\n    }\n\n    @Provides\n    Cookie cookie(Pastry pastry) {\n      return new Cookie(pastry);\n    }\n  };\n\n  Injector injector = Injector.of(cookbook);\n  assertEquals("PerfectButter", injector.getInstance(Cookie.class).getPastry().getButter().getName());\n}\n')),(0,o.kt)("h3",{id:"\u4f7f\u7528\u5b9e\u4f8b\u6216\u7c7b\u626b\u63cf\u8fdb\u884c\u7ed1\u5b9a"},"\u4f7f\u7528\u5b9e\u4f8b\u6216\u7c7b\u626b\u63cf\u8fdb\u884c\u7ed1\u5b9a"),(0,o.kt)("p",null,"\u6709\u65f6\u4f1a\u53d1\u751f\u8fd9\u6837\u7684\u60c5\u51b5\uff1a\u4f60\u51c6\u5907\u4e86\u4e00\u4e2a\u6ce8\u5165\u65b9\u6848\uff0c\u4f46\u8fd9\u4e2a\u65b9\u6848\u4e0d\u662f\u4e00\u4e2a\u6a21\u5757\u3002 \u4f46\u662f\u6709\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"scan()")," \u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5728DI\u5b9e\u4f53\u548c\u4f60\u7684\u65b9\u6848\u4e4b\u95f4\u5efa\u7acb\u8d77\u8054\u7cfb\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_4",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_4"},'public void scanObjectSnippet() {\n  Module cookbook = ModuleBuilder.create()\n      .scan(new Object() {\n        @Provides\n        Sugar sugar() { return new Sugar("WhiteSugar", 10.f); }\n\n        @Provides\n        Butter butter() { return new Butter("PerfectButter", 20.0f); }\n\n        @Provides\n        Flour flour() { return new Flour("GoodFlour", 100.0f); }\n\n        @Provides\n        Pastry pastry(Sugar sugar, Butter butter, Flour flour) {\n          return new Pastry(sugar, butter, flour);\n        }\n\n        @Provides\n        Cookie cookie(Pastry pastry) {\n          return new Cookie(pastry);\n        }\n      })\n      .build();\n\n  Injector injector = Injector.of(cookbook);\n  assertEquals("PerfectButter", injector.getInstance(Cookie.class).getPastry().getButter().getName());\n}\n')),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u73ed\u7ea7\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b9\u6848\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u4f7f\u7528\u5b83\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_5",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_5"},'public void scanClassSnippet() {\n  Module cookbook = ModuleBuilder.create().scan(InjectsDefinition.class).build();\n\n  Injector injector = Injector.of(cookbook);\n  assertEquals("PerfectButter", injector.getInstance(Cookie.class).getPastry().getButter().getName());\n}\n')),(0,o.kt)("h3",{id:"\u4f7f\u7528-inject\u8fdb\u884c\u81ea\u52a8\u7ed1\u5b9a"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"@Inject\u8fdb\u884c\u81ea\u52a8\u7ed1\u5b9a")),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u521b\u5efa\u6211\u4eec\u7684POJO\u65f6\uff0c\u6211\u4eec\u5df2\u7ecf\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject")," \u6ce8\u91ca\u6807\u8bb0\u4e86\u5b83\u4eec\u7684\u6784\u9020\u51fd\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_8",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_8"},'static class Sugar {\n  private final String name;\n  private final float weight;\n\n  @Inject\n  public Sugar() {\n    this.name = "WhiteSugar";\n    this.weight = 10.f;\n  }\n')),(0,o.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u7ed1\u5b9a\u4f9d\u8d56\u4e8e\u4e00\u4e2a\u6ca1\u6709\u5df2\u77e5\u7ed1\u5b9a\u7684\u7c7b\uff0c ",(0,o.kt)("em",{parentName:"p"},"injector")," \u5c06\u5c1d\u8bd5\u4e3a\u5b83\u81ea\u52a8\u751f\u6210\u7ed1\u5b9a\u3002 \u5b83\u5c06\u5728\u5176\u6784\u9020\u51fd\u6570\u3001\u9759\u6001\u5de5\u5382\u65b9\u6cd5\u6216\u7c7b\u672c\u8eab\u4e0a\u641c\u7d22 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject")," \u6ce8\u89e3\uff08\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b \uff0c\u4f7f\u7528\u9ed8\u8ba4\u6784\u9020\u51fd\u6570\uff09\uff0c\u5e76\u5728\u751f\u6210\u7684\u7ed1\u5b9a\u4e2d\u4f7f\u7528\u5b83\u4eec\u4f5c\u4e3a\u5de5\u5382\u3002\n\u7531\u4e8e\u6ca1\u6709\u4efb\u4f55\u4e1c\u897f\u4f9d\u8d56\u4e8e ",(0,o.kt)("strong",{parentName:"p"},"Cookie")," \u7ed1\u5b9a\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6839\u672c\u4e0d\u4f1a\u751f\u6210\u4efb\u4f55\u7ed1\u5b9a\u3002 \u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u4e00\u4e2a\u666e\u901a\u7684 ",(0,o.kt)("em",{parentName:"p"},"\u7ed1\u5b9a")," \u6765\u544a\u8bc9\u6ce8\u5165\u5668\uff0c\u6211\u4eec\u5e0c\u671b\u8fd9\u4e2a\u7ed1\u5b9a\u5b58\u5728\u3002 \u56e0\u6b64\uff0c\u5b83\u6240\u4f9d\u8d56\u7684\u6574\u4e2a\u7ed1\u5b9a\u6811\u5c06\u88ab\u751f\u6210\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_6",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_6"},'public void injectAnnotationSnippet() {\n  Module cookbook = ModuleBuilder.create().bind(Cookie.class).build();\n\n  Injector injector = Injector.of(cookbook);\n  assertEquals("WhiteSugar", injector.getInstance(Cookie.class).getPastry().getSugar().getName());\n}\n')),(0,o.kt)("h3",{id:"\u4f7f\u7528-named-\u6ce8\u91ca"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"@Named")," \u6ce8\u91ca\u3002"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u8d76\u65f6\u9ae6\uff0c\u70e4\u4e00\u5757\u65e0\u7cd6\u997c\u5e72\u3002 \u4e3a\u4e86\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u9664\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Provides")," \u6ce8\u89e3\u4e4b\u5916\uff0c\u6211\u4eec\u8fd8\u5c06\u4f7f\u7528 ",(0,o.kt)(c.Z,{text:"@Named",url:"/core-inject/src/main/java/io/activej/inject/annotation/Named.java",mdxType:"Githublink"})," \u6ce8\u89e3\uff0c\u5e76\u63d0\u4f9b\u4e24\u4e2a\u4e0d\u540c\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Sugar"),"\uff0c ",(0,o.kt)("strong",{parentName:"p"},"Pastry")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"Cookie")," \u5de5\u5382\u51fd\u6570\u3002 \u8fd9\u79cd\u65b9\u6cd5\u5141\u8bb8\u4f7f\u7528\u540c\u4e00\u7c7b\u522b\u7684\u4e0d\u540c\u5b9e\u4f8b\u3002 \u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u544a\u8bc9\u6211\u4eec\u7684 ",(0,o.kt)("em",{parentName:"p"},"\u6ce8\u5c04\u5668"),"\uff0c\u6211\u4eec\u9700\u8981\u54ea\u79cd\u997c\u5e72--\u666e\u901a\u7684\u6216\u65e0\u7cd6\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_7",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_7"},'public void namedAnnotationSnippet() {\n  Module cookbook = new AbstractModule() {\n    @Provides\n    @Named("zerosugar")\n    Sugar sugar1() { return new Sugar("SugarFree", 0.f); }\n\n    @Provides\n    @Named("normal")\n    Sugar sugar2() { return new Sugar("WhiteSugar", 10.f); }\n\n    @Provides\n    Butter butter() { return new Butter("PerfectButter", 20.f); }\n\n    @Provides\n    Flour flour() { return new Flour("GoodFlour", 100.f); }\n\n    @Provides\n    @Named("normal")\n    Pastry pastry1(@Named("normal") Sugar sugar, Butter butter, Flour flour) {\n      return new Pastry(sugar, butter, flour);\n    }\n\n    @Provides\n    @Named("zerosugar")\n    Pastry pastry2(@Named("zerosugar") Sugar sugar, Butter butter, Flour flour) {\n      return new Pastry(sugar, butter, flour);\n    }\n\n    @Provides\n    @Named("normal")\n    Cookie cookie1(@Named("normal") Pastry pastry) {\n      return new Cookie(pastry);\n    }\n\n    @Provides\n    @Named("zerosugar")\n    Cookie cookie2(@Named("zerosugar") Pastry pastry) { return new Cookie(pastry); }\n  };\n\n  Injector injector = Injector.of(cookbook);\n\n  float normalWeight = injector.getInstance(Key.of(Cookie.class, "normal"))\n      .getPastry().getSugar().getWeight();\n  float zerosugarWeight = injector.getInstance(Key.of(Cookie.class, "zerosugar"))\n      .getPastry().getSugar().getWeight();\n\n  assertEquals(10.f, normalWeight);\n  assertEquals(0.f, zerosugarWeight);\n}\n')),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)(c.Z,{text:"ModuleBuilder",url:"/core-inject/src/main/java/io/activej/inject/module/ModuleBuilder.java",mdxType:"Githublink"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_10",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_10"},'public void moduleBuilderWithQualifiedBindsSnippet() {\n  Module cookbook = ModuleBuilder.create()\n      .bind(Key.of(Sugar.class, "zerosugar")).to(() -> new Sugar("SugarFree", 0.f))\n      .bind(Key.of(Sugar.class, "normal")).to(() -> new Sugar("WhiteSugar", 10.f))\n      .bind(Key.of(Pastry.class, "zerosugar")).to(Pastry::new, Key.of(Sugar.class).qualified("zerosugar"), Key.of(Butter.class), Key.of(Flour.class))\n      .bind(Key.of(Pastry.class, "normal")).to(Pastry::new, Key.of(Sugar.class).qualified("normal"), Key.of(Butter.class), Key.of(Flour.class))\n      .bind(Key.of(Cookie.class, "zerosugar")).to(Cookie::new, Key.of(Pastry.class).qualified("zerosugar"))\n      .bind(Key.of(Cookie.class, "normal")).to(Cookie::new, Key.of(Pastry.class).qualified("normal"))\n      .build();\n\n  Injector injector = Injector.of(cookbook);\n\n  float normalWeight = injector.getInstance(Key.of(Cookie.class, "normal"))\n      .getPastry().getSugar().getWeight();\n  float zerosugarWeight = injector.getInstance(Key.of(Cookie.class, "zerosugar"))\n      .getPastry().getSugar().getWeight();\n\n  assertEquals(10.f, normalWeight);\n  assertEquals(0.f, zerosugarWeight);\n}\n')),(0,o.kt)("h3",{id:"\u4f7f\u7528\u4f5c\u7528\u57df\u7684\u975e\u5355\u4f53\u5b9e\u4f8b"},"\u4f7f\u7528\u4f5c\u7528\u57df\u7684\u975e\u5355\u4f53\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u6211\u4eec\u7684\u997c\u5e72\u539f\u6765\u662f\u5982\u6b64\u7f8e\u5473\uff0c\u5f88\u591a\u4eba\u90fd\u60f3\u5c1d\u5c1d\u3002 \u7136\u800c\uff0c\u6709\u4e00\u4e2a \u7684\u95ee\u9898\uff0cActiveJ Inject\u9ed8\u8ba4\u4f1a\u4f7f\u5b9e\u4f8b\u6210\u4e3a\u5355\u5b50\u3002 \u7136\u800c\uff0c\u6211\u4eec\u4e0d\u80fd\u5411\u6211\u4eec\u6240\u6709\u7684 \u5ba2\u6237\u51fa\u552e\u540c\u4e00\u79cd\u997c\u5e72\u3002\n\u5e78\u8fd0\u7684\u662f\uff0c\u6709\u4e00\u4e2a\u89e3\u51b3\u65b9\u6848\uff1a\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 ",(0,o.kt)(c.Z,{text:"@ScopeAnnotation",url:"/core-inject/src/main/java/io/activej/inject/annotation/ScopeAnnotation.java",mdxType:"Githublink"})," ",(0,o.kt)("inlineCode",{parentName:"p"},"@OrderScope")," \u6765\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"ORDER_SCOPE")," \u8303\u56f4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/OrderScope.java tag=EXAMPLE",url:"/core-inject/src/test/java/io/activej/inject/OrderScope.java",tag:"EXAMPLE"},"@ScopeAnnotation(threadsafe = false)\n@Target({ElementType.METHOD})\n@Retention(RUNTIME)\npublic @interface OrderScope {\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_9",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_9"},"public static final Scope ORDER_SCOPE = Scope.of(OrderScope.class);\n")),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u7684\u98df\u8c31\u5c06\u770b\u8d77\u6765\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_11",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_11"},"Module cookbook = ModuleBuilder.create()\n    .bind(Kitchen.class).to(Kitchen::new)\n    .bind(Sugar.class).to(Sugar::new).in(OrderScope.class)\n    .bind(Butter.class).to(Butter::new).in(OrderScope.class)\n    .bind(Flour.class).to(Flour::new).in(OrderScope.class)\n    .bind(Pastry.class).to(Pastry::new, Sugar.class, Butter.class, Flour.class).in(OrderScope.class)\n    .bind(Cookie.class).to(Cookie::new, Pastry.class).in(OrderScope.class)\n    .build();\n")),(0,o.kt)("p",null,"\u8fd9\u6837\u4e00\u6765\uff0c\u53ea\u6709\u53a8\u623f\u4f1a\u4fdd\u6301\u5355\u5b50\u3002"),(0,o.kt)(s.Z,{style:{margin:"0 auto"},chart:"\ngraph BT\n    subgraph Root Scope\n    Kitchen\n    subgraph N\n    subgraph Order Scope\n    Sugar--\x3eid1(Pastry)\n    Flour--\x3eid1\n    Butter--\x3eid1\n    id1--\x3eCookie\n    end\n    end\n    end\n",mdxType:"Mermaid"}),(0,o.kt)("p",null,"\u6211\u4eec\u4ece\u5ba2\u6237\u90a3\u91cc\u6536\u5230\u4e8610\u4e2a\u8ba2\u5355\uff0c\u6240\u4ee5\u73b0\u5728\u6211\u4eec\u9700\u898110\u4e2a\u997c\u5e72\u7684\u5b9e\u4f8b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u6211\u4eec\u6ce8\u5165\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"li"},"Kitchen\u7684\u5b9e\u4f8b"),"\u3002 \u73b0\u5728\u8fd9\u4e2a\u5b9e\u4f8b\u88ab\u5b58\u50a8\u5728\u6839\u4f5c\u7528\u57df\u6ce8\u5165\u5668\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u521b\u5efa10\u4e2a\u5b50\u6ce8\u5c04\u5668\uff0c\u5b83\u4eec\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"li"},"ORDER_SCOPE"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5b50\u6ce8\u5165\u5668\u53ea\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"li"},"Cookie")," \u7684\u5b9e\u4f8b\uff0c\u5e76\u5f15\u7528\u5b83\u4eec\u7684\u7236\u6839\u4f5c\u7528\u57df\u7684\u5355\u4e2a ",(0,o.kt)("strong",{parentName:"li"},"Kitchen")," \u5b9e\u4f8b\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_12",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_12"},"Injector injector = Injector.of(cookbook);\nKitchen kitchen = injector.getInstance(Kitchen.class);\nSet<Cookie> cookies = new HashSet<>();\nfor (int i = 0; i < 10; ++i) {\n  Injector subinjector = injector.enterScope(ORDER_SCOPE);\n\n  assertSame(subinjector.getInstance(Kitchen.class), kitchen);\n  if (i > 0) assertFalse(cookies.contains(subinjector.getInstance(Cookie.class)));\n\n  cookies.add(subinjector.getInstance(Cookie.class));\n}\nassertEquals(10, cookies.size());\n")),(0,o.kt)("h3",{id:"\u53d8\u9769\u7684\u675f\u7f1a"},"\u53d8\u9769\u7684\u675f\u7f1a"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u914d\u7f6e\u4f60\u7684\u6ce8\u5c04\u5668\u5982\u4f55\u83b7\u5f97\u5b9e\u4f8b\u7684\u8fc7\u7a0b\uff0c\u5e76\u8f6c\u6362\u8fd9\u4e2a\u8fc7\u7a0b\u3002 \u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5 \uff0c\u901a\u8fc7\u8986\u76d6 ",(0,o.kt)("em",{parentName:"p"},"configure")," \u65b9\u6cd5\uff0c\u7b80\u5355\u5730\u6dfb\u52a0\u4e00\u4e9b\u65e5\u5fd7\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java tag=REGION_13",url:"/core-inject/src/test/java/io/activej/inject/DIFollowUpTest.java",tag:"REGION_13"},'public void transformBindingSnippet() {\n  Module cookbook = ModuleBuilder.create()\n      .bind(Sugar.class).to(Sugar::new)\n      .bind(Butter.class).to(Butter::new)\n      .bind(Flour.class).to(() -> new Flour("GoodFlour", 100.0f))\n      .bind(Pastry.class).to(Pastry::new, Sugar.class, Butter.class, Flour.class)\n      .bind(Cookie.class).to(Cookie::new, Pastry.class)\n      .transform(Object.class, (bindings, scope, key, binding) ->\n          binding.onInstance(x -> System.out.println(Instant.now() + " -> " + key)))\n      .build();\n\n  Injector injector = Injector.of(cookbook);\n  assertEquals("GoodFlour", injector.getInstance(Cookie.class).getPastry().getFlour().getName());\n}\n')),(0,o.kt)("p",null,"\u73b0\u5728\u4f60\u5c06\u6536\u5230\u4e00\u4e2a\u8f93\u51fa\uff0c\u5b83\u5c06\u4ee3\u8868\u4e00\u4e2a\u5b9e\u4f8b\u88ab\u521b\u5efa\u7684\u65f6\u95f4\u548c\u5b9e\u4f8b\u672c\u8eab\u3002"))}k.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=11748}}]);