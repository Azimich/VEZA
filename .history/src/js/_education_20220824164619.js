import videojs from "video.js";

export const initialEducation = () => {
     // video.js
     const videoJs = document.querySelector('.video-js')
     if (videoJs) {
         videojs(videoJs)
     }
}