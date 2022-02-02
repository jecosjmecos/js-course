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

// Удалить все рекламные блоки со страницы (правая часть сайта)
const advertising = document.querySelectorAll('.promo__adv img');

advertising.forEach(img => {
    img.remove();
});


// Изменить жанр фильма, поменять "комедия" на "драма"
document.querySelector('.promo__genre').textContent = "ДРАМА";

// Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
document.querySelector('.promo__bg').style.background = 'url(img/bg.jpg) no-repeat center/cover';


// Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 
// Добавить нумерацию выведенных фильмов 
// Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

function displayMovies(newMovie = ''){
    if(newMovie != ''){
        movieDB.movies.push(newMovie);
    }

    const filmsList = document.querySelector('.promo__interactive-list'),
          sortMovie = movieDB.movies.sort();

    filmsList.innerHTML = '';

    sortMovie.forEach((item, i) => {
        let str = item,
            li = document.createElement('li');
        
        if(str.length > 21){
            str = str.substr(0, 21) + '...';
        }

        li.classList.add('promo__interactive-item');

        li.dataset.index = i;

        li.innerHTML = `<b>${i+1})</b> ${str} <div class="delete"></div>`;

        filmsList.appendChild(li);
    });
}

displayMovies();



// Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
// Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"
const form = document.querySelector('.add');
form.addEventListener('submit', function(e){
    e.preventDefault();

    let formVal = this.querySelector('.adding__input'),
        checkbox = this.querySelector('input[type="checkbox"]:checked');
    
    if(checkbox != null){
        console.log("Добавляем любимый фильм");
    }

    displayMovies(formVal.value);

    formVal.value = '';
});

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
function deleteFilm(){
    const list = document.querySelector('.promo__interactive-list');
    
    list.addEventListener('click', function(e){
        if(e.target.classList.contains('delete')){
            let index = +e.target.parentElement.dataset.index;
            
            movieDB.movies.forEach((item, i) =>{
                if(index == i){
                    movieDB.movies.splice(i, 1);
                }
            });

           displayMovies();
        }
    });
}
deleteFilm();