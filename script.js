
const slider = document.querySelector ('.slider');

const leftArrow = document.querySelector ('.left');
const rightArrow = document.querySelector ('.right');

let sectionIndex = 0;

rightArrow.addEventListener ('click' , function() {
  sectionIndex = (sectionIndex < 3 ) ? sectionIndex + 1 : 3;
  slider.style.transform ='translate(' + (sectionIndex) * -25 + '%)';
});