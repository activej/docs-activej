(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[2180],{3149:function(e,n,a){"use strict";var t=a(67294),r=a(39962),i=a(41106),o=a.n(i),l=a(15835);a.n(l)().interpolate=/{{([\s\S]+?)}}/g,n.Z=function(e){var n=e.href,a=e.children,i=e.target,l=void 0===i?"_blank":i,s=(0,r.Z)().siteConfig,c=o()(n);return t.createElement("a",{href:c(s.customFields),target:l},a)}},77618:function(e,n,a){"use strict";var t=a(67294),r=a(39962);n.Z=function(e){var n=e.url,a=e.text,i=e.isInline,o=void 0===i||i,l=e.children,s=(0,r.Z)().siteConfig,c=n.startsWith("/examples")?s.customFields.githubExamplesBranch:s.customFields.githubBranch;return t.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+c+n,target:"_blank"},a||l)}},44699:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return g}});var t=a(83117),r=a(80102),i=(a(67294),a(3905)),o=a(77618),l=a(3149),s=["components"],c={sidebar_label:"Transforming bindings"},p="Binding transformations",d={unversionedId:"inject/binding-transformation",id:"inject/binding-transformation",isDocsHomePage:!1,title:"Binding transformations",description:"In this tutorial, we will transform bindings declared in a separate standalone module. We will intercept a dependency exported in another module and",source:"@site/docs/inject/binding-transformation.mdx",sourceDirName:"inject",slug:"/inject/binding-transformation",permalink:"/zh/inject/binding-transformation",tags:[],version:"current",frontMatter:{sidebar_label:"Transforming bindings"},sidebar:"docs",previous:{title:"Generating bindings",permalink:"/zh/inject/binding-generation"},next:{title:"Optional dependencies",permalink:"/zh/inject/optional-dependencies"}},u=[{value:"Example Launcher",id:"example-launcher",children:[],level:2},{value:"Person module",id:"person-module",children:[],level:2},{value:"Person transformation module",id:"person-transformation-module",children:[],level:2},{value:"Launching the example",id:"launching-the-example",children:[],level:2}],m={toc:u};function g(e){var n=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"binding-transformations"},"Binding transformations"),(0,i.kt)("p",null,"In this tutorial, we will transform bindings declared in a separate standalone module. We will intercept a dependency exported in another module and\ntransform it so that it adds some basic logging before method execution and after method finishes."),(0,i.kt)("h2",{id:"example-launcher"},"Example Launcher"),(0,i.kt)("p",null,"First, we will create a new Launcher by extending the ",(0,i.kt)(o.Z,{url:"/launcher/src/main/java/io/activej/launcher/Launcher.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"Launcher"))," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class BindingTransformationExample extends Launcher {\n    ...\n}\n")),(0,i.kt)("p",null,"Then let's define the ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," interface with a single method ",(0,i.kt)("inlineCode",{parentName:"p"},"void greet()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_5",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_5"},"public interface Person {\n  void greet();\n}\n")),(0,i.kt)("p",null,"And inject an instance of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," class into the application launcher by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"person")," field annotated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inject")," annotation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_1"},"@Inject\nPerson person;\n")),(0,i.kt)("p",null,"Our application launcher overrides ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher#run")," method just to call ",(0,i.kt)("inlineCode",{parentName:"p"},"person.greet()")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_3",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_3"},"@Override\nprotected void run() {\n  person.greet();\n}\n")),(0,i.kt)("h2",{id:"person-module"},"Person module"),(0,i.kt)("p",null,"An application launcher would use 2 modules to inject a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person person")," dependency."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_2"},"@Override\nprotected Module getModule() {\n  return Modules.combine(\n      new PersonModule(),\n      new PersonTransformModule()\n  );\n}\n")),(0,i.kt)("p",null,"The first one (",(0,i.kt)("inlineCode",{parentName:"p"},"PersonModule"),") is a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractModule")," that provides a single dependency for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_6",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_6"},'public static class PersonModule extends AbstractModule {\n  @Provides\n  Person greeter() {\n    return () -> System.out.println("Hello!");\n  }\n}\n')),(0,i.kt)("p",null,"A provided ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," simply prints ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello!"')," when ",(0,i.kt)("inlineCode",{parentName:"p"},"greet()")," method is called."),(0,i.kt)("h2",{id:"person-transformation-module"},"Person transformation module"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PersonTransformModule")," is a module that intercepts the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," class and adds logging to the ",(0,i.kt)("inlineCode",{parentName:"p"},"greet()")," method calls."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_7",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_7"},'public static class PersonTransformModule extends AbstractModule {\n  @Override\n  protected void configure() {\n    transform(Person.class, (bindings, scope, key, binding) ->\n        binding.mapInstance(person ->\n            () -> {\n              System.out.println("Start of greeting");\n              person.greet();\n              System.out.println("End of greeting");\n            }\n        ));\n  }\n}\n')),(0,i.kt)("p",null,"The module does not export any dependency using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Provides")," annotation. Instead it overrides ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractModule#configure")," method only to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"transform(...)")," method.\nLet's take a closer look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"transform(...)")," call. It takes 2 arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Class")," - the class of a binding to be transformed (it can be changed to a ",(0,i.kt)(o.Z,{url:"/core-inject/src/main/java/io/activej/inject/KeyPattern.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"KeyPattern")),"\nto transform all bindings matched by a key pattern)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BindingTransformer<T>")," - a transformer which is itself a functional interfaces that accepts bindings, scope, current key and binding\nand returns a new binding (or the same binding if no transformation occurred)")),(0,i.kt)("p",null,"We call ",(0,i.kt)("inlineCode",{parentName:"p"},"Binding#mapInstance")," method on the received binding and specify how the ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," instance should be transformed.\nHere we return a new instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," class, which adds some ",(0,i.kt)("inlineCode",{parentName:"p"},"System.out")," logs before and after calling ",(0,i.kt)("inlineCode",{parentName:"p"},"person.greet()")," on an original person instance."),(0,i.kt)("h2",{id:"launching-the-example"},"Launching the example"),(0,i.kt)("p",null,"To launch the example, we need to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," method that simply creates a new instance of our application launcher and passes the application arguments to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher#launch")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_4",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_4"},"public static void main(String[] args) throws Exception {\n  BindingTransformationExample launcher = new BindingTransformationExample();\n  launcher.launch(args);\n}\n")),(0,i.kt)("p",null,"When launching the application it should print to ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Start of greeting\nHello!\nEnd of greeting\n")),(0,i.kt)("p",null,"You can find example sources on ",(0,i.kt)(l.Z,{href:"https://github.com/activej/activej/{{githubExamplesBranch}}/examples/core/inject-2/src/main/java/BindingTransformationExample.java",mdxType:"DynamicLink"},"Github")))}g.isMDXComponent=!0},18674:function(e){e.exports=function(e){return function(n){return null==e?void 0:e[n]}}},24626:function(e,n,a){var t=a(77813),r=Object.prototype,i=r.hasOwnProperty;e.exports=function(e,n,a,o){return void 0===e||t(e,r[a])&&!i.call(o,a)?n:e}},89464:function(e,n,a){var t=a(18674)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});e.exports=t},31994:function(e){var n={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};e.exports=function(e){return"\\"+n[e]}},79865:function(e){e.exports=/<%-([\s\S]+?)%>/g},76051:function(e){e.exports=/<%([\s\S]+?)%>/g},5712:function(e){e.exports=/<%=([\s\S]+?)%>/g},29018:function(e,n,a){var t=a(98363),r=a(21463),i=a(81704),o=r((function(e,n,a,r){t(n,i(n),e,r)}));e.exports=o},9591:function(e,n,a){var t=a(96874),r=a(5976),i=a(64647),o=r((function(e,n){try{return t(e,void 0,n)}catch(a){return i(a)?a:new Error(a)}}));e.exports=o},7187:function(e,n,a){var t=a(89464),r=a(79833),i=/[&<>"']/g,o=RegExp(i.source);e.exports=function(e){return(e=r(e))&&o.test(e)?e.replace(i,t):e}},64647:function(e,n,a){var t=a(44239),r=a(37005),i=a(68630);e.exports=function(e){if(!r(e))return!1;var n=t(e);return"[object Error]"==n||"[object DOMException]"==n||"string"==typeof e.message&&"string"==typeof e.name&&!i(e)}},41106:function(e,n,a){var t=a(29018),r=a(9591),i=a(47415),o=a(24626),l=a(31994),s=a(64647),c=a(16612),p=a(3674),d=a(5712),u=a(15835),m=a(79833),g=/\b__p \+= '';/g,h=/\b(__p \+=) '' \+/g,f=/(__e\(.*?\)|\b__t\)) \+\n'';/g,v=/[()=,{}\[\]\/\s]/,k=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,j=/($^)/,x=/['\n\r\u2028\u2029\\]/g,b=Object.prototype.hasOwnProperty;e.exports=function(e,n,a){var N=u.imports._.templateSettings||u;a&&c(e,n,a)&&(n=void 0),e=m(e),n=t({},n,N,o);var _,E,y=t({},n.imports,N.imports,o),C=p(y),w=i(y,C),T=0,P=n.interpolate||j,B="__p += '",I=RegExp((n.escape||j).source+"|"+P.source+"|"+(P===d?k:j).source+"|"+(n.evaluate||j).source+"|$","g"),O=b.call(n,"sourceURL")?"//# sourceURL="+(n.sourceURL+"").replace(/\s/g," ")+"\n":"";e.replace(I,(function(n,a,t,r,i,o){return t||(t=r),B+=e.slice(T,o).replace(x,l),a&&(_=!0,B+="' +\n__e("+a+") +\n'"),i&&(E=!0,B+="';\n"+i+";\n__p += '"),t&&(B+="' +\n((__t = ("+t+")) == null ? '' : __t) +\n'"),T=o+n.length,n})),B+="';\n";var R=b.call(n,"variable")&&n.variable;if(R){if(v.test(R))throw new Error("Invalid `variable` option passed into `_.template`")}else B="with (obj) {\n"+B+"\n}\n";B=(E?B.replace(g,""):B).replace(h,"$1").replace(f,"$1;"),B="function("+(R||"obj")+") {\n"+(R?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(_?", __e = _.escape":"")+(E?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+B+"return __p\n}";var G=r((function(){return Function(C,O+"return "+B).apply(void 0,w)}));if(G.source=B,s(G))throw G;return G}},15835:function(e,n,a){var t=a(7187),r={escape:a(79865),evaluate:a(76051),interpolate:a(5712),variable:"",imports:{_:{escape:t}}};e.exports=r}}]);