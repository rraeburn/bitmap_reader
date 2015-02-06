'use strict';

var fs = require('fs');
var reader = require('./lib/reader.js');
var randomizer = require('./lib/randomizer.js');
var bitmap = fs.readFileSync('test.bmp');

if (process.argv[2] == 'bitmap') {
  reader(bitmap);
}

if (process.argv[2] == 'randomize') {
  randomizer();
}