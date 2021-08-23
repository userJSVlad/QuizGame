import router from "../routes";
import { moveAllGamsFotos, moveMixingElements, moveQuizEelements, scrollLogo, moveAllPrisesBlock } from "../components/scroll.js"
import { fixedMenu, returnMenu } from "../components/fixMenu.js";
import moreInformNumber from "../components/inform.js";
import { outGams, overGams } from "../components/gams.js";
import { moveLightHouseLeft, moveLightHouseRight } from "../components/banner.js";
import { burgAction, closeClickBurger } from "../components/burger.js";
import { closeClickPopap, closePopap, openPopap } from "../components/popap.js";
import openfirstFoto from "../components/mixing.js";
import { movePreloader, scrollTop } from "../components/preloader";
import { makeColorCirclesRight, createColorCircles, startSlidre, clickButtonSliderRight } from "../components/slader.js";
import { findQuizOnClick, checkQuiz, findAnswer, makeBoxAnswers, startQuizGame, retrunMenuByHeaderBtn, canselScrollonPageGame, stopeMoveClick, deleteScroll } from "../components/startGams"
import { getUserInfo, checkLogin, checkEmail, checkPassword} from "../utils/postDataRegistrtion";
import { getDataLogin } from "../utils/getDataLogin";







const getContent = async () => {
  // load page
  await router();
  var pleloader = document.querySelector('.pleloader');
  if (pleloader) {
    movePreloader()
  }

  // REGISTARTION
  //checkLogin();

  if(document.querySelector('._login')){
    document.querySelector('._login').addEventListener('blur', checkLogin)
  }
  if(document.querySelector('._password')){
    document.querySelector('._password').addEventListener('blur', checkPassword)
  }
  if(document.querySelector('._email')){
    document.querySelector('._email').addEventListener('blur', checkEmail)
  }
  //checkEmail();
  //checkPassword()

  findQuizOnClick();
  //return menuHeder and fixedMenu
  document.querySelector('.header__menu-inner').addEventListener('click', returnMenu)
  window.addEventListener('scroll', fixedMenu)

  //banner
  if (document.querySelector('.banner__btn-left')) {
    document.querySelector('.banner__btn-left').addEventListener('click', moveLightHouseLeft)
    
  }
  // banner
  if(document.querySelector('.banner__btn-right')){
    document.querySelector('.banner__btn-right').addEventListener('click', moveLightHouseRight)
  }


  //makePostForServer
  if (document.querySelector('.reg_submit')) {
    document.querySelector('.reg_submit').addEventListener('click', getUserInfo)
  }
  //check Login
  if (document.querySelector('.login_submit')) {
    document.querySelector('.login_submit').addEventListener('click', getDataLogin)
  }

  //burger
  document.addEventListener('keydown', closeClickBurger)
  document.body.addEventListener('click', burgAction)

  //inform
  if (document.querySelector('.inform')) {
    window.addEventListener('scroll', moreInformNumber)
  }


  // allScroll
  window.addEventListener('scroll', moveAllGamsFotos);
  window.addEventListener('scroll', moveMixingElements);
  window.addEventListener('scroll', moveQuizEelements);
  window.addEventListener('scroll', moveAllPrisesBlock);
  scrollLogo();

  //mixing
  openfirstFoto();

  //sliderElements
  const slider = document.querySelector('.slider__inner');
  if (slider) {
    document.querySelector('.slider__buttons-right').addEventListener('click', makeColorCirclesRight);
    document.querySelector('.slider__buttons-right').addEventListener('click', clickButtonSliderRight)
    createColorCircles()
    startSlidre();
  }

  //gams
  let gamsInner = document.querySelector('.gams__inners')
  if (gamsInner) {
    document.querySelector('.gams__inners').addEventListener('mouseout', outGams)
    document.querySelector('.gams__inners').addEventListener('mouseover', overGams)
  }

  //popap
  let popapBody = document.querySelector('.popap__body')
  if (popapBody) {
    document.addEventListener('keydown', closeClickPopap)
    document.querySelector('.popap__body').addEventListener('click', closePopap)
  }

  if(document.querySelector('.gams__button')){
    document.querySelector('.gams__button').addEventListener('click', openPopap)
  }

  if(document.querySelector('.subscribe__right-button')){
    document.querySelector('.subscribe__right-button').addEventListener('click', openPopap)
  }

  let prises = document.querySelectorAll('.prices__click')
  if(document.querySelectorAll('.prices__click')){
    for(let i = 0; i<prises.length; i++){
      prises[i].addEventListener('click', openPopap)
    }
  }

  // startGame

  retrunMenuByHeaderBtn()
  startQuizGame();
  makeBoxAnswers()
  if (document.querySelector('.quest__inner')) {
    document.querySelector('.quest__inner').addEventListener('click', findAnswer)
    document.querySelector('.quest__button-click').addEventListener('click', stopeMoveClick)
  }



  //}
  canselScrollonPageGame()

}

export { getContent };