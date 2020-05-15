pbjsChunk([91],{529:function(n,i,e){n.exports=e(530)},530:function(n,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.isSchainObjectValid=u,i.isValidSchainConfig=l,i.makeBidRequestsHook=o,i.init=g;var t=e(3),c=e(7),a=e(0),s="Invalid schain object found: ",r=" should be a string",f=" should be an Integer",d=" should be an object",b=" should be an Array",h={STRICT:"strict",RELAXED:"relaxed",OFF:"off"},O=[];function u(n,i){var e="Detected something wrong within an schain config:",t="";function c(n){t+="\n"+n}function o(){(!0===i?Object(a.logError):Object(a.logWarn))(e,n,t)}if(!Object(a.isPlainObject)(n)&&(c("schain.config"+d),o(),i))return!1;if(Object(a.isNumber)(n.complete)&&Object(a.isInteger)(n.complete)||c("schain.config.complete"+f),Object(a.isStr)(n.ver)||c("schain.config.ver"+r),Object(a.hasOwn)(n,"ext")&&(Object(a.isPlainObject)(n.ext)||c("schain.config.ext"+d)),Object(a.isArray)(n.nodes))n.nodes.forEach(function(n,i){Object(a.isStr)(n.asi)||c("schain.config.nodes[".concat(i,"].asi")+r),Object(a.isStr)(n.sid)||c("schain.config.nodes[".concat(i,"].sid")+r),Object(a.isNumber)(n.hp)&&Object(a.isInteger)(n.hp)||c("schain.config.nodes[".concat(i,"].hp")+f),Object(a.hasOwn)(n,"rid")&&(Object(a.isStr)(n.rid)||c("schain.config.nodes[".concat(i,"].rid")+r)),Object(a.hasOwn)(n,"name")&&(Object(a.isStr)(n.name)||c("schain.config.nodes[".concat(i,"].name")+r)),Object(a.hasOwn)(n,"domain")&&(Object(a.isStr)(n.domain)||c("schain.config.nodes[".concat(i,"].domain")+r)),Object(a.hasOwn)(n,"ext")&&(Object(a.isPlainObject)(n.ext)||c("schain.config.nodes[".concat(i,"].ext")+d))});else if(c("schain.config.nodes"+b),o(),i)return!1;return!(0<t.length&&(o(),i))}function l(n){return void 0!==n&&(!!Object(a.isPlainObject)(n)||(Object(a.logError)(s+"the following schain config will not be used as schain is not an object.",n),!1))}function o(n,i){var c=t.b.getConfig("schain"),o=t.b.getBidderConfig();i.forEach(function(n){var i,e=n.bidderCode,t=o[i=e]&&o[i].schain||c;n.bids.forEach(function(n){var i=function(n,i){var e=h.STRICT;if(l(n)){if(Object(a.isStr)(n.validation)&&-1!=O.indexOf(n.validation)&&(e=n.validation),e===h.OFF)return n.config;if(u(n.config,!(e!==h.STRICT)))return n.config;Object(a.logError)(s+"due to the 'strict' validation setting, this schain config will not be passed to bidder '".concat(i,"'.  See above error for details."))}return null}(t,e);i&&(n.schain=i)})}),n(i)}function g(){c.default.makeBidRequests.after(o)}Object(a._each)(h,function(n){return O.push(n)}),g()}},[529]);