// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

let func = (...arguments) => {

    if (arguments.length === 1) {
        console.log(arguments[0]);
    } else if (arguments.length === 2) {
        console.log(arguments[0] + arguments[1]);
    }

};
func(10, 20);
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5];

let sumArray = (arr1, arr2) => {
    let resoult  = [];
    for (let i = 0; i < (arr1.length, arr2.length); i++) {
        resoult.push((arr1[i]) + (arr2[i]));
    }
    return resoult;
}

console.log(sumArray(arr1, arr2));

//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arrObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];

let key = (arr) =>{
    let newArr = [];

    for (let arrElement of arr) {
        for (let keys in arrElement) {
            newArr.push(keys)
        }

    }
    return newArr;
}
console.log(key(arrObj));

//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let arrObj2 = [{name: 'Dima', age: 13}, {model: 'Camry'}];

let value = (arr) =>{
    let newArr = [];
    let values =[];

    for (let i = 0; i < arr.length; i++) {
      newArr.push(Object.values(arr[i]));
      values = newArr.flat();

    };

    return values;
}
console.log(value(arrObj2));