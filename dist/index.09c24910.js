//Large Slider
const sliderLarge = document.querySelector(".slider--size--l");
const sliderLargeWrapper = document.querySelector(".slider__wrapper--size--l");
const slidesLarge = document.querySelectorAll(".slider__item--size--l");
let windowWidth, slideCounter, autoMoveSlide;
const moveSlides = function(slide, width, elem) {
    elem.style.transform = `translateX(${-slide * width}px)`;
};
const sliderInit = function() {
    windowWidth = document.documentElement.clientWidth;
    sliderLarge.style.width = `${windowWidth}px`;
    sliderLargeWrapper.style.width = `${100 * slidesLarge.length}%`;
    slidesLarge.forEach((el)=>el.style.flexBasis = `${windowWidth}px`);
    slideCounter = 0;
    moveSlides(slideCounter, windowWidth, sliderLargeWrapper);
    autoMoveSlide = setInterval(function() {
        slideCounter += slideCounter >= slidesLarge.length - 1 ? -(slidesLarge.length - 1) : 1;
        moveSlides(slideCounter, windowWidth, sliderLargeWrapper);
    }, 3500);
};
sliderInit();
sliderLarge.addEventListener("click", function(e) {
    if (e.target.classList.contains("slider__right")) slideCounter += slideCounter >= slidesLarge.length - 1 ? -(slidesLarge.length - 1) : 1;
    if (e.target.classList.contains("slider__left")) slideCounter += slideCounter ? -1 : slidesLarge.length - 1;
    moveSlides(slideCounter, windowWidth, sliderLargeWrapper);
});
window.addEventListener("resize", function() {
    clearInterval(autoMoveSlide);
    sliderInit();
});
//Small Slider
const sliderSmall = document.querySelector(".slider--size--s");
const sliderSmallWrapper = document.querySelector(".slider__wrapper--size--s");
const slidesSmall = document.querySelectorAll(".slider__item--size--s");
const sliderSmallImg = document.querySelector(".slider__img--size--s");
const imgWidth = sliderSmallImg.naturalWidth;
const imgGap = parseFloat(window.getComputedStyle(sliderSmallWrapper).columnGap);
const wrapperWidth = `${imgWidth * slidesSmall.length + 2 + imgGap * slidesSmall.length}px`;
const visibleSlides = `${4 * (imgWidth + imgGap) - imgGap}px`;
sliderSmall.style.width = visibleSlides;
sliderSmallWrapper.style.width = wrapperWidth;
sliderSmallWrapper.style.transform = `translateX(${-(imgWidth + imgGap)}px)`;
const slidesAmount = slidesSmall.length;
sliderSmall.addEventListener("click", function(e) {
    if (e.target.classList.contains("slider__right")) {
        sliderSmallWrapper.style.transform = `translateX(0px)`;
        sliderSmallWrapper.style.transform = `translateX(${-(imgWidth + imgGap)}px)`;
        sliderSmallWrapper.insertAdjacentElement("afterbegin", sliderSmallWrapper.lastElementChild);
    }
    if (e.target.classList.contains("slider__left")) sliderSmallWrapper.insertAdjacentElement("beforeend", sliderFirstEl);
}); // Первым элемент смещается и потом удаляется
 // В это время он вставляется в конец
 // Кликаем вправо
 // Смещаем враппер вправо
 // Смещаем обратно и добавляем вперед последний слайд
 // Кликаем влево
 // Смещаем враппер влево
 // Смещаем обратно и добавляем назад первый слайд

//# sourceMappingURL=index.09c24910.js.map
