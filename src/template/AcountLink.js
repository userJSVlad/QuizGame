import "../styles/css/header.css"
import trueAcc from "../images/trueAccount.png";

let AcountLink = () =>{
   const view = `
   <a href="/#/inform"" class="heder__acount-click"><img src="${trueAcc}" class="header__account-acc" alt="">Мой аккаунт</a>
   `
   return view
}

export default AcountLink