

const openPopap = (e) => { 
   let popapBox = e.target.dataset.popap // находем нужный popap
   switch (popapBox) {
      case '1':
         openFirstPopap(); 
         break;
      case '2':
         openSecondPopap();
         break;
      case '3':
         openThirdPopap();
         break;
   }
}


const openFirstPopap = () => { 
   const popap = document.querySelector('.popap')
   let elementBox = document.querySelector('.popap__body');  // добаляем все в обёртку popapa
   elementBox.innerHTML = ` 
   <div class="popap__inner">
   <div class="popap__titl">Quiz по странам</div>
   <div class="popap__text">Мы создали абсолютно новый блок Quiz, который включает в себе 
   3 игры связынные с темой страны. В этом блоке ты найдешь много нового и интресного для себя, поэтому не теряй времени и становить умнее вместе с QuizBox</div>
   <div class="popap__button">
   <a href="/#/quizzes" data-quest="0" class="button__popap-click _quest-game _start-quest">Еще больше Quiz</a>
   </div>
   </div>
   `
   document.body.classList.add('_popap-scroll') // запрещаем скролл
   popap.setAttribute('id', 'popap') // добавляем аннимацию 
   makeScrollAfterPopap() // разрешаю скролл на странице
}
const openSecondPopap = () => {
   const popap = document.querySelector('.popap')
   let elementBox = document.querySelector('.popap__body'); // добаляем все в обёртку popapa
   elementBox.innerHTML = `
   <div class="popap__inner-sub">
   <div class="popap__titl-sub">Подписка</div>
   <div class="popap__text-sub">Подписка - это возможность узнавать об обновлениях на сайте первым, получая уведомления 
   на почту.Становись умнее вместе с QuizBox</div>
   <div class="popap__box-sub">
      <input type="text" name="user_name" class="popap__input-sub">
      <p class="input-back"></p>
      <input type="submit" class="popap__btn-sub">
   </div>
   </div>
   `
   document.body.classList.add('_popap-scroll') //запрещаем скролл
   popap.setAttribute('id', 'popap') // добавляем аннимацию 
}

const openThirdPopap = () => {
   const popap = document.querySelector('.popap')
   let elementBox = document.querySelector('.popap__body'); // добаляем все в обёртку popapa
   elementBox.innerHTML = `
   <div class="popap__inner-prises">
      <p class="popap__titl-prises">Эта функция недоступна</p>
   </div>
   </div>
   `
   document.body.classList.add('_popap-scroll') //запрещаем скролл
   popap.setAttribute('id', 'popap') // добавляем аннимацию 
}

let closePopap = (event) => {
   const popap = document.querySelector('.popap') // закрываем попап нажав на Body
   const popapBody = document.querySelector('.popap__body')
   let elem = event.target
   if (elem === popapBody) {
      popap.removeAttribute('id')
      document.body.classList.remove('_popap-scroll')
   };
}

let closeClickPopap = (e) => {
   const popap = document.querySelector('.popap') // заккрываем popap кликая на кнопку esc
   if (e.keyCode === 27) {
      popap.removeAttribute('id')
      document.body.classList.remove('_popap-scroll')
   }
}

let makeScrollAfterPopap = () => {
   let button = document.querySelector('.button__popap-click')

   const allowScroll = () => {
      document.body.classList.remove('_popap-scroll') // разрешаю скрол на странице
   }

   button.addEventListener('click', allowScroll)
}

export { closeClickPopap, closePopap, openPopap }