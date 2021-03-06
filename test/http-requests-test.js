var expect = require('chai').expect;
var lodash = require('lodash');
var apiDescription = require('../lib/index');
apiDescription(lodash);

describe('HTTP Requests Function', function() {
  context('when content exists', function() {
    var refract = {
      element: 'httpTransaction',
      content: [
        {
          element: 'httpRequest',
          content: []
        },
        {
          element: 'copy',
          content: []
        },
        {
          element: 'httpRequest',
          content: []
        },
      ]
    };

    var expected = [refract.content[0], refract.content[2]];

    it('returns httpRequest elements found in content', function() {
      expect(lodash.httpRequests(refract)).to.deep.equal(expected);
    });
  });
});
