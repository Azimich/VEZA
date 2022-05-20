export const initMaps = ()=> {

  let moskow = [55.750104, 37.787309];
  let chehov = [55.158164, 37.467500];
  let tver = [56.860167, 35.920233];
  let yaroslav = [57.637897, 39.857926];
  let veza = [57.012391, 40.987935];
  let vlad = [56.119945, 40.375706];




  function init() {
    let map = new ymaps.Map('map-test', {
      center: moskow,
      zoom: 5,
    });

    let placemark = new ymaps.Placemark(moskow, {
      balloonContent: `
      <div class="ballon">
        <div class="baloon__address">ВЕЗА МОСКВА</div>
        <p>Россия, Москва, Зелёный проспект, 20</p>
        <p class="baloon__address-call">Телефоны:</p>
        <div class="baloon__contacts">
          <a href="tel: +7 495 989-47-20">+7 495 989-47-20</a>
        </div>
        <p class="baloon__address-call">Электронная почта:</p>
        <div class="baloon__contacts">
          <a href="mailto:msk@veza.ru">msk@veza.ru</a>
        </div>
      </div>
      `,
      iconCaption: 'ВЕЗА Москва'
    }, {

      preset: 'islands#greenDotIconWithCaption'
    });

    let placemark1 = new ymaps.Placemark(chehov, {
      balloonContent: `
      <div class="ballon">
        <div class="baloon__address">ВЕЗА ЧЕХОВ</div>
        <p>Россия, Московская область, Чехов, улица Полиграфистов, 1с2 "Б" офис 204 (2 этаж)</p>
        <p class="baloon__address-call">Телефоны:</p>
        <div class="baloon__contacts">
          <a href="tel:+7(496) 727-70-71">+7(496) 727-70-71</a>
        </div>
        <p class="baloon__address-call">Электронная почта:</p>
        <div class="baloon__contacts">
          <a href="mailto:chehov@veza.ru">chehov@veza.ru</a>
        </div>
      </div>
      `,
      iconCaption: 'ВЕЗА Чехов'
    }, {
      preset: 'islands#greenDotIconWithCaption'
    });

    let placemark2 = new ymaps.Placemark(tver, {
      balloonContent: `
      <div class="ballon">
        <div class="baloon__address">ВЕЗА ТВЕРЬ</div>
        <p>Россия, Тверь, набережная Степана Разина, 20Б, оф. 27</p>
        <p class="baloon__address-call">Телефоны:</p>
        <div class="baloon__contacts">
          <a href="tel:+7-961-141-86-48">+7-961-141-86-48</a>
        </div>
        <p class="baloon__address-call">Электронная почта:</p>
        <div class="baloon__contacts">
          <a href="mailto:tver@veza.ru">tver@veza.ru</a>
        </div>
      </div>
      `,
      iconCaption: 'ВЕЗА Тверь'
    }, {
      preset: 'islands#greenDotIconWithCaption'
    });

    let placemark3 = new ymaps.Placemark(yaroslav, {
      balloonContent: `
      <div class="ballon">
        <div class="baloon__address">ВЕЗА ТВЕРЬ</div>
        <p>Россия, Ярославль, улица Чкалова, 2, офис 227</p>
        <p class="baloon__address-call">Телефоны:</p>
        <div class="baloon__contacts">
          <a href="tel:+7 (4852) 92-88-19">+7 (4852) 92-88-19</a>
        </div>
        <p class="baloon__address-call">Электронная почта:</p>
        <div class="baloon__contacts">
          <a href="mailto:vv@veza.ru">vv@veza.ru</a>
        </div>
      </div>
      `,
      iconCaption: 'ВЕЗА Ярославль'
    }, {
      preset: 'islands#greenDotIconWithCaption'
    });

    let placemark4 = new ymaps.Placemark(veza, {
      balloonContent: `
      <div class="ballon">
        <div class="baloon__address">ВЕЗА ВЕРХОВНОВОЛЖСКИЙ РЕГИОН</div>
        <p>Россия, Иваново, Шереметевский проспект, 94</p>
        <p class="baloon__address-call">Телефоны:</p>
        <div class="baloon__contacts">
          <a href="tel:+7 (4932) 34-32-87">+7 (4932) 34-32-87</a>
        </div>
        <p class="baloon__address-call">Электронная почта:</p>
        <div class="baloon__contacts">
          <a href="mailto:vv@veza.ru">vv@veza.ru</a>
        </div>
      </div>
      `,
      iconCaption: 'ВЕЗА Верхневолжский регион'
    }, {
      preset: 'islands#greenDotIconWithCaption'
    });

    let placemark5 = new ymaps.Placemark(vlad, {
      balloonContent: `
      <div class="ballon">
        <div class="baloon__address">ВЕЗА ВЛАДИМИР</div>
        <p>Россия, Владимир, проспект Ленина, 15А</p>
        <p class="baloon__address-call">Телефоны:</p>
        <div class="baloon__contacts">
          <a href="tel:+7(4922) 77-94-92">+7(4922) 77-94-92</a>
        </div>
        <p class="baloon__address-call">Электронная почта:</p>
        <div class="baloon__contacts">
          <a href="mailto:vv@veza.ru">vv@veza.ru</a>
        </div>
      </div>
      `,
      iconCaption: 'ВЕЗА Владимир'
    }, {
      preset: 'islands#greenDotIconWithCaption'
    });


    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил


    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
    map.geoObjects.add(placemark4);
    map.geoObjects.add(placemark5);

  }

  ymaps.ready(init);
}