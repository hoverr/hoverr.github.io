pbjsChunk([129],{463:function(e,t,i){e.exports=i(464)},464:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"spec",function(){return d});var n=i(1),c=i(0),d={code:"optimera",isBidRequestValid:function(e){return void 0!==e.params&&void 0!==e.params.clientID},buildRequests:function(e){var t=window.location.host,i=window.location.pathname;if(void 0===e[0].params.clientID)return{};var n=e[0].params.clientID;return{method:"GET",url:"".concat("https://dyv1bugovvq1g.cloudfront.net/"+n,"/").concat(t).concat(i,".js"),payload:e}},interpretResponse:function(e,t){var i=t.payload,n=[],d="";if(void 0!==e.body)for(var o=e.body,a=0;a<i.length;a+=1)if(void 0!==i[a].params.clientID){if(i[a].adUnitCode in o)d=Object(c.deepAccess)(o,"device.".concat(i[a].params.device,".").concat(i[a].adUnitCode))||o[i[a].adUnitCode];var r={requestId:i[a].bidId,ad:"<div></div>",cpm:.01,width:0,height:0,dealId:d,ttl:300,creativeId:"1",netRevenue:"0",currency:"USD"};n.push(r)}return n}};Object(n.registerBidder)(d)}},[463]);