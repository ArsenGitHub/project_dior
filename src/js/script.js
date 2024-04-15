//Slider
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider__wrapper');
const slides = document.querySelectorAll('.slider__item--size--l');

const windowWidth = document.documentElement.clientWidth;
slider.style.width = `${windowWidth}px`;
sliderContainer.style.width = `${100 * slides.length}%`;
slides.forEach((el) => (el.style.flexBasis = `${windowWidth}px`));

let slideCounter = 0;

const moveSlides = function (slide) {
  sliderContainer.style.transform = `translateX(${-slide * windowWidth}px)`;
};

moveSlides(slideCounter);

slider.addEventListener('click', function (e) {
  if (e.target.classList.contains('slider__right')) {
    slideCounter +=
      slideCounter >= slides.length - 1 ? -(slides.length - 1) : 1;
  }
  if (e.target.classList.contains('slider__left')) {
    slideCounter += slideCounter ? -1 : slides.length - 1;
  }
  moveSlides(slideCounter);
});

setInterval(function () {
  slideCounter += slideCounter >= slides.length - 1 ? -(slides.length - 1) : 1;
  moveSlides(slideCounter);
}, 3500);
