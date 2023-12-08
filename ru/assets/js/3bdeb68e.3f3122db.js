(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6508],{77618:function(e,t,r){"use strict";var n=r(67294),a=r(39962);t.Z=function(e){var t=e.url,r=e.text,i=e.isInline,l=void 0===i||i,c=e.children,o=(0,a.Z)().siteConfig,p=t.startsWith("/examples")?o.customFields.githubExamplesBranch:o.customFields.githubBranch;return n.createElement("a",{style:l?{}:{display:"block",marginBottom:"16px"},href:o.customFields.githubUrl+"/"+p+t,target:"_blank"},r||c)}},14304:function(e,t,r){"use strict";var n=r(67294),a=r(21140),i=r.n(a);i().initialize({startOnLoad:!0});t.Z=function(e){var t=e.chart;return(0,n.useEffect)((function(){i().contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},t)}},77815:function(e,t,r){"use strict";r(67294);var n=r(39962);t.Z=function(e){var t=e.name,r=(0,n.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===r.customFields[t])throw new Error("Variable "+t+" not exist");return r.customFields[t]}},6056:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return v},metadata:function(){return s},toc:function(){return m},default:function(){return S}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),l=r(77618),c=r(14304),o=r(77815),p=["components"],u={title:"ActiveJ | Service Graph, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043b\u0443\u0436\u0431\u0430\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0438\u0445 \u0433\u0440\u0430\u0444\u043e\u043c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",sidebar_label:"Service Graph",description:"Service Graph \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0443\u0436\u0431\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0438\u0445 \u0433\u0440\u0430\u0444\u043e\u043c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u044b\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043e\u0431\u0445\u043e\u0434\u0430 \u0433\u0440\u0430\u0444\u0430.",keywords:["service graph","java","java framework","\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430 spring","netty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","jetty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","\u0441\u0435\u0440\u0432\u0438\u0441\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439","threadpool","closeables","\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0434\u0430\u043d\u043d\u044b\u0445"]},v="Service Graph",s={unversionedId:"boot/servicegraph",id:"boot/servicegraph",isDocsHomePage:!1,title:"ActiveJ | Service Graph, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043b\u0443\u0436\u0431\u0430\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0438\u0445 \u0433\u0440\u0430\u0444\u043e\u043c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",description:"Service Graph \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0443\u0436\u0431\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0438\u0445 \u0433\u0440\u0430\u0444\u043e\u043c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u044b\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043e\u0431\u0445\u043e\u0434\u0430 \u0433\u0440\u0430\u0444\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/boot/servicegraph.mdx",sourceDirName:"boot",slug:"/boot/servicegraph",permalink:"/ru/boot/servicegraph",tags:[],version:"current",frontMatter:{title:"ActiveJ | Service Graph, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043b\u0443\u0436\u0431\u0430\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0438\u0445 \u0433\u0440\u0430\u0444\u043e\u043c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",sidebar_label:"Service Graph",description:"Service Graph \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0443\u0436\u0431\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0438\u0445 \u0433\u0440\u0430\u0444\u043e\u043c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u044b\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043e\u0431\u0445\u043e\u0434\u0430 \u0433\u0440\u0430\u0444\u0430.",keywords:["service graph","java","java framework","\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430 spring","netty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","jetty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","\u0441\u0435\u0440\u0432\u0438\u0441\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439","threadpool","closeables","\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0434\u0430\u043d\u043d\u044b\u0445"]},sidebar:"docs",previous:{title:"Launcher",permalink:"/ru/boot/launcher"},next:{title:"Workers",permalink:"/ru/boot/workers"}},m=[{value:"\u041e\u0431\u0437\u043e\u0440",id:"\u043e\u0431\u0437\u043e\u0440",children:[],level:2},{value:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",id:"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[{value:"SimpleServiceExample",id:"simpleserviceexample",children:[],level:3},{value:"EventloopServiceExample",id:"eventloopserviceexample",children:[],level:3},{value:"AdvancedServiceExample",id:"advancedserviceexample",children:[],level:3}],level:2}],d={toc:m};function S(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"service-graph"},"Service Graph"),(0,i.kt)("h2",{id:"\u043e\u0431\u0437\u043e\u0440"},"\u041e\u0431\u0437\u043e\u0440"),(0,i.kt)("p",null,"ServiceGraph - \u044d\u0442\u043e \u043c\u043e\u0449\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u043e\u0439 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432. \u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043e\u043d \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0433\u0440\u0430\u0444 \u0432\u0441\u0435\u0445 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0441\u043b\u0443\u0436\u0431 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439. \u042d\u0442\u043e\u0442 \u0433\u0440\u0430\u0444\u0438\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441\u043b\u0443\u0436\u0431, \u0447\u0442\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0431\u0435\u0437 \u0432\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0441\u043b\u0443\u0436\u0431 \u0434\u0440\u0443\u0433 \u0432 \u0434\u0440\u0443\u0433\u0430."),(0,i.kt)("h2",{id:"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"},"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0438 \u0441 ",(0,i.kt)("a",{parentName:"li",href:"/ru/inject"},"ActiveJ Inject")," \u0438 ",(0,i.kt)("a",{parentName:"li",href:"/ru/boot/launcher"},"Launcher")," \u043a\u0430\u043a \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430/\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0438\u0445 \u0433\u0440\u0430\u0444\u043e\u043c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."),(0,i.kt)("li",{parentName:"ul"},"\u041e\u043d \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u043b\u0443\u0436\u0431\u044b, \u0441\u043b\u0435\u0434\u0443\u044f \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u043c\u0443 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0443 \u043e\u0431\u0445\u043e\u0434\u0430 \u0433\u0440\u0430\u0444\u0430: \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043b\u0443\u0436\u0431\u044b \u043b\u0438\u0441\u0442\u044c\u0435\u0432 \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435."),(0,i.kt)("li",{parentName:"ul"},"\u041e\u043d \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438"),(0,i.kt)("li",{parentName:"ul"},"\u0413\u0440\u0430\u0444 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 ",(0,i.kt)("strong",{parentName:"li"},"\u0433\u0440\u0430\u0444\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 ActiveJ Inject")," , \u043d\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044f\u043c\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c."),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a ",(0,i.kt)("strong",{parentName:"li"},"ThreadPool"),", ",(0,i.kt)("strong",{parentName:"li"},"Closeables"),", ",(0,i.kt)("strong",{parentName:"li"},"DataSource")," , \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u043b\u044f Active \u0441\u0435\u0440\u0432\u0438\u0441\u044b, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,i.kt)("a",{parentName:"li",href:"/ru/async-io/eventloop"},"eventloops"),", async-\u0441\u0435\u0440\u0432\u0435\u0440\u044b \u0438 async-\u0441\u0435\u0440\u0432\u0438\u0441\u044b."),(0,i.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d \u043d\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u0434\u0440\u0443\u0433\u0438\u0445 \u0443\u0441\u043b\u0443\u0433 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e\u0432, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c")),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0431\u0430\u0437\u043e\u0432\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e \u0440\u043e\u043b\u0438 ServiceGraph, \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 HTTP-\u0441\u0435\u0440\u0432\u0435\u0440\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java tag=EXAMPLE",url:"/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java",tag:"EXAMPLE"},'public final class HttpHelloWorldExample extends HttpServerLauncher {\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200()\n      .withPlainText("Hello World")\n      .toPromise();\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new HttpHelloWorldExample();\n    launcher.launch(args);\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u042d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 ",(0,i.kt)(l.Z,{url:"/launchers/http/src/main/java/io/activej/launchers/http/HttpServerLauncher.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"HttpServerLauncher"))," \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u0443\u0435\u0442\u0441\u044f ",(0,i.kt)(l.Z,{url:"/boot-servicegraph/src/main/java/io/activej/service/ServiceGraphModule.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"ServiceGraphModule"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HttpServerLauncher")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0434\u0432\u0435 \u0441\u043b\u0443\u0436\u0431\u044b: ",(0,i.kt)(l.Z,{url:"/core-http/src/main/java/io/activej/http/AsyncHttpServer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"AsyncHttpServer"))," \u0438 ",(0,i.kt)("a",{parentName:"li",href:"/ru/async-io/eventloop"},(0,i.kt)("inlineCode",{parentName:"a"},"Eventloop")),".")),(0,i.kt)(c.Z,{chart:"\ngraph LR\n    AsyncHttpServer --\x3e Eventloop\n",mdxType:"Mermaid"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0421\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u044d\u0442\u043e\u043c\u0443 \u0433\u0440\u0430\u0444\u0438\u043a\u0443, Service Graph \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"li"},"Eventloop")," \u043f\u0435\u0440\u0432\u044b\u043c. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0439 ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncHttpServer")," ."),(0,i.kt)("li",{parentName:"ul"},"\u041a\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f, \u0441\u043b\u0443\u0436\u0431\u044b \u0431\u0443\u0434\u0443\u0442 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438: ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncHttpServer")," \u043f\u0435\u0440\u0432\u044b\u043c \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"Eventloop")," \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c.")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u044b, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043a\u043b\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c ActiveJ \u0441 GitHub"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,i.kt)("p",{parentName:"div"},"\u0418 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043e \u043a\u0430\u043a \u043f\u0440\u043e\u0435\u043a\u0442 Maven. \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0435\u0433 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{name:"currentVersion",mdxType:"Variable"})),". \u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u0431\u043e\u0440\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u042d\u0442\u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u044b \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"activej/examples/core/boot.")))),(0,i.kt)("h3",{id:"simpleserviceexample"},"SimpleServiceExample"),(0,i.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442 Launcher \u0438 \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u0443\u044e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0443\u044e \u0441\u043b\u0443\u0436\u0431\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0438 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/SimpleServiceExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/SimpleServiceExample.java",tag:"EXAMPLE"},'public class SimpleServiceExample extends Launcher {\n  public static void main(String[] args) throws Exception {\n    SimpleServiceExample example = new SimpleServiceExample();\n    example.launch(args);\n  }\n\n  @Inject\n  CustomService customService;\n\n  @Override\n  protected Module getModule() {\n    return ServiceGraphModule.create();\n  }\n\n  @Inject\n  private static class CustomService implements Service {\n    @Override\n    public CompletableFuture<?> start() {\n      System.out.println("|SERVICE STARTING|");\n      return CompletableFuture.completedFuture(null);\n    }\n\n    @Override\n    public CompletableFuture<?> stop() {\n      System.out.println("|SERVICE STOPPING|");\n      return CompletableFuture.completedFuture(null);\n    }\n  }\n\n  @Override\n  protected void run() {\n    System.out.println("|RUNNING|");\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/core/boot/src/main/java/SimpleServiceExample.java",mdxType:"Githublink"},"\u041f\u043e\u043b\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 GitHub."))),(0,i.kt)("h3",{id:"eventloopserviceexample"},"EventloopServiceExample"),(0,i.kt)("p",null,"Service Graph \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u0438 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0432\u0430\u0448\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0441\u043b\u0443\u0436\u0431\u044b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/EventloopServiceExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/EventloopServiceExample.java",tag:"EXAMPLE"},"404: Not Found\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/core/boot/src/main/java/EventloopServiceExample.java",mdxType:"Githublink"},"\u041f\u043e\u043b\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 GitHub."))),(0,i.kt)("h3",{id:"advancedserviceexample"},"AdvancedServiceExample"),(0,i.kt)("p",null,"Service Graph \u043c\u043e\u0436\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u043c\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044f\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0447\u0442\u043e \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u043f\u0440\u043e\u0442\u043e\u0442\u0438\u043f \u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430 . \u0414\u043b\u044f \u0435\u0433\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u0432\u0435 \u0441\u043b\u0443\u0436\u0431\u044b - \u0441\u043b\u0443\u0436\u0431\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0441\u043b\u0443\u0436\u0431\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445. \u0421\u043b\u0443\u0436\u0431\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0442\u0430\u043a\u0436\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u044f \u0441\u043b\u0443\u0436\u0431\u044b \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u0430\u0440\u044f\u0434\u0443 \u0441 Eventloop \u0438 Executor. \u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043c\u044b \u0438\u043c\u0435\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0433\u0440\u0430\u0444 \u0443\u0441\u043b\u0443\u0433:"),(0,i.kt)(c.Z,{chart:"\ngraph LR\n    id1(EmailService) --\x3e id2(AuthService)\n    id2 --\x3e id3(DBService)\n    id1 --\x3e id3\n    id2 --\x3e Executor\n    id2 --\x3e Eventloop\n",mdxType:"Mermaid"}),(0,i.kt)("p",null,"\u0410 ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceGraphModule")," \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u0432\u0441\u0435 \u044d\u0442\u0438 \u0441\u043b\u0443\u0436\u0431\u044b \u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"=== STARTING APPLICATION\n\nStarted java.util.concurrent.Executor\nStarted io.activej.eventloop.Eventloop\nStarted AdvancedServiceExample$DBService\n\nStarted AdvancedServiceExample$AuthService\n\nStarted AdvancedServiceExample$EmailService\n\n === STOPPING APPLICATION\n\nStopped AdvancedServiceExample$EmailService\n\nStopped AdvancedServiceExample$AuthService\n\nStopped java.util.concurrent.Executor\nStopped io.activej.eventloop.Eventloop\nStopped AdvancedServiceExample$DBService\n")),(0,i.kt)("p",null,"\u042d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/AdvancedServiceExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/AdvancedServiceExample.java",tag:"EXAMPLE"},'public class AdvancedServiceExample extends Launcher {\n  @Provides\n  @Eager\n  DBService dbService() {\n    return new DBService();\n  }\n\n  @Provides\n  @Eager\n  EmailService emailService(DBService dbService, AuthService authService) {\n    return new EmailService(dbService, authService);\n  }\n\n  @Provides\n  @Eager\n  AuthService authService(Reactor reactor, Executor executor, DBService dbService) {\n    return new AuthService(reactor, executor, dbService);\n  }\n\n  @Provides\n  Reactor reactor() {\n    return Eventloop.builder()\n      .withCurrentThread()\n      .build();\n  }\n\n  @Provides\n  Executor executor() {\n    return Executors.newCachedThreadPool();\n  }\n\n  @Override\n  protected Module getModule() {\n    return ServiceGraphModule.create();\n  }\n\n  @SuppressWarnings("FieldCanBeLocal")\n  private static class AuthService extends AbstractReactive\n    implements ReactiveService {\n    private final Executor executor;\n    private final DBService dbService;\n\n    public AuthService(Reactor reactor, Executor executor, DBService dbService) {\n      super(reactor);\n      this.executor = executor;\n      this.dbService = dbService;\n    }\n\n    @Override\n    public Promise<?> start() {\n      System.out.println("AuthService starting");\n      return Promise.ofBlocking(executor,\n        () -> System.out.println("AuthService started"));\n    }\n\n    @Override\n    public Promise<?> stop() {\n      return Promise.ofBlocking(executor,\n        () -> System.out.println("AuthService stopped"));\n    }\n  }\n\n  private static class DBService implements Service {\n    @Override\n    public CompletableFuture<?> start() {\n      System.out.println("DBService is starting");\n      return CompletableFuture.runAsync(() -> {\n        try {\n          Thread.sleep(1000);\n        } catch (InterruptedException e) {\n          e.printStackTrace();\n          Thread.currentThread().interrupt();\n        }\n        System.out.println("DBService is started");\n      });\n    }\n\n    @Override\n    public CompletableFuture<?> stop() {\n      System.out.println("DBService is stopping");\n      return CompletableFuture.runAsync(() -> {\n        try {\n          Thread.sleep(2000);\n        } catch (InterruptedException e) {\n          e.printStackTrace();\n          Thread.currentThread().interrupt();\n        }\n        System.out.println("DBService is stopped");\n      });\n    }\n  }\n\n  @SuppressWarnings("FieldCanBeLocal")\n  private static class EmailService implements Service {\n    private final DBService service;\n    private final AuthService authService;\n\n    public EmailService(DBService service, AuthService authService) {\n      this.service = service;\n      this.authService = authService;\n    }\n\n    @Override\n    public CompletableFuture<?> start() {\n      System.out.println("EmailService is starting");\n      return CompletableFuture.runAsync(() -> {\n        try {\n          Thread.sleep(1000);\n        } catch (InterruptedException e) {\n          e.printStackTrace();\n          Thread.currentThread().interrupt();\n        }\n        System.out.println("EmailService is started");\n      });\n    }\n\n    @Override\n    public CompletableFuture<?> stop() {\n      System.out.println("EmailService is stopping");\n      return CompletableFuture.runAsync(() -> System.out.println("EmailService is stopped"));\n    }\n  }\n\n  @Override\n  protected void run() {\n  }\n\n  public static void main(String[] args) throws Exception {\n    AdvancedServiceExample example = new AdvancedServiceExample();\n    example.launch(args);\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/core/boot/src/main/java/AdvancedServiceExample.java",mdxType:"Githublink"},"\u041f\u043e\u043b\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 GitHub."))))}S.isMDXComponent=!0},11748:function(e,t,r){var n={"./locale":89234,"./locale.js":89234};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=11748}}]);