(self.webpackChunkyordevs_site=self.webpackChunkyordevs_site||[]).push([[851],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var o=r(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var o=r(9489),n=r(7067);function c(t,r,u){return n()?(e.exports=c=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=c=function(e,t,r){var n=[null];n.push.apply(n,t);var c=new(Function.bind.apply(e,n));return r&&o(c,r.prototype),c},e.exports.default=e.exports,e.exports.__esModule=!0),c.apply(null,arguments)}e.exports=c,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var o=r(3646),n=r(6860),c=r(3323),u=r(8206);e.exports=function(e){return o(e)||n(e)||c(e)||u()},e.exports.default=e.exports,e.exports.__esModule=!0},3323:function(e,t,r){var o=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,r){var o=r(3395);e.exports={MDXRenderer:o}},3395:function(e,t,r){var o=r(9100),n=r(319),c=r(9713),u=r(7316);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r(7294),p=r(4983).mdx,i=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=u(e,["scope","children"]),s=i(t),f=l.useMemo((function(){if(!r)return null;var e=a({React:l,mdx:p},s),t=Object.keys(e),c=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(c)))}),[r,t]);return l.createElement(f,a({},c))}},9857:function(e,t,r){"use strict";r.r(t);var o=r(7294),n=r(9),c=r(6725),u=r(4983),s=r(8003),a=r(3086),l=r(5825),p=l.Z.color,i=l.Z.font,f={a:function(e){var t=e.href,r=e.children;return o.createElement(a.Z,{to:t},r)}},d=n.ZP.h1.withConfig({displayName:"post__Title",componentId:"we0351-0"})(["font-size:3em;margin-bottom:0;"]),m=n.ZP.p.withConfig({displayName:"post__Details",componentId:"we0351-1"})(["color:",";font-weight:",";margin-bottom:1em;"],p.accent,i.weight.semibold),x=n.ZP.header.withConfig({displayName:"post__PostHeader",componentId:"we0351-2"})(["margin-bottom:3em;"]);t.default=function(e){var t=e.data.mdx,r=t.frontmatter,n=r.title,l=r.date,p=r.author,i=t.body;return o.createElement(s.Z,{title:n},o.createElement(a.Z,{to:"/blog"},"< Back"),o.createElement(u.MDXProvider,{components:f},o.createElement("article",{className:"blog-post"},o.createElement(x,null,o.createElement(d,null,n),o.createElement(m,null,p," on ",l)),o.createElement(c.MDXRenderer,null,i))))}}}]);
//# sourceMappingURL=component---src-templates-post-js-3f144d5a7e0387a3e0a8.js.map