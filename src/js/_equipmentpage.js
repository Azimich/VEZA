

export const initEquipmentpage = () => {

  function clickHandler (nodeList = []) {
    nodeList.forEach(link => link.addEventListener("click", function() {
      if(this.classList.contains("active")) {
        this.classList.remove("active")
        this.parentNode.nextElementSibling.classList.remove("active") 
      } else {
        nodeList.forEach(item => {
          item.classList.remove("active")
          item.parentNode.nextElementSibling.classList.remove("active")
        })
        this.classList.add("active")
        this.parentNode.nextElementSibling.classList.add("active")
      }
    }));
  }

  const clicker1 = document.querySelectorAll('.clicker');
  const clicker2 = document.querySelectorAll('.clicker__2');
  const clicker3 = document.querySelectorAll('.clicker__3');

  const nodeList = [clicker1, clicker2, clicker3];
  nodeList.map(node => clickHandler(node));

}



