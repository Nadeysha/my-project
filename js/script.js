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



for (let i = 1; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?", ""),
        b = +prompt("На солько оцените его?", "");
        if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
        personalMovieDB[a] = b;
        console.log('Done');
        } else {
            console.log('error');
            i--
        };

};

/* i-- (возврат на шаг назад) проставили для того чтобы если пользователь ввел первый
 раз не соотетствующее условиям значение, то оба вопроса еще раз спросились в любом случае, 
 так как по условию пользователь должен ответить 2 раза и 2 раза записаться данные */



if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
};

console.log(personalMovieDB);