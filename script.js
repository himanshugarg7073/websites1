let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

mentBtn.onclick = () =>{
	mentBtn.classList.toggle('fi-times');
	navbar.classList.toggle('active')
}



  // var swiper = new Swiper(".course-slider", {
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },
  //   });




var swiper = new Swiper(".course-slider", {
	spaceBetween: 20,
	grabCursor:true,
  loop: true,
    pagination: {
        el: ".swiper-pagination",
       clickable: true,
      },
      breakpoints: {
      	540: {
      		slidesPerView: 1,
      	},
      	768:{
      	slidesPerView: 2,	
      	},
      	1024:{
      		slidesPerView: 3,
      	},
      },
    });






var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop: true,
    pagination: {
        el: ".swiper-pagination",
       clickable: true,
      },
      breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768:{
        slidesPerView: 2, 
        },
        1024:{
          slidesPerView: 3,
        },
      },
    });