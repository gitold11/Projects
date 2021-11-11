//
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

let a = {first: 'hello', second: 'you`re'};
let b = {first: 'owu', second: 'years old'};
let c = {first: 'com', second: 'dot'};
let d = {first: 'ua', second: 'au'};
let e = {first: 1, second: -1};
let f = {first: 10, second: -10};
let g = {first: 999, second: 666};
let h = {first: 123, second: 321};
let i = {first: 3.14, second: 4.13};
let j = {first: 2.7, second: 7.2};
let k = {first: 16, second: 61};
let l = {first: true, second: false};
let m = {first: false, second: true};

console.log(a.first,b.first,c.first,d.first,e.first,f.first,g.first,h.first,i.first,j.first,k.first,l.first,m.first);

// alert(a.first);
// alert(b.first);
// alert(c.first);
// alert(d.first);
// alert(f.first);
// alert(g.first);
// alert(h.first);
// alert(i.first);
// alert(j.first);
// alert(k.first);
// alert(l.first);
// alert(m.first);

document.write(a.first,b.first,c.first,d.first,e.first,f.first,g.first,h.first,i.first,j.first,k.first,l.first,m.first);

console.log(a.second,b.second,c.second,d.second,e.second,f.second,g.second,h.second,i.second,j.second,k.second,l.second,m.second);

// alert(a.second);
// alert(b.second);
// alert(c.second);
// alert(d.second);
// alert(f.second);
// alert(g.second);
// alert(h.second);
// alert(i.second);
// alert(j.second);
// alert(k.second);
// alert(l.second);
// alert(m.second);

document.write(a.second,b.second,c.second,d.second,e.second,f.second,g.second,h.second,i.second,j.second,k.second,l.second,m.second);

let person = {
  firstName: 'mykhailo',
  middleName: 'olegovych',
    lastName: 'maksymyshyn',
    age: 24
};

result = prompt(person.firstName);
result = prompt(person.middleName);
result = prompt(person.age);

console.log(a.first,person.firstName,person.middleName);
console.log(a.second,person.age,b.second);

let p = 100;
let x = '100';
let q = true;

console.log(typeof p);
console.log(typeof x);
console.log(typeof q);

// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 >= 6 -> false
// 10 == 10 -> true
// 10 >= 10 -> true
// 10 < 10 -> false
// 10 > 10 -> false
// 10 != 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); - 25
// document.write(str - a + "<br/>"); - 15
// document.write(str * "2" + "<br/>"); - 40
// document.write(str / 2 + "<br/>"); - 10
// у всіх діях string перетворювався у number

