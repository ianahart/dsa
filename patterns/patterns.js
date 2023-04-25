function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

//console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

const validAnagram = (str1, str2) => {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let prop in frequencyCounter1) {
    if (frequencyCounter1[prop] !== frequencyCounter2[prop]) {
      return false;
    }
  }

  return true;
};

console.log(validAnagram('texttwisttime', 'timetwisttext'));
