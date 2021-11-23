// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function smallestNumber(first, second, third) {
//     if (first < second && first < third) {
//         console.log(first);
//     } else if (second < first && second < third) {
//         console.log(second);
//     } else if (third < first && third < second) {
//         console.log(third)
//     }
// }
//         smallestNumber(109,99,100);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function largestNumber(first, second, third) {
//     if (first > second && first > third) {
//         console.log(first);
//     } else if (second > first && second > third) {
//         console.log(second);
//     } else if (third > first && third > second) {
//         console.log(third)
//     }
// }
//         largestNumber(109,99,1000);

// - створити функцію яка повертає найбільше число з масиву
// let array = [1, 2, 34, 5, 6, 7];
// function largestNumber(arr){
//     let max = arr[0];
//     for (const element of arr) {
//         if (element > max) {
//             max = element;
//         }
//     }
// return max
// }
//
// console.log(largestNumber(array));

// - створити функцію яка повертає найменьше число з масиву
let array = [1, 2, 34, 5, 6, 7];
function lowestNumber(arr){
    let min = arr[0];
    for (const element of arr) {
        if (element < min) {
            min = element;
        }
    }
    return min;
}

console.log(lowestNumber(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1, 21, 32, 43, 54];
//
// function sum(arr) {
//     let summary = null;
//     for (let element of arr) {
//         summary = summary + element;
//     }
//     return summary;
//
// }
// console.log(sum(array));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [1, 21, 32, 43, 54];
//
// function arithmeticMean(arr) {
//     let summary = null;
//     for (let element of arr) {
//         summary = summary + element;
//     }
//     let middle = summary / array.length
//     return middle;
// }
// console.log(arithmeticMean(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let array = [1, 21, 32, 43, 54];
// function maxNumber(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     for (let element of arr) {
//         if (element < min) {
//             min = element;
//         }else if (element > max){
//
//             max = element;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// console.log(maxNumber(array));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomArr(length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array[i] = Math.round(Math.random() * 100)
//     }
//     return array;
// }
//
// console.log(randomArr(100));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomArr(length, limit) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array[i] = Math.round(Math.random() * limit)
//     }
//     return array;
// }
//
// console.log(randomArr(10, 100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1, 21, 32, 43, 54];
//
// function opposite() {
//     for (let i = array.length - 1; i >= 0; i--) {
//
//         console.log(array[i])
//
//     }
// }
//
// opposite();