/*1542364256,,JIT Construction: v4543758,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function _(a,b,c,d){if(window[c])return;if(!window.JSON)return;var e=window[c]={__buffer:{replay:function(){var a=this,b=function(d){var b=window[c];a.calls[d][0].split(".").forEach(function(a){return b=b[a]});b.apply(null,a.calls[d][1])};for(var d=0;d<this.calls.length;d++)b(d);this.calls=[]},calls:[],opts:null},getUserID:function(){return""},getAuthResponse:function(){return null},getAccessToken:function(){return null},init:function(a){e.__buffer.opts=a}};for(var b=0;b<d.length;b++){var f=d[b];if(f in e)continue;var g=f.split("."),h=g.pop(),i=e;for(var j=0;j<g.length;j++)i=i[g[j]]||(i[g[j]]={});i[h]=function(a){if(a==="init")return;return function(){e.__buffer.calls.push([a,Array.prototype.slice.call(arguments)])}}(f)}j=a;g=/Chrome\/(\d+)/.exec(navigator.userAgent);g&&Number(g[1])>=55&&"assign"in Object&&"findIndex"in[]&&(j+="&ua=modern_es6");if(window.inDapIF){i=document.createElement("script");i.src=j;i.async=!0;h=document.getElementsByTagName("script")[0];h.parentNode&&h.parentNode.insertBefore(i,h);return}f=document.createElement("iframe");f.id="facebook-jssdk-iframe";f.style.cssText="width: 0; height: 0; border: 0";f.src="javascript:false";d=document.getElementsByTagName("script")[0];if(!d.parentNode)return;d.parentNode.insertBefore(f,d);b=f.contentWindow.document;b.open().write("<body onload=\"var js=document.createElement('script');js.src='"+j+"';document.body.appendChild(js);\">");b.close()})("https:\/\/connect.facebook.net\/en_US\/all.js?hash=44de5f0753dea9214cf401d3e5d8022d", 1542364256, "FB", ["AppEvents.EventNames","AppEvents.ParameterNames","AppEvents.activateApp","AppEvents.clearAppVersion","AppEvents.clearUserID","AppEvents.getAppVersion","AppEvents.getUserID","AppEvents.logEvent","AppEvents.logPageView","AppEvents.logPurchase","AppEvents.setAppVersion","AppEvents.setUserID","AppEvents.updateUserProperties","Canvas.Plugin.showPluginElement","Canvas.Plugin.hidePluginElement","Canvas.Prefetcher.addStaticResource","Canvas.Prefetcher.setCollectionMode","Canvas.getPageInfo","Canvas.scrollTo","Canvas.setAutoGrow","Canvas.setDoneLoading","Canvas.setSize","Canvas.setUrlHandler","Canvas.startTimer","Canvas.stopTimer","Event.subscribe","Event.unsubscribe","XFBML.parse","addFriend","api","getAccessToken","getAuthResponse","getLoginStatus","getUserID","init","login","logout","publish","share","ui"]);