pbjsChunk([52],{621:function(e,t,n){e.exports=n(622)},622:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.get=m,t.merge=p,t.ratioToPercentageCeil=h,t.getDocumentHeight=g,t.getOffset=v,t.getWindowParents=y,t.getTopmostReachableWindow=b,t.topDocumentIsReachable=w,t.isInsideIframe=O,t.isInsideSafeframe=j,t.isInsideFriendlyIframe=E,t.getIframeType=I,t.getRectCuts=P,t.getFrameElements=D,t.getElementCuts=H,t.area=V,t.getInViewRatio=A,t.getInViewRatioInsideTopFrame=C,t.getMayBecomeVisible=M,t.getInViewPercentage=R,t.getOffsetTopDocument=z,t.getOffsetTopDocumentPercentage=W,t.getOffsetToView=B,t.getOffsetToViewPercentage=F,t.getViewabilityDescription=Y,t.mergeArrays=x,t.documentFocus=U;var r,o,i=n(1),u=n(2);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,f=e[Symbol.iterator]();!(r=(u=f.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==f.return||f.return()}finally{if(o)throw i}}return n}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t,n){for(e="string"==typeof e?e.split("."):e;e.length;){var r=a(e,1)[0];if(!(t instanceof Object&&r in t))return n;t=t[r],e=e.slice(1)}return t}function p(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(e){return e},r={};for(var o in e)r[o]=o in t?n(e[o],t[o]):e[o];for(var i in t)i in e||(r[i]=t[i]);return r}function h(e){return Math.ceil(100*e)}function g(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document;return Math.max(m("body.clientHeight",e,0),m("body.scrollHeight",e,0),m("body.offsetHeight",e,0),m("documentElement.clientHeight",e,0),m("documentElement.scrollHeight",e,0),m("documentElement.offsetHeight",e,0))}function v(e){var t=e.getBoundingClientRect(),n=T(e);if(!n)throw new Error("cannot get element window");var r=n.pageXOffset||m("documentElement.scrollLeft",document,0),o=n.pageYOffset||m("documentElement.scrollTop",document,0);return{top:t.top+o,right:t.right+r,bottom:t.bottom+o,left:t.left+r}}function y(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window,t=[];e&&e.parent&&e!==e.parent;)t.push(e.parent),e=e.parent;return t}function b(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window,t=y(e);return t.length?t[t.length-1]:e}function w(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window;if(!O(e))return!0;var t=y(e);try{return t[t.length-1]===e.top&&!!e.top.document}catch(e){return!1}}function O(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window;return e!==e.top}function j(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window;return!w(e)&&!!e.$sf}function E(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window;return O(e)&&w(e)}function I(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window;if(O(e))return j(e)?r.safeframe:E(e)?r.friendly:r.nonfriendly}function T(e){return e.ownerDocument?e.ownerDocument.defaultView:e.defaultView}(o=r=r||{}).safeframe="safeframe",o.friendly="friendly",o.nonfriendly="nonfriendly";var S={top:0,right:0,bottom:0,left:0};function P(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:S,o=e.top,i=e.left,u=e.bottom,f=e.right;return o+=r.top,i+=r.left,t+=r.bottom,n+=r.right,{bottom:Math.min(0,t-u),left:Math.min(0,i),right:Math.min(0,n-f),top:Math.min(0,o)}}function D(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window,t=[];e&&e.frameElement;)t.unshift(e.frameElement),e=e.frameElement.ownerDocument&&e.frameElement.ownerDocument.defaultView;return t}function H(e,t){var n=T(e);return P(e.getBoundingClientRect(),n?n.innerHeight:0,n?n.innerWidth:0,t)}function V(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:S,r=n.top,o=n.right,i=n.bottom,u=n.left;return Math.max(0,(e+u+o)*(t+r+i))}function A(e){var t=[].concat(f(D(T(e))),[e]).reduce(function(e,t){return H(t,e)},S);return V(e.offsetWidth||1,e.offsetHeight||1,t)/V(e.offsetWidth||1,e.offsetHeight||1)}function C(e){var t=[].concat(f(D().slice(1)),[e]).reduce(function(e,t){return H(t,e)},S);return V(e.offsetWidth,e.offsetHeight,t)/V(e.offsetWidth,e.offsetHeight)}function M(e){return!O()||!!C(e)}function R(e){return h(A(e))}function z(e){return[].concat(f(D(T(e))),[e]).reduce(function(e,t){return p(e,v(t),function(e,t){return e+t})},{top:0,right:0,bottom:0,left:0})}function W(e){var t=T(e);if(!t)throw new Error("cannot get element window");if(!w(t))throw new Error("top window isn't reachable");var n=g(b(t).document);return h(z(e).top/n)}function B(e){var t=T(e);if(!t)throw new Error("cannot get element window");var n=b(t),r=z(e),o=r.top,i=r.bottom,u=n.innerHeight;return i<n.scrollY?i-n.scrollY:o>n.scrollY+u?o-n.scrollY-u:0}function F(e){return h(B(e)/g(b(T(e)).document))}function Y(e){var t;try{if(!e)return{error:"no element"};if((t=I(T(e)))&&t!==r.friendly)return{iframeType:t};var n=R(e);return{inView:n,hidden:!n&&!M(e),offsetTop:W(e),offsetView:F(e),iframeType:t}}catch(e){return{iframeType:t,error:e.message}}}function x(n){for(var r={},o=[],e=arguments.length,t=new Array(1<e?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];return t.forEach(function(e){e.forEach(function(e){var t=n(e);t in r||(r[t]=!0,o.push(e))})}),o}function U(e){return"function"==typeof e.hasFocus?+e.hasFocus():void 0}var k={code:"vi",supportedMediaTypes:[u.d,u.b],isBidRequestValid:function(e){e.adUnitCode;var t=e.params;return[(t=void 0===t?{}:t).pubId,t.lang,t.cat].every(function(e){return"string"==typeof e})},buildRequests:function(e,t){return{method:"POST",url:"https://pb.vi-serve.com/prebid/bid",data:{refererInfo:t.refererInfo,imps:e.map(function(e){var t=e.bidId,n=e.adUnitCode,r=e.sizes,o=e.params,i=e.mediaTypes,u=document.getElementById(n),f=m("banner.sizes",i),a=m("video.playerSize",i),c=[];return o.useSizes?"banner"===o.useSizes&&f?c.push(f):"video"===o.useSizes&&a&&c.push(a):(r&&c.push(r),f&&c.push(f),a&&c.push(a)),function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach(function(e){s(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({bidId:t,adUnitCode:n,sizes:x.apply(void 0,[function(e){return e.join(",")}].concat(c))},Y(u),{},o)}),focus:U(document)},options:{contentType:"application/json",withCredentials:!0}}},interpretResponse:function(e){return e.body}};Object(i.registerBidder)(k)}},[621]);