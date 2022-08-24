
export const initNotification = () => {
  const notificationLink = document.querySelectorAll('.notifications__tabs-list');
  const notificationBlock = document.querySelectorAll('.notifications__block');

  if(notificationLink) {
    notificationLink.forEach((elem) => {
      elem.addEventListener("click", function(e) {
        e.preventDefault();
  
        const id = e.target.getAttribute('href').replace("#", "")
        notificationLink.forEach((element) => element.classList.remove("active"));
  
        if() {

        }
        
  
        elem.classList.add("active");
        document.getElementById(id).classList.remove("hide");
      });
    });
  }
}