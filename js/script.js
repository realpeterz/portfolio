/* browser detection --- http://www.quirksmode.org/js/detect.html*/

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
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

BrowserDetect.init();




/* Author: Peter Zhang */

window.App = {
    
    
    init: function(){
        this.bindNavOnClick();
        this.bindPerScroll();
        this.bindViewSwitchOnClick();
        this.bringPicToFrontOnClick();
        if (!location.hash) $('nav li:first').trigger('click');  
    },
    
    mydata: {
    
            dialog: ["Howdy!", "Take a look!", "Interested?", "Let's talk!"],
            scrollTo: ["#home", "#portfolio", "#resume", "#contact"]
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
           
             
          $(window).scroll(function(){    
            $(this).triggerHandler( 'perScrollNavSynch' );   
          });
    },
    
    bindViewSwitchOnClick: function(){
    
        $('#view-switch').delegate("a", "click", function(){
           var $iconClicked = $(this), 
               $viewSwitch = $('#view-switch'),
               viewIndex = $iconClicked.parent().index();  
                   
            $('a', $viewSwitch).removeClass('view-active');
            $iconClicked.addClass('view-active');    
                          
                  $('#showcases').fadeOut(function(){
                    $( '#grid-view, #gallery' ).hide();
                    $( '#showcases' ).fadeIn();
                    
                    
                    switch(viewIndex){
                        case 0: // Poloriod view
                            $( '#gallery' ).show('fast'); 
                            $( '#dropin-bt' ).fadeIn();
                            
                            break;
                        case 1:
                             $( '#dropin-bt' ).fadeOut(function(){
                                 $( '#grid-view' ).show('fast');
                             });
                             // end of show #list-view
                              break;
                            break;
                        case 2:
                           // code for case 2
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
    }
    
      
};

jQuery(function( $ ) {
        
    
   App.init();
   
   $("a.fancybox").fancybox({
		zoomSpeedIn: 300,
		zoomSpeedOut: 300,
		overlayShow:false
	}); 
   
   $( ".pic" ).draggable({ opacity: 0.8, scroll: true }); 
   $('#dropin-bt').droppable({
        hoverClass: "hoverdrop",
        drop: function(event, ui){
            if ( confirm("The live site will open in a new tab. Is that ok?") ) {
                window.open(ui.draggable.data('livesite'));
            }
        }   
   });
   
   

});
