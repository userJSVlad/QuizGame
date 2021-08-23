import mix1 from "../images/mix1.jpg";
import mix2 from "../images/mix2.jpg";
let storeFotoMixing = {
   'one': mix1,
   'two': mix2,
}

let openfirstFoto = () => {
   let mixingFoto = document.querySelector('.mixing__img');
   if (mixingFoto && mixingFoto.src == mix1) { // проверка на null
      setTimeout(() => {
         mixingFoto.classList.remove('_mix-two') 
         mixingFoto.classList.add('_mix-one'); 
         mixingFoto.src = storeFotoMixing.two; // меняем фото местями
         openTwoFoto() // вызываем вторую фунцию 
      }, 20000); // задержка 20s
   }
}
let openTwoFoto = () => {
   let mixingFoto = document.querySelector('.mixing__img');
   if (mixingFoto && mixingFoto.src == storeFotoMixing.two) { // проверка на null
      setTimeout(() => {
         mixingFoto.classList.remove('_mix-one')
         mixingFoto.classList.add('_mix-two');
         mixingFoto.src = storeFotoMixing.one // меняем фото местями
         openfirstFoto() // вызываем первую фунцию
      }, 20000); // задержка 20s
   }
}

export default openfirstFoto;

