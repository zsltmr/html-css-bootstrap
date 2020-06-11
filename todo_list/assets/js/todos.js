//(1) check off specific todos by clickig
//listener could be set on LI, but it works only the LI, which is there at the begining
//therefore listener is set to UL (always there at the begining)
//then inside the UL to all LI's
//so the new LI's can also work
$("ul").on("click", "li", function(){               
    $(this).toggleClass("completed");               
});


//(2) click on X to fade out and delete todo
//listener could be set on SPAN, but it works only the SPAN, which is there at the begining
//therefore listener is set to UL (always there at the begining)
//then inside the UL to all SPAN's
//so the new SPAN's can also work
$("ul").on("click", "span", function(e){            //e is a random name     
    $(this).parent().fadeOut(750, function(){       //parent element has to fade out, not oly the span! (this->span)
        $(this).remove;                             //after 750msec remove (this->li)
    });     
    e.stopPropagation();                            //stop event bubbling up
})


//(3) add new todo from input field
$("input[type='text']").keypress(function(k){       //specific input with text
    if(k.which === 13){                             //if keypress is enter (13)
        var todoText = $(this).val();               //grabbig new todo text from input
        $(this).val("");                            //set input text to empty
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")   //create a new li and add ul (append)
    };
});


//(4) pencil toggler
$("#pencil").click(function(){
    $("input[type='text']").fadeToggle();
});



// check off specific todos by clickig - complicated way by checking
// $("li").click(function(){
//     //if li is grey, turn it black
//     if($(this).css("color") === "rgb(128, 128, 128)") {
//         $(this).css({                           //definitio of an object
//             color: "black",                     //color is OK
//             textDecoration: "none"              //text.decoratio is NOK -> camelCase
//         });
//     }
//     //else turn it grey
//     else {
//         $(this).css({                           //definitio of an object
//             color: "grey",                      //color is OK
//             textDecoration: "line-through"      //text.decoratio is NOK -> camelCase
//         });
//     }
// });