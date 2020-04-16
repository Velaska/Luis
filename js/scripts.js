$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],

        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 1
            }
        }
    });

});



$(document).ready(function(){

    $(".back-to-top").hide();

    $(function (){
        $(window).scroll(function (){
            if ($(this).scrollTop() > 100){
                $('.back-to-top').fadeIn();
            } else{
                $('.back-to-top').fadeOut();
            }
        });

        $('.back-to-top').click(function (){
            $('body,html').animate({
                scrollTop:0
            }, 800);
            return false;
        });
    });
});




