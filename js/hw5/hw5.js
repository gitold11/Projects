// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let recktangleArea = (a,b) =>(a*b);
// console.log(recktangleArea(5, 10));

// - створити функцію яка обчислює та повертає площу кола
// let roundArea = (p,r) => (p*r*2)
// console.log(roundArea(3.14,8));

// - створити функцію яка обчислює та повертає площу циліндру
// let cylinderArea = (p,r,h) =>(2*p*r*h);
// console.log(cylinderArea(3.14,3,10));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [10, 'hello', 30, 'its', 40, 'me'];
// let arrayShower = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         let arrayElement = array[i];
//         console.log(array[i])
//
//     }
// }
// arrayShower(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let text = (typeHere) => ('Have a nice Day)');
// console.log(text());

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let listCreator = (sometext) => {
//     document.write(`<ul>`)
//     document.write(`<li>${sometext}</li>`)
//     document.write(`<li>${sometext}</li>`)
//     document.write(`<li>${sometext}</li>`)
//     document.write(`</ul>`)
// }
// listCreator('here we go');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let textCreator = (text, size) => {
//     document.write(`<ul>`);
//     for (i = 0; i < size; i++){
//         document.write(`<li>${text}</li>`);
//     }
//         document.write(`</ul>`);
// }
// textCreator('something new', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [10, 'hello', 30, 'its', 40, 'me', true, false];
// let arrListCreator = () => {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//
//     }
//
//     document.write(`</ul>`);
// }
// arrListCreator();

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
// let objBlockCreator = () => {
//     for (i = 0; i < simpsons.length; i++) {
//         let key = simpsons[i];
//         document.write(`<div> ${key.id} ${key.age} ${key.surname} </div>`);
//     }
// }
// objBlockCreator();

//
