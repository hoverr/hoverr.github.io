pbjsChunk([201],{255:function(e,t,r){e.exports=r(256)},256:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return i});var s=r(1),o=r(2),d=r(0),i={code:"collectcent",supportedMediaTypes:[o.b,o.d,o.c],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&!isNaN(e.params.placementId)&&-1!==i.supportedMediaTypes.indexOf(e.params.traffic))},buildRequests:function(e,t){var r;try{r=window.top}catch(e){d.logMessage(e),r=window}for(var s=[],o=t?new URL(t.refererInfo.referer):r.location,i={secure:"https:"===o.protocol?1:0,deviceWidth:r.screen.width,deviceHeight:r.screen.height,host:o.host,page:o.pathname,placements:s},n=0;n<e.length;n++){var c=e[n],a=c.params;s.push({placementId:a.placementId,bidId:c.bidId,sizes:c.sizes,traffic:a.traffic})}return{method:"POST",url:"https://publishers.motionspots.com/?c=o&m=multi",data:i}},interpretResponse:function(e){try{e=e.body}catch(e){d.logMessage(e)}return e},getUserSyncs:function(){return[{type:"image",url:"https://publishers.motionspots.com/?c=o&m=cookie"}]}};Object(s.registerBidder)(i)}},[255]);