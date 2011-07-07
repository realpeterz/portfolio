
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});



// place any jQuery/helper plugins in here, instead of separate, slower script files.




/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 *
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 *
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function($) {
	var tmp, loading, overlay, wrap, outer, content, close, title, nav_left, nav_right,

		selectedIndex = 0, selectedOpts = {}, selectedArray = [], currentIndex = 0, currentOpts = {}, currentArray = [],

		ajaxLoader = null, imgPreloader = new Image(), imgRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, swfRegExp = /[^\.]\.(swf)\s*$/i,

		loadingTimer, loadingFrame = 1,

		titleHeight = 0, titleStr = '', start_pos, final_pos, busy = false, fx = $.extend($('<div/>')[0], { prop: 0 }),

		isIE6 = $.browser.msie && $.browser.version < 7 && !window.XMLHttpRequest,

		/*
		 * Private methods 
		 */

		_abort = function() {
			loading.hide();

			imgPreloader.onerror = imgPreloader.onload = null;

			if (ajaxLoader) {
				ajaxLoader.abort();
			}

			tmp.empty();
		},

		_error = function() {
			if (false === selectedOpts.onError(selectedArray, selectedIndex, selectedOpts)) {
				loading.hide();
				busy = false;
				return;
			}

			selectedOpts.titleShow = false;

			selectedOpts.width = 'auto';
			selectedOpts.height = 'auto';

			tmp.html( '<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>' );

			_process_inline();
		},

		_start = function() {
			var obj = selectedArray[ selectedIndex ],
				href, 
				type, 
				title,
				str,
				emb,
				ret;

			_abort();

			selectedOpts = $.extend({}, $.fn.fancybox.defaults, (typeof $(obj).data('fancybox') == 'undefined' ? selectedOpts : $(obj).data('fancybox')));

			ret = selectedOpts.onStart(selectedArray, selectedIndex, selectedOpts);

			if (ret === false) {
				busy = false;
				return;
			} else if (typeof ret == 'object') {
				selectedOpts = $.extend(selectedOpts, ret);
			}

			title = selectedOpts.title || (obj.nodeName ? $(obj).attr('title') : obj.title) || '';

			if (obj.nodeName && !selectedOpts.orig) {
				selectedOpts.orig = $(obj).children("img:first").length ? $(obj).children("img:first") : $(obj);
			}

			if (title === '' && selectedOpts.orig && selectedOpts.titleFromAlt) {
				title = selectedOpts.orig.attr('alt');
			}

			href = selectedOpts.href || (obj.nodeName ? $(obj).attr('href') : obj.href) || null;

			if ((/^(?:javascript)/i).test(href) || href == '#') {
				href = null;
			}

			if (selectedOpts.type) {
				type = selectedOpts.type;

				if (!href) {
					href = selectedOpts.content;
				}

			} else if (selectedOpts.content) {
				type = 'html';

			} else if (href) {
				if (href.match(imgRegExp)) {
					type = 'image';

				} else if (href.match(swfRegExp)) {
					type = 'swf';

				} else if ($(obj).hasClass("iframe")) {
					type = 'iframe';

				} else if (href.indexOf("#") === 0) {
					type = 'inline';

				} else {
					type = 'ajax';
				}
			}

			if (!type) {
				_error();
				return;
			}

			if (type == 'inline') {
				obj	= href.substr(href.indexOf("#"));
				type = $(obj).length > 0 ? 'inline' : 'ajax';
			}

			selectedOpts.type = type;
			selectedOpts.href = href;
			selectedOpts.title = title;

			if (selectedOpts.autoDimensions) {
				if (selectedOpts.type == 'html' || selectedOpts.type == 'inline' || selectedOpts.type == 'ajax') {
					selectedOpts.width = 'auto';
					selectedOpts.height = 'auto';
				} else {
					selectedOpts.autoDimensions = false;	
				}
			}

			if (selectedOpts.modal) {
				selectedOpts.overlayShow = true;
				selectedOpts.hideOnOverlayClick = false;
				selectedOpts.hideOnContentClick = false;
				selectedOpts.enableEscapeButton = false;
				selectedOpts.showCloseButton = false;
			}

			selectedOpts.padding = parseInt(selectedOpts.padding, 10);
			selectedOpts.margin = parseInt(selectedOpts.margin, 10);

			tmp.css('padding', (selectedOpts.padding + selectedOpts.margin));

			$('.fancybox-inline-tmp').unbind('fancybox-cancel').bind('fancybox-change', function() {
				$(this).replaceWith(content.children());				
			});

			switch (type) {
				case 'html' :
					tmp.html( selectedOpts.content );
					_process_inline();
				break;

				case 'inline' :
					if ( $(obj).parent().is('#fancybox-content') === true) {
						busy = false;
						return;
					}

					$('<div class="fancybox-inline-tmp" />')
						.hide()
						.insertBefore( $(obj) )
						.bind('fancybox-cleanup', function() {
							$(this).replaceWith(content.children());
						}).bind('fancybox-cancel', function() {
							$(this).replaceWith(tmp.children());
						});

					$(obj).appendTo(tmp);

					_process_inline();
				break;

				case 'image':
					busy = false;

					$.fancybox.showActivity();

					imgPreloader = new Image();

					imgPreloader.onerror = function() {
						_error();
					};

					imgPreloader.onload = function() {
						busy = true;

						imgPreloader.onerror = imgPreloader.onload = null;

						_process_image();
					};

					imgPreloader.src = href;
				break;

				case 'swf':
					selectedOpts.scrolling = 'no';

					str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"><param name="movie" value="' + href + '"></param>';
					emb = '';

					$.each(selectedOpts.swf, function(name, val) {
						str += '<param name="' + name + '" value="' + val + '"></param>';
						emb += ' ' + name + '="' + val + '"';
					});

					str += '<embed src="' + href + '" type="application/x-shockwave-flash" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"' + emb + '></embed></object>';

					tmp.html(str);

					_process_inline();
				break;

				case 'ajax':
					busy = false;

					$.fancybox.showActivity();

					selectedOpts.ajax.win = selectedOpts.ajax.success;

					ajaxLoader = $.ajax($.extend({}, selectedOpts.ajax, {
						url	: href,
						data : selectedOpts.ajax.data || {},
						error : function(XMLHttpRequest, textStatus, errorThrown) {
							if ( XMLHttpRequest.status > 0 ) {
								_error();
							}
						},
						success : function(data, textStatus, XMLHttpRequest) {
							var o = typeof XMLHttpRequest == 'object' ? XMLHttpRequest : ajaxLoader;
							if (o.status == 200) {
								if ( typeof selectedOpts.ajax.win == 'function' ) {
									ret = selectedOpts.ajax.win(href, data, textStatus, XMLHttpRequest);

									if (ret === false) {
										loading.hide();
										return;
									} else if (typeof ret == 'string' || typeof ret == 'object') {
										data = ret;
									}
								}

								tmp.html( data );
								_process_inline();
							}
						}
					}));

				break;

				case 'iframe':
					_show();
				break;
			}
		},

		_process_inline = function() {
			var
				w = selectedOpts.width,
				h = selectedOpts.height;

			if (w.toString().indexOf('%') > -1) {
				w = parseInt( ($(window).width() - (selectedOpts.margin * 2)) * parseFloat(w) / 100, 10) + 'px';

			} else {
				w = w == 'auto' ? 'auto' : w + 'px';	
			}

			if (h.toString().indexOf('%') > -1) {
				h = parseInt( ($(window).height() - (selectedOpts.margin * 2)) * parseFloat(h) / 100, 10) + 'px';

			} else {
				h = h == 'auto' ? 'auto' : h + 'px';	
			}

			tmp.wrapInner('<div style="width:' + w + ';height:' + h + ';overflow: ' + (selectedOpts.scrolling == 'auto' ? 'auto' : (selectedOpts.scrolling == 'yes' ? 'scroll' : 'hidden')) + ';position:relative;"></div>');

			selectedOpts.width = tmp.width();
			selectedOpts.height = tmp.height();

			_show();
		},

		_process_image = function() {
			selectedOpts.width = imgPreloader.width;
			selectedOpts.height = imgPreloader.height;

			$("<img />").attr({
				'id' : 'fancybox-img',
				'src' : imgPreloader.src,
				'alt' : selectedOpts.title
			}).appendTo( tmp );

			_show();
		},

		_show = function() {
			var pos, equal;

			loading.hide();

			if (wrap.is(":visible") && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
				$.event.trigger('fancybox-cancel');

				busy = false;
				return;
			}

			busy = true;

			$(content.add( overlay )).unbind();

			$(window).unbind("resize.fb scroll.fb");
			$(document).unbind('keydown.fb');

			if (wrap.is(":visible") && currentOpts.titlePosition !== 'outside') {
				wrap.css('height', wrap.height());
			}

			currentArray = selectedArray;
			currentIndex = selectedIndex;
			currentOpts = selectedOpts;

			if (currentOpts.overlayShow) {
				overlay.css({
					'background-color' : currentOpts.overlayColor,
					'opacity' : currentOpts.overlayOpacity,
					'cursor' : currentOpts.hideOnOverlayClick ? 'pointer' : 'auto',
					'height' : $(document).height()
				});

				if (!overlay.is(':visible')) {
					if (isIE6) {
						$('select:not(#fancybox-tmp select)').filter(function() {
							return this.style.visibility !== 'hidden';
						}).css({'visibility' : 'hidden'}).one('fancybox-cleanup', function() {
							this.style.visibility = 'inherit';
						});
					}

					overlay.show();
				}
			} else {
				overlay.hide();
			}

			final_pos = _get_zoom_to();

			_process_title();

			if (wrap.is(":visible")) {
				$( close.add( nav_left ).add( nav_right ) ).hide();

				pos = wrap.position(),

				start_pos = {
					top	 : pos.top,
					left : pos.left,
					width : wrap.width(),
					height : wrap.height()
				};

				equal = (start_pos.width == final_pos.width && start_pos.height == final_pos.height);

				content.fadeTo(currentOpts.changeFade, 0.3, function() {
					var finish_resizing = function() {
						content.html( tmp.contents() ).fadeTo(currentOpts.changeFade, 1, _finish);
					};

					$.event.trigger('fancybox-change');

					content
						.empty()
						.removeAttr('filter')
						.css({
							'border-width' : currentOpts.padding,
							'width'	: final_pos.width - currentOpts.padding * 2,
							'height' : selectedOpts.autoDimensions ? 'auto' : final_pos.height - titleHeight - currentOpts.padding * 2
						});

					if (equal) {
						finish_resizing();

					} else {
						fx.prop = 0;

						$(fx).animate({prop: 1}, {
							 duration : currentOpts.changeSpeed,
							 easing : currentOpts.easingChange,
							 step : _draw,
							 complete : finish_resizing
						});
					}
				});

				return;
			}

			wrap.removeAttr("style");

			content.css('border-width', currentOpts.padding);

			if (currentOpts.transitionIn == 'elastic') {
				start_pos = _get_zoom_from();

				content.html( tmp.contents() );

				wrap.show();

				if (currentOpts.opacity) {
					final_pos.opacity = 0;
				}

				fx.prop = 0;

				$(fx).animate({prop: 1}, {
					 duration : currentOpts.speedIn,
					 easing : currentOpts.easingIn,
					 step : _draw,
					 complete : _finish
				});

				return;
			}

			if (currentOpts.titlePosition == 'inside' && titleHeight > 0) {	
				title.show();	
			}

			content
				.css({
					'width' : final_pos.width - currentOpts.padding * 2,
					'height' : selectedOpts.autoDimensions ? 'auto' : final_pos.height - titleHeight - currentOpts.padding * 2
				})
				.html( tmp.contents() );

			wrap
				.css(final_pos)
				.fadeIn( currentOpts.transitionIn == 'none' ? 0 : currentOpts.speedIn, _finish );
		},

		_format_title = function(title) {
			if (title && title.length) {
				if (currentOpts.titlePosition == 'float') {
					return '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + title + '</td><td id="fancybox-title-float-right"></td></tr></table>';
				}

				return '<div id="fancybox-title-' + currentOpts.titlePosition + '">' + title + '</div>';
			}

			return false;
		},

		_process_title = function() {
			titleStr = currentOpts.title || '';
			titleHeight = 0;

			title
				.empty()
				.removeAttr('style')
				.removeClass();

			if (currentOpts.titleShow === false) {
				title.hide();
				return;
			}

			titleStr = $.isFunction(currentOpts.titleFormat) ? currentOpts.titleFormat(titleStr, currentArray, currentIndex, currentOpts) : _format_title(titleStr);

			if (!titleStr || titleStr === '') {
				title.hide();
				return;
			}

			title
				.addClass('fancybox-title-' + currentOpts.titlePosition)
				.html( titleStr )
				.appendTo( 'body' )
				.show();

			switch (currentOpts.titlePosition) {
				case 'inside':
					title
						.css({
							'width' : final_pos.width - (currentOpts.padding * 2),
							'marginLeft' : currentOpts.padding,
							'marginRight' : currentOpts.padding
						});

					titleHeight = title.outerHeight(true);

					title.appendTo( outer );

					final_pos.height += titleHeight;
				break;

				case 'over':
					title
						.css({
							'marginLeft' : currentOpts.padding,
							'width'	: final_pos.width - (currentOpts.padding * 2),
							'bottom' : currentOpts.padding
						})
						.appendTo( outer );
				break;

				case 'float':
					title
						.css('left', parseInt((title.width() - final_pos.width - 40)/ 2, 10) * -1)
						.appendTo( wrap );
				break;

				default:
					title
						.css({
							'width' : final_pos.width - (currentOpts.padding * 2),
							'paddingLeft' : currentOpts.padding,
							'paddingRight' : currentOpts.padding
						})
						.appendTo( wrap );
				break;
			}

			title.hide();
		},

		_set_navigation = function() {
			if (currentOpts.enableEscapeButton || currentOpts.enableKeyboardNav) {
				$(document).bind('keydown.fb', function(e) {
					if (e.keyCode == 27 && currentOpts.enableEscapeButton) {
						e.preventDefault();
						$.fancybox.close();

					} else if ((e.keyCode == 37 || e.keyCode == 39) && currentOpts.enableKeyboardNav && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'SELECT') {
						e.preventDefault();
						$.fancybox[ e.keyCode == 37 ? 'prev' : 'next']();
					}
				});
			}

			if (!currentOpts.showNavArrows) { 
				nav_left.hide();
				nav_right.hide();
				return;
			}

			if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex !== 0) {
				nav_left.show();
			}

			if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex != (currentArray.length -1)) {
				nav_right.show();
			}
		},

		_finish = function () {
			if (!$.support.opacity) {
				content.get(0).style.removeAttribute('filter');
				wrap.get(0).style.removeAttribute('filter');
			}

			if (selectedOpts.autoDimensions) {
				content.css('height', 'auto');
			}

			wrap.css('height', 'auto');

			if (titleStr && titleStr.length) {
				title.show();
			}

			if (currentOpts.showCloseButton) {
				close.show();
			}

			_set_navigation();
	
			if (currentOpts.hideOnContentClick)	{
				content.bind('click', $.fancybox.close);
			}

			if (currentOpts.hideOnOverlayClick)	{
				overlay.bind('click', $.fancybox.close);
			}

			$(window).bind("resize.fb", $.fancybox.resize);

			if (currentOpts.centerOnScroll) {
				$(window).bind("scroll.fb", $.fancybox.center);
			}

			if (currentOpts.type == 'iframe') {
				$('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" ' + ($.browser.msie ? 'allowtransparency="true""' : '') + ' scrolling="' + selectedOpts.scrolling + '" src="' + currentOpts.href + '"></iframe>').appendTo(content);
			}

			wrap.show();

			busy = false;

			$.fancybox.center();

			currentOpts.onComplete(currentArray, currentIndex, currentOpts);

			_preload_images();
		},

		_preload_images = function() {
			var href, 
				objNext;

			if ((currentArray.length -1) > currentIndex) {
				href = currentArray[ currentIndex + 1 ].href;

				if (typeof href !== 'undefined' && href.match(imgRegExp)) {
					objNext = new Image();
					objNext.src = href;
				}
			}

			if (currentIndex > 0) {
				href = currentArray[ currentIndex - 1 ].href;

				if (typeof href !== 'undefined' && href.match(imgRegExp)) {
					objNext = new Image();
					objNext.src = href;
				}
			}
		},

		_draw = function(pos) {
			var dim = {
				width : parseInt(start_pos.width + (final_pos.width - start_pos.width) * pos, 10),
				height : parseInt(start_pos.height + (final_pos.height - start_pos.height) * pos, 10),

				top : parseInt(start_pos.top + (final_pos.top - start_pos.top) * pos, 10),
				left : parseInt(start_pos.left + (final_pos.left - start_pos.left) * pos, 10)
			};

			if (typeof final_pos.opacity !== 'undefined') {
				dim.opacity = pos < 0.5 ? 0.5 : pos;
			}

			wrap.css(dim);

			content.css({
				'width' : dim.width - currentOpts.padding * 2,
				'height' : dim.height - (titleHeight * pos) - currentOpts.padding * 2
			});
		},

		_get_viewport = function() {
			return [
				$(window).width() - (currentOpts.margin * 2),
				$(window).height() - (currentOpts.margin * 2),
				$(document).scrollLeft() + currentOpts.margin,
				$(document).scrollTop() + currentOpts.margin
			];
		},

		_get_zoom_to = function () {
			var view = _get_viewport(),
				to = {},
				resize = currentOpts.autoScale,
				double_padding = currentOpts.padding * 2,
				ratio;

			if (currentOpts.width.toString().indexOf('%') > -1) {
				to.width = parseInt((view[0] * parseFloat(currentOpts.width)) / 100, 10);
			} else {
				to.width = currentOpts.width + double_padding;
			}

			if (currentOpts.height.toString().indexOf('%') > -1) {
				to.height = parseInt((view[1] * parseFloat(currentOpts.height)) / 100, 10);
			} else {
				to.height = currentOpts.height + double_padding;
			}

			if (resize && (to.width > view[0] || to.height > view[1])) {
				if (selectedOpts.type == 'image' || selectedOpts.type == 'swf') {
					ratio = (currentOpts.width ) / (currentOpts.height );

					if ((to.width ) > view[0]) {
						to.width = view[0];
						to.height = parseInt(((to.width - double_padding) / ratio) + double_padding, 10);
					}

					if ((to.height) > view[1]) {
						to.height = view[1];
						to.width = parseInt(((to.height - double_padding) * ratio) + double_padding, 10);
					}

				} else {
					to.width = Math.min(to.width, view[0]);
					to.height = Math.min(to.height, view[1]);
				}
			}

			to.top = parseInt(Math.max(view[3] - 20, view[3] + ((view[1] - to.height - 40) * 0.5)), 10);
			to.left = parseInt(Math.max(view[2] - 20, view[2] + ((view[0] - to.width - 40) * 0.5)), 10);

			return to;
		},

		_get_obj_pos = function(obj) {
			var pos = obj.offset();

			pos.top += parseInt( obj.css('paddingTop'), 10 ) || 0;
			pos.left += parseInt( obj.css('paddingLeft'), 10 ) || 0;

			pos.top += parseInt( obj.css('border-top-width'), 10 ) || 0;
			pos.left += parseInt( obj.css('border-left-width'), 10 ) || 0;

			pos.width = obj.width();
			pos.height = obj.height();

			return pos;
		},

		_get_zoom_from = function() {
			var orig = selectedOpts.orig ? $(selectedOpts.orig) : false,
				from = {},
				pos,
				view;

			if (orig && orig.length) {
				pos = _get_obj_pos(orig);

				from = {
					width : pos.width + (currentOpts.padding * 2),
					height : pos.height + (currentOpts.padding * 2),
					top	: pos.top - currentOpts.padding - 20,
					left : pos.left - currentOpts.padding - 20
				};

			} else {
				view = _get_viewport();

				from = {
					width : currentOpts.padding * 2,
					height : currentOpts.padding * 2,
					top	: parseInt(view[3] + view[1] * 0.5, 10),
					left : parseInt(view[2] + view[0] * 0.5, 10)
				};
			}

			return from;
		},

		_animate_loading = function() {
			if (!loading.is(':visible')){
				clearInterval(loadingTimer);
				return;
			}

			$('div', loading).css('top', (loadingFrame * -40) + 'px');

			loadingFrame = (loadingFrame + 1) % 12;
		};

	/*
	 * Public methods 
	 */

	$.fn.fancybox = function(options) {
		if (!$(this).length) {
			return this;
		}

		$(this)
			.data('fancybox', $.extend({}, options, ($.metadata ? $(this).metadata() : {})))
			.unbind('click.fb')
			.bind('click.fb', function(e) {
				e.preventDefault();

				if (busy) {
					return;
				}

				busy = true;

				$(this).blur();

				selectedArray = [];
				selectedIndex = 0;

				var rel = $(this).attr('rel') || '';

				if (!rel || rel == '' || rel === 'nofollow') {
					selectedArray.push(this);

				} else {
					selectedArray = $("a[rel=" + rel + "], area[rel=" + rel + "]");
					selectedIndex = selectedArray.index( this );
				}

				_start();

				return;
			});

		return this;
	};

	$.fancybox = function(obj) {
		var opts;

		if (busy) {
			return;
		}

		busy = true;
		opts = typeof arguments[1] !== 'undefined' ? arguments[1] : {};

		selectedArray = [];
		selectedIndex = parseInt(opts.index, 10) || 0;

		if ($.isArray(obj)) {
			for (var i = 0, j = obj.length; i < j; i++) {
				if (typeof obj[i] == 'object') {
					$(obj[i]).data('fancybox', $.extend({}, opts, obj[i]));
				} else {
					obj[i] = $({}).data('fancybox', $.extend({content : obj[i]}, opts));
				}
			}

			selectedArray = jQuery.merge(selectedArray, obj);

		} else {
			if (typeof obj == 'object') {
				$(obj).data('fancybox', $.extend({}, opts, obj));
			} else {
				obj = $({}).data('fancybox', $.extend({content : obj}, opts));
			}

			selectedArray.push(obj);
		}

		if (selectedIndex > selectedArray.length || selectedIndex < 0) {
			selectedIndex = 0;
		}

		_start();
	};

	$.fancybox.showActivity = function() {
		clearInterval(loadingTimer);

		loading.show();
		loadingTimer = setInterval(_animate_loading, 66);
	};

	$.fancybox.hideActivity = function() {
		loading.hide();
	};

	$.fancybox.next = function() {
		return $.fancybox.pos( currentIndex + 1);
	};

	$.fancybox.prev = function() {
		return $.fancybox.pos( currentIndex - 1);
	};

	$.fancybox.pos = function(pos) {
		if (busy) {
			return;
		}

		pos = parseInt(pos);

		selectedArray = currentArray;

		if (pos > -1 && pos < currentArray.length) {
			selectedIndex = pos;
			_start();

		} else if (currentOpts.cyclic && currentArray.length > 1) {
			selectedIndex = pos >= currentArray.length ? 0 : currentArray.length - 1;
			_start();
		}

		return;
	};

	$.fancybox.cancel = function() {
		if (busy) {
			return;
		}

		busy = true;

		$.event.trigger('fancybox-cancel');

		_abort();

		selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts);

		busy = false;
	};

	// Note: within an iframe use - parent.$.fancybox.close();
	$.fancybox.close = function() {
		if (busy || wrap.is(':hidden')) {
			return;
		}

		busy = true;

		if (currentOpts && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
			busy = false;
			return;
		}

		_abort();

		$(close.add( nav_left ).add( nav_right )).hide();

		$(content.add( overlay )).unbind();

		$(window).unbind("resize.fb scroll.fb");
		$(document).unbind('keydown.fb');

		content.find('iframe').attr('src', isIE6 && /^https/i.test(window.location.href || '') ? 'javascript:void(false)' : 'about:blank');

		if (currentOpts.titlePosition !== 'inside') {
			title.empty();
		}

		wrap.stop();

		function _cleanup() {
			overlay.fadeOut('fast');

			title.empty().hide();
			wrap.hide();

			$.event.trigger('fancybox-cleanup');

			content.empty();

			currentOpts.onClosed(currentArray, currentIndex, currentOpts);

			currentArray = selectedOpts	= [];
			currentIndex = selectedIndex = 0;
			currentOpts = selectedOpts	= {};

			busy = false;
		}

		if (currentOpts.transitionOut == 'elastic') {
			start_pos = _get_zoom_from();

			var pos = wrap.position();

			final_pos = {
				top	 : pos.top ,
				left : pos.left,
				width :	wrap.width(),
				height : wrap.height()
			};

			if (currentOpts.opacity) {
				final_pos.opacity = 1;
			}

			title.empty().hide();

			fx.prop = 1;

			$(fx).animate({ prop: 0 }, {
				 duration : currentOpts.speedOut,
				 easing : currentOpts.easingOut,
				 step : _draw,
				 complete : _cleanup
			});

		} else {
			wrap.fadeOut( currentOpts.transitionOut == 'none' ? 0 : currentOpts.speedOut, _cleanup);
		}
	};

	$.fancybox.resize = function() {
		if (overlay.is(':visible')) {
			overlay.css('height', $(document).height());
		}

		$.fancybox.center(true);
	};

	$.fancybox.center = function() {
		var view, align;

		if (busy) {
			return;	
		}

		align = arguments[0] === true ? 1 : 0;
		view = _get_viewport();

		if (!align && (wrap.width() > view[0] || wrap.height() > view[1])) {
			return;	
		}

		wrap
			.stop()
			.animate({
				'top' : parseInt(Math.max(view[3] - 20, view[3] + ((view[1] - content.height() - 40) * 0.5) - currentOpts.padding)),
				'left' : parseInt(Math.max(view[2] - 20, view[2] + ((view[0] - content.width() - 40) * 0.5) - currentOpts.padding))
			}, typeof arguments[0] == 'number' ? arguments[0] : 200);
	};

	$.fancybox.init = function() {
		if ($("#fancybox-wrap").length) {
			return;
		}

		$('body').append(
			tmp	= $('<div id="fancybox-tmp"></div>'),
			loading	= $('<div id="fancybox-loading"><div></div></div>'),
			overlay	= $('<div id="fancybox-overlay"></div>'),
			wrap = $('<div id="fancybox-wrap"></div>')
		);

		outer = $('<div id="fancybox-outer"></div>')
			.append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>')
			.appendTo( wrap );

		outer.append(
			content = $('<div id="fancybox-content"></div>'),
			close = $('<a id="fancybox-close"></a>'),
			title = $('<div id="fancybox-title"></div>'),

			nav_left = $('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),
			nav_right = $('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')
		);

		close.click($.fancybox.close);
		loading.click($.fancybox.cancel);

		nav_left.click(function(e) {
			e.preventDefault();
			$.fancybox.prev();
		});

		nav_right.click(function(e) {
			e.preventDefault();
			$.fancybox.next();
		});

		if ($.fn.mousewheel) {
			wrap.bind('mousewheel.fb', function(e, delta) {
				if (busy) {
					e.preventDefault();

				} else if ($(e.target).get(0).clientHeight == 0 || $(e.target).get(0).scrollHeight === $(e.target).get(0).clientHeight) {
					e.preventDefault();
					$.fancybox[ delta > 0 ? 'prev' : 'next']();
				}
			});
		}

		if (!$.support.opacity) {
			wrap.addClass('fancybox-ie');
		}

		if (isIE6) {
			loading.addClass('fancybox-ie6');
			wrap.addClass('fancybox-ie6');

			$('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || '') ? 'javascript:void(false)' : 'about:blank' ) + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(outer);
		}
	};

	$.fn.fancybox.defaults = {
		padding : 10,
		margin : 40,
		opacity : false,
		modal : false,
		cyclic : false,
		scrolling : 'auto',	// 'auto', 'yes' or 'no'

		width : 560,
		height : 340,

		autoScale : true,
		autoDimensions : true,
		centerOnScroll : false,

		ajax : {},
		swf : { wmode: 'transparent' },

		hideOnOverlayClick : true,
		hideOnContentClick : false,

		overlayShow : true,
		overlayOpacity : 0.7,
		overlayColor : '#777',

		titleShow : true,
		titlePosition : 'float', // 'float', 'outside', 'inside' or 'over'
		titleFormat : null,
		titleFromAlt : false,

		transitionIn : 'fade', // 'elastic', 'fade' or 'none'
		transitionOut : 'fade', // 'elastic', 'fade' or 'none'

		speedIn : 300,
		speedOut : 300,

		changeSpeed : 300,
		changeFade : 'fast',

		easingIn : 'swing',
		easingOut : 'swing',

		showCloseButton	 : true,
		showNavArrows : true,
		enableEscapeButton : true,
		enableKeyboardNav : true,

		onStart : function(){},
		onCancel : function(){},
		onComplete : function(){},
		onCleanup : function(){},
		onClosed : function(){},
		onError : function(){}
	};

	$(document).ready(function() {
		$.fancybox.init();
	});

})(jQuery);



