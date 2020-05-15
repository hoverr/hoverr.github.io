pbjsChunk([3],{6:function(e,t,n){"use strict";t.a=function(e){var i,r=e.url,t=e.analyticsType,o=e.global,a=e.handler,s=[],u=0,n=!0;t!==O&&!U||function(){if(n){for(var e=0;e<s.length;e++)s[e]();s.push=function(e){e()},n=!1}T.logMessage("event count sent to ".concat(o,": ").concat(u))}();return{track:function(e){var t=e.eventType,n=e.args;this.getAdapterType()===U&&window[o](a,t,n);this.getAdapterType()===O&&function(e){var t=e.eventType,n=e.args,a=e.callback;Object(p.a)(r,a,JSON.stringify({eventType:t,args:n}))}.apply(void 0,arguments)},enqueue:c,enableAnalytics:d,disableAnalytics:function(){T._each(i,function(e,t){f.off(t,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:d},getAdapterType:function(){return t},getGlobal:function(){return o},getHandler:function(){return a},getUrl:function(){return r}};function c(e){var t=e.eventType,n=e.args,a=this;o&&window[o]&&t&&n?this.track({eventType:t,args:n}):s.push(function(){u++,a.track({eventType:t,args:n})})}function d(t){var e,n=this,a=this;"object"!==y(t)||"object"!==y(t.options)||(void 0===t.options.sampling||Math.random()<parseFloat(t.options.sampling))?(f.getEvents().forEach(function(e){if(e){var t=e.eventType,n=e.args;t!==g&&c.call(a,{eventType:t,args:n})}}),l(e={},m,function(e){return n.enqueue({eventType:m,args:e})}),l(e,I,function(e){return n.enqueue({eventType:I,args:e})}),l(e,E,function(e){return n.enqueue({eventType:E,args:e})}),l(e,h,function(e){return n.enqueue({eventType:h,args:e})}),l(e,g,function(e){return n.enqueue({eventType:g,args:e})}),l(e,S,function(e){return n.enqueue({eventType:S,args:e})}),l(e,A,function(e){return n.enqueue({eventType:A,args:e})}),l(e,_,function(e){return n.enqueue({eventType:_,args:e})}),l(e,N,function(e){return n.enqueue({eventType:N,args:e})}),l(e,v,function(e){return n.enqueue({eventType:v,args:e})}),l(e,D,function(e){return n.enqueue({eventType:D,args:e})}),l(e,q,function(e){return n.enqueue({eventType:q,args:e})}),l(e,b,function(e){e.config="object"===y(t)&&t.options||{},n.enqueue({eventType:b,args:e})}),i=e,T._each(i,function(e,t){f.on(t,e)})):T.logMessage('Analytics adapter for "'.concat(o,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return T.logMessage('Analytics adapter for "'.concat(o,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var a=n(5),i=n.n(a),p=n(4);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=n(8),T=n(0),r=i.a.EVENTS,b=r.AUCTION_INIT,v=r.AUCTION_END,m=r.REQUEST_BIDS,I=r.BID_REQUESTED,g=r.BID_TIMEOUT,E=r.BID_RESPONSE,h=r.NO_BID,S=r.BID_WON,A=r.BID_ADJUSTMENT,_=r.BIDDER_DONE,N=r.SET_TARGETING,D=r.AD_RENDER_FAILED,q=r.ADD_AD_UNITS,O="endpoint",U="bundle"},651:function(e,t,n){e.exports=n(652)},652:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),a=n(6),r=n(7),o=n(5),s=n.n(o),u=n(9),c=n(0);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p,l,y={bids:[]},f=d(Object(a.a)({emptyUrl:"",analyticsType:"endpoint"}),{track:function(e){var t=e.eventType,n=e.args;void 0!==n&&(t===s.a.EVENTS.BID_TIMEOUT?n.forEach(function(e){T(e,"timeout")}):t===s.a.EVENTS.AUCTION_INIT?(y.auctionInit=n,l=n.timestamp):t===s.a.EVENTS.BID_REQUESTED?function(t){var n=[];void 0!==t.bids&&t.bids.length&&t.bids.forEach(function(e){n.push({bidderCode:e.bidder,bidId:e.bidId,adUnitCode:e.adUnitCode,requestId:e.bidderRequestId,auctionId:e.auctionId,transactionId:e.transactionId,sizes:c.parseSizesInput(e.mediaTypes.banner.sizes).toString(),renderStatus:1,requestTimestamp:t.auctionStart})});return n}(n).forEach(function(e){y.bids.push(e)}):t===s.a.EVENTS.BID_RESPONSE?T(n,"response"):t===s.a.EVENTS.BID_WON&&b({bidWon:T(n,"win")},"won")),t===s.a.EVENTS.AUCTION_END&&b(y,"auctionEnd")}});function T(t,e){if("win"!==e)d(y.bids.filter(function(e){return e.bidId==t.bidId||e.bidId==t.requestId})[0],{bidderCode:t.bidder,bidId:"timeout"==e?t.bidId:t.requestId,adUnitCode:t.adUnitCode,auctionId:t.auctionId,creativeId:t.creativeId,transactionId:t.transactionId,currency:t.currency,cpm:t.cpm,netRevenue:t.netRevenue,mediaType:t.mediaType,statusMessage:t.statusMessage,status:t.status,renderStatus:"timeout"==e?3:2,timeToRespond:t.timeToRespond,requestTimestamp:t.requestTimestamp,responseTimestamp:t.responseTimestamp});else if("win"==e)return{bidderCode:t.bidder,bidId:t.requestId,adUnitCode:t.adUnitCode,auctionId:t.auctionId,creativeId:t.creativeId,transactionId:t.transactionId,currency:t.currency,cpm:t.cpm,netRevenue:t.netRevenue,renderedSize:t.size,mediaType:t.mediaType,statusMessage:t.statusMessage,status:t.status,renderStatus:4,timeToRespond:t.timeToRespond,requestTimestamp:t.requestTimestamp,responseTimestamp:t.responseTimestamp}}function b(e,t){var n=c.getWindowLocation();void 0!==e&&void 0!==e.auctionInit&&(e.auctionInit=d({host:n.host,path:n.pathname,search:n.search},e.auctionInit)),e.initOptions=p;var a=u.a({protocol:"https",hostname:"analytics-prebid.yuktamedia.com",pathname:"auctionEnd"==t?"/api/bids":"/api/bid/won",search:{auctionTimestamp:l,yuktamediaAnalyticsVersion:"v2.0.0",prebidVersion:pbjs.version}});Object(i.a)(a,void 0,JSON.stringify(e),{method:"POST",contentType:"text/plain"})}f.originEnableAnalytics=f.enableAnalytics,f.enableAnalytics=function(e){p=e.options,f.originEnableAnalytics(e)},r.default.registerAnalyticsAdapter({adapter:f,code:"yuktamedia"}),t.default=f}},[651]);