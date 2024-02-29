export const bigPicture = document.querySelector('.big-picture');
export const closeButton = bigPicture.querySelector('.big-picture__cancel');

export function openBigPicture(photoData) {
    const img = bigPicture.querySelector('.big-picture__img img');//верно
    const likesCount = bigPicture.querySelector('.likes-count');//верно
    const commentsCount = bigPicture.querySelector('.comments-count');//верно
    const commentsList = bigPicture.querySelector('.social__comments');//верно
    const description = bigPicture.querySelector('.social__caption');//верно

    img.src = photoData.url; //верно
    likesCount.textContent = photoData.likes; //верно
    commentsCount.textContent = photoData.comments; //верно
    description.textContent = photoData.description;//верно

    commentsList.innerHTML = '';
    photoData.comments.forEach(comment => {
        const commentElement = document.createElement('li');
        commentElement.classList.add('social__comment');
        commentElement.innerHTML =
            `<img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">`
            `<p class="social__text">${comment.message}</p>`
        ;
        commentsList.appendChild(commentElement);
    });

    bigPicture.classList.remove('hidden');//верно
    document.body.classList.add('modal-open');//верно

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
