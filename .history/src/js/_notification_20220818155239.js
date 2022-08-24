
export const initNotification = () => {
  const notificationLink = document.querySelectorAll('.notifications__tabs-list');
  const historyTabs = document.querySelectorAll('.notifications__block');

  notificationLink.forEach((elem) => {
    elem.addEventListener("click", function(e) {
      e.preventDefault();

      const id = e.target.getAttribute('href').replace("#", "")
      notificationLink.forEach((element) => element.classList.remove("active"));

      historyTabs.forEach((el) => el.classList.add("hide"));

      elem.classList.add("active");
      document.getElementById(id).classList.remove("hide");
    });
  });
}