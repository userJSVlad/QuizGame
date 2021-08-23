import logo from "../images/logo.png";
import hamburger from "../images/hamburger_menu_icon_149466.png";
import "../styles/css/header.css"
import AcountLink from "../template/AcountLink"
import RegAndLogin from "../template/RegAndLogin"
import BurgerRegLogin from "../template/BurgerRegLogin"
import MoreGame from "../template/MoreGame"



const Header = () => {
  const view =
`<div class="header">
			<div class="contain">
				<div class="header__body">
					<div class="header__log-inner">
						<div class="header__logo">
							<img src="${logo}" alt="" class="header__logo-img cliker">
						</div>
						<a href="/#" class="header__name-sity cliker">QuizBox</a>
					</div>
					<div class="header__menu">
						<ul class="header__menu-inner">
							<li class="header__element"><a href="/#" class="header__element-link cliker">Главное меню</a>
							</li>
							<li class="header__element"><a href="/#/prices" class="header__element-link cliker">Цены</a></li>
							<li class="header__element"><a href="/#/quizzes" class="header__element-link cliker">Quizzes</a></li>
							<li class="header__element"><a href="/#/informs" class="header__element-link cliker">Инофрмация</a></li>
							${localStorage.getItem('registration') ? MoreGame() : ""}
						</ul>
					</div>
					<div class="header__acount" >
						${localStorage.getItem('registration') ? AcountLink() : RegAndLogin()}
					</div>
					<div class="btn__burger-open">
						<img src="${hamburger}" alt="" class="btn__burger-click-open">
					</div>
					<div class="menu__burger">
						<div class="menu__burger-all">
							<div class="header__menu-burger">
								<ul class="header__menu-inner-burger">
									<li class="header__element"><a href="/#" class="header__element-link">Главное
											меню</a></li>
									<li class="header__element"><a href="/#/prices" class="header__element-link">Цены</a></li>
									<li class="header__element"><a href="/#/quizzes" class="header__element-link">Quizzes</a></li>
									<li class="header__element"><a href="/#/inform" class="header__element-link">Инофрмация</a></li>
									${localStorage.getItem('registration') ? MoreGame() : ""}
								</ul>
								<div class="header__acount-burger">
								${localStorage.getItem('registration') ? AcountLink() : BurgerRegLogin()}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
`;
return view;

}

export default Header;