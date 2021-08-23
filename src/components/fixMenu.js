let fixedMenu = () => {
   let header = document.querySelector('.header');
   let scrollY = window.scrollY;
   let headerHeight = header.offsetHeight + 200; // высота menu + 200px
   if (scrollY >= headerHeight) {
      header.classList.add('_fixed'); // если больше делаем активным 
      header.classList.remove('_original') // если меню возвращаеться на своё место, делаем всё как обычно
   } else {
      header.classList.remove('_fixed');
      header.classList.add('_original')
   }
}

let returnMenu = (e) =>{
   if(e.target.tagName !== 'A'){return}
   header.classList.remove('_fixed');
   header.classList.add('_original')
}

export {fixedMenu, returnMenu};
