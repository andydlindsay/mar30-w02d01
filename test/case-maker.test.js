const chai = require('chai');
const assert = chai.assert;
const camelCase = require('../camel-case');

describe('tests for camelCase()', () => {

  it('returns "thisIsAString" given "this is a string"', () => {
    const actual = camelCase('this is a string');
    const expected = 'thisIsAString';
    assert.equal(actual, expected);
  });

  it('returns "loopyLighthouse" given "loopy lighthouse"', () => {
    const actual = camelCase('loopy lighthouse');
    const expected = 'loopyLighthouse';
    assert.equal(actual, expected);
  });

  it('returns "supercalifragalisticexpialidocious" given "supercalifragalisticexpialidocious"', () => {
    const actual = camelCase('supercalifragalisticexpialidocious');
    const expected = 'supercalifragalisticexpialidocious';
    assert.equal(actual, expected);
  });

  it('returns "thisIsAString" given "thIs iS a strINg"', () => {
    const actual = camelCase('thIs iS a strINg');
    const expected = 'thisIsAString';
    assert.equal(actual, expected);
  });

});
