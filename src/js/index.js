
import { initHeader } from './_header';
import { initAbout } from './_about';
import { initNews } from './_news';
import { initSwiper } from './libs/_swiper';
import { initSlick } from './libs/slick';
import { initTabssizes } from './_tabssizes';
import { initAuthorization } from './_authorization';
import { initResources } from './_resources';
import { initPopup } from './_popup';
import { initForms } from './_forms';
import { initHistory } from './_history';
import { initialVacanceis } from './_vacancies';
import { initManagers } from './_managers';


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
    initAuthorization();
    initResources();
    initPopup();
    initForms();
    initHistory();
    initialVacanceis();
    initManagers();

  } catch (err) {
    console.log(err);
  }
  
})();