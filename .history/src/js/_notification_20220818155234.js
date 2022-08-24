
export const initNotification = () => {
  const notification = document.querySelectorAll('.notifications__tabs-list');
  const historyTabs = document.querySelectorAll('.notifications__block');

  notification.forEach((elem) => {
    elem.addEventListener("click", function(e) {
      e.preventDefault();

      const id = e.target.getAttribute('href').replace("#", "")
      notification.forEach((element) => element.classList.remove("active"));

      historyTabs.forEach((el) => el.classList.add("hide"));

      elem.classList.add("active");
      document.getElementById(id).classList.remove("hide");
    });
  });
}