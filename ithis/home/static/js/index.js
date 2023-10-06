$( document ).ready(function() {
 
    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    )
    wow.init();
    
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 200) {
            $('.main-header').addClass('sticky-header');
            $('.fixed-header').addClass('animated slideInDown');
            $('.scroll-on-top').removeClass('hide');
        }
        else {
            $('.main-header').removeClass('sticky-header');
            $('.fixed-header').removeClass('animated slideInDown');
            $('.scroll-on-top').addClass('hide');
        }
    });

    // Scroll to top of body
    $('.scroll-on-top').on('click',function(){
        $('body,html').animate({
            scrollTop : 0
        }, 1000);
    })

    // For showing mobile menu 
    $('.mobile-menu-toggler').on('click',function(){
        $(this).parents('body').addClass('mobile-menu-visible')
    })
    
    // For closing the mobile menu
    $('.close-mobile-menu').on('click',function(){
        $(this).parents('body').removeClass('mobile-menu-visible')
    })

    $('.switch-sign-up').on('click',function(){
        $(this).parents('.col-lg-12').find('.sign-up-form').removeClass('d-none');
        $(this).parents('.col-lg-12').find('.sign-in-form').addClass('d-none');
    })

    $('.switch-sign-in').on('click',function(){
        $(this).parents('.col-lg-12').find('.sign-in-form').removeClass('d-none');
        $(this).parents('.col-lg-12').find('.sign-up-form').addClass('d-none');
    })

    $('.Services-slider').owlCarousel({
        items:4,
        margin: 0,
        autoheight: true,
        autoplay: true,
        lazyload: true,
        nav: true,
        dots: false,
        loop: true,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        responsive: {
            450: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            767: {
                items: 3,
                nav: false,
            },
            1024: {
                items: 4
            }
        }
    });    
    
    $('.blog-slider').owlCarousel({
        items:3,
        autoheight: true,
        autoplay: true,
        lazyload: true,
        nav: true,
        dots: false,
        loop: true,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        responsive: {
            450: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            767: {
                items: 3,
                nav: false,
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    })

    $('.faq-question').on('click',function(){
        if($(this).parent('.accordion.block').hasClass('active-block')){
            $('.faq-question').next().slideUp();
            $('.faq-question').parent('.accordion.block').removeClass('active-block')
        }
        else{
            $('.faq-question').next().slideUp();
            $('.faq-question').parent('.accordion.block').removeClass('active-block')
            $(this).next().slideDown()
            $(this).parent('.accordion.block').addClass('active-block')
        }
    })

    $('.test-slider').owlCarousel({
        items:2,
        loop: true,
        margin:40,
        autoheight: true,
        lazyload: true,
        nav: false,
        dots: true,
        // dotsData: true,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1,
            },
            600: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1024: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    })

    $('.search-section .single-checkbox #option1').addClass('active-option');

    $('.search-section .select-box li').on('click',function(){
        $('.search-section .select-box li').find('.single-checkbox .option').removeClass('active-option')
        $(this).find('.single-checkbox .option').addClass('active-option')
    })

    $('.search-section #result1').addClass('d-block')
    
    $('#option1').on('click',function() {
        $('#result1').addClass('d-block');
        $('#result2').removeClass('d-block');
        $('#result3').removeClass('d-block');
    });
    
    $('#option2').on('click',function() {
        $('#result1').removeClass('d-block');
        $('#result2').addClass('d-block');
        $('#result3').removeClass('d-block');
    });
    
    $('#option3').on('click',function() {
        $('#result1').removeClass('d-block');
        $('#result2').removeClass('d-block');
        $('#result3').addClass('d-block');
    });

    $('.select2').select2({})

})