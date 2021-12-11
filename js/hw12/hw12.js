// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(posts => posts.json())
    .then(posts => {
        let divPost = document.createElement('div');
        divPost.classList.add('div_post');

        for (let post of posts) {

            let block = document.createElement('div');
            block.classList.add('block');

            let id = document.createElement('h3');
            id.innerText = `id: ${post.id}`;

            let userId = document.createElement('h3');
            userId.innerText = `user id: ${post.userId}`;

            let body = document.createElement('p');
            body.innerText = `${post.body}`;

            let title = document.createElement('p');
            title.innerText = `${post.title}`;

            if(post.id %2 === 0){
                block.classList.add('color');
            }


            document.body.appendChild(divPost);
            divPost.appendChild(block);
            block.append(id, userId, body, title);
        }
    });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments.
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(coments => coments.json())
    .then(coments => {
        let mainBlock = document.createElement('div');
        mainBlock.classList.add('div_post');

        for (let coment of coments) {

            let wrap = document.createElement('div');
            wrap.classList.add('block');

            let comentId = document.createElement('h3');
            comentId.innerText = `id: ${coment.id}`

            let postId = document.createElement('h3');
            postId.innerText = `postId: ${coment.postId}`

            let comentBody = document.createElement('p');
            comentBody.innerText = `${coment.body}`;

            let comentEmail = document.createElement('p');
            comentEmail.innerText = `email: ${coment.email}`;

            let comentName = document.createElement('p');
            comentName.innerText = `${coment.name}`;

            if(coment.id %2 === 0){
                wrap.classList.add('color');
            }


            document.body.appendChild(mainBlock);
            mainBlock.append(wrap)
            wrap.append(comentId,postId,comentBody,comentEmail,comentName);
        };
    });

