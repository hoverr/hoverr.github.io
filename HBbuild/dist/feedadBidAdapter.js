atdpbjsChunk([185],{329:function(e,n,r){e.exports=r(330)},330:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r.d(n,"spec",function(){return v});var a=r(0),t=r(1),i=r(2),o=r(4);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var c="1.0.0",s=[i.d,i.b],p="[FeedAd]",u=/^[a-z0-9][a-z0-9_-]+[a-z0-9]$/,l="https://api.feedad.com",f={};function b(r){return function(e){if(e){var n=function(e,n){var r=e.bidId||e.requestId;if(!f.hasOwnProperty(r))return null;var t=f[r],i=t.referer,a=t.transactionId;return delete f[r],{app_hybrid:!1,client_token:e.params[0].clientToken,placement_id:e.params[0].placementId,klass:n,prebid_auction_id:e.auctionId,prebid_bid_id:r,prebid_transaction_id:a,referer:i,sdk_version:c}}(e,r);n&&Object(o.a)("".concat(l).concat("/1/prebid/web/events"),null,JSON.stringify(n),{withCredentials:!0,method:"POST",contentType:"application/json"})}}}var v={code:"feedad",supportedMediaTypes:s,isBidRequestValid:function(e){var n,r=a.deepAccess(e,"params.clientToken");if(!(r&&("string"==typeof(n=r)&&0<n.length)))return a.logWarn(p,"missing or invalid parameter 'clientToken'. found value:",r),!1;var t,i=a.deepAccess(e,"params.placementId");return!(!i||!("string"==typeof(t=i)&&0<t.length&&t.length<=256&&u.test(t)))||(a.logWarn(p,"missing or invalid parameter 'placementId'. found value:",i),!1)},buildRequests:function(e,n){if(!n)return[];var r=e.filter(function(e){return r=e.mediaTypes,n={banner:r.banner,video:r.video&&"outstream"===r.video.context?r.video:void 0,native:void 0},!Object.keys(n).every(function(e){return void 0===n[e]});var n,r});if(0===r.length)return[];var t=d({},n,{bids:r.map(function(e){var n;return e.params={ad_type:0,client_token:(n=e).params.clientToken,placement_id:n.params.placementId,sdk_version:"prebid_".concat(c),app_hybrid:!1},e})});return t.bids.forEach(function(e){return f[e.bidId]={referer:t.refererInfo.referer,transactionId:e.transactionId}}),{method:"POST",url:"".concat(l).concat("/1/prebid/web/bids"),data:t,options:{contentType:"application/json"}}},interpretResponse:function(e,n){return"string"==typeof e.body?JSON.parse(e.body):e.body},onTimeout:b("prebid_bidTimeout"),onBidWon:b("prebid_bidWon")};Object(t.registerBidder)(v)}},[329]);