pbjsChunk([77],{563:function(e,t,r){e.exports=r(564)},564:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return o}),r.d(t,"_isInbounds",function(){return m}),t._getPlatform=v;var n=r(1),y=r(0),i=r(2),a=r(3),g=r(10),c=r(33);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,s=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw s}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p="sonobi",b=Object(y.generateUUID)(),o={code:p,supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){if(!e.params)return!1;if(!e.params.ad_unit&&!e.params.placement_id)return!1;if(!Object(y.deepAccess)(e,"mediaTypes.banner")&&!Object(y.deepAccess)(e,"mediaTypes.video"))return!1;if(Object(y.deepAccess)(e,"mediaTypes.banner")){if(!Object(y.deepAccess)(e,"mediaTypes.banner.sizes")&&!e.params.sizes)return!1}else if(Object(y.deepAccess)(e,"mediaTypes.video")){if("outstream"===Object(y.deepAccess)(e,"mediaTypes.video.context")&&!e.params.sizes)return!1;if("instream"===Object(y.deepAccess)(e,"mediaTypes.video.context")&&!Object(y.deepAccess)(e,"mediaTypes.video.playerSize"))return!1}return!0},buildRequests:function(e,t){var r=e.map(function(e){var t=function(e){if(e.params.ad_unit)return e.params.ad_unit;return e.params.placement_id}(e);return/^[\/]?[\d]+[[\/].+[\/]?]?$/.test(t)?(t="/"===t.charAt(0)?t:"/"+t,u({},"".concat(t,"|").concat(e.bidId),"".concat(l(e)).concat(f(e)))):/^[0-9a-fA-F]{20}$/.test(t)&&20===t.length?u({},e.bidId,"".concat(t,"|").concat(l(e)).concat(f(e))):void Object(y.logError)("The ad unit code or Sonobi Placement id for slot ".concat(e.bidId," is invalid"))}),n={};r.forEach(function(e){d(n,e)});var i={key_maker:JSON.stringify(n),ref:t.refererInfo.referer,s:Object(y.generateUUID)(),pv:b,vp:v(),lib_name:"prebid",lib_v:"3.9.0",us:0};a.b.getConfig("userSync")&&a.b.getConfig("userSync").syncsPerBidder&&(i.us=a.b.getConfig("userSync").syncsPerBidder),c.a.canBidderRegisterSync("iframe",p)?i.ius=1:i.ius=0,Object(y.deepAccess)(e[0],"params.hfa")&&(i.hfa=Object(y.deepAccess)(e[0],"params.hfa")),e[0].params.referrer&&(i.ref=e[0].params.referrer),t&&t.gdprConsent&&(i.gdpr=t.gdprConsent.gdprApplies?"true":"false",t.gdprConsent.consentString&&(i.consent_string=t.gdprConsent.consentString));var s=function(t){var e=function(){var e=window.DigiTrust&&(a.b.getConfig("digiTrustId")||window.DigiTrust.getUser({member:t}));return e&&e.success&&e.identity||null}();if(!e||e.privacy&&e.privacy.optout)return null;return e}("fhnS5drwmH");s&&(i.digid=s.id,i.digkeyv=s.keyv),e[0].schain&&(i.schain=JSON.stringify(e[0].schain)),Object(y.deepAccess)(e[0],"userId")&&0<Object.keys(e[0].userId).length&&(i.userid=JSON.stringify(e[0].userId));var o=e[0].params.keywords;return o&&(i.kw=o),t&&t.uspConsent&&(i.us_privacy=t.uspConsent),Object(y.isEmpty)(n)?null:{method:"GET",url:"https://apex.go.sonobi.com/trinity.json",withCredentials:!0,data:i,bidderRequests:e}},interpretResponse:function(e,l){var f=e.body,m=[],v=l.data.ref;return 0===Object.keys(f.slots).length||Object.keys(f.slots).forEach(function(e){var t=f.slots[e],r=e.split("|").slice(-1)[0],n=function(e,t){for(var r=0;r<e.length;r++)if(e[r].bidId===t)return e[r]}(l.bidderRequests,r),i=null;"video"===t.sbi_ct&&(i="video","outstream"===Object(y.deepAccess)(n,"mediaTypes.video.context")&&(i="outstream"));var s=j(i,v);if(t.sbi_aid&&t.sbi_mouse&&t.sbi_size){var o=h(t.sbi_size.split("x"),2),a=o[0],c=void 0===a?1:a,d=o[1],u=void 0===d?1:d,p={requestId:r,cpm:Number(t.sbi_mouse),width:Number(c),height:Number(u),ad:s(f.sbi_dc,t.sbi_aid),ttl:500,creativeId:t.sbi_crid||t.sbi_aid,aid:t.sbi_aid,netRevenue:!0,currency:"USD"};if(t.sbi_dozer&&(p.dealId=t.sbi_dozer),"video"===i)p.mediaType="video",p.vastUrl=s(f.sbi_dc,t.sbi_aid),delete p.ad,delete p.width,delete p.height;else if("outstream"===i&&n){p.mediaType="video",p.vastUrl=s(f.sbi_dc,t.sbi_aid),p.renderer=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},n=g.a.install({id:t.aid,url:"https://mtrx.go.sonobi.com/sbi_outstream_renderer.js",config:r,loaded:!1,adUnitCode:e});try{n.setRender(O)}catch(e){Object(y.logWarn)("Prebid Error calling setRender on renderer",e)}return n.setEventHandlers({impression:function(){return Object(y.logMessage)("Sonobi outstream video impression event")},loaded:function(){return Object(y.logMessage)("Sonobi outstream video loaded event")},ended:function(){Object(y.logMessage)("Sonobi outstream renderer video event")}}),n}(n.adUnitCode,p,Object(y.deepAccess)(n,"renderer.options"));var b=Object(y.deepAccess)(n,"params.sizes");Array.isArray(b)&&Array.isArray(b[0])&&(b=b[0]),b&&(p.width=b[0],p.height=b[1])}m.push(p)}}),m},getUserSyncs:function(e,t){var r=[];try{e.pixelEnabled&&t[0].body.sbi_px.forEach(function(e){r.push({type:e.type,url:e.url})})}catch(e){}return r}};function l(e){return Object(y.deepAccess)(e,"mediaTypes.video")?"":e.params.sizes?Object(y.parseSizesInput)(e.params.sizes).join(","):Object(y.deepAccess)(e,"mediaTypes.banner.sizes")?Object(y.parseSizesInput)(Object(y.deepAccess)(e,"mediaTypes.banner.sizes")).join(","):e.sizes?Object(y.parseSizesInput)(e.sizes).join(","):void 0}function f(e){return e.params.floor?"|f=".concat(e.params.floor):""}var j=function(i,s){return function(e,t){return"video"===i||"outstream"===i?(r=t,n=s,"https://".concat(e,"apex.go.sonobi.com/vast.xml?vid=").concat(r,"&ref=").concat(encodeURIComponent(n))):'<script type="text/javascript" src="'+"https://".concat(e,"apex.go.sonobi.com/sbi.js?aid=").concat(t,"&as=null&ref=").concat(encodeURIComponent(s))+'"><\/script>';var r,n}};var m=function(e){var r=0<arguments.length&&void 0!==e?e:window;return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER;return r.innerWidth>=e&&r.innerWidth<t}};function v(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window,t=m(e),r=992,n=768;return t(0,768)?"mobile":t(n,r)?"tablet":"desktop"}function O(i){i.renderer.push(function(){var e=h(i.getSize().split("x"),2),t=e[0],r=e[1],n=new window.SbiOutstreamRenderer;n.init({vastUrl:i.vastUrl,height:r,width:t}),n.setRootElement(i.adUnitCode)})}Object(n.registerBidder)(o)}},[563]);