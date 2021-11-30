//
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content.innerText);

// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules.innerText);

// -- замініть текст параграфа з id 'content' на будь-якийconte інший
content.innerText = 'Hello';

// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'There';

// -- змініть кожному елементу колір фону на червоний
let bgColor = document.body;
bgColor.style.backgroundColor = 'red';


// -- змініть кожному елементу колір тексту на синій
let txtColor = document.body;
txtColor.style.color = 'darkblue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let clsSelector = document.getElementById('rules');
console.log(clsSelector);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let txtColorRules = document.getElementsByClassName('fc_rules');
for (let elemet of txtColorRules) {
elemet.style.color = 'red';
};

