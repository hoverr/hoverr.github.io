pbjsChunk([217],{251:function(e,i,s){e.exports=s(252)},252:function(e,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),s.d(i,"spec",function(){return a});var t=s(0),r=s(1),n=s(3),c=[2,3,5,6],p=["video/mp4","video/x-flv"],o=[1,2,3,4];function d(e,i){if(!t.isArray(e)||void 0===e[0])return!1;if("video"===i&&(!t.isArray(e[0])||2!==e[0].length))return!1;var s=!0;return"banner"===i?(t._each(e,function(e){t.isArray(e)&&2===e.length||(s=!1)}),s):"old"!==i||(t.isArray(e[0])||2===e.length?t.isArray(e[0])&&t._each(e,function(e){t.isArray(e)&&2===e.length||(s=!1)}):s=!1,s)}var a={code:"ccx",supportedMediaTypes:["banner","video"],isBidRequestValid:function(e){if(!t.deepAccess(e,"params.placementId"))return t.logWarn("placementId param is reqeuired."),!1;if(t.deepAccess(e,"mediaTypes.banner.sizes")){var i=d(e.mediaTypes.banner.sizes,"banner");return i||t.logWarn("Bid sizes are invalid."),i}if(t.deepAccess(e,"mediaTypes.video.playerSize")){var s=d(e.mediaTypes.video.playerSize,"video");return s||t.logWarn("Bid sizes are invalid."),s}if(t.deepAccess(e,"sizes")){var r=d(e.sizes,"old");return r||t.logWarn("Bid sizes are invalid."),r}return t.logWarn("Bid sizes are required."),!1},buildRequests:function(e,i){if(0<e.length){var s={imp:[]};return s.site=(d={},0<(a=n.b.getConfig("pageUrl")||t.deepAccess(window,"location.href")).length&&(a=a.split("?")[0]),d.page=a,d),s.device=((r={}).w=screen.width,r.y=screen.height,r.ua=navigator.userAgent,r),s.id=i.bids[0].auctionId,s.ext={ce:t.cookiesAreEnabled()?1:0},i&&i.gdprConsent&&(s.user={ext:{consent:i.gdprConsent.consentString}},s.regs={ext:{gdpr:i.gdprConsent.gdprApplies?1:0}}),t._each(e,function(e){s.imp.push(function(e){var i={};i.id=e.bidId,i.secure=1;var s=t.deepAccess(e,"mediaTypes.banner.sizes")||t.deepAccess(e,"mediaTypes.video.playerSize")||t.deepAccess(e,"sizes");return t.deepAccess(e,"mediaTypes.banner")||"banner"===t.deepAccess(e,"mediaType")||!t.deepAccess(e,"mediaTypes.video")&&!t.deepAccess(e,"mediaType")?(i.banner={format:[]},t.isArray(s[0])?t._each(s,function(e){i.banner.format.push({w:e[0],h:e[1]})}):i.banner.format.push({w:s[0],h:s[1]})):!t.deepAccess(e,"mediaTypes.video")&&"video"!==t.deepAccess(e,"mediaType")||(i.video={},void 0!==s&&(t.isArray(s[0])?(i.video.w=s[0][0],i.video.h=s[0][1]):(i.video.w=s[0],i.video.h=s[1])),i.video.protocols=t.deepAccess(e,"params.video.protocols")||c,i.video.mimes=t.deepAccess(e,"params.video.mimes")||p,i.video.playbackmethod=t.deepAccess(e,"params.video.playbackmethod")||o,i.video.skip=t.deepAccess(e,"params.video.skip")||0,1===i.video.skip&&t.deepAccess(e,"params.video.skipafter")&&(i.video.skipafter=t.deepAccess(e,"params.video.skipafter"))),i.ext={pid:e.params.placementId},i}(e))}),{method:"POST",url:"https://delivery.clickonometrics.pl/ortb/prebid/bid",data:JSON.stringify(s)}}var r,d,a},interpretResponse:function(a){var n=[];return t.isEmpty(a.body)||t._each(a.body.seatbid,function(e){t._each(e.bid,function(e){var i,s,r,d;n.push((i=e,s=a.body.cur,r=a.body.ext.ttl,d={requestId:i.impid,cpm:i.price,width:i.w,height:i.h,creativeId:i.crid,netRevenue:!1,ttl:r,currency:s},"video"===i.ext.type?d.vastXml=i.adm:d.ad=i.adm,t.deepAccess(i,"dealid")&&(d.dealId=i.dealid),d))})}),n},getUserSyncs:function(i,e){var s=[];return t.deepAccess(e[0],"body.ext.usersync")&&!t.isEmpty(e[0].body.ext.usersync)&&t._each(e[0].body.ext.usersync,function(e){(i.iframeEnabled&&"iframe"===e.type||i.pixelEnabled&&"image"===e.type)&&s.push({type:e.type,url:e.url})}),s}};Object(r.registerBidder)(a)}},[251]);