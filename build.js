const csvParse = require('csv-parse');
const fs = require('fs');
const os = require('os');

var map = new Map();
var stream = fs.createReadStream('index.csv').pipe(csvParse({columns: true, comment: '#'}));
stream.on('data', (r) => {
  map.set(r.abbr.toLowerCase().replace(/\W/g, ''), {abbr: r.abbr, full: r.full});
});
stream.on('end', () => {
  var z = `const CORPUS = new Map([${os.EOL}`;
  for(var [k, v] of map)
    z += `  ["${k}", ${JSON.stringify(v).replace(/\"(\w+)\":/g, '$1:')}],${os.EOL}`;
  z += `]);${os.EOL}`;
  z += `module.exports = CORPUS;${os.EOL}`;
  fs.writeFileSync('corpus.js', z);
});
