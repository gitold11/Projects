// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(posts => posts.json())
    .then(posts => {
        let mainBlock = document.createElement('div');
        mainBlock.classList.add('main_block');
        posts.forEach(post =>{
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

            let btn = document.createElement('button');
            btn.innerText = 'Choose';

            btn.onclick = () =>{
               let chosen = document.createElement('div');
               chosen.classList.add('block','chosen');

               let chosenPost = document.createElement('h3');
               chosenPost.innerText = 'CHOSEN POST!!!'

               let chosenId = document.createElement('h3');
               chosenId.innerText = `id: ${post.id}`;

               let chosenUserId = document.createElement('h3');
               chosenUserId.innerText = `user id: ${post.userId}`;

               let chosenBody = document.createElement('h3');
               chosenBody.innerText = `${post.body}`;


               let chosenTitle = document.createElement('h3');
               chosenTitle.innerText = `${post.title}`;

               mainBlock.appendChild(chosen);
               chosen.append(chosenPost,chosenId,chosenUserId,chosenBody,chosenTitle);

            };

            document.body.appendChild(mainBlock);
            mainBlock.appendChild(block);
            block.append(id,userId,body,title,btn);
        });
});