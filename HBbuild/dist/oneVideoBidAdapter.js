pbjsChunk([133],{453:function(e,r,i){e.exports=i(454)},454:function(e,r,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),i.d(r,"spec",function(){return l});var v=i(0),t=i(1);function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var i=[],t=!0,a=!1,o=void 0;try{for(var d,n=e[Symbol.iterator]();!(t=(d=n.next()).done)&&(i.push(d.value),!r||i.length!==r);t=!0);}catch(e){a=!0,o=e}finally{try{t||null==n.return||n.return()}finally{if(a)throw o}}return i}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,t=new Array(r);i<r;i++)t[i]=e[i];return t}var l={code:"oneVideo",VERSION:"3.0.0",ENDPOINT:"https://ads.adaptv.advertising.com/rtb/openrtb?ext_id=",SYNC_ENDPOINT1:"https://cm.g.doubleclick.net/pixel?google_nid=adaptv_dbm&google_cm&google_sc",SYNC_ENDPOINT2:"https://pr-bh.ybp.yahoo.com/sync/adaptv_ortb/{combo_uid}",SYNC_ENDPOINT3:"https://match.adsrvr.org/track/cmf/generic?ttd_pid=adaptv&ttd_tpi=1",supportedMediaTypes:["video"],isBidRequestValid:function(e){return"oneVideo"===e.bidder&&void 0!==e.params&&(void 0!==e.params.video&&void 0!==e.params.video.playerWidth&&void 0!==e.params.video.playerHeight&&void 0!==e.params.video.mimes&&void 0!==e.params.pubId)},buildRequests:function(e,r){var i=r?r.gdprConsent:null;return e.map(function(e){return{method:"POST",url:l.ENDPOINT+e.params.pubId,data:function(e,r,i){var t=i.refererInfo.referer,a=e.params.site&&e.params.site.page?e.params.site.page:t.href,o=e.params.site&&e.params.site.referrer?e.params.site.referrer:i.refererInfo.referer,d={id:v.generateUUID(),at:2,cur:e.cur||"USD",imp:[{id:"1",secure:"https:"===document.location.protocol,bidfloor:e.params.bidfloor,ext:{hb:1,prebidver:"3.13.0-pre",adapterver:l.VERSION}}],site:{page:a,ref:o},device:{ua:navigator.userAgent},tmax:200};null==e.params.video.display||1!=e.params.video.display?(d.imp[0].video={mimes:e.params.video.mimes,w:e.params.video.playerWidth,h:e.params.video.playerHeight,pos:e.params.video.position},e.params.video.maxbitrate&&(d.imp[0].video.maxbitrate=e.params.video.maxbitrate),e.params.video.maxduration&&(d.imp[0].video.maxduration=e.params.video.maxduration),e.params.video.minduration&&(d.imp[0].video.minduration=e.params.video.minduration),e.params.video.api&&(d.imp[0].video.api=e.params.video.api),e.params.video.delivery&&(d.imp[0].video.delivery=e.params.video.delivery),e.params.video.position&&(d.imp[0].video.pos=e.params.video.position),e.params.video.playbackmethod&&(d.imp[0].video.playbackmethod=e.params.video.playbackmethod),e.params.video.placement&&(d.imp[0].video.placement=e.params.video.placement),e.params.video.rewarded&&(d.imp[0].ext.rewarded=e.params.video.rewarded),d.imp[0].video.linearity=1,d.imp[0].video.protocols=e.params.video.protocols||[2,5]):1==e.params.video.display&&(d.imp[0].banner={mimes:e.params.video.mimes,w:e.params.video.playerWidth,h:e.params.video.playerHeight,pos:e.params.video.position},e.params.video.placement&&(d.imp[0].banner.placement=e.params.video.placement));e.params.video.inventoryid&&(d.imp[0].ext.inventoryid=e.params.video.inventoryid);e.params.video.sid&&(d.source={ext:{schain:{complete:1,nodes:[{sid:e.params.video.sid,rid:d.id}]}}});e.params.site&&e.params.site.id&&(d.site.id=e.params.site.id);(n(r)||i&&i.uspConsent)&&(d.regs={ext:{}},n(r)&&(d.regs.ext.gdpr=1),r&&r.consentString&&(d.user={ext:{consent:r.consentString}}),i&&i.uspConsent&&(d.regs.ext.us_privacy=i.uspConsent));return d}(e,i,r),bidRequest:e}})},interpretResponse:function(r,e){var i,t,a,o,d,n,p,s,m,c=e.bidRequest;try{i=(r=r.body).seatbid[0].bid[0]}catch(e){r=null}return r&&i&&(i.adm||i.nurl)&&i.price?(o=c.sizes,d=v.parseSizesInput(o),n=u(d.length?d[0].split("x"):[],2),p=n[0],s=n[1],t={width:parseInt(p,10)||void 0,height:parseInt(s,10)||void 0},a={requestId:c.bidId,bidderCode:l.code,cpm:i.price,adId:i.adid,creativeId:i.crid,width:t.width,height:t.height,mediaType:"video",currency:r.cur,ttl:100,netRevenue:!0,adUnitCode:c.adUnitCode},i.nurl?a.vastUrl=i.nurl:i.adm&&(a.vastXml=i.adm),a.renderer="outstream"===c.mediaTypes.video.context?void((m=c).renderer||(m.renderer={},m.renderer.url="https://cdn.vidible.tv/prod/hb-outstream-renderer/renderer.js",m.renderer.render=function(e){setTimeout(function(){o2PlayerRender(e)},700)})):void 0,a):(v.logWarn("No valid bids from ".concat(l.code," bidder")),[])},getUserSyncs:function(e,r,i){var t=2<arguments.length&&void 0!==i?i:{},a=t.gdprApplies,o=t.consentString,d=void 0===o?"":o;if(e.pixelEnabled)return[{type:"image",url:l.SYNC_ENDPOINT1},{type:"image",url:l.SYNC_ENDPOINT2},{type:"image",url:"https://sync-tm.everesttech.net/upi/pid/m7y5t93k?gdpr=".concat(a?1:0,"&gdpr_consent=").concat(d,"&redir=https%3A%2F%2Fpixel.advertising.com%2Fups%2F55986%2Fsync%3Fuid%3D%24%7BUSER_ID%7D%26_origin%3D0")+encodeURI("&gdpr=".concat(a?1:0,"&gdpr_consent=").concat(d))},{type:"image",url:l.SYNC_ENDPOINT3}]}};function n(e){return e&&e.gdprApplies}Object(t.registerBidder)(l)}},[453]);