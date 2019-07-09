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

// This is a common configuration for running jsdoc
// over modules, including custom elements. To use
// this, just create a jsdoc.config.js file in your
// application directory and populate it with:
//
//     module.exports = require('../common/jsdoc.common.js');
//
// Add jsdoc via npm:
//
//   $ npm add jsdoc
//
// Then add this to your Makefile:
//
//     docs:
//         npx jsdoc -c jsdoc.config.js
//
// This config loads the element plugin which adds support
// for @evt and @attr tags in documentation.
//
// It also presumes the modules exists under the './modules' directory.
//
// Docs will appear in the ./out directory, which should be added
// to .gitignore.
const path = require('path');

module.exports = {
  plugins: [path.resolve(__dirname, './plugins/element')],
  source: {
    include: ['./modules'],
    includePattern: '.+\\.js$',
  },
  opts: {
    recurse: true,
  },
};
