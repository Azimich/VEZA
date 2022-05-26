
export const initHeader = () => {

  const navSlide = () => {
    const body = document.querySelector('body');
    const burger = document.querySelector('.header__mobile-menu');
    const nav = document.querySelector('.header__menu');
    const navLinks = document.querySelectorAll('.header__nav > li');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('toggle');
      body.classList.toggle('lock')
    });

    navLinks.forEach(link => link.addEventListener('click', () => closeMenu()));

    function closeMenu () {
      nav.classList.remove('active')
      burger.classList.remove('toggle')
      body.classList.remove('lock')
    }
  }
  
  navSlide ();
}