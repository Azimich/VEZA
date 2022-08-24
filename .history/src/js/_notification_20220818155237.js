
export const initNotification = () => {
  const notificationLi = document.querySelectorAll('.notifications__tabs-list');
  const historyTabs = document.querySelectorAll('.notifications__block');

  notificationLi.forEach((elem) => {
    elem.addEventListener("click", function(e) {
      e.preventDefault();

      const id = e.target.getAttribute('href').replace("#", "")
      notificationLi.forEach((element) => element.classList.remove("active"));

      historyTabs.forEach((el) => el.classList.add("hide"));

      elem.classList.add("active");
      document.getElementById(id).classList.remove("hide");
    });
  });
}