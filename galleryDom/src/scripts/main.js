'use strict';

const thumbs = document.querySelectorAll('#thumbs a');
const largeImg = document.getElementById('largeImg');

thumbs.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const href = link.getAttribute('href');
    const title = link.getAttribute('title');
  
    showThumb(href, title);
    
  });
});


const showThumb = (href, title) => {
  largeImg.src = href;
  largeImg.alt = title;
};
