pbjsChunk([208],{241:function(e,r,n){e.exports=n(242)},242:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"c1xAdapter",function(){return d});var t=n(1),o=n(0),u=n(33);function g(){return(g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var a="C1X: [ERROR] bidder returns an invalid bid",i="C1X: [ERROR] no site id supplied",s="C1X: [INFO] creating a NO bid for Adunit: ",p="C1X: [INFO] creating a bid for Adunit: ",d={code:"c1x",isBidRequestValid:function(e){var r=e.params.siteId||"";return r||o.logError(i),!(!e.adUnitCode||!r)},buildRequests:function(e,r){var n,t,i={},d="",o=e.length,a=(new Date).getTime(),s=e.map(l),p=e.map(f),c=(n=s.reduce(function(e,r){return g(e,r)})).pixelId;return i={adunits:o.toString(),rnd:a.toString(),response:"json",compress:"gzip"},r&&r.gdprConsent&&(i.consent_string=r.gdprConsent.consentString,i.consent_required="boolean"==typeof r.gdprConsent.gdprApplies?r.gdprConsent.gdprApplies.toString():"true"),c&&(d="https://px.c1exchange.com/pubpixel/"+c,i.consent_required&&(d+="&gdpr="+(r.gdprConsent.gdprApplies?1:0),d+="&consent="+encodeURIComponent(r.gdprConsent.consentString||"")),u.a.registerSync("image","c1x",d)),g(i,n),{method:"GET",url:"https://ht.c1exchange.com/ht",data:(t=i,JSON.stringify(t).replace(/":"|","|{"|"}/g,function(e){return'":"'==e?"=":'","'==e?"&":""})),bids:p}},interpretResponse:function(e,t){e=e.body,t=t.bids||[];var i=[],d=!1;if(e&&!e.error)return e.forEach(function(e){if(e.bid){"NET_BID"===e.bidType&&(d=!d);for(var r={width:e.width,height:e.height,cpm:e.cpm,ad:e.ad,creativeId:e.crid,currency:"USD",ttl:300,netRevenue:d},n=0;n<t.length;n++)e.adId===t[n].adUnitCode&&(r.requestId=t[n].bidId);o.logInfo(p+e.adId+" size: "+r.width+"x"+r.height),i.push(r)}else o.logInfo(s+e.adId)}),i;var r=e.error;return o.logError(a+r),i}};function l(e,r){var n={},t="a"+(r+1).toString(),i=t+"s",d=t+"p",o=e.sizes,a=e.params.floorPriceMap||"";n.site=e.params.siteId||"",e.params.pixelId&&(n.pixelId=e.params.pixelId),n[t]=e.adUnitCode,n[i]=o.reduce(function(e,r){return e+(""===e?"":",")+r.join("x")},"");var s=n[i].split(",");return a&&s.forEach(function(e){e in a&&(n[d]=a[e].toString())}),e.params.pageurl&&(n.pageurl=e.params.pageurl),n}function f(e){var r={};return r.adUnitCode=e.adUnitCode,r.bidId=e.bidId,r}Object(t.registerBidder)(d)}},[241]);