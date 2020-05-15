pbjsChunk([196],{305:function(e,t,r){e.exports=r(306)},306:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return l}),t.cleanSizes=m,t.shuffle=b,t.removeDuplicate=h,t.upto5=y,t.matchRequest=g,t.checkDeepArray=v,t.defaultSize=O;var s=r(0),n=r(1),a=r(3);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}return r}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p="https://dmx.districtm.io/b/v1",l={code:"districtmDMX",supportedFormat:["banner"],isBidRequestValid:function(e){return!(!e.params.dmxid||!e.params.memberid)},interpretResponse:function(e,o){return(e=e.body||{}).seatbid&&s.isArray(e.seatbid)?e.seatbid.reduce(function(e,t){var r=t.bid.reduce(function(e,t){if(e.price<t.price){var r=O(g(t.impid,o)),n=r.width,i=r.height;return t.cpm=parseFloat(t.price).toFixed(2),t.bidId=t.impid,t.requestId=t.impid,t.width=t.w||n,t.height=t.h||i,t.dealid&&(t.dealId=t.dealid),t.ad=t.adm,t.netRevenue=!0,t.creativeId=t.crid,t.currency="USD",t.ttl=60,t}return e.cpm=e.price,e},{price:0});return r.adm&&e.push(r),e},[]).filter(function(e){return!!e.bidId}):[]},buildRequests:function(e,t){var r=a.b.getConfig("bidderTimeout"),n=null,i={id:s.generateUUID(),cur:["USD"],tmax:r-300,test:this.test()||0,site:{publisher:{id:String(e[0].params.memberid)||null}}};try{var o=a.b.getConfig("dmx");i.user=o.user||{};var u=o.site||{};i.site=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach(function(e){f(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},i.site,{},u)}catch(e){}i.test||delete i.test,t.gdprConsent&&(i.regs={},i.regs.ext={},i.regs.ext.gdpr=!0===t.gdprConsent.gdprApplies?1:0,i.user={},i.user.ext={},i.user.ext.consent=t.gdprConsent.consentString),t&&t.uspConsent&&(i.regs=i.regs||{},i.regs.ext=i.regs.ext||{},i.regs.ext.us_privacy=t.uspConsent);try{n=e[0].schain,i.source={},i.source.ext={},i.source.ext.schain=n||{}}catch(e){}var c=e.map(function(e){var t={};return t.id=e.bidId,t.tagid=String(e.params.dmxid),t.secure=1,t.banner={topframe:1,w:m(e.sizes,"w"),h:m(e.sizes,"h"),format:m(e.sizes).map(function(e){return{w:e[0],h:e[1]}}).filter(function(e){return"number"==typeof e.w&&"number"==typeof e.h})},t});return c.length<=5?(i.imp=c,{method:"POST",url:p,data:JSON.stringify(i),bidderRequest:t}):y(c,i,t,p)},test:function(){return-1!==window.location.href.indexOf("dmTest=true")?1:0},getUserSyncs:function(e,t,r,n){var i=[],o="https://cdn.districtm.io/ids/index.html";if(r&&r.gdprApplies&&"string"==typeof r.consentString&&i.push(["gdpr",r.consentString]),n&&i.push(["ccpa",n]),0<i.length&&(o+="?"+i.map(function(e){return e.join("=")}).join("&")),e.iframeEnabled)return[{type:"iframe",url:o}]}};function m(e,t){var r=b(e,[{size:[300,250],s:100},{size:[728,90],s:95},{size:[320,50],s:90},{size:[160,600],s:88},{size:[300,600],s:85},{size:[300,50],s:80},{size:[970,250],s:75},{size:[970,90],s:60}]);switch(t){case"w":return r[0][0]||0;case"h":return r[0][1]||0;case"size":default:return r}}function b(e,r){var t=e.filter(function(e){return-1===r.map(function(e){return"".concat(e.size[0],"x").concat(e.size[1])}).indexOf("".concat(e[0],"x").concat(e[1]))}),n=e.reduce(function(t,e){return 0===t.length?(t.push(e),t):(t.push(e),(t=(t=r.filter(function(e){return-1!==t.map(function(e){return"".concat(e[0],"x").concat(e[1])}).indexOf("".concat(e.size[0],"x").concat(e.size[1]))})).sort(function(e,t){return t.s-e.s})).map(function(e){return e.size}))},[]);return h([].concat(o(n),o(t)))}function h(r){return r.filter(function(e,t){return r.map(function(e){return"".concat(e[0],"x").concat(e[1])}).indexOf("".concat(e[0],"x").concat(e[1]))===t})}function y(e,t,r,n){for(var i=[];0!==e.length;)5<=e.length?i.push(e.splice(0,5)):i.push(e.splice(0,e.length));return i.map(function(e){return t.imp=e,{method:"POST",url:n,data:JSON.stringify(t),bidderRequest:r}})}function g(t,e){return i(e.bidderRequest.bids.filter(function(e){return e.bidId===t}),1)[0]}function v(e){return Array.isArray(e)&&Array.isArray(e[0])?e[0]:e}function O(e){var t=e.sizes,r={};return r.width=v(t)[0],r.height=v(t)[1],r}Object(n.registerBidder)(l)}},[305]);