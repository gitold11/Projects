// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
let arr = localStorage.getItem('storage');
let userArr = JSON.parse(arr);

for (let user of userArr) {

    function flattenObject(ob) {
        let toReturn = {};

        for (let i in ob) {
            if (!ob.hasOwnProperty(i)) continue;

            if ((typeof ob[i]) ==='object' && ob[i] !== null) {
                let flatObject = flattenObject(ob[i]);
                for (let x in flatObject) {
                    if (!flatObject.hasOwnProperty(x)) continue;

                    toReturn[i + '.' + x] = flatObject[x];
                };
            } else {
                toReturn[i] = ob[i];
            };
        };
        return toReturn;
    };

    let flattenUser = flattenObject(user);

    let userBlock = document.createElement('div');
    userBlock.classList.add('user__block');

    let btn = document.createElement('button');
    btn.innerText = 'posts of current user';

    document.body.appendChild(userBlock);

    for(field in flattenUser){
        let userField = document.createElement('p');
        userField.innerText = `${field} : ${flattenUser[field]}`;
        userField.classList.add('user__field');



        userBlock.append(userField,btn);
    };


// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


    let storagePost = [];

    btn.onclick = () => {
        fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
            .then(posts => posts.json())
            .then(posts => {

                let titleMainBlock = document.createElement('div');
                titleMainBlock.classList.add('title__main_block');

                alert('you can find posts down below ');

                document.body.appendChild(titleMainBlock);


                posts.forEach(post => {

                    let titleBlock = document.createElement('div');
                    titleBlock.classList.add('title__block');

                    let title = document.createElement('p');
                    title.innerText = `${post.title}`;

                    let postBtn = document.createElement('button');
                    postBtn.innerText = 'more';
                    postBtn.onclick = () => {
                        storagePost.push(post);
                        localStorage.setItem('storagePost', JSON.stringify(storagePost));
                        window.location.href = './post-details.html';
                    };

                    titleMainBlock.appendChild(titleBlock);
                    titleBlock.append(title, postBtn);
                });
            });
    };

};