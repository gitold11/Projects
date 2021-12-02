//
// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');
div.innerText = 'Hello';

// - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.backgroundColor = 'silver';
div.style.color = 'red';
div.style.fontSize = '25px';
div.style.margin = '5px';

// - додати цей блок в body.
document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.
document.body.appendChild(div.cloneNode(true));

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arr = ['Main', 'Products', 'About us', 'Contacts'];
let container = document.getElementsByClassName('menu')[0];


for (let element of arr) {
    let li = document.createElement('li');
    let h3 = document.createElement('h3')
    h3.innerText = element;

    container.appendChild(li);
    li.appendChild(h3);
};

//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let div2 = document.createElement('div');
div2.classList.add('info');
document.body.appendChild(div2);

for (let item of coursesAndDurationArray) {
let title = document.createElement('h2');
title.innerText = `${item.title} ${item.monthDuration}`;
div2.appendChild(title);
};

//
// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let div3 = document.createElement('div');
div3.classList.add('courses');
document.body.appendChild(div3);

for (let element of coursesAndDurationArray2) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading')
    h1.innerText = `${element.title}`
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${element.monthDuration}`;

    div3.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);
}''