/*
 * jQuery 2d Transform v0.9.3
 * http://wiki.github.com/heygrady/transform/
 *
 * Copyright 2010, Grady Kuhnline
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 * 
 * Date: Sat Dec 4 15:46:09 2010 -0800
 */
(function(f,g,j,b){var h=/progid:DXImageTransform\.Microsoft\.Matrix\(.*?\)/,c=/^([\+\-]=)?([\d+.\-]+)(.*)$/,q=/%/;var d=j.createElement("modernizr"),e=d.style;function n(s){return parseFloat(s)}function l(){var s={transformProperty:"",MozTransform:"-moz-",WebkitTransform:"-webkit-",OTransform:"-o-",msTransform:"-ms-"};for(var t in s){if(typeof e[t]!="undefined"){return s[t]}}return null}function r(){if(typeof(g.Modernizr)!=="undefined"){return Modernizr.csstransforms}var t=["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"];for(var s in t){if(e[t[s]]!==b){return true}}}var a=l(),i=a!==null?a+"transform":false,k=a!==null?a+"transform-origin":false;f.support.csstransforms=r();if(a=="-ms-"){i="msTransform";k="msTransformOrigin"}f.extend({transform:function(s){s.transform=this;this.$elem=f(s);this.applyingMatrix=false;this.matrix=null;this.height=null;this.width=null;this.outerHeight=null;this.outerWidth=null;this.boxSizingValue=null;this.boxSizingProperty=null;this.attr=null;this.transformProperty=i;this.transformOriginProperty=k}});f.extend(f.transform,{funcs:["matrix","origin","reflect","reflectX","reflectXY","reflectY","rotate","scale","scaleX","scaleY","skew","skewX","skewY","translate","translateX","translateY"]});f.fn.transform=function(s,t){return this.each(function(){var u=this.transform||new f.transform(this);if(s){u.exec(s,t)}})};f.transform.prototype={exec:function(s,t){t=f.extend(true,{forceMatrix:false,preserve:false},t);this.attr=null;if(t.preserve){s=f.extend(true,this.getAttrs(true,true),s)}else{s=f.extend(true,{},s)}this.setAttrs(s);if(f.support.csstransforms&&!t.forceMatrix){return this.execFuncs(s)}else{if(f.browser.msie||(f.support.csstransforms&&t.forceMatrix)){return this.execMatrix(s)}}return false},execFuncs:function(t){var s=[];for(var u in t){if(u=="origin"){this[u].apply(this,f.isArray(t[u])?t[u]:[t[u]])}else{if(f.inArray(u,f.transform.funcs)!==-1){s.push(this.createTransformFunc(u,t[u]))}}}this.$elem.css(i,s.join(" "));return true},execMatrix:function(z){var C,x,t;var F=this.$elem[0],B=this;function A(N,M){if(q.test(N)){return parseFloat(N)/100*B["safeOuter"+(M?"Height":"Width")]()}return o(F,N)}var s=/translate[X|Y]?/,u=[];for(var v in z){switch(f.type(z[v])){case"array":t=z[v];break;case"string":t=f.map(z[v].split(","),f.trim);break;default:t=[z[v]]}if(f.matrix[v]){if(f.cssAngle[v]){t=f.map(t,f.angle.toDegree)}else{if(!f.cssNumber[v]){t=f.map(t,A)}else{t=f.map(t,n)}}x=f.matrix[v].apply(this,t);if(s.test(v)){u.push(x)}else{C=C?C.x(x):x}}else{if(v=="origin"){this[v].apply(this,t)}}}C=C||f.matrix.identity();f.each(u,function(M,N){C=C.x(N)});var K=parseFloat(C.e(1,1).toFixed(6)),I=parseFloat(C.e(2,1).toFixed(6)),H=parseFloat(C.e(1,2).toFixed(6)),G=parseFloat(C.e(2,2).toFixed(6)),L=C.rows===3?parseFloat(C.e(1,3).toFixed(6)):0,J=C.rows===3?parseFloat(C.e(2,3).toFixed(6)):0;if(f.support.csstransforms&&a==="-moz-"){this.$elem.css(i,"matrix("+K+", "+I+", "+H+", "+G+", "+L+"px, "+J+"px)")}else{if(f.support.csstransforms){this.$elem.css(i,"matrix("+K+", "+I+", "+H+", "+G+", "+L+", "+J+")")}else{if(f.browser.msie){var w=", FilterType='nearest neighbor'";var D=this.$elem[0].style;var E="progid:DXImageTransform.Microsoft.Matrix(M11="+K+", M12="+H+", M21="+I+", M22="+G+", sizingMethod='auto expand'"+w+")";var y=D.filter||f.curCSS(this.$elem[0],"filter")||"";D.filter=h.test(y)?y.replace(h,E):y?y+" "+E:E;this.applyingMatrix=true;this.matrix=C;this.fixPosition(C,L,J);this.applyingMatrix=false;this.matrix=null}}}return true},origin:function(s,t){if(f.support.csstransforms){if(typeof t==="undefined"){this.$elem.css(k,s)}else{this.$elem.css(k,s+" "+t)}return true}switch(s){case"left":s="0";break;case"right":s="100%";break;case"center":case b:s="50%"}switch(t){case"top":t="0";break;case"bottom":t="100%";break;case"center":case b:t="50%"}this.setAttr("origin",[q.test(s)?s:o(this.$elem[0],s)+"px",q.test(t)?t:o(this.$elem[0],t)+"px"]);return true},createTransformFunc:function(t,u){if(t.substr(0,7)==="reflect"){var s=u?f.matrix[t]():f.matrix.identity();return"matrix("+s.e(1,1)+", "+s.e(2,1)+", "+s.e(1,2)+", "+s.e(2,2)+", 0, 0)"}if(t=="matrix"){if(a==="-moz-"){u[4]=u[4]?u[4]+"px":0;u[5]=u[5]?u[5]+"px":0}}return t+"("+(f.isArray(u)?u.join(", "):u)+")"},fixPosition:function(B,y,x,D,s){var w=new f.matrix.calc(B,this.safeOuterHeight(),this.safeOuterWidth()),C=this.getAttr("origin");var v=w.originOffset(new f.matrix.V2(q.test(C[0])?parseFloat(C[0])/100*w.outerWidth:parseFloat(C[0]),q.test(C[1])?parseFloat(C[1])/100*w.outerHeight:parseFloat(C[1])));var t=w.sides();var u=this.$elem.css("position");if(u=="static"){u="relative"}var A={top:0,left:0};var z={position:u,top:(v.top+x+t.top+A.top)+"px",left:(v.left+y+t.left+A.left)+"px",zoom:1};this.$elem.css(z)}};function o(s,u){var t=c.exec(f.trim(u));if(t[3]&&t[3]!=="px"){var w="paddingBottom",v=f.style(s,w);f.style(s,w,u);u=p(s,w);f.style(s,w,v);return u}return parseFloat(u)}function p(t,u){if(t[u]!=null&&(!t.style||t.style[u]==null)){return t[u]}var s=parseFloat(f.css(t,u));return s&&s>-10000?s:0}})(jQuery,this,this.document);(function(d,c,a,f){d.extend(d.transform.prototype,{safeOuterHeight:function(){return this.safeOuterLength("height")},safeOuterWidth:function(){return this.safeOuterLength("width")},safeOuterLength:function(l){var p="outer"+(l=="width"?"Width":"Height");if(!d.support.csstransforms&&d.browser.msie){l=l=="width"?"width":"height";if(this.applyingMatrix&&!this[p]&&this.matrix){var k=new d.matrix.calc(this.matrix,1,1),n=k.offset(),g=this.$elem[p]()/n[l];this[p]=g;return g}else{if(this.applyingMatrix&&this[p]){return this[p]}}var o={height:["top","bottom"],width:["left","right"]};var h=this.$elem[0],j=parseFloat(d.curCSS(h,l,true)),q=this.boxSizingProperty,i=this.boxSizingValue;if(!this.boxSizingProperty){q=this.boxSizingProperty=e()||"box-sizing";i=this.boxSizingValue=this.$elem.css(q)||"content-box"}if(this[p]&&this[l]==j){return this[p]}else{this[l]=j}if(q&&(i=="padding-box"||i=="content-box")){j+=parseFloat(d.curCSS(h,"padding-"+o[l][0],true))||0+parseFloat(d.curCSS(h,"padding-"+o[l][1],true))||0}if(q&&i=="content-box"){j+=parseFloat(d.curCSS(h,"border-"+o[l][0]+"-width",true))||0+parseFloat(d.curCSS(h,"border-"+o[l][1]+"-width",true))||0}this[p]=j;return j}return this.$elem[p]()}});var b=null;function e(){if(b){return b}var h={boxSizing:"box-sizing",MozBoxSizing:"-moz-box-sizing",WebkitBoxSizing:"-webkit-box-sizing",OBoxSizing:"-o-box-sizing"},g=a.body;for(var i in h){if(typeof g.style[i]!="undefined"){b=h[i];return b}}return null}})(jQuery,this,this.document);(function(g,f,b,h){var d=/([\w\-]*?)\((.*?)\)/g,a="data-transform",e=/\s/,c=/,\s?/;g.extend(g.transform.prototype,{setAttrs:function(i){var j="",l;for(var k in i){l=i[k];if(g.isArray(l)){l=l.join(", ")}j+=" "+k+"("+l+")"}this.attr=g.trim(j);this.$elem.attr(a,this.attr)},setAttr:function(k,l){if(g.isArray(l)){l=l.join(", ")}var j=this.attr||this.$elem.attr(a);if(!j||j.indexOf(k)==-1){this.attr=g.trim(j+" "+k+"("+l+")");this.$elem.attr(a,this.attr)}else{var i=[],n;d.lastIndex=0;while(n=d.exec(j)){if(k==n[1]){i.push(k+"("+l+")")}else{i.push(n[0])}}this.attr=i.join(" ");this.$elem.attr(a,this.attr)}},getAttrs:function(){var j=this.attr||this.$elem.attr(a);if(!j){return{}}var i={},l,k;d.lastIndex=0;while((l=d.exec(j))!==null){if(l){k=l[2].split(c);i[l[1]]=k.length==1?k[0]:k}}return i},getAttr:function(j){var i=this.getAttrs();if(typeof i[j]!=="undefined"){return i[j]}if(j==="origin"&&g.support.csstransforms){return this.$elem.css(this.transformOriginProperty).split(e)}else{if(j==="origin"){return["50%","50%"]}}return g.cssDefault[j]||0}});if(typeof(g.cssAngle)=="undefined"){g.cssAngle={}}g.extend(g.cssAngle,{rotate:true,skew:true,skewX:true,skewY:true});if(typeof(g.cssDefault)=="undefined"){g.cssDefault={}}g.extend(g.cssDefault,{scale:[1,1],scaleX:1,scaleY:1,matrix:[1,0,0,1,0,0],origin:["50%","50%"],reflect:[1,0,0,1,0,0],reflectX:[1,0,0,1,0,0],reflectXY:[1,0,0,1,0,0],reflectY:[1,0,0,1,0,0]});if(typeof(g.cssMultipleValues)=="undefined"){g.cssMultipleValues={}}g.extend(g.cssMultipleValues,{matrix:6,origin:{length:2,duplicate:true},reflect:6,reflectX:6,reflectXY:6,reflectY:6,scale:{length:2,duplicate:true},skew:2,translate:2});g.extend(g.cssNumber,{matrix:true,reflect:true,reflectX:true,reflectXY:true,reflectY:true,scale:true,scaleX:true,scaleY:true});g.each(g.transform.funcs,function(j,k){g.cssHooks[k]={set:function(n,o){var l=n.transform||new g.transform(n),i={};i[k]=o;l.exec(i,{preserve:true})},get:function(n,l){var i=n.transform||new g.transform(n);return i.getAttr(k)}}});g.each(["reflect","reflectX","reflectXY","reflectY"],function(j,k){g.cssHooks[k].get=function(n,l){var i=n.transform||new g.transform(n);return i.getAttr("matrix")||g.cssDefault[k]}})})(jQuery,this,this.document);(function(e,g,h,c){var d=/^([+\-]=)?([\d+.\-]+)(.*)$/;var a=e.fn.animate;e.fn.animate=function(p,l,o,n){var k=e.speed(l,o,n),j=e.cssMultipleValues;k.complete=k.old;if(!e.isEmptyObject(p)){if(typeof k.original==="undefined"){k.original={}}e.each(p,function(s,u){if(j[s]||e.cssAngle[s]||(!e.cssNumber[s]&&e.inArray(s,e.transform.funcs)!==-1)){var t=null;if(jQuery.isArray(p[s])){var r=1,q=u.length;if(j[s]){r=(typeof j[s].length==="undefined"?j[s]:j[s].length)}if(q>r||(q<r&&q==2)||(q==2&&r==2&&isNaN(parseFloat(u[q-1])))){t=u[q-1];u.splice(q-1,1)}}k.original[s]=u.toString();p[s]=parseFloat(u)}})}return a.apply(this,[arguments[0],k])};var b="paddingBottom";function i(k,l){if(k[l]!=null&&(!k.style||k.style[l]==null)){}var j=parseFloat(e.css(k,l));return j&&j>-10000?j:0}var f=e.fx.prototype.custom;e.fx.prototype.custom=function(u,v,w){var y=e.cssMultipleValues[this.prop],p=e.cssAngle[this.prop];if(y||(!e.cssNumber[this.prop]&&e.inArray(this.prop,e.transform.funcs)!==-1)){this.values=[];if(!y){y=1}var x=this.options.original[this.prop],t=e(this.elem).css(this.prop),j=e.cssDefault[this.prop]||0;if(!e.isArray(t)){t=[t]}if(!e.isArray(x)){if(e.type(x)==="string"){x=x.split(",")}else{x=[x]}}var l=y.length||y,s=0;while(x.length<l){x.push(y.duplicate?x[0]:j[s]||0);s++}var k,r,q,o=this,n=o.elem.transform;orig=e.style(o.elem,b);e.each(x,function(z,A){if(t[z]){k=t[z]}else{if(j[z]&&!y.duplicate){k=j[z]}else{if(y.duplicate){k=t[0]}else{k=0}}}if(p){k=e.angle.toDegree(k)}else{if(!e.cssNumber[o.prop]){r=d.exec(e.trim(k));if(r[3]&&r[3]!=="px"){if(r[3]==="%"){k=parseFloat(r[2])/100*n["safeOuter"+(z?"Height":"Width")]()}else{e.style(o.elem,b,k);k=i(o.elem,b);e.style(o.elem,b,orig)}}}}k=parseFloat(k);r=d.exec(e.trim(A));if(r){q=parseFloat(r[2]);w=r[3]||"px";if(p){q=e.angle.toDegree(q+w);w="deg"}else{if(!e.cssNumber[o.prop]&&w==="%"){k=(k/n["safeOuter"+(z?"Height":"Width")]())*100}else{if(!e.cssNumber[o.prop]&&w!=="px"){e.style(o.elem,b,(q||1)+w);k=((q||1)/i(o.elem,b))*k;e.style(o.elem,b,orig)}}}if(r[1]){q=((r[1]==="-="?-1:1)*q)+k}}else{q=A;w=""}o.values.push({start:k,end:q,unit:w})})}return f.apply(this,arguments)};e.fx.multipleValueStep={_default:function(j){e.each(j.values,function(k,l){j.values[k].now=l.start+((l.end-l.start)*j.pos)})}};e.each(["matrix","reflect","reflectX","reflectXY","reflectY"],function(j,k){e.fx.multipleValueStep[k]=function(n){var p=n.decomposed,l=e.matrix;m=l.identity();p.now={};e.each(p.start,function(q){p.now[q]=parseFloat(p.start[q])+((parseFloat(p.end[q])-parseFloat(p.start[q]))*n.pos);if(((q==="scaleX"||q==="scaleY")&&p.now[q]===1)||(q!=="scaleX"&&q!=="scaleY"&&p.now[q]===0)){return true}m=m.x(l[q](p.now[q]))});var o;e.each(n.values,function(q){switch(q){case 0:o=parseFloat(m.e(1,1).toFixed(6));break;case 1:o=parseFloat(m.e(2,1).toFixed(6));break;case 2:o=parseFloat(m.e(1,2).toFixed(6));break;case 3:o=parseFloat(m.e(2,2).toFixed(6));break;case 4:o=parseFloat(m.e(1,3).toFixed(6));break;case 5:o=parseFloat(m.e(2,3).toFixed(6));break}n.values[q].now=o})}});e.each(e.transform.funcs,function(j,k){e.fx.step[k]=function(o){var n=o.elem.transform||new e.transform(o.elem),l={};if(e.cssMultipleValues[k]||(!e.cssNumber[k]&&e.inArray(k,e.transform.funcs)!==-1)){(e.fx.multipleValueStep[o.prop]||e.fx.multipleValueStep._default)(o);l[o.prop]=[];e.each(o.values,function(p,q){l[o.prop].push(q.now+(e.cssNumber[o.prop]?"":q.unit))})}else{l[o.prop]=o.now+(e.cssNumber[o.prop]?"":o.unit)}n.exec(l,{preserve:true})}});e.each(["matrix","reflect","reflectX","reflectXY","reflectY"],function(j,k){e.fx.step[k]=function(q){var p=q.elem.transform||new e.transform(q.elem),o={};if(!q.initialized){q.initialized=true;if(k!=="matrix"){var n=e.matrix[k]().elements;var r;e.each(q.values,function(s){switch(s){case 0:r=n[0];break;case 1:r=n[2];break;case 2:r=n[1];break;case 3:r=n[3];break;default:r=0}q.values[s].end=r})}q.decomposed={};var l=q.values;q.decomposed.start=e.matrix.matrix(l[0].start,l[1].start,l[2].start,l[3].start,l[4].start,l[5].start).decompose();q.decomposed.end=e.matrix.matrix(l[0].end,l[1].end,l[2].end,l[3].end,l[4].end,l[5].end).decompose()}(e.fx.multipleValueStep[q.prop]||e.fx.multipleValueStep._default)(q);o.matrix=[];e.each(q.values,function(s,t){o.matrix.push(t.now)});p.exec(o,{preserve:true})}})})(jQuery,this,this.document);(function(g,h,j,c){var d=180/Math.PI;var k=200/Math.PI;var f=Math.PI/180;var e=2/1.8;var i=0.9;var a=Math.PI/200;var b=/^([+\-]=)?([\d+.\-]+)(.*)$/;g.extend({angle:{runit:/(deg|g?rad)/,radianToDegree:function(l){return l*d},radianToGrad:function(l){return l*k},degreeToRadian:function(l){return l*f},degreeToGrad:function(l){return l*e},gradToDegree:function(l){return l*i},gradToRadian:function(l){return l*a},toDegree:function(n){var l=b.exec(n);if(l){n=parseFloat(l[2]);switch(l[3]||"deg"){case"grad":n=g.angle.gradToDegree(n);break;case"rad":n=g.angle.radianToDegree(n);break}return n}return 0}}})})(jQuery,this,this.document);(function(f,e,b,g){if(typeof(f.matrix)=="undefined"){f.extend({matrix:{}})}var d=f.matrix;f.extend(d,{V2:function(h,i){if(f.isArray(arguments[0])){this.elements=arguments[0].slice(0,2)}else{this.elements=[h,i]}this.length=2},V3:function(h,j,i){if(f.isArray(arguments[0])){this.elements=arguments[0].slice(0,3)}else{this.elements=[h,j,i]}this.length=3},M2x2:function(i,h,k,j){if(f.isArray(arguments[0])){this.elements=arguments[0].slice(0,4)}else{this.elements=Array.prototype.slice.call(arguments).slice(0,4)}this.rows=2;this.cols=2},M3x3:function(n,l,k,j,i,h,q,p,o){if(f.isArray(arguments[0])){this.elements=arguments[0].slice(0,9)}else{this.elements=Array.prototype.slice.call(arguments).slice(0,9)}this.rows=3;this.cols=3}});var c={e:function(k,h){var i=this.rows,j=this.cols;if(k>i||h>i||k<1||h<1){return 0}return this.elements[(k-1)*j+h-1]},decompose:function(){var v=this.e(1,1),t=this.e(2,1),q=this.e(1,2),p=this.e(2,2),o=this.e(1,3),n=this.e(2,3);if(Math.abs(v*p-t*q)<0.01){return{rotate:0+"deg",skewX:0+"deg",scaleX:1,scaleY:1,translateX:0+"px",translateY:0+"px"}}var l=o,j=n;var u=Math.sqrt(v*v+t*t);v=v/u;t=t/u;var i=v*q+t*p;q-=v*i;p-=t*i;var s=Math.sqrt(q*q+p*p);q=q/s;p=p/s;i=i/s;if((v*p-t*q)<0){v=-v;t=-t;u=-u}var w=f.angle.radianToDegree;var h=w(Math.atan2(t,v));i=w(Math.atan(i));return{rotate:h+"deg",skewX:i+"deg",scaleX:u,scaleY:s,translateX:l+"px",translateY:j+"px"}}};f.extend(d.M2x2.prototype,c,{toM3x3:function(){var h=this.elements;return new d.M3x3(h[0],h[1],0,h[2],h[3],0,0,0,1)},x:function(j){var k=typeof(j.rows)==="undefined";if(!k&&j.rows==3){return this.toM3x3().x(j)}var i=this.elements,h=j.elements;if(k&&h.length==2){return new d.V2(i[0]*h[0]+i[1]*h[1],i[2]*h[0]+i[3]*h[1])}else{if(h.length==i.length){return new d.M2x2(i[0]*h[0]+i[1]*h[2],i[0]*h[1]+i[1]*h[3],i[2]*h[0]+i[3]*h[2],i[2]*h[1]+i[3]*h[3])}}return false},inverse:function(){var i=1/this.determinant(),h=this.elements;return new d.M2x2(i*h[3],i*-h[1],i*-h[2],i*h[0])},determinant:function(){var h=this.elements;return h[0]*h[3]-h[1]*h[2]}});f.extend(d.M3x3.prototype,c,{x:function(j){var k=typeof(j.rows)==="undefined";if(!k&&j.rows<3){j=j.toM3x3()}var i=this.elements,h=j.elements;if(k&&h.length==3){return new d.V3(i[0]*h[0]+i[1]*h[1]+i[2]*h[2],i[3]*h[0]+i[4]*h[1]+i[5]*h[2],i[6]*h[0]+i[7]*h[1]+i[8]*h[2])}else{if(h.length==i.length){return new d.M3x3(i[0]*h[0]+i[1]*h[3]+i[2]*h[6],i[0]*h[1]+i[1]*h[4]+i[2]*h[7],i[0]*h[2]+i[1]*h[5]+i[2]*h[8],i[3]*h[0]+i[4]*h[3]+i[5]*h[6],i[3]*h[1]+i[4]*h[4]+i[5]*h[7],i[3]*h[2]+i[4]*h[5]+i[5]*h[8],i[6]*h[0]+i[7]*h[3]+i[8]*h[6],i[6]*h[1]+i[7]*h[4]+i[8]*h[7],i[6]*h[2]+i[7]*h[5]+i[8]*h[8])}}return false},inverse:function(){var i=1/this.determinant(),h=this.elements;return new d.M3x3(i*(h[8]*h[4]-h[7]*h[5]),i*(-(h[8]*h[1]-h[7]*h[2])),i*(h[5]*h[1]-h[4]*h[2]),i*(-(h[8]*h[3]-h[6]*h[5])),i*(h[8]*h[0]-h[6]*h[2]),i*(-(h[5]*h[0]-h[3]*h[2])),i*(h[7]*h[3]-h[6]*h[4]),i*(-(h[7]*h[0]-h[6]*h[1])),i*(h[4]*h[0]-h[3]*h[1]))},determinant:function(){var h=this.elements;return h[0]*(h[8]*h[4]-h[7]*h[5])-h[3]*(h[8]*h[1]-h[7]*h[2])+h[6]*(h[5]*h[1]-h[4]*h[2])}});var a={e:function(h){return this.elements[h-1]}};f.extend(d.V2.prototype,a);f.extend(d.V3.prototype,a)})(jQuery,this,this.document);(function(c,b,a,d){if(typeof(c.matrix)=="undefined"){c.extend({matrix:{}})}c.extend(c.matrix,{calc:function(e,f,g){this.matrix=e;this.outerHeight=f;this.outerWidth=g}});c.matrix.calc.prototype={coord:function(e,i,h){h=typeof(h)!=="undefined"?h:0;var g=this.matrix,f;switch(g.rows){case 2:f=g.x(new c.matrix.V2(e,i));break;case 3:f=g.x(new c.matrix.V3(e,i,h));break}return f},corners:function(e,h){var f=!(typeof(e)!=="undefined"||typeof(h)!=="undefined"),g;if(!this.c||!f){h=h||this.outerHeight;e=e||this.outerWidth;g={tl:this.coord(0,0),bl:this.coord(0,h),tr:this.coord(e,0),br:this.coord(e,h)}}else{g=this.c}if(f){this.c=g}return g},sides:function(e){var f=e||this.corners();return{top:Math.min(f.tl.e(2),f.tr.e(2),f.br.e(2),f.bl.e(2)),bottom:Math.max(f.tl.e(2),f.tr.e(2),f.br.e(2),f.bl.e(2)),left:Math.min(f.tl.e(1),f.tr.e(1),f.br.e(1),f.bl.e(1)),right:Math.max(f.tl.e(1),f.tr.e(1),f.br.e(1),f.bl.e(1))}},offset:function(e){var f=this.sides(e);return{height:Math.abs(f.bottom-f.top),width:Math.abs(f.right-f.left)}},area:function(e){var h=e||this.corners();var g={x:h.tr.e(1)-h.tl.e(1)+h.br.e(1)-h.bl.e(1),y:h.tr.e(2)-h.tl.e(2)+h.br.e(2)-h.bl.e(2)},f={x:h.bl.e(1)-h.tl.e(1)+h.br.e(1)-h.tr.e(1),y:h.bl.e(2)-h.tl.e(2)+h.br.e(2)-h.tr.e(2)};return 0.25*Math.abs(g.e(1)*f.e(2)-g.e(2)*f.e(1))},nonAffinity:function(){var f=this.sides(),g=f.top-f.bottom,e=f.left-f.right;return parseFloat(parseFloat(Math.abs((Math.pow(g,2)+Math.pow(e,2))/(f.top*f.bottom+f.left*f.right))).toFixed(8))},originOffset:function(h,g){h=h?h:new c.matrix.V2(this.outerWidth*0.5,this.outerHeight*0.5);g=g?g:new c.matrix.V2(0,0);var e=this.coord(h.e(1),h.e(2));var f=this.coord(g.e(1),g.e(2));return{top:(f.e(2)-g.e(2))-(e.e(2)-h.e(2)),left:(f.e(1)-g.e(1))-(e.e(1)-h.e(1))}}}})(jQuery,this,this.document);(function(e,d,a,f){if(typeof(e.matrix)=="undefined"){e.extend({matrix:{}})}var c=e.matrix,g=c.M2x2,b=c.M3x3;e.extend(c,{identity:function(k){k=k||2;var l=k*k,n=new Array(l),j=k+1;for(var h=0;h<l;h++){n[h]=(h%j)===0?1:0}return new c["M"+k+"x"+k](n)},matrix:function(){var h=Array.prototype.slice.call(arguments);switch(arguments.length){case 4:return new g(h[0],h[2],h[1],h[3]);case 6:return new b(h[0],h[2],h[4],h[1],h[3],h[5],0,0,1)}},reflect:function(){return new g(-1,0,0,-1)},reflectX:function(){return new g(1,0,0,-1)},reflectXY:function(){return new g(0,1,1,0)},reflectY:function(){return new g(-1,0,0,1)},rotate:function(l){var i=e.angle.degreeToRadian(l),k=Math.cos(i),n=Math.sin(i);var j=k,h=n,p=-n,o=k;return new g(j,p,h,o)},scale:function(i,h){i=i||i===0?i:1;h=h||h===0?h:i;return new g(i,0,0,h)},scaleX:function(h){return c.scale(h,1)},scaleY:function(h){return c.scale(1,h)},skew:function(k,i){k=k||0;i=i||0;var l=e.angle.degreeToRadian(k),j=e.angle.degreeToRadian(i),h=Math.tan(l),n=Math.tan(j);return new g(1,h,n,1)},skewX:function(h){return c.skew(h)},skewY:function(h){return c.skew(0,h)},translate:function(i,h){i=i||0;h=h||0;return new b(1,0,i,0,1,h,0,0,1)},translateX:function(h){return c.translate(h)},translateY:function(h){return c.translate(0,h)}})})(jQuery,this,this.document);

