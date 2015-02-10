'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync('test.bmp');

module.exports = function randomizer() {
  for(var i = 54; i < 1078; i++) {
    bitmap[i] = Math.floor((Math.random() * 256));
  }
  fs.writeFile('random.bmp', bitmap, 'utf-8', function(err, data) {
    console.log('randomize has completed');
  });
};