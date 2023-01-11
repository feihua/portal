"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[2711],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),u=l,h=s["".concat(p,".").concat(u)]||s[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},360:function(e,t,n){n.r(t),n.d(t,{default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),r=["components"],i={},p={unversionedId:"goctl/template-cmd",id:"goctl/template-cmd",isDocsHomePage:!1,title:"Template Operation",description:"Template is the basis of data-driven generation, all code (rest api, rpc, model, docker, kube) generation will rely on template.",source:"@site/docs/goctl/template-cmd.md",sourceDirName:"goctl",slug:"/goctl/template-cmd",permalink:"/docs/goctl/template-cmd",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/goctl/template-cmd.md",version:"current",lastUpdatedAt:1673421018,formattedLastUpdatedAt:"1/11/2023",frontMatter:{},sidebar:"goctl",previous:{title:"Plugin Commands",permalink:"/docs/goctl/plugin"},next:{title:"More Commands",permalink:"/docs/goctl/other"}},c=[{value:"Help",id:"help",children:[]},{value:"Init",id:"init",children:[]},{value:"Clean",id:"clean",children:[]},{value:"Update",id:"update",children:[]},{value:"Revert",id:"revert",children:[]},{value:"Template loading",id:"template-loading",children:[]},{value:"Example",id:"example",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Template is the basis of data-driven generation, all code (rest api, rpc, model, docker, kube) generation will rely on template.\nBy default, the template generator selects the in-memory template for generation, while for developers who need to modify the template, they need to drop the template and make template changes in the next code generation.\nFor developers who need to modify the templates, they need to modify the templates, and then the next time the code is generated, it will load the templates under the specified path to generate."),(0,o.kt)("h2",{id:"help"},"Help"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl template -h\nNAME:\n   goctl template - template operation\n\nUSAGE:\n   goctl template command [command options] [arguments...]\n\nCOMMANDS:\n   init    initialize the all templates(force update)\n   clean   clean the all cache templates\n   update  update template of the target category to the latest\n   revert  revert the target template to the latest\n\nOPTIONS:\n   --help, -h  show help\n")),(0,o.kt)("h2",{id:"init"},"Init"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl template init -h\nNAME:\n   goctl template init - initialize the all templates(force update)\n\nUSAGE:\n   goctl template init [command options] [arguments...]\n\nOPTIONS:\n   --home value  the goctl home path of the template\n")),(0,o.kt)("h2",{id:"clean"},"Clean"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl template clean -h\nNAME:\n   goctl template clean - clean the all cache templates\n\nUSAGE:\n   goctl template clean [command options] [arguments...]\n\nOPTIONS:\n   --home value  the goctl home path of the template\n")),(0,o.kt)("h2",{id:"update"},"Update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl template update -h\nNAME:\n   goctl template update - update template of the target category to the latest\n\nUSAGE:\n   goctl template update [command options] [arguments...]\n\nOPTIONS:\n   --category value, -c value  the category of template, enum [api,rpc,model,docker,kube]\n   --home value                the goctl home path of the template\n")),(0,o.kt)("h2",{id:"revert"},"Revert"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl template revert -h\nNAME:\n   goctl template revert - revert the target template to the latest\n\nUSAGE:\n   goctl template revert [command options] [arguments...]\n\nOPTIONS:\n   --category value, -c value  the category of template, enum [api,rpc,model,docker,kube]\n   --name value, -n value      the target file name of template\n   --home value                the goctl home path of the template\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"--home")," Specify the template storage path"))),(0,o.kt)("h2",{id:"template-loading"},"Template loading"),(0,o.kt)("p",null,"You can specify the folder where the template is located by ",(0,o.kt)("inlineCode",{parentName:"p"},"--home")," during code generation, and the commands that have been supported to specify the template directory are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"goctl api go")," Details can be found in ",(0,o.kt)("inlineCode",{parentName:"li"},"goctl api go --help")," for help"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"goctl docker")," Details can be viewed with ",(0,o.kt)("inlineCode",{parentName:"li"},"goctl docker --help")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"goctl kube")," Details can be viewed with ",(0,o.kt)("inlineCode",{parentName:"li"},"goctl kube --help")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"goctl rpc new")," Details can be viewed with ",(0,o.kt)("inlineCode",{parentName:"li"},"goctl rpc new --help")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"goctl rpc protoc")," Details can be viewed with ",(0,o.kt)("inlineCode",{parentName:"li"},"goctl rpc protoc --help")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"goctl model mysql ddl")," Details can be viewed with ",(0,o.kt)("inlineCode",{parentName:"li"},"goctl model mysql ddl --help")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"goctl model mysql datasource")," Details can be viewed with ",(0,o.kt)("inlineCode",{parentName:"li"},"goctl model mysql datasource --help")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"goctl model postgresql datasource")," Details can be viewed with ",(0,o.kt)("inlineCode",{parentName:"li"},"goctl model mysql datasource --help")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"goctl model mongo")," Details can be viewed with ",(0,o.kt)("inlineCode",{parentName:"li"},"goctl model mongo --help"))),(0,o.kt)("p",null,"The default (when ",(0,o.kt)("inlineCode",{parentName:"p"},"--home")," is not specified) is to read from the ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.goctl")," directory."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initialize the template to the specified ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/template")," directory")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl template init --home $HOME/template \nTemplates are generated in /Users/anqiansong/template, edit on your risk!\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Greet rpc generation using ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/template")," template")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl rpc new greet --home $HOME/template\nDone\n")))}d.isMDXComponent=!0}}]);