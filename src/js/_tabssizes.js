
export const initTabssizes = () => {

    // TABS
    document.querySelectorAll('.typesizes__menu-link').forEach((elem) => {
        elem.addEventListener('click', function(e) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#','');
            document.querySelectorAll('.typesizes__menu-link').forEach(
                (element) => element.classList.remove('active'));

            document.querySelectorAll('.tab__cont').forEach(
                (el) => el.classList.add('hide'));

            elem.classList.add('active');
            document.getElementById(id).classList.remove('hide');
        });
    });

    
    // VanillaTilt.init(document.querySelector(".card"), {
	// 	max: 0,  // Максимальный угол поворота карточки
    //     glare: true,  // Включаем эффект блика
    //     'max-glare': 0.5,  // Регулируем интенсивность блика
    //     reverse: false,  // Включает/выключает реверсию наклона 
	// });

    // const card = document.querySelector('.card');
    // const fan = document.querySelector('.photo > img');
    // const title = document.querySelector('.name');
    // const description = document.querySelector('.description');
    // const button = document.querySelector('.button');

    // card.addEventListener('mouseenter', (e)=> {
    //     fan.classList.add('active')
    //     title.classList.add('active')
    //     description.classList.add('active')
    //     button.classList.add('active')
    //     card.style.transition = 'none';
    // });

    // card.addEventListener('mouseleave', (e)=> {
    //     fan.classList.remove('active')
    //     title.classList.remove('active')
    //     description.classList.remove('active')
    //     button.classList.remove('active')
    //     card.style.transition = 'all 0.5s ease';
    // });
}