var expect = require('expect')
expect.extend({
  toBeSequenceEqualTo: function(expected) {
    for(var i=0; i < this.actual.length; i++)
    {
      expect.assert(
        function() { return this.actual}
      )
    }
  }
})