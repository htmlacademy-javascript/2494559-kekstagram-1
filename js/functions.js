// 1 Задача:

// 1-вариант (fastest)

function checkPalindrome(word) {
  word = word.replaceAll(' ', '').toLocaleLowerCase(); //когда в строке встречаются пробелы.

  let lastIndWord = word.length - 1;

  for (let i = 0; i <= word.length - 1; i++) {
    if (word[i] !== word[lastIndWord]) {
      return false;
    }
    lastIndWord -= 1;
  }
  return true;
}

checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');
checkPalindrome('Лёша на полке клопа нашёл ');

// 2-вариант (slower)

function checkPalindromeTwo(word) {
  word = word.replaceAll(' ', '').toLocaleLowerCase(); //когда в строке встречаются пробелы.
  const revWord = word.split('').reverse().join('');
  return word === revWord;
}

checkPalindromeTwo('топот');
checkPalindromeTwo('ДовОд');
checkPalindromeTwo('Кекс');
checkPalindromeTwo('Лёша на полке клопа нашёл ');

//2 Задача:

function extractionNum(str) {
  if (!isNaN(str)) {
    //когда вместо строки приходит число;
    str = String(str);
  }

  str = str.replaceAll(' ', ''); //далее удаляем все пробелы;

  let num = String(); //объявляем новую переменную и присваиваем ей тип данных String;

  for (const letter of str) {
    //чере цикл for of проходим по каждому символу строкиж;
    if (!isNaN(letter) && +letter >= 0 && +letter <= 9) {
      num += letter;
    } //если символ является числовым значением, мы добавляем его в let num.
  }
  return (num === '') ? NaN : Number(num); //возвращам let num в виде целого положительного числа, либо если в строке нет ни одной цифры, возвращам NaN;
}

extractionNum('2023 год');
extractionNum('ECMAScript 2022');
extractionNum('1 кефир, 0.5 батона');
extractionNum('агент 007');
extractionNum('а я томат');
extractionNum(2023);
extractionNum(-1);
extractionNum(1.5);

//3 Задача:

// 1-вариант(без использования String.prototype.padStart())

function generatingAddressesOne(originalText, minLength, addChar) {
  let newString = originalText;

  // Если исходная строка превышает заданную длину, она не должна обрезаться.

  if (originalText.length > minLength) {
    return originalText;
  }

  if (minLength < addChar.length) {
    return addChar.slice(0, minLength - newString.length) + originalText;
  }

  for (let i = 0; i < minLength - originalText.length; i++) {

    if (1 < addChar.length) {
      newString = addChar.slice(0, minLength - newString.length) + newString;
    } else {
      newString = addChar.slice(0, addChar.length) + newString;
    }
  }
  return newString;
}

generatingAddressesOne('1', 2, '0');
generatingAddressesOne('1', 4, '0');
generatingAddressesOne('q', 4, 'werty');
generatingAddressesOne('q', 4, 'we');

// 2-вариант(с использования String.prototype.padStart())

function generatingAddressesTwo(originalText, minLength, addChar) {
  return originalText.padStart(minLength, addChar);
}

generatingAddressesTwo('1', 2, '0');
generatingAddressesTwo('1', 4, '0');
generatingAddressesTwo('q', 4, 'werty');
generatingAddressesTwo('q', 4, 'we');

// Задача к Кекстаграм:

function strLengthChecks(checkStr,maxLength) {
  return checkStr.length <= maxLength;
}

strLengthChecks('проверяемая строка', 20);
strLengthChecks('проверяемая строка', 18);
strLengthChecks('проверяемая строка', 10);

// Задача к Кексобукинг:

function generationСoordinates(min, max, numbOfChar) {
  let newNum = 0;
  if (min <= 0 || max <= 0 || numbOfChar <= 0) {
    return NaN;
  }

  if (min === max) {
    return `Результат: ${min}, так как  min и max имеют одинаковые значения;`;
  }

  //если передать значение «max» меньшее, чем значение «min»
  if (min > max) {
    // const result = confirm(
    //   'Переданные значение «max» меньшее, чем значение «max», поменять их местами?'
    // );
    const result = true;
    if (result) {
      newNum = (Math.random() * (min - max) + max).toFixed(numbOfChar); //генерация случайнх чисел с фиксированным кол-ом символов после запятой.
      return `Результат: ${newNum} с плавающей точкой из диапазона "${max}...${min}" с указанным "${numbOfChar} знаков после запятой"`;
    } else {
      return NaN;
    }
  }
  newNum = (Math.random() * (max - min) + min).toFixed(numbOfChar); //генерация случайнх чисел с фиксированным кол-ом символов после запятой.
  return `Результат: ${newNum} с плавающей точкой из диапазона "${min}...${max}" с указанным "${numbOfChar} знаков после запятой"`;
}

generationСoordinates(5.565654654989, 20.5654654654656, 8);
generationСoordinates(2, 2, 8);
generationСoordinates(7, 1, 8);
