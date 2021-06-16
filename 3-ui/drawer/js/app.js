"use strict";

/**
 * create Drawer
 *
 * @author: chloe
 * @param {string} el drawer element selector
 * @param {boolean} open  default open state (optional)
 */
function Drawer(el, open = false) {
  this.el = el;
  this.isOpen = open;
  Object.assign(this.el.style, {
    display: "block",
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    width: "200px",
    padding: "10px",
    background: "#fff",
    boxShadow: "0 0 36px 0 rgba(0,0,0,.1)",
    transition: "all .4s ease-out",
  });
  this.isOpen ? this.open() : this.close();
}

Drawer.prototype.open = function () {
  this.isOpen = true;
  this.el.style.transform = "translate(0px)";
};

Drawer.prototype.close = function () {
  this.isOpen = false;
  this.el.style.transform = "translate(220px)";
};

const sideMenu = new Drawer(document.querySelector(".drawer"));

document.getElementById("drawer-opener").addEventListener("click", (e) => {
  !sideMenu.isOpen ? sideMenu.open() : sideMenu.close();
});
