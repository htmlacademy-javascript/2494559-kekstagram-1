import './util.js';

const ALL_ID = new Set();
const ALL_URL = new Set();
const ALL_ID_COMMENTS = new Set();

let id = CreateObj.creatNoRepNum(25, 1, CreateObj.allId);
// let url = `photos/${CreateObj.creatNoRepNum(25, 1, CreateObj.allUrl)}.jpg`;
// let description = CreateObj.descrip.at(
//   CreateObj.creatNum(1, CreateObj.descrip.length - 1)
// );
// let likes = CreateObj.getLike(200, 15);
// let comments = CreateObj.getDataComments();

class CreateObj {
  constructor(id, url, options, likes, comments) {
    this.id = CreateObj.creatNoRepNum(25, 1, CreateObj.allId);
    this.url = `photos/${CreateObj.creatNoRepNum(25, 1, CreateObj.allUrl)}.jpg`;
    this.description = CreateObj.descrip.at(
      CreateObj.creatNum(1, CreateObj.descrip.length - 1)
    );
    this.likes = CreateObj.getLike(200, 15);
    this.comments = CreateObj.getDataComments();
  }
}

export { CreateObj };
