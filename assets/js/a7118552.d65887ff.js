(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6891],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return m},MDXProvider:function(){return d},mdx:function(){return B},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){return function(t){var n=p(t.components);return a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,y=s["".concat(o,".").concat(d)]||s[d]||f[d]||i;return n?a.createElement(y,l(l({ref:t},m),{},{components:n})):a.createElement(y,l({ref:t},m))}));function B(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},77618:function(e,t,n){"use strict";var a=n(95318).default;t.Z=void 0;var r=a(n(67294)),i=a(n(39962)),o=function(e){var t=e.url,n=e.text,a=e.isInline,o=void 0===a||a,l=e.children,u=(0,i.default)().siteConfig;return r.default.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:u.customFields.githubUrl+"/"+u.customFields.githubBranch+t,target:"_blank"},n||l)};t.Z=o},77815:function(e,t,n){"use strict";var a=n(95318).default;t.Z=void 0;a(n(67294));var r=a(n(39962)),i=function(e){var t=e.name,n=(0,r.default)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]};t.Z=i},55738:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=n(77815),l=n(77618),u=["components"],m={title:"ActiveJ | ByteBuf, lightweight alternative to Java NIO ByteBuffers",description:"Lightweight alternative to Java NIO ByteBuffers with extremely low GC footprint.",keywords:["bytebuffer","byte buffers","java nio","bytebuffer alternative","java","java framework"]},s={unversionedId:"misc/bytebuf",id:"misc/bytebuf",isDocsHomePage:!1,title:"Bytebuf",description:"Lightweight alternative to Java NIO ByteBuffers with extremely low GC footprint.",source:"@site/docs/misc/bytebuf.mdx",sourceDirName:"misc",slug:"/misc/bytebuf",permalink:"/misc/bytebuf",version:"current",frontMatter:{title:"ActiveJ | ByteBuf, lightweight alternative to Java NIO ByteBuffers",description:"Lightweight alternative to Java NIO ByteBuffers with extremely low GC footprint.",keywords:["bytebuffer","byte buffers","java nio","bytebuffer alternative","java","java framework"]},sidebar:"docs",previous:{title:"Examples",permalink:"/fs/examples"},next:{title:"Codec",permalink:"/misc/codec"}},p=[{value:"Overview",id:"overview",children:[]},{value:"ByteBuf",id:"bytebuf",children:[]},{value:"ByteBufPool",id:"bytebufpool",children:[]},{value:"ByteBufs",id:"bytebufs",children:[]},{value:"Utility classes",id:"utility-classes",children:[]},{value:"Examples",id:"examples",children:[{value:"ByteBuf Example",id:"bytebuf-example",children:[]},{value:"ByteBuf Pool Example",id:"bytebuf-pool-example",children:[]},{value:"ByteBufs Example",id:"bytebufs-example",children:[]}]}],d={toc:p};function f(e){var t=e.components,n=(0,r.default)(e,u);return(0,i.mdx)("wrapper",(0,a.default)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"overview"},"Overview"),(0,i.mdx)("p",null,"ActiveJ aims to make efficient yet high-level I/O. This requires extensive usage of user-space\nbyte buffers. Unfortunately, traditional Java ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuffer"),"s impose a heavy load on GC."),(0,i.mdx)("p",null,"To reduce GC overhead, ActiveJ introduces its own GC-friendly and lightweight ",(0,i.mdx)("a",{parentName:"p",href:"#bytebuf"},(0,i.mdx)("inlineCode",{parentName:"a"},"ByteBufs")),", which can be\nreused with ",(0,i.mdx)("a",{parentName:"p",href:"#bytebufpool"},(0,i.mdx)("inlineCode",{parentName:"a"},"ByteBufPool")),"."),(0,i.mdx)("p",null,"In addition, common I/O pattern is to treat ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuffer"),"s as a queue: I/O operation produces the data while application consumes the data or vice versa. ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),"s are designed to facilitate this pattern as well, providing specialized ",(0,i.mdx)("a",{parentName:"p",href:"#bytebufs"},(0,i.mdx)("inlineCode",{parentName:"a"},"ByteBufs"))," class with queue-like operations across multiple ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),"s."),(0,i.mdx)("h2",{id:"bytebuf"},"ByteBuf"),(0,i.mdx)("p",null,"An extremely lightweight and efficient implementation compared to the Java NIO ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuffer"),". There are no direct buffers,\nwhich simplifies and improves ",(0,i.mdx)(l.Z,{url:"/core-bytebuf/src/main/java/io/activej/bytebuf/ByteBuf.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"))," performance."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf")," is similar to a FIFO byte queue and has two positions: ",(0,i.mdx)("em",{parentName:"p"},"head")," and ",(0,i.mdx)("em",{parentName:"p"},"tail"),". When you write data to\n",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),", it's ",(0,i.mdx)("em",{parentName:"p"},"tail")," increases by the number of bytes written. Similarly, when you read data from ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),",\nit's ",(0,i.mdx)("em",{parentName:"p"},"head")," increases by the number of bytes read."),(0,i.mdx)("p",null,"You can read bytes from ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf")," only when its ",(0,i.mdx)("em",{parentName:"p"},"tail")," is greater than the ",(0,i.mdx)("em",{parentName:"p"},"head"),". Similarly, you can write bytes to\n",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf")," until the ",(0,i.mdx)("em",{parentName:"p"},"tail")," doesn't exceed the length of the wrapped array. In this way, there is no need for ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuffer.flip()")," operations."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf")," supports concurrent processes: while one process writes some data to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),", another process can\nread it."),(0,i.mdx)("p",null,"To create a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf")," you can either wrap your byte array into ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf")," or allocate it from ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBufPool"),"."),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"If you create a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),"* without allocating it from ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBufPool"),", calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf.recycle()")," will have no effect, such ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),"s are simply collected by GC"))),(0,i.mdx)("h2",{id:"bytebufpool"},"ByteBufPool"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBufPool")," allows to reuse ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),"s and as a result, reduces GC load. To make ",(0,i.mdx)(l.Z,{url:"/core-bytebuf/src/main/java/io/activej/bytebuf/ByteBufPool.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBufPool"))," usage more convenient, there are debugging and monitoring tools for allocated ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),"s, including their stack traces."),(0,i.mdx)("p",null,"To get a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf")," from the pool, use ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBufPool.allocate(int size)"),". A ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf")," of the rounded up to the next\nnearest power of 2 size will be allocated (for example, if the ",(0,i.mdx)("em",{parentName:"p"},"size")," is 29, a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf")," of 32 bytes will be allocated)."),(0,i.mdx)("p",null,"To return ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf")," to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBufPool"),", use ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf.recycle()"),". In contrast to languages like C/C++, it\u2019s not required\nto recycle ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),"s - in the worst case, they will be collected by the GC."),(0,i.mdx)("p",null,"To make everything consistent, ActiveJ relies on the concept of \u2018ownership\u2019 (like in Rust language) - after allocation,\nthe components pass a ",(0,i.mdx)("em",{parentName:"p"},"byteBuf")," from one to another, until the last \u2018owner\u2019 recycles it to ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBufPool"),"."),(0,i.mdx)("p",null,"You can explore an example of ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBufPool")," use case ",(0,i.mdx)("a",{parentName:"p",href:"#bytebuf-pool-example"},"here")),(0,i.mdx)("h2",{id:"bytebufs"},"ByteBufs"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(l.Z,{url:"/core-bytebuf/src/main/java/io/activej/bytebuf/ByteBufs.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"strong"},"ByteBufs")))," class provides effective management of multiple ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),"s. It creates an optimized queue of several\nByteBufs with FIFO rules."),(0,i.mdx)("p",null,"You can explore an example of ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBufs")," use case ",(0,i.mdx)("a",{parentName:"p",href:"#bytebufs-example"},"here")),(0,i.mdx)("h2",{id:"utility-classes"},"Utility classes"),(0,i.mdx)("p",null,"ByteBuf module also contains ",(0,i.mdx)(l.Z,{url:"/core-bytebuf/src/main/java/io/activej/bytebuf/util",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"utility classes"))," to manage and resize the underlying byte buffer, ",(0,i.mdx)("inlineCode",{parentName:"p"},"String")," conversions, etc."),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"#bytebuf-example"},"ByteBuf Example")," - represents some basic ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf")," possibilities, such as:"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"wrapping data in ",(0,i.mdx)("inlineCode",{parentName:"li"},"ByteBuf")," for writing/reading,"),(0,i.mdx)("li",{parentName:"ul"},"slicing particular parts out of data,"),(0,i.mdx)("li",{parentName:"ul"},"conversions."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"#bytebuf-pool-example"},"ByteBuf Pool Example")," - represents how to work with ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBufPool"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"#bytebufs-example"},"ByteBufs Example")," - shows how queues of ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),"s are created and processed."))),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub"),(0,i.mdx)("pre",{parentName:"div"},(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,i.mdx)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(o.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project.\nThese examples are located at ",(0,i.mdx)("strong",{parentName:"p"},"activej -> examples -> core -> bytebuf")))),(0,i.mdx)("h3",{id:"bytebuf-example"},"ByteBuf Example"),(0,i.mdx)("p",null,"If you run the example, you'll receive the following output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"0\n1\n2\n3\n4\n5\n\n[0, 1, 2, 3, 4, 5]\n\nHello\n\nSliced `ByteBuf` array: [1, 2, 3]\n\nArray of `ByteBuf` converted from `ByteBuffer`: [1, 2, 3]\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The first six lines are a result of wrapping a byte array to a ",(0,i.mdx)("inlineCode",{parentName:"li"},"ByteBuf")," wrapper for reading and then printing it:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/bytebuf/src/main/java/ByteBufExample.java tag=REGION_1",url:"/examples/core/bytebuf/src/main/java/ByteBufExample.java",tag:"REGION_1"},"byte[] data = new byte[]{0, 1, 2, 3, 4, 5};\nByteBuf byteBuf = ByteBuf.wrapForReading(data);\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The line ",(0,i.mdx)("inlineCode",{parentName:"li"},"[0, 1, 2, 3, 4, 5]")," is a result of converting an empty array of bytes to ",(0,i.mdx)("inlineCode",{parentName:"li"},"ByteBuf")," and wrapping them for\nwriting. Then the ",(0,i.mdx)("inlineCode",{parentName:"li"},"ByteBuf")," was filled with bytes with the help of ",(0,i.mdx)("inlineCode",{parentName:"li"},"while")," loop:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/bytebuf/src/main/java/ByteBufExample.java tag=REGION_2",url:"/examples/core/bytebuf/src/main/java/ByteBufExample.java",tag:"REGION_2"},"byte[] data = new byte[6];\nByteBuf byteBuf = ByteBuf.wrapForWriting(data);\nbyte value = 0;\nwhile (byteBuf.canWrite()) {\n  byteBuf.writeByte(value++);\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},'"Hello" line was first converted from String to ',(0,i.mdx)("inlineCode",{parentName:"li"},"ByteBuf")," and wrapped for reading, then represented as a String for\noutput with the help of ",(0,i.mdx)("inlineCode",{parentName:"li"},"byteBuf.asString()"),":")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/bytebuf/src/main/java/ByteBufExample.java tag=REGION_3",url:"/examples/core/bytebuf/src/main/java/ByteBufExample.java",tag:"REGION_3"},'String message = "Hello";\nByteBuf byteBuf = ByteBuf.wrapForReading(message.getBytes(UTF_8));\nString unWrappedMessage = byteBuf.asString(UTF_8);\n')),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The last two outputs represent some other possibilities of ",(0,i.mdx)("inlineCode",{parentName:"li"},"ByteBuf"),", such as slicing:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/bytebuf/src/main/java/ByteBufExample.java tag=REGION_4",url:"/examples/core/bytebuf/src/main/java/ByteBufExample.java",tag:"REGION_4"},"byte[] data = new byte[]{0, 1, 2, 3, 4, 5};\nByteBuf byteBuf = ByteBuf.wrap(data, 0, data.length);\nByteBuf slice = byteBuf.slice(1, 3);\n")),(0,i.mdx)("p",null,"and conversions of default ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuffer")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"ByteBuf"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/bytebuf/src/main/java/ByteBufExample.java tag=REGION_5",url:"/examples/core/bytebuf/src/main/java/ByteBufExample.java",tag:"REGION_5"},"ByteBuf byteBuf = ByteBuf.wrap(new byte[20], 0, 0);\nByteBuffer buffer = byteBuf.toWriteByteBuffer();\nbuffer.put((byte) 1);\nbuffer.put((byte) 2);\nbuffer.put((byte) 3);\nbyteBuf.ofWriteByteBuffer(buffer);\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(l.Z,{url:"/examples/core/bytebuf/src/main/java/ByteBufExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.mdx)("h3",{id:"bytebuf-pool-example"},"ByteBuf Pool Example"),(0,i.mdx)("p",null,"If you run the example, you'll receive the following output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"Length of array of allocated ByteBuf: 128\nNumber of ByteBufs in pool before recycling: 0\nNumber of ByteBufs in pool after recycling: 1\nNumber of ByteBufs in pool: 0\n\nSize of ByteBuf: 4\nRemaining bytes of ByteBuf after 3 bytes have been written: 1\nRemaining bytes of a new ByteBuf: 5\n\n[0, 1, 2, 3, 4, 5]\n")),(0,i.mdx)("p",null,"Let's have a look at the implementation:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/bytebuf/src/main/java/ByteBufPoolExample.java tag=EXAMPLE",url:"/examples/core/bytebuf/src/main/java/ByteBufPoolExample.java",tag:"EXAMPLE"},'public final class ByteBufPoolExample {\n  /* Setting ByteBufPool minSize and maxSize properties here for illustrative purposes.\n   Otherwise, ByteBufs with size less than 32 would not be placed into pool\n   */\n  static {\n    System.setProperty("ByteBufPool.minSize", "1");\n  }\n\n  private static void allocatingBufs() {\n    // Allocating a ByteBuf of 100 bytes\n    ByteBuf byteBuf = ByteBufPool.allocate(100);\n\n    // Allocated ByteBuf has an array with size equal to next power of 2, hence 128\n    System.out.println("Length of array of allocated ByteBuf: " + byteBuf.writeRemaining());\n\n    // Pool has 0 ByteBufs right now\n    System.out.println("Number of ByteBufs in pool before recycling: " + ByteBufPool.getStats().getPoolItems());\n\n    // Recycling ByteBuf to put it back to pool\n    byteBuf.recycle();\n\n    // Now pool consists of 1 ByteBuf that is the one we just recycled\n    System.out.println("Number of ByteBufs in pool after recycling: " + ByteBufPool.getStats().getPoolItems());\n\n    // Trying to allocate another ByteBuf\n    ByteBuf anotherByteBuf = ByteBufPool.allocate(123);\n\n    // Pool is now empty as the only ByteBuf in pool has just been taken from the pool\n    System.out.println("Number of ByteBufs in pool: " + ByteBufPool.getStats().getPoolItems());\n    System.out.println();\n  }\n\n  private static void ensuringWriteRemaining() {\n    ByteBuf byteBuf = ByteBufPool.allocate(3);\n\n    // Size is equal to power of 2 that is larger than 3, hence 4\n    System.out.println("Size of ByteBuf: " + byteBuf.writeRemaining());\n\n    byteBuf.write(new byte[]{0, 1, 2});\n\n    // After writing 3 bytes into ByteBuf we have only 1 spare byte in ByteBuf\n    System.out.println("Remaining bytes of ByteBuf after 3 bytes have been written: " + byteBuf.writeRemaining());\n\n    // We need to write 3 more bytes so we have to ensure that there are 3 spare bytes in ByteBuf\n    // and if there are not - create new ByteBuf with enough room for 3 bytes (old ByteBuf will get recycled)\n    ByteBuf newByteBuf = ByteBufPool.ensureWriteRemaining(byteBuf, 3);\n    System.out.println("Amount of ByteBufs in pool:" + ByteBufPool.getStats().getPoolItems());\n\n    // As we need to write 3 more bytes, we need a ByteBuf that can hold 6 bytes.\n    // The next power of 2 is 8, so considering 3 bytes that have already been written, new ByteBuf\n    // can store (8-3=5) more bytes\n    System.out.println("Remaining bytes of a new ByteBuf: " + newByteBuf.writeRemaining());\n\n    // Recycling a new ByteBuf (remember, the old one has already been recycled)\n    newByteBuf.recycle();\n    System.out.println();\n  }\n\n  private static void appendingBufs() {\n    ByteBuf bufOne = ByteBuf.wrapForReading(new byte[]{0, 1, 2});\n    ByteBuf bufTwo = ByteBuf.wrapForReading(new byte[]{3, 4, 5});\n\n    ByteBuf appendedBuf = ByteBufPool.append(bufOne, bufTwo);\n\n    // Appended ByteBuf consists of two ByteBufs, you don\'t have to worry about allocating ByteBuf\n    // with enough capacity or how to properly copy bytes, ByteBufPool will handle it for you\n    System.out.println(Arrays.toString(appendedBuf.asArray()));\n    System.out.println();\n  }\n\n  public static void main(String[] args) {\n    allocatingBufs();\n    ensuringWriteRemaining();\n    appendingBufs();\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(l.Z,{url:"/examples/core/bytebuf/src/main/java/ByteBufPoolExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,i.mdx)("h3",{id:"bytebufs-example"},"ByteBufs Example"),(0,i.mdx)("p",null,"If you run the example, you'll receive the following output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"bufs:2 bytes:7\n\nBuf taken from bufs: [0, 1, 2, 3]\n\nBuf taken from bufs: [3, 4, 5, 6, 7, 8]\n\n[1, 2, 3, 4]\n[5, 6, 7, 8]\nIs 'ByteBufs' empty? true\n")),(0,i.mdx)("p",null,"The first line represents our queue after we've added two bufs: ",(0,i.mdx)("inlineCode",{parentName:"p"},"[0, 1, 2, 3]")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"[3, 4, 5]")," with ",(0,i.mdx)("inlineCode",{parentName:"p"},"BUFS.add()")," method."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/bytebuf/src/main/java/ByteBufsExample.java tag=REGION_1",url:"/examples/core/bytebuf/src/main/java/ByteBufsExample.java",tag:"REGION_1"},"BUFS.add(ByteBuf.wrapForReading(new byte[]{0, 1, 2, 3}));\nBUFS.add(ByteBuf.wrapForReading(new byte[]{3, 4, 5}));\n\n// bufs consist of 2 Bufs at this moment\n")),(0,i.mdx)("p",null,"Then method ",(0,i.mdx)("inlineCode",{parentName:"p"},"BUFS.take()")," is applied and the first added buf, which is ",(0,i.mdx)("inlineCode",{parentName:"p"},"[0, 1, 2, 3]"),", is taken from the queue.\nThe next line represents the result of two operations: adding a new ",(0,i.mdx)("inlineCode",{parentName:"p"},"[6, 7, 8]")," buf and then applying\n",(0,i.mdx)("inlineCode",{parentName:"p"},"BUFS.takeRemaining()")," which takes all the remaining bufs from the queue."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/bytebuf/src/main/java/ByteBufsExample.java tag=REGION_2",url:"/examples/core/bytebuf/src/main/java/ByteBufsExample.java",tag:"REGION_2"},"// Adding one more ByteBuf to bufs\nBUFS.add(ByteBuf.wrapForReading(new byte[]{6, 7, 8}));\n\nByteBuf takenBuf = BUFS.takeRemaining();\n\n// Taken ByteBuf is combined of every ByteBuf that were in bufs\n")),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Pay attention to the difference between ",(0,i.mdx)("inlineCode",{parentName:"p"},"take()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"poll()")," ",(0,i.mdx)("strong",{parentName:"p"},"ByteBufs"),"\nmethods. When using ",(0,i.mdx)("inlineCode",{parentName:"p"},"take()"),", you must be sure that there is at least one ",(0,i.mdx)("em",{parentName:"p"},"ByteBuf")," remaining in the queue, otherwise\nuse ",(0,i.mdx)("inlineCode",{parentName:"p"},"poll()")," which can return ",(0,i.mdx)("inlineCode",{parentName:"p"},"null"),"."))),(0,i.mdx)("p",null,"Finally, the last three lines represent the following operations:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Creating two bufs: ",(0,i.mdx)("inlineCode",{parentName:"li"},"[1, 2, 3, 4]")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"[5, 6, 7, 8]"),"."),(0,i.mdx)("li",{parentName:"ul"},"Draining the queue to the consumer which prints the bufs."),(0,i.mdx)("li",{parentName:"ul"},"Then we check if the queue is empty now.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/bytebuf/src/main/java/ByteBufsExample.java tag=REGION_3",url:"/examples/core/bytebuf/src/main/java/ByteBufsExample.java",tag:"REGION_3"},'import io.activej.bytebuf.ByteBuf;\nimport io.activej.bytebuf.ByteBufs;\n\nimport java.util.Arrays;\n\npublic final class ByteBufsExample {\n  private static final ByteBufs BUFS = new ByteBufs();\n\n  private static void addingToBufs() {\n    //[START REGION_1]\n    BUFS.add(ByteBuf.wrapForReading(new byte[]{0, 1, 2, 3}));\n    BUFS.add(ByteBuf.wrapForReading(new byte[]{3, 4, 5}));\n\n    // bufs consist of 2 Bufs at this moment\n    //[END REGION_1]\n    System.out.println(BUFS);\n    System.out.println();\n  }\n\n  private static void takingBufOutOfBufs() {\n    ByteBuf takenBuf = BUFS.take();\n\n    // Buf that is taken is the one that was put in bufs first\n    System.out.println("Buf taken from bufs: " + Arrays.toString(takenBuf.asArray()));\n    System.out.println();\n  }\n\n  private static void takingEverythingOutOfBufs() {\n    //[START REGION_2]\n    // Adding one more ByteBuf to bufs\n    BUFS.add(ByteBuf.wrapForReading(new byte[]{6, 7, 8}));\n\n    ByteBuf takenBuf = BUFS.takeRemaining();\n\n    // Taken ByteBuf is combined of every ByteBuf that were in bufs\n    //[END REGION_2]\n    System.out.println("Buf taken from bufs: " + Arrays.toString(takenBuf.asArray()));\n    System.out.println("Is \'ByteBufs\' empty? " + BUFS.isEmpty());\n    System.out.println();\n  }\n\n  public static void main(String[] args) {\n    addingToBufs();\n    takingBufOutOfBufs();\n    takingEverythingOutOfBufs();\n  }\n}\n\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(l.Z,{url:"/examples/core/bytebuf/src/main/java/ByteBufsExample.java",mdxType:"Githublink"},"See full example on GitHub"))))}f.isMDXComponent=!0}}]);