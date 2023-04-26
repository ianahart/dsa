function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

//countDown(5);

function sumRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}
// console.log(sumRange(3));

const reverseLetter = (str, reversed = '') => {
  const arr = str.split('');

  if (str.length === 0) {
    return reversed.replace(/[^a-zA-Z]+/g, '');
  }

  reversed += arr[arr.length - 1];
  arr.splice(arr.length - 1, 1);

  return reverseLetter(arr.join(''), reversed);
};

// console.log(reverseLetter('krishan'));

const firstUpperCaseLetter = (word) => {
  return checkCasing(word, 0);
};

const checkCasing = (word, index) => {
  if (word[index] === word[index].toUpperCase()) {
    return word[index];
  }

  return checkCasing(word, index + 1);
};

// console.log(firstUpperCaseLetter('hoBbIt'));

const power = (base, exp) => {
  if (exp === 1) {
    return base;
  }

  return base * power(base, exp - 1);
};

// console.log(power(2, 4));

const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// console.log(factorial(4));

const productOfArray = (array) => {
  if (array.length === 1) {
    return array[0];
  }

  return array[0] * productOfArray(array.slice(1));
};

// console.log(productOfArray([1, 2, 3, 10]));

const recursiveRange = (n) => {
  if (n <= 0) {
    return n;
  }
  return n + recursiveRange(n - 1);
};

// console.log(recursiveRange(10));

const reverse = (word) => {
  if (word.length === 0) {
    return word;
  }
  return word.slice(-1) + reverse(word.slice(0, -1));
};

// console.log(reverse('awesome'));
const capitalizeFirst = (array) => {
  return capitalize(array, array.length - 1);
};

const capitalize = (array, index) => {
  if (index === -1) {
    return array;
  }

  const word = array[index].slice(0, 1).toUpperCase() + array[index].slice(1);
  array[index] = word;
  return capitalize(array, index - 1);
};

// console.log(capitalizeFirst(['car', 'taco', 'banana']));
