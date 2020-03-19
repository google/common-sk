/** Returns true if a and b are equal, covers Boolean, Number, String and Arrays and Objects.
 *
 * @param {(number|boolean|string|Array|Object)} a
 * @param {(number|boolean|string|Array|Object)} b
 * @returns {boolean} True if the arguments are equal.
 */
export function equals(a: string | number | boolean | Object | any[], b: string | number | boolean | Object | any[]): boolean;
/** Returns an object with only values that are in o that are different from d.
 *
 * Only works shallowly, i.e. only diffs on the attributes of
 * o and d, and only for the types that equals() supports.
 *
 * @example
 * // Returns {a:2}
 * getDelta({a:2, b:"foo"}, {a:1, b:"foo", c:3.14})
 *
 * @param {Object} o
 * @param {Object} d
 * @returns {Object}
 *
 */
export function getDelta(o: Object, d: Object): Object;
/** Returns a copy of object o with values from delta if they exist.
 *
 * @param {Object} delta - A delta object as returned from 'getDelta'.
 * @param {Object} o
 * @returns {Object}
 *
 */
export function applyDelta(delta: Object, o: Object): Object;
export function deepCopy(o: any): Object;
//# sourceMappingURL=object.d.ts.map