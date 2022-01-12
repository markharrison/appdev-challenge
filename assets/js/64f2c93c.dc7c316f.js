"use strict";(self.webpackChunkmarkharrison=self.webpackChunkmarkharrison||[]).push([[96],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(t),f=p,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:p,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9972:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(7462),p=t(3366),i=(t(7294),t(3905)),a=["components"],o={sidebar_position:53,slug:"/appendixc",sidebar_label:"Appendix C"},c="Azure AppDev Challenge",u={unversionedId:"Appendix/appendixC",id:"Appendix/appendixC",title:"Azure AppDev Challenge",description:"Appendix C \u2013 Suggested Schema",source:"@site/docs/03-Appendix/appendixC.md",sourceDirName:"03-Appendix",slug:"/appendixc",permalink:"/AppDevChallenge/appendixc",tags:[],version:"current",sidebarPosition:53,frontMatter:{sidebar_position:53,slug:"/appendixc",sidebar_label:"Appendix C"},sidebar:"tutorialSidebar",previous:{title:"Appendix B",permalink:"/AppDevChallenge/appendixb"},next:{title:"Appendix D",permalink:"/AppDevChallenge/appendixd"}},l=[{value:"Appendix C \u2013 Suggested Schema",id:"appendix-c--suggested-schema",children:[],level:2}],s={toc:l};function d(e){var n=e.components,t=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"azure-appdev-challenge"},"Azure AppDev Challenge"),(0,i.kt)("h2",{id:"appendix-c--suggested-schema"},"Appendix C \u2013 Suggested Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "properties": {\n        "DeviceId": { \n            "type": "number" \n            },\n            "Image": {\n            "type": "string"\n            },\n            "Latitude": {\n            "type": "number"\n            },\n            "Longitude": {\n            "type": "number"\n            },\n            "Name": {\n            "type": "string"\n            },\n            "Text": {\n            "type": "string"\n            }\n        },\n    "type": "object"\n}\n\n')))}d.isMDXComponent=!0}}]);