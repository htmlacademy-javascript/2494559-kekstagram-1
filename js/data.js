import { createNum, createNoRepNum } from './util.js';

import { DESCRIPTION, NAMES, MESSAGE } from './const.js';

let id = createNoRepNum(1, 25);
let url = createNoRepNum(1, 25);
let description = createNum(0, DESCRIPTION.length-1);
let likes = createNum(15, 200);

let idComments = createNoRepNum(15, 999);
let avatar = createNum(1, 6);
let message = createNum(0, MESSAGE.length - 1);
let names = createNum(0, NAMES.length - 1)
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
