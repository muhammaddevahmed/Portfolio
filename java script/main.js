// For navbar scroll behavior
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// For hiding navbar after clicking on a link
let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navLinks.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

document.querySelectorAll(".portfolio-card").forEach((card) => {
  card.addEventListener("click", () => {
    const overlay = card.querySelector(".overlay");
    if (overlay.style.opacity === "1") {
      overlay.style.opacity = "0"; // Hide buttons
    } else {
      overlay.style.opacity = "1"; // Show buttons
    }
  });
});
