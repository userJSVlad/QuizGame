import "../styles/css/prices.css"

import achiev from "../images/achiev.png";
import pack from "../images/pack.jpg";
import Preloader from "../template/Preloader";
import Popap from "../template/Popap";


const Prices = () => {
   const view = `
   ${Preloader()}
   <div class="achiev">
   <div class="container">
      <div class="achiev__body">
         <div class="achiev__pict">
            <img src="${achiev}" alt="" class="achiev__img">
         </div>
         <div class="achiev__inner">
            <div class="achiev__title">Наш сайт имеет большое количество функциональных особенностей</div>
            <div class="achiev__text">Вы можете с удовольствие изучать что-то новое используя наш сайт, так как он
               имеет: </div>
            <div class="achiev__plus-box">
               <div class="achiev__plus">Удобный и понятный интерфейс</div>
               <div class="achiev__plus">Каждодневные обновления викторин</div>
               <div class="achiev__plus">Многомиллионную аудиторию</div>
               <div class="achiev__plus">Возможность пракачивать свои навыки каждый день</div>
            </div>
         </div>
      </div>
   </div>
</div>


<div class="prices">
   <div class="container">
      <div class="prices__body">
         <div class="prices__title">Цены</div>
         <div class="prices__text">Выбери свой ценовой пакет, который тебе больше всего подходит, и начинай играть в
            QuizBox</div>
         <div class="prices__in">

            <div class="prices__inner">
               <div class="prices__pict">
                  <img src="${pack}" alt="" class="prices__img">
               </div>
               <div class="prices__inner-title">Free Plan</div>
               <div class="prices__all">
                  <div class="prices__all-text">Неограниченная пропускная способность</div>
                  <div class="prices__all-text">Удлбный интерфейс</div>
                  <div class="prices__all-text">Возможность прокачивать свои знания каждый день</div>
                  <div class="prices__all-text">Работа на всех устройствах</div>
               </div>
               <div class="prices__prices">Free</div>
               <div class="prices__button">
                  <button class="prices__click" data-popap="3">Выбрать</button>
               </div>
            </div>

            <div class="prices__inner">
               <div class="prices__pict">
                  <img src="${pack}" alt="" class="prices__img">
               </div>
               <div class="prices__inner-title">Standard Plan</div>
               <div class="prices__all">
                  <div class="prices__all-text">Неограниченная пропускная способность</div>
                  <div class="prices__all-text">Удлбный интерфейс</div>
                  <div class="prices__all-text">Возможность прокачивать свои знания каждый день</div>
                  <div class="prices__all-text">Работа на всех устройствах</div>
                  <div class="prices__all-text">Подключение где угодно</div>
               </div>
               <div class="prices__prices">$9 / mo</div>
               <div class="prices__button">
                  <button class="prices__click" data-popap="3">Выбрать</button>
               </div>
            </div>

            <div class="prices__inner">
               <div class="prices__pict">
                  <img src="${pack}" alt="" class="prices__img">
               </div>
               <div class="prices__inner-title">Premium Plan</div>
               <div class="prices__all">
                  <div class="prices__all-text">Неограниченная пропускная способность</div>
                  <div class="prices__all-text">Удлбный интерфейс</div>
                  <div class="prices__all-text">Возможность прокачивать свои знания каждый день</div>
                  <div class="prices__all-text">Работа на всех устройствах</div>
                  <div class="prices__all-text">Подключение где угодно</div>
                  <div class="prices__all-text">Получите новые возможности</div>
               </div>
               <div class="prices__prices">$12 / mo</div>
               <div class="prices__button">
                  <button class="prices__click" data-popap="3">Выбрать</button>
               </div>
            </div>

         </div>
      </div>
   </div>
</div>
${Popap()}
   `
return view;
}

export default Prices;