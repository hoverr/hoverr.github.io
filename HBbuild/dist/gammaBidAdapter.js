pbjsChunk([180],{341:function(e,t,r){e.exports=r(342)},342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return d});var i=r(1);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var d={code:"gamma",aliases:["gamma"],supportedMediaTypes:["banner","video"],isBidRequestValid:function(e){return!(!e.params.siteId&&!e.params.zoneId)},buildRequests:function(e,t){for(var r=[],i=t&&t.refererInfo&&t.refererInfo.referer||"",a=0,d=e.length;a<d;a++){var n=e[a];r.push({method:"GET",url:"https://hb.gammaplatform.com/adx/request?wid="+n.params.siteId+"&zid="+n.params.zoneId+"&hb=pbjs&bidid="+n.bidId+"&urf="+encodeURIComponent(i)})}return r},interpretResponse:function(e){var t=[];if((e=e.body).id){var r=function(e){var t={ad:e.seatbid[0].bid[0].adm,cpm:e.seatbid[0].bid[0].price,creativeId:e.seatbid[0].bid[0].adid,currency:e.cur,dealId:e.seatbid[0].bid[0].dealid,width:e.seatbid[0].bid[0].w,height:e.seatbid[0].bid[0].h,mediaType:e.type,netRevenue:!0,requestId:e.id,ttl:e.seatbid[0].bid[0].ttl||300};"video"==e.type&&a(t,{vastXml:e.seatbid[0].bid[0].vastXml,vastUrl:e.seatbid[0].bid[0].vastUrl,ttl:3600});return t}(e);t.push(r)}return t},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"https://cm-supply-web.gammaplatform.com/adx/usersync"}]}};Object(i.registerBidder)(d)}},[341]);