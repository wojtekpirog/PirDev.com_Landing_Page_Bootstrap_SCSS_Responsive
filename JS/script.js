const navbar = document.querySelector("nav");
const navbarBrand = document.querySelector(".navbar-brand");
const navbarLinks = document.querySelectorAll("nav .navbar-nav .nav-link");
const navbarTogglerLines = document.querySelectorAll("nav .navbar-toggler > div");

const handlePageScroll = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 130) {
      navbar.classList.add("bg-white");
      navbarBrand.classList.remove("text-white");
      navbarLinks.forEach(link => link.classList.add("black-font-color"));
      navbarTogglerLines.forEach(line => line.classList.add("bg-black"));
    } else {
      navbar.classList.remove("bg-white");
      navbarBrand.classList.add("text-white");
      navbarLinks.forEach(link => link.classList.remove("black-font-color"));
      navbarTogglerLines.forEach(line => line.classList.remove("black-font-color"));
    }
  });
}

document.addEventListener("DOMContentLoaded", handlePageScroll);