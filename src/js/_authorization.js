export const initAuthorization = () => {

  const tabLinks = document.querySelectorAll(".authorization__nav__menu-item-link");
  const tabsItem = document.querySelectorAll(".tab__cont");

  tabLinks.forEach((elem) => {
    elem.addEventListener("click", function(e) {
      e.preventDefault();

      const id = e.target.getAttribute('href').replace("#", "")
      tabLinks.forEach((element) => element.classList.remove("active"));

      tabsItem.forEach((el) => el.classList.add("hide"));

      elem.classList.add("active");
      document.getElementById(id).classList.remove("hide");
    });
  });
}