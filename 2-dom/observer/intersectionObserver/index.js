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
  rootMargin: "0px",
  // Threshold of 1.0 will fire callback when 100% of element is visible
  threshold: 0.0,
};

const observer = new IntersectionObserver((entries, observer) => {
  // entries는 IntersectionObserverEntry 객체의 배열
  const [{ isIntersecting }] = entries;

  console.group("웹 페이지에서 보이는 영역에 등장하거나 사라지는 경우를 감지");
  console.log(entries[0]);

  if (isIntersecting) {
    fetchMore();
  }

  console.groupEnd();
}, options);

observer.observe(fetchMoreTrigger);
