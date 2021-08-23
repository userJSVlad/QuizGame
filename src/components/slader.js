let count = 0;
let width;

let startSlidre = () => {
   if (document.querySelector('.slider__inner')) { // проверка на null
      const coments = document.querySelectorAll('.slider__box');
      const sliderLine = document.querySelector('.slider__inner-line')
      const slider = document.querySelector('.slider__inner');
      width = slider.offsetWidth;
      sliderLine.style.width = width * coments.length + 'px'; // длинна слайдера
      coments.forEach(item => {
         item.style.width = width + 'px'; // длинна 1 картинки
         item.style.height = 'auto'; // делаем подстаривоему высоту
      }) 
      rollSlider();
   }
}

window.addEventListener('resize', startSlidre); // изменяем слайдер вместе с длинной окна

// движение слайдера вправа
function clickButtonSliderRight() {
   const coments = document.querySelectorAll('.slider__box');
   count++ 
   if (count >= coments.length) {
      count = 0; 
   }
   rollSlider();
}

// движение слайдера
function rollSlider() {
   const sliderLine = document.querySelector('.slider__inner-line')
   sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

// созздание кружков
let createColorCircles = () => {
   const sliderBox = document.querySelector('.slider__all')
   const coments = document.querySelectorAll('.slider__box');
   for (let i = 0; i < coments.length; i++) {
      let circles = document.createElement('div');
      circles.classList.add('slider__circ')
      sliderBox.append(circles)
      if (i === 0) {
         circles.style.background = '#f25e8b';
      }
   }

}
let circleRight = 0;
let knowEeleme = null;

// движение кружков
let makeColorCirclesRight = (event) => {
   let element = event.target.parentElement.parentElement.children[0].children[1].children
   knowEeleme = element[circleRight]
   if (circleRight === 2) {
      circleRight = -1;
   }
   if (knowEeleme) {
      knowEeleme.style.background = '#DDE0E4'
   }
   circleRight++
   element[circleRight].style.background = '#f25e8b';

}

//buttonRights.addEventListener('click', makeColorCirclesRight)

export { makeColorCirclesRight, createColorCircles, startSlidre, clickButtonSliderRight }