// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/** @module common-sk/modules/object
 *  @description Utility functions for dealing with Objects.
 */
import { fromObject } from './query';

// Hintable is the set of types that we can de/serialize with hints.
export type Hintable = number | boolean | string | any[] | object;

// HintableObject is any object with strings for keys and only contains Hintable
// values.
export type HintableObject = { [key: string]: Hintable };

/** @method deepCopy
 *  @param {Object} object - The object to make a copy of.
 *  @returns {Object}
 */
export function deepCopy(o: any): any {
  return JSON.parse(JSON.stringify(o));
}

/** Returns true if a and b are equal, covers Boolean, Number, String and Arrays and Objects.
 *
 * @param {(number|boolean|string|Array|Object)} a
 * @param {(number|boolean|string|Array|Object)} b
 * @returns {boolean} True if the arguments are equal.
 */
export function equals(a: Hintable, b: Hintable) {
  if (typeof a !== typeof b) {
    return false;
  }
  const ta = typeof a;
  if (ta === 'string' || ta === 'boolean' || ta === 'number') {
    return a === b;
  }
  if (ta === 'object') {
    if (Array.isArray(ta)) {
      return JSON.stringify(a) === JSON.stringify(b);
    }
    return fromObject(a) === fromObject(b);
  }
}

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
export function getDelta(o: HintableObject, d: HintableObject) {
  const ret: HintableObject = {};
  Object.keys(o).forEach(key => {
    if (!equals(o[key], d[key])) {
      ret[key] = o[key];
    }
  });
  return ret;
}

/** Returns a copy of object o with values from delta if they exist.
 *
 * @param {Object} delta - A delta object as returned from 'getDelta'.
 * @param {Object} o
 * @returns {Object}
 *
 */
export function applyDelta(delta: HintableObject, o: HintableObject) {
  const ret: HintableObject = {};
  Object.keys(o).forEach(key => {
    if (delta.hasOwnProperty(key)) {
      ret[key] = deepCopy(delta[key]);
    } else {
      ret[key] = deepCopy(o[key]);
    }
  });
  return ret;
}