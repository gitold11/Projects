// //
// //
// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(userId, userName, userSurname, userEmail, userPhone) {
//     this.userId = userId;
//     this.userName = userName;
//     this.userSurname = userSurname;
//     this.userEmail = userEmail;
//     this.userPhone = userPhone;
// }
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = new User(`${Math.round(Math.random()*20)}`, 'John', 'Bon', 'asd@asd', 865768);
// }
// console.log(arr);
// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = arr.filter(value => {
//     if (value.userId % 2 === 0) {
//         return value;
//     }});
// console.log(filter);
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = arr.sort((a,b) => a.userId - b.userId);
// console.log(sort);


///////////////////////////////////////////////////   CLASS    ///////////////////////////////

// //
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.order = order;
//     }
// };
// let array = [
//     new Client(1,'Jack','London','qwe@qwe',['juice','potatos','carrot','milk']),
//     new Client(2,'Topic','Pesyk','rty@rty',['juice','potatos','carrot','milk','sugar']),
//     new Client(3,'Harry','Potter','uio@uio',['carrot','milk']),
//     new Client(4,'Steve','Jobs','iop@iop',['juice','potatos','carrot','milk','books','beer']),
//     new Client(5,'That','Guy','asd@asd',['juice']),
//     new Client(6,'John','Harrys','dfg@dfg',['juice','potatos','carrot']),
//     new Client(7,'Ever','Last','ghj@fgh',['juice','potatos','carrot','milk','bread','sneakers','peanuts','fruits']),
//     new Client(8,'Ni','Ke','zxc@zxc',['juice','potatos','carrot','milk','shoes','cola','water']),
//     new Client(9,'Tim','Cook','vbbn@bnm',['juice','potatos','carrot','milk','apples','mushrooms','whiskey']),
//     new Client(10,'And','Me','bhu@bhu',['juice','potatos','carrot','milk','something','something'])
// ];
// console.log(array);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let arrSort = array.sort((a,b)=> a.order.length - b.order.length);
// console.log(arrSort);
