pbjsChunk([259],{150:function(e,t,r){e.exports=r(151)},151:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return l});var s=r(0),n=r(1),a=r(2),c=r(9),o=["video/mp4","video/webm","application/x-shockwave-flash","application/javascript"],d=[2,3,5,6],u=[1,2];function p(e){var t={id:e.bidId,tagid:e.adUnitCode},r=s.deepAccess(e,"mediaTypes.banner"),n=s.deepAccess(e,"mediaTypes.video");if(r){var a=f(r.sizes);t.banner={format:s.parseSizesInput(a)}}else if(n){var i=f(n.playerSize)[0];t.video={w:i[0],h:i[1],mimes:n.mimes||o,protocols:n.protocols||d,api:n.api||u}}return t}function f(e){return 2!==e.length||s.isArray(e[0])?e:[e]}function m(e,t,r,n,a,i){var o={id:t,tid:r,site:function(e){var t=Object(c.c)(e.referer),r={page:"".concat(t.protocol,"://").concat(t.hostname).concat(t.pathname),secure:~~("https"===t.protocol)};self===top&&document.referrer&&(r.ref=document.referrer);var n=document.getElementsByTagName("meta").keywords;n&&n.content&&(r.keywords=n.content);return r}(i),imp:e};return n&&(void 0!==n.gdprApplies&&s.deepSetValue(o,"user.gdpr",~~n.gdprApplies),void 0!==n.consentString&&s.deepSetValue(o,"user.consent",n.consentString)),a&&s.deepSetValue(o,"user.us_privacy",a),o}function i(e){var t={requestId:e.impid,bidderCode:l.code,cpm:e.bid,width:e.w,height:e.h,creativeId:e.crid,currency:"USD",ttl:720,netRevenue:!0};return e.tag?(t.ad=e.tag,t.mediaType=a.b):e.vast_url&&(t.vastUrl=e.vast_url,t.mediaType=a.d),t}var l={code:"adkernelAdn",supportedMediaTypes:[a.b,a.d],aliases:["engagesimply"],isBidRequestValid:function(e){return"params"in e&&(void 0===e.params.host||"string"==typeof e.params.host)&&"number"==typeof e.params.pubId&&"mediaTypes"in e&&("banner"in e.mediaTypes||"video"in e.mediaTypes)},buildRequests:function(o,e){var n=o.map(p).reduce(function(e,t,r){var n=o[r],a=n.params.pubId,i=n.params.host||"tag.adkernel.com";return e[i]=e[i]||{},e[i][a]=e[i][a]||[],e[i][a].push(t),e},{}),a=e.auctionId,i=e.gdprConsent,s=e.uspConsent,c=e.transactionId,d=e.refererInfo,u=[];return Object.keys(n).forEach(function(r){Object.keys(n[r]).forEach(function(e){var t=m(n[r][e],a,c,i,s,d);u.push({method:"POST",url:"https://".concat(r,"/tag?account=").concat(e,"&pb=1").concat(-1!==d.referer.indexOf("adk_debug=true")?"&debug=1":""),data:JSON.stringify(t)})})}),u},interpretResponse:function(e){var t=e.body;return t.tags?(t.debug&&s.logInfo("ADKERNEL DEBUG:\n".concat(t.debug)),t.tags.map(i)):[]},getUserSyncs:function(e,t){return e.iframeEnabled&&t&&0!==t.length?t.filter(function(e){return e.body&&e.body.syncpages}).map(function(e){return e.body.syncpages}).reduce(function(e,t){return e.concat(t)},[]).map(function(e){return{type:"iframe",url:e}}):[]}};Object(n.registerBidder)(l)}},[150]);