"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[339],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return t?r.createElement(g,l(l({ref:n},d),{},{components:t})):r.createElement(g,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5784:function(e,n,t){t.r(n),t.d(n,{default:function(){return s},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],c={},o={unversionedId:"advance/middleware",id:"advance/middleware",isDocsHomePage:!1,title:"\u4e2d\u95f4\u4ef6\u4f7f\u7528",description:"\u5728\u4e0a\u4e00\u8282\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u600e\u4e48\u4f7f\u7528jwt\u9274\u6743\uff0c\u76f8\u4fe1\u4f60\u5df2\u7ecf\u638c\u63e1\u4e86\u5bf9jwt\u7684\u57fa\u672c\u4f7f\u7528\uff0c\u672c\u8282\u6211\u4eec\u6765\u770b\u4e00\u4e0bapi\u670d\u52a1\u4e2d\u95f4\u4ef6\u600e\u4e48\u4f7f\u7528\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/advance/middleware.md",sourceDirName:"advance",slug:"/advance/middleware",permalink:"/cn/docs/advance/middleware",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/advance/middleware.md",version:"current",lastUpdatedAt:1673421018,formattedLastUpdatedAt:"1/11/2023",frontMatter:{},sidebar:"docs",previous:{title:"jwt\u9274\u6743",permalink:"/cn/docs/advance/jwt"},next:{title:"rpc\u7f16\u5199\u4e0e\u8c03\u7528",permalink:"/cn/docs/advance/rpc-call"}},p=[{value:"\u4e2d\u95f4\u4ef6\u5206\u7c7b",id:"\u4e2d\u95f4\u4ef6\u5206\u7c7b",children:[]},{value:"\u4e2d\u95f4\u4ef6\u4f7f\u7528",id:"\u4e2d\u95f4\u4ef6\u4f7f\u7528",children:[{value:"\u8def\u7531\u4e2d\u95f4\u4ef6",id:"\u8def\u7531\u4e2d\u95f4\u4ef6",children:[]},{value:"\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u5168\u5c40\u4e2d\u95f4\u4ef6",children:[]},{value:"\u5728\u4e2d\u95f4\u4ef6\u91cc\u8c03\u7528\u5176\u5b83\u670d\u52a1",id:"\u5728\u4e2d\u95f4\u4ef6\u91cc\u8c03\u7528\u5176\u5b83\u670d\u52a1",children:[]}]}],d={toc:p};function s(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u4e0a\u4e00\u8282\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u600e\u4e48\u4f7f\u7528jwt\u9274\u6743\uff0c\u76f8\u4fe1\u4f60\u5df2\u7ecf\u638c\u63e1\u4e86\u5bf9jwt\u7684\u57fa\u672c\u4f7f\u7528\uff0c\u672c\u8282\u6211\u4eec\u6765\u770b\u4e00\u4e0bapi\u670d\u52a1\u4e2d\u95f4\u4ef6\u600e\u4e48\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u4e2d\u95f4\u4ef6\u5206\u7c7b"},"\u4e2d\u95f4\u4ef6\u5206\u7c7b"),(0,i.kt)("p",null,"\u5728go-zero\u4e2d\uff0c\u4e2d\u95f4\u4ef6\u53ef\u4ee5\u5206\u4e3a\u8def\u7531\u4e2d\u95f4\u4ef6\u548c\u5168\u5c40\u4e2d\u95f4\u4ef6\uff0c\u8def\u7531\u4e2d\u95f4\u4ef6\u662f\u6307\u67d0\u4e00\u4e9b\u7279\u5b9a\u8def\u7531\u9700\u8981\u5b9e\u73b0\u4e2d\u95f4\u4ef6\u903b\u8f91\uff0c\u5176\u548cjwt\u7c7b\u4f3c\uff0c\u6ca1\u6709\u653e\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"jwt:xxx"),"\u4e0b\u7684\u8def\u7531\u4e0d\u4f1a\u4f7f\u7528\u4e2d\u95f4\u4ef6\u529f\u80fd\uff0c\n\u800c\u5168\u5c40\u4e2d\u95f4\u4ef6\u7684\u670d\u52a1\u8303\u56f4\u5219\u662f\u6574\u4e2a\u670d\u52a1\u3002"),(0,i.kt)("h2",{id:"\u4e2d\u95f4\u4ef6\u4f7f\u7528"},"\u4e2d\u95f4\u4ef6\u4f7f\u7528"),(0,i.kt)("p",null,"\u8fd9\u91cc\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"search"),"\u670d\u52a1\u4e3a\u4f8b\u6765\u6f14\u793a\u4e2d\u95f4\u4ef6\u7684\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u8def\u7531\u4e2d\u95f4\u4ef6"},"\u8def\u7531\u4e2d\u95f4\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u91cd\u65b0\u7f16\u5199",(0,i.kt)("inlineCode",{parentName:"p"},"search.api"),"\u6587\u4ef6\uff0c\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"middleware"),"\u58f0\u660e"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd service/search/api\n$ vim search.api\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"type SearchReq struct {}\n\ntype SearchReply struct {}\n\n@server(\n    jwt: Auth\n    middleware: Example // \u8def\u7531\u4e2d\u95f4\u4ef6\u58f0\u660e\n)\nservice search-api {\n    @handler search\n    get /search/do (SearchReq) returns (SearchReply)\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u91cd\u65b0\u751f\u6210api\u4ee3\u7801"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl api go -api search.api -dir . \n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"etc/search-api.yaml exists, ignored generation\ninternal/config/config.go exists, ignored generation\nsearch.go exists, ignored generation\ninternal/svc/servicecontext.go exists, ignored generation\ninternal/handler/searchhandler.go exists, ignored generation\ninternal/handler/pinghandler.go exists, ignored generation\ninternal/logic/searchlogic.go exists, ignored generation\ninternal/logic/pinglogic.go exists, ignored generation\nDone.\n")),(0,i.kt)("p",{parentName:"li"},"  \u751f\u6210\u5b8c\u540e\u4f1a\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"internal"),"\u76ee\u5f55\u4e0b\u591a\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"middleware"),"\u7684\u76ee\u5f55\uff0c\u8fd9\u91cc\u5373\u4e2d\u95f4\u4ef6\u6587\u4ef6\uff0c\u540e\u7eed\u4e2d\u95f4\u4ef6\u7684\u5b9e\u73b0\u903b\u8f91\u4e5f\u5728\u8fd9\u91cc\u7f16\u5199\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b8c\u5584\u8d44\u6e90\u4f9d\u8d56",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceContext")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/internal/svc/servicecontext.go\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type ServiceContext struct {\n    Config config.Config\n    Example rest.Middleware\n}\n\nfunc NewServiceContext(c config.Config) *ServiceContext {\n    return &ServiceContext{\n        Config: c,\n        Example: middleware.NewExampleMiddleware().Handle,\n    }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7f16\u5199\u4e2d\u95f4\u4ef6\u903b\u8f91\n\u8fd9\u91cc\u4ec5\u6dfb\u52a0\u4e00\u884c\u65e5\u5fd7\uff0c\u5185\u5bb9example middle\uff0c\u5982\u679c\u670d\u52a1\u8fd0\u884c\u8f93\u51faexample middle\u5219\u4ee3\u8868\u4e2d\u95f4\u4ef6\u4f7f\u7528\u8d77\u6765\u4e86\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/internal/middleware/examplemiddleware.go\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package middleware\n\nimport "net/http"\n\ntype ExampleMiddleware struct {\n}\n\nfunc NewExampleMiddleware() *ExampleMiddleware {\n        return &ExampleMiddleware{}\n}\n\nfunc (m *ExampleMiddleware) Handle(next http.HandlerFunc) http.HandlerFunc {\n    logx.Info("example middle")\n    return func(w http.ResponseWriter, r *http.Request) {\n        // TODO generate middleware implement function, delete after code implementation\n\n        // Passthrough to next handler if need\n        next(w, r)\n    }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u542f\u52a8\u670d\u52a1\u9a8c\u8bc1"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},'{"@timestamp":"2021-02-09T11:32:57.931+08","level":"info","content":"example middle"}\n')))),(0,i.kt)("h3",{id:"\u5168\u5c40\u4e2d\u95f4\u4ef6"},"\u5168\u5c40\u4e2d\u95f4\u4ef6"),(0,i.kt)("p",null,"\u901a\u8fc7rest.Server\u63d0\u4f9b\u7684Use\u65b9\u6cd5\u5373\u53ef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    flag.Parse()\n\n    var c config.Config\n    conf.MustLoad(*configFile, &c)\n\n    ctx := svc.NewServiceContext(c)\n    server := rest.MustNewServer(c.RestConf)\n    defer server.Stop()\n\n    // \u5168\u5c40\u4e2d\u95f4\u4ef6\n    server.Use(func(next http.HandlerFunc) http.HandlerFunc {\n        return func(w http.ResponseWriter, r *http.Request) {\n            logx.Info("global middleware")\n            next(w, r)\n        }\n    })\n    handler.RegisterHandlers(server, ctx)\n\n    fmt.Printf("Starting server at %s:%d...\\n", c.Host, c.Port)\n    server.Start()\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'{"@timestamp":"2021-02-09T11:50:15.388+08","level":"info","content":"global middleware"}\n')),(0,i.kt)("h3",{id:"\u5728\u4e2d\u95f4\u4ef6\u91cc\u8c03\u7528\u5176\u5b83\u670d\u52a1"},"\u5728\u4e2d\u95f4\u4ef6\u91cc\u8c03\u7528\u5176\u5b83\u670d\u52a1"),(0,i.kt)("p",null,"\u901a\u8fc7\u95ed\u5305\u7684\u65b9\u5f0f\u628a\u5176\u5b83\u670d\u52a1\u4f20\u9012\u7ed9\u4e2d\u95f4\u4ef6\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// \u6a21\u62df\u7684\u5176\u5b83\u670d\u52a1\ntype AnotherService struct{}\n\nfunc (s *AnotherService) GetToken() string {\n    return stringx.Rand()\n}\n\n// \u5e38\u89c4\u4e2d\u95f4\u4ef6\nfunc middleware(next http.HandlerFunc) http.HandlerFunc {\n    return func(w http.ResponseWriter, r *http.Request) {\n        w.Header().Add("X-Middleware", "static-middleware")\n        next(w, r)\n    }\n}\n\n// \u8c03\u7528\u5176\u5b83\u670d\u52a1\u7684\u4e2d\u95f4\u4ef6\nfunc middlewareWithAnotherService(s *AnotherService) rest.Middleware {\n    return func(next http.HandlerFunc) http.HandlerFunc {\n        return func(w http.ResponseWriter, r *http.Request) {\n            w.Header().Add("X-Middleware", s.GetToken())\n            next(w, r)\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u5b8c\u6574\u4ee3\u7801\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-examples/tree/main/http/middleware"},"https://github.com/zeromicro/zero-examples/tree/main/http/middleware")))}s.isMDXComponent=!0}}]);