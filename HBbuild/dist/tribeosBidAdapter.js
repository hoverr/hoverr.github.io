pbjsChunk([64],{595:function(e,r,t){e.exports=t(596)},596:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return s});var o=t(0),i=t(1),p=t(23),n=t(2),u=t(5),g="tribeos",c="TRIBEOS: ",s={code:g,supportedMediaTypes:[n.b],isBidRequestValid:function(e){return!o.isEmpty(e.params.placementId)||(o.logError(c,"placementId is required, please contact tribeOS for placementId. Bid details: ",JSON.stringify(e)),!1)},buildRequests:function(e){for(var r=[],t=0;t<e.length;t++)r.push(this.buidRTBRequest(e[t]));return r},buidRTBRequest:function(e){var r=e.params.placementId,t=e.params.bidfloor,i=e.params.placementCode,n=e.mediaTypes.banner.sizes[0][0],s=e.mediaTypes.banner.sizes[0][1],a={id:o.getUniqueIdentifierStr(),imp:[{id:e.bidId,banner:{w:n,h:s},tagid:i,bidfloor:t}],site:{domain:window.location.host,page:window.location.href,publisher:{id:r}},device:{language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage,w:n,h:s,js:1,ua:navigator.userAgent}};e.gdprConsent&&(a.regs={ext:{gdpr:e.gdprConsent.gdprApplies?1:0}},a.user={ext:{consent:e.gdprConsent.consentString}}),a.bidId=e.bidId;var d="https://bidder-api-us-east.tribeos.io/prebid/"+r+"/requests";return o.isEmpty(e.params.endpointUrl)||(d=e.params.endpointUrl+r+"/requests"),{method:"POST",url:d,data:JSON.stringify(a),options:{withCredentials:!0,contentType:"application/json"}}},interpretResponse:function(e,s){var a=e.body;if(o.logInfo(c,"response body: ",JSON.stringify(e)),!a||!a.id)return[];var d=[];return a.seatbid[0].bid.forEach(function(e){var r,t="";if(s){var i=p.a(1);if(t=s.placementCode,s.status=u.STATUS.GOOD,0===(r=parseFloat(e.price))){var n=p.a(2);return n.bidderCode=g,d.push(n),o.logInfo(c,"response price is zero. Response data: ",JSON.stringify(s)),d}i.placementCode=t,i.size=s.sizes,i.creativeId=e.crid,i.bidderCode=g,i.cpm=r,i.ad=e.adm,i.width=parseInt(e.w),i.height=parseInt(e.h),i.currency=a.cur,i.netRevenue=!0,i.requestId=e.impid,i.ttl=180,o.logInfo(c,"bid response data: ",JSON.stringify(i)),o.logInfo(c,"bid request data: ",JSON.stringify(s)),d.push(i)}}),d}};Object(i.registerBidder)(s)}},[595]);