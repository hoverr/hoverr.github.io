pbjsChunk([178],{345:function(r,e,i){r.exports=i(346)},346:function(r,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"spec",function(){return d});var t=i(1),a=i(0),n=["protocols","mimes","min_dur","max_dur","min_btr","max_btr","vi_format","api","skippable"],s=["cur","floor","sid"],d={code:"getintent",aliases:["getintentAdapter"],supportedMediaTypes:["video","banner"],isBidRequestValid:function(r){return!!(r&&r.params&&r.params.pid&&r.params.tid)},buildRequests:function(r){return r.map(function(r){var e=function(r){var e={bid_id:r.bidId,pid:r.params.pid,tid:r.params.tid,known:r.params.known||1,is_video:"video"===r.mediaType,resp_type:"JSON",provider:"direct.prebidjs"};r.sizes&&(e.size=function(r){function e(r){if(Array.isArray(r)&&2===r.length&&Object(a.isInteger)(r[0])&&Object(a.isInteger)(r[1]))return r.join("x");throw"Malformed parameter 'sizes'"}return Array.isArray(r)&&Array.isArray(r[0])?r.map(e).join(","):e(r)}(r.sizes));return function(r,e){if(e.is_video&&r)for(var i=0,t=n.length;i<t;i++){var a=n[i];r.hasOwnProperty(a)&&(e[a]=Array.isArray(r[a])?r[a].join(","):r[a])}}(r.params.video,e),function(r,e,i){for(var t=0;t<i.length;t++)r.hasOwnProperty(i[t])&&(e[i[t]]=r[i[t]])}(r.params,e,s),e}(r);return{method:"GET",url:"https://px.adhigh.net"+(e.is_video?"/rtb/direct_vast":"/rtb/direct_banner"),data:e}})},interpretResponse:function(r){var e=r.body,i=[];if(e&&1!==e.no_bid){var t=e.size.split("x").map(Number),a={requestId:e.bid_id,ttl:360,netRevenue:!0,currency:e.currency,creativeId:e.creative_id,cpm:e.cpm,width:t[0],height:t[1]};e.vast_url?(a.mediaType="video",a.vastUrl=e.vast_url):(a.mediaType="banner",a.ad=e.ad),i.push(a)}return i}};Object(t.registerBidder)(d)}},[345]);