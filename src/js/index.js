
import { initHeader } from './_header';
import { initAbout } from './_about';
import { initSwiper } from './_swiper';
import { initEquipmentpage } from './_equipmentpage';
import { initTabssizes } from './_tabssizes';
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
    initEquipmentpage();
    initTabssizes();
    initAuthorization();
    initResources();
    // initForms();
    initPopup();

  } catch (err) {
    console.log(err);
  }
  
})();