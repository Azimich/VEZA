export const initVacancies = ()=> {
  
  const $mapLinks = document.querySelectorAll('.vacancies__map a'), 
        $tooltip = document.querySelector('.vacancies__maps-tooltip');

  $mapLinks.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      let self = e.currentTarget;
      let color = self.dataset.color;
      let currentPolygon = self.querySelectorAll('polygon');
      let currentPath = self.querySelectorAll('path');
      if (currentPolygon) currentPolygon.forEach(el =>
         el.style.cssText = `fill: ${color}; stroke-width: 2px; transition: all .5s;`);
      if (currentPath) currentPath.forEach(el => 
        el.style.cssText = `fill: ${color}; stroke-width: 2px; transition: all .5s;`);
    });

    $mapLinks.forEach(continents => {
      continents.addEventListener('mousemove', function(e) {
        $tooltip.innerText = this.dataset.title;
        $tooltip.style.top = (e.y - 220) + 'px';
        $tooltip.style.left = (e.x - 400) + 'px';
        $tooltip.style.fontSize = '12'  + 'px';
      });

      continents.addEventListener('mouseenter', function() {$tooltip.style.display = 'block';});
      continents.addEventListener('mouseleave', function() {$tooltip.style.display = 'none';});
    });

    el.addEventListener('mouseleave', (e) => {
      let self = e.currentTarget;
      let currentPolygon = self.querySelectorAll('polygon');
      let currentPath = self.querySelectorAll('path');
      if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
      if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
    });
  });


  // Поиск
  // const region = document.querySelector('#city')
  // const vacancy = document.querySelector("#position")
  // const vacancies = document.querySelectorAll(".vacancies__vacancies__vacancy-title")
  // const cities = document.querySelectorAll(".vacancies__vacancies__vacancy-subtitle > span") 
  // const searchBtn = document.querySelector(".vacancies__vacancies__search-button")

  // searchBtn.addEventListener('click', () => {

  //   console.log(region.value.toLowerCase(), vacancy.value);

  //     if (region.value && vacancy.value){
  //       let vacance = null
  //       for(let i = 0; i < vacancies.length; i++){
  //         vacance = vacancies[i]
  //       }
  //       cities.forEach(city => {
  //         if (city.innerText.toLowerCase().search(region.value.trim().toLowerCase()) == -1 && vacance.innerText.search(vacancy.value.trim().toLowerCase()) == -1) {
  //           document.querySelectorAll('.vacancies__vacancies__vacancy-item').forEach(item => {
  //             (item.dataset.title === region.value.toLowerCase()) ? item.classList.remove("return") : item.classList.add('return')
              
  //           })

  //           console.log(33);
            
  //         }
  //       })
  //     }else {
  //       console.log("yttddhg");
  //     }
  //   }
  // );
  
  // function gg() {
  //   let val = this.value.trim();
  //   let vacan = document.querySelectorAll('.vacancies__vacancies__vacancy-item');
  //   if (val != '') {
  //     vacan.forEach(function(elem) {
  //       if (elem.innerText.toLowerCase().search(val.toLowerCase()) == -1) {
  //         elem.classList.add('return');
  //       }
  //       else {
  //         elem.classList.remove('return')
  //       }
  //     });
  //   }
  //   else {
  //     vacan.forEach(function(element) {
  //       element.classList.remove('return')
  //     });
  //   }
  // }
  

}