pbjsChunk([31],{319:function(e,n,t){e.exports=t(320)},320:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=t(4),i=t(6),r=t(7),o=t(0);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var c=t(5),s="https://ads.us.e-planning.net/hba/1/";function l(e){return{auctionId:e.auctionId}}function p(e){return{auctionId:e.auctionId,time:e.timestamp}}function f(e){return{auctionId:e.auctionId,time:e.start,bidder:e.bidderCode,bids:e.bids.map(function(e){return{time:e.startTime,bidder:e.bidder,placementCode:e.placementCode,auctionId:e.auctionId,sizes:e.sizes}})}}function d(e){return{bidder:e.bidder,size:e.size,auctionId:e.auctionId,cpm:e.cpm,time:e.responseTimestamp}}function y(e){return{auctionId:e.auctionId,size:e.width+"x"+e.height}}function T(e){return e.map(function(e){return{bidder:e.bidder,auctionId:e.auctionId}})}var g=a(Object(i.a)({EPL_HOST:s,analyticsType:"endpoint"}),{track:function(e){var n,t,i,r=e.eventType,o=e.args;if(void 0!==o&&(t=o,i=null,(n=r)===c.EVENTS.AUCTION_INIT?(i=p,g.context.events=[]):n===c.EVENTS.AUCTION_END?i=l:n===c.EVENTS.BID_REQUESTED?i=f:n===c.EVENTS.BID_RESPONSE?i=d:n===c.EVENTS.BID_TIMEOUT?i=T:n===c.EVENTS.BID_WON&&(i=y),i&&g.context.events.push({ec:n,p:i(t)})),r===c.EVENTS.AUCTION_END)try{var a=JSON.stringify(g.context.events);Object(u.a)(g.context.host+g.context.ci+"?d="+encodeURIComponent(a))}catch(e){}}});g.originEnableAnalytics=g.enableAnalytics,g.enableAnalytics=function(e){e.options.ci?(g.context={events:[],host:e.options.host||s,ci:e.options.ci},g.originEnableAnalytics(e)):o.logError("Client ID (ci) option is not defined. Analytics won't work")},r.default.registerAnalyticsAdapter({adapter:g,code:"eplanning"}),n.default=g},6:function(e,n,t){"use strict";n.a=function(e){var r,o=e.url,n=e.analyticsType,a=e.global,i=e.handler,u=[],c=0,t=!0;n!==q&&!U||function(){if(t){for(var e=0;e<u.length;e++)u[e]();u.push=function(e){e()},t=!1}T.logMessage("event count sent to ".concat(a,": ").concat(c))}();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===U&&window[a](i,n,t);this.getAdapterType()===q&&function(e){var n=e.eventType,t=e.args,i=e.callback;Object(p.a)(o,i,JSON.stringify({eventType:n,args:t}))}.apply(void 0,arguments)},enqueue:s,enableAnalytics:l,disableAnalytics:function(){T._each(r,function(e,n){y.off(n,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:l},getAdapterType:function(){return n},getGlobal:function(){return a},getHandler:function(){return i},getUrl:function(){return o}};function s(e){var n=e.eventType,t=e.args,i=this;a&&window[a]&&n&&t?this.track({eventType:n,args:t}):u.push(function(){c++,i.track({eventType:n,args:t})})}function l(n){var e,t=this,i=this;"object"!==d(n)||"object"!==d(n.options)||(void 0===n.options.sampling||Math.random()<parseFloat(n.options.sampling))?(y.getEvents().forEach(function(e){if(e){var n=e.eventType,t=e.args;n!==I&&s.call(i,{eventType:n,args:t})}}),f(e={},v,function(e){return t.enqueue({eventType:v,args:e})}),f(e,E,function(e){return t.enqueue({eventType:E,args:e})}),f(e,h,function(e){return t.enqueue({eventType:h,args:e})}),f(e,N,function(e){return t.enqueue({eventType:N,args:e})}),f(e,I,function(e){return t.enqueue({eventType:I,args:e})}),f(e,_,function(e){return t.enqueue({eventType:_,args:e})}),f(e,A,function(e){return t.enqueue({eventType:A,args:e})}),f(e,m,function(e){return t.enqueue({eventType:m,args:e})}),f(e,D,function(e){return t.enqueue({eventType:D,args:e})}),f(e,b,function(e){return t.enqueue({eventType:b,args:e})}),f(e,S,function(e){return t.enqueue({eventType:S,args:e})}),f(e,O,function(e){return t.enqueue({eventType:O,args:e})}),f(e,g,function(e){e.config="object"===d(n)&&n.options||{},t.enqueue({eventType:g,args:e})}),r=e,T._each(r,function(e,n){y.on(n,e)})):T.logMessage('Analytics adapter for "'.concat(a,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return T.logMessage('Analytics adapter for "'.concat(a,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var i=t(5),r=t.n(i),p=t(4);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=t(8),T=t(0),o=r.a.EVENTS,g=o.AUCTION_INIT,b=o.AUCTION_END,v=o.REQUEST_BIDS,E=o.BID_REQUESTED,I=o.BID_TIMEOUT,h=o.BID_RESPONSE,N=o.NO_BID,_=o.BID_WON,A=o.BID_ADJUSTMENT,m=o.BIDDER_DONE,D=o.SET_TARGETING,S=o.AD_RENDER_FAILED,O=o.ADD_AD_UNITS,q="endpoint",U="bundle"}},[319]);