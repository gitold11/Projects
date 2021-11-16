// --створити масив з:
// - з 5 числових значень
// let array = [1,2,3,4,5];
// - з 5 стічкових значень
// let array = ['firts', 'second', 'third', 'fourth', 'fifth']
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let array = ['firts', 'second', 'third', 'fourth', 'fifth', 1,2,3,4,5, true, false, true, true, false];
// console.log(array);

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyarray =[];
// emptyarray[0] = 'this';
// emptyarray [1] = 'is';
// emptyarray [2] = 'your';
// emptyarray [3] = 'array';
// emptyarray [4] = 011101101;
// console.log(emptyarray);

//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>something</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++){
//     document.write(`<div>${i} - something</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while ( i < 20 ){
//     document.write('<h1> Yes, you can </h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20){
//     document.write(`<h1> ${i} NEXT </h1>`);
//     i++;
// }

//
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i <array.length; i++){
//     console.log(`${array[i]}`)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let array = ['yes', 'no', 'yes', 'no', 'yes', 'no', 'yes', 'no', 'yes', 'no',];
// for (i = 0; i < array.length; i++){
//     console.log(`${array[i]}`)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [true, 99, false, 'string', 'be more productive', 1997, false, 'repeat pls', 11, 07];
// for (i = 0; i < array.length; i++){
//     console.log(`${array[i]}`)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [true, 99, false, 'string', 'be more productive', 1997, false, 'repeat pls', 11, 07];
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'boolean') {
//         console.log(array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [true, 99, false, 'string', 'be more productive', 1997, false, 'repeat pls', 11, 07];
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         console.log(array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = [true, 99, false, 'string', 'be more productive', 1997, false, 'repeat pls', 11, 07];
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'string') {
//         console.log(array[i]);
//     }
// }

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = 'i can do it faster';
// array[1] = true;
// array[2] = 911199;
// array[3] = false;
// array[4] = 'guilty';
// array[5] = 'low';
// array[6] = 000;
// array[7] = 60;
// array[8] = false;
// array[9] = 'i';
// for (i = 0; i < array.length; i++){
//     console.log(`${array[i]}`)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 10; i++) {
//     console.log('one ' + i + '');
//     document.write('one' + i + '');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i++){
//     console.log('one ' + i + '');
//     document.write('one' + i + '');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i += 2) {
//     console.log('one ' + i + '');
//     document.write('one' + i + '');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('one ' + i + '');
//         document.write('one' + i + '');
//     }
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log('one ' + i + '');
//         document.write('one' + i + '');
//     }
//
// }