//Change navbar color on scroll

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 100){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', '#034f84');
    }
});




var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");
