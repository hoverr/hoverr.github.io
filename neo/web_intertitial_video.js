/*
	Version : 0.0.1
	Created On : 11.03.2015

	-- hoverr_tera.js load this js
	-- It get data set by hoverr_tera.js 
*/
(function() {
	var $isMobile = !!((/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))),
		$onceCalled = false,
		jqueryLink = '//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
		debugRequired = true,
		$,
		_window_dataObject = {};

	var Debugger = function () { };
	Debugger.log = function (message) {
		try {
			if(debugRequired) console.log(message);
		} catch (exception) {}
	};

	var findContainer = function(callback){
		var tempObject = [];

		var inlineContainer = undefined,
		intr = window.setInterval(function(){
			if($('body').length){
				window.clearInterval(intr);
				var inline = $('body');
				
				var overlay = $('<div style="position:fixed;top:0;bottom:0;left:0;width:100%;background:rgba(0,0,0,0.5);z-index:2147483644;"></div>')
					containerDiv = $('<div class="_adSenceImagePushContainer" style="height: auto;width:900px;text-align:center;padding:0; margin:1% auto 0;position:relative !important; overflow:hidden !important;background:transparent;"><div style="position: absolute;top: 0;height: 18px;width: 100%;"><span class="_hov_adSenceImagePushClose" style="position:absolute;top:0;right:0;height:19px;width:19px;text-align:center;cursor:pointer;font-size:19px;line-height:18px;color:#F0F0F0;z-index:2147483648;background:#C1C1C1;display:none;" title="Close">&times</span><span style="position:absolute;top:0;right:0;height:19px;width:19px;text-align:center;cursor:pointer;font-size:19px;line-height:18px;color:#F0F0F0;z-index:2147483648;background:#C1C1C1;" class="_hov_squezeeAd">&#8690;</span></div></div>');
				
				inline.append(overlay);
				overlay.append(containerDiv);

				tempObject.push({
					containerDiv: containerDiv,
					width: containerDiv.width(),
					overlay: overlay
				});

				if(typeof(callback) === "function" && callback !== undefined) callback(tempObject);
				else return tempObject;
			}
		}, 100);
	};

	// Set attribute for elements
	var setAttributes = function(el, attrs) {
		for(var key in attrs) { if (attrs.hasOwnProperty(key)) el.setAttribute(key, attrs[key]); }
	};

	var putAd = function(container){
		var iframe = document.createElement('iframe'),
		$iframeWidth = $width = container.width,
		$iframeHeight = Math.ceil($iframeWidth * .65),

		$scale = (($width / $iframeWidth) <= 1) ? ($width / $iframeWidth) : 1,
		$left = (($width / $iframeWidth) <= 1) ? "left: "+ (($width - $iframeWidth)/2) +"px;" : "", 
		$bottom = 0, 
		$cssText, 
		$top,
		$adTag = _window_dataObject.tag,
		$key = [window._pm_object.host, window._pm_object.section, window._pm_object.web_or_mobile, _window_dataObject.id, _window_dataObject.is_default],
		$pixelPingHtml = '<img src="http://track.hoverr.media/pixel.gif?key='+ $key.join('|') +'" style="display:none;"/>';

		$cssText = "height:"+ $iframeHeight +"px !important; width:"+ $iframeWidth +"px !important; overflow:hidden;"+ $left +"bottom:"+ $bottom +"px;margin:0 auto 15px;border: 0px; position:relative; background: transparent; z-index: 2; -moz-transform: scale("+ $scale +"); -o-transform: scale("+ $scale +"); -webkit-transform: scale("+ $scale +"); transform: scale("+ $scale +"); max-width:initial !important;";

		setAttributes(iframe, {"height": $iframeHeight, "scrolling": "no", "frameBorder": 0, "allowtransparency": "true", "class": "_adSenceImagePush", "width": $iframeWidth, "loadStatus": 0, "data-width": $iframeWidth, "data-height": $iframeHeight, "style":$cssText});

		container.containerDiv.append(iframe);

		try{
			Debugger.log('Log : Setting html content in try block !!');
			var doc = iframe.contentDocument || iframe.contentWindow.document;
			doc.open();
			doc.write('<head><style>html{margin:0 !important;background:transparent;}body{margin:0 !important;position:relative !important;border:0;background-color:#000000;}img{width:100% !important;}object{width:100% !important;}body iframe{width:100% !important;background:transparent;}</style><script type="text/javascript">var d=document,w=window,interval,el=w.frameElement,mIn,vIn;function init(){interval=setInterval(function(){if(d.getElementsByTagName("iframe").length>0||d.getElementsByTagName("img").length>0||d.getElementsByTagName("object").length>0||d.getElementsByTagName("embed").length>0){w.clearInterval(interval);var ip=d.getElementsByTagName("iframe");if(ip.length==0){ani();}else{ip[0].onload=ani();}}},200);}function ani(){ el.setAttribute("loadStatus",1); d.body.style.display="block"; } function bdn(){el.style.display="none";} \x3C/script></head><body onload="init()"><video width="100%" height="100%" controls autoplay><source src="'+ $adTag +'" type="video/mp4"></video>'+ $pixelPingHtml +'</body>');
			doc.close();
		}
		catch(e){}

		$(container.containerDiv).find('._hov_squezeeAd').click(function(){
			var cssObject = {'width':'300px', 'height':Math.ceil(300 * .65)+'px'}
			container.overlay.css(cssObject);
			container.overlay.css({'top':'initial', 'bottom':'10px', 'left':'initial', 'right':'10px'});
			container.containerDiv.css(cssObject);
			container.containerDiv.css({'margin':0});
			$(iframe).css(cssObject);
			$(iframe).attr({'width':'300', 'height':Math.ceil(300 * .65)});

			$(this).fadeOut(100, function(){
				$(container.containerDiv).find('._hov_adSenceImagePushClose').fadeIn(100);
			});
		});

		$(container.containerDiv).find('._hov_adSenceImagePushClose').click(function(){
			container.overlay.animate({'right': '-400px'}, 1000, function(){
				$(this).remove();
			})
		});
	};

	// After deciding which jQuery to use this function get called
	var initialize = function(){
		Debugger.log('Log : Initialize function called !!');
		//if ($isMobile) return;

		if(!$onceCalled) {
			$onceCalled = true;
			$ = $ || window.jQuery || window.$;

      try{
        if(window._pm_object === undefined)
          window._pm_object = JSON.parse(localStorage.getItem("hoverrneo"));
      } catch (err) {
        //do nothing
      }

			if(window._pm_object === undefined || window._pm_object.web_intertitial_video == undefined) return;
			else _window_dataObject = window._pm_object.web_intertitial_video;

			findContainer(function(container){
				$.each(container, function(i, v){
					putAd(container[i]);
					return false;
				});
			});
		}
	};

	// Create script tag with forwarded link and put under the head section and get back to scriptLoadHandler function
	var loadJS = function(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.type = "text/javascript";

		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback(true);
			}
		};
		(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(s);
	};

	// Load jQuery if not present and swipe handler if mobile
	if (window.jQuery === undefined || parseInt(window.jQuery.fn.jquery.split('.').join("")) < 142) {
		loadJS(jqueryLink, function(status){
			initialize();
		})
	}
	else initialize();
})();
