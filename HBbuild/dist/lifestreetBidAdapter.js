pbjsChunk([159],{392:function(e,t,n){e.exports=n(393)},393:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return s});var d=n(0),r=n(1),a=n(2);function i(){var e=function(e,t){t=t||e.slice(0);return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["https://ads.lfstmedia.com/gate/","/","?adkey=","&ad_size=","&__location=","&__referrer=","&__wn=","&__sf=","&__fif=","&__if=","&__stamp=","&__pp=1&__hb=1&_prebid_json=1&__gz=1&deferred_format=vast_2_0,vast_3_0&__hbver=",""]);return i=function(){return e},e}var o=function(a){for(var e=arguments.length,n=new Array(1<e?e-1:0),t=1;t<e;t++)n[t-1]=arguments[t];return function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var i=r[r.length-1]||{},s=[a[0]];return n.forEach(function(e,t){var n=d.isInteger(e)?r[e]:i[e];s.push(n,a[t+1])}),s.join("")}}(i(),"adapter","slot","adkey","ad_size","location","referrer","wn","sf","fif","if","stamp","hbver");function c(e){return e?"1":"0"}var s={code:"lifestreet",aliases:["lsm"],supportedMediaTypes:[a.b,a.d],isBidRequestValid:function(e){var t=(0<arguments.length&&void 0!==e?e:{}).params,n=void 0===t?{}:t;return!!(n.slot&&n.adkey&&n.ad_size)},buildRequests:function(e,t){return e.map(function(e){return function(e,t){var n=1<arguments.length&&void 0!==t?t:{},r=e.params,i=(n.refererInfo||{}).referer,s=o({adapter:"prebid",slot:r.slot,adkey:r.adkey,ad_size:r.ad_size,location:i,referrer:i,wn:c(/fb_http/i.test(window.name)),sf:c(window.sfAPI||window.$sf),fif:c(!0===window.inDapIF),if:c(window!==window.top),stamp:(new Date).getTime(),hbver:"3.13.0-pre"});if(n.gdprConsent){if(void 0!==n.gdprConsent.gdprApplies)s+="&__gdpr="+(n.gdprConsent.gdprApplies?"1":"0");void 0!==n.gdprConsent.consentString&&(s+="&__consent=".concat(n.gdprConsent.consentString))}return n.uspConsent&&(s+="&__us_privacy=".concat(n.uspConsent)),{method:"GET",url:s,bidId:e.bidId}}(e,t)})},interpretResponse:function(e,t){var n,r=[],i=e.body;if(/^\s*\{\s*"advertisementAvailable"\s*:\s*false/i.test((n=i).content)||-1!==n.content.indexOf('<VAST version="2.0"></VAST>')||void 0===n.cpm||1!==n.status)return r;var s={requestId:t.bidId,cpm:i.cpm,width:i.width,height:i.height,creativeId:i.creativeId,currency:i.currency?i.currency:"USD",netRevenue:!i.netRevenue||i.netRevenue,ttl:i.ttl?i.ttl:86400};return i.hasOwnProperty("dealId")&&(s.dealId=i.dealId),-1<i.content_type.indexOf("vast")?(void 0!==i.vastUrl?s.vastUrl=i.vastUrl:s.vastXml=i.content,s.mediaType=a.d):(s.ad=i.content,s.mediaType=a.b),r.push(s),r}};Object(r.registerBidder)(s)}},[392]);