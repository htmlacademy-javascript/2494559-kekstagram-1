import { CreateObj } from './data.js';

import { createElements } from './user-photo-renderer.js';

import{ openBigPicture} from './window-rendering.js';


const userDataArray = Array.from({ length: 25 }, () => new CreateObj());

document.querySelector('section.pictures').prepend(createElements(userDataArray));

const sec = document.querySelector('section.pictures');

sec.addEventListener('click', function(event) {
  // alert(event.target.nextElementSibling.querySelector('.picture__comments').textContent);
  openBigPicture(event.target)

});
