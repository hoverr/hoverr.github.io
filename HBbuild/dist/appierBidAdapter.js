pbjsChunk([239],{203:function(e,r,t){e.exports=t(204)},204:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"ADAPTER_VERSION",function(){return a}),t.d(r,"API_SERVERS_MAP",function(){return d}),t.d(r,"spec",function(){return o});var n=t(1),i=t(2),p=t(3),a="1.0.0",u=[i.b],d={default:"ad2.apx.appier.net",tw:"ad2.apx.appier.net",jp:"ad-jp.apx.appier.net"},o={code:"appier",supportedMediaTypes:u,isBidRequestValid:function(e){return"string"==typeof e.params.hzid},buildRequests:function(e,r){if(0===e.length)return[];var t=this.getApiServer();return[{method:"POST",url:"//".concat(t).concat("/v1/prebid/bid"),data:{bids:e,refererInfo:r.refererInfo,version:a},bidderRequest:r}]},interpretResponse:function(e){return Array.isArray(e.body)?e.body:[]},getApiServer:function(){var e=p.b.getConfig("appier.server");if(!e){var r=p.b.getConfig("appier.farm");e=d[r]||d.default}return e}};Object(n.registerBidder)(o)}},[203]);