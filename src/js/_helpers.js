let unlock = true;
const timeout = 800;

export function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');

    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }

    currentPopup.classList.add('open');

    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__body')) {
        popupClose(currentPopup);
      }
    });
  }
}

export function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');

    if (doUnlock) {
      bodyUnlock();
    }
  }
}

export function bodyLock() {
  const lockPadding = document.querySelectorAll('lock');
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
      document.body.classList.add('lock');

      unlock: false;
      setTimeout(function () {
        unlock: true;
      }, timeout);
    }
  }
}

export function bodyUnlock() {

  document.body.style.paddingRight = '0px';
  document.body.classList.remove('lock');
  unlock: false;
  setTimeout(function () {
    unlock: true;
  }, timeout);
}
