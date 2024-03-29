import { CreateObj } from './data.js';

import { createElements } from './user-photo-renderer.js';

import { closeBigPicture, sectionPictures, openBigPicture} from './window-rendering.js';

import { uploadFile, uploadPicture } from './data-via-form.js';

import { pristineForm, formPhotoDescription, textHashtags, textDescription, handleEscapeKey } from './data-validation.js';

const userDataArray = Array.from({ length: 25 }, () => new CreateObj());// переделать в Map

document.querySelector('section.pictures').prepend(createElements(userDataArray));

sectionPictures.addEventListener('click', (event) => {
  if(event.target.className === 'picture__img'){
    openBigPicture(event.target);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeBigPicture();
  }
});

uploadFile.addEventListener('change', uploadPicture);

formPhotoDescription.addEventListener('submit', (evt) => {
  if (!pristineForm.validate()){
    evt.preventDefault();
  }
});

textHashtags.addEventListener('focus', () => {
  textHashtags.addEventListener('keydown', handleEscapeKey);
});

textDescription.addEventListener('focus', () => {
  textDescription.addEventListener('keydown', handleEscapeKey);
});