/***********

jQuery enumerable plugin - https://github.com/xaviershay/jquery-enumerable

************/
(function ( $ ) {
  var methods = {
    // $([1,2,3]).collect(function() { return this * this }) // => [1, 4, 9]
    collect: function(enumerable, callback) {
      var result = [];
      $.each(enumerable, function(index) {
        result.push(callback.call(this, index));
      });
      return result;
    },

    // $([1,2,3]).inject(0, function(a) { return a + this }) // => 6
    inject: function(enumerable, initialValue, callback) {
      var accumulator = initialValue;

      $.each(enumerable, function (index) {
        accumulator = callback.call(this, accumulator, index);
      });
      return accumulator;
    },

    // $([1,2,3]).select(function() { return this % 2 == 1 }) // => [1, 3]
    select: function(enumerable, callback) {
      var result = [];
      $.each(enumerable, function(index) {
        if (callback.call(this, index))
          result.push(this);
      });
      return result;
    },

    // $([1,2,3]).reject(function() { return this % 2 == 1 }) // => [2]
    reject: function(enumerable, callback) {
      return $.select(enumerable, negate(callback));
    },

    // $([1,2]).any(function() { return this == 1 }) // => true
    any: function(enumerable, callback) {
      return $.inject(enumerable, false, function(accumulator, index) {
        return accumulator || callback.call(this, index);
      });
    },

    // $([1,1]).all(function() { return this == 1 }) // => true
    all: function(enumerable, callback) {
      return $.inject(enumerable, true, function(accumulator, index) {
        return accumulator && callback.call(this, index);
      });
    },

    // $([1,2,3]).sum() // => 6
    sum: function(enumerable) {
      return $.inject(enumerable, 0, function(accumulator) {
        return accumulator + this;
      });
    }
  };

  var staticFunctions = {};
  var iteratorFunctions = {};
  $.each( methods, function(name, f){ 
    staticFunctions[name]   = makeStaticFunction(f);
    iteratorFunctions[name] = makeIteratorFunction(staticFunctions[name]);
  });
  $.extend(staticFunctions);
  $.fn.extend(iteratorFunctions);

  // Private methods
  function makeStaticFunction(f) {
    return function() {
      if (arguments.length > 1) // The first argument is the enumerable
        validateCallback(arguments[arguments.length - 1]);

      return f.apply(this, arguments);
    }
  }

  function makeIteratorFunction(staticFunction) {
    return function() {
      // arguments isn't a real array, concat doesn't work
      // unless you explicitly convert it
      function toArray() {
        var result = []
        for (var i = 0; i < this.length; i++)
          result.push(this[i])
        return(result)
      }
      return staticFunction.apply(this, [this].concat(toArray.apply(arguments)))
    }
  }

  function validateCallback(callback) {
    if (!jQuery.isFunction(callback))
      throw("callback needs to be a function, it was: " + callback);
  }

  function negate(f) {
    return function() { 
      return !f.apply(this, arguments)
    }
  }
})( jQuery );

