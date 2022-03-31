

export const initEquipmentpage = () => {

  function clickHandler (nodeList = []) {
    nodeList.forEach(link => link.addEventListener("click", function() {
      if(this.parentNode.classList.contains("active")) {
        this.parentNode.classList.remove("active") 
      } else {
        nodeList.forEach(item => {
          item.parentNode.classList.remove("active")
        })
        this.parentNode.classList.add("active")
      }
    }));
  }

  const firstLevelMenu = document.querySelectorAll('.clicker');
  const secondLevelMenu = document.querySelectorAll('.clicker__2');
  const thirdLevelMenu = document.querySelectorAll('.clicker__3');

  const nodeList = [firstLevelMenu, secondLevelMenu, thirdLevelMenu];
  nodeList.map(node => clickHandler(node))

  const level1 = document.querySelectorAll(".equipment__sub__menu");
  const level2 = document.querySelectorAll(".equipment__sub__menu-two");
  const level3 = document.querySelectorAll(".equipment__sub__menu-three");
}



  // firstLevelMenu.forEach(link => link.addEventListener("click", function() {
  //   if(this.parentNode.classList.contains("active")) {
  //     this.parentNode.classList.remove("active") 
  //     level1.forEach(level => level.classList.remove("active"))
  //   } else {
  //     firstLevelMenu.forEach(item => {
  //       item.parentNode.classList.remove("active")
  //     })
  //     this.parentNode.classList.add("active")
  //     level1.forEach(item => item.classList.add("active"))
  //   }
  // }));