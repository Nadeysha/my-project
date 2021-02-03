"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movies1 = prompt("Один из последних просмотренных фильмов?", ""),
    movies2 = +prompt("На солько оцените его?", ""),
    movies3 = prompt("Один из последних просмотренных фильмов?", ""),
    movies4 = +prompt("На солько оцените его?", "");


personalMovieDB.movies[movies1] = movies2;
personalMovieDB.movies[movies3] = movies4;

console.log(personalMovieDB);
