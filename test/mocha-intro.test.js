// const assert = require('assert');
const chai = require('chai');
const assert = chai.assert;
const helpers = require('../say-hello');
const sayHello = helpers.sayHello;

describe('sayHello function', () => {

  it('should return "hello Alice" given "Alice"', () => {
    const result = sayHello('Alice');
    const expected = 'hello Alice';
    assert.strictEqual(result, expected);
  });

});
