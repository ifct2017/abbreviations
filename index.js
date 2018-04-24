const path = require('path');
const corpus = require('./corpus');

function csv() {
  return path.join(__dirname, 'index.csv');
};

function createRegex(lst) {
  var z = '(^|\\W+)(';
  for(var v of lst)
    z += v.length>1? `${v}|`:`${v}\\.|`;
  z = z.substring(0, z.length-1);
  z += `)(\\W+|$)`;
  return new RegExp(z, 'i');
};

const REPLACE = /((\w\s+|\w\.\s*|\w\-\s*|\w$)+)|\w+/g;
const MATCH = createRegex(corpus.keys());

function abbreviations(txt) {
  var txt = txt.replace(REPLACE, (m, p1) => {
    var v = m.replace(/\W/g, '');
    return v.length===1? `${m.trim()} `:`${v} `
  });
  var m = txt.match(MATCH);
  if(m==null) return null;
  return corpus.get(m[2].replace('.', ''));
};

abbreviations.csv = csv;
abbreviations.corpus = corpus;
module.exports = abbreviations;
