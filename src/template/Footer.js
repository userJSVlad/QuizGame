import logo from "../images/logo.png";
import f from "../images/f.png";
import vk from "../images/vk.png";
import inst from "../images/inst.png";
import "../styles/css/adaptivHome.css"
import "../styles/css/footer.css";



const Footer= () => {
   const view = `
   <div class="footer">
   <div class="container__footer">
      <div class="footer__body">
         <div class="footer__left">
            <div class="footer__left-inner">
               <img src="${logo}" alt="">
               <div class="footer__left-titl">QuizBox</div>
            </div>
            <div class="footer__left-text"><span class="footer__left-text-sity">QuizBox </span>один из лучших
               сайтов
               для виртуальных викторин</div>
         </div>
         <div class="footer__right">
            <div class="footer__right-inner">
               <div class="footer__right-cliker icon-vk">
                  <img src="${vk}" alt="" class="footer__right-icon">
               </div>
               <div class="footer__right-cliker icon-inst">
                  <img src="${inst}" alt="" class="footer__right-icon">
               </div>
               <div class="footer__right-cliker icon-f">
                  <img src="${f}" alt="" class="footer__right-icon">
               </div>
            </div>
            <div class="footer__right-text">©2020LaslesVPN</div>
         </div>
      </div>
   </div>
</div>
     `;
   return view;
 }
 
 export default Footer;