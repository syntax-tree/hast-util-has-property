# hast-util-has-property [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check whether a [HAST node][hast] is an [element][] with a [property][].

## Installation

[npm][]:

```bash
npm install hast-util-has-property
```

## Usage

Dependencies:

```javascript
var has = require('hast-util-has-property');

has({type: 'text', value: 'alpha'}, 'bravo'); //=> false

has({
  type: 'element',
  tagName: 'div',
  properties: {id: 'bravo'},
  children: []
}, 'className'); //=> false

has({
  type: 'element',
  tagName: 'div',
  properties: {id: 'charlie'},
  children: []
}, 'id'); // => true
```

## API

### `hasProperty(node, name)`

Check if `node` has a set `name` property.

###### Parameters

*   `node` ([`Node`][node], optional) — Node to check.
*   `name` ([`string`][property]) - Property name to check.

###### Returns

`boolean` — Whether `node` is an [`Element`][element] with a property
by `name`.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/hast-util-has-property.svg

[build-page]: https://travis-ci.org/wooorm/hast-util-has-property

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/hast-util-has-property.svg

[coverage-page]: https://codecov.io/github/wooorm/hast-util-has-property?branch=master

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[hast]: https://github.com/wooorm/hast

[node]: https://github.com/wooorm/hast#node

[element]: https://github.com/wooorm/hast#element

[property]: https://github.com/wooorm/hast#property-names
