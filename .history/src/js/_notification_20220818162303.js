
export const initNotification = () => {
  const notificationLink = document.querySelectorAll('.notifications__tabs-list');
  const notificationBlock = document.querySelectorAll('.notifications__block');

  if(notificationLink) {
    notificationLink.forEach((elem) => {
      elem.addEventListener("click", function(e) {
        e.preventDefault();
  
        const id = e.target.getAttribute('href').replace("#", "");
        if (notificationLink) {
          notificationLink.forEach((element) => element.classList.remove("active"));
        }
  
        if(notificationBlock) {
          notificationBlock.forEach((el) => el.classList.add("hide"));
        }
  
        elem.classList.add("active");
        document.getElementById(id).classList.remove("hide");
      });
    });
  }
}