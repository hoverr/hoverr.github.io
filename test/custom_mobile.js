/*
 Version : 0.0.1
 Created On : 23.01.2015
 Last Edited : 23.01.2015
*/
(function() {
	var data = (window.pm_ip !== undefined) ? window.pm_ip.data : undefined,
		container = (window.pm_ip !== undefined) ? window.pm_ip.container : undefined,
		clickLink = (window.pm_ip !== undefined) ? window.pm_ip.clickLink : undefined,
		gaData = (window._gaObject !== undefined) ? window._gaObject : {},
		debugRequired = true,
    firstTimeChange = false,
		$,
    PM_IP_DL,
    touchSwipe = '//d3clqjla00sltp.cloudfront.net/swiper.min.js',
		ecommImage = {
				amazon: '//d3clqjla00sltp.cloudfront.net/image/amazon.png',
				flipkart: '//d3clqjla00sltp.cloudfront.net/image/flipkart.png',
				paytm: '//d3clqjla00sltp.cloudfront.net/image/paytm.png',
				koovs: '//d3clqjla00sltp.cloudfront.net/image/koovs.png'
		};

	var Debugger = function () { };
	Debugger.log = function (message) {
		try {
			if(debugRequired) console.log(message);
		} catch (exception) {}
	},

	putGTM = function(callback){
    $('head').append($(gaData.tag));
    setTimeout(function(){
        PM_IP_DL = window.PM_IP_DL;
				if(typeof(callback) === "function" && callback !== undefined) callback(true);
				else return true;
    }, 1000);
  },

  loadJS = function(src, callback) {
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
  },

	putCss = function(data, callback){
    Debugger.log('Log : putCss function called !!');
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css,
        link = document.createElement('link');

    link.href = '//fonts.googleapis.com/css?family=Roboto';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);

    css = '._processedImageAd{left:0 !important;bottom:0 !important;width:100% !important;cursor:auto;background-color:#F7F6F6 !important;/*padding:10px 0 10px 0 !important;*/position:relative;}._processedImageAd h5.title{float:left;text-align:left;padding:0 0 10px 5px;margin:-1px;font-size:12px;color:#9197a3;background:#fff;font-family:\'Roboto\',sans-serif;}._processedImageAd .headingAndLogoContainer img.logo{height:25px;width:auto;float:left;margin:-6px 0 0 9px;}._processedImageAd #slideContainer{clear:both;}._processedImageAd #imageSetPanel{display:block !important;height:auto !important;white-space:nowrap !important;background:transparent;}._processedImageAd #imageSetPanel .slide{display:inline-block;list-style:none !important;max-height:100%;z-index:2147483644 !important;position:relative;background:#FFFFFF;border:1px solid #ccc;/*-webkit-border-radius:3px;border-radius:3px;*/font-size:13px;padding:5px;width:150px;}._processedImageAd #imageSetPanel .slide:first-child{margin-left:5px;}._processedImageAd #imageSetPanel .slide .imageHolder{background:#fff;height:140px;overflow:hidden;border-radius:3px;text-align:center}._processedImageAd #imageSetPanel a{text-decoration:none !important;}._processedImageAd #imageSetPanel ._buy_now{display:block !important;font-size: 14px !important;font-weight:800;padding: 0 0 3px 0 !important;color:rgba(96, 96, 96, 1) !important;border:1px solid rgb(214, 214, 214) !important;text-align:center;margin:0;}._processedImageAd #imageSetPanel ._buy_now span.small{font-size:11px !important;display:initial !important;color:rgba(96, 96, 96, 1) !important;font-weight: 300 !important;}._processedImageAd #imageSetPanel .slide img{display:inline-block;width:auto;max-height:100%;max-width:100%;height:100%;vertical-align:middle;}._processedImageAd #imageSetPanel ._buy_now>img{display: inline-block !important;height:15px !important;margin:0 15px 0 0 !important;}._processedImageAd #imageSetPanel .slide .smallInfo{position:relative;width:100%;overflow:hidden;font-family:\'Roboto\',sans-serif;}._processedImageAd #imageSetPanel .slide .smallInfo span{text-decoration:none;line-height:1.1;display:block;margin:5px 0;color:#000000;overflow:hidden;text-align:center;font-size:12px;}._processedImageAd #imageSetPanel .slide .smallInfo>span:first-child{font-weight:400;font-size:12px;margin-top:10px;margin-bottom: 0;}._processedImageAd #imageSetPanel>.slide .smallInfo>span:last-child{color:#8C8C8C;margin-top:3px;padding-top:4px;}._processedImageAd ._cross{position:absolute;top:0px;right:0;display:block;width:100%;z-index: 2147483648 !important;}._processedImageAd ._cross a{text-decoration:underline;font-size:12px;padding:3px 5px;display:block;background-color:rgba(255,255,255,0.8);float:right;font-family:\'Roboto\',sans-serif;border-right:1px solid #ccc;line-height:1.2;color:#000;font-weight:200;}._processedImageAd ._cross span.times{font-size:15px;line-height:1;background-color:rgba(255,255,255,0.8);float:right;display:block;width:15px;height:15px;text-align:center;vertical-align: baseline;cursor:pointer;color:rgba(214, 214, 214, 1);font-weight:200;}._processedImageAd #imageSetPanel .slide .smallInfo span.prdctName{color:rgba(96, 96, 96, 1);font-size:11px;}';

    if(data.meta.is_intertitial){
        css += '._processedImageAd ._productContainer.hidden{display:none;}._processedImageAd ._productContainer{font-family:\'Roboto\',sans-serif;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fff;z-index:2147483648;overflow-x:auto;}._processedImageAd ._productContainer ._mainContainer{position:relative;width:100%;height:auto;overflow-y: scroll;padding-bottom:47px;}._processedImageAd ._productContainer ._mainContainer ._headerContainer{display:table;width:100%;padding:0;border-bottom: 1px solid #eee;}._processedImageAd ._productContainer ._mainContainer ._headerContainer *{display:table-cell;text-align:center;vertical-align:middle;font-family:\'Roboto\',sans-serif;}._mainContainer ._headerContainer .back{width:15%;font-size:29px;padding:5px 0 10px;}._mainContainer ._headerContainer .company{font-size:15px;font-weight:bold;text-transform:uppercase;}._mainContainer ._bodyContainer{padding:0 10px;}._mainContainer ._bodyContainer img._bigProductImage{width:auto;margin:auto;height:auto;max-width:100%;}._mainContainer ._bodyContainer ._productName{border-top:1px solid #eee;font-size:14px;text-align:left;padding:5px 10px;}._mainContainer ._bodyContainer ._price{font-size:14px;text-align:left;padding:2px 10px;font-weight:bold;}._mainContainer ._buttonContainer{position:fixed;width:100%;left:0;bottom:0;display:table}._mainContainer ._buttonContainer a{text-decoration:none;display:block;text-transform:uppercase;color:#fff;vertical-align: middle;display:table-cell;text-align:center;height:100%;}._mainContainer ._buttonContainer a._like{background-color:#223242;width:40%;font-size:33px;padding:7px 0;}._mainContainer ._buttonContainer a._like span{margin:0 3px;display:inline-block;font-size:16px;}._mainContainer ._buttonContainer a._like span._number{font-size:10px;padding:4px 5px;border-radius:50%;background-color: red;vertical-align:top;}._mainContainer ._buttonContainer a._buy_now{background-color:#11DAB0;font-weight:800;width:60%;padding:10px 0}';
        css += '._processedImageAd ._imageContainerMain{overflow:hidden;}._processedImageAd ._imageContainerMain ul._image-list{white-space:nowrap;padding:0;margin:0;list-style:none;width:auto;background-color:#fff;}._processedImageAd ._imageContainerMain ul._image-list li{display:inline-block;text-align:center;position:relative;height:auto;width:auto;border:0;vertical-align:middle;background-color:transparent;}._processedImageAd ._bodyContainer span.arrow{position:absolute;top:35%;background-image:url(\'http://d3clqjla00sltp.cloudfront.net/image/arrow.png\');background-size:25px 210px;height:50px;width:25px;}._processedImageAd ._bodyContainer span.arrow.right{right:5px;background-position:4px 82px;}._processedImageAd ._bodyContainer span.arrow.left{left: 5px;background-position:4px 134px;}';
    }

    style.type = 'text/css';
    if (style.styleSheet) style.styleSheet.cssText = css;
    else style.appendChild(document.createTextNode(css));
    head.appendChild(style);

		if(typeof(callback) === "function" && callback !== undefined) callback(true);
    else return true;
	},

	isTranslated = function(t) {
    var $html = $('html');
    return ($html.hasClass('translated-ltr') || $html.hasClass('translated-rtl')) ? "_Translated : " : "";
	},

	pushEvent = function(dataObject, meta){
			var tempObject = {};
			tempObject.event = gaData.event.eventTrigger;
			tempObject[gaData.event.eventAction] = dataObject.clickAction;
			tempObject[gaData.event.eventCategory] = dataObject.clickCategory;
			tempObject[gaData.event.eventLabel] = dataObject.clickLabel;
			Debugger.log(tempObject);
			// Data layer push on click to open it in large page
			PM_IP_DL.push(tempObject);
	},

  changeContainerHeight = function(callback){
		try{
				// var	parentIframeDocument = window.frameElement.ownerDocument,
				// 	parentIframe = parentIframeDocument.defaultView.frameElement;
        var parentIframe = window.frameElement;
				parentIframe.setAttribute('loaded', 'true');

        parentIframe.style.height = window.top.innerHeight+ 'px';
        parentIframe.style.width = window.top.innerWidth+ 'px';
        parentIframe.style.position = 'fixed';
        parentIframe.style.left = '0px';
        parentIframe.style.top = '0px';

        parentIframe.style.webkitTransform = "scale(1)";
				parentIframe.style.MozTransform = "scale(1)";
				parentIframe.style.msTransform = "scale(1)";
				parentIframe.style.OTransform = "scale(1)";
				parentIframe.style.transform = "scale(1)";

				// var style = document.createElement('style'),
				// 		css = 'body iframe{height:100%;}';
				// style.type = 'text/css';
				// if (style.styleSheet) style.styleSheet.cssText = css;
				// else style.appendChild(document.createTextNode(css));
				// parentIframeDocument.head.appendChild(style);
		}
		catch(e){ Debugger.log(e); }
		if(typeof(callback) === "function" && callback !== undefined) callback(true);
    else return true;
	},

  fixContainerHeight = function(callback){
    try{
      // var	parentIframeDocument = window.frameElement.ownerDocument,
      //   parentIframe = parentIframeDocument.defaultView.frameElement;
      var parentIframe = window.frameElement;
      parentIframe.style.cssText = parentIframe.getAttribute('data-style');
      if(typeof(callback) === "function" && callback !== undefined) callback(true);
      else return true;
    }
    catch(e){ Debugger.log(e);}
  },

	bindClickEvent = function(container, meta){
    var adUnit = '$'+ ((window.location != window.parent.location) ? document.referrer : document.location.href) +' : *Click';

    if(meta.is_intertitial){
      container.find('.slide').click(function () {
        var slide = $(this);
        console.log(slide);
        changeContainerHeight(function(status){
          console.log(slide);
          pushEvent({
              clickAction: '#'+ gaData.campaignId +' : ~Unit Click : @'+ slide.attr('data-dress-type') +' : ^'+ ((parseInt(slide.attr('data-gender')) == 0) ? 'Woman' : 'Man'),
              clickCategory: adUnit + 'Click',
              clickLabel: '@'+ slide.attr('data-al') +' : '+ isTranslated() +'$Mobile'
          });
          console.log(slide);
          var $prdctContainer = container.find('#_productContainer'),
              $heading = $prdctContainer.find('.company'),
              $imageListContainer = $prdctContainer.find('div._imageContainerMain'),
              $productName = $prdctContainer.find('._productName'),
              $price = $prdctContainer.find('._price'),
              $buyNow = $prdctContainer.find('._buy_now'),
              $this = slide,
              $otherProduct = $this.parent().find('.slide').not($this),
              $html = '<div class="swiper-container"><ul class="_image-list swiper-wrapper">',
              $imgheight = (window.innerHeight - 176) + 'px',
              imagePath = '';

            $html += '<li class="swiper-slide" ';
            Array.prototype.slice.call($this[0].attributes).forEach(function (item) {
                if (item.name.indexOf('data-') !== -1) {
                    $html += item.name + '="' + item.value + '" ';
                    if (item.name == 'data-image-path') imagePath = item.value;
                }
            });
            $html += '><img src="' + imagePath + '" class="_bigProductImage" style="max-height:' + $imgheight + '"></li>';

            for (var i = 0; i < $otherProduct.length; i++) {
                var element = $($otherProduct[i]), obj = element[0].attributes;
                $html += '<li class="swiper-slide" ';
                Array.prototype.slice.call(obj).forEach(function (item) {
                    if (item.name.indexOf('data-') !== -1) {
                        $html += item.name + '="' + item.value + '" ';
                        if(item.name == 'data-image-path') imagePath = item.value;
                    }
                });
                $html += '><img src="' + imagePath + '" class="_bigProductImage" style="height:' + $imgheight + '"></li>'
            }
            $html += '</ul></div>';
            $imageListContainer.html($html);
            $heading.text($this.attr('data-brand'));
            //$image.css({'height': (window.innerHeight - 156)+'px'}).attr('src', $this.attr('data-image-path'));
            $productName.text($this.attr('data-product-name'));
            $price.text('Rs. ' + $this.attr('data-price'));
            $buyNow.attr('href', $this.attr('data-link'));
            $prdctContainer.removeClass('hidden');

            // Binding swipe handler
            new Swiper($prdctContainer.find('.swiper-container'), {
                slidesPerView: 1,
                //spaceBetween: 1,
                centeredSlides: true,
                loop: true,
                //initialSlide: 0,
                onSlideChangeEnd: function (swiper) {
                    var $prdctContainer = container.find('#_productContainer'),
                        $this = $prdctContainer.find('.swiper-container').find('.swiper-slide-active'),
                        $heading = $prdctContainer.find('.company'),
                        $productName = $prdctContainer.find('._productName'),
                        $price = $prdctContainer.find('._price'),
                        $buyNow = $prdctContainer.find('._buy_now');

                    $heading.text($this.attr('data-brand'));
                    $productName.text($this.attr('data-product-name'));
                    $price.text('Rs. ' + $this.attr('data-price'));
                    $buyNow.attr('href', $this.attr('data-link'));

                    var direction = (swiper.snapIndex < swiper.previousIndex) ? 'Right' : 'Left';
                    if(swiper.snapIndex == 1 && swiper.previousIndex == 0){ Debugger.log(swiper.previousIndex); }
                    else{
                        pushEvent({
                            'clickAction': '#' + gaData.campaignId + ' : ~Swipe Popup : @' + direction,
                            'clickCategory': adUnit + 'Swipe',
                            'clickLabel': isTranslated() + '$Mobile'
                        });
                    }
                }
            });

            $buyNow.click(function(){
                var activeElement = $prdctContainer.find('.swiper-slide-active');
                pushEvent({
                    clickAction: '#'+ gaData.campaignId +' : ~Buy Now : @'+ activeElement.attr('data-dress-type') +' : ^'+ ((parseInt(activeElement.attr('data-gender')) == 0) ? 'Woman' : 'Man'),
                    clickCategory: adUnit + 'Click',
                    clickLabel: '@'+ activeElement.attr('data-al') +' : '+ isTranslated() +'$Mobile'
                });
            });

            container.find('a._like').click(function(e){
                var activeElement = $prdctContainer.find('.swiper-slide-active');
                pushEvent({
                    clickAction: '#'+ gaData.campaignId +' : ~Like Click: @'+ activeElement.attr('data-dress-type') +' : ^'+ ((parseInt(activeElement.attr('data-gender')) == 0) ? 'Woman' : 'Man'),
                    clickCategory: adUnit + 'Click',
                    clickLabel: '@'+ activeElement.attr('data-amazon-link') +' : '+ isTranslated() +'$Mobile'
                });
            });

            // Back button event bind
            container.find('#_productContainer .back').click(function(){
              fixContainerHeight(function(){
                pushEvent({
                    clickAction: '#'+ gaData.campaignId +' : ~Close Popup',
                    clickCategory: adUnit + 'Click',
                    clickLabel: isTranslated() + '$Mobile'
                });
                container.find('#_productContainer').addClass('hidden');

                if (window.history && window.history.pushState) {
                    window.history.pushState('', '', window.location.pathname);
                    firstTimeChange = false;
                    $(window).unbind('hashchange');
                } else {
                    window.location.href = window.location.href.replace(/#.*$/, '#');
                    firstTimeChange = false;
                    $(window).unbind('hashchange');
                }
              });
            });

            // Binding hash change event
            $(window).bind('hashchange', function(event) {
                if(firstTimeChange){
                    var hiddenContainer = $('._productContainer.hidden'),
                        productContainer = $('._productContainer'),
                        container = productContainer.not(hiddenContainer).eq(0).closest('._processedImageAd');

                    if(hiddenContainer.length != productContainer.length) {
                        productContainer.addClass('hidden');
                        var adUnit = '$'+ container.attr('data-r') +' : ~'+ container.attr('data-iu') +' : @'+ container.attr('data-s') +' : *',
                            atfOrBtf = (parseInt(container.attr('data-atf')) == 1) ? 'ATF' : 'BTF';
                        pushEvent({
                            clickAction: '#'+ gaData.campaignId +' : ~Close Popup : $'+ atfOrBtf,
                            clickCategory: adUnit + 'Back',
                            clickLabel: isTranslated() + '$Mobile'
                        });
                        firstTimeChange = false;
                        $(window).unbind('hashchange');
                    }
                }
                else firstTimeChange = true;
            });
        });
      });
    }
    else{
      container.find('._product_link').click(function(){
          var activeElement = $(this).closest('.slide');
          pushEvent({
              clickAction: '#'+ gaData.campaignId +' : ~Buy Now : @'+ activeElement.attr('data-dress-type') +' : ^'+ ((parseInt(activeElement.attr('data-gender')) == 0) ? 'Woman' : 'Man'),
              clickCategory: adUnit + 'Click',
              clickLabel: '@'+ activeElement.attr('data-al') +' : '+ isTranslated() +'$Mobile'
          });
      });
    }
	},

	createHtml = function(data){
      Debugger.log('Log : putHtmlAndBindEvents function called !!');
      var imageLink,
          $html = '<div class="swiper-container" id="slideContainer" ><div class="swiper-wrapper" id="imageSetPanel">',
          $htmlContainer = $('<div class="_processedImageAd" data-attr="not-done""></div>'),
          price,
          param,
          link;

      for(var i = 0; i < data.data.length; i++) {
          price = ($.trim(data.data[i].discount_price) != "") ? data.data[i].discount_price : data.data[i].price;
          imageLink = ecommImage[data.data[i].ecomm];

          var createdLink = data.data[i].link +'&'+ data.meta.aff_id[data.data[i].ecomm];
  				if(data.data[i].link.indexOf('koovs') !== -1) createdLink = 'http://tracking.vcommission.com/aff_c?offer_id=2471&aff_id=34026&url='+ encodeURIComponent(createdLink);
  				link = (clickLink === undefined) ? createdLink : (clickLink + encodeURIComponent(createdLink));

          param = {
              g: (data.data[i].gender == 'man') ? 1 : 0,
              c: data.data[i].category,
              al: link
          };

          if(!data.meta.is_intertitial) $html += '<div class="slide swiper-slide" data-link="'+ param.al +'" data-image-path="'+ data.data[i].image_url +'" data-brand="'+ data.data[i].brand +'" data-product-name="'+ data.data[i].name +'" data-price="'+ price +'" data-al="'+ data.data[i].link +'" data-gender="'+ param.g +'" data-dress-type="'+ param.c +'"><a href="'+ link +'" target="_blank" class="_product_link"><div class="imageHolder"><img src="'+ data.data[i].image_url +'"></div><div class="smallInfo"><span>'+ data.data[i].brand +'</span><span class="prdctName">'+ data.data[i].name +'</span><p class="_buy_now"><img src="'+ imageLink +'" /> <span class="small">₹ '+ price +'</span></p></div></a></div>';

          else $html += '<div class="slide swiper-slide" data-link="'+ param.al +'" data-image-path="'+ data.data[i].image_url +'" data-brand="'+ data.data[i].brand +'" data-product-name="'+ data.data[i].name +'" data-price="'+ price +'" data-al="'+ data.data[i].link +'" data-gender="'+ param.g +'" data-dress-type="'+ param.c +'"><a href="#open"><div class="imageHolder"><img src="'+ data.data[i].image_url +'"></div><div class="smallInfo"><span>'+ data.data[i].brand +'</span><span class="prdctName">'+ data.data[i].name +'</span><a href="javascript:void(0);" class="_buy_now"><img src="'+ imageLink +'" /> <span class="small">₹ '+ price +'</span></a></div></a></div>';
      }
      $html += '</div></div>';
      if(data.meta.is_intertitial) $html += '<div class="_productContainer hidden" id="_productContainer"><div class="_mainContainer"><div class="_headerContainer"><div class="back"></div><div class="company"></div><div class="back">&times;</div></div><div class="_bodyContainer"><div class="_imageContainerMain"></div><span class="arrow left"></span><span class="arrow right"></span><!--<img src="" class="_bigProductImage">--><div class="_productName"></div><div class="_price"></div></div><div class="_buttonContainer"><a href="javascript:void(0);" class="_like"><span>&#128077;</span><span class="_number">+1</span></a><a href="" target="_blank" class="_buy_now">Buy Now</a></div></div></div>';

      $htmlContainer.append($html);

      if(container) $(container).append($htmlContainer);
      // Binding swipe handler
      new Swiper(container.find('.swiper-container'), {
          slidesPerView: !!((/ipad/i.test(navigator.userAgent.toLowerCase())))? 3 : 1.75,
          spaceBetween: 5,
          // centeredSlides: !((/ipad/i.test(navigator.userAgent.toLowerCase()))),
          onSlideChangeEnd: function (swiper) {
              var direction = (swiper.snapIndex < swiper.previousIndex) ? 'Right' : 'Left';
              pushEvent({
                  'clickAction': '#' + gaData.campaignId + ' : ~Swipe Normal : @' + direction,
                  'clickCategory': '$'+ ((window.location != window.parent.location) ? document.referrer : document.location.href) + 'Swipe',
                  'clickLabel': isTranslated() + '$Mobile'
              });
          }
      });
      if(gaData.required) bindClickEvent($htmlContainer, data.meta);
	};

	if(data){
		$ = $ || window.jQuery || window.$;
    loadJS(touchSwipe, function(status){
      putCss(data, function(check){
  			if(gaData.required) putGTM();
  			createHtml(data);
  		});
    });
	}
})();
