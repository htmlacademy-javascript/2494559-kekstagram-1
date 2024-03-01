const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

export function openBigPicture(photoData) {

    bigPicture.classList.remove('hidden');//верно

    const img = bigPicture.querySelector('.big-picture__img img');//верно
    const likesCount = bigPicture.querySelector('.likes-count');//верно
    const commentsCount = bigPicture.querySelector('.comments-count');//верно
    const commentsList = bigPicture.querySelector('.social__comments');//верно
    const description = bigPicture.querySelector('.social__caption');

    img.src = photoData.src; //верно
    likesCount.textContent = photoData.nextElementSibling.querySelector('.picture__likes').textContent;//как обратиться по-другому???
    commentsCount.textContent = photoData.nextElementSibling.querySelector('.picture__comments').textContent;//как обратиться по-другому???
    description.textContent = photoData.description;//верно
// остановился здесь!
    const objectComments = photoData.nextElementSibling.querySelector('.picture__comments')
    commentsList.innerHTML = '';
    objectComments.comments.forEach(comment => {
        const commentElement = document.createElement('li');
        commentElement.insertAdjacentHTML("afterbegin", `<img class="social__picture" src=${comment.avatar} alt=${comment.name} width="35" height="35">`)
        commentElement.insertAdjacentHTML("afterbegin",`<p class="social__text">${comment.message}</p>`)
        commentsList.append(commentElement);
    });

};

function closeBigPicture() {
    document.body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeBigPicture();
    }
});

closeButton.addEventListener('click', function() {
    closeBigPicture();
});
