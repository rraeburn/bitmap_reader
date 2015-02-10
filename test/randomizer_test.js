'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var randomizer = require('../lib/randomizer.js');
var bitmap = fs.readFileSync('test.bmp');
var randomBitmap = fs.readFileSync('random.bmp');
var reader = require('../lib/reader');

describe('randomizer test', function() {
  it('should have palette size equal original bitmap ', function() {
    expect(reader(randomBitmap).paletteSize).to.eql(reader(bitmap).paletteSize);
  });
});

