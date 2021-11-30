// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let sep2021 = document.getElementById('main_header');
sep2021.classList.toggle('sep-2021');

// b) робить шириниу елементу ul 400px
let ulWidth = document.getElementsByTagName('ul');
ulWidth[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListWidth = document.getElementsByClassName('linkList');
for (let linkListWidthElement of linkListWidth) {
    linkListWidthElement.style.width = '50%';
};

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2Txt = linkListWidth[1];
console.log(listElement2Txt.innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liBg = document.getElementsByTagName('li');
for (let liBgElement of liBg) {
    liBgElement.style.backgroundColor = 'silver';
};

// f) отримує всі елементи 'a' та додає їм клас anchor
let classAdder = document.getElementsByTagName('a');
for (let classAdderElement of classAdder) {
    classAdderElement.classList.toggle('anchor');
};

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let fontChanger = classAdder;
for (let fontChangerElement of fontChanger) {
    if(fontChangerElement.innerText.includes('link3')){
        fontChangerElement.style.fontSize = '40px';
    };

};

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let classAdder2 = classAdder;
for (let classAdder2Element of classAdder2) {
    classAdder2Element.classList.toggle(`element_${classAdder2Element.innerText}`);

};

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaderBg = document.getElementsByClassName('sub-header');
for (let subElement of subHeaderBg) {
    subElement.style.backgroundColor = prompt('enter color');
};

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let colorChangerSub = document.getElementsByClassName('sub-header');
for (let colorChangerSubElement of colorChangerSub) {
    if(colorChangerSubElement.innerText.includes('content 2 segment')){
        colorChangerSubElement.style.color = prompt('choose your color');
    };
};


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let txtChanger = document.getElementsByClassName('content_1');
for (let txtChangerElement of txtChanger) {
    txtChangerElement.innerText = prompt('enter next here');
};

// l) отримати елементи p та змінити їм padding на 20px
let paddingChanger = document.getElementsByTagName('p');
for (let paddingChangerElement of paddingChanger) {
    paddingChangerElement.style.padding = '20px';
};

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let elementsTxtChanger = document.getElementsByClassName('text2');
for (let elementsTxtChangerElement of elementsTxtChanger) {
    elementsTxtChangerElement.innerText = 'sep-2021';
};
//
