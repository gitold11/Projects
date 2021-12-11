// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {

        let wrap = document.createElement('div');
        wrap.classList.add('wrap');

        users.forEach(user => {
            let block = document.createElement('div');
            block.classList.add('block');

            let id = document.createElement('h3');
            id.innerText = `id: ${user.id}`;

            let name = document.createElement('h3');
            name.innerText = `${user.name}`;

            let userName = document.createElement('h3');
            userName.innerText = `${user.username}`;

            let email = document.createElement('h3');
            email.innerText = `${user.email}`;

            let phone = document.createElement('h3');
            phone.innerText = `${user.phone}`;

            let website = document.createElement('h3');
            website.innerText = `${user.website}`;

            ///////////////////////////////

            let address = document.createElement('ul');

            let city = document.createElement('li');
            city.innerText = `${user.address.city}`;

            let street = document.createElement('li');
            street.innerText = `${user.address.street}`;

            let suite = document.createElement('li');
            suite.innerText = `${user.address.suite}`;

            let zipcode = document.createElement('li');
            zipcode.innerText = `${user.address.zipcode}`;

            ///////////////////////////////////////

            let geo = document.createElement('ul');

            let lat = document.createElement('li');
            lat.innerText = `${user.address.geo.lat}`;

            let lng = document.createElement('li');
            lng.innerText = `${user.address.geo.lng}`;

            //////////////////////////////////////////////

            let company = document.createElement('ul');

            let companyName = document.createElement('li');
            companyName.innerText = `${user.company.name}`;

            let catchPhrase = document.createElement('li');
            catchPhrase.innerText = `${user.company.catchPhrase}`;

            let bs = document.createElement('li');
            bs.innerText = `${user.company.bs}`;

            //////////////////////////////////

            let btn = document.createElement('button');
            btn.innerText = 'select';



            document.body.appendChild(wrap);
            wrap.appendChild(block);
            block.append(id,name,userName,email,phone,website,address,company,btn);
            address.append(city,street,suite,zipcode,geo);
            geo.append(lat,lng);
            company.append(companyName,catchPhrase,bs);
            console.log(user);
        });
    });