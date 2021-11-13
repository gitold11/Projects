// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
// let numberFirst = +prompt('Enter your first number');
// let numberSecond = +prompt('Enter your second number');
// if (numberFirst > numberSecond){
//     console.log(numberFirst);
// }else if (numberSecond === numberFirst){
//     console.log('equal');
// }else {
//     console.log(numberSecond);
// }

//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
// let entry = +prompt('enter the apartment number');
// if (entry <= 20) {
//     console.log('First entrance');
// } else if (entry > 20 && entry <= 48) {
//     console.log('Second entrance')
// } else if (entry > 48 && entry <= 90){
//     console.log('Third entry');
// }else{
//     console.log('Error')
// }

//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt('Choose your number');
// if (number === 10){
//     console.log('Correct!')
// }else{
//     console.log('Wrong!')
// }

//
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
//
// let x = {
//     name: 'Patrik'
// };
// if (typeof x === 'number'){
//     console.log(1);
// }else if (typeof x === 'string'){
//     console.log(2);
// }else if (typeof x === 'boolean'){
//     console.log(3);
// }else if (typeof x === 'object' || []){
//     console.log(3);
// }else {
//     console.log('Error')
// }


//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// let temp = +prompt('Якщо ваша ласка, то введіть температуру)')
// if (temp >= 10 && temp <= 22){
//     console.log('ми йдемо ВЧИТИСЯ!!!')
// }else {
//     console.log('сидимо вдома і вчимося ОНЛАЙН')
// }

//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let nmb = +prompt('Try your luck');
// switch (nmb) {
//     case 1:
//         console.log('You win a car!');
//         break;
//     case 2:
//         console.log('You win a bike!');
//         break;
//     case 3:
//         console.log('You win a Google Pixel 5!');
//         break;
//     case 4:
//         console.log('You win an apartment!');
//         break;
//     case 5:
//         console.log('You win nothing(');
//         break;
//
//     default:
//         console.log('The number is wrong')
//
// }