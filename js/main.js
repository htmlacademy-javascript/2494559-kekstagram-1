import { CreateObj } from './data.js';

import { createElements } from './user-photo-renderer.js';

import { closeBigPicture, sectionPictures, openBigPicture} from './window-rendering.js';

import { uploadFile, uploadPicture } from './data-via-form.js'

import { formPhotoDescription, textHashtags } from './data-validation.js'

const userDataArray = Array.from({ length: 25 }, () => new CreateObj());// переделать в Map

document.querySelector('section.pictures').prepend(createElements(userDataArray));

sectionPictures.addEventListener('click', (event) => {
  if(event.target.className=='picture__img'){
    openBigPicture(event.target)
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeBigPicture();
  }
});

uploadFile.addEventListener('change', uploadPicture);

formPhotoDescription.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

textHashtags.addEventListener('focus', function() {
  textHashtags.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      event.stopPropagation();
    }
  });
});
