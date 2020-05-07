pbjsChunk([244],{189:function(e,i,r){e.exports=r(190)},190:function(e,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),r.d(i,"spec",function(){return d});var f=r(3),v=r(0),g=r(9),t=r(1),n=r(2),a=r(11),b=r.n(a),h="adxcg",s=[n.b,n.d,n.c],y=["id","mimes","minduration","maxduration","startdelay","skippable","playback_method","frameworks"],I=["forcedDspIds","forcedCampaignIds","forcedCreativeIds","gender","dnt","language"],w=["lineparam1","lineparam2","lineparam3"],d={code:h,supportedMediaTypes:s,isBidRequestValid:function(e){if(!e||!e.params)return v.logWarn(h+": Missing bid parameters"),!1;if(!v.isStr(e.params.adzoneid))return v.logWarn(h+": adzoneid must be specified as a string"),!1;if(T(e)){if(e.params.video.mimes){if(!v.isArray(e.params.video.mimes)||!e.params.video.mimes.every(function(e){return v.isStr(e)}))return v.logWarn(h+": mimes must be an array of strings"),!1}else v.logWarn(h+": mimes should be specified for videos");if("instream"!==v.deepAccess(e,"mediaTypes.video.context"))return v.logWarn(h+": video context must be valid - instream"),!1}return!0},buildRequests:function(e,i){v.logMessage("buildRequests: ".concat(JSON.stringify(e)));var r=new Date,t=window.devicePixelRatio||1,n=window&&window.IntersectionObserver&&window.IntersectionObserverEntry&&window.IntersectionObserverEntry.prototype&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,a=f.b.getConfig("bidderTimeout");window.PREBID_TIMEOUT&&(a=Math.min(window.PREBID_TIMEOUT,a));var s={renderformat:"javascript",ver:"r20191128PB30",secure:"1",source:"pbjs10",uw:window.screen.width,uh:window.screen.height,dpr:t,bt:a,isinframe:v.inIframe(),cookies:v.checkCookieSupport()?"1":"0",tz:r.getTimezoneOffset(),dt:v.timestamp(),iob:n?"1":"0",pbjs:"3.13.0-pre",rndid:Math.floor(9e5*Math.random())+1e5},d=v.deepAccess(i,"refererInfo.referer"),o=v.deepAccess(i,"refererInfo.canonicalUrl")||f.b.getConfig("pageUrl")||v.deepAccess(window,"location.href");s.ref=encodeURIComponent(d),s.url=encodeURIComponent(o),i&&i.gdprConsent&&i.gdprConsent.gdprApplies&&(s.gdpr=i.gdprConsent.gdprApplies?"1":"0",s.gdpr_consent=i.gdprConsent.consentString);var c=f.b.getConfig(h);c&&Object.keys(c).filter(function(e){return b()(I,e)}).forEach(function(e){return s[e]=encodeURIComponent(c[e])});var p=[],u=[],l=[],m=[];return e.forEach(function(i,r){var e,t;p.push(v.getBidIdParameter("adzoneid",i.params)),u.push(i.bidId),"banner"!==(e=i).mediaType&&!v.deepAccess(e,"mediaTypes.banner")||l.push(v.parseSizesInput(i.mediaTypes.banner.sizes).join("|")),"native"!==(t=i).mediaType&&!v.deepAccess(t,"mediaTypes.native")||l.push("0x0");var n=v.getBidIdParameter("bidfloor",i.params)||0;m.push(n),T(i)&&(i.params.video&&Object.keys(i.params.video).filter(function(e){return b()(y,e)}).forEach(function(e){return s["video."+e+"."+r]=encodeURIComponent(i.params.video[e])}),s["video.context."+r]=v.deepAccess(i,"mediaTypes.video.context"),l.push(v.parseSizesInput(i.mediaTypes.video.playerSize).join("|")));var a=v.getBidIdParameter("custom",i.params)||{};a&&Object.keys(a).filter(function(e){return b()(w,e)}).forEach(function(e){return s[e+"."+r]=encodeURIComponent(a[e])})}),s.adzoneid=p.join(","),s.format=l.join(","),s.prebidBidIds=u.join(","),s.bidfloors=m.join(","),v.isStr(v.deepAccess(e,"0.userId.pubcid"))&&(s.pubcid=e[0].userId.pubcid),v.isStr(v.deepAccess(e,"0.userId.tdid"))&&(s.tdid=e[0].userId.tdid),v.isStr(v.deepAccess(e,"0.userId.id5id"))&&(s.id5id=e[0].userId.id5id),v.isStr(v.deepAccess(e,"0.userId.idl_env"))&&(s.idl_env=e[0].userId.idl_env),{contentType:"text/plain",method:"GET",url:g.a({protocol:"https",hostname:"hbps.adxcg.net",pathname:"/get/adi",search:s}),withCredentials:!0}},interpretResponse:function(e){var r=[];return(e=e.body)?e.forEach(function(e){var t={};if(t.requestId=e.bidId,t.cpm=e.cpm,t.creativeId=parseInt(e.creativeId),t.currency=e.currency?e.currency:"USD",t.netRevenue=!e.netRevenue||e.netRevenue,t.ttl=e.ttl?e.ttl:300,null!=e.deal_id&&0<e.deal_id.trim().length&&(t.dealId=e.deal_id),e.ad)t.ad=e.ad;else if(e.vastUrl)t.vastUrl=e.vastUrl,t.mediaType="video";else if(e.nativeResponse){t.mediaType="native";var i=e.nativeResponse;t.native={clickUrl:i.link.url,impressionTrackers:i.imptrackers,clickTrackers:i.clktrackers,javascriptTrackers:i.jstrackers},i.assets.forEach(function(e){if(e.title&&e.title.text&&(t.native.title=e.title.text),e.img&&e.img.url){var i={};i.url=e.img.url,i.height=e.img.h,i.width=e.img.w,t.native.image=i}if(e.icon&&e.icon.url){var r={};r.url=e.icon.url,r.height=e.icon.h,r.width=e.icon.w,t.native.icon=r}e.data&&"DESC"===e.data.label&&e.data.value&&(t.native.body=e.data.value),e.data&&"SPONSORED"===e.data.label&&e.data.value&&(t.native.sponsoredBy=e.data.value)})}t.width=e.width,t.height=e.height,v.logMessage("submitting bid[".concat(e.bidId,"]: ").concat(JSON.stringify(t))),r.push(t)}):v.logMessage("empty bid response"),r},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"https://cdn.adxcg.net/pb-sync.html"}]}};function T(e){return"video"===e.mediaType||v.deepAccess(e,"mediaTypes.video")}Object(t.registerBidder)(d)}},[189]);