pbjsChunk([16],{512:function(t,e,n){t.exports=n(513)},513:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"lib",function(){return s});var r=n(6),a=n(7),i=n(5),u=n.n(i),A=n(0),o=Object(r.a)({global:"realvuAnalytics",handler:"on",analyticsType:"bundle"});window.top1=window;try{for(var d=window;window.top1!=top&&void 0!==d.document;)d=(window.top1=d).parent}catch(t){}var s={ads:[],x1:0,y1:0,x2:0,y2:0,t0:new Date,nn:0,frm:!1,msg:[],foc:!window.top1.document.hidden,c:"",sr:"",beacons:[],defer:[],init:function(){var t=this,e=navigator.userAgent;t.device=e.match(/iPad|Tablet/gi)?"tablet":e.match(/iPhone|iPod|Android|Opera Mini|IEMobile/gi)?"mobile":"desktop",void 0===t.len&&(t.len=0),t.ie=navigator.appVersion.match(/MSIE/),t.saf=e.match(/Safari/)&&!e.match(/Chrome/),t.ff=e.match(/Firefox/i),t.cr=e.match(/Chrome/),t.ope=window.opera,t.fr=0,window.top1!=top&&(t.fr=2,void 0!==window.top1.$sf&&(t.fr=1)),t.add_evt(window.top1,"focus",function(){window.top1.realvu_aa.foc=1}),t.add_evt(window.top1,"scroll",function(){window.top1.realvu_aa.foc=1}),t.add_evt(window.top1,"blur",function(){window.top1.realvu_aa.foc=0}),t.add_evt(window.top1.document,"blur",function(){window.top1.realvu_aa.foc=0}),t.add_evt(window.top1,"visibilitychange",function(){window.top1.realvu_aa.foc=!window.top1.document.hidden}),t.doLog=window.top1.location.search.match(/boost_log/)||document.referrer.match(/boost_log/)?1:0,t.doLog&&window.setTimeout(t.scr("https://ac.realvu.net/realvu_aa_viz.js"),500)},add_evt:function(t,e,n){t.addEventListener(e,n,!0),this.defer.push(function(){t.removeEventListener(e,n,!0)})},update:function(){var t=this,e=window.top1,n=e.document.documentElement;t.x1=e.pageXOffset?e.pageXOffset:n.scrollLeft,t.y1=e.pageYOffset?e.pageYOffset:n.scrollTop;var r=e.innerWidth?e.innerWidth:n.clientWidth,a=e.innerHeight?e.innerHeight:n.clientHeight;t.x2=t.x1+r,t.y2=t.y1+a},brd:function(t,e){var n=(window.getComputedStyle?window.getComputedStyle(t,null):t.style)["border"+e+"Width"];return parseInt(2<n.length?n.slice(0,-2):0)},padd:function(t,e){var n=(window.getComputedStyle?window.getComputedStyle(t,null):t.style)["padding"+e];return parseInt(2<n.length?n.slice(0,-2):0)},viz_area:function(t,e,n,r){if(1==this.fr)try{return Math.round(100*window.top1.$sf.ext.geom().self.iv)}catch(t){}var a=Math.max(t,this.x1),i=Math.max(n,this.y1),o=Math.min(e,this.x2),d=Math.min(r,this.y2),s=Math.round((o-a)*(d-i)*100/((e-t)*(r-n)));return 0<s?s:0},viz_dist:function(t,e,n,r){return Math.max(0,this.x1-e,t-this.x2)+Math.max(0,this.y1-r,n-this.y2)},track:function(t,e,n){var r=this.tru(t,e)+n;if("conf"==e)this.scr(r,t),this.log(" <a href='"+r+"'>"+e+"</a>",t.num);else{var a={s1:r,a:t,f:e};this.beacons.push(a)}},send_track:function(){var t=this;if("a"<=t.sr)for(var e=t.beacons.shift();void 0!==e;)e.s1=e.s1.replace(/_sr=0*_/,"_sr="+t.sr+"_"),t.log(" "+e.a.riff+" "+e.a.unit_id+" "+e.a.w+"x"+e.a.h+"@"+e.a.x+","+e.a.y+" <a href='"+e.s1+"'>"+e.f+"</a>",e.a.num),e.a.rnd<Math.pow(10,1-(7&t.sr.charCodeAt(0)))&&t.scr(e.s1,e.a),e=t.beacons.shift()},scr:function(t,e){var n=document.createElement("script");if(n.async=!0,n.type="text/javascript",n.src=t,e&&null!=e.dv0)e.dv0.appendChild(n);else{var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r)}},tru:function(t,e){var n=t.pins[0],r="https://ac.realvu.net/flip/3/c="+n.partner_id+"_f="+e+"_r="+t.riff+"_s="+t.w+"x"+t.h;return t.p&&(r+="_p="+t.p),"conf"!=e&&(r+="_ps="+this.enc(t.unit_id)),(r+="_dv="+this.device+"_d="+n.mode+"_sr="+this.sr+"_h="+this.enc(t.ru)+"?").replace(/%/g,"!")},enc:function(t){return escape(t).replace(/\*/g,"%2A").replace(/_/g,"%5F").replace(/\+/g,"%2B").replace(/\./g,"%2E").replace(/\x2F/g,"%2F")},findPosG:function(t){var e=this,n=t,r=0,a=0,i=t.ownerDocument,o=i.defaultView||i.parentWindow;try{for(;null!=n&&void 0!==n;){if(n.getBoundingClientRect){var d=n.getBoundingClientRect();r+=d.left,a+=d.top,o==window.top1&&(r+=e.x1,a+=e.y1)}else{"IFRAME"==n.tagName&&(r+=e.brd(n,"Left"),a+=e.brd(n,"Top")),r+=n.offsetLeft,a+=n.offsetTop;for(var s=n.offsetParent,u=n.parentNode,l=n;null!=l;){var c=window.getComputedStyle(l,null);if("fixed"==c.position&&c.top&&(a+=parseInt(c.top)+this.y1),l==s)break;l=l.parentNode}for(;null!=s&&void 0!==s;){r+=s.offsetLeft,a+=s.offsetTop;var f=s.tagName;if((e.cr||e.saf||e.ff&&"TD"==f)&&(r+=e.brd(s,"Left"),a+=e.brd(s,"Top")),"IFRAME"!=n.tagName&&s!=document.body&&s!=document.documentElement&&(r-=s.scrollLeft,a-=s.scrollTop),!e.ie)for(;s!=u&&null!=u;)r-=u.scrollLeft,a-=u.scrollTop,e.ff_o&&(r+=e.brd(u,"Left"),a+=e.brd(u,"Top")),u=u.parentNode;u=u.parentNode,s=s.offsetParent}}if(this.fr)break;n=o.frameElement,o=o.parent}}catch(t){}return{x:Math.round(r),y:Math.round(a)}},poll:function(){for(var t=window.top1.realvu_aa_fifo;0<t.length;)t.shift()();var e=this;e.update();var n=new Date;void 0===e.ptm&&(e.ptm=n);var r=n-e.ptm;e.ptm=n;for(var a=0;a<e.len;a++){var i=e.ads[a],o=!1;if(null==i.div){var d=document.getElementById(i.pins[0].unit_id);if(null==d){if(!(o=e.readPos(i)))continue}else e.bind_obj(i,d),e.log('{m}"'+i.unit_id+'" is bound',i.num)}if(!o){i.target=e.questA(i.div);var s=null!==i.target?i.target:i.div;i.box.w=Math.max(s.offsetWidth,i.w),i.box.h=Math.max(s.offsetHeight,i.h);var u=e.findPosG(s),l={};l.t=e.padd(s,"Top"),l.l=e.padd(s,"Left"),l.r=e.padd(s,"Right"),l.b=e.padd(s,"Bottom");var c=u.x+l.l,f=u.y+l.t;i.box.x=c,i.box.y=f,i.box.w>i.w&&1<i.box.w&&(c+=(i.box.w-i.w-l.l-l.r)/2),i.box.h>i.h&&1<i.box.h&&(f+=(i.box.h-i.h-l.t-l.b)/2),0<c&&0<f&&(i.x!=c||i.y!=f)&&(i.x=c,i.y=f,e.writePos(i))}var p=i.box.w*i.box.h<242500?49:29;i.pins[0].edge&&(p=i.pins[0].edge-1),i.vz=e.viz_area(i.box.x,i.box.x+i.box.w,i.box.y,i.box.y+i.box.h),i.r=1<e.fr?"frame":i.vz>p&&e.foc?"yes":"no",i.y<0&&(i.r="out"),i.vz>p&&e.foc&&(i.vt+=r,i.vtu+=r);for(var v=i.pins.length,h=0;h<v;h++){var w=i.pins[h];if(w.state<=1){var g=e.viz_dist(i.x,i.x+i.w,i.y,i.y+i.h),y=null!=w.dist&&g<=w.dist;if(i.r=1<e.fr?"frame":i.vz>p&&e.foc?"yes":"no",y&&"no"==i.r&&(i.r="yes"),""===i.riff){i.riff=i.r;var b=e.score(i,"v:r");null!=b&&"no"==i.r&&75<b&&(i.riff="yes");var m=e.score(i,"v:v0");null!=m&&"yes"==i.r&&m<30+25*Math.random()&&(i.riff="no")}"kvp"!=w.mode&&"tx2"!=w.mode&&(!(i.vz>p||y)||"in-view"!=w.mode&&"video"!=w.mode)||e.show(i,w)}if(2==w.state&&(i.target=e.questA(i.div),null!=i.target)){w.state=3,r=0,i.vt=0;var _=((new Date).getTime()-k)/1e3+" RENDERED "+i.unit_id;A.logMessage(_);var I=e.bids_rpt(i,!0);e.track(i,"rend",I),e.incrMem(i,"r","v:r")}if(2<w.state){var x="video"==w.mode?2e3:1e3;if(i.vz>p){if(w.vt+=r,3==w.state&&(w.state=4,e.incrMem(i,"r","v:v0")),4==w.state&&w.vt>=x){w.state=5;var T=e.bids_rpt(i,!0);e.track(i,"view",T),e.incrMem(i,"v","v:r"),e.incrMem(i,"v","v:v0")}if(5==w.state&&w.vt>=5*x){w.state=6;var E=e.bids_rpt(i,!0);e.track(i,"view2",E)}}else w.vt<x&&(w.vt=0)}2<=w.state&&"tx2"===w.mode&&(i.vtu>w.rotate||0<w.delay&&i.vtu>w.delay&&"no"===i.riff&&i.ncall<2)&&0<w.tx2n&&(w.tx2n--,w.state=1,i.vtu=0,i.target=null)}}this.send_track()},questA:function(t){if(null==t)return t;if(t.nodeType==Node.TEXT_NODE){var e=t.ownerDocument,n=e.defaultView||e.parentWindow,r=t.parentNode;return n==n.top?r:r.offsetParent}var a=!1,i=null,o=t.tagName;if("HEAD"==o||"SCRIPT"==o)return null;if("IFRAME"==o&&(null==(i=this.doc(t))?a=!0:o=(t=i).tagName),a||"OBJECT"==o||"IMG"==o||"EMBED"==o||"SVG"==o||"CANVAS"==o||"DIV"==o&&t.style.backgroundImage){var d=t.offsetWidth,s=t.offsetHeight;if(33<d&&33<s&&"none"!=t.style.display)return t}if(t.hasChildNodes())for(var u=t.firstChild;null!=u;){var l=this.questA(u);if(null!=l)return l;u=u.nextSibling}return null},doc:function(t){var e=null;try{t.contentDocument?e=t.contentDocument:t.contentWindow&&(e=t.contentWindow.document)}catch(t){}return e},bind_obj:function(t,e){t.div=e,t.target=null,t.unit_id=e.id,t.w=e.offsetWidth||1,t.h=e.offsetHeight||1},add:function(t,e){var n={num:this.len,x:0,y:0,box:{x:0,y:0,h:1,w:1},p:e,state:0,delay:0,vt:0,vtu:0,a:"",wnd:t,div:null,pins:[],frm:null,riff:"",rnd:Math.random(),ncall:0,rq_bids:[],bids:[]};return n.ru=window.top1.location.hostname,window.top1.realvu_aa.ads[this.len++]=n},fmt:function(t,e){return{realvu:t.r,riff:t.riff,area:t.vz,ncall:t.ncall,n:t.num,id:t.unit_id,pin:e}},show:function(t,e){if(e.state=2,e.vt=0,e.size){var n=this.setSize(e.size);null!=n&&(t.w=n.w,t.h=n.h)}void 0!==e.callback&&e.callback(this.fmt(t,e)),t.ncall++,this.track(t,"show","")},check:function(t){var e={dist:150,state:0,tx2n:7};for(var n in t)if(t.hasOwnProperty(n))if("ad_sizes"==n&&"string"==typeof t[n])e[n]=t[n].split(",");else if("edge"==n)try{var r=parseInt(t[n]);0<r&&r<251&&(e[n]=r)}catch(t){}else e[n]=t[n];var a=null,i=this;try{for(var o=0;o<i.len;o++)if(i.ads[o].unit_id==e.unit_id){a=i.ads[o];break}if(e.wnd=e.wnd||window,null==a){(a=i.add(e.wnd,e.p)).unit_id=e.unit_id;var d=e.unit?e.unit:document.getElementById(a.unit_id);if(null!=d?i.bind_obj(a,d):i.log('{w}"'+e.unit_id+'" not found',a.num),e.size){var s=i.setSize(e.size);null!=s&&(a.w=s.w,a.h=s.h)}e.delay=e.delay||0,void 0===e.mode&&(void 0!==e.callback||void 0!==e.content?e.mode=0<e.delay?"tx2":"in-view":e.mode="kvp"),e.vt=0,e.state=0,a.pins.push(e)}return""===this.sr&&(i.track(a,"conf",""),this.sr="0"),this.poll(),a}catch(t){return i.log(t.message,-1),{r:"err"}}},setSize:function(t){var e=t;try{if("string"==typeof t)e=t.split("x");else if(Array.isArray(t)){for(var n=4;0<--n&&Array.isArray(t[0])&&Array.isArray(t[0][0]);)t=t[0];for(var r=0;r<t.length;r++)if(Array.isArray(t[r])){var a=(e=t[r])[0]+"x"+e[1];if("300x250"==a||"728x90"==a||"320x50"==a||"970x90"==a)break}else 1<t.length&&(e=t)}return{w:parseInt(e[0]),h:parseInt(e[1])}}catch(t){}return null},addUnitById:function(t,e,n,r){var a=t;return"string"==typeof a&&(a={partner_id:t,unit_id:e,callback:n,delay:r}),window.top1.realvu_aa.check(a).r},checkBidIn:function(t,e,n){if(0!=e.cpm){var r=window.top1.realvu_aa,a=!1,i=null;if(n)a=!0,i=window.top1.realvu_aa.check({unit_id:e.adUnitCode,size:e.size,partner_id:t});else for(var o=0;o<r.ads.length;o++)if((i=r.ads[o]).unit_id==e.adUnitCode){a=!0;break}if(a){var d={bidder:e.bidder,cpm:e.cpm,size:e.size,adId:e.adId,requestId:e.requestId,crid:"",ttr:e.timeToRespond,winner:0};e.creative_id&&(d.crid=e.creative_id),i.bids.push(d)}}},checkBidWon:function(t,e){for(var n=e.adUnitCode,r=0;r<this.ads.length;r++){var a=this.ads[r];if(a.unit_id==n){for(var i=0;i<a.bids.length;i++){var o=a.bids[i];if(o.adId==e.adId){o.winner=1;break}}var d=this.bids_rpt(a,!1);this.track(a,"win",d);break}}},bids_rpt:function(t,e){for(var n="",r=0;r<t.bids.length;r++){var a=t.bids[r];if(!e||a.winner){n+="&bdr="+a.bidder+"&cpm="+a.cpm+"&vi="+t.riff+"&gw="+a.winner+"&crt="+a.crid+"&ttr="+a.ttr;for(var i="",o=0;o<t.rq_bids.length;o++){var d=t.rq_bids[o];if(d.adId==a.adId){i=d.partner_id;break}}n+="&bc="+i}}return n},getStatusById:function(t){for(var e=0;e<this.ads.length;e++){var n=this.ads[e];if(n.unit_id==t)return this.fmt(n)}return null},log:function(t,e){this.doLog&&this.msg.push({dt:new Date-this.t0,s:"U"+(e+1)+t})},keyPos:function(t){if(t.pins[0].unit_id)return"realvu."+("L"+(window.top1.location.pathname.match(/\//g)||[]).length)+"."+t.pins[0].unit_id.replace(/[0-9]{5,}/gi,"RANDOM")},writePos:function(t){try{var e=t.x+","+t.y+","+t.w+","+t.h;A.setDataInLocalStorage(this.keyPos(t),e)}catch(t){}},readPos:function(t){try{var e=A.getDataFromLocalStorage(this.keyPos(t));if(e){var n=e.split(",");return t.x=parseInt(n[0],10),t.y=parseInt(n[1],10),t.w=parseInt(n[2],10),t.h=parseInt(n[3],10),t.box={x:t.x,y:t.y,w:t.w,h:t.h},!0}}catch(t){}return!1},incrMem:function(t,e,n){try{var r=this.keyPos(t)+"."+n,a=A.getDataFromLocalStorage(r);null==a&&(a="1:3");var i=a.split(":"),o=parseInt(i[0],10),d=parseInt(i[1],10);"r"==e&&(d<<=1,d|=1,o<<=1),"v"==e&&(o|=1),A.setDataInLocalStorage(r,o+":"+d)}catch(t){}},score:function(t,e){try{var n=A.getDataFromLocalStorage(this.keyPos(t)+"."+e);if(null!=n){var r=n.split(":"),a=parseInt(r[0],10),i=parseInt(r[1],10),o=0,d=0;for(i&=1023;0<i;i>>>=1,a>>>=1)1&i&&d++,1&a&&o++;return Math.round(100*o/d)}}catch(t){}return null}};window.top1.realvu_aa_fifo=window.top1.realvu_aa_fifo||[],window.top1.realvu_aa=window.top1.realvu_aa||s,void 0===window.top1.boost_poll&&(window.top1.realvu_aa.init(),window.top1.boost_poll=setInterval(function(){window.top1&&window.top1.realvu_aa&&window.top1.realvu_aa.poll()},20));var l={};o.originEnableAnalytics=o.enableAnalytics,o.enableAnalytics=function(t){return void 0!==(l=t.options).partnerId&&""!=l.partnerId||A.logError("Missed realvu.com partnerId parameter",101,"Missed partnerId parameter"),o.originEnableAnalytics(t),l.partnerId};var k=(new Date).getTime();o.track=function(t){var e=t.eventType,n=t.args,r="";r+=((new Date).getTime()-k)/1e3+" eventType="+e,void 0!==n&&(r+=", args.bidder="+n.bidder+" args.adUnitCode="+n.adUnitCode+" args.adId="+n.adId+" args.cpm="+n.cpm+" creativei_id="+n.creative_id),A.logMessage(r);var a=window.top1.realvu_aa,i=!1,o=null;if(l&&l.partnerId&&n){o=l.partnerId;var d=n.adUnitCode;if(!(i=l.regAllUnits)&&l.unitIds)for(var s=0;s<l.unitIds.length;s++)if(d===l.unitIds[s]){i=!0;break}}e===u.a.EVENTS.BID_RESPONSE?a.checkBidIn(o,n,i):e===u.a.EVENTS.BID_WON&&a.checkBidWon(o,n,i)},o.checkIn=function(t,e){void 0!==e&&""!=e||A.logError("Missed realvu.com partnerId parameter",102,"Missed partnerId parameter");var n=window.top1.realvu_aa.check({unit_id:t.adUnitCode,size:t.sizes,partner_id:e});return n.rq_bids.push({bidder:t.bidder,adId:t.bidId,partner_id:e}),n.riff},o.isInView=function(t){var e="NA",n=window.top1.realvu_aa.getStatusById(t);return n&&(e=n.realvu),e};var c=o.disableAnalytics;o.disableAnalytics=function(){for(;s.defer.length;)s.defer.pop()();c.apply(this,arguments)},a.default.registerAnalyticsAdapter({adapter:o,code:"realvuAnalytics"}),e.default=o},6:function(t,e,n){"use strict";e.a=function(t){var a,i=t.url,e=t.analyticsType,o=t.global,r=t.handler,d=[],s=0,n=!0;e!==M&&!S||function(){if(n){for(var t=0;t<d.length;t++)d[t]();d.push=function(t){t()},n=!1}h.logMessage("event count sent to ".concat(o,": ").concat(s))}();return{track:function(t){var e=t.eventType,n=t.args;this.getAdapterType()===S&&window[o](r,e,n);this.getAdapterType()===M&&function(t){var e=t.eventType,n=t.args,r=t.callback;Object(c.a)(i,r,JSON.stringify({eventType:e,args:n}))}.apply(void 0,arguments)},enqueue:u,enableAnalytics:l,disableAnalytics:function(){h._each(a,function(t,e){v.off(e,t)}),this.enableAnalytics=this._oldEnable?this._oldEnable:l},getAdapterType:function(){return e},getGlobal:function(){return o},getHandler:function(){return r},getUrl:function(){return i}};function u(t){var e=t.eventType,n=t.args,r=this;o&&window[o]&&e&&n?this.track({eventType:e,args:n}):d.push(function(){s++,r.track({eventType:e,args:n})})}function l(e){var t,n=this,r=this;"object"!==p(e)||"object"!==p(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(v.getEvents().forEach(function(t){if(t){var e=t.eventType,n=t.args;e!==m&&u.call(r,{eventType:e,args:n})}}),f(t={},y,function(t){return n.enqueue({eventType:y,args:t})}),f(t,b,function(t){return n.enqueue({eventType:b,args:t})}),f(t,_,function(t){return n.enqueue({eventType:_,args:t})}),f(t,I,function(t){return n.enqueue({eventType:I,args:t})}),f(t,m,function(t){return n.enqueue({eventType:m,args:t})}),f(t,x,function(t){return n.enqueue({eventType:x,args:t})}),f(t,T,function(t){return n.enqueue({eventType:T,args:t})}),f(t,E,function(t){return n.enqueue({eventType:E,args:t})}),f(t,A,function(t){return n.enqueue({eventType:A,args:t})}),f(t,g,function(t){return n.enqueue({eventType:g,args:t})}),f(t,k,function(t){return n.enqueue({eventType:k,args:t})}),f(t,D,function(t){return n.enqueue({eventType:D,args:t})}),f(t,w,function(t){t.config="object"===p(e)&&e.options||{},n.enqueue({eventType:w,args:t})}),a=t,h._each(a,function(t,e){v.on(e,t)})):h.logMessage('Analytics adapter for "'.concat(o,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return h.logMessage('Analytics adapter for "'.concat(o,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var r=n(5),a=n.n(r),c=n(4);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var v=n(8),h=n(0),i=a.a.EVENTS,w=i.AUCTION_INIT,g=i.AUCTION_END,y=i.REQUEST_BIDS,b=i.BID_REQUESTED,m=i.BID_TIMEOUT,_=i.BID_RESPONSE,I=i.NO_BID,x=i.BID_WON,T=i.BID_ADJUSTMENT,E=i.BIDDER_DONE,A=i.SET_TARGETING,k=i.AD_RENDER_FAILED,D=i.ADD_AD_UNITS,M="endpoint",S="bundle"}},[512]);