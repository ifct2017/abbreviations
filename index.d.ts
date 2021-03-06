export interface AbbreviationRow {
  /** Abbreviation. */
  abbr: string,
  /** Full form. */
  full: string
};


/**
 * Loads corpus to enable queries.
 * [📦](https://www.npmjs.com/package/@ifct2017/abbreviations)
 * @returns corpus {key => {abbr, full}}
 */
export function load() : Map<string, AbbreviationRow>;


/**
 * Generates PostgreSQL statements for creating table w/ data.
 * [📦](https://www.npmjs.com/package/@ifct2017/abbreviations)
 * @returns CREATE TABLE, INSERT, CREATE VIEW, CREATE INDEX statements
 */
 export function sql() : string;


/**
 * Gives path of CSV data file.
 * [📦](https://www.npmjs.com/package/@ifct2017/abbreviations)
 * @returns .../index.csv
 */
 export function csv() : string;


/**
 * Finds matching full form of an abbreviation query.
 * [📦](https://www.npmjs.com/package/@ifct2017/abbreviations)
 * @param txt abbreviation query
 * @returns found => {abbr, full}, else => null
 * @example
 * ```javascript
 * abbreviations.load();
 * /// load corpus first
 *
 * abbreviations('GLV');
 * abbreviations('g l v');
 * // Green Leafy Vegetables
 *
 * abbreviations('what is D.R.I.');
 * abbreviations('d. r. i. stands for?');
 * /// full stops must immediately follow character, if present
 * /// for single character abbreviations, full stop is mandatory
 * // Dietary reference intake
 * ```
 */
function abbreviations(txt: string): AbbreviationRow | null;
export = abbreviations;
