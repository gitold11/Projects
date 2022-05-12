// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = -1;
// if (x !== 0){
//     console.log('Вірно');
// }else {
//     console.log('Невірно');
// };
//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 'uhuh';
// if(time <= 15){
//     console.log('First');
// } else if(time > 15 && time <= 30){
//     console.log('Second');
// }else if (time >30 && time <=45){
//     console.loge('Third');
// } else if(time > 45 && time <60) {
//     console.log('Fourth');
// }else{
//     console.log('wrong data');
// };

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 26;
// if (day <= 10) {
//     console.log('First');
// } else if (day > 10 && day <= 20) {
//     console.loge('Second');
// } else if (day > 20 && day <= 31) {
//     console.log('Third');
// } else {
//     console.log('wrong data');
// };
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
// let day = +prompt('Введіть номер дня тижня ');
// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
// };
//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let firstNumb = +prompt('Enter first number');
// let secondNumb = +prompt('Enter second number');
//
// if(firstNumb > secondNumb){
//     console.log('First number is bigger');
// }else if(firstNumb < secondNumb){
//     console.log('Second number is bigger');
// }else if(firstNumb === secondNumb){
//     console.log('The numbers are the same');
// }else{
//     console.log('Wrong data');
// };