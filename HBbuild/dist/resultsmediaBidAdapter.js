atdpbjsChunk([108],{518:function(e,r,i){e.exports=i(519)},519:function(e,r,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),i.d(r,"spec",function(){return a});var l=i(0),s=i(1),h=i(2);var a=new function(){this.code="resultsmedia",this.aliases=["resultsmedia"],this.supportedMediaTypes=[h.d,h.b];var a=[2,3,5,6],t=["video/mp4"],d=[1,2,3,4],n=[1],p=[1,2,5],o={},c=this;function v(e){var r=parseInt(e[0]),i=parseInt(e[1]);return r==r&&i==i&&[r,i]}function u(e){var r=e.sizes;e.mediaTypes&&e.mediaTypes.banner&&(r=e.mediaTypes.banner.sizes);var i=l.parseSizesInput(r),s=[];return i.forEach(function(e){if(e){var r=v(e.split("x"));r&&s.push({w:r[0],h:r[1]})}}),!!s.length&&{format:s}}function m(e){var r=[];if(l.deepAccess(e,"mediaTypes.video.playerSize")){var i=e.mediaTypes.video.playerSize;l.isArray(e.mediaTypes.video.playerSize[0])&&(i=e.mediaTypes.video.playerSize[0]);var s=v(i);s&&(r=s)}return{mimes:l.deepAccess(e,"mediaTypes.video.mimes")||t,protocols:l.deepAccess(e,"mediaTypes.video.protocols")||a,w:r[0],h:r[1],startdelay:l.deepAccess(e,"mediaTypes.video.startdelay")||0,skip:l.deepAccess(e,"mediaTypes.video.skip")||0,playbackmethod:l.deepAccess(e,"mediaTypes.video.playbackmethod")||d,delivery:l.deepAccess(e,"mediaTypes.video.delivery")||n,api:l.deepAccess(e,"mediaTypes.video.api")||p}}function f(e,r){var i={id:e[0].bidderRequestId,imp:function(e,r){var i=[],s=0;if(r&&r.refererInfo&&r.refererInfo.stack.length){var a=document.createElement("a");a.href=r.refererInfo.stack[0],s="https:"==a.protocol?1:0}for(var t=0;t<e.length;t++){o[e[t].adUnitCode]=e[t];var d={};if(d.id=e[t].adUnitCode,d.secure=s,l.deepAccess(e[t],"mediaTypes.banner")||"banner"===l.deepAccess(e[t],"mediaType")){var n=u(e[t]);n&&(d.banner=n)}!l.deepAccess(e[t],"mediaTypes.video")&&"video"!==l.deepAccess(e[t],"mediaType")||(d.video=m(e[t])),(d.banner||d.video)&&(d.ext={bidder:{zoneId:e[t].params.zoneId}},i.push(d))}return i}(e,r),site:function(e){var r={domain:"",page:"",ref:""};if(e&&e.refererInfo){var i=e.refererInfo;if(r.ref=i.referer,i.stack.length){r.page=i.stack[i.stack.length-1];var s=document.createElement("a");s.href=i.stack[0],r.domain=s.hostname}}return r}(r),device:{ua:navigator.userAgent,ip:"",dnt:l.getDNT()?1:0},user:{ext:{consent:l.deepAccess(r,"gdprConsent.gdprApplies")?r.gdprConsent.consentString:""}},at:1,tmax:1e3,regs:{ext:{gdpr:!!l.deepAccess(r,"gdprConsent.gdprApplies")&&Boolean(1&r.gdprConsent.gdprApplies)}}};return e[0].schain&&(i.source={ext:{schain:e[0].schain}}),i}this.isBidRequestValid=function(e){return!(!e.params||!e.params.zoneId)},this.getUserSyncs=function(e,r,i){return[]},this.buildRequests=function(e,r){var i=function(e,r){for(var i=0;i<r.length;i++)if(r[i].params&&r[i].params[e])return r[i].params[e]}("zoneId",e);if(void 0===i||e.length<1)return[];var s="https://bid306.rtbsrv.com/bidder/?bid=3mhdom&zoneId="+i,a=/(^v|(\.0)+$)/gi;s+="&hbv="+"3.13.0-pre".replace(a,"")+","+"2.1".replace(a,"");var t=f(e,r);return t.imp.length?{method:"POST",url:s,data:JSON.stringify(t)}:{}},this.interpretResponse=function(e){var r=e.body||[],i=[],s=0;if(r.seatbid){var a=[];for(s=0;s<r.seatbid.length;s++)for(var t=0;t<r.seatbid[s].bid.length;t++)a.push(r.seatbid[s].bid[t]);r=a}for(s=0;s<r.length;s++){var d=r[s],n=o[d.impid],p={requestId:n.id,bidderCode:c.code,cpm:parseFloat(d.price),width:d.w,height:d.h,creativeId:d.crid,currency:"USD",netRevenue:!0,ttl:350};n.mediaTypes&&n.mediaTypes.video?(p.vastUrl=d.adm,p.mediaType="video",p.ttl=600):p.ad=d.adm,i.push(p)}return i}};Object(s.registerBidder)(a)}},[518]);