pbjsChunk([241],{197:function(e,r,t){e.exports=t(198)},198:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return n});var o=t(2),a=t(1),p=t(10),m="aniview";function l(r){r.renderer.push(function(){var e=r&&r.renderer&&r.renderer.handleVideoEvent?r.renderer.handleVideoEvent:null;window.aniviewRenderer.renderAd({id:r.adUnitCode+"_"+r.adId,debug:0<=window.location.href.indexOf("pbjsDebug"),placement:r.adUnitCode,width:r.width,height:r.height,vastUrl:r.vastUrl,vastXml:r.vastXml,config:r.params[0].rendererConfig,eventsCallback:e,bid:r})})}var n={code:m,supportedMediaTypes:[o.d],isBidRequestValid:function(e){return!!(e.params&&e.params.AV_PUBLISHERID&&e.params.AV_CHANNELID)},buildRequests:function(e,r){for(var t=[],a=0;a<e.length;a++){var n=e[a],i=[[640,480]];n.mediaTypes&&n.mediaTypes.video&&n.mediaTypes.video.playerSize?i=n.mediaTypes.video.playerSize:n.sizes&&(i=n.sizes),2===i.length&&"number"==typeof i[0]&&(i=[[i[0],i[1]]]);for(var d=0;d<i.length;d++){var s=i[d],o=void 0,p=void 0;p=s&&2==s.length?(o=s[0],s[1]):(o=640,480);var m={};for(var l in n.params)n.params.hasOwnProperty(l)&&0==l.indexOf("AV_")&&(m[l]=n.params[l]);m.AV_APPPKGNAME&&!m.AV_URL&&(m.AV_URL=m.AV_APPPKGNAME),m.AV_IDFA||m.AV_URL||(r&&r.refererInfo&&r.refererInfo.referer?m.AV_URL=r.refererInfo.referer:m.AV_URL=window.location.href),m.AV_IDFA&&!m.AV_AID&&(m.AV_AID=m.AV_IDFA),m.AV_AID&&!m.AV_IDFA&&(m.AV_IDFA=m.AV_AID),m.cb=Math.floor(999999999*Math.random()),m.AV_WIDTH=o,m.AV_HEIGHT=p,m.bidWidth=o,m.bidHeight=p,m.bidId=n.bidId,m.pbjs=1,m.tgt=10,m.s2s="1",r&&r.gdprConsent&&r.gdprConsent.gdprApplies&&(m.AV_GDPR=1,m.AV_CONSENT=r.gdprConsent.consentString),r&&r.uspConsent&&(m.AV_CCPA=r.uspConsent);var A="https://"+(n.params&&n.params.serverDomain?n.params.serverDomain:"gov.aniview.com")+"/api/adserver/vast3/";t.push({method:"GET",url:A,data:m,bidRequest:n})}}return t},interpretResponse:function(e,r){var t=[];if(e&&e.body){if(e.error)return t;try{var a={};if(r&&r.data&&r.data.bidId&&""!==r.data.bidId){var n=e.body,i=(new window.DOMParser).parseFromString(n,"text/xml");if(i&&0==i.getElementsByTagName("parsererror").length){var d=function(e){var r={cpm:0,currency:"USD"};if(e){var t=e.getElementsByTagName("Extensions");if(t&&0<t.length&&(t=t[0].getElementsByTagName("Extension"))&&0<t.length)for(var a=0;a<t.length;a++)if("ANIVIEW"==t[a].getAttribute("type")){var n=t[a].getElementsByTagName("Cpm");n&&1==n.length&&(r.cpm=n[0].textContent);break}}return r}(i);if(d&&0<d.cpm){a.requestId=r.data.bidId,a.bidderCode=m,a.ad="",a.cpm=d.cpm,a.width=r.data.AV_WIDTH,a.height=r.data.AV_HEIGHT,a.ttl=600,a.creativeId=i.getElementsByTagName("Ad")&&i.getElementsByTagName("Ad")[0]&&i.getElementsByTagName("Ad")[0].getAttribute("id")?i.getElementsByTagName("Ad")[0].getAttribute("id"):"creativeId",a.currency=d.currency,a.netRevenue=!0;var s=new Blob([n],{type:"application/xml"});a.vastUrl=window.URL.createObjectURL(s),a.vastXml=n,a.mediaType=o.d,r.bidRequest&&r.bidRequest.mediaTypes&&r.bidRequest.mediaTypes.video&&"outstream"===r.bidRequest.mediaTypes.video.context&&(a.renderer=function(){var e=p.a.install({url:"https://player.aniview.com/script/6.1/prebidRenderer.js",config:{},loaded:!1});try{e.setRender(l)}catch(e){}return e}()),t.push(a)}}}}catch(e){}}return t}};Object(a.registerBidder)(n)}},[197]);