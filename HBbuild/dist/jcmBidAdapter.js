pbjsChunk([165],{378:function(e,t,r){e.exports=r(379)},379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return n});var a=r(0),i=r(1),n={code:"jcm",aliases:["jcarter"],isBidRequestValid:function(e){return!!(e.params&&e.params.siteId&&e.bidId)},buildRequests:function(e){for(var t={bids:[]},r=0;r<e.length;r++){for(var i="",s=e[r],d=0;d<s.sizes.length;d++)i+=a.parseGPTSingleSizeArray(s.sizes[d]),d!==s.sizes.length-1&&(i+=",");t.bids.push({callbackId:s.bidId,siteId:s.params.siteId,adSizes:i})}var n=JSON.stringify(t);return{method:"GET",url:"https://media.adfrontiers.com/pq",data:"t=hb&ver=1.0&compact=true&bids="+encodeURIComponent(n)}},interpretResponse:function(e){var t=[];if((e=e.body)&&e.bids)for(var r=e.bids,i=0;i<r.length;i++){var s=r[i],d={requestId:s.callbackId,bidderCode:n.code,cpm:s.cpm,width:s.width,height:s.height,creativeId:s.creativeId,currency:"USD",netRevenue:s.netRevenue,ttl:s.ttl,ad:decodeURIComponent(s.ad.replace(/\+/g,"%20"))};t.push(d)}return t},getUserSyncs:function(e){return e.iframeEnabled?[{type:"iframe",url:"https://media.adfrontiers.com/hb/jcm_usersync.html"}]:e.image?[{type:"image",url:"https://media.adfrontiers.com/hb/jcm_usersync.png"}]:void 0}};Object(i.registerBidder)(n)}},[378]);