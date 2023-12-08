(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[5220],{3149:function(e,t,n){"use strict";var r=n(67294),a=n(39962),i=n(41106),o=n.n(i),s=n(15835);n.n(s)().interpolate=/{{([\s\S]+?)}}/g,t.Z=function(e){var t=e.href,n=e.children,i=e.target,s=void 0===i?"_blank":i,l=(0,a.Z)().siteConfig,c=o()(t);return r.createElement("a",{href:c(l.customFields),target:s},n)}},77618:function(e,t,n){"use strict";var r=n(67294),a=n(39962);t.Z=function(e){var t=e.url,n=e.text,i=e.isInline,o=void 0===i||i,s=e.children,l=(0,a.Z)().siteConfig,c=t.startsWith("/examples")?l.customFields.githubExamplesBranch:l.customFields.githubBranch;return r.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:l.customFields.githubUrl+"/"+c+t,target:"_blank"},n||s)}},77815:function(e,t,n){"use strict";n(67294);var r=n(39962);t.Z=function(e){var t=e.name,n=(0,r.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},54662:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return g}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(77618),s=n(77815),l=n(3149),c=["components"],d={title:"ActiveJ Codegen Overview | Dynamic bytecode generator with minimal overhead",description:"ActiveJ Codegen is a dynamic bytecode generator with minimal overhead and convenient API",sidebar_label:"Overview",slug:"/codegen"},p="Overview",u={unversionedId:"codegen/overview",id:"codegen/overview",isDocsHomePage:!1,title:"ActiveJ Codegen Overview | Dynamic bytecode generator with minimal overhead",description:"ActiveJ Codegen is a dynamic bytecode generator with minimal overhead and convenient API",source:"@site/docs/codegen/overview.mdx",sourceDirName:"codegen",slug:"/codegen",permalink:"/codegen",tags:[],version:"current",frontMatter:{title:"ActiveJ Codegen Overview | Dynamic bytecode generator with minimal overhead",description:"ActiveJ Codegen is a dynamic bytecode generator with minimal overhead and convenient API",sidebar_label:"Overview",slug:"/codegen"},sidebar:"docs",previous:{title:"Benchmarks",permalink:"/inject/benchmarks"},next:{title:"Examples",permalink:"/codegen/examples"}},m=[{value:"Why ActiveJ Codegen?",id:"why-activej-codegen",children:[],level:2},{value:"Code generation",id:"code-generation",children:[],level:2},{value:"Add ActiveJ Codegen to your project",id:"add-activej-codegen-to-your-project",children:[],level:2}],v={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"ActiveJ Codegen is an efficient Java code generator with a streamlined and simple API. It is built on top of ObjectWeb ASM and has zero-overhead performance. ActiveJ Codegen is widely used in ",(0,i.kt)("a",{parentName:"p",href:"/serializer"},"ActiveJ Serializer"),", making it ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/activej/jvm-serializers"},"the fastest JVM-based serializer in the world"),").\nActiveJ Codegen is one of the ActiveJ technologies, but has minimal third-party dependencies and can be used as a stand-alone component."),(0,i.kt)("h2",{id:"why-activej-codegen"},"Why ActiveJ Codegen?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Utilizes ASM library for code generation and manipulation"),(0,i.kt)("li",{parentName:"ul"},"Provides a concise Expressions API that provides a Lisp-like DSL for describing new classes"),(0,i.kt)("li",{parentName:"ul"},"Supports caching of generated classes"),(0,i.kt)("li",{parentName:"ul"},"Suitable for dynamic class generation based on runtime parameters (e.g. query processing)"),(0,i.kt)("li",{parentName:"ul"},"Supports relational algebra operations for individual items: aggregate functions, predicates, ordering, group-by, etc."),(0,i.kt)("li",{parentName:"ul"},"Features automatic type inference"),(0,i.kt)("li",{parentName:"ul"},"Zero-overhead performance"),(0,i.kt)("li",{parentName:"ul"},"Built-in in-memory caching as well as the ability to use a persistent bytecode cache"),(0,i.kt)("li",{parentName:"ul"},"Support for Records (heterogeneous data containers)")),(0,i.kt)("h2",{id:"code-generation"},"Code generation"),(0,i.kt)("p",null,"Suppose we want to create a class that implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface Greeter {\n    void sayHello();\n}\n")),(0,i.kt)("p",null,'A generated class should simply output "Hello World" message when the ',(0,i.kt)("inlineCode",{parentName:"p"},"sayHello()")," method is called."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class WorldGreeter implements Greeter {\n    @Override\n    public void sayHello() {\n        System.out.println("Hello World");\n    }\n}\n')),(0,i.kt)("p",null,"To generate such a class programmatically we need use the ",(0,i.kt)(o.Z,{url:"/core-codegen/src/main/java/io/activej/codegen/ClassGenerator.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ClassGenerator"))," class\nto define how a class should be created. We also need to use the ",(0,i.kt)(o.Z,{url:"/core-codegen/src/main/java/io/activej/codegen/DefiningClassLoader.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"DefiningClassLoader")),"\nto actually define a new class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'DefiningClassLoader classLoader = DefiningClassLoader.create();\n\nClass<Greeter> greeterClass = ClassGenerator.builder(Greeter.class)\n    .withMethod("sayHello",\n        call(staticField(System.class, "out"), "println", value("Hello world")))\n    .build()\n    .generateClass(classLoader);\n')),(0,i.kt)("p",null,"Notice the ",(0,i.kt)("inlineCode",{parentName:"p"},'call(staticField(System.class, "out"), "println", value("Hello world"))')," expression."),(0,i.kt)("p",null,"This is how Expressions DSL looks like.\nFirst, we access static field ",(0,i.kt)("inlineCode",{parentName:"p"},"out")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"System")," class. Then we call ",(0,i.kt)("inlineCode",{parentName:"p"},"println()")," method on it, passing value ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello world"')," as an argument.\nThis is equivalent to a ",(0,i.kt)("inlineCode",{parentName:"p"},'System.out.println("Hello world)')),(0,i.kt)("p",null,"When a new instance of this class is created and the ",(0,i.kt)("inlineCode",{parentName:"p"},"sayHello()")," method is called, the output is ",(0,i.kt)("em",{parentName:"p"},'"Hello world"')," as expected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Greeter greeter = greeterClass.getDeclaredConstructor().newInstance();\ngreeter.sayHello(); // prints "Hello world" to stdout\n')),(0,i.kt)("p",null,"This is merely a hint of what ActiveJ Codegen is capable of. For more information, please refer to examples or internal documentation."),(0,i.kt)("h2",{id:"add-activej-codegen-to-your-project"},"Add ActiveJ Codegen to your project"),(0,i.kt)("p",null,"You can add ActiveJ Codegen to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ Codegen ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(s.Z,{name:"currentVersion",mdxType:"Variable"}))," (see on ",(0,i.kt)(l.Z,{href:"https://github.com/activej/activej/tree/{{currentVersion}}/core-codegen",mdxType:"DynamicLink"},"Github")," or ",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-codegen"},"Maven"),")."))}g.isMDXComponent=!0},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},24626:function(e,t,n){var r=n(77813),a=Object.prototype,i=a.hasOwnProperty;e.exports=function(e,t,n,o){return void 0===e||r(e,a[n])&&!i.call(o,n)?t:e}},89464:function(e,t,n){var r=n(18674)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});e.exports=r},31994:function(e){var t={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};e.exports=function(e){return"\\"+t[e]}},79865:function(e){e.exports=/<%-([\s\S]+?)%>/g},76051:function(e){e.exports=/<%([\s\S]+?)%>/g},5712:function(e){e.exports=/<%=([\s\S]+?)%>/g},29018:function(e,t,n){var r=n(98363),a=n(21463),i=n(81704),o=a((function(e,t,n,a){r(t,i(t),e,a)}));e.exports=o},9591:function(e,t,n){var r=n(96874),a=n(5976),i=n(64647),o=a((function(e,t){try{return r(e,void 0,t)}catch(n){return i(n)?n:new Error(n)}}));e.exports=o},7187:function(e,t,n){var r=n(89464),a=n(79833),i=/[&<>"']/g,o=RegExp(i.source);e.exports=function(e){return(e=a(e))&&o.test(e)?e.replace(i,r):e}},64647:function(e,t,n){var r=n(44239),a=n(37005),i=n(68630);e.exports=function(e){if(!a(e))return!1;var t=r(e);return"[object Error]"==t||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!i(e)}},41106:function(e,t,n){var r=n(29018),a=n(9591),i=n(47415),o=n(24626),s=n(31994),l=n(64647),c=n(16612),d=n(3674),p=n(5712),u=n(15835),m=n(79833),v=/\b__p \+= '';/g,g=/\b(__p \+=) '' \+/g,h=/(__e\(.*?\)|\b__t\)) \+\n'';/g,f=/[()=,{}\[\]\/\s]/,k=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,y=/($^)/,b=/['\n\r\u2028\u2029\\]/g,w=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var C=u.imports._.templateSettings||u;n&&c(e,t,n)&&(t=void 0),e=m(e),t=r({},t,C,o);var j,_,x=r({},t.imports,C.imports,o),N=d(x),A=i(x,N),J=0,S=t.interpolate||y,D="__p += '",H=RegExp((t.escape||y).source+"|"+S.source+"|"+(S===p?k:y).source+"|"+(t.evaluate||y).source+"|$","g"),E=w.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/\s/g," ")+"\n":"";e.replace(H,(function(t,n,r,a,i,o){return r||(r=a),D+=e.slice(J,o).replace(b,s),n&&(j=!0,D+="' +\n__e("+n+") +\n'"),i&&(_=!0,D+="';\n"+i+";\n__p += '"),r&&(D+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),J=o+t.length,t})),D+="';\n";var L=w.call(t,"variable")&&t.variable;if(L){if(f.test(L))throw new Error("Invalid `variable` option passed into `_.template`")}else D="with (obj) {\n"+D+"\n}\n";D=(_?D.replace(v,""):D).replace(g,"$1").replace(h,"$1;"),D="function("+(L||"obj")+") {\n"+(L?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(j?", __e = _.escape":"")+(_?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+D+"return __p\n}";var O=a((function(){return Function(N,E+"return "+D).apply(void 0,A)}));if(O.source=D,l(O))throw O;return O}},15835:function(e,t,n){var r=n(7187),a={escape:n(79865),evaluate:n(76051),interpolate:n(5712),variable:"",imports:{_:{escape:r}}};e.exports=a}}]);