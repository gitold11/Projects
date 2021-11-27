//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, brand, produced, topspeed, engineCapacity, newSpeed) {
//     this.model = model;
//     this.brand = brand;
//     this.produced = produced;
//     this.topspeed = topspeed;
//     this.engineCapacity = engineCapacity;
//
// /////////////////Functions
//
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю: ${topspeed} на годину`)
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.topspeed = newSpeed + topspeed;
//     };
//     this.changeYear = function (newValue) {
//        return  this.produced = newValue;
//     };
//     this.addDriver = function (driver) {
//        return  this.driver = driver;
//     };
//     this.info = function () {
//         for (let field in this) {
//             if (typeof this[field] !== 'function') {
//                 console.log(`${field} - ${this[field]}`) // Чи можна зробити так, щоб після виклику цієї функції,
//                                                         //інформація в полях topSpeed and produced змінювалась на нову?
//             }
//         }
//     };
// };
//
// let skoda = new Car('Fabia', 'Skoda', 2008, 160, 1.2);
// console.log(skoda);
// skoda.drive();
// skoda.info();
// skoda.increaseMaxSpeed(60);
// skoda.changeYear(2010);
// skoda.addDriver(['donald duck', 'someone else']);


//////////////////////////////         CLASS


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, brand, produced, topSpeed, engineCapacity) {
//         this.model = model;
//         this.brand = brand;
//         this.produced = produced;
//         this.topSpeed = topSpeed;
//         this.engineCapacity = engineCapacity;
//     };
//
//     drive (){
//         console.log(`їдемо зі швидкістю: ${this.topSpeed} на годину`);
//     };
//
//     info (){
//         for (let field in this){
//             if(typeof this[field] !== 'function'){
//                 console.log(`${field} - ${this[field]}`)
//             }
//         }
//     };
//
//     increaseMaxSpeed (newSpeed){
//         this.topSpeed = this.topSpeed + newSpeed;
//     }
//
//     changeYear (newValue){
//         this.produced = newValue;
//     }
//
//     addDriver (driver){
//         this.driver = driver;
//     }
//
// };
//
// let mercedes = new Car('X','Tesla',2010,280,0);
// console.log(mercedes);
// mercedes.drive();
// mercedes.info();
// mercedes.increaseMaxSpeed(100);
// mercedes.changeYear(2020);
// mercedes.addDriver(['Sting',1,2,3,4,5]);


//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popy {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// };
//
// let popyArr = [
//   new Popy('Kate', 20, 37),
//   new Popy('Helen', 18, 34),
//   new Popy('Jeniffer', 28, 36),
//   new Popy('Margo', 36, 36),
//   new Popy('Liam', 23, 38),
//   new Popy('Linda', 29, 35),
//   new Popy('Emmy', 26, 39),
//   new Popy('Lee', 22, 37),
//   new Popy('Bridget', 28, 35),
//   new Popy('Bonny', 30, 37)
//
// ];
// console.log(popyArr);
//
// class Prince {
//     constructor(name, age, findedShoe) {
//         this.name = name;
//         this.age = age;
//         this.findedShoe = findedShoe;
//     }
// };
//
// let princeArr = new Prince('Otello', 42, 38);
//
// console.log(princeArr);
//
// function pair (princeArr){
//     for (let field of popyArr){
//         if(field.footSize === princeArr.findedShoe){
//         console.log(`Finaly ${field.name}`);
//         }
//     }
//
// };
// pair(princeArr);
//
// let newPair = popyArr.find(value => value.footSize === princeArr.findedShoe);
// console.log(newPair);


