import "../styles/css/inform.css"
//import "../styles/css/adaptivHome.css"
import gameIcon from "../images/gmaeIcon.png";
import sub from "../images/sub.png";
import userIcon from "../images/userIcon.png";


const Inform = () => {
   const view = 
   `
   <div class="inform">
   <div class="inform__container">
      <div class="inform__body">
         <div class="inform__background">
            <div class="inform__inner">
               <div class="inform__border">
                  <div class="inform__wrapp">
                     <div class="inform__pict">
                        <img src="${userIcon}" alt="" class="inform__img">
                     </div>
                     <div class="inform__number" data-number="1">0<span class="inform-plus">+</span></div>
                  </div>
                  <div class="inform__text">Пользователи</div>
               </div>
            </div>
            <div class="inform__inner">
               <div class="inform__border">
                  <div class="inform__wrapp">
                     <div class="inform__pict">
                        <img src="${sub}" alt="" class="inform__img">
                     </div>
                     <div class="inform__number" data-number="2">0<span class="inform-plus">+</span></div>
                  </div>
                  <div class="inform__text">Подписки</div>
               </div>
            </div>
            <div class="inform__inner">
               <div class="inform__border">
                  <div class="inform__wrapp">
                     <div class="inform__pict">
                        <img src="${gameIcon}" alt="" class="inform__img">
                     </div>
                     <div class="inform__number" data-number="3">0<span class="inform-plus">+</span></div>
                  </div>
                  <div class="inform__text">Quizzes</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
   `
 return view;
 }
 
 export default Inform;