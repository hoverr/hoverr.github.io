pbjsChunk([128],{465:function(r,e,t){r.exports=t(466)},466:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"spec",function(){return s});var n=t(32),o=t(4),a=t(1),i=t(0);function d(r){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var s={code:"orbidder",bidParams:{},orbidderHost:function(){var r="https://orbidder.otto.de";try{r=i.getDataFromLocalStorage("ov_orbidder_host")||r}catch(r){}return r}(),isBidRequestValid:function(r){return!(!(r.sizes&&r.bidId&&r.params&&r.params.accountId&&"string"==typeof r.params.accountId&&r.params.placementId&&"string"==typeof r.params.placementId)||void 0!==r.params.bidfloor&&"number"!=typeof r.params.bidfloor||void 0!==r.params.profile&&"object"!==d(r.params.profile))},buildRequests:function(r,n){return r.map(function(r){var e="";n&&n.refererInfo&&(e=n.refererInfo.referer||"");var t={url:"".concat(s.orbidderHost,"/bid"),method:"POST",options:{withCredentials:!0},data:{v:pbjs.version,pageUrl:e,bidId:r.bidId,auctionId:r.auctionId,transactionId:r.transactionId,adUnitCode:r.adUnitCode,bidRequestCount:r.bidRequestCount,sizes:r.sizes,params:r.params}};return s.bidParams[r.bidId]=r.params,n&&n.gdprConsent&&(t.data.gdprConsent={consentString:n.gdprConsent.consentString,consentRequired:"boolean"==typeof n.gdprConsent.gdprApplies&&n.gdprConsent.gdprApplies}),t})},interpretResponse:function(r){var a=[];return(r=r.body)&&0<r.length&&r.forEach(function(r){for(var e={},t=0,n=["requestId","cpm","width","height","ad","ttl","creativeId","netRevenue","currency"];t<n.length;t++){var o=n[t];if(!r.hasOwnProperty(o))return[];e[o]=r[o]}a.push(e)}),a},onBidWon:function(r){var e=Object(n.a)(window);r.v=pbjs.version,r.pageUrl=e().referer,s.bidParams[r.requestId]&&void 0===r.params&&(r.params=[s.bidParams[r.requestId]]),s.ajaxCall("".concat(s.orbidderHost,"/win"),JSON.stringify(r))},ajaxCall:function(r,e){Object(o.a)(r,null,e,{withCredentials:!0})}};Object(a.registerBidder)(s)}},[465]);