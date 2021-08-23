import "../styles/css/gams.css"
import jap from "../images/jap.jpg";
import ang1 from "../images/ang1.jpg";
import pari1 from "../images/pari1.png";

const Gams = () => {
   const view = 
   `<div class="gams">
   <div class="gams__back"></div>
   <div class="gams__container">
      <div class="gams__body">
         <div class="gams__inner">
            <div class="gams__tititl">Quiz по странам</div>
            <div class="gams_text">Мы разработали для вас новую викторину. Вы можете проверить свои знания по
               географии
               и архитектуре, нажав на одну из кнопок</div>
            <button class="gams__button" data-popap="1">Читать больше</button>
         </div>
         <div class="gams__inners">
            <div class="gams__inner-img">
               <img src="${jap}"
               alt="" class="gams__inner-foto">
               <a href="/#/quests" data-quest="0" class="gams__button-img _quest-game _start-quest" data-gams="1">Япония</a>
            </div>


            <div class="gams__inner-img">
               <img
                  src="${ang1}"
                  alt="" class="gams__inner-foto">
                  <a href="/#/quests" data-quest="1" class="gams__button-img _quest-game _start-quest" data-gams="2">Англия</a>
            </div>

            <div class="gams__inner-img">
               <img src="${pari1}" alt="" class="gams__inner-foto">
               <a href="/#/quests" data-quest="2" class="gams__button-img _quest-game _start-quest" data-gams="3">Франция</a>
            </div>
         </div>
      </div>
   </div>
</div>
`
 return view;
 }
 
 export default Gams;