(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var n=a(0),r=a.n(n),i=a(155),l=a(160);t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(l.a,{slug:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.date,excerpt:t.excerpt}),r.a.createElement("p",null))}))};var o="474252044"},151:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(152);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Pan-African"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},155:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(151),u=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"forestgreen",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))),i.a.createElement("div",null,i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Home"),i.a.createElement("spn",{style:{color:"white"}},"|"),i.a.createElement(c.a,{to:"/collections/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Collections"),i.a.createElement("spn",{style:{color:"white"}},"|"),i.a.createElement(c.a,{to:"/countries/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Search Country")))};u.propTypes={siteTitle:o.a.string},u.defaultProps={siteTitle:""};var s=u,m=(a(156),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("footer",{style:{float:"left",padding:" 1rem"}},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});m.propTypes={children:o.a.node.isRequired};t.a=m},160:function(e,t,a){"use strict";a(161);var n=a(0),r=a.n(n),i=a(151),l=a(166),o=a.n(l);t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:o.a.link,to:e.slug},r.a.createElement("h3",{className:o.a.title},e.title," ",r.a.createElement("span",{className:o.a.greyout},null==e.date?"":"("+e.date+")"))),r.a.createElement("p",{className:o.a.excerpt},e.excerpt))}},161:function(e,t,a){"use strict";a(162)("link",function(e){return function(t){return e(this,"a","href",t)}})},162:function(e,t,a){var n=a(11),r=a(19),i=a(20),l=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(l,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-templates-article-types-js-f79fb43a5498aa321ee3.js.map