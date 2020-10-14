(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),i=(n(0),n(178)),o={id:"title-and-meta-tags",title:"Title and Meta Tags",sidebar_label:"Title & Meta Tags"},c=[{value:"Changing the title tag",id:"changing-the-title-tag",children:[]},{value:"Generating Dynamic <code>&lt;meta&gt;</code> Tags on the Server",id:"generating-dynamic-meta-tags-on-the-server",children:[]},{value:"Injecting Data from the Server into the Page",id:"injecting-data-from-the-server-into-the-page",children:[]}],l={id:"title-and-meta-tags",title:"Title and Meta Tags",description:"## Changing the title tag\r",source:"@site/..\\docs\\title-and-meta-tags.md",permalink:"/xinge/docs/title-and-meta-tags",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/title-and-meta-tags.md",lastUpdatedBy:"jianyongliu",lastUpdatedAt:1602661662,sidebar_label:"Title & Meta Tags",sidebar:"docs",previous:{title:"Integrating with an API Backend",permalink:"/xinge/docs/integrating-with-an-api-backend"},next:{title:"Deployment",permalink:"/xinge/docs/deployment"}},s={rightToc:c,metadata:l},d="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"changing-the-title-tag"},"Changing the title tag"),Object(i.b)("p",null,"You can find the source HTML file in the ",Object(i.b)("inlineCode",{parentName:"p"},"public")," folder of the generated project. You may edit the ",Object(i.b)("inlineCode",{parentName:"p"},"<title>")," tag in it to change the title from \u201cReact App\u201d to anything else."),Object(i.b)("p",null,"Note that normally you wouldn\u2019t edit files in the ",Object(i.b)("inlineCode",{parentName:"p"},"public")," folder very often. For example, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/xinge/docs/adding-a-stylesheet"}),"adding a stylesheet")," is done without touching the HTML."),Object(i.b)("p",null,"If you need to dynamically update the page title based on the content, you can use the browser ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/title"}),Object(i.b)("inlineCode",{parentName:"a"},"document.title"))," API. For more complex scenarios when you want to change the title from React components, you can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nfl/react-helmet"}),"React Helmet"),", a third party library."),Object(i.b)("p",null,"If you use a custom server for your app in production and want to modify the title before it gets sent to the browser, you can follow advice in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#generating-dynamic-meta-tags-on-the-server"}),"this section"),". Alternatively, you can pre-build each page as a static HTML file which then loads the JavaScript bundle, which is covered ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/xinge/docs/pre-rendering-into-static-html-files"}),"here"),"."),Object(i.b)("h2",{id:"generating-dynamic-meta-tags-on-the-server"},"Generating Dynamic ",Object(i.b)("inlineCode",{parentName:"h2"},"<meta>")," Tags on the Server"),Object(i.b)("p",null,"Since Create React App doesn\u2019t support server rendering, you might be wondering how to make ",Object(i.b)("inlineCode",{parentName:"p"},"<meta>")," tags dynamic and reflect the current URL. To solve this, we recommend to add placeholders into the HTML, like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta property="og:title" content="__OG_TITLE__" />\n    <meta property="og:description" content="__OG_DESCRIPTION__" />\n  </head>\n</html>\n')),Object(i.b)("p",null,"Then, on the server, regardless of the backend you use, you can read ",Object(i.b)("inlineCode",{parentName:"p"},"index.html")," into memory and replace ",Object(i.b)("inlineCode",{parentName:"p"},"__OG_TITLE__"),", ",Object(i.b)("inlineCode",{parentName:"p"},"__OG_DESCRIPTION__"),", and any other placeholders with values depending on the current URL. Make sure to sanitize and escape the interpolated values so that they are safe to embed into HTML!"),Object(i.b)("p",null,"If you use a Node server, you can even share the route matching logic between the client and the server. However duplicating it also works fine in basic cases."),Object(i.b)("h2",{id:"injecting-data-from-the-server-into-the-page"},"Injecting Data from the Server into the Page"),Object(i.b)("p",null,"Similarly to the previous section, you can leave some placeholders in the HTML that inject global variables, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<!doctype html>\n<html lang="en">\n  <head>\n    <script>\n      window.SERVER_DATA = __SERVER_DATA__;\n    <\/script>\n')),Object(i.b)("p",null,"Then, on the server, you can replace ",Object(i.b)("inlineCode",{parentName:"p"},"__SERVER_DATA__")," with a JSON of real data right before sending the response. The client code can then read ",Object(i.b)("inlineCode",{parentName:"p"},"window.SERVER_DATA")," to use it. ",Object(i.b)("strong",{parentName:"p"},"Make sure to ",Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0"}),"sanitize the JSON before sending it to the client")," as it makes your app vulnerable to XSS attacks.")))}p.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=o(n),p=a,h=d[c+"."+p]||d[p]||s[p]||i;return n?r.a.createElement(h,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(h,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);