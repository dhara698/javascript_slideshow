const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
let currentSlide = 0;

// Hide all slides except the current
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? "block" : "none";
  });
}

// Show the first slide initially
updateSlides();

next.addEventListener("click", function (e) {
  e.preventDefault();
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
});

previous.addEventListener("click", function (e) {
  e.preventDefault();
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
});
