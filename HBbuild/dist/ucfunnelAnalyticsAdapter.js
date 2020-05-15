pbjsChunk([6],{6:function(e,n,t){"use strict";n.a=function(e){var o,a=e.url,n=e.analyticsType,r=e.global,i=e.handler,s=[],u=0,t=!0;n!==M&&!C||function(){if(t){for(var e=0;e<s.length;e++)s[e]();s.push=function(e){e()},t=!1}y.logMessage("event count sent to ".concat(r,": ").concat(u))}();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===C&&window[r](i,n,t);this.getAdapterType()===M&&function(e){var n=e.eventType,t=e.args,i=e.callback;Object(p.a)(a,i,JSON.stringify({eventType:n,args:t}))}.apply(void 0,arguments)},enqueue:c,enableAnalytics:d,disableAnalytics:function(){y._each(o,function(e,n){g.off(n,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:d},getAdapterType:function(){return n},getGlobal:function(){return r},getHandler:function(){return i},getUrl:function(){return a}};function c(e){var n=e.eventType,t=e.args,i=this;r&&window[r]&&n&&t?this.track({eventType:n,args:t}):s.push(function(){u++,i.track({eventType:n,args:t})})}function d(n){var e,t=this,i=this;"object"!==f(n)||"object"!==f(n.options)||(void 0===n.options.sampling||Math.random()<parseFloat(n.options.sampling))?(g.getEvents().forEach(function(e){if(e){var n=e.eventType,t=e.args;n!==E&&c.call(i,{eventType:n,args:t})}}),l(e={},T,function(e){return t.enqueue({eventType:T,args:e})}),l(e,v,function(e){return t.enqueue({eventType:v,args:e})}),l(e,A,function(e){return t.enqueue({eventType:A,args:e})}),l(e,m,function(e){return t.enqueue({eventType:m,args:e})}),l(e,E,function(e){return t.enqueue({eventType:E,args:e})}),l(e,I,function(e){return t.enqueue({eventType:I,args:e})}),l(e,B,function(e){return t.enqueue({eventType:B,args:e})}),l(e,O,function(e){return t.enqueue({eventType:O,args:e})}),l(e,_,function(e){return t.enqueue({eventType:_,args:e})}),l(e,b,function(e){return t.enqueue({eventType:b,args:e})}),l(e,D,function(e){return t.enqueue({eventType:D,args:e})}),l(e,N,function(e){return t.enqueue({eventType:N,args:e})}),l(e,h,function(e){e.config="object"===f(n)&&n.options||{},t.enqueue({eventType:h,args:e})}),o=e,y._each(o,function(e,n){g.on(n,e)})):y.logMessage('Analytics adapter for "'.concat(r,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return y.logMessage('Analytics adapter for "'.concat(r,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var i=t(5),o=t.n(i),p=t(4);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=t(8),y=t(0),a=o.a.EVENTS,h=a.AUCTION_INIT,b=a.AUCTION_END,T=a.REQUEST_BIDS,v=a.BID_REQUESTED,E=a.BID_TIMEOUT,A=a.BID_RESPONSE,m=a.NO_BID,I=a.BID_WON,B=a.BID_ADJUSTMENT,O=a.BIDDER_DONE,_=a.SET_TARGETING,D=a.AD_RENDER_FAILED,N=a.ADD_AD_UNITS,M="endpoint",C="bundle"},626:function(e,n,t){e.exports=t(627)},627:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"ANALYTICS_VERSION",function(){return p}),t.d(n,"BIDDER_STATUS",function(){return b}),t.d(n,"parseBidderCode",function(){return v}),t.d(n,"parseAdUnitCode",function(){return E}),t.d(n,"ucfunnelAnalyticsAdapter",function(){return A});var i=t(4),o=t(6),a=t(5),r=t.n(a),s=t(7),u=t(18),c=t(0);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var p="1.0.0",l="https://hbwa.aralego.com",f=r.a.EVENTS,g=f.AUCTION_END,y=f.BID_WON,h=f.BID_TIMEOUT,b={BID:"bid",NO_BID:"noBid",BID_WON:"bidWon",TIMEOUT:"timeout"},T={},v=function(e){return(e.bidderCode||e.bidder).toLowerCase()},E=function(e){return e.adUnitCode.toLowerCase()},A=d(Object(o.a)({ANALYTICS_SERVER:l,analyticsType:"endpoint"}),{cachedAuctions:{},initConfig:function(e){return T.options=Object(c.deepClone)(e.options),"string"!=typeof e.options.pbuid||e.options.pbuid.length<1?(Object(c.logError)('"options.pbuid" is required.'),!1):"string"!=typeof e.options.adid||e.options.adid.length<1?(Object(c.logError)('"options.adid" is required.'),!1):(T.sampled=!0,"number"==typeof e.options.sampling&&(T.sampled=Math.random()<parseFloat(e.options.sampling)),T.pbuid=e.options.pbuid,T.adid=e.options.adid,T.server=l,!0)},sendEventMessage:function(e,n){Object(c.logInfo)("AJAX: ".concat(e,": ")+JSON.stringify(n)),Object(i.a)("".concat(T.server,"/").concat(e),null,JSON.stringify(n),{contentType:"application/json",withCredentials:!0})},createCommonMessage:function(e){return{version:p,auctionId:e,referrer:window.location.href,sampling:T.options.sampling,prebid:"3.13.0-pre",adid:T.adid,pbuid:T.pbuid,adUnits:{}}},serializeBidResponse:function(e,n){var t={prebidWon:n===b.BID_WON,isTimeout:n===b.TIMEOUT,status:n};return n!==b.BID&&n!==b.BID_WON||d(t,{time:e.timeToRespond,cpm:e.cpm,currency:e.currency}),t},addBidResponseToMessage:function(e,n,t){var i=E(n);e.adUnits[i]=e.adUnits[i]||{};var o=v(n),a=this.serializeBidResponse(n,t);e.adUnits[i][o]=a},createBidMessage:function(e,n,t){var i=this,o=e.auctionId,a=e.timestamp,r=e.auctionEnd,s=e.adUnitCodes,u=e.bidsReceived,c=e.noBids,d=this.createCommonMessage(o);return d.auctionElapsed=r-a,s.forEach(function(e){d.adUnits[e]={}}),c.forEach(function(e){return i.addBidResponseToMessage(d,e,b.NO_BID)}),u.forEach(function(e){return i.addBidResponseToMessage(d,e,b.BID)}),t.forEach(function(e){return i.addBidResponseToMessage(d,e,b.TIMEOUT)}),n.forEach(function(e){var n=E(e),t=v(e);d.adUnits[n][t].prebidWon=!0}),d},createImpressionMessage:function(e){var n=this.createCommonMessage(e.auctionId);return this.addBidResponseToMessage(n,e,b.BID_WON),n},getCachedAuction:function(e){return this.cachedAuctions[e]=this.cachedAuctions[e]||{timeoutBids:[]},this.cachedAuctions[e]},handleAuctionEnd:function(e){var n=this.getCachedAuction(e.auctionId),t=Object(u.a)().getHighestCpmBids();this.sendEventMessage("bid",this.createBidMessage(e,t,n.timeoutBids))},handleBidTimeout:function(e){var n=this;e.forEach(function(e){n.getCachedAuction(e.auctionId).timeoutBids.push(e)})},handleBidWon:function(e){this.sendEventMessage("imp",this.createImpressionMessage(e))},track:function(e){var n=e.eventType,t=e.args;if(T.sampled)switch(n){case y:this.handleBidWon(t);break;case h:this.handleBidTimeout(t);break;case g:this.handleAuctionEnd(t)}},getAnalyticsOptions:function(){return T}});A.originEnableAnalytics=A.enableAnalytics,A.enableAnalytics=function(e){this.initConfig(e)&&A.originEnableAnalytics(e)},s.default.registerAnalyticsAdapter({adapter:A,code:"ucfunnelAnalytics"})}},[626]);