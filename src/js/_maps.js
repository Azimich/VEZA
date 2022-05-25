export const initMaps = ()=> {

  const $leftLinks = document.querySelectorAll('.left-menu a'),
		$mapLinks = document.querySelectorAll('.map a'),
    $tooltip = document.querySelector('.managers__maps-tooltip');

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
        $tooltip.style.top = (e.y + 250) + 'px';
        $tooltip.style.left = (e.x + 30) + 'px';
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
  const $baloons = document.querySelectorAll('.baloons');
  const $closePopup = document.querySelectorAll('.managers__popup-close')

  $baloons.forEach(elem =>{
    elem.addEventListener('click', function() {
      elem.classList.toggle('active');
    });
  });

  // $closePopup.forEach(el => el.addEventListener('click', ()=> closePopup()));

  // function closePopup() {
  //   $baloons.classList.remove('active');
  // }

  $closePopup.addEventListener('click', ()=> {
    $baloons.classList.remove('active');
  });

}