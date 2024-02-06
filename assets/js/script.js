$(document).ready(function(){
    $(".carousel_dest").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $(".destaques_page").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    const btn_menu = document.querySelector('.btn_menu');
    const nav_menu = document.querySelector('nav.menu');
    const btn_close_menu = document.querySelector('.btn_close_menu');

    btn_menu.addEventListener('click', () => {
        nav_menu.classList.add('open_menu')
    });

    btn_close_menu.addEventListener('click', () => {
        nav_menu.classList.remove('open_menu')
    });


    const btn_search = document.querySelector('.btn_search');
    const over_search = document.querySelector('.over_search');
    const btn_close_search = document.querySelector('.btn_close_search');

    btn_search.addEventListener('click', () => {

        over_search.classList.add('open_search')

    });

    btn_close_search.addEventListener('click', () => {

        over_search.classList.remove('open_search')

    });

});