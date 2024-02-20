import './const.js';

function createNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function createNoRepNum(min, max) {
  let curr=min;
  return function (){
    if (this.curr < max) {
      return this.curr++;
    }
  }
}
