(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(151),s=a(155),o=a(191),l=a(163),c=a.n(l),d=function(){return i.a.createElement(n.b,{query:"2011440971",render:function(e){return i.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})},u=a(158);t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("h1",null,"Hi people"),i.a.createElement("p",null,"Welcome to your new Gatsby site."),i.a.createElement("p",null,"Now go build something great."),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(d,null)),i.a.createElement(n.a,{to:"/page-2/"},"Go to page 2"))}},151:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(152);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},152:function(e,t,a){var r;e.exports=(r=a(154))&&r.default||r},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},155:function(e,t,a){"use strict";var r=a(153),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(151),c=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))),n.a.createElement("div",null,n.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Home"),n.a.createElement("spn",{style:{color:"white"}},"|"),n.a.createElement(l.a,{to:"/collections/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Collections"),n.a.createElement("spn",{style:{color:"white"}},"|"),n.a.createElement(l.a,{to:"/countries/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Search Country")))};c.propTypes={siteTitle:o.a.string},c.defaultProps={siteTitle:""};var d=c,u=(a(156),function(e){var t=e.children;return n.a.createElement(l.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});u.propTypes={children:o.a.node.isRequired};t.a=u},158:function(e,t,a){"use strict";var r=a(159),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(164),c=a.n(l);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},163:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(74)),l=r(a(75)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),g.set(e,t)),function(){a.unobserve(e),g.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:t.imageRef.current.currentSrc.length>0})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,w=e.Tag,S=e.itemProp,v=this.state.imgLoaded||!1===this.state.fadeIn,E=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:v?1:0,transition:E?"opacity 0.5s":"none"},o),L="boolean"==typeof y?"lightgray":y,I={transitionDelay:"0.5s"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},E&&I,o,f),A={title:t,alt:this.state.isVisible?"":a,style:x,className:p};if(g){var z=g;return c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),L&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},E&&I)}),z.base64&&c.default.createElement(b,(0,l.default)({src:z.base64},A)),z.tracedSVG&&c.default.createElement(b,(0,l.default)({src:z.tracedSVG},A)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},z))}}))}if(h){var T=h,O=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete O.display,c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},L&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:L,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},E&&I)}),T.base64&&c.default.createElement(b,(0,l.default)({src:T.base64},A)),T.tracedSVG&&c.default.createElement(b,(0,l.default)({src:T.tracedSVG},A)),this.state.isVisible&&c.default.createElement("picture",null,T.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),c.default.createElement(b,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},T))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var v=y;t.default=v},191:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/panafrican/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png",srcSet:"/panafrican/static/6d91c86c0fde632ba4cd01062fd9ccfa/e1fed/gatsby-astronaut.png 75w,\n/panafrican/static/6d91c86c0fde632ba4cd01062fd9ccfa/08283/gatsby-astronaut.png 150w,\n/panafrican/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png 300w,\n/panafrican/static/6d91c86c0fde632ba4cd01062fd9ccfa/59257/gatsby-astronaut.png 450w,\n/panafrican/static/6d91c86c0fde632ba4cd01062fd9ccfa/26d9e/gatsby-astronaut.png 600w,\n/panafrican/static/6d91c86c0fde632ba4cd01062fd9ccfa/a3fa0/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-f8ec149930eed3b362b1.js.map