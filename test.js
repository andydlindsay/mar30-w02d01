const assert = require('assert');

const sayHello = (name) => {
  return `hello ${name}`;
};

const result = sayHello('Alice');
const expected = 'hello Alce';
// console.assert(result === expected, `${result} did not equal ${expected}`);
assert.strictEqual(result, expected);

console.log('everything is fine!');
