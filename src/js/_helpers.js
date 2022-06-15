let unlock = true;
const timeout = 700;
const body = document.querySelector('body')

export function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    body.classList.add('lock')

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
  const lockPadding = document.querySelector('body');
  const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

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

export function bodyUnlock() {
  document.querySelector('body').style.paddingRight = '0px';
  body.classList.remove('lock');
  unlock: false;
  setTimeout(function () {
    unlock: true;
  }, timeout);
}
