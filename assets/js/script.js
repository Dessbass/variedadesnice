// For search bar
$(document).on('click', '.search', function() {
    $('.search-bar').addClass('search-bar-active')
});

$(document).on('click', '.search-cancel', function() {
    $('.search-bar').removeClass('search-bar-active')
});

//login-sign-up
$(document).on('click', '.user, .already-acount', function() {
    $('.form').addClass('login-active').removeClass('sign-up-active')
});

$(document).on('click', '.sign-up-btn', function() {
    $('.form').addClass('sign-up-active').removeClass('login-active')
});

$(document).on('click', '.form-cancel', function() {
    $('.form').removeClass('login-active').removeClass('sign-up-active')
});

// full slider script
$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        auto: true,
        item: 1,
        slideMargin: 0,
        loop: true
    });
});

// categorias de productos
$(document).ready(function() {
    //agregando clase active al primer enlace
    $('.category_list, .category_item[category="talleres"]').addClass('ct_item-active');
    $('.product-item[category="forochat"]').hide();
    $('.product-item[category="guias"]').hide();

    $('.category_item').click(function() {
        var catProduct = $(this).attr('category');
        console.log(catProduct);
        //agreganfo clase active al enlace seleccionado
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //ocultando productos
        $('.product-item').hide();

        //mostrando productos
        $('.product-item[category="' + catProduct + '"]').show();
    });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});

// for fix-menu-when-scroll
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navigation').addClass('fix-nav');
    } else {
        $('.navigation').removeClass('fix-nav');
    }
});

// for-responsive-menu
$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
})

// Contador
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});

// Testimonios

var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});

//Youtube
$(document).ready(function(){
    $(".item_video").click(function(){
        let youtube_id = $(this).children("img").attr("data-id");
        console.log(youtube_id);
        $(this).children(".youtube_icon")
        .addClass("active").parent()
        .siblings()
        .children(".youtube_icon")
        .removeClass("active")

        let newUrl = `https://www.youtube.com/embed/${youtube_id}`;
        $("#video_id").attr("src", newUrl);
    })
})
