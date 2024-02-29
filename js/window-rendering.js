const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

export function openBigPicture(photoData) {
    const img = bigPicture.querySelector('.big-picture__img');
    const likesCount = bigPicture.querySelector('.likes-count');
    const commentsCount = bigPicture.querySelector('.comments-count');
    const commentsList = bigPicture.querySelector('.social__comments');
    const description = bigPicture.querySelector('.social__caption');

    img.src = photoData.url;
    likesCount.textContent = photoData.likes;
    commentsCount.textContent = photoData.comments.length;
    description.textContent = photoData.description;

    commentsList.innerHTML = '';
    photoData.comments.forEach(comment => {
        const commentElement = document.createElement('li');
        commentElement.classList.add('social__comment');
        commentElement.innerHTML =
            `<img class="social__picture" src="${comment.avatar}" alt="${comment.author}" width="35" height="35">`
            `<p class="social__text">${comment.text}</p>`
        ;
        commentsList.appendChild(commentElement);
    });

    document.body.classList.add('modal-open');
    bigPicture.classList.remove('hidden');
}

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
