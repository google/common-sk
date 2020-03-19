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
import * as human from './human';
const assert = chai.assert;
describe('The human functions', function () {
    function testPad() {
        let testCases = [
            [0, 0, '0'],
            [1, 1, '1'],
            [10, 1, '10'],
            [10, 2, '10'],
            [10, 3, '010'],
            [31558150, 8, '31558150'],
            [31558150, 9, '031558150']
        ];
        for (let testCase of testCases) {
            assert.equal(human.pad(testCase[0], testCase[1]), testCase[2]);
        }
    }
    it('should return padded integers from pad', testPad);
    function testStrDuration() {
        let testCases = [
            [0, '  0s'],
            [1, '  1s'],
            [-1, '  1s'],
            [2, '  2s'],
            [10, ' 10s'],
            [-30, ' 30s'],
            [59, ' 59s'],
            [60, '  1m'],
            [-61, '  1m  1s'],
            [123, '  2m  3s'],
            [3599, ' 59m 59s'],
            [3600, '  1h'],
            [3601, '  1h  1s'],
            [3659, '  1h 59s'],
            [3660, '  1h  1m'],
            [3661, '  1h  1m  1s'],
            [86399, ' 23h 59m 59s'],
            [86400, '  1d'],
            [86401, '  1d  1s'],
            [604799, '  6d 23h 59m 59s'],
            [604800, '  1w'],
            [31558150, ' 52w  1d  6h  9m 10s']
        ];
        for (let testCase of testCases) {
            assert.equal(human.strDuration(testCase[0]), testCase[1]);
        }
    }
    it('should return human-readable duration from strDuration', testStrDuration);
    function testDiffDate() {
        let now = Date.now();
        let testCases = [
            [0, '0s'],
            [1, '0s'],
            [499, '0s'],
            [500, '1s'],
            [-1000, '1s'],
            [1000, '1s'],
            [2000, '2s'],
            [9800, '10s'],
            [-10000, '10s'],
            [-30000, '30s'],
            [59000, '59s'],
            [59499, '59s'],
            [59500, '1m'],
            [60000, '1m'],
            [-61000, '1m'],
            [123000, '2m'],
            [3569000, '59m'],
            [3570000, '1h'],
            [3600000, '1h'],
            [-3601000, '1h'],
            [3659000, '1h'],
            [-3660000, '1h'],
            [5399000, '1h'],
            [5400000, '2h'],
            [-84599000, '23h'],
            [-84600000, '1d'],
            [-86399000, '1d'],
            [86400000, '1d'],
            [-561599000, '6d'],
            [-561600000, '1w'],
            [604800000, '1w'],
            [31558150000, '52w'] // 52w 1d 06h 09m 10s
        ];
        for (let testCase of testCases) {
            let diffMs = testCase[0];
            let expected = testCase[1];
            let ms = now + diffMs;
            assert.equal(human.diffDate(ms), expected, 'Input is ' + ms + ', now is ' + now);
            assert.equal(human.diffDate(new Date(ms).toISOString()), expected, 'Input is ' +
                new Date(ms).toISOString() +
                ', now is ' +
                new Date().toISOString());
        }
    }
    it('should return human-readable duration from diffDate', testDiffDate);
    function testBytes() {
        let testBytes = [
            [0, '0 B'],
            [1, '1 B'],
            [499, '499 B'],
            [500, '500 B'],
            [1000, '1000 B'],
            [1234, '1 KB'],
            [2000, '2 KB'],
            [9727, '9 KB'],
            [9728, '10 KB'],
            [30000, '29 KB'],
            [1024000, '1000 KB'],
            [1048500, '1 MB'],
            [1048576, '1 MB'],
            [1048577, '1 MB'],
            [300000000, '286 MB'],
            [1072693248, '1023 MB'],
            [1073741300, '1 GB'],
            [1073741824, '1 GB'],
            [1073741825, '1 GB'] // 1 GB 000 MB 000 KB 001 B
        ];
        for (let tb of testBytes) {
            let b = tb[0];
            let expected = tb[1];
            assert.equal(human.bytes(b), expected, 'Input is ' + b + ', Unit is bytes');
        }
        let testMB = [
            [0, '0 B'],
            [1, '1 MB'],
            [499, '499 MB'],
            [500, '500 MB'],
            [1000, '1000 MB'],
            [1234, '1 GB'],
            [2000, '2 GB'],
            [9727, '9 GB'],
            [9728, '10 GB'],
            [30000, '29 GB'],
            [1024000, '1000 GB'],
            [1048500, '1 TB'],
            [1048576, '1 TB'],
            [1048577, '1 TB'],
            [300000000, '286 TB'],
            [1072693248, '1023 TB'],
            [1073741300, '1 PB'],
            [1073741824, '1 PB'],
            [1073741825, '1 PB'] // 1 PB 000 TB 000 GB 001 MB
        ];
        for (let tm of testMB) {
            let b = tm[0];
            let expected = tm[1];
            assert.equal(human.bytes(b, human.MB), expected, 'Input is ' + b + ', Unit is Megabytes');
        }
    }
    it('should return human-readable bytes from bytes', testBytes);
});
//# sourceMappingURL=human_test.js.map