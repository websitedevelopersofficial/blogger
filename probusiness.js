var authorized = ["wowstudy-websitedevelopers.blogspot.com", "www.thecodebazaar.com"];
var RequestUrl = location.hostname;
if($.inArray(RequestUrl, authorized) > -1) {
  $("#Header1").addClass("logo");
  $("#Header1").removeClass("Header");
  $(".hero .HTML").addClass("text");
  $(".hero .Image").addClass("image");
  $("#services").addClass("services");
  $(".services .widget > div").addClass("item");
  $("#features").addClass("features");
  $("#team-section").addClass("team-section");
  $(".team-section .widget > div").addClass("team");
  $("#pricing").addClass("pricing");
  $(".pricing ul").addClass("price");
  
var colors = ["#b814ed","#1e5ce9","#e9b41e","#069137","#e91e31"];
        i = 0;
      	j = 0;
        setInterval(function(){ $('.hero .text span span').fadeOut(function(){
            $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      		$(this).css('color', colors[(j = (j + 1) % colors.length)]);
          }); }, 3000)
  
$(function() {
    var header = $(".header");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });
});

      }
    
    else{
     $("*").remove();
    }
  
MenuOn = document.querySelector(".header .fa-bars");
MenuOff = document.querySelector(".header ul .fa-times")
SearchOn = document.querySelector(".header .fa-search")
SearchOff = document.querySelector("#search-box .closebtn")
  
MenuOn.onclick = function() {
  document.querySelector(".header .LinkList").classList.add("active");
}

MenuOff.onclick = function() {
  document.querySelector(".header .LinkList").classList.remove("active");
}

  
  SearchOn.onclick = function() {
  document.querySelector("#search-box").classList.add("active");
}

SearchOff.onclick = function() {
  document.querySelector("#search-box").classList.remove("active");
}



const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-eye", "fa-eye-slash");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-eye-slash", "fa-eye");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}
