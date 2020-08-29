'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const lastMovie = prompt('Один из последних просмотренных фильмов?', ''),
      rating = +prompt('На сколько оцените его?', ''),
      lastMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
      rating2 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie] = rating;
personalMovieDB.movies[lastMovie2] = rating2;

console.log(personalMovieDB);