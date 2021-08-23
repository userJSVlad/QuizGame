let n1 = 0;
let n2 = 0;
let n3 = 0;

let moreInformNumber = () => {
   if (document.querySelector('.inform')) {
      let informContainer = document.querySelector('.inform');
      let windowCenter = window.scrollY + window.innerHeight;
      let informBoxHeight = informContainer.offsetHeight / 2 + informContainer.offsetTop
      if (windowCenter > informBoxHeight) { // как только задеваем элемент
         plusNumber()
      }else{
         n1 = 0;
         n2 = 0;
         n3 = 0;
      }
   }
}

let plusNumber = () => {
   let allInformNumbers = document.querySelectorAll('.inform__number')
   for (let i = 0; i < allInformNumbers.length; i++) {
      let target = allInformNumbers[i].dataset.number; // вычесляем элемент по датасету
      if (target === '1') {
         if (n1 === 1000) { return } // если 1000, то плюс 25 при скролле
         allInformNumbers[i].textContent = n1 += 25;
      } else if (target === '2') {
         if (n2 === 500) { return } // если 500, то плюс 20 при скролле
         allInformNumbers[i].textContent = n2 += 20;
      } else if (target === '3') {
         if (n3 === 50) { return } // если 50, то плюс 2 при скролле
         allInformNumbers[i].textContent = n3 += 2;
      }

   }
}

export default moreInformNumber;