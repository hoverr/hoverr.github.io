pbjsChunk([254],{132:function(e,r,t){e.exports=t(133)},133:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return h});var m=t(0),I=t(3),a=t(1),h={code:"adbutler",pageID:Math.floor(1e7*Math.random()),aliases:["divreach"],isBidRequestValid:function(e){return!(!e.params.accountID||!e.params.zoneID)},buildRequests:function(e){var r,t,a,d,n,i,o,s=[],c={};for(r=0;r<e.length;r++)a=e[r],t=m.getBidIdParameter("zoneID",a.params),d=m.getBidIdParameter("accountID",a.params),n=m.getBidIdParameter("keyword",a.params),i=m.getBidIdParameter("domain",a.params),t in c||(c[t]=0),void 0!==i&&0!==i.length||(i="servedbyadbutler.com"),o="https://"+i+"/adserve/;type=hbr;",o+="ID="+encodeURIComponent(d)+";",o+="setID="+encodeURIComponent(t)+";",o+="pid="+encodeURIComponent(h.pageID)+";",o+="place="+encodeURIComponent(c[t])+";",""!==n&&(o+="kw="+encodeURIComponent(n)+";"),c[t]++,s.push({method:"GET",url:o,data:{},bidRequest:a});return s},interpretResponse:function(e,r){var t,a,d,n,i,o=r.bidRequest,s=[],c={},p=!1,u=!0;return(e=e.body)&&"SUCCESS"===e.status&&o&&(t=e.cpm,a=m.getBidIdParameter("minCPM",o.params),d=m.getBidIdParameter("maxCPM",o.params),n=parseInt(e.width),i=parseInt(e.height),""!==a&&t<parseFloat(a)&&(u=!1),""!==d&&t>parseFloat(d)&&(u=!1),m._each(m.deepAccess(o,"mediaTypes.banner.sizes",[]),function(e){n===e[0]&&i===e[1]&&(p=!0)}),u&&p&&(c.requestId=o.bidId,c.bidderCode=o.bidder,c.creativeId=e.placement_id,c.cpm=t,c.width=n,c.height=i,c.ad=e.ad_code,c.ad+=h.addTrackingPixels(e.tracking_pixels),c.currency="USD",c.netRevenue=!0,c.ttl=I.b.getConfig("_bidderTimeout"),c.referrer=m.deepAccess(o,"refererInfo.referer"),s.push(c))),s},addTrackingPixels:function(e){var t="";return m._each(e,function(e){var r='<img height="0" width="0" border="0" style="display:none;" src="';r+=e,t+=r+='">'}),t}};Object(a.registerBidder)(h)}},[132]);