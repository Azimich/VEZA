
import { initHeader } from './_header';
import { initAbout } from './_about';
import { initNews } from './_news';
import { initSwiper } from './_swiper';
import { initSlick } from './libs/slick';
import { initTabssizes } from './_tabssizes';
import { initMaps } from './_maps';
import { initAuthorization } from './_authorization';
import { initResources } from './_resources';
// import { initForms } from './_forms';
import { initPopup } from './_popup';


(function () {
  if (typeof NodeList !== 'undefined' && NodeList.prototype && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  try {
    initHeader();
    initAbout();
    initSwiper();
    initNews();
    initSlick();
    initTabssizes();
    initMaps();
    initAuthorization();
    initResources();
    // initForms();
    initPopup();

  } catch (err) {
    console.log(err);
  }
  
})();