pbjsChunk([228],{197:function(e,r,t){e.exports=t(198)},198:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return x});var s=t(0),n=t(1),i=t(2);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(){var e=u(["dcn=","&pos=","&cmd=bid",""]);return a=function(){return e},e}function c(){var e=u(["","/bidRequest?"]);return c=function(){return e},e}function d(){var e=u(["","/pubapi/3.0/","/","/","/","/ADTECH;v=2;cmd=bid;cors=yes;alias=",";misc=",";",""]);return d=function(){return e},e}function u(e,r){return r=r||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var p={AOL:"aol",ONEMOBILE:"onemobile",ONEDISPLAY:"onedisplay"},l={GET:"display-get"},m={GET:"mobile-get",POST:"mobile-post"},f={TAG:"iframe",TYPE:"iframe"},b={TAG:"img",TYPE:"image"},h=P(d(),"host","network","placement","pageid","sizeid","alias","misc","dynamicParams"),v=P(c(),"host"),g=P(a(),"dcn","pos","dynamicParams"),O={us:"adserver-us.adtech.advertising.com",eu:"adserver-eu.adtech.advertising.com",as:"adserver-as.adtech.advertising.com"},y="https",E=1;function P(o){for(var e=arguments.length,t=new Array(1<e?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n[n.length-1]||{},a=[o[0]];return t.forEach(function(e,r){var t=s.isInteger(e)?n[e]:i[e];a.push(t,o[r+1])}),a.join("")}}function I(e){return e===p.AOL||e===p.ONEMOBILE}function T(e){if(I(e.bidder)&&e.params.id&&e.params.imp&&e.params.imp[0]){var r=e.params.imp[0];return r.id&&r.tagid&&(r.banner&&r.banner.w&&r.banner.h||r.video&&r.video.mimes&&r.video.minduration&&r.video.maxduration)}}function S(e){return I(e.bidder)&&e.params.dcn&&e.params.pos}function C(e){return((r=e.bidder)===p.AOL||r===p.ONEDISPLAY)&&e.params.placement&&e.params.network;var r}var x={code:p.AOL,aliases:[p.ONEMOBILE,p.ONEDISPLAY],supportedMediaTypes:[i.b],isBidRequestValid:function(e){return C(e)||(S(r=e)||T(r));var r},buildRequests:function(e,r){var n=this,i={};return r&&(i.gdpr=r.gdprConsent,i.uspConsent=r.uspConsent),e.map(function(e){var r,t=S(r=e)?m.GET:T(r)?m.POST:C(r)?l.GET:void 0;if(t)return n.formatBidRequest(t,e,i)})},interpretResponse:function(e,r){var t=e.body;if(t){var n=this._parseBidResponse(t,r);if(n)return n}else s.logError("Empty bid response",r.bidderCode,t)},getUserSyncs:function(e,r){var t=!s.isEmpty(r)&&r[0].body;return t&&t.ext&&t.ext.pixels?this.parsePixelItems(t.ext.pixels):[]},formatBidRequest:function(e,r,t){var n;switch(e){case l.GET:n={url:this.buildMarketplaceUrl(r,t),method:"GET",ttl:60};break;case m.GET:n={url:this.buildOneMobileGetUrl(r,t),method:"GET",ttl:3600};break;case m.POST:n={url:this.buildOneMobileBaseUrl(r),method:"POST",ttl:3600,data:this.buildOpenRtbRequestData(r,t),options:{contentType:"application/json",customHeaders:{"x-openrtb-version":"2.2"}}}}return n.bidderCode=r.bidder,n.bidId=r.bidId,n.userSyncOn=r.params.userSyncOn,n},buildMarketplaceUrl:function(e,r){var t,n=e.params,i=n.server,a=n.region||"us";return O.hasOwnProperty(a)||(s.logWarn("Unknown region '".concat(a,"' for AOL bidder.")),a="us"),t=i||O[a],n.region=a,this.applyProtocol(h({host:t,network:n.network,placement:parseInt(n.placement),pageid:n.pageId||0,sizeid:n.sizeId||0,alias:n.alias||s.getUniqueIdentifierStr(),misc:(new Date).getTime(),dynamicParams:this.formatMarketplaceDynamicParams(n,r)}))},buildOneMobileGetUrl:function(e,r){var t=e.params,n=t.dcn,i=t.pos,a=t.ext,o=this.buildOneMobileBaseUrl(e);if(n&&i){var s=this.formatOneMobileDynamicParams(a,r);o+=g({dcn:n,pos:i,dynamicParams:s})}return o},buildOneMobileBaseUrl:function(e){return this.applyProtocol(v({host:e.params.host||"c2shb.ssp.yahoo.com"}))},applyProtocol:function(e){return/^https?:\/\//i.test(e)?e:0===e.indexOf("//")?"".concat(y,":").concat(e):"".concat(y,"://").concat(e)},formatMarketplaceDynamicParams:function(e,r){var t=0<arguments.length&&void 0!==e?e:{},n=1<arguments.length&&void 0!==r?r:{},i={};t.bidFloor&&(i.bidfloor=t.bidFloor),o(i,this.formatKeyValues(t.keyValues)),o(i,this.formatConsentData(n));var a="";return s._each(i,function(e,r){a+="".concat(r,"=").concat(encodeURIComponent(e),";")}),a},formatOneMobileDynamicParams:function(e,r){var t=0<arguments.length&&void 0!==e?e:{},n=1<arguments.length&&void 0!==r?r:{};this.isSecureProtocol()&&(t.secure=E),o(t,this.formatConsentData(n));var i="";return s._each(t,function(e,r){i+="&".concat(r,"=").concat(encodeURIComponent(e))}),i},buildOpenRtbRequestData:function(e,r){var t=1<arguments.length&&void 0!==r?r:{},n={id:e.params.id,imp:e.params.imp};return this.isEUConsentRequired(t)&&(s.deepSetValue(n,"regs.ext.gdpr",E),t.gdpr.consentString&&s.deepSetValue(n,"user.ext.consent",t.gdpr.consentString)),t.uspConsent&&s.deepSetValue(n,"regs.ext.us_privacy",t.uspConsent),n},isEUConsentRequired:function(e){return!!(e&&e.gdpr&&e.gdpr.gdprApplies)},formatKeyValues:function(e){var t={};return s._each(e,function(e,r){t["kv".concat(r)]=e}),t},formatConsentData:function(e){var r={};return this.isEUConsentRequired(e)&&(r.gdpr=E,e.gdpr.consentString&&(r.euconsent=e.gdpr.consentString)),e.uspConsent&&(r.us_privacy=e.uspConsent),r},parsePixelItems:function(e){var n=/\w*(?=\s)/,i=/src=("|')(.*?)\1/,a=[];if(e){var r=e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);r&&r.forEach(function(e){var r=e.match(n)[0],t=e.match(i)[2];r&&r&&a.push({type:r===b.TAG?b.TYPE:f.TYPE,url:t})})}return a},_parseBidResponse:function(e,r){var t,n;try{t=e.seatbid[0].bid[0]}catch(e){return}if(t.ext&&t.ext.encp)n=t.ext.encp;else if(null===(n=t.price)||isNaN(n))return void s.logError("Invalid price in bid response",p.AOL,t);return{bidderCode:r.bidderCode,requestId:r.bidId,ad:t.adm,cpm:n,width:t.w,height:t.h,creativeId:t.crid||0,pubapiId:e.id,currency:e.cur||"USD",dealId:t.dealid,netRevenue:!0,ttl:r.ttl}},isOneMobileBidder:I,isSecureProtocol:function(){return"https:"===document.location.protocol}};Object(n.registerBidder)(x)}},[197]);