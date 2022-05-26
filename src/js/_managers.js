
export const initManagers = ()=> {

  const $leftLinks = document.querySelectorAll('.left-menu a'),
		$mapLinks = document.querySelectorAll('.managers__maps-svg a'),
    $tooltip = document.querySelector('.managers__tooltips');

  $leftLinks.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      let self = e.currentTarget;
      let selfClass = self.getAttribute('href');
      let color = self.dataset.color;
      let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
      let currentPolygon = currentElement.querySelectorAll('polygon');
      let currentPath = currentElement.querySelectorAll('path');
      if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
      if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
      self.classList.add('active');
    });
  });

  $mapLinks.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      let self = e.currentTarget;
      let color = self.dataset.color;
      let currentPolygon = self.querySelectorAll('polygon');
      let currentPath = self.querySelectorAll('path');
      if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
      if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
    });

    $mapLinks.forEach(continents => {
      continents.addEventListener('mousemove', function(e) {
        $tooltip.innerText = this.dataset.title;
        $tooltip.style.top = (e.y - 0) + 'px';
        $tooltip.style.left = (e.x - 400) + 'px';
        $tooltip.style.fontSize = '12'  + 'px';
      });

      continents.addEventListener('mouseenter', function() {
        $tooltip.style.display = 'block';
      });

      continents.addEventListener('mouseleave', function() {
        $tooltip.style.display = 'none';
      });
    });

    el.addEventListener('mouseleave', (e) => {
      let self = e.currentTarget;
      let currentPolygon = self.querySelectorAll('polygon');
      let currentPath = self.querySelectorAll('path');
      if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
      if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
    });
  });


  // baloons
  const baloons = document.querySelectorAll('.managers__baloons');
  const close = document.querySelectorAll('.managers__close-popup');

  baloons.forEach(elements => elements.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active')
    } else {
      baloons.forEach(el => {
        el.classList.remove('active')
      })
      this.classList.add('active')
    }
  }));





  let popupBg = document.querySelector('.managers__popup__bg'); // Фон попап окна
  let popup = document.querySelector('.managers__popup__bg-popup'); // Само окно
  let openPopupButtons = document.querySelectorAll('.open__popup-managers'); // Кнопки для показа окна
  let closePopupButton = document.querySelector('.managers__close-popup'); // Кнопка для скрытия окна



  openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
  });

  closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
  });

  document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
  });
}