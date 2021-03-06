Full forms of [abbreviations] used in the original book.
> This is part of package [ifct2017].<br>
> Source: [Indian Food Composition Tables 2017].

```javascript
const abbreviations = require('@ifct2017/abbreviations');
// abbreviations(<query>)
// → {abbr, full} if found, null otherwise.


abbreviations('GLV');
abbreviations('g l v');
// { abbr: 'GLV', full: 'Green Leafy Vegetables' }

abbreviations('what is D.R.I.');
abbreviations('d. r. i. stands for?');
// { abbr: 'DRI', full: 'Dietary reference intake' }


// Note:
// Full stops must immediately follow character, if present.
// For single character abbreviations, full stop is mandatory.


// Additional methods:
// abbreviations.load(): load corpus now
// abbreviations.sql([table], [options]): sql statements
// abbreviations.csv(): path of csv file
```




[![ifct2017](http://ifct2017.com/ifct_2017.jpg)](https://www.npmjs.com/package/ifct2017)
> You can ask about composition of 528 key foods in India here: [ifct2017.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>
> Take a peek at the raw data here: [Document], [Webpage].

[ifct2017]: https://www.npmjs.com/package/ifct2017
[Indian Food Composition Tables 2017]: http://ifct2017.com/
[abbreviations]: https://github.com/ifct2017/abbreviations/blob/master/index.csv
[ifct2017.github.io]: https://ifct2017.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
[Document]: https://docs.google.com/spreadsheets/d/1ZTzOOj827HhsUWhdISh1lOJsOh-dvh3ORbAPs9XHI1Q/edit?usp=sharing
[Webpage]: https://docs.google.com/spreadsheets/d/e/2PACX-1vSPLlUvSc4OuO8cHl7kBntXJvolVWxklwZrbyNX0YfOaMMQpAi6iwf47If6wE1UyCTiBHUcx-UwLdb9/pubhtml
