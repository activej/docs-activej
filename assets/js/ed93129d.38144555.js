"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[7477],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return u}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?t.createElement(g,l(l({ref:a},p),{},{components:n})):t.createElement(g,l({ref:a},p))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77618:function(e,a,n){var t=n(67294),r=n(39962);a.Z=function(e){var a=e.url,n=e.text,o=e.isInline,l=void 0===o||o,s=e.children,i=(0,r.Z)().siteConfig;return t.createElement("a",{style:l?{}:{display:"block",marginBottom:"16px"},href:i.customFields.githubUrl+"/"+i.customFields.githubBranch+a,target:"_blank"},n||s)}},77815:function(e,a,n){n(67294);var t=n(39962);a.Z=function(e){var a=e.name,n=(0,t.Z)().siteConfig;if(!a)throw new Error("Variable name is required");if(void 0===n.customFields[a])throw new Error("Variable "+a+" not exist");return n.customFields[a]}},66096:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return g}});var t=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(77618),s=n(77815),i=["components"],c={title:"ActiveJ Codegen Examples | Dynamic bytecode generator with minimal overhead",description:"ActiveJ Codegen is a dynamic bytecode generator with minimal overhead and convenient API",sidebar_label:"Examples",keywords:["bytecode","bytecode generator","runtime code generator","runtime query processing","java","java framework"]},p="Examples",m={unversionedId:"codegen/examples",id:"codegen/examples",isDocsHomePage:!1,title:"ActiveJ Codegen Examples | Dynamic bytecode generator with minimal overhead",description:"ActiveJ Codegen is a dynamic bytecode generator with minimal overhead and convenient API",source:"@site/docs/codegen/examples.mdx",sourceDirName:"codegen",slug:"/codegen/examples",permalink:"/codegen/examples",version:"current",frontMatter:{title:"ActiveJ Codegen Examples | Dynamic bytecode generator with minimal overhead",description:"ActiveJ Codegen is a dynamic bytecode generator with minimal overhead and convenient API",sidebar_label:"Examples",keywords:["bytecode","bytecode generator","runtime code generator","runtime query processing","java","java framework"]},sidebar:"docs",previous:{title:"Overview",permalink:"/codegen"},next:{title:"Overview",permalink:"/serializer"}},d=[{value:"Bytecode Expressions",id:"bytecode-expressions",children:[]},{value:"Dynamic Class Creation",id:"dynamic-class-creation",children:[]},{value:"Calculator example",id:"calculator-example",children:[]}],u={toc:d};function g(e){var a=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"examples"},"Examples"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,o.kt)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(s.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project. These examples are located at ",(0,o.kt)("inlineCode",{parentName:"p"},"activej/examples/core/codegen")))),(0,o.kt)("h2",{id:"bytecode-expressions"},"Bytecode Expressions"),(0,o.kt)("p",null,"Let's create a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"sayHello()"),' method that prints out "Hello world!". First, we\'ll define a simple ',(0,o.kt)("strong",{parentName:"p"},"Example"),"\ninterface that has a single ",(0,o.kt)("inlineCode",{parentName:"p"},"sayHello()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/CodegenExpressionsExample.java tag=REGION_3",url:"/examples/core/codegen/src/main/java/CodegenExpressionsExample.java",tag:"REGION_3"},"public interface Greeter {\n  void sayHello();\n}\n")),(0,o.kt)("p",null,"Now we can proceed to the description of ",(0,o.kt)("strong",{parentName:"p"},"Example")," subclass behaviour. For this purpose we will use ",(0,o.kt)(l.Z,{text:"ClassBuilder",url:"/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java",mdxType:"Githublink"}),"\nclass."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/CodegenExpressionsExample.java tag=REGION_1",url:"/examples/core/codegen/src/main/java/CodegenExpressionsExample.java",tag:"REGION_1"},'Class<Greeter> greeterClass = ClassBuilder\n    .create(DefiningClassLoader.create(Thread.currentThread().getContextClassLoader()), Greeter.class)\n    .withMethod("sayHello",\n        call(staticField(System.class, "out"), "println", value("Hello world")))\n    .build();\n')),(0,o.kt)("p",null,"To instantiate the described class, simply use ",(0,o.kt)("inlineCode",{parentName:"p"},"newInstance()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/CodegenExpressionsExample.java tag=REGION_2",url:"/examples/core/codegen/src/main/java/CodegenExpressionsExample.java",tag:"REGION_2"},"Greeter greeter = greeterClass.getDeclaredConstructor().newInstance();\ngreeter.sayHello();\n")),(0,o.kt)(l.Z,{text:"See full example on GitHub",url:"/examples/core/codegen/src/main/java/CodegenExpressionsExample.java",mdxType:"Githublink"}),(0,o.kt)("h2",{id:"dynamic-class-creation"},"Dynamic Class Creation"),(0,o.kt)("p",null,"In this example we will dynamically create a class that implements an interface. So let's first create a simple ",(0,o.kt)("strong",{parentName:"p"},"Person"),"\ninterface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/DynamicClassCreationExample.java tag=REGION_1",url:"/examples/core/codegen/src/main/java/DynamicClassCreationExample.java",tag:"REGION_1"},'@SuppressWarnings("unused")\npublic interface Person extends Comparable<Person> {\n  void setIdAndName(int id, String name);\n\n  int getId();\n\n  String getName();\n\n  int hashOfPojo(ExamplePojo personPojo);\n\n  int hash();\n\n  @Override\n  int compareTo(@NotNull Person o);\n\n  @Override\n  String toString();\n\n  @Override\n  boolean equals(Object obj);\n}\n')),(0,o.kt)("p",null,"Move on to constructing a class that implements ",(0,o.kt)("strong",{parentName:"p"},"Person")," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/DynamicClassCreationExample.java tag=REGION_2",url:"/examples/core/codegen/src/main/java/DynamicClassCreationExample.java",tag:"REGION_2"},'Class<Person> personClass = ClassBuilder.create(DefiningClassLoader.create(Thread.currentThread().getContextClassLoader()), Person.class)\n\n    // declare fields\n    .withField("id", int.class)\n    .withField("name", String.class)\n\n    // setter for both fields - a sequence of actions\n    .withMethod("setIdAndName", sequence(\n        set(property(self(), "id"), arg(0)),\n        set(property(self(), "name"), arg(1))))\n    .withMethod("getId", property(self(), "id"))\n    .withMethod("getName", property(self(), "name"))\n\n    // compareTo, equals, hashCode and toString methods implementations follow the standard convention\n    .withMethod("int compareTo(Person)", compareToImpl("id", "name"))\n    .withMethod("equals", equalsImpl("id", "name"))\n    .withMethod("hashOfPojo", hash(property(arg(0), "id"), property(arg(0), "name")))\n    .withMethod("hash", hash(property(self(), "id"), property(self(), "name")))\n    .withMethod("toString", ExpressionToString.create()\n        .withQuotes("{", "}", ", ")\n        .with("id: ", property(self(), "id"))\n        .with("name: ", property(self(), "name")))\n    .build();\n')),(0,o.kt)("p",null,"Now we can test our dynamically generated classes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/DynamicClassCreationExample.java tag=REGION_3",url:"/examples/core/codegen/src/main/java/DynamicClassCreationExample.java",tag:"REGION_3"},'// Instantiate two objects of dynamically defined class\nPerson jack = personClass.getDeclaredConstructor().newInstance();\nPerson martha = personClass.getDeclaredConstructor().newInstance();\n\njack.setIdAndName(5, "Jack");\nmartha.setIdAndName(jack.getId() * 2, "Martha");\n\nSystem.out.println("First person: " + jack);\nSystem.out.println("Second person: " + martha);\n\nSystem.out.println("jack.equals(martha) ? : " + jack.equals(martha));\n')),(0,o.kt)(l.Z,{text:"See full example on GitHub",url:"/examples/core/codegen/src/main/java/DynamicClassCreationExample.java",mdxType:"Githublink"}),(0,o.kt)("h2",{id:"calculator-example"},"Calculator example"),(0,o.kt)("p",null,"In this example we will create a calculator that parses an input equation string to an AST. Then, it generates an\noptimized class to calculate the expression."),(0,o.kt)("p",null,"  First, create a parser that returns an AST of the expression:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/calculator/CodegenCalculatorExample.java tag=REGION_1",url:"/examples/core/codegen/src/main/java/calculator/CodegenCalculatorExample.java",tag:"REGION_1"},'private static final Parser<Expression> EXPRESSION = new OperatorTable<Expression>()\n    .infixl(DELIMITERS.token("+").retn(Expressions::add), 10)\n    .infixl(DELIMITERS.token("-").retn(Expressions::sub), 10)\n    .infixl(DELIMITERS.token("*").retn(Expressions::mul), 20)\n    .infixl(DELIMITERS.token("/").retn(Expressions::div), 20)\n    .infixl(DELIMITERS.token("%").retn(Expressions::rem), 20)\n    .prefix(DELIMITERS.token("-").retn(Expressions::neg), 30)\n    .infixr(DELIMITERS.token("^").retn((left, right) -> Expressions.staticCall(Math.class, "pow", left, right)), 40)\n    .build(ATOM);\n')),(0,o.kt)("p",null,"Next, create a ",(0,o.kt)("strong",{parentName:"p"},"ClassBuilder")," that describes the class that will be generated. It will implement\n",(0,o.kt)("strong",{parentName:"p"},"DoubleUnaryOperator")," interface and will have an ",(0,o.kt)("em",{parentName:"p"},"applyAsDouble")," method."),(0,o.kt)("p",null,"  Let's create the appropriate builder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/calculator/CodegenCalculatorExample.java tag=REGION_2",url:"/examples/core/codegen/src/main/java/calculator/CodegenCalculatorExample.java",tag:"REGION_2"},'public static Class<DoubleUnaryOperator> compile(String expression) {\n  return ClassBuilder.create(DEFINING_CLASS_LOADER, DoubleUnaryOperator.class)\n      .withMethod("applyAsDouble", PARSER.parse(expression))\n      .build();\n}\n')),(0,o.kt)("p",null,"The method will have a ",(0,o.kt)("em",{parentName:"p"},"var1")," parameter for the unknown ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'private static final Parser<Expression> UNKNOWN = DELIMITERS.token("x").retn(Expressions.arg(0));\n')),(0,o.kt)("p",null,"As a result, ActiveJ Codegen will generate bytecode of the following class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public final class Class1 implements DoubleUnaryOperator {\n    public Class1() {\n    }\n\n    public double applyAsDouble(double var1) {\n        return (2.0D + 2.0D * 2.0D) * -var1 + 5.0D + 1024.0D / (100.0D + 58.0D) * 50.0D * 37.0D - 100.0D + 2.0D * Math.pow(var1, 2.0D) % 4.0D;\n    }\n}\n")),(0,o.kt)("p",null,"Now let's processes a manually written code and dynamically generated instance evaluation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/calculator/CodegenCalculatorExample.java tag=REGION_3",url:"/examples/core/codegen/src/main/java/calculator/CodegenCalculatorExample.java",tag:"REGION_3"},'public static void main(String[] args) throws Exception {\n  double x = -1;\n\n  // manual code, super fast\n  System.out.println(((2.0 + 2.0 * 2.0) * -x) + 5.0 + 1024.0 / (100.0 + 58.0) * 50.0 * 37.0 - 100.0 + 2.0 * Math.pow(x, 2.0) % 3.0);\n\n  DoubleUnaryOperator instance = compile("((2 + 2 * 2) * -x) + 5 + 1024 / (100 + 58) * 50 * 37 - 100 + 2 * x ^ 2 % 3").getDeclaredConstructor().newInstance();\n\n  // generated instance evaluation, literally equivalent to manual code (with a method call around it), except it was dynamically generated\n  System.out.println(instance.applyAsDouble(x));\n}\n')),(0,o.kt)("p",null,"We've also ran benchmarks for this expression to compare the performance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Benchmark                        Mode  Cnt    Score    Error  Units\nCalculatorBenchmark.generated    avgt   10  115.882 \xb1  1.082  ns/op\nCalculatorBenchmark.manual       avgt   10  115.222 \xb1  1.600  ns/op\n")),(0,o.kt)("p",null,"You can find example sources on ",(0,o.kt)(l.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/BindingGeneratorExample.java",mdxType:"Githublink"})))}g.isMDXComponent=!0}}]);