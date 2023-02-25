const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('SUM', function() {
  it('Returns 4.', function() {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it('should return the sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('returns 6', function() {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it('should return the sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('retuns 4', function() {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.1), 4);
  });
});

describe('SUBTRACT', function() {
  it('should return the SUBTRACT of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), 4);
  });

  it('should return the SUBTRACT of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), 3);
  });

  it('should return the SUBTRACT of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), 2);
  });

  it('should return the SUBTRACT of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), 2);
  });

  it('should return the SUBTRACT of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.1), 2);
  });
});

describe('DIVIDE', function() {
  it('should return Error of numberOne DIVIDE 0', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should return the DIVIDE of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 5, 3.7), 1.25);
  });

  it('should return the DIVIDE of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });

  it('should return the DIVIDE of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 0, 3.7), 0);
  });

  it('should return the DIVIDE of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 4.1, 1.6), 2);
  });
});
