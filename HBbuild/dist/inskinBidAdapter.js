atdpbjsChunk([168],{367:function(e,t,r){e.exports=r(368)},368:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return n});var h=r(0),i=r(1);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var o={inskin:{BASE_URI:"https://mfad.inskinad.com/api/v2"}},n={code:"inskin",isBidRequestValid:function(e){return!(!e.params.networkId||!e.params.siteId)},buildRequests:function(e,t){var s,r={method:"POST",url:"",data:"",bidRequest:[]};if(e.length<1)return r;var d=a({placements:[],time:Date.now(),user:{},url:t.refererInfo.referer,enableBotFiltering:!0,includePricingData:!0,parallel:!0},e[0].params);return t&&t.gdprConsent&&(d.consent={gdprVendorId:150,gdprConsentString:t.gdprConsent.consentString,gdprConsentRequired:"boolean"!=typeof t.gdprConsent.gdprApplies||t.gdprConsent.gdprApplies}),e.map(function(e){var t=o[e.bidder];s=t.BASE_URI;var r,i,n=a({divName:e.bidId,adTypes:e.adTypes||(r=e.sizes,i=[],r.forEach(function(e){var t=p.indexOf(e[0]+"x"+e[1]);0<=t&&i.push(t)}),i),eventIds:[40,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295]},e.params);n.adTypes.push(5,9,163,2163,3006),n.networkId&&n.siteId&&d.placements.push(n)}),r.data=JSON.stringify(d),r.bidRequest=e,r.url=s,r},interpretResponse:function(i,e){var t,r,n,s,d,a=[],o={};r=e.bidRequest,i=(i||{}).body;for(var p=0;p<r.length;p++)if(t={},n=(s=r[p]).bidId,o[n]=s,i){var c=i.decisions&&i.decisions[n],u=c&&c.contents&&c.contents[0]&&c.contents[0].data,m=u&&u.customData&&u.customData.pubCPM,l=c&&c.pricing&&c.pricing.clearPrice,f=m||l;c&&f&&(c.impressionUrl+="&property:pubcpm="+f,s.price=f,t.requestId=n,t.cpm=f,t.width=c.width,t.height=c.height,t.ad=(d=c,"<script>window.top.postMessage({from: 'ism-bid', bidId: '"+n+"'}, '*');<\/script>"+h.createTrackPixelHtml(d.impressionUrl)),t.currency="USD",t.creativeId=c.adId,t.ttl=360,t.netRevenue=!0,a.push(t))}return a.length&&window.addEventListener("message",function(e){if(e.data&&"ism-bid"===e.data.from&&(i.decisions&&i.decisions[e.data.bidId])){var t="ism_tag_"+Math.floor(1e17*Math.random());window[t]={bidId:e.data.bidId,bidPrice:o[e.data.bidId].price,serverResponse:i};var r=document.createElement("script");r.src="https://cdn.inskinad.com/isfe/publishercode/"+o[e.data.bidId].params.siteId+"/default.js?autoload&id="+t,document.getElementsByTagName("head")[0].appendChild(r)}}),a},getUserSyncs:function(e){var t=[];return e.pixelEnabled&&(t.push({type:"image",url:"https://e.serverbid.com/udb/9969/match?redir=https%3A%2F%2Fmfad.inskinad.com%2Fudb%2F9874%2Fpool%2Fset%2Fi.gif%3FpoolId%3D9969%26poolKey%3D"}),t.push({type:"image",url:"https://ssum.casalemedia.com/usermatchredir?s=185638&cb=https%3A%2F%2Fmfad.inskinad.com%2Fudb%2F9874%2Fsync%2Fi.gif%3FpartnerId%3D1%26userId%3D"})),e.iframeEnabled&&t.push({type:"iframe",url:"https://ssum-sec.casalemedia.com/usermatch?s=184665&cb=https%3A%2F%2Fmfad.inskinad.com%2Fudb%2F9874%2Fsync%2Fi.gif%3FpartnerId%3D1%26userId%3D"}),t}},p=[null,"120x90","120x90","468x60","728x90","300x250","160x600","120x600","300x100","180x150","336x280","240x400","234x60","88x31","120x60","120x240","125x125","220x250","250x250","250x90","0x0","200x90","300x50","320x50","320x480","185x185","620x45","300x125","800x250"];p[77]="970x90",p[123]="970x250",p[43]="300x600",Object(i.registerBidder)(n)}},[367]);