pbjsChunk([257],{154:function(e,t,i){e.exports=i(155)},155:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"spec",function(){return a});var r=i(0),s=i(1),n=i(2),a={code:"adlive",supportedMediaTypes:[n.b],isBidRequestValid:function(e){return!(!e.params.hashes||!r.isArray(e.params.hashes))},buildRequests:function(e){var t=[];return r._each(e,function(e){t.push({method:"POST",url:"https://api.publishers.adlive.io/get?pbjs=1",options:{contentType:"application/json",withCredentials:!0},data:JSON.stringify({transaction_id:e.bidId,hashes:r.getBidIdParameter("hashes",e.params)}),bidId:e.bidId})}),t},interpretResponse:function(e,t){try{var i=e.body,s=[];return r._each(i,function(e){e.is_passback||s.push({requestId:t.bidId,cpm:e.price,width:e.size[0],height:e.size[1],creativeId:e.hash,currency:"USD",netRevenue:!1,ttl:360,ad:e.content})}),s}catch(e){return r.logError(e),[]}}};Object(s.registerBidder)(a)}},[154]);