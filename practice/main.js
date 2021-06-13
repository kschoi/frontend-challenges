"use strict";

window.onload = function () {
  const navbar = document.querySelector(".navbar");
  const navbarToggle = document.querySelector(".navbar__toggle");

  if (navbar && navbarToggle) {
    navbarToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  }
};
