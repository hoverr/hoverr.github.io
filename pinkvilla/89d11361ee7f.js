webpackJsonp([0],{342:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=r(160),o=r(176),i=r(73),a=r(46),u=r(21),l=r.n(u),d=r(95),s=r(57),c=r(96),f=r(97);function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(e){o=!0,i=e}finally{try{t||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=0;function p(e,n){c.a.markerPoint(s.a.EMBED_LOAD,e,"",v,n)}var _=l()(function(e){return new Promise(function(n){o.a.getInstance().on(e,function(e){n(Math.round(e.timestamp))})})});function w(){var e,n,r,t=Object(i.a)().offset;return null==t?Promise.reject():Promise.all([(r=null===(e=window)||void 0===e?void 0:null===(n=e.performance)||void 0===n?void 0:n.timing,(null===r||void 0===r?void 0:r.domComplete)?Promise.resolve(r):new Promise(function(e,n){var r=a.a.add(window,"load",function(){var t,o,i=null===(t=window)||void 0===t?void 0:null===(o=t.performance)||void 0===o?void 0:o.timing;i?e(i):n(),r.remove()})})),_("loading"),_("mounted")]).then(function(e){var n=m(e,3),r=n[0],o=n[1],i=n[2];if(null!=o&&null!=i){var a=r.navigationStart;c.a.markerStart(s.a.EMBED_LOAD,v,a-t),p("frame_navigation_start",a),p("frame_response_end",r.responseEnd),p("frame_dom_complete",r.domComplete),p("embed_loading",o),p("embed_mounted",i);var u=Object(f.b)({includeBuffered:!0,type:"link"});if(u.length>0){var l=u[0],_=l.response_start+l.response_time;p("css_request",l.request_start+a),p("css_response",_+a)}c.a.markerEnd(s.a.EMBED_LOAD,d.a.SUCCESS,v,i)}})}Object(t.b)().then(function(){return w()})}});