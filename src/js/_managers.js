
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
        $tooltip.style.left = (e.x - 10) + 'px';
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



  // Яндекс Карта
  function init() {
    let map = new ymaps.Map('map1', {center: [55.750104, 37.787309], zoom: 10,});
    let moskow = new ymaps.Placemark([55.750104, 37.787309], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map.geoObjects.add(moskow);
    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('rulerControl');

    let map2 = new ymaps.Map('map2', {center: [53.211778, 34.435740], zoom: 10,});
    let bryansk = new ymaps.Placemark([53.211778, 34.435740], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map2.geoObjects.add(bryansk);
    map2.controls.remove('geolocationControl');
    map2.controls.remove('searchControl');
    map2.controls.remove('trafficControl');
    map2.controls.remove('rulerControl');

    let map3 = new ymaps.Map('map3', {center: [50.581369, 36.636127], zoom: 10,});
    let belg = new ymaps.Placemark([50.581369, 36.636127], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map3.geoObjects.add(belg);
    map3.controls.remove('geolocationControl');
    map3.controls.remove('searchControl');
    map3.controls.remove('trafficControl');
    map3.controls.remove('rulerControl');

    let map4 = new ymaps.Map('map4', {center: [51.662965, 39.184297], zoom: 10,});
    let voronezh = new ymaps.Placemark([51.662965, 39.184297], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map4.geoObjects.add(voronezh);
    map4.controls.remove('geolocationControl');
    map4.controls.remove('searchControl');
    map4.controls.remove('trafficControl');
    map4.controls.remove('rulerControl');

    let map5 = new ymaps.Map('map5', {center: [47.272458, 39.677652], zoom: 10,});
    let rostov = new ymaps.Placemark([47.272458, 39.677652], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map5.geoObjects.add(rostov);
    map5.controls.remove('geolocationControl');
    map5.controls.remove('searchControl');
    map5.controls.remove('trafficControl');
    map5.controls.remove('rulerControl');

    let map6 = new ymaps.Map('map6', {center: [45.033203, 39.047915], zoom: 10,});
    let kras = new ymaps.Placemark([45.033203, 39.047915], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map6.geoObjects.add(kras);
    map6.controls.remove('geolocationControl');
    map6.controls.remove('searchControl');
    map6.controls.remove('trafficControl');
    map6.controls.remove('rulerControl');

    let map7 = new ymaps.Map('map7', {center: [48.743333, 44.549413], zoom: 10,});
    let volog = new ymaps.Placemark([48.743333, 44.549413], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map7.geoObjects.add(volog);
    map7.controls.remove('geolocationControl');
    map7.controls.remove('searchControl');
    map7.controls.remove('trafficControl');
    map7.controls.remove('rulerControl'); 

    let map8 = new ymaps.Map('map8', {center: [51.524816, 46.000687], zoom: 10,});
    let saratov = new ymaps.Placemark([51.524816, 46.000687], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map8.geoObjects.add(saratov);
    map8.controls.remove('geolocationControl');
    map8.controls.remove('searchControl');
    map8.controls.remove('trafficControl');
    map8.controls.remove('rulerControl'); 

    let map10 = new ymaps.Map('map10', {center: [53.187467, 45.014920], zoom: 10,});
    let penza = new ymaps.Placemark([53.187467, 45.014920], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map10.geoObjects.add(penza);
    map10.controls.remove('geolocationControl');
    map10.controls.remove('searchControl');
    map10.controls.remove('trafficControl');
    map10.controls.remove('rulerControl'); 

    let map11 = new ymaps.Map('map11', {center: [59.934844, 30.456059], zoom: 10,});
    let piter = new ymaps.Placemark([59.934844, 30.456059], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map11.geoObjects.add(piter);
    map11.controls.remove('geolocationControl');
    map11.controls.remove('searchControl');
    map11.controls.remove('trafficControl');
    map11.controls.remove('rulerControl'); 

    let map12 = new ymaps.Map('map12', {center: [53.193893, 50.170388], zoom: 10,});
    let samara = new ymaps.Placemark([53.193893, 50.170388], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map12.geoObjects.add(samara);
    map12.controls.remove('geolocationControl');
    map12.controls.remove('searchControl');
    map12.controls.remove('trafficControl');
    map12.controls.remove('rulerControl'); 

    let map13 = new ymaps.Map('map13', {center: [55.780051, 49.129815], zoom: 10,});
    let kazan = new ymaps.Placemark([55.780051, 49.129815], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map13.geoObjects.add(kazan);
    map13.controls.remove('geolocationControl');
    map13.controls.remove('searchControl');
    map13.controls.remove('trafficControl');
    map13.controls.remove('rulerControl');

    let map14 = new ymaps.Map('map14', {center: [56.143388, 47.250090], zoom: 10,});
    let chebok = new ymaps.Placemark([56.143388, 47.250090], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map14.geoObjects.add(chebok);
    map14.controls.remove('geolocationControl');
    map14.controls.remove('searchControl');
    map14.controls.remove('trafficControl');
    map14.controls.remove('rulerControl');

    let map15 = new ymaps.Map('map15', {center: [56.305759, 44.068922], zoom: 10,});
    let nizhny = new ymaps.Placemark([56.305759, 44.068922], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map15.geoObjects.add(nizhny);
    map15.controls.remove('geolocationControl');
    map15.controls.remove('searchControl');
    map15.controls.remove('trafficControl');
    map15.controls.remove('rulerControl');

    let map16 = new ymaps.Map('map16', {center: [58.596543, 49.686223], zoom: 10,});
    let kirov = new ymaps.Placemark([58.596543, 49.686223], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map16.geoObjects.add(kirov);
    map16.controls.remove('geolocationControl');
    map16.controls.remove('searchControl');
    map16.controls.remove('trafficControl');
    map16.controls.remove('rulerControl');

    let map18 = new ymaps.Map('map18', {center: [56.119945, 40.375706], zoom: 10,});
    let vlad = new ymaps.Placemark([56.119945, 40.375706], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map18.geoObjects.add(vlad);
    map18.controls.remove('geolocationControl');
    map18.controls.remove('searchControl');
    map18.controls.remove('trafficControl');
    map18.controls.remove('rulerControl');

    let map19 = new ymaps.Map('map19', {center: [57.007372, 40.972115], zoom: 10,});
    let ivanovo = new ymaps.Placemark([57.007372, 40.972115], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map19.geoObjects.add(ivanovo);
    map19.controls.remove('geolocationControl');
    map19.controls.remove('searchControl');
    map19.controls.remove('trafficControl');
    map19.controls.remove('rulerControl');

    let map20 = new ymaps.Map('map20', {center: [57.637593, 39.833869], zoom: 10,});
    let yaro = new ymaps.Placemark([57.637593, 39.833869], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map20.geoObjects.add(yaro);
    map20.controls.remove('geolocationControl');
    map20.controls.remove('searchControl');
    map20.controls.remove('trafficControl');
    map20.controls.remove('rulerControl');

    let map21 = new ymaps.Map('map21', {center: [56.860167, 35.920233], zoom: 10,});
    let tver = new ymaps.Placemark([56.860167, 35.920233], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map21.geoObjects.add(tver);
    map21.controls.remove('geolocationControl');
    map21.controls.remove('searchControl');
    map21.controls.remove('trafficControl');
    map21.controls.remove('rulerControl');

    let map22 = new ymaps.Map('map22', {center: [58.013969, 56.254075], zoom: 10,});
    let perm = new ymaps.Placemark([58.013969, 56.254075], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map22.geoObjects.add(perm);
    map22.controls.remove('geolocationControl');
    map22.controls.remove('searchControl');
    map22.controls.remove('trafficControl');
    map22.controls.remove('rulerControl');

    let map23 = new ymaps.Map('map23', {center: [54.780153, 56.072265], zoom: 10,});
    let ufa = new ymaps.Placemark([54.780153, 56.072265], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map23.geoObjects.add(ufa);
    map23.controls.remove('geolocationControl');
    map23.controls.remove('searchControl');
    map23.controls.remove('trafficControl');
    map23.controls.remove('rulerControl');

    let map24 = new ymaps.Map('map24', {center: [56.826754, 60.616186], zoom: 10,});
    let ekat = new ymaps.Placemark([56.826754, 60.616186], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map24.geoObjects.add(ekat);
    map24.controls.remove('geolocationControl');
    map24.controls.remove('searchControl');
    map24.controls.remove('trafficControl');
    map24.controls.remove('rulerControl');

    let map25 = new ymaps.Map('map25', {center: [57.132328, 65.602699], zoom: 10,});
    let tumen = new ymaps.Placemark([57.132328, 65.602699], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map25.geoObjects.add(tumen);
    map25.controls.remove('geolocationControl');
    map25.controls.remove('searchControl');
    map25.controls.remove('trafficControl');
    map25.controls.remove('rulerControl');

    let map26 = new ymaps.Map('map26', {center: [55.081514, 60.102251], zoom: 10,});
    let chel = new ymaps.Placemark([55.081514, 60.102251], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map26.geoObjects.add(chel);
    map26.controls.remove('geolocationControl');
    map26.controls.remove('searchControl');
    map26.controls.remove('trafficControl');
    map26.controls.remove('rulerControl');

    let map27 = new ymaps.Map('map27', {center: [54.987813, 73.376836], zoom: 10,});
    let omsk = new ymaps.Placemark([54.987813, 73.376836], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map27.geoObjects.add(omsk);
    map27.controls.remove('geolocationControl');
    map27.controls.remove('searchControl');
    map27.controls.remove('trafficControl');
    map27.controls.remove('rulerControl');

    let map28 = new ymaps.Map('map28', {center: [55.031365, 82.914195], zoom: 10,});
    let novos = new ymaps.Placemark([55.031365, 82.914195], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map28.geoObjects.add(novos);
    map28.controls.remove('geolocationControl');
    map28.controls.remove('searchControl');
    map28.controls.remove('trafficControl');
    map28.controls.remove('rulerControl');

    let map30 = new ymaps.Map('map30', {center: [56.019229, 92.797074], zoom: 10,});
    let krasnoya = new ymaps.Placemark([56.019229, 92.797074], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map30.geoObjects.add(krasnoya);
    map30.controls.remove('geolocationControl');
    map30.controls.remove('searchControl');
    map30.controls.remove('trafficControl');
    map30.controls.remove('rulerControl');

    let map31 = new ymaps.Map('map31', {center: [48.481065, 135.073363], zoom: 10,});
    let habar = new ymaps.Placemark([48.481065, 135.073363], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map31.geoObjects.add(habar);
    map31.controls.remove('geolocationControl');
    map31.controls.remove('searchControl');
    map31.controls.remove('trafficControl');
    map31.controls.remove('rulerControl');

    let map32 = new ymaps.Map('map32', {center: [43.170331, 131.917977], zoom: 10,});
    let vladi = new ymaps.Placemark([43.170331, 131.917977], {}, {balloonPane: 'outerBalloon', preset: 'islands#greenDotIcon'});
    map32.geoObjects.add(vladi);
    map32.controls.remove('geolocationControl');
    map32.controls.remove('searchControl');
    map32.controls.remove('trafficControl');
    map32.controls.remove('rulerControl');
  }

  ymaps.ready(init);
}