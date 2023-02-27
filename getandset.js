$(document).ready(function(){

    // Accessing the content of the web pages
    $("#btn1").click(function(){
        alert("Text: " + $('#p1').text());
    });

    $("#btn1").click(function(){
        alert("Text: " + $("#p1").text());
      });

    // displays the html of the web page
    $('#btn1').click(function(){
        alert('HTML: ' + $('#p1').html());
    });

    // implementing val function
    $('button').click(function(){
        alert('The value of the paragraph is: ' + $('#test').val()); 
    });

    // attr() function is used to fetch the value of any attribute
    $('button').click(function(){
        alert($('#test').attr('value')); 
    });

    // attr fucntion can fetch anything
    $('button').click(function(){
        alert($('a').attr('href'))
    });

    // It will set the content of the html page
    $('#btn1').click(function(){
        $('#text1').text('Hello World!'); 
        alert(("The text is: ") +$('#text1').text()); 
    }); 

    // It will display the html of any tag. 
    $('#btn2').click(function(){
        $('#text2').html('<b>Deeksha Kulshreshtha</b>');
        alert($('#text2').html()); 
    }); 

    // It will set the value of input field
    $('#btn3').click(function(){
        $('#input1').val('Deeksha Kulshreshtha');
        alert($('#input1').val());
    });

    // show old text and update it, then display the new text
    $('#btn1').click(function(){
        $('#text1').text(function(i, oritext){
            alert ('pointer: ' +i+ ' Original Text: ' +oritext);
        }); 
        $('#text1').text("Hello World"); 
        $('#text1').text(function(i, oritext){
            alert("Pointer: "+i+" Text: "+oritext); 
        });
    });


    // Show the old html, update it then display the new html 
    $('#btn2').click(function(){
        $('#text2').html(function(i, oritext){
            alert('Pointer: '+i+" Old html: "+oritext);
        }); //callable function

        // setting new html
        $('#text2').html("<b>leanring jQuery is a fun!</b>");

        // displaying updated html
        $('#text2').html(function(i, oritext){
            alert("Pointer: " +i+' New Text: '+oritext); 
        });
    });

    // Using attr() values for fetching multiple values
    $('#btn1').click(function(){

        // implemeting callable fucntionality
        $('#a1').attr("href", function(i, oritext){
            alert("pointer: "+i+" original value: "+oritext); 
        }); 

        // updating the values
        $('#a1').attr({
            "title":"Google.com", 
            "href":"https://google.com/"
        });

    });

    

});