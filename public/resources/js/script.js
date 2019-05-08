
// this ensures this code can only run after the doc has been loaded
$(document).ready(function () {
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            // 60px before we hit the section-features
            offset: '60px;'
        });

    /* Scroll on buttons */
    // when clicked on 'Im hungry' button, leash animation and scroll to section-plans with 1 sec speed (1000 milisec)
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    /* Navigation scroll */
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

        /* Animations on scroll */
        $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated fadeIn');
        }, {
            // when scroll to half of the section, show content
            offset: '50%'
        });
        $('.js--wp-2').waypoint(function(direction) {
            $('.js--wp-2').addClass('animated fadeInUp');
        }, {
            // when scroll to half of the section, show content
            offset: '50%'
        });
        $('.js--wp-3').waypoint(function(direction) {
            $('.js--wp-3').addClass('animated fadeIn');
        }, {
            // when scroll to half of the section, show content
            offset: '50%'
        });
        $('.js--wp-4').waypoint(function(direction) {
            $('.js--wp-4').addClass('animated pulse');
        }, {
            // when scroll to half of the section, show content
            offset: '50%'
        });

        /* Toggle Mobile nav */
        $('.js--nav-icon').click(function() { //click on menu icon
            var nav = $('.js--main-nav');
            // slideToggle = open and close a box, 200 mili secs
            nav.slideToggle(200); //open mobile nav

        });
});



// $('h1').click(function() {
    //     //this here means our h1 element since we selected 
    //     $(this).css('background-color', '#ff0000');
    // })