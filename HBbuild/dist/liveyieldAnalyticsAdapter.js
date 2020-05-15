pbjsChunk([23],{388:function(e,n,t){e.exports=t(389)},389:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(6),o=t(7),r=t(5),a=t.n(r),s=t(0);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function u(e){return isNaN(e)?0:Math.round(1e3*e)}var d=a.a.EVENTS,l=d.BID_REQUESTED,g=d.BID_TIMEOUT,p=d.BID_RESPONSE,f=d.BID_WON,b="3.9.0",m={rtaFunctionName:"rta",getAdUnitName:function(e){return e},getPlacementOrAdUnitCode:function(e,n){return"0"===n[0]?e.placementCode:e.adUnitCode},googlePublisherTag:!1,wireGooglePublisherTag:function(e,n){e.pubads().addEventListener("slotRenderEnded",function(e){n(e.slot)})},prebidWinnersCache:{},prebidBidResponsesCache:{},isPrebidAdImpression:function(e){var n=e.getTargeting("hb_adid");if(0<n.length){var t=n[0];return void 0!==this.prebidWinnersCache[t]}return!1},getHighestPrebidAdImpressionPartner:function(e,n,t){var i=y(e,n,t);return i?i.bidderCode||i.bidder:null},getHighestPrebidAdImpressionValue:function(e,n,t){var i=y(e,n,t);return i?i.cpm:null},getAdUnitNameByGooglePublisherTagSlot:function(){throw"Required when googlePublisherTag is defined."},postProcessResolution:function(e){return e}},y=function(e,n){var t=n.getTargeting("hb_adid");if(0<t.length){var i=t[0];return e.prebidWinnersCache[i]||e.prebidBidResponsesCache[i]}return null},v=c(Object(i.a)({analyticsType:"bundle"}),{track:function(e){var n=e.eventType,t=e.args;switch(n){case l:t.bids.forEach(function(e){try{window[v.instanceConfig.rtaFunctionName]("bidRequested",v.instanceConfig.getAdUnitName(v.instanceConfig.getPlacementOrAdUnitCode(e,b)),t.bidderCode)}catch(e){s.logError(e)}});break;case p:var i="Bid available"===(v.instanceConfig.prebidBidResponsesCache[t.adId]=t).statusMessage?t.cpm:null;try{window[v.instanceConfig.rtaFunctionName]("addBid",v.instanceConfig.getAdUnitName(v.instanceConfig.getPlacementOrAdUnitCode(t,b)),t.bidder||"unknown",u(i),void 0===t.bidder,"Bid available"!==t.statusMessage)}catch(e){s.logError(e)}break;case g:window[v.instanceConfig.rtaFunctionName]("biddersTimeout",t);break;case f:if(v.instanceConfig.prebidWinnersCache[t.adId]=t,v.instanceConfig.googlePublisherTag)break;try{if(!v.instanceConfig.getAdUnitName(v.instanceConfig.getPlacementOrAdUnitCode(t,b))){s.logError("Cannot find ad by unit name: "+v.instanceConfig.getAdUnitName(v.instanceConfig.getPlacementOrAdUnitCode(t,b)));break}if(!t.bidderCode||!t.cpm){s.logError("Bidder code or cpm is not valid");break}var o={targetings:[],prebidWon:!0};o.prebidPartner=t.bidderCode,o.prebidValue=u(parseFloat(t.cpm));var r=v.instanceConfig.postProcessResolution(o,null,o.prebidPartner,o.prebidValue,b);window[v.instanceConfig.rtaFunctionName]("resolveSlot",v.instanceConfig.getAdUnitName(v.instanceConfig.getPlacementOrAdUnitCode(t,b)),r)}catch(e){s.logError(e)}}}});v.originEnableAnalytics=v.enableAnalytics,v.enableAnalytics=function(e){if(e&&e.provider&&"liveyield"===e.provider)if(e.options)if(e.options.customerId)if(e.options.customerName)if(e.options.customerSite)if(e.options.sessionTimezoneOffset)if(v.instanceConfig=c({prebidWinnersCache:{},prebidBidResponsesCache:{}},m,e.options),"function"==typeof window[v.instanceConfig.rtaFunctionName]){v.instanceConfig.googlePublisherTag&&v.instanceConfig.wireGooglePublisherTag(v.instanceConfig.googlePublisherTag,h(v.instanceConfig));var n={customerTimezone:e.options.customerTimezone,contentId:e.options.contentId,contentPart:e.options.contentPart,contentAuthor:e.options.contentAuthor,contentTitle:e.options.contentTitle,contentCategory:e.options.contentCategory,contentLayout:e.options.contentLayout,contentVariants:e.options.contentVariants,contentTimezone:e.options.contentTimezone,cstringDim1:e.options.cstringDim1,cstringDim2:e.options.cstringDim2,cintDim1:e.options.cintDim1,cintDim2:e.options.cintDim2,cintArrayDim1:e.options.cintArrayDim1,cintArrayDim2:e.options.cintArrayDim2,cuniqueStringMet1:e.options.cuniqueStringMet1,cuniqueStringMet2:e.options.cuniqueStringMet2,cavgIntMet1:e.options.cavgIntMet1,cavgIntMet2:e.options.cavgIntMet2,csumIntMet1:e.options.csumIntMet1,csumIntMet2:e.options.csumIntMet2};Object.keys(n).forEach(function(e){return null==n[e]&&delete n[e]}),window[v.instanceConfig.rtaFunctionName]("create",e.options.customerId,e.options.customerName,e.options.customerSite,e.options.sessionTimezoneOffset,n),v.originEnableAnalytics(e)}else s.logError("Function ".concat(v.instanceConfig.rtaFunctionName," is not defined.")+"Make sure that LiveYield snippet in included before the Prebid Analytics configuration.");else s.logError("options.sessionTimezoneOffset is required");else s.logError("options.customerSite is required");else s.logError("options.customerName is required");else s.logError("options.customerId is required");else s.logError("options must be defined");else s.logError("expected config.provider to equal liveyield")};var h=function(r){return function(e){var n,t,i={targetings:[]};n=i,(t=e.getResponseInformation())&&(n.dfpAdvertiserId=t.advertiserId,n.dfpLineItemId=t.sourceAgnosticLineItemId,n.dfpCreativeId=t.creativeId),function(e,n){r.isPrebidAdImpression(n)&&(e.prebidWon=!0);var t=r.getHighestPrebidAdImpressionPartner(r,n,b),i=r.getHighestPrebidAdImpressionValue(r,n,b);t&&(e.prebidPartner=t),i&&(e.prebidValue=u(parseFloat(i)))}(i,e);var o=r.postProcessResolution(i,e,i.highestPrebidAdImpPartner,i.highestPrebidAdImpValue,b);window[r.rtaFunctionName]("resolveSlot",r.getAdUnitNameByGooglePublisherTagSlot(e,b),o)}};o.default.registerAnalyticsAdapter({adapter:v,code:"liveyield"}),n.default=v},6:function(e,n,t){"use strict";n.a=function(e){var o,r=e.url,n=e.analyticsType,a=e.global,i=e.handler,s=[],c=0,t=!0;n!==O&&!_||function(){if(t){for(var e=0;e<s.length;e++)s[e]();s.push=function(e){e()},t=!1}b.logMessage("event count sent to ".concat(a,": ").concat(c))}();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===_&&window[a](i,n,t);this.getAdapterType()===O&&function(e){var n=e.eventType,t=e.args,i=e.callback;Object(l.a)(r,i,JSON.stringify({eventType:n,args:t}))}.apply(void 0,arguments)},enqueue:u,enableAnalytics:d,disableAnalytics:function(){b._each(o,function(e,n){f.off(n,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:d},getAdapterType:function(){return n},getGlobal:function(){return a},getHandler:function(){return i},getUrl:function(){return r}};function u(e){var n=e.eventType,t=e.args,i=this;a&&window[a]&&n&&t?this.track({eventType:n,args:t}):s.push(function(){c++,i.track({eventType:n,args:t})})}function d(n){var e,t=this,i=this;"object"!==p(n)||"object"!==p(n.options)||(void 0===n.options.sampling||Math.random()<parseFloat(n.options.sampling))?(f.getEvents().forEach(function(e){if(e){var n=e.eventType,t=e.args;n!==T&&u.call(i,{eventType:n,args:t})}}),g(e={},v,function(e){return t.enqueue({eventType:v,args:e})}),g(e,h,function(e){return t.enqueue({eventType:h,args:e})}),g(e,A,function(e){return t.enqueue({eventType:A,args:e})}),g(e,C,function(e){return t.enqueue({eventType:C,args:e})}),g(e,T,function(e){return t.enqueue({eventType:T,args:e})}),g(e,I,function(e){return t.enqueue({eventType:I,args:e})}),g(e,E,function(e){return t.enqueue({eventType:E,args:e})}),g(e,P,function(e){return t.enqueue({eventType:P,args:e})}),g(e,N,function(e){return t.enqueue({eventType:N,args:e})}),g(e,y,function(e){return t.enqueue({eventType:y,args:e})}),g(e,D,function(e){return t.enqueue({eventType:D,args:e})}),g(e,S,function(e){return t.enqueue({eventType:S,args:e})}),g(e,m,function(e){e.config="object"===p(n)&&n.options||{},t.enqueue({eventType:m,args:e})}),o=e,b._each(o,function(e,n){f.on(n,e)})):b.logMessage('Analytics adapter for "'.concat(a,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return b.logMessage('Analytics adapter for "'.concat(a,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var i=t(5),o=t.n(i),l=t(4);function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=t(8),b=t(0),r=o.a.EVENTS,m=r.AUCTION_INIT,y=r.AUCTION_END,v=r.REQUEST_BIDS,h=r.BID_REQUESTED,T=r.BID_TIMEOUT,A=r.BID_RESPONSE,C=r.NO_BID,I=r.BID_WON,E=r.BID_ADJUSTMENT,P=r.BIDDER_DONE,N=r.SET_TARGETING,D=r.AD_RENDER_FAILED,S=r.ADD_AD_UNITS,O="endpoint",_="bundle"}},[388]);