var chai  = require('chai');

const assert  = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test advanced calculateNumber()', function() {
    describe('SUM', function(){
        it('Should return 6', function() {
           chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('SUBTRACT', function(){
        it('should return -4', function() {
           chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('DIVIVDE', function(){
        it('should return 0.2', function() {
           chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });
    });

    describe('DIVIVDE by 0:', function(){
        it('return Error', function() {
           chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
})
