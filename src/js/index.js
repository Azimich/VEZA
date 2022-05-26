
import { initHeader } from './_header';
import { initAbout } from './_about';
import { initNews } from './_news';
import { initSwiper } from './_swiper';
import { initSlick } from './libs/slick';
import { initTabssizes } from './_tabssizes';
import { initCompany } from './_company';
import { initLeaders } from './_leaders';
import { initManagers } from './_managers';
import { initVacancies } from './_vacancies';
import { initAuthorization } from './_authorization';
import { initResources } from './_resources';
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
    initCompany();
    // initLeaders();
    initManagers();
    // initVacancies();
    initAuthorization();
    initResources();
    initPopup();

  } catch (err) {
    console.log(err);
  }
  
})();