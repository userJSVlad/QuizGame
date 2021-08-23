
import "../styles/css/subscribe.css"
const Subscribe = () => {
   const view = `
   <div class="subscribe">
   <div class="container__sub">
      <div class="subscribe__border">
         <div class="subscribe__body">
            <div class="subscribe__left">
               <div class="subscribe__left-titl">Подпишись на QuizBox</div>
               <div class="subscribe__left-text">Не пропусти всё самое интресное</div>
            </div>
            <div class="subscribe__right">
               <button class="subscribe__right-button" data-popap="2">Подпишись</button>
            </div>
         </div>
      </div>
   </div>
</div>
   `
   return view
}

export default Subscribe;