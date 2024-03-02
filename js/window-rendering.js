const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

export function openBigPicture(photoData) {

    bigPicture.classList.remove('hidden');

    const dataPicture = photoData.dataPicture;

    const img = bigPicture.querySelector('.big-picture__img img');
    const likesCount = bigPicture.querySelector('.likes-count');
    const commentsCount = bigPicture.querySelector('.comments-count');
    const commentsList = bigPicture.querySelector('.social__comments');
    const description = bigPicture.querySelector('.social__caption');

    img.src = dataPicture.url;
    likesCount.textContent = dataPicture.likes;
    commentsCount.textContent = dataPicture.comments.length;
    description.textContent = dataPicture.description;

    const objectComments = dataPicture.comments;
    commentsList.innerHTML = '';
    objectComments.forEach(comment => {
        const commentElement = document.createElement('li');
        commentElement.insertAdjacentHTML("beforeend", `<img class="social__picture" src=${comment.avatar} alt=${comment.name} width="35" height="35">`)
        commentElement.insertAdjacentHTML("beforeend",`<p class="social__text">${comment.message}</p>`)
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
