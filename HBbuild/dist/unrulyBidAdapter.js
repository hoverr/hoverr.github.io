atdpbjsChunk([59],{638:function(e,r,n){e.exports=n(639)},639:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"adapter",function(){return s});var t=n(0),i=n(10),d=n(1),a=n(2);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function u(e){return e.filter(function(e){var r=!!t.deepAccess(e,"ext.renderer.config"),n=!!t.deepAccess(e,"ext.renderer.config.siteId");return r||t.logError(new Error("UnrulyBidAdapter: Missing renderer config.")),n||t.logError(new Error("UnrulyBidAdapter: Missing renderer siteId.")),n}).map(function(e){var r=t.deepAccess(e,"ext.renderer");return function(e){if(!e.config)throw new Error("UnrulyBidAdapter: Missing renderer config.");if(!e.config.siteId)throw new Error("UnrulyBidAdapter: Missing renderer siteId.");parent.window.unruly=parent.window.unruly||{},parent.window.unruly.native=parent.window.unruly.native||{},parent.window.unruly.native.siteId=parent.window.unruly.native.siteId||e.config.siteId,parent.window.unruly.native.supplyMode="prebid"}(r),parent.window.unruly.native.prebid=parent.window.unruly.native.prebid||{},parent.window.unruly.native.prebid.uq=parent.window.unruly.native.prebid.uq||[],{rendererInstance:i.a.install(o({},r,{callback:function(){}})),serverBid:e}}).map(function(e){var r,n,t=e.rendererInstance,i=e.serverBid,d=(n=t,{requestId:(r=i).bidId,cpm:r.cpm,width:r.width,height:r.height,vastUrl:r.vastUrl,netRevenue:!0,creativeId:r.bidId,ttl:360,currency:"USD",renderer:n,mediaType:a.d}),u=o({},d,{renderer:t,adUnitCode:i.ext.adUnitCode});return t.setRender(function(){var e;e=u,parent.window.unruly.native.prebid.uq.push(["render",e])}),d})}var s={code:"unruly",supportedMediaTypes:[a.d],isBidRequestValid:function(e){if(!e)return!1;var r=t.deepAccess(e,"mediaTypes.video.context");return"video"===e.mediaType||"outstream"===r},buildRequests:function(e,r){return{url:"https://targeting.unrulymedia.com/prebid",method:"POST",data:{bidRequests:e,bidderRequest:r},options:{contentType:"text/plain"}}},interpretResponse:function(e){var r=(0<arguments.length&&void 0!==e?e:{}).body;return!r||!r.bids?[]:u(r.bids)},getUserSyncs:function(e,r,n){var t="";n&&"gdprApplies"in n&&(n.gdprApplies&&"string"==typeof n.consentString?t+="?gdpr=1&gdpr_consent=".concat(n.consentString):t+="?gdpr=0");var i=[];return e.iframeEnabled&&i.push({type:"iframe",url:"https://video.unrulymedia.com/iframes/third-party-iframes.html"+t}),i}};Object(d.registerBidder)(s)}},[638]);