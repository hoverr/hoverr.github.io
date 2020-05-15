pbjsChunk([66],{622:function(e,r,t){e.exports=t(623)},623:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return v});var m=t(0),s=t(1),o=t(10),c=t(2),f="Bid from response has no auid parameter - ",l="Bid from response has no adm parameter - ",p="Array of bid objects is empty",g="Can't find in requested bids the bid with auid - ",u="Seatbid array from response has empty item",y="Response is empty",b="Response has empty seatbid array",h="Seatbid from response has no array of bid objects - ",v={code:"trustx",supportedMediaTypes:[c.b,c.d],isBidRequestValid:function(e){return!!e.params.uid},buildRequests:function(e,r){var a,o,p=[],u={},c={},f={},l="net";(e||[]).forEach(function(e){"gross"===e.params.priceType&&(l="gross"),o=e.bidderRequestId;var r=e.params.uid,t=e.adUnitCode;p.push(r);var s=m.parseSizesInput(e.sizes);if(!a&&!m.isEmpty(e.params.keywords)){var n=m.transformBidderParamKeywords(e.params.keywords);0<n.length&&n.forEach(E),a=n}c[r]||(c[r]={});var i=c[r];i[t]?i[t].bids.push(e):i[t]={adUnitCode:t,bids:[e],parents:[]};var d=i[t];s.forEach(function(e){f[e]=!0,u[r]||(u[r]={}),u[r][e]?u[r][e].push(d):u[r][e]=[d],d.parents.push({parent:u[r],key:e,uid:r})})});var t={pt:l,auids:p.join(","),sizes:m.getKeys(f).join(","),r:o,wrapperType:"Prebid_js",wrapperVersion:"3.13.0-pre"};return a&&(t.keywords=JSON.stringify(a)),r&&(r.refererInfo&&r.refererInfo.referer&&(t.u=r.refererInfo.referer),r.timeout&&(t.wtimeout=r.timeout),r.gdprConsent&&(r.gdprConsent.consentString&&(t.gdpr_consent=r.gdprConsent.consentString),t.gdpr_applies="boolean"==typeof r.gdprConsent.gdprApplies?Number(r.gdprConsent.gdprApplies):1),r.uspConsent&&(t.us_privacy=r.uspConsent)),{method:"GET",url:"https://sofia.trustx.org/hb",data:m.parseQueryStringParameters(t).replace(/\&$/,""),bidsMap:u}},interpretResponse:function(e,r,t){var s=2<arguments.length&&void 0!==t?t:o.a;e=e&&e.body;var n,i=[],d=r.bidsMap,a=r.data.pt;return e?e.seatbid&&!e.seatbid.length&&(n=b):n=y,!n&&e.seatbid&&e.seatbid.forEach(function(e){!function(e,i,r,t,s){if(!e)return;var n;e.auid||(n=f+JSON.stringify(e));if(e.adm){var d=i[e.auid];if(d){var a="".concat(e.w,"x").concat(e.h);if(d[a]){var o=d[a][0],p=o.bids.shift(),u={requestId:p.bidId,bidderCode:v.code,cpm:e.price,width:e.w,height:e.h,creativeId:e.auid,currency:"USD",netRevenue:"gross"!==r,ttl:360,dealId:e.dealid};"video"===e.content_type?(u.vastXml=e.adm,u.mediaType=c.d,u.adResponse={content:u.vastXml},p.renderer||p.mediaTypes&&p.mediaTypes.video&&"outstream"!==p.mediaTypes.video.context||(u.renderer=function(e,r){var t=r.install({id:e.id,url:e.url,loaded:!1});try{t.setRender(w)}catch(e){m.logWarn("Prebid Error calling setRender on renderer",e)}return t}({id:p.bidId,url:"https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"},s))):(u.ad=e.adm,u.mediaType=c.b),t.push(u),o.bids.length||o.parents.forEach(function(e){var r=e.parent,t=e.key,s=e.uid,n=r[t].indexOf(o);-1<n&&r[t].splice(n,1),r[t].length||(delete r[t],m.getKeys(r).length||delete i[s])})}}else n=g+e.auid}else n=l+JSON.stringify(e);n&&m.logError(n)}(function(e){e?e.bid?e.bid[0]||m.logError(p):m.logError(h+JSON.stringify(e)):m.logError(u);return e&&e.bid&&e.bid[0]}(e),d,a,i,s)}),n&&m.logError(n),i},getUserSyncs:function(e){if(e.pixelEnabled)return[{type:"image",url:"https://sofia.trustx.org/push_sync"}]}};function E(e){var r;r=e.value,m.isArray(r)&&0<r.length&&""===e.value[0]&&delete e.value}function w(e){e.renderer.push(function(){window.ANOutstreamVideo.renderAd({targetId:e.adUnitCode,adResponse:e.adResponse})})}Object(s.registerBidder)(v)}},[622]);