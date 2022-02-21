'use strict'

document.addEventListener('DOMContentLoaded', function(){


	/*
	* timer
	*/
	const deadline = '2022-02-20';

	
	setClock(deadline);

	function setClock() {
		const interval = setInterval(updateDate, 1000);
		
		updateDate();

		function updateDate() {
			const timer = document.querySelector('.timer'),
						dateObj = getTimeRemaining(deadline);

			if(dateObj.total <= 0){
				clearInterval(interval);
				timer.querySelector('#days').innerHTML = '00';
				timer.querySelector('#hours').innerHTML = '00';
				timer.querySelector('#minutes').innerHTML = '00';
				timer.querySelector('#seconds').innerHTML = '00';
			}else{
				timer.querySelector('#days').innerHTML = getZero(dateObj.days);
				timer.querySelector('#hours').innerHTML = getZero(dateObj.hours);
				timer.querySelector('#minutes').innerHTML = getZero(dateObj.minutes);
				timer.querySelector('#seconds').innerHTML = getZero(dateObj.seconds);
			}
		}
	}

	function getTimeRemaining(endtime) {
		const total = Date.parse(new Date(endtime)) - Date.parse(new Date()),
					days = Math.floor( (total/(1000*60*60*24)) ),
					seconds = Math.floor( (total/1000) % 60 ),
					minutes = Math.floor( (total/1000/60) % 60 ),
					hours = Math.floor( (total/(1000*60*60) % 24) );

		return {
			total,
			days,
			seconds,
			minutes,
			hours
		}
	}

	function getZero(num) {
		if(num < 10){
			return `0${num}`;
		}else{
			return num;
		}
	}


	/*
	* Использование классов для карточек
	*/

	class FoodItem{
		constructor(img, alt, title, description, price, parentSelector, ...classes){
			this.img = img;
			this.alt = alt;
			this.title = title;
			this.description = description;
			this.price = price;
			this.classes = classes;
			this.parentSelector = parentSelector;
		}
		render(){
			let element = document.createElement('div');

			if(this.classes.length === 0){
				this.classes.forEach(className => element.classList.add(className));
			}else{
				element.classList.add('menu__item');
			}

			
			
			element.innerHTML = `
				<img src="${this.img}" alt="${this.alt}">
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.description}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
			`;

			document.querySelector(this.parentSelector).append(element);
		}
	}

	const vegy = [
								'img/tabs/vegy.jpg', 
								'vegy', 
								'Меню "Фитнес"',
								'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
								229,
								'.menu__field .container'
							],
				elite = [
								'img/tabs/elite.jpg', 
								'elite', 
								'Меню “Премиум”',
								'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
								550,
								'.menu__field .container',
								'menu__item',
								'menu__item_premium',
								'menu__item_center'
							],
				post = [
								'img/tabs/post.jpg', 
								'post', 
								'Меню "Постное"', 
								'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
								430,
								'.menu__field .container',
								'menu__item'
							];
	
	new FoodItem(...vegy).render();
	new FoodItem(...post).render();
	new FoodItem(...elite).render();
});