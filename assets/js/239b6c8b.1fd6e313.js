(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[8717],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return d},mdx:function(){return v},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,a({},t,{components:n}))}},u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77618:function(e,t,n){"use strict";var r=n(95318).default;t.Z=void 0;var i=r(n(67294)),a=r(n(39962)),o=function(e){var t=e.url,n=e.text,r=e.isInline,o=void 0===r||r,c=e.children,s=(0,a.default)().siteConfig;return i.default.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+t,target:"_blank"},n||c)};t.Z=o},77815:function(e,t,n){"use strict";var r=n(95318).default;t.Z=void 0;r(n(67294));var i=r(n(39962)),a=function(e){var t=e.name,n=(0,i.default)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]};t.Z=a},1542:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=n(77618),c=n(77815),s=["components"],l={slug:"/specializer"},p={unversionedId:"specializer/overview",id:"specializer/overview",isDocsHomePage:!1,title:"Overview",description:"ActiveJ Specializer is an innovative technology for enhancing class runtime performance for JVM. It is one of the ActiveJ technologies with no third-party dependencies, so it can be used as a stand-alone component.",source:"@site/docs/specializer/overview.mdx",sourceDirName:"specializer",slug:"/specializer",permalink:"/specializer",version:"current",frontMatter:{slug:"/specializer"},sidebar:"docs",previous:{title:"Examples",permalink:"/serializer/examples"},next:{title:"Examples",permalink:"/specializer/examples"}},u=[{value:"How it works?",id:"how-it-works",children:[]},{value:"Why ActiveJ Specializer?",id:"why-activej-specializer",children:[]},{value:"Ultimate flexibility",id:"ultimate-flexibility",children:[]},{value:"Add ActiveJ Specializer to your project",id:"add-activej-specializer-to-your-project",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,i.default)(e,s);return(0,a.mdx)("wrapper",(0,r.default)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"ActiveJ Specializer is an innovative technology for enhancing class runtime performance for JVM. It is one of the ActiveJ technologies with no third-party dependencies, so it can be used as a stand-alone component."),(0,a.mdx)("h2",{id:"how-it-works"},"How it works?"),(0,a.mdx)("p",null,"ActiveJ Specializer uses ASM library to automatically transform class instances into specialized static classes, and class instance fields into baked-in static fields. This enables a wide variety of JVM optimizations for static classes, not possible otherwise: dead code elimination, aggressively inlining methods, and static constants. According to our measures, resulting speed-up could be up to ",(0,a.mdx)("strong",{parentName:"p"},"30%-50%")," in some cases."),(0,a.mdx)("h2",{id:"why-activej-specializer"},"Why ActiveJ Specializer?"),(0,a.mdx)("p",null,"This simple example illustrates the core ActiveJ Specializer concept. Suppose there is an ",(0,a.mdx)("inlineCode",{parentName:"p"},"INT_UNARY_OPERATOR")," that can be simplified. ",(0,a.mdx)("inlineCode",{parentName:"p"},"INT_UNARY_OPERATOR_SPECIALIZED")," specializes the equation similarly to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"INT_UNARY_OPERATOR_SPECIALIZED_MANUALLY"),", but does this automagically."),(0,a.mdx)("p",null,"According to the benchmarks the original equation was operated in 69.938 ns, while the manually and automatically specialized took only 26.533 ns and 26.691 ns respectively."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"static IntUnaryOperator INT_UNARY_OPERATOR =\n    new IntUnaryOperatorProduct(\n        new IntUnaryOperatorSum(\n            new IntUnaryOperatorSum(\n                 new IntUnaryOperatorIdentity(),\n                 new IntUnaryOperatorConst(5)),\n            new IntUnaryOperatorConst(-5)),\n         new IntUnaryOperatorConst(-1));\n\nstatic IntUnaryOperator INT_UNARY_OPERATOR_SPECIALIZED_MANUALLY =\n    new IntUnaryOperator() {\n        @Override\n        public int applyAsInt(int x) {\n            return -x;\n        }\n    };\n\nstatic IntUnaryOperator INT_UNARY_OPERATOR_SPECIALIZED =\n    SPECIALIZER.specialize(INT_UNARY_OPERATOR);\n")),(0,a.mdx)("h2",{id:"ultimate-flexibility"},"Ultimate flexibility"),(0,a.mdx)("p",null,"ActiveJ Specializer goes far beyond arithmetic equations and can be used in complex use cases. For example, according to the ",(0,a.mdx)(o.Z,{text:"benchmarks",url:"/benchmarks/inject/src/main/java/io/activej/inject/ActiveJDirectScopebindBenchmark.java",mdxType:"Githublink"})," ActiveJ Specializer makes ",(0,a.mdx)("strong",{parentName:"p"},"ActiveJ Inject")," DI library faster by third. To apply ActiveJ Specializer to ActiveJ Inject, simply add ",(0,a.mdx)("inlineCode",{parentName:"p"},"Injector.useSpecializer()")," before Injector instantiation."),(0,a.mdx)("h2",{id:"add-activej-specializer-to-your-project"},"Add ActiveJ Specializer to your project"),(0,a.mdx)("p",null,"You can add ActiveJ Specializer to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ Specializer ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)(c.Z,{name:"currentVersion",mdxType:"Variable"}))," (see on ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/master/core-specializer"},"Github")," or ",(0,a.mdx)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-specializer"},"Maven"),")."))}m.isMDXComponent=!0}}]);