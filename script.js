$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:false,
    animateOut: 'slideOutUp',
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

function b1(){
    window.location.replace("https://openlibrary.org/works/OL257943W/A_Game_of_Thrones");
}
function b2(){
    window.location.replace("https://openlibrary.org/works/OL483391W/Charlotte%27s_Web");
}

