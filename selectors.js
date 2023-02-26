$(document).ready(function(){

    // Jquery element selectors
    $/* ("button").click(function(){
        $('p').hide(); 
    }); */

    // Jquery id selectors
    /* $('button').click(function(){
        $('#selectme').hide(); 
    }); */

    // Class selector
   /*  $('button').click(function(){
        $('.container').hide(); 
    }); */ 

    // trying to use this pointer
    /* $('button').click(function(){
        $('this').hide(); 
    });  */

    // Select the paragraph that is first written in the document
    /* $('button').click(function(){
        $('p:first').hide(); 
    });  */

    // Select all the first element of the ul
    /* $('button').click(function(){
        $('ul li:first').hide(); 
    });  */

    // ul li:first-child
    /* $('button').click(function(){
        $('ul li:first-child').hide(); 
    }); 
 */
    // This is not working fine
    // $('a[href]')
   /*  $('button').click(function(){
            $("[href]").hide(); 
        });  
    });  */
    
    // p on button
    /* $("button").click(function(){
        $("p").hide();
    }); */

    // Select all the elements type equals to button
    /* $('button').click(function(){
        $(':button').hide(); 
    }) */

    // select all the even tables rows
    /* $('button').click(function(){
        $('tr:even').hide(); 
    }); */

    // to select all the odd table rows
    /* $('button').click(function(){
        $('tr:even').hide(); 
    }); */

    // implementing this selector
   /*  $('button').click(function(){
        $(this).hide(); 
    }); */

    // -----------------------------------------> Event Handlers <-------------------------------------------------------------

    // Mouseenter event
    /* $('button').mouseenter(function () { 
        alert("You clicked on button!!!"); 
    }); */

    // mouseleave method
    /* $('button').mouseleave(function () { 
        alert("You mouse is going back!"); 
    }); */

    // mousedown(); 
    /* $('button').mousedown(function () { 
        alert("Mouse is going down!"); 
    }); */

    // The mouse is going up
    /* $('button').mouseup(function () { 
        alert('The mouse is going up'); 
    }); */

    // mousehover(); 
    /* $('button').hover(
        function(){
            alert("The are in button."); 
        },

        function(){
            alert('you are out of button.'); 
        }
    ) */

    // Focus attribute
    /* $('input').focus(function(){
        $(this).css("text-color", "#cccccc"); 
    });  */

    // Onclick attribute 
    /* $('p').on("click", function(){
        $(this).hide(); 
    });  */

    // Grouping multiple attributes together with on attribute
    /* $('button').on({
        mouseenter: function(){
            alert("You are entering into the section"); 
        }, 

        mouseleave: function () { 
            alert("You are leaving from the section"); 
        },

        click: function(){
            alert("You are clicking into the section"); 
        },   
    }); */
}); 
