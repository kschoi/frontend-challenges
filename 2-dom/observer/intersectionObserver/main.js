import "./style.css";

const loadBtn = document.getElementById("load");

// Observe loadBtn
const options = {
  // Use the whole screen as scroll area
  root: null,
  // Do not grow or shrink the root area
  rootMargin: "0px",
  // Threshold of 1.0 will fire callback when 100% of element is visible
  threshold: 1.0,
};

const observer = new IntersectionObserver((entries) => {
  // Callback to be fired
  // Entries is a list of elements out of our targets that reported a change.
  entries.forEach((entry) => {
    // Only add to list if element is coming into view not leaving
    if (entry.isIntersecting) {
      // Perform some operation here
    }
  });
}, options);

observer.observe(loadBtn);
