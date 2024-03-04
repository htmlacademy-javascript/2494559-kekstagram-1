import { CreateObj } from './data.js';

import { createElements } from './user-photo-renderer.js';

import { sectionPictures, openBigPicture} from './window-rendering.js';


const userDataArray = Array.from({ length: 25 }, () => new CreateObj());

document.querySelector('section.pictures').prepend(createElements(userDataArray));

sectionPictures.addEventListener('click', (event) => {
  openBigPicture(event.target);
});
