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

$("<span>Developed By </span><a href='https://www.youtube.com/c/WebsiteDevelopers' id='developers'>Website Developers</a>").insertAfter(".p-3 #copyright-area");
$("<hr class='w-100 clearfix d-md-none'/>").insertAfter("#Text3, #LinkList11, #LinkList10");
  
      $('#TextList1').addClass("col-md-4 col-lg-3 col-xl-3 mx-auto mt-3");
  $('#LinkList10').addClass("col-md-3 col-lg-2 col-xl-2 mx-auto mt-3");
  $('#LinkList11').addClass("col-md-2 col-lg-2 col-xl-2 mx-auto mt-3");
    $('#Text3').addClass("col-md-3 col-lg-3 col-xl-3 mx-auto mt-3");

$(document).ready(function () {
        var _3 = &#39;visibility:visible!important;opacity:1!important;position:relative!important;z-index:101!important;left:unset!important;right:unset!important;bottom:unset!important;display:block!important;top:unset!important;margin-left:auto!important;margin-right:auto!important;padding-left:0!important;padding-right:0!important;&#39;;
        
    $(&quot;#developers&quot;).removeAttr(&#39;style&#39;); 
    $(&quot;#developers&quot;).removeAttr(&#39;href&#39;);
  	$(&quot;#developers&quot;).empty();
    $(&quot;#developers&quot;).attr(&#39;href&#39;, &#39;https://youtube.com/websitedevelopers&#39;).text(&#39;Website Developers&#39;).attr(&#39;style&#39;, &#39;visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;left:unset!important;right:unset!important;bottom:unset!important;display:inline!important;top:unset!important;font-size:15px!important;color: rgb(255, 188, 0)!important;margin:0!important;padding:0!important;&#39;);
    
        $(&quot;#developers&quot;).parent().attr(&#39;style&#39;, _3).parent().attr(&#39;style&#39;, _3).parent().attr(&#39;style&#39;, _3).parent().attr(&#39;style&#39;, _3).parent().attr(&#39;style&#39;, _3);
        
    if ($(&quot;#developers&quot;).length) {} else {
        window.location.href = &#39;https://solutionhost.blogspot.com/&#39;
    }
});
