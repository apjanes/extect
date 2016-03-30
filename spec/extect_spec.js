require('../lib/extect')
var expect = require('expect')
describe('extect', function() {
  describe('toBeSequenceEqualTo', function() {
    it('should be pass when all values in arrays are equal', function() {
      var expected = ['Aaron', 'Broughton', 'Janes']
      var actual = ['Aaron', 'Broughton', 'Janes']
      expect(actual).toBeSequenceEqualTo(expected)
    })
  });
});