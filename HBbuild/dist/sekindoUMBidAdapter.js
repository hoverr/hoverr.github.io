atdpbjsChunk([94],{554:function(e,t,r){e.exports=r(555)},555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return n});var y=r(0),d=r(1);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n={code:"sekindoUM",supportedMediaTypes:["banner","video"],isBidRequestValid:function(e){return("video"!=e.mediaType&&("object"!=a(e.mediaTypes)||"object"!=a(e.mediaTypes.video))||"object"==a(e.params.video)&&void 0!==e.params.video.playerWidth&&void 0!==e.params.video.playerHeight)&&!!e.params.spaceId},buildRequests:function(e,o){var p=null;try{if(window.top==window)p=window.location.href;else try{p=window.top.location.href}catch(e){p=document.referrer}}catch(e){}return e.map(function(e){var t=y.getBidIdParameter("subId",e.params),r=y.getBidIdParameter("spaceId",e.params),d=y.getBidIdParameter("bidfloor",e.params),n="https:"===document.location.protocol?"s":"",i="";i=y.tryAppendQueryString(i,"s",r),i=y.tryAppendQueryString(i,"subId",t),i=y.tryAppendQueryString(i,"pubUrl",p),i=y.tryAppendQueryString(i,"hbTId",e.transactionId),i=y.tryAppendQueryString(i,"hbBidId",e.bidId),i=y.tryAppendQueryString(i,"hbver","4"),i=y.tryAppendQueryString(i,"hbcb","1"),i=y.tryAppendQueryString(i,"dcpmflr",d),i=y.tryAppendQueryString(i,"protocol",n),i=y.tryAppendQueryString(i,"x",e.params.width),i=y.tryAppendQueryString(i,"y",e.params.height),o&&o.gdprConsent&&(i=y.tryAppendQueryString(i,"gdprConsent",o.gdprConsent.consentString),i=y.tryAppendQueryString(i,"gdpr",o.gdprConsent.gdprApplies?"1":"0")),("video"===e.mediaType||"object"==a(e.mediaTypes)&&"object"==a(e.mediaTypes.video))&&(i=y.tryAppendQueryString(i,"x",e.params.playerWidth),i=y.tryAppendQueryString(i,"y",e.params.playerHeight),"undefined"!=typeof vid_vastType&&(i=y.tryAppendQueryString(i,"vid_vastType",e.params.vid_vastType)),"object"==a(e.mediaTypes)&&"object"==a(e.mediaTypes.video)&&"string"==typeof e.mediaTypes.video.context&&(i=y.tryAppendQueryString(i,"vid_context",e.mediaTypes.video.context)));return{method:"GET",url:"https://hb.sekindo.com/live/liveView.php",data:i}})},interpretResponse:function(e,t){if("object"!==a(e))return[];var r=[],d={requestId:e.body.id,bidderCode:n.code,cpm:e.body.cpm,width:e.body.width,height:e.body.height,creativeId:e.body.creativeId,currency:e.body.currency,netRevenue:e.body.netRevenue,ttl:e.body.ttl};return"video"==t.mediaType?void 0!==e.body.vastUrl?d.vastUrl=e.body.vastUrl:d.vastXml=e.body.vastXml:d.ad=e.body.ad,r.push(d),r}};Object(d.registerBidder)(n)}},[554]);