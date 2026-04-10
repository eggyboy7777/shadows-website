const menu = document.getElementById("mobile-menu");
const nav = document.querySelector(".navbar__menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});