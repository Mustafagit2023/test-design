// Slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const dotsContainer = document.querySelector('.dots');

// Slider
let curSlide = 0;
const maxSlide = slides.length - 1;
const creatDots = function () {
    slides.forEach((_, i) => {
        dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
    });
}
const activeDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelectorAll('.dots__dot')[slide].classList.add('dots__dot--active');
}
const calcTranlate = function (cur) {
    slides.forEach(function (slide, i) {
        slide.style.transform = `translateX(${100 * (i - cur)}%)`;
    });
}
const init = function () {
    calcTranlate(0);
    creatDots();
    activeDot(0);
}
init();

const goNext = function () {
    if (curSlide === maxSlide) {
        curSlide = 0;
    }
    else {
        curSlide++;
    }
    calcTranlate(curSlide);
    activeDot(curSlide);
}
const goPrev = function () {
    if (curSlide === 0) {
        curSlide = maxSlide;
    }
    else {
        curSlide--;
    }
    calcTranlate(curSlide);
    activeDot(curSlide);
}

btnRight.addEventListener('click', goNext);
btnLeft.addEventListener('click', goPrev);
document.querySelectorAll('.dots__dot').forEach(dot => dot.addEventListener('click', function () {
    calcTranlate(dot.dataset.slide);
    activeDot(dot.dataset.slide);
}));
document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && goPrev();
    e.key === 'ArrowRight' && goNext();
});

setInterval(goNext, 2000)