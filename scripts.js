//Change navbar color on scroll

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 100){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', '#034f84');
    }
});
          $('#menuButton').click(function(){
              if($('#sidebar').hasClass('sidebar-open')) {
                  $('#sidebar').addClass('sidebar-close').removeClass('sidebar-open');
                  $('#mobileMenu').undim();
              }
              else {
                  $('#sidebar').addClass('sidebar-open').removeClass('sidebar-close');
                  $('#mobileMenu').dimBackground({darkness : 0.4});
              }
          });

          $('html').click(function() {
            if($('#sidebar').hasClass('sidebar-open')) {
              $('#sidebar').addClass('sidebar-close').removeClass('sidebar-open');
              $('#mobileMenu').undim();
            }
          });

          $('#menuButton').click(function(event){
              event.stopPropagation();
          });

    




var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");
