function createNum(min, max) {
  return function (){
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  };
}

function createNoRepNum(min, max) {
  let curr = min;
  return function (){
    if (curr <= max) {
      return curr++;
    }
  };
}

export { createNum, createNoRepNum };
