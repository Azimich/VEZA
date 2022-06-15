import { popupOpen, popupClose, bodyLock, bodyUnlock } from './_helpers';

export const initPopup = () =>{
  const popupLinks = document.querySelectorAll('.popup-links');

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
        e.preventDefault();
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const currentPopup = document.getElementById(popupName);
        popupOpen(currentPopup);
        bodyLock()
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll('.close-popup');
    if (popupCloseIcon.length > 0) {
      for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
          e.preventDefault();
          popupClose(el.closest('.popup'));
          bodyUnlock()
        });
      }
    }
  }