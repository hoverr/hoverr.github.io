pbjsChunk([251],{138:function(e,r,t){e.exports=t(139)},139:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return o});var n=t(1),p=t(2),l=t(0),y=t(3);function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var m="adformOpenRTB",f={0:"title",2:"icon",3:"image",5:"sponsoredBy",4:"body",1:"cta"},v={title:{id:0,name:"title"},icon:{id:2,type:1,name:"img"},image:{id:3,type:3,name:"img"},sponsoredBy:{id:5,name:"data",type:1},body:{id:4,name:"data",type:2},cta:{id:1,type:12,name:"data"}},o={code:m,supportedMediaTypes:[p.c],isBidRequestValid:function(e){return!!e.params.mid},buildRequests:function(e,r){var t=r.refererInfo.referer,n=b(e,"params.adxDomain")||"adx.adform.net",i=navigator.userAgent,a=b(e,"params.pt")||b(e,"params.priceType")||"net",o=e[0].transactionId,s=b(e,"params.test"),d=b(e,"params.publisher"),c=b(e,"params.siteId"),u=y.b.getConfig("currency.adServerCurrency"),p=u&&[u],m=e.map(function(e,r){e.netRevenue=a;var t=l._map(e.nativeParams,function(e,r){var t=v[r],n={required:1&e.required};if(t){var i,a,o,s;n.id=t.id;var d=e.aspect_ratios;if(d&&d[0]&&(i=(d=d[0]).min_width||0,a=d.ratio_height*i/d.ratio_width|0),e.sizes){var c=g(e.sizes);o=c[0],s=c[1]}return n[t.name]={len:e.len,type:t.type,wmin:i,hmin:a,w:o,h:s},n}}).filter(Boolean);return{id:r+1,tagid:e.params.mid,native:{request:{assets:t}}}}),f={id:r.auctionId,site:{id:c,page:t,publisher:d},device:{ua:i},source:{tid:o,fd:1},ext:{pt:a},cur:p,imp:m};return s&&(f.is_debug=!!s,f.test=1),l.deepAccess(r,"gdprConsent.gdprApplies")&&(f.user={ext:{consent:r.gdprConsent.consentString}},f.regs={ext:{gdpr:1&r.gdprConsent.gdprApplies}}),{method:"POST",url:"https://"+n+"/adx/openrtb",data:JSON.stringify(f),options:{contentType:"application/json"},bids:e}},interpretResponse:function(e,r){var t=r.bids;if(e.body){var n=e.body,i=n.seatbid,c=n.cur,u=g(i.map(function(e){return e.bid})).reduce(function(e,r){return e[r.impid-1]=r,e},[]);return t.map(function(e,r){var t,n,i,a,o,s,d=u[r];if(d)return{requestId:e.bidId,cpm:d.price,creativeId:d.crid,ttl:360,netRevenue:"net"===e.netRevenue,currency:c,mediaType:p.c,bidderCode:m,native:(t=d.native,n=t.assets,i=t.link,a=t.imptrackers,o=t.jstracker,s={clickUrl:i.url,clickTrackers:i.clicktrackers||void 0,impressionTrackers:a||void 0,javascriptTrackers:o?[o]:void 0},n.forEach(function(e){var r=f[e.id],t=r&&e[v[r].name];t&&(s[r]=t.text||t.value||{url:t.url,width:t.w,height:t.h})}),s)}}).filter(Boolean)}}};function b(e,r){for(var t,n=0;n<e.length;n++)if(t=l.deepAccess(e[n],r))return t}function g(e){var r;return(r=[]).concat.apply(r,i(e))}Object(n.registerBidder)(o)}},[138]);