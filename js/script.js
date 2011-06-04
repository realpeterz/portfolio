/* Author: Peter Zhang */

var mydata = {

    dialog: ["Howdy!", "Take a look!", "Interested?", "Let's talk!"],
    scroll: ["#home", "#portfolio", "#resume", "#contact"]
};

window.$nav = {
    
    
    
    speak: function(){
        var i = $(this).index();
        $('#dialog').text('').fadeOut('fast').fadeIn('fast', function(){
           $(this).text(mydata.dialog[i]);
        });
    },
    
    scroll: function(){
          var i = $(this).index();
          var $targetElem = $(mydata.scroll[i]);
          $(window).scrollTo($targetElem, 500, {onAfter:function(){
            location.hash = mydata.scroll[i];    
          } });
          return false;
    },

    addActive: function(){
        if ($(this).data('active') !== 1)
        {
             var navIcon = $(this).find('div').get(0);
             navIcon.className += "-hover";
             $(this).addClass('sprite-glow').data('active', 1);

        }   
    },
    
    removeActive: function(){
        if ($(this).data('active') === 1)
        { 
            $(this).data('active', 0);  
            var navIcon = $(this).find('div').get(0);
            navIcon.className = navIcon.className.match(/.*(?=-hover)/); 
            $(this).removeClass('sprite-glow');
            
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
   
   $(window).scroll(function(){
       
   });
   
     
    $('nav li:first').trigger('click');  
     

});

















