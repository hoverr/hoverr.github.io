atdpbjsChunk([48],{663:function(e,i,n){e.exports=n(664)},664:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),n.d(i,"spec",function(){return a});var d=n(1),r=n(2),t=n(4),a={code:"vrtcal",supportedMediaTypes:[r.b],isBidRequestValid:function(e){return""!=e.bidId&&""!=e.auctionId},buildRequests:function(e){return e.map(function(e){var i={prebidJS:1,prebidAdUnitCode:e.adUnitCode,id:e.bidId,imp:[{id:"1",banner:{},bidfloor:.75}],site:{id:"VRTCAL_FILLED",name:"VRTCAL_FILLED",cat:["VRTCAL_FILLED"],domain:decodeURIComponent(window.location.href).replace("https://","").replace("http://","").split("/")[0]},device:{ua:"VRTCAL_FILLED",ip:"VRTCAL_FILLED"}};return void 0!==e.mediaTypes&&void 0!==e.mediaTypes.banner&&void 0!==e.mediaTypes.banner.sizes?(i.imp[0].banner.w=e.mediaTypes.banner.sizes[0][0],i.imp[0].banner.h=e.mediaTypes.banner.sizes[0][1]):(i.imp[0].banner.w=e.sizes[0][0],i.imp[0].banner.h=e.sizes[0][1]),{method:"POST",url:"https://rtb.vrtcal.com/bidder_prebid.vap?ssp=1804",data:JSON.stringify(i),options:{withCredentials:!1,crossOrigin:!0}}})},interpretResponse:function(e){if(!e||!e.body)return[];var i=[],n=e.body;if(n){var d={requestId:n.id,cpm:n.seatbid[0].bid[0].price,width:n.seatbid[0].bid[0].w,height:n.seatbid[0].bid[0].h,creativeId:n.seatbid[0].bid[0].crid,currency:"USD",netRevenue:!0,ttl:900,ad:n.seatbid[0].bid[0].adm,nurl:n.seatbid[0].bid[0].nurl};i.push(d)}return i},onBidWon:function(e){if(!e.nurl)return!1;var i=e.nurl.replace(/\$\{AUCTION_PRICE\}/,e.cpm);return Object(t.a)(i,null),!0}};Object(d.registerBidder)(a)}},[663]);