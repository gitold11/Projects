//
//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// class Add1{
//     constructor(id, name, username, email,street,suite,city,zipcode,lat,lng,phone, website,companyName,catchPhrase,bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street: street,
//             suite: suite,
//             city: city,
//             zipcode: zipcode,
//             geo: {
//                 lat: lat,
//                 lng: lng
//             },
//
//         };
//         this.phone = phone;
//         this.website = website;
//         this.company = {
//             name: companyName,
//             catchPhrase: catchPhrase,
//             bs: bs
//
//         };
//     };
// };
//
// let obj = new Add1(9,'Montana','Monti','some@mail.io','Linkolna 1',4,'New York', 67444, 754435,67556476,0000000,'hjvgfg.com','Subaru','Hello','BeeEss')
// console.log(obj);


// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

//////////////////////////////////////////////////////////////////////////////////////////////////////

//
// class Tags {
//     constructor(name, action, titleOfAttr, actionOfAttr, titleOfAttr2, actionOfAttr2) {
//         this.name = name;
//         this.action = action;
//         this.attrs = [
//             {titleOfAttr: titleOfAttr, actionOfAttr: actionOfAttr},
//             {titleOfAttr: titleOfAttr2, actionOfAttr: actionOfAttr2}
//
//         ];
//     };
// };
// let a = new Tags('a', 'Залежно від наявності атрибутів name або href тег <a> встановлює посилання або якір.', 'download', 'Пропонує завантажити вказаний за посиланням файл.');
// console.log(a);
//
//
// let div = new Tags('div','Елемент <div> є блоковим елементом і призначений виділення фрагмента документа з метою зміни виду вмісту.','align','Визначає вирівнювання вмісту тега <div> .',
//     'title','Додає спливаючу підказку до вмісту.');
// console.log(div);
//
//
// let h1 = new Tags('h1','Так, тег <h1> є найбільш важливим заголовком першого рівня','align','Визначає вирівнювання заголовка.');
// console.log(h1);
//
// let span = new Tags('span','Тег <span> призначений визначення малих елементів документа.','dir','Задає напрямок та відображення тексту – зліва направо або праворуч наліво.',
//     'id','Вказує імя стильового ідентифікатора.');
// console.log(span);
//
// let input = new Tags('input','Тег <input> є одним із різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу та забезпечити взаємодію з користувачем.',
//     'form','Зв\'язує поле з формою за її ідентифікатором.','formmethod','Повідомляє браузеру, яким методом слід передавати дані форми на сервер.');
// console.log(input);
//
// let form = new Tags('form','Тег <form> встановлює форму на веб-сторінці.','accept-charset','Встановлює кодування, в якому сервер може приймати та обробляти дані.',
//     'enctype','Спосіб кодування даних форми.');
// console.log(form);
//
// let option = new Tags('option','Тег <option> визначає окремі пункти списку, який створюється за допомогою контейнера <select> . ','disabled','Заблокувати елемент списку для доступу.',
//     'label','Вказує позначку пункту списку.');
// console.log(option);
//
// let select = new Tags('select', 'Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором, як показано далі',
//     'size','Кількість рядків списку, що відображаються.','required','Список обов\'язковий для вибору перед надсиланням форми.');
// console.log(select);

////////////////////////////////////////////////////////////////////////////////////

// Таким чином описати теги
// -a
// -div
// -h1
// -spanВстановлює кодування, в якому сервер може приймати та обробляти дані.
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }