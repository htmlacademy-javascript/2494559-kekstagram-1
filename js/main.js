import { CreateObj } from './data.js';

import { createElements } from './user-photo-renderer.js';

import{ openBigPicture} from './window-rendering.js';


const userDataArray = Array.from({ length: 25 }, () => new CreateObj());

document.querySelector('section.pictures').prepend(createElements(userDataArray));

const sec = document.querySelector('section.pictures');

sec.addEventListener('click', function(event) {
  openBigPicture(event.target)
});

// const ul = document.querySelector('ul.social__comments')

// function showComments(data){
//   const liElements = data.querySelectorAll('.social__comment');
//   for (let i = 0; i < liElements.length; i++) {
//     data[i].classList.add('hidden');
//   }
// }

// showComments(ul)

// console.log(Array.from(ul))
// console.log((ul)[0].hidden)
