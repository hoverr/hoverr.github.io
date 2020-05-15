pbjsChunk([157],{403:function(r,a,e){r.exports=e(404)},404:function(r,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),e.d(a,"spec",function(){return p});var m=e(0),t=e(1),u=e(2),h="lkqd";function n(r){return!!(r&&void 0!==r&&0<parseInt(r))}var p={code:h,supportedMediaTypes:[u.d],isBidRequestValid:function(r){return!(r.bidder!==h||void 0===r.params||!n(r.params.siteId)||!n(r.params.placementId))},buildRequests:function(r,s){for(var o=[],a=0;a<r.length;a++){var d=r[a],i=[],e=d.sizes,t=m.deepAccess(d,"mediaTypes.video.playerSize");e&&e.length||t&&t.length||(m.logWarn("Warning: Could not find valid width/height parameters on the provided adUnit"),i=[[640,480]]),e&&0<e.length?2===(i=e).length&&"number"==typeof e[0]&&"number"==typeof e[1]&&(i=[e]):t&&0<t.length&&2===(i=t).length&&"number"==typeof t[0]&&"number"==typeof t[1]&&(i=[t]);for(var n=function(r){var a=i[r],e=void 0,t=void 0;a&&2==a.length?(e=a[0],t=a[1]):m.logWarn("Warning: Could not determine width/height from the provided adUnit");var n="https://v.lkqd.net/ad".concat(),p={};p.pid=d.params.placementId,p.sid=d.params.siteId,p.prebid=!0,d.params.hasOwnProperty("output")&&null!=d.params.output?p.output=d.params.output:p.output="vast",d.params.hasOwnProperty("execution")&&null!=d.params.execution?p.execution=d.params.execution:p.execution="any",d.params.hasOwnProperty("support")&&null!=d.params.support?p.support=d.params.support:p.support="html5",d.params.hasOwnProperty("playinit")&&null!=d.params.playinit?p.playinit=d.params.playinit:p.playinit="auto",d.params.hasOwnProperty("volume")&&null!=d.params.volume?p.volume=d.params.volume:p.volume="100",e&&(p.width=e),t&&(p.height=t),d.params.hasOwnProperty("vpaidmode")&&null!=d.params.vpaidmode&&(p.vpaidmode=d.params.vpaidmode),d.params.hasOwnProperty("appname")&&null!=d.params.appname&&(p.appname=d.params.appname),d.params.hasOwnProperty("bundleid")&&null!=d.params.bundleid&&(p.bundleid=d.params.bundleid),d.params.hasOwnProperty("aid")&&null!=d.params.aid&&(p.aid=d.params.aid),d.params.hasOwnProperty("idfa")&&null!=d.params.idfa&&(p.idfa=d.params.idfa),d.params.hasOwnProperty("gdpr")&&null!=d.params.gdpr&&(p.gdpr=d.params.gdpr),d.params.hasOwnProperty("gdprcs")&&null!=d.params.gdprcs&&(p.gdprcs=d.params.gdprcs),d.params.hasOwnProperty("flrd")&&null!=d.params.flrd&&(p.flrd=d.params.flrd),d.params.hasOwnProperty("flrmp")&&null!=d.params.flrmp&&(p.flrmp=d.params.flrmp),d.params.hasOwnProperty("schain")&&null!=d.params.schain&&(p.schain=d.params.schain),d.params.hasOwnProperty("placement")&&null!=d.params.placement&&(p.placement=d.params.placement),d.params.hasOwnProperty("timeout")&&null!=d.params.timeout&&(p.timeout=d.params.timeout),d.params.hasOwnProperty("dnt")&&null!=d.params.dnt&&(p.dnt=d.params.dnt),d.params.hasOwnProperty("pageurl")&&null!=d.params.pageurl?p.pageurl=d.params.pageurl:s&&s.refererInfo&&(p.pageurl=encodeURIComponent(encodeURIComponent(s.refererInfo.referer))),d.params.hasOwnProperty("contentId")&&null!=d.params.contentId&&(p.contentid=d.params.contentId),d.params.hasOwnProperty("contentTitle")&&null!=d.params.contentTitle&&(p.contenttitle=d.params.contentTitle),d.params.hasOwnProperty("contentLength")&&null!=d.params.contentLength&&(p.contentlength=d.params.contentLength),d.params.hasOwnProperty("contentUrl")&&null!=d.params.contentUrl&&(p.contenturl=d.params.contentUrl),d.params.hasOwnProperty("schain")&&d.params.schain&&(p.schain=d.params.schain),p.rnd=Math.floor(999999999*Math.random()),p.bidId=d.bidId,p.bidWidth=e,p.bidHeight=t,o.push({method:"GET",url:n,data:Object.keys(p).map(function(r){return r+"="+p[r]}).join("&")+"&"})},p=0;p<i.length;p++)n(p)}return o},interpretResponse:function(r,a){var e=[];if(r&&r.body){if(r.error)return m.logError("Error: "+r.error),e;try{var t,n,p,s,o={};if(a&&a.data&&"string"==typeof a.data)if(window.URLSearchParams?(n=(t=new URLSearchParams(a.data)).get("bidId"),p=t.get("bidWidth"),s=t.get("bidHeight")):(0<=a.data.indexOf("bidId=")&&(n=(n=a.data.substr(a.data.indexOf("bidId=")+6,a.data.length)).split("&")[0]),0<=a.data.indexOf("bidWidth=")&&(p=(p=a.data.substr(a.data.indexOf("bidWidth=")+9,a.data.length)).split("&")[0]),0<=a.data.indexOf("bidHeight=")&&(s=(s=a.data.substr(a.data.indexOf("bidHeight=")+10,a.data.length)).split("&")[0])),n){var d=r.body,i=(new window.DOMParser).parseFromString(d,"text/xml");if(i&&0==i.getElementsByTagName("parsererror").length){var l=a.url.concat();o.requestId=n,o.bidderCode=h,o.ad="",o.cpm=parseFloat(i.getElementsByTagName("Pricing")[0].textContent),o.width=p,o.height=s,o.ttl=300,o.creativeId=i.getElementsByTagName("Ad")[0].getAttribute("id"),o.currency=i.getElementsByTagName("Pricing")[0].getAttribute("currency"),o.netRevenue=!0,o.vastUrl=l,o.vastXml=d,o.mediaType=u.d,e.push(o)}else m.logError("Error: Server response contained invalid XML")}else m.logError("Error: Could not associate bid request to server response");else m.logError("Error: Could not associate bid request to server response")}catch(r){m.logError("Error: Could not interpret server response")}}else m.logError("Error: No server response or server response was empty for the requested URL");return e}};Object(t.registerBidder)(p)}},[403]);