//
//
// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let normalize = (addToNormalize) => {
//     return addToNormalize.replaceAll('.',' ').replaceAll('-',' ').replaceAll('_',' ');
//
//
// }
// console.log(normalize(n2));

//
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let randomArr = (length) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array[i] = Math.round(Math.random() * 100)
//     }
//     return array;
// }

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let sort = randomArr(10).sort();
// console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let filter = randomArr(20).filter(value => value % 2 ===0);
// console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let map = randomArr(10).map(value => value.toString())
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') return array.sort((a, b) => a - b);
//     if (direction === 'descending') return array.sort((a, b) => b - a);
// };
// console.log(sortNums([1, 2, 3, 4,], 'descending') );

//
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
// let sortUpDown = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortUpDown);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = () => coursesAndDurationArray.filter(value => {
//     return value.monthDuration > 5;
// })
// console.log(filter());

//
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = (str, n) => {
//     let arr = [];
//
//  while (str.length){
//      arr.push(str.substr(0,n));
//      str=str.slice(n);
//  }
//     return arr;
// }
// console.log(cutString('pampampam', 3));
