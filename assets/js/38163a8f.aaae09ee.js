"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[119],{9743:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=a(5893),t=a(1151),s=a(4304);const r={sidebar_label:"Examples"},l="Examples",o={id:"specializer/examples",title:"Examples",description:"Please keep in mind that ActiveJ Specializer is an experimental project, use it with caution. It does not support lambda expressions and may have difficulty specializing non-trivial instances.",source:"@site/docs/specializer/examples.mdx",sourceDirName:"specializer",slug:"/specializer/examples",permalink:"/specializer/examples",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Examples"},sidebar:"docs",previous:{title:"Overview",permalink:"/specializer"},next:{title:"Overview",permalink:"/rpc"}},c={},p=[{value:"Simple Calculator",id:"simple-calculator",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Please keep in mind that ActiveJ Specializer is an experimental project, use it with caution. It does not support lambda expressions and may have difficulty specializing non-trivial instances."})}),"\n",(0,i.jsx)(n.h2,{id:"simple-calculator",children:"Simple Calculator"}),"\n",(0,i.jsxs)(n.p,{children:["We took this ",(0,i.jsx)("a",{href:"https://github.com/jparsec/jparsec/wiki/Tutorial",children:"Parsec calculator tutorial"})," and adapted it slightly for ActiveJ Specializer. In the original tutorial, Parsec returns parsed expressions as double values:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Parser<Double> parser = new OperatorTable<Double>()\n    .infixl(op("+", (l, r) -> l + r), 10)\n    .infixl(op("-", (l, r) -> l - r), 10)\n    .infixl(Parsers.or(term("*"), WHITESPACE_MUL).retn((l, r) -> l * r), 20)\n    .infixl(op("/", (l, r) -> l / r), 20)\n    .prefix(op("-", v -> -v), 30)\n    .build(unit);\n'})}),"\n",(0,i.jsx)(n.p,{children:"ActiveJ Specializer shows its bests qualities when dealing with tree-like data structures. That is why we will be parsing expressions to AST:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'private static final Parser<CalculatorExpression> EXPRESSION = new OperatorTable<CalculatorExpression>()\n\t.infixl(DELIMITERS.token("+").retn(Sum::new), 10)\n\t.infixl(DELIMITERS.token("-").retn(Sub::new), 10)\n\t.infixl(DELIMITERS.token("*").retn(Mul::new), 20)\n\t.infixl(DELIMITERS.token("/").retn(Div::new), 20)\n\t.infixl(DELIMITERS.token("%").retn(Mod::new), 20)\n\t.prefix(DELIMITERS.token("-").retn(Neg::new), 30)\n\t.infixr(DELIMITERS.token("^").retn(Pow::new), 40)\n\t.build(ATOM);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Assume we have a simple equation ",(0,i.jsx)(n.code,{children:"3 + 2 * 4"}),". According to the parser, the following AST will be created:"]}),"\n",(0,i.jsx)(s.Z,{chart:"\ngraph TD\n+ --\x3e 3\n+ --\x3e *\n* --\x3e 2\n* --\x3e 4\n"}),"\n",(0,i.jsx)(n.p,{children:"Let's test Specializer out:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:"url=/examples/core/specializer/src/main/java/calculator/SpecializerCalculatorExample.java tag=REGION_2",children:'public static void main(String[] args) {\n  double x = -1;\n\n  // manual code, superfast\n  System.out.println(((2.0 + 2.0 * 2.0) * -x) + 5.0 + 1024.0 / (100.0 + 58.0) * 50.0 * 37.0 - 100.0 + 2.0 * (Math.pow(x, 2.0)) % 3.0);\n\n  CalculatorExpression expression = PARSER.parse("((2 + 2 * 2) * -x) + 5 + 1024 / (100 + 58) * 50 * 37 - 100 + 2 * x ^ 2 % 3");\n\n  System.out.println(expression);\n\n  // tree-walking evaluation, super slow\n  System.out.println(expression.evaluate(x));\n\n  // specialized instance evaluation, about as fast as manual code\n  CalculatorExpression specialized = SPECIALIZER.specialize(expression);\n  System.out.println(specialized.evaluate(x));\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"ActiveJ Specializer transforms the AST into a set of static final classes with baked-in values of the given\nequation. JIT heavily optimizes and inlines these classes at runtime. The result is an optimized instance of an expression\nthat can be reused in case we compute an equation with an unknown value several times."}),"\n",(0,i.jsxs)(n.p,{children:["It's time for some benchmarks. Let's try to process an equation\n",(0,i.jsx)(n.code,{children:"((2 + 2 * 2) * -x) + 5 + 1024 / (100 + 58) * 50 * 37 - 100 + 2 * x ^ 2 % 3"})," in three different ways and compare the performance:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"manually enter the equation"}),"\n",(0,i.jsxs)(n.li,{children:["parse the equation to an AST and evaluate it ",(0,i.jsx)(n.strong,{children:"without specialization"})]}),"\n",(0,i.jsxs)(n.li,{children:["parse the equation to an AST and evaluate it ",(0,i.jsx)(n.strong,{children:"with specialization"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The results of the benchmark are very illustrative:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Benchmark                        Mode  Cnt    Score   Error  Units\nCalculatorBenchmark.ast          avgt   10  828.924 \xb1 8.369  ns/op\nCalculatorBenchmark.manual       avgt   10  115.985 \xb1 1.009  ns/op\nCalculatorBenchmark.specialized  avgt   10  117.635 \xb1 1.500  ns/op\n"})}),"\n",(0,i.jsx)(n.p,{children:"As you can see, a manually typed equations and specialized AST were processed equally fast. ActiveJ Specializer sped\nup AST processing 8 times."})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4304:(e,n,a)=>{a.d(n,{Z:()=>r});var i=a(7294),t=a(6365),s=a(5893);t.L.initialize({startOnLoad:!0});const r=e=>{let{chart:n}=e;return(0,i.useEffect)((()=>{t.L.contentLoaded()}),[]),(0,s.jsx)("div",{className:"mermaid",children:n})}}}]);