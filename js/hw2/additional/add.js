//
//
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те,
// що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х
//     елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// if(friends.length >= 3){
//     console.log('Array is big');
// }else {
//     console.log('Array is small');
// };
//
//
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше).
//     Перевірити, чи знаходиться перше число між двома іншими.
// let numb1 = 300;
// let numb2 = 40;
// let numb3 = 200;
//
// if(numb1 < numb2 && numb1 > numb3 || numb1 > numb2 && numb1 < numb3){
//     console.log(numb1);
// }else if(numb2 < numb1 && numb2 > numb3 || numb2 > numb1 && numb2 < numb3){
//     console.log(numb2);
// }else {
//     console.log(numb3);
// }


//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
// let a = 6;
// let b = 2;
// let result = a+b
//
// result < 4 ? console.log('Мало') : console.log('Багато');

//
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число:
// позитивним, негативним або нулем
// напишіть це тернарним оператором
// let number = 0;
//
// number === 0 ? console.log('Zero') : number < 0 ? console.log('Negative') : console.log('Positive');