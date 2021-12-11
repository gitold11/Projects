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

            btn.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(posts => posts.json())
                    .then(posts => {
                        posts.forEach(post => {

                            let postDiv = document.createElement('div');
                            postDiv.classList.add('block', 'post_div');

                            let postId = document.createElement('h3');
                            postId.innerText = `id: ${post.id}`;

                            let postUserId = document.createElement('h3');
                            postUserId.innerText = `user id: ${post.userId}`;

                            let postBody = document.createElement('h3');
                            postBody.innerText = `${post.body}`;

                            let postTitle = document.createElement('h3');
                            postTitle.innerText = `${post.title}`;

                            let postBtn = document.createElement('button');
                            postBtn.innerText = 'show comments'

                            postBtn.onclick = () => {
                                fetch('https://jsonplaceholder.typicode.com/comments')
                                    .then(comments => comments.json())
                                    .then(comments => {
                                        comments.forEach(comment => {
                                            if (post.id === comment.postId) {
                                                let commentDiv = document.createElement('div');
                                                commentDiv.classList.add('block','comment');

                                                let commentId = document.createElement('div');
                                                commentId.innerText = `id: ${comment.id}`;

                                                let commentPostId = document.createElement('div');
                                                commentPostId.innerText = `post id: ${comment.postId}`;

                                                let commentName = document.createElement('div');
                                                commentName.innerText = `${comment.name}`;

                                                let commentBody = document.createElement('div');
                                                commentBody.innerText = `${comment.body}`;

                                                let commentEmail = document.createElement('div');
                                                commentEmail.innerText = `${comment.email}`;

                                                wrap.appendChild(commentDiv);
                                                commentDiv.append(commentId,commentPostId, commentName, commentBody, commentEmail);
                                            }
                                            ;
                                        });
                                    });
                            };

                            wrap.appendChild(postDiv);
                            postDiv.append(postUserId, postId, postBody, postTitle, postBtn);

                        });

                    });
            };


            document.body.appendChild(wrap);
            wrap.appendChild(block);
            block.append(id, name, userName, email, phone, website, address, company, btn);
            address.append(city, street, suite, zipcode, geo);
            geo.append(lat, lng);
            company.append(companyName, catchPhrase, bs);
        });
    });