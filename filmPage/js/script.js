/* Задания на урок:*/

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const advertising = document.querySelectorAll('.promo__adv img');

advertising.forEach(img => {
    img.remove();
});


// 2) Изменить жанр фильма, поменять "комедия" на "драма"
document.querySelector('.promo__genre').textContent = "ДРАМА";

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
document.querySelector('.promo__bg').style.background = 'url(img/bg.jpg) no-repeat center/cover';


// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 
// 5) Добавить нумерацию выведенных фильмов 
const filmsList = document.querySelector('.promo__interactive-list'),
      sortMovie = movieDB.movies.sort();

filmsList.innerHTML = '';

sortMovie.forEach((item, i) => {
    let li = document.createElement('li');

    li.classList.add('promo__interactive-item');

    li.innerHTML = `${i+1}) ${item} <div class="delete"></div>`;

    filmsList.appendChild(li);
});
