

export const initialPoints = () => {
  const pointsCategoryLink = document.querySelectorAll('.tabs-link');
  const pointsTabsItems = document.querySelectorAll('.points__tabs-items');

  if (pointsCategoryLink, pointsTabsItems) {
    pointsCategoryLink.forEach((elem) => {
      elem.addEventListener("click", function(e) {
        
        const id = e.target.getAttribute('href').replace('#','');
        pointsCategoryLink.forEach((element) => element.classList.remove("active"));
  
        pointsTabsItems.forEach((el) => el.classList.add("hide"));
        elem.classList.add("active");
        document.getElementById(idi).classList.remove("hide");
      });
    });
  }
}