atdpbjsChunk([27],{382:function(e,n,t){e.exports=t(383)},383:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(6),a=t(7),u=Object(r.a)({analyticsType:"endpoint",url:"https://krk.kargo.com/api/v1/event/prebid"});a.default.registerAnalyticsAdapter({adapter:u,code:"kargo"}),n.default=u},6:function(e,n,t){"use strict";n.a=function(e){var a,u=e.url,n=e.analyticsType,o=e.global,r=e.handler,i=[],c=0,t=!0;n!==O&&!k||function(){if(t){for(var e=0;e<i.length;e++)i[e]();i.push=function(e){e()},t=!1}T.logMessage("event count sent to ".concat(o,": ").concat(c))}();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===k&&window[o](r,n,t);this.getAdapterType()===O&&function(e){var n=e.eventType,t=e.args,r=e.callback;Object(p.a)(u,r,JSON.stringify({eventType:n,args:t}))}.apply(void 0,arguments)},enqueue:s,enableAnalytics:l,disableAnalytics:function(){T._each(a,function(e,n){g.off(n,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:l},getAdapterType:function(){return n},getGlobal:function(){return o},getHandler:function(){return r},getUrl:function(){return u}};function s(e){var n=e.eventType,t=e.args,r=this;o&&window[o]&&n&&t?this.track({eventType:n,args:t}):i.push(function(){c++,r.track({eventType:n,args:t})})}function l(n){var e,t=this,r=this;"object"!==y(n)||"object"!==y(n.options)||(void 0===n.options.sampling||Math.random()<parseFloat(n.options.sampling))?(g.getEvents().forEach(function(e){if(e){var n=e.eventType,t=e.args;n!==h&&s.call(r,{eventType:n,args:t})}}),f(e={},d,function(e){return t.enqueue({eventType:d,args:e})}),f(e,E,function(e){return t.enqueue({eventType:E,args:e})}),f(e,_,function(e){return t.enqueue({eventType:_,args:e})}),f(e,A,function(e){return t.enqueue({eventType:A,args:e})}),f(e,h,function(e){return t.enqueue({eventType:h,args:e})}),f(e,D,function(e){return t.enqueue({eventType:D,args:e})}),f(e,I,function(e){return t.enqueue({eventType:I,args:e})}),f(e,S,function(e){return t.enqueue({eventType:S,args:e})}),f(e,q,function(e){return t.enqueue({eventType:q,args:e})}),f(e,b,function(e){return t.enqueue({eventType:b,args:e})}),f(e,N,function(e){return t.enqueue({eventType:N,args:e})}),f(e,m,function(e){return t.enqueue({eventType:m,args:e})}),f(e,v,function(e){e.config="object"===y(n)&&n.options||{},t.enqueue({eventType:v,args:e})}),a=e,T._each(a,function(e,n){g.on(n,e)})):T.logMessage('Analytics adapter for "'.concat(o,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return T.logMessage('Analytics adapter for "'.concat(o,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var r=t(5),a=t.n(r),p=t(4);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=t(8),T=t(0),u=a.a.EVENTS,v=u.AUCTION_INIT,b=u.AUCTION_END,d=u.REQUEST_BIDS,E=u.BID_REQUESTED,h=u.BID_TIMEOUT,_=u.BID_RESPONSE,A=u.NO_BID,D=u.BID_WON,I=u.BID_ADJUSTMENT,S=u.BIDDER_DONE,q=u.SET_TARGETING,N=u.AD_RENDER_FAILED,m=u.ADD_AD_UNITS,O="endpoint",k="bundle"}},[382]);