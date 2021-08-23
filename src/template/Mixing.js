import "../styles/css/mixing.css"
import mix1 from "../images/mix1.jpg";
import mixUser from "../images/mixing__user.png";
import mixMoney from "../images/money.png";
import mixInternet from "../images/internet.png";

const Mixing = () =>{
   const view = `
   <div class="mixing">
   <div class="mixing__container">
      <div class="mixing__body">
         <div class="mixing__pict">
            <img
               src="${mix1}"
               alt="" class="mixing__img">
         </div>
         <div class="mixing__inner">
            <div class="mixing__titil">Становиьс умнее каждый день вместе с QuizBox</div>
            <div class="mixing__in">
               <div class="mixing__foto">
                  <img src="${mixUser}" alt="" class="mixng__icons">
               </div>
               <div class="mixing__in-titl" data-mixing="1">Больше 1000 новых пользователей каждый день</div>
            </div>
            <div class="mixing__in">
               <div class="mixing__foto">
                  <img src="${mixInternet}" alt="" class="mixng__icons">
               </div>
               <div class="mixing__in-titl" data-mixing="2">Обменевайся опытам вместе с пользователями из
                  разных
                  стран</div>
            </div>
            <div class="mixing__in">
               <div class="mixing__foto">
                  <img src="${mixMoney}" alt="" class="mixng__icons">
               </div>
               <div class="mixing__in-titl " data-mixing="3">Купи платную подписку на QuizBox, чтобы начать
                  играть
                  без границ</div>
            </div>
         </div>
      </div>
   </div>
</div>
   `
   return view
}

export default Mixing