atdpbjsChunk([187],{325:function(e,t,n){e.exports=n(326)},326:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return i});var a=n(1),l=n(2),g=n(0);function r(e){if(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency)switch(e.mediaType){case l.b:return Boolean(e.width&&e.height&&e.ad);case l.d:return Boolean(e.vastUrl);case l.c:return Boolean(e.native&&e.native.title&&e.native.image&&e.native.impressionTrackers);default:return}}var i={code:"e_volution",supportedMediaTypes:[l.b,l.d,l.c],noSync:!0,isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&!isNaN(parseInt(e.params.placementId)))},buildRequests:function(e,t){var n,a=0<arguments.length&&void 0!==e?e:[],r=1<arguments.length?t:void 0,i=window;try{n=new URL(r.refererInfo.referer),i=window.top}catch(e){n=i.location,g.logMessage(e)}var s=[],o={deviceWidth:i.screen.width,deviceHeight:i.screen.height,language:navigator&&navigator.language?navigator.language.split("-")[0]:"",secure:1,host:n.host,page:n.pathname,placements:s};r&&(r.uspConsent&&(o.ccpa=r.uspConsent),r.gdprConsent&&(o.gdpr=r.gdprConsent));for(var d=a.length,c=0;c<d;c++){var u=a[c],p=u.params.traffic||l.b;s.push({placementId:u.params.placementId,bidId:u.bidId,sizes:u.mediaTypes&&u.mediaTypes[p]&&u.mediaTypes[p].sizes?u.mediaTypes[p].sizes:[],traffic:p}),u.schain&&(s.schain=u.schain)}return{method:"POST",url:"https://service.e-volution.ai/?c=o&m=multi",data:o}},interpretResponse:function(e){for(var t=[],n=0;n<e.body.length;n++){var a=e.body[n];r(a)&&t.push(a)}return t},getUserSyncs:function(){return!1}};Object(a.registerBidder)(i)}},[325]);