atdpbjsChunk([190],{317:function(e,t,n){e.exports=n(318)},318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return l});var i=n(1),d=n(3),o=n(0),r=n(2),s=n(4),a=n(10),u=[r.b,r.d],h="https://ad.nvivo.tv/";function c(e){e.renderer.push(function(){window.ANOutstreamVideo.renderAd({sizes:[e.width,e.height],width:e.width,height:e.height,targetId:e.adUnitCode,adResponse:e.adResponse,rendererOptions:{showVolume:!1,allowFullscreen:!1}})})}function p(e){Object(s.a)(h+"ads/www/admin/plugins/Prebid/tracking/track.php",null,JSON.stringify(e),{withCredentials:!1,method:"POST",crossOrigin:!0})}var l={code:"envivo",supportedMediaTypes:u,isBidRequestValid:function(e){return void 0!==e.params&&0<parseInt(o.getValue(e.params,"publisherId"))},buildRequests:function(e){return{method:"POST",url:h+"ads/www/admin/plugins/Prebid/getAd.php",options:{withCredentials:!1,crossOrigin:!0},data:e}},interpretResponse:function(e,t){var n=e.body,i=[],r=[];return o._each(n,function(e){e.adResponse={content:e.vastXml,height:e.height,width:e.width},e.ttl=d.b.getConfig("_bidderTimeout"),e.renderer="outstream"===e.context?function(e,t,n){var i=a.a.install({id:t.id,url:t.url,loaded:!1,config:{player_height:e.height,player_width:e.width},adUnitCode:n});try{i.setRender(c)}catch(e){o.logWarn("Prebid Error calling setRender on renderer",e)}return i}(e,{id:e.adUnitCode,url:"https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"},e.adUnitCode):void 0,i.push(e)}),r.push({function:"saveResponses",request:t,response:i}),p(r),i},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:h+"ads/www/admin/plugins/Prebid/userSync.php"}]},onBidWon:function(e){var t=[];t.push(e),t[0].function="onBidWon",p(t)},onTimeout:function(e){e.unshift({function:"onTimeout"}),p(e)}};Object(i.registerBidder)(l)}},[317]);