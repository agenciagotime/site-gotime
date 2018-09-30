let menuOpen = document.querySelector(".menu__toggle");
let menuMobile = document.querySelector(".menu__mobile");
let menuItem = document.querySelectorAll(".menu__item");
let menuSocial = document.querySelector(".mobile__social");
let serviceSelection = document.getElementById("service__button");

//Interatividade do Menu Mobile
menuOpen.addEventListener("click", function() {
  menuOpen.classList.toggle("active");
  menuMobile.classList.toggle("show");
  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].classList.toggle("animate");
  }
  menuSocial.classList.toggle("animate");
});

//Loader inicial. Após 0.4s o loader desaparece mostrando a página
window.onload = function() {
  setTimeout(function() {
    document.querySelector(".loader").style.visibility = "hidden";
    document.querySelector(".loader").style.opacity = "0";
  }, 400);
};

//Função para navegação nas Tabs
function serviceSelector(index) {
  let tabcontent = document.getElementsByClassName("services__card");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.visibility = "hidden";
    tabcontent[i].style.maxHeight = "0";
  }
  document.getElementById(index).style.visibility = "visible";
  document.getElementById(index).style.maxHeight = "550px";

  if (index == 1) {
    serviceSelection.style.top = "0px";
  } else if (index == 2) {
    serviceSelection.style.top = "52px";
  } else if (index == 3) {
    serviceSelection.style.top = "104px";
  } else if (index == 4) {
    serviceSelection.style.top = "156px";
  }
}

//Mostrando Tab Website por padrão
document.getElementById("defaultOpen").click();

//Scroll into view
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    menuOpen.classList.remove("active");
    menuMobile.classList.remove("show");
  });
});
