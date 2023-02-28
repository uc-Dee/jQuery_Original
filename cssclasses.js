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

    $('#btn1').click(function(){
        var txt = ""; 
        txt += "The height of div is: " +$('#div1').height() + "<br></br>"; 
        txt += "The width of div is: " +$('#div1').width(); 
        $('#div1').html(txt); 
    });

    // appending the text as a string in html
    // width and height method
    $("#btn1").click(function(){
        var txt = "";
        txt += "Width of div is: " + $("#div1").width() + "</br>";
        txt += "Height of div is: " + $("#div1").height();
        $("#div1").html(txt);
    });

    // innerwidth and outerwidth
    $('#btn1').click(function(){
        var txt = ''; 
        txt += 'the innerwidth of div is: ' +$('#div1').innerWidth()+ "px"+'<br>';
        txt += 'the innerheight of div is: ' +$('#div1').innerHeight()+ "px";
        $('#div1').html(txt); 
    })

    // checking the inner and outer width and height of the HTML container. 
    $('#btn1').click(function(){
        var txt = ""; 
        txt += "The Height of the innerHTML is: " +$('#div1').innerHeight() +"px"+ "<br>"; 
        txt += "The Width of the innerHTML is: " +$('#div1').innerWidth() + "px"+ "<br>"; 
        txt += "The Width of the outerHTML is: " +$('#div1').outerWidth() + "px"+ "<br>"; 
        txt += "The Width of the outerHTML is: " +$('#div1').outerHeight() + "px"; 
        $("#div1").html(txt); 
    })

    // displaying the height and width of the document and window
    $('button').click(function(){
        var txt = '';
        txt+= "The width of the document is: " +$(document).width()+ "\n";
        txt += "The height of the document will be: "+$(document).height()+ "\n"; 
        txt += "The width of the window will be: "+$(window).width()+ "\n"; 
        txt += "The height of the window will be: "+$(window).height()+ "\n"; 
        alert(txt); 
    })

    // setting height and width of the document
    $('button').click(function(){
        $('#btn1').width(500).height(500); 
    })

});