let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Go to the last slide if at the first
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // Loop back to the first slide if at the last
  }

  const slideWidth = slides[0].clientWidth;
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}
