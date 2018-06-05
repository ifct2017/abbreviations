const Sql = require('sql-extra');
const path = require('path');

const REPLACE = /((\w\s+|\w\.\s*|\w\-\s*|\w$)+)|\w+/g;
var corpus = new Map();
var match = null;
var ready = false;


function createRegex(lst) {
  var z = '(^|\\W+)(';
  for(var v of lst)
    z += v.length>1? `${v}|`:`${v}\\.|`;
  z = z.substring(0, z.length-1);
  z += `)(\\W+|$)`;
  return new RegExp(z, 'i');
};

function loadCorpus() {
  for(var [k, v] of require('./corpus'))
    corpus.set(k, v);
};

function csv() {
  return path.join(__dirname, 'index.csv');
};

function sql(tab='abbreviations', opt={}) {
  return Sql.setupTable(tab, {abbr: 'TEXT', full: 'TEXT'}, require('./corpus').values(),
    Object.assign({pk: 'abbr', index: true, tsvector: {abbr: 'A', full: 'B'}}, opt));
};

function load() {
  if(ready) return true;
  loadCorpus(); match = createRegex(corpus.keys());
  return ready = true;
};

function abbreviations(txt) {
  if(match==null) return null;
  var txt = txt.replace(REPLACE, (m, p1) => {
    var v = m.replace(/\W/g, '');
    return v.length===1? `${m.trim()} `:`${v} `
  }).toLowerCase();
  var m = txt.match(match);
  if(m==null) return null;
  return corpus.get(m[2].replace('.', ''));
};
abbreviations.csv = csv;
abbreviations.sql = sql;
abbreviations.load = load;
abbreviations.corpus = corpus;
module.exports = abbreviations;
