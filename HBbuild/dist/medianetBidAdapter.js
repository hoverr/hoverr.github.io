pbjsChunk([148],{423:function(e,t,n){e.exports=n(424)},424:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return T});var r=n(1),d=n(0),u=n(3),i=n(9),a=n(2),o=n(32);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p="medianet",l={NOT_DETERMINED:0,ABOVE_THE_FOLD:1,BELOW_THE_FOLD:2},c="client_timeout",f="client_bid_won",m=Object(o.b)(),g={};function b(e){return s({domain:(e=e||{}).domain||g.urlData.domain,page:e.page||g.urlData.page,ref:e.ref||function(){try{return window.top.document.referrer}catch(e){return document.referrer}}(),isTop:e.isTop||g.urlData.isTop},function(){if(g.pageMeta)return g.pageMeta;var e=y('link[rel="canonical"]',"href"),t=y('meta[property="og:url"]',"content"),n=y('meta[name="twitter:url"]',"content");return g.pageMeta=s({},e&&{canonical_url:e},t&&{og_url:t},n&&{twitter_url:n}),g.pageMeta}())}function y(e,t){var n,r,i=function(e,t){try{var n=d.getWindowTop().document.querySelector(e);if(null!==n&&n[t])return n[t]}catch(e){}}(e,t);return i&&(n=i,(r=d.getWindowTop().document.createElement("a")).href=n,r.href)}function h(e,t){return e.filter(function(e){return e.type===t})}function v(e){return{w:parseInt(e[0],10),h:parseInt(e[1],10)}}function _(e){var t,n={id:e.bidId,ext:{dfp_id:e.adUnitCode,display_count:e.bidRequestsCount},all:e.params},r=d.deepAccess(e,"mediaTypes.banner.sizes")||e.sizes||[];if(0<r.length&&(n.banner=(t=r,d.isArray(t)&&2===t.length&&!d.isArray(t[0])?[v(t)]:t.map(function(e){return v(e)}))),e.nativeParams)try{n.native=JSON.stringify(e.nativeParams)}catch(e){d.logError("".concat(p," : Incorrect JSON : bidRequest.nativeParams"))}e.params.crid&&(n.tagid=e.params.crid.toString());var i=parseFloat(e.params.bidfloor);i&&(n.bidfloor=i);var a,o=function(e){var t=document.getElementById(e);if(t&&t.getBoundingClientRect){var n=t.getBoundingClientRect(),r={};return r.top_left={y:n.top,x:n.left},r.bottom_right={y:n.bottom,x:n.right},r}return null}(e.adUnitCode);if(o&&n.banner&&0!==n.banner.length){var c={top_left:{x:(a=o).top_left.x+window.pageXOffset,y:a.top_left.y+window.pageYOffset},bottom_right:{x:a.bottom_right.x+window.pageXOffset,y:a.bottom_right.y+window.pageYOffset}};n.ext.coordinates=c,n.ext.viewability=w(o.top_left,x(n.banner)),.5<w(c.top_left,x(n.banner))?n.ext.visibility=l.ABOVE_THE_FOLD:n.ext.visibility=l.BELOW_THE_FOLD}else n.ext.visibility=l.NOT_DETERMINED;return n}function x(e){return e.reduce(function(e,t){return t.h*t.w<e.h*e.w?t:e})}function w(e,t){var n=t.w*t.h,r=T.getWindowSize(),i={x:e.x+t.w,y:e.y+t.h};return 0==n||-1===r.w||-1===r.h?0:function(e,t,n,r){if(e.x>r.x||t.x<n.x||e.y>r.y||t.y<n.y)return 0;return(Math.min(t.x,r.x)-Math.max(e.x,n.x))*(Math.min(t.y,r.y)-Math.max(e.y,n.y))}(e,i,{x:0,y:0},{x:r.w,y:r.h})/n}function E(e,t){return{site:b(e[0].params.site),ext:(n=e[0].params,r=t.gdprConsent,i=t.uspConsent,a=e[0].userId,o=T.getWindowSize(),c=!(!r||!r.gdprApplies),d=!!i,s({},{customer_id:n.cid},{prebid_version:pbjs.version},{gdpr_applies:c},c&&{gdpr_consent_string:r.consentString||""},{usp_applies:d},d&&{usp_consent_string:i||""},-1!==o.w&&-1!==o.h&&{screen:o},a&&{user_id:a})),id:e[0].auctionId,imp:e.map(function(e){return _(e)}),tmax:t.timeout||u.b.getConfig("bidderTimeout")};var n,r,i,a,o,c,d}function O(e,t){var n={protocol:"https",hostname:"qsearch-a.akamaihd.net/log",search:function(e,t){t=d.isArray(t)&&t||[];var n={logid:"kfk",evtid:"projectevents",project:"prebid"};return n.acid=d.deepAccess(t,"0.auctionId")||"",n.cid=pbjs.medianetGlobals.cid||"",n.crid=t.map(function(e){return d.deepAccess(e,"params.0.crid")||e.adUnitCode}).join("|"),n.adunit_count=t.length||0,n.dn=g.urlData.domain||"",n.requrl=g.urlData.page||"",n.istop=g.urlData.isTop||"",n.event=e.name||"",n.value=e.value||"",n.rd=e.related_data||"",n}(e,t)};d.triggerPixel(i.a(n))}g.urlData={domain:i.c(m.referer).host,page:m.referer,isTop:m.reachedTop},pbjs.medianetGlobals={};var T={code:p,supportedMediaTypes:[a.b,a.c],isBidRequestValid:function(e){return e.params?e.params.cid&&d.isStr(e.params.cid)&&!d.isEmptyStr(e.params.cid)?(s(pbjs.medianetGlobals,!pbjs.medianetGlobals.cid&&{cid:e.params.cid}),!0):(d.logError("".concat(p," : cid should be a string")),!1):(d.logError("".concat(p," : Missing bid parameters")),!1)},buildRequests:function(e,t){var n=E(e,t);return{method:"POST",url:"https://prebid.media.net/rtb/prebid",data:JSON.stringify(n)}},interpretResponse:function(e){var t=[];if(!e||!e.body)return d.logInfo("".concat(p," : response is empty")),t;var n=e.body.bidList;return d.isArray(n)&&0!==n.length?t=n.filter(function(e){return!1===(t=e).no_bid&&0<parseFloat(t.cpm);var t}):(d.logInfo("".concat(p," : no bids")),t)},getUserSyncs:function(e,t){var n,r=(n=t,!d.isEmpty(n)&&n[0].body&&n[0].body.ext&&d.isArray(n[0].body.ext.csUrl)?n[0].body.ext.csUrl:[]);return e.iframeEnabled?h(r,"iframe"):e.pixelEnabled?h(r,"image"):void 0},onTimeout:function(e){try{O({name:c,value:e.length,related_data:e[0].timeout||u.b.getConfig("bidderTimeout")},e)}catch(e){}},onBidWon:function(e){try{O({name:f,value:e.cpm},[e])}catch(e){}},clearMnData:function(){g={}},getWindowSize:function(){return{w:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||-1,h:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||-1}}};Object(r.registerBidder)(T)}},[423]);