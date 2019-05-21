(function($) {
    "use strict"
    $(function() {

        startAnimation()
        $(document).scroll(function() {
            startAnimation()
        })

        $('.__dd__block-two__ba__block').hover(function() {
            $(this).removeClass('animated')
            .removeClass('__dd__is--show')
            .removeClass('bounce')
            .css({
                opacity: 1
            })
        }, function() {
            $(this).addClass('animated')
            .addClass('__dd__is--show')
            .addClass('bounce')
        })

        function startAnimation() {
            var animation_element = $('.__dd__anim')

            animation_element.each(function() {

                var a_e_transition = $(this).data('animtransition')
                var a_e_animation = $(this).data('animtype')
                var a_e_delay = $(this).data('animdelay')

                $(this).css({
                    "transition": a_e_transition + 's all ease',
                    "-webkit-animation-delay": a_e_delay + 's',
                    "-moz-animation-delay": a_e_delay + 's',
                    "-o-animation-delay": a_e_delay + 's',
                    "animation-delay": a_e_delay + 's'
                })

                var top_of_element = $(this).offset().top;
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();

                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                    $(this)
                        .addClass('animated')
                        .addClass('__dd__is--show')
                        .addClass(a_e_animation)
                } else {
                    $(this)
                        .removeClass('animated')
                        .removeClass('__dd__is--show')
                        .removeClass(a_e_animation)
                }
            })
        }
    })
})(jQuery);