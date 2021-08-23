let movePreloader = () => {
   let pleloader = document.querySelector('.pleloader');
   document.body.classList.add('scroll')
   setTimeout(() => {
      scrollTop(); // скроллим страницу вверх
      pleloader.classList.add('pre__hidden'); 
      document.body.classList.remove('scroll') // разрешаем скролл
   }, 2000);
}


let scrollTop = () => { // скроллим страницу вверх
   window.scrollTo({
      top: 0,
      behavior: 'instant'
   });
}

export {movePreloader, scrollTop};
