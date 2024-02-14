<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterAcoth

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which iteratively computes the [inverse hyperbolic cotangent][@stdlib/math/base/special/acoth].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
iterAcoth = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-special-acoth@v0.2.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var iterAcoth = require( 'path/to/vendor/umd/math-iter-special-acoth/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-special-acoth@v0.2.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.iterAcoth;
})();
</script>
```

#### iterAcoth( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes the [inverse hyperbolic cotangent][@stdlib/math/base/special/acoth].

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var it = iterAcoth( array2iterator( [ 2.0, 1.0 ] ) );
// returns <Object>

var r = it.next().value;
// returns ~0.5493

r = it.next().value;
// returns Infinity

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The domain of inverse hyperbolic cotangent is restricted to `(-inf,-1]` and `[1,inf)`. If an iterated value is outside of the domain, the returned [iterator][mdn-iterator-protocol] returns `NaN`.
-   If an iterated value is non-numeric (including `NaN`), the returned [iterator][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-special-acoth@v0.2.0-umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create a seeded iterator for generating pseudorandom numbers:
var rand = uniform( 1.0, 10.0, {
    'seed': 1234,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterator:
var it = iterAcoth( rand );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/acoth`][@stdlib/math/base/special/acoth]</span><span class="delimiter">: </span><span class="description">compute the inverse hyperbolic cotangent.</span>
-   <span class="package-name">[`@stdlib/math-iter/special/acosh`][@stdlib/math/iter/special/acosh]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the hyperbolic arccosine of each iterated value.</span>
-   <span class="package-name">[`@stdlib/math-iter/special/acot`][@stdlib/math/iter/special/acot]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the inverse cotangent of each iterated value.</span>
-   <span class="package-name">[`@stdlib/math-iter/special/asinh`][@stdlib/math/iter/special/asinh]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the hyperbolic arcsine of each iterated value.</span>
-   <span class="package-name">[`@stdlib/math-iter/special/atanh`][@stdlib/math/iter/special/atanh]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the hyperbolic arctangent of each iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-special-acoth.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-special-acoth

[test-image]: https://github.com/stdlib-js/math-iter-special-acoth/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-iter-special-acoth/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-special-acoth/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-special-acoth?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-special-acoth.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-special-acoth/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-special-acoth/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-iter-special-acoth/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-iter-special-acoth/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-iter-special-acoth/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-iter-special-acoth/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-iter-special-acoth/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-iter-special-acoth/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-special-acoth/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/math/base/special/acoth]: https://github.com/stdlib-js/math-base-special-acoth/tree/umd

[@stdlib/math/iter/special/acosh]: https://github.com/stdlib-js/math-iter-special-acosh/tree/umd

[@stdlib/math/iter/special/acot]: https://github.com/stdlib-js/math-iter-special-acot/tree/umd

[@stdlib/math/iter/special/asinh]: https://github.com/stdlib-js/math-iter-special-asinh/tree/umd

[@stdlib/math/iter/special/atanh]: https://github.com/stdlib-js/math-iter-special-atanh/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
