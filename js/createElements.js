export function createElements(pictures) {

  const elements = new DocumentFragment();

  return pictures.reduce((fragment, item) => {
    const element = document.createElement('div');

    const picture = document.getElementById('picture');

    element.append(picture.content.cloneNode(true));

    const img = element.querySelector('img');

    const likes = element.querySelector('.picture__comments');

    const comments = element.querySelector('.picture__likes');

    img.setAttribute('src', `${item.url}`);
    likes.textContent = item.likes;
    comments.textContent = item.comments.length;

    fragment.append(element);

    return fragment;
  }, elements);
}

