(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(155),s=function(e){return r.a.createElement("div",{style:{margin:".5rem",padding:"0rem"}},r.a.createElement("h3",{style:{margin:".0rem"}},r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("p",{style:{marginTop:".2rem"}},e.excerpt))},l=(a(157),a(78),a(35)),o=a.n(l),c=a(7),d=a.n(c),u=a(169),f=a.n(u),p=a(170),m=a.n(p),h=a(163),g=a.n(h),b=function(e){return r.a.createElement("div",{className:m.a.card},r.a.createElement(g.a,{fluid:e.imageSharp,style:{height:"300px"}}),r.a.createElement("div",{className:m.a.container},r.a.createElement("b",{style:{fontSize:"70%",lineHeight:"1.4em"}},void 0===e.desc?"":r.a.createElement("p",{className:m.a.pt},"Hover here",r.a.createElement("span",{className:m.a.spant},e.desc.desc)))))},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).goToSlide=function(e){var t=document.getElementById("expandedImg");return t.src=a(171)("./"+e),t.parentElement.style.display="block",!0},n.state={},n.goToSlide=n.goToSlide.bind(o()(n)),n}return d()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.imgSharp,n=t.imgs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:f.a.row},a.map(function(t){var a=t.node;return r.a.createElement("div",{className:f.a.column,key:a.id},null===a.childImageSharp||null===a.childImageSharp.fluid?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:function(){return e.goToSlide(a.relativePath)},id:"smlprnt"},r.a.createElement("a",{href:"#prnt"},r.a.createElement(b,{imageSharp:a.childImageSharp.fluid,desc:void 0===n?"oo":n.find(function(e){return e.name===a.relativePath})})))))})),r.a.createElement("div",{className:f.a.container,id:"prnt"},r.a.createElement("span",{onClick:function(){return document.getElementById("prnt").style.display="none"},className:f.a.closebtn},r.a.createElement("a",{href:"#smlprnt"},r.a.createElement("b",null,"×"))),r.a.createElement("img",{id:"expandedImg",style:{width:"100%"},alt:""}),r.a.createElement("div",{id:"imgtext"})))},t}(n.Component),E=a(192),v=a.n(E),S=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={slideIndex:0},a.showDivs=a.showDivs.bind(o()(a)),a.plusDivs=a.plusDivs.bind(o()(a)),a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.showDivs()},a.showDivs=function(){var e,t=document.getElementsByClassName("mySlides");for(this.state.slideIndex>=t.length&&this.setState({slideIndex:1}),this.state.slideIndex<1&&this.setState({slideIndex:t.length}),e=0;e<t.length;e++)t[e].style.display="none";1===t.length?(this.setState({slideIndex:0}),t[0].style.display="block"):void 0===t[this.state.slideIndex-1]?(t[this.state.slideIndex].style.display="block",this.setState({slideIndex:2})):t[this.state.slideIndex-1].style.display="block"},a.plusDivs=function(){this.showDivs(this.setState({slideIndex:this.state.slideIndex+1}))},a.render=function(){var e=this,t=this.props.slides;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:v.a.container},t.map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{key:t},r.a.createElement("iframe",{style:{width:"60%",height:"100%",display:"none",marginLeft:"auto",marginRight:"auto"},className:"mySlides",src:e.url,title:e.title,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))}),r.a.createElement("button",{className:v.a.displayleft,onClick:function(){return e.plusDivs()}},"❮"),r.a.createElement("button",{className:v.a.displayright,onClick:function(){return e.plusDivs()}},"❯")))},t}(n.Component);a.d(t,"query",function(){return w});t.default=function(e){var t=e.data,a=t.markdownRemark;return r.a.createElement(i.a,null,r.a.createElement("div",{style:{maxWidth:3050,padding:" 1rem",margin:".0rem"}},r.a.createElement("h1",{style:{textAlign:"center",padding:"5px",margin:".3rem"}},a.frontmatter.title),null===a.html?"":r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),r.a.createElement("br",null),r.a.createElement("br",null),null===t.allFile||0===t.allFile.edges.length?"":r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{imgSharp:t.allFile.edges,imgs:void 0===a.frontmatter.img?" ll":a.frontmatter.img})),r.a.createElement("br",null),r.a.createElement("br",null),null===a.frontmatter.vid||0===a.frontmatter.vid.length?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(S,{slides:a.frontmatter.vid})),r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("div",{style:{float:" left"}},null===a.frontmatter.url?"":a.frontmatter.url.map(function(e,t){return r.a.createElement(s,{style:{padding:" 1rem",margin:"0rem"},key:t,title:e.title,url:e.url,excerpt:e.desc})}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),null===a.frontmatter.refs||0===a.frontmatter.refs.length?"":r.a.createElement("span",null,r.a.createElement("p",null,"This page uses materials from Wikipedia available in the references. It is released under the  ",r.a.createElement("a",{href:"https://creativecommons.org/licenses/by-sa/3.0/"},"Creative Commons Attribution-Share-Alike License 3.0.")),r.a.createElement("b",null,"References"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{float:" left",margin:"0rem"}},null===a.frontmatter.refs?"":a.frontmatter.refs.map(function(e,t){return r.a.createElement("div",{style:{padding:" .5rem",margin:"0px"},key:t},r.a.createElement("span",{style:{align:"justify",color:"grey",margin:".5rem",padding:"0rem"}}," ",e.ref," "," ",0===e.url.length?"":r.a.createElement("a",{href:e.url},"Link")))}))))};var w="3413503982"},151:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(152);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Pan-African"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},155:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),s=a(4),l=a.n(s),o=a(151),c=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"seagreen",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))),i.a.createElement("div",null,i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Home"),i.a.createElement("spn",{style:{color:"white"}},"|"),i.a.createElement(o.a,{to:"/collections/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Collections"),i.a.createElement("spn",{style:{color:"white"}},"|"),i.a.createElement(o.a,{to:"/countries/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Search Country")))};c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var d=c,u=(a(156),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("footer",{style:{float:"left",padding:" 1rem"}},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});u.propTypes={children:l.a.node.isRequired};t.a=u},157:function(e,t,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},163:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),s=n(a(35)),l=n(a(74)),o=n(a(75)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=new WeakMap;var h=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+n+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+r+t+s+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,d=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:n,src:r},u,{onLoad:s,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var o=!(t.critical&&!t.fadeIn);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:i,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:t.imageRef.current.currentSrc.length>0})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,y=e.backgroundColor,E=e.Tag,v=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,w=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,o.default)({opacity:S?1:0,transition:w?"opacity 0.5s":"none"},l),j="boolean"==typeof y?"lightgray":y,A={transitionDelay:"0.5s"},_=(0,o.default)({opacity:this.state.imgLoaded?0:1},w&&A,l,f),R={title:t,alt:this.state.isVisible?"":a,style:_,className:p};if(m){var k=m;return c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),j&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},w&&A)}),k.base64&&c.default.createElement(b,(0,o.default)({src:k.base64},R)),k.tracedSVG&&c.default.createElement(b,(0,o.default)({src:k.tracedSVG},R)),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},k))}}))}if(h){var I=h,T=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},i);return"inherit"===i.display&&delete T.display,c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},j&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:j,width:I.width,opacity:this.state.imgLoaded?0:1,height:I.height},w&&A)}),I.base64&&c.default.createElement(b,(0,o.default)({src:I.base64},R)),I.tracedSVG&&c.default.createElement(b,(0,o.default)({src:I.tracedSVG},R)),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement(b,{alt:a,title:t,width:I.width,height:I.height,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},I))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:E,sizes:v,fixed:E,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var S=y;t.default=S},171:function(e,t,a){var n={"./gatsby-astronaut.png":172,"./gatsby-icon.png":173,"./nubian-arch-Kerma_city - Copy.jpg":174,"./nubian-arch-Maison_obus.jpg":175,"./nubian-arch_JebelBarkalGroundPlan.jpg":176,"./nubian-arch_Meroe_Pyramids.jpg":177,"./nubian-arch_NubianPharoahs.jpg":178,"./nubian-arch_Temple_of_Dabod.jpg":179,"./nubian-arch_Temple_of_Dakka.jpg":180,"./nubian-arch__Amon_Napata_elevation_2.jpg":181,"./nubian-arch_columns.png":182,"./sudan-sahel-arch-10A_Agadez.jpg":183,"./sudan-sahel-arch-Kano-history-museum.jpg":184,"./sudan-sahel-arch-Kanogate.jpg":185,"./sudan-sahel-arch-TIMBUKTU-EINZUG.jpg":186,"./sudan-sahel-arch_Kumasi.png":187,"./sudan-sahel-arch_MaliDjennéMosquée.jpg":188,"./sudan-sahel-arch_Mosque_Ghana.jpg":189,"./sudan-sahel-arch_hommes_sur_les_toits_sopposent.jpg":190,"./xzybg_quote.png":191};function r(e){var t=i(e);return a(t)}function i(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=171},172:function(e,t,a){e.exports=a.p+"static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa.png"},173:function(e,t,a){e.exports=a.p+"static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png"},174:function(e,t,a){e.exports=a.p+"static/nubian-arch-Kerma_city - Copy-60cbe153f90710cba240df9c72707c46.jpg"},175:function(e,t,a){e.exports=a.p+"static/nubian-arch-Maison_obus-980008642581e7da539c20d993597295.jpg"},176:function(e,t,a){e.exports=a.p+"static/nubian-arch_JebelBarkalGroundPlan-27c266f7699d6d510159b4ae32cb8c2d.jpg"},177:function(e,t,a){e.exports=a.p+"static/nubian-arch_Meroe_Pyramids-4d2002b3df8eb4accb78867d87f8f943.jpg"},178:function(e,t,a){e.exports=a.p+"static/nubian-arch_NubianPharoahs-6a7d4a34dec5dddaa204738185f088bf.jpg"},179:function(e,t,a){e.exports=a.p+"static/nubian-arch_Temple_of_Dabod-81306b6ff97f3c378e221113d6207037.jpg"},180:function(e,t,a){e.exports=a.p+"static/nubian-arch_Temple_of_Dakka-7c5b4469582562ceeda486c819f9ca91.jpg"},181:function(e,t,a){e.exports=a.p+"static/nubian-arch__Amon_Napata_elevation_2-fb85085b0f08e4de39640935923fef12.jpg"},182:function(e,t,a){e.exports=a.p+"static/nubian-arch_columns-468b900cfa11e5f5f0b38bfb3532abf0.png"},183:function(e,t,a){e.exports=a.p+"static/sudan-sahel-arch-10A_Agadez-2ea843b8e5b0aac0c741f03d232acf7e.jpg"},184:function(e,t,a){e.exports=a.p+"static/sudan-sahel-arch-Kano-history-museum-cce2ae2ba8cf80f9ff3d3f5497ef4840.jpg"},185:function(e,t,a){e.exports=a.p+"static/sudan-sahel-arch-Kanogate-36519c809580eb24679ffc4a4c7856d3.jpg"},186:function(e,t,a){e.exports=a.p+"static/sudan-sahel-arch-TIMBUKTU-EINZUG-f47274319324f8bc583867dbc87be21e.jpg"},187:function(e,t,a){e.exports=a.p+"static/sudan-sahel-arch_Kumasi-64e51f6a5891ea5f4a3ad5bb74d951a4.png"},188:function(e,t,a){e.exports=a.p+"static/sudan-sahel-arch_MaliDjennéMosquée-9649ab64ac5f0dceafd2d8d3051fce8e.jpg"},189:function(e,t,a){e.exports=a.p+"static/sudan-sahel-arch_Mosque_Ghana-df4f4a513b3477ed414ad92a76a451e2.jpg"},190:function(e,t,a){e.exports=a.p+"static/sudan-sahel-arch_hommes_sur_les_toits_sopposent-38082fd4b68f5af1471fc45a4dded890.jpg"},191:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAnCAYAAABwtnr/AAAEMElEQVRYhe2ZT0gUcRTHl8AwyQgrTY0OWRhEdjCoiwh2iy51CA9ldhHsEBhBdqlL0KVDICgEdogww4RI2Msect11dXdd94+uun/ddddd/+ySWpJkrX2fzMg6zczOvz0Ee3gi48z3feb93u/93ht1N9o7dLlsdHS02Ol0Nnk8nkehUKhvfn7eGIlELNFo1Dw9Pf1Ur9cXSdERM7PZfMztdt+EXif0h2Aj8DEGH1/h9y73flExk8lUNjc392xxcdG/srKyk0qldlZXV/dZOp3ecblcT5QCj4+Pnw0Ggz2JRCJJenw+yDeC1ygJHBFujcViAfbB5eVlXqO/YxU+ygW2Wq1FiO6LZDK5JsUH7m0XBR8eHi5BBHrZtxUSyxbF/e/lQCN6Z5AGeoquGHC2j6mpqTZBcORSaSAQGCLBXGKciH+QCo20qgG0V64P0Ygjcm+lClKkyCjHZ2ZmXkuELl1YWPDI9UH32+32W7zgDoejJVdqsEL0OzbTxtLS0jqi/cVgMFRKAZ+dnX0j5oPVJ4P2DvJ/HZb2+/3dqFzF/4Aj545iI0aFRBmhTSxxP0TuAaDRZrOdgkkCJkPErkJrWyin6TogE+FwuBvp2uz1ei+PjY1VTkxMlPPp7f7ATZ1i0CiHMxBrUFrymDQcFPOBFNIjKKel6unwVocAFueLBF2Lx+OTcCo5sgLRPocV+ynkA6s9AOgDcjR1OK2aIJARSI/viMRFNdBkOMSe80WbfGCveAF+XK4mlcAOvl3OLN8ntdBMmnwWShMc7Q+VaOqoBgtFAxulVS000qQE6RYQ2JTbSJHzisDxxmaBaGQQqWtqwUdGRk5QWeMDx/WUz+eTnSa74NTlccGZ0rQxOTlZpRYcTVQ5tL5xwcknOj+LUl0x8C2kiuqNKQTOlNkAfBzUDJw1VJXufIFn+bijOTiTh6+Qh3SKnQREdbahNa1GDpepAYf9QEl8jOpWSycl1wesymKxHJENzkQlA/E1ynuuYbmXUDWG0Aa0KARnA7QFH+sCPmLw0YcmrUEWOLcB4jOm9exSCp7LB8O4jd6lTRa4VKfoe+4rBZfig1YGQ0W9ZuBsiaPDBlPUXguKfaAZOBmd8mj43mkKzuyH35jYa/MFzjRl3nyA/0EeXspHqrDg9NUhX+B1eQb3FcAL4AXwAngB/P8Ht2oMnuGcnBVCM6cKcL8OU/agnC+nEsB/GY3GGhbcYDAcRm8R0bKRow+n9AX1gVbgJApID6aifXNkMBgc0MoH6SDYPfTdowJvEFIrzKaC0+m8zR0mHA7HFfq6qzbq9DxNSdC7sCtsMpnqkDcR9l8aco19zu12dwrNnjabrRnON5X6oMDSXsGeubE7AWVtospwOPwSS23HMOCjDUC7N4f5ce9UKBTqB/T1XJM5IlWP1e3FM27GhyQDkwvDQxeyY69a/QVASnELwCfEyAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=component---src-templates-article-slug-js-b909c4759c233d4afa33.js.map