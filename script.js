// // Toggle Animation by Class
// $(window).scroll(function(){
//     if($(document).scrollTop() > 100){
//       $('nav').addClass('animate');
//     }else{
//       $('nav').removeClass('animate');
//     }
//   })


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("main-navbar ").style.fontSize = "10px";
    document.getElementById("logo").style.fontSize = "15px";
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("main-navbar").style.fontSize = " 20px";
    document.getElementById("logo").style.fontSize = "20px";
  }
}