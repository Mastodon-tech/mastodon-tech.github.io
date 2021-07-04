$(document).ready(function () {
    var windowWidth = $(window).width();
    var window_width = $(window).width();
    var tl = gsap.timeline();

    (function ($) {


        //------------ Light gallery
        if ($('.Light').length > 0) {
            $(".Light").lightGallery({
                selector: 'a'
            });
        }


        //------------ nice select
        if ($('.Select').length > 0) {
            $('.Select select').niceSelect();
        }


        //------------ tab change in mobile using nice select
        $('.TabSelect').on('change', function (e) {
            $('.TabMenus li a').eq($(this).val()).tab('show');
        });


//-------------- animation

        // if (767 < window_width) {
        // blast init
        if ($('.textUp').length > 0) {
            $('.textUp').blast({delimiter: "character"});
        }
        if ($('.fadeRightWord').length > 0) {
            $('.fadeRightWord').blast({delimiter: "word"});
        }

        if ($('.fadeRight').length > 0) {
            $('.fadeRight').blast({
                delimiter: "character"
            });
        }

        var get_first = $('.home-slider'),
            get_half = $(window).height() / 1.1;

        $(window).scroll(function () {
            var w_scroll = $(window).scrollTop();
            if ($('.anim').length > 0) {
                $('.anim').each(function () {
                    if (w_scroll > $(this).offset().top - get_half) {
                        $(this).addClass('anim-active');
                    }
                    // if (get_first.position().top === w_scroll) {
                    //     $('.anim').removeClass('anim-active');
                    // }

                });
            }
        })

        // }
        $('.anim').each(function () {
            if ($(this).visible(true)) {
                $(this).addClass('anim-active');
            }
        });


//-------------- animation end

        //-------------- desktop main menu action

        $('.Hamburger__box').click(function () {

            if ($('.Hamburger__box,.MenuItems,.toggle-infoBtn').hasClass('menuOpen')) {
                $('.Hamburger__box,.MenuItems,.toggle-infoBtn').removeClass('menuOpen')
            } else {
                $('.Hamburger__box,.MenuItems,.toggle-infoBtn').addClass('menuOpen')
            }
        })

        var menuLine = gsap.timeline({
            paused: true
        })
        menuLine.to('.Hamburger__box span:nth-child(2)', {opacity: 0, ease: 'power1.out'})
        menuLine.to('.Hamburger__box span:nth-child(3)', {
            duration: .4,
            rotation: -48,
            transformOrigin: '3px -1px',
            ease: 'power1.out'
        }, "-=.3");
        menuLine.to('.Hamburger__box span:nth-child(1)', {
            duration: .4,
            rotation: 45,
            transformOrigin: '0px 4px',
            ease: 'power1.out'
        }, "-=.3");
        menuLine.reversed(true);

        $('.Hamburger__box').click(function () {
            menuLine.reversed(!menuLine.reversed())
            if (menuLine.reversed()) {
                menuLine.reverse()
            } else {
                menuLine.play()
            }
        })

        let do_height = window.innerHeight;
        if( $('body').hasClass('no-Footer') ){
            var toggleMenuWrap = tl.to('.MenuItems', {duration: .5, height: do_height,ease: Expo.easeOut})
        }else{
            var toggleMenuWrap = tl.to('.MenuItems', {duration: .5, height:do_height - 40,ease: Expo.easeOut})
        }

        tl.to('.MenuItems-wrap', {duration: .4, y: 0, opacity: 1});
        toggleMenuWrap.reversed(true);
        $('.Hamburger__box').click(function () {
            toggleMenuWrap.reversed() ? toggleMenuWrap.play() : toggleMenuWrap.reverse();
        });


        //---------- description popup action
        var toggleClickSliderDes = gsap.to('.Startup_Banner__slider__item__des__content', {
            duration: .6,
            height: 'auto',
            opacity: 1,
            ease: Expo.easeOut
        });
        toggleClickSliderDes.reversed(true);

        function toggleDirectionSliderDes() {
            toggleClickSliderDes.reversed() ? toggleClickSliderDes.play() : toggleClickSliderDes.reverse();
        }

        var toggleClickMenuDes = gsap.to('.MenuItems__content', {
            duration: .6,
            height: 'auto',
            opacity: 1,
            // ease: SlowMo.ease.config(0.7,0.7,false)
            ease: Expo.easeOut
        });
        toggleClickMenuDes.reversed(true);

        function toggleDirectionMenuDes() {
            toggleClickMenuDes.reversed() ? toggleClickMenuDes.play() : toggleClickMenuDes.reverse();
        }

        $('.toggle-infoBtn,.desClose').click(function () {
            if ($('.toggle-infoBtn').hasClass('menuOpen')) {
                toggleDirectionMenuDes()
            } else {
                toggleDirectionSliderDes()
            }

        })


        //------------- home page banner slider
        if ($('.Startup_Banner__slider__init').length > 0) {


            var slideWrapper = $(".Startup_Banner__slider__init")

            function playPauseVideo(slick, control) {
                var currentSlide, slideType, startTime, player, video;

                currentSlide = slick.find(".slick-current");
                slideType = currentSlide.attr("class").split(" ")[1];

                if (slideType === "video") {
                    video = currentSlide.children("video").get(0);
                    if (video != null) {
                        if (control === "play") {
                            video.play();
                        } else {
                            video.pause();
                        }
                    }
                }
            }


            $(function () {
                slideWrapper.on("init", function (slick) {
                    slick = $(slick.currentTarget);
                    setTimeout(function () {
                        playPauseVideo(slick, "play");
                    }, 1000);
                });
                slideWrapper.on("beforeChange", function (event, slick) {
                    slick = $(slick.$slider);
                    playPauseVideo(slick, "pause");
                });
                slideWrapper.on("afterChange", function (event, slick) {
                    slick = $(slick.$slider);
                    playPauseVideo(slick, "play");
                });

                //start the slider
                slideWrapper.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1500,
                    fade: true,
                    cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)',
                    dots: true,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    autoplay: true,
                    autoplaySpeed: 7000,
                    arrows: false,
                    draggable: true,

                });
            });


        }





        // mobile menu
        $('.has-child').each(function () {
            $(this).find('.has-child-clicked').click(function () {
                $(this).next('.mobile-main-sub').slideToggle()
                $('body').toggleClass('MainMenuOpen')
            })
        });

        $('.mobile-inner-sub-parent').each(function () {
            $(this).find('.main-sub-clicked').click(function () {
                $('.main-sub-clicked').not($(this)).removeClass('menuOpened');
                $(this).toggleClass('menuOpened');
                $('.mobile-inner-sub').not($(this).next('.mobile-inner-sub')).slideUp();
                $(this).next('.mobile-inner-sub').slideToggle()
                $('body').toggleClass('SubOpen')
            })
        });

        $('.MobileMenu__wrap__menu-bar__click').click(function () {
            $('.MobileMenu, body').toggleClass('menuDown');
            $('.MobileMenu__wrap__items').slideToggle()
            setTimeout(function () {

            },200)
        });

        $('.smallSub').each(function () {
            $(this).find('#menuTriger').click(function () {
                $(this).next('.mobile-inner-sub-small').slideToggle()
                $(this).toggleClass('menuOpened')
            })
        });


        // set height for mobile
        if( 767 > window_width  ){
            const widnow_height = window.innerHeight;
            $('body').height(widnow_height)
            $('.Startup_Banner__slider,.Startup_Banner').height(widnow_height - 40)
            $('.MobileMenu__wrap__items > ul').height(widnow_height - 140)
        }


        $('.main-sub-clicked ').removeClass('menuOpened')
        $('.mobile-inner-sub ').removeClass('Open ')



    })(jQuery);

});//document.ready


//------------ Device Image
function deviceImage() {
    // window min width 1401 -- large screen
    var window_width = $(window).width();
    if (1400 < window_width) {
        $('.modify-bg').each(function () {
            var large = $(this).attr('data-image-large');
            $(this).css('background', "url(" + large + ")");
        });
    }
    // window max-width 1400 -- standard screen
    if (1400 >= window_width && 992 <= window_width) {
        $('.modify-bg').each(function () {
            var standard = $(this).attr('data-image-standard');
            $(this).css('background', "url(" + standard + ")");
        });
    }
    // window max-width 991 -- mobile device
    if (991 >= window_width) {
        $('.modify-bg').each(function () {
            var small = $(this).attr('data-image-small');
            $(this).css('background', "url(" + small + ")");
        });
    }
}

deviceImage();


