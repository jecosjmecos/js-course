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

});