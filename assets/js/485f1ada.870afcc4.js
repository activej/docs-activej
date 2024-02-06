"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1949],{4521:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var n=i(5893),a=i(1151);const c={title:"ActiveJ 4.2 - Expanded functionality",hide_table_of_contents:!1},s=void 0,r={permalink:"/blog/2021/04/13/v4.2",source:"@site/blog/2021-04-13-v4.2.md",title:"ActiveJ 4.2 - Expanded functionality",description:"ActiveJ v4.2 was released Apr 13, 2021 (see on Maven). This release expanded",date:"2021-04-13T00:00:00.000Z",formattedDate:"April 13, 2021",tags:[],readingTime:.745,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ActiveJ 4.2 - Expanded functionality",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"ActiveJ 4.3 - Small improvements for multiple modules",permalink:"/blog/2021/05/28/v4.3"},nextItem:{title:"ActiveJ 4.1 - Optimization and simplification",permalink:"/blog/2021/03/19/v4.1"}},o={authorsImageUrls:[]},d=[];function l(e){const t={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["ActiveJ v4.2 was released Apr 13, 2021 (",(0,n.jsx)(t.a,{href:"https://mvnrepository.com/artifact/io.activej/activej/4.2",children:"see on Maven"}),"). This release expanded\nfunctionality of some components."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://github.com/activej/activej/tree/v4.2/extra/cloud-redis",children:"ActiveJ Redis client"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Added ",(0,n.jsx)(t.code,{children:"connect()"})," methods\nto ",(0,n.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisClient.java",children:"RedisClient"}),"\nthat take up authentication credentials"]}),"\n",(0,n.jsxs)(t.li,{children:["Added new specialized exceptions for ActiveJ Redis module:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisAuthenticationException.java",children:"RedisAuthenticationException"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisPermissionException.java",children:"RedisPermissionException"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.2/core-codegen/src/main/java/io/activej/record/RecordScheme.java",children:"RecordScheme"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Added ability to specify fields in ",(0,n.jsx)(t.code,{children:"RecordScheme"})," that would be used for ",(0,n.jsx)(t.code,{children:"equals()"})," and ",(0,n.jsx)(t.code,{children:"hashCode()"})," implementation"]}),"\n",(0,n.jsxs)(t.li,{children:["Added ability to specify fields that would be used to generate a record ",(0,n.jsx)(t.code,{children:"Comparator"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.2/util-common/src/main/java/io/activej/common/FileLocker.java",children:"FileLocker"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Made ",(0,n.jsx)(t.code,{children:"FileLocker"})," constructors public"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"FileLocker"})," now implements ",(0,n.jsx)(t.code,{children:"java.io.Closeable"})," interface"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/StateManager.java",children:"StateManager"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Added ",(0,n.jsx)(t.code,{children:"tryLoadSnapshot()"})," and ",(0,n.jsx)(t.code,{children:"tryLoadDiff()"})," methods that return ",(0,n.jsx)(t.code,{children:"null"})," rather than throwing an exception"]}),"\n",(0,n.jsxs)(t.li,{children:["Added ",(0,n.jsx)(t.code,{children:"tryLoad()"})," method to ",(0,n.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/file/FileStateManager.java",children:"FileStateManager"}),"\nthat returns ",(0,n.jsx)(t.code,{children:"null"})," rather than throwing an exception"]}),"\n",(0,n.jsxs)(t.li,{children:["Added ",(0,n.jsx)(t.code,{children:"save()"})," method to ",(0,n.jsx)(t.a,{href:"https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/file/FileStateManager.java",children:"FileStateManager"}),"\nthat takes up a revision for the state to be saved with"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Improved processing of HTTP requests with large URLs"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>s});var n=i(7294);const a={},c=n.createContext(a);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);