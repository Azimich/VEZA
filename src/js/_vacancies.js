export const initialVacanceis = () => {

  const checkEnterprises = document.querySelectorAll('.check-enterprises');
  const checkBranches = document.querySelectorAll('.check-branches');
  const enterprises = document.querySelector('.enterprises');
  const branches = document.querySelector('.branches');

  checkEnterprises.forEach(elem => {
    elem.addEventListener('click', function(e) {
      enterprises.classList.toggle('active')
    });
  });

  checkBranches.forEach(el => {
    el.addEventListener('click', function(e) {
      branches.classList.toggle('active');
    });
  });

}


