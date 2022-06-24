import $ from 'jquery';
import { Fancybox } from "@fancyapps/ui";
import 'slick-carousel/slick/slick';

const teamSlider = $('.slider__click');
const historySlider = $('.history__slick-items')


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

  // $(document).ready(function() {
  //   historySlider.slick({
  //     centerMode: true,
  //     centerPadding: '60px',
  //     slidesToShow: 4,
  //     autoplay: true,
  //     autoplaySpeed: 800,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           centerMode: true,
  //           centerPadding: '40px',
  //           slidesToShow: 3
  //         }
  //       },
  //       {
  //         breakpoint: 580,
  //         settings: {
  //           centerMode: true,
  //           centerPadding: '40px',
  //           slidesToShow: 1
  //         }
  //       }
  //     ]
  //   })
  // })
};