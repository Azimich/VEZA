import $ from 'jquery';
import { Fancybox } from "@fancyapps/ui";
import 'slick-carousel/slick/slick';

const teamSlider = $('.slider__click');
const historySlider = $('.history__slick-wrapper')


export const initSlick = () => {

  Fancybox.bind('[data-fancybox="single"]', {
    groupAttr: false,
  });

  $(document).ready(function(){
    teamSlider.slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  });

  $(document).ready(function() {
    historySlider.slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    })
  })
};