// export const initVacancy = () => {

//   document.querySelectorAll('.company__nav__menu-item-link').forEach((elem) => {
//       elem.addEventListener('click', function(e) {
//           const id = e.target.getAttribute('href').replace('#','');
//           document.querySelectorAll('.company__nav__menu-item-link').forEach(
//               (element) => element.classList.remove('active')
//           );
//           document.querySelectorAll('.tab__cont').forEach(
//               (el) => el.classList.add('hide')
//           );
//           elem.classList.add('active');
//           document.getElementById(id).classList.remove('hide');
//       });
//   });

// }