export const initLeaders = () => {

  const checkCommercial = document.querySelector('.check-commercial');
  const checkCommercialItem = document.querySelector('.leaders__active__container-1');

  const checkSocial = document.querySelector('.check-social');
  const checkSocialItem = document.querySelector('.leaders__active__container-2');

  const checkIndustrial = document.querySelector('.check-industrial');
  const checkIndustrialItem = document.querySelector('.leaders__active__container-3');


  if (checkCommercial) {
    checkCommercial.addEventListener('click', ()=> {
      checkCommercialItem.classList.toggle('active')
    })
  }

  if (checkSocial) {
    checkSocial.addEventListener('click', ()=> {
      checkSocialItem.classList.toggle('active')
    })
  }

  if (checkIndustrial) {
    checkIndustrial.addEventListener('click', ()=> {
      checkIndustrialItem.classList.toggle('active')
    })
  }


  document.querySelectorAll('.leaders__tabs-link').forEach((elem) => {
    elem.addEventListener('click', function(e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#','');
      document.querySelectorAll('.leaders__tabs-link').forEach(
        element => element.classList.remove('active')
      );
      document.querySelectorAll('.tab__cont').forEach(
        el => el.classList.add('hide')
      );
      elem.classList.add('active');
      document.getElementById(id).classList.remove('hide');
    });
  });


 
}


