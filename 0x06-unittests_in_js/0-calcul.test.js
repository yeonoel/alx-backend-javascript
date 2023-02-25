const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('SUM', function() {
  it('Returns 4.', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('returns 5', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('returns 6', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
 
  it('returns 5', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('retuns 4', function() {
    assert.strictEqual(calculateNumber(1.2, 3.1), 4);
  });
});
