// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//


//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
// let flat = +prompt('Enter the number of flat');
//
// if(flat <= 20){
//     console.log('First entrance');
// }else if (flat > 20 && flat <=48){
//     console.log('Second entrance');
// }else if(flat > 48 && flat <= 90){
//     console.log('Third entrance');
// }else{
//     console.log('Wrong data');
// };

//
// - Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt('Enter your number');
//
// if(number === 10){
//     console.log('Correct!');
// }else{
//     console.log('Wrong!')
// }

//
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
//
// let x = {};
//
// if(typeof x === "number"){
//     console.log(1);
// }else if(typeof x === "string"){
//     console.log(2);
// }else if(typeof x === "boolean" || typeof x === "object"){
//     console.log(3);
// }else {
//     console.log('Wrong data');
// };

//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22
//     вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// let temperature = +prompt('Enter temperature');
//
// if (temperature >= 10 && temperature <= 22){
//     console.log('We go to school today');
// }else{
//     console.log('We have online lesson today');
// };

//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
// І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді
//     вивести Повідомлення - що число не вірне ... .
// switch (+prompt('Enter your number')){
//     case 1:
//         console.log('You win the car!');
//         break;
//     case 2:
//         console.log('You win the motorcycle!');
//         break;
//     case 3:
//         console.log('You win the phone!');
//         break;
//     case 4:
//         console.log('You win the ipod!');
//         break;
//     case 5:
//         console.log('You win the headphones!');
//         break;
//     default:
//         console.log('Sorry, but you lose(');
// };
