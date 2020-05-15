atdpbjsChunk([14],{528:function(e,t,n){e.exports=n(529)},529:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),a=n(5),r=n.n(a),o=n(7),s=n(11),u=n.n(s),c=n(4);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var p=n(0),f=Object(c.b)(0),l="pa.rxthdr.com/v3",v=r.a.EVENTS,g=v.AUCTION_INIT,T=v.AUCTION_END,h=v.BID_REQUESTED,m=v.BID_ADJUSTMENT,y=v.BIDDER_DONE,b=v.BID_WON,I={RUNNING:"running",FINISHED:"finished"},E={REQUESTED:"requested",BID:"bid",NO_BID:"noBid",TIMEOUT:"timeout"},D={AUCTION:"a",IMPRESSION:"i",BID_AFTER_TIMEOUT:"bat"},N={},U="roxot_analytics_",_=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],S="utm_ttl",A="is_new_flag",O=36e5,w={},C=36e5,B=[],R=null,k=1e3;function q(){p.setDataInLocalStorage(M(S),Date.now())}function M(e){return U.concat(e)}function F(e){return!N.adUnits.length||u()(N.adUnits,e)}function j(e){return e.adUnitCode.toLowerCase()}function L(e){return e.bidder.toLowerCase()}function P(e,t){return{isNew:(n=M(A),i=Number(p.getDataFromLocalStorage(n)),p.setDataInLocalStorage(n,Date.now()),Date.now()-i>O?1:0),auction:p.deepClone(e),adUnit:j(t),bidder:L(t),cpm:t.cpm,size:{width:t.width,height:t.height},mediaType:t.mediaType,source:t.source||"client"};var n,i}function x(e){var t;w[e.auctionId]={id:(t=e).auctionId,start:t.timestamp,timeout:t.timeout,adUnits:{}},function(){for(var e in w){var t=w[e];Date.now()-t.start>C&&delete w[e]}}()}function z(e){var s=w[e.auctionId];e.bids.forEach(function(e){var t=j(e),n=L(e);if(F(t)){var i;s.adUnits[t]=s.adUnits[t]||(i=s,{adUnit:j(e),start:i.start,timeout:i.timeout,finish:0,status:I.RUNNING,bidders:{}});var a,r,o=s.adUnits[t];o.bidders[n]=o.bidders[n]||(a=s,{bidder:L(r=e),isAfterTimeout:a.status===I.FINISHED?1:0,start:r.startTime||Date.now(),finish:0,status:E.REQUESTED,cpm:-1,size:{width:0,height:0},mediaType:"-",source:r.source||"client"})}})}function Q(e){var t=j(e),n=L(e);if(F(t)){var i=w[e.auctionId].adUnits[t];if(i.status!==I.FINISHED){var a=i.bidders[n];a.cpm<e.cpm&&(a.cpm=e.cpm,a.finish=e.responseTimestamp,a.status=0===e.cpm?E.NO_BID:E.BID,a.size.width=e.width||0,a.size.height=e.height||0,a.mediaType=e.mediaType||"-",a.source=e.source||"client")}else!function(e,t){var n=L(t),i=e.bidders[n],a=function(e,t){return{auction:p.deepClone(e),adUnit:j(t),bidder:L(t),cpm:t.cpm,size:{width:t.width||0,height:t.height||0},mediaType:t.mediaType||"-",start:t.requestTimestamp,finish:t.responseTimestamp}}(e,t);a.cpm>i.cpm&&(i.cpm=a.cpm,i.isAfterTimeout=1,i.finish=a.finish,i.size=a.size,i.mediaType=a.mediaType,i.status=0===a.cpm?E.NO_BID:E.BID);H(D.BID_AFTER_TIMEOUT,"Bid After Timeout",a)}(i,e)}}var G=d(Object(i.a)({url:l,analyticsType:"endpoint"}),{track:function(e){var t,n,r,i=e.eventType,a=e.args;switch(i){case g:x(a);break;case h:z(a);break;case m:Q(a);break;case y:r=w[(n=a).auctionId],n.bids.forEach(function(e){var t=j(e),n=L(e);if(F(t)){var i=r.adUnits[t];if(i.status!==I.FINISHED){var a=i.bidders[n];a.status===E.REQUESTED&&(a.finish=Date.now(),a.status=E.NO_BID,a.cpm=0)}}});break;case T:!function(e){var t=w[e.auctionId];Object.keys(t.adUnits).length||delete w[e.auctionId];var n=Date.now();for(var i in t.finish=n,t.adUnits){var a=t.adUnits[i];for(var r in a.finish=n,a.status=I.FINISHED,a.bidders){var o=a.bidders[r];o.status===E.REQUESTED&&(o.status=E.TIMEOUT)}}H(D.AUCTION,"Auction",t)}(a);break;case b:!function(e){var t=j(e);if(F(t)){var n=P(w[e.auctionId].adUnits[t],e);H(D.IMPRESSION,"Bid won",n)}}(a);break;default:H(t=i,t,a)}}});function H(e,t,n){var i={eventType:e,eventName:t,data:n};B.push(i),K("Register event",i),(void 0===N.serverConfig?V:J)()}function J(){if(R&&(clearTimeout(R),R=null),void 0!==N.serverConfig)for(;B.length;){var e=B.shift(),t=N.serverConfig[e.eventType]||0;0!==Number(t)?W(e.eventType,e.eventName,e.data):K("Skip event "+e.eventName,e)}else V()}function V(){R=R||setTimeout(J,k)}function W(e,t,n){var i="https://"+N.server+"/"+e+"?publisherId="+N.publisherId+"&host="+N.host,a={event:e,eventName:t,options:N,data:n};f(i,function(){K(t+" sent",a)},JSON.stringify(a),{contentType:"text/plain",method:"POST",withCredentials:!0})}function K(e,t){p.logInfo(X(e),t)}function X(e){return"Roxot Prebid Analytics: "+e}G.originEnableAnalytics=G.enableAnalytics,G.enableAnalytics=function(e){this.initConfig(e)&&(K("Analytics adapter enabled",N),G.originEnableAnalytics(e))},G.buildUtmTagData=function(){var n={},i=!1;return _.forEach(function(e){var t=p.getParameterByName(e);""!==t&&(i=!0),n[e]=t}),_.forEach(function(e){var t;i?(p.setDataInLocalStorage(M(e),n[e]),q()):(t=p.getDataFromLocalStorage(M(S)),36e5<Date.now()-t||(n[e]=p.getDataFromLocalStorage(M(e))?p.getDataFromLocalStorage(M(e)):"",q()))}),n},G.initConfig=function(e){var t,n,i=!0;return(N={}).options=p.deepClone(e.options),N.publisherId=N.options.publisherId||N.options.publisherIds[0]||null,N.publisherId||(t='"options.publisherId" is empty',p.logError(X(t)),i=!1),N.adUnits=N.options.adUnits||[],N.adUnits=N.adUnits.map(function(e){return e.toLowerCase()}),N.server=N.options.server||l,N.configServer=N.options.configServer||N.options.server||"pa.rxthdr.com/v3",N.utmTagData=this.buildUtmTagData(),N.host=N.options.host||window.location.hostname,N.device=/ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase())?"tablet":/iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(navigator.userAgent.toLowerCase())?"mobile":"desktop",n="https://"+N.configServer+"/c?publisherId="+N.publisherId+"&host="+N.host,f(n,{success:function(e){N.serverConfig=JSON.parse(e)},error:function(){N.serverConfig={},N.serverConfig[D.AUCTION]=1,N.serverConfig[D.IMPRESSION]=1,N.serverConfig[D.BID_AFTER_TIMEOUT]=1,N.serverConfig.isError=1}},null,{contentType:"text/json",method:"GET",withCredentials:!0}),i},G.getOptions=function(){return N},o.default.registerAnalyticsAdapter({adapter:G,code:"roxot"}),t.default=G},6:function(e,t,n){"use strict";t.a=function(e){var a,r=e.url,t=e.analyticsType,o=e.global,i=e.handler,s=[],u=0,n=!0;t!==O&&!w||function(){if(n){for(var e=0;e<s.length;e++)s[e]();s.push=function(e){e()},n=!1}g.logMessage("event count sent to ".concat(o,": ").concat(u))}();return{track:function(e){var t=e.eventType,n=e.args;this.getAdapterType()===w&&window[o](i,t,n);this.getAdapterType()===O&&function(e){var t=e.eventType,n=e.args,i=e.callback;Object(p.a)(r,i,JSON.stringify({eventType:t,args:n}))}.apply(void 0,arguments)},enqueue:c,enableAnalytics:d,disableAnalytics:function(){g._each(a,function(e,t){v.off(t,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:d},getAdapterType:function(){return t},getGlobal:function(){return o},getHandler:function(){return i},getUrl:function(){return r}};function c(e){var t=e.eventType,n=e.args,i=this;o&&window[o]&&t&&n?this.track({eventType:t,args:n}):s.push(function(){u++,i.track({eventType:t,args:n})})}function d(t){var e,n=this,i=this;"object"!==l(t)||"object"!==l(t.options)||(void 0===t.options.sampling||Math.random()<parseFloat(t.options.sampling))?(v.getEvents().forEach(function(e){if(e){var t=e.eventType,n=e.args;t!==b&&c.call(i,{eventType:t,args:n})}}),f(e={},m,function(e){return n.enqueue({eventType:m,args:e})}),f(e,y,function(e){return n.enqueue({eventType:y,args:e})}),f(e,I,function(e){return n.enqueue({eventType:I,args:e})}),f(e,E,function(e){return n.enqueue({eventType:E,args:e})}),f(e,b,function(e){return n.enqueue({eventType:b,args:e})}),f(e,D,function(e){return n.enqueue({eventType:D,args:e})}),f(e,N,function(e){return n.enqueue({eventType:N,args:e})}),f(e,U,function(e){return n.enqueue({eventType:U,args:e})}),f(e,_,function(e){return n.enqueue({eventType:_,args:e})}),f(e,h,function(e){return n.enqueue({eventType:h,args:e})}),f(e,S,function(e){return n.enqueue({eventType:S,args:e})}),f(e,A,function(e){return n.enqueue({eventType:A,args:e})}),f(e,T,function(e){e.config="object"===l(t)&&t.options||{},n.enqueue({eventType:T,args:e})}),a=e,g._each(a,function(e,t){v.on(t,e)})):g.logMessage('Analytics adapter for "'.concat(o,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return g.logMessage('Analytics adapter for "'.concat(o,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var i=n(5),a=n.n(i),p=n(4);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var v=n(8),g=n(0),r=a.a.EVENTS,T=r.AUCTION_INIT,h=r.AUCTION_END,m=r.REQUEST_BIDS,y=r.BID_REQUESTED,b=r.BID_TIMEOUT,I=r.BID_RESPONSE,E=r.NO_BID,D=r.BID_WON,N=r.BID_ADJUSTMENT,U=r.BIDDER_DONE,_=r.SET_TARGETING,S=r.AD_RENDER_FAILED,A=r.ADD_AD_UNITS,O="endpoint",w="bundle"}},[528]);