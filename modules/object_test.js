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
import * as object from './object';
const assert = chai.assert;
describe('object functions', () => {
    function testGetDelta() {
        const test = function (o, d, expected) {
            assert.deepEqual(object.getDelta(o, d), expected);
        };
        test({}, {}, {});
        test({ a: 'foo' }, { a: 'foo' }, {});
        const first = {}; // Ensure getDelta does not modify its arguments.
        test(first, { a: 'foo' }, {});
        assert.deepEqual(first, {});
        const second = {}; // Ensure getDelta does not modify its arguments.
        test({ a: 'foo' }, second, { a: 'foo' });
        assert.deepEqual(second, {});
        test({ a: 'foo' }, { a: 'bar' }, { a: 'foo' });
        test({ a: 'foo', b: 'bar' }, { a: true, c: 'bar' }, { a: 'foo', b: 'bar' });
        test({ a: undefined, b: NaN, c: null }, { a: true, b: true, c: true }, { a: undefined, b: NaN, c: null });
        test({ a: undefined, b: NaN, c: false }, { a: null, b: null, c: null }, { a: undefined, b: NaN, c: false });
    }
    function testApplyDelta() {
        const test = function (delta, o, expected) {
            assert.deepEqual(object.applyDelta(delta, o), expected);
        };
        test({}, {}, {});
        test({}, { a: 'foo' }, { a: 'foo' });
        const first = { a: 'bar' }; // Ensure applyDelta does not modify its arguments.
        test(first, { a: 'foo' }, { a: 'bar' });
        assert.deepEqual(first, { a: 'bar' });
        const second = { a: 'bar' }; // Ensure applyDelta does not modify its arguments.
        test({ a: 'foo' }, second, { a: 'foo' });
        assert.deepEqual(second, { a: 'bar' });
        test({ a: 'foo' }, { a: 'bar', b: 'baz' }, { a: 'foo', b: 'baz' });
        test({ a: 'foo', b: 'baz' }, { a: 'bar' }, { a: 'foo' });
        test({ a: 'foo', b: 'bar' }, { a: true, c: 'bar' }, { a: 'foo', c: 'bar' });
        test({ b: NaN, c: false }, { a: null, b: null, c: null }, { a: null, b: null, c: false });
    }
    function testEquals() {
        assert.isTrue(object.equals(1, 1));
        assert.isTrue(object.equals([1, 2], [1, 2]));
        assert.isTrue(object.equals([], []));
        assert.isFalse(object.equals([1], []));
    }
    it('should be able get differences and apply differences', () => {
        testGetDelta();
        testApplyDelta();
        testEquals();
    });
});
//# sourceMappingURL=object_test.js.map