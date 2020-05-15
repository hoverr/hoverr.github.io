pbjsChunk([158],{359:function(e,t,n){e.exports=n(360)},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return i}),t.resetInvibes=function(){m.optIn=void 0,m.noCookies=void 0,m.dom=void 0,m.bidResponse=void 0,m.domainOptions=void 0},t.stubDomainOptions=function(e){m.domainOptions={persistence:e}};var u=n(0),o=n(1);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var v={BIDDER_CODE:"invibes",BID_ENDPOINT:"https://bid.videostep.com/Bid/VideoAdContent",SYNC_ENDPOINT:"https://k.r66net.com/GetUserSync",TIME_TO_LIVE:300,DEFAULT_CURRENCY:"EUR",PREBID_VERSION:2,METHOD:"GET",INVIBES_VENDOR_ID:436},i={code:v.BIDDER_CODE,isBidRequestValid:function(e){if(m&&"object"===l(m.bidResponse))return u.logInfo("Invibes Adapter - Bid response already received. Invibes only responds to one bid request per user visit"),!1;return"object"===l(e.params)&&null!=e.params.placementId},buildRequests:function(e,t){var n,o,i=[],r=(t=t||{}).auctionStart||Date.now();e.forEach(function(e){e.startTime=(new Date).getTime(),i.push(e.params.placementId),n=n||e.params.loginId,o=o||e.params.customEndpoint,f=f||e.params.customUserSync}),m.visitId=m.visitId||I(),b=C(),m.noCookies=m.noCookies||m.getCookie("ivNoCookie"),m.optIn=m.optIn||m.getCookie("ivOptIn")||function(e){if(e&&e.vendorData&&e.vendorData.vendorConsents)return!0==!!e.vendorData.vendorConsents[v.INVIBES_VENDOR_ID.toString(10)]?2:-2;return 0}(t.gdprConsent),E(m.domainOptions);var a=function(){var e={};try{e=JSON.parse(localStorage.ivbs)}catch(e){}var t,n=/[\\?&]([^=]+)=([^\\?&#]+)/g;for(;null!=(t=n.exec(window.location.href));)t.index===n.lastIndex&&n.lastIndex++,e[t[1].toLowerCase()]=t[2];return e}(),s={location:function(e){return e.location.href.substring(0,300).split(/[?#]/)[0]}(p),videoAdHtmlId:I(),showFallback:"0"===a.advs,ivbsCampIdsLocal:m.getCookie("IvbsCampIdsLocal"),bidParamsJson:JSON.stringify({placementIds:i,loginId:n,auctionStartTime:r,bidVersion:v.PREBID_VERSION}),capCounts:function(){function i(){try{return JSON.parse(localStorage.getItem("ivvcap"))||{}}catch(e){return{}}}function e(){var e,t=(new Date).getTime(),n=i(),o=!1;Object.keys(n).forEach(function(e){n[e][1]<=t&&(delete n[e],o=!0)}),o&&(e=n,localStorage.setItem("ivvcap",JSON.stringify(e)))}return function(){e();var t=i();return Object.keys(t).filter(function(e){return t.hasOwnProperty(e)}).sort().map(function(e){return[e,t[e][0]]})}().map(function(e){return e.join("=")}).join(",")}(),vId:m.visitId,width:p.innerWidth,height:p.innerHeight,noc:!b,oi:m.optIn,kw:D};m.dom.id&&(s.lId=m.dom.id);var d="videoaddebug,advs,bvci,bvid,istop,trybvid,trybvci".split(",");for(var c in a)if(a.hasOwnProperty(c)){var u=a[c];(-1<d.indexOf(c)||/^vs|^invib/i.test(c))&&(s[c]=u)}return{method:v.METHOD,url:o||v.BID_ENDPOINT,data:s,options:{withCredentials:!0},bidRequests:e}},interpretResponse:function(e,t){return function(e,t){if(null==t||0===t.length)return u.logInfo("Invibes Adapter - No bids have been requested"),[];if(!e)return u.logInfo("Invibes Adapter - Bid response is empty"),[];var n=(e=(e=e.body||e).videoAdContentResult||e).BidModel;if("object"!==l(n))return u.logInfo("Invibes Adapter - Bidding is not configured"),[];if("object"===l(m.bidResponse))return u.logInfo("Invibes Adapter - Bid response already received. Invibes only responds to one bid request per user visit"),[];var o=(m.bidResponse=e).Ads;if(!Array.isArray(o)||o.length<1)return null!=e.AdReason&&u.logInfo("Invibes Adapter - "+e.AdReason),u.logInfo("Invibes Adapter - No ads available"),[];var i=o[0];if(null==n.PlacementId)return u.logInfo("Invibes Adapter - No Placement Id in response"),[];for(var r=[],a=0;a<t.length;a++){var s=t[a];if(n.PlacementId==s.params.placementId){var d=g(s.sizes);r.push({requestId:s.bidId,cpm:i.BidPrice,width:n.Width||d[0],height:n.Height||d[1],creativeId:i.VideoExposedId,currency:n.Currency||v.DEFAULT_CURRENCY,netRevenue:!0,ttl:v.TIME_TO_LIVE,ad:"<html>\n        <head><script type='text/javascript'>inDapIF=true;<\/script></head>\n          <body style='margin : 0; padding: 0;'>\n          creativeHtml\n          </body>\n        </html>".replace("creativeHtml",n.CreativeHtml)});var c=Date.now();h.info("Bid auction started at "+n.AuctionStartTime+" . Invibes registered the bid at "+c+" ; bid request took a total of "+(c-n.AuctionStartTime)+" ms.")}else u.logInfo("Invibes Adapter - Incorrect Placement Id: "+s.params.placementId)}return r}(e,null!=t?t.bidRequests:null)},getUserSyncs:function(e){if(e.iframeEnabled)return function(){try{window.addEventListener&&window.addEventListener("message",a)}catch(e){}}(),{type:"iframe",url:function(){var e=f||v.SYNC_ENDPOINT;e+="?visitId="+m.visitId,e+="&optIn="+m.optIn;var t=m.getCookie("ivbsdid");t&&(e+="&ivbsdid="+encodeURIComponent(t));var n=m.getCookie("ivvbks");n&&(e+="&ivvbks="+encodeURIComponent(n));return e}()}}};Object(o.registerBidder)(i);var f,p=function(){var e=window;try{for(;top!==e;)e.parent.location.href.length&&(e=e.parent)}catch(e){}return e}(),m=p.invibes=p.invibes||{};function I(){return Math.round(1e12*Math.random()).toString(36).substring(0,10)}function g(e){for(var t=[0,0],n=0;n<e.length;n++)e[n][0]*e[n][1]>t[0]*t[1]&&(t=e[n]);return t}function r(){}function a(e){var t=e.data||{};1===t.ivbscd?m.setCookie(t.name,t.value,t.exdays,t.domain):2===t.ivbscd&&m.dom.graduate()}var b,h=localStorage&&localStorage.InvibesDEBUG?window.console:{info:r,error:r,log:r,warn:r,debug:r};m.Uid={generate:function(){function e(){return Math.floor(Math.random()*t).toString(36)}var t=parseInt("zzzzzz",36);return e()+e()}},m.getCookie=function(e){var t,n,o,i=document.cookie.split(";");for(t=0;t<i.length;t++)if(n=i[t].substr(0,i[t].indexOf("=")),o=i[t].substr(i[t].indexOf("=")+1),(n=n.replace(/^\s+|\s+$/g,""))===e)return unescape(o)},m.setCookie=function(e,t,n,o){var i="ivNoCookie"==e||"IvbsCampIdsLocal"==e;if(!(m.noCookies&&!i&&0<=(n||0))){365<n&&(n=365),o=o||b;var r=new Date,a=24*n*60*60*1e3;r.setTime(r.getTime()+a);var s=t+(n?"; expires="+r.toUTCString():"");s+=";domain="+o+";path=/",document.cookie=e+"="+s}};var s,d,c,y,C=function(){var e=m.Uid.generate(),t=location.hostname.split(".");if(1===t.length)return location.hostname;for(var n=t.length-1;0<=n;n--){var o="."+t.slice(n).join(".");if(m.setCookie(e,e,1,o),m.getCookie(e)===e)return m.setCookie(e,e,-1,o),o}},E=function(e){if(!m.dom){var t,n=(e=e||{}).persistence||{cname:"ivbsdid",load:function(){var e=m.getCookie(this.cname)||"";try{return JSON.parse(e)}catch(e){}},save:function(e){m.setCookie(this.cname,JSON.stringify(e),365)}};(t=n.load()||{id:m.Uid.generate(),cr:(new Date).getTime(),hc:1}).id.match(/\./)&&(t.id=m.Uid.generate());var o=function(){t.cr&&(delete t.cr,delete t.hc,n.save(t),r())},i=function(){t.id=m.Uid.generate(),n.save(t)},r=function(){m.dom={get id(){return!t.cr&&0<m.optIn?t.id:void 0},get tempId(){return 0<m.optIn?t.id:void 0},graduate:o,regen:i}};t.cr&&!e.noVisit&&(t.hc<2&&t.hc++,(2<=t.hc&&function(e){if(!e.cr)return!1;if(e.cr<151e10)return!1;return 864e5<(new Date).getTime()-e.cr}(t)||e.skipGraduation)&&o()),n.save(t),r(),h.info("Did="+m.dom.id)}},D=(s=document.getElementsByTagName("head")[0],d=s?s.getElementsByTagName("meta"):[],(!(y=k("keywords",300))||y.length<292)&&(!(y=k("description",300,y))||y.length<292)&&(c=c=300,y=O((y||"")+","+((document.title||s)&&s.getElementsByTagName("title")[0]?s.getElementsByTagName("title")[0].innerHTML:""),c)),y);function O(e,t){var n=e.replace(/[<>~|\\"`!@#$%^&*()=+?]/g,"");var o=n.split(/[\s,;.:]+/).filter(function(e,t,n){return""!==e&&n.indexOf(e)===t});n="";for(var i=0;i<o.length;i++){if((n+=o[i]).length>=t)return n;i<o.length-1&&(n+=",")}return n}function k(e,t,n){e=e||"keywords",t=t||100;for(var o=n=n||"",i=0;i<d.length;i++){if(d[i].name&&d[i].name.toLowerCase()===e.toLowerCase())return O(n+","+d[i].content||"",t);d[i].name&&-1<d[i].name.toLowerCase().indexOf(e.toLowerCase())&&(o=n+","+d[i].content||"")}return O(o,t)}}},[359]);