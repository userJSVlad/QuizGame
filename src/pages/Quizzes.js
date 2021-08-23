import "../styles/css/game.css"
import biolog from "../images/game__buologi.jpg";
import litra from "../images/game__litra.jpg";
import geog from "../images/game__geograf.jpg";
import mars from "../images/planets__mars.jpg";
import pluto from "../images/game__pluto.jpg";
import mercuri from "../images/planets__mercuria.jpg";
import Preloader from "../template/Preloader";

const Quizzes = () =>{
   const view = `
   ${Preloader()}
   <div class="game">
      <div class="game__container">
         <div class="game-body">
            <div class="game__titl">Еще больше Quiz </div>
            <div class="game__subject-title">Школьные предметы</div>
            <div class="game__subject-inner">
               <div class="game__subject-in">
                  <div class="game__subjact-pict">
                     <a href="/#/quests" data-quest="9" class="game__subjact-button _start-quest">Играть</a>
                     <img src="${biolog}" alt="" class="game__subjact-img">
                  </div>
               </div>
               <div class="game__subject-in">
                  <div class="game__subjact-pict">
                  <a href="/#/quests" data-quest="10" class="game__subjact-button _start-quest">Играть</a>
                     <img src="${geog}" alt="" class="game__subjact-img">
                  </div>
               </div>
               <div class="game__subject-in">
                  <div class="game__subjact-pict">
                  <a href="/#/quests" data-quest="11" class="game__subjact-button _start-quest">Играть</a>
                     <img src="${litra}" alt="" class="game__subjact-img">
                  </div>
               </div>
            </div>
            <div class="game__subject-title">Планеты</div>
            <div class="game__planets-inner">
               <div class="game__planets-in">
                  <div class="game__planets-pict">
                     <a href="/#/quests" data-quest="6" class="game__planets-button _start-quest">Играть</a>
                     <img src="${mars}" alt="" class="game__planets-img">
                  </div>
               </div>
               <div class="game__planets-in">
                  <div class="game__planets-pict">
                  <a href="/#/quests" data-quest="7" class="game__planets-button _start-quest">Играть</a>
                     <img src="${pluto}" alt="" class="game__planets-img">
                  </div>
               </div>
               <div class="game__planets-in">
                  <div class="game__planets-pict">
                  <a href="/#/quests" data-quest="8" class="game__planets-button _start-quest">Играть</a>
                     <img src="${mercuri}" alt="" class="game__planets-img">
                  </div>
               </div>
            </div>



         </div>
      </div>
   </div>
   `
   return view
}

export default Quizzes;