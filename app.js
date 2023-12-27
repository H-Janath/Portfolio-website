const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allselection = document.querySelector(".main-content");

function PageTransitions() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].classList.remove("active-btn");
      this.classList.add("active-btn");
    });
  }

  allselection.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

PageTransitions();
