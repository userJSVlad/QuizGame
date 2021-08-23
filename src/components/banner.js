let el = 0;
let colBanner = 1;

let moveLightHouseRight = () => {
   let banner = document.querySelector('.banner__element');
   let lightHouse = document.querySelector('.banner__lighthouse')
   el += 117;
   if (el > 234) {
      banner.classList.remove('_banner3')
      banner.classList.add('_banner2')
      el = 0;
   } else if (el == 117) {
      banner.classList.remove('_banner2')
      banner.classList.add('_banner1')
   } else if (el == 234) {
      banner.classList.remove('_banner1')
      banner.classList.add('_banner3')
   }
   lightHouse.style.transform = `translate(${el}px)`;
   plusBannerScoreOne();
}
let moveLightHouseLeft = () => {
   let banner = document.querySelector('.banner__element');
   let lightHouse = document.querySelector('.banner__lighthouse')
   el += -117;
   if (el < 0) {
      el = 234;
      banner.classList.remove('_banner2')
      banner.classList.add('_banner3')
   } else if (el == 117) {
      banner.classList.remove('_banner3')
      banner.classList.add('_banner1')
   } else if (el == 0) {
      banner.classList.remove('_banner1')
      banner.classList.add('_banner2')
   }
   lightHouse.style.transform = `translate(${el}px)`;
   minusBannerScoreOne();
}
let plusBannerScoreOne = () => {
   let bannerScore = document.querySelector('.banner__score-one')
   colBanner++
   if (colBanner === 4) {
      colBanner = 1;
   }
   bannerScore.textContent = `${colBanner}`;
}

let minusBannerScoreOne = () => {
   let bannerScore = document.querySelector('.banner__score-one')
   colBanner--
   if (colBanner === 0) {
      colBanner = 3;
   }
   bannerScore.textContent = `${colBanner}`;
}

export {moveLightHouseLeft, moveLightHouseRight}