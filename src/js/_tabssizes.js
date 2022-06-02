export const initTabssizes = () => {

    // TABS
    document.querySelectorAll('.typesizes__menu-link').forEach((elem) => {
        elem.addEventListener('click', function(e) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#','');
            document.querySelectorAll('.typesizes__menu-link').forEach(
                (element) => element.classList.remove('active')
            );
            document.querySelectorAll('.tab__cont').forEach(
                (el) => el.classList.add('hide')
            );
            elem.classList.add('active');
            document.getElementById(id).classList.remove('hide');
        });
    });

    // POPUP
    const popupBg = document.querySelector('.typesizes__popup-bg');
    const popupItems = document.querySelector('.typesizes__popup-items');
    const popupOpenBtn = document.querySelectorAll('.typesezis__open-popup');
    const popupCloseBtn = document.querySelector('.typesizes__close-popup');
    const buttonClose = document.querySelector('.typesizes__popup-btn');

    popupOpenBtn.forEach(button => {
        button.addEventListener('click', (elem)=> {
        popupBg.classList.add('active');
        popupItems.classList.add('active')
        });
    });

    popupCloseBtn.addEventListener('click', ()=> {
        popupBg.classList.remove('active');
        popupItems.classList.remove('active');
    });

    buttonClose.addEventListener('click', (e)=> {
       popupBg.classList.remove('active');
       popupItems.classList.remove('active') 
    });

    // ChecBoxes
    // const checkBoxes = document.querySelectorAll('.typesizes__checkbox');

    // checkBoxes.forEach(function(elements) {
    //     elements.addEventListener('click', ()=> {
    //         elements.classList.toggle('active')
    //     })
    // })

}