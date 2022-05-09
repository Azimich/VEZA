
export const initSwiper = () => {

  // banner slider
  const swiperGallery = new Swiper('.banner__slider', {
    grabCursor: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },

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

  
  // gallery slider
  const swiper = new Swiper('.gallery__slider', {
    effect: "cards",
    grabCursor: true,

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
      rotate: -1,
      stretch: -60,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    grabCursor: true,
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



  // SLIDER__FANS__VRAN
  const swiperFan = new Swiper('.fans__vran__slider', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: -1,
      stretch: -48,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    grabCursor: true,
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
    //   1380: {
    //     coverflowEffect: {
    //       stretch: -48
    //     }
    //   }
    // }
  });

}