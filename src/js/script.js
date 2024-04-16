//Large Slider
const sliderLarge = document.querySelector('.slider--size--l');
const sliderLargeWrapper = document.querySelector('.slider__wrapper--size--l');
const slidesLarge = document.querySelectorAll('.slider__item--size--l');

let windowWidth = document.documentElement.clientWidth;
sliderLarge.style.width = `${windowWidth}px`;
sliderLargeWrapper.style.width = `${100 * slidesLarge.length}%`;
slidesLarge.forEach((el) => (el.style.flexBasis = `${windowWidth}px`));

let slideCounter = 0;

const moveSlides = function (slide) {
  sliderLargeWrapper.style.transform = `translateX(${-slide * windowWidth}px)`;
};

moveSlides(slideCounter);

sliderLarge.addEventListener('click', function (e) {
  if (e.target.classList.contains('slider__right')) {
    slideCounter +=
      slideCounter >= slidesLarge.length - 1 ? -(slidesLarge.length - 1) : 1;
  }
  if (e.target.classList.contains('slider__left')) {
    slideCounter += slideCounter ? -1 : slidesLarge.length - 1;
  }
  moveSlides(slideCounter);
});

setInterval(function () {
  slideCounter +=
    slideCounter >= slidesLarge.length - 1 ? -(slidesLarge.length - 1) : 1;
  moveSlides(slideCounter);
}, 3500);

//Small Slider
const sliderSmall = document.querySelector('.slider--size--s');
const sliderSmallWrapper = document.querySelector('.slider__wrapper--size--s');
const slidesSmall = document.querySelectorAll('.slider__item--size--s');
const sliderSmallImg = document.querySelector('.slider__img--size--s');
const imgWidth = sliderSmallImg.naturalWidth;
const imgGap = parseFloat(
  window.getComputedStyle(sliderSmallWrapper).columnGap
);

const move = function (slide) {
  sliderLargeWrapper.style.transform = `translateX(${-slide * windowWidth}px)`;
};

// sliderSmall.style.width = `${imgWidth}px`;
sliderSmallWrapper.style.width = `${
  imgWidth * slidesSmall.length + imgGap * (slidesSmall.length - 1)
}px`;
// slidesSmall.forEach((el) => (el.style.flexBasis = `${windowWidth}px`));
sliderSmall.addEventListener('click', function (e) {
  if (e.target.classList.contains('slider__right')) {
    slideCounter +=
      slideCounter >= slidesLarge.length - 1 ? -(slidesLarge.length - 1) : 1;
  }
  if (e.target.classList.contains('slider__left')) {
    slideCounter += slideCounter ? -1 : slidesLarge.length - 1;
  }
});

// Первым элемент смещается и потом удаляется
// В это время он вставляется в конец
