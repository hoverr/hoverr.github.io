pbjsChunk([232],{221:function(e,t,r){e.exports=r(222)},222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return s});var n=r(1),a=r(0),i=r(2),o=r(4),s={code:"automatad",aliases:["atd"],supportedMediaTypes:[i.b],isBidRequestValid:function(e){return e&&e.hasOwnProperty("params")&&e.params.hasOwnProperty("siteId")&&e.params.hasOwnProperty("placementId")&&e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty("banner")},buildRequests:function(e,t){if(e&&t){var r=e[0].params.siteId,n=e[0].params.placementId,a=e.map(function(e){return{id:e.bidId,banner:{format:e.sizes.map(function(e){return{w:e[0],h:e[1]}})}}}),i={id:e[0].auctionId,imp:a,site:{id:r,placement:n,domain:window.location.hostname,page:window.location.href,ref:t.refererInfo&&t.refererInfo.referer||null}};return{method:"POST",url:"https://rtb2.automatad.com/ortb2/resp",data:JSON.stringify(i),options:{contentType:"application/json",withCredentials:!1,crossOrigin:!0}}}},interpretResponse:function(e){var t=[],r=(e||{}).body;return r&&r.seatbid&&1===r.seatbid.length&&r.seatbid[0].bid&&r.seatbid[0].bid.length?r.seatbid[0].bid.forEach(function(e){t.push({requestId:e.impid,cpm:e.price,ad:e.adm,adDomain:e.adomain[0],currency:"USD",ttl:30,creativeId:e.crid,width:e.w,height:e.h,netRevenue:!0,nurl:e.nurl})}):a.logInfo("automatad :: no valid responses to interpret"),t},getUserSyncs:function(){return[{type:"iframe",url:"https://rtb2.automatad.com/ortb2/async_usersync"}]},onBidWon:function(e){if(e.nurl){var t=e.nurl.replace(/\$\{AUCTION_PRICE\}/,e.cpm).replace(/\$\{AUCTION_IMP_ID\}/,e.requestId).replace(/\$\{AUCTION_CURRENCY\}/,e.currency).replace(/\$\{AUCTION_ID\}/,e.auctionId);return s.ajaxCall(t,null),!0}},ajaxCall:function(e,t){Object(o.a)(e,t)}};Object(n.registerBidder)(s)}},[221]);