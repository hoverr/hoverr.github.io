pbjsChunk([15],{526:function(n,e,t){n.exports=t(527)},527:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(4),r=t(6),o=t(7),i=t(0);function u(){return(u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var c=u(Object(r.a)({analyticsType:"endpoint"}),{track:function(n){var e=n.eventType,t=n.args;window.rivraddon&&window.rivraddon.analytics&&window.rivraddon.analytics.getContext()&&window.rivraddon.analytics.trackPbjsEvent&&(i.logInfo("ARGUMENTS FOR TYPE: ============= ".concat(e),t),window.rivraddon.analytics.trackPbjsEvent({eventType:e,args:t}))}});c.originEnableAnalytics=c.enableAnalytics,c.enableAnalytics=function(n){window.rivraddon&&window.rivraddon.analytics&&(window.rivraddon.analytics.enableAnalytics(n,{utils:i,ajax:a.a,pbjsGlobalVariable:pbjs}),c.originEnableAnalytics(n))},o.default.registerAnalyticsAdapter({adapter:c,code:"rivr"}),e.default=c},6:function(n,e,t){"use strict";e.a=function(n){var r,o=n.url,e=n.analyticsType,i=n.global,a=n.handler,u=[],c=0,t=!0;e!==N&&!q||function(){if(t){for(var n=0;n<u.length;n++)u[n]();u.push=function(n){n()},t=!1}v.logMessage("event count sent to ".concat(i,": ").concat(c))}();return{track:function(n){var e=n.eventType,t=n.args;this.getAdapterType()===q&&window[i](a,e,t);this.getAdapterType()===N&&function(n){var e=n.eventType,t=n.args,a=n.callback;Object(y.a)(o,a,JSON.stringify({eventType:e,args:t}))}.apply(void 0,arguments)},enqueue:s,enableAnalytics:l,disableAnalytics:function(){v._each(r,function(n,e){d.off(e,n)}),this.enableAnalytics=this._oldEnable?this._oldEnable:l},getAdapterType:function(){return e},getGlobal:function(){return i},getHandler:function(){return a},getUrl:function(){return o}};function s(n){var e=n.eventType,t=n.args,a=this;i&&window[i]&&e&&t?this.track({eventType:e,args:t}):u.push(function(){c++,a.track({eventType:e,args:t})})}function l(e){var n,t=this,a=this;"object"!==f(e)||"object"!==f(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(d.getEvents().forEach(function(n){if(n){var e=n.eventType,t=n.args;e!==A&&s.call(a,{eventType:e,args:t})}}),p(n={},T,function(n){return t.enqueue({eventType:T,args:n})}),p(n,E,function(n){return t.enqueue({eventType:E,args:n})}),p(n,h,function(n){return t.enqueue({eventType:h,args:n})}),p(n,w,function(n){return t.enqueue({eventType:w,args:n})}),p(n,A,function(n){return t.enqueue({eventType:A,args:n})}),p(n,_,function(n){return t.enqueue({eventType:_,args:n})}),p(n,D,function(n){return t.enqueue({eventType:D,args:n})}),p(n,I,function(n){return t.enqueue({eventType:I,args:n})}),p(n,O,function(n){return t.enqueue({eventType:O,args:n})}),p(n,b,function(n){return t.enqueue({eventType:b,args:n})}),p(n,S,function(n){return t.enqueue({eventType:S,args:n})}),p(n,j,function(n){return t.enqueue({eventType:j,args:n})}),p(n,g,function(n){n.config="object"===f(e)&&e.options||{},t.enqueue({eventType:g,args:n})}),r=n,v._each(r,function(n,e){d.on(e,n)})):v.logMessage('Analytics adapter for "'.concat(i,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return v.logMessage('Analytics adapter for "'.concat(i,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var a=t(5),r=t.n(a),y=t(4);function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function f(n){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var d=t(8),v=t(0),o=r.a.EVENTS,g=o.AUCTION_INIT,b=o.AUCTION_END,T=o.REQUEST_BIDS,E=o.BID_REQUESTED,A=o.BID_TIMEOUT,h=o.BID_RESPONSE,w=o.NO_BID,_=o.BID_WON,D=o.BID_ADJUSTMENT,I=o.BIDDER_DONE,O=o.SET_TARGETING,S=o.AD_RENDER_FAILED,j=o.ADD_AD_UNITS,N="endpoint",q="bundle"}},[526]);