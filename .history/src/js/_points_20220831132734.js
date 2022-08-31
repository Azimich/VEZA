

export const initialPoints = () => {
  const pointCategoryes = document.querySelector('.points__category-item');
  const pointsCategoryItem = document.querySelectorAll('.points__tabs-items');

  pointsCategoryItem.forEach((elem) => {
    console.log(, pointsCategoryItem);
    elem.addEventListener('click', function(e) {
      e.preventDefault();

      const id = e.target.getAttribute('href').replace('#', '')
      pointsCategoryItem.forEach(element => element.classList.remove('active'));

      pointCategoryes.forEach(el => el.classList.add('hide'));
      element.classList.add('active');
      document.getElementById(id).classList.remove('hide')
    });
  });


}