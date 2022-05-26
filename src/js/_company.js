export const initCompany = ()=> {

  const $leftLinks = document.querySelectorAll('.left-menu a'),
		$mapLinks = document.querySelectorAll('.map a'),
    $tooltip = document.querySelector('.company__maps-tooltip');

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
  const $baloons = document.querySelectorAll('.baloons');
  const nodeList = [$baloons];
  nodeList.map(node => clickHandler(node));

  function clickHandler (nodeList = []) {
    nodeList.forEach(link => link.addEventListener("click", function() {
      if(this.classList.contains("active")) {
        this.classList.remove("active")
        this.parentNode.nextElementSibling.classList.remove("active") 
      } else {
        nodeList.forEach(item => {
          item.classList.remove("active")
        });
        this.classList.add("active")
      }
    }));
  }

}