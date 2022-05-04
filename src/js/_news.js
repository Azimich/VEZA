export const initNews = () => {
  let more = document.querySelectorAll('.more-news');

  for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', function() {
      const showPerClick = 3;
      
      let hidden = this.parentNode.querySelectorAll('div.hidden-news');
      for (let i = 0; i < showPerClick; i++) {
        if (!hidden[i]) return this.outerHTML = "";

        hidden[i].classList.add('box');
        hidden[i].classList.remove('hidden-news');
      }
    });
  }
}