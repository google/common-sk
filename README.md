**THIS REPOSITORY IS ARCHIVED**. Code moved to the Skia Infrastructure repository
[here](https://skia.googlesource.com/buildbot/+/28404b632bd4830fe00185f5db86cfad4cc63abb/infra-sk/modules/)
(see [CL](https://skia-review.googlesource.com/c/buildbot/+/653997)).

## common-sk

This is the common set of JS libraries used by Skia Infrastructure.

See [A la carte Web Development](https://bitworking.org/news/2018/03/a-la-carte-web-development)
for more background on pulito and how it fits into "A la carte" web
development.

![jstest](https://github.com/google/common-sk/workflows/jstest/badge.svg)

## Installation

If loaded via npm then importing will just work, i.e.:

    $ npm i common-sk

Then from within your code:

    import { $$ } from 'common-sk/modules/dom'

## Documentation

[jsdoc.skia.org](https://jsdoc.skia.org/) contains the
[jsdoc](http://usejsdoc.org/) generated documentation for all of the code.

## Disclaimer

This is not an officially supported Google product.
