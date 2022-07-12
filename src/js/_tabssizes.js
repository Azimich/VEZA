import videojs from "video.js";

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

    //video.js
    const videoJs = document.querySelector('.video-js')
    if (videoJs) {
        videojs(videoJs) 
    }
}