/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 *
 */
(function($) {
    
    $.belowthefold = function(element, settings) {
        var fold = $(window).height() + $(window).scrollTop();
        return fold <= $(element).offset().top - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var top = $(window).scrollTop();
        return top >= $(element).offset().top + $(element).height() - settings.threshold;
    };
    
    $.rightofscreen = function(element, settings) {
        var fold = $(window).width() + $(window).scrollLeft();
        return fold <= $(element).offset().left - settings.threshold;
    };
    
    $.leftofscreen = function(element, settings) {
        var left = $(window).scrollLeft();
        return left >= $(element).offset().left + $(element).width() - settings.threshold;
    };
    
    $.inviewport = function(element, settings) {
        return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };
    
    $.extend($.expr[':'], {
        "below-the-fold": function(a, i, m) {
            return $.belowthefold(a, {threshold : 0});
        },
        "above-the-top": function(a, i, m) {
            return $.abovethetop(a, {threshold : 0});
        },
        "left-of-screen": function(a, i, m) {
            return $.leftofscreen(a, {threshold : 0});
        },
        "right-of-screen": function(a, i, m) {
            return $.rightofscreen(a, {threshold : 0});
        },
        "in-viewport": function(a, i, m) {
            return $.inviewport(a, {threshold : 0});
        }
    });

    
})(jQuery);

