pbjsChunk([233],{219:function(t,e,a){t.exports=a(220)},220:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setData=c,a.d(e,"audigentSubmodule",function(){return g}),e.init=f;var n=a(3),u=a(18),o=a(0),r=a(13),s=a(4),i="realTimeData";function c(t){o.setDataInLocalStorage("__adgntseg",JSON.stringify(t))}function d(r,i){var t=Object(u.a)().getUserIds(),e=null;t&&t.tdid?e=t.tdid:i({});var a="https://seg.ad.gt/api/v1/rtb_segments?tdid=".concat(e);Object(s.a)(a,{success:function(t,e){if(200===e.status)try{var n=JSON.parse(t);if(n&&n.audigent_segments){c(n);var a=r.reduce(function(t,e){var a=e&&e.code;return a&&(t[a]=n),t},{});i(a)}else i({})}catch(t){o.logError("unable to parse audigent segment data"),i({})}else 204===e.status&&i({})},error:function(){i({}),o.logError("unable to get audigent segment data")}})}var g={name:"audigent",getData:function(e,a){try{var t=o.getDataFromLocalStorage("__adgntseg");if(t){var n=JSON.parse(t);if(n.audigent_segments)return void a(e.reduce(function(t,e){var a=e&&e.code;return a&&(t[a]=n),t},{}))}d(e,a)}catch(t){d(e,a)}}};function f(t){var a=t.getConfig(i,function(t){var e=t.realTimeData;try{(e.dataProviders&&e.dataProviders.filter(function(t){return t.name&&"audigent"===t.name.toLowerCase()})[0].params).auctionDelay=e.auctionDelay}catch(t){0}a()})}Object(r.e)("realTimeData",g),f(n.b)}},[219]);