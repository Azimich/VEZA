
export const initHeader = () => {

  const navSlide = () => {
    const body = document.querySelector('body');
    const burger = document.querySelector('.header__mobile-menu');
    const nav = document.querySelector('.header__menu');
    const navLinks = document.querySelectorAll('.header__nav > li');
    
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('toggle');
      body.classList.add('lock')
    });

    burger.addEventListener('click', ()=> {
      body.classList.remove('lock')
    })

    navLinks.forEach(link => link.addEventListener('click', () => closeMenu()));
    function closeMenu () {
      nav.classList.remove('active')
      burger.classList.remove('toggle')
      body.classList.remove('lock')
    }
  }
  
  navSlide ();


  const pushIcon = document.querySelector('.push-icons');
  const pushBlock = document.querySelector('.header__push-container');
  const userIcon = document.querySelector('.user-icon');
  const userBlock = document.querySelector('.header__profile-container');
  
  if(pushIcon, pushBlock, userBlock) {
    pushIcon.addEventListener('click', () => {
      pushBlock.classList.toggle('active')
      userBlock.classList.remove('active')
    });
  }

  if(userIcon, userBlock, pushBlock) {
    userIcon.addEventListener('click', () => {
      userBlock.classList.toggle('active')
      pushBlock.classList.remove('active')
    });
  }
}