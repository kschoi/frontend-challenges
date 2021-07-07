"use strict";

class Navbar {
  constructor({
    el,
    toggleButtonSelector = ".navbar__toggle",
    activeClassName = "active",
  }) {
    this.el = el;
    this.toggleButtonSelector = toggleButtonSelector;
    this.activeClassName = activeClassName;
  }

  init() {
    this.attatchEventListeners();
  }

  attatchEventListeners() {
    window.addEventListener("load", () => {
      const navbarToggle = this.el.querySelector(this.toggleButtonSelector);

      if (this.el && navbarToggle) {
        navbarToggle.addEventListener("click", () => {
          this.el.classList.toggle(this.activeClassName);
        });
      }
    });
  }
}

export default Navbar;
