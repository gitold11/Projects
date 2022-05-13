// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let triangleS = (a,b) => {
//     return a*b
// }
// console.log(triangleS(8, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let roundS = (r) => {
//     return 2*3.14*r;
// };
// console.log(roundS(8));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinderS = (h,r) => {
//     return 2*3.14*r*h;
// };
// console.log(cylinderS(10, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [2,3,4,5,6,99];
//
// let shower = (arr) => {
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     };
// };
//
// shower(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraphCreator = (text) => {
//    return  document.write(`<P>${text}</P>`);
// };
//
// paragraphCreator('hgvhgfhgcgchv');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let listCreator = (text) => {
//     document.write(`<ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//     </ul>`);
// };
// listCreator('Goovee')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент
// всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let cycleListCreator = (text, size) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//             document.write(`<li>${text}</li>`)
//         };
//     document.write(`</ul>`)
// };
// cycleListCreator('seeeyaa',10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [true, false, 66, 'hello'];
//
// let primitiveListBuilder = (arr) => {
//     document.write(`<ul>`)
//     for (let arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`</ul>`);
// };
// primitiveListBuilder(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
// let objArr = [
//     {id: 8},
//     {name: 'Henry'},
//     {age: 55}
// ];
//
// let shower = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let arrKey in arr[i]) {
//             document.write(`<div>${arrKey} - ${arr[i][arrKey]}</div>`);
//         };
//     };
// };
//
// shower(objArr);
// - створити функцію яка повертає найменьше число з масиву
// let numArr = [11, 22, 3, 4, 5, 6, 1, 9,0.1, 99];
//
// let smallestNumFinder = (arr) => {
//    return Math.min(...arr);
// };
//
// console.log(smallestNumFinder(numArr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// let numArr = [11, 22, 3, 4, 5, 6, 1, 9,0.1, 99];
//
// let adder = (arr) => {
//     let s = 0;
//     for(let i = 0; i < arr.length; i++){
//         s+= arr[i];
//     }
//     return s;
// };
//
// console.log(adder(numArr));