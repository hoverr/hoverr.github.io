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
			if($(_window_dataObject.selector).length != 0){
				window.clearInterval(intr);

				$(_window_dataObject.selector).each(function(){
					var containerDiv = $('<div class="_adSenceImagePushContainer" style="height:auto;width:100%;text-align:center;padding:0; margin:auto !important;position:relative !important;background: transparent;"></div>');
					$(this).after(containerDiv);

					tempObject.push({
						containerDiv: containerDiv,
						width: containerDiv.width(),
						position: $(this).offset()
					});
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
		$width = container.width,
		$iframeWidth = _window_dataObject.dimension.width,
		$iframeHeight = _window_dataObject.dimension.height,

		$scale = (($width / $iframeWidth) <= 1) ? ($width / $iframeWidth) : 1,
		$left = "left: "+ (($width - $iframeWidth)/2) +"px;",
		$bottom = Math.ceil((($iframeHeight * $scale) - $iframeHeight)/2),
		$cssText,
		$top,
		$adTag = _window_dataObject.tag,
		$key = [window._pm_object.host, window._pm_object.section, window._pm_object.web_or_mobile, _window_dataObject.id, _window_dataObject.is_default],
		$pixelPingHtml = '<img src="http://track.hoverr.media/pixel.gif?key='+ $key.join('|') +'" style="display:none;"/>';

		$cssText = "height:"+ $iframeHeight +"px !important; min-height:"+ $iframeHeight +"px !important; width:"+ $iframeWidth +"px !important; overflow:hidden;"+ $left +"bottom:"+ $bottom +"px;margin:0 auto; position:absolute; background: transparent; z-index: 2; -moz-transform: scale("+ $scale +"); -o-transform: scale("+ $scale +"); -webkit-transform: scale("+ $scale +"); transform: scale("+ $scale +"); max-width:initial !important;";

		setAttributes(iframe, {"height": $iframeHeight, "scrolling": "no", "frameBorder": 0, "allowtransparency": "true", "class": "_adSenceImagePush", "width": $iframeWidth, "loadStatus": 0, "data-width": $iframeWidth, "data-height": $iframeHeight, "style":$cssText});

		container.containerDiv.append(iframe);

		try{
			Debugger.log('Log : Setting html content in try block !!');
			var doc = iframe.contentDocument || iframe.contentWindow.document;
			doc.open();
			doc.write('<head><style>html{margin:0 !important;background:transparent;}body{margin:0 !important;position:relative !important;border:0;background-color:transparent;}img{width:100% !important;}object{width:100% !important;}body iframe{width:100% !important;background:transparent;}</style><script type="text/javascript">var d=document,w=window,interval,el=w.frameElement,mIn,vIn;function init(){interval=setInterval(function(){if(d.getElementsByTagName("iframe").length>0||d.getElementsByTagName("img").length>0||d.getElementsByTagName("object").length>0||d.getElementsByTagName("embed").length>0){w.clearInterval(interval);var ip=d.getElementsByTagName("iframe");if(ip.length==0){ani();}else{ip[0].onload=ani();}}},200);}function ani(){ el.setAttribute("loadStatus",1); d.body.style.display="block"; } function bdn(){el.style.display="none";} \x3C/script></head><body onload="init()"> <div style="position: absolute;top: 0;height: 18px;width: 100%;"><!-- <a href="http://www.hoverr.me" target="_blank" style="float: right;margin-right: 25px;color: #ffffff;text-shadow: 1px 1px 2px #000000;font-family: monospace;line-height: 18px;font-size: 14px;"">Advertisement</a> --><span id="adSenceImagePushClose" style="position:absolute;top:0;right:0;height:19px;width:19px;text-align:center;cursor:pointer;font-size:19px;line-height:18px;color:#F0F0F0;z-index:2147483648;background:#C1C1C1;" onClick="bdn()" title="Close">&times</span></div>'+ $adTag + $pixelPingHtml +'</body>');
			doc.close();
		}
		catch(e){}
	};

	// After deciding which jQuery to use this function get called
	var initialize = function(){
		Debugger.log('Log : Initialize function called !!');
		// if ($isMobile) return;

		//if(!$onceCalled) {
		//	$onceCalled = true;
			$ = $ || window.jQuery || window.$;
	
			console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
			console.log(window.hoverrneo);
			var neo = JSON.parse(window.hoverrneo);
			console.log(abc.inimage);
			console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
			
			if(window.hoverrneo != undefined) {
			  console.log(neo);
			  _window_dataObject = neo;
			  if(window._pm_object === undefined || window._pm_object.inimage == undefined) return;
			    else _window_dataObject = window._pm_object.inimage;
			}

			findContainer(function(container){
				$.each(container, function(i, v){
					putAd(container[i]);
				});
			});
		//}
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
