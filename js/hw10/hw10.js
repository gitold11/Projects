// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let div = document.createElement('div');
div.id = 'text';
div.style.width = '200px';
div.style.height = '200px';
div.style.backgroundColor = 'red';

let button = document.createElement('button');
button.innerText = 'click me';
button.onclick = function (){
    div.style.display = 'none';
}
document.body.append(div, button);


/////////////////////////
document.body.appendChild(document.createElement('hr'));
////////////////////////


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let disButton = document.createElement('button');
disButton.innerText = 'disappear';

disButton.onclick = function (){
    this.style.display = 'none';
};

document.body.appendChild(disButton);


/////////////////////////
document.body.appendChild(document.createElement('hr'));
////////////////////////

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.createElement('form');
form.onsubmit = function (e){
    e.preventDefault();
};
let input = document.createElement('input');
input.value = 'enter your age';

let confButton = document.createElement('button');
confButton.innerText = 'confirm'
confButton.onclick = function () {
    if(input.value >= 18){
         alert('Hello');
    }else{
        alert('ACHTUNG!!!');
    };
};

document.body.appendChild(form);
form.append(input, confButton);



/////////////////////////
document.body.appendChild(document.createElement('hr'));
////////////////////////



//
// - Создайте меню, которое раскрывается/сворачивается при клике
let mainBlock = document.createElement('ul');
mainBlock.innerText = 'one click for hide and double for show';

let info = document.createElement('li');
info.innerText = 'We are best, and these are reasons why....';

let contacts = document.createElement('li');
contacts.innerText = 'Our contacts...';

let products = document.createElement('li');
products.innerText = 'Our products...';

let team = document.createElement('li');
team.innerText = 'About our team...';

mainBlock.onclick = function (){
    info.style.display = 'none';
    contacts.style.display = 'none';
    products.style.display = 'none';
    team.style.display = 'none';
};

mainBlock.ondblclick = function (){
    info.style.display = 'block';
    contacts.style.display = 'block';
    products.style.display = 'block';
    team.style.display = 'block';
};

document.body.appendChild(mainBlock);
mainBlock.append(info, contacts, products, team);


/////////////////////////
document.body.appendChild(document.createElement('hr'));
////////////////////////

//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'Hello', body:'HelloHelloHelloHelloHelloHello'},
    {title : 'Bye', body:'ByeByeByeByeByeByeBye'},
    {title : 'ipsum', body:'ipsumipsumipsumipsumipsumipsum'},
    {title : 'ameti', body:'ametiametiametiametiameti'}

];

let commentsMainDiv = document.createElement('div');

for (let comment of comments) {

    let main = document.createElement('div');
    main.style.border = '2px solid black';
    main.style.backgroundColor = 'cornflowerblue'

    let h2 = document.createElement('h2');
    h2.innerText = `${comment.title}`;

    let p = document.createElement('p');
    p.innerText = `${comment.body}`;


    let btn = document.createElement('button');
    btn.innerText = 'Click for hide';


    btn.addEventListener('click', function (){
        p.style.display = 'none';
    });


    btn.addEventListener('dblclick', function (){
        p.style.display = 'block';
    });


    commentsMainDiv.appendChild(main);
    main.append(h2, p, btn);

};
document.body.appendChild(commentsMainDiv);
