window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  hideMenu();
});


let navMenu = document.querySelector(".nav__menu");

function showMenu() {
  navMenu.style.right = "0";
}

function hideMenu() {
  navMenu.style.right = "-50%";
}

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header .container ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
