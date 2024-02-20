import { createNum, createNoRepNum } from './util.js';

import { DESCRIPTION, NAMES, MESSAGE } from './const.js';

const id = createNoRepNum(1, 25);
const url = createNoRepNum(1, 25);
const description = createNum(0, DESCRIPTION.length - 1);
const likes = createNum(15, 200);

const idComments = createNoRepNum(15, 999);
const avatar = createNum(1, 6);
const message = createNum(0, MESSAGE.length - 1);
const names = createNum(0, NAMES.length - 1);
class CreateObj {
  constructor() {
    this.id = id();
    this.url = `photos/${url()}.jpg`;
    this.description = DESCRIPTION[description()];
    this.likes = likes();
    this.comments = this.getDataComments();
  }

  getDataComments() {
    return {
      id: idComments(),
      avatar: `img/avatar-${avatar()}.svg`,
      message: message(),
      name: NAMES[names()],
    };
  }
}

export { CreateObj };
