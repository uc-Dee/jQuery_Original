$(document).ready(function(){

    // script for manipulating the css 
    $('#btn1').click(function(){
        $('h1, h2, p').addclass('blue'); 
        $('div').addClass('important');
    }) 

    // defining both the classes in one go
    $('button').click(function(){
        $('h1, h2, p').addclass('blue important');
    });

    // Removing the classess
    $('button').click(function(){
        $('h1, h2, p').remove('blue'); 
    }); 

    // toggle method
    $('button').click(function(){
        $('h1 h2 p').toggleClass('blue');
    })

    // css property get method
    $('#btn1').click(function(){
        alert($('btn1').css('background-color')); 
    });

    //CSS property set method()
    $('#btn1').click(function(){
        $('p').css({
            'background-color': 'yellow', 
             'font-size': "200%" 
        });
    });



});