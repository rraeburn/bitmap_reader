'use strict';

module.exports = function readBitmap(file) {
  var newBitmap = {};
  newBitmap.type = file.toString('utf-8', 0, 2);
  newBitmap.size = file.readUInt32LE(2);
  newBitmap.startOfPixels = file.readUInt32LE(10);
  newBitmap.width = file.readUInt32LE(18);
  newBitmap.height = file.readUInt32LE(22);
  newBitmap.colorDepth = file.readUInt16LE(28);
  newBitmap.paletteSize = file.readUInt32LE(46);
  return newBitmap; 
};

