pbjsChunk([253],{162:function(e,r,t){e.exports=t(163)},163:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return a});var n=t(0),i=t(1),a={code:"admixer",aliases:["go2net"],supportedMediaTypes:["banner","video"],isBidRequestValid:function(e){return!!e.params.zone},buildRequests:function(e,r){var t={imps:[],referrer:encodeURIComponent(r.refererInfo.referer)};e.forEach(function(e){t.imps.push(e)});var n=JSON.stringify(t);return{method:"GET",url:"https://inv-nets.admixer.net/prebid.1.0.aspx",data:"data=".concat(n)}},interpretResponse:function(e){var t=[];try{(e=e.body).forEach(function(e){var r={requestId:e.bidId,cpm:e.cpm,width:e.width,height:e.height,ad:e.ad,ttl:e.ttl,creativeId:e.creativeId,netRevenue:e.netRevenue,currency:e.currency,vastUrl:e.vastUrl};t.push(r)})}catch(e){n.logError(e)}return t}};Object(i.registerBidder)(a)}},[162]);