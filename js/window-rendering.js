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
        commentElement.classList.add('social__comment');
        commentElement.insertAdjacentHTML("beforeend", `<img class="social__picture" src=${comment.avatar} alt=${comment.name} width="35" height="35">`)
        commentElement.insertAdjacentHTML("beforeend",`<p class="social__text">${comment.message}</p>`)
        if (commentsList.childElementCount>=5){
          commentElement.classList.add('hidden');
        }
        commentsList.append(commentElement);
    });

    // document.querySelector(".social__comment-count").innerHTML=`${commentsList.childElementCount} из <span class="comments-count">${commentsList.childElementCount}</span> комментариев`

    if (commentsList.childElementCount<=5) {
      document.querySelector('.comments-loader').classList.add('hidden')
      document.querySelector(".social__comment-count").innerHTML=`${commentsList.childElementCount} из <span class="comments-count">${commentsList.childElementCount}</span> комментариев`
    }
    else if (commentsList.childElementCount===5){
      document.querySelector(".social__comment-count").innerHTML=`5 из <span class="comments-count">${commentsList.childElementCount}</span> комментариев`
    }

    document.body.classList.add('modal-open');
};

const commentsLoader = document.querySelector('.comments-loader');

function loadMoreComments(ul){
  const commentsList = ul.parentElement.querySelector('.social__comments')
  // const commentsHidden= commentsList.querySelectorAll('.hidden');
  // const commentsVisible= commentsList.querySelectorAll('.social__comment');
  console.log(commentsList)
  console.log(commentsHidden)
  console.log(commentsVisible)

//   if(commentsList.length === commentsHidden.length){
//    return document.querySelector('.comments-loader').classList.add('hidden');
//   }

//   commentsHidden.forEach((comment,index)=>{
//     if(index<5){
//       comment.classList.remove('hidden')
//     }
//   });
//  return document.querySelector(".social__comment-count").innerHTML=`${commentsVisible.length-commentsHidden.length} из <span class="comments-count">${commentsList.childElementCount}</span> комментариев`
}

commentsLoader.addEventListener('click', function(event) {
  loadMoreComments(event.target);
});


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

