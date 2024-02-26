function createElements(arr){

  const elements = new DocumentFragment();

  for( let i=0; i<arr.length; i++){
    let element = document.createElement('div');

    element.append(picture.content.cloneNode(true))

    const img = element.querySelector('img');

    const likes = element.querySelector('.picture__comments');

    const comments = element.querySelector('.picture__likes');

    img.setAttribute("src", `${arr[i].url}`);

    likes.textContent = `${arr[i].likes}`;

    comments.textContent = `${arr[i].comments.length}`;

    elements.append(element);

  }
  return elements
}

export { createElements }

