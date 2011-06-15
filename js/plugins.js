
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
 * simple and fancy lightbox alternative
 *
 * Copyright (c) 2009 Janis Skarnelis
 * Examples and documentation at: http://fancybox.net
 * 
 * Version: 1.2.6 (16/11/2009)
 * Requires: jQuery v1.3+
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
 
;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(p($){$.q.1Q=p(){J O.2n(p(){n b=$(O).u(\'2o\');8(b.1d(/^3i\\(["\']?(.*\\.2p)["\']?\\)$/i)){b=3j.$1;$(O).u({\'2o\':\'3k\',\'1e\':"3l:3m.3n.3o(3p=D, 3q="+($(O).u(\'3r\')==\'2q-3s\'?\'3t\':\'3u\')+", 13=\'"+b+"\')"}).2n(p(){n a=$(O).u(\'1u\');8(a!=\'2r\'&&a!=\'2s\')$(O).u(\'1u\',\'2s\')})}})};n l,4,1f=F,X=1v 1w,1x,1y=1,1z=/\\.(3v|3w|2p|3x|3y)(.*)?$/i;n m=1A,18=$.14.1g&&$.14.2t.1R(0,1)==6&&!19.3z,1S=18||($.14.1g&&$.14.2t.1R(0,1)==7);$.q.r=p(o){n j=$.2u({},$.q.r.2v,o);n k=O;p 2w(){l=O;4=$.2u({},j);2x();J F};p 2x(){8(1f)J;8($.1T(4.1U)){4.1U()}4.v=[];4.t=0;8(j.v.Y>0){4.v=j.v}C{n a={};8(!l.1B||l.1B==\'\'){n a={K:l.K,G:l.G};8($(l).1C("1l:1D").Y){a.S=$(l).1C("1l:1D")}C{a.S=$(l)}8(a.G==\'\'||1V a.G==\'1m\'){a.G=a.S.2y(\'1W\')}4.v.2z(a)}C{n b=$(k).1e("a[1B="+l.1B+"]");n a={};3A(n i=0;i<b.Y;i++){a={K:b[i].K,G:b[i].G};8($(b[i]).1C("1l:1D").Y){a.S=$(b[i]).1C("1l:1D")}C{a.S=$(b[i])}8(a.G==\'\'||1V a.G==\'1m\'){a.G=a.S.2y(\'1W\')}4.v.2z(a)}}}3B(4.v[4.t].K!=l.K){4.t++}8(4.1E){8(18){$(\'1X, 1Y, 1Z\').u(\'21\',\'3C\');$("#T").u(\'A\',$(U).A())}$("#T").u({\'3D-3E\':4.2A,\'22\':4.2B}).Z()}$(19).11("23.L 24.L",$.q.r.2C);1h()};p 1h(){$("#1n, #1o, #1i, #H").1a();n b=4.v[4.t].K;8(b.1d("1j")||l.3F.2D("1j")>=0){$.q.r.1F();1p(\'<1j s="2E" 3G="2F.q.r.2G()" 3H="3I\'+P.1b(P.3J()*3K)+\'" 2H="0" 3L="0" 13="\'+b+\'"></1j>\',4.1G,4.1H)}C 8(b.1d(/#/)){n c=19.3M.K.3N(\'#\')[0];c=b.3O(c,\'\');c=c.1R(c.2D(\'#\'));1p(\'<9 s="3P">\'+$(c).2I()+\'</9>\',4.1G,4.1H)}C 8(b.1d(1z)){X=1v 1w;X.13=b;8(X.3Q){25()}C{$.q.r.1F();$(X).Q().11(\'3R\',p(){$("#M").1a();25()})}}C{$.q.r.1F();$.3S(b,p(a){$("#M").1a();1p(\'<9 s="3T">\'+a+\'</9>\',4.1G,4.1H)})}};p 25(){n a=X.E;n b=X.A;n c=(4.N*2)+40;n d=(4.N*2)+26;n w=$.q.r.1q();8(4.2J&&(a>(w[0]-c)||b>(w[1]-d))){n e=P.28(P.28(w[0]-c,a)/a,P.28(w[1]-d,b)/b);a=P.1b(e*a);b=P.1b(e*b)}1p(\'<1l 1W="" s="3U" 13="\'+X.13+\'" />\',a,b)};p 2K(){8((4.v.Y-1)>4.t){n a=4.v[4.t+1].K||F;8(a&&a.1d(1z)){1I=1v 1w();1I.13=a}}8(4.t>0){n a=4.v[4.t-1].K||F;8(a&&a.1d(1z)){1I=1v 1w();1I.13=a}}};p 1p(a,b,c){1f=D;n d=4.N;8(1S||m){$("#y")[0].15.2L("A");$("#y")[0].15.2L("E")}8(d>0){b+=d*2;c+=d*2;$("#y").u({\'z\':d+\'R\',\'2M\':d+\'R\',\'2N\':d+\'R\',\'B\':d+\'R\',\'E\':\'2O\',\'A\':\'2O\'});8(1S||m){$("#y")[0].15.2P(\'A\',\'(O.2Q.3V - \'+d*2+\')\');$("#y")[0].15.2P(\'E\',\'(O.2Q.3W - \'+d*2+\')\')}}C{$("#y").u({\'z\':0,\'2M\':0,\'2N\':0,\'B\':0,\'E\':\'2R%\',\'A\':\'2R%\'})}8($("#x").16(":V")&&b==$("#x").E()&&c==$("#x").A()){$("#y").1J(\'29\',p(){$("#y").1r().1K($(a)).2a("1L",p(){1s()})});J}n w=$.q.r.1q();n e=(c+26)>w[1]?w[3]:(w[3]+P.1b((w[1]-c-26)*0.5));n f=(b+40)>w[0]?w[2]:(w[2]+P.1b((w[0]-b-40)*0.5));n g={\'B\':f,\'z\':e,\'E\':b+\'R\',\'A\':c+\'R\'};8($("#x").16(":V")){$("#y").1J("1L",p(){$("#y").1r();$("#x").2b(g,4.2S,4.2T,p(){$("#y").1K($(a)).2a("1L",p(){1s()})})})}C{8(4.2c>0&&4.v[4.t].S!==1m){$("#y").1r().1K($(a));n h=4.v[4.t].S;n i=$.q.r.2d(h);$("#x").u({\'B\':(i.B-20-4.N)+\'R\',\'z\':(i.z-20-4.N)+\'R\',\'E\':$(h).E()+(4.N*2),\'A\':$(h).A()+(4.N*2)});8(4.2e){g.22=\'Z\'}$("#x").2b(g,4.2c,4.2U,p(){1s()})}C{$("#y").1a().1r().1K($(a)).Z();$("#x").u(g).2a("1L",p(){1s()})}}};p 2V(){8(4.t!==0){$("#1o, #2W").Q().11("17",p(e){e.2X();4.t--;1h();J F});$("#1o").Z()}8(4.t!=(4.v.Y-1)){$("#1n, #2Y").Q().11("17",p(e){e.2X();4.t++;1h();J F});$("#1n").Z()}};p 1s(){8($.14.1g){$("#y")[0].15.1M(\'1e\');$("#x")[0].15.1M(\'1e\')}2V();2K();$(U).11("1N.L",p(e){8(e.2f==27&&4.2Z){$.q.r.1c()}C 8(e.2f==37&&4.t!==0){$(U).Q("1N.L");4.t--;1h()}C 8(e.2f==39&&4.t!=(4.v.Y-1)){$(U).Q("1N.L");4.t++;1h()}});8(4.30){$("#y").17($.q.r.1c)}8(4.1E&&4.31){$("#T").11("17",$.q.r.1c)}8(4.33){$("#1i").11("17",$.q.r.1c).Z()}8(1V 4.v[4.t].G!==\'1m\'&&4.v[4.t].G.Y>0){n a=$("#x").1u();$(\'#H 9\').3X(4.v[4.t].G).2I();$(\'#H\').u({\'z\':a.z+$("#x").34()-32,\'B\':a.B+(($("#x").35()*0.5)-($(\'#H\').E()*0.5))}).Z()}8(4.1E&&18){$(\'1X, 1Y, 1Z\',$(\'#y\')).u(\'21\',\'V\')}8($.1T(4.2g)){4.2g(4.v[4.t])}8($.14.1g){$("#x")[0].15.1M(\'1e\');$("#y")[0].15.1M(\'1e\')}1f=F};J O.Q(\'17.L\').11(\'17.L\',2w)};$.q.r.2C=p(){n w=$.q.r.1q();8(4.2h&&$("#x").16(\':V\')){n a=$("#x").35();n b=$("#x").34();n c={\'z\':(b>w[1]?w[3]:w[3]+P.1b((w[1]-b)*0.5)),\'B\':(a>w[0]?w[2]:w[2]+P.1b((w[0]-a)*0.5))};$("#x").u(c);$(\'#H\').u({\'z\':c.z+b-32,\'B\':c.B+((a*0.5)-($(\'#H\').E()*0.5))})}8(18&&$("#T").16(\':V\')){$("#T").u({\'A\':$(U).A()})}8($("#M").16(\':V\')){$("#M").u({\'B\':((w[0]-40)*0.5+w[2]),\'z\':((w[1]-40)*0.5+w[3])})}};$.q.r.1t=p(a,b){J 3Y($.3Z(a.41?a[0]:a,b,D))||0};$.q.r.2d=p(a){n b=a.42();b.z+=$.q.r.1t(a,\'43\');b.z+=$.q.r.1t(a,\'44\');b.B+=$.q.r.1t(a,\'45\');b.B+=$.q.r.1t(a,\'46\');J b};$.q.r.2G=p(){$("#M").1a();$("#2E").Z()};$.q.r.1q=p(){J[$(19).E(),$(19).A(),$(U).47(),$(U).48()]};$.q.r.36=p(){8(!$("#M").16(\':V\')){38(1x);J}$("#M > 9").u(\'z\',(1y*-40)+\'R\');1y=(1y+1)%12};$.q.r.1F=p(){38(1x);n w=$.q.r.1q();$("#M").u({\'B\':((w[0]-40)*0.5+w[2]),\'z\':((w[1]-40)*0.5+w[3])}).Z();$("#M").11(\'17\',$.q.r.1c);1x=49($.q.r.36,4a)};$.q.r.1c=p(){1f=D;$(X).Q();$(U).Q("1N.L");$(19).Q("23.L 24.L");$("#T, #y, #1i").Q();$("#1i, #M, #1o, #1n, #H").1a();1O=p(){8($("#T").16(\':V\')){$("#T").1J("29")}$("#y").1r();8(4.2h){$(19).Q("23.L 24.L")}8(18){$(\'1X, 1Y, 1Z\').u(\'21\',\'V\')}8($.1T(4.2i)){4.2i()}1f=F};8($("#x").16(":V")!==F){8(4.2j>0&&4.v[4.t].S!==1m){n a=4.v[4.t].S;n b=$.q.r.2d(a);n c={\'B\':(b.B-20-4.N)+\'R\',\'z\':(b.z-20-4.N)+\'R\',\'E\':$(a).E()+(4.N*2),\'A\':$(a).A()+(4.N*2)};8(4.2e){c.22=\'1a\'}$("#x").3a(F,D).2b(c,4.2j,4.3b,1O)}C{$("#x").3a(F,D).1J(\'29\',1O)}}C{1O()}J F};$.q.r.3c=p(){n a=\'\';a+=\'<9 s="T"></9>\';a+=\'<9 s="M"><9></9></9>\';a+=\'<9 s="x">\';a+=\'<9 s="3d">\';a+=\'<9 s="1i"></9>\';a+=\'<9 s="W"><9 I="W" s="4b"></9><9 I="W" s="4c"></9><9 I="W" s="4d"></9><9 I="W" s="4e"></9><9 I="W" s="4f"></9><9 I="W" s="4g"></9><9 I="W" s="4h"></9><9 I="W" s="4i"></9></9>\';a+=\'<a K="2k:;" s="1o"><1P I="2l" s="2W"></1P></a><a K="2k:;" s="1n"><1P I="2l" s="2Y"></1P></a>\';a+=\'<9 s="y"></9>\';a+=\'</9>\';a+=\'</9>\';a+=\'<9 s="H"></9>\';$(a).3e("4j");$(\'<3f 4k="0" 4l="0" 4m="0"><3g><1k I="H" s="4n"></1k><1k I="H" s="4o"><9></9></1k><1k I="H" s="4p"></1k></3g></3f>\').3e(\'#H\');8($.14.1g){$(".W").1Q()}8(18){$("9#T").u("1u","2r");$("#M 9, #1i, .H, .2l").1Q();$("#3d").4q(\'<1j s="3h" 13="2k:F;" 4r="2q" 2H="0"></1j>\');n b=$(\'#3h\')[0].4s.U;b.4t();b.1c()}};$.q.r.2v={N:10,2J:D,2e:D,2c:0,2j:0,2S:4u,2U:\'2m\',3b:\'2m\',2T:\'2m\',1G:4v,1H:4w,1E:D,2B:0.3,2A:\'#4x\',2Z:D,33:D,31:D,30:D,2h:D,v:[],1U:1A,2g:1A,2i:1A};$(U).4y(p(){m=$.14.1g&&!$.4z;8($("#x").Y<1){$.q.r.3c()}})})(2F);',62,284,'||||opts||||if|div||||||||||||||var||function|fn|fancybox|id|itemCurrent|css|itemArray||fancy_outer|fancy_content|top|height|left|else|true|width|false|title|fancy_title|class|return|href|fb|fancy_loading|padding|this|Math|unbind|px|orig|fancy_overlay|document|visible|fancy_bg|imagePreloader|length|show||bind||src|browser|style|is|click|IE6|window|hide|round|close|match|filter|busy|msie|_change_item|fancy_close|iframe|td|img|undefined|fancy_right|fancy_left|_set_content|getViewport|empty|_finish|getNumeric|position|new|Image|loadingTimer|loadingFrame|imageRegExp|null|rel|children|first|overlayShow|showLoading|frameWidth|frameHeight|objNext|fadeOut|append|normal|removeAttribute|keydown|__cleanup|span|fixPNG|substr|oldIE|isFunction|callbackOnStart|typeof|alt|embed|object|select||visibility|opacity|resize|scroll|_proceed_image|60||min|fast|fadeIn|animate|zoomSpeedIn|getPosition|zoomOpacity|keyCode|callbackOnShow|centerOnScroll|callbackOnClose|zoomSpeedOut|javascript|fancy_ico|swing|each|backgroundImage|png|no|absolute|relative|version|extend|defaults|_initialize|_start|attr|push|overlayColor|overlayOpacity|scrollBox|indexOf|fancy_frame|jQuery|showIframe|frameborder|html|imageScale|_preload_neighbor_images|removeExpression|right|bottom|auto|setExpression|parentNode|100|zoomSpeedChange|easingChange|easingIn|_set_navigation|fancy_left_ico|stopPropagation|fancy_right_ico|enableEscapeButton|hideOnContentClick|hideOnOverlayClick||showCloseButton|outerHeight|outerWidth|animateLoading||clearInterval||stop|easingOut|build|fancy_inner|appendTo|table|tr|fancy_bigIframe|url|RegExp|none|progid|DXImageTransform|Microsoft|AlphaImageLoader|enabled|sizingMethod|backgroundRepeat|repeat|crop|scale|jpg|gif|bmp|jpeg|XMLHttpRequest|for|while|hidden|background|color|className|onload|name|fancy_iframe|random|1000|hspace|location|split|replace|fancy_div|complete|load|get|fancy_ajax|fancy_img|clientHeight|clientWidth|text|parseInt|curCSS||jquery|offset|paddingTop|borderTopWidth|paddingLeft|borderLeftWidth|scrollLeft|scrollTop|setInterval|66|fancy_bg_n|fancy_bg_ne|fancy_bg_e|fancy_bg_se|fancy_bg_s|fancy_bg_sw|fancy_bg_w|fancy_bg_nw|body|cellspacing|cellpadding|border|fancy_title_left|fancy_title_main|fancy_title_right|prepend|scrolling|contentWindow|open|300|560|340|666|ready|boxModel'.split('|'),0,{}));



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
