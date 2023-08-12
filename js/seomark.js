function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");

};

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:["<span class='fa fa-long-arrow-left'>","<span class='fa fa-long-arrow-right'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
