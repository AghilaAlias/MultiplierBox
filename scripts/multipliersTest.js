var assert = require('assert');
let multiplier = require('../multiplier.js')

describe('Numbers Array', function() {
  describe('#buildNumbers()', function() {
    it('should return -1 when the array is not initilized properly', function() {
      assert.notEqual(multiplier.buildNumbers().indexOf(1), -1);
    });
  });
});

describe('Generate number boxes', function() {
    describe('#generateNumberBox()', function() {
      it('should return the length of 144', function() {
        document.querySelectorAll('.multipliers').should.have.length(144);
      });

      it('should contain the expected value', function() {
        document.querySelectorAll('.numberElement').should.have.length(144);
      });

      it('should contain the expected value', function() {
        expect(document.querySelector('.multipliers:first-child')).to.have.text('1');
        expect(document.querySelector('.multipliers:last-child')).to.have.text('144');
      });
    });
  });
