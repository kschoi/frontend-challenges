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
    if (!this.el) return;

    this.attatchEventListeners();
  }

  attatchEventListeners() {
    window.addEventListener("load", () => {
      this.el.addEventListener("click", this.onClick.bind(this));
    });
  }

  onClick(e) {
    const toggleBtn = e.target.closest("button");
    if (toggleBtn) {
      this.onToggle();
    }
  }

  onToggle() {
    this.el.classList.toggle(this.activeClassName);
  }
}

export default Navbar;
