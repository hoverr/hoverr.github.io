pbjsChunk([200],{257:function(e,t,s){e.exports=s(258)},258:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s.d(t,"spec",function(){return n});var a=s(1),d=s(2),p=s(0);function r(e){if(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency)switch(e.mediaType){case d.b:return Boolean(e.width&&e.height&&e.ad);case d.d:return Boolean(e.vastUrl);case d.c:return Boolean(e.native);default:return}}var n={code:"colossusssp",supportedMediaTypes:[d.b,d.d,d.c],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&!isNaN(e.params.placement_id))},buildRequests:function(e,t){var s,a=window;try{s=new URL(t.refererInfo.referer),a=window.top}catch(e){s=a.location,p.logMessage(e)}var r=[],n={deviceWidth:a.screen.width,deviceHeight:a.screen.height,language:navigator&&navigator.language?navigator.language:"",secure:"https:"===s.protocol?1:0,host:s.host,page:s.pathname,placements:r};t&&t.uspConsent&&(n.ccpa=t.uspConsent);for(var o=0;o<e.length;o++){var c=e[o],i=c.params.traffic||d.b,u={placementId:c.params.placement_id,bidId:c.bidId,sizes:c.mediaTypes[i].sizes,traffic:i};c.schain&&(u.schain=c.schain),r.push(u)}return{method:"POST",url:"https://colossusssp.com/?c=o&m=multi",data:n}},interpretResponse:function(e){var t=[];try{e=e.body;for(var s=0;s<e.length;s++){var a=e[s];r(a)&&t.push(a)}}catch(e){p.logMessage(e)}return t},getUserSyncs:function(){return[{type:"image",url:"https://colossusssp.com/?c=o&m=cookie"}]}};Object(a.registerBidder)(n)}},[257]);