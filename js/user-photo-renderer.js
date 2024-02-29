export function createElements(pictures) {

  const picturesFeed = new DocumentFragment();

  return pictures.reduce((accumulator, item) => {
    const element = document.createElement('div');

    const picture = document.getElementById('picture');

    element.append(picture.content.cloneNode(true));

    const img = element.querySelector('img');

    const likes = element.querySelector('.picture__likes');

    const comments = element.querySelector('.picture__comments');

    img.setAttribute('src', `${item.url}`);
    img.description=item.description;
    likes.textContent = item.likes;
    comments.textContent = item.comments.length;
    comments.comments=item.comments;

    accumulator.append(element);

    return accumulator;
  }, picturesFeed);
}

