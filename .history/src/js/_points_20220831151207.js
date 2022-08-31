

export const initialPoints = () => {
  const pointsCategoryLink = document.querySelectorAll('.points__category-link');
  const pointsTabsItems = document.querySelectorAll('.points__tabs-items');

  pointsCategoryLink.forEach(function(e) {
    e.addEventListener('click', function() {
      const id = this.getAttribute('data-tab');
      const content = document.querySelector('.points__tabs-items[data-tab="'+id+'"]');
      const activeTab = document.querySelector('.points__category-link.active');
      const activeContent = document.querySelector('.points__tabs-items.active');

      activeTab.classList.remove('active');
      e.classList.add('active');

      activeContent.classList.remove('active');
      content.classList.add('active');
    });
  });

  // const jsTriggers = document.querySelectorAll('.js-tab-trigger');
  // const jsContents = document.querySelectorAll('.js-tab-content');

  // jsTriggers.forEach(function(trigger) {
  //  trigger.addEventListener('click', function() {
  //     const id = this.getAttribute('data-tab'),
  //       content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
  //       activeTrigger = document.querySelector('.js-tab-trigger.active'),
  //       activeContent = document.querySelector('.js-tab-content.active');
      
  //     activeTrigger.classList.remove('active');
  //     trigger.classList.add('active');
      
  //     activeContent.classList.remove('active');
  //     content.classList.add('active');
  //  });
  // });
}