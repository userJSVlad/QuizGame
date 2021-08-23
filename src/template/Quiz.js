import "../styles/css/quiz.css"
import gameArc from "../images/arc.png";
import gameArt from "../images/art.png";
import gamePlants from "../images/plants.png";

const Quiz = () => {
   const view = `
   <div class="quiz">
   <div class="container">
      <div class="quiz__body">
         <div class="quiz__titl">Попробуй себя в Quiz</div>
         <div class="quiz__inner">
            <div class="quiz__in">
               <div class="quiz__foto" data-quiz="1">
                  <img src="${gamePlants}" alt="" class="quiz__img">
                  <div class="quiz__back">
                     <div class="quiz__back-titil">Космос</div>
                     <a href="/#/quests" data-quest="3" class="quiz__back-btn _start-quest">Начать</a>
                  </div>
               </div>
            </div>
            <div class="quiz__in">
               <div class="quiz__foto" data-quiz="2">
                  <img src="${gameArc}" alt="" class="quiz__img">
                  <div class="quiz__back">
                     <div class="quiz__back-titil">Архитектура</div>
                     <a href="/#/quests" data-quest="4" class="quiz__back-btn _start-quest">Начать</a>
                  </div>
               </div>
            </div>
            <div class="quiz__in">
               <div class="quiz__foto" data-quiz="3">
                  <img src="${gameArt}" alt="" class="quiz__img">
                  <div class="quiz__back">
                     <div class="quiz__back-titil">Искусство</div>
                     <a href="/#/quests" data-quest="5" class="quiz__back-btn _start-quest">Начать</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
   `
   return view;
}

export default Quiz;