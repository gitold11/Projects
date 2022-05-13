// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let hw = 'hello world';
// console.log(hw.length);
//
// let li = 'lorem ipsum';
// console.log(li.length);
//
// let jic = 'javascript is cool';
// console.log(jic.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let hw = 'hello world';
// console.log(hw.toUpperCase());
//
// let li = 'lorem ipsum';
// console.log(li.toUpperCase());
//
// let jic = 'javascript is cool';
// console.log(jic.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let hw = 'hello world';
// console.log(hw.toLowerCase());
//
// let li = 'lorem ipsum';
// console.log(li.toLowerCase());
//
// let jic = 'javascript is cool';
// console.log(jic.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string';
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та
// колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr.map(num => {
//     return (num.toString());
// }));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його
// від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
//
// let sortNums = (direction, arr) => {
//     if(direction === 'ascending'){
//         arr.sort((a,b) => {
//             return a-b;
//         })
//     }else if (direction === 'descending'){
//         arr.sort((a,b) =>{
//             return b-a;
//         })
//     }
//     return arr;
// }
//
// console.log(sortNums('descending', nums));
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let array = [];
//
// let coursesFilter = (arr, amountOfMonth, arrayForPushing) => {
//     arr.filter(course => {
//         if (course.monthDuration > amountOfMonth) {
//             arrayForPushing.push(course);
//
//             arrayForPushing.sort((a, b) => {
//                 return a.monthDuration - b.monthDuration;
//             })
//
//         }
//     })
// }
//
// coursesFilter(coursesAndDurationArray, 5, array);
// console.log(array);

//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }