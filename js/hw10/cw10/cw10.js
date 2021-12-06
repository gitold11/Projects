//
//
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


let form1 = document.createElement('form');
form1.id = 'f1';

let form2 = document.createElement('form');
form2.id = 'f2';

let inp1Txt = document.createElement('input');
inp1Txt.type = 'text';
inp1Txt.name = 'name';

let inp1numb = document.createElement('input');
inp1numb.type = 'number';
inp1numb.name = 'age';

let inp2Txt = document.createElement('input');
inp2Txt.type = 'text';
inp2Txt.name = 'name';

let inp2numb = document.createElement('input');
inp2numb.type = 'number';
inp2numb.name = 'age';


let btn1 = document.createElement('button');
btn1.innerText = 'press';
btn1.onclick = function () {
    console.log(document.forms.f1.name.value);
    console.log(document.forms.f1.age.value);
};


let btn2 = document.createElement('button');
btn2.innerText = 'press';
btn2.onclick = function () {
    console.log(document.forms.f2.name.value);
    console.log(document.forms.f2.age.value);
};


document.body.appendChild(form1)
document.body.appendChild(btn1);
form1.append(inp1Txt, inp1numb);
document.body.appendChild(form2);
form2.append(inp2Txt, inp2numb);
document.body.appendChild(btn2);


/////////////////////////
document.body.appendChild(document.createElement('hr'));
////////////////////////


//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let container = document.createElement('div');

let inputFirst = document.createElement('input');
inputFirst.type = 'number';

let inputSecond = document.createElement('input');
inputSecond.type = 'number';

let inputThird = document.createElement('input');
inputThird.type = 'text';

let btn = document.createElement('button');
btn.innerText = 'Press to create';


btn.addEventListener('click', function () {

    let tr = inputFirst.value;
    let td = inputSecond.value;
    let value = inputThird.value;


    let tableBlock = document.createElement('div');
    tableBlock.style.overflow = 'scroll';
    document.body.appendChild(tableBlock);


    let tableCreator = function (tr, td, value) {

        let table = document.createElement('table');
        table.style.border = '2px solid black';


        tableBlock.appendChild(table);

        for (let i = 0; i < tr; i++) {
            let tr = document.createElement('tr');
            tr.style.border = '1px solid black';

            table.appendChild(tr);


            for (let j = 0; j < td; j++) {
                let td = document.createElement('td');
                td.style.border = '1px solid black';
                td.style.backgroundColor = 'rgba(142,33,16,0.15)'
                td.innerText = `${value}`;

                tr.appendChild(td);

            };
        };


    };

    tableCreator(tr, td, value);

});


document.body.appendChild(container);
container.append(inputFirst, inputSecond, inputThird, btn);

document.body.appendChild(document.createElement('hr'));

//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let arr = ['сук*', 'ху*', 'бля*ь'];

let verifyBlock = document.createElement('div');

let inp = document.createElement('input');
inp.type = 'text';

let buttonV = document.createElement('button');
buttonV.innerText = 'Check';

document.body.appendChild(verifyBlock);
verifyBlock.append(inp, buttonV);

buttonV.addEventListener('click', function () {

    function checker(word, arr) {

        arr.forEach(item => {
            if (item === word) {
                alert('Атата!!!');
            } else {
                console.log('Молодець!');
            };
        });

    };

    checker(inp.value, arr);

});

document.body.appendChild(document.createElement('hr'));


//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let arrNew = ['сук*', 'ху*', 'бля*ь'];

let verifyBlockNew = document.createElement('div');

let inpNew = document.createElement('input');
inpNew.type = 'text';

let buttonVNew = document.createElement('button');
buttonVNew.innerText = 'Check';



buttonVNew.addEventListener('click', function () {

    let checker = function (arr, inp) {
        for (let arrElement of arr) {
            if(inp.includes(arrElement)){
                alert('Атата!!!');
            }else {
                console.log('Молодець)');
            };
        };
    };
    checker(arrNew, inpNew.value);

});

document.body.appendChild(verifyBlockNew);
verifyBlockNew.append(inpNew, buttonVNew);