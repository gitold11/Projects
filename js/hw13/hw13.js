//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

function wakeUp(amIWokeUp) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(amIWokeUp){
                console.log('good morning)')
                resolve(amIWokeUp);
            }else{
                reject(console.error('ZZZZZZzzzzzz'));
            }
        }, 100);
    } );
};

function breakfast (amIReady){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            if(amIReady){
                console.log('Yummmy');
                resolve(true);
            }else{
                reject(console.error('((((('));
            }

        }, 200)
    }));
};

function goToBussStop(amIAte) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(amIAte){
                console.log('I`m on my way');
                resolve(true);
            }else{
                reject(console.error('something happen'));
            };

        }, 500)
    });

};

function onTheBuss(amIOnTheBuss) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(amIOnTheBuss){

                console.log('Damn.... It`s so hot here(((');
                resolve(true);

            }else {
                reject(console.error('i missed my buss)'))
            };

        }, 200);
    });
};

function atWork(amIAtWork) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(amIAtWork){

                console.log('I love my job');
                resolve(true);

            }else {
                reject(console.error('((((('));
            };

        }, 400);
    });
};

function lunch(amIHungry) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(amIHungry){
                console.log('i love kebab');
                resolve(true);
            }else {
                reject(console.error('i`m not hungry'));
            };

        }, 150);

    });

};

function backToHome(wasIAtWork) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(wasIAtWork){
                
                resolve(true);
                console.log('Finally)');
                
            }else{
              reject(console.error('it was just a dream'));
            };
        }, 180);
    });
};

function wayToTheGym(didIComeHome) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(didIComeHome){
                console.log('today is Legs Day');
                resolve(true);
            }else {
                reject(console.error('i`m too tired...'));
            };

        }, 130);
    });
};

function atGym(didIComeToTheGym) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(didIComeToTheGym){
                console.log('one two one two one two');
                resolve(true);
            }else {
                reject(console.error('met my girlfriend'));

            };
        },200)
    });
};

function shower() {
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log('it was nice day)))');
        }, 50);
    });
    
};

async function myDay() {

    const start = await wakeUp(true);
    const brk = await breakfast(true);
    const wayToWork = await goToBussStop(true);
    const work = await atWork(true);
    const lnch = await lunch(true);
    const backingHome = await backToHome(true);
    const wayToGym = await wayToTheGym(true);
    const gym = await atGym(true);
    const shwr = await shower(true);

};
myDay();

// wakeUp(true)
//     .then(amIWokeUp =>{
//         return breakfast(amIWokeUp);
//     })
//     .then(amIAte=>{
//         return goToBussStop(amIAte);
//     })
//     .then(amIOnTheBuss=>{
//         return onTheBuss(amIOnTheBuss);
//
//     }).then(amIAtWork=>{
//         return atWork(amIAtWork);
//     })
//     .then(amIHungry=>{
//         return lunch(amIHungry);
//     })
//     .then(wasIAtWork=>{
//         return backToHome(wasIAtWork);
//     })
//     .then(onMyWay=>{
//         return wayToTheGym(onMyWay);
//     })
//     .then(onTheGym=>{
//         return atGym(onTheGym);
//     })
//     .then(afterGym=>{
//         return shower(afterGym);
//     });