pbjsChunk([244],{154:function(e,a,t){e.exports=t(155)},155:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"spec",function(){return i});var n=t(1),g=t(2),l=t(0);function r(e){if(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency)switch(e.mediaType){case g.b:return Boolean(e.width&&e.height&&e.ad);case g.d:return Boolean(e.vastUrl);case g.c:return Boolean(e.native&&e.native.title&&e.native.image&&e.native.impressionTrackers);default:return}}var i={code:"adman",supportedMediaTypes:[g.b,g.d,g.c],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&!isNaN(e.params.placementId))},buildRequests:function(e,a){var t,n=0<arguments.length&&void 0!==e?e:[],r=1<arguments.length?a:void 0,i=window;try{t=new URL(r.refererInfo.referer),i=window.top}catch(e){t=i.location,l.logMessage(e)}var s=[],d={deviceWidth:i.screen.width,deviceHeight:i.screen.height,language:navigator&&navigator.language?navigator.language:"",secure:1,host:t.host,page:t.pathname,placements:s};-1!=d.language.indexOf("-")&&(d.language=d.language.split("-")[0]),r&&(r.uspConsent&&(d.ccpa=r.uspConsent),r.gdprConsent&&(d.gdpr=r.gdprConsent));for(var c=n.length,o=0;o<c;o++){var u=n[o],p=u.params.traffic||g.b;s.push({placementId:u.params.placementId,bidId:u.bidId,sizes:u.mediaTypes&&u.mediaTypes[p]&&u.mediaTypes[p].sizes?u.mediaTypes[p].sizes:[],traffic:p}),u.schain&&(s.schain=u.schain)}return{method:"POST",url:"https://pub.admanmedia.com/?c=o&m=multi",data:d}},interpretResponse:function(e){var a=[];e=e.body;for(var t=0;t<e.length;t++){var n=e[t];r(n)&&a.push(n)}return a},getUserSyncs:function(){return[{type:"image",url:"https://pub.admanmedia.com/?c=o&m=sync"}]}};Object(n.registerBidder)(i)}},[154]);