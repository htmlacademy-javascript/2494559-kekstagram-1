import { CreateObj } from './data.js';

import { createElements } from './createElements.js';

const arr = Array.from({ length: 25 }, () => new CreateObj());

document.body.querySelector('section.pictures').prepend(createElements(arr));
