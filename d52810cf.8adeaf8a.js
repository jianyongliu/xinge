(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"default",(function(){return u}));var o=n(1),a=n(9),r=(n(0),n(178)),i={id:"importing-a-component",title:"Importing a Component"},c=[{value:"<code>Button.js</code>",id:"buttonjs",children:[]},{value:"<code>DangerButton.js</code>",id:"dangerbuttonjs",children:[]},{value:"Absolute Imports",id:"absolute-imports",children:[]}],p={id:"importing-a-component",title:"Importing a Component",description:"This project setup supports ES6 modules thanks to webpack.\r",source:"@site/..\\docs\\importing-a-component.md",permalink:"/xinge/docs/importing-a-component",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/importing-a-component.md",lastUpdatedBy:"jianyongliu",lastUpdatedAt:1602661662,sidebar:"docs",previous:{title:"Installing a Dependency",permalink:"/xinge/docs/installing-a-dependency"},next:{title:"Using Global Variables",permalink:"/xinge/docs/using-global-variables"}},s={rightToc:c,metadata:p},l="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(l,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This project setup supports ES6 modules thanks to webpack."),Object(r.b)("p",null,"While you can still use ",Object(r.b)("inlineCode",{parentName:"p"},"require()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"module.exports"),", we encourage you to use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://exploringjs.com/es6/ch_modules.html"}),Object(r.b)("inlineCode",{parentName:"a"},"import")," and ",Object(r.b)("inlineCode",{parentName:"a"},"export"))," instead."),Object(r.b)("p",null,"For example:"),Object(r.b)("h2",{id:"buttonjs"},Object(r.b)("inlineCode",{parentName:"h2"},"Button.js")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\n\nclass Button extends Component {\n  render() {\n    // ...\n  }\n}\n\nexport default Button; // Don\u2019t forget to use export default!\n")),Object(r.b)("h2",{id:"dangerbuttonjs"},Object(r.b)("inlineCode",{parentName:"h2"},"DangerButton.js")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport Button from './Button'; // Import a component from another file\n\nclass DangerButton extends Component {\n  render() {\n    return <Button color=\"red\" />;\n  }\n}\n\nexport default DangerButton;\n")),Object(r.b)("p",null,"Be aware of the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281"}),"difference between default and named exports"),". It is a common source of mistakes."),Object(r.b)("p",null,"We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That\u2019s what you get when you use ",Object(r.b)("inlineCode",{parentName:"p"},"export default Button")," and ",Object(r.b)("inlineCode",{parentName:"p"},"import Button from './Button'"),"."),Object(r.b)("p",null,"Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like."),Object(r.b)("p",null,"Learn more about ES6 modules:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281"}),"When to use the curly braces?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://exploringjs.com/es6/ch_modules.html"}),"Exploring ES6: Modules")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules"}),"Understanding ES6: Modules"))),Object(r.b)("h2",{id:"absolute-imports"},"Absolute Imports"),Object(r.b)("p",null,"You can configure your application to support importing modules using absolute paths. This can be done by configuring a ",Object(r.b)("inlineCode",{parentName:"p"},"jsconfig.json")," or ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file in the root of your project. If you're using TypeScript in your project, you will already have a ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file."),Object(r.b)("p",null,"Below is an example ",Object(r.b)("inlineCode",{parentName:"p"},"jsconfig.json")," file for a JavaScript project. You can create the file if it doesn't already exist:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "baseUrl": "src"\n  },\n  "include": ["src"]\n}\n')),Object(r.b)("p",null,"If you're using TypeScript, you can configure the ",Object(r.b)("inlineCode",{parentName:"p"},"baseUrl")," setting inside the ",Object(r.b)("inlineCode",{parentName:"p"},"compilerOptions")," of your project's ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file."),Object(r.b)("p",null,"Now that you've configured your project to support absolute imports, if you want to import a module located at ",Object(r.b)("inlineCode",{parentName:"p"},"src/components/Button.js"),", you can import the module like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import Button from 'components/Button';\n")),Object(r.b)("p",null,"For more information on these configuration files, see the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/languages/jsconfig"}),"jsconfig.json reference")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"}),"tsconfig.json reference")," documentation."))}u.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o),r=a.a.createContext({}),i=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),l=i(n),u=o,b=l[c+"."+u]||l[u]||s[u]||r;return n?a.a.createElement(b,Object.assign({},{ref:t},p,{components:n})):a.a.createElement(b,Object.assign({},{ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);