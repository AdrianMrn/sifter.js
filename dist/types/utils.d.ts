/**
 * A property getter resolving dot-notation
 * @param  {Object}  obj     The root object to fetch property on
 * @param  {String}  name    The optionally dotted property name to fetch
 * @return {Object}          The resolved property value
 */
export declare const getAttr: (obj: {
    [key: string]: any;
}, name: string) => any;
/**
 * A property getter resolving dot-notation
 * @param  {Object}  obj     The root object to fetch property on
 * @param  {String}  name    The optionally dotted property name to fetch
 * @return {Object}          The resolved property value
 */
export declare const getAttrNesting: (obj: {
    [key: string]: any;
}, name: string) => {
    [key: string]: any;
} | undefined;
/**
 * Calculates how close of a match the
 * given value is against a search token.
 *
 */
export declare const scoreValue: (value: string, token: any, weight: number) => number;
/**
 *
 * https://stackoverflow.com/questions/63006601/why-does-u-throw-an-invalid-escape-error
 */
export declare const escape_regex: (str: string) => string;
/**
 * Cast object property to an array if it exists and has a value
 *
 */
export declare const propToArray: (obj: {
    [key: string]: any;
}, key: string) => void;
/**
 * Iterates over arrays and hashes.
 *
 * ```
 * iterate(this.items, function(item, id) {
 *    // invoked for each item
 * });
 * ```
 *
 */
export declare const iterate: (object: [] | {
    [key: string]: any;
}, callback: (value: any, key: number | string) => any) => void;
export declare const cmp: (a: number | string, b: number | string) => 1 | -1 | 0;