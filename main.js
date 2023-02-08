const navToggleBtn = document.querySelector(".nav-toggle-btn");
const nav = document.querySelector(".nav-wrapper");
const bar1 = document.querySelector(".bar-1");
const bar2 = document.querySelector(".bar-2");
const bar3 = document.querySelector(".bar-3");

navToggleBtn.addEventListener("click", function () {
  nav.toggleAttribute("active");
  bar1.toggleAttribute("active");
  bar2.toggleAttribute("active");
  bar3.toggleAttribute("active");
});
