"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[491],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),v=a,f=m["".concat(c,".").concat(v)]||m[v]||u[v]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return v}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"ActiveJ 4.3 - Small improvements for multiple modules",hide_table_of_contents:!1},c=void 0,p={permalink:"/blog/2021/05/28/v4.3",source:"@site/blog/2021-05-28-v4.3.md",title:"ActiveJ 4.3 - Small improvements for multiple modules",description:"ActiveJ v4.3 was released May 28,",date:"2021-05-28T00:00:00.000Z",formattedDate:"May 28, 2021",tags:[],readingTime:.535,truncated:!1,authors:[],prevItem:{title:"ActiveJ 5.0-beta1 - Improved type resolution and more",permalink:"/blog/2021/06/30/v5.0-beta1"},nextItem:{title:"ActiveJ 4.2 - Expanded functionality",permalink:"/blog/2021/04/13/v4.2"}},s={authorsImageUrls:[]},u=[],m={toc:u};function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ActiveJ v4.3 was released May 28,\n2021 ",(0,o.kt)("small",null,"(",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej/4.3"},"see on Maven"),")"),". This release introduced\nsmall improvements for multiple modules."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added new method ",(0,o.kt)("inlineCode",{parentName:"li"},"onConnecting")," to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.3/core-http/src/main/java/io/activej/http/AsyncHttpClient.java"},"AsyncHttpClient"),"\n's ",(0,o.kt)("inlineCode",{parentName:"li"},"Inspector"),". Now, the number of connection that are being\nestablished can be monitored via ",(0,o.kt)("inlineCode",{parentName:"li"},"JmxInspector#getConnecting")," attribute"),(0,o.kt)("li",{parentName:"ul"},"When HTTP connection closes, the proper exception is propagated to HTTP request and response body suppliers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.3/core-eventloop/src/main/java/io/activej/eventloop/inspector/ThrottlingController.java"},"ThrottlingController"),"\nnow throttles all the processing if tasks consecutively execute for abnormally long time"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.3/core-datastream/src/main/java/io/activej/datastream/ForwardingStreamSupplier.java"},"ForwardingStreamSupplier"),"\nnow correctly binds peer ",(0,o.kt)("inlineCode",{parentName:"li"},"StreamSupplier")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"StreamConsumer")),(0,o.kt)("li",{parentName:"ul"},"Fixed asynchronous recursion in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.3/core-datastream/src/main/java/io/activej/datastream/csp/ChannelSerializer.java"},"ChannelSerializer")),(0,o.kt)("li",{parentName:"ul"},"Missing measures in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.3/extra/cloud-lsmt-aggregation/src/main/java/io/activej/aggregation/Aggregation.java"},"Aggregation"),"\nare initialized with default 'zero' values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v4.3/extra/cloud-lsmt-aggregation/src/main/java/io/activej/aggregation/measure/HyperLogLog.java"},"HyperLogLog"),"\nnow correctly adds ",(0,o.kt)("inlineCode",{parentName:"li"},"int")," values")))}v.isMDXComponent=!0}}]);