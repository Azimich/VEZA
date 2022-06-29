export const initForms = () => {

  "use strict"
  /* Валидация и отправка  формы Техническая  */
   document.addEventListener("DOMContentLoaded", function() {
    const texForm = document.querySelector(".support__form");
    if (texForm) {
      texForm.addEventListener("submit", formSend);
    }
  
    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(texForm);
      let formData = new FormData(texForm);

      console.log(error)

      if (error === 0){
        let response = await fetch('mail.php', {
          method: 'POST',
          body: formData 
        });

        if(response.ok){
            sended();
            texForm.reset(); 
            setTimeout(() => {
              sendedRemove();
            }, 3000);
        }else{
          alert('Для отправки данных нужен сервер!')
        }
         
      } else {

      }  
    }

    function formValidate (texForm) {
      let error = 0;

      let formRequire = document.querySelectorAll(".require");

      for (let index = 0; index < formRequire.length; index++) {
        const input = formRequire[index];
        formRemoveError(input);

        if (input.classList.contains('support__form-email')) {
          if (emailTest(input)) {
            formAddError(input);
            error++;
          }
        } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            formAddError(input);
            error++;
        } else if(input.value === '') {
          formAddError(input);
          error++;  
        }
      }
      return error;
    }
        
  });


  /* Валидация и отправка  формы Авторизации  */
  document.addEventListener("DOMContentLoaded", function() {
    const singPopup = document.querySelector(".authorization__form");
    if (singPopup) {
      singPopup.addEventListener("submit", formSend);
    }

    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(singPopup);
      let formData = new FormData(singPopup);

      console.log(error)

      if (error === 0) {
        let response = await fetch('mail.php', {
          method: 'POST',
          body: formData 
        });

        if(response.ok) {
            sended();
            popupForm.reset(); 
            setTimeout(() => {
              sendedRemove();
            }, 3000);
        } else {
          alert('Для отправки данных нужен сервер!')
        }
         
      } else {

      }  
    }

    function formValidate (singPopup) {
      let error = 0;
      let formRequire = document.querySelectorAll(".req");

      for (let index = 0; index < formRequire.length; index++) {
        const input = formRequire[index];
        formRemoveError(input);

        if (input.classList.contains('email')) {
          if (emailTest(input)) {
            formAddError(input);
            error++;
          }
        } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            formAddError(input);
            error++;
        } else if(input.value === '') {
          formAddError(input);
          error++;  
        }
      }
      return error;
    }
        
  });


  /* Валидация и отправка  формы Регистрации  */
  document.addEventListener("DOMContentLoaded", function() {
    const authorizationForm = document.querySelector(".authorization__second-form");
    if (authorizationForm) {
      authorizationForm.addEventListener("submit", formSend);
    }
    

    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(authorizationForm);
      let formData = new FormData(authorizationForm);

      console.log(error)

      if (error === 0) {
        let response = await fetch('mail.php', {
          method: 'POST',
          body: formData 
        });

        if(response.ok) {
            sended();
            popupForm.reset(); 
            setTimeout(() => {
              sendedRemove();
            }, 3000);
        } else {
          alert('Для отправки данных нужен сервер!')
        }
         
      } else {

      }  
    }

    function formValidate (authorizationForm) {
      let error = 0;
      let formRequire = document.querySelectorAll(".require");

      for (let index = 0; index < formRequire.length; index++) {
        const input = formRequire[index];
        formRemoveError(input);

        if (input.classList.contains('email')) {
          if (emailTest(input)) {
            formAddError(input);
            error++;
          }
        } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            formAddError(input);
            error++;
        } else if(input.value === '') {
          formAddError(input);
          error++;  
        }
      }
      return error;
    }
        
  });


  /* Валидация и отправка  формы Попапа */
  document.addEventListener("DOMContentLoaded", function() {
    const popupForm = document.getElementById("popup-form");
    if (popupForm) {
      popupForm.addEventListener("submit", formSend);
    }

    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(popupForm);
      let formData = new FormData(popupForm);

      console.log(error)

      if (error === 0) {
        let response = await fetch('mail.php', {
          method: 'POST',
          body: formData 
         });

        if (response.ok) {
          sended(); 
          popupForm.reset(); 
          document.getElementById('popup-form').reset();
          document.querySelectorAll('input,textarea,.label-file').forEach(item =>{
            item.style.borderWidth = '1px';
            item.classList.remove('error');
            document.querySelector('.vacancies__form-checkbox>check').classList.remove('error');
            if(item.classList.contains('label-file')){
              item.textContent = 'Ваше резюме'
              item.style.color = '#6C6D70'
            }
          });
          setTimeout(() => {
            closePopup ();
            sendedRemove();
          }, 3000);

        } else {
            alert('Для отправки данных нужен сервер!')
          }
        
    } else {

    }
        
    }

    function formValidate (popupForm){
      let error = 0;

      let formReq = document.querySelectorAll(".required");

      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);
        formRemoveError(input);

        if(input.classList.contains('email')){
          if (emailTest(input)){
            formAddError(input);
            error++;
          }
        } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
          formAddError(input); error++ 
        } else {
          if(input.value === ''){
            formAddError(input);
            error++; 
          }
        }
      }
      return error;
    }    
  });


  const popup = document.querySelector('.popup');

  function closePopup () {
    popup.classList.remove('open');
  } 

  function formAddError (input) {
    input.classList.add('error');
  }

  function formRemoveError (input) {
    input.classList.remove('error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  const sendedText = document.querySelector('.success');

  function sended() {
    sendedText.classList.add('sended');
  }
  
  function sendedRemove() {
    sendedText.classList.remove('sended');  
  }; 
  

  let input = document.querySelector('.inputfile');
  if (input) {
    input.addEventListener('change', function(e) {

      let label = document.querySelector('.label-file');
      let labelVal = label.textContent;
      let fileClean = document.querySelector('.file-cleaner');
      
    
      fileClean.addEventListener('click', () =>{
        input.value = ''
        label.style.borderWidth = "1px";
        label.style.color = "#6C6D70";
        label.style.borderWidth = "1px";
        label.textContent = 'Ваше резюме';
      })
      
      let fileName = '';
      if ( this.files && this.files.length > 1 ) {
        fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace( '{count}', this.files.length);
      }
      else {
        fileName = this.files[0].name;
      }
      if ( fileName ) {
        label.textContent = fileName;
        label.style.color = "#000";
        label.style.borderWidth = "2px";
      }
      else {
        label.textContent = labelVal;
      }
      if (this.files[0].size > 2 * 1024 * 1024) {
        alert('Допустимый размер файла 2 МБ!')
        label.textContent = labelVal;
      }
    });
  }


  document.querySelectorAll('input,textarea').forEach(item => {
    item.addEventListener('change', () => {
      if (item.value != '') {
        item.style.borderWidth = '2px'
      }
      else {
        item.style.borderWidth = '1px'
      }
    })
  })
}