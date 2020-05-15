pbjsChunk([166],{373:function(e,r,t){e.exports=t(374)},374:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return O});var b=t(0),y=t(2),l=t(3),i=t(12),a=t.n(i),n=t(375),s=t.n(n),o=t(1);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=[y.b,y.d],v=100,g=300,w=3600,x=!0,I={JPY:1};function p(e){var r=u(e);r.video=b.deepClone(e.params.video),r.video.w=e.params.size[0],r.video.h=e.params.size[1];var t=b.deepAccess(e,"mediaTypes.video.context");return t&&("instream"===t?r.video.placement=1:"outstream"===t?r.video.placement=4:b.logWarn("ix bidder params: video context '".concat(t,"' is not supported"))),r}function u(e){var r={};return r.id=e.bidId,r.ext={},r.ext.siteID=e.params.siteId,!e.params.hasOwnProperty("id")||"string"!=typeof e.params.id&&"number"!=typeof e.params.id?r.ext.sid="".concat(e.params.size[0],"x").concat(e.params.size[1]):r.ext.sid=String(e.params.id),e.params.hasOwnProperty("bidFloor")&&e.params.hasOwnProperty("bidFloorCur")&&(r.bidfloor=e.params.bidFloor,r.bidfloorcur=e.params.bidFloorCur),r}function c(e){return Array.isArray(e)&&2===e.length&&s()(e[0])&&s()(e[1])}function m(e,r){if(c(e))return e[0]===r[0]&&e[1]===r[1];for(var t=0;t<e.length;t++)if(e[t][0]===r[0]&&e[t][1]===r[1])return 1}function P(r,e){if(r)return a()(e,function(e){return e.id===r})}function f(e,r,t,i){var a=[];if(window.headertag&&"function"==typeof window.headertag.getIdentityInfo){var n=window.headertag.getIdentityInfo();if(n&&"object"===h(n))for(var s in n)if(n.hasOwnProperty(s)){var o=n[s];!o.responsePending&&o.data&&"object"===h(o.data)&&Object.keys(o.data).length&&a.push(o.data)}}var d={};if(d.id=e[0].bidderRequestId,d.imp=t,d.site={},d.ext={},d.ext.source="prebid",e[0].schain&&(d.source={ext:{schain:e[0].schain}}),0<a.length&&(d.user={},d.user.eids=a),document.referrer&&""!==document.referrer&&(d.site.ref=document.referrer),r){if(r.gdprConsent){var p=r.gdprConsent;p.hasOwnProperty("gdprApplies")&&(d.regs={ext:{gdpr:p.gdprApplies?1:0}}),p.hasOwnProperty("consentString")&&(d.user=d.user||{},d.user.ext={consent:p.consentString||""})}r.uspConsent&&b.deepSetValue(d,"regs.ext.us_privacy",r.uspConsent),r.refererInfo&&(d.site.page=r.refererInfo.referer)}var u={},c=l.b.getConfig("ix");if(c){if("object"===h(c.firstPartyData)){var m=c.firstPartyData,f="?";for(var y in m)m.hasOwnProperty(y)&&(f+="".concat(encodeURIComponent(y),"=").concat(encodeURIComponent(m[y]),"&"));f=f.slice(0,-1),d.site.page+=f}"number"==typeof c.timeout&&(u.t=c.timeout)}return u.s=e[0].params.siteId,u.v=i,u.r=JSON.stringify(d),u.ac="j",u.sd=1,8.1===i&&(u.nf=1),{method:"GET",url:"https://as-sec.casalemedia.com/cygnus",data:u}}var O={code:"ix",supportedMediaTypes:d,isBidRequestValid:function(e){if(!c(e.params.size))return b.logError("ix bidder params: bid size has invalid format."),!1;if(!m(e.sizes,e.params.size))return b.logError("ix bidder params: bid size is not included in ad unit sizes."),!1;if(e.hasOwnProperty("mediaType")&&!b.contains(d,e.mediaType))return!1;if(e.hasOwnProperty("mediaTypes")&&!b.deepAccess(e,"mediaTypes.banner.sizes")&&!b.deepAccess(e,"mediaTypes.video.playerSize"))return!1;if("string"!=typeof e.params.siteId&&"number"!=typeof e.params.siteId)return b.logError("ix bidder params: siteId must be string or number value."),!1;var r,t,i=e.params.hasOwnProperty("bidFloor"),a=e.params.hasOwnProperty("bidFloorCur");return!!(!i&&!a||i&&a&&(r=e.params.bidFloor,t=e.params.bidFloorCur,Boolean("number"==typeof r&&"string"==typeof t&&t.match(/^[A-Z]{3}$/))))||(b.logError("ix bidder params: bidFloor / bidFloorCur parameter has invalid format."),!1)},buildRequests:function(e,r){for(var t,i,a=[],n=[],s=[],o=null,d=0;d<e.length;d++)(o=e[d]).mediaType!==y.d&&!b.deepAccess(o,"mediaTypes.video")||(o.mediaType===y.d||m(o.mediaTypes.video.playerSize,o.params.size)?s.push(p(o)):b.logError("Bid size is not included in video playerSize")),o.mediaType!==y.b&&!b.deepAccess(o,"mediaTypes.banner")&&(o.mediaType||o.mediaTypes)||n.push((i=void 0,(i=u(t=o)).banner={},i.banner.w=t.params.size[0],i.banner.h=t.params.size[1],i.banner.topframe=b.inIframe()?0:1,i));return 0<n.length&&a.push(f(e,r,n,7.2)),0<s.length&&a.push(f(e,r,s,8.1)),a},interpretResponse:function(e,r){var t=[];if(!e.hasOwnProperty("body")||!e.body.hasOwnProperty("seatbid"))return t;for(var i,a,n,s,o=e.body,d=o.seatbid,p=0;p<d.length;p++)if(d[p].hasOwnProperty("bid"))for(var u=d[p].bid,c=JSON.parse(r.data.r),m=0;m<u.length;m++){var f=P(u[m].impid,c.imp);i=u[m],a=o.cur,n=f,s=void 0,s={},I.hasOwnProperty(a)?s.cpm=i.price/I[a]:s.cpm=i.price/v,s.requestId=i.impid,s.dealId=b.deepAccess(i,"ext.dealid"),s.netRevenue=x,s.currency=a,s.creativeId=i.hasOwnProperty("crid")?i.crid:"-",b.deepAccess(i,"ext.vasturl")?(s.vastUrl=i.ext.vasturl,s.width=n.video.w,s.height=n.video.h,s.mediaType=y.d,s.ttl=w):(s.ad=i.adm,s.width=i.w,s.height=i.h,s.mediaType=y.b,s.ttl=g),s.meta={},s.meta.networkId=b.deepAccess(i,"ext.dspid"),s.meta.brandId=b.deepAccess(i,"ext.advbrandid"),s.meta.brandName=b.deepAccess(i,"ext.advbrand"),t.push(s)}return t},transformBidParams:function(e){return b.convertTypes({siteID:"number"},e)}};Object(o.registerBidder)(O)}},[373]);