pbjsChunk([149],{421:function(e,r,t){e.exports=t(422)},422:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return o});var n=t(0),i=t(1),c=t(2);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o={code:"mediaforce",supportedMediaTypes:[c.b],isBidRequestValid:function(e){return!("object"!==a(e.params)||!e.params.placement_id||!e.params.publisher_id)},buildRequests:function(e,r){if(0!==e.length){var u=r&&r.refererInfo?encodeURIComponent(r.refererInfo.referer):"",s=n.getDNT()?1:0,d=[],p=[];return e.forEach(function(e){var r=e.params.placement_id,t=e.params.bidfloor?parseFloat(e.params.bidfloor):0,i={id:e.bidId,tagid:r,secure:1,bidfloor:t};for(var a in e.mediaTypes)switch(a){case c.b:i.banner=l(e),d.push(i);break;default:return}var n,o={id:e.transactionId,site:{page:u,ref:u,id:e.params.publisher_id,publisher:{id:e.params.publisher_id}},device:{ua:navigator.userAgent,js:1,dnt:s,language:(n=navigator.language?"language":"userLanguage",navigator[n].split("-")[0])},imp:d};p.push({method:"POST",url:"https://rtb.mfadsrvr.com/header_bid",data:JSON.stringify(o)})}),p}},interpretResponse:function(e){if(!e||!e.body)return[];var r=e.body,t=[],i=r.cur;return r.seatbid.forEach(function(e){e.bid.forEach(function(e){var r={requestId:e.impid,cpm:parseFloat(e.price),width:e.w,height:e.h,creativeId:e.adid,currency:i,netRevenue:!0,ttl:e.ttl||300,ad:e.adm,burl:e.burl};t.push(r)})}),t},onBidWon:function(e){var r=n.deepAccess(e,"adserverTargeting.hb_pb")||"";n.isStr(e.burl)&&""!==e.burl&&(e.burl=n.replaceAuctionPrice(e.burl,r),n.triggerPixel(e.burl))}};function l(e){var r=e.mediaTypes.banner.sizes;if(r.length){for(var t=[],i=n.parseGPTSingleSizeArrayToRtbSize(r[0]),a=1;a<r.length;a++)t.push(n.parseGPTSingleSizeArrayToRtbSize(r[a]));return t.length&&(i.format=t),i}}Object(i.registerBidder)(o)}},[421]);