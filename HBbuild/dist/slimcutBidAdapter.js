pbjsChunk([90],{566:function(e,r,t){e.exports=t(567)},567:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return d});var n=t(0),a=t(1),i=t(4),d={code:"slimcut",aliases:["scm"],supportedMediaTypes:["video","banner"],isBidRequestValid:function(e){var r=!1;return void 0!==e.params&&!isNaN(parseInt(n.getValue(e.params,"placementId")))&&0<parseInt(n.getValue(e.params,"placementId"))&&(r=!0),r},buildRequests:function(e,r){var t=e.map(s),n={referrer:function(e){var r=window.location.href;e&&e.refererInfo&&e.refererInfo.referer&&(r=e.refererInfo.referer);return r}(r),data:t,deviceWidth:screen.width},a=r.gdprConsent;if(r&&a){var i="boolean"==typeof a.gdprApplies,d="string"==typeof a.consentString;n.gdpr_iab={consent:d?a.consentString:"",status:i?a.gdprApplies:-1}}return{method:"POST",url:"https://sb.freeskreen.com/pbr",data:JSON.stringify(n)}},interpretResponse:function(e){var t=[];return(e=e.body).responses&&e.responses.forEach(function(e){var r={cpm:e.cpm,width:e.width,height:e.height,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl,ad:e.ad,requestId:e.requestId,creativeId:e.creativeId,transactionId:e.tranactionId,winUrl:e.winUrl};t.push(r)}),t},getUserSyncs:function(e){return e.iframeEnabled?[{type:"iframe",url:"https://sb.freeskreen.com/async_usersync.html"}]:[]},onBidWon:function(e){Object(i.a)(e.winUrl+e.cpm,null)}};function s(e){var r={},t=n.getValue(e.params,"placementId");return r.sizes=n.parseSizesInput(e.sizes),r.bidId=n.getBidIdParameter("bidId",e),r.bidderRequestId=n.getBidIdParameter("bidderRequestId",e),r.placementId=parseInt(t),r.adUnitCode=n.getBidIdParameter("adUnitCode",e),r.auctionId=n.getBidIdParameter("auctionId",e),r.transactionId=n.getBidIdParameter("transactionId",e),r}Object(a.registerBidder)(d)}},[566]);