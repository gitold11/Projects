// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let form = document.createElement('form');
form.name = 'f1';

let inpName = document.createElement('input');
inpName.type = 'text';
inpName.name = 'name';
inpName.placeholder = 'name';

let inpAge = document.createElement('input');
inpAge.type = 'number';
inpAge.name = 'age';
inpAge.placeholder = 'age';

let btn = document.createElement('button');
btn.innerText = 'Save';

document.body.appendChild(form);
form.append(inpName, inpAge, btn);

let user = [];

let f1 = document.forms.f1;
f1.onsubmit = function (e) {
    e.preventDefault();
    user.push({name: f1.name.value, age: f1.age.value});
    localStorage.setItem('user', JSON.stringify(user));
};

/////////////////////////////////
document.body.appendChild(document.createElement('hr'));
/////////////////////////////


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form2 = document.createElement('form');
form2.name = 'f2';

let inpModel = document.createElement('input');
inpModel.type = 'text';
inpModel.name = 'model';
inpModel.placeholder = 'model';

let inpType = document.createElement('input');
inpType.type = 'text';
inpType.name = 'type';
inpType.placeholder = 'type';

let inpVolume = document.createElement('input');
inpVolume.type = 'number';
inpVolume.name = 'volume';
inpVolume.placeholder = 'volume';

let btn2 = document.createElement('button');
btn2.innerText = 'Save';

document.body.appendChild(form2);
form2.append(inpModel, inpType, inpVolume, btn2);

let f2 = document.forms.f2;

let carArr = [];

f2.onsubmit = function (e) {
    e.preventDefault();
    carArr.push({model: this.model.value, type: this.type.value, volume: this.volume.value});
    localStorage.setItem('carArr', JSON.stringify(carArr));
};