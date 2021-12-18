// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
let arr = localStorage.getItem('storagePost');
let postArr = JSON.parse(arr);

for (let post of postArr) {
    let block = document.createElement('div');
    block.classList.add('block');

    for (key in post) {
        let postField = document.createElement('p');
        postField.classList.add('post__field');
        postField.innerText = `${key} : ${post[key]}`;

        document.body.appendChild(block);
        block.appendChild(postField);
    };

    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
        .then(comments => comments.json())
        .then(comments => {

            let mainCommentsBlock = document.createElement('div');
            mainCommentsBlock.classList.add('main__comments_block');

            document.body.appendChild(mainCommentsBlock);

            comments.forEach(comment => {

                let commentBlock = document.createElement('div');
                commentBlock.classList.add('comment__block');

                mainCommentsBlock.appendChild(commentBlock)

                for (key in comment) {
                    let commentField = document.createElement('p');
                    commentField.classList.add('comment__field');
                    commentField.innerText = `${key} : ${comment[key]}`;

                    commentBlock.appendChild(commentField);
                };
            });
        });
}
;

