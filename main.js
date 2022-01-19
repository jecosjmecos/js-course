'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
		film1 = prompt('Один из последних просмотренных фильмов', ''),
		filmGrade1 = prompt('На сколько оцените его?', ''),
		film2 = prompt('Один из последних просмотренных фильмов', ''),
		filmGrade2 = prompt('На сколько оцените его?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

personalMovieDB.movies.film1 = filmGrade1;
personalMovieDB.movies.film2 = filmGrade2;

console.log(personalMovieDB);
