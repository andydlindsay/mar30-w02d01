const camelCase = (input) => {
  const returnArray = [];
  const arr = input.toLowerCase().split(' ');
  returnArray.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const word = arr[i];
    const firstLetter = word[0].toUpperCase();
    const rest = word.slice(1);
    returnArray.push(`${firstLetter}${rest}`);
  }

  return returnArray.join('');
};

module.exports = camelCase;

// this is a string
// ['this', 'is', 'a', 'string']
