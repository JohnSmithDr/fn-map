'use strict';

let assert = require('assert');
let FunctionMap = require('./index');

describe('FunctionMap', function() {

  it('should be ok', function() {

    let fnMap = FunctionMap
      .create()
      .use('foo', () => 'foo')
      .use('bar', () => 'bar')
      .use('1', 1);

    assert.equal(fnMap.size, 2);
    assert.equal(fnMap.get('foo')(), 'foo');
    assert.equal(fnMap.get('bar')(), 'bar');

  });

});
