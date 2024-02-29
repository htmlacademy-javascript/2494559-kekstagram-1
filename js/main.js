import { CreateObj } from './data.js';

import { createElements } from './user-photo-renderer.js';

import{ closeBigPicture, openBigPicture, closeButton, bigPicture} from './window-rendering.js';


const userDataArray = Array.from({ length: 25 }, () => new CreateObj());

document.querySelector('section.pictures').prepend(createElements(userDataArray));

// const sec = document.querySelector('section.pictures');

// sec.addEventListener('onclick', function(event) {
//   if (evt.target.matches('img.pictures___img')) {
//     openBigPicture(event.target)
//   }

// });
