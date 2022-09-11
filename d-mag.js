
$('.navbar').find('#LinkList1').addClass("max-width");
      $('.navbar').find('#Header1').addClass("logo");
      $('#Header1').insertBefore(".menu");

$('.carousel-inner').find('.widget').addClass("carousel-item");
      $('.carousel-inner').find('#Image1').addClass("active");

$('#services-area').find('.widget').addClass("col-sm-6");
$('#grid-card').find('#PopularPosts2').addClass("row row-cols-1 row-cols-md-2 g-4");

$(document).ready(function(){
    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
   
});

$("<hr class='w-100 clearfix d-md-none'/>").insertAfter("#Text3, #LinkList11, #LinkList10");
  
      $('#TextList1').addClass("col-md-4 col-lg-3 col-xl-3 mx-auto mt-3");
  $('#LinkList10').addClass("col-md-3 col-lg-2 col-xl-2 mx-auto mt-3");
  $('#LinkList11').addClass("col-md-2 col-lg-2 col-xl-2 mx-auto mt-3");
    $('#Text3').addClass("col-md-3 col-lg-3 col-xl-3 mx-auto mt-3");

