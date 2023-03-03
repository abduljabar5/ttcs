const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.slideshow-control');
console.log("hi");
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  
  currentSlide = slideIndex;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

controls.forEach(control => {
  control.addEventListener('click', event => {
    if (event.target.classList.contains('prev')) {
      prevSlide();
    } else if (event.target.classList.contains('next')) {
      nextSlide();
    }
  });
});

showSlide(currentSlide);
setInterval(nextSlide, 5000);
