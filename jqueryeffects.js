$(document).ready(function(){

    // Hide
/*     $('button').click(function(){
        $('p').hide(1000); 
    }); */

    // Hide: hide the selector within the specified duraiton.
/*     $('button').click(function(){
        $('#fist1').hide("slow"); 
    }) */

    // Toggle: used to show what is hidden and hidden what is shown
   /*  $("button").click(function(){
        $('p').toggle(10000); 
    }) */

    // fadding methods
   /*  $('button').click(function(){
        $('#div1').fadeIn();
        $('#div2').fadeIn("slow");
        $('#div3').fadeIn(3000);
    }) */

    // Fade-out method
  /*   $('button').click(function(){
        $('#div1').fadeOut(); 
        $('#div2').fadeOut("slow"); 
        $('#div3').fadeOut(3000); 
    }) */

    // fade-toggle method
  /*   $('button').click(function(){
        $('#div1').fadeToggle("fast", 0); 
        $('#div1').fadeToggle("slow", 0.4); 
        $('#div1').fadeToggle(3000, 0.6); 
    }) */

    // SlideDown
/*     $('button').click(function(){
        $('p').slideDown(1000);
    }); */

    // SlideUp
/*     $('button').click(function(){
        $('p').slideUp(1000);
    });
 */
    // SlideToggle
 /*    $('button').click(function(){
        $('p').slideToggle(1000);
    }); 
 */
    // ----------------------------------------------> Animation tag <---------------------------------------------------

    // animation applied on button
    /* $('button').click(function(){
        $('#button1').animate({left:'250px'}); 
    }); */

    // animate function with some more functionality
    /* $('button').click(function(){
        $(this).animate({
            left:'250px',
            opacity: "0.5", 
            height: "150px", 
            width: "150px"
        });
    }); */

    // Relative jQuery functions
   /*  $('button').click(function(){
        $('div').animate({
            left: '250px', 
            height: '+=150px', 
            width: '+=150px'
        });
    }); */

    // jquery predefined functions()
 /*    $('button').click(function(){
        $('#working').animate({
            height: 'toggle'
        });
    }); */

    // We can create the variables in jquery
    /* $('button').click(function(){
        var i = $('#working'); 
        i.animate({height: '300px', opacity: '0.4'}, "slow");
        i.animate({width: '300px', opacity: '0.8'}, "slow");
        i.animate({height: '100px', opacity: '0.4'}, "slow");
        i.animate({width: '100px', opacity: '0.8'}, "slow");
    }); */

    // -------------------------------------------> STOP() <-----------------------------------------------------
    // it will not show any effect because there is no animation
    /* $('button').click(function(){
        $('#working').stop(); 
    }); */

    // example of callback functions
    /* $('button').click(function(){
        $('p').hide(5000, function(){
            alert('the paragraphs are going to end').stop();
        });
    }); */

    // function with no callback functions may clash
    /* $('button').click(function(){
        $('p').hide(5000); 
        alert("it executed before hide gets compelted");
    }); */

    // -----------------------------------> Jquery Chaining techniques <------------------------------------------------
    $('button').click(function(){
        $('#p1').css("color", "red").slideup(2000).slidedown(2000);
    })
    
}); 