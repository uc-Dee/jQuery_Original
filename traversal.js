$(document).ready(function(){

    // showing parent-child realtionship
    $('span').parent().css({
        "color": "red", 
        'border': '2px solid red'
    });

    // showing parent-ancestor realtionship
    $('span').parents('ul').css({
        "color": "red", 
        'border': '2px solid red'
    });

    // showing the parent to direct child relationship 
    $('div').children().css({
        "color": "red", 
        'border': '2px solid red'
    });

    // Specifying the conditions for specific children
    $('div').children('p.first').css({
        "color": "red", 
        'border': '2px solid red'
    });

    // find method: it will change the css of every span
    $('div').find('span').css({
        'color': 'red', 
        'border': '2px solid red'
    });

    // this method will return all the descendants of the selected element
    $('div').find('*').css({
        'color': 'red', 
        'border': '2px solid red'
    });

    // finding the sibling
    $('button').click(function(){
        alert($('a').siblings()); 
    });

    $('button').click(function(){
        alert($('a').siblings('p').css({
            'color': 'red',
            "border": '2px solid red'
        }));
    });

    // Changing the css of what is next to span
    $('span').next().css({
        'color': 'red', 
        'border': '2px solid red'
    });

    // Highlight All what is next to selected
    $('p').nextAll().css({
        'color': 'red',
        'border': '2px solid red' 
    });

    // Code to highlight next element until specified
    $('p').nextUntil('a').css({
        'color': 'red', 
        'border': '2px solid red'
    })

    // prev() is working
    $('p').prev().css({
        'color': 'red', 
        'border' : '2px solid red'
    });

    // prevAll()
    $('p').prevAll().css({
        'color': 'red', 
        "border" : '2px solid red'
    });

    // prevUntil()
    $('a').prevUntil('div').css({
        'color': 'red', 
        'border': '2px solid red'
    })

    // ---------------------------------------------------> filtering methods() <------------------------------------------
    // It will change the background color of first division
    $('div').first().css(
        'background-color', 'yellow' 
    );

    // Edit the last paragraph
    $('p').last().css({
        'background-color': 'black',
        'color': 'red'
    });

    // it is used to select the 3 paragraph element. 
    $('p').eq(2).css('color', 'red'); 

    // filter()
    $('p').filter('.intro').css('color', 'red')

    // .not()
    $('p').not('.intro').css('color', 'red')

    // Load method in AJAX
    $('.class1').load('hello.txt');    

    // Loading the file with an id element
    $('#div1').load('hello.txt #p1');

    // Using the callable function inside
    $('button').click(function(){
        $('#div1').load('hello.txt', function(responseTxt, statusTxt, xhr){
            if(statusTxt=='success'){
                alert('External content loaded successfully!'); 
            }
            if(statusTxt=="error"){
                alert('Error: '+xhr.status+' : '+xhr.statusTxt); 
            }
        })
    })

    // submitting the data using get method
     $('button').click(function(){
        $.get('demo_get_txt.asp', function(data, status){
            alert("data: "+data+" Status: "+ status);
        });
    }); 

    // submitting the data using post method
     $('button').click(function(){
         $.post('demo.php', {
             'name': "Deeksha Kulshreshtha", 
             "city": 'noida'
         }, 

         function(data, status){
             alert("Data: "+ data+ " Status: "+status);
         });
     });
});
