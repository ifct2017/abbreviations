Full forms of [abbreviations] used in the original book.

> This is part of package [ifct2017].<br>
> Online database: [ifct2017.github.io].

<br>

```javascript
const abbreviations = require('@ifct2017/abbreviations');
// abbreviations(query)
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
```

```javascript
// Additional methods:
abbreviations.load() // → corpus
abbreviations.sql([table], [options]) // → sql statements
abbreviations.csv() // → path of csv file
```

<br>
<br>

[![](https://i.imgur.com/D5UYmbD.jpg)](https://www.npmjs.com/package/ifct2017)

> Data was obtained from the book [Indian Food Composition Tables 2017].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>
> Take a peek at the raw data here: [Document], [Webpage].

[ifct2017]: https://www.npmjs.com/package/ifct2017
[Indian Food Composition Tables 2017]: http://ifct2017.com/
[abbreviations]: https://github.com/ifct2017/abbreviations/blob/master/index.csv
[ifct2017.github.io]: https://ifct2017.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
[Document]: https://docs.google.com/spreadsheets/d/1ZTzOOj827HhsUWhdISh1lOJsOh-dvh3ORbAPs9XHI1Q/edit?usp=sharing
[Webpage]: https://docs.google.com/spreadsheets/d/e/2PACX-1vSPLlUvSc4OuO8cHl7kBntXJvolVWxklwZrbyNX0YfOaMMQpAi6iwf47If6wE1UyCTiBHUcx-UwLdb9/pubhtml
