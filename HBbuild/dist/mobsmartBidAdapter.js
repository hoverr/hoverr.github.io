pbjsChunk([136],{416:function(e,t,r){e.exports=r(417)},417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return n});var d=r(1),s=r(3),i="mobsmart",n={code:i,isBidRequestValid:function(e){return e.bidder===i},buildRequests:function(e,t){var d=s.b.getConfig("bidderTimeout"),i=encodeURIComponent(t.refererInfo.referer);return e.map(function(e){var t={code:e.adUnitCode,bids:{bidder:e.bidder,params:e.params},mediaTypes:e.mediaTypes};e.hasOwnProperty("sizes")&&0<e.sizes.length&&(t.sizes=e.sizes);var r={auctionId:e.auctionId,requestId:e.bidId,bidRequestsCount:e.bidRequestsCount,bidderRequestId:e.bidderRequestId,transactionId:e.transactionId,referrer:i,timeout:d,adUnit:t};return e.userId&&e.userId.pubcid&&(r.userId={pubcid:e.userId.pubcid}),{method:"POST",url:"https://prebid.mobsmart.net/prebid/endpoint",data:JSON.stringify(r)}})},interpretResponse:function(e){var t=[];if(e.body){var r=e.body,d={requestId:r.requestId,cpm:r.cpm,width:r.width,height:r.height,creativeId:r.creativeId,currency:r.currency,netRevenue:r.netRevenue,ttl:r.ttl,ad:r.ad};t.push(d)}return t},getUserSyncs:function(e){var t=[];return e.iframeEnabled?t.push({type:"iframe",url:"https://tags.mobsmart.net/tags/iframe"}):e.pixelEnabled&&t.push({type:"image",url:"https://tags.mobsmart.net/tags/image"}),t}};Object(d.registerBidder)(n)}},[416]);