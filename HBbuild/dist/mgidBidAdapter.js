atdpbjsChunk([147],{425:function(e,r,t){e.exports=t(426)},426:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return D});var i=t(1),m=t(0),v=t(9),E=t(2),I=t(3),s="[MGID warn]: ",f="[MGID info]: ",u={TITLE:{ID:1,KEY:"title",TYPE:0},IMAGE:{ID:2,KEY:"image",TYPE:0},ICON:{ID:3,KEY:"icon",TYPE:0},SPONSOREDBY:{ID:4,KEY:"sponsoredBy",TYPE:1},DESC:{ID:5,KEY:"data",TYPE:2},PRICE:{ID:6,KEY:"price",TYPE:6},SALEPRICE:{ID:7,KEY:"saleprice",TYPE:7},DISPLAYURL:{ID:8,KEY:"displayurl",TYPE:11},CTA:{ID:9,KEY:"cta",TYPE:12},BODY:{ID:10,KEY:"body",TYPE:2},SPONSORED:{ID:11,KEY:"sponsored",TYPE:1}},g={ICON:1,IMAGE:3},p=492,h=328,b=50,T=50,A=80,S=!1,y=[{id:u.SPONSOREDBY.ID,required:!0,data:{type:1}},{id:u.TITLE.ID,required:!0},{id:u.IMAGE.ID,required:!0}],a={},n={};m._each(u,function(e){a[e.ID]=e.KEY}),m._each(u,function(e){n[e.KEY]=e});var D={VERSION:"1.4",code:"mgid",supportedMediaTypes:[E.b,E.c],reId:/^[1-9][0-9]*$/,NATIVE_ASSET_ID_TO_KEY_MAP:a,NATIVE_ASSET_KEY_TO_ASSET_MAP:n,isBidRequestValid:function(e){var r=m.deepAccess(e,"mediaTypes.banner"),t=m.deepAccess(e,"mediaTypes.native"),i=m.isPlainObject(t);if(i){var a=m.deepAccess(e,"nativeParams"),s=0;if(m.isPlainObject(a))for(var n in a){var c=a[n],d=D.NATIVE_ASSET_KEY_TO_ASSET_MAP.hasOwnProperty(n);if(d&&s++,!m.isPlainObject(c)||!d&&m.deepAccess(c,"required")){i=!1;break}}i=i&&0<s}var o=m.isPlainObject(r);if(o){var l=m.deepAccess(r,"sizes");o=m.isArray(l)&&0<l.length;for(var u=0;o&&u<l.length;u++)o=2===l[u].length}var g=Number(e.params.accountId),p=Number(e.params.placementId);return(o||i)&&m.isPlainObject(e.params)&&!!e.adUnitCode&&m.isStr(e.adUnitCode)&&(!(0<p)||0===e.params.placementId.toString().search(D.reId))&&!!g&&0<g&&0===e.params.accountId.toString().search(D.reId)},buildRequests:function(e,r){if(m.logInfo(f+"buildRequests"),0!==e.length){var t=function(){var r,e,t,i,a,s,n;for(r=window,e=r.document,t=e.location.href,i=e.referrer,a=0,n=new Date;r!==r.parent;)try{s=r.parent,t=s.location.href,i=s.document.referrer,r=s}catch(e){a=top!==r.parent?2:1;break}return{location:t,referrer:i||"",masked:a,wWidth:r.innerWidth,wHeight:r.innerHeight,date:n.toUTCString(),timeOffset:n.getTimezoneOffset()}}(),i=t.location||m.deepAccess(r,"refererInfo.referer")||m.deepAccess(r,"refererInfo.canonicalUrl"),a=v.c(i).hostname,s=function(e){if("localhost"==e)return"localhost";var r=null;try{var t=/[-\w]+\.([-\w]+|[-\w]{3,}|[-\w]{1,3}\.[-\w]{2})$/i.exec(e);if(null!=t&&0<t.length){r=t[0];for(var i=1;i<t.length;i++)t[i].length>r.length&&(r=t[i])}}catch(e){r=null}return r}(a)||a,n=Y(e,"params.accountId"),c=function(e){try{return m.getDataFromLocalStorage(e)}catch(e){return null}}("mgMuidn"),d=(Y(e,"params.bidUrl")||"https://prebid.mgid.com/prebid/")+n;m.isStr(c)&&0<c.length&&(d+="?muid="+c);var o=[Y(e,"params.currency")||Y(e,"params.cur")||I.b.getConfig("currency.adServerCurrency")||"USD"],l="https:"===window.location.protocol?1:0,u=[];if(e.forEach(function(e){var r=m.deepAccess(e,"params.placementId")||0;r=r?r+"/"+e.adUnitCode:e.adUnitCode;var t={id:e.bidId,tagid:r,secure:l},i=m.deepAccess(e,"params.bidFloor")||m.deepAccess(e,"params.bidfloor")||0;for(var a in i&&m.isNumber(i)&&(t.bidfloor=i),e.mediaTypes)switch(a){case E.b:t.banner=P(e),u.push(t);break;case E.c:var s=O(e.nativeParams);S||(t.native={request:s},u.push(t))}}),0!==u.length){var g,p,h={id:m.deepAccess(r,"bidderRequestId"),site:{domain:s,page:i},cur:o,geo:{utcoffset:t.timeOffset},device:{ua:navigator.userAgent,js:1,dnt:"yes"===navigator.doNotTrack||"1"===navigator.doNotTrack||"1"===navigator.msDoNotTrack?1:0,h:screen.height,w:screen.width,language:(g=navigator.language?"language":"userLanguage",2!==(p=navigator[g].split("-")[0]).length&&3!==p.length?"":p)},ext:{mgid_ver:D.VERSION,prebid_ver:atdpbjs.version},imp:u};return r&&r.gdprConsent&&(h.user={ext:{consent:r.gdprConsent.consentString}},h.regs={ext:{gdpr:r.gdprConsent.gdprApplies?1:0}}),t.referrer&&(h.site.ref=t.referrer),m.logInfo(f+"buildRequest:",h),{method:"POST",url:d,data:JSON.stringify(h)}}}},interpretResponse:function(t){if(m.logInfo(f+"interpretResponse",t),null!=t&&null!=t.body&&""!==t.body&&m.isArray(t.body.seatbid)&&t.body.seatbid.length){var i=[],e=m.deepAccess(t.body,"ext.muidn");return m.isStr(e)&&0<e.length&&function(e,r){try{m.setDataInLocalStorage(e,r)}catch(e){return}}("mgMuidn",e),t.body.seatbid.forEach(function(e){e.bid.forEach(function(e){var r=function(e,r){m.isStr(r)&&""!==r||(r="USD");var t={requestId:e.impid,ad:e.adm,cpm:e.price,creativeId:e.adid,currency:r,dealId:e.dealid||"",width:e.w,height:e.h,mediaType:"banner",netRevenue:!0,ttl:e.ttl||300,nurl:e.nurl||"",burl:e.burl||"",isBurl:m.isStr(e.burl)&&0<e.burl.length};switch(function(e,r){"native"===m.deepAccess(e,"ext.crtype")?r.mediaType=E.c:r.mediaType=E.b}(e,t),t.mediaType){case E.b:break;case E.c:!function(e,r){if(r.native={},e.hasOwnProperty("adm")){var t="";try{t=JSON.parse(e.adm)}catch(e){return m.logWarn(s+"Error: Cannot parse native response for ad response: "+r.adm)}if(t&&t.native&&t.native.assets&&0<t.native.assets.length){r.mediaType=E.c;for(var i=0,a=t.native.assets.length;i<a;i++)switch(t.native.assets[i].id){case u.TITLE.ID:r.native.title=t.native.assets[i].title&&t.native.assets[i].title.text;break;case u.IMAGE.ID:r.native.image={url:t.native.assets[i].img&&t.native.assets[i].img.url,height:t.native.assets[i].img&&t.native.assets[i].img.h,width:t.native.assets[i].img&&t.native.assets[i].img.w};break;case u.ICON.ID:r.native.icon={url:t.native.assets[i].img&&t.native.assets[i].img.url,height:t.native.assets[i].img&&t.native.assets[i].img.h,width:t.native.assets[i].img&&t.native.assets[i].img.w};break;case u.SPONSOREDBY.ID:case u.SPONSORED.ID:case u.PRICE:case u.SALEPRICE.ID:case u.DESC.ID:case u.BODY.ID:case u.DISPLAYURL.ID:case u.CTA.ID:r.native[D.NATIVE_ASSET_ID_TO_KEY_MAP[t.native.assets[i].id]]=t.native.assets[i].data&&t.native.assets[i].data.value}r.native.clickUrl=t.native.link&&t.native.link.url,r.native.clickTrackers=t.native.link&&t.native.link.clicktrackers||[],r.native.impressionTrackers=t.native.imptrackers||[],r.native.jstracker=t.native.jstracker||[],r.width=0,r.height=0}}}(e,t)}return t}(e,t.body.cur);r.mediaType===E.c&&m.isEmpty(r.native)||i.push(r)})}),m.logInfo(f+"interpretedResponse",i),i}},onBidWon:function(e){var r=m.deepAccess(e,"adserverTargeting.hb_pb")||"";m.isStr(e.nurl)&&""!==e.nurl&&(e.nurl=e.nurl.replace(/\${AUCTION_PRICE}/,r),m.triggerPixel(e.nurl)),e.isBurl&&(e.mediaType===E.b?e.ad=e.ad.replace(/\${AUCTION_PRICE}/,r):(e.burl=e.burl.replace(/\${AUCTION_PRICE}/,r),m.triggerPixel(e.burl))),m.logInfo(f+"onBidWon")},getUserSyncs:function(){m.logInfo(f+"getUserSyncs")}};function Y(e,r){for(var t,i=0;i<e.length;i++)if(t=m.deepAccess(e[i],r))return t}function P(e){var r=m.deepAccess(e,"mediaTypes.banner.sizes"),t=[];if(1<r.length)for(var i=0;i<r.length;i++)2===r[i].length&&t.push({w:r[i][0],h:r[i][1]});var a={w:r&&r[0][0],h:r&&r[0][1]};return t.length&&(a.format=t),a}function O(e){var r,t,i,a={plcmtcnt:1,assets:[]};for(var s in e){var n={};if(e.hasOwnProperty(s)&&!(a.assets&&0<a.assets.length&&a.assets.hasOwnProperty(s)))switch(s){case u.TITLE.KEY:n={id:u.TITLE.ID,required:e[s].required?1:0,title:{len:e[s].len||e[s].length||A}};break;case u.IMAGE.KEY:var c=e[s].wmin||e[s].minimumWidth||(m.isArray(e[s].minsizes)&&0<e[s].minsizes.length?e[s].minsizes[0]:0),d=e[s].hmin||e[s].minimumHeight||(m.isArray(e[s].minsizes)&&1<e[s].minsizes.length?e[s].minsizes[1]:0);n={id:u.IMAGE.ID,required:e[s].required?1:0,img:{type:g.IMAGE,w:e[s].w||e[s].width||(m.isArray(e[s].sizes)&&0<e[s].sizes.length?e[s].sizes[0]:0),h:e[s].h||e[s].height||(m.isArray(e[s].sizes)&&1<e[s].sizes.length?e[s].sizes[1]:0),mimes:e[s].mimes,ext:e[s].ext}},0<c&&(n.img.wmin=c),0<d&&(n.img.hmin=d),n.img.w||(n.img.w=p),n.img.h||(n.img.h=h);break;case u.ICON.KEY:(n={id:u.ICON.ID,required:e[s].required?1:0,img:{type:g.ICON,w:e[s].w||e[s].width||(m.isArray(e[s].sizes)&&0<e[s].sizes.length?e[s].sizes[0]:0),h:e[s].h||e[s].height||(m.isArray(e[s].sizes)&&0<e[s].sizes.length?e[s].sizes[1]:0)}}).img.w||(n.img.w=b),n.img.h||(n.img.h=T);break;case u.SPONSORED.KEY:case u.SPONSOREDBY.KEY:case u.PRICE.KEY:case u.SALEPRICE.KEY:case u.DESC.KEY:case u.BODY.KEY:case u.DISPLAYURL.KEY:case u.CTA.KEY:r=D.NATIVE_ASSET_KEY_TO_ASSET_MAP[s],t=e,i=r.KEY,n={id:r.ID,required:t[i].required?1:0,data:{type:r.TYPE,len:t[i].len,ext:t[i].ext}};break;default:if(e[s].required)return void(S=!0)}n.id&&(a.assets[a.assets.length]=n)}var o=y.length,l=0;return y.forEach(function(e){for(var r=a.assets.length,t=0;t<r;t++){if(e.id===a.assets[t].id){l++;break}if(4===e.id&&11===a.assets[t].id&&m.deepAccess(a.assets[t],"data.type")===e.data.type){l++;break}}}),S=o!==l,a}Object(i.registerBidder)(D)}},[425]);