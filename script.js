"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


/* i-- (возврат на шаг назад) проставили для того чтобы если пользователь ввел первый
 раз не соотетствующее условиям значение, то оба вопроса еще раз спросились в любом случае, 
 так как по условию пользователь должен ответить 2 раза и 2 раза записаться данные */

 function rememberMyFilms() {

    for (let i = 1; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", ""),
            b = +prompt("На солько оцените его?", "");
            if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
            personalMovieDB[a] = b;
            console.log('Done');
            } else {
                console.log('error');
                i--
            }
    
    }
 }

  rememberMyFilms();



function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

  detectPersonalLevel();

 
function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    
    }

}
showMyDB();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Один из последних просмотренных фильмов?", ${i}`);
    }
}
writeYourGenres();



