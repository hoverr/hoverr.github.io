atdpbjsChunk([222],{241:function(e,t,s){e.exports=s(242)},242:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s.d(t,"spec",function(){return i});var r=s(1),n=s(2),b=s(0),f="BKSHBID-005",d="bucksense",i={code:d,supportedMediaTypes:[n.b],isBidRequestValid:function(e){return b.logInfo(f+" isBidRequestValid() - INPUT bid:",e),e.bidder===d&&void 0!==e.params&&void 0!==e.params.placementId},buildRequests:function(e,t){b.logInfo(f+" buildRequests() - INPUT validBidRequests:",e,"INPUT bidderRequest:",t);for(var s=[],r=e.length,n=0;n<r;n++){var d=e[n],i={};for(var o in d.params)d.params.hasOwnProperty(o)&&(i[o]=encodeURI(d.params[o]));delete d.params;var a=d.sizes;delete d.sizes;var p={pub_id:location.host,pl_id:""+i.placementId,secure:"https:"===location.protocol?1:0,href:encodeURI(location.href),bid_id:d.bidId,params:i,sizes:a,_bid:t};s.push({method:"POST",url:"https://prebid.bksn.se/prebidjs/",data:p})}return b.logInfo(f+" buildRequests() - requests:",s),s},interpretResponse:function(e,t){b.logInfo(f+" interpretResponse() - INPUT serverResponse:",e,"INPUT request:",t);var s=[];if(e.body){var r=e.body,n=r.requestId||"",d=r.cpm||0,i=r.width||0,o=r.height||0,a=r.ttl||0,p=r.creativeId||0,u=r.currency||"USD",l=r.netRevenue||!0,c=r.ad||"";t&&0==n.length&&(b.logInfo(f+" interpretResponse() - use RequestID from Placments"),n=t.data.bid_id||""),t&&t.data.params.hasOwnProperty("testcpm")&&(b.logInfo(f+" interpretResponse() - use Test CPM "),d=t.data.params.testcpm);var I={requestId:n,cpm:d,width:i,height:o,ttl:a,creativeId:p,currency:u,netRevenue:l,ad:c};s.push(I)}else b.logInfo(f+" interpretResponse() - serverResponse not valid");return b.logInfo(f+" interpretResponse() - return",s),s}};Object(r.registerBidder)(i)}},[241]);