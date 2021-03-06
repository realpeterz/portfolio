/* browser detection --- http://www.quirksmode.org/js/detect.html*/

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
		return this;
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};






/* Author: Peter Zhang */

window.App = {
    
    
    init: function(){
        this.userBrowser = BrowserDetect.init();
        this.bindNavOnClick();
        
        if (!jQuery.browser.mobile) {
            this.bindPerScroll();
            this.bindViewSwitchOnClick();
            this.dragNdrop();
            this.bringPicToFrontOnClick();
            this.enableFancybox();
            this.bindSlidingEffect();
        } 
             
        this.socialIconFisheye();
        this.checkBrowser();
        this.setErrorMessages();    
        this.ajaxSendMail();
        this.bindValidate();
        
        if (!jQuery.browser.mobile) {
            if (!location.hash) { $('nav li:first').trigger('click'); }        
            $("#logo").click(function(){ window.location.hash = "home"; });
        }
        
        $('input, textarea').placeholder();
    },
    
    mydata: {
    
            dialog: ["Howdy!", "Take a look!", "Interested?", "Let's talk!"],
            scrollTo: ["#home", "#portfolio", "#resume", "#contact"]
    },
    
    checkBrowser: function(){
    
        switch(this.userBrowser.browser){
            case "Chrome":
                $('.browser').css("background-position", "-6px center");
                break;
            case "Firefox":
                $('.browser').css("background-position", "-78px center");
                break;
            case "Opera":
                $('.browser').css("background-position", "-146px center");
                break;
            case "Safari":
                $('.browser').css("background-position", "-208px center");
                break;
            case "Explorer":
                $('.browser').css("background-position", "-284px -2px");
                break;
            default:
                $('#browser-detect').removeClass('browser').addClass('browser-generic');
                break;
        }
          
    },
    
    speak: function(){
    
        if (window.innerWidth <= 1140) 
           { return; } 
        else {
            var i = $(this).index("#nav li");
            $('#dialog').text('').fadeOut('fast').fadeIn('fast', function(){
               $(this).text(App.mydata.dialog[i]);
            });
        }
    },
    
    scroll: function(){
          var $navItem = $(this),
              i = $navItem.index(),
              $targetElem = $(App.mydata.scrollTo[i]);
              $(window).data('scrollingTo', 1);
          
          
              
          $(window).scrollTo($targetElem, 500, { 
            onAfter:function(){
                    location.hash = App.mydata.scrollTo[i]; 
                    $(window).removeData('scrollingTo');
                    return "Animated scrolling done";       
                } 
          });
    },

    addActive: function(callback){

        if ($(this).data('active') !== 1)
        {
             var activeItem = $(this).text().toLowerCase(),
                 navIcon = $(this).find('div').get(0);
             navIcon.className += "-hover";
             $(this).addClass('sprite-glow').data('active', 1);
             
             $('#nav').data('current', activeItem);
             if ( callback && typeof(callback) === "function") { callback.call(this); } 
        }    
    },
    
    removeActive: function(){
        if ($(this).data('active') === 1)
        { 
            $(this).data('active', 0);  
            var navIcon = $(this).find('div').get(0);
            navIcon.className = navIcon.className.match(/.*(?=-hover)/); 
            $(this).removeClass('sprite-glow');
            return "hover effect removed";
        } 
    },
    
    bindNavOnClick: function(){
        $('header').delegate("#nav li", "click", function(e){
            e.preventDefault();
            $('#nav li').each(function() { App.removeActive.call(this); });
            App.addActive.call(this);
            App.speak.call(this);
            App.scroll.call(this);
        });     
    },
    
    bindPerScroll: function(){
           $(window).bind("perScrollNavSynch", function(){
               var inview = $('section:in-viewport').attr ( 'id' ),
                   currentNav = $('#nav').data('current');     
             if ( inview && inview !== currentNav && $(window).data('scrollingTo')!==1  )
               {
                   $('#nav li').each(function() {
                        var $navItem = $(this),
                        navItemName = $navItem.text().toLowerCase(); 
                        App.removeActive.call(this);               
                        if ( inview == navItemName ) {
                             App.addActive.call(this, function(){
                                App.speak.call(this);
                             });
                        }               
                        $navItem = navItemName = undefined;      
                   }); // end of each loop check
               } // end of if statement      
           }); // end of custom binding for scroll-navigation synch
           
             
          $(window).scroll(  $.throttle(300, function(){
                     
                    $(this).triggerHandler( 'perScrollNavSynch' );   
                })  
          );
    },
    
    bindViewSwitchOnClick: function(){
    
        $('#view-switch').delegate("a", "click", function(){
           var $iconClicked = $(this), 
               $viewSwitch = $('#view-switch'),
               viewIndex = $iconClicked.parent().index();  
                   
            $('a', $viewSwitch).removeClass('view-active');
            $iconClicked.addClass('view-active');    
                          
                  $('#showcases').hide('fast', function(){
                    $( '#grid-view, #gallery, #list-view' ).hide();
                    $( '#showcases' ).show();
                    
                    switch(viewIndex){
                        case 0: // Poloriod view
                            $( '#gallery' ).show(200); 
                            $( '#dropin-bt' ).fadeIn();
                            
                            break;
                        case 1:
                             $( '#dropin-bt' ).hide('fast', function(){
                                 
                                 $( '#grid-view' ).show(500, 'easeInOutElastic');
                             });
                             // end of show #list-view
                              break;
                            break;
                        case 2:
                            $( '#dropin-bt' ).hide('fast', function(){
                                 
                                 $( '#list-view' ).show(500, 'easeInOutElastic');
                             });
                       } // end of switch
                       
                     }); // end of fadeOut's big call back
                
            return false;
        });   // end of click delegation;
    }, // end of bindViewSwitchOnClick
    
    bringPicToFrontOnClick: function(){
        $('.pic').mousedown(function(e){							 
		    /* Executed on image click */
		
		    var maxZ = 0;
		
		    /* Find the max z-index property: */
		
		    $('.pic').each(function(){
			    var thisZ = parseInt($(this).css('zIndex'))
			    if(thisZ>maxZ) maxZ=thisZ;
		    });
		
		    /* Clicks can occur in the picture container (with class pic) and in the link inside it */
		    if($(e.target).hasClass("pic"))
		    {
			    /* Show the clicked image on top of all the others: */
			    $(e.target).css({zIndex:maxZ+1});
		    }
		    else $(e.target).closest('.pic').css({zIndex:maxZ+1});
	    });
    },
    
    
    bindSlidingEffect: function(){
          $('.thumb-wrap').hover(function(e) {
              // Stuff to do when the mouse enters the element;
          //    e.stopImmediatePropagation();
              $('.external-link', this).show('300');
              $('.magnifier', this).show('300');
          }, function(e) {
              // Stuff to do when the mouse leaves the element;
            //  e.stopImmediatePropagation();
              $('.external-link', this).hide();
              $('.magnifier', this).hide();
          });
    },
    
    
    dragNdrop: function(){
           $( ".pic" ).draggable({ opacity: 0.8, scroll: true }); 
           $('#dropin-bt').droppable({
                hoverClass: "hoverdrop",
                drop: function(event, ui){
                    if ( confirm("The live site will open in a new tab. Is that ok?") ) {
                        window.open(ui.draggable.data('livesite'));
                    }
                }   
           });  
    }, 
    
    enableFancybox: function(){
        $("a.fancybox, a.magnifier").fancybox({
		    'speedIn'		:	400, 
		    'speedOut'		:	100, 
		    'overlayShow'	:	false,
		    'titlePosition': 'over',
		    'hideOnOverlayClick': false,
		    'onStart': function(){
		        
		    },
		    'onComplete': function(){
		        
		        var anchor = this,
		        titleWrapper = $('div#fancybox-title-over');
		        
		        titleWrapper.wrapInner('<h3 style="margin-bottom: 0.5em;"></h3>').append("<a href='#' id='show-des'>Show Description</a><a href='#' id='show-tech'>Show Technology</a>");
		        
		        $.ajax({
		          url: 'js/images.json',
		          type: "GET",
		          dataType: "json",
		          cache: false,
		          success: function(objArray){
		               var objArray = $(objArray).select(function(){ return this.title === anchor.title }),
		                   obj = objArray[0],
		                   des = $("<div/>", {
                                "id": "description",
                                text: obj.description,
                                style: "display:none; padding-top:0.5em; clear:both;"
                            }),
                            tech = $("<div/>", {
                                "id": "technology",
                                text: obj.technology,
                                style: "display:none; padding-top: 0.5em; clear:both;  min-height: 3em;"
                            });
		              titleWrapper.append(des, tech);
		              
		              var linkStyle = {
		                        color: "#fff",
		                        textDecoration: "none", 
		                        display:"block", 
		                        float: "left",
		                        width: "50%",
		                        fontWeight: "bold"		                
		                   };
		              
		              
		              $('#show-des').data('elemToShow', {elem: $('#description'), tag: "Description"});
		              $('#show-tech').data('elemToShow', {elem: $('#technology'), tag: "Technology"});
		              
		              
	                  var toggleContent = function($elem){
	                     var $elemToShow = $elem.data('elemToShow').elem, tag = $elem.data('elemToShow').tag,
	                         $elemToHide = $elemToShow.siblings('div');
	                     if ( $elemToShow.is(':hidden') ){
	                        $elem.text(tag)
	                            .css({ color: "#15D9EA", textDecoration: "none", fontSize: "1.2em", fontWeight: "bold" })
	                            .siblings('a')
	                            .text('Show '+ $elem.siblings('a').data('elemToShow').tag)
	                            .css({color: "#fff", fontSize: "1em"});
	                        $elemToHide.hide('50', function(){
	                            $elemToShow.fadeIn('400');
	                        }); 
                            
	                     }   
	                  };
		              
		              
		              $('#show-des, #show-tech').css(linkStyle).mouseenter(function(e){
		                  toggleContent($(this));	                  		                  
		              }).click(function(e){
		                  e.preventDefault();
		              });		          
		              
		          } // end of success
		        }); // end of ajax		        
		    } // end of onComplete callback
	    }); // end of fancybox
	    
	    $("a.fancybox-alt").fancybox({
	        'speedIn'		:	400, 
		    'speedOut'		:	100, 
		    'overlayShow'	:	false,
		    'hideOnOverlayClick': false
	    });
	    
	    
    },
    
    socialIconFisheye: function(){
        $("#social li").transform({
            scale:[0.9, 0.9]
        }); 
        
        $("#social li").hover(function(){
            $(this).animate({ scale:[[1,1]], rotate: '-45deg' });
        }, function(){
            $(this).animate({ scale:[[0.9,0.9]], rotate: '0deg' }, 200, "easeOutQuad" );
        }); 
    },
    
    setErrorMessages: function(){
        var errorStyle = { fontStyle: "italic", color: "#FA4A4A", fontSize: "16px" },      
            
       $errorName = $("<div/>", { 
            id: "error-name",
            text: "* Must be a legit human name without special characters",
            css: errorStyle     
        }),
        
        $errorEmail = $("<div/>", { 
            id: "error-email",
            text: "* Must be a valid email address",
            css: errorStyle
        }),
        
        $errorMessage = $("<div/>", { 
            id: "error-message",
            text: "* Message should be at least 15 characters",
            css: errorStyle 
        });
        
        this.$errorEmpty = $("<div/>", { // make it accessible from the App object scope
            "class": "error-empty",
            text: "* Must NOT be empty",
            css: errorStyle 
        });
            
        
        $("#name").data("error", $errorName);
        $("#email").data("error", $errorEmail);
        $("#message").data("error", $errorMessage); 
    },
    
    validateEmailHandler: function(){
        var regexName = /^([a-zA-Z]+(?:\.)?(?: [a-zA-Z]+(?:\.)?)*)$/,
            
            regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/;
        
        var field = this.id, // 'this' is DOM element #name, #email or #message to be validated 
                $this = $(this),
                value = $.trim( $this.val() ),
                valid;
                    
            switch(field){
                case "name":
                    valid = regexName.test( value );
                    break;
                case "email":
                    valid = regexEmail.test( value );
                    break;
                case "message":
                    valid = ( value.length >= 15 );    
            }
            
            if ( value === "" ) { 
                
                $this.data("valid", false);
                
                if ( $this.data('error').length  ) 
                { 
                    $this.data('error').remove(); 
                }        
                
                if ( !$this.prev(".error-empty").length )
                {
                    $this.before( App.$errorEmpty.clone() ); 
                }
                return;
            }
            else { 
                if ( $this.prev(".error-empty").length )
                { 
                    $this.prev(".error-empty").remove(); 
                }
            }
            
            if ( !valid ) { 
                $this.data("valid", false);
                $this.before( $this.data('error') ); 
                return; 
            }
            else { 
                 $this.data("valid", true);
                 $this.data('error').remove();
             }
        
            
              
    },
    
    bindValidate: function(){
          $("#name, #email, #message").keyup( $.debounce(300, App.validateEmailHandler ) );
          $("#name, #email, #message").blur(App.validateEmailHandler);   
    },
    
    ajaxSendMail: function(){
        $('#email-form button').click(function(e){
           
            e.preventDefault();
           
            $("#name, #email, #message").each(App.validateEmailHandler);
            
            if ( $("#name").data("valid") && $("#email").data("valid") && $("#message").data("valid") )
            {   
                   
                   $("#name, #email, #message").each(function(){
                        $(this).val( $.trim( $(this).val() ) );
                   });
                    
                   var serializedData = $("#email-form").serialize(); 
                    $.ajax({
                                type: 'POST',
                                url: "mylibs/sendmail.php",
                                data: serializedData,
                                beforeSend: function(){
                                        var spinner = $('<img></img>', {
                                                    id: 'spinner',
                                                    src: "img/spinner.gif",
                                                    alt: 'Sending, please wait!',
                                                    css: {  margin: "25% 0 0 40%" }
                                                });
                                                
                                        $("#email-form").fadeOut("fast", function(){
                                             spinner.insertBefore("#email-form");
                                        });
                                       
                                },
                                complete: function(){
                                                        $('img#spinner').remove();
                                                        $("#email-form").fadeIn();
                                                        $("#email-headline").fadeIn();
                                                        $(":input, textarea", "#email-form").val('');
                                                        $('input, textarea').placeholder();
                                },
                                success: function(json){
                                    var $sign = $("<img/>", {
                                        src: "img/icon/success.png",
                                        css: { display: "inline", marginRight: "5px" }
                                    });
                                    
                                    var resp = $.parseJSON(json);
                                    
                                    if ( resp.yep )
                                    {  
                                       $("#email-headline").fadeOut(function(){
                                            $(this).html(resp.yep).prepend($sign); 
                                       }); 
                                       
                                    }
                                    
                                    else if ( resp.nope )
                                    { 
                                        $sign.attr("src", "img/icon/error.png");
                                        $("#email-headline").fadeOut("fast", function(){
                                            $(this).html(resp.nope).prepend($sign);
                                        }); 
                                        
                                  
                                    }
                                } // end of success callback
                    }); // end of Ajax
            
            }
        }); 
    }
     
    
      
};

jQuery(function( $ ) {
        
    
   App.init();
   
   
   
   if( isiPad = navigator.userAgent.match(/iPad/i) != null ) {
        $(".sprite-list-view").click();
        document.getElementById('view-switch').style.display = "none";
        document.getElementById('dropin-bt').style.display = "none";
    }

});
