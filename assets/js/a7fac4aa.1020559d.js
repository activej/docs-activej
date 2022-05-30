(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1361],{3149:function(e,t,r){"use strict";var n=r(67294),a=r(39962),i=r(41106),o=r.n(i),l=r(15835);r.n(l)().interpolate=/{{([\s\S]+?)}}/g,t.Z=function(e){var t=e.href,r=e.children,i=e.target,l=void 0===i?"_blank":i,s=(0,a.Z)().siteConfig,p=o()(t);return n.createElement("a",{href:p(s.customFields),target:l},r)}},77618:function(e,t,r){"use strict";var n=r(67294),a=r(39962);t.Z=function(e){var t=e.url,r=e.text,i=e.isInline,o=void 0===i||i,l=e.children,s=(0,a.Z)().siteConfig,p=t.startsWith("/examples")?s.customFields.githubExamplesBranch:s.customFields.githubBranch;return n.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+p+t,target:"_blank"},r||l)}},77815:function(e,t,r){"use strict";r(67294);var n=r(39962);t.Z=function(e){var t=e.name,r=(0,n.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===r.customFields[t])throw new Error("Variable "+t+" not exist");return r.customFields[t]}},8316:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return v},toc:function(){return m},default:function(){return h}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=r(77618),l=r(3149),s=r(77815),p=["components"],c={title:"ActiveJ HTTP | Asynchronous HTTP server and client",description:"Create legacy-free asynchronous HTTP server and client applications with ActiveJ",sidebar_label:"Overview",keywords:["java http","java","http server","http client","java http server","java http client","java framework","spring alternative","netty alternative","jetty alternative"],slug:"/http"},u="Overview",v={unversionedId:"http/overview",id:"http/overview",isDocsHomePage:!1,title:"ActiveJ HTTP | Asynchronous HTTP server and client",description:"Create legacy-free asynchronous HTTP server and client applications with ActiveJ",source:"@site/docs/http/overview.mdx",sourceDirName:"http",slug:"/http",permalink:"/http",tags:[],version:"current",frontMatter:{title:"ActiveJ HTTP | Asynchronous HTTP server and client",description:"Create legacy-free asynchronous HTTP server and client applications with ActiveJ",sidebar_label:"Overview",keywords:["java http","java","http server","http client","java http server","java http client","java framework","spring alternative","netty alternative","jetty alternative"],slug:"/http"},sidebar:"docs",previous:{title:"Config",permalink:"/boot/config"},next:{title:"Benchmarks",permalink:"/http/benchmarks"}},m=[{value:"Features",id:"features",children:[],level:2},{value:"AsyncServlet",id:"asyncservlet",children:[],level:2},{value:"Add ActiveJ HTTP to your project",id:"add-activej-http-to-your-project",children:[],level:2}],d={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Swift asynchronous HTTP server and client with WebSocket support."),(0,i.kt)("p",null,"Concise and more efficient alternative to Spring, Jetty, Vert.x, and other similar solutions.\nActiveJ HTTP significantly outperforms them, which is proven by numerous ",(0,i.kt)("a",{parentName:"p",href:"/http/benchmarks"},"benchmarks"),"."),(0,i.kt)("p",null,"Provides tools for building HTTP servers and clients with asynchronous I/O in a simple and convenient way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java tag=EXAMPLE",url:"/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java",tag:"EXAMPLE"},'public final class HttpHelloWorldExample extends HttpServerLauncher {\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200().withPlainText("Hello World");\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new HttpHelloWorldExample();\n    launcher.launch(args);\n  }\n}\n')),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fully asynchronous"),(0,i.kt)("li",{parentName:"ul"},"No third-party dependencies, built on top of ",(0,i.kt)("a",{parentName:"li",href:"/async-io/net"},"ActiveJ Net")," module"),(0,i.kt)("li",{parentName:"ul"},"No legacy layers of adapters"),(0,i.kt)("li",{parentName:"ul"},"WebSocket support"),(0,i.kt)("li",{parentName:"ul"},"TLS support"),(0,i.kt)("li",{parentName:"ul"},"Can be used as  an application web server: supports externally provided ",(0,i.kt)("a",{parentName:"li",href:"/inject"},"ActiveJ Inject (DI)")," modules with business logic and ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncServlets")),(0,i.kt)("li",{parentName:"ul"},"Competitively fast as proven by ",(0,i.kt)("a",{parentName:"li",href:"/http/benchmarks"},"benchmarks")),(0,i.kt)("li",{parentName:"ul"},"Highly optimized and GC-friendly:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Automatic recycling of ",(0,i.kt)("a",{parentName:"li",href:"/misc/bytebuf"},(0,i.kt)("strong",{parentName:"a"},"ByteBufs"))," associated with ",(0,i.kt)("strong",{parentName:"li"},"HttpRequest"),"/",(0,i.kt)("strong",{parentName:"li"},"HttpResponse"),"\nand also ",(0,i.kt)("strong",{parentName:"li"},"ByteBufs")," received from ",(0,i.kt)("a",{parentName:"li",href:"/async-io/net"},"Net async sockets")),(0,i.kt)("li",{parentName:"ul"},"Optimized headers multimap and internal URL representation with low yield of garbage objects"),(0,i.kt)("li",{parentName:"ul"},"Specialized headers subclasses render their content directly into ",(0,i.kt)("inlineCode",{parentName:"li"},"ByteBuf"),", without intermediate garbage objects")))),(0,i.kt)("h2",{id:"asyncservlet"},"AsyncServlet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Basically, it's just an async function, mapping ",(0,i.kt)(o.Z,{text:"HttpRequest",url:"/core-http/src/main/java/io/activej/http/HttpRequest.java",mdxType:"Githublink"})," to ",(0,i.kt)(o.Z,{text:"HttpResponse",url:"/core-http/src/main/java/io/activej/http/HttpResponse.java",mdxType:"Githublink"})),(0,i.kt)("li",{parentName:"ul"},"Collection of pre-defined ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncServlets")," out of the box (",(0,i.kt)("a",{parentName:"li",href:"/http/examples#static-servlet-example"},(0,i.kt)("inlineCode",{parentName:"a"},"StaticServlet")),",\n",(0,i.kt)("a",{parentName:"li",href:"/http/examples#blocking-servlet-example"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockingServlet")),", ",(0,i.kt)("a",{parentName:"li",href:"/http/examples#routing-servlet-example"},(0,i.kt)("inlineCode",{parentName:"a"},"RoutingServlet")),", etc.)"),(0,i.kt)("li",{parentName:"ul"},"Extensive support of functional composition of ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncServlets"),". ",(0,i.kt)("a",{parentName:"li",href:"/http/examples#routing-servlet-example"},(0,i.kt)("inlineCode",{parentName:"a"},"RoutingServlet"))," for building servlet routing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Flexible mapping of HTTP paths and methods to ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncServlets")," (including other RoutingServlets)"),(0,i.kt)("li",{parentName:"ul"},"Support of path parameters (like ",(0,i.kt)("em",{parentName:"li"},"/users/:id"),") and relative paths")))),(0,i.kt)("h2",{id:"add-activej-http-to-your-project"},"Add ActiveJ HTTP to your project"),(0,i.kt)("p",null,"You can add ActiveJ HTTP to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ HTTP ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(s.Z,{name:"currentVersion",mdxType:"Variable"}))," (see on ",(0,i.kt)(l.Z,{href:"https://github.com/activej/activej/tree/{{currentVersion}}/core-http",mdxType:"DynamicLink"},"Github")," or ",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-http"},"Maven"),")."))}h.isMDXComponent=!0},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},24626:function(e,t,r){var n=r(77813),a=Object.prototype,i=a.hasOwnProperty;e.exports=function(e,t,r,o){return void 0===e||n(e,a[r])&&!i.call(o,r)?t:e}},89464:function(e,t,r){var n=r(18674)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});e.exports=n},31994:function(e){var t={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};e.exports=function(e){return"\\"+t[e]}},79865:function(e){e.exports=/<%-([\s\S]+?)%>/g},76051:function(e){e.exports=/<%([\s\S]+?)%>/g},5712:function(e){e.exports=/<%=([\s\S]+?)%>/g},29018:function(e,t,r){var n=r(98363),a=r(21463),i=r(81704),o=a((function(e,t,r,a){n(t,i(t),e,a)}));e.exports=o},9591:function(e,t,r){var n=r(96874),a=r(5976),i=r(64647),o=a((function(e,t){try{return n(e,void 0,t)}catch(r){return i(r)?r:new Error(r)}}));e.exports=o},7187:function(e,t,r){var n=r(89464),a=r(79833),i=/[&<>"']/g,o=RegExp(i.source);e.exports=function(e){return(e=a(e))&&o.test(e)?e.replace(i,n):e}},64647:function(e,t,r){var n=r(44239),a=r(37005),i=r(68630);e.exports=function(e){if(!a(e))return!1;var t=n(e);return"[object Error]"==t||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!i(e)}},41106:function(e,t,r){var n=r(29018),a=r(9591),i=r(47415),o=r(24626),l=r(31994),s=r(64647),p=r(16612),c=r(3674),u=r(5712),v=r(15835),m=r(79833),d=/\b__p \+= '';/g,h=/\b(__p \+=) '' \+/g,f=/(__e\(.*?\)|\b__t\)) \+\n'';/g,k=/[()=,{}\[\]\/\s]/,g=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,y=/($^)/,b=/['\n\r\u2028\u2029\\]/g,j=Object.prototype.hasOwnProperty;e.exports=function(e,t,r){var x=v.imports._.templateSettings||v;r&&p(e,t,r)&&(t=void 0),e=m(e),t=n({},t,x,o);var N,w,T=n({},t.imports,x.imports,o),_=c(T),H=i(T,_),A=0,S=t.interpolate||y,P="__p += '",C=RegExp((t.escape||y).source+"|"+S.source+"|"+(S===u?g:y).source+"|"+(t.evaluate||y).source+"|$","g"),E=j.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/\s/g," ")+"\n":"";e.replace(C,(function(t,r,n,a,i,o){return n||(n=a),P+=e.slice(A,o).replace(b,l),r&&(N=!0,P+="' +\n__e("+r+") +\n'"),i&&(w=!0,P+="';\n"+i+";\n__p += '"),n&&(P+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),A=o+t.length,t})),P+="';\n";var R=j.call(t,"variable")&&t.variable;if(R){if(k.test(R))throw new Error("Invalid `variable` option passed into `_.template`")}else P="with (obj) {\n"+P+"\n}\n";P=(w?P.replace(d,""):P).replace(h,"$1").replace(f,"$1;"),P="function("+(R||"obj")+") {\n"+(R?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(N?", __e = _.escape":"")+(w?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+P+"return __p\n}";var J=a((function(){return Function(_,E+"return "+P).apply(void 0,H)}));if(J.source=P,s(J))throw J;return J}},15835:function(e,t,r){var n=r(7187),a={escape:r(79865),evaluate:r(76051),interpolate:r(5712),variable:"",imports:{_:{escape:n}}};e.exports=a}}]);