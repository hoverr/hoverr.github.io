atdpbjsChunk([255],{158:function(e,t,r){e.exports=r(159)},159:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return a});var d=r(0),i=r(1);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a={code:"admatic",aliases:["admatic"],isBidRequestValid:function(e){return!!(e.params.pid&&e.params.wid&&e.params.url)},buildRequests:function(e){for(var t={request:[]},r=0;r<e.length;r++){var i=e[r];t.auctionId=i.auctionId,t.bidder=i.bidder,t.bidderRequestId=i.bidderRequestId,t.pid=i.params.pid,t.wid=i.params.wid,t.url=i.params.url;var a={adUnitCode:i.adUnitCode,bidId:i.bidId,transactionId:i.transactionId,priceType:i.params.priceType,sizes:s(i.sizes)};t.request.push(a)}return{method:"POST",url:"https://ads4.admatic.com.tr/prebid/v3/bidrequest",data:JSON.stringify(t),bidder:"admatic",bids:e}},interpretResponse:function(e){var t=e.body,r=[];return t&&t.tags&&0<t.tags.length&&t.tags.forEach(function(e){if(null!=e&&0!==e.cpm){var t={requestId:e.bidId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creativeId,dealId:e.dealId,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl,referrer:e.referrer,ad:e.ad};r.push(t)}}),r},getUserSyncs:function(e,t){var r=[];return e.iframeEnabled&&r.push({type:"iframe",url:"https://ads4.admatic.com.tr/prebid/static/usersync/v3/async_usersync.html"}),e.pixelEnabled&&0<t.length&&r.push({type:"image",url:"https://ads5.admatic.com.tr/prebid/v3/bidrequest/usersync"}),r}};function s(e){var t=[],r={};if(d.isArray(e)&&2===e.length&&!d.isArray(e[0]))r.width=parseInt(e[0],10),r.height=parseInt(e[1],10),t.push(r);else if("object"===n(e))for(var i=0;i<e.length;i++){var a=e[i];(r={}).width=parseInt(a[0],10),r.height=parseInt(a[1],10),t.push(r)}return t}Object(i.registerBidder)(a)}},[158]);