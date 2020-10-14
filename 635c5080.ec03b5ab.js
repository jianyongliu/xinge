(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(1),a=n(9),o=(n(0),n(178)),r={id:"production-build",title:"Creating a Production Build"},c=[{value:"Static File Caching",id:"static-file-caching",children:[]},{value:"Profiling",id:"profiling",children:[]}],l={id:"production-build",title:"Creating a Production Build",description:"`npm run build` creates a `build` directory with a production build of your app. Inside the `build/static` directory will be your JavaScript and CSS files. Each filename inside of `build/static` will contain a unique hash of the file contents. This hash in the file name enables [long term caching techniques](#static-file-caching).\r",source:"@site/..\\docs\\production-build.md",permalink:"/xinge/docs/production-build",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/production-build.md",lastUpdatedBy:"jianyongliu",lastUpdatedAt:1602661662,sidebar:"docs",previous:{title:"Measuring Performance",permalink:"/xinge/docs/measuring-performance"},next:{title:"Running Tests",permalink:"/xinge/docs/running-tests"}},s={rightToc:c,metadata:l},d="wrapper";function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(d,Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npm run build")," creates a ",Object(o.b)("inlineCode",{parentName:"p"},"build")," directory with a production build of your app. Inside the ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," directory will be your JavaScript and CSS files. Each filename inside of ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," will contain a unique hash of the file contents. This hash in the file name enables ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#static-file-caching"}),"long term caching techniques"),"."),Object(o.b)("p",null,"When running a production build of freshly created Create React App application, there are a number of ",Object(o.b)("inlineCode",{parentName:"p"},".js")," files (called ",Object(o.b)("em",{parentName:"p"},"chunks"),") that are generated and placed in the ",Object(o.b)("inlineCode",{parentName:"p"},"build/static/js")," directory:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"main.[hash].chunk.js")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This is your ",Object(o.b)("em",{parentName:"li"},"application")," code. ",Object(o.b)("inlineCode",{parentName:"li"},"App.js"),", etc.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"[number].[hash].chunk.js")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"These files can either be ",Object(o.b)("em",{parentName:"li"},"vendor")," code, or ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/xinge/docs/code-splitting"}),"code splitting chunks"),". ",Object(o.b)("em",{parentName:"li"},"Vendor")," code includes modules that you've imported from within ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules"),". One of the potential advantages with splitting your ",Object(o.b)("em",{parentName:"li"},"vendor")," and ",Object(o.b)("em",{parentName:"li"},"application")," code is to enable ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#static-file-caching"}),"long term caching techniques")," to improve application loading performance. Since ",Object(o.b)("em",{parentName:"li"},"vendor")," code tends to change less often than the actual ",Object(o.b)("em",{parentName:"li"},"application")," code, the browser will be able to cache them separately, and won't re-download them each time the app code changes.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"runtime-main.[hash].js")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This is a small chunk of ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://webpack.js.org/configuration/optimization/#optimization-runtimechunk"}),"webpack runtime")," logic which is used to load and run your application. The contents of this will be embedded in your ",Object(o.b)("inlineCode",{parentName:"li"},"build/index.html")," file by default to save an additional network request. You can opt out of this by specifying ",Object(o.b)("inlineCode",{parentName:"li"},"INLINE_RUNTIME_CHUNK=false")," as documented in our ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/xinge/docs/advanced-configuration"}),"advanced configuration"),", which will load this chunk instead of embedding it in your ",Object(o.b)("inlineCode",{parentName:"li"},"index.html"),".")),Object(o.b)("p",null,"If you're using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/xinge/docs/code-splitting"}),"code splitting")," to split up your application, this will create additional chunks in the ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," folder as well."),Object(o.b)("h2",{id:"static-file-caching"},"Static File Caching"),Object(o.b)("p",null,"Each file inside of the ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," directory will have a unique hash appended to the filename that is generated based on the contents of the file, which allows you to use ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#invalidating_and_updating_cached_responses"}),"aggressive caching techniques")," to avoid the browser re-downloading your assets if the file contents haven't changed. If the contents of a file changes in a subsequent build, the filename hash that is generated will be different."),Object(o.b)("p",null,"To deliver the best performance to your users, it's best practice to specify a ",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control")," header for ",Object(o.b)("inlineCode",{parentName:"p"},"index.html"),", as well as the files within ",Object(o.b)("inlineCode",{parentName:"p"},"build/static"),". This header allows you to control the length of time that the browser as well as CDNs will cache your static assets. If you aren't familiar with what ",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control")," does, see ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://jakearchibald.com/2016/caching-best-practices/"}),"this article")," for a great introduction."),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control: max-age=31536000")," for your ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," assets, and ",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control: no-cache")," for everything else is a safe and effective starting point that ensures your user's browser will always check for an updated ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file, and will cache all of the ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," files for one year. Note that you can use the one year expiration on ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," safely because the file contents hash is embedded into the filename."),Object(o.b)("h2",{id:"profiling"},"Profiling"),Object(o.b)("p",null,"ReactDOM automatically supports profiling in development mode for v16.5+, but since profiling adds some small\nadditional overhead it is opt-in for production mode. You can opt-in by using the ",Object(o.b)("inlineCode",{parentName:"p"},"--profile")," flag. Use ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build -- --profile")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yarn build --profile")," to enable profiling in the production build. See the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler"}),"React docs")," for details about profiling\nusing the React DevTools."))}p.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var i=n(0),a=n.n(i),o=a.a.createContext({}),r=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=r(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["components","mdxType","originalType","parentName"]),d=r(n),p=i,b=d[c+"."+p]||d[p]||s[p]||o;return n?a.a.createElement(b,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(b,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:i,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);