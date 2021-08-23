import {storeGamsImgs} from "../state/state.js";

let overGams = (e) => {
   let target = e.target
   if (target.tagName !== 'A') return // если не tag A, то выйти из функции

   changePictOne(target);
}

let changePictOne = (targ) => { // если мышка наведенна на кнопку
   let img = targ.parentElement.children[0];
   let btn = targ.dataset.gams;
   switch (btn) {
      case '1':
         img.classList.remove('puck-two') // меняем на дуругю фотку
         img.src = storeGamsImgs[0].one;
         img.classList.add('puck-one')
         break;
      case '2':
         img.classList.remove('puck-two') // меняем на дуругю фотку
         img.src = storeGamsImgs[0].two;
         img.classList.add('puck-one')
         break;
      case '3':
         img.classList.remove('puck-two') // меняем на дуругю фотку
         img.src = storeGamsImgs[0].three;
         img.classList.add('puck-one')
         break;
   }
}


let outGams = (e) => { // если мышка уведенна с кноки
   let target = e.target
   if (target.tagName !== 'A') return

   changePictTwo(target);
}

let changePictTwo = (targ) => { // если мышка наведенна на кнопку
   let img = targ.parentElement.children[0];
   let btn = targ.dataset.gams;
   switch (btn) {
      case '1': 
         img.classList.remove('puck-one') // меняем на дуругю фотку
         img.src = storeGamsImgs[1].one;
         img.classList.add('puck-two')
         break;
      case '2':
         img.classList.remove('puck-one') // меняем на дуругю фотку
         img.src = storeGamsImgs[1].two;
         img.classList.add('puck-two')
         break;
      case '3':
         img.classList.remove('puck-one') // меняем на дуругю фотку
         img.src = storeGamsImgs[1].three;
         img.classList.add('puck-two')
         break;
   }
}


export {outGams, overGams}