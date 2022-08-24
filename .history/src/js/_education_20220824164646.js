import videojs from "video.js";

export const initialEducation = () => {
  // video.js
  const videoJs = document.querySelector('.education__video-box')
  if (videoJs) {
      videojs(videoJs)
  }
}