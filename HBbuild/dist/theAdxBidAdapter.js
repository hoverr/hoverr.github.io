atdpbjsChunk([73],{608:function(e,i,t){e.exports=t(609)},609:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),t.d(i,"spec",function(){return n});var k=t(0),x=t(2),a=t(1),r=t(9),I="theadx",T={0:"title",1:"cta",2:"icon",3:"image",4:"body",5:"sponsoredBy",6:"body2",7:"phone",8:"privacyLink",9:"displayurl",10:"rating",11:"address",12:"downloads",13:"likes",14:"price",15:"saleprice"},w={title:{id:0,name:"title"},body:{id:4,name:"data",type:2},body2:{id:6,name:"data",type:10},privacyLink:{id:8,name:"data",type:501},sponsoredBy:{id:5,name:"data",type:1},image:{id:3,type:3,name:"img"},icon:{id:2,type:1,name:"img"},displayurl:{id:9,name:"data",type:11},cta:{id:1,type:12,name:"data"},rating:{id:7,name:"data",type:3},address:{id:11,name:"data",type:5},downloads:{id:12,name:"data",type:5},likes:{id:13,name:"data",type:4},phone:{id:7,name:"data",type:8},price:{id:14,name:"data",type:6},saleprice:{id:15,name:"data",type:7}},n={code:I,aliases:["theadx"],supportedMediaTypes:[x.b,x.d,x.c],isBidRequestValid:function(e){k.logInfo("theadx.isBidRequestValid",e);var i=!1;return e&&e.params&&(i=!(!e.params.pid||!e.params.tagId)),i},buildRequests:function(e,i){k.logInfo("theadx.buildRequests","validBidRequests",e,"bidderRequest",i);var t=[],a="POST";return k.isEmpty(e)||(t=e.map(function(e){return{method:a,type:a,url:"".concat("https://ssp.theadx.com/request","?tagid=").concat(e.params.tagId),options:{withCredentials:!0},bidder:"theadx",referrer:encodeURIComponent(i.refererInfo.referer),data:o(e,i),mediaTypes:e.mediaTypes,requestId:i.bidderRequestId,bidId:e.bidId,adUnitCode:e.adUnitCode,auctionId:e.auctionId}})),t},interpretResponse:function(e,i){k.logInfo("theadx.interpretResponse","serverResponse",e," request",i);var t=[];if(e.body){var a=e.body,n=a.seatbid;if(!k.isEmpty(n)&&!k.isEmpty(n[0].bid)){var r=n[0].bid[0],d=function(e){return void 0===e?null:parseInt(e)},s=null;r.ext&&(s=d(r.ext.ttl)?d(r.ext.ttl):2e3);var o=d(r.w),p=d(r.h),c=null,u=null,l=null,m=null;if(i.mediaTypes&&i.mediaTypes.video)u=r.ext.vast_url,l=x.d;else if(i.mediaTypes&&i.mediaTypes.banner)l=x.b,c=r.adm;else if(i.mediaTypes&&i.mediaTypes.native){l=x.c;var v=r.ext.native,y=v.assets,f=v.link,h=v.imptrackers,g=v.jstracker;m={clickUrl:f.url,clickTrackers:f.clicktrackers||r.ext.cliu?[]:void 0,impressionTrackers:h||r.nurl?[]:void 0,javascriptTrackers:g?[g]:void 0},r.nurl&&(m.impressionTrackers.unshift(r.ext.impu),m.impressionTrackers.unshift(r.nurl),m.clickTrackers&&m.clickTrackers.unshift(r.ext.cliu)),y.forEach(function(e){var i=T[e.id],t=i&&e[w[i].name];t&&(m[i]=t.text||t.value||{url:t.url,width:t.w,height:t.h})})}var b={bidderCode:I,requestId:i.bidId,cpm:r.price,width:0|o,height:0|p,ad:c,ttl:s||3e3,creativeId:r.crid,netRevenue:!0,currency:a.cur,mediaType:l,native:m};l==x.d&&u&&(b.vastUrl=u,b.videoCacheKey=r.ext.rid),t.push(b)}}return t},getUserSyncs:function(a,e){k.logInfo("theadx.getUserSyncs","syncOptions",a,"serverResponses",e);var n=[];return(a.iframeEnabled||a.pixelEnabled)&&e.forEach(function(e){var i=k.deepAccess(e,"body.ext.sync.iframe"),t=k.deepAccess(e,"body.ext.sync.image");a.iframeEnabled&&i&&i.forEach(function(e){n.push({type:"iframe",url:e})}),a.pixelEnabled&&t&&t.forEach(function(e){n.push({type:"image",url:e})})}),n}};function d(){var e={js:1,language:"language"in navigator?navigator.language:null,ua:"userAgent"in navigator?navigator.userAgent:null,devicetype:/(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)?1:/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)?3:2,dnt:k.getDNT()?1:0},i=navigator.connection||navigator.webkitConnection;return i&&i.type&&(e.connectiontype=i.type,i.downlinkMax&&(e.connectionDownlinkMax=i.downlinkMax)),e}function p(e){var i=null,t=null,a=[],n=e.mediaTypes;n&&(n.banner&&n.banner.sizes||n.video&&n.video.sizes)?a=n.banner?n.banner.sizes:n.video.sizes:k.isEmpty(e.sizes)||(a=e.sizes);var r=k.parseSizesInput(a);if(!k.isEmpty(r)&&null!=r[0]){var d=r[0].split("x");i=parseInt(d[0]),t=parseInt(d[1])}return{w:i,h:t}}function s(e){var i,t,a,n=e.mediaTypes,r=null,d=null,s=null;n&&n.video?d={w:(a=p(e)).w,h:a.h}:n&&n.banner?r={w:(t=p(e)).w,h:t.h}:n&&n.native&&(i=e,s={request:{assets:k._map(i.mediaTypes.native,function(e,i){var t=w[i],a={required:1&e.required};if(t)return a.id=t.id,a[t.name]={len:e.len,wmin:e.sizes&&e.sizes[0],hmin:e.sizes&&e.sizes[1],type:t.type},a}).filter(Boolean)}});var o={id:e.index,tagid:e.params.tagId+""};return r&&(o.banner=r),d&&(o.video=d),s&&(o.native=s),o}var o=function(e,i){var t={id:e.bidId,site:function(e,i){var t=Object(r.c)(i.refererInfo.referer,{decodeSearchAsString:!0}),a={domain:t.hostname,page:t.href,id:e.params.wid,publisher:{id:e.params.pid}};if(t.search&&(a.search=t.search),document){var n=document.getElementsByTagName("meta").keywords;n&&n.content&&(a.keywords=n.content)}return a}(e,i),device:d(),imp:[s(e)]};return JSON.stringify(t)};Object(a.registerBidder)(n)}},[608]);