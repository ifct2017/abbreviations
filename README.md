# @ifct2017/abbreviations

[![ifct2017](http://ninindia.org/images/ifct_2017.png)](https://www.npmjs.com/package/ifct2017)

Abbreviations of [Indian Food Composition Tables 2017].<br>
Check supported [abbreviations].

```javascript
const abbreviations = require('@ifct2017/abbreviations');
// abbreviations(<query>)
// -> {abbr, full} if supported, null otherwise.
// abbreviations.corpus: Map {key => {abbr, full}}
// abbreviations.sql([table], [options]): sql commands
// abbreviations.csv(): path of csv file

abbreviations('GLVs');
abbreviations('g l v s');
// Green Leafy Vegetables

abbreviations('what is D.R.I.');
abbreviations('d. r. i. stands for?');
/* (full stops must immediately follow character, if present) */
/* (for single character abbreviations, full stop is mandatory) */
// Dietary reference intake
```


[Indian Food Composition Tables 2017]: http://ifct2017.com/
[abbreviations]: https://github.com/ifct2017/abbreviations/blob/master/index.csv
