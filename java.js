$("#doc").click("click",function(){
    $("#col").slideToggle("slow")
})
function myFunction2(){
    document.getElementById("#do").src  = "https://e7.pngegg.com/pngimages/975/177/png-clipart-plus-and-minus-signs-subtraction-meno-mathematics-mathematics-sign-computer-icons.png"
}
$("#doc2").click("click",function(){
    $("#col2").slideToggle("slow")
})

$("#doc3").click("click",function(){
    $("#col3").slideToggle("slow")
})

$("#ourteams").on({
  mouseenter: function(){
      $(this).css("background-color","#F2DCDB");
  },
  mouseleave: function(){
    $(this).css("background-color","#DDDAD3")
}
})
$("#oueteamms").on({
  mouseenter: function(){
      $(this).css("background-color","#B2D1CC");
  },
  mouseleave: function(){
    $(this).css("background-color","#F2DCDB")
}
})



$(document).ready(function () {
    var navPos = $('.fix').offset().top; //Sticky navbar
    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos >= navPos) {
            $('.fix').addClass('fixed');
        } else {
            $('.fix').removeClass('fixed');
        }
    });
});


