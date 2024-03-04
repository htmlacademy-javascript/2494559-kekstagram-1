import { userDataArray } from './data.js';

import { createElements, sectionPictures} from './user-photo-renderer.js';

import { openBigPicture} from './window-rendering.js';

sectionPictures.prepend(createElements(userDataArray));

sectionPictures.addEventListener('click', (event) => {
  openBigPicture(event.target);
});
