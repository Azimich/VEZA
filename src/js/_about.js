export const initAbout = () => {

  function start() {

    let reqAnimFrame = (function() {
      return requestAnimationFrame ||
        mozRequestAnimationFrame ||
        webkitRequestAnimationFrame ||
        oRequestAnimationFrame ||
        msRequestAnimationFrame ||
        function(callback) {
          setTimeout(callback, 1000 / 100);
        }
    })();
  
    let dataCircle = document.querySelectorAll('.progressbar__thumb');
  
    function setProgress(percent, selector) {
      let circle = selector.querySelector('.progressbar__thumb');
      let total = Math.PI * circle.r.baseVal.value;
      circle.style.strokeDasharray = `${total*percent/100} ${total*(1-percent/100)*2}`;
      selector.querySelector('text').innerHTML = '<tspan>' + percent.toFixed(0) + '</tspan>';
    }
  
    function circle(final, i) {
      let number = -1;
      i++;
      let selector = '.progress__container:nth-child(' + i + ')';
      let mainSelector = document.querySelector(selector);
      let myReq = null;
  
      function circleStep() {
        myReq = reqAnimFrame(circleStep);
        setProgress(number, mainSelector);
        if (number >= final) {
          cancelAnimationFrame(myReq);
        }
        number++;
      }
      circleStep(); 
    }
  
    for (let i = 0; i < dataCircle.length; i++) {
      let num = dataCircle[i].getAttribute('data-circle');
      circle(num, i);
    }
  
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    start();
  });

}