//
// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arr = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 100), Math.floor(Math.random() * 10), Math.floor(Math.random() * 100), Math.floor(Math.random() * 10), Math.floor(Math.random() * 1000)]
console.log(arr);
console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5]);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book1 = {
    name: 'name',
    pages: 143,
    genre: 'novel',
}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори


let book2 = {
    name: 'lord',
    pages: 200,
    genre: 'historical',
    authors: 'Braun Wills'
}


// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт


let book3 = [
    {
        name: 'harry',
        pages: 143,
        genre: 'historical',
        authors: 'Braun'
    },
    {
        name: 'lord',
        pages: 143,
        genre: 'novel',
        authors: 'Wills'
    },
    {
        name: 'xxx',
        pages: 143,
        genre: 'novel',
        authors: 'Bill'
    }
]

console.log(book3[0], book3[1],book3[2]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let w = +prompt('choose width: ', 23);
console.log(w);

let h = +prompt('choose height', 10)
console.log(h);

let s = (w*h);
console.log(s)


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = +prompt('choose height', 10);
console.log(heightC);

let dC = +prompt('choose diameter', 4);
console.log(dC);

let v =(heightC*dC);
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let sideN = +prompt('choose side', 3);
console.log(sideN);

let sideM = +prompt('choose side', 4);
console.log(sideM);

let k = (Math.pow(sideN, 2));
let k1 = (Math.pow(sideM, 2));
let result =(Math.sqrt(k + k1));
console.log(result);

