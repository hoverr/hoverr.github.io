pbjsChunk([43],{639:function(e,t,n){e.exports=n(640)},640:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return f});var S=n(3),o=n(1),O=n(0),r=n(11),E=n.n(r),i=n(12),I=n.n(i);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=window.localStorage,a=Object(O.cookiesAreEnabled)(),d="wsPerfData",s="wsLcuid",p="wsCustomData",u=0,f={code:"widespace",supportedMediaTypes:["banner"],isBidRequestValid:function(e){return!(!e.params||!e.params.sid)},buildRequests:function(e,l){var h=[],g=window.wisp&&window.wisp.ENGINE_URL?window.wisp.ENGINE_URL:"https://engine.widespace.com/map/engine/dynadreq",b=["gender","country","region","postal","city","yob"],y=j(d).map(function(e){return JSON.parse(e)}),m=j(p,!1)[0],w=function(){var e=j(s,!1)[0];if(!e){x(("4"+(new Date).getTime()+String(Math.floor(1e9*Math.random()))).substring(0,18),s,!1),e=j(s,!1)[0]}return e}(),v=!1;try{window.top.location.toString(),v=!1}catch(e){v=!0}return e.forEach(function(t,n){var e,o,r,i={screenWidthPx:screen&&screen.width,screenHeightPx:screen&&screen.height,adSpaceHttpRefUrl:k(),referer:(v?window:window.top).location.href.split("#")[0],inFrame:1,sid:t.params.sid,lcuid:w,vol:v?"":function(e){if(e&&e.getBoundingClientRect){var t=e.getBoundingClientRect().top;return t<screen.height&&t>=window.top.pageYOffset?1:0}return""}(document.getElementById(t.adUnitCode)),gdprCmp:l&&l.gdprConsent?1:0,hb:"1","hb.cd":m?(o=m,r="object"===C(JSON.parse(JSON.stringify(o))),encodeURIComponent(r?JSON.stringify(o):o)):"","hb.floor":t.bidfloor||"","hb.spb":0===n?(e=S.b.getConfig("userSync"))&&e.pixelEnabled&&e.syncEnabled?e.syncsPerBidder:-1:-1,"hb.ver":"2.0.1","hb.name":"prebidjs-3.9.0","hb.bidId":t.bidId,"hb.sizes":Object(O.parseSizesInput)(t.sizes).join(","),"hb.currency":t.params.cur||t.params.currency||""};t.params.demo&&b.forEach(function(e){t.params.demo[e]&&(i[e]=t.params.demo[e])}),y[n]&&Object.keys(y[n]).forEach(function(e){i[e]=y[n][e]});var c=navigator.connection||navigator.webkitConnection;if(c&&c.type&&c.downlinkMax&&(i["netinfo.type"]=c.type,i["netinfo.downlinkMax"]=c.downlinkMax),!v){var a=(I()(window.top.location.hash.split("&"),function(e){return E()(e,"WS_DEBUG_FORCEADID")})||"").split("=")[1];i.forceAdId=a}if(i.gdprCmp){var d=l.gdprConsent,s=d.gdprApplies,p=d.consentString,u=d.vendorData,f=u&&u.hasGlobalScope;i.gdprApplies=s?1:void 0===s?"":0,i.gdprConsentData=p,i.gdprHasGlobalScope=f?1:void 0===f?"":0}Object.keys(i).forEach(function(e){""!==i[e]&&void 0!==i[e]||delete i[e]}),h.push({method:"POST",options:{contentType:"application/x-www-form-urlencoded"},url:g,data:Object(O.parseQueryStringParameters)(i)})}),u=Date.now(),h},interpretResponse:function(e){var t=Date.now()-u,n=e.body||[],o=[];return n.forEach(function(e){x({perf_status:"OK",perf_reqid:e.reqId,perf_ms:t},"".concat(d).concat(e.reqId)),"ad"===e.status&&o.push({requestId:e.bidId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.adId,currency:e.currency,netRevenue:Boolean(e.netRev),ttl:e.ttl,referrer:k(),ad:e.code})}),o},getUserSyncs:function(e,t){return(1<arguments.length&&void 0!==t?t:[]).reduce(function(t,e){return e&&e.body&&e.body[0]&&(e.body[0].syncPixels||[]).forEach(function(e){t.push({type:"image",url:e})}),t},[])}};function x(e,t,n){var o=!(2<arguments.length&&void 0!==n)||n?JSON.stringify(e):e;if(c)return localStorage.setItem(t,o),1;if(a){var r=new Date,i=new Date(r.setMonth(r.getMonth()+12)).toGMTString();return window.document.cookie="".concat(t,"=").concat(o,";path=/;expires=").concat(i),1}}function j(n,e){var o=!(1<arguments.length&&void 0!==e)||e,r=[];return c&&Object.keys(localStorage).filter(function(e){-1<e.indexOf(n)&&(r.push(localStorage.getItem(e)),o&&localStorage.removeItem(e))}),a&&document.cookie.split(";").forEach(function(e){var t=e.split("=");-1<t[0].indexOf(n)&&(r.push(t[1]),o&&(document.cookie="".concat(t[0],"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;")))}),r}function k(){try{return window.top.document.referrer}catch(e){return""}}Object(o.registerBidder)(f)}},[639]);