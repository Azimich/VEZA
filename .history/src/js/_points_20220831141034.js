

export const initialPoints = () => {
  const pointsCategoryLink = document.querySelectorAll('.points__category-link');
  const pointsTabsItems = document.querySelectorAll('.points__tabs-items');

  if (pointsCategoryLink, pointsTabsItems) {

    pointsCategoryLink.forEach((elem) => {
      elem.addEventListener("click", function(e) {
        e.preventDefault();
  
        const id = e.target.getAttribute('href').replace("#", "")
        pointsCategoryLink.forEach((element) => element.classList.remove("active"));
  
        pointsTabsItems.forEach((el) => el.classList.add("hide"));
        elem.classList.add("active");
        document.getElementById(id).classList.remove("hide");
      });
    });
  }

}