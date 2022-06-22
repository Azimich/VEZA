
import Swiper, { Navigation, Pagination, EffectCards } from 'swiper';

export const initSwiper = () => {

  // banner slider
  let swiper1 = new Swiper ('.banner__slider', {
    modules: [Navigation, Pagination],
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    simulateTouch: true,
    loop:true,
  });

  
  // gallery slider
  const swiper2 = new Swiper ('.gallery__slider', {
    modules: [Navigation, Pagination, EffectCards],
    effect: 'cards',
    EffectCards: {
      rotate: true,
      slideShadows: false,
      transformEl: '.banner__slider-slide'
    },

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


  //swiper-popup
  const swiper3 = new Swiper(".vacancies__slider", {

    modules: [Navigation, Pagination, EffectCards],
    effect: 'cards',
    EffectCards: {
      rotate: true,
      slideShadows: false,
      transformEl: '.banner__slider-slide'
    },

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

  //swiper-popup
  const swiper4 = new Swiper(".history__slider", {

    modules: [Navigation, Pagination],
   
    slidesPerView: 3,
    spaceBetween: 150,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    loop: true,
    simulateTouch: true,
  });
}