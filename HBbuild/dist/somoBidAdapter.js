pbjsChunk([78],{559:function(e,r,n){e.exports=n(560)},560:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",function(){return f});var i=n(0),t=n(1),a=n(11),o=n.n(a),s=n(2);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=["mimes","minduration","maxduration","protocols","startdelay","linearity","skip","delivery","pos","api","ext","battr"],u=["battr","btype","pos","mimes","ext"],c=["name","domain","cat","keywords","content"],m=["name","bundle","domain","storeUrl","cat","ver","keywords","content"],f={code:"somo",supportedMediaTypes:[s.b,s.d],aliases:["somoaudience"],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.placementId)},buildRequests:function(e,n){return e.map(function(e){var r=function(e,r){var n={id:e.bidId,imp:[function(r){var n={id:r.bidId,bidfloor:r.params.bidfloor||0};if(l(r)){if(n.video={},r.mediaTypes&&r.mediaTypes.video&&r.mediaTypes.video.sizes){var e=y(r.mediaTypes.video.sizes);n.video.w=e[0],n.video.h=e[1]}r.params.video&&Object.keys(r.params.video).filter(function(e){return o()(p,e)}).forEach(function(e){return n.video[e]=r.params.video[e]})}else{if(n.banner={topframe:0},r.mediaTypes&&r.mediaTypes.banner&&r.mediaTypes.banner.sizes){var t=y(r.mediaTypes.banner.sizes);n.banner.w=t[0],n.banner.h=t[1]}r.params.banner&&Object.keys(r.params.banner).filter(function(e){return o()(u,e)}).forEach(function(e){return n.banner[e]=r.params.banner[e]})}return n}(e)],at:1,tmax:400,site:function(r,e){{if(b(r))return null;var n={};return e&&e.refererInfo&&(n.ref=e.refererInfo.referer,n.page=e.refererInfo.canonicalUrl),r.params.site&&Object.keys(r.params.site).filter(function(e){return o()(c,e)}).forEach(function(e){return n[e]=r.params.site[e]}),void 0===n.domain&&void 0!==n.page&&("function"==typeof window.URL?n.domain=new window.URL(n.page).hostname:n.domain=function(e){var r=e;r=-1<e.indexOf("//")?e.split("/")[2]:e.split("/")[0];return r=(r=r.split(":")[0]).split("?")[0]}(n.page)),n}}(e,r),app:function(r){{if(b(r)){var n={};return Object.keys(r.params.app).filter(function(e){return o()(m,e)}).forEach(function(e){return n[e]=r.params.app[e]}),n}return null}}(e),device:{ip:"check",ua:navigator.userAgent,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage},bcat:function(e){if(i.isArray(e.params.bcat))return e.params.bcat;return[]}(e),badv:function(e){if(i.isArray(e.params.badv))return e.params.badv;return[]}(e),ext:{prebid:"3.9.0"}};void 0!==r&&(n=function(e,r){e&&r&&"gdprApplies"in e&&("reqs"in r||(r.reqs={}),"ext"in r.reqs||(r.reqs.ext={}),r.reqs.ext.gdpr=e.gdprApplies,"consentString"in e&&("user"in r||(r.user={}),"ext"in r.user||(r.user.ext={}),r.user.ext.consent=e.consentString));return r}(r.gdprConsent,n));return n}(e,n);return{method:"POST",url:"https://publisher-east.mobileadtrading.com/rtb/bid?s="+e.params.placementId.toString(),data:r,bidRequest:e}})},interpretResponse:function(e,r){return function(e,r){var n=[];if(r.body){var t=r.body.seatbid[0].bid[0],a={requestId:r.body.id,cpm:t.price,width:t.w,height:t.h,ad:t.adm,ttl:360,creativeId:t.crid,adId:t.impid,netRevenue:!1,currency:"USD",adUnitCode:e.bidRequest.adUnitCode};l(e.bidRequest)?(a.vastXml=t.adm,a.mediaType="video"):(a.ad=t.adm,a.mediaType="banner"),n.push(a)}return n}(r,e)},getUserSyncs:function(e,r,n){var t=[],a="https://publisher-east.mobileadtrading.com/usersync";return e.pixelEnabled&&(n&&"string"==typeof n.consentString&&"boolean"==typeof n.gdprApplies&&(a+="?gdpr=".concat(Number(n.gdprApplies),"&gdpr_consent=").concat(n.consentString)),t.push({type:"image",url:a})),t}};function b(e){return!!e.params.app}function l(e){return i.deepAccess(e,"mediaTypes.video")||"video"==e.mediaType}function y(e){var r=0,n=0;if(i.isArray(e)&&2===e.length&&!i.isArray(e[0]))r=parseInt(e[0],10),n=parseInt(e[1],10);else if("object"===d(e))for(var t=0;t<e.length;t++){var a=e[t];r=parseInt(a[0],10),n=parseInt(a[1],10);break}return[r,n]}Object(t.registerBidder)(f)}},[559]);