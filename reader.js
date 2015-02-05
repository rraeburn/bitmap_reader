'use strict'

var fs = require('fs');
var bitmap = fs.readFileSync('test.bmp');

var bitmapObject = {};

bitmapObject.type = bitmap.toString('utf-8', 0, 2);
bitmapObject.size = bitmap.readUInt32LE(2);
bitmapObject.startOfPixels = bitmap.readUInt32LE(10);
bitmapObject.width = bitmap.readUInt32LE(18);
bitmapObject.height = bitmap.readUInt32LE(22);
bitmapObject.colorDepth = bitmap.readUInt16LE(28);
bitmapObject.paletteSize = bitmap.readUInt32LE(46);

if (process.argv[2] == 'bitmap') {
  console.dir(bitmapObject);
};

if (process.argv[2] == 'randomize') {
  for(var i = 54; i < 1078; i++) {
    bitmap[i] = Math.floor((Math.random() * 256));
  };
  fs.writeFile('random.bmp', bitmap, 'utf-8', function(err, data) {
    console.log('randomize has completed');
  });
};

