(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(1),o=a(9),r=(a(0),a(178)),s={id:"adding-bootstrap",title:"Adding Bootstrap"},i=[{value:"Using a Custom Theme",id:"using-a-custom-theme",children:[]}],p={id:"adding-bootstrap",title:"Adding Bootstrap",description:"While you don\u2019t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. [React Bootstrap](https://react-bootstrap.netlify.com/) is the most popular option that strives for complete parity with Bootstrap. [reactstrap](https://reactstrap.github.io/) is also a good choice for projects looking for smaller builds at the expense of some features.",source:"@site/..\\docs\\adding-bootstrap.md",permalink:"/xinge/docs/adding-bootstrap",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/adding-bootstrap.md",lastUpdatedBy:"jianyongliu",lastUpdatedAt:1602661662,sidebar:"docs",previous:{title:"Using Global Variables",permalink:"/xinge/docs/using-global-variables"},next:{title:"Adding Flow",permalink:"/xinge/docs/adding-flow"}},c={rightToc:i,metadata:p},l="wrapper";function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"While you don\u2019t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-bootstrap.netlify.com/"}),"React Bootstrap")," is the most popular option that strives for complete parity with Bootstrap. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactstrap.github.io/"}),"reactstrap")," is also a good choice for projects looking for smaller builds at the expense of some features."),Object(r.b)("p",null,"Each project's respective documentation site has detailed instructions for installing and using them. Both depend on the Bootstrap css file so install that as well:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save bootstrap\n")),Object(r.b)("p",null,"Alternatively you may use ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn add bootstrap\n")),Object(r.b)("p",null,"Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your ",Object(r.b)("inlineCode",{parentName:"p"},"src/index.js")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import 'bootstrap/dist/css/bootstrap.css';\n// Put any other imports below so that CSS from your\n// components takes precedence over default styles.\n")),Object(r.b)("h2",{id:"using-a-custom-theme"},"Using a Custom Theme"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),Object(r.b)("p",null,"Sometimes you might need to tweak the visual styles of Bootstrap (or equivalent package)."),Object(r.b)("p",null,"As of ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," you can import ",Object(r.b)("inlineCode",{parentName:"p"},".scss")," files. This makes it possible to use a package's built-in Sass variables for global style preferences."),Object(r.b)("p",null,"To enable ",Object(r.b)("inlineCode",{parentName:"p"},"scss")," in Create React App you will need to install ",Object(r.b)("inlineCode",{parentName:"p"},"node-sass"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save node-sass\n")),Object(r.b)("p",null,"Alternatively you may use ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn add node-sass\n")),Object(r.b)("p",null,"To customize Bootstrap, create a file called ",Object(r.b)("inlineCode",{parentName:"p"},"src/custom.scss")," (or similar) and import the Bootstrap source stylesheet. Add any overrides ",Object(r.b)("em",{parentName:"p"},"before")," the imported file(s). You can reference ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.1/getting-started/theming/#css-variables"}),"Bootstrap's documentation")," for the names of the available variables."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"// Override default variables before the import\n$body-bg: #000;\n\n// Import Bootstrap and its default variables\n@import '~bootstrap/scss/bootstrap.scss';\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," You must prefix imports from ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," with ",Object(r.b)("inlineCode",{parentName:"p"},"~")," as displayed above.")),Object(r.b)("p",null,"Finally, import the newly created ",Object(r.b)("inlineCode",{parentName:"p"},".scss")," file instead of the default Bootstrap ",Object(r.b)("inlineCode",{parentName:"p"},".css")," in the beginning of your ",Object(r.b)("inlineCode",{parentName:"p"},"src/index.js")," file, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import './custom.scss';\n")))}b.isMDXComponent=!0},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n),r=o.a.createContext({}),s=function(e){var t=o.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=s(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),l=s(a),b=n,d=l[i+"."+b]||l[b]||c[b]||r;return a?o.a.createElement(d,Object.assign({},{ref:t},p,{components:a})):o.a.createElement(d,Object.assign({},{ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var b=2;b<r;b++)s[b]=a[b];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);