const esql = require('sql-extra');
const path = require('path');

const REPLACE = /((\w\s+|\w\.\s*|\w\-\s*|\w$)+)|\w+/g;
var corpus = null;
var match  = null;




function createRegex(lst) {
  var a = '(^|\\W+)(';
  for (var v of lst)
    a += v.length>1? `${v}|` : `${v}\\.|`;
  a = a.substring(0, a.length-1);
  a += `)(\\W+|$)`;
  return new RegExp(a, 'i');
}


function load() {
  if (corpus) return corpus;
  corpus = require('./corpus');
  match  = createRegex(corpus.keys());
  return corpus;
}


function sql(tab='abbreviations', opt={}) {
  return esql.setupTable(tab, {abbr: 'TEXT', full: 'TEXT'}, load().values(),
    Object.assign({pk: 'abbr', index: true, tsvector: {abbr: 'A', full: 'B'}}, opt));
}


function csv() {
  return path.join(__dirname, 'index.csv');
}


function abbreviations(txt) {
  if (!corpus) load();
  var txt = txt.replace(REPLACE, m => {
    var v = m.replace(/\W/g, '');
    return v.length===1? m.trim()+' ' : v+' ';
  }).toLowerCase();
  var m = txt.match(match);
  if (m==null) return null;
  return corpus.get(m[2].replace('.', ''));
}
abbreviations.csv  = csv;
abbreviations.sql  = sql;
abbreviations.load = load;
module.exports = abbreviations;
