'use strict';

let assert = require('assert');
let FunctionMap = require('./index');

describe('FunctionMap', function() {

  it('should be ok', function() {

    let fnMap = new FunctionMap();
    fnMap
      .use('foo', () => 'foo')
      .use('bar', () => 'bar')
      .use('1', 1);

    assert.equal(fnMap.size, 2);
    assert.equal('foo', fnMap.get('foo')());
    assert.equal('bar', fnMap.get('bar')());

  });

});
