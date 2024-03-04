let navbarCollapse;
let navbarToggler;

const main = () => {
  prepareElements();
  prepareEvents();
}

const prepareElements = () => {
  navbarCollapse = document.querySelector(".navbar-collapse");
  navbarToggler = document.querySelector(".navbar-toggler");
}

const prepareEvents = () => {
  document.body.addEventListener("click", handleNavbarCollapse);
}

const handleNavbarCollapse = (event) => {
  if (!navbarCollapse.contains(event.target)) {
    navbarCollapse.classList.remove("show");
  }
}

document.addEventListener("DOMContentLoaded", main);