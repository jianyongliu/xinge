(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(1),o=n(9),r=(n(0),n(178)),i={id:"code-splitting",title:"Code Splitting"},c=[{value:"<code>moduleA.js</code>",id:"moduleajs",children:[]},{value:"<code>App.js</code>",id:"appjs",children:[]},{value:"With React Router",id:"with-react-router",children:[]}],l={id:"code-splitting",title:"Code Splitting",description:"Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.\r",source:"@site/..\\docs\\code-splitting.md",permalink:"/xinge/docs/code-splitting",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/code-splitting.md",lastUpdatedBy:"jianyongliu",lastUpdatedAt:1602661662,sidebar:"docs",previous:{title:"Using the Public Folder",permalink:"/xinge/docs/using-the-public-folder"},next:{title:"Installing a Dependency",permalink:"/xinge/docs/installing-a-dependency"}},p={rightToc:c,metadata:l},s="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(s,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand."),Object(r.b)("p",null,"This project setup supports code splitting via ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://2ality.com/2017/01/import-operator.html#loading-code-on-demand"}),"dynamic ",Object(r.b)("inlineCode",{parentName:"a"},"import()")),". Its ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tc39/proposal-dynamic-import"}),"proposal")," is in stage 4. The ",Object(r.b)("inlineCode",{parentName:"p"},"import()")," function-like form takes the module name as an argument and returns a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),Object(r.b)("inlineCode",{parentName:"a"},"Promise"))," which always resolves to the namespace object of the module."),Object(r.b)("p",null,"Here is an example:"),Object(r.b)("h2",{id:"moduleajs"},Object(r.b)("inlineCode",{parentName:"h2"},"moduleA.js")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const moduleA = 'Hello';\n\nexport { moduleA };\n")),Object(r.b)("h2",{id:"appjs"},Object(r.b)("inlineCode",{parentName:"h2"},"App.js")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\n\nclass App extends Component {\n  handleClick = () => {\n    import('./moduleA')\n      .then(({ moduleA }) => {\n        // Use moduleA\n      })\n      .catch(err => {\n        // Handle failure\n      });\n  };\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleClick}>Load</button>\n      </div>\n    );\n  }\n}\n\nexport default App;\n")),Object(r.b)("p",null,"This will make ",Object(r.b)("inlineCode",{parentName:"p"},"moduleA.js")," and all its unique dependencies as a separate chunk that only loads after the user clicks the 'Load' button. For more information on the chunks that are created, see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/xinge/docs/production-build"}),"production build")," section."),Object(r.b)("p",null,"You can also use it with ",Object(r.b)("inlineCode",{parentName:"p"},"async")," / ",Object(r.b)("inlineCode",{parentName:"p"},"await")," syntax if you prefer it."),Object(r.b)("h2",{id:"with-react-router"},"With React Router"),Object(r.b)("p",null,"If you are using React Router check out ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/code-splitting.html#route-based-code-splitting"}),"this tutorial")),Object(r.b)("p",null,"Also check out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/code-splitting.html"}),"Code Splitting")," section in React documentation."))}d.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),d=a,u=s[c+"."+d]||s[d]||p[d]||r;return n?o.a.createElement(u,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(u,Object.assign({},{ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<r;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);