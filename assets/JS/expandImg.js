'use strict';

const expandContainer = document.getElementById('expand-img');
const expandImg = document.querySelector('.expand-image');
const expandBackground = document.querySelector('.background-overlay');
const closeBtn = document.querySelector('.close');
const allImgs = document.querySelectorAll('.img-gallery');

closeBtn.addEventListener('click', function () {
    expandContainer.classList.add('hidden');
});
expandBackground.addEventListener('click', function () {
    expandContainer.classList.add('hidden');
});
// expandContainer.addEventListener('click', function () {
//     expandContainer.classList.remove('hidden');
// });
allImgs.forEach(img => {
    img.addEventListener('click', function () {
        expandImg.src = img.src;
        expandImg.alt = img.alt;
        // expandImg.title = img.title;
        expandContainer.classList.remove('hidden');
    });
});