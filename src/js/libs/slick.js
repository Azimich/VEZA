import $ from 'jquery';
import { Fancybox } from "@fancyapps/ui";
import 'slick-carousel/slick/slick';

const teamSlider = $('.slider__click');

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
};