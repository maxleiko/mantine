(self.webpackChunkmantine_docs=self.webpackChunkmantine_docs||[]).push([[342],{7228:function(u){u.exports=function(u,D){(null==D||D>u.length)&&(D=u.length);for(var e=0,t=new Array(D);e<D;e++)t[e]=u[e];return t},u.exports.default=u.exports,u.exports.__esModule=!0},3646:function(u,D,e){var t=e(7228);u.exports=function(u){if(Array.isArray(u))return t(u)},u.exports.default=u.exports,u.exports.__esModule=!0},9100:function(u,D,e){var t=e(9489),n=e(7067);function r(D,e,o){return n()?(u.exports=r=Reflect.construct,u.exports.default=u.exports,u.exports.__esModule=!0):(u.exports=r=function(u,D,e){var n=[null];n.push.apply(n,D);var r=new(Function.bind.apply(u,n));return e&&t(r,e.prototype),r},u.exports.default=u.exports,u.exports.__esModule=!0),r.apply(null,arguments)}u.exports=r,u.exports.default=u.exports,u.exports.__esModule=!0},9713:function(u){u.exports=function(u,D,e){return D in u?Object.defineProperty(u,D,{value:e,enumerable:!0,configurable:!0,writable:!0}):u[D]=e,u},u.exports.default=u.exports,u.exports.__esModule=!0},7067:function(u){u.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(u){return!1}},u.exports.default=u.exports,u.exports.__esModule=!0},6860:function(u){u.exports=function(u){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(u))return Array.from(u)},u.exports.default=u.exports,u.exports.__esModule=!0},8206:function(u){u.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},u.exports.default=u.exports,u.exports.__esModule=!0},319:function(u,D,e){var t=e(3646),n=e(6860),r=e(379),o=e(8206);u.exports=function(u){return t(u)||n(u)||r(u)||o()},u.exports.default=u.exports,u.exports.__esModule=!0},379:function(u,D,e){var t=e(7228);u.exports=function(u,D){if(u){if("string"==typeof u)return t(u,D);var e=Object.prototype.toString.call(u).slice(8,-1);return"Object"===e&&u.constructor&&(e=u.constructor.name),"Map"===e||"Set"===e?Array.from(u):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(u,D):void 0}},u.exports.default=u.exports,u.exports.__esModule=!0},4115:function(u,D,e){"use strict";e.r(D),e.d(D,{default:function(){return x}});var t=e(7378),n=e(6725),r=e(3154),o=e(8091),c=e(5161),i=e(3242),a=e.n(i),s=e(8494),l=e.n(s),F=e(8487),E=e(8707),f=e(8560),p=e(3014),C=e(8897),d=e(2888);function m(u){return 0===u.length?-1:u.reduce((function(u,D,e){return Math.abs(u.position)<Math.abs(D.y)?u:{index:e,position:D.y}}),{index:0,position:u[0].y}).index}function v(u){var D=u.headings,e=(0,t.useState)(!0),n=e[0],r=e[1],i=(0,F.rZ)(),s=(0,d.ZP)(),v=new(a()),x=(0,t.useState)(0),y=x[0],b=x[1],A=n?"⌘":"Ctrl",g=(0,t.useRef)([]),h=D.filter((function(u){return u.depth>1}));(0,t.useEffect)((function(){v.reset(),g.current=h.map((function(u){return document.getElementById(v.slug(u.value))}))}),[D]);var B=l()((function(){b(m(g.current.map((function(u){return u.getBoundingClientRect()}))))}),100);if((0,t.useEffect)((function(){return r("navigator"in window&&window.navigator.platform.includes("Mac")),b(m(g.current.map((function(u){return u.getBoundingClientRect()})))),window.addEventListener("scroll",B),function(){return window.removeEventListener("scroll",B)}}),[]),0===h.length)return null;var O=h.map((function(u,D){var e,n=v.slug(u.value);return t.createElement(E.x,{key:n,component:"a",size:"sm",className:(0,o.Z)(s.link,(e={},e[s.linkActive]=y===D,e)),href:"#"+n,style:{paddingLeft:(u.depth-1)*i.spacing.lg},onClick:function(u){u.preventDefault();var D=document.getElementById(n);window.scrollTo({top:D.getBoundingClientRect().top+window.pageYOffset-C.Mz-10,behavior:"smooth"})}},u.value)}));return t.createElement("nav",{className:s.wrapper},t.createElement(c.$B,{style:{height:"100vh"}},t.createElement("div",{className:s.inner},t.createElement("div",null,t.createElement("div",{className:s.header},t.createElement(p.X4t,null),t.createElement(E.x,{className:s.title},"Table of contents")),t.createElement("div",{className:s.items},O)),t.createElement("div",null,t.createElement("div",{className:s.header},t.createElement(p.$bm,null),t.createElement(E.x,{className:s.title},"Keyboard shortcuts")),t.createElement("div",{className:s.shortcut},t.createElement(f.T,null,A)," ",t.createElement("span",null,"+")," ",t.createElement(f.T,null,"K"),t.createElement(E.x,{className:s.shortcutLabel,size:"sm"},"search")),t.createElement("div",{className:s.shortcut},t.createElement(f.T,null,A)," ",t.createElement("span",null,"+")," ",t.createElement(f.T,null,"J"),t.createElement(E.x,{className:s.shortcutLabel,size:"sm"},"toggle color scheme"))))))}function x(u){var D=u.data.mdx;return t.createElement("article",null,t.createElement(r.Z,{title:D.frontmatter.title,description:D.frontmatter.description}),t.createElement(v,{headings:D.headings}),t.createElement(n.MDXRenderer,null,D.body))}},6725:function(u,D,e){var t=e(3395);u.exports={MDXRenderer:t}},3395:function(u,D,e){var t=e(9100),n=e(319),r=e(9713),o=e(7316);function c(u,D){var e=Object.keys(u);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(u);D&&(t=t.filter((function(D){return Object.getOwnPropertyDescriptor(u,D).enumerable}))),e.push.apply(e,t)}return e}function i(u){for(var D=1;D<arguments.length;D++){var e=null!=arguments[D]?arguments[D]:{};D%2?c(Object(e),!0).forEach((function(D){r(u,D,e[D])})):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(D){Object.defineProperty(u,D,Object.getOwnPropertyDescriptor(e,D))}))}return u}var a=e(7378),s=e(498).mdx,l=e(9480).useMDXScope;u.exports=function(u){var D=u.scope,e=u.children,r=o(u,["scope","children"]),c=l(D),F=a.useMemo((function(){if(!e)return null;var u=i({React:a,mdx:s},c),D=Object.keys(u),r=D.map((function(D){return u[D]}));return t(Function,["_fn"].concat(n(D),[""+e])).apply(void 0,[{}].concat(n(r)))}),[e,D]);return a.createElement(F,i({},r))}},1786:function(u){u.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},3242:function(u,D,e){var t=e(1786);u.exports=c;var n=Object.hasOwnProperty,r=/\s/g,o=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g;function c(){if(!(this instanceof c))return new c;this.reset()}function i(u,D){return"string"!=typeof u?"":(D||(u=u.toLowerCase()),u.trim().replace(o,"").replace(t(),"").replace(r,"-"))}c.prototype.slug=function(u,D){for(var e=this,t=i(u,!0===D),r=t;n.call(e.occurrences,t);)e.occurrences[r]++,t=r+"-"+e.occurrences[r];return e.occurrences[t]=0,t},c.prototype.reset=function(){this.occurrences=Object.create(null)},c.slug=i},8494:function(u,D,e){var t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,c=parseInt,i="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,a="object"==typeof self&&self&&self.Object===Object&&self,s=i||a||Function("return this")(),l=Object.prototype.toString,F=Math.max,E=Math.min,f=function(){return s.Date.now()};function p(u){var D=typeof u;return!!u&&("object"==D||"function"==D)}function C(u){if("number"==typeof u)return u;if(function(u){return"symbol"==typeof u||function(u){return!!u&&"object"==typeof u}(u)&&"[object Symbol]"==l.call(u)}(u))return NaN;if(p(u)){var D="function"==typeof u.valueOf?u.valueOf():u;u=p(D)?D+"":D}if("string"!=typeof u)return 0===u?u:+u;u=u.replace(t,"");var e=r.test(u);return e||o.test(u)?c(u.slice(2),e?2:8):n.test(u)?NaN:+u}u.exports=function(u,D,e){var t,n,r,o,c,i,a=0,s=!1,l=!1,d=!0;if("function"!=typeof u)throw new TypeError("Expected a function");function m(D){var e=t,r=n;return t=n=void 0,a=D,o=u.apply(r,e)}function v(u){return a=u,c=setTimeout(y,D),s?m(u):o}function x(u){var e=u-i;return void 0===i||e>=D||e<0||l&&u-a>=r}function y(){var u=f();if(x(u))return b(u);c=setTimeout(y,function(u){var e=D-(u-i);return l?E(e,r-(u-a)):e}(u))}function b(u){return c=void 0,d&&t?m(u):(t=n=void 0,o)}function A(){var u=f(),e=x(u);if(t=arguments,n=this,i=u,e){if(void 0===c)return v(i);if(l)return c=setTimeout(y,D),m(i)}return void 0===c&&(c=setTimeout(y,D)),o}return D=C(D)||0,p(e)&&(s=!!e.leading,r=(l="maxWait"in e)?F(C(e.maxWait)||0,D):r,d="trailing"in e?!!e.trailing:d),A.cancel=function(){void 0!==c&&clearTimeout(c),a=0,t=i=n=c=void 0},A.flush=function(){return void 0===c?o:b(f())},A}}}]);
//# sourceMappingURL=component---src-pages-mdx-slug-tsx-0f50605ab1b8be79398b.js.map