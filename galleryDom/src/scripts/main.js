'use strict';

const thumbs = document.querySelectorAll('#thumbs a');
const largeImg = document.getElementById('largeImg');

thumbs.forEach((link) => {
  link.addEventListener('click', (ev) => {
    ev.preventDefault();

    const href = link.getAttribute('href');

    changeImageOnClick(href); 
  });
});

const changeImageOnClick = (href) => {
  largeImg.src = href;
};
