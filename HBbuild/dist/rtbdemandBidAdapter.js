atdpbjsChunk([104],{530:function(e,t,r){e.exports=r(531)},531:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return n});var o=r(0),i=r(1),a="bidding.rtbdemand.com",n={code:"rtbdemand",isBidRequestValid:function(e){return!!(e&&e.params&&e.params.zoneid)},buildRequests:function(e,n){return e.map(function(e){var t=e.params.server||a,r=function(e){var t={},r=o.parseSizesInput(e)[0];if("string"!=typeof r)return t;var i=r.toUpperCase().split("X"),n=parseInt(i[0],10);n&&(t.width=n);var a=parseInt(i[1],10);a&&(t.height=a);return t}(n.bids[0].sizes),i={from:"hb",v:"1.0",request_id:e.bidderRequestId,imp_id:e.bidId,aff:e.params.zoneid,bid_floor:0<parseFloat(e.params.floor)?e.params.floor:0,charset:document.charSet||document.characterSet,site_domain:document.location.hostname,site_page:window.location.href,subid:"hb",flashver:function(){var e,t,r;if(navigator.plugins&&0<navigator.plugins.length){e=navigator.plugins;for(var i=0;i<e.length&&!r;i++)-1<(t=e[i]).name.indexOf("Shockwave Flash")&&(r=t.description.split("Shockwave Flash ")[1])}return r||""}(),tmax:n.timeout,hb:"1",name:document.location.hostname,width:r.width,height:r.height,device_width:screen.width,device_height:screen.height,dnt:"yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,secure:"https:"===document.location.protocol,make:navigator.vendor?navigator.vendor:""};return document.referrer&&(i.referrer=document.referrer),{method:"GET",url:"https://"+t+"/hb",data:i}})},interpretResponse:function(e){e=e.body;var r=[];return e&&e.seatbid&&e.seatbid.forEach(function(e){return e.bid.forEach(function(e){var t={requestId:e.impid,creativeId:e.impid,cpm:e.price,width:e.w,height:e.h,ad:e.adm,netRevenue:!0,currency:"USD",ttl:360};r.push(t)})}),r},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"https://"+a+"/delivery/matches.php?type=iframe"}]}};Object(i.registerBidder)(n)}},[530]);