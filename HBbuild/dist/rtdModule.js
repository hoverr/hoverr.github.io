pbjsChunk([101],{536:function(e,t,n){e.exports=n(537)},537:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.attachRealTimeDataProvider=g,t.init=b,t.setTargetsAfterRequestBids=v,t.deepMerge=p,t.requestBidsHook=y;var c=n(18),a=n(3),r=n(35),i=n(13),o=n(0);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s,f="realTimeData",l=1e3,d=[];function g(e){d.push(e)}function b(e){var n=e.getConfig(f,function(e){var t=e.realTimeData;t.dataProviders?(n(),void 0===(s=t).auctionDelay&&(s.auctionDelay=0),0<!s.auctionDelay?Object(i.a)("bidsBackCallback").before(v):Object(c.a)().requestBids.before(y)):o.logError("missing parameters for real time module")})}function h(t,n){var a=d.length,r=[],i=!1,o=setTimeout(function(){i=!0,n(r)},s.auctionDelay||s.timeout||l);function c(e){i||(r.push(e),r.length===a&&(i=!0,clearTimeout(o),n(r)))}d.forEach(function(e){e.getData(t,c)})}function v(n,a){h(a,function(e){if(e&&Object.keys(e).length){var t=p(e);Object.keys(t).length&&O(t)}n(a)})}function p(e){return Array.isArray(e)&&e.length?e.reduce(function(e,t){for(var n in t)if(t.hasOwnProperty(n))if(e.hasOwnProperty(n)){var a=t[n];for(var r in a)a.hasOwnProperty(r)&&(e[n][r]=a[r])}else e[n]=t[n];return e},{}):{}}function y(r,i){var o=this;h(i.adUnits||Object(c.a)().adUnits,function(e){if(e&&Object.keys(e).length){var t=p(e);Object.keys(t).length&&(O(t),n=i.adUnits||Object(c.a)().adUnits,a=t,n.forEach(function(t){t.bids=t.bids.map(function(e){return u(e,{realTimeData:a[t.code]||{}})})}))}var n,a;return r.call(o,i)})}function O(e){o.isGptPubadsDefined()?r.a.setTargetingForGPT(e,null):o.logError("window.googletag is not defined on the page")}b(a.b),Object(i.c)("realTimeData",g)}},[536]);