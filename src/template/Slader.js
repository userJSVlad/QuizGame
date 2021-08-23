
import "../styles/css/slider.css"
import comment1 from "../images/comment1.jpg";
import comment2 from "../images/comment3.jpg";
import comment3 from "../images/comment2.jpg";

const Slader = () =>{
   const view = `
   <div class="slider">
	<div class="slider__container">
		<div class="slider__body">
			<div class="slider__titl">Нашем сайтом пользуються тысячи довольных клиентов</div>
			<div class="slider__text">Это отзывы наших посителей, которые с большим удовольствием присоединились к
				нам, воспользовавшись нашим сайтом</div>
			<div class="slider__inner">
				<div class="slider__inner-line">
					<div class="slider__box">
						<div class="slider__top">
							<div class="slider__pict">
								<img src="${comment1}" alt="" class="slider__icon">
							</div>
							<div class="slider__top-inner">
								<div class="slider__top-inner-text">Максим Лешкевич</div>
								<div class="slider__elem">
									<div class="slider__top-inner-country">Минск, Беларусь</div>
									<div class="slider__number">4.5</div>
								</div>
							</div>
						</div>
						<div class="slider__bottom">
							<div class="slider__bottom-text">Очень качественный сайт. Ставлю такую оценку, потому что
								всё
								было на высоком уравне</div>
						</div>
					</div>
					<div class="slider__box">
						<div class="slider__top">
							<div class="slider__pict">
								<img src="${comment2}" alt="" class="slider__icon">
							</div>
							<div class="slider__top-inner">
								<div class="slider__top-inner-text">Вадим Соловей</div>
								<div class="slider__elem">
									<div class="slider__top-inner-country">Украина, Киев</div>
									<div class="slider__number">4.0</div>
								</div>
							</div>
						</div>
						<div class="slider__bottom">
							<div class="slider__bottom-text">Сайт сделан хорошо, осбенно понравился Quiz связанный с
								искусством. Искрени рекомендую всем</div>
						</div>
					</div>
					<div class="slider__box">
						<div class="slider__top">
							<div class="slider__pict">
								<img src="${comment3}" alt="" class="slider__icon">
							</div>
							<div class="slider__top-inner">
								<div class="slider__top-inner-text">Илья Перепелов</div>
								<div class="slider__elem">
									<div class="slider__top-inner-country">Россия, Уфа</div>
									<div class="slider__number">4.8</div>
								</div>
							</div>
						</div>
						<div class="slider__bottom">
							<div class="slider__bottom-text">Часто пользуюсь сайтом.Всегда остаюсь давольным. Осбенно
								нравиться обновления каждую неделю</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>

		<div class="slider__menu">
			<div class="slider__element">
				<div class="slider__clikers"></div>
				<div class="slider__all"></div>
			</div>
			<div class="slider__buttons">
				<button class="slider__buttons-right"></button>
			</div>
		</div>
	</div>
   `
   return view
}

export default Slader;