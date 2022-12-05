'use strict';
// Selectors
const menuBtn = document.querySelector('.menu-icon');
const menu = document.getElementById('menu');
const topBtn = document.getElementById('scroll-up');
const heros = document.querySelectorAll('.hero');
const HeaderHeight = document.querySelector('header').getBoundingClientRect().height;
const allSection = document.querySelectorAll('.section');
// const screenWidth = document.documentElement.getBoundingClientRect().width;
// Click on the button to show menu
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('fixed-ul');
});

// Scroll up btn
topBtn.addEventListener('click', function () {
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
});

// Fixed header
const observeSection = function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
        header.style.transition = '0.3s';
        header.classList.add('sticky');
        topBtn.style.display = 'block';
    }
    else {
        header.style.transition = '0.3s';
        header.classList.remove('sticky');
        topBtn.style.display = 'none';
    }
}
const secObserver = new IntersectionObserver(observeSection, {
    root: null,
    threshold: 0,
    rootMargin: `-${HeaderHeight}px`,
});
heros.forEach(hero => secObserver.observe(hero))

// Reveal sections
const seeSection = function (entries, observer) {
    const entry = entries[0];
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(seeSection, {
    root: null,
    threshold: 0.15,
});
allSection.forEach(function (section) {
    sectionObserver.observe(section);
});

console.log(window.pageYOffset);