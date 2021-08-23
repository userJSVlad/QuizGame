import { movePreloader, scrollTop } from "../components/preloader";
import sadSmile from '../images/smile-sad.png'
import noramlSmile from '../images/smile-normal.jpg'
import loveSmile from '../images/smile-love.png'

import { storeGamsImgs, storeQutions } from '../state//state.js'


let index = 0;
let score = 0;
let counter;
let timerClick = 15
let quiz = localStorage.getItem('quiz') // если обновим страницу!
let lastGame;


let findQuizOnClick = (e) => {
   let allQuest = document.querySelectorAll('._start-quest');
   for (let i = 0; i < allQuest.length; i++) { // у кажой кнопки игры есть этот класс для того чтобы сыгать (_start-quest)
      allQuest[i].addEventListener('click', (e) => {
         if (e.target.tagName == 'A') {
            quiz = e.target.dataset.quest
            scrollTop() // делаем Quiz наверх
            startQuizGame()
            makeBoxAnswers()
         }
      })
   }
   return quiz
}

let retrunMenuByHeaderBtn = () => {
   let allBtn = document.querySelectorAll('.cliker')
   for (let i = 0; i < allBtn.length; i++) {
      allBtn[i].addEventListener('click', () => {
         startQuizGame()
         document.body.classList.remove('scrol') // возвращает скролл на странице
         index = 0;
         score = 0; // обнуляет игру
         quiz = null;
      })
   }
}


const startQuizGame = () => {
   if (document.querySelector('.quest__titl')) { // проверка на ошибку null
      localStorage.setItem('quiz', quiz); // если обновим страницу!
      let quizTitlt = document.querySelector('.quest__titl');
      let quizAllAnswer = document.querySelector('.quest__number-qustions');
      let quizTrueAnser = document.querySelector('.quest__quantity');
      let quizQuestion = document.querySelector('.quest__qustion');
      let quizAnswerOne = document.querySelector('.answer-one');
      let quizAnswerTwo = document.querySelector('.answer-two');
      let quizAnswerThree = document.querySelector('.answer-three');
      let quizAnswerFour = document.querySelector('.answer-four');

      quizTitlt.textContent = storeQutions[quiz][0].ourQuiz; // название пака
      quizAllAnswer.innerHTML = storeQutions[quiz].length;  /// КОЛЛИЧЕСТВО ВОПРОСОВ В QUIZ
      quizTrueAnser.innerHTML = index + 1;

      quizQuestion.innerHTML = storeQutions[quiz][index].question; // название вопроса
      quizAnswerOne.innerHTML = storeQutions[quiz][index].answer[0] // вопрос 1
      quizAnswerTwo.innerHTML = storeQutions[quiz][index].answer[1] // вопрос 2
      quizAnswerThree.innerHTML = storeQutions[quiz][index].answer[2] // вопрос 3
      quizAnswerFour.innerHTML = storeQutions[quiz][index].answer[3] // вопрос 4
      clearInterval(counter); // при появлении нового вопроса, очитсить таймер
      startTimer(timerClick); // начать новый таймер
   }
}


const checkQuiz = () => {
   let quizTimer = document.querySelector('.quest__timer');
   let colQuestion = storeQutions[quiz].length;
   if (index < colQuestion - 1) { // проверка на на колличство вопросв
      index++ // следующий вопрос
      clearColorAnwers(); // очищаем ответы от предудущих
      startQuizGame(index) // добавляем новый index
      clearInterval(counter) //при появлении нового вопроса, очитсить таймер
      startTimer(timerClick) // начать новый таймер
      quizTimer.classList.remove('_dang_zone') // очищаем красный bacground
   } else {
      gameOver(); // конец игры
      index = 0; // обнуляем все элменты для повторной игры
      score = 0;
      quiz = null;
   }
}

let stopeMoveClick = () => { // функция запрещает кликать по кнопке, если нету ответа
   if (document.querySelector('.quest__eror')) { // проверка на undefined
      let allOptions = document.querySelectorAll('.quest__answer')
      let eror = document.querySelector('.quest__eror')
      if (!allOptions[0].classList.contains('disabled')) {
         eror.classList.add('eror__hidden') // показываем eror
      } else {
         eror.classList.remove('eror__hidden') // удаляем eroro
         checkQuiz()
         clearColorAnwers()
      }
   }
}

const makeBoxAnswers = () => { // функция создает box_true-false завизима от колличества вопросов в объекте
   if (document.querySelector('.quest__box-qustions')) {
      let storeBox = document.querySelector('.quest__box-qustions')
      for (let i = 0; i < storeQutions[quiz].length - 1; i++) {
         let box = document.createElement('div')
         box.classList.add('quest__true-false')
         storeBox.append(box) // добавляем их 
      }
   }
}

const findAnswer = (e) => {
      let target = e.target // находим вопрос на который кликнули
      if (target.tagName !== 'BUTTON') {
         return
      }
      lightTrueAnswer(target)
   // переходим в функцию для подсветки элемента
}

const lightTrueAnswer = (element) => {
   let clicker = element.dataset.ansers;
   if (clicker == storeQutions[quiz][index].trueAnser) {
      lightСircle('answer-true') // подсвечиваем круг , зависимо от ответа
      clearInterval(counter) // отсанавливаем время
      element.classList.add('answer-true') // если ответ верный подсечиваем его
      score++ // доавляем +1 к счету
   } else {
      lightСircle('answer-wrong') // подсвечиваем круг, зависимо от ответа
      clearInterval(counter) // отсанавливаем время
      element.classList.add('answer-wrong') // показываем, что ответ был неверны
   }
   disableOptions(); // не разрешаем пользователю кликать по области отвтов
}

const disableOptions = () => { //не разрешаем пользователю кликать по области отвтов
   let allOptions = document.querySelectorAll('.quest__answer')
   let eror = document.querySelector('.quest__eror')
   allOptions.forEach(item => {
      item.classList.add('disabled')
      if (item.dataset.ansers == storeQutions[quiz][index].trueAnser) {
         item.classList.add('answer-true')
      }
   })
   eror.classList.remove('eror__hidden') // при нажатии уберает вставку 'нажмите кнопку'
}

const lightСircle = (value) => { // подсвечиваем круги
   let storeBox = document.querySelector('.quest__box-qustions')
   storeBox.children[index].classList.add(`${value}`)
}

const clearColorAnwers = () => { // убираем цвет с отвтов
   let allOptions = document.querySelectorAll('.quest__answer')
   allOptions.forEach(item => {
      item.classList.remove('disabled', 'answer-true', 'answer-wrong')
   })
}

const startTimer = (time) => { // запускаем время
   counter = setInterval(timer, 1000);
   let storeBox = document.querySelector('.quest__box-qustions')
   let quizButtontQuetions = document.querySelector('.quest__button-click')
   let quizTimer = document.querySelector('.quest__timer');
   function timer() {
      quizTimer.textContent = time; // минусуем таймер
      time--
      if (time === 2) { // если на таймере число 3, то делем фон красный
         quizTimer.classList.add('_dang_zone')
      } else if (time === -1) {
         clearInterval(counter)
         storeBox.children[index].classList.add(`answer-wrong`) // делает ответ ложным если не ответили
         quizButtontQuetions.click() // переключает на следующий вопрос, есди не ответили
      }
   }
}

const gameOver = () => {
   lastGame = quiz
   // создаем попап с минимальной статистикой
   clearInterval(counter)
   const gameover = document.querySelector('.gameover')
   let img = makeGameOverPict();
   let result = makeWorldResalt()
   let gameOverBox = document.querySelector('.gameover__body'); // доавляем всю статистку
   gameOverBox.innerHTML = `
   <div class="gameover__inner"> 
   <div class="gameover__in">
   <div class="gameover__titl">Ура,вы прошли Quiz по теме '${storeQutions[quiz][0].ourQuiz}'</div>
   <div class="gameover__text-allscore">У вас ${score} правильных ответa из ${storeQutions[quiz].length}</div>
   <img src="${img}" alt="" class="gameover__pict">
   <div class="gameover__result">${result}</div>
   </div>
   <div class="gameover__button">
      <a href="/#" class="button__gameover-click-return">Вернуться в меню</a>
   </div>
   </div>
   ` // отменяем скролл на странице
   gameover.setAttribute('id', 'gameover') // открываем попап
   deleteScroll() // функция отвечающая за кнопку возврата домой
}

const makeGameOverPict = () => { // создаёт картинку в функции gameOver
   if (score > 8) {
      return loveSmile
   } else if (score === 5 || score === 7 || score === 6) {
      return noramlSmile
   }
   else if (score <= 4) {
      return sadSmile
   }
}

const makeWorldResalt = () => { // создаёт слова напутсвия в функции gameOver
   if (score > 8) {
      return `Мы молодец у вас ${score} правильных ответов. Так держать!`
   } else if (score === 5 || score === 7 || score === 6) {
      return `Совсем недурно. Можете попробывать улучшить свой результат`
   }
   else if (score <= 4) {
      return `Вам стоит потренироваться. Попробуйте сыграть ещё раз`
   }
}

let canselScrollonPageGame = () => { // навешиваем отмену скролла
   let allQuest = document.querySelectorAll('._start-quest');
   for (let i = 0; i < allQuest.length; i++) {
      allQuest[i].addEventListener('click', () => {
         document.body.classList.add('scrol')
      })
   }
}

let deleteScroll = () => { // функция отвечающая за кнопку возврата домой
   let button = document.querySelector('.button__gameover-click-return')

   const clickOnButton = (e) => {
      document.body.classList.remove('scrol') // разрешаю скролл на странице
   }

   button.addEventListener('click', clickOnButton)
}

//document.querySelector('button__gameover-click-replay _start-quest').addEventListener('click', restartGame)

export { findQuizOnClick, checkQuiz, findAnswer, makeBoxAnswers, startQuizGame, retrunMenuByHeaderBtn, canselScrollonPageGame, stopeMoveClick, deleteScroll };