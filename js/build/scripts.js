!function(n){jQuery(document).ready(function(n){scroll(),hamburger()})}(jQuery);var scroll=function(){$(".scroll").click(function(n){n.preventDefault(),$("html,body").animate({scrollTop:$(this.hash).offset().top},500)})},hamburger=function(){$(".hamburger-menu").on("click",function(){$(".bar").toggleClass("animate"),$("nav .navbar").slideToggle("slow")})};