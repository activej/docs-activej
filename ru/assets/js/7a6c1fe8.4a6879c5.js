"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[3981],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),d=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,v=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return t?i.createElement(v,a(a({ref:n},c),{},{components:t})):i.createElement(v,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77618:function(e,n,t){var i=t(67294),r=t(39962);n.Z=function(e){var n=e.url,t=e.text,o=e.isInline,a=void 0===o||o,l=e.children,p=(0,r.Z)().siteConfig,d=n.startsWith("/examples")?p.customFields.githubExamplesBranch:p.customFields.githubBranch;return i.createElement("a",{style:a?{}:{display:"block",marginBottom:"16px"},href:p.customFields.githubUrl+"/"+d+n,target:"_blank"},t||l)}},94078:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var i=t(83117),r=t(80102),o=(t(67294),t(3905)),a=t(77618),l=["components"],p={sidebar_label:"Optional dependencies"},d="Optional dependencies",c={unversionedId:"inject/optional-dependencies",id:"inject/optional-dependencies",isDocsHomePage:!1,title:"Optional dependencies",description:"What are optional dependencies?",source:"@site/docs/inject/optional-dependencies.mdx",sourceDirName:"inject",slug:"/inject/optional-dependencies",permalink:"/ru/inject/optional-dependencies",tags:[],version:"current",frontMatter:{sidebar_label:"Optional dependencies"},sidebar:"docs",previous:{title:"Transforming bindings",permalink:"/ru/inject/binding-transformation"},next:{title:"Scopes",permalink:"/ru/inject/scopes"}},s=[{value:"What are optional dependencies?",id:"what-are-optional-dependencies",children:[],level:2},{value:"Providing an optional dependency",id:"providing-an-optional-dependency",children:[],level:2},{value:"Implicit optional dependency",id:"implicit-optional-dependency",children:[],level:2}],u={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"optional-dependencies"},"Optional dependencies"),(0,o.kt)("h2",{id:"what-are-optional-dependencies"},"What are optional dependencies?"),(0,o.kt)("p",null,"There are situations where you create a standalone module and do not know whether a component should be provided or not.\nThis may dependent on the runtime configuration or on whether a component has been provided by another module."),(0,o.kt)("p",null,"Or, alternatively, a provided component may depend on another component that could potentially not be provided by some\nother module."),(0,o.kt)("p",null,"In this case, you can use an ",(0,o.kt)(a.Z,{url:"/core-inject/src/main/java/io/activej/inject/binding/OptionalDependency.java",mdxType:"Githublink"},(0,o.kt)("inlineCode",{parentName:"p"},"OptionalDependency")),"."),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalDependency")," is similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," class in Java. It can either have a component provided or not."),(0,o.kt)("h2",{id:"providing-an-optional-dependency"},"Providing an optional dependency"),(0,o.kt)("p",null,"Your module can explicitly provide an optional dependency, and another module can depend on it.\nLet's say we have some kind of service that needs to be provided based on the runtime configuration."),(0,o.kt)("p",null,"Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class ServiceModule extends AbstractModule {\n\n    @Provides\n    OptionalDependency<Service> service(Config config) {\n        boolean shouldBeProvided = config.get(ofBoolean(), "service.isProvided");\n        if (shouldBeProvided) {\n            return OptionalDependency.of(new Service());\n        } else {\n            return OptionalDependency.empty();\n        }\n    }\n}\n\npublic class ServiceStringModule extends AbstractModule {\n\n    @Provides\n    String serviceString(OptionalDependency<Service> optionalService) {\n        if (optionalService.isPresent()) {\n            Service service = optionalService.get();\n            return service.getString();\n        } else {\n            return "none";\n        }\n    }\n}\n')),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"service.isProvided")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in the configuration, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," will be provided and the ServiceStringModule\nwill provide the String form the Service. Otherwise, the default String will be provided."),(0,o.kt)("h2",{id:"implicit-optional-dependency"},"Implicit optional dependency"),(0,o.kt)("p",null,"Sometimes, when creating a standalone module you do not know beforehand whether some dependency is provided by another module.\nIn this case, you can still use ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalDependency"),"."),(0,o.kt)("p",null,"Suppose we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceModule")," which may or may not be installed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Injector"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class ServiceModule extends AbstractModule {\n\n    @Provides\n    Service service() {\n        return new Service();\n    }\n}\n")),(0,o.kt)("p",null,"And the ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceStringModule"),", which does not know if ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceModule")," is installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class ServiceStringModule extends AbstractModule {\n\n    @Provides\n    String serviceString(OptionalDependency<Service> optionalService) {\n        if (optionalService.isPresent()) {\n            Service service = optionalService.get();\n            return service.getString();\n        } else {\n            return "none";\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Although, we have not provided an ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalDependency<Service>")," explicitly, ActiveJ Inject automatically resolves such dependencies.\nThus, if a ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceModule")," is installed and ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," is actually provided, a ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceStringModule")," will receive an ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalDependency"),"\nof the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),". Otherwise, if no ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceModule")," is installed and no ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," is provided, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceStringModule")," will receive an\nempty ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalDependency"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may wonder why we had to come up with an explicit ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalDependency")," class instead of using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," class from Java.\nThe reason is that ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalDependency")," is explicitly handled in the ",(0,o.kt)("a",{parentName:"p",href:"/ru/boot/servicegraph"},(0,o.kt)("inlineCode",{parentName:"a"},"Service Graph"))," and also\nwhen registering JMX components. Another reason is that ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," was designed to be used mainly as a return type.\nOn the other hand, it is perfectly fine to use ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalDependency")," as a method parameter."))))}m.isMDXComponent=!0}}]);