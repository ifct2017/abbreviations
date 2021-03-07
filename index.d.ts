export interface Abbreviation {
  /** Abbreviation. */
  abbr: string,
  /** Full form. */
  full: string
}


/**
 * Loads corpus to enable queries.
 * [📦](https://www.npmjs.com/package/@ifct2017/abbreviations)
 * @returns corpus {key ⇒ {abbr, full}}
 */
export function load() : Map<string, Abbreviation>;


/**
 * Generates PostgreSQL statements for creating table w/ data.
 * [📦](https://www.npmjs.com/package/@ifct2017/abbreviations)
 * @returns CREATE TABLE, INSERT, CREATE VIEW, CREATE INDEX statements
 */
 export function sql(tab: string='abbreviations', opt: object={}) : string;


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
 * @returns found ⇒ {abbr, full}, else ⇒ null
 * @example
 * ```javascript
 * abbreviations('GLV');
 * abbreviations('g l v');
 * // { abbr: 'GLV', full: 'Green Leafy Vegetables' }
 *
 * abbreviations('what is D.R.I.');
 * abbreviations('d. r. i. stands for?');
 * // { abbr: 'DRI', full: 'Dietary reference intake' }
 *
 *
 * // Note:
 * // for single character abbreviations, full stop is mandatory
 * // full stops must immediately follow character, if present
 * ```
 */
function abbreviations(txt: string): Abbreviation | null;
export = abbreviations;
