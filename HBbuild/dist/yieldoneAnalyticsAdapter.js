pbjsChunk([4],{6:function(e,n,t){"use strict";n.a=function(e){var r,o=e.url,n=e.analyticsType,i=e.global,a=e.handler,c=[],u=0,t=!0;n!==O&&!q||function(){if(t){for(var e=0;e<c.length;e++)c[e]();c.push=function(e){e()},t=!1}v.logMessage("event count sent to ".concat(i,": ").concat(u))}();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===q&&window[i](a,n,t);this.getAdapterType()===O&&function(e){var n=e.eventType,t=e.args,a=e.callback;Object(l.a)(o,a,JSON.stringify({eventType:n,args:t}))}.apply(void 0,arguments)},enqueue:s,enableAnalytics:d,disableAnalytics:function(){v._each(r,function(e,n){g.off(n,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:d},getAdapterType:function(){return n},getGlobal:function(){return i},getHandler:function(){return a},getUrl:function(){return o}};function s(e){var n=e.eventType,t=e.args,a=this;i&&window[i]&&n&&t?this.track({eventType:n,args:t}):c.push(function(){u++,a.track({eventType:n,args:t})})}function d(n){var e,t=this,a=this;"object"!==p(n)||"object"!==p(n.options)||(void 0===n.options.sampling||Math.random()<parseFloat(n.options.sampling))?(g.getEvents().forEach(function(e){if(e){var n=e.eventType,t=e.args;n!==h&&s.call(a,{eventType:n,args:t})}}),f(e={},T,function(e){return t.enqueue({eventType:T,args:e})}),f(e,E,function(e){return t.enqueue({eventType:E,args:e})}),f(e,S,function(e){return t.enqueue({eventType:S,args:e})}),f(e,I,function(e){return t.enqueue({eventType:I,args:e})}),f(e,h,function(e){return t.enqueue({eventType:h,args:e})}),f(e,A,function(e){return t.enqueue({eventType:A,args:e})}),f(e,_,function(e){return t.enqueue({eventType:_,args:e})}),f(e,D,function(e){return t.enqueue({eventType:D,args:e})}),f(e,N,function(e){return t.enqueue({eventType:N,args:e})}),f(e,b,function(e){return t.enqueue({eventType:b,args:e})}),f(e,U,function(e){return t.enqueue({eventType:U,args:e})}),f(e,m,function(e){return t.enqueue({eventType:m,args:e})}),f(e,y,function(e){e.config="object"===p(n)&&n.options||{},t.enqueue({eventType:y,args:e})}),r=e,v._each(r,function(e,n){g.on(n,e)})):v.logMessage('Analytics adapter for "'.concat(i,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return v.logMessage('Analytics adapter for "'.concat(i,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var a=t(5),r=t.n(a),l=t(4);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=t(8),v=t(0),o=r.a.EVENTS,y=o.AUCTION_INIT,b=o.AUCTION_END,T=o.REQUEST_BIDS,E=o.BID_REQUESTED,h=o.BID_TIMEOUT,S=o.BID_RESPONSE,I=o.NO_BID,A=o.BID_WON,_=o.BID_ADJUSTMENT,D=o.BIDDER_DONE,N=o.SET_TARGETING,U=o.AD_RENDER_FAILED,m=o.ADD_AD_UNITS,O="endpoint",q="bundle"},675:function(e,n,t){e.exports=t(676)},676:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(4),r=t(6),o=t(5),d=t.n(o),i=t(7),l=t(35),f=t(25),p=t(0);function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var v={},y={},b={},T="",c="https://pool.tsukiji.iponweb.net/hba",E="";function h(a,r){a.adUnitCode&&r[a.adUnitCode]&&(a.adUnitName=r[a.adUnitCode]),p.isArray(a.adUnits)&&a.adUnits.forEach(function(e){e.code&&r[e.code]&&(e.name=r[e.code])}),p.isArray(a.adUnitCodes)&&(a.adUnitNames=a.adUnitCodes.map(function(e){return r[e]})),["bids","bidderRequests","bidsReceived","noBids"].forEach(function(e){var n,t;n=a[e],t=r,p.isArray(n)&&n.forEach(function(e){h(e,t)})})}var S=g(Object(r.a)({analyticsType:"endpoint"}),{getUrl:function(){return c},track:function(e){var a=e.eventType,n=e.args,t=void 0===n?{}:n;if(a===d.a.EVENTS.BID_REQUESTED){var r="".concat(t.bidderCode,"_").concat(t.auctionId);v[r]=p.deepClone(t),v[r].bids=[],t.bids.forEach(function(e){y["".concat(e.bidId,"_").concat(e.auctionId)]=e})}if(a===d.a.EVENTS.BID_TIMEOUT&&p.isArray(t)){var o=S.eventsStorage,i={};t.forEach(function(e){var n="".concat(e.bidId,"_").concat(e.auctionId),t="".concat(e.bidder,"_").concat(e.auctionId);o[e.auctionId]||(o[e.auctionId]={events:[]}),(v[t]||i[e.bidder])&&y[n]&&(i[e.bidder]||(i[e.bidder]=v[t],o[e.auctionId].events.push({eventType:a,params:i[e.bidder]}),delete v[t]),i[e.bidder].bids.push(y[n]),delete y[n])})}else if(T=t.auctionId||T){var c=S.eventsStorage;c[T]||(c[T]={events:[]});var u=t.refererInfo&&t.refererInfo.referer;u&&b[T]!==u&&(b[T]=u);var s=g({},t);delete s.ad,s.bidsReceived&&(s.bidsReceived=s.bidsReceived.map(function(e){var n=g({},e);return delete n.ad,n})),c[T].events.push({eventType:a,params:s}),a!==d.a.EVENTS.AUCTION_END&&a!==d.a.EVENTS.BID_WON||(s.adServerTargeting=l.a.getAllTargeting(f.a.getAdUnitCodes(),f.a.getBidsReceived()),S.eventsStorage[T]&&(S.eventsStorage[T].page={url:b[T]},S.eventsStorage[T].pubId=E,S.eventsStorage[T].wrapper_version="3.13.0-pre",S.eventsStorage[T].events.forEach(function(e){var n=function(){if(window.googletag&&window.googletag.pubads){var e=googletag.pubads();if(e&&e.getSlots){var n=e.getSlots();if(n&&n.length){var a={};return n.forEach(function(e){var n=e.getSlotElementId(),t=(e.getAdUnitPath()||"").split("/").pop();a[n]=t}),a}}}}();n&&h(e.params,n)})),S.sendStat(S.eventsStorage[T],T))}},sendStat:function(e,n){e&&(delete S.eventsStorage[n],Object(a.a)(c,{success:function(){},error:function(){}},JSON.stringify(e),{method:"POST"}))}});S.eventsStorage={},S.originEnableAnalytics=S.enableAnalytics,S.enableAnalytics=function(e){var n=e&&e.options;n&&("string"==typeof n.url&&(c=n.url),n.pubId&&(E=n.pubId.toString())),S.originEnableAnalytics(e)},i.default.registerAnalyticsAdapter({adapter:S,code:"yieldone"}),n.default=S}},[675]);