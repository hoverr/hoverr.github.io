atdpbjsChunk([238],{207:function(e,r,t){e.exports=t(208)},208:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return m});var f=t(10),_=t(0),k=t(3),v=t(1),y=t(2),c=t(25),a=t(12),I=t.n(a),n=t(11),x=t.n(n),g=t(34);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function A(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var C="https://ib.adnxs.com/ut/v3/prebid",u=["id","mimes","minduration","maxduration","startdelay","skippable","playback_method","frameworks"],S=["age","externalUid","segments","gender","dnt","language"],w=["geo","device_id"],T=["enabled","dongle","member_id","debug_timeout"],p={body:"description",body2:"desc2",cta:"ctatext",image:{serverName:"main_image",requiredParams:{required:!0}},icon:{serverName:"icon",requiredParams:{required:!0}},sponsoredBy:"sponsored_by",privacyLink:"privacy_link",salePrice:"saleprice",displayUrl:"displayurl"},o="<script",d=/\/\/cdn\.adnxs\.com\/v/,l="trk.js",m={code:"appnexus",aliases:["appnexusAst","brealtime","emxdigital","pagescience","defymedia","gourmetads","matomy","featureforward","oftmedia","districtm","adasta"],supportedMediaTypes:[y.b,y.d,y.c],isBidRequestValid:function(e){return!!(e.params.placementId||e.params.member&&e.params.invCode)},buildRequests:function(e,r){var a=e.map(O),t=I()(e,P),n={};!0===k.b.getConfig("coppa")&&(n={coppa:!0}),t&&Object.keys(t.params.user).filter(function(e){return x()(S,e)}).forEach(function(e){return n[e]=t.params.user[e]});var i,s=I()(e,U);s&&s.params&&s.params.app&&(i={},Object.keys(s.params.app).filter(function(e){return x()(w,e)}).forEach(function(e){return i[e]=s.params.app[e]}));var o,d=I()(e,q);d&&d.params&&s.params.app&&s.params.app.id&&(o={appid:d.params.app.id});var c={},u={},p=_.getCookie("apn_prebid_debug")||null;if(p)try{c=JSON.parse(p)}catch(e){_.logError("AppNexus Debug Auction Cookie Error:\n\n"+e)}else{var l=I()(e,M);l&&l.debug&&(c=l.debug)}c&&c.enabled&&Object.keys(c).filter(function(e){return x()(T,e)}).forEach(function(e){u[e]=c[e]});var m=I()(e,N),f=m?parseInt(m.params.member,10):0,v=e[0].schain,y={tags:A(a),user:n,sdk:{source:"pbjs",version:"3.13.0-pre"},schain:v};if(0<f&&(y.member_id=f),s&&(y.device=i),d&&(y.app=o),k.b.getConfig("adpod.brandCategoryExclusion")&&(y.brand_category_uniqueness=!0),u.enabled&&(y.debug=u,_.logInfo("AppNexus Debug Auction Settings:\n\n"+JSON.stringify(u,null,4))),r&&r.gdprConsent&&(y.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies}),r&&r.uspConsent&&(y.us_privacy=r.uspConsent),r&&r.refererInfo){var g={rd_ref:encodeURIComponent(r.refererInfo.referer),rd_top:r.refererInfo.reachedTop,rd_ifs:r.refererInfo.numIframes,rd_stk:r.refererInfo.stack.map(function(e){return encodeURIComponent(e)}).join(",")};y.referrer_detection=g}I()(e,z)&&e.filter(z).forEach(function(r){var e=function(e,r){var t=r.mediaTypes.video,a=t.durationRangeSec,n=t.requireExactDuration,i=function(e){var r=e.adPodDurationSec,t=e.durationRangeSec,a=e.requireExactDuration,n=_.getMinValueFromArray(t),i=Math.floor(r/n);return a?Math.max(i,t.length):i}(r.mediaTypes.video),s=_.getMaxValueFromArray(a),o=e.filter(function(e){return e.uuid===r.bidId}),d=_.fill.apply(_,A(o).concat([i]));if(n){var c=Math.ceil(i/a.length),u=_.chunk(d,c);a.forEach(function(r,e){u[e].map(function(e){B(e,"minduration",r),B(e,"maxduration",r)})})}else d.map(function(e){return B(e,"maxduration",s)});return d}(a,r),t=y.tags.filter(function(e){return e.uuid!==r.bidId});y.tags=[].concat(A(t),A(e))});var b=_.deepAccess(e[0],"userId.criteoId");if(b){var h=[];h.push({provider:"criteo",user_id:b}),y.tpuids=h}return function(e,t){var a=[];if(15<e.tags.length){var n=_.deepClone(e);_.chunk(e.tags,15).forEach(function(e){n.tags=e;var r=JSON.stringify(n);a.push({method:"POST",url:C,data:r,bidderRequest:t})})}else{var r=JSON.stringify(e);a={method:"POST",url:C,data:r,bidderRequest:t}}return a}(y,r)},interpretResponse:function(e,r){var i=this,s=r.bidderRequest;e=e.body;var o=[];if(!e||e.error){var t="in response for ".concat(s.bidderCode," adapter");return e&&e.error&&(t+=": ".concat(e.error)),_.logError(t),o}if(e.tags&&e.tags.forEach(function(e){var r,t,a=(r=e)&&r.ads&&r.ads.length&&I()(r.ads,function(e){return e.rtb});if(a&&0!==a.cpm&&x()(i.supportedMediaTypes,a.ad_type)){var n=function(r,e,t){var a=_.getBidRequest(r.uuid,[t]),n={requestId:r.uuid,cpm:e.cpm,creativeId:e.creative_id,dealId:e.deal_id,currency:"USD",netRevenue:!0,ttl:300,adUnitCode:a.adUnitCode,appnexus:{buyerMemberId:e.buyer_member_id,dealPriority:e.deal_priority,dealCode:e.deal_code}};e.advertiser_id&&(n.meta=b({},n.meta,{advertiserId:e.advertiser_id}));if(e.rtb.video){switch(b(n,{width:e.rtb.video.player_width,height:e.rtb.video.player_height,vastImpUrl:e.notify_url,ttl:3600}),_.deepAccess(a,"mediaTypes.video.context")){case y.a:var i=Object(v.getIabSubCategory)(a.bidder,e.brand_category_id);n.meta=b({},n.meta,{iabSubCatId:i});var s=e.rtb.dealPriority;n.video={context:y.a,durationSeconds:Math.floor(e.rtb.video.duration_ms/1e3),dealTier:s},n.vastUrl=e.rtb.video.asset_url;break;case g.b:if(n.adResponse=r,n.adResponse.ad=n.adResponse.ads[0],n.adResponse.ad.video=n.adResponse.ad.rtb.video,n.vastXml=e.rtb.video.content,e.renderer_url){var o=I()(t.bids,function(e){return e.bidId===r.uuid}),d=_.deepAccess(o,"renderer.options");n.renderer=function(e,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},a=f.a.install({id:r.renderer_id,url:r.renderer_url,config:t,loaded:!1,adUnitCode:e});try{a.setRender(D)}catch(e){_.logWarn("Prebid Error calling setRender on renderer",e)}return a.setEventHandlers({impression:function(){return _.logMessage("AppNexus outstream video impression event")},loaded:function(){return _.logMessage("AppNexus outstream video loaded event")},ended:function(){_.logMessage("AppNexus outstream renderer video event"),document.querySelector("#".concat(e)).style.display="none"}}),a}(n.adUnitCode,e,d)}break;case g.a:n.vastUrl=e.notify_url+"&redir="+encodeURIComponent(e.rtb.video.asset_url)}}else if(e.rtb[y.c]){var c=e.rtb[y.c],u=e.viewability.config.replace("src=","data-src="),p=c.javascript_trackers;null==p?p=u:_.isStr(p)?p=[p,u]:p.push(u),n[y.c]={title:c.title,body:c.desc,body2:c.desc2,cta:c.ctatext,rating:c.rating,sponsoredBy:c.sponsored,privacyLink:c.privacy_link,address:c.address,downloads:c.downloads,likes:c.likes,phone:c.phone,price:c.price,salePrice:c.saleprice,clickUrl:c.link.url,displayUrl:c.displayurl,clickTrackers:c.link.click_trackers,impressionTrackers:c.impression_trackers,javascriptTrackers:p},c.main_img&&(n.native.image={url:c.main_img.url,height:c.main_img.height,width:c.main_img.width}),c.icon&&(n.native.icon={url:c.icon.url,height:c.icon.height,width:c.icon.width})}else{b(n,{width:e.rtb.banner.width,height:e.rtb.banner.height,ad:e.rtb.banner.content});try{var l=e.rtb.trackers[0].impression_urls[0],m=_.createTrackPixelHtml(l);n.ad+=m}catch(e){_.logError("Error appending tracking pixel",e)}}return n}(e,a,s);n.mediaType=(t=a.ad_type)===y.d?y.d:t===y.c?y.c:y.b,o.push(n)}}),e.debug&&e.debug.debug_info){var a="AppNexus Debug Auction for Prebid\n\n"+e.debug.debug_info;a=a.replace(/(<td>|<th>)/gm,"\t").replace(/(<\/td>|<\/th>)/gm,"\n").replace(/^<br>/gm,"").replace(/(<br>\n|<br>)/gm,"\n").replace(/<h1>(.*)<\/h1>/gm,"\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm,"\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim,""),_.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"),_.logMessage(a)}return o},getMappingFileInfo:function(){return{url:"https://acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",refreshInDays:7}},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"https://acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"}]},transformBidParams:function(t,e){return t=_.convertTypes({member:"string",invCode:"string",placementId:"number",keywords:_.transformBidderParamKeywords},t),e&&(t.use_pmt_rule="boolean"==typeof t.usePaymentRule&&t.usePaymentRule,t.usePaymentRule&&delete t.usePaymentRule,h(t.keywords)&&t.keywords.forEach(E),Object.keys(t).forEach(function(e){var r=_.convertCamelToUnderscore(e);r!==e&&(t[r]=t[e],delete t[e])})),t},onBidWon:function(e){e.native&&function(e){var r=function(e){var r;if(_.isStr(e)&&R(e))r=e;else if(_.isArray(e))for(var t=0;t<e.length;t++){var a=e[t];R(a)&&(r=a)}return r}(e.native.javascriptTrackers);if(r)for(var t="pbjs_adid="+e.adId+";pbjs_auc="+e.adUnitCode,a=function(e){var r=e.indexOf('src="')+5,t=e.indexOf('"',r);return e.substring(r,t)}(r),n=a.replace("dom_id=%native_dom_id%",t),i=document.getElementsByTagName("iframe"),s=!1,o=0;o<i.length&&!s;o++){var d=i[o];try{var c=d.contentDocument||d.contentWindow.document;if(c)for(var u=c.getElementsByTagName("script"),p=0;p<u.length&&!s;p++){var l=u[p];l.getAttribute("data-src")==a&&(l.setAttribute("src",n),l.setAttribute("data-src",""),l.removeAttribute&&l.removeAttribute("data-src"),s=!0)}}catch(e){if(!(e instanceof DOMException&&"SecurityError"===e.name))throw e}}}(e)}};function h(e){return _.isArray(e)&&0<e.length}function E(e){h(e.value)&&""===e.value[0]&&delete e.value}function R(e){var r=e.match(d),t=null!=r&&1<=r.length,a=e.match(l),n=null!=a&&1<=a.length;return e.startsWith(o)&&n&&t}function O(r){var n,i,t={};if(t.sizes=j(r.sizes),t.primary_size=t.sizes[0],t.ad_types=[],t.uuid=r.bidId,r.params.placementId?t.id=parseInt(r.params.placementId,10):t.code=r.params.invCode,t.allow_smaller_sizes=r.params.allowSmallerSizes||!1,t.use_pmt_rule=r.params.usePaymentRule||!1,t.prebid=!0,t.disable_psa=!0,r.params.reserve&&(t.reserve=r.params.reserve),r.params.position&&(t.position={above:1,below:2}[r.params.position]||0),r.params.trafficSourceCode&&(t.traffic_source_code=r.params.trafficSourceCode),r.params.privateSizes&&(t.private_sizes=j(r.params.privateSizes)),r.params.supplyType&&(t.supply_type=r.params.supplyType),r.params.pubClick&&(t.pubclick=r.params.pubClick),r.params.extInvCode&&(t.ext_inv_code=r.params.extInvCode),r.params.externalImpId&&(t.external_imp_id=r.params.externalImpId),!_.isEmpty(r.params.keywords)){var e=_.transformBidderParamKeywords(r.params.keywords);0<e.length&&e.forEach(E),t.keywords=e}if((r.mediaType===y.c||_.deepAccess(r,"mediaTypes.".concat(y.c)))&&(t.ad_types.push(y.c),0===t.sizes.length&&(t.sizes=j([1,1])),r.nativeParams)){var a=(n=r.nativeParams,i={},Object.keys(n).forEach(function(e){var r=p[e]&&p[e].serverName||p[e]||e,t=p[e]&&p[e].requiredParams;if(i[r]=b({},t,n[e]),(r===p.image.serverName||r===p.icon.serverName)&&i[r].sizes){var a=i[r].sizes;(_.isArrayOfNums(a)||_.isArray(a)&&0<a.length&&a.every(function(e){return _.isArrayOfNums(e)}))&&(i[r].sizes=j(i[r].sizes))}r===p.privacyLink&&(i.privacy_supported=!0)}),i);t[y.c]={layouts:[a]}}var s=_.deepAccess(r,"mediaTypes.".concat(y.d)),o=_.deepAccess(r,"mediaTypes.video.context");r.mediaType!==y.d&&!s||t.ad_types.push(y.d),(r.mediaType===y.d||s&&"outstream"!==o)&&(t.require_asset_url=!0),r.params.video&&(t.video={},Object.keys(r.params.video).filter(function(e){return x()(u,e)}).forEach(function(e){return t.video[e]=r.params.video[e]})),r.renderer&&(t.video=b({},t.video,{custom_renderer_present:!0}));var d=I()(c.a.getAdUnits(),function(e){return r.transactionId===e.transactionId});return d&&d.mediaTypes&&d.mediaTypes.banner&&t.ad_types.push(y.b),0===t.ad_types.length&&delete t.ad_types,t}function j(e){var r=[],t={};if(_.isArray(e)&&2===e.length&&!_.isArray(e[0]))t.width=parseInt(e[0],10),t.height=parseInt(e[1],10),r.push(t);else if("object"===i(e))for(var a=0;a<e.length;a++){var n=e[a];(t={}).width=parseInt(n[0],10),t.height=parseInt(n[1],10),r.push(t)}return r}function P(e){return!!e.params.user}function N(e){return!!parseInt(e.params.member,10)}function U(e){if(e.params)return!!e.params.app}function q(e){return e.params&&e.params.app?!!e.params.app.id:!!e.params.app}function M(e){return!!e.debug}function z(e){return e.mediaTypes&&e.mediaTypes.video&&e.mediaTypes.video.context===y.a}function B(e,r,t){_.isEmpty(e.video)&&(e.video={}),e.video[r]=t}function D(e){e.renderer.push(function(){window.ANOutstreamVideo.renderAd({tagId:e.adResponse.tag_id,sizes:[e.getSize().split("x")],targetId:e.adUnitCode,uuid:e.adResponse.uuid,adResponse:e.adResponse,rendererOptions:e.renderer.getConfig()},function(e,r,t){e.renderer.handleVideoEvent({id:r,eventName:t})}.bind(null,e))})}Object(v.registerBidder)(m)}},[207]);