atdpbjsChunk([203],{289:function(t,e,o){t.exports=o(290)},290:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o.d(e,"criteoIdSubmodule",function(){return d});var b=o(0),l=o(4),c=o(9),f=o(32),n=o(13),p="cto_bidid",g="cto_bundle",m="cto_test_cookie",I=new Date(0).toString(),r=new Date(b.timestamp()+33696e6).toString();function v(t,e){var o=1<arguments.length&&void 0!==e&&e,n=c.c(t);return o?"".concat(n.hostname):"".concat(n.protocol,"://").concat(n.hostname).concat(n.port?":"+n.port:"","/")}function i(t){return b.getCookie(t)||b.getDataFromLocalStorage(t)}function C(t,e){t&&e&&(b.setCookie(t,e,r),b.setDataInLocalStorage(t,e))}function a(t){var e,o,n,c,r,i=function(){b.setCookie(m,"1");var t="1"===b.getCookie(m);return b.setCookie(m,"",I),t}(),a=v(Object(f.b)().referer),d=v(document.location.href,!0),u="undefined"!=typeof criteo_pubtag,s=(e=a,o=d,n=t.bundle,c=i,r=u,"https://gum.criteo.com/sid/json?origin=prebid"+"".concat(e?"&topUrl="+encodeURIComponent(e):"")+"".concat(o?"&domain="+encodeURIComponent(o):"")+"".concat(n?"&bundle="+encodeURIComponent(n):"")+"".concat(c?"&cw=1":"")+"".concat(r?"&pbt=1":""));l.b()(s,function(t){var e,o=JSON.parse(t);(o.bidId?C(p,o.bidId):(e=p,b.setCookie(e,"",I),b.removeDataFromLocalStorage(e)),o.acwsUrl)?("string"==typeof o.acwsUrl?[o.acwsUrl]:o.acwsUrl).forEach(function(t){return b.triggerPixel(t)}):o.bundle&&C(g,o.bundle)})}var d={name:"criteo",decode:function(t){return t},getId:function(){var t={bundle:i(g),bidId:i(p)};return a(t),{id:t.bidId?{criteoId:t.bidId}:void 0}}};Object(n.e)("userId",d)}},[289]);