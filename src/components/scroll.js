
// движение картинок gams
let moveAllGamsFotos = () => {
   if (document.querySelector('.gams__container')) {
      let allGamsFotos = document.querySelectorAll('.gams__inner-foto');
      let gamsContainer = document.querySelector('.gams__container')
      let gamsBoxHeght = gamsContainer.offsetHeight / 2 + gamsContainer.offsetTop;
      let windowCenter = window.innerHeight + window.scrollY;

      if (windowCenter >= gamsBoxHeght) {
         allGamsFotos.forEach(element => {
            element.classList.add('move-block');
            addButtonsGamsClass();
         });
      } else {
         allGamsFotos.forEach(element => {
            element.classList.remove('move-block');
            removeButtonsGamsClass();
         });
      }
   }
}



let addButtonsGamsClass = () => {
   let allButtonsGams = document.querySelectorAll('.gams__button-img')
   allButtonsGams.forEach(btn => {
      btn.classList.add('_show-gams-btn')
   })
}

let removeButtonsGamsClass = () => {
   let allButtonsGams = document.querySelectorAll('.gams__button-img')
   allButtonsGams.forEach(btn => {
      btn.classList.remove('_show-gams-btn')
   })
}



let moveMixingElements = () => {
   if (document.querySelector('.mixing__inner')) {
      let mixingTextBox = document.querySelector('.mixing__inner');
      let allMixingText = document.querySelectorAll('.mixing__in-titl');
      let mixingBoxHeght = mixingTextBox.offsetHeight / 2 + mixingTextBox.offsetTop;
      let windowCenter = window.innerHeight + window.scrollY;

      if (windowCenter > mixingBoxHeght) {
         allMixingText.forEach(text => {
            text.classList.add('show-mix-text');
            addMixTetxClass();
            cicleAllText();
         })
      } else {
         allMixingText.forEach(text => {
            text.classList.remove('show-mix-text');
            removeMixTetxClass();
         })
      }
   }
}

let cicleAllText = () => {
   let allMixingText = document.querySelectorAll('.mixing__in-titl');
   for (let i = 0; i < allMixingText.length; i++) {
      let element = allMixingText[i].dataset.mixing
      switch (element) {
         case '1':
            allMixingText[i].style.transitionDelay = '0.2s'
            break;
         case '2':
            allMixingText[i].style.transitionDelay = '0.4s'
            break;
         case '3':
            allMixingText[i].style.transitionDelay = '0.6s'
            break;
      }
   }
}

let addMixTetxClass = () => {
   let mixingIcons = document.querySelectorAll('.mixng__icons')
   mixingIcons.forEach(text => {
      text.classList.add('_show-icons')
   })
}

let removeMixTetxClass = () => {
   let mixingIcons = document.querySelectorAll('.mixng__icons')
   mixingIcons.forEach(text => {
      text.classList.remove('_show-icons')
   })
}


let moveQuizEelements = () => {
   if (document.querySelector('.quiz')) {
      let allQuizElements = document.querySelectorAll('.quiz__foto');
      let quizContainers = document.querySelector('.quiz');
      let windowCenter = window.scrollY + window.innerHeight;
      let quizBoxHeight = quizContainers.offsetHeight / 2 + quizContainers.offsetTop;

      if (windowCenter > quizBoxHeight) {
         allQuizElements.forEach(img => {
            img.classList.add('_show-quiz-img');
            cicleAllQuizElm();
         });
      } else {
         allQuizElements.forEach(img => {
            img.classList.remove('_show-quiz-img');
         })
      }
   }
}

let cicleAllQuizElm = () => {
   let allQuizElements = document.querySelectorAll('.quiz__foto');
   for (let i = 0; i < allQuizElements.length; i++) {
      let element = allQuizElements[i].dataset.quiz
      switch (element) {
         case '1':
            allQuizElements[i].style.transitionDelay = '0.3s'
            break;
         case '2':
            allQuizElements[i].style.transitionDelay = '0.2s'
            break;
         case '3':
            allQuizElements[i].style.transitionDelay = '0.1'
            break;
      }
   }
}


let scrollLogo = () => {
   let allLogoElements = document.querySelectorAll('.header__log-inner');
   allLogoElements.forEach(elem => {
      elem.addEventListener('click', function (e) {
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
      });

   })
}


let moveAllPrisesBlock = () => {
   if (document.querySelector('.prices__inner')) {
      let allPrisesElements = document.querySelectorAll('.prices__inner');
      let pricesContainer = document.querySelector('.prices__in')
      let prisesBoxHeght = pricesContainer.offsetHeight / 4 + pricesContainer.offsetTop;
      let windowCenter = window.innerHeight + window.scrollY;

      if (windowCenter >= prisesBoxHeght) {
         allPrisesElements.forEach(element => {
            element.classList.add('move-prises');
         });
      } else {
         allPrisesElements.forEach(element => {
            element.classList.remove('move-prises');
         });
      }
   }
}




export { moveAllGamsFotos, moveMixingElements, moveQuizEelements, scrollLogo, moveAllPrisesBlock };