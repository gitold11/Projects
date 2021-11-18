// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangleArea(a,b){
//     let res = a * b;
//     return res;
// }
// console.log(rectangleArea(12,15));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function roundArea (p,r){
//     let s = p * r*2;
//     return s;
// }
// console.log(roundArea(3.14,2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinderArea(p, r, h) {
//     let s = 2*p * r * h;
//     return s;
// }
// console.log(cylinderArea(3.14,10,20));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [10, 'hello', 30, 'its', 40, 'me'];
//
// function arrayShower(array) {
//     for (i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
//         }
// arrayShower(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text(typeHere){
//     return typeHere;
// }
// console.log(text('Hello Okten'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function textCreator(text){
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// textCreator('HI!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function textCreator(text, size) {
//     document.write(`<ul>`)
//     for (i = 0; i < size; i++){
//         document.write(`<li>${text}</li>`)
//     }
//         document.write(`</ul>`)
// }
// textCreator('ALLOHA!!!',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [10, 'hello', 30, 'its', 40, 'me', true, false];
//
// function arrayShower(array) {
//     document.write(`<ul>`)
//     for (i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// arrayShower(array);

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let simpsons = [
//     {
//         id: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//     },
//     {
//         id: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//     },
//     {
//         id: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//     },
//     {
//         id: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//     },
//     {
//         id: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//     },
// ];
// function blockCreator(simpsons){
//     document.write('<div>')
//     for (let i = 0; i < simpsons.length; i++) {
//         let item = simpsons[i];
//         document.write(`<h2>${item.id} ${item.surname} ${item.age} </h2> `)
//     }
//     document.write('</div>')
// }
// blockCreator(simpsons);