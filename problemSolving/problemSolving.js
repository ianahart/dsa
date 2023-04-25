const charCount = (str) => {
  const counts = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char.trim().length === 0) continue;
    counts[char] = counts[char] > 0 ? counts[char]++ : 1;
  }

  return counts;
};

console.log(charCount('your PIN number is 1234!'));
