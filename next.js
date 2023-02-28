$(document).ready(function(){
    
    // implementing append function();
    $('#btn1').click(function(){
        $('#p1').append(' Some text appended.'); 

        alert("text appended!"); 
        alert($('#p1').text());
    });

    // Appending text into paragraph
    // functions in Jquery
    $('#btn1').click(function(){
        $('#btn3').before('<b>Before</b>');
    });

    // implementing after() function
    $('#btn1').click(function(){
        $('#btn3').after('<i>After</i>');
    });

    // implementing the remove function()
    $('#btn2').click(function(){
        $('#btn1').remove(); 
        alert('Button is removed!'); 
    })

    // implementing the child function()
    $('#btn4').click(function(){
        $('#btn3').empty(); 
        alert("Empty function is invoked on the button!");
    })
});

function appendtext() {
    console.log("hello")
    var text1 = "<p>Text.</p>";               // Create element with HTML 
    var text2 = $("<p></p>").text("Text.");   // Create with jQuery
    var text3 = document.createElement("p");  // Create with DOM
    text3.innerHTML = "Text.";
    $("body").append(text1, text2, text3);      // Append the new elements
  }

//  after can take multiple parameters
function showtext(){
    var txt1 = "<b>I</b>"; //creating by html
    var txt2 = $('<i></i>').text('love');   // creating by jQuery
    var txt3 = document.createElement('b'); //creating by DOM
    txt3.innerHTML= "jQuery!";
    $('#btn1').after(txt1, txt2, txt3);  
}

// before can take multiple parameters
function showtext(){
    var txt1 = "<b>Deeksha </b>";       //creating by html
    var txt2 = $('<b></b>').text("Kulshreshtha ");  // creating by jQuery  
    var txt3 = document.createElement('b');   //creating by DOM
    txt3.innerHTML = 'is a good girl.'
    $("#btn1").before(txt1, txt2, txt3);
}

