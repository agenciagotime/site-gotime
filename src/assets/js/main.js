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

//Função para mostrar o botão voltar ao topo
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("btnScrollToTop").style.opacity = "1";
  } else {
    document.getElementById("btnScrollToTop").style.opacity = "0";
  }
}

//Função para navegação nas Tabs
function serviceSelector(index) {
  let tabcontent = document.getElementsByClassName("card__wrapper");
  let descriptiontext = document.getElementsByClassName("description__text");
  //Escondendo todos os cards
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(index).style.display = "inherit";

  //Escondendo todos os textos
  for (let i = 0; i < descriptiontext.length; i++) {
    descriptiontext[i].style.display = "none";
  }

  //Navegando o botão pelos serviços e mostrando o texto de cada um
  if (index == 1) {
    serviceSelection.style.top = "0px";
    descriptiontext[0].style.display = "inherit";
  } else if (index == 2) {
    serviceSelection.style.top = "52px";
    descriptiontext[1].style.display = "inherit";
  } else if (index == 3) {
    serviceSelection.style.top = "104px";
    descriptiontext[2].style.display = "inherit";
  } else if (index == 4) {
    serviceSelection.style.top = "156px";
    descriptiontext[3].style.display = "inherit";
  }
}

//Mostrando Tab Website por padrão
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpened").style.display = "inherit";

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
