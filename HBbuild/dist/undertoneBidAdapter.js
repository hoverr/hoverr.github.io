pbjsChunk([57],{611:function(e,n,r){e.exports=r(612)},612:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r.d(n,"spec",function(){return a});var d=r(9),t=r(1);function o(e){if(!e)return null;var n=e.gdprApplies?"1":"0",r=e.consentString?e.consentString:"";return"gdpr=".concat(n,"&gdprstr=").concat(r)}var a={code:"undertone",isBidRequestValid:function(e){if(e&&e.params&&e.params.publisherId)return e.params.publisherId=parseInt(e.params.publisherId),!0},buildRequests:function(e,n){var r={"x-ut-hb-params":[],commons:{adapterVersion:"3.9.0",uids:e[0].userId}},t=n.refererInfo.referer,a=function(e){var n=null;try{var r=/[-\w]+\.([-\w]+|[-\w]{3,}|[-\w]{1,3}\.[-\w]{2})$/i.exec(e);if(null!=r&&0<r.length){n=r[0];for(var t=1;t<r.length;t++)r[t].length>n.length&&(n=r[t])}}catch(e){n=null}return n}(d.c(t).hostname),c=function(){try{var e=window.top.document.querySelector("link[rel='canonical']");if(null!==e)return e.href}catch(e){}return null}()||t,u=e[0].params.publisherId,s="".concat("https://hb.undertone.com/hb","?pid=").concat(u,"&domain=").concat(a),i=o(n.gdprConsent);return i&&(s+="&".concat(i)),n.uspConsent&&(s+="&ccpa=".concat(n.uspConsent)),e.map(function(e){var n={bidRequestId:e.bidId,hbadaptor:"prebid",url:c,domain:a,placementId:null!=e.params.placementId?e.params.placementId:null,publisherId:e.params.publisherId,sizes:e.sizes,params:e.params};r["x-ut-hb-params"].push(n)}),{method:"POST",url:s,withCredentials:!0,data:JSON.stringify(r)}},interpretResponse:function(e){var r=[],n=e.body;return n&&Array.isArray(n)&&0<n.length&&n.forEach(function(e){if(e.ad&&0<e.cpm){var n={requestId:e.bidRequestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.adId,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl||360,ad:e.ad};r.push(n)}}),r},getUserSyncs:function(e,n,r,t){var a=[],c=o(r),u="",s="";return c&&(u+="?".concat(c),s+="&".concat(c)),t&&(u+=""!=u?"&":"?",u+="ccpa=".concat(t),s+="&ccpa=".concat(t)),e.iframeEnabled?a.push({type:"iframe",url:"https://cdn.undertone.com/js/usersync.html"+u}):e.pixelEnabled&&a.push({type:"image",url:"https://usr.undertone.com/userPixel/syncOne?id=1&of=2"+s},{type:"image",url:"https://usr.undertone.com/userPixel/syncOne?id=2&of=2"+s}),a}};Object(t.registerBidder)(a)}},[611]);