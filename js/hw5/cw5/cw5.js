// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let lowestNumber = (firstN, secondN, thirdN) => {
//     if (firstN < secondN && firstN < thirdN) {
//         console.log(firstN);
//     } else if (secondN < firstN && secondN < thirdN) {
//         console.log(secondN);
//     } else if (thirdN < firstN && thirdN < secondN) {
//         console.log(thirdN)
//     }
// }
// lowestNumber(11,22,30);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let hNumber = (firstN, secondN, thirdN) => {
//     if (firstN > secondN && firstN > thirdN) {
//         console.log(firstN);
//     } else if (secondN > firstN && secondN > thirdN) {
//         console.log(secondN);
//     } else if (thirdN > firstN && thirdN > secondN) {
//         console.log(thirdN)
//     }
// }
// hNumber(11,202,30);

// - створити функцію яка повертає найбільше число з масиву
// let arrayNum = [10, 2, 34, 8, 6, 7];
// let maxNum = () => {
//     let num = arrayNum[0];
//     for (let i of arrayNum) {
//         if(i > num){
//             num = i;
//         }
//
//     }
//     return num;
// }
// console.log(maxNum());

// - створити функцію яка повертає найменьше число з масиву
// let arrayNum = [10, 8, 34, 8, 6, 7];
// let minNum = () => {
//     let num = arrayNum[0];
//     for (let i of arrayNum) {
//         if(i < num){
//             num = i;
//         }
//     }
//     return num;
// }
// console.log(minNum());

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arrayNum = [10, 10, 170, 10, 1009, 11];
// let resoult = () => {
//     let num = null;
//     for (i of arrayNum) {
//         num = num + i;
//     }
//     return num;
// }
// console.log(resoult());


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrayNum = [10, 10, 10, 10, 10, 10];
// let midNumber = () => {
//     let sum = null;
//     for (i of arrayNum) {
//         sum = sum + i;
//     }
//     let midN = sum / arrayNum.length;
//     return midN;
// }
// console.log(midNumber());

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let arrayNum = [10, 8, 34, 8, 6, 7];
// let minmax = () => {
//     min = arrayNum[0];
//     max = arrayNum[0];
//     for(i of arrayNum){
//         if(i < min){
//             min = i;
//         }else if (i > max){
//             max = i;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(minmax());;

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let array = [];
// let addNum = () => {
//     for (let i = 0; i < 10; i++) {
//         array[i] = Math.round(Math.random() * 100);
//     }
//     console.log(array);
// }
// addNum();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let array = [];
// let addArr = (size, limit) => {
//     for (i = 0; i < size; i++) {
//         array[i] = Math.round(Math.random()*limit);
//     }
//     console.log(array);
// }
// addArr(40,1000);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1, 2, 3, 45, 6, 77778, 899];
// let funcRev = () => {
//     let arrNew = [];
//     for (i = array.length - 1, newi = 0; i >= 0; i--, newi++) {
//         arrNew[newi] = array[i];
//     }
//     return arrNew;
//
// }
// console.log(funcRev());

