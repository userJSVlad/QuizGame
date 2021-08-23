import "../styles/css/inf.css"
import Preloader from "../template/Preloader";

const Inf = () => {
   const view =
   `
   ${ Preloader()}
   <div class="news">
      <div class="container">
         <div class="news__body">
            <div class="news__title">Мы рады приветствовать вас на нашем сайте <span>QuizBox</span></div>
            <div class="news__in">
               <div class="news__pict">
                  <img src="https://lesosib9.siteedu.ru/media/sub/921/uploads/-01-1.png" alt="" class="news__img">
               </div>
               <div class="news__inner">
                  <div class="news__all">
                     <div class="news__tit">Что такое сайт QuizBox ?</div>
                     <div class="news__text">QuizBox - это интеллектуально-развлекательный сайт в котором нужно отвечать
                        на
                        разные вопросы и пракачивать своё мышление. Сайт учит думать неординарно, заставляет задуматься
                        и
                        узнать те вещи, о которых ты и не знал. На сайте в основном представленны представленны вопросы
                        связанные с логикой и эрудицей.</div>
                  </div>
                  <div class="news__all">
                     <div class="news__tit">Как играть в QuizBox ?</div>
                     <div class="news__text">Это легче простого! Для этого вам стоит определиться с тематикой Quiz.Вы
                        можете выбрать тему, в которой вы неуверены, чтобы узнать больше нового и интресного для себя.
                        Или же, вы можете выбрать тему, в которой вы уверены, чтобы узнать уровень своих знаний, поэтому
                        нетеряй времени и начинай изучать что-то новое вместе с QuizBox</div>
                  </div>
                  <div class="news__all">
                     <div class="news__tit">QuizBox платный?</div>
                     <div class="news__text">Нет, вы можетет играть в QuizBox не заплатив не копейки. Однако, на сайте
                        есть варинт подписки. Подписка - это возможность расширить функции QuizBox и сыграть первым в
                        наши новые викторины</div>
                  </div>
                  <div class="news__all">
                     <div class="news__tit">Обнавление</div>
                     <div class="news__text">Мы стараемся обнавлять сайт, как можно чаще, чтобы пользователи могли
                        узнавать что-то новое как можно быстрее!</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
`
return view;
}
export default Inf;