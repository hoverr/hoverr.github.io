/*
	Version : 0.0.1
	Created On : 14.03.2015

	-- hoverr_tera.js load this js
	-- It get data set by hoverr_tera.js 
*/
(function() {
	var $isMobile = !!((/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))),
		$onceCalled = false,
		hammerJSLink = '//d3clqjla00sltp.cloudfront.net/hammer.1.1.1.min.js',
		jqueryLink = '//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
		debugRequired = true,
		$video,
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
			element = undefined,
		intr = window.setInterval(function(){
			element = $(_window_dataObject.selector);
			if(element && element.length != 0){
				window.clearInterval(intr);

				var containerDiv = $('<div class="_adSenceImagePushContainer" style="height: auto; width: 100%; text-align: center; padding: 0px; margin:auto auto 15px !important; position: relative; overflow: hidden !important; background: #000;z-index:2147483648;"><span style="position:absolute;top:0;right:0;height:19px;width:19px;text-align:center;cursor:pointer;font-size:19px;line-height:18px;color:#F0F0F0;z-index:2147483648;background:#C1C1C1;display:none;" class="_hov_squezeeAd">&#8690;</span></div>');
				element.after(containerDiv);

				tempObject.push({
					containerDiv: containerDiv,
					width: containerDiv.width(),
					position: containerDiv.offset()
				});

				if(typeof(callback) === "function" && callback !== undefined) callback(tempObject);
				else return tempObject;
			}
		}, 100);
	};
		
	var bindEvents = function(container){
		$(window).scroll(function(){
			if($(this).scrollTop() + 50 >= container.position.top){
				container.containerDiv.css({
					'position':'fixed',
					'top': 0,
					'right': 0,
					'height': '100%',
					'width': '100%',
					'marginBottom': 0
				});
				$video.css('marginTop', ($(window).height()/2 - Math.ceil(container.width * .65)/2)+ 'px');
				$video.prop('muted', false);
				container.containerDiv.find('._hov_squezeeAd').css('display', 'block');
				$(window).unbind('scroll');
			}
		});

		container.containerDiv.find('._hov_squezeeAd').click(function(){
			$(this).css('display', 'none');
			container.containerDiv.css({
				'top': 'initial',
				'bottom': '10px',
				'right': '10px',
				'width': '200px',
				'height': Math.ceil(200 * .65)+ 'px'
			});
			$video.css({
				'marginTop': 0,
				'height': Math.ceil(200 * .65)+ 'px'
			});
			$video.prop('muted', true);

			test.prepareForTouches(container.containerDiv);
		});

		var test = {};
		test.prepareForTouches = function (touchElement) {

			function dragElement(event) {
				var elementToDrag = event.target;
				elementToDrag.parentNode.style.right = -event.gesture.deltaX + 'px';
			};

			function deleteElement(event) {
				var elementToDelete = event.target;
				event.gesture.stopDetect();
				$(elementToDelete).fadeOut(function(){
					$(this).remove();
				});
			};

			function resetElement(event) {
				var elementToReset = event.target;
				elementToReset.parentNode.style.right = '10px';
			};

			function initTouchListeners(touchableElement) {
				var swipeOptions = {dragLockToAxis: true, dragBlockHorizontal: true},
					touchControl = new Hammer(touchableElement, swipeOptions);

				touchControl.on("dragleft", dragElement)
						.on("swipeleft", deleteElement)
						.on("swiperight", deleteElement)
						.on("release", resetElement);
			};

			initTouchListeners(touchElement[0]);
		}
	};

	var putAd = function(container){
		$video = $('<video width="100%" height="'+ (Math.ceil(container.width * .65)) +'" loop muted autoplay><source type="video/mp4" src="'+ _window_dataObject.tag +'"></video>');
		container.containerDiv.append($video);
		bindEvents(container);
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

			if(window._pm_object === undefined || window._pm_object.mobile_facebook_video == undefined) return;
			else _window_dataObject = window._pm_object.mobile_facebook_video;

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
			loadJS(hammerJSLink, function(status){
				initialize();
			});
		})
	}
	else{
		loadJS(hammerJSLink, function(status){
			initialize();
		});
	}
})();
