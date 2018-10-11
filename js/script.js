$(function () {
    $(window).on("scroll", function () { /* change the color of nav when scroll down */
        var sc = $(window).scrollTop();
        if (sc > 150) {
           //$("nav").css("background-color", "white");
        }else{
           //$("nav").css("background-color", "green");   
        }
    });
});
