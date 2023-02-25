const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('SUM', function() {
  it('should return the sum of two rounded numbers.', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
});

describe('SUBTRACT', function() {
  it('should return the SUBTRACT of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
});


describe('DIVIDE', function() {
  it('shouls return Error for divion by 0', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should return the DIVIDE of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
});

