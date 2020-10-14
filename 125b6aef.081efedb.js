(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(1),a=n(9),r=(n(0),n(178)),i={id:"proxying-api-requests-in-development",title:"Proxying API Requests in Development",sidebar_label:"Proxying in Development"},p=[{value:'"Invalid Host Header" Errors After Configuring Proxy',id:"invalid-host-header-errors-after-configuring-proxy",children:[]},{value:"Configuring the Proxy Manually",id:"configuring-the-proxy-manually",children:[]}],s={id:"proxying-api-requests-in-development",title:"Proxying API Requests in Development",description:"> Note: this feature is available with `react-scripts@0.2.3` and higher.\r",source:"@site/..\\docs\\proxying-api-requests-in-development.md",permalink:"/xinge/docs/proxying-api-requests-in-development",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/proxying-api-requests-in-development.md",lastUpdatedBy:"jianyongliu",lastUpdatedAt:1602661662,sidebar_label:"Proxying in Development",sidebar:"docs",previous:{title:"Debugging Tests",permalink:"/xinge/docs/debugging-tests"},next:{title:"Fetching Data with AJAX Requests",permalink:"/xinge/docs/fetching-data-with-ajax-requests"}},l={rightToc:p,metadata:s},c="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(c,Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@0.2.3")," and higher.")),Object(r.b)("p",null,"People often serve the front-end React app from the same host and port as their backend implementation."),Object(r.b)("p",null,"For example, a production setup might look like this after the app is deployed:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"/             - static server returns index.html with React app\n/todos        - static server returns index.html with React app\n/api/todos    - server handles any /api/* requests using the backend implementation\n")),Object(r.b)("p",null,"Such setup is ",Object(r.b)("strong",{parentName:"p"},"not")," required. However, if you ",Object(r.b)("strong",{parentName:"p"},"do")," have a setup like this, it is convenient to write requests like ",Object(r.b)("inlineCode",{parentName:"p"},"fetch('/api/todos')")," without worrying about redirecting them to another host or port during development."),Object(r.b)("p",null,"To tell the development server to proxy any unknown requests to your API server in development, add a ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," field to your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),", for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'  "proxy": "http://localhost:4000",\n')),Object(r.b)("p",null,"This way, when you ",Object(r.b)("inlineCode",{parentName:"p"},"fetch('/api/todos')")," in development, the development server will recognize that it\u2019s not a static asset, and will proxy your request to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:4000/api/todos")," as a fallback. The development server will ",Object(r.b)("strong",{parentName:"p"},"only")," attempt to send requests without ",Object(r.b)("inlineCode",{parentName:"p"},"text/html")," in its ",Object(r.b)("inlineCode",{parentName:"p"},"Accept")," header to the proxy."),Object(r.b)("p",null,"Conveniently, this avoids ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations"}),"CORS issues")," and error messages like this in development:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.\n")),Object(r.b)("p",null,"Keep in mind that ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," only has effect in development (with ",Object(r.b)("inlineCode",{parentName:"p"},"npm start"),"), and it is up to you to ensure that URLs like ",Object(r.b)("inlineCode",{parentName:"p"},"/api/todos")," point to the right thing in production. You don\u2019t have to use the ",Object(r.b)("inlineCode",{parentName:"p"},"/api")," prefix. Any unrecognized request without a ",Object(r.b)("inlineCode",{parentName:"p"},"text/html")," accept header will be redirected to the specified ",Object(r.b)("inlineCode",{parentName:"p"},"proxy"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," option supports HTTP, HTTPS and WebSocket connections."),Object(r.b)("p",null,"If the ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," option is ",Object(r.b)("strong",{parentName:"p"},"not")," flexible enough for you, alternatively you can:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#configuring-the-proxy-manually"}),"Configure the proxy yourself")),Object(r.b)("li",{parentName:"ul"},"Enable CORS on your server (",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://enable-cors.org/server_expressjs.html"}),"here\u2019s how to do it for Express"),")."),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/xinge/docs/adding-custom-environment-variables"}),"environment variables")," to inject the right server host and port into your app.")),Object(r.b)("h2",{id:"invalid-host-header-errors-after-configuring-proxy"},'"Invalid Host Header" Errors After Configuring Proxy'),Object(r.b)("p",null,"When you enable the ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," option, you opt into a more strict set of host checks. This is necessary because leaving the backend open to remote hosts makes your computer vulnerable to DNS rebinding attacks. The issue is explained in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a"}),"this article")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/webpack/webpack-dev-server/issues/887"}),"this issue"),"."),Object(r.b)("p",null,"This shouldn\u2019t affect you when developing on ",Object(r.b)("inlineCode",{parentName:"p"},"localhost"),", but if you develop remotely like ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/2271"}),"described here"),", you will see this error in the browser after enabling the ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," option:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Invalid Host header")),Object(r.b)("p",null,"To work around it, you can specify your public development host in a file called ",Object(r.b)("inlineCode",{parentName:"p"},".env.development")," in the root of your project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"HOST=mypublicdevhost.com\n")),Object(r.b)("p",null,"If you restart the development server now and load the app from the specified host, it should work."),Object(r.b)("p",null,"If you are still having issues or if you\u2019re using a more exotic environment like a cloud editor, you can bypass the host check completely by adding a line to ",Object(r.b)("inlineCode",{parentName:"p"},".env.development.local"),". ",Object(r.b)("strong",{parentName:"p"},"Note that this is dangerous and exposes your machine to remote code execution from malicious websites:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"# NOTE: THIS IS DANGEROUS!\n# It exposes your machine to attacks from the websites you visit.\nDANGEROUSLY_DISABLE_HOST_CHECK=true\n")),Object(r.b)("p",null,"We don\u2019t recommend this approach."),Object(r.b)("h2",{id:"configuring-the-proxy-manually"},"Configuring the Proxy Manually"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),Object(r.b)("p",null,"If the ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," option is ",Object(r.b)("strong",{parentName:"p"},"not")," flexible enough for you, you can get direct access to the Express app instance and hook up your own proxy middleware."),Object(r.b)("p",null,"You can use this feature in conjunction with the ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," property in ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),", but it is recommended you consolidate all of your logic into ",Object(r.b)("inlineCode",{parentName:"p"},"src/setupProxy.js"),"."),Object(r.b)("p",null,"First, install ",Object(r.b)("inlineCode",{parentName:"p"},"http-proxy-middleware")," using npm or Yarn:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ npm install http-proxy-middleware --save\n$ # or\n$ yarn add http-proxy-middleware\n")),Object(r.b)("p",null,"Next, create ",Object(r.b)("inlineCode",{parentName:"p"},"src/setupProxy.js")," and place the following contents in it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const { createProxyMiddleware } = require('http-proxy-middleware');\n\nmodule.exports = function(app) {\n  // ...\n};\n")),Object(r.b)("p",null,"You can now register proxies as you wish! Here's an example using the above ",Object(r.b)("inlineCode",{parentName:"p"},"http-proxy-middleware"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const { createProxyMiddleware } = require('http-proxy-middleware');\n\nmodule.exports = function(app) {\n  app.use(\n    '/api',\n    createProxyMiddleware({\n      target: 'http://localhost:5000',\n      changeOrigin: true,\n    })\n  );\n};\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," You do not need to import this file anywhere. It is automatically registered when you start the development server.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," This file only supports Node's JavaScript syntax. Be sure to only use supported language features (i.e. no support for Flow, ES Modules, etc).")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," Passing the path to the proxy function allows you to use globbing and/or pattern matching on the path, which is more flexible than the express route matching.")))}b.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o),r=a.a.createContext({}),i=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},p=function(e){var t=i(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},c=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),c=i(n),b=o,u=c[p+"."+b]||c[b]||l[b]||r;return n?a.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var b=2;b<r;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);