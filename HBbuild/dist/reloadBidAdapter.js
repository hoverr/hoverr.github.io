pbjsChunk([109],{516:function(t,r,e){t.exports=e(517)},517:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),e.d(r,"spec",function(){return a});var n=e(1),v=e(0),a={code:"reload",png:{},isBidRequestValid:function(t){return!!(t.params&&t.params.plcmID&&t.params.partID&&"opdomID"in t.params&&"bsrvID"in t.params&&0<=t.params.bsrvID&&t.params.bsrvID<=99)},buildRequests:function(t,r){var e=[],n={id:Math.random().toString(10).substring(2),imp:[]},a=null;v.deepAccess(r,"gdprConsent")&&(a=r.gdprConsent);for(var i=null,o=null,s=0;s<t.length;s++){var p=t[s];i=new c({prxVer:"1.10",prxType:"bd",plcmID:p.params.plcmID,partID:p.params.partID,opdomID:p.params.opdomID,bsrvID:p.params.bsrvID,gdprObj:a,mediaObj:p.mediaTypes,wnd:v.getWindowTop(),rtop:v.deepAccess(r,"refererInfo.reachedTop")||!1}),null===o&&(o=i.getSrvUrl());var u={id:p.bidId,bidId:p.bidId,adUnitCode:p.adUnitCode,transactionId:p.transactionId,bidderRequestId:p.bidderRequestId,auctionId:p.auctionId,banner:{ext:{type:p.params.type||"pcm",pcmdata:i.getPCMObj()}}};n.imp.push(u)}if(0<n.imp.length){var d=JSON.stringify(n);e.push({method:"POST",url:o,data:d})}return e},interpretResponse:function(t){for(var r=t.body,e=[],n=0;n<r.seatbid.length;n++)for(var a=r.seatbid[n],i=0;i<a.bid.length;i++){var o=a.bid[i],s=new c({plcmID:o.ext.plcmID,partID:o.ext.partID,opdomID:o.ext.opdomID,bsrvID:o.ext.bsrvID});if(s.setPCMObj(o.ext.pcmdata),0<s.getBP()){var p={requestId:o.impid,ad:s.getAM(),cpm:s.getBP()/100,width:s.getW(),height:s.getH(),creativeId:o.id,currency:s.getBC(),ttl:300,netRevenue:!0};e.push(p),this.png[o.ext.adUnitCode]=s.getPingUrl("bidwon")}}return e},onBidWon:function(t){"string"==typeof this.png[t.adUnitCode]&&""!==this.png[t.adUnitCode]&&((new Image).src=this.png[t.adUnitCode])}};function c(e){var t=this,a="120",r="prx_root_",n="prx_pnws_",i=null,o="NA",s="",p="",u=function(){try{var t=g(c());if(null===t)throw{s:"init"};if("string"!=typeof t.statStr)throw{s:"error"};if("string"!=typeof t.srvUrl)throw{s:"error"};return t.status="ok",t}catch(t){var r={statStr:null,srvUrl:null};return r.status=t.s,r}}();function d(t,r){return null==i||!0!==i.go||void 0===i[t]?r:i[t]}function c(){return r+e.plcmID+"_"+e.partID}function l(){return!0===e.lmod?n+e.lplcmID+"_"+e.partID:n+e.plcmID+"_"+e.partID}function m(t,r){var e={ver:a,ts:Date.now()};"string"==typeof r?(e.objtype=!1,e.memdata=r):(e.objtype=!0,e.memdata=JSON.stringify(r));var n=JSON.stringify(e);return v.setDataInLocalStorage(t,n),1}function g(t){try{var r=v.getDataFromLocalStorage(t);if(null===r)return null;var e=JSON.parse(r);if(e.ver!==a)throw{message:"version_error"};return!0===e.objtype?JSON.parse(e.memdata):""+e.memdata}catch(t){return null}}"ok"!==u.status&&(p+="WARNING: clnt-int mem file initialized\n"),t.getPCMObj=function(){return{thisVer:"120",statStr:u.statStr,plcmData:{prxVer:e.prxVer,prxType:e.prxType,plcmID:e.plcmID,partID:e.partID,opdomID:e.opdomID,bsrvID:e.bsrvID,dmod:e.dmod,lmod:e.lmod,lplcmID:e.lplcmID},clntData:(t=e.wnd,r=e.rtop,{version:200,locTime:Date.now(),winInfo:function(t){return{phs:{w:t.screen.width,h:t.screen.height},avl:{w:t.screen.availWidth,h:t.screen.availHeight},inr:{w:t.innerWidth,h:t.innerHeight},bdy:{w:t.document.body.clientWidth,h:t.document.body.clientHeight}}}(t),envInfo:{userAgent:navigator.userAgent,appName:navigator.appName,appVersion:navigator.appVersion},topw:!0===r,prot:t.document.location.protocol,host:t.document.location.host,title:t.document.title}),resultData:function(){try{return g(l())}catch(t){return null}}(),gdprObj:e.gdprObj,mediaObj:e.mediaObj,proxetString:null,dboData:null,plcmSett:null};var t,r},t.setPCMObj=function(t){if("100"!==t.thisVer)return o="error",s="incomp_output_obj_version",void(p+=" ERROR incomp_output_obj_version");o=t.status,s=t.message,p+=" "+t.log,"ok"===t.status&&(function(t,r){try{var e={statStr:t,srvUrl:r};m(c(),e)}catch(t){return}}(t.statStr,t.srvUrl),i=t.instr)},t.getSrvUrl=function(){var t=r(0);return!0!==isNaN(parseInt(e.bsrvID))&&(t=r(parseInt(e.bsrvID))),"string"==typeof u.srvUrl&&""!==u.srvUrl&&(t=u.srvUrl),"https://"+t+"/bid";function r(t){return"bidsrv"+(10<=(r=t)?""+r:"0"+r)+".reload.net";var r}},t.getMT=function(){return d("mtype","dsp")},t.getW=function(){return d("width",0)},t.getH=function(){return d("height",0)},t.getBP=function(){return d("prc",0)},t.getBC=function(){return d("cur","USD")},t.getAM=function(){return d("am",null)},t.getPingUrl=function(t){var r=d("pingdata",{});return"undefined"!==r[t]?r[t]:""},t.setRD=function(t){return function(t){try{return m(l(),t),!0}catch(t){return!1}}(t)},t.getStat=function(){return o},t.getMsg=function(){return s},t.getLog=function(){return p}}Object(n.registerBidder)(a)}},[516]);