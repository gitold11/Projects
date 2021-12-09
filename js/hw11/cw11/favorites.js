let arr = localStorage.getItem('favorites');
let favorites = JSON.parse(arr);
console.log(favorites);

for (let favorite of favorites) {
    let block = document.createElement('div');
    block.classList.add('div');

    let h2 = document.createElement('h2');
    h2.innerText = `${favorite.name} ${favorite.age} ${favorite.status}`;

    document.body.appendChild(block);
    block.appendChild(h2);
};

let a = document.createElement('a');
a.href = "./cw11.html";
a.innerText = 'All Users'
a.classList.add('a');

document.body.appendChild(a);



