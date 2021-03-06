const assert = require('assert');
const abbreviations = require('./')




function testAll() {
  var a = abbreviations('GLV')
  assert.deepStrictEqual(a, {abbr: 'GLV', full: 'Green Leafy Vegetables'});
  var a = abbreviations('g l v');
  assert.deepStrictEqual(a, {abbr: 'GLV', full: 'Green Leafy Vegetables'});
  var a = abbreviations('what is D.R.I.');
  assert.deepStrictEqual(a, {abbr: 'DRI', full: 'Dietary reference intake'});
  var a = abbreviations('d. r. i. stands for?');
  assert.deepStrictEqual(a, {abbr: 'DRI', full: 'Dietary reference intake'});
}
testAll();
