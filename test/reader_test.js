'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var reader = require('../lib/reader');
var bitmap = fs.readFileSync('test.bmp');

describe('type test', function() {
  it('should be BM', function() {
    expect(reader(bitmap).type).to.eql('BM');
  });
});

