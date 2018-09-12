let menuOpen = document.querySelector(".menu__toggle");
let menuMobile = document.querySelector(".menu__mobile");
let menuItem = document.querySelectorAll(".menu__item");
let menuSocial = document.querySelector(".mobile__social");

menuOpen.addEventListener("click", function() {
  menuOpen.classList.toggle("active");
  menuMobile.classList.toggle("show");
  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].classList.toggle("animate");
  }
  menuSocial.classList.toggle("animate");
});

window.onload = function() {
  setTimeout(function() {
    document.querySelector(".loader").style.visibility = "hidden";
    document.querySelector(".loader").style.opacity = "0";
  }, 400);
};
