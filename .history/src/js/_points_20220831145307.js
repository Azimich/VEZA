

export const initialPoints = () => {
  // const pointsCategoryLink = document.querySelectorAll('.points__category-link');
  // const pointsTabsItems = document.querySelectorAll('.points__tabs-items');

  // if (pointsCategoryLink, pointsTabsItems) {
  //   pointsCategoryLink.forEach((elem) => {
  //     elem.addEventListener("click", function(e) {
        
  //       const id = e.target.getAttribute('href').replace('#','');
  //       pointsCategoryLink.forEach((element) => element.classList.remove("active"));
  
  //       pointsTabsItems.forEach((el) => el.classList.add("hide"));
  //       elem.classList.add("active");
  //       document.getElementById(id).classList.remove("hide");
  //     });
  //   });
  // }

  const jsTriggers = document.querySelectorAll('.js-tab-trigger');
  const jsContents = document.querySelectorAll('.js-tab-content');

  jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      const id = this.getAttribute('data-tab'),
        content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');
      
      activeTrigger.classList.remove('active');
      trigger.classList.add('active');
      
      activeContent.classList.remove('active');
      content.classList.add('active');
   });
  });
}