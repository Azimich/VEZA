import $ from 'jquery';
import 'slick-carousel/slick/slick';

const teamSlider = $('.team__members-wrapper.slick'), 
  vacanciesSlide = $('.vacancies__images-row'),
      stuffSlide = $('.about__cooperation-items-box.slick');

export const initSlick = () => {

  /* Слайдер раздела "Наша Команда" */
  
  
    $(document).ready(function(){
      teamSlider.slick({
        centerMode: true,
        centerPadding: '-20px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        arrows: false,
        pauseOnHover:false,
        infinite: true,

        responsive: [
          {
            breakpoint: 5000,
              settings: 'unslick',
              settings: 'refresh',
          },
          {
            breakpoint: 1320,
              settings: {
                settings: 'refresh',
                settings: 'slick',
                slidesToShow: 3,
                mobileFirst:true,
              }
          },
          {
            breakpoint: 769,
              settings: {
                settings: 'refresh',
                arrows: true,
              }
          },
          {
            breakpoint: 767,
              settings: {
                settings: 'refresh',
                slidesToShow: 1,
                arrows: true,
                centerPadding: '-70px',
              }
          }
        ]
      });

      vacanciesSlide.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        arrows: false,
        pauseOnHover:false,
        infinite: true,
        mobileFirst:true,

        responsive: [
          {
            breakpoint: 769,
              settings: {
                arrows: false,
              }
          },
          {
            breakpoint: 414,
              settings: {
                slidesToShow: 2,
                arrows: false,
              }
          },
          {
            breakpoint: 319,
              settings: {
                slidesToShow: 1,
                arrows: true,
              }
          },
        ]
      })

      stuffSlide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        pauseOnHover:false,
        infinite: true,
        vertical: true,
        verticalSwiping:true,

        responsive: [
          {
            breakpoint: 600,
              settings: {
                settings: 'slick',
                mobileFirst:true,
              }
          }
        ]
      })
    });
};