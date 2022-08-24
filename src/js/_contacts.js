
export const initContacts = ()=> {

  //Табы
  document.querySelectorAll('.information__managers__tabs-link').forEach((elem) => {
    elem.addEventListener('click', function(e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#','');
      document.querySelectorAll('.information__managers__tabs-link').forEach(
        element => element.classList.remove('active')
      );
      document.querySelectorAll('.tab__cont').forEach(
        el => el.classList.add('hide')
      );
      elem.classList.add('active');
      document.getElementById(id).classList.remove('hide');
    });
  });


  //Добавление класса при наедении 
  const severZapad = document.querySelector('.severo__zapadniy-okrug');
  const baloon11 = document.querySelector('.information__baloon-11');

  if (severZapad) {
    severZapad.addEventListener('mouseenter', function() {
      if (baloon11) {
        baloon11.classList.add('active')
      }
    })

    severZapad.addEventListener('mouseleave', function() {

      if (baloon11) {
        baloon11.classList.remove('active')
      }
    })
  }

  const sibir = document.querySelector('.sybirskiy__federalniy-okrug');
  const baloon19 = document.querySelector('.information__baloon-19');

  if (sibir) {
    sibir.addEventListener('mouseenter', function() {
      if (baloon19) {
        baloon19.classList.add('active')
      }
    })

    sibir.addEventListener('mouseleave', function() {
      if (baloon19) {
        baloon19.classList.remove('active')
      }
    })
  }

  const rostov = document.querySelector('.rostov');
  const baloon5 = document.querySelector('.information__baloon-5');

  if (rostov) {
    rostov.addEventListener('mouseenter', function() {
      if (baloon5) {
        baloon5.classList.add('active')
      }
    })

    rostov.addEventListener('mouseleave', function() {
      if (baloon5) {
        baloon5.classList.remove('active')
      }
    })
  }

  const krasnodar = document.querySelector('.krasnodar');
  const baloon6 = document.querySelector('.information__baloon-6');

  if (krasnodar) {
    krasnodar.addEventListener('mouseenter', function() {
      if (baloon6) {
        baloon6.classList.add('active')
      }
    })

    krasnodar.addEventListener('mouseleave', function() {
      if (baloon6) {
        baloon6.classList.remove('active')
      }
    })
  }

  const vostok = document.querySelector('.dalniy__vostok');
  const baloon32 = document.querySelector('.information__baloon-32');

  if (vostok) {
    vostok.addEventListener('mouseenter', function() {
       if (baloon32) {
        baloon32.classList.add('active')
      }
    })

    vostok.addEventListener('mouseleave', function() {
      if (baloon32) {
        baloon32.classList.remove('active')
      }
    })
  }

  const krasnoyarsk = document.querySelector('.krasnoyarsk');
  const baloon30 = document.querySelector('.information__baloon-30');

  if (krasnoyarsk) {
    krasnoyarsk.addEventListener('mouseenter', function() {
       if (baloon30) {
        baloon30.classList.add('active')
      }
    })

    krasnoyarsk.addEventListener('mouseleave', function() {
      if (baloon30) {
        baloon30.classList.remove('active')
      }
    })
  }

  const tver = document.querySelector('.tver');
  const baloon21 = document.querySelector('.information__baloon-21');

  if (tver) {
    tver.addEventListener('mouseenter', function() {
       if (baloon21) {
        baloon21.classList.add('active')
      }
    })

    tver.addEventListener('mouseleave', function() {
      if (baloon21) {
        baloon21.classList.remove('active')
      }
    })
  }

  const ivanovo = document.querySelector('.ivanovo');
  const baloon15 = document.querySelector('.information__baloon-15');

  if (ivanovo) {
    ivanovo.addEventListener('mouseenter', function() {
       if (baloon15) {
        baloon15.classList.add('active')
      }
    })

    ivanovo.addEventListener('mouseleave', function() {
      if (baloon15) {
        baloon15.classList.remove('active')
      }
    })
  }

  const belorus = document.querySelector('.belorus');
  const baloon17 = document.querySelector('.information__baloon-17');

  if (belorus) {
    belorus.addEventListener('mouseenter', function() {
       if (baloon17) {
        baloon17.classList.add('active')
      }
    })

    belorus.addEventListener('mouseleave', function() {
      if (baloon17) {
        baloon17.classList.remove('active')
      }
    })
  }

  const tumen = document.querySelector('.tumen');
  const baloon25 = document.querySelector('.information__baloon-25');

  if (tumen) {
    tumen.addEventListener('mouseenter', function() {
       if (baloon25) {
        baloon25.classList.add('active')
      }
    })

    tumen.addEventListener('mouseleave', function() {
      if (baloon25) {
        baloon25.classList.remove('active')
      }
    })
  }

  const chehov = document.querySelector('.chehov');
  const baloon16 = document.querySelector('.information__baloon-16');

  if (chehov) {
    chehov.addEventListener('mouseenter', function() {
      if (baloon16) {
        baloon16.classList.add('active')
      }
    })

    chehov.addEventListener('mouseleave', function() {
      if (baloon16) {
        baloon16.classList.remove('active')
      }
    })
  }

  const bryansk = document.querySelector('.bryansk');
  const baloon2 = document.querySelector('.information__baloon-2');

  if (bryansk) {
    bryansk.addEventListener('mouseenter', function() {
      if (baloon2) {
        baloon2.classList.add('active')
      }
    })

    bryansk.addEventListener('mouseleave', function() {
      if (baloon2) {
        baloon2.classList.remove('active')
      }
    })
  }

  const belgorod = document.querySelector('.belgorod');
  const baloon3 = document.querySelector('.information__baloon-3');

  if (belgorod) {
    belgorod.addEventListener('mouseenter', function() {
      if (baloon3) {
        baloon3.classList.add('active')
      }
    })

    belgorod.addEventListener('mouseleave', function() {
      if (baloon3) {
        baloon3.classList.remove('active')
      }
    })
  }

  const volgograd = document.querySelector('.volgograd');
  const baloon7 = document.querySelector('.information__baloon-7');

  if (volgograd) {
    volgograd.addEventListener('mouseenter', function() {
      if (baloon7) {
        baloon7.classList.add('active')
      }
    })

    volgograd.addEventListener('mouseleave', function() {
      if (baloon7) {
        baloon7.classList.remove('active')
      }
    })
  }

  const cheboksari = document.querySelector('.cheboksari');
  const baloon14 = document.querySelector('.information__baloon-14');

  if (cheboksari) {
    cheboksari.addEventListener('mouseenter', function() {
      if (baloon14) {
        baloon14.classList.add('active')
      }
    })

    cheboksari.addEventListener('mouseleave', function() {
      if (baloon14) {
        baloon14.classList.remove('active')
      }
    })
  }

  const kurganskayaOblast = document.querySelector('.kurganskaya__oblast');
  const baloon26 = document.querySelector('.information__baloon-26');

  if (kurganskayaOblast) {
    kurganskayaOblast.addEventListener('mouseenter', function() {
      if (baloon25) {
        baloon25.classList.add('active')
      }
    })

    kurganskayaOblast.addEventListener('mouseleave', function() {
      if (baloon26) {
        baloon26.classList.remove('active')
      }
    })
  }

  const saratov = document.querySelector('.saratov');
  const baloon8 = document.querySelector('.information__baloon-8');

  if (saratov) {
    saratov.addEventListener('mouseenter', function() {
      if (baloon8) {
        baloon8.classList.add('active')
      }
    })

    saratov.addEventListener('mouseleave', function() {
      if (baloon8) {
        baloon8.classList.remove('active')
      }
    })
  }

  const voronezh = document.querySelector('.voronezh');
  const baloon4 = document.querySelector('.information__baloon-4');

  if (voronezh) {
    voronezh.addEventListener('mouseenter', function() {
      if (baloon4) {
        baloon4.classList.add('active')
      }
    })

    voronezh.addEventListener('mouseleave', function() {
      if (baloon4) {
        baloon4.classList.remove('active')
      }
    })
  }

  const novosibirskayaOblast = document.querySelector('.novosibirskaya__oblast');
  const baloon28 = document.querySelector('.information__baloon-28');

  if (novosibirskayaOblast) {
    novosibirskayaOblast.addEventListener('mouseenter', function() {
      if (baloon28) {
        baloon28.classList.add('active')
      }
    })

    novosibirskayaOblast.addEventListener('mouseleave', function() {
      if (baloon28) {
        baloon28.classList.remove('active')
      }
    })
  }

  const OMSK = document.querySelector('.OMSK');
  const baloon27 = document.querySelector('.information__baloon-27');

  if (OMSK) {
    OMSK.addEventListener('mouseenter', function() {
      if (baloon27) {
        baloon27.classList.add('active')
      }
    })

    OMSK.addEventListener('mouseleave', function() {
      if (baloon27) {
        baloon27.classList.remove('active')
      }
    })
  }

  const samara = document.querySelector('.samara');
  const baloon12 = document.querySelector('.information__baloon-12');

  if (samara) {
    samara.addEventListener('mouseenter', function() {
      if (baloon12) {
        baloon12.classList.add('active')
      }
    })

    samara.addEventListener('mouseleave', function() {
      if (baloon12) {
        baloon12.classList.remove('active')
      }
    })
  }

  const ufa = document.querySelector('.ufa');
  const baloon23 = document.querySelector('.information__baloon-23');

  if (ufa) {
    ufa.addEventListener('mouseenter', function() {
      if (baloon23) {
        baloon23.classList.add('active')
      }
    })

    ufa.addEventListener('mouseleave', function() {
      if (baloon23) {
        baloon23.classList.remove('active')
      }
    })
  }

  const perm = document.querySelector('.perm');
  const baloon22 = document.querySelector('.information__baloon-22');

  if (perm) {
    perm.addEventListener('mouseenter', function() {
      if (baloon22) {
        baloon22.classList.add('active')
      }
    })

    perm.addEventListener('mouseleave', function() {
      if (baloon22) {
        baloon22.classList.remove('active')
      }
    })
  }

  const kazan = document.querySelector('.kazan');
  const baloon13 = document.querySelector('.information__baloon-13');

  if (kazan) {
    kazan.addEventListener('mouseenter', function() {
      if (baloon13) {
        baloon13.classList.add('active')
      }
    })

    kazan.addEventListener('mouseleave', function() {
      if (baloon13) {
        baloon13.classList.remove('active')
      }
    })
  }

  const ekaterenburg = document.querySelector('.ekaterenburg');
  const baloon24 = document.querySelector('.information__baloon-24');

  if (ekaterenburg) {
    ekaterenburg.addEventListener('mouseenter', function() {
      if (baloon24) {
        baloon24.classList.add('active')
      }
    })

    ekaterenburg.addEventListener('mouseleave', function() {
      if (baloon24) {
        baloon24.classList.remove('active')
      }
    })
  }

  const nizhegorodskaya = document.querySelector('.nizhegorodskaya');
  const baloon10 = document.querySelector('.information__baloon-10');

  if (nizhegorodskaya) {
    nizhegorodskaya.addEventListener('mouseenter', function() {
      if (baloon10) {
        baloon10.classList.add('active')
      }
    })

    nizhegorodskaya.addEventListener('mouseleave', function() {
      if (baloon10) {
        baloon10.classList.remove('active')
      }
    })
  }

  const kazahstan = document.querySelector('.kazahstan');
  const baloon34 = document.querySelector('.information__baloon-34');

  if (kazahstan) {
    kazahstan.addEventListener('mouseenter', function() {
      if (baloon34) {
        baloon34.classList.add('active')
      }
    })

    kazahstan.addEventListener('mouseleave', function() {
      if (baloon34) {
        baloon34.classList.remove('active')
      }
    })
  }
  const kazahstan2 = document.querySelector('.kazahstan');
  const baloon33 = document.querySelector('.information__baloon-33');

  if (kazahstan2) {
    kazahstan2.addEventListener('mouseenter', function() {
      if (baloon33) {
        baloon33.classList.add('active')
      }
    })

    kazahstan2.addEventListener('mouseleave', function() {  
      if (baloon33) {
        baloon33.classList.remove('active')
      }
    })
  }

  const uzbekistan = document.querySelector('.uzbekistan');
  const baloon35 = document.querySelector('.information__baloon-35');

  if (uzbekistan) {
    uzbekistan.addEventListener('mouseenter', function() {
      baloon35.classList.add('active')
      if (baloon35) {
        baloon35.classList.add('active')
      }
    })

    uzbekistan.addEventListener('mouseleave', function() {
      if (baloon35) {
        baloon35.classList.remove('active')
      }
    })
  }
}