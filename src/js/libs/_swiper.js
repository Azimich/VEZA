
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
}