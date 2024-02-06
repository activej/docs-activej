"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1937],{9428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var s=t(5893),i=t(1151),c=t(7618);const a={sidebar_label:"Injecting instances"},l="Injecting instances",d={id:"inject/injecting-instances",title:"Injecting instances",description:"In this tutorial we will inject instances into classes. We will use 2 approaches:",source:"@site/docs/inject/injecting-instances.mdx",sourceDirName:"inject",slug:"/inject/injecting-instances",permalink:"/inject/injecting-instances",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Injecting instances"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/inject/quick-start"},next:{title:"Class scanning",permalink:"/inject/class-scanning"}},r={},o=[{value:"Modules",id:"modules",level:2},{value:"Using an <code>InstanceInjector</code>",id:"using-an-instanceinjector",level:2},{value:"Adding class to bindings graph",id:"adding-class-to-bindings-graph",level:2}];function j(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"injecting-instances",children:"Injecting instances"}),"\n",(0,s.jsx)(n.p,{children:"In this tutorial we will inject instances into classes. We will use 2 approaches:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Using an ",(0,s.jsx)(c.Z,{url:"/core-inject/src/main/java/io/activej/inject/InstanceInjector.java",children:(0,s.jsx)(n.code,{children:"InstanceInjector"})})]}),"\n",(0,s.jsx)(n.li,{children:"Adding a class that will have its fields injected to the bindings graph"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"modules",children:"Modules"}),"\n",(0,s.jsxs)(n.p,{children:["We will define two independent modules: one will provide the ",(0,s.jsx)(n.code,{children:"String"})," message and the other will provide the ",(0,s.jsx)(n.code,{children:"int"})," id."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public class MessageModule extends AbstractModule {\n\t@Provides\n\tString message() {\n\t\treturn "hello";\n\t}\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public class IdModule extends AbstractModule {\n\t@Provides\n\tint id() {\n\t\treturn 123;\n\t}\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"using-an-instanceinjector",children:["Using an ",(0,s.jsx)(n.code,{children:"InstanceInjector"})]}),"\n",(0,s.jsx)(n.p,{children:"Here is the class whose fields must be injected."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public class Injected {\n\t@Inject\n\tString value;\n\n\t@Inject\n\tint id;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We need to create an ",(0,s.jsx)(n.code,{children:"Injector"})," and pass ",(0,s.jsx)(n.code,{children:"MessageModule"})," and ",(0,s.jsx)(n.code,{children:"IdModule"})," as parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["We also need to add a binding for the instance injector. To do this, we will use a ",(0,s.jsx)(n.code,{children:"ModuleBuilder"})," to manually create a third module whose sole purpose will be to bind the instance injector."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"Injector injector = Injector.of(\n\tnew MessageModule(),\n\tnew IdModule(),\n\tModuleBuilder.create()\n\t\t.bindInstanceInjector(Injected.class)\n\t\t.build());\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Finally, we need to obtain the ",(0,s.jsx)(n.code,{children:"InstanceInjector"})," from the Injector and use it to inject the fields into the newly created ",(0,s.jsx)(n.code,{children:"Injected"})," instance."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"InstanceInjector<Injected> instanceInjector = injector.getInstanceInjector(Injected.class);\n\nInjected injected = new Injected();\ninstanceInjector.injectInto(injected);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"adding-class-to-bindings-graph",children:"Adding class to bindings graph"}),"\n",(0,s.jsxs)(n.p,{children:["Here again the class whose fields are to be injected is represented. ",(0,s.jsxs)(n.strong,{children:["Note that this time there is an ",(0,s.jsx)(n.code,{children:"@Inject"})," annotation annotating the type."]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"@Inject\npublic class Injected {\n\t@Inject\n\tString value;\n\n\t@Inject\n\tint id;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, you can add a constructor and annotate it with the ",(0,s.jsx)(n.code,{children:"@Inject"})," annotation, as shown below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public class Injected {\n\tprivate final String value;\n\tprivate final int id;\n\n\t@Inject\n\tpublic Injected(String value, int id) {\n\t\tthis.value = value;\n\t\tthis.id = id;\n\t}\n\t//...\n}\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We still need to create an ",(0,s.jsx)(n.code,{children:"Injector"})," and pass ",(0,s.jsx)(n.code,{children:"MessageModule"})," and ",(0,s.jsx)(n.code,{children:"IdModule"})," as parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["However, instead of binding the instance injector, this time we will bind the ",(0,s.jsx)(n.code,{children:"Injected"})," class. To do this, we will also use a\n",(0,s.jsx)(n.code,{children:"ModuleBuilder"})," to manually build a third module, the sole purpose of which will be to bind the required class."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"Injector injector = Injector.of(\n\tnew MessageModule(),\n\tnew IdModule(),\n\tModuleBuilder.create()\n\t\t.bind(Injected.class)\n\t\t.build());\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Finally, we can request an instance of ",(0,s.jsx)(n.code,{children:"Injected"})," from the injector. All fields are correctly injected."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"Injected instance = injector.getInstance(Injected.class);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},7618:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var s=t(9962),i=t(5893);const c=e=>{let{url:n,text:t,isInline:c=!0,children:a}=e;const{siteConfig:l}=(0,s.Z)(),d=n.startsWith("/examples")?l.customFields.githubExamplesBranch:l.customFields.githubBranch;return(0,i.jsx)("a",{style:c?{}:{display:"block",marginBottom:"16px"},href:l.customFields.githubUrl+"/"+d+n,target:"_blank",children:t||a})}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(7294);const i={},c=s.createContext(i);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);