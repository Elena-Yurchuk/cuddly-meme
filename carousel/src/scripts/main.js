'use strict';

const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.carousel__slide');
const dots = document.querySelectorAll('.carousel__dot');

let idx = 0;

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
  slides[slideImage].classList.add('active');
};

const prepareCurrentSlide = (index) => {
  activeSlide(index);
  activeDot(index);
};

const nextSlide = () => {
  if (idx === slides.length - 1) {
    idx = 0;
    prepareCurrentSlide(idx);
  } else {
    idx++;
    prepareCurrentSlide(idx);
  }
};

const prevSlide = () => {
  if (idx === slides.length - 1) {
    idx = 0;
    prepareCurrentSlide(idx);
  } else {
    idx++;
    prepareCurrentSlide(idx);
  }
};

dots.forEach((item, idxDot) => {
  item.addEventListener('click', () => {
    idx = idxDot;
    prepareCurrentSlide(idx);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);