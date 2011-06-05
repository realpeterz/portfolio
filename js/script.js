/* Author: Peter Zhang */

var mydata = {

    dialog: ["Howdy!", "Take a look!", "Interested?", "Let's talk!"],
    scrollTo: ["#home", "#portfolio", "#resume", "#contact"]
};

window.$nav = {
    
    
    
    speak: function(){
        var i = $(this).index("#nav li");
        $('#dialog').text('').fadeOut('fast').fadeIn('fast', function(){
           $(this).text(mydata.dialog[i]);
        });
    },
    
    scroll: function(){
          var $navItem = $(this),
              i = $navItem.index(),
              $targetElem = $(mydata.scrollTo[i]);
              $(window).data('scrollingTo', 1);
              
          $(window).scrollTo($targetElem, 500, { 
            onAfter:function(){
                    location.hash = mydata.scrollTo[i]; 
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
    }
};


jQuery(function( $ ) {
        
   $('header').delegate("#nav li", "click", function(e){
            e.preventDefault();
            $('#nav li').each(function() { $nav.removeActive.call(this); });
            $nav.addActive.call(this);
            $nav.speak.call(this); 
            $nav.scroll.call(this);
 
   });  
   
   $(window).bind("updateNavigation", function(){
       var inview = $('section:in-viewport, footer:in-viewport').attr ( 'id' ),
           currentNav = $('#nav').data('current');
            

      
     if ( inview && inview !== currentNav && $(window).data('scrollingTo')!==1  )
       {
           $('#nav li').each(function() {
                var $navItem = $(this),
                navItemName = $navItem.text().toLowerCase(); 
                
                $nav.removeActive.call(this);
                
                if ( inview == navItemName ) {
                     $nav.addActive.call(this, function(){
                        $nav.speak.call(this);
                        console.log("callbacked");
                     });
                }
                
                $navItem = navItemName = undefined;      
           }); // end of each loop check
       } // end of if statement
       
   }); 
   
   $(window).scroll(function(){    
        $(this).triggerHandler( 'updateNavigation' );   
   });
   
     
    $('nav li:first').trigger('click');  
     

});
