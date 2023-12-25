const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allselection = document.querySelectorAll(".main-content");

function PageTransitions() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].classList.remove("active-btn"); // Use classList.remove() instead of className.replace()
      this.classList.add("active-btn"); // Use classList.add() instead of += string concatenation
    });
  }
}

PageTransitions();
