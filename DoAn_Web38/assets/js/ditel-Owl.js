$(document).ready(function(){
    $('.slider-header').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
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
    })
  });


//   // Menu 

const menuHt = document.querySelector('.icon-moblie');
const menuMoblie = document.querySelector('.menu-moblie');
const menuAn = document.querySelector('.iconX');
const wrapperMenu = document.querySelector('.wrapper');
menuHt.addEventListener("click", () =>{
    menuMoblie.style.transform = "translateX(0)";
    
});
menuAn.addEventListener("click", () =>{
    menuMoblie.style.transform = "translateX(-200%)";
    
});
wrapperMenu.addEventListener("click", (event) =>{
    if(event.target.classList.contains('moblie') === false){
        menuMoblie.style.transform = "translateX(-200%)";
    }
});