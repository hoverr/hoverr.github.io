pbjsChunk([40],{645:function(e,t,n){e.exports=n(646)},646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return a});var r=n(0),i=n(1);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=r.getWindowTop(),a={code:"yieldmo",supportedMediaTypes:["banner"],isBidRequestValid:function(e){return!!(e&&e.adUnitCode&&e.bidId)},buildRequests:function(e,t){var r={p:[],page_url:t.refererInfo.referer,bust:(new Date).getTime().toString(),pr:t.refererInfo.referer,scrd:d.devicePixelRatio||0,dnt:c(),e:function(){var t=window.document.createElement("iframe");try{return t.setAttribute("style","display:none"),window.document.body.appendChild(t),t.contentWindow._testVar=!0,void window.document.body.removeChild(t)}catch(e){return window.document.body.removeChild(t),1}}()?89:u()&&s()?5:u()?4:s()?1:function(){if(window.location&&window.location.href){var e=window.location.href;return p()&&-1!==e.indexOf("google")&&-1!==e.indexOf("safeframe")}}()?11:p()?10:window.mraid?2:window===window.parent?0:window.top===window||window.frameElement?90:16,description:document.querySelector('meta[name="description"]')?document.querySelector('meta[name="description"]').getAttribute("content"):"",title:d.document.title||"",w:d.innerWidth,h:d.innerHeight,userConsent:JSON.stringify({gdprApplies:t&&t.gdprConsent?t.gdprConsent.gdprApplies:void 0,cmp:t&&t.gdprConsent?t.gdprConsent.consentString:void 0}),us_privacy:t&&t.us_privacy};return e.forEach(function(e){r.p.push(function(e){var t={placement_id:e.adUnitCode,callback_id:e.bidId,sizes:e.mediaTypes.banner.sizes};e.params&&(e.params.placementId&&(t.ym_placement_id=e.params.placementId),e.params.bidFloor&&(t.bidFloor=e.params.bidFloor));return JSON.stringify(t)}(e));var t=m(e,"pubcid");t?r.pubcid=t:e.crumbs&&e.crumbs.pubcid&&(r.pubcid=e.crumbs.pubcid);var n=m(e,"tdid");n&&(r.tdid=n),e.schain&&(r.schain=JSON.stringify(e.schain))}),r.p="["+r.p.toString()+"]",{method:"GET",url:"https://ads.yieldmo.com/exchange/prebid",data:r}},interpretResponse:function(e){var n=[],t=e.body;return 0<t.length&&t.forEach(function(e){var t;e.cpm&&0<e.cpm&&n.push({requestId:(t=e).callback_id,cpm:t.cpm,width:t.width,height:t.height,creativeId:t.creative_id,currency:"USD",netRevenue:!0,ttl:300,ad:t.ad})}),n},getUserSync:function(e){return t=e,/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&!c()&&t.iframeEnabled?[{type:"iframe",url:"https://static.yieldmo.com/blank.min.html?orig="+r.getOrigin()}]:[];var t}};function c(){return"1"===window.doNotTrack||"1"===window.navigator.doNotTrack||!1}function u(){try{var e=window.frameElement,t=window.frameElement.parentNode;return e&&t?-1<e.id.indexOf("google_ads_iframe")&&-1<t.id.indexOf("google_ads_iframe"):!1}catch(e){return!1}}function s(){try{var e=window.context||window.parent.context;return e&&e.pageViewId?e:!1}catch(e){return!1}}function p(){return window.$sf&&window.$sf.ext}function m(e,t){var n;return e&&e.userId&&e.userId[t]&&"object"===o(e.userId)&&(n=e.userId[t]),n}Object(i.registerBidder)(a)}},[645]);