"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2829,8134],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>c});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){return function(t){var n=u(t.components);return r.createElement(e,a({},t,{components:n}))}},u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,b=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(b,s(s({ref:t},l),{},{components:n})):r.createElement(b,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},67514:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=(n(44996),["components"]),s={},p=void 0,l={type:"mdx",permalink:"/docs/plugins/sandbox/overview",source:"@site/src/embedded-pages/docs/plugins/sandbox/overview.mdx",description:"The Sandbox plugin enables Developers to test changes in their apps by pointing them to a sandbox environment. It provides a simple UI to set and modify the URL to a development host that acts as a sandbox directly on the desktop, which prevents you from entering potentially long and complicated URLs inside your app.",frontMatter:{}},c=[],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"The Sandbox plugin enables Developers to test changes in their apps by pointing them to a sandbox environment. It provides a simple UI to set and modify the URL to a development host that acts as a sandbox directly on the desktop, which prevents you from entering potentially long and complicated URLs inside your app."))}d.isMDXComponent=!0},53473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(67514),s=["components"],p={id:"sandbox",title:"Sandbox Plugin",sidebar_label:"Sandbox",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/sandbox/docs/overview.mdx"},l=void 0,c={unversionedId:"features/plugins/sandbox",id:"features/plugins/sandbox",title:"Sandbox Plugin",description:"\u2192 See setup instructions for the Sandbox plugin",source:"@site/../docs/features/plugins/sandbox.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/sandbox",permalink:"/docs/features/plugins/sandbox",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/sandbox/docs/overview.mdx",tags:[],version:"current",frontMatter:{id:"sandbox",title:"Sandbox Plugin",sidebar_label:"Sandbox",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/sandbox/docs/overview.mdx"},sidebar:"main",previous:{title:"Shared Preferences Viewer",permalink:"/docs/features/plugins/preferences"},next:{title:"UI Debugger (alpha)",permalink:"/docs/features/plugins/ui-debugger"}},u={},d=[],m={toc:d};function b(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"\u2192 ",(0,a.mdx)("a",{parentName:"p",href:"/docs/setup/plugins/sandbox"},"See setup instructions for the Sandbox plugin")),(0,a.mdx)(i.default,{mdxType:"Article"}))}b.isMDXComponent=!0}}]);