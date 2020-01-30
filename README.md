[Abbreviations] of [Indian Food Composition Tables 2017].

```javascript
const abbreviations = require('@ifct2017/abbreviations');
// abbreviations.corpus: Map {key => {abbr, full}}
// abbreviations.load(): true (corpus loaded)
// abbreviations.sql([table], [options]): sql commands
// abbreviations.csv(): path of csv file
// abbreviations(<query>)
// -> {abbr, full} if supported, null otherwise.


abbreviations.load();
/* load corpus first */

abbreviations('GLVs');
abbreviations('g l v s');
// Green Leafy Vegetables

abbreviations('what is D.R.I.');
abbreviations('d. r. i. stands for?');
/* (full stops must immediately follow character, if present) */
/* (for single character abbreviations, full stop is mandatory) */
// Dietary reference intake
```


[![ifct2017](http://ifct2017.com/ifct_2017.jpg)](https://www.npmjs.com/package/ifct2017)
> You can ask about composition of 528 key foods in India here: [ifct2017.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>
> Take a peek at the raw data here: [Document], [Webpage].

[Indian Food Composition Tables 2017]: http://ifct2017.com/
[Abbreviations]: https://github.com/ifct2017/abbreviations/blob/master/index.csv
[ifct2017.github.io]: https://ifct2017.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
[Document]: https://docs.google.com/spreadsheets/d/1ZTzOOj827HhsUWhdISh1lOJsOh-dvh3ORbAPs9XHI1Q/edit?usp=sharing
[Webpage]: https://docs.google.com/spreadsheets/d/e/2PACX-1vSPLlUvSc4OuO8cHl7kBntXJvolVWxklwZrbyNX0YfOaMMQpAi6iwf47If6wE1UyCTiBHUcx-UwLdb9/pubhtml
