let burgAction = (e) => {
   let menuBurger = document.querySelector('.menu__burger');
   let target = e.target
   if (target.className == 'btn__burger-click-open' || target.className == 'header__element') {
      menuBurger.classList.add('_burg-activ') // если клик запределами удалеяем 
      document.body.classList.add('scroll') // запрщаем скролл
   } else {
      menuBurger.classList.remove('_burg-activ') 
      document.body.classList.remove('scroll') // разрешаем скролл
   }
}

let closeClickBurger = (e) => {
   let menuBurger = document.querySelector('.menu__burger'); // закрытие бургера по клику на кнопку esc
   if (e.keyCode === 27) {
      menuBurger.classList.remove('_burg-activ')
      document.body.classList.remove('scroll') 
   }
}

export {burgAction, closeClickBurger};