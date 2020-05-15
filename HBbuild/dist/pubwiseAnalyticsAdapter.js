pbjsChunk([18],{481:function(e,n,t){e.exports=t(482)},482:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(4),a=t(6),o=t(7),u=t(5),i=t.n(u);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s=t(0),l="PubWise Analytics: ",p="3.0",f={site:"",endpoint:"https://api.pubwise.io/api/v4/event/default/",debug:""},y=!1,g={utm_source:"",utm_medium:"",utm_campaign:"",utm_term:"",utm_content:""};function v(e,n){s.logInfo("".concat(l,"Event ").concat(e," ").concat(y),n);var t={eventType:e,args:n,target_site:f.site,pubwiseSchema:"AVOCET",debug:f.debug?1:0};t=function(n){try{n.pw_version=p,n.pbjs_version=pbjs.version,n.debug=f.debug}catch(e){n.error_metric=1}return n}(t),e==i.a.EVENTS.AUCTION_INIT&&(t=function(n){var e=!1;try{for(var t in g)g[t]=s.getParameterByName(t),""!=g[t]&&(e=!0,n[t]=g[t]);if(!1===e)for(var r in g){var a=localStorage.getItem("pw-".concat(r));0!==a.length&&(n[r]=a)}else for(var o in g)localStorage.setItem("pw-".concat(o),g[o])}catch(e){s.logInfo("".concat(l,"Error"),e),n.error_utm=1}return n}(t)),Object(r.a)(f.endpoint,function(e){return s.logInfo("".concat(l,"Result"),e)},JSON.stringify(t))}var b=c(Object(a.a)({defaultUrl:"https://api.pubwise.io/api/v4/event/default/",analyticsType:"endpoint"}),{track:function(e){v(e.eventType,e.args)}});b.adapterEnableAnalytics=b.enableAnalytics,b.enableAnalytics=function(e){void 0===e.options.debug&&(e.options.debug=s.debugTurnedOn()),f=e.options,s.logInfo("".concat(l,"Enabled"),f),y=!0,b.adapterEnableAnalytics(e)},o.default.registerAnalyticsAdapter({adapter:b,code:"pubwise"}),n.default=b},6:function(e,n,t){"use strict";n.a=function(e){var a,o=e.url,n=e.analyticsType,u=e.global,r=e.handler,i=[],c=0,t=!0;n!==q&&!j||function(){if(t){for(var e=0;e<i.length;e++)i[e]();i.push=function(e){e()},t=!1}v.logMessage("event count sent to ".concat(u,": ").concat(c))}();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===j&&window[u](r,n,t);this.getAdapterType()===q&&function(e){var n=e.eventType,t=e.args,r=e.callback;Object(p.a)(o,r,JSON.stringify({eventType:n,args:t}))}.apply(void 0,arguments)},enqueue:s,enableAnalytics:l,disableAnalytics:function(){v._each(a,function(e,n){g.off(n,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:l},getAdapterType:function(){return n},getGlobal:function(){return u},getHandler:function(){return r},getUrl:function(){return o}};function s(e){var n=e.eventType,t=e.args,r=this;u&&window[u]&&n&&t?this.track({eventType:n,args:t}):i.push(function(){c++,r.track({eventType:n,args:t})})}function l(n){var e,t=this,r=this;"object"!==y(n)||"object"!==y(n.options)||(void 0===n.options.sampling||Math.random()<parseFloat(n.options.sampling))?(g.getEvents().forEach(function(e){if(e){var n=e.eventType,t=e.args;n!==E&&s.call(r,{eventType:n,args:t})}}),f(e={},T,function(e){return t.enqueue({eventType:T,args:e})}),f(e,_,function(e){return t.enqueue({eventType:_,args:e})}),f(e,h,function(e){return t.enqueue({eventType:h,args:e})}),f(e,m,function(e){return t.enqueue({eventType:m,args:e})}),f(e,E,function(e){return t.enqueue({eventType:E,args:e})}),f(e,A,function(e){return t.enqueue({eventType:A,args:e})}),f(e,I,function(e){return t.enqueue({eventType:I,args:e})}),f(e,O,function(e){return t.enqueue({eventType:O,args:e})}),f(e,S,function(e){return t.enqueue({eventType:S,args:e})}),f(e,d,function(e){return t.enqueue({eventType:d,args:e})}),f(e,D,function(e){return t.enqueue({eventType:D,args:e})}),f(e,N,function(e){return t.enqueue({eventType:N,args:e})}),f(e,b,function(e){e.config="object"===y(n)&&n.options||{},t.enqueue({eventType:b,args:e})}),a=e,v._each(a,function(e,n){g.on(n,e)})):v.logMessage('Analytics adapter for "'.concat(u,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return v.logMessage('Analytics adapter for "'.concat(u,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var r=t(5),a=t.n(r),p=t(4);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=t(8),v=t(0),o=a.a.EVENTS,b=o.AUCTION_INIT,d=o.AUCTION_END,T=o.REQUEST_BIDS,_=o.BID_REQUESTED,E=o.BID_TIMEOUT,h=o.BID_RESPONSE,m=o.NO_BID,A=o.BID_WON,I=o.BID_ADJUSTMENT,O=o.BIDDER_DONE,S=o.SET_TARGETING,D=o.AD_RENDER_FAILED,N=o.ADD_AD_UNITS,q="endpoint",j="bundle"}},[481]);