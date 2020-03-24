export declare type Hintable = number | boolean | string | any[] | object;
export declare type HintableObject = {
    [key: string]: Hintable;
};
/** @method deepCopy
 *  @param {Object} object - The object to make a copy of.
 *  @returns {Object}
 */
export declare function deepCopy(o: any): any;
/** Returns true if a and b are equal, covers Boolean, Number, String and Arrays and Objects.
 *
 * @param {(number|boolean|string|Array|Object)} a
 * @param {(number|boolean|string|Array|Object)} b
 * @returns {boolean} True if the arguments are equal.
 */
export declare function equals(a: Hintable, b: Hintable): boolean | undefined;
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