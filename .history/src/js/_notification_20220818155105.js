
export const initNotification = () => {
  const historyTabs = document.querySelectorAll('.tabs__history');
  const historyTabLinks = document.querySelectorAll('.notifications__tabs-list')

  historyTabLinks.forEach((elem) => {
    elem.addEventListener("click", function(e) {
      e.preventDefault();

      const id = e.target.getAttribute('href').replace("#", "")
      historyTabLinks.forEach((element) => element.classList.remove("active"));

      historyTabs.forEach((el) => el.classList.add("hide"));

      elem.classList.add("active");
      document.getElementById(id).classList.remove("hide");
    });
  });
}