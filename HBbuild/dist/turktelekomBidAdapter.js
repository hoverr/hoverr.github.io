atdpbjsChunk([65],{624:function(e,r,t){e.exports=t(625)},625:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return v});var f=t(0),i=t(1),o=t(10),c=t(2),l="Bid from response has no auid parameter - ",m="Bid from response has no adm parameter - ",p="Array of bid objects is empty",b="Can't find in requested bids the bid with auid - ",u="Seatbid array from response has empty item",g="Response is empty",h="Response has empty seatbid array",y="Seatbid from response has no array of bid objects - ",v={code:"turktelekom",supportedMediaTypes:[c.b,c.d],isBidRequestValid:function(e){return!!e.params.uid},buildRequests:function(e,r){var s,a=[],o={},p={},u={},c="net";(e||[]).forEach(function(e){"gross"===e.params.priceType&&(c="gross"),s=e.bidderRequestId;var r=e.params.uid,t=e.adUnitCode;a.push(r);var i=f.parseSizesInput(e.sizes);p[r]||(p[r]={});var n=p[r];n[t]?n[t].bids.push(e):n[t]={adUnitCode:t,bids:[e],parents:[]};var d=n[t];i.forEach(function(e){u[e]=!0,o[r]||(o[r]={}),o[r][e]?o[r][e].push(d):o[r][e]=[d],d.parents.push({parent:o[r],key:e,uid:r})})});var t={pt:c,auids:a.join(","),sizes:f.getKeys(u).join(","),r:s,wrapperType:"Prebid_js",wrapperVersion:"3.13.0-pre"};return r&&(r.refererInfo&&r.refererInfo.referer&&(t.u=r.refererInfo.referer),r.timeout&&(t.wtimeout=r.timeout),r.gdprConsent&&(r.gdprConsent.consentString&&(t.gdpr_consent=r.gdprConsent.consentString),t.gdpr_applies="boolean"==typeof r.gdprConsent.gdprApplies?Number(r.gdprConsent.gdprApplies):1)),{method:"GET",url:"https://ssp.programattik.com/hb",data:f.parseQueryStringParameters(t).replace(/\&$/,""),bidsMap:o}},interpretResponse:function(e,r,t){var i=2<arguments.length&&void 0!==t?t:o.a;e=e&&e.body;var n,d=[],s=r.bidsMap,a=r.data.pt;return e?e.seatbid&&!e.seatbid.length&&(n=h):n=g,!n&&e.seatbid&&e.seatbid.forEach(function(e){!function(e,d,r,t,i){if(!e)return;var n;e.auid||(n=l+JSON.stringify(e));if(e.adm){var s=d[e.auid];if(s){var a="".concat(e.w,"x").concat(e.h);if(s[a]){var o=s[a][0],p=o.bids.shift(),u={requestId:p.bidId,bidderCode:v.code,cpm:e.price,width:e.w,height:e.h,creativeId:e.auid,currency:"TRY",netRevenue:"gross"!==r,ttl:360,dealId:e.dealid};"video"===e.content_type?(u.vastXml=e.adm,u.mediaType=c.d,u.adResponse={content:u.vastXml},p.renderer||p.mediaTypes&&p.mediaTypes.video&&"outstream"!==p.mediaTypes.video.context||(u.renderer=function(e,r){var t=r.install({id:e.id,url:e.url,loaded:!1});try{t.setRender(R)}catch(e){f.logWarn("Prebid Error calling setRender on renderer",e)}return t}({id:p.bidId,url:"https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"},i))):(u.ad=e.adm,u.mediaType=c.b),t.push(u),o.bids.length||o.parents.forEach(function(e){var r=e.parent,t=e.key,i=e.uid,n=r[t].indexOf(o);-1<n&&r[t].splice(n,1),r[t].length||(delete r[t],f.getKeys(r).length||delete d[i])})}}else n=b+e.auid}else n=m+JSON.stringify(e);n&&f.logError(n)}(function(e){e?e.bid?e.bid[0]||f.logError(p):f.logError(y+JSON.stringify(e)):f.logError(u);return e&&e.bid&&e.bid[0]}(e),s,a,d,i)}),n&&f.logError(n),d},getUserSyncs:function(e){if(e.pixelEnabled)return[{type:"image",url:"https://ssp.programattik.com/sync"}]}};function R(e){e.renderer.push(function(){window.ANOutstreamVideo.renderAd({targetId:e.adUnitCode,adResponse:e.adResponse})})}Object(i.registerBidder)(v)}},[624]);