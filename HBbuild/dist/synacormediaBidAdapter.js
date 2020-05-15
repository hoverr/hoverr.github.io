pbjsChunk([72],{579:function(e,r,t){e.exports=t(580)},580:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return u});var i=t(0),n=t(1),m=t(2),a=t(11),o=t.n(a);function y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw i}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=["minduration","maxduration","startdelay","placement","linearity","mimes","protocols","api"],f=["1x1","1x2"],u={code:"synacormedia",supportedMediaTypes:[m.b,m.d],sizeMap:{},isVideoBid:function(e){return void 0!==e.mediaTypes&&e.mediaTypes.hasOwnProperty("video")},isBidRequestValid:function(e){var r=e&&e.params&&e.params.hasOwnProperty("placementId")&&e.params.hasOwnProperty("seatId"),t=e&&0<Object(i.getAdUnitSizes)(e).filter(function(e){return-1===f.indexOf(e.join("x"))}).length;return!(!r||!t)},buildRequests:function(e,r){var p=this;if(e&&e.length&&r){var t=r.refererInfo,l={id:r.auctionId,site:{domain:location.hostname,page:t.referer,ref:document.referrer},device:{ua:navigator.userAgent},imp:[]},n=e[0].schain;n&&(l.source={ext:{schain:n}});var a=null;return e.forEach(function(o,e){if(a&&a!==o.params.seatId)Object(i.logWarn)("Synacormedia: there is an inconsistent seatId: ".concat(o.params.seatId," but only sending bid requests for ").concat(a,", you should double check your configuration"));else{a=o.params.seatId;var c=o.params.placementId,s=o.params.bidfloor?parseFloat(o.params.bidfloor):null;isNaN(s)&&Object(i.logWarn)("Synacormedia: there is an invalid bid floor: ".concat(o.params.bidfloor));var d=parseInt(o.params.pos,10);isNaN(d)&&(Object(i.logWarn)("Synacormedia: there is an invalid POS: ".concat(o.params.pos)),d=0);var u=p.isVideoBid(o)?"video":"banner";Object(i.getAdUnitSizes)(o).filter(function(e){return-1===f.indexOf(e.join("x"))}).forEach(function(e,r){if(e&&2==e.length){var t=e[0],n=e[1],a={id:"".concat(u.substring(0,1)).concat(o.bidId,"-").concat(t,"x").concat(n),tagid:c};null===s||isNaN(s)||(a.bidfloor=s);var i={w:t,h:n,pos:d};"video"===u&&(o.mediaTypes.video&&p.setValidVideoParams(o.mediaTypes.video,o.params.video),o.params.video&&p.setValidVideoParams(o.params.video,i)),a[u]=i,l.imp.push(a)}})}}),l.imp.length&&a?{method:"POST",url:"".concat("https://prebid.technoratimedia.com","/openrtb/bids/").concat(a,"?src=prebid_prebid_3.9.0"),data:l,options:{contentType:"application/json",withCredentials:!0}}:void 0}},setValidVideoParams:function(r,t){Object.keys(r).filter(function(e){return o()(d,e)&&null!==r[e]&&(!isNaN(parseInt(r[e],10))||!(r[e].length<1))}).forEach(function(e){return t[e]=Array.isArray(r[e])?r[e]:parseInt(r[e],10)})},interpretResponse:function(e){function l(e,r){return r?r.replace(/\${AUCTION_PRICE}/g,e.price):r}if(e.body&&"object"==s(e.body)){var r=e.body,t=r.id,n=r.seatbid,f=[];return t&&n&&n.forEach(function(p){p.bid.forEach(function(e){var r=l(e,e.adm),t=l(e,e.nurl),n=y(e.impid.match(/^([vb])(.*)-(.*)x(.*)$/),5),a=n[1],i=n[2],o=n[3],c=n[4],s="v"==a,d={requestId:i,adId:e.id.replace(/~/g,"-"),cpm:parseFloat(e.price),width:parseInt(o,10),height:parseInt(c,10),creativeId:"".concat(p.seat,"_").concat(e.crid),currency:"USD",netRevenue:!0,mediaType:s?m.d:m.b,ad:r,ttl:60};if(s){var u=y(t.match(/ID=([^&]*)&?/),2)[1];d.videoCacheKey=encodeURIComponent(u),d.vastUrl=t}f.push(d)})}),f}Object(i.logWarn)("Synacormedia: server returned empty/non-json response: "+JSON.stringify(e.body))},getUserSyncs:function(e){var r=[];return e.iframeEnabled?r.push({type:"iframe",url:"".concat("https://ad-cdn.technoratimedia.com","/html/usersync.html?src=prebid_prebid_3.9.0")}):Object(i.logWarn)("Synacormedia: Please enable iframe based user sync."),r}};Object(n.registerBidder)(u)}},[579]);