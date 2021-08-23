import "../styles/css/banner.css"

const Banner = () => {
   const view = 
   `<div class="banner">
   <div class="contain__banner">
      <div class="banner__inner">
         <div class="banner__element"></div>
         <div class="banner__items">
            <div class="banner__btn-left"></div>
            <div class="banner__btn-right"></div>
            <div class="banner___line">
               <div class="banner__lighthouse"></div>
            </div>
            <div class=" banner__score"><span>0</span><span class="banner__score-one">1</span></div>
         </div>
      </div>
   </div>
</div>
`
 return view;
 }
 
 export default Banner;