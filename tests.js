const assert = require('assert');
const abbreviations = require('./');




function testAll() {
  var a = abbreviations('GLV')
  var b = abbreviations('g l v');
  var c = {abbr: 'GLV', full: 'Green Leafy Vegetables'};
  assert.deepStrictEqual(a, c);
  assert.deepStrictEqual(b, c);

  var a = abbreviations('what is D.R.I.');
  var b = abbreviations('d. r. i. stands for?');
  var c = {abbr: 'DRI', full: 'Dietary reference intake'};
  assert.deepStrictEqual(a, c);
  assert.deepStrictEqual(b, c);
}
testAll();
