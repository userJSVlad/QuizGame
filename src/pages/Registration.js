import "../styles/css/registration.css";
import Preloader from "../template/Preloader";

const Registration = () => {
   const view = `
   ${Preloader()}
   <div class="reg">
      <div class="reg__box">
         <div class="reg__inner">
            <div class="all__form">
            <a href="/#" class="reg__back">Back to Menu</a>
            <div class="reg__title">Registration</div>
               <div class="reg__buttons">
                  <a href="" class="reg__click">Sigh Up</a>
                  <a href="/#/userlogin" class="reg__click-login">Login</a>
               </div>
               <div class="reg__login">
                  <input type="text" name="user_login" placeholder="Логин" class="reg__input _login">
                  <p class="reg_eror-login"></p>
               </div>
               <div class="reg__password">
                  <input type="password" name="user_password" placeholder="Пароль" class="reg__input _password">
                  <p class="reg_eror-password"></p>
               </div>
               <div class="reg__email">
                  <input type="email" name="user_password" placeholder="Email" class="reg__input _email">
                  <p class="reg_eror-email"></p>
               </div>
               <input type="submit" class="reg_submit" value="Готово">
            </div>
         </div>
      </div>
   </div>
   `
   return view;
}

export default Registration