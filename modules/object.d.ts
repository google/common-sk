import { Hintable, HintableObject } from './hintable';
/** @method deepCopy
 *  @param object - The object to make a copy of.
 */
export declare function deepCopy<T>(o: T): T;
/** Returns true if a and b are equal, covers Boolean, Number, String and Arrays and Objects.
 *
 * @param a The Hintable type object to compare.
 * @param b The Hintable type object to compare.
 */
export declare function equals(a: Hintable, b: Hintable): boolean;
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
export declare function getDelta(o: HintableObject, d: HintableObject): HintableObject;
/** Returns a copy of object o with values from delta if they exist.
 *
 * @param {Object} delta - A delta object as returned from 'getDelta'.
 * @param {Object} o
 * @returns {Object}
 *
 */
export declare function applyDelta(delta: HintableObject, o: HintableObject): HintableObject;
//# sourceMappingURL=object.d.ts.map