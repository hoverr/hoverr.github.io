atdpbjsChunk([39],{166:function(e,t,n){e.exports=n(167)},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),a=n(5),o=n.n(a),i=n(7),c=n(0),u=n(12),s=n.n(u),l=n(54),d=n.n(l);function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var b=o.a.EVENTS.AUCTION_INIT,v=o.a.EVENTS.AUCTION_END,g=o.a.EVENTS.BID_REQUESTED,E=o.a.EVENTS.BID_RESPONSE,h=o.a.EVENTS.BID_WON,T=o.a.EVENTS.BID_TIMEOUT,m=y(Object(r.a)({}),{track:function(e){var t=e.eventType,n=e.args;switch(t){case b:m.initializeBucketEvents(),m.currentContext.id=n.auctionId;break;case T:m.currentContext.timeouted=!0;break;case E:m.bucketEvents.push({type:"response",event:m.buildBidResponse(n)});break;case h:m.sendWonEvent({id:n.adId,placementCode:n.adUnitCode});break;case g:n.bids.forEach(function(e){m.bucketEvents.push({type:"request",event:{bidder:e.bidder.toUpperCase(),placementCode:e.placementCode}})});break;case v:0<m.bucketEvents.length&&m.sendTypedEvent()}}});m.initializeBucketEvents=function(){m.bucketEvents=[]},m.sendTypedEvent=function(){var e=m.buildTypedEvents(),t={uid:m.currentContext.uid,ahbaid:m.currentContext.id,hostname:window.location.hostname,eventsByPlacementCode:e.map(function(e){var r=[],a={};return["request","response","winner"].forEach(function(n){a["".concat(n,"s")]=[],void 0!==e[n]&&e[n].forEach(function(e){if(void 0!==e.event.size){var t=m.sizeUtils.handleSize(r,e.event.size);null!==t&&(r=[].concat(f(r),[t]))}a["".concat(n,"s")]=[].concat(f(a["".concat(n,"s")]),[e.event])})}),{placementCode:e.placementCode,sizes:r,events:a}})},n=JSON.stringify(t);Object(c.logInfo)("Events sent to adomik prebid analytic "+n);var r=window.btoa(n),a=encodeURIComponent(r).match(/.{1,1600}/g);a.forEach(function(e,t){var n="".concat(e,"&id=").concat(m.currentContext.id,"&part=").concat(t,"&on=").concat(a.length-1);new Image(1,1).src="https://"+m.currentContext.url+"/?q="+n})},m.sendWonEvent=function(e){var t=JSON.stringify(e);Object(c.logInfo)("Won event sent to adomik prebid analytic "+e);var n=window.btoa(t),r=encodeURIComponent(n);new Image(1,1).src="https://".concat(m.currentContext.url,"/?q=").concat(r,"&id=").concat(m.currentContext.id,"&won=true")},m.buildBidResponse=function(e){return{bidder:e.bidderCode.toUpperCase(),placementCode:e.adUnitCode,id:e.adId,status:"Bid available"===e.statusMessage?"VALID":"EMPTY_OR_ERROR",cpm:parseFloat(e.cpm),size:{width:Number(e.width),height:Number(e.height)},timeToRespond:e.timeToRespond,afterTimeout:m.currentContext.timeouted}},m.sizeUtils={sizeAlreadyExists:function(e,t){return s()(e,function(e){return e.height===t.height&&e.width===t.width})},formatSize:function(e){return{width:Number(e.width),height:Number(e.height)}},handleSize:function(e,t){var n=null;return void 0===m.sizeUtils.sizeAlreadyExists(e,t)&&(n=m.sizeUtils.formatSize(t)),n}},m.buildTypedEvents=function(){var s=[];return m.bucketEvents.forEach(function(e,t){var n,r,a,o=[e.event.placementCode,e.type],i=o[0],c=o[1],u=d()(s,function(e){return e.placementCode===i});-1===u&&(s.push((a=[e],(r=c)in(n={placementCode:i})?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n)),u=s.length-1),s[u][c]?s[u][c]=[].concat(f(s[u][c]),[e]):s[u][c]=[e]}),s},m.adapterEnableAnalytics=m.enableAnalytics,m.enableAnalytics=function(e){m.currentContext={};var t=e.options;t&&(m.currentContext={uid:t.id,url:t.url,id:"",timeouted:!1},Object(c.logInfo)("Adomik Analytics enabled with config",t),m.adapterEnableAnalytics(e))},i.default.registerAnalyticsAdapter({adapter:m,code:"adomik"}),t.default=m},6:function(e,t,n){"use strict";t.a=function(e){var a,o=e.url,t=e.analyticsType,i=e.global,r=e.handler,c=[],u=0,n=!0;t!==w&&!D||function(){if(n){for(var e=0;e<c.length;e++)c[e]();c.push=function(e){e()},n=!1}b.logMessage("event count sent to ".concat(i,": ").concat(u))}();return{track:function(e){var t=e.eventType,n=e.args;this.getAdapterType()===D&&window[i](r,t,n);this.getAdapterType()===w&&function(e){var t=e.eventType,n=e.args,r=e.callback;Object(d.a)(o,r,JSON.stringify({eventType:t,args:n}))}.apply(void 0,arguments)},enqueue:s,enableAnalytics:l,disableAnalytics:function(){b._each(a,function(e,t){y.off(t,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:l},getAdapterType:function(){return t},getGlobal:function(){return i},getHandler:function(){return r},getUrl:function(){return o}};function s(e){var t=e.eventType,n=e.args,r=this;i&&window[i]&&t&&n?this.track({eventType:t,args:n}):c.push(function(){u++,r.track({eventType:t,args:n})})}function l(t){var e,n=this,r=this;"object"!==p(t)||"object"!==p(t.options)||(void 0===t.options.sampling||Math.random()<parseFloat(t.options.sampling))?(y.getEvents().forEach(function(e){if(e){var t=e.eventType,n=e.args;t!==T&&s.call(r,{eventType:t,args:n})}}),f(e={},E,function(e){return n.enqueue({eventType:E,args:e})}),f(e,h,function(e){return n.enqueue({eventType:h,args:e})}),f(e,m,function(e){return n.enqueue({eventType:m,args:e})}),f(e,A,function(e){return n.enqueue({eventType:A,args:e})}),f(e,T,function(e){return n.enqueue({eventType:T,args:e})}),f(e,I,function(e){return n.enqueue({eventType:I,args:e})}),f(e,S,function(e){return n.enqueue({eventType:S,args:e})}),f(e,C,function(e){return n.enqueue({eventType:C,args:e})}),f(e,N,function(e){return n.enqueue({eventType:N,args:e})}),f(e,g,function(e){return n.enqueue({eventType:g,args:e})}),f(e,O,function(e){return n.enqueue({eventType:O,args:e})}),f(e,_,function(e){return n.enqueue({eventType:_,args:e})}),f(e,v,function(e){e.config="object"===p(t)&&t.options||{},n.enqueue({eventType:v,args:e})}),a=e,b._each(a,function(e,t){y.on(t,e)})):b.logMessage('Analytics adapter for "'.concat(i,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return b.logMessage('Analytics adapter for "'.concat(i,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var r=n(5),a=n.n(r),d=n(4);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=n(8),b=n(0),o=a.a.EVENTS,v=o.AUCTION_INIT,g=o.AUCTION_END,E=o.REQUEST_BIDS,h=o.BID_REQUESTED,T=o.BID_TIMEOUT,m=o.BID_RESPONSE,A=o.NO_BID,I=o.BID_WON,S=o.BID_ADJUSTMENT,C=o.BIDDER_DONE,N=o.SET_TARGETING,O=o.AD_RENDER_FAILED,_=o.ADD_AD_UNITS,w="endpoint",D="bundle"}},[166]);