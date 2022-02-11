'use strict';

const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.carousel__slide');
const dots = document.querySelectorAll('.carousel__dot');

let currentImage = 0;

const activeSlide = (slideImage) => {
  for (const slide of slides) {
    slide.classList.remove('active');
  }
  slides[slideImage].classList.add('active');
};

const activeDot = (slideImage) => {
  for (const dot of dots) {
    dot.classList.remove('active');
  }
  dots[slideImage].classList.add('active');
};

const prepareCurrentSlide = (index) => {
  activeSlide(index);
  activeDot(index);
};

const nextSlide = () => {
  if (currentImage === slides.length - 1) {
    currentImage = 0;
    prepareCurrentSlide(currentImage);
  } else {
    currentImage++;
    prepareCurrentSlide(currentImage);
  }
};

const prevSlide = () => {
  if (currentImage === 0) {
    currentImage = slides.length - 1;
    prepareCurrentSlide(currentImage);
  } else {
    currentImage--;
    prepareCurrentSlide(currentImage);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    currentImage = indexDot;
    prepareCurrentSlide(currentImage);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);