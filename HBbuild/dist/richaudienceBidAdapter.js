pbjsChunk([105],{524:function(e,r,n){e.exports=n(525)},525:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",function(){return a});var d=n(1),t=n(3),i=n(2),s=n(0),c="",a={code:"richaudience",aliases:["ra"],supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){return!!(e.params&&e.params.pid&&e.params.supplyType)},buildRequests:function(e,n){return e.map(function(e){var r={bidfloor:e.params.bidfloor,ifa:e.params.ifa,pid:e.params.pid,supplyType:e.params.supplyType,currencyCode:t.b.getConfig("currency.adServerCurrency"),auctionId:e.auctionId,bidId:e.bidId,BidRequestsCount:e.bidRequestsCount,bidder:e.bidder,bidderRequestId:e.bidderRequestId,tagId:e.adUnitCode,sizes:function(e){var r;r=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes?e.mediaTypes.banner.sizes:e.sizes;if(null!=r)return r.map(function(e){return{w:e[0],h:e[1]}})}(e),referer:void 0!==n.refererInfo.referer?encodeURIComponent(n.refererInfo.referer):null,numIframes:void 0!==n.refererInfo.numIframes?n.refererInfo.numIframes:null,transactionId:e.transactionId,timeout:t.b.getConfig("bidderTimeout"),user:function(e){var r=[];e&&e.userId&&(o(0,r,"id5-sync.com",s.deepAccess(e,"userId.id5id")),o(0,r,"pubcommon",s.deepAccess(e,"userId.pubcid")),o(0,r,"criteo.com",s.deepAccess(e,"userId.criteoId")),o(0,r,"liveramp.com",s.deepAccess(e,"userId.idl_env")),o(0,r,"liveintent.com",s.deepAccess(e,"userId.lipb.lipbid")),o(0,r,"adserver.org",s.deepAccess(e,"userId.tdid")));return r}(e)};c=void 0!==n.refererInfo.referer?encodeURIComponent(n.refererInfo.referer):null,r.gdpr_consent="",r.gdpr=null,n&&n.gdprConsent&&(r.gdpr_consent=n.gdprConsent.consentString,r.gdpr=n.gdprConsent.gdprApplies);return{method:"POST",url:"https://shb.richaudience.com/hb/",data:JSON.stringify(r)}})},interpretResponse:function(e,r){var n=[],d=e.body;if(d){var t={requestId:JSON.parse(r.data).bidId,cpm:d.cpm,width:d.width,height:d.height,creativeId:d.creative_id,mediaType:d.media_type,netRevenue:d.netRevenue,currency:d.currency,ttl:d.ttl,dealId:d.dealId};"video"===d.media_type?t.vastXml=d.vastXML:t.ad=d.adm,n.push(t)}return n},getUserSyncs:function(e,r,n){var d=[],t=Math.floor(9999999999*Math.random()),i="";return i=n&&"string"==typeof n.consentString?"https://sync.richaudience.com/dcf3528a0b8aa83634892d50e91c306e/?ord="+t+"&pubconsent="+n.consentString+"&euconsent="+n.consentString:"https://sync.richaudience.com/dcf3528a0b8aa83634892d50e91c306e/?ord="+t,e.iframeEnabled?d.push({type:"iframe",url:i}):e.pixelEnabled&&null!=c&&(i=void 0!==n&&void 0!==n.consentString?"https://sync.richaudience.com/bf7c142f4339da0278e83698a02b0854/?euconsent=".concat(n.consentString,"&referrer=").concat(c):"https://sync.richaudience.com/bf7c142f4339da0278e83698a02b0854/?referrer=".concat(c),d.push({type:"image",url:i})),d}};function o(e,r,n,d){s.isStr(d)&&r.push({userId:d,source:n})}Object(d.registerBidder)(a)}},[524]);