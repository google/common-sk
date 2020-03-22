/** @module common-sk/modules/query
 *  @descripiton Utilities for working with URL query strings.
 */
/** fromParamSet encodes an object of the form:
 * <pre>
 * {
 *   a:["2", "4"],
 *   b:["3"]
 * }
 * </pre>
 *
 * to a query string like:
 *
 * <pre>
 * "a=2&a=4&b=3"
 * </pre>
 *
 * This function handles URI encoding of both keys and values.
 *
 * @param {Object} o The object to encode.
 * @returns {string}
 */
export declare function fromParamSet(o: {
    [key: string]: string[];
}): string;
/** toParamSet parses a query string into an object with
 *  arrays of values for the values. I.e.
 *
 * <pre>
 *   "a=2&b=3&a=4"
 * </pre>
 *
 * decodes to
 *
 * <pre>
 *   {
 *     a:["2", "4"],
 *     b:["3"],
 *   }
 * </pre>
 *
 * This function handles URI decoding of both keys and values.
 *
 * @param {string} s The query string to decode.
 * @returns {Object}
 */
export declare function toParamSet(s: string): {
    [key: string]: string[];
};
/** fromObject takes an object and encodes it into a query string.
 *
 * The reverse of this function is toObject.
 *
 * @param {Object} o The object to encode.
 * @return {string}
 */
export declare function fromObject(o: any): string;
/** toObject decodes a query string into an object.
 *
 * Uses the 'target' as a source for hinting on the types of the values.
 * For example:
 *
 * <pre>
 *   "a=2&b=true"
 * </pre>
 *
 * decodes to:
 *
 * <pre>
 *   {
 *     a: 2,
 *     b: true,
 *   }
 * </pre>
 *
 * When given a target of:
 *
 * <pre>
 *   {
 *     a: 1.0,
 *     b: false,
 *   }
 * </pre>
 *
 * Note that a target of {} would decode
 * the same query string into:
 *
 * <pre>
 *   {
 *     a: "2",
 *     b: "true",
 *   }
 * </pre>
 *
 * Only Number, String, Boolean, Object, and Array of String hints are supported.
 *
 * @param {string} s The query string.
 * @param {Object} target The object that contains the type hints.
 * @returns {Object}
 */
export declare function toObject(s: string, target: {
    [key: string]: any;
}): {
    [key: string]: number | boolean | string | any[] | object;
};
/** splitAmp returns the given query string as a newline
 *   separated list of key value pairs. If sepator is not
 *   provided newline will be used.
 *
 *   @param {string} [queryStr=''] A query string.
 *   @param {string} [separator='\n'] The separator to use when joining.
 *   @returns {string}
 */
export declare function splitAmp(queryStr?: string, separator?: string): string;
//# sourceMappingURL=query.d.ts.map