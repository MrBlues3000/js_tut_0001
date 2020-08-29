'use strict';
let numberOfFilms = 0;
do {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  if (numberOfFilms <= 0) {
    alert('Введите положительное целое число!');
  }
} while (numberOfFilms <= 0);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 1; i <= numberOfFilms; i++) {
  let a = '', b = 0;
  do {
    a = prompt('Один из последних просмотренных фильмов?', '');
    if (a == '') {
      alert('Введите непустое название фильма!');
    }
  } while (a == '');

  do {
    b = +prompt('На сколько оцените его?', '');
    if (b <= 0) {
      alert('Введите положительное целое число!');
    }
  } while (b <= 0);
  personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  alert('Вы киноман');
} else {
  alert('ERROR!');
}
console.log(personalMovieDB);