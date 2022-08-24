import videojs from "video.js";

export const initialEducation = () => {
  // video.js
  const videosEducation = document.querySelector('.video.')
  if (videosEducation) {
      videojs(videosEducation)
  }
}