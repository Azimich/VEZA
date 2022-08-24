
export const initFansVran = () => {

  const fansVranAccordion = document.querySelector('.fans__vran__button');
  const fansVranTable = document.querySelector('.fans__vran__table-container');

  if (fansVranAccordion) {
    fansVranAccordion.addEventListener('click', ()=> {
      fansVranTable.classList.toggle('active')
    });
  }
}