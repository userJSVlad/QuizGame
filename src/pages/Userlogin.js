import Preloader from "../template/Preloader";
import "../styles/css/login.css";

const Userlogin = () =>{
   const view = `
   ${Preloader()}
   <div class="login">
      <div class="login__box">
         <div class="login__inner">
            <div class="login__form">
            <a href="/#" class="login__back">Back to Menu</a>
            <div class="login__title">Login</div>
               <div class="login__buttons">
                  <a href="/#/registration" class="login__click">Sigh Up</a>
                  <a href="" class="login__click-login">Login</a>
               </div>
               <div class="login__login">
                  <input type="text" name="user_login" placeholder="Логин" class="login__input _log">
                  <p class="login_eror-login"></p>
               </div>
               <div class="login__password">
                  <input type="password" name="user_password" placeholder="Пароль" class="login__input _pasw">
                  <p class="login_eror-password"></p>
               </div>
               <input type="submit" class="login_submit" value="Готово">
            </div>
         </div>
      </div>
   </div>
   
   `
   return view
}

export default Userlogin;