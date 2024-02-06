"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[2632],{1613:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(5893),s=t(1151),c=t(7618);const i={sidebar_label:"Benchmarks"},o="Benchmarks",a={id:"inject/benchmarks",title:"Benchmarks",description:"We compared ActiveJ Inject to Guice and Spring in the same scenario, using JMH as the benchmark tool.",source:"@site/docs/inject/benchmarks.mdx",sourceDirName:"inject",slug:"/inject/benchmarks",permalink:"/inject/benchmarks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Benchmarks"},sidebar:"docs",previous:{title:"Cookbook example",permalink:"/inject/cookbook-example"},next:{title:"Overview",permalink:"/codegen"}},m={},l=[];function h(e){const n={code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,r.jsxs)(n.p,{children:["We compared ",(0,r.jsx)(n.strong,{children:"ActiveJ Inject"})," to ",(0,r.jsx)(n.strong,{children:"Guice"})," and ",(0,r.jsx)(n.strong,{children:"Spring"})," in the same scenario, using JMH as the benchmark tool.\nWe ran the benchmarks in ",(0,r.jsx)(n.em,{children:"AverageTime"})," mode and made 20 measurements.\nAll measurement results are presented in nanoseconds."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"ActiveInjectScopesBenchmark.measure\nScore: 138.475; Error: \xb1 6.156; Units: ns/op;\n\nGuiceDiScopesBenchmark.measure\nScore: 780.017; Error: \xb1 23.994: Units: ns/op;\n\nSpringDiBenchmark.measure\nScore: 77191; Error: \xb1 322.6; Units: ns/op;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The benchmarks were run on a machine with the following parameters: Ubuntu 18.04 bionic,\nKernel: x86_64 Linux 4.15.0-55-generic,\nCPU: Intel Core i5-8400 @ 6x 4GHz [27.8\xb0C]."}),"\n",(0,r.jsxs)(n.p,{children:["You can find benchmark sources on ",(0,r.jsx)(c.Z,{text:"GitHub",url:"/benchmarks/inject/src/main/java/io/activej/inject"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7618:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var r=t(9962),s=t(5893);const c=e=>{let{url:n,text:t,isInline:c=!0,children:i}=e;const{siteConfig:o}=(0,r.Z)(),a=n.startsWith("/examples")?o.customFields.githubExamplesBranch:o.customFields.githubBranch;return(0,s.jsx)("a",{style:c?{}:{display:"block",marginBottom:"16px"},href:o.customFields.githubUrl+"/"+a+n,target:"_blank",children:t||i})}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(7294);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);