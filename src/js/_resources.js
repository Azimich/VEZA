export const initResources = () => {

  document.querySelectorAll('.resources__nav__menu-item-link').forEach((elem) => {
      elem.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#','');
        document.querySelectorAll('.resources__nav__menu-item-link').forEach(
          (element) => element.classList.remove('active')
        );
        document.querySelectorAll('.tab__cont').forEach(
          (el) => el.classList.add('hide')
        );
        elem.classList.add('active');
        document.getElementById(id).classList.remove('hide');
      });
  });
  

  // Accordions
  const accordionTitle = document.querySelectorAll(".resources__faq__accordion-title");

  accordionTitle.forEach((item) => item.addEventListener('click', () => {
    const parent = item.parentNode;
    parent.classList.toggle('active')
  }))

}