const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsLoader = document.querySelector('.comments-loader');
const commentsList = bigPicture.getElementsByClassName('social__comments')[0];
const socialCommentCount = document.querySelector('.social__comment-count');

export function openBigPicture(photoData) {

    bigPicture.classList.remove('hidden');

    const dataPicture = photoData.dataPicture;

    const img = bigPicture.querySelector('.big-picture__img img');
    const likesCount = bigPicture.querySelector('.likes-count');
    const commentsCount = bigPicture.querySelector('.comments-count');
    const description = bigPicture.querySelector('.social__caption');

    img.src = dataPicture.url;
    likesCount.textContent = dataPicture.likes;
    commentsCount.textContent = dataPicture.comments.length;
    description.textContent = dataPicture.description;

    const objectComments = dataPicture.comments;
    commentsList.innerHTML = '';
    objectComments.forEach((comment,index) => {
        const commentElement = document.createElement('li');
        commentElement.classList.add('social__comment');
        if (index>4){
            commentElement.classList.add('hidden');
        }
        commentElement.insertAdjacentHTML("beforeend", `<img class="social__picture" src=${comment.avatar} alt=${comment.name} width="35" height="35">`)
        commentElement.insertAdjacentHTML("beforeend",`<p class="social__text">${comment.message}</p>`)
        commentsList.append(commentElement);
    });

    if (commentsList.childElementCount<6){
        commentsLoader.classList.add('hidden')
        socialCommentCount.innerHTML=`${commentsList.childElementCount} из <span class="comments-count">${commentsList.childElementCount}</span> комментариев</div>`;
    }
    else {
        commentsLoader.classList.remove('hidden')

    }

    document.body.classList.add('modal-open');
};


function loadMoreComments(ul){
  const commentsList = ul.parentElement.getElementsByClassName('social__comments');
  const commentsListTwo = ul.parentElement.querySelector('.social__comments');
  // const commentsHidden= commentsList.querySelectorAll('.hidden');
  // const commentsVisible= commentsList.querySelectorAll('.social__comment');
  console.log(commentsList[0])
  console.log(commentsListTwo)
  // console.log(commentsHidden)
  // console.log(commentsVisible)
}

// commentsLoader.addEventListener('click', function(event) {
//   loadMoreComments(event.target);
// });


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

