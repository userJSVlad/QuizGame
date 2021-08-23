import "../styles/css/header.css"
import account from "../images/account.png";

let BurgerRegLogin = () =>{
   const view = `
   <a href="/#/registration" class="heder__acount-click"><img src="${account}" class="header__account-burger" alt="">Регистрация<a href="/#/userlogin" class="heder__acount-click">Вход</a></a>
   `
   return view
}

export default BurgerRegLogin