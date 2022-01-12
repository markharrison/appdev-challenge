"use strict";(self.webpackChunkmarkharrison=self.webpackChunkmarkharrison||[]).push([[126],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9079:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:16,slug:"/day2-optiond",sidebar_label:"Day 2 - Option D"},s="Azure AppDev Challenge",l={unversionedId:"Day 2/day2optionD",id:"Day 2/day2optionD",title:"Azure AppDev Challenge",description:"Day 2 - Microservices & scale-out",source:"@site/docs/02-Day 2/day2optionD.md",sourceDirName:"02-Day 2",slug:"/day2-optiond",permalink:"/AppDevChallenge/day2-optiond",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,slug:"/day2-optiond",sidebar_label:"Day 2 - Option D"},sidebar:"tutorialSidebar",previous:{title:"Day 2 - Option C",permalink:"/AppDevChallenge/day2-optionc"},next:{title:"Day 2 - Option E",permalink:"/AppDevChallenge/day2-optione"}},p=[{value:"Day 2 - Microservices &amp; scale-out",id:"day-2---microservices--scale-out",children:[],level:2}],u={toc:p};function m(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"azure-appdev-challenge"},"Azure AppDev Challenge"),(0,a.kt)("h2",{id:"day-2---microservices--scale-out"},"Day 2 - Microservices & scale-out"),(0,a.kt)("p",null,"The Web / API applications are rather simple, but now consider that they are to be part of much larger microservices based architecture \u2013 and the requirement is be able to scale each microservice independently. These needs an orchestrator such as Kubernetes, SF, SF Mesh, other"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Convert Web/API applications to run as Docker containers"),(0,a.kt)("li",{parentName:"ul"},"Deploy into an Orchestrator \u2013 such as Kubernetes, SF, SF Mesh, other",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For the purpose of this hack and to be using Docker containers \u2013 using Web Apps for Containers is an OK approach."))),(0,a.kt)("li",{parentName:"ul"},"Amend CI build pipelines to build Docker images and push to Container Registry"),(0,a.kt)("li",{parentName:"ul"},"Amend CD release pipelines to deploy latest containers to orchestrator of choice"),(0,a.kt)("li",{parentName:"ul"},"Handle Scale \u2013 ramp up the load from IoT simulator (more map locations / faster updates)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ensure Orchestrator is configured to auto-scale")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7335).Z})),(0,a.kt)("p",null,"Useful Resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-registry/"},"https://docs.microsoft.com/azure/container-registry/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/aspnet/core/host-and-deploy/docker/"},"https://docs.microsoft.com/aspnet/core/host-and-deploy/docker/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/aks/"},"https://docs.microsoft.com/azure/aks/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/app-service/containers/tutorial-custom-docker-image"},"https://docs.microsoft.com/azure/app-service/containers/tutorial-custom-docker-image"))))}m.isMDXComponent=!0},7335:function(e,t,r){t.Z=r.p+"assets/images/slide17-ff1cd3a1a78d57a305acf261099e1f50.png"}}]);