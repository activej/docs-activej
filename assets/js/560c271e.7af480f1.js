(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9255],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return d},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){return function(n){var t=u(n.components);return r.createElement(e,o({},n,{components:t}))}},u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77618:function(e,n,t){"use strict";var r=t(95318).default;n.Z=void 0;var a=r(t(67294)),o=r(t(39962)),i=function(e){var n=e.url,t=e.text,r=e.isInline,i=void 0===r||r,c=e.children,s=(0,o.default)().siteConfig;return a.default.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+n,target:"_blank"},t||c)};n.Z=i},65701:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r,a=t(22122),o=t(19756),i=(t(67294),t(3905)),c=t(77618),s=["components"],l={title:"ActiveJ | Config, efficiently manage application configuration and property values",description:"Efficiently manage your application configurations and properties values with ActiveJ Config",keywords:["configs","application configs","save configs","application configuration","java","java framework","java for beginners"],sidebar_position:4},p={unversionedId:"boot/config",id:"boot/config",isDocsHomePage:!1,title:"Config",description:"Efficiently manage your application configurations and properties values with ActiveJ Config",source:"@site/docs/boot/config.mdx",sourceDirName:"boot",slug:"/boot/config",permalink:"/docs/boot/config",version:"current",sidebarPosition:4,frontMatter:{title:"ActiveJ | Config, efficiently manage application configuration and property values",description:"Efficiently manage your application configurations and properties values with ActiveJ Config",keywords:["configs","application configs","save configs","application configuration","java","java framework","java for beginners"],sidebar_position:4},sidebar:"docs",previous:{title:"Workers",permalink:"/docs/boot/workers"},next:{title:"Bytebuf",permalink:"/docs/misc/bytebuf"}},u=[{value:"Features",id:"features",children:[]},{value:"Example",id:"example",children:[]}],d=(r="Variable",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),m={toc:u};function f(e){var n=e.components,t=(0,o.default)(e,s);return(0,i.mdx)("wrapper",(0,a.default)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"features"},"Features"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Config")," is a useful extension for properties files. It's main features are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Using a set of standard converters"),(0,i.mdx)("li",{parentName:"ul"},"Specifying default value for a property"),(0,i.mdx)("li",{parentName:"ul"},"Saving all properties that were used into a file")),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub"),(0,i.mdx)("pre",{parentName:"div"},(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,i.mdx)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(d,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project.\nThese examples are located at ",(0,i.mdx)("inlineCode",{parentName:"p"},"activej/examples/core/boot")))),(0,i.mdx)("p",null,"An example of providing configs to your application with ",(0,i.mdx)(c.Z,{url:"/boot-config/src/main/java/io/activej/config/Config.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"Config"))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/ConfigModuleExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/ConfigModuleExample.java",tag:"EXAMPLE"},'public final class ConfigModuleExample {\n  private static final String PROPERTIES_FILE = "example.properties";\n\n  public static void main(String[] args) {\n    Injector injector = Injector.of(ModuleBuilder.create()\n        .bind(Config.class).to(() -> Config.ofClassPathProperties(PROPERTIES_FILE))\n        .bind(String.class).to(c -> c.get("phrase"), Config.class)\n        .bind(Integer.class).to(c -> c.get(ofInteger(), "number"), Config.class)\n        .bind(InetAddress.class).to(c -> c.get(ofInetAddress(), "address"), Config.class)\n        .build());\n\n    System.out.println(injector.getInstance(String.class));\n    System.out.println(injector.getInstance(Integer.class));\n    System.out.println(injector.getInstance(InetAddress.class));\n  }\n}\n')))}f.isMDXComponent=!0}}]);