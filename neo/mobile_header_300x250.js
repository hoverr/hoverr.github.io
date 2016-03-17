/*
	Version : 0.0.1
	Created On : 14.03.2015

	-- hoverr_tera.js load this js
	-- It get data set by hoverr_tera.js 
*/
(function() {
	var $isMobile = !!((/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))),
		$onceCalled = false,
		jqueryLink = '//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
		debugRequired = true,
		containerDown = false,
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
			if($('body').length != 0){
				window.clearInterval(intr);

				inlineContainer = $('body');
				$('head').append($('<style type="text/css">#_hov_close ._hov_close_stripes:after, #_hov_close ._hov_close_stripes:before{content:\'\';left:0;width:100%;height:1px;background-color:#aaa;position:absolute;border-radius:5px;border-top:solid 1px #ddd;border-bottom:solid 1px #888;}#_hov_close ._hov_close_stripes:before{top:7px;}#_hov_close ._hov_close_stripes:after{top:3px;}</style>'));

				var containerDiv = $('<div class="_adSenceImagePushContainer_header" style="height: auto; width: 100%; text-align: center; padding: 0px; margin:auto auto; !important; position: relative !important; overflow: hidden !important; background: transparent;"></div>'),
					hoverCloseContainer = $('<div style="position:relative;width:48px;bottom:10px;z-index:44;left:0;margin: -5px auto;" id="_hov_close"></div>'),
					hoverrClose = $('<div style="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;border-radius:4px;cursor:pointer;width:46px;height:16px;border:solid 1px gray;color:gray;background:rgb(238,238,238);background:-moz-linear-gradient(top,rgba(238,238,238,1) 0%,rgba(204,204,204,1) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(238,238,238,1)),color-stop(100%,rgba(204,204,204,1)));background:-webkit-linear-gradient(top,rgba(238,238,238,1) 0%,rgba(204,204,204,1) 100%);background:-o-linear-gradient(top,rgba(238,238,238,1) 0%,rgba(204,204,204,1) 100%);background:-ms-linear-gradient(top,rgba(238,238,238,1) 0%,rgba(204,204,204,1) 100%);background:linear-gradient(to bottom,rgba(238,238,238,1) 0%,rgba(204,204,204,1) 100%);" class="_hov_close"><div class="_hov_close_stripes" style="width:80%;height:1px;background-color:#aaa;border-radius:5px;position:relative;border-top:solid 1px #ddd;-bottom:solid 1px #888;margin:2px auto;"></div></div>');

				inlineContainer.prepend(containerDiv);
				containerDiv.append(hoverCloseContainer);
				hoverCloseContainer.append(hoverrClose);

				tempObject.push({
					containerDiv: containerDiv,
					width: containerDiv.width(),
					close: hoverrClose
				});
				containerDiv.css({'display':'none'});

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
		$left = (($width / $iframeWidth) <= 1) ? "left: "+ (($width - $iframeWidth)/2) +"px;" : "",
		$bottom = 0,
		$cssText,
		$top,
		$adTag = _window_dataObject.tag,
		$key = [window._pm_object.host, window._pm_object.section, window._pm_object.web_or_mobile, _window_dataObject.id, _window_dataObject.is_default],
		$pixelPingHtml = '<img src="http://track.hoverr.media/pixel.gif?key='+ $key.join('|') +'" style="display:none;"/>';

		$cssText = "height:"+ $iframeHeight +"px !important; min-height:"+ $iframeHeight +"px !important; width:"+ $iframeWidth +"px !important; overflow:hidden;"+ $left +"bottom:"+ $bottom +"px;margin:0 auto 15px;position:relative; background: transparent; z-index: 2; -moz-transform: scale("+ $scale +"); -o-transform: scale("+ $scale +"); -webkit-transform: scale("+ $scale +"); transform: scale("+ $scale +"); max-width:initial !important;";

		setAttributes(iframe, {"height": $iframeHeight, "scrolling": "no", "frameBorder": 0, "allowtransparency": "true", "class": "_adSenceImagePush", "width": $iframeWidth, "loadStatus": 0, "data-width": $iframeWidth, "data-height": $iframeHeight, "style":$cssText});

		container.containerDiv.prepend(iframe);

		try{
			Debugger.log('Log : Setting html content in try block !!');
			var doc = iframe.contentDocument || iframe.contentWindow.document;
			doc.open();
			doc.write('<head><style>html{margin:0 !important;background:transparent;}body{margin:0 !important;position:relative !important;border:0;background-color:transparent;}img{width:100% !important;}object{width:100% !important;}body iframe{width:100% !important;background:transparent;}</style><script type="text/javascript">var d=document,w=window,interval,el=w.frameElement,mIn,vIn;function init(){interval=setInterval(function(){if(d.getElementsByTagName("iframe").length>0||d.getElementsByTagName("img").length>0||d.getElementsByTagName("object").length>0||d.getElementsByTagName("embed").length>0){w.clearInterval(interval);var ip=d.getElementsByTagName("iframe");if(ip.length==0){ani();}else{ip[0].onload=ani();}}},200);}function ani(){ el.setAttribute("loadStatus",1); d.body.style.display="block"; } function bdn(){el.style.display="none";} \x3C/script></head><body onload="init()"> <div style="position: absolute;top: 0;height: 18px;width: 100%;"></div>'+ $adTag + $pixelPingHtml +'</body>');
			doc.close();
		}
		catch(e){}

		var lastScrollTop = 0,
			windowHeight = $(window).height();
		$(window).scroll(function(event){
			var st = $(this).scrollTop();
			if (st < lastScrollTop && st <= (windowHeight/2) && !containerDown){
				if($(container.containerDiv).attr('hov-no-animation') === undefined){
					containerDown = true;
					container.containerDiv.slideDown(function(){
						$(this).attr('data-attr', 'done');
					});
				}
			}
			lastScrollTop = st;
		});

		container.close.click(function(){
			Debugger.log('Log : Close button clicked.');
			container.containerDiv.slideUp(function(){
				$(this).remove();
			});
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

			if(window._pm_object === undefined || window._pm_object.header == undefined) return;
			else _window_dataObject = window._pm_object.header;

			findContainer(function(container){
				$.each(container, function(i, v){
					putAd(container[i]);
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
