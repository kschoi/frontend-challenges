import "./style.css";
import "regenerator-runtime";

import renderList from "./listRenderer";

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add("loading");
  await renderList(page++);
  target.classList.remove("loading");
};

// Observe loadBtn
const options = {
  // Use the whole screen as scroll area
  root: null,
  // Do not grow or shrink the root area
  rootMargin: "10px",
  // Threshold of 1.0 will fire callback when 100% of element is visible
  threshold: 0.0,
};

const observer = new IntersectionObserver((entries) => {
  // Entries is a list of elements out of our targets that reported a change.
  const [{ isIntersecting }] = entries;

  if (isIntersecting) {
    fetchMore();
  }
}, options);

observer.observe(fetchMoreTrigger);
