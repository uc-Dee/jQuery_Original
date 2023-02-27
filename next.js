$(document).ready(function(){
    
    // implementing append function();
    /* $('#btn1').click(function(){
        $('#p1').append(' Some text appended.'); 

        alert("text appended!"); 
        alert($('#p1').text());
    }); */

    // Appending text into paragraph
    // functions in Jquery
    /* $('#btn1').click(function(){
        $('#btn3').before('<b>Before</b>');
    }); */

    $('#btn1').click(function(){
        $('#btn3').after('<i>After</i>');
    });


});


function appendtext() {
    console.log("hello")
    var text1 = "<p>Text.</p>";               // Create element with HTML 
    var text2 = $("<p></p>").text("Text.");   // Create with jQuery
    var text3 = document.createElement("p");  // Create with DOM
    text3.innerHTML = "Text.";
    $("body").append(text1, text2, text3);      // Append the new elements
  }