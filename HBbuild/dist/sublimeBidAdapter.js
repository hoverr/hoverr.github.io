atdpbjsChunk([78],{598:function(e,t,r){e.exports=r(599)},599:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return a});var n=r(1),d=r(3);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a={code:"sublime",aliases:[],isBidRequestValid:function(e){return!!e.params.zoneId},buildRequests:function(e,t){var r={sublimeVersion:"0.4.0",prebidVersion:"3.13.0-pre",currencyCode:d.b.getConfig("currency.adServerCurrency")||"EUR",timeout:d.b.getConfig("bidderTimeout")};return t&&t.refererInfo&&(r.referer=t.refererInfo.referer,r.numIframes=t.refererInfo.numIframes),t&&t.gdprConsent&&(r.gdprConsent=t.gdprConsent.consentString,r.gdpr=t.gdprConsent.gdprApplies),e.map(function(e){var t={adUnitCode:e.adUnitCode,auctionId:e.auctionId,bidder:e.bidder,bidderRequestId:e.bidderRequestId,bidRequestsCount:e.bidRequestsCount,requestId:e.bidId,sizes:e.sizes.map(function(e){return{w:e[0],h:e[1]}}),transactionId:e.transactionId,zoneId:e.params.zoneId};return{method:"POST",url:(e.params.protocol||"https")+"://"+(e.params.bidHost||"pbjs.sskzlabs.com")+"/bid",data:i({},r,t),options:{contentType:"application/json",withCredentials:!0}}})},interpretResponse:function(e,t){var r=[],n=e.body;if(n){if(n.timeout||!n.ad||n.ad.match(/<!-- No ad -->/gim))return r;var d={width:1800,height:1e3};t&&t.data&&1===t.data.w&&1===t.data.h&&(d={width:1,height:1});var i={requestId:n.requestId||"",cpm:n.cpm||0,width:n.width||d.width,height:n.height||d.height,creativeId:n.creativeId||1,dealId:n.dealId||1,currency:n.currency||"EUR",netRevenue:n.netRevenue||!0,ttl:n.ttl||600,ad:n.ad};r.push(i)}return r}};Object(n.registerBidder)(a)}},[598]);