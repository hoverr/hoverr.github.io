pbjsChunk([89],{533:function(e,i,r){e.exports=r(534)},534:function(e,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.getTimeoutUrl=m,r.d(i,"spec",function(){return l});var t,a=r(0),n=r(1),d=r(2);function s(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}var o="https://s.seedtag.com/se/hb/timeout",p=(s(t={},d.b,"display"),s(t,d.d,"video"),t);function c(e){return!(!e.publisherId||!e.adUnitId||!e.placement||"inImage"!==e.placement&&"inScreen"!==e.placement&&"banner"!==e.placement&&"video"!==e.placement)}function u(e){var i,r="display"===(i=e.mediaType)?d.b:"video"===i?d.d:i,t={requestId:e.bidId,cpm:e.price,width:e.width,height:e.height,creativeId:e.creativeId,currency:e.currency,netRevenue:!0,mediaType:r,ttl:e.ttl};return r===d.d?t.vastXml=e.content:t.ad=e.content,t}function m(e){var i="";if(a.isArray(e)&&e[0]&&a.isArray(e[0].params)&&e[0].params[0]){var r=e[0].params[0];i="?publisherToken="+r.publisherId+"&adUnitId="+r.adUnitId}return o+i}var l={code:"seedtag",aliases:["st"],supportedMediaTypes:[d.b,d.d],isBidRequestValid:function(e){return((n=e).mediaTypes&&Object.keys(n.mediaTypes)[0])===d.d?c(e.params)&&(i=e.mediaTypes,r=!!i.video&&"instream"===i.video.context,t=!!a.deepAccess(i,"video.playerSize")&&a.isArray(a.deepAccess(i,"video.playerSize")),r&&t):c(e.params);var i,r,t,n},buildRequests:function(e,i){var r,t={url:i.refererInfo.referer,publisherToken:e[0].params.publisherId,cmp:!!i.gdprConsent,timeout:i.timeout,version:"3.9.0",bidRequests:(r=e,a._map(r,function(e){var i=e.params,r=a._map(Object.keys(e.mediaTypes),function(e){return p[e]}),t={id:e.bidId,transactionId:e.transactionId,sizes:e.sizes,supplyTypes:r,adUnitId:i.adUnitId,placement:i.placement};return i.adPosition&&(t.adPosition=i.adPosition),i.video&&(t.videoParams=i.video||{},t.videoParams.w=e.mediaTypes.video.playerSize[0][0],t.videoParams.h=e.mediaTypes.video.playerSize[0][1]),t}))};if(t.cmp){var n=i.gdprConsent.gdprApplies;void 0!==n&&(t.ga=n),t.cd=i.gdprConsent.consentString}return{method:"POST",url:"https://s.seedtag.com/c/hb/bid",data:JSON.stringify(t)}},interpretResponse:function(e){var i=e.body;return i&&i.bids&&a.isArray(i.bids)?a._map(i.bids,function(e){return u(e)}):[]},getUserSyncs:function(e,i){var r=i[0];if(e.iframeEnabled&&r){var t=r.body.cookieSync;return t?[{type:"iframe",url:t}]:[]}return[]},onTimeout:function(e){m(e),a.triggerPixel(o)}};Object(n.registerBidder)(l)}},[533]);