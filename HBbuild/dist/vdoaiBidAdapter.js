atdpbjsChunk([56],{647:function(e,t,r){e.exports=r(648)},648:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return d});var o=r(0),p=r(3),i=r(1),n=r(2),d={code:"vdo.ai",supportedMediaTypes:[n.b],isBidRequestValid:function(e){return!!e.params.placementId},buildRequests:function(e,d){return 0===e.length?[]:e.map(function(e){var t=o.parseSizesInput(e.params.size||e.sizes)[0],r=t.split("x")[0],i=t.split("x")[1],n={placementId:e.params.placementId,width:r,height:i,bidId:e.bidId,referer:d.refererInfo.referer,id:e.auctionId};return e.params.bidFloor&&(n.bidFloor=e.params.bidFloor),{method:"POST",url:"https://prebid.vdo.ai/auction",data:n}})},interpretResponse:function(e,t){var r=[],i=e.body,n=i.adid||0,d=t.data.width,o=t.data.height,a=i.price||0;i.rWidth=d,i.rHeight=o;var u=i.vdoCreative;if(0!==d&&0!==o&&0!==a&&0!==n){var s=i.cur||"USD",c={requestId:i.bidId,cpm:a,width:d,height:o,creativeId:n,currency:s,netRevenue:!0,ttl:p.b.getConfig("_bidderTimeout"),ad:u};r.push(c)}return r},getUserSyncs:function(e,t){var r=t[0]&&t[0].body&&t[0].body.cookiesync&&t[0].body.cookiesync.bidder_status;return e.iframeEnabled&&r&&0<r.length?r.map(function(e){return{url:e.usersync.url,type:"iframe"}}):[]},onTImeout:function(){},onBidWon:function(){},onSetTargeting:function(){}};Object(i.registerBidder)(d)}},[647]);