/*
Created On: 04-06-18
Last Edited On: 27-08-18
Version: 0.0.1.2
*/
'use strict';
var _auto_init = true;
(function(){
	(function (funcName, baseObj) {
		funcName = funcName || "docReady";
		baseObj = baseObj || window;
		var readyList = [],
			readyFired = false,
			readyEventHandlersInstalled = false;

		// call this when the document is ready
		// this function protects itself against being called more than once
		function ready() {
			if (!readyFired) {
				// this must be set to true before we start calling callbacks
				readyFired = true;
				for (var i = 0; i < readyList.length; i++) {
					readyList[i].fn.call(window, readyList[i].ctx);
				} // allow any closures held by these functions to free
				readyList = [];
			}
		};

		function readyStateChange() {
			if (document.readyState == 'interactive' || document.readyState == 'complete' || document.readyState == 'loaded') ready();
		};

		// This is the one public interface
		baseObj[funcName] = function (callback, context) {
			// if ready has already fired, then just schedule the callback
			if (readyFired) {
				setTimeout(function () {
					callback(context);
				}, 1);
				return;
			} else readyList.push({ fn: callback, ctx: context });

			// if document already ready to go, schedule the ready function to run
			if(document.readyState == 'interactive' || document.readyState == 'complete' || document.readyState == 'loaded') setTimeout(ready, 1);
			else if (!readyEventHandlersInstalled) {
				// otherwise if we don't have event handlers installed, install them
				if (document.addEventListener) {
					document.addEventListener("DOMContentLoaded", ready, false);
					window.addEventListener("load", ready, false);
				} else {
					// must be IE
					document.attachEvent("onreadystatechange", readyStateChange);
					window.attachEvent("onload", ready);
				}
				readyEventHandlersInstalled = true;
			}
		};
	})("_docReady", window);

	var classPrefix = '_yeti',
	defaultFont = 'Roboto:300,400,500',
	googleFontLink = 'https://fonts.googleapis.com/css?family=',
	domainId = 'TOYkbC',
	widgetSelector = 'body > main > div > p.lead',
	apiLink = 'https://api.90d.io/stories/'+ domainId +'/stories.json',
	storyCss = 'https://stories.automatad.com/90d/player/story.css',
	isMobile = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(window.navigator.userAgent.toLowerCase()),
	eventQueue = [],
	divolteJS = 'https://dc01.90d.io/divolte.js',
	queueIntr = false,
	divolte = undefined,

	// Push events in the queue
	// Pass type of the event and attributes
	initDivolte = function(){
		var clearUpQueue = function(){
			if(!divolte) divolte = window.divolte;
			while(eventQueue.length > 0){
				divolte.signal(eventQueue[0].type, eventQueue[0].attribute);
				eventQueue.splice(0, 1);
			}
		};

		queueIntr = window.setInterval(function(){
			if(eventQueue.length > 0 && window.divolte) clearUpQueue();
		}, 2000);

		bindEvent(window, 'beforeunload', function(){
			clearUpQueue();
		});
	},

	pushEventInQueue = function(type, attributes){
		eventQueue.push({
			'type': type,
			'attribute': attributes
		});

		if(!queueIntr) initDivolte();
	},

	// Get the json data from the link
	httpGet = function(link, callback, type) {
		var xhr = new XMLHttpRequest();
		xhr.open("get", link, true);
		if(!type) xhr.responseType = "json";
		xhr.onload = function () {
			var status = xhr.status;
			if (status == 200) callback(status, xhr.response);
			else callback(status, null);
		};
		xhr.send();
	},

	// Get the position of an element in the DOM
	// This function takes the element as input and return the position as object
	// The object contains the x, y coordinate of the element
	getPosition = function(el) {
		var xPos = 0, yPos = 0;
		while (el) {
			if (el.tagName == "BODY") {
				// deal with browser quirks with body/window/document and page scroll
				var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
				var yScroll = el.scrollTop || document.documentElement.scrollTop;

				xPos += el.offsetLeft - xScroll + el.clientLeft;
				yPos += el.offsetTop - yScroll + el.clientTop;
			} else {
				// for all other non-BODY elements
				xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
				yPos += el.offsetTop - el.scrollTop + el.clientTop;
			}

			el = el.offsetParent;
		}
		return { x: xPos, y: yPos };
	},

	// Return the local storage is supported or not
	isLocalStorageSupported = function() {
		return typeof Storage !== "undefined";
	},

	// Return the date in 01-01-2018 format
	getDate = function(){
		var date = new Date(),
		month = (date.getMonth() + 1),
		fullDate = date.getDate() +'-'+ ((month < 10) ? '0'+ month : month) +'-'+ date.getFullYear();
		return fullDate;
	},

	trim = function(text) {
		return !text ? "" : (text + "").replace(new RegExp(/(^\s+|\s+$)/g), "");
	},

	// find the element in document
	// TODO: Will add sizzle if required
	getElement = function(element, find) {
		find = trim(find);
		var findElement = [];
		try{
			findElement = element.querySelectorAll(find);
		}
		catch (e){
			findElement = [];
		}
		return findElement;
	},

	// Set the html element attributes
	// It requires the element and the attributes which are required to be set in object
	// It will set the key as HTML attribute and the value as attribute value
	setAttributes = function(el, attrs){
		for (var key in attrs)
			if(attrs.hasOwnProperty(key)) el.setAttribute(key, attrs[key]);
	},

	// Create the required type elm
	// Set the attr if passed
	createElementSetAttr = function(type, attrs){
		var elm = document.createElement(type);
		if(attrs) setAttributes(elm, attrs);
		return elm;
	},

	// Load external CSS from the web
	// This function can handle multiple CSS load or single CSS load
	// To load multiple CSS pass them in array or send the link string directly
	loadCSS = function(href, callback) {
		var l,
		i = 0,
		putCSS = function(href) {
			l = createElementSetAttr('link', {'href': href, 'rel': 'stylesheet'});
			(document.head || document.getElementsByTagName("head")[0]).appendChild(l);
		};

		if (Array.isArray(href))
			for(; i < href.length; i++)
				putCSS(href[i]);
		else putCSS(href);
		if(callback) callback(true);
	},

	// Set all css style to the element
	setCssStyle = function(el, styleObject){
		var setStyle = function(styleKey, styleObj){
			var css = '';
			switch(styleKey){
				case 'boxShadow':
				case 'textShadow':
					if(typeof(styleObj[styleKey]) === 'string') css = styleObj[styleKey];
					else{
						if(styleObj.offset) css += styleObj.offset.x +"px "+ styleObj.offset.y +"px ";
						else css += '0px 0px ';

						if(styleObj.blurRadius !== undefined) css += styleObj.blurRadius +'px ';
						if(styleObj.spread !== undefined) css += styleObj.spread +'px ';
						css += styleObj.color;
					}
				break;

				case 'transform':
				case 'filter':
				case 'backdropFilter':
					for(var sk in styleObj)
						if(styleObj.hasOwnProperty(sk))
							css += sk +'('+ setStyle(sk, styleObj) +') ';

				break;

				case "backgroundLinearGradient":
					if(styleObj.stops){
						var tempArray = [styleObj.direction],
							k = 0;
						for(; k<styleObj.stops.length; k++)
							if(!styleObj.stops[k].distance) tempArray.push(styleObj.stops[k].color);
							else if(typeof(styleObj.stops[k].distance) === 'number') tempArray.push(styleObj.stops[k].color +' '+ styleObj.stops[k].distance +'%');
							else tempArray.push(styleObj.stops[k].color +' '+ styleObj.stops[k].distance);

						css = 'linear-gradient(' + tempArray.join(', ') +')';
					}
				break;

				case 'border':
				case 'borderTop':
				case 'borderLeft':
				case 'borderRight':
				case 'borderBottom':
					css = styleObj.width +'px '+ styleObj.style +' '+ styleObj.color;
				break;

				case 'lineHeight':
				case 'scale':
				case 'fontWeight':
				case 'opacity':
					css = styleObj[styleKey];
				break;

				default:
					if(typeof(styleObj[styleKey]) === 'string') css = styleObj[styleKey];
					else css = styleObj[styleKey] +'px';
				break;
			}
			return css;
		};

		for(var key in styleObject)
			if(styleObject.hasOwnProperty(key)){
				var css = '',
					i = 0,
					tempArray = [];
				if(Array.isArray(styleObject[key])){
					tempArray = [];
					for(; i<styleObject[key].length; i++)
						tempArray.push(setStyle(key, styleObject[key][i]))

					css = tempArray.join(', ');
				}
				else if(typeof(styleObject[key]) == 'object') css = setStyle(key, styleObject[key]);
				else css = setStyle(key, styleObject);

				if(key == 'backgroundLinearGradient') el.style['background'] = trim(css);
				else if(typeof(css) === 'string') el.style[key] = trim(css);
				else el.style[key] = css;
			}
	},

	// Binding the different type of event based on the browser support
	// Requires element, event type to bind and the callback
	bindEvent = function(el, event, fn, useCapture){
		el.addEventListener ? el.addEventListener(event, fn, useCapture ? true : false) : el.attachEvent && el.attachEvent('on' + event, fn);
	},

	// Unbinding the different type of event based on the browser support
	// Requires element, event type to unbind and the callback
	unbindEvent = function(el, event, fn) {
		el.removeEventListener ? el.removeEventListener(event, fn) : el.detachEvent && el.detachEvent('on' + event, fn);
	},

	// Try and become fullscreen
	fullScreen = function(elem, cancel) {
		var func = 'RequestFullScreen',
			elFunc = 'requestFullScreen'; //crappy vendor prefixes.

		if(cancel){
			if(document.exitFullscreen) document.exitFullscreen();
			else if(document.mozCancelFullScreen) document.mozCancelFullScreen();
			else if(document.webkitExitFullscreen) document.webkitExitFullscreen();
		}
		else{
			try{
				if(elem[elFunc]) elem[elFunc]();
				else if(elem['ms' + func]) elem['ms' + func]();
				else if(elem['moz' + func]) elem['moz' + func]();
				else if(elem['webkit' + func]) elem['webkit' + func]();
			}
			catch (e){}
		}
	},

	// Create both the containers
	// 1. The widget containers
	// 2. The full screen widget
	// 3. The tap controller div + Swipe controller div
	// 4. The unmute button for video
	createContainers = function(widgetSelector){
		var widgetDiv = createElementSetAttr('div', {'class': classPrefix +'_story'}),
			fullStoryDiv = createElementSetAttr('div', {'class': classPrefix +'_full_screen'}),
			mainContainer = createElementSetAttr('div', {'class': classPrefix +'_main_slider_cont'}),
			container = createElementSetAttr('div', {'class': classPrefix +'_clearfix '+ classPrefix +'_slider_cont'}),
			clickCntrlCont = createElementSetAttr('div', {'class': classPrefix +'_click_cntrl_container'});

		getElement(document, widgetSelector)[0].appendChild(widgetDiv);

		(document.body || document.getElementsByTagName("body")[0]).appendChild(fullStoryDiv);
		fullStoryDiv.appendChild(mainContainer);
		mainContainer.appendChild(container);
		fullStoryDiv.appendChild(clickCntrlCont);

		return {
			widget: widgetDiv,
			fullStoryDiv: fullStoryDiv,
			container: container,
			clickCont: clickCntrlCont,
		}
	},

	// Check the story is viewed or not by story id
	// If viewed it story id will saved under the story key json object in localstorage
	// If the key is not present the story is not viewed
	isSeen = function(storyId){
		if(isLocalStorageSupported()){
			var keys = localStorage[classPrefix +'_story_keys_'],
			date = getDate(),
			defaultData = {seen: [], date: date};

			if(keys){
				keys = JSON.parse(keys);
				if(keys.date == date && keys.seen.indexOf(storyId) > -1) return true;
				else if(keys.date != date) localStorage.setItem(classPrefix +"_story_keys_", JSON.stringify(defaultData));
			}
			else localStorage.setItem(classPrefix +"_story_keys_", JSON.stringify(defaultData));
		}
		return false;
	},

	// Set the story id in localstorage so that we can say
	// which story is seen and which one is not
	setSeen = function(stories, storyId, pageIndex){
		var isSeen = false,
			i = 0;
		for(; i<stories.length; i++)
			if(stories[i].uniqueID == storyId){
				if(pageIndex >= (stories[i].pages.length - 1)){
					isSeen = true
					stories[i].elm.widgetElm.classList.add('seen');
				}
				break;
			}

		if(isLocalStorageSupported() && isSeen){
			var keys = localStorage[classPrefix +'_story_keys_'];
			if(keys){
				keys = JSON.parse(keys);
				if(keys.seen.indexOf(storyId) == -1) keys.seen.push(storyId);
				localStorage.setItem(classPrefix +"_story_keys_", JSON.stringify(keys));
			}
		}
	},

	// Set the story pages index which has been already seen
	// Based on that we can say which pages are already seen and which are not
	setSeenStoryPages = function(storyId, pageIndex){
		if(isLocalStorageSupported()){
			var keys = localStorage[classPrefix +'_story_seen_keys_'],
				date = getDate();
			if(keys){
				keys = JSON.parse(keys);

				// console.log(keys.data[storyId]);

				if(!keys.data[storyId]) keys.data[storyId] = 0;
				if(keys.date == date) keys.data[storyId] = pageIndex;
				else if(keys.date != date){
					keys = {date: date, data: {}};
					keys.data[storyId] = 0;
				}
			}
			else{
				keys = {date: date, data: {}};
				keys.data[storyId] = 0;
			}
			localStorage.setItem(classPrefix +"_story_seen_keys_", JSON.stringify(keys));
		}
	},

	getNotSeenStoryPage = function(selectedStory){
		var index = undefined,
		date = getDate(),
		storyId = selectedStory.uniqueID;

		if(isLocalStorageSupported()){
			var keys = localStorage[classPrefix +'_story_seen_keys_'];
			if(keys){
				keys = JSON.parse(keys);
				if(keys.date == date){
					if(keys.data[storyId] !== undefined){
						if(keys.data[storyId] == (selectedStory.pages.length - 1)) index = 0;
						else if(keys.data[storyId] > -1) index = keys.data[storyId];
					}
					else index = 0;
				}
				else localStorage.removeItem(classPrefix +'_story_seen_keys_');
			}
		}
		if(index === undefined) index = 0;
		// console.log(index);
		return index;
	},

	// Filter seen story and unseen story
	// Order them based on unseen and seen
	filterStory = function(data){
		// data = JSON.parse(JSON.stringify(data));
		var i = 0,
		unseenStory = [],
		seenStory = [],
		widgetStories = data.widgets.stories;

		// Setting up story is already viewed or not
		for(; i < widgetStories.length; i++){
			try{ widgetStories[i] = JSON.parse(widgetStories[i]) }
			catch(e){}

			widgetStories[i].elm = {};
			var seen = isSeen(widgetStories[i].uniqueID);
			widgetStories[i].isSeen = seen;

			if(seen) seenStory.push(widgetStories[i]);
			else unseenStory.push(widgetStories[i]);
		}
		unseenStory = unseenStory.concat(seenStory);
		data.widgets.stories = unseenStory;
		return data;
	},

	// Put element inside the story wodget div
	// Put stories in the widget looping throught the data
	// Decide whether story is already viewed or not
	createStoryWidget = function(container, data){
		var i=0,
		ul = createElementSetAttr('ul', {'class': classPrefix +'_story_rail '+ classPrefix +'_clearfix'}),
		raildiv,
		railImageDiv,
		nameSpan,
		li,
		widgetStories = data.widgets.stories,
		counter = 0,
		createWidgetElement = function(thumbnail, uniqueID, name, isSeen){
			li = createElementSetAttr('li', isSeen ? {'class': 'seen', 'data-id': uniqueID, 'data-index': counter} : {'data-id': uniqueID, 'data-index': counter});

			raildiv = createElementSetAttr('div', {'class': classPrefix +'_rail_image_holder'});
			railImageDiv = createElementSetAttr('div', {'class': classPrefix +'_rail_image', 'style': 'background-image:url('+ thumbnail +')'});

			nameSpan = createElementSetAttr('span', {'class': classPrefix +'_rail_info'});
			nameSpan.innerText = name;

			ul.appendChild(li);
			li.appendChild(raildiv);
			raildiv.appendChild(railImageDiv);
			li.appendChild(nameSpan);

			counter++;
			return li;
		};

		container.appendChild(ul);
		setCssStyle(container, data.widgets.defaultStyle);
		for(; i<widgetStories.length; i++)
			widgetStories[i].elm.widgetElm = createWidgetElement(widgetStories[i].thumbnail, widgetStories[i].uniqueID, widgetStories[i].name, widgetStories[i].isSeen);

		data.widgets.elm = {};
		data.widgets.elm.widget = container;

		pushEventInQueue('widget_loaded', {'domain_id': domainId});
		return data;
	},

	// Create full screen story pages and it's element by looping throught the json
	// It's also create pages element and return in array
	createStory = function(container, story){
		var tempArray = [],
			videoImage = [],
			tempObject = {},
			li,
			layer,
			layerDiv,
			layerInnerDiv,
			i = 0,
			j = 0,
			pages = story.pages,
			notSeenIndex = getNotSeenStoryPage(story),

		createLayer = function(layer, index){
			var elm;
			switch(layer.type){
				case 'video':
					var video = createElementSetAttr('video', {'preload': 'auto', 'height': layer.height, 'width': layer.width, 'poster': layer.poster, 'muted': '', 'webkit-playsinline': '', 'playsinline': '', 'page-index': index, 'story-id': story.uniqueID}),
						source,
						k = 0;
					for(; k<layer.sources.length; k++)
						video.appendChild(createElementSetAttr('source', {'src': layer.sources[k].source, 'type': layer.sources[k].type}))

					video.muted = true;
					elm = video;
				break;

				case 'image':
					var image = createElementSetAttr('img', {'src': layer.source, 'height': layer.height, 'width': layer.width, 'page-index': index, 'story-id': story.uniqueID});
					setCssStyle(image, layer.styles);
					elm = image;
				break;

				case 'container':
					var container = createElementSetAttr('div'),
					k = 0,
					blankSpan = createElementSetAttr('span');

					setCssStyle(container, layer.styles);
					if(layer.elements)
						for(; k<layer.elements.length; k++){
							blankSpan.appendChild(createLayer(layer.elements[k]));
							container.appendChild(blankSpan);
						}

					elm = container;
				break;

				case 'paragraph':
					var paragraph = createElementSetAttr('p'),
					k = 0,
					blankSpan = createElementSetAttr('span');

					setCssStyle(paragraph, layer.styles);
					if(layer.elements)
						for(; k<layer.elements.length; k++){
							blankSpan.appendChild(createLayer(layer.elements[k]));
							paragraph.appendChild(blankSpan);
						}

					paragraph.innerText = layer.text;
					elm = paragraph;
				break;

				case 'heading':
					elm = createElementSetAttr('h1');
					elm.innerText = layer.text;
					setCssStyle(elm, layer.styles);
				break;

				case 'heading1':
					elm = createElementSetAttr('h1');
					elm.innerText = layer.text;
					setCssStyle(elm, layer.styles);
				break;

				case 'heading2':
					elm = createElementSetAttr('h2');
					elm.innerText = layer.text;
					setCssStyle(elm, layer.styles);
				break;

				case 'heading3':
					elm = createElementSetAttr('h3');
					elm.innerText = layer.text;
					setCssStyle(elm, layer.styles);
				break;

				case 'heading4':
					elm = createElementSetAttr('h4');
					elm.innerText = layer.text;
					setCssStyle(elm, layer.styles);
				break;

				case 'heading5':
					elm = createElementSetAttr('h5');
					elm.innerText = layer.text;
					setCssStyle(elm, layer.styles);
				break;

				case 'heading6':
					elm = createElementSetAttr('h6');
					elm.innerText = layer.text;
					setCssStyle(elm, layer.styles);
				break;
			}
			return elm;
		};

		for(; i < pages.length; i++){
			li = createElementSetAttr('li', {'class': (classPrefix +'_story_page'+ ((notSeenIndex == i) ? ' active' : '')), 'data-index': i});
			tempObject = {video: undefined, image: []};

			for(j=0; j<pages[i].layers.length; j++){
				layerDiv = createElementSetAttr('div', {'class': classPrefix +'_page_layer', 'style':'z-index:'+ (j+1)});
				layerInnerDiv = createElementSetAttr('div', {'class': (classPrefix +'_page_layer_inner') + ((pages[i].layers[j].type == 'image' || pages[i].layers[j].type == 'video') ? ' fill' : '')});

				layer = createLayer(pages[i].layers[j], i);

				if(pages[i].layers[j].type == 'image' || pages[i].layers[j].type == 'video'){
					setAttributes(li, {'data-type': pages[i].layers[j].type});
					if(pages[i].layers[j].type == 'video') tempObject.video = layer;
					else tempObject.image.push(layer);
				}

				layerInnerDiv.appendChild(layer);
				layerDiv.appendChild(layerInnerDiv);
				li.appendChild(layerDiv);
			}
			container.appendChild(li);
			tempArray.push(li);
			videoImage.push(tempObject);
		}
		return {
			pages: tempArray,
			layervid: videoImage
		}
	},

	// Create full screen story
	createFullScreenStory = function(container, data, isDemo){
		var i=0,
		widgetStories = data.widgets.stories,

		createHeader = function(header, thumbnail, name){
			var leftDiv = createElementSetAttr('div', {'class': classPrefix +'_header_left'}),
			rightDiv = createElementSetAttr('div', {'class': classPrefix +'_header_right'}),
			middleDiv = createElementSetAttr('div', {'class': classPrefix +'_header_middle'}),
			muteSpan = createElementSetAttr('span', {'class': classPrefix +'_mute muted'}),
			headerImage = createElementSetAttr('div', {'class': classPrefix +'_header_image', 'style':'background-image:url('+ thumbnail +')'}),
			headerName = createElementSetAttr('span', {'class': classPrefix +'_story_name'}),
			closeSpan = createElementSetAttr('span', {'class': classPrefix +'_close'});

			headerName.innerText = name;
			leftDiv.appendChild(headerImage);
			leftDiv.appendChild(headerName);

			closeSpan.innerHTML = '&times;';
			rightDiv.appendChild(closeSpan);

			header.appendChild(leftDiv);
			header.appendChild(middleDiv);
			middleDiv.appendChild(muteSpan);
			header.appendChild(rightDiv);
			return {
				'close': closeSpan,
				'mute': muteSpan
			}
		},
		createPointer = function(container, pages, uniqueID){
			var tempArray = [],
			j = 0;

			for(; j<pages.length; j++){
				var pointer = createElementSetAttr('span', {'class': classPrefix +'_pointer', 'data-index': j}),
					b = createElementSetAttr('b', {'style': 'animation-duration:5s'});

				pointer.appendChild(b);
				container.appendChild(pointer);
				tempArray.push({
					'pointer': pointer,
					'duration': b
				});
			}
			return tempArray;
		};

		for(; i<widgetStories.length; i++){
			var sliderDiv = createElementSetAttr('div', {'data-id': widgetStories[i].uniqueID, 'data-index': i, 'class': classPrefix +'_slider'}),
			sliderPointerDiv = createElementSetAttr('div', {'class': classPrefix +'_slider_pointer', 'data-id': widgetStories[i].uniqueID}),
			sliderStoryHeader = createElementSetAttr('div', {'class': classPrefix +'_story_header', 'data-id': widgetStories[i].uniqueID}),
			sliderStoryList = createElementSetAttr('ul', {'class': classPrefix +'_story_pages_list', 'data-id': widgetStories[i].uniqueID}),
			sliderLoader = createElementSetAttr('div', {'class': classPrefix +'_content_loader', 'data-id': widgetStories[i].uniqueID}),
			loaderSpan = createElementSetAttr('span', {'class': classPrefix +'_loader', 'data-id': widgetStories[i].uniqueID}),
			createdStory;

			var muteClose = createHeader(sliderStoryHeader, widgetStories[i].thumbnail, widgetStories[i].name);
			if(!widgetStories[i].elm) widgetStories[i].elm = {};
			widgetStories[i].elm.mute = muteClose.mute;
			widgetStories[i].elm.close = muteClose.close;
			widgetStories[i].elm.pointer = [];
			widgetStories[i].elm.pointer = createPointer(sliderPointerDiv, widgetStories[i].pages, widgetStories[i].uniqueID);

			widgetStories[i].elm.pages = [];
			widgetStories[i].elm.vidimg = [];
			createdStory = createStory(sliderStoryList, widgetStories[i]);

			widgetStories[i].elm.pages = createdStory.pages;
			widgetStories[i].elm.vidimg = createdStory.layervid;

			sliderDiv.appendChild(sliderPointerDiv);
			sliderDiv.appendChild(sliderStoryHeader);
			sliderDiv.appendChild(sliderStoryList);
			sliderDiv.appendChild(sliderLoader);
			sliderLoader.appendChild(loaderSpan);

			container.appendChild(sliderDiv);

			widgetStories[i].elm.slider = sliderDiv;
			widgetStories[i].elm.loader = sliderLoader;
			widgetStories[i].elm.pageCnt = sliderStoryList;
		}
		data.widgets.elm.full = container;
		return data;
	},

	makeItWork = function(storyJson, containers){
		var stories = storyJson.widgets.stories,
		storyIndex = 0,
		storyUniqueId = undefined,
		selectedStory = {},
		pageIndex = 0,
		i = 0,
		isMuted = true,
		longPressRunning = false,

		translate = function(element, to, duration, ease, container) {
			var direction = to > 0 ? 1 : -1,
				to3d = Math.abs(to) / window.innerWidth * 90 * direction,
				scaling = to3d == 0 ? 'scale(0.95)' : 'scale(0.93, 0.93)';

			if(container) container.style.transform = scaling;
			if(to3d < -90 || to3d > 90) return false;

			var transform = 'rotateY(' + to3d + 'deg)';

			if(element){
				if(ease) element.style.transitionTimingFunction = ease;
				element.style.transitionDuration = duration +'ms';
				element.style.transform = transform;
			}
		},

		// Show loader to the page by adding class
		showLoader = function(){
			if(selectedStory && selectedStory.elm){
				selectedStory.elm.loader.classList.add('active');
				selectedStory.elm.pointer[pageIndex].pointer.classList.remove('active');
				selectedStory.elm.pointer[pageIndex].pointer.classList.add('paused');
			}
		},

		// Remove loader to the page by removing class
		hideLoader = function(){
			if(selectedStory && selectedStory.elm){
				selectedStory.elm.loader.classList.remove('active');
				selectedStory.elm.pointer[pageIndex].pointer.classList.remove('paused');
				selectedStory.elm.pointer[pageIndex].pointer.classList.add('active');
			}
		},

		// Unmute the video if the video is muted
		unmuteVideo = function(){
			if(selectedStory && selectedStory.elm && selectedStory.elm.vidimg){
				var video = selectedStory.elm.vidimg[pageIndex].video,
					i = 0;
				if(video && video.muted){
					video.muted = false;
					video.volume = 1;
				}
				isMuted = false;
				for(; i<stories.length; i++)
					stories[i].elm.mute.classList.remove('muted');
			}
		},

		// Unmute the video if the video is muted
		muteVideo = function(){
			if(selectedStory && selectedStory.elm && selectedStory.elm.vidimg){
				var video = selectedStory.elm.vidimg[pageIndex].video,
					i = 0;
				if(video && !video.muted){
					video.muted = true;
					video.volume = 0;
				}
				isMuted = true;
				for(; i<stories.length; i++)
					stories[i].elm.mute.classList.add('muted');
			}
		},

		loadVideoOrImage = function(index){
			selectedStory.pages[index].binded = true;
			var video = selectedStory.elm.vidimg[index].video,
				images = selectedStory.elm.vidimg[index].image;

			if(video){
				var setDuration = function(){
					if(index == pageIndex){
						selectedStory.pages[index].duration = (video.duration + .05);
						selectedStory.elm.pointer[index].duration.style.animationDuration = (video.duration + .05) +'s';
					}
				},
				setVideoFromBegining = function(){
					video.currentTime = 0;
				};
				video.onloadedmetadata = setDuration;
				video.durationchange = setDuration;

				bindEvent(video, 'waiting', function(){
					var pindex = this.getAttribute('page-index'),
						sid = this.getAttribute('story-id');

					pindex = (pindex) ? parseInt(pindex) : index;
					if(pindex == pageIndex && sid == selectedStory.uniqueID){
						if(!isMuted) unmuteVideo();
						else muteVideo();

						showLoader();
					}
				});
				bindEvent(video, 'playing', function(){
					var pindex = this.getAttribute('page-index'),
						sid = this.getAttribute('story-id');

					pindex = (pindex) ? parseInt(pindex) : index;
					if(pindex == pageIndex && sid == selectedStory.uniqueID){
						if(!isMuted) unmuteVideo();
						else muteVideo();

						hideLoader();
					}
				});
				bindEvent(video, 'ended', setVideoFromBegining);
				setDuration();
			}
			else if(images.length > 0){
				selectedStory.pages[index].duration = 5;
				selectedStory.elm.pointer[index].duration.style.animationDuration = '5s';

				var counter = 0,
				loaded = function(){
					var pindex = this.getAttribute('page-index'),
						sid = this.getAttribute('story-id');

					counter++;
					if(counter == images.length && pindex == pageIndex) hideLoader();
					else if(pindex == pageIndex && sid == selectedStory.uniqueID) showLoader();
				};

				for(var k=0; k<images.length; k++){
					if(!images[k].complete && index == pageIndex) showLoader();
					bindEvent(images[k], 'load', loaded);
				}
			}
			else selectedStory.pages[index].duration = 5;
		},

		setPrevNextStory = function(callback){
			var k = 0,
			prevStoryIndex = (storyIndex > 0) ? (storyIndex - 1) : -1,
			nextStoryIndex = (storyIndex < stories.length - 1) ? (storyIndex + 1) : -1;

			selectedStory.elm.slider.classList.add('current');
			if(prevStoryIndex != -1) stories[prevStoryIndex].elm.slider.classList.add('prev');
			if(nextStoryIndex != -1) stories[nextStoryIndex].elm.slider.classList.add('next');

			selectedStory.elm.slider.classList.remove('next', 'prev');
			if(prevStoryIndex != -1) stories[prevStoryIndex].elm.slider.classList.remove('current', 'next');
			if(nextStoryIndex != -1) stories[nextStoryIndex].elm.slider.classList.remove('current', 'prev');

			if(prevStoryIndex != -1) console.log(stories[prevStoryIndex].elm.slider.classList);
			console.log(selectedStory.elm.slider.classList);
			if(nextStoryIndex != -1) console.log(stories[nextStoryIndex].elm.slider.classList);

			for(; k<stories.length; k++){
				if(k == storyIndex || k == prevStoryIndex || k == nextStoryIndex) continue;
				stories[k].elm.slider.classList.remove('current', 'next', 'prev');
			}
			hideLoader();
			window.setTimeout(function(){
				if(callback) callback()
			});
		},

		bindTransitionCallback = function(elm, transEndFnc){
			var pfx = ["", "webkit", "moz", "MS", "o"],
			k = 0,
			called = false,
			callback = function(){
				for(k=0; k<pfx.length; k++)
					unbindEvent(elm, pfx[k] +'transitionend', callback);

				if(!called){
					called = true;
					transEndFnc();
				}
			};

			for(; k<pfx.length; k++)
				bindEvent(elm, pfx[k] +'transitionend', callback);
		},

		changeToPrevStory = function(){
			storyIndex--;
			if(storyIndex > -1){
				selectedStory = stories[storyIndex];
				storyUniqueId = selectedStory.uniqueID;
				pageIndex = getNotSeenStoryPage(selectedStory);

				if(selectedStory.elm.pages.length > 0){
					var callback = function(){
						setPrevNextStory(function(){
							setActivePage(function(){
								translate(containers.container, '0', 0, null, (containers.container.parentNode || containers.container.parentElement));
								startPlaying();
							})
						});
					}
					selectedStory.elm.pages[pageIndex].classList.add('active');
					bindTransitionCallback(containers.container, callback);
					translate(containers.container, window.innerWidth, 600, null, (containers.container.parentNode || containers.container.parentElement));
				}
				else stopAndCloseStory();
			}
			else stopAndCloseStory();
		},

		changeToNextStory = function(){
			setSeen(stories, storyUniqueId, pageIndex);
			storyIndex++;
			if(storyIndex < stories.length){
				selectedStory = stories[storyIndex];
				storyUniqueId = selectedStory.uniqueID;
				pageIndex = getNotSeenStoryPage(selectedStory);
				
				if(selectedStory.elm.pages.length > 0){
					var callback = function(){
						setPrevNextStory(function(){
							setActivePage(function(){
								translate(containers.container, '0', 0, null, (containers.container.parentNode || containers.container.parentElement));
								startPlaying();
							})
						});
					}
					console.log(pageIndex);
					selectedStory.elm.pages[pageIndex].classList.add('active');
					bindTransitionCallback(containers.container, callback);
					translate(containers.container, -window.innerWidth, 600, null, (containers.container.parentNode || containers.container.parentElement));
				}
				else stopAndCloseStory();
			}
			else stopAndCloseStory();
		},

		runNextStory = function(){
			pageIndex++;
			if(pageIndex < selectedStory.pages.length){
				setSeenStoryPages(selectedStory.uniqueID, pageIndex - 1);
				var video = selectedStory.elm.vidimg[pageIndex - 1].video;
				if(video && !video.paused){
					video.pause();
					video.currentTime = 0;
				}
				setActivePage(function(){
					startPlaying();
				});
			}
			else{
				pageIndex--;
				setSeenStoryPages(selectedStory.uniqueID, pageIndex);
				changeToNextStory();
			}
		},

		runPrevStory = function(){
			pageIndex--;
			if(pageIndex > -1){
				setSeenStoryPages(selectedStory.uniqueID, pageIndex);
				var video = selectedStory.elm.vidimg[pageIndex + 1].video;
				if(video && !video.paused){
					video.pause();
					video.currentTime = 0;
				}
				setActivePage(function(){
					startPlaying();
				});
			}
			else{
				pageIndex++;
				setSeenStoryPages(selectedStory.uniqueID, pageIndex);
				changeToPrevStory();
			}
		},

		setActivePage = function(callback){
			var k = 0,
				l = 0,
				pfx = ["", "webkit", "moz", "MS", "o"];

			selectedStory.elm.pages[pageIndex].classList.add('active');
			
			window.setTimeout(function(){
				for(; k<selectedStory.elm.pages.length; k++){
					selectedStory.elm.pointer[k].duration.style.display = 'none';
					if(k != pageIndex) selectedStory.elm.pages[k].classList.remove('seen', 'active', 'paused', 'long-press');
					
					if(pageIndex > 0 && k < pageIndex){
						selectedStory.elm.pointer[k].pointer.classList.remove('paused', 'active');
						selectedStory.elm.pointer[k].pointer.classList.add('seen');
					}
					else selectedStory.elm.pointer[k].pointer.classList.remove('seen', 'paused');
				}

				if(!selectedStory.pages[pageIndex].binded) loadVideoOrImage(pageIndex);
				if(selectedStory.pages[pageIndex].duration) selectedStory.elm.pointer[pageIndex].duration.style.animationDuration = selectedStory.pages[pageIndex].duration +'s';

				if(!selectedStory.binded){
					selectedStory.binded = true;
					for(l=0; l<selectedStory.elm.pointer.length; l++)
						for(k=0; k<pfx.length; k++)
							bindEvent(selectedStory.elm.pointer[l].duration, pfx[k] +'animationend', runNextStory);
				}

				// window.setTimeout(function(){
					if(callback) callback()
				// });
			});
		},

		startPlaying = function(){
			var video = selectedStory.elm.vidimg[pageIndex].video;
			selectedStory.elm.pointer[pageIndex].pointer.classList.remove('seen');
			selectedStory.elm.pointer[pageIndex].duration.style.display = 'none';
			window.setTimeout(function(){
				selectedStory.elm.pointer[pageIndex].pointer.classList.add('active');
				selectedStory.elm.pointer[pageIndex].duration.style.display = 'block';

				if(video){
					video.currentTime = 0;
					video.play();
				}
			});
		},

		playStory = function(){
			window.location.hash = 'story';
			(document.body || document.getElementsByTagName('body')[0]).style.overflow = 'hidden';
			storyIndex = this.getAttribute('data-index') ? parseInt(this.getAttribute('data-index')) : 0;
			storyUniqueId = this.getAttribute('data-id') ? this.getAttribute('data-id') : undefined;
			selectedStory = stories[storyIndex];
			pageIndex = getNotSeenStoryPage(selectedStory);

			if(selectedStory.uniqueID == storyUniqueId && selectedStory.elm.pages.length > 0){
				setPrevNextStory(function(){
					setActivePage(function(){
						containers.fullStoryDiv.classList.add('active');
						// fullScreen(containers.fullStoryDiv);
						setTimeout(function() {
							startPlaying();
						});
					})
				});

				// Track the tap event on widget
				pushEventInQueue('widget_tap', {'story_index': storyIndex, 'story_id': selectedStory.uniqueID, 'thumbnail_id': selectedStory.thumbnailId});
			}
		},

		stopAndCloseStory = function(swipe){
			(document.body || document.getElementsByTagName('body')[0]).style.overflow = 'scroll';
			fullScreen(containers.fullStoryDiv, true);
			// window.location.hash = '';
			containers.fullStoryDiv.classList.remove('active');
			window.setTimeout(function(){
				pushEventInQueue('dismiss', {'page_id': selectedStory.pages[pageIndex].uniqueID, 'story_id': selectedStory.uniqueID, 'domain_id': domainId});

				var video = selectedStory.elm.vidimg[pageIndex].video;
				if(video && !video.paused){
					video.pause();
					video.currentTime = 0;
				}

				for(var i=0; i<stories.length; i++){
					stories[i].elm.slider.classList.remove('prev', 'current', 'next');
					for(var j=0; j<stories[i].pages.length; j++){
						stories[i].elm.pointer[j].pointer.classList.remove('active', 'seen');
						stories[i].elm.pointer[j].duration.style.display = 'none';
					}
				}

				storyIndex = pageIndex = i = 0;
				storyUniqueId = undefined;
				selectedStory = {};
				isMuted = true;
				longPressRunning = false;
			}, 300);
		},

		bindTouchEvents = function(elm){
			var enableMouseEvents = false,
				position = {},
				touchOffset = undefined,
				isScrolling = undefined,
				delta = undefined,
				timer = undefined,
				nextTimer = undefined;

			if(!isMobile) enableMouseEvents = true;

			var touchStart = function(event){
				event.preventDefault();
				var touches = event.touches ? event.touches[0] : event;
				touchOffset = {
					x: touches.pageX,
					y: touches.pageY,
					time: Date.now()
				};
				isScrolling = undefined;
				delta = undefined;
				position = getPosition(elm);

				if(enableMouseEvents){
					bindEvent(elm, 'mousemove', touchMove);
					bindEvent(elm, 'mouseup', touchEnd);
					bindEvent(elm, 'mouseleave', touchEnd);
				}
				bindEvent(elm, 'touchmove', touchMove);
				bindEvent(elm, 'touchend', touchEnd);

				var video = selectedStory.elm.vidimg[pageIndex].video;
				if(video && !video.paused) video.pause();
				selectedStory.elm.pointer[pageIndex].pointer.classList.remove('active');
				selectedStory.elm.pointer[pageIndex].pointer.classList.add('paused');

				timer = window.setTimeout(function(){
					if(selectedStory && selectedStory.elm) selectedStory.elm.pages[pageIndex].classList.add('long-press');
				}, 600);

				nextTimer = window.setTimeout(function(){
					window.clearInterval(nextTimer);
					nextTimer = false;
				}, 250);
			},
			touchMove = function(event){
				// console.log(1);
				var touches = event.touches ? event.touches[0] : event;
				if(touchOffset){
					delta = {
						x: touches.pageX - touchOffset.x,
						y: touches.pageY - touchOffset.y
					};

					if(isScrolling === undefined) isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
					if(!isScrolling){
						event.preventDefault();

						if(storyIndex == 0 && (position.x + delta.x) > 140) stopAndCloseStory()
						else if(storyIndex == (stories.length - 1) && (position.x + delta.x) < -140) stopAndCloseStory()
						else translate(containers.container, position.x + delta.x, 0, null, (containers.container.parentNode || containers.container.parentElement));
					}
				}
			},
			touchEnd = function(event){
				if(enableMouseEvents){
					unbindEvent(elm, 'mousemove', touchMove);
					unbindEvent(elm, 'mouseup', touchEnd);
					unbindEvent(elm, 'mouseleave', touchEnd);
				}
				unbindEvent(elm, 'touchmove', touchMove);
				unbindEvent(elm, 'touchend', touchEnd);

				var lastTouchOffset = touchOffset,
				resumePlay = function(){
					// console.log('resume');
					selectedStory.elm.pointer[pageIndex].pointer.classList.remove('paused');
					selectedStory.elm.pointer[pageIndex].pointer.classList.add('active');

					var video = selectedStory.elm.vidimg[pageIndex].video;
					if(video && video.paused) video.play();

					selectedStory.elm.pages[pageIndex].classList.remove('long-press');
				};

				// Swipe
				if(delta && (delta.x != 0 || delta.y != 0)){
					var duration = touchOffset ? Date.now() - touchOffset.time : undefined,
					isValid = Number(duration) < 300 && Math.abs(delta.x) > 25 || Math.abs(delta.x) > window.innerWidth / 3,
					direction = delta.x < 0,
					index = direction ? storyIndex < (stories.length - 1) : (storyIndex > 0),
					isOutOfBounds = direction && !index || !direction && !index;

					if(!isScrolling){
						if(isValid && !isOutOfBounds){
							if(direction){ 
								pushEventInQueue('forward_swipe', {'page_id': selectedStory.pages[pageIndex].uniqueID, 'story_id': selectedStory.uniqueID, 'domain_id': domainId});
								changeToNextStory();
							}
							else{ 
								pushEventInQueue('backward_swipe', {'page_id': selectedStory.pages[pageIndex].uniqueID, 'story_id': selectedStory.uniqueID, 'domain_id': domainId});
								changeToPrevStory();
							}
						}
						else{
							translate(containers.container, position.x, 300, null, (containers.container.parentNode || containers.container.parentElement));
							resumePlay();
						}
					}
				}
				// Tap
				else if(nextTimer){
					window.clearInterval(timer);
					nextTimer = false;
					if(lastTouchOffset.x > window.innerWidth / 3){ 
						pushEventInQueue('forward_tap', {'page_id': selectedStory.pages[pageIndex].uniqueID, 'story_id': selectedStory.uniqueID, 'domain_id': domainId});
						runNextStory();
					}
					else{ 
						pushEventInQueue('backward_tap', {'page_id': selectedStory.pages[pageIndex].uniqueID, 'story_id': selectedStory.uniqueID, 'domain_id': domainId});
						runPrevStory();
					}
				}
				else resumePlay();
			};

			bindEvent(elm, 'touchstart', touchStart);
			if(enableMouseEvents) bindEvent(elm, 'mousedown', touchStart);
		};

		for(; i<stories.length; i++){
			bindEvent(stories[i].elm.widgetElm, 'click', playStory);
			bindEvent(stories[i].elm.close, 'click', stopAndCloseStory);
			bindEvent(stories[i].elm.mute, 'click', function(){
				// Track the tap event on widget (REVERSE)
				pushEventInQueue('mute_unmute', {'status': isMuted ? 'mute' : 'unmute', 'page_id': selectedStory.pages[pageIndex].uniqueID, 'story_id': selectedStory.uniqueID, 'domain_id': domainId});

				if(isMuted) unmuteVideo();
				else muteVideo();
			});
		}

		// var srollLeft = 0,
		// 	direction = undefined,
		// 	isScrolling;
		// bindEvent(storyJson.widgets.elm.widget, 'scroll', function(e){
		// 	if(srollLeft < this.scrollLeft) direction = 'forward';
		// 	else direction = 'backward';

		// 	srollLeft = this.scrollLeft;

		// 	window.clearTimeout( isScrolling );
		// 	isScrolling = setTimeout(function() {
		// 		// Track the tap event on widget (REVERSE)
		// 		pushEventInQueue('scroll', {'status': direction});
		// 	}, 150);
		// });
		bindTouchEvents(containers.clickCont);
		bindEvent(window, 'hashchange', function(){
			if(window.location.hash != 'story') stopAndCloseStory();
		});
	},

	// Initialize the code
	init = function(storyJson, isDemo, selector){
		storyJson = JSON.parse(storyJson);
		storyJson = filterStory(storyJson);

		if(storyJson.widgets.stories){
			var fontArray = [];
			if(storyJson.fonts)
				for(var i= 0; i<storyJson.fonts.length; i++)
					fontArray.push(googleFontLink + storyJson.fonts[i]);

			loadCSS(fontArray);

			var containers = createContainers(selector);
			// console.log(storyJson);

			if(!isDemo) storyJson = createStoryWidget(containers.widget, storyJson);
			storyJson = createFullScreenStory(containers.container, storyJson);

			// containers.fullStoryDiv.classList.add('active');
			if(!isDemo) makeItWork(storyJson, containers);
			else{
				containers.fullStoryDiv.classList.add('active');
				// console.log(storyJson.widgets.stories[0].elm);
				storyJson.widgets.stories[0].elm.slider.classList.add('current');
				
				if(storyJson.widgets.stories[0].elm.vidimg){
					for(var i=0; i<storyJson.widgets.stories[0].elm.vidimg.length; i++){
						var video = storyJson.widgets.stories[0].elm.vidimg[i].video;
						if(video) video.play()
					}
				}
			}
		}
		else console.log('Log : Sorry! no story data found in JSON.')
	};

	// Load devolte js for the analytics
	var script = document.createElement('script');
		script.src = divolteJS;
		script.type = 'text/javascript';
		script.async = true;
	(document.head || document.getElementsByTagName("head")[0]).appendChild(script);

	loadCSS([(googleFontLink + defaultFont), storyCss]);
	// loadCSS([(googleFontLink + defaultFont)]);
	if(_auto_init){
		_docReady(function(){
			httpGet(apiLink, function(status, data){
				init(data, false, widgetSelector);
			}, 'application/json');
		});
	}
	window.storyInit = init;
	// window.storyInit(storyJson, isDemo, selector)
})();
