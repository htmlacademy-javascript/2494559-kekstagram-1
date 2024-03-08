import { CreateObj } from './data.js';

import { createElements } from './user-photo-renderer.js';

import { closeBigPicture, sectionPictures, openBigPicture} from './window-rendering.js';

import {uploadFile, uploadPicture} from './data-via-form.js'

const userDataArray = Array.from({ length: 25 }, () => new CreateObj());// переделать в Map

document.querySelector('section.pictures').prepend(createElements(userDataArray));

sectionPictures.addEventListener('click', (event) => {
  if(event.target.className=='picture__img'){
    openBigPicture(event.target)
  }
});

uploadFile.addEventListener('change', uploadPicture);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeBigPicture();
  }
});
