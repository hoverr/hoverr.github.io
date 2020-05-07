pbjsChunk([5],{640:function(e,t,n){e.exports=n(641)},641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"syncDelay",function(){return u}),n.d(t,"auctionDelay",function(){return s}),t.setSubmoduleRegistry=function(e){_=e},t.requestBidsHook=L,t.attachIdSystem=N,t.init=P;var i,u,s,o=n(12),r=n.n(o),a=n(3),c=n(8),l=n.n(c),d=n(0),f=n(18),g=n(7),p=n(5),m=n.n(p),b=n(13),y=n(642),v="User ID",h="cookie",D="html5",E=500,I=0,O=[],S=!1,j=[],k=[],_=[];function x(e,t){try{var n=d.isPlainObject(t)?JSON.stringify(t):t,o=new Date(Date.now()+864e5*e.expires).toUTCString();e.type===h?(d.setCookie(e.name,n,o,"Lax"),"number"==typeof e.refreshInSeconds&&d.setCookie("".concat(e.name,"_last"),(new Date).toUTCString(),o)):e.type===D&&(d.setDataInLocalStorage("".concat(e.name,"_exp"),o),d.setDataInLocalStorage(e.name,encodeURIComponent(n)),"number"==typeof e.refreshInSeconds&&d.setDataInLocalStorage("".concat(e.name,"_last"),(new Date).toUTCString()))}catch(e){d.logError(e)}}function A(e,t){var n,o=1<arguments.length&&void 0!==t?t:void 0,r=o?"".concat(e.name,"_").concat(o):e.name;try{if(e.type===h)n=d.getCookie(r);else if(e.type===D){var a=d.getDataFromLocalStorage("".concat(e.name,"_exp"));""===a?n=d.getDataFromLocalStorage(r):a&&0<new Date(a).getTime()-Date.now()&&(n=decodeURIComponent(d.getDataFromLocalStorage(r)))}"string"==typeof n&&"{"===n.charAt(0)&&(n=JSON.parse(n))}catch(e){d.logError(e)}return n}function C(e,t){var n=t?d.delayExecution(t,e.length):function(){};e.forEach(function(t){t.callback(function(e){e?(t.config.storage&&x(t.config.storage,e),t.idObj=t.submodule.decode(e)):d.logError("".concat(v,": ").concat(t.submodule.name," - request id responded with an empty value")),n()}),t.callback=void 0})}function U(e){return Array.isArray(e)&&e.length?e.filter(function(e){return d.isPlainObject(e.idObj)&&Object.keys(e.idObj).length}).reduce(function(t,n){return Object.keys(n.idObj).forEach(function(e){t[e]=n.idObj[e]}),t},{}):{}}function T(e){var t,c,n=!1;if(void 0===i&&(t=j,c=g.gdprDataHandler.getConsentData(),(i=function(e){if(e&&"boolean"==typeof e.gdprApplies&&e.gdprApplies){if(!e.consentString)return;if(1===e.apiVersion&&!1===d.deepAccess(e,"vendorData.purposeConsents.1"))return;if(2===e.apiVersion&&!1===d.deepAccess(e,"vendorData.purpose.consents.1"))return}return 1}(c)?t.reduce(function(e,t){if(t.config.storage){var n,o=A(t.config.storage),r=!1;if("number"==typeof t.config.storage.refreshInSeconds){var a=new Date(A(t.config.storage,"last"));r=a&&Date.now()-a.getTime()>1e3*t.config.storage.refreshInSeconds}!0===m.a.SUBMODULES_THAT_ALWAYS_REFRESH_ID[t.config.name]&&(r=!0),!o||r?n=t.submodule.getId(t.config.params,c,o):"function"==typeof t.submodule.extendId&&(n=t.submodule.extendId(t.config.params,o)),d.isPlainObject(n)&&(n.id&&(x(t.config.storage,n.id),o=n.id),"function"==typeof n.callback&&(t.callback=n.callback)),o&&(t.idObj=t.submodule.decode(o,t.config))}else if(t.config.value)t.idObj=t.config.value;else{var i=t.submodule.getId(t.config.params,c,void 0);d.isPlainObject(i)&&("function"==typeof i.callback&&(t.callback=i.callback),i.id&&(t.idObj=t.submodule.decode(i.id,t.config)))}return e.push(t),e},[]):(d.logWarn("".concat(v," - gdpr permission not valid for local storage or cookies, exit module")),[])).length)){var o=i.filter(function(e){return d.isFn(e.callback)});if(o.length)if(e&&0<s){var r=!(n=!0),a=function(){r||(r=!0,e())};d.logInfo("".concat(v," - auction delayed by ").concat(s," at most to fetch ids")),C(o,a),setTimeout(a,s)}else l.a.on(m.a.EVENTS.AUCTION_END,function e(){l.a.off(m.a.EVENTS.AUCTION_END,e),0<u?setTimeout(function(){C(o)},u):C(o)})}e&&!n&&e()}function L(e,t){T(function(){!function(e,t){if(![e].some(function(e){return!Array.isArray(e)||!e.length})){var n=U(t),o=Object(y.a)(n);Object.keys(n).length&&e.forEach(function(e){e.bids.forEach(function(e){e.userId=n,e.userIdAsEids=o})})}}(t.adUnits||Object(f.a)().adUnits,i),e.call(this,t)})}function w(){return T(),U(i)}function F(){var e,n,o=(e=k,n=O,Array.isArray(e)?e.reduce(function(e,t){return!t||d.isEmptyStr(t.name)||(!t.storage||d.isEmptyStr(t.storage.type)||d.isEmptyStr(t.storage.name)||-1===n.indexOf(t.storage.type))&&!d.isPlainObject(t.value)&&(t.storage||t.value)||e.push(t),e},[]):[]);if(o.length){var t=_.filter(function(t){return!r()(j,function(e){return e.name===t.name})});j=t.map(function(t){var e=r()(o,function(e){return e.name===t.name});return e?{submodule:t,config:e,callback:void 0,idObj:void 0}:null}).filter(function(e){return null!==e}),!S&&j.length&&(Object(f.a)().requestBids.before(L,40),d.logInfo("".concat(v," - usersync config updated for ").concat(j.length," submodules")),S=!0)}}function N(t){r()(_,function(e){return e.name===t.name})||(_.push(t),F())}function P(e){j=[],S=!(k=[]),i=void 0,-1===(O=[d.localStorageIsEnabled()?D:null,d.cookiesAreEnabled()?h:null].filter(function(e){return null!==e})).indexOf(h)||!d.getCookie("_pbjs_id_optout")&&!d.getCookie("_pubcid_optout")?-1===O.indexOf(D)||!d.getDataFromLocalStorage("_pbjs_id_optout")&&!d.getDataFromLocalStorage("_pubcid_optout")?(e.getConfig(function(e){var t=e.userSync||e.usersync;t&&t.userIds&&(k=t.userIds,u=d.isNumber(t.syncDelay)?t.syncDelay:E,s=d.isNumber(t.auctionDelay)?t.auctionDelay:I,F())}),Object(f.a)().getUserIds=w):d.logInfo("".concat(v," - opt-out localStorage found, exit module")):d.logInfo("".concat(v," - opt-out cookie found, exit module"))}P(a.b),Object(b.c)("userId",N)},642:function(e,t,n){"use strict";t.a=function(e){var t=[];for(var n in e)if(e.hasOwnProperty(n)){var o=r(e[n],n);o&&t.push(o)}return t};var u=n(0),s={pubcid:{source:"pubcid.org",atype:1},tdid:{source:"adserver.org",atype:1,getUidExt:function(){return{rtiPartner:"TDID"}}},id5id:{source:"id5-sync.com",atype:1},parrableid:{source:"parrable.com",atype:1},idl_env:{source:"liveramp.com",atype:1},lipb:{getValue:function(e){return e.lipbid},source:"liveintent.com",atype:1,getEidExt:function(e){if(Array.isArray(e.segments)&&e.segments.length)return{segments:e.segments}}},britepoolid:{source:"britepool.com",atype:1},digitrustid:{getValue:function(e){return e.data.id},source:"digitru.st",atype:1},criteoId:{source:"criteo.com",atype:1},netId:{source:"netid.de",atype:1}};function r(e,t){var n=s[t];if(n&&e){var o={};o.source=n.source;var r=u.isFn(n.getValue)?n.getValue(e):e;if(r){var a={id:r,atype:n.atype};if(u.isFn(n.getUidExt)){var i=n.getUidExt(e);i&&(a.ext=i)}if(o.uids=[a],u.isFn(n.getEidExt)){var c=n.getEidExt(e);c&&(o.ext=c)}return o}}return null}}},[640]);