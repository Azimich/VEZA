
export const initSwiper = () => {
  

  const swiper = new Swiper('.gallery__slider', {

    effect: "cards",
    grabCursor: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',

      clickable: true,
      dynamicBullets: true,
    },

    simulateTouch: true,
    loop:true,
  });

  //sliderIndustry
  const swiperIndustry = new Swiper('.slider__industry', {

    effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
    grabCursor: true,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',

      clickable: true,
      dynamicBullets: true,
    },

    simulateTouch: true,
    loop: true,
  });


  //SLIDER__FANS__VRAN
  const swiperFan = new Swiper('.fans__vran__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },      
    grabCursor: true,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',

      clickable: true,
      dynamicBullets: true,
    },

    simulateTouch: true,
    loop: true,

    // breakpoints: {
    //   450: {
    //     slidesPerView: 2,
    //     spaceBetween: 30
    //   }
    // },
  });

}