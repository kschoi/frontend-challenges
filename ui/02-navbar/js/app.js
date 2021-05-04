"use strict";

window.onload = () => {
  const navbar = document.querySelector(".navbar");
  const navbarToggle = document.querySelector(".navbar__toggle");

  if (navbar && navbarToggle) {
    navbarToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }
};
