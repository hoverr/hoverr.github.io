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
		bootStrapCss = '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
		bootStrapJS = '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js',
		debugRequired = true,
		firstTime = true,
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

				var overlay = $('<div class="_hov_overlay" style="position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483644;background:rgba(0,0,0,0.21);display:none;"></div>'),
					adContainer = $('<div class="_adSenceImagePushContainer" style="height:auto;display:block;text-align:center;padding:0px;margin:'+ (($(window).height()/2) - ((_window_dataObject.dimension.height/2) + 15)) +'px auto auto !important;position:relative !important;overflow:hidden !important;z-index:2147483644;width:'+ (_window_dataObject.dimension.width + 30) +'px;padding:15px;background:#ffffff;"></div>'),
					anchortags = $(_window_dataObject.selector);

				$('body').append(overlay);
				overlay.append(adContainer);

				tempObject.push({
					containerDiv: adContainer,
					overlay: overlay,
					anchor: anchortags,
					width: adContainer.width()
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
		console.log(container);
		var iframe = document.createElement('iframe'),
		$width = container.width,
		$iframeWidth = _window_dataObject.dimension.width,
		$iframeHeight = _window_dataObject.dimension.height + 25,

		$scale = (($width / $iframeWidth) <= 1) ? ($width / $iframeWidth) : 1,
		$left = (($width / $iframeWidth) <= 1) ? "left: "+ (($width - $iframeWidth)/2) +"px;" : "", 
		$bottom = 0, 
		$cssText, 
		$top,
		$adTag = _window_dataObject.tag,
		$key = [window._pm_object.host, window._pm_object.section, window._pm_object.web_or_mobile, _window_dataObject.id, _window_dataObject.is_default],
		$pixelPingHtml = '<img src="http://track.hoverr.media/pixel.gif?key='+ $key.join('|') +'" style="display:none;"/>';

		$cssText = "height:"+ $iframeHeight +"px !important; width:"+ $iframeWidth +"px !important; overflow:hidden;"+ $left +"bottom:"+ $bottom +"px;margin:0;border: 0px; position:relative; background: transparent; z-index: 2; -moz-transform: scale("+ $scale +"); -o-transform: scale("+ $scale +"); -webkit-transform: scale("+ $scale +"); transform: scale("+ $scale +"); max-width:initial !important;";

		setAttributes(iframe, {"height": $iframeHeight, "scrolling": "no", "frameBorder": 0, "allowtransparency": "true", "class": "_adSenceImagePush", "width": $iframeWidth, "loadStatus": 0, "data-width": $iframeWidth, "data-height": $iframeHeight, "style":$cssText, "done-attr":"not-done", "start-timer":"no"});

		container.containerDiv.append(iframe);

		try{
			Debugger.log('Log : Setting html content in try block !!');
			var doc = iframe.contentDocument || iframe.contentWindow.document;
			doc.open();
			doc.write('<head><link rel="stylesheet" href="'+ bootStrapCss +'"><script src="'+ jqueryLink +'"></script><script src="'+ bootStrapJS +'"></script><style>html{margin:0 !important;background:transparent;}body{margin:0 !important;position:relative !important;border:0;background-color:#fff;}img{width:100% !important;}object{width:100% !important;}body iframe{width:100% !important;background:transparent;}.progress{margin-top:5px;margin-bottom:0;}</style><script type="text/javascript">var d=document,w=window,interval,el=w.frameElement,mIn,vIn;function init(){interval=setInterval(function(){if(d.getElementsByTagName("iframe").length>0||d.getElementsByTagName("img").length>0||d.getElementsByTagName("object").length>0||d.getElementsByTagName("embed").length>0){w.clearInterval(interval);var ip=d.getElementsByTagName("iframe");if(ip.length==0){ani();}else{ip[0].onload=ani();}}},200);}function ani(){d.body.style.display="block"; } function bdn(){el.style.display="none";}function statchange(){el.setAttribute("loadStatus",1);el.setAttribute("done-attr","done"); } \x3C/script></head><body onload="init()"> <div style="position: absolute;top: 0;height: 18px;width: 100%;"></div>'+ $adTag + $pixelPingHtml +'<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%">0%</div></div><script>$(document).ready(function(){var bigintr = setInterval(function(){if(el.getAttribute("start-timer") == "yes"){window.clearInterval(bigintr);var width = 0, bar = $(".progress"), intr = setInterval(function(){bar.find(".progress-bar").attr("aria-valuenow", width).css("width", width+"%").html(width+"%");if(width >= 100){ window.clearInterval(intr); statchange();}width = width + 2;}, 100);}}, 100);});</script></body>');
			doc.close();
		}
		catch(e){}

		container.anchor.click(function(event){
			var closeinterval,
				$this = $(this);
			if(firstTime){
				event.preventDefault();
				firstTime = false;
				container.overlay.css('display', 'block');
				container.overlay.find('iframe').attr("start-timer", "yes")
				closeinterval = setInterval(function(){ 
					if(container.overlay.find('iframe').attr("done-attr")== "done"){
						container.overlay.css('display', 'none');
						var win = window.open($this.attr('href'), '_blank');
						win.focus();
						window.clearInterval(closeinterval);
					}
				}, 1000);
			}
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

			if(window._pm_object === undefined || window._pm_object.link_click == undefined) return;
			else _window_dataObject = window._pm_object.link_click;

			findContainer(function(container){
				putAd(container[0]);
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