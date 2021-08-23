import "../styles/css/quest.css";
import Preloader from "../template/Preloader";

const Quest = () => {
   const view = `
   ${Preloader()}
   <div class="quest act-elem">
   <div class="container__quest">
      <div class="quest__border">
         <div class="quest__body">
            <div class="quest-top">
               <div class="quest__titl">Ошибка</div>
               <div class="quest-scores">
                  <span class="quest__quantity">0</span>
                  <span class="quest__col">/</span>
                  <span class="quest__number-qustions">10</span>
               </div>
            </div>
            <div class="quest__box-qustions">
               <div class="quest__true-false"></div>
            </div>
            <div class="quest__eror answer-wrong">
               <div class="quest__eror-box">
                  <p class="quest__eror-text">Выберите ответ!</p>
                </div>
            </div>
            <div class="quest__timer">15</div>
            <div class="quest-background">
               <div class="quest__inner">
                  <div class="quest__qustion">Перейдите в меню для повтороной игры!</div>
                  <button class="quest__answer answer-one" data-ansers="1"></button>
                  <button class="quest__answer answer-two" data-ansers="2"></button>
                  <button class="quest__answer answer-three" data-ansers="3"></button>
                  <button class="quest__answer answer-four" data-ansers="4"></button>
               </div>
            </div>
            <div class="quest__box-button">
               <button class="quest__button-click"> next </button>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
<div class="gameover">
   <div class="gameover__body">
      
   </div>
</div>
   `
   return view;
}

export default Quest