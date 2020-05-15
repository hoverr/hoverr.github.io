pbjsChunk([192],{313:function(e,t,n){e.exports=n(314)},314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"BIDDER_CODE",function(){return d}),n.d(t,"ADAPTER_VERSION",function(){return a}),n.d(t,"DOMAIN",function(){return s}),n.d(t,"DOMAIN_STAGING",function(){return f}),n.d(t,"DOMAIN_DEVELOPMENT",function(){return p}),n.d(t,"EVENTS_PATH",function(){return b}),n.d(t,"BIDDER_PATH",function(){return h}),n.d(t,"USER_SYNC_IFRAME_PATH",function(){return g}),n.d(t,"USER_SYNC_IMAGE_PATH",function(){return m}),n.d(t,"PRODUCTION",function(){return l}),n.d(t,"STAGING",function(){return O}),n.d(t,"DEVELOPMENT",function(){return v}),n.d(t,"DEFAULT_ENV",function(){return I}),n.d(t,"ON_ADAPTER_CALLED",function(){return E}),n.d(t,"ON_BID_WON",function(){return A}),n.d(t,"ON_BIDDER_TIMEOUT",function(){return N}),n.d(t,"IN_CONTENT",function(){return _}),n.d(t,"FOOTER",function(){return j}),n.d(t,"OVERLAY",function(){return y}),n.d(t,"WALLPAPER",function(){return D}),n.d(t,"VENDOR_ID",function(){return R}),n.d(t,"isBidRequestValid",function(){return S}),n.d(t,"buildRequests",function(){return C}),n.d(t,"interpretResponse",function(){return T}),t.onAdapterCalled=function(e,t){return{protocol:"https",hostname:B(e),pathname:b,search:{eventName:E,pubcId:Object(u.deepAccess)(t,"crumbs.pubcid"),bidId:t.bidId,adSpaceId:Object(u.deepAccess)(t,"params.adSpaceId"),cache_buster:Object(u.getUniqueIdentifierStr)()}}},n.d(t,"onBidWon",function(){return P}),n.d(t,"onTimeout",function(){return w}),n.d(t,"getUserSyncs",function(){return x}),n.d(t,"domain",function(){return B}),n.d(t,"eventsUrl",function(){return U}),n.d(t,"bidderUrl",function(){return W}),n.d(t,"userSyncIframeUrl",function(){return q}),n.d(t,"userSyncImageUrl",function(){return H}),n.d(t,"validateSizes",function(){return M}),n.d(t,"validateContext",function(){return V}),n.d(t,"validateExternalId",function(){return L}),n.d(t,"conformBidRequest",function(){return G}),n.d(t,"gdprConsent",function(){return z}),n.d(t,"requestsPayload",function(){return k}),n.d(t,"getViewDimensions",function(){return F}),n.d(t,"getDeviceDimensions",function(){return Y}),n.d(t,"getDocumentDimensions",function(){return J}),n.d(t,"isWebGLEnabled",function(){return K}),n.d(t,"getDeviceInfo",function(){return Q}),n.d(t,"resolveEnv",function(){return X}),n.d(t,"resolveDebug",function(){return Z}),n.d(t,"spec",function(){return $});var r=n(1),i=n(2),u=n(0),c=n(3),o=n(9),d="emoteev",a="1.35.0",s="prebid.emoteev.xyz",f="prebid-staging.emoteev.xyz",p="localhost:3000",b="/api/ad_event.json",h="/api/prebid/bid",g="/api/prebid/sync-iframe",m="/api/prebid/sync-image",l="production",O="staging",v="development",I=l,E="on_adapter_called",A="on_bid_won",N="on_bidder_timeout",_="content",j="footer",y="overlay",D="wallpaper",R=15,S=function(e){return!!(e&&e.params&&Object(u.deepAccess)(e,"params.adSpaceId")&&V(Object(u.deepAccess)(e,"params.context"))&&L(Object(u.deepAccess)(e,"params.externalId"))&&e.bidder===d&&M(Object(u.deepAccess)(e,"mediaTypes.banner.sizes")))},C=function(e,t,n,r,i){return{method:"POST",url:W(e),data:JSON.stringify(k(t,n,r,i))}},T=function(e){return e.body};var P=function(e,t,n){var r=n.requestId;return{protocol:"https",hostname:B(e),pathname:b,search:{eventName:A,pubcId:t,bidId:r,cache_buster:Object(u.getUniqueIdentifierStr)()}}},w=function(e,t){return{protocol:"https",hostname:B(e),pathname:b,search:{eventName:N,pubcId:Object(u.deepAccess)(t,"crumbs.pubcid"),bidId:t.bidId,adSpaceId:Object(u.deepAccess)(t,"params.adSpaceId"),timeout:t.timeout,cache_buster:Object(u.getUniqueIdentifierStr)()}}},x=function(e,t){var n=[];return t.pixelEnabled&&n.push({type:"image",url:H(e)}),t.iframeEnabled&&n.push({type:"iframe",url:q(e)}),n},B=function(e){switch(e){case v:return p;case O:return f;default:return s}},U=function(e){return o.a({protocol:e===v?"http":"https",hostname:B(e),pathname:b})},W=function(e){return o.a({protocol:e===v?"http":"https",hostname:B(e),pathname:h})},q=function(e){return o.a({protocol:e===v?"http":"https",hostname:B(e),pathname:g})},H=function(e){return o.a({protocol:e===v?"http":"https",hostname:B(e),pathname:m})},M=function(e){return Object(u.isArray)(e)&&0<e.length&&e.every(function(e){return Object(u.isArray)(e)&&2===e.length})},V=function(e){return Object(u.contains)([_,j,y,D],e)},L=function(e){return null==e||Object(u.isInteger)(e)&&0<e},G=function(e){return{params:e.params,crumbs:e.crumbs,sizes:e.sizes,bidId:e.bidId,bidderRequestId:e.bidderRequestId}},z=function(e){return(Object(u.deepAccess)(e,"gdprConsent.vendorData.vendorConsents")||{})[R]},k=function(e,t,n,r){return{akPbjsVersion:a,bidRequests:n.map(G),currency:t,debug:e,language:navigator.language,refererInfo:r.refererInfo,deviceInfo:Q(Y(window),F(window,document),J(document),K(document)),userAgent:navigator.userAgent,gdprApplies:Object(u.deepAccess)(r,"gdprConsent.gdprApplies"),gdprConsent:z(r)}},F=function(e,t){var n=e,r="inner";return void 0!==e.innerWidth&&null!==e.innerWidth||(n=t.documentElement||t.body,r="client"),{width:n["".concat(r,"Width")],height:n["".concat(r,"Height")]}},Y=function(e){return{width:e.screen?e.screen.width:"",height:e.screen?e.screen.height:""}},J=function(e){var t=e.documentElement,n=e.body,r=n?Math.max(n.offsetHeight,n.scrollHeight):0,i=Math.max(t.clientWidth,t.offsetWidth,t.scrollWidth),u=Math.max(t.clientHeight,t.offsetHeight,t.scrollHeight,r);return{width:isNaN(i)?"":i,height:isNaN(u)?"":u}},K=function(e){var t=e.createElement("canvas"),n=null;try{n=t.getContext("webgl")}catch(e){return t=void 0,!1}if(!n)try{n=t.getContext("experimental-webgl")}catch(e){return t=void 0,!1}return!!n},Q=function(e,t,n,r){return{browserWidth:t.width,browserHeight:t.height,deviceWidth:e.width,deviceHeight:e.height,documentWidth:n.width,documentHeight:n.height,webGL:r}},X=function(e,t){var n=Object(u.deepAccess)(e,"emoteev.env");return Object(u.contains)([l,O,v],t)?t:Object(u.contains)([l,O,v],n)?n:I},Z=function(e,t){return t&&t.length&&0<t.length?JSON.parse(t):!!e.debug&&e.debug},$={code:d,supportedMediaTypes:[i.b],isBidRequestValid:S,buildRequests:function(e,t){return C(X(c.b.getConfig(),Object(u.getParameterByName)("emoteevEnv")),Z(c.b.getConfig(),Object(u.getParameterByName)("debug")),c.b.getConfig("currency"),e,t)},interpretResponse:T,onBidWon:function(e){return Object(u.triggerPixel)(o.a(P(X(c.b.getConfig(),Object(u.getParameterByName)("emoteevEnv")),Object(u.getCookie)("_pubcid"),e)))},onTimeout:function(e){return Object(u.triggerPixel)(o.a(w(X(c.b.getConfig(),Object(u.getParameterByName)("emoteevEnv")),e)))},getUserSyncs:function(e){return x(X(c.b.getConfig(),Object(u.getParameterByName)("emoteevEnv")),e)}};Object(r.registerBidder)($)}},[313]);