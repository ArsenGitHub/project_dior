const sliderContainer = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__item');

let slideCounter = 0;

const moveSlides = function (count) {
  slides.forEach(
    (el, i) => (el.style.transform = `translateX(${(i - count) * 100}%)`)
  );
};

moveSlides(slideCounter);

sliderContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('slider__left')) {
    slideCounter +=
      slideCounter >= slides.length - 1 ? -(slides.length - 1) : 1;
  }
  if (e.target.classList.contains('slider__right')) {
    slideCounter += slideCounter ? -1 : slides.length - 1;
  }
  moveSlides(slideCounter);
});
