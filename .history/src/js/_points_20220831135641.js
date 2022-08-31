

export const initialPoints = () => {
  const pointCategoryes = document.querySelectorAll('.points__category-item');
  const pointsCategoryItem = document.querySelectorAll('.points__tabs-items')

  pointsCategoryItem.forEach((elem) => {
    elem.addEventListener("click", function(e) {
      e.preventDefault();

      const id = e.target.getAttribute('href').replace("#", "")
      pointsCategoryItem.forEach((element) => element.classList.remove("active"));

      pointCategoryes.forEach((el) => el.classList.add("hide"));
      elem.classList.add("active");
      document.getElementById(id).classList.remove("hide");
    });
  });

  document.querySelectorAll('.points__category-item').forEach((elem) => {
    elem.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#','');
        document.querySelectorAll('.typesizes__menu-link').forEach(
            (element) => element.classList.remove('active'));

        document.querySelectorAll('.tab__cont').forEach(
            (el) => el.classList.add('hide'));

        elem.classList.add('active');
        document.getElementById(id).classList.remove('hide');
    });
});
}