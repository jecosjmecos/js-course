'use strict'

const personalMovieDB = {
	count: '',
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

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

if(personalMovieDB.count < 10){
	console.log('Мало фильмов');
}else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
	console.log('Вы классический зритель');
}else if(personalMovieDB.count > 30){
	console.log('Вы киноман');
}else{
	console.log('Произошла ошибка');
}

console.log(personalMovieDB);