/*!
 * HTML5 Placeholder jQuery Plugin v1.8.3
 * @link http://mths.be/placeholder
 * @author Mathias Bynens <http://mathiasbynens.be/>
 */
(function(f){var e='placeholder' in document.createElement('input'),a='placeholder' in document.createElement('textarea');if(e&&a){f.fn.placeholder=function(){return this};f.fn.placeholder.input=f.fn.placeholder.textarea=true}else{f.fn.placeholder=function(){return this.filter((e?'textarea':':input')+'[placeholder]').bind('focus.placeholder',b).bind('blur.placeholder',d).trigger('blur.placeholder').end()};f.fn.placeholder.input=e;f.fn.placeholder.textarea=a;f(function(){f('form').bind('submit.placeholder',function(){var g=f('.placeholder',this).each(b);setTimeout(function(){g.each(d)},10)})});f(window).bind('unload.placeholder',function(){f('.placeholder').val('')})}function c(h){var g={},i=/^jQuery\d+$/;f.each(h.attributes,function(k,j){if(j.specified&&!i.test(j.name)){g[j.name]=j.value}});return g}function b(){var g=f(this);if(g.val()===g.attr('placeholder')&&g.hasClass('placeholder')){if(g.data('placeholder-password')){g.hide().next().attr('id',g.removeAttr('id').data('placeholder-id')).show().focus()}else{g.val('').removeClass('placeholder')}}}function d(h){var l,k=f(this),g=k,j=this.id;if(k.val()===''){if(k.is(':password')){if(!k.data('placeholder-textinput')){try{l=k.clone().attr({type:'text'})}catch(i){l=f('<input>').attr(f.extend(c(this),{type:'text'}))}l.removeAttr('name').data('placeholder-password',true).data('placeholder-id',j).bind('focus.placeholder',b);k.data('placeholder-textinput',l).data('placeholder-id',j).before(l)}k=k.removeAttr('id').hide().prev().attr('id',j).show()}k.addClass('placeholder').val(k.attr('placeholder'))}else{k.removeClass('placeholder')}}}(jQuery));

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){jQuery.browser.mobile=/android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
