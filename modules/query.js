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
export function fromParamSet(o) {
    if (!o) {
        return '';
    }
    const ret = [];
    const keys = Object.keys(o).sort();
    keys.forEach(key => {
        o[key].forEach(value => {
            ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        });
    });
    return ret.join('&');
}
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
export function toParamSet(s) {
    s = s || '';
    const ret = {};
    const vars = s.split('&');
    for (const v of vars) {
        const pair = v.split('=', 2);
        if (pair.length === 2) {
            const key = decodeURIComponent(pair[0]);
            const value = decodeURIComponent(pair[1]);
            if (ret.hasOwnProperty(key)) {
                ret[key].push(value);
            }
            else {
                ret[key] = [value];
            }
        }
    }
    return ret;
}
/** fromObject takes an object and encodes it into a query string.
 *
 * The reverse of this function is toObject.
 *
 * @param {Object} o The object to encode.
 * @return {string}
 */
export function fromObject(o) {
    const ret = [];
    Object.keys(o)
        .sort()
        .forEach(key => {
        if (Array.isArray(o[key])) {
            o[key].forEach((value) => {
                ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
            });
        }
        else if (typeof o[key] === 'object') {
            ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(fromObject(o[key]))}`);
        }
        else {
            ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(o[key])}`);
        }
    });
    return ret.join('&');
}
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
export function toObject(s, target) {
    target = target || {};
    const ret = {};
    const vars = s.split('&');
    for (const v of vars) {
        const pair = v.split('=', 2);
        if (pair.length === 2) {
            const key = decodeURIComponent(pair[0]);
            const value = decodeURIComponent(pair[1]);
            if (target.hasOwnProperty(key)) {
                switch (typeof target[key]) {
                    case 'boolean':
                        ret[key] = value === 'true';
                        break;
                    case 'number':
                        ret[key] = Number(value);
                        break;
                    case 'object': // Arrays report as 'object' to typeof.
                        if (Array.isArray(target[key])) {
                            const r = ret[key] || [];
                            r.push(value);
                            ret[key] = r;
                        }
                        else {
                            ret[key] = toObject(value, target[key]);
                        }
                        break;
                    case 'string':
                        ret[key] = value;
                        break;
                    default:
                        ret[key] = value;
                }
            }
            else {
                ret[key] = value;
            }
        }
    }
    return ret;
}
/** splitAmp returns the given query string as a newline
 *   separated list of key value pairs. If sepator is not
 *   provided newline will be used.
 *
 *   @param {string} [queryStr=''] A query string.
 *   @param {string} [separator='\n'] The separator to use when joining.
 *   @returns {string}
 */
export function splitAmp(queryStr = '', separator = '\n') {
    return queryStr.split('&').join(separator);
}
//# sourceMappingURL=query.js.map