pbjsChunk([271],{80:function(e,r,t){e.exports=t(81)},81:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return h});var c=t(0),a=t(1),i=t(2),n=t(12),m=t.n(n),s=t(11),f=t.n(s);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var y="https://hb.1ad4good.org/prebid",u=["id","mimes","minduration","maxduration","startdelay","skippable","playback_method","frameworks"],v=["age","externalUid","segments","gender","dnt","language"],b=["geo","device_id"],h={code:"1ad4good",aliases:["adsforgood","ads4good","1adsforgood"],supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){return!!e.params.placementId},buildRequests:function(e,r){var t,a=e.map(I),n=m()(e,w);n&&(t={},Object.keys(n.params.user).filter(function(e){return f()(v,e)}).forEach(function(e){return t[e]=n.params.user[e]}));var s,o=m()(e,S);o&&o.params&&o.params.app&&(s={},Object.keys(o.params.app).filter(function(e){return f()(b,e)}).forEach(function(e){return s[e]=o.params.app[e]}));var i,p=m()(e,T);p&&p.params&&o.params.app&&o.params.app.id&&(i={appid:p.params.app.id});var d={tags:l(a),user:t,sdk:{source:"pbjs",version:"3.13.0-pre"}};if(o&&(d.device=s),p&&(d.app=i),r&&r.gdprConsent&&(d.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies}),r&&r.refererInfo){var u={rd_ref:encodeURIComponent(r.refererInfo.referer),rd_top:r.refererInfo.reachedTop,rd_ifs:r.refererInfo.numIframes,rd_stk:r.refererInfo.stack.map(function(e){return encodeURIComponent(e)}).join(",")};d.referrer_detection=u}return function(e,t){var a=[];if(15<e.tags.length){var n=c.deepClone(e);c.chunk(e.tags,15).forEach(function(e){n.tags=e;var r=JSON.stringify(n);a.push({method:"POST",url:y,data:r,bidderRequest:t})})}else{var r=JSON.stringify(e);a={method:"POST",url:y,data:r,bidderRequest:t}}return a}(d,r)},interpretResponse:function(e,r){var n=this,s=r.bidderRequest;e=e.body;var o=[];if(e&&!e.error)return e.tags&&e.tags.forEach(function(e){var r,t=(r=e)&&r.ads&&r.ads.length&&m()(r.ads,function(e){return e.rtb});if(t&&0!==t.cpm&&f()(n.supportedMediaTypes,t.ad_type)){var a=function(e,r,t){var a=c.getBidRequest(e.uuid,[t]),n={requestId:e.uuid,cpm:r.cpm,creativeId:r.creative_id,dealId:r.deal_id,currency:"USD",netRevenue:!0,ttl:300,adUnitCode:a.adUnitCode,ads4good:{buyerMemberId:r.buyer_member_id,dealPriority:r.deal_priority,dealCode:r.deal_code}};r.advertiser_id&&(n.meta=p({},n.meta,{advertiserId:r.advertiser_id}));if(r.rtb.video)p(n,{width:r.rtb.video.player_width,height:r.rtb.video.player_height,vastUrl:r.rtb.video.asset_url,vastImpUrl:r.notify_url,ttl:3600});else{p(n,{width:r.rtb.banner.width,height:r.rtb.banner.height,ad:r.rtb.banner.content});try{var s=r.rtb.trackers[0].impression_urls[0],o=c.createTrackPixelHtml(s);n.ad+=o}catch(e){c.logError("Error appending tracking pixel",e)}}return n}(e,t,s);a.mediaType=t.ad_type===i.d?i.d:i.b,o.push(a)}}),o;var t="in response for ".concat(s.bidderCode," adapter");return e&&e.error&&(t+=": ".concat(e.error)),c.logError(t),o},transformBidParams:function(t,e){return t=c.convertTypes({placementId:"number",keywords:c.transformBidderParamKeywords},t),e&&(t.use_pmt_rule="boolean"==typeof t.usePaymentRule&&t.usePaymentRule,t.usePaymentRule&&delete t.usePaymentRule,g(t.keywords)&&t.keywords.forEach(_),Object.keys(t).forEach(function(e){var r=c.convertCamelToUnderscore(e);r!==e&&(t[r]=t[e],delete t[e])})),t},onBidWon:function(){}};function g(e){return c.isArray(e)&&0<e.length}function _(e){g(e.value)&&""===e.value[0]&&delete e.value}function I(r){var t={};if(t.sizes=k(r.sizes),t.primary_size=t.sizes[0],t.ad_types=[],t.uuid=r.bidId,r.params.placementId&&(t.id=parseInt(r.params.placementId,10)),r.params.cpm&&(t.cpm=r.params.cpm),t.allow_smaller_sizes=r.params.allowSmallerSizes||!1,t.use_pmt_rule=r.params.usePaymentRule||!1,t.prebid=!0,t.disable_psa=!0,r.params.reserve&&(t.reserve=r.params.reserve),r.params.position&&(t.position={above:1,below:2}[r.params.position]||0),r.params.trafficSourceCode&&(t.traffic_source_code=r.params.trafficSourceCode),r.params.privateSizes&&(t.private_sizes=k(r.params.privateSizes)),r.params.supplyType&&(t.supply_type=r.params.supplyType),r.params.pubClick&&(t.pubclick=r.params.pubClick),r.params.extInvCode&&(t.ext_inv_code=r.params.extInvCode),r.params.externalImpId&&(t.external_imp_id=r.params.externalImpId),!c.isEmpty(r.params.keywords)){var e=c.transformBidderParamKeywords(r.params.keywords);0<e.length&&e.forEach(_),t.keywords=e}var a=c.deepAccess(r,"mediaTypes.".concat(i.d)),n=c.deepAccess(r,"mediaTypes.video.context");return r.mediaType!==i.d&&!a||t.ad_types.push(i.d),(r.mediaType===i.d||a&&"outstream"!==n)&&(t.require_asset_url=!0),r.params.video&&(t.video={},Object.keys(r.params.video).filter(function(e){return f()(u,e)}).forEach(function(e){return t.video[e]=r.params.video[e]})),r.renderer&&(t.video=p({},t.video,{custom_renderer_present:!0})),(c.isEmpty(r.mediaType)&&c.isEmpty(r.mediaTypes)||r.mediaType===i.b||r.mediaTypes&&r.mediaTypes[i.b])&&t.ad_types.push(i.b),t}function k(e){var r=[],t={};if(c.isArray(e)&&2===e.length&&!c.isArray(e[0]))t.width=parseInt(e[0],10),t.height=parseInt(e[1],10),r.push(t);else if("object"===o(e))for(var a=0;a<e.length;a++){var n=e[a];(t={}).width=parseInt(n[0],10),t.height=parseInt(n[1],10),r.push(t)}return r}function w(e){return!!e.params.user}function S(e){if(e.params)return!!e.params.app}function T(e){return e.params&&e.params.app?!!e.params.app.id:!!e.params.app}Object(a.registerBidder)(h)}},[80]);