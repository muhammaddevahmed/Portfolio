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

const scriptURL = 'https://script.google.com/macros/s/AKfycbwgRHhrWCDaEw_ty9CdJUFzhqk66gZQPHp0VnRkKMnRMlPlpKhoi-liZyrbkP5A6YZohw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})