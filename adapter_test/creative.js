/* prebid-universal-creative v1.13.0-pre
Updated : 2021-12-21 */
!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getEmptyIframe=function(t,e){var n=document.createElement("iframe");return n.setAttribute("frameborder",0),n.setAttribute("scrolling","no"),n.setAttribute("marginheight",0),n.setAttribute("marginwidth",0),n.setAttribute("TOPMARGIN",0),n.setAttribute("LEFTMARGIN",0),n.setAttribute("allowtransparency","true"),n.setAttribute("width",e),n.setAttribute("height",t),n},e.insertElement=function(t,e,n){e=e||document,n=n?e.getElementsByTagName(n):e.getElementsByTagName("head");try{(n=n.length?n:e.getElementsByTagName("body")).length&&(n=n[0]).insertBefore(t,n.firstChild)}catch(t){}}},function(t,e,n){"use strict";var r=n(2),n=n(5);window.ucTag=window.ucTag||{};n=(0,n.newEnvironment)(window),n=(0,r.newRenderingManager)(window,n);window.ucTag.renderAd=n.renderAd},function(t,e,n){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.newRenderingManager=function(u,i){function o(t){t?function(e,n){{var r,o;i.isSafeFrame()&&(r=u.innerWidth,o=u.innerHeight,r===e&&o===n||(u.$sf.ext.register(e,n,function(t){u.$sf.ext.expand({r:e-r,b:n-o,push:!0})}),u.parent.postMessage({sentinel:"amp",type:"embed-size",width:e,height:n},"*")))}}((t=t.split("x").map(Number))[0],t[1]):console.log("Targeting key hb_size not found to resize creative")}function n(t,e,n,r){console.log("pppppp");o(e),a(r,n,t)}function a(t,e,n){console.log("testt",n);var i,r=function(t){var e;try{console.log(t,"response"),e=t}catch(t){console.log("Error parsing response from cache host: ".concat(t))}return e}(n),o=r.ext&&r.ext.hasOwnProperty("appnexus")?r.price/.85||e:r.price||e,a=c.getCreativeCommentMarkup(r),n=r.width||r.w,e=r.height||r.h;r.wurl&&(0,c.triggerPixel)(decodeURIComponent(r.wurl)),r.adm?(r.adm=o?r.adm.replace("${AUCTION_PRICE}",o):r.adm.replace("${AUCTION_PRICE}",""),a+=t?s(r.adm,n,e):r.adm,r.nurl&&(a+=c.createTrackPixelHtml(decodeURIComponent(r.nurl))),r.burl&&(i=function(){c.triggerPixel(r.burl)},t?c.loadScript(u,"mraid.js",function(){var e;function n(t){0<t&&(mraid.removeEventListener("exposureChange",n),e())}function r(t){t&&(mraid.removeEventListener("viewableChange",r),e())}function o(){u.MRAID_ENV&&3<=parseFloat(u.MRAID_ENV.version)?mraid.addEventListener("exposureChange",n):u.MRAID_ENV&&parseFloat(u.MRAID_ENV.version)<3&&(mraid.isViewable()?e():mraid.addEventListener("viewableChange",r))}(e=i,!u.mraid||!u.MRAID_ENV||("loading"==mraid.getState()?mraid.addEventListener("ready",function t(){mraid.removeEventListener("ready",t),o()}):o(),0))&&i()},i):i()),c.writeAdHtml(a)):r.nurl&&(t?(a+=s(c.loadScript(u,r.nurl).outerHTML,n,e),c.writeAdHtml(a)):(t=r.nurl,a=c.getCreativeComment(r),l.insertElement(a,document,"body"),c.writeAdUrl(t,n,e)))}function s(t,e,n){var r=c.getUUID();return'<div id="'.concat(r,'" style="border-style: none; position: absolute; width:100%; height:100%;">\n      <div id="').concat(r,'_inner" style="margin: 0 auto; width:').concat(e,"px; height:").concat(n,'px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">').concat(t,"</div>\n      </div>")}return{renderAd:function(t,e){e=c.transformAuctionTargetingData(e);console.log("ppp",e),i.isMobileApp(e.env)||i.isAmp(e.pubUrl)?n(p,"targetingData.uuid",e.size,e.hbPb):i.canLocatePrebid()?function(t,e){for(var n=u,r=0;r<10;r++)if((n=n.parent).pbjs)try{n.pbjs.renderAd(t,e);break}catch(t){continue}}(t,e.adId):function(a,t,e){var n=1<arguments.length&&void 0!==t?t:"",t=u.location,e=c.parseUrl(2<arguments.length?e:void 0),s=e.protocol+"://"+e.host,n=n||u.location.hostname,n=t.protocol+"//"+n;function r(t){var e=t.message?"message":"data",n={};try{n=JSON.parse(t[e])}catch(t){return}var r,o,i=t.origin||t.originalEvent.origin;n.message&&"Prebid Response"===n.message&&s===i&&n.adId===a&&(n.ad||n.adUrl)&&(r=u.document.body,o=n.ad,e=n.adUrl,t=n.width,i=n.height,"video"===n.mediaType?console.log("Error trying to write ad."):o?(n=l.getEmptyIframe(n.height,n.width),r.appendChild(n),n.contentDocument.open(),n.contentDocument.write(o),n.contentDocument.close()):e?((t=l.getEmptyIframe(i,t)).style.display="inline",t.style.overflow="hidden",t.src=e,l.insertElement(t,document,"body")):console.log("Error trying to write ad. No ad for bid response id: ".concat(id)))}u.addEventListener("message",r,!1),n=JSON.stringify({message:"Prebid Request",adId:a,adServerDomain:n}),u.parent.postMessage(n,s)}(e.adId,e.adServerDomain,e.pubUrl)}}};var c=r(n(3)),l=r(n(0));function s(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(s=function(t){return t?n:e})(t)}function r(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!=typeof t)return{default:t};e=s(e);if(e&&e.has(t))return e.get(t);var n,r,o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&((r=i?Object.getOwnPropertyDescriptor(t,n):null)&&(r.get||r.set)?Object.defineProperty(o,n,r):o[n]=t[n]);return o.default=t,e&&e.set(t,o),o}var p={id:"372068477156926942",impid:"some-impression-id",price:.5,adm:"<script defer src='https://dabu.askmediagroup.com/s/v2.0.29/initiator.min.js' id='dabu' data-dabu-placement-id='amg_sib_target' data-dabu-width='300' data-dabu-height='250' data-ad-type='sib' data-dabu-campaign-id='Test_Tag_Automatad_MOBILE' data-dabu-pid='automatad' ><\/script> <div id='amg_sib_target'></div>",adid:"96846035",adomain:["example.com"],iurl:"",cid:"9325",crid:"96846035",w:300,h:250,ext:{appnexus:{brand_id:1,auction_id:0x67bfe67feeb88400,bidder_id:2,bid_ad_type:0}}}},function(t,n,e){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.createTrackPixelHtml=function(t){if(!t)return"";t=encodeURI(t);return'<div style="position:absolute;left:0px;top:0px;visibility:hidden;"><img src="'.concat(t,'"></div>')},n.getCreativeComment=function(t){return document.createComment("Creative ".concat(t.crid," served by Prebid.js Header Bidding"))},n.getCreativeCommentMarkup=function(t){var e=n.getCreativeComment(t),t=document.createElement("div");return t.appendChild(e),t.innerHTML},n.getUUID=function(){var n=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===t?e:3&e|8).toString(16)})},n.loadScript=function(t,e,n,r){var t=t.document,o=t.createElement("script");o.type="text/javascript",n&&"function"==typeof n&&(o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,n())}:o.onload=function(){n()});r&&"function"==typeof r&&(o.onerror=function(){r()});o.src=e;e=t.getElementsByTagName("head");(e=e.length?e:t.getElementsByTagName("body")).length&&(e=e[0]).insertBefore(o,e.firstChild);return o},n.parseUrl=function(t){var e=document.createElement("a");return e.href=decodeURIComponent(t),{href:e.href,protocol:(e.protocol||"").replace(/:$/,""),hostname:e.hostname,port:+e.port,pathname:e.pathname.replace(/^(?!\/)/,"/"),hash:(e.hash||"").replace(/^#/,""),host:(e.host||window.location.host).replace(/:(443|80)$/,"")}},n.sendRequest=function(t,e){var n=new XMLHttpRequest;n.addEventListener("load",function(){e(n.responseText)}),n.open("GET",t),n.send()},n.transformAuctionTargetingData=function(e){var n={hb_adid:"adId",hb_cache_host:"cacheHost",hb_cache_path:"cachePath",hb_cache_id:"uuid",hb_format:"mediaType",hb_env:"env",hb_size:"size",hb_pb:"hbPb"};function t(t){return e[t]&&(i(e[t],"Object")&&0<Object.keys(e[t]).length||u(e[t])&&""!==e[t])}var r={},o={};t("targetingMap")?o=function(e){var n={};return Object.keys(e).forEach(function(t){Array.isArray(e[t])&&0<e[t].length&&(n[t]=e[t][0])}),n}(e.targetingMap):t("targetingKeywords")&&(o=function(t){var n={};return 0<(t=t.split(",")).length&&t.forEach(function(t){var e=t.split(":");2===e.length&&(t=e[0],e=e[1],n[t]=e)}),n}(e.targetingKeywords));return function(e){Object.keys(e).forEach(function(t){r[n[t]||t]=e[t]})}(o),Object.keys(e).forEach(function(t){"targetingMap"!==t&&"targetingKeywords"!==t&&u(e[t])&&""!==e[t]&&(r[t]=e[t])}),r},n.triggerPixel=function(t,e){var n=new Image;e&&"function"==typeof e&&(n.addEventListener("load",e),n.addEventListener("error",e));n.src=t},n.writeAdHtml=function(t){o(document.body,t,{error:console.error})},n.writeAdUrl=function(t,e,n){e=r.getEmptyIframe(n,e);e.src=t,document.body.appendChild(e)};var r=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!=typeof t)return{default:t};e=s(e);if(e&&e.has(t))return e.get(t);var n,r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in t){var i;"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&((i=o?Object.getOwnPropertyDescriptor(t,n):null)&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=t[n])}r.default=t,e&&e.set(t,r);return r}(e(0));function s(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(s=function(t){return t?n:e})(t)}var o=e(4);function i(t,e){return Object.prototype.toString.call(t)==="[object "+e+"]"}function u(t){return i(t,"String")}},function(t,e,n){var r;r=function(){return r=[function(t,e,n){"use strict";var r,o=n(1),n=(r=o)&&r.__esModule?r:{default:r};t.exports=n.default},function(t,e,n){"use strict";e.__esModule=!0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,r=arguments[e];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default=h;var r,o=n(2),u=(r=o)&&r.__esModule?r:{default:r},i=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}}(n(4));function c(){}var a={afterAsync:c,afterDequeue:c,afterStreamStart:c,afterWrite:c,autoFix:!0,beforeEnqueue:c,beforeWriteToken:function(t){return t},beforeWrite:function(t){return t},done:c,error:function(t){throw new Error(t.msg)},releaseAsync:!1},l=0,p=[],f=null;function d(){var t,e=p.shift();e&&((t=i.last(e)).afterDequeue(),e.stream=function(t,e,r){(f=new u.default(t,r)).id=l++,f.name=r.name||f.id,h.streams[f.name]=f;var n=t.ownerDocument,o={close:n.close,open:n.open,write:n.write,writeln:n.writeln};function i(t){t=r.beforeWrite(t),f.write(t),r.afterWrite(t)}s(n,{close:c,open:c,write:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return i(e.join(""))},writeln:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return i(e.join("")+"\n")}});var a=f.win.onerror||c;return f.win.onerror=function(t,e,n){r.error({msg:t+" - "+e+": "+n}),a.apply(f.win,[t,e,n])},f.write(e,function(){s(n,o),f.win.onerror=a,r.done(),f=null,d()}),f}.apply(void 0,e),t.afterStreamStart())}function h(t,e,n){if(i.isFunction(n))n={done:n};else if("clear"===n)return p=[],f=null,void(l=0);n=i.defaults(n,a);var r=[t=/^#/.test(t)?window.document.getElementById(t.substr(1)):t.jquery?t[0]:t,e,n];return t.postscribe={cancel:function(){r.stream?r.stream.abort():r[1]=c}},n.beforeEnqueue(r),p.push(r),f||d(),t.postscribe}s(h,{streams:{},queue:p,WriteStream:u.default})},function(t,e,n){"use strict";e.__esModule=!0;var r,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,r=arguments[e];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=n(3),i=(r=o)&&r.__esModule?r:{default:r},a=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}}(n(4));var l="data-ps-",p="ps-style",f="ps-script";function u(t,e){e=t.getAttribute(l+e);return a.existy(e)?String(e):e}function c(t,e,n){n=2<arguments.length&&void 0!==n?n:null,e=l+e;a.existy(n)&&""!==n?t.setAttribute(e,n):t.removeAttribute(e)}d.prototype.write=function(){var t;for((t=this.writeQueue).push.apply(t,arguments);!this.deferredRemote&&this.writeQueue.length;){var e=this.writeQueue.shift();a.isFunction(e)?this._callFunction(e):this._writeImpl(e)}},d.prototype._callFunction=function(t){var e={type:"function",value:t.name||t.toString()};this._onScriptStart(e),t.call(this.win,this.doc),this._onScriptDone(e)},d.prototype._writeImpl=function(t){this.parser.append(t);for(var e=void 0,n=void 0,r=void 0,o=[];(e=this.parser.readToken())&&!(n=a.isScript(e))&&!(r=a.isStyle(e));)(e=this.options.beforeWriteToken(e))&&o.push(e);0<o.length&&this._writeStaticTokens(o),n&&this._handleScriptToken(e),r&&this._handleStyleToken(e)},d.prototype._writeStaticTokens=function(t){t=this._buildChunk(t);return t.actual?(t.html=this.proxyHistory+t.actual,this.proxyHistory+=t.proxy,this.proxyRoot.innerHTML=t.html,this._walkChunk(),t):null},d.prototype._buildChunk=function(t){for(var e=this.actuals.length,n=[],r=[],o=[],i=t.length,a=0;a<i;a++){var s,u=t[a],c=u.toString();n.push(c),u.attrs?/^noscript$/i.test(u.tagName)||(s=e++,r.push(c.replace(/(\/?>)/," "+l+"id="+s+" $1")),u.attrs.id!==f&&u.attrs.id!==p&&o.push("atomicTag"===u.type?"":"<"+u.tagName+" "+l+"proxyof="+s+(u.unary?" />":">"))):(r.push(c),o.push("endTag"===u.type?c:""))}return{tokens:t,raw:n.join(""),actual:r.join(""),proxy:o.join("")}},d.prototype._walkChunk=function(){for(var t,e=[this.proxyRoot];a.existy(t=e.shift());){var n=1===t.nodeType;n&&u(t,"proxyof")||(n&&c(this.actuals[u(t,"id")]=t,"id"),(n=t.parentNode&&u(t.parentNode,"proxyof"))&&this.actuals[n].appendChild(t)),e.unshift.apply(e,a.toArray(t.childNodes))}},d.prototype._handleScriptToken=function(t){var e=this,n=this.parser.clear();n&&this.writeQueue.unshift(n),t.src=t.attrs.src||t.attrs.SRC,(t=this.options.beforeWriteToken(t))&&(t.src&&this.scriptStack.length?this.deferredRemote=t:this._onScriptStart(t),this._writeScriptToken(t,function(){e._onScriptDone(t)}))},d.prototype._handleStyleToken=function(t){var e=this.parser.clear();e&&this.writeQueue.unshift(e),t.type=t.attrs.type||t.attrs.TYPE||"text/css",(t=this.options.beforeWriteToken(t))&&this._writeStyleToken(t),e&&this.write()},d.prototype._writeStyleToken=function(t){var e=this._buildStyle(t);this._insertCursor(e,p),t.content&&(e.styleSheet&&!e.sheet?e.styleSheet.cssText=t.content:e.appendChild(this.doc.createTextNode(t.content)))},d.prototype._buildStyle=function(t){var n=this.doc.createElement(t.tagName);return n.setAttribute("type",t.type),a.eachKey(t.attrs,function(t,e){n.setAttribute(t,e)}),n},d.prototype._insertCursor=function(t,e){this._writeImpl('<span id="'+e+'"/>');e=this.doc.getElementById(e);e&&e.parentNode.replaceChild(t,e)},d.prototype._onScriptStart=function(t){t.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(t)},d.prototype._onScriptDone=function(t){t===this.scriptStack[0]?(this.scriptStack.shift(),this.write.apply(this,t.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)):this.options.error({msg:"Bad script nesting or script finished twice"})},d.prototype._writeScriptToken=function(t,e){var n=this._buildScript(t),r=this._shouldRelease(n),o=this.options.afterAsync;t.src&&(n.src=t.src,this._scriptLoadHandler(n,r?o:function(){e(),o()}));try{this._insertCursor(n,f),n.src&&!r||e()}catch(t){this.options.error(t),e()}},d.prototype._buildScript=function(t){var n=this.doc.createElement(t.tagName);return a.eachKey(t.attrs,function(t,e){n.setAttribute(t,e)}),t.content&&(n.text=t.content),n},d.prototype._scriptLoadHandler=function(e,n){function r(){e=e.onload=e.onreadystatechange=e.onerror=null}var o=this.options.error;function t(){r(),null!=n&&n(),n=null}function i(t){r(),o(t),null!=n&&n(),n=null}function a(t,e){var n=t["on"+e];null!=n&&(t["_on"+e]=n)}a(e,"load"),a(e,"error"),s(e,{onload:function(){if(e._onload)try{e._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){i({msg:"onload handler failed "+t+" @ "+e.src})}t()},onerror:function(){if(e._onerror)try{e._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){return void i({msg:"onerror handler failed "+t+" @ "+e.src})}i({msg:"remote script failed "+e.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(e.readyState)&&t()}})},d.prototype._shouldRelease=function(t){return!/^script$/i.test(t.nodeName)||!!(this.options.releaseAsync&&t.src&&t.hasAttribute("async"))},n=d;function d(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),this.root=t,this.options=e,this.doc=t.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new i.default("",{autoFix:e.autoFix}),this.actuals=[t],this.proxyHistory="",this.proxyRoot=this.doc.createElement(t.nodeName),this.scriptStack=[],this.writeQueue=[],c(this.proxyRoot,"proxyof",0)}e.default=n},function(t,e,n){var r;r=function(){return r=[function(t,e,n){"use strict";var r,o=n(1),n=(r=o)&&r.__esModule?r:{default:r};t.exports=n.default},function(t,e,n){"use strict";e.__esModule=!0;var r,a=c(n(2)),o=c(n(3)),i=n(6),s=(r=i)&&r.__esModule?r:{default:r},u=n(5);function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}var l,p={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},f=(d.prototype.append=function(t){this.stream+=t},d.prototype.prepend=function(t){this.stream=t+this.stream},d.prototype._readTokenImpl=function(){var t=this._peekTokenImpl();if(t)return this.stream=this.stream.slice(t.length),t},d.prototype._peekTokenImpl=function(){for(var t in p)if(p.hasOwnProperty(t)&&p[t].test(this.stream)){t=o[t](this.stream);if(t)return"startTag"===t.type&&/script|style/i.test(t.tagName)?null:(t.text=this.stream.substr(0,t.length),t)}},d.prototype.peekToken=function(){return this._peekToken()},d.prototype.readToken=function(){return this._readToken()},d.prototype.readTokens=function(t){for(var e;e=this.readToken();)if(t[e.type]&&!1===t[e.type](e))return},d.prototype.clear=function(){var t=this.stream;return this.stream="",t},d.prototype.rest=function(){return this.stream},d);function d(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),this.stream=e;var r,o=!1,i={};for(r in a)a.hasOwnProperty(r)&&(n.autoFix&&(i[r+"Fix"]=!0),o=o||i[r+"Fix"]);o?(this._readToken=(0,s.default)(this,i,function(){return t._readTokenImpl()}),this._peekToken=(0,s.default)(this,i,function(){return t._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}for(l in(e.default=f).tokenToString=function(t){return t.toString()},f.escapeAttributes=function(t){var e,n={};for(e in t)t.hasOwnProperty(e)&&(n[e]=(0,u.escapeQuotes)(t[e],null));return n},f.supports=a)a.hasOwnProperty(l)&&(f.browserHasFlaw=f.browserHasFlaw||!a[l]&&l)},function(t,e){"use strict";var n=!(e.__esModule=!0),r=!1,o=window.document.createElement("div");try{var i="<P><I></P></I>";o.innerHTML=i,e.tagSoup=n=o.innerHTML!==i}catch(t){e.tagSoup=n=!1}try{o.innerHTML="<P><i><P></P></i></P>",e.selfClose=r=2===o.childNodes.length}catch(t){e.selfClose=r=!1}o=null,e.tagSoup=n,e.selfClose=r},function(t,e,n){"use strict";e.__esModule=!0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.comment=function(t){var e=t.indexOf("--\x3e");if(0<=e)return new a.CommentToken(t.substr(4,e-1),e+3)},e.chars=function(t){var e=t.indexOf("<");return new a.CharsToken(0<=e?e:t.length)},e.startTag=r,e.atomicTag=function(t){var e=r(t);if(e){t=t.slice(e.length);if(t.match(new RegExp("</\\s*"+e.tagName+"\\s*>","i"))){t=t.match(new RegExp("([\\s\\S]*?)</\\s*"+e.tagName+"\\s*>","i"));if(t)return new a.AtomicTagToken(e.tagName,t[0].length+e.length,e.attrs,e.booleanAttrs,t[1])}}},e.endTag=function(t){t=t.match(s.endTag);if(t)return new a.EndTagToken(t[1],t[0].length)};var a=n(4),s={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i};function r(t){var n,r,o;if(-1!==t.indexOf(">")){t=t.match(s.startTag);if(t){t=(n={},r={},o=t[2],t[2].replace(s.attr,function(t,e){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(n[arguments[5]]="",r[arguments[5]]=!0):n[e]=arguments[2]||arguments[3]||arguments[4]||s.fillAttr.test(e)&&e||"":n[e]="",o=o.replace(t,"")}),{v:new a.StartTagToken(t[1],t[0].length,n,r,!!t[3],o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))});if("object"===(void 0===t?"undefined":i(t)))return t.v}}}},function(t,e,n){"use strict";e.__esModule=!0,e.EndTagToken=e.AtomicTagToken=e.StartTagToken=e.TagToken=e.CharsToken=e.CommentToken=e.Token=void 0;var i=n(5);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.Token=function t(e,n){a(this,t),this.type=e,this.length=n,this.text=""},e.CommentToken=(r.prototype.toString=function(){return"\x3c!--"+this.content},r);function r(t,e){a(this,r),this.type="comment",this.length=e||(t?t.length:0),this.text="",this.content=t}e.CharsToken=(o.prototype.toString=function(){return this.text},o);function o(t){a(this,o),this.type="chars",this.length=t,this.text=""}var s=e.TagToken=(u.formatTag=function(t){var e,n,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,o="<"+t.tagName;for(e in t.attrs)t.attrs.hasOwnProperty(e)&&(o+=" "+e,n=t.attrs[e],void 0!==t.booleanAttrs&&void 0!==t.booleanAttrs[e]||(o+='="'+(0,i.escapeQuotes)(n)+'"'));return t.rest&&(o+=" "+t.rest),t.unary&&!t.html5Unary?o+="/>":o+=">",null!=r&&(o+=r+"</"+t.tagName+">"),o},u);function u(t,e,n,r,o){a(this,u),this.type=t,this.length=n,this.text="",this.tagName=e,this.attrs=r,this.booleanAttrs=o,this.unary=!1,this.html5Unary=!1}e.StartTagToken=(c.prototype.toString=function(){return s.formatTag(this)},c);function c(t,e,n,r,o,i){a(this,c),this.type="startTag",this.length=e,this.text="",this.tagName=t,this.attrs=n,this.booleanAttrs=r,this.html5Unary=!1,this.unary=o,this.rest=i}e.AtomicTagToken=(l.prototype.toString=function(){return s.formatTag(this,this.content)},l);function l(t,e,n,r,o){a(this,l),this.type="atomicTag",this.length=e,this.text="",this.tagName=t,this.attrs=n,this.booleanAttrs=r,this.unary=!1,this.html5Unary=!1,this.content=o}e.EndTagToken=(p.prototype.toString=function(){return"</"+this.tagName+">"},p);function p(t,e){a(this,p),this.type="endTag",this.length=e,this.text="",this.tagName=t}},function(t,e){"use strict";e.__esModule=!0,e.escapeQuotes=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return t?t.replace(/([^"]*)"/g,function(t,e){return/\\/.test(e)?e+'"':e+'\\"'}):e}},function(t,e){"use strict";e.__esModule=!0,e.default=function(r,n,o){var i=function(){var t=[];return t.last=function(){return this[this.length-1]},t.lastTagNameEq=function(t){var e=this.last();return e&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},t.containsTagName=function(t){for(var e,n=0;e=this[n];n++)if(e.tagName===t)return!0;return!1},t}(),a={startTag:function(t){var e=t.tagName;"TR"===e.toUpperCase()&&i.lastTagNameEq("TABLE")?(r.prepend("<TBODY>"),s()):n.selfCloseFix&&u.test(e)&&i.containsTagName(e)?i.lastTagNameEq(e)?l(r,i):(r.prepend("</"+t.tagName+">"),s()):t.unary||i.push(t)},endTag:function(t){i.last()?n.tagSoupFix&&!i.lastTagNameEq(t.tagName)?l(r,i):i.pop():n.tagSoupFix&&(o(),s())}};function s(){var t,e,n,e=(e=o,n=(t=r).stream,e=c(o()),t.stream=n,e);e&&a[e.type]&&a[e.type](e)}return function(){return s(),c(o())}};var n=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;function c(t){return t&&"startTag"===t.type&&(t.unary=n.test(t.tagName)||t.unary,t.html5Unary=!/\/>$/.test(t.text)),t}function l(t,e){e=e.pop();t.prepend("</"+e.tagName+">")}}],o={},n.m=r,n.c=o,n.p="",n(0);function n(t){if(o[t])return o[t].exports;var e=o[t]={exports:{},id:t,loaded:!1};return r[t].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var r,o},t.exports=r()},function(t,e){"use strict";e.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t){return null!=t}function i(t,e,n){for(var r=void 0,o=t&&t.length||0,r=0;r<o;r++)e.call(n,t[r],r)}function a(t,e,n){for(var r in t)t.hasOwnProperty(r)&&e.call(n,r,t[r])}function n(t,e){return!(!t||"startTag"!==t.type&&"atomicTag"!==t.type||!("tagName"in t))&&!!~t.tagName.toLowerCase().indexOf(e)}e.existy=o,e.isFunction=function(t){return"function"==typeof t},e.each=i,e.eachKey=a,e.defaults=function(n,t){return n=n||{},a(t,function(t,e){o(n[t])||(n[t]=e)}),n},e.toArray=function(n){try{return Array.prototype.slice.call(n)}catch(t){var e=function(){var e=[];return i(n,function(t){e.push(t)}),{v:e}}();if("object"===(void 0===e?"undefined":r(e)))return e.v}},e.last=function(t){return t[t.length-1]},e.isTag=n,e.isScript=function(t){return n(t,"script")},e.isStyle=function(t){return n(t,"style")}}],o={},n.m=r,n.c=o,n.p="",n(0);function n(t){if(o[t])return o[t].exports;var e=o[t]={exports:{},id:t,loaded:!1};return r[t].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var r,o},t.exports=r()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.newEnvironment=function(n){function e(){return n.top!==n&&!function(t){try{return t.top.location.toString(),!0}catch(t){return!1}}(n)}return{isMobileApp:function(t){return t&&"mobile-app"===t},isCrossDomain:e,isSafeFrame:function(){return!(!n.$sf||!n.$sf.ext)},isAmp:function(t){return"string"==typeof t&&""!==t&&e()},canLocatePrebid:function(){for(var t=!1,e=n;!t;){try{if(e.pbjs){t=!0;break}}catch(t){}if(e===window.top)break;e=e.parent}return t}}}}]);