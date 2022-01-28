'use strict'

const personalMovieDB = {
	count: '',
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function(){
		let films = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while(films == '' || films == null || isNaN(films)){
			films = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}

		personalMovieDB.count = films;
	},
	rememberMyFilms: function(){
		for(let i = 0; i < 2; i++){
			const film = prompt('Один из последних просмотренных фильмов', ''),
					grade = prompt('На сколько оцените его?', '');

			if(film != '' && grade != '' && film != null && grade != null && film.length > 50){
				personalMovieDB.movies[film] = grade;
				console.log('done');
			}else{
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function(){
		if(personalMovieDB.count < 10){
			console.log('Мало фильмов');
		}else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
			console.log('Вы классический зритель');
		}else if(personalMovieDB.count > 30){
			console.log('Вы киноман');
		}else{
			console.log('Произошла ошибка');
		}
	},
	writeYourGenres: function(){
		for(let i = 1; i <= 3; i++){
			let getGenres = prompt(`Ваш любимый жанр под номером ${i}`,'');

			if(getGenres == null || getGenres === ''){
				console.log('Вы ввели некорректные данные или не ввели их вовсе');
				i--;
			}else{
				this.genres.push(getGenres);
			}
		}

		this.genres.forEach((value, index) =>{
			console.log(`Любимый жанр ${index + 1} - это ${value}`);
		});
	},
	showMyDB: function (db){
		if(db.privat != false){
			console.log(db);
		}
	},
	toggleVisibleMyDB: function(){
		if(this.privat == true){
			this.privat = false;
		}else{
			this.privat = true;
		}
	}
}
// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres(personalMovieDB);

// personalMovieDB.showMyDB(personalMovieDB);


