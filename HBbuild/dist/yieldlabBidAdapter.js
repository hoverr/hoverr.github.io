pbjsChunk([41],{643:function(e,t,a){e.exports=a(644)},644:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"spec",function(){return r});var h=a(0),n=a(1),d=a(12),f=a.n(d),y=a(2),g=a(10),w="https://ad.yieldlab.net",r={code:"yieldlab",supportedMediaTypes:[y.d,y.b],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.adslotId&&e.params.supplyId)},buildRequests:function(e,t){var a=[],n={ts:Date.now(),json:!0};h._each(e,function(e){a.push(e.params.adslotId),e.params.targeting&&(n.t=i(e.params.targeting))}),t&&t.gdprConsent&&(n.gdpr="boolean"!=typeof t.gdprConsent.gdprApplies||t.gdprConsent.gdprApplies,n.gdpr&&(n.consent=t.gdprConsent.consentString));var d=a.join(","),r=i(n);return{method:"GET",url:"".concat(w,"/yp/").concat(d,"?").concat(r),validBidRequests:e}},interpretResponse:function(l,e){var m=[],v=Date.now();return e.validBidRequests.forEach(function(t){if(l.body){var e,a,n,d,r=f()(l.body,function(e){return t.params.adslotId==e.id});if(r){var i=2!==t.sizes.length||h.isArray(t.sizes[0])?t.sizes[0]:t.sizes,s=void 0!==t.params.adSize?t.params.adSize.split("x").map(Number):i,o=void 0!==t.params.extId?"&id="+t.params.extId:"",c={requestId:t.bidId,cpm:r.price/100,width:s[0],height:s[1],creativeId:""+r.id,dealId:r["c.dealid"]?r["c.dealid"]:r.pid,currency:"EUR",netRevenue:!1,ttl:300,referrer:"",ad:'<script src="'.concat(w,"/d/").concat(r.id,"/").concat(t.params.supplyId,"/").concat(s[0],"x").concat(s[1],"?ts=").concat(v).concat(o,'"><\/script>')};if(d=t,h.deepAccess(d,"mediaTypes.video")){var p=(a=t,(n=h.deepAccess(a,"mediaTypes.video.playerSize"))&&h.isArray(n[0])?n[0]:n);if(p&&(c.width=p[0],c.height=p[1]),c.mediaType=y.d,c.vastUrl="".concat(w,"/d/").concat(r.id,"/").concat(t.params.supplyId,"/").concat(s[0],"x").concat(s[1],"?ts=").concat(v).concat(o),e=t,"outstream"===h.deepAccess(e,"mediaTypes.video.context")){var u=g.a.install({id:t.bidId,url:"https://ad2.movad.net/dynamic.ad?a=o193092&ma_loadEvent=ma-start-event",loaded:!1});u.setRender(I),c.renderer=u}}m.push(c)}}}),m}};function i(e){var t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")}function I(e){e.renderer.push(function(){window.ma_width=e.width,window.ma_height=e.height,window.ma_vastUrl=e.vastUrl,window.ma_container=e.adUnitCode,window.document.dispatchEvent(new Event("ma-start-event"))})}Object(n.registerBidder)(r)}},[643]);