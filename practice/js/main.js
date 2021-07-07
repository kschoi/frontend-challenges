"use strict";

import Navbar from "./modules/navbar.js";

const navbar = new Navbar({
  el: document.querySelector(".navbar"),
});
navbar.init();
