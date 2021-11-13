// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = +prompt('enter number');
// if (time <= 15) {
//     console.log(1);
// } else if (time > 15 && time <= 30) {
//     console.log(2);
// }else if (time > 30 && time <=45){
//     console.log(3);
// }else if (time > 45 && time < 60){
//     console.log(4)
// }
//
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('enter day of the week');
// if (day <= 10){
//     console.log(1);
// }else if (day > 10 && day <= 20){
//     console.log(2);
// }else if( day > 20 && day <=31){
//     console.log(3);
// }
//
// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
// let test = prompt('enter true or false');
// if (test === 'true') {
//     console.log('Неправильно');
// } else if (test !== 'true') {
//     console.log('Вірно');
// }
//
// let test1 = !!'' ? console.log('Неправильно') : console.log('Вірно');
// ледь не зламав голову, але так і не придумав другого варіанту цього з тернаркою
//
//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = +prompt('choose your number');
// if (a !== 0){
//     console.log('Вірно')
// }else {
//     console.log('Невірно')
// }

//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let week = +prompt('select day of the week');
// switch (week) {
//     case 1:
//         console.log('Do not forget about your washing');
//         break;
//     case 2:
//         console.log('You still have a son, so remember about his football training');
//         break;
//     case 3:
//         console.log('Buy a present for your dad');
//         break;
//     case 4:
//         console.log('English lesson day');
//         break;
//     case 5:
//         console.log('mother-in-law comes(');
//         break;
//     case 6:
//         console.log('Shopping day');
//         break;
//     case 7:
//         console.log('Resting day');
//         break;
//
// }
//

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = +prompt('How many days this year contain');
// let content = year % 4;
// if(content === 0){
//     console.log('A leap year')
// }
// else {
//     console.log('Ordinary year')
// }


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let name = prompt('Яка «офіційна» назва JavaScript?');
// if(name === 'ECMAScript'){
//     console.log('Правильно!')
// }
// else {
//     console.log('Не знаєте? ECMAScript!')
// }
