pbjsChunk([141],{437:function(t,e,i){t.exports=i(438)},438:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"spec",function(){return u});var h=i(0),o=i(9),r=i(1),d=i(2),a=i(3);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n="nafdigital",u={code:n,supportedMediaTypes:[d.b],isBidRequestValid:function(t){return t.bidder===n&&void 0!==t.params&&void 0!==t.params.publisherId},buildRequests:function(e,i){try{var t="";i&&i.refererInfo&&(t=i.refererInfo.referer);var u=[],r=h.getBidIdParameter("publisherId",e[0].params);h._each(e,function(t){t.sizes=h.isArray(t.sizes)&&h.isArray(t.sizes[0])?t.sizes:[t.sizes],t.sizes=t.sizes.filter(function(t){return h.isArray(t)});var e,i=t.sizes.map(function(t){return{w:parseInt(t[0],10),h:parseInt(t[1],10)}}),r=document.getElementById(t.adUnitCode),n=i.reduce(function(t,e){return e.h*e.w<t.h*t.w?e:t}),o=(e=r,function(){try{return h.getWindowSelf()!==h.getWindowTop()}catch(t){return 1}}()||null===e?"na":function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=i.w,n=i.h;return"visible"===h.getWindowTop().document.visibilityState?function(t,e){var i,r,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=n.w,d=n.h,a=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=e.w,r=e.h,n=t.getBoundingClientRect(),o=n.width,d=n.height,a=n.left,s=n.top,u=n.right,h=n.bottom;(0===o||0===d)&&i&&r&&(u=a+(o=i),h=s+(d=r));return{width:o,height:d,left:a,top:s,right:u,bottom:h}}(t,{w:o,h:d}),s=function(t){for(var e={left:t[0].left,right:t[0].right,top:t[0].top,bottom:t[0].bottom},i=1;i<t.length;++i){if(e.left=Math.max(e.left,t[i].left),e.right=Math.min(e.right,t[i].right),e.left>=e.right)return null;if(e.top=Math.max(e.top,t[i].top),e.bottom=Math.min(e.bottom,t[i].bottom),e.top>=e.bottom)return null}return e.width=e.right-e.left,e.height=e.bottom-e.top,e}([{left:0,top:0,right:e.innerWidth,bottom:e.innerHeight},a]);return null===s?0:(i=s.width*s.height,r=a.width*a.height,i/r*100)}(t,e,{w:r,h:n}):0}(r,h.getWindowTop(),n)),d=isNaN(o)?o:Math.round(o),a={id:t.bidId,banner:{format:i,ext:{viewability:d}},tagid:String(t.adUnitCode)},s=h.getBidIdParameter("bidFloor",t.params);s&&(a.bidfloor=s),u.push(a)});var n={id:h.getUniqueIdentifierStr(),imp:u,site:{domain:o.c(t).host,page:t,publisher:{id:r}},device:{devicetype:/(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)?1:/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)?3:2,w:screen.width,h:screen.height},tmax:a.b.getConfig("bidderTimeout")};return{method:"POST",url:"https://nafdigitalbidder.com/hb",data:JSON.stringify(n),options:{contentType:"text/plain",withCredentials:!1}}}catch(t){h.logError(t,{bidReqs:e,bidderRequest:i})}},interpretResponse:function(t){if(!t.body||"object"!=s(t.body))return h.logWarn("NAF digital server returned empty/non-json response: "+JSON.stringify(t.body)),[];var e=t.body,i=e.id,r=e.seatbid;try{var n=[];return i&&r&&0<r.length&&r[0].bid&&0<r[0].bid.length&&r[0].bid.map(function(t){n.push({requestId:t.impid,cpm:parseFloat(t.price),width:parseInt(t.w),height:parseInt(t.h),creativeId:t.crid||t.id,currency:"USD",netRevenue:!0,mediaType:d.b,ad:function(t){var e=t.adm;"nurl"in t&&(e+=h.createTrackPixelHtml(t.nurl));return e}(t),ttl:60})}),n}catch(t){h.logError(t,{id:i,seatbid:r})}},getUserSyncs:function(t,e,i){return[]}};Object(r.registerBidder)(u)}},[437]);