// 1 Задача:

function palindrome(word) {
  word = word.replaceAll(' ', '').toLocaleLowerCase();//когда в строке встречаются пробелы.
  let j = word.length - 1;
  for (let i = 0; i <= word.length - 1; i++) {
    if (word[i] !== word[j]){
      return false;
    }
    j--;
  }
  return true;
}